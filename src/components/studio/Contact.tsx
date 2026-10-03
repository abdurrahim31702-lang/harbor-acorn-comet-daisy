import { useMemo, useState, type FormEvent } from "react";
import {
  budgetOptions,
  featureOptions,
  websiteTypes,
} from "@/lib/content";
import { buildWhatsappUrl, openWhatsapp } from "@/lib/studio-config";
import { cn } from "@/lib/utils";
import { Input, Label, Textarea } from "@/components/ui/input";
import { MagneticButton, Reveal, SectionLabel } from "./primitives";

function Chip({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "min-h-10 rounded-full border px-3.5 text-xs transition-colors duration-150",
        active
          ? "border-fg bg-fg text-bg"
          : "border-line text-muted hover:border-line-strong hover:text-fg",
      )}
    >
      {children}
    </button>
  );
}

export function Contact() {
  const [name, setName] = useState("");
  const [type, setType] = useState<string>(websiteTypes[0]);
  const [budget, setBudget] = useState<string>(budgetOptions[3]);
  const [features, setFeatures] = useState<string[]>([]);
  const [description, setDescription] = useState("");

  const brief = useMemo(() => {
    const lines = [
      name && `Project: ${name}`,
      `Type: ${type}`,
      `Budget: ${budget}`,
      features.length ? `Features: ${features.join(", ")}` : "",
      description && `Notes: ${description}`,
    ].filter(Boolean);
    return lines.join("\n");
  }, [name, type, budget, features, description]);

  function toggleFeature(f: string) {
    setFeatures((prev) =>
      prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f],
    );
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    openWhatsapp(brief);
  }

  return (
    <section
      id="contact"
      className="relative z-10 px-5 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel index="06">Contact</SectionLabel>
          <h2 className="display max-w-3xl text-4xl leading-[1.05] md:text-7xl">
            Have an idea?
            <span className="mt-2 block italic">Let's build it.</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">
            Tell us what you're imagining. We'll figure out what it
            takes to turn it into something real.
          </p>
        </Reveal>

        <div id="start" className="mt-16 scroll-mt-28">
          <Reveal>
            <form
              onSubmit={submit}
              className="glass-panel rounded-3xl p-6 md:p-10"
            >
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <Label htmlFor="project-name">Business / project name</Label>
                  <Input
                    id="project-name"
                    name="project"
                    autoComplete="organization"
                    placeholder="The thing you want to exist"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <p className="caps mb-2 text-muted">Website type</p>
                  <div className="flex flex-wrap gap-2">
                    {websiteTypes.map((opt) => (
                      <Chip
                        key={opt}
                        active={type === opt}
                        onClick={() => setType(opt)}
                      >
                        {opt}
                      </Chip>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="caps mb-2 text-muted">Approximate budget</p>
                  <div className="flex flex-wrap gap-2">
                    {budgetOptions.map((opt) => (
                      <Chip
                        key={opt}
                        active={budget === opt}
                        onClick={() => setBudget(opt)}
                      >
                        {opt}
                      </Chip>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="caps mb-2 text-muted">Desired features</p>
                  <div className="flex flex-wrap gap-2">
                    {featureOptions.map((opt) => (
                      <Chip
                        key={opt}
                        active={features.includes(opt)}
                        onClick={() => toggleFeature(opt)}
                      >
                        {opt}
                      </Chip>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <Label htmlFor="notes">Project description</Label>
                  <Textarea
                    id="notes"
                    name="description"
                    placeholder="What is it, who is it for, and what should it do?"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <MagneticButton type="submit">
                  Start a project on WhatsApp
                </MagneticButton>
                <a
                  href={buildWhatsappUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted underline-offset-4 hover:text-fg hover:underline"
                >
                  Or just say hello
                </a>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
