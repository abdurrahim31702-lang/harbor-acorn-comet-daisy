import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { kindLabel, projects } from "@/lib/content";
import { playClick } from "@/lib/sound";
import { Reveal, SectionLabel } from "./primitives";

export function Work() {
  return (
    <section id="work" className="relative z-10 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel index="01">Work</SectionLabel>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="display max-w-xl text-4xl leading-tight md:text-6xl">
              Selected work, and a few things we made to think with.
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              One live client project. The rest are clearly marked concepts,
              experiments, and prototypes — not dressed up as case studies they
              are not.
            </p>
          </div>
        </Reveal>

        <div className="work-track mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 md:gap-7">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80} className="snap-start">
              <Link
                to="/work/$slug"
                params={{ slug: project.slug }}
                onClick={() => playClick()}
                className="group relative block w-[min(84vw,28rem)] shrink-0 md:w-[32rem]"
              >
                <div className="relative aspect-video overflow-hidden rounded-xl bg-surface">
                  <img
                    src={project.cover}
                    alt={project.coverAlt}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                  <div className="work-scrim absolute inset-0" />
                  <span className="caps absolute top-4 left-4 rounded-full border border-line bg-bg/55 px-3 py-1 text-fg backdrop-blur-md">
                    {kindLabel[project.kind]}
                  </span>
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="caps text-subtle">{project.category}</p>
                    <h3 className="display mt-1 text-3xl">{project.name}</h3>
                  </div>
                  <ArrowUpRight
                    className="mt-2 size-5 shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.4}
                  />
                </div>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                  {project.summary}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
