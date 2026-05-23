// Emergency medicine scenario content for the EM module.
// Phrases are stored in English — the AI tutor translates and roleplays
// in the learner's selected target language.
//
// Language reflects real EM attending-level speech: rapid, structured,
// safety-first. Sources: ACLS, ATLS, UpToDate EM protocols.
// For language practice only — not clinical advice.

export interface ModulePhrase {
  en: string;
  intent: string;
}

export interface SampleTurn {
  speaker: "learner" | "ai";
  en: string;
}

export interface ModuleArea {
  id: string;
  name: string;
  emoji: string;
  blurb: string;
  counterpart: string;
  learnerRole: string;
  toneNote: string;
  phrases: ModulePhrase[];
  vocab: string[];
  challenges: string[];
  sampleConversation: SampleTurn[];
}

export const EM_AREAS: ModuleArea[] = [
  {
    id: "triage",
    name: "Triage",
    emoji: "🚑",
    blurb:
      "Rapid initial assessment — ESI level assignment, chief complaint, vitals, immediate interventions.",
    counterpart: "Triage nurse or paramedic handing off an incoming patient.",
    learnerRole: "Emergency physician doing a triage assessment",
    toneNote: "Fast, systematic, no unnecessary words. SBAR format when presenting.",
    phrases: [
      { en: "What's the chief complaint and for how long?", intent: "Chief complaint" },
      { en: "What are the vitals?", intent: "Vital signs" },
      { en: "Is there any history of trauma?", intent: "Mechanism" },
      { en: "Any allergies I need to know about?", intent: "Safety check" },
      { en: "Get me a 12-lead and two large-bore IVs.", intent: "Immediate orders" },
      { en: "Activate the trauma bay.", intent: "Resource mobilization" },
      { en: "This patient goes to room 1 — immediate.", intent: "ESI 1 designation" },
    ],
    vocab: [
      "ESI level",
      "chief complaint",
      "tachycardic",
      "hypotensive",
      "diaphoretic",
      "altered mental status",
      "GCS",
      "mechanism of injury",
    ],
    challenges: [
      "Triage a hypotensive patient with abdominal pain.",
      "Assign ESI levels to three patients presenting simultaneously.",
      "Handoff a high-acuity patient to the trauma team.",
    ],
    sampleConversation: [
      {
        speaker: "ai",
        en: "Medic bringing in a 45-year-old male — chest pain, diaphoretic, started 20 minutes ago. BP 90/60, HR 112, O2 sat 94% on room air.",
      },
      {
        speaker: "learner",
        en: "Activate the cath lab, get me a 12-lead now. Any radiation to the arm or jaw?",
      },
      {
        speaker: "ai",
        en: "He says it goes to his left arm. He's on aspirin and metoprolol at home.",
      },
      {
        speaker: "learner",
        en: "Give 325 aspirin chewed, start oxygen, get a second IV. Room 1 — this is an ESI 1.",
      },
    ],
  },
  {
    id: "resuscitation",
    name: "Resuscitation",
    emoji: "💓",
    blurb: "Cardiac arrest, ACLS protocols, team dynamics, post-ROSC care.",
    counterpart: "Nursing staff and respiratory therapy in the resuscitation bay.",
    learnerRole: "EM physician leading a code",
    toneNote:
      "Calm, authoritative, closed-loop communication. Name the person, state the task, confirm completion.",
    phrases: [
      {
        en: "Start CPR — I want compressions at 100 per minute, 2 inches deep.",
        intent: "Initiate CPR",
      },
      { en: "What's the rhythm? Pause compressions.", intent: "Rhythm check" },
      { en: "This is VF — charge to 200 joules. Everyone clear?", intent: "Defibrillation" },
      { en: "Give 1 mg epinephrine IV push, flush with 20 cc NS.", intent: "ACLS medication" },
      { en: "Maria — intubate. I want a video laryngoscope ready.", intent: "Airway task" },
      { en: "Time of CPR?", intent: "Time awareness" },
      {
        en: "We have ROSC. Start a post-arrest protocol — targeted temperature, 12-lead, cath lab on standby.",
        intent: "Post-ROSC",
      },
    ],
    vocab: [
      "VF",
      "PEA",
      "asystole",
      "ROSC",
      "defibrillation",
      "epinephrine",
      "amiodarone",
      "compressions",
      "intubation",
      "closed-loop communication",
    ],
    challenges: [
      "Lead an ACLS resuscitation for a ventricular fibrillation arrest.",
      "Manage a PEA arrest — identify and treat reversible causes (H's and T's).",
      "Communicate return of spontaneous circulation to the post-arrest team.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Everyone listen up — I'm running this code. Start CPR. What time did arrest happen?",
      },
      { speaker: "ai", en: "CPR started two minutes ago. First rhythm check in 30 seconds." },
      {
        speaker: "learner",
        en: "James, you're on compressions. Sarah, I need IV access and push 1 mg epi. What's the rhythm on the monitor?",
      },
      { speaker: "ai", en: "Ventricular fibrillation." },
      {
        speaker: "learner",
        en: "Charge to 200. Everyone clear? Clear! Shock delivered. Resume CPR immediately.",
      },
    ],
  },
  {
    id: "trauma",
    name: "Trauma Evaluation",
    emoji: "🩹",
    blurb: "Primary and secondary ATLS survey, trauma team activation, handoff to surgery.",
    counterpart: "Trauma nurse or surgery resident during a trauma activation.",
    learnerRole: "Emergency physician leading the primary trauma survey",
    toneNote:
      "Rapid, ABCDE structured, all decisions communicated aloud. Surgeon is called when indicated — handoff is collaborative.",
    phrases: [
      { en: "Airway is intact. Breath sounds equal bilaterally.", intent: "A and B survey" },
      { en: "Pelvis stable. No peritoneal signs.", intent: "Circulation/abdomen" },
      { en: "GCS is 14 — he's talking but confused.", intent: "Neuro status" },
      { en: "Full exposure — I need to see everything.", intent: "E: Expose" },
      { en: "FAST exam: free fluid in Morrison's pouch.", intent: "Bedside ultrasound" },
      {
        en: "Activate surgery — this is a positive FAST with hemodynamic instability.",
        intent: "Surgery handoff",
      },
      { en: "Get a trauma panel, type and cross, and portable CXR.", intent: "Labs and imaging" },
    ],
    vocab: [
      "primary survey",
      "ABCDE",
      "GCS",
      "FAST exam",
      "hemodynamic instability",
      "Morrison's pouch",
      "pneumothorax",
      "tension pneumo",
      "type and cross",
      "trauma panel",
    ],
    challenges: [
      "Run a primary ATLS survey on a polytrauma patient.",
      "Identify a tension pneumothorax and perform needle decompression.",
      "Handoff a hemodynamically unstable trauma patient to the surgeon.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Starting primary survey. Airway open — he's speaking to me. Breath sounds equal. No tracheal deviation.",
      },
      { speaker: "ai", en: "BP 88/60, HR 130. Two IVs in place, 1 liter NS running." },
      {
        speaker: "learner",
        en: "FAST exam — putting probe on Morrison's pouch now. There's fluid. Positive FAST.",
      },
      { speaker: "ai", en: "Surgery is on the phone." },
      {
        speaker: "learner",
        en: "Tell them: 32-year-old MVC, hemodynamically unstable, positive FAST in Morrison's. I need them in the bay now.",
      },
    ],
  },
  {
    id: "critical-procedures",
    name: "Critical Procedures",
    emoji: "🔧",
    blurb:
      "RSI intubation, central line, chest tube, LP — obtaining consent, briefing the team, calling steps.",
    counterpart: "Bedside nurse assisting with an urgent procedure.",
    learnerRole: "EM physician performing or directing a critical procedure",
    toneNote:
      "Brief, deliberate, safety-oriented. Call every step aloud. Confirm equipment before starting.",
    phrases: [
      {
        en: "I'm going to intubate — RSI. Give succinylcholine 1.5 mg per kilo and etomidate 0.3 mg per kilo.",
        intent: "RSI medications",
      },
      { en: "Pre-oxygenate for 3 minutes. BVM ready as backup.", intent: "Pre-intubation" },
      { en: "Blade in, I can see the cords. Tube passing now.", intent: "Intubation" },
      {
        en: "Confirm placement — capnography, bilateral breath sounds.",
        intent: "Tube confirmation",
      },
      { en: "I need a timeout before the central line.", intent: "Procedure safety" },
      { en: "Flush all ports, blood return in all lumens.", intent: "Line confirmation" },
    ],
    vocab: [
      "RSI",
      "succinylcholine",
      "etomidate",
      "laryngoscopy",
      "capnography",
      "central line",
      "chest tube",
      "lumbar puncture",
      "time-out",
      "sterile field",
    ],
    challenges: [
      "Brief the team and perform a rapid sequence intubation.",
      "Conduct a procedural time-out before inserting a right IJ central line.",
      "Confirm ETT placement and respond to an esophageal intubation.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "We need to intubate. RSI protocol. Lisa — draw succinylcholine 100 mg and etomidate 20 mg.",
      },
      { speaker: "ai", en: "Medications ready. Pre-oxygenation at 100% started." },
      {
        speaker: "learner",
        en: "Good. When I say go, push both meds. BVM team stays at the head in case I need a backup plan.",
      },
      { speaker: "ai", en: "Pushing now. Cords visible on video laryngoscope." },
      {
        speaker: "learner",
        en: "Tube in. Inflate the cuff. Capnography — I need waveform confirmation.",
      },
    ],
  },
  {
    id: "patient-communication",
    name: "Patient & Family Communication",
    emoji: "🗣️",
    blurb:
      "Explaining diagnoses, delivering bad news, discharge instructions in high-stakes ED encounters.",
    counterpart: "Patient or family member in an emergency department room.",
    learnerRole: "EM physician communicating with a patient or family",
    toneNote:
      "Direct but compassionate. Emergency patients are scared. Front-load the most important information. Use plain language.",
    phrases: [
      { en: "I have the results. I want to explain what we found.", intent: "Open bad news" },
      {
        en: "Your EKG shows a heart attack happening right now — we need to act fast.",
        intent: "STEMI disclosure",
      },
      { en: "I'm very sorry — we did everything we could.", intent: "Death notification" },
      {
        en: "You can go home today, but I need you to come back if any of these things happen:",
        intent: "Return precautions",
      },
      { en: "The most important thing to remember from today is:", intent: "Discharge key point" },
      { en: "Do you have someone who can be with you tonight?", intent: "Safety planning" },
    ],
    vocab: [
      "return precautions",
      "discharge instructions",
      "STEMI",
      "death notification",
      "informed consent",
      "capacity",
      "next of kin",
      "DNR/DNI",
    ],
    challenges: [
      "Deliver a new STEMI diagnosis to a conscious patient and obtain consent for the cath lab.",
      "Notify a family that resuscitation was unsuccessful.",
      "Give discharge instructions for an appendicitis that will be managed outpatient.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Mr. Garcia, I have your test results and I need to tell you something serious. Your EKG shows a heart attack happening right now.",
      },
      { speaker: "ai", en: "Oh my God. Am I going to die?" },
      {
        speaker: "learner",
        en: "You came in at the right time. We're going to take you to the heart catheterization lab immediately to open the blocked artery. That's the best treatment we have.",
      },
      { speaker: "ai", en: "Is my family here?" },
      {
        speaker: "learner",
        en: "We're calling them now. First I need your permission to proceed with this procedure. Every minute matters.",
      },
    ],
  },
  {
    id: "handoffs",
    name: "Handoffs & Disposition",
    emoji: "🔄",
    blurb:
      "Admitting, transferring, or signing out patients — structured communication between teams.",
    counterpart: "Hospitalist, ICU physician, consultant, or oncoming EM shift physician.",
    learnerRole: "EM physician admitting a patient or completing a sign-out",
    toneNote:
      "SBAR format. Succinct, accurate, anticipate questions. 'Here is the patient, here is the plan, here is what worries me.'",
    phrases: [
      {
        en: "I have an admission for medicine — can I give you a quick SBAR?",
        intent: "Open admission call",
      },
      {
        en: "Situation: 68-year-old with CHF exacerbation, BNP 4,200, bilateral crackles.",
        intent: "S — Situation",
      },
      { en: "Background: known EF of 25%, last admission 3 months ago.", intent: "B — Background" },
      {
        en: "Assessment: acute decompensated heart failure, not in cardiogenic shock.",
        intent: "A — Assessment",
      },
      {
        en: "Recommendation: admit to telemetry, start IV diuresis, low-sodium diet.",
        intent: "R — Recommendation",
      },
      {
        en: "What I'm watching for: if he drops his pressure below 90, call me immediately.",
        intent: "Concern handoff",
      },
    ],
    vocab: [
      "SBAR",
      "admission",
      "disposition",
      "telemetry",
      "ICU",
      "transfer",
      "sign-out",
      "I-PASS",
      "pending results",
      "anticipatory guidance",
    ],
    challenges: [
      "Admit a CHF exacerbation patient to the hospitalist using SBAR.",
      "Sign out three patients to the oncoming physician at shift change.",
      "Transfer a trauma patient to a higher-level trauma center.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Hi, it's Dr. Chen from the ED. I have an admission for you — quick SBAR?",
      },
      { speaker: "ai", en: "Go ahead." },
      {
        speaker: "learner",
        en: "68-year-old female, CHF exacerbation. BNP 4,200, O2 on 4L, bilateral crackles. EF is 25% at baseline.",
      },
      { speaker: "ai", en: "What's her pressure and heart rate?" },
      {
        speaker: "learner",
        en: "BP 148/90, HR 88 — stable. Not in shock. I've started IV Lasix 80 mg already. She needs telemetry and diuresis continued.",
      },
    ],
  },
];

export function getEmArea(id: string | null | undefined): ModuleArea | null {
  if (!id) return null;
  return EM_AREAS.find((a) => a.id === id) ?? null;
}
