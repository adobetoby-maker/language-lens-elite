import confetti from "canvas-confetti";

export function celebrate() {
  const defaults = {
    spread: 70,
    startVelocity: 45,
    ticks: 200,
    zIndex: 9999,
    colors: ["#D4AF37", "#FFD700", "#FFFFFF", "#F5E6A8", "#B8860B"],
  };
  confetti({ ...defaults, particleCount: 80, origin: { x: 0.2, y: 0.8 } });
  confetti({ ...defaults, particleCount: 80, origin: { x: 0.8, y: 0.8 } });
  setTimeout(() => {
    confetti({
      ...defaults,
      particleCount: 120,
      spread: 120,
      origin: { x: 0.5, y: 0.6 },
    });
  }, 250);
}

/**
 * Loose contains: lowercase, strip punctuation, collapse whitespace.
 * Works for Latin scripts; for CJK we just strip spaces and punctuation.
 */
export function looseIncludes(haystack: string, needle: string) {
  const norm = (s: string) =>
    s
      .toLowerCase()
      .replace(/[.,!?;:¡¿"'„""‚''`´()[\]{}—–-]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  const h = norm(haystack);
  const n = norm(needle);
  if (!n) return false;
  if (h.includes(n)) return true;
  // CJK fallback: also try with all spaces removed
  const noSpace = (s: string) => s.replace(/\s+/g, "");
  return noSpace(h).includes(noSpace(n));
}
