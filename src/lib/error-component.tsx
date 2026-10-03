import type { ErrorComponentProps } from "@tanstack/react-router";
import { TriangleAlert } from "lucide-react";

const FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";

function errorMessage(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  if (typeof error === "string" && error) return error;
  return FALLBACK_MESSAGE;
}

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-4 bg-bg px-6 text-center text-fg">
      <span className="text-accent" aria-hidden="true">
        <TriangleAlert className="size-8" strokeWidth={1.5} />
      </span>
      <h1 className="display text-3xl">Something went wrong</h1>
      <p className="max-w-md text-sm leading-relaxed break-words text-muted">
        {errorMessage(error)}
      </p>
      <a
        href="/"
        className="mt-2 inline-flex min-h-11 items-center rounded-full bg-fg px-5 text-sm font-medium text-bg"
      >
        Back to AIRO Studio
      </a>
    </main>
  );
}
