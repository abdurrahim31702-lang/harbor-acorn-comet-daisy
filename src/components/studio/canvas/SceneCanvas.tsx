import { useEffect, useState } from "react";
import { bindLiveInput } from "@/lib/live-state";
import { FallbackField } from "./FallbackField";

function hasWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      canvas.getContext("webgl2") || canvas.getContext("webgl"),
    );
  } catch {
    return false;
  }
}

function pickQuality(): "high" | "low" {
  const mobile = window.matchMedia("(max-width: 768px)").matches;
  const cores = navigator.hardwareConcurrency ?? 4;
  const conn = (
    navigator as Navigator & {
      connection?: { saveData?: boolean };
    }
  ).connection;
  if (mobile || cores <= 4 || conn?.saveData) return "low";
  return "high";
}

export function SceneCanvas() {
  const [mode, setMode] = useState<"pending" | "webgl" | "fallback">(
    "pending",
  );
  const [quality, setQuality] = useState<"high" | "low">("low");
  const [CanvasApp, setCanvasApp] = useState<null | typeof import("./CanvasApp").CanvasApp>(
    null,
  );

  useEffect(() => {
    const unbind = bindLiveInput();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !hasWebGL()) {
      setMode("fallback");
      return () => unbind();
    }
    setQuality(pickQuality());
    let cancelled = false;
    void import("./CanvasApp")
      .then((mod) => {
        if (cancelled) return;
        setCanvasApp(() => mod.CanvasApp);
        setMode("webgl");
      })
      .catch(() => {
        if (!cancelled) setMode("fallback");
      });
    return () => {
      cancelled = true;
      unbind();
    };
  }, []);

  if (mode === "fallback") return <FallbackField />;
  if (mode === "pending" || !CanvasApp) {
    return (
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-bg"
        aria-hidden="true"
      />
    );
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <CanvasApp quality={quality} />
    </div>
  );
}
