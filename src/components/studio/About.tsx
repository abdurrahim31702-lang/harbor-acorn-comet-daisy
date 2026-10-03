import { Reveal, SectionLabel } from "./primitives";

export function About() {
  return (
    <section id="about" className="relative z-10 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel index="05">About</SectionLabel>
          <h2 className="display max-w-3xl text-4xl leading-[1.05] md:text-6xl">
            A small, dedicated studio obsessed with turning ideas into
            experiences people remember.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
              <p>
                We are not a floor of account managers, and we do not pretend to
                be a large agency. AIRO Studio is a compact team that designs,
                builds, tests, and ships — then goes back in to make it better.
              </p>
              <p>
                The work is the proof. Curiosity, craft, and follow-through.
                We stay close to the details because that is where websites
                either feel considered or feel like a template.
              </p>
              <p>
                We keep learning in public: new materials, new interaction,
                better performance, quieter type. Hungry, not theatrical.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ul className="space-y-4 border-t border-line pt-6">
              {[
                ["Dedication", "We finish. Then we refine."],
                ["Craft", "Type, space, motion — only as much as it needs."],
                ["Curiosity", "We experiment so client work can go further."],
                ["Clarity", "If we don't know, we say so."],
              ].map(([title, body]) => (
                <li key={title} className="flex gap-5 border-b border-line pb-4">
                  <span className="w-28 shrink-0 text-sm text-fg">{title}</span>
                  <span className="text-sm text-muted">{body}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
