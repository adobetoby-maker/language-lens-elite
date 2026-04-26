// Module-specific badge tiers. Each module defines a progression ladder
// the learner climbs as they clear challenges while that module is active.
// Progression metric for now: total challenges cleared (global stub).
// Later this can switch to per-module counters without changing the UI.

export interface ModuleBadge {
  id: string;
  title: string;
  emoji: string;
  blurb: string;
  threshold: number; // challenges cleared to unlock
}

export interface ModuleBadgeLadder {
  moduleId: string;
  accent: string; // CSS color for glow / border
  badges: ModuleBadge[]; // ordered, ascending by threshold
}

export const MODULE_BADGES: ModuleBadgeLadder[] = [
  {
    moduleId: "lds-missionary",
    accent: "oklch(0.78 0.14 95)", // warm gold
    badges: [
      {
        id: "greenie",
        title: "Greenie",
        emoji: "🌱",
        blurb: "Just off the plane — first lessons, first door approaches.",
        threshold: 0,
      },
      {
        id: "senior-companion",
        title: "Senior Companion",
        emoji: "🤝",
        blurb: "Leading the discussions and showing the new missionary the area.",
        threshold: 5,
      },
      {
        id: "district-leader",
        title: "District Leader",
        emoji: "📋",
        blurb: "Running district meetings and tracking baptismal goals.",
        threshold: 12,
      },
      {
        id: "zone-leader",
        title: "Zone Leader",
        emoji: "🛡️",
        blurb: "Coordinating multiple districts across the zone.",
        threshold: 22,
      },
      {
        id: "trainer",
        title: "Trainer",
        emoji: "🎓",
        blurb: "Entrusted to train a new missionary in the field.",
        threshold: 35,
      },
      {
        id: "ap",
        title: "Assistant to the President",
        emoji: "✨",
        blurb: "Serving alongside the mission president — the final assignment.",
        threshold: 55,
      },
    ],
  },
  {
    moduleId: "orthopedics",
    accent: "oklch(0.72 0.13 220)", // clinical blue
    badges: [
      {
        id: "med-student",
        title: "Med Student",
        emoji: "📘",
        blurb: "Learning bones, joints, and the language of the clinic.",
        threshold: 0,
      },
      {
        id: "intern",
        title: "Intern",
        emoji: "🩺",
        blurb: "First rotations — taking histories, presenting on rounds.",
        threshold: 5,
      },
      {
        id: "resident",
        title: "Resident",
        emoji: "🦴",
        blurb: "Reading films and managing fractures with the team.",
        threshold: 12,
      },
      {
        id: "chief-resident",
        title: "Chief Resident",
        emoji: "🏥",
        blurb: "Leading handoffs and coordinating the OR schedule.",
        threshold: 22,
      },
      {
        id: "attending",
        title: "Attending",
        emoji: "🧑‍⚕️",
        blurb: "Independent practice — your call in the OR.",
        threshold: 35,
      },
      {
        id: "chief-of-surgery",
        title: "Chief of Surgery",
        emoji: "⚕️",
        blurb: "Running the department.",
        threshold: 55,
      },
    ],
  },
  {
    moduleId: "framer",
    accent: "oklch(0.74 0.14 60)", // sawdust amber
    badges: [
      {
        id: "laborer",
        title: "Laborer",
        emoji: "🧱",
        blurb: "Hauling material, learning the lingo on site.",
        threshold: 0,
      },
      {
        id: "apprentice",
        title: "Apprentice",
        emoji: "🪚",
        blurb: "Cutting studs and shadowing the lead carpenter.",
        threshold: 5,
      },
      {
        id: "carpenter",
        title: "Journeyman Carpenter",
        emoji: "🔨",
        blurb: "Framing walls clean and plumb without supervision.",
        threshold: 12,
      },
      {
        id: "lead",
        title: "Lead Carpenter",
        emoji: "📐",
        blurb: "Reading prints and directing the framing crew.",
        threshold: 22,
      },
      {
        id: "foreman",
        title: "Foreman",
        emoji: "📋",
        blurb: "Running the jobsite, scheduling deliveries and inspections.",
        threshold: 35,
      },
      {
        id: "superintendent",
        title: "Superintendent",
        emoji: "🏗️",
        blurb: "Overseeing every phase from foundation to finish.",
        threshold: 55,
      },
    ],
  },
];

export function getLadder(moduleId: string | null | undefined): ModuleBadgeLadder | null {
  if (!moduleId) return null;
  return MODULE_BADGES.find((l) => l.moduleId === moduleId) ?? null;
}

export interface LadderProgress {
  ladder: ModuleBadgeLadder;
  current: ModuleBadge;
  next: ModuleBadge | null;
  unlockedIds: string[];
  cleared: number; // metric value
  toNext: number; // remaining clears to next badge (0 if maxed)
  pct: number; // 0..100 progress within current → next band
}

export function ladderProgress(
  moduleId: string | null | undefined,
  cleared: number,
): LadderProgress | null {
  const ladder = getLadder(moduleId);
  if (!ladder) return null;
  const sorted = [...ladder.badges].sort((a, b) => a.threshold - b.threshold);
  const unlocked = sorted.filter((b) => cleared >= b.threshold);
  const current = unlocked[unlocked.length - 1] ?? sorted[0];
  const nextIdx = sorted.indexOf(current) + 1;
  const next = sorted[nextIdx] ?? null;
  const unlockedIds = unlocked.map((b) => b.id);
  if (!next) {
    return { ladder, current, next: null, unlockedIds, cleared, toNext: 0, pct: 100 };
  }
  const span = Math.max(1, next.threshold - current.threshold);
  const into = Math.max(0, cleared - current.threshold);
  const pct = Math.min(100, (into / span) * 100);
  return {
    ladder,
    current,
    next,
    unlockedIds,
    cleared,
    toNext: Math.max(0, next.threshold - cleared),
    pct,
  };
}
