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
  {
    moduleId: "emergency-medicine",
    accent: "oklch(0.68 0.18 25)", // urgent red-orange
    badges: [
      {
        id: "observer",
        title: "Observer",
        emoji: "👀",
        blurb: "Shadowing in triage — learning the rhythms of the ER.",
        threshold: 0,
      },
      {
        id: "intern-er",
        title: "Intern",
        emoji: "🩺",
        blurb: "First solo assessments — vitals, history, and basic presentations.",
        threshold: 5,
      },
      {
        id: "resident-er",
        title: "Resident",
        emoji: "🚑",
        blurb: "Managing the fast track and presenting to attendings.",
        threshold: 12,
      },
      {
        id: "senior-resident",
        title: "Senior Resident",
        emoji: "🏥",
        blurb: "Running traumas and supervising junior residents.",
        threshold: 22,
      },
      {
        id: "attending-er",
        title: "Attending Physician",
        emoji: "🧑‍⚕️",
        blurb: "Independent practice — your call on every critical case.",
        threshold: 35,
      },
      {
        id: "medical-director",
        title: "Medical Director",
        emoji: "🚨",
        blurb: "Leading the department and setting the standard of care.",
        threshold: 55,
      },
    ],
  },
  {
    moduleId: "nursing",
    accent: "oklch(0.76 0.12 175)", // teal-green
    badges: [
      {
        id: "student-nurse",
        title: "Student Nurse",
        emoji: "📗",
        blurb: "Clinical rotations — learning bedside language and patient care basics.",
        threshold: 0,
      },
      {
        id: "new-grad",
        title: "New Graduate",
        emoji: "🩹",
        blurb: "First floor assignment — assessments, med passes, and charting.",
        threshold: 5,
      },
      {
        id: "staff-nurse",
        title: "Staff Nurse",
        emoji: "💊",
        blurb: "Confident with a full patient load and complex care plans.",
        threshold: 12,
      },
      {
        id: "charge-nurse",
        title: "Charge Nurse",
        emoji: "📋",
        blurb: "Running the floor — assignments, escalations, and family communications.",
        threshold: 22,
      },
      {
        id: "travel-nurse",
        title: "Travel Nurse",
        emoji: "✈️",
        blurb: "Adapting quickly to new units, new teams, and new patient populations.",
        threshold: 35,
      },
      {
        id: "nurse-educator",
        title: "Nurse Educator",
        emoji: "🎓",
        blurb: "Training the next generation — leading clinical education in two languages.",
        threshold: 55,
      },
    ],
  },
  {
    moduleId: "restaurant-hospitality",
    accent: "oklch(0.78 0.14 45)", // warm amber-gold
    badges: [
      {
        id: "busser",
        title: "Busser",
        emoji: "🫙",
        blurb: "Learning the floor, the rhythm, and basic service vocabulary.",
        threshold: 0,
      },
      {
        id: "server",
        title: "Server",
        emoji: "🍷",
        blurb: "Taking orders, describing specials, and handling guest requests.",
        threshold: 5,
      },
      {
        id: "lead-server",
        title: "Lead Server",
        emoji: "🍽️",
        blurb: "Training new staff and managing the floor during service.",
        threshold: 12,
      },
      {
        id: "front-manager",
        title: "Front of House Manager",
        emoji: "🏨",
        blurb: "Overseeing service, resolving complaints, and briefing the team.",
        threshold: 22,
      },
      {
        id: "general-manager",
        title: "General Manager",
        emoji: "🗝️",
        blurb: "Running the full operation — staff, guests, and kitchen coordination.",
        threshold: 35,
      },
      {
        id: "executive-director",
        title: "Executive Director",
        emoji: "⭐",
        blurb: "Multi-property leadership and bilingual hospitality at the highest level.",
        threshold: 55,
      },
    ],
  },
  {
    moduleId: "construction-foreman",
    accent: "oklch(0.72 0.13 75)", // safety-vest yellow
    badges: [
      {
        id: "day-laborer",
        title: "Day Laborer",
        emoji: "🧤",
        blurb: "First days on site — tools, safety gear, and basic commands.",
        threshold: 0,
      },
      {
        id: "skilled-laborer",
        title: "Skilled Laborer",
        emoji: "🪛",
        blurb: "Reliable on a crew — understands assignments and communicates issues.",
        threshold: 5,
      },
      {
        id: "crew-lead",
        title: "Crew Lead",
        emoji: "📐",
        blurb: "Directing a small crew through daily tasks and safety checks.",
        threshold: 12,
      },
      {
        id: "foreman",
        title: "Foreman",
        emoji: "🏗️",
        blurb: "Running the jobsite — subs, schedules, and safety compliance.",
        threshold: 22,
      },
      {
        id: "project-manager",
        title: "Project Manager",
        emoji: "📋",
        blurb: "Coordinating across trades, owners, and inspectors.",
        threshold: 35,
      },
      {
        id: "general-contractor",
        title: "General Contractor",
        emoji: "🏢",
        blurb: "Leading every phase of construction from groundbreak to closeout.",
        threshold: 55,
      },
    ],
  },
  {
    moduleId: "legal-immigration",
    accent: "oklch(0.70 0.10 270)", // deep indigo
    badges: [
      {
        id: "intake-volunteer",
        title: "Intake Volunteer",
        emoji: "📝",
        blurb: "Learning basic intake questions and client communication.",
        threshold: 0,
      },
      {
        id: "paralegal",
        title: "Paralegal",
        emoji: "📂",
        blurb: "Preparing documents and explaining procedures to clients.",
        threshold: 5,
      },
      {
        id: "associate-attorney",
        title: "Associate Attorney",
        emoji: "⚖️",
        blurb: "Handling cases independently and representing clients at hearings.",
        threshold: 12,
      },
      {
        id: "staff-attorney",
        title: "Staff Attorney",
        emoji: "🏛️",
        blurb: "Managing a full caseload and mentoring junior staff.",
        threshold: 22,
      },
      {
        id: "senior-attorney",
        title: "Senior Attorney",
        emoji: "🎖️",
        blurb: "Complex cases, appeals, and policy advocacy in two languages.",
        threshold: 35,
      },
      {
        id: "managing-attorney",
        title: "Managing Attorney",
        emoji: "🌐",
        blurb: "Running the practice and setting the standard for bilingual advocacy.",
        threshold: 55,
      },
    ],
  },
  {
    moduleId: "k12-teacher",
    accent: "oklch(0.80 0.13 145)", // apple-green
    badges: [
      {
        id: "student-teacher",
        title: "Student Teacher",
        emoji: "📚",
        blurb: "Supervised classroom practice — basic instruction and parent greetings.",
        threshold: 0,
      },
      {
        id: "first-year",
        title: "First-Year Teacher",
        emoji: "🖊️",
        blurb: "Your own classroom — navigating curriculum, parents, and routines.",
        threshold: 5,
      },
      {
        id: "experienced-teacher",
        title: "Experienced Teacher",
        emoji: "🏫",
        blurb: "Confident with complex parent conversations and diverse learners.",
        threshold: 12,
      },
      {
        id: "mentor-teacher",
        title: "Mentor Teacher",
        emoji: "🤝",
        blurb: "Supporting new colleagues and leading professional development.",
        threshold: 22,
      },
      {
        id: "department-chair",
        title: "Department Chair",
        emoji: "📊",
        blurb: "Curriculum leadership and multilingual family engagement programs.",
        threshold: 35,
      },
      {
        id: "instructional-coach",
        title: "Instructional Coach",
        emoji: "🎓",
        blurb: "District-wide bilingual instruction expert and community liaison.",
        threshold: 55,
      },
    ],
  },
  {
    moduleId: "catholic-ministry",
    accent: "oklch(0.75 0.11 295)", // violet-purple
    badges: [
      {
        id: "parishioner",
        title: "Parishioner",
        emoji: "🕯️",
        blurb: "Learning the basics of parish language and community greeting.",
        threshold: 0,
      },
      {
        id: "eucharistic-minister",
        title: "Eucharistic Minister",
        emoji: "✝️",
        blurb: "Serving at Mass and assisting parishioners with confidence.",
        threshold: 5,
      },
      {
        id: "catechist",
        title: "Catechist",
        emoji: "📖",
        blurb: "Teaching faith formation in the target language.",
        threshold: 12,
      },
      {
        id: "rcia-coordinator",
        title: "RCIA Coordinator",
        emoji: "💧",
        blurb: "Guiding candidates through the Rite of Christian Initiation.",
        threshold: 22,
      },
      {
        id: "deacon",
        title: "Deacon",
        emoji: "🙏",
        blurb: "Pastoral ministry, sacramental prep, and bilingual outreach.",
        threshold: 35,
      },
      {
        id: "pastoral-director",
        title: "Pastoral Director",
        emoji: "🌟",
        blurb: "Leading the parish's multilingual ministries and community programs.",
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
