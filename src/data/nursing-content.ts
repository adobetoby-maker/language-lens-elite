// Nursing scenario content for the Nursing module.
// Phrases are stored in English — the AI tutor translates and roleplays
// in the learner's selected target language.
//
// Language reflects real bedside nursing communication: patient-centered,
// safety-focused, team-collaborative. Settings span med-surg, ICU, ER, L&D.
// Sources: SBAR communication framework (Leonard et al.), ISMP safe medication
// practices, TJC National Patient Safety Goals.
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

export const NURSING_AREAS: ModuleArea[] = [
  {
    id: "patient-assessment",
    name: "Patient Assessment",
    emoji: "🩺",
    blurb:
      "Head-to-toe nursing assessment, vital signs interpretation, pain screening, and change-in-status recognition.",
    counterpart: "Patient in a medical-surgical bed during morning rounds.",
    learnerRole: "Registered nurse doing an initial or shift assessment",
    toneNote:
      "Warm, systematic, conversational. Explain what you're doing before you do it. Watch for patient non-verbal cues.",
    phrases: [
      {
        en: "Good morning — I'm your nurse today. I'm going to check a few things before we start.",
        intent: "Morning introduction",
      },
      {
        en: "Can you tell me your name and date of birth for me?",
        intent: "Patient identification",
      },
      { en: "On a scale of zero to ten, how is your pain right now?", intent: "Pain screening" },
      {
        en: "I'm going to listen to your heart and lungs — take a deep breath.",
        intent: "Auscultation",
      },
      {
        en: "Your blood pressure is a little high this morning. Are you feeling anything different?",
        intent: "Abnormal vital",
      },
      {
        en: "I noticed your urine output has been lower than expected. When did you last drink fluids?",
        intent: "I&O assessment",
      },
      { en: "Can you squeeze my hands? Any numbness or tingling anywhere?", intent: "Neuro check" },
    ],
    vocab: [
      "vital signs",
      "pain scale",
      "auscultation",
      "breath sounds",
      "pedal edema",
      "capillary refill",
      "urine output",
      "orientation x3",
      "skin turgor",
    ],
    challenges: [
      "Complete a head-to-toe assessment on a post-op day-one abdominal surgery patient.",
      "Recognize and report a change in mental status to the physician.",
      "Document findings from a nursing assessment accurately.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Good morning, Mrs. Torres. I'm your nurse, Ana. Can you tell me your full name and date of birth?",
      },
      { speaker: "ai", en: "Maria Elena Torres, March 5th, 1958." },
      { speaker: "learner", en: "Perfect. How are you feeling this morning? Any pain?" },
      { speaker: "ai", en: "My stomach still hurts — maybe a 5." },
      {
        speaker: "learner",
        en: "I'll get you something for that after I finish checking your vitals. Let me listen to your lungs first.",
      },
    ],
  },
  {
    id: "medication-administration",
    name: "Medication Administration",
    emoji: "💊",
    blurb:
      "Safe medication practices — the five rights, high-alert medications, patient education, and IV line management.",
    counterpart: "Patient in bed receiving scheduled or PRN medications.",
    learnerRole: "Nurse administering medications during a medication pass",
    toneNote:
      "Safety-first, deliberate, unhurried. Explain every medication before giving it. Confirm allergies every time.",
    phrases: [
      {
        en: "Before I give this, I need to confirm your name and date of birth.",
        intent: "Two-patient identifiers",
      },
      {
        en: "Do you have any allergies I should know about — especially to medications?",
        intent: "Allergy check",
      },
      {
        en: "This is metoprolol — it slows your heart rate and lowers your blood pressure. Any questions before I give it?",
        intent: "Medication education",
      },
      {
        en: "I'm going to flush your IV line before and after to make sure it's patent.",
        intent: "IV patency",
      },
      {
        en: "This medication can make you dizzy — don't get up without calling me.",
        intent: "Safety counseling",
      },
      {
        en: "I held your blood pressure medication because your pressure is 88/58 — I'm notifying the physician.",
        intent: "Hold and notify",
      },
    ],
    vocab: [
      "five rights",
      "high-alert medication",
      "PRN",
      "scheduled medication",
      "IV flush",
      "infiltration",
      "extravasation",
      "heparin",
      "insulin",
      "anticoagulant",
    ],
    challenges: [
      "Give a patient their morning medications and explain each one.",
      "Identify a medication error before administration and report it.",
      "Hold a blood pressure medication and explain why to the patient.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Mr. Kim, I have your morning medications. Can I get your name and birthday first?",
      },
      { speaker: "ai", en: "James Kim, July 14, 1965." },
      { speaker: "learner", en: "Thank you. Any allergies to medications?" },
      { speaker: "ai", en: "Penicillin." },
      {
        speaker: "learner",
        en: "Got it — none of these are penicillin. I have your metoprolol, aspirin, and lisinopril. The first one will slow your heart rate slightly. Let me check your blood pressure first.",
      },
    ],
  },
  {
    id: "sbar-communication",
    name: "SBAR Communication",
    emoji: "📞",
    blurb:
      "Calling a physician with a concern, using structured SBAR communication to escalate patient status.",
    counterpart:
      "Physician (hospitalist, resident, or attending) responding to a nurse's concern call.",
    learnerRole: "Nurse escalating a change in patient condition",
    toneNote:
      "Confident, organized, complete. Know your patient before you call. Give the complete picture — you're the physician's eyes at the bedside.",
    phrases: [
      {
        en: "Dr. Smith, this is Nurse Patel calling about your patient in room 412.",
        intent: "Identify self and patient",
      },
      {
        en: "I'm calling because his blood pressure has dropped to 82/54 in the last 30 minutes.",
        intent: "Situation (S)",
      },
      {
        en: "He's a 70-year-old admitted for sepsis, day 2 of IV antibiotics.",
        intent: "Background (B)",
      },
      {
        en: "He's looking more lethargic and his urine is down to 20 cc in the last hour.",
        intent: "Assessment (A)",
      },
      {
        en: "I'd like you to come assess him, and I'm requesting a fluid bolus order.",
        intent: "Recommendation (R)",
      },
      {
        en: "I'll read back: 500 cc NS bolus, repeat vitals in 15 minutes, call if pressure drops further.",
        intent: "Read-back",
      },
    ],
    vocab: [
      "SBAR",
      "situation",
      "background",
      "assessment",
      "recommendation",
      "read-back",
      "escalate",
      "rapid response",
      "attending",
      "verbal order",
    ],
    challenges: [
      "Call a physician using SBAR for a patient with new-onset confusion.",
      "Activate a rapid response team for a deteriorating patient.",
      "Receive and read back a verbal order from a physician.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Dr. Reyes, this is Nurse Chen calling about Mr. Alvarez in room 308. I have a concern about his status.",
      },
      { speaker: "ai", en: "Go ahead." },
      {
        speaker: "learner",
        en: "His blood pressure dropped from 124/82 to 88/54 in the last 20 minutes. He's post-op day 1 from a bowel resection.",
      },
      { speaker: "ai", en: "What's his heart rate? Is the wound site dry?" },
      {
        speaker: "learner",
        en: "Heart rate 112. The wound dressing has a small amount of sanguineous drainage but no active bleed visible. I'm concerned about internal bleeding.",
      },
      {
        speaker: "ai",
        en: "I'm coming now. Get a type and cross and CBC stat. Start 1 liter NS wide open.",
      },
    ],
  },
  {
    id: "patient-education",
    name: "Patient Education & Discharge",
    emoji: "📋",
    blurb:
      "Teaching patients about their condition, medications, and discharge instructions using plain language.",
    counterpart:
      "Patient being discharged after a hospitalization or receiving new health information.",
    learnerRole: "Nurse providing bedside patient education or discharge teaching",
    toneNote:
      "Plain language, teach-back method, no jargon. Confirm comprehension before the patient leaves. 'What will you tell your family about what happened today?'",
    phrases: [
      {
        en: "I want to go through your discharge instructions with you before you leave.",
        intent: "Open discharge teaching",
      },
      {
        en: "This is your new water pill — you'll need to take it every morning and watch for swelling.",
        intent: "Medication teaching",
      },
      {
        en: "Come back to the ER right away if you feel chest pain, sudden shortness of breath, or leg swelling.",
        intent: "Return precautions",
      },
      {
        en: "To make sure I explained it clearly — can you tell me in your own words what you'll do at home?",
        intent: "Teach-back",
      },
      {
        en: "Do you have any questions? There are no wrong questions.",
        intent: "Invite questions",
      },
      {
        en: "Who is picking you up? Make sure they hear this too.",
        intent: "Include support person",
      },
    ],
    vocab: [
      "teach-back",
      "discharge instructions",
      "return precautions",
      "follow-up appointment",
      "medication compliance",
      "diet restriction",
      "activity restriction",
      "wound care",
    ],
    challenges: [
      "Use the teach-back method to confirm a patient understands their new insulin regimen.",
      "Educate a patient on low-sodium diet for newly diagnosed heart failure.",
      "Provide discharge instructions to a patient who speaks limited English via an interpreter.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Before you go home, I want to make sure you understand your new medication. This white pill is furosemide — it's a diuretic, which means it helps your body get rid of extra fluid.",
      },
      { speaker: "ai", en: "Do I take it at night?" },
      {
        speaker: "learner",
        en: "Take it in the morning — if you take it at night, you'll be up all night using the bathroom. Now, to check my teaching — can you tell me what this pill does and when you'll take it?",
      },
      { speaker: "ai", en: "It gets rid of extra water. I take it in the morning." },
      {
        speaker: "learner",
        en: "Exactly right. You also need to come back immediately if you gain more than 2 pounds in one day — that means the fluid is coming back.",
      },
    ],
  },
  {
    id: "icu-nursing",
    name: "ICU / Critical Care",
    emoji: "🏥",
    blurb:
      "Monitoring ventilated patients, drip titration, family communication, and handoff in the ICU.",
    counterpart:
      "ICU physician, respiratory therapist, or family member of a critically ill patient.",
    learnerRole: "ICU nurse managing a critically ill patient on ventilator support",
    toneNote:
      "Precise, time-sensitive, data-driven. Name every number. In family conversations, translate clinical language into plain speech.",
    phrases: [
      {
        en: "His vent settings are AC/VC at a rate of 16, tidal volume 450, PEEP 8, FiO2 50%.",
        intent: "Vent report",
      },
      {
        en: "MAP has been running 55–65. I've titrated the norepinephrine up to 0.12 mcg per kilo per minute.",
        intent: "Vasopressor update",
      },
      {
        en: "He had an episode of desaturation to 84% — I increased FiO2 and he came back to 96%.",
        intent: "Acute event report",
      },
      {
        en: "Your family member is very sick — she's on a breathing machine that's doing the work her lungs can't do right now.",
        intent: "Family communication",
      },
      {
        en: "We're doing everything we can — and we'll keep you updated every few hours.",
        intent: "Family reassurance",
      },
    ],
    vocab: [
      "ventilator",
      "PEEP",
      "FiO2",
      "tidal volume",
      "MAP",
      "vasopressor",
      "norepinephrine",
      "drip titration",
      "CRRT",
      "sedation score",
    ],
    challenges: [
      "Report vent settings and hemodynamics to the intensivist during morning rounds.",
      "Titrate a norepinephrine drip in response to dropping MAP.",
      "Speak with a family member about the status of a ventilated loved one.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Dr. Park, morning update on bed 6. He's on AC/VC, rate 14, TV 500, PEEP 5, FiO2 40%. Overnight he was stable.",
      },
      { speaker: "ai", en: "What's his MAP running?" },
      {
        speaker: "learner",
        en: "65 to 70 all night. Norepinephrine held steady at 0.08. Urine output was adequate — 40 to 60 cc per hour.",
      },
      {
        speaker: "ai",
        en: "Good. Let's try to wean FiO2 to 35% if he tolerates. Any neuro changes?",
      },
      {
        speaker: "learner",
        en: "He followed commands at 0600 — squeezed my hand bilaterally. RASS is negative 1.",
      },
    ],
  },
  {
    id: "labor-delivery",
    name: "Labor & Delivery",
    emoji: "👶",
    blurb: "Fetal monitoring, labor support, pushing coaching, postpartum assessment.",
    counterpart: "Laboring patient or new mother in an L&D room.",
    learnerRole: "L&D nurse supporting a laboring patient",
    toneNote:
      "Warm, encouraging, present. L&D nursing language is both technical (decelerations, dilation) and deeply personal. Be the calm in the room.",
    phrases: [
      { en: "Your baby's heart rate looks great on the monitor right now.", intent: "Reassurance" },
      {
        en: "You're dilated to 7 centimeters — you're making great progress.",
        intent: "Progress update",
      },
      {
        en: "When you feel a contraction, bear down and push like you're trying to have a bowel movement.",
        intent: "Pushing instruction",
      },
      {
        en: "I'm seeing some late decelerations — I want the doctor to come take a look.",
        intent: "Fetal concern escalation",
      },
      {
        en: "Your fundus feels firm and your bleeding is within normal range.",
        intent: "Postpartum assessment",
      },
      {
        en: "Have you thought about your pain management plan — epidural, nitrous, or natural?",
        intent: "Pain plan",
      },
    ],
    vocab: [
      "dilation",
      "effacement",
      "station",
      "contraction",
      "fetal heart rate",
      "deceleration",
      "fundus",
      "lochia",
      "epidural",
      "pitocin",
    ],
    challenges: [
      "Coach a patient through active labor and pushing.",
      "Respond to and escalate a fetal heart rate deceleration.",
      "Perform a postpartum fundal check and explain findings to the patient.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "You're doing so well — I just checked and you're at 8 centimeters. We're getting close.",
      },
      { speaker: "ai", en: "I feel like I need to push right now." },
      {
        speaker: "learner",
        en: "Hold on — let me check the baby's heart rate. The monitor looks good. Let's get the doctor in here. Try to breathe through this next contraction.",
      },
      { speaker: "ai", en: "It hurts so much." },
      {
        speaker: "learner",
        en: "I know — you're doing it. Breathe in through your nose, slow out. You're almost there.",
      },
    ],
  },
];

export function getNursingArea(id: string | null | undefined): ModuleArea | null {
  if (!id) return null;
  return NURSING_AREAS.find((a) => a.id === id) ?? null;
}
