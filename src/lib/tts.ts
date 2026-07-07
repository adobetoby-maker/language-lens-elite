// Built by ATLAS — 2026-07-07
// Remote-TTS fallback for locales with no browser SpeechSynthesis voice.
// Browsers ship no Pashto voice anywhere — those utterances route to /api/tts
// (ElevenLabs) and play through a shared <audio> element. Every other language
// keeps using free on-device SpeechSynthesis.

import { getVoicesForLocale } from "@/lib/voices";

// locale prefix → /api/tts lang code
const REMOTE_TTS_BY_FAMILY: Record<string, string> = {
  ps: "ps",
};

let shared: HTMLAudioElement | null = null;
function audioEl(): HTMLAudioElement {
  if (!shared) shared = new Audio();
  return shared;
}

/** True when this locale must use the server TTS (no on-device voice exists). */
export function needsRemoteTTS(locale: string): boolean {
  const family = locale.split("-")[0].toLowerCase();
  if (!(family in REMOTE_TTS_BY_FAMILY)) return false;
  // If the device somehow has a voice (future OS versions), prefer it.
  return getVoicesForLocale(locale).length === 0;
}

export function stopRemoteTTS(): void {
  if (shared) {
    shared.pause();
    shared.currentTime = 0;
  }
}

/**
 * Speak text via the server TTS. Resolves when playback ends (or fails —
 * callers treat TTS as best-effort, matching SpeechSynthesis behavior).
 */
export function speakRemote(
  text: string,
  locale: string,
  opts?: { rate?: number; onend?: () => void },
): Promise<void> {
  const family = locale.split("-")[0].toLowerCase();
  const lang = REMOTE_TTS_BY_FAMILY[family];
  if (!lang) return Promise.resolve();

  const el = audioEl();
  el.pause();
  el.src = `/api/tts?lang=${lang}&text=${encodeURIComponent(text)}`;
  el.playbackRate = opts?.rate ?? 1;

  return new Promise<void>((resolve) => {
    const done = () => {
      el.onended = null;
      el.onerror = null;
      opts?.onend?.();
      resolve();
    };
    el.onended = done;
    el.onerror = done;
    el.play().catch(done);
  });
}
