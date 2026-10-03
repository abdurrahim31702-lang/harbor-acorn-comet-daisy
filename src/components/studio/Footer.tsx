import { NAV } from "@/lib/content";
import { playClick } from "@/lib/sound";
import { scrollToId } from "./use-section-spy";

export function Footer({ home = true }: { home?: boolean }) {
  function go(id: string) {
    playClick();
    if (home) {
      scrollToId(id);
      return;
    }
    window.location.href = `/#${id}`;
  }

  return (
    <footer className="relative z-10 border-t border-line px-5 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="display text-3xl">AIRO Studio</p>
          <p className="mt-2 max-w-xs text-sm text-muted">
            Digital experiences, beyond the ordinary.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
          {NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => go(item.id)}
              className="min-h-11 text-sm text-muted hover:text-fg"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <p className="text-xs text-subtle">
          © {new Date().getFullYear()} AIRO Studio
        </p>
      </div>
    </footer>
  );
}
