import { useEffect } from "react";
import { live, SECTION_INDEX } from "@/lib/live-state";
import { useStudio } from "@/lib/studio-store";

export function useSectionSpy(ids: readonly string[]) {
  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (vis?.target.id) {
          useStudio.getState().setSection(vis.target.id);
          live.section = SECTION_INDEX[vis.target.id] ?? 0;
        }
      },
      { threshold: [0.18, 0.35, 0.55], rootMargin: "-18% 0px -38% 0px" },
    );

    els.forEach((el) => io.observe(el));

    const onScroll = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      live.progress = max > 0 ? window.scrollY / max : 0;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [ids]);
}

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
}
