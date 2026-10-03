import { services } from "@/lib/content";
import { live } from "@/lib/live-state";
import { useStudio } from "@/lib/studio-store";
import { cn } from "@/lib/utils";
import { Reveal, SectionLabel } from "./primitives";

export function Services() {
  const serviceId = useStudio((s) => s.serviceId);
  const setServiceId = useStudio((s) => s.setServiceId);
  const active = services.find((s) => s.id === serviceId) ?? services[0];

  function select(id: string, index: number) {
    setServiceId(id);
    live.service = index;
  }

  return (
    <section id="services" className="relative z-10 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel index="02">Services</SectionLabel>
          <h2 className="display max-w-2xl text-4xl leading-tight md:text-6xl">
            What we make — and how far we can take it.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-16">
          <ul className="divide-y divide-line border-y border-line">
            {services.map((service, i) => {
              const on = service.id === serviceId;
              return (
                <li key={service.id}>
                  <button
                    type="button"
                    onMouseEnter={() => select(service.id, i)}
                    onFocus={() => select(service.id, i)}
                    onClick={() => select(service.id, i)}
                    className={cn(
                      "flex w-full min-h-14 items-baseline justify-between gap-4 py-4 text-left transition-colors duration-200",
                      on ? "text-fg" : "text-muted hover:text-fg",
                    )}
                  >
                    <span className="display text-2xl md:text-3xl">
                      {service.name}
                    </span>
                    <span className="font-mono text-[0.65rem] tabular-nums text-subtle">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="glass-panel rounded-3xl p-7 md:p-9">
              <p className="caps text-accent">{active.name}</p>
              <p className="mt-4 text-lg leading-relaxed text-fg md:text-xl">
                {active.brief}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                {active.detail}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
