// Shared types for library seed files.
// Mirrors LibraryEntry / SentencePair from library-state.tsx — do not import from there
// (would create a circular dep via state layer). These types are intentionally lightweight.

import type { CefrLevel } from "@/fns/grammar.functions";

export type { CefrLevel } from "@/fns/grammar.functions";

export interface SeedSentence {
  en: string;   // English version of the sentence
  target: string; // Target-language translation
}

export interface LibrarySeed {
  id: string;                 // must be globally unique, e.g. "seed-es-soccer-match"
  title: string;              // Display title shown in library
  subtitle?: string;          // Secondary label (scenario descriptor, e.g. "Pre-game warm-up")
  language: string;           // e.g. "Spanish" | "French" | "German" | "Italian" | "Japanese" | "Portuguese"
  targetLabel: string;        // e.g. "Español" | "Français" | "Deutsch" | "Italiano" | "日本語" | "Português"
  flag: string;               // emoji flag, e.g. "🇲🇽"
  section: "culture";         // all seeds go into the culture section
  available: true;            // always true for pre-built content
  level?: CefrLevel;          // CEFR reading level (A1..C2). Optional during back-label migration.
  sentences: SeedSentence[];  // 8–12 sentence pairs
}

// Language metadata lookup for agents
export const SEED_LANGUAGES: Record<string, { label: string; flag: string }> = {
  Spanish:    { label: "Español",    flag: "🇲🇽" },
  French:     { label: "Français",   flag: "🇫🇷" },
  German:     { label: "Deutsch",    flag: "🇩🇪" },
  Italian:    { label: "Italiano",   flag: "🇮🇹" },
  Japanese:   { label: "日本語",      flag: "🇯🇵" },
  Portuguese: { label: "Português",  flag: "🇧🇷" },
  English:    { label: "English",    flag: "🇬🇧" },
  Korean:     { label: "한국어",      flag: "🇰🇷" },
};
