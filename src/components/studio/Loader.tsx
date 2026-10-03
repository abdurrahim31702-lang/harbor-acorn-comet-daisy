import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { useStudio } from "@/lib/studio-store";

export function Loader() {
  const ready = useStudio((s) => s.ready);
  const setReady = useStudio((s) => s.setReady);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const delay = reduced ? 80 : 1200;
    const t = window.setTimeout(() => setReady(true), delay);
    return () => window.clearTimeout(t);
  }, [setReady]);

  return (
    <div
      className={cn(
        "z-loader fixed inset-0 flex flex-col items-center justify-center bg-bg transition-opacity duration-500 ease-out",
        ready ? "pointer-events-none opacity-0" : "opacity-100",
      )}
      aria-hidden={ready}
    >
      <p className="display text-5xl tracking-tight md:text-6xl">AIRO</p>
      <div className="mt-6 h-px w-28 overflow-hidden bg-line">
        <div className="loader-line h-full w-full bg-accent" />
      </div>
    </div>
  );
}
