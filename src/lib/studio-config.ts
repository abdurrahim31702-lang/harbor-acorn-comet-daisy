/**
 * AIRO STUDIO — owner configuration
 * =================================
 * Edit this file to change public contact details.
 *
 * WHATSAPP_NUMBER
 *   Digits only, including country code. No "+" or spaces.
 *   India example: "9198XXXXXXXX"
 *   US example:    "15551234567"
 *
 * Environment override (wins when set):
 *   VITE_WHATSAPP_NUMBER=9198XXXXXXXX
 *
 * WHATSAPP_MESSAGE is the default pre-filled text. The Start a Project
 * composer appends the visitor's brief underneath.
 */

export const WHATSAPP_NUMBER = "REPLACE_WITH_NUMBER";

export const WHATSAPP_MESSAGE =
  "Hi AIRO Studio, I'd like to discuss a project.";

export const STUDIO = {
  name: "AIRO Studio",
  short: "AIRO",
  tagline: "Digital experiences, beyond the ordinary.",
  email: "",
  url: "https://airo.studio",
} as const;

export const SCENE = {
  background: "#08090b",
  fog: "#08090b",
  glass: "#d5dce0",
  metal: "#9aa3a8",
  core: "#c5d0d6",
  emissive: "#8aa4ad",
  keyLight: "#e8ece8",
  fillLight: "#8aa4ad",
  rimLight: "#cbbba8",
} as const;

function digitsOnly(value: string): string {
  return value.replace(/\D/g, "");
}

export function resolveWhatsappNumber(): string | null {
  const fromEnv =
    typeof import.meta !== "undefined"
      ? (import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined)
      : undefined;
  const raw = (fromEnv && fromEnv.trim()) || WHATSAPP_NUMBER;
  const digits = digitsOnly(raw);
  if (!digits || digits.toUpperCase().includes("REPLACE") || digits.length < 8) {
    return null;
  }
  return digits;
}

export function isWhatsappConfigured(): boolean {
  return resolveWhatsappNumber() !== null;
}

export function buildWhatsappUrl(extra?: string): string {
  const number = resolveWhatsappNumber();
  const body = extra
    ? `${WHATSAPP_MESSAGE}\n\n${extra}`
    : WHATSAPP_MESSAGE;
  const text = encodeURIComponent(body);
  if (number) return `https://wa.me/${number}?text=${text}`;
  // Opens WhatsApp with the message so the visitor can choose a chat
  // until the owner sets WHATSAPP_NUMBER above.
  return `https://api.whatsapp.com/send?text=${text}`;
}

export function openWhatsapp(extra?: string) {
  const url = buildWhatsappUrl(extra);
  window.open(url, "_blank", "noopener,noreferrer");
}
