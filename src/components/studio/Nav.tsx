import { Link } from "@tanstack/react-router";
import { Volume2, VolumeX, X } from "lucide-react";
import { NAV } from "@/lib/content";
import { cn } from "@/lib/utils";
import { playClick, unlockSound } from "@/lib/sound";
import { useStudio } from "@/lib/studio-store";
import { Mark } from "./primitives";
import { scrollToId } from "./use-section-spy";

export function Nav({ home = true }: { home?: boolean }) {
  const section = useStudio((s) => s.section);
  const menuOpen = useStudio((s) => s.menuOpen);
  const setMenuOpen = useStudio((s) => s.setMenuOpen);
  const soundOn = useStudio((s) => s.soundOn);
  const setSoundOn = useStudio((s) => s.setSoundOn);

  function go(id: string) {
    playClick();
    setMenuOpen(false);
    if (home) {
      scrollToId(id);
      return;
    }
    window.location.href = `/#${id}`;
  }

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-4">
        <div className="pointer-events-auto glass-nav mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl px-3 pl-4 md:h-16 md:px-5">
          <Link
            to="/"
            className="flex min-h-11 items-center gap-2.5 text-fg"
            onClick={() => {
              playClick();
              setMenuOpen(false);
            }}
            aria-label="AIRO Studio home"
          >
            <Mark className="size-6 text-fg" />
            <span className="text-sm font-medium tracking-wide">
              AIRO
              <span className="ml-1.5 font-display text-sm italic text-muted">
                Studio
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {NAV.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.id)}
                className={cn(
                  "caps min-h-11 text-subtle transition-colors duration-150 hover:text-fg",
                  section === item.id && "text-fg",
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              aria-pressed={soundOn}
              aria-label={soundOn ? "Mute interface sounds" : "Enable interface sounds"}
              className="grid size-11 place-items-center rounded-full text-muted hover:text-fg"
              onClick={() => {
                const next = !soundOn;
                setSoundOn(next);
                if (next) void unlockSound();
                playClick("open");
              }}
            >
              {soundOn ? (
                <Volume2 className="size-4" strokeWidth={1.6} />
              ) : (
                <VolumeX className="size-4" strokeWidth={1.6} />
              )}
            </button>
            <button
              type="button"
              onClick={() => go("start")}
              className="hidden min-h-10 rounded-full bg-fg px-4 text-xs font-medium tracking-wide text-bg sm:inline-flex sm:items-center"
            >
              Start a project
            </button>
            <button
              type="button"
              className="caps grid min-h-11 min-w-11 place-items-center rounded-full text-fg lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => {
                playClick("open");
                setMenuOpen(!menuOpen);
              }}
            >
              {menuOpen ? <X className="size-4" /> : "Menu"}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 bg-bg/92 px-6 pt-24 backdrop-blur-xl transition-opacity duration-300 lg:hidden",
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav className="flex flex-col gap-2" aria-label="Mobile">
          {NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => go(item.id)}
              className="display border-b border-line py-4 text-left text-4xl italic"
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => go("start")}
            className="mt-6 min-h-12 rounded-full bg-fg text-sm font-medium text-bg"
          >
            Start a project
          </button>
        </nav>
      </div>
    </>
  );
}
