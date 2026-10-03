import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProject, kindLabel, nextProject } from "@/lib/content";
import { Nav } from "@/components/studio/Nav";
import { Footer } from "@/components/studio/Footer";
import { MagneticButton } from "@/components/studio/primitives";
import { playClick } from "@/lib/sound";
import { openWhatsapp } from "@/lib/studio-config";

function WorkNotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-4 bg-bg px-6 text-center text-fg">
      <p className="display text-5xl">That project isn't here.</p>
      <Link to="/" hash="work" className="text-sm text-muted hover:text-fg">
        Back to work
      </Link>
    </main>
  );
}

export const Route = createFileRoute("/work/$slug")({
  component: CaseStudy,
  notFoundComponent: WorkNotFound,
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project, next: nextProject(params.slug) };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.project.name ?? "Work"} — AIRO Studio`,
      },
      {
        name: "description",
        content: loaderData?.project.summary ?? "Selected work from AIRO Studio.",
      },
    ],
  }),
});

function CaseStudy() {
  const { project, next } = Route.useLoaderData();

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Nav home={false} />
      <main id="main" className="relative z-10 px-5 pt-28 pb-24 md:px-10">
        <div className="mx-auto max-w-5xl">
          <Link
            to="/"
            hash="work"
            onClick={() => playClick()}
            className="inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-fg"
          >
            <ArrowLeft className="size-4" strokeWidth={1.5} />
            All work
          </Link>

          <p className="caps mt-10 text-accent">
            {kindLabel[project.kind]} · {project.category}
          </p>
          <h1 className="display mt-3 text-5xl leading-none md:text-7xl">
            {project.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {project.summary}
          </p>

          <div className="mt-10 overflow-hidden rounded-3xl bg-surface">
            <img
              src={project.cover}
              alt={project.coverAlt}
              className="aspect-video h-auto w-full object-cover"
            />
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-2">
            <article>
              <h2 className="caps text-subtle">Challenge</h2>
              <p className="mt-3 text-base leading-relaxed text-fg/90">
                {project.challenge}
              </p>
            </article>
            <article>
              <h2 className="caps text-subtle">Design direction</h2>
              <p className="mt-3 text-base leading-relaxed text-fg/90">
                {project.direction}
              </p>
            </article>
            <article>
              <h2 className="caps text-subtle">Experience</h2>
              <p className="mt-3 text-base leading-relaxed text-fg/90">
                {project.experience}
              </p>
            </article>
            <article>
              <h2 className="caps text-subtle">Goal</h2>
              <p className="mt-3 text-base leading-relaxed text-fg/90">
                {project.goal}
              </p>
            </article>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-4">
            <MagneticButton onClick={() => openWhatsapp(`About: ${project.name}`)}>
              Start a project
            </MagneticButton>
            <Link
              to="/work/$slug"
              params={{ slug: next.slug }}
              onClick={() => playClick()}
              className="inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-fg"
            >
              Next — {next.name}
              <ArrowUpRight className="size-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </main>
      <Footer home={false} />
    </>
  );
}
