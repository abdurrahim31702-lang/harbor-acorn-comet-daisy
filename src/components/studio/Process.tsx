import { processSteps } from "@/lib/content";
import { Reveal, SectionLabel } from "./primitives";

export function Process() {
  return (
    <section id="process" className="relative z-10 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel index="04">Process</SectionLabel>
          <h2 className="display max-w-2xl text-4xl leading-tight md:text-6xl">
            A clear path from idea to something people can use.
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted md:text-base">
            No theatrical timelines. We move with care, show the work as it
            exists, and stay with it until it is ready for real people.
          </p>
        </Reveal>

        <ol className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, i) => (
            <li key={step.n} className="bg-bg p-7 md:p-9">
              <Reveal delay={i * 50}>
                <p className="font-mono text-xs tabular-nums text-accent">
                  {step.n}
                </p>
                <h3 className="display mt-4 text-3xl">{step.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.text}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
