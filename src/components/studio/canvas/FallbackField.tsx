/** CSS stand-in when WebGL is unavailable or motion is reduced. */
export function FallbackField() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-bg"
      aria-hidden="true"
    >
      <div className="absolute top-[-20%] right-[-10%] h-[70vh] w-[70vh] rounded-full bg-accent/10 blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-15%] h-[50vh] w-[50vh] rounded-full bg-fg/5 blur-[100px]" />
      <div
        className="absolute top-[18%] right-[8%] hidden h-[46vh] w-[34vh] md:block"
        style={{ perspective: "1200px" }}
      >
        <div
          className="absolute inset-0 rounded-sm border border-line bg-fg/4"
          style={{ transform: "rotateY(-18deg) rotateX(8deg)" }}
        />
        <div
          className="absolute inset-6 rounded-sm border border-accent/30 bg-accent/5"
          style={{ transform: "rotateY(12deg) rotateX(-6deg) translateZ(40px)" }}
        />
        <div
          className="absolute inset-x-10 inset-y-16 rounded-sm border border-line-strong bg-fg/6"
          style={{ transform: "rotateY(-8deg) translateZ(80px)" }}
        />
      </div>
    </div>
  );
}
