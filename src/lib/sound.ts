import { useStudio } from "@/lib/studio-store";

let ctx: AudioContext | null = null;

function getCtx(): AudioContext | null {
  const AC =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext?: typeof AudioContext })
      .webkitAudioContext;
  if (!AC) return null;
  ctx ??= new AC();
  return ctx;
}

/** Tiny UI tick. Silent unless the visitor has enabled sound. */
export function playClick(kind: "tap" | "open" = "tap") {
  if (!useStudio.getState().soundOn) return;
  const audio = getCtx();
  if (!audio) return;
  if (audio.state === "suspended") void audio.resume();

  const now = audio.currentTime;
  const osc = audio.createOscillator();
  const gain = audio.createGain();
  osc.type = "sine";
  osc.frequency.value = kind === "open" ? 520 : 880;
  gain.gain.setValueAtTime(0.028, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.07);
  osc.connect(gain);
  gain.connect(audio.destination);
  osc.start(now);
  osc.stop(now + 0.08);
}

export async function unlockSound() {
  const audio = getCtx();
  if (audio && audio.state === "suspended") await audio.resume();
}
