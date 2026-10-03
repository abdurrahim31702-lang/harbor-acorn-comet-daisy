/** Mutable rAF state — read from the WebGL loop, written from the DOM. */

export const live = {
  pointerX: 0,
  pointerY: 0,
  progress: 0,
  section: 0,
  service: 0,
  mobile: false,
  reduced: false,
};

export const SECTION_INDEX: Record<string, number> = {
  home: 0,
  work: 1,
  services: 2,
  process: 3,
  about: 4,
  contact: 5,
  start: 5,
};

export function bindLiveInput() {
  const onPointer = (e: PointerEvent) => {
    const w = window.innerWidth || 1;
    const h = window.innerHeight || 1;
    live.pointerX = (e.clientX / w) * 2 - 1;
    live.pointerY = (e.clientY / h) * 2 - 1;
  };
  const onResize = () => {
    live.mobile = window.matchMedia("(max-width: 768px)").matches;
    live.reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  };
  onResize();
  window.addEventListener("pointermove", onPointer, { passive: true });
  window.addEventListener("resize", onResize, { passive: true });
  return () => {
    window.removeEventListener("pointermove", onPointer);
    window.removeEventListener("resize", onResize);
  };
}
