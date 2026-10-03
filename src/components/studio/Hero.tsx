import { ArrowDownRight } from "lucide-react";
import { MagneticButton } from "./primitives";
import { scrollToId } from "./use-section-spy";
import { useStudio } from "@/lib/studio-store";

export function Hero() {
  const ready = useStudio((s) => s.ready);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-end px-5 pb-16 pt-28 md:justify-center md:px-10 md:pb-24 md:pt-24"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className={ready ? "" : "opacity-0"}>
          <p className="hero-line caps text-accent">AIRO Studio</p>
          <h1 className="hero-title mt-5 max-w-5xl">
            <span className="hero-line block">Digital experiences,</span>
            <span className="hero-line mt-1 block italic text-fg/80">
              beyond the ordinary.
            </span>
          </h1>
          <p className="hero-line mt-8 max-w-md text-base leading-relaxed text-muted md:text-lg">
            We design and build digital experiences that turn ideas into
            something people can actually use — and remember.
          </p>
          <div className="hero-line mt-10 flex flex-wrap items-center gap-3">
            <MagneticButton onClick={() => scrollToId("start")}>
              Start a project
            </MagneticButton>
            <button
              type="button"
              onClick={() => scrollToId("work")}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-5 text-sm text-fg hover:border-line-strong"
            >
              See the work
              <ArrowDownRight className="size-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
