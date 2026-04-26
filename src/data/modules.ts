// Catalog of paid plug-in modules. Frontend-only stub for now —
// no payments wired yet; purchased ids live in app-state (localStorage).

export interface AppModule {
  id: string;
  name: string;
  emoji: string;
  category: "Faith" | "Medical" | "Trades" | "Service" | "Education";
  blurb: string;
  priceCents: number;
  // Plugin behavior hooks (consumed elsewhere as the system grows)
  aiPersona: string; // system prompt fragment for tutor
  userRole: string; // what the learner is roleplaying as
  challengePrompts: string[];
  vocabFocus: string[];
}

export const MODULES: AppModule[] = [
  {
    id: "lds-missionary",
    name: "LDS Missionary",
    emoji: "✝️",
    category: "Faith",
    blurb:
      "Practice teaching the Restoration, Plan of Salvation, and everyday companion conversations.",
    priceCents: 999,
    aiPersona:
      "You are an investigator (or ward member / companion, depending on scenario) interacting with a missionary. Stay in character, ask sincere questions, and respond naturally in the target language.",
    userRole: "Full-time missionary",
    challengePrompts: [
      "Teach the Restoration in 60 seconds.",
      "Invite someone to be baptized.",
      "Explain the Plan of Salvation simply.",
      "Share your testimony of the Book of Mormon.",
      "Set a return appointment with an investigator.",
      "Greet a member family at their door.",
    ],
    vocabFocus: ["faith", "scripture", "prayer", "baptism", "testimony", "spirit"],
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    emoji: "🦴",
    category: "Medical",
    blurb:
      "X-ray reads, op notes, patient history, and OR/staff handoff vocabulary.",
    priceCents: 1999,
    aiPersona:
      "You are a patient, nurse, or surgical colleague depending on scenario. Use realistic clinical phrasing in the target language.",
    userRole: "Orthopedic physician",
    challengePrompts: [
      "Explain a tibial plateau fracture to a patient.",
      "Give a one-line OR handoff for an ORIF case.",
      "Ask the patient about pain, swelling, and weight bearing.",
      "Read this X-ray finding to a colleague.",
    ],
    vocabFocus: ["fracture", "ligament", "x-ray", "fixation", "rehab"],
  },
  {
    id: "framer",
    name: "Framer",
    emoji: "🔨",
    category: "Trades",
    blurb: "Jobsite vocabulary, blueprint reading, and crew communication.",
    priceCents: 999,
    aiPersona:
      "You are a foreman, supplier, or crew member on a residential jobsite. Use practical, direct construction phrasing.",
    userRole: "Framing carpenter",
    challengePrompts: [
      "Ask the supplier for 30 studs and 10 sheets of OSB.",
      "Explain to the crew where the load-bearing wall goes.",
      "Call out a measurement for a header.",
    ],
    vocabFocus: ["stud", "joist", "header", "plumb", "level", "blueprint"],
  },
];

export function getModule(id: string | null | undefined): AppModule | null {
  if (!id) return null;
  return MODULES.find((m) => m.id === id) ?? null;
}
