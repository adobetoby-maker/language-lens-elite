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
    emoji: "🕊️",
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
  {
    id: "emergency-medicine",
    name: "Emergency Medicine",
    emoji: "🚨",
    category: "Medical",
    blurb:
      "Triage, rapid assessment, trauma handoffs, and critical patient communication in the ER.",
    priceCents: 1999,
    aiPersona:
      "You are a patient, paramedic, or ER nurse depending on the scenario. Use urgent, clear clinical language in the target language. Mirror real emergency room pacing — short, direct sentences.",
    userRole: "Emergency physician",
    challengePrompts: [
      "Assess a chest pain patient: onset, severity, radiation.",
      "Give a handoff for a trauma patient arriving by ambulance.",
      "Explain to a patient why you need to start an IV immediately.",
      "Ask a confused patient about allergies and current medications.",
      "Calm a family member waiting for news about a critical patient.",
      "Describe a laceration to the charge nurse for suture tray prep.",
    ],
    vocabFocus: [
      "triage",
      "trauma",
      "airway",
      "pulse",
      "blood pressure",
      "laceration",
      "fracture",
      "allergy",
      "medication",
      "IV",
      "intubation",
      "shock",
    ],
  },
  {
    id: "nursing",
    name: "Nursing & Patient Care",
    emoji: "🩺",
    category: "Medical",
    blurb:
      "Bedside manner, medication administration, patient education, and shift handoffs for nurses and CNAs.",
    priceCents: 1499,
    aiPersona:
      "You are a patient, family member, or physician depending on the scenario. Use compassionate, clear clinical language at a patient-friendly register unless speaking with another provider.",
    userRole: "Registered nurse",
    challengePrompts: [
      "Explain a new medication, its purpose, and its side effects to a patient.",
      "Conduct a morning assessment: pain level, orientation, bowel movement.",
      "Give a SBAR handoff to the oncoming shift nurse.",
      "Ask a patient to rate their pain and describe its location.",
      "Educate a patient on wound care before discharge.",
      "Reassure an anxious patient before a procedure.",
    ],
    vocabFocus: [
      "medication",
      "dosage",
      "vital signs",
      "wound",
      "discharge",
      "pain",
      "nausea",
      "catheter",
      "IV",
      "assessment",
      "blood draw",
    ],
  },
  {
    id: "restaurant-hospitality",
    name: "Restaurant & Hospitality",
    emoji: "🍽️",
    category: "Service",
    blurb:
      "Kitchen coordination, front-of-house service, hotel guest interactions, and team communication.",
    priceCents: 999,
    aiPersona:
      "You are a guest, line cook, server, or hotel guest depending on the scenario. Use natural, fast-paced service industry language.",
    userRole: "Restaurant or hotel manager",
    challengePrompts: [
      "Explain tonight's specials to a table of guests.",
      "Coordinate a ticket rush with the kitchen: fire, hold, and 86 an item.",
      "Handle a guest complaint about a wrong order.",
      "Check in a hotel guest and explain amenities.",
      "Brief your team on a large party reservation arriving in 30 minutes.",
      "Ask a guest about dietary restrictions and allergies.",
    ],
    vocabFocus: [
      "reservation",
      "allergy",
      "gluten",
      "special",
      "check-in",
      "checkout",
      "kitchen",
      "ticket",
      "tip",
      "complaint",
      "housekeeping",
    ],
  },
  {
    id: "construction-foreman",
    name: "Construction Foreman",
    emoji: "🏗️",
    category: "Trades",
    blurb:
      "Bilingual crew management, safety briefings, subcontractor coordination, and inspection prep.",
    priceCents: 999,
    aiPersona:
      "You are a crew member, subcontractor, or inspector on a commercial or residential construction site. Use direct, practical jobsite language.",
    userRole: "Construction foreman",
    challengePrompts: [
      "Run a morning safety tailgate meeting with the crew.",
      "Tell a worker to stop work: an unsafe condition has been spotted.",
      "Coordinate a concrete pour with the sub and the ready-mix driver.",
      "Explain to a new laborer where to stage materials and what PPE is required.",
      "Walk an inspector through the completed rough framing.",
      "Call a supplier to report a material shortage and request a same-day delivery.",
    ],
    vocabFocus: [
      "safety",
      "PPE",
      "hard hat",
      "scaffold",
      "concrete",
      "rebar",
      "permit",
      "inspection",
      "blueprint",
      "deadline",
      "forklift",
      "hazard",
    ],
  },
  {
    id: "legal-immigration",
    name: "Legal & Immigration",
    emoji: "⚖️",
    category: "Service",
    blurb:
      "Client intake, rights explanation, form preparation, and court-adjacent vocabulary for immigration and legal professionals.",
    priceCents: 1999,
    aiPersona:
      "You are a client seeking legal help, often under stress. Use plain, respectful language and ask clarifying questions as a real client would. Avoid legal jargon unless the learner introduces it.",
    userRole: "Immigration attorney or paralegal",
    challengePrompts: [
      "Explain to a client what a green card is and the timeline to apply.",
      "Intake interview: ask about entry date, visa type, and family members.",
      "Explain the difference between asylum and refugee status.",
      "Describe what happens at a naturalization interview.",
      "Tell a client what documents to bring to their next appointment.",
      "Explain the consequences of missing a court date.",
    ],
    vocabFocus: [
      "visa",
      "asylum",
      "petition",
      "hearing",
      "deport",
      "naturalization",
      "work permit",
      "green card",
      "appeal",
      "affidavit",
      "sponsor",
    ],
  },
  {
    id: "k12-teacher",
    name: "K–12 Classroom",
    emoji: "🏫",
    category: "Education",
    blurb:
      "Parent communication, student instruction, IEP meetings, and bilingual classroom management.",
    priceCents: 999,
    aiPersona:
      "You are a student, parent, or school administrator depending on the scenario. Mirror realistic school communication — warm but professional with parents, age-appropriate with students.",
    userRole: "K–12 teacher or school staff",
    challengePrompts: [
      "Call a parent to discuss their child's missing assignments.",
      "Explain classroom rules to a new student on their first day.",
      "Describe an IEP accommodation plan to a parent.",
      "Redirect a student who is off-task and disrupting the class.",
      "Communicate a school emergency procedure to parents via phone.",
      "Ask a student questions to assess their reading comprehension.",
    ],
    vocabFocus: [
      "homework",
      "grade",
      "attendance",
      "IEP",
      "behavior",
      "parent",
      "conference",
      "classroom",
      "assignment",
      "suspension",
      "counselor",
    ],
  },
  {
    id: "catholic-ministry",
    name: "Catholic Ministry",
    emoji: "✝️",
    category: "Faith",
    blurb:
      "Parish outreach, sacramental preparation, RCIA instruction, and pastoral care conversations.",
    priceCents: 999,
    aiPersona:
      "You are a parishioner, RCIA candidate, or family member depending on the scenario. Respond with sincere questions and reflections as someone exploring or deepening their Catholic faith in the target language.",
    userRole: "Deacon, religious education coordinator, or parish staff",
    challengePrompts: [
      "Explain the sacrament of Baptism to a parent preparing their child.",
      "Walk an RCIA candidate through the Rite of Acceptance.",
      "Offer pastoral comfort to a parishioner who has lost a family member.",
      "Explain the Mass structure to a first-time visitor.",
      "Invite a neighbor to a parish event.",
      "Describe the purpose of Confession to someone considering the sacrament.",
    ],
    vocabFocus: [
      "sacrament",
      "baptism",
      "Mass",
      "rosary",
      "confession",
      "Eucharist",
      "parish",
      "faith",
      "prayer",
      "RCIA",
      "blessing",
    ],
  },
];

export function getModule(id: string | null | undefined): AppModule | null {
  if (!id) return null;
  return MODULES.find((m) => m.id === id) ?? null;
}
