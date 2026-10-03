import { pricing } from "@/lib/content";
import { Reveal, SectionLabel } from "./primitives";

export function Pricing() {
  return (
    <section className="relative z-10 px-5 py-24 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel index="03">Pricing</SectionLabel>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="display max-w-xl text-4xl leading-tight md:text-5xl">
              Starting ranges. Honest, so you can plan.
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Final pricing depends on scope, features, complexity and project
              requirements. Treat these as a guide — then talk to us.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {pricing.map((item, i) => (
            <Reveal key={item.id} delay={i * 70}>
              <article className="flex h-full flex-col justify-between rounded-3xl border border-line bg-fg/3 p-6 md:p-8">
                <p className="caps text-subtle">{item.name}</p>
                <p className="display mt-6 text-3xl tabular-nums md:text-4xl">
                  {item.range}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {item.note}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
