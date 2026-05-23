// Location-based scenario content for the Orthopedics module.
// Phrases are stored in English — the AI tutor translates and roleplays
// in the learner's selected target language.

export interface OrthoPhrase {
  /** Short English phrase the learner wants to be able to say. */
  en: string;
  /** What the learner is doing with this phrase (intent / register). */
  intent: string;
}

export interface OrthoArea {
  id: string;
  name: string;
  emoji: string;
  blurb: string;
  /** Who the AI plays opposite the learner in this scenario. */
  counterpart: string;
  /** Who the learner is in this scenario (overrides default userRole). */
  learnerRole: string;
  /** Tone / register guidance for the AI. */
  toneNote: string;
  phrases: OrthoPhrase[];
  vocab: string[];
  /** Practice prompts that kick off an AI roleplay. */
  challenges: string[];
}

export const ORTHO_AREAS: OrthoArea[] = [
  {
    id: "clinic",
    name: "Clinic",
    emoji: "🏥",
    blurb: "Outpatient visits — history, physical exam, shared decision-making, follow-ups.",
    counterpart: "Adult outpatient (or family member) presenting for an ortho concern.",
    learnerRole: "Orthopedic surgeon in clinic",
    toneNote: "Warm, plain-language, avoid jargon unless explained.",
    phrases: [
      { en: "Where exactly is the pain?", intent: "Localize pain" },
      { en: "On a scale of 0 to 10, how bad is it today?", intent: "Pain score" },
      { en: "Does it wake you up at night?", intent: "Red-flag screen" },
      { en: "Have you had any falls or injuries?", intent: "Trauma history" },
      { en: "Let me examine your knee — tell me if anything hurts.", intent: "Exam intro" },
      { en: "I'd like to get an X-ray today.", intent: "Order imaging" },
      { en: "We can try physical therapy first before surgery.", intent: "Conservative plan" },
      { en: "Let's see you back in six weeks.", intent: "Follow-up" },
    ],
    vocab: [
      "pain",
      "swelling",
      "stiffness",
      "range of motion",
      "weight bearing",
      "tenderness",
      "X-ray",
      "physical therapy",
    ],
    challenges: [
      "Take a focused history from a 65-year-old with knee pain.",
      "Explain a meniscus tear and treatment options to the patient.",
      "Counsel a patient choosing between PT and arthroscopy.",
    ],
  },
  {
    id: "or",
    name: "Operating Room",
    emoji: "🔪",
    blurb: "Time-out, intraop requests to scrub tech and circulator, surgeon-to-surgeon.",
    counterpart: "Scrub tech, circulating nurse, anesthesiologist, or assistant surgeon.",
    learnerRole: "Operating surgeon",
    toneNote: "Brief, directive, calm. Use standard OR call-and-response.",
    phrases: [
      {
        en: "Time out — patient name, procedure, side, allergies.",
        intent: "Pre-incision time-out",
      },
      { en: "Knife to skin.", intent: "Start of case" },
      { en: "Bovie on coag, please.", intent: "Energy device" },
      { en: "Can I have the 15 blade?", intent: "Instrument request" },
      { en: "Suction — I can't see.", intent: "Visualization" },
      { en: "Irrigate, please.", intent: "Wound care" },
      { en: "Estimated blood loss is 150 cc.", intent: "EBL update" },
      { en: "Closing now — countdown sponges and needles.", intent: "Final count" },
    ],
    vocab: [
      "scalpel",
      "retractor",
      "suture",
      "drill",
      "saw",
      "implant",
      "irrigation",
      "cautery",
      "drape",
    ],
    challenges: [
      "Lead a surgical time-out with the OR team.",
      "Ask the scrub tech for instruments during a knee arthroscopy.",
      "Hand the case off to the recovery room nurse.",
    ],
  },
  {
    id: "doc-to-doc",
    name: "Doc-to-Doc",
    emoji: "📞",
    blurb: "Consult calls, second opinions, transfers, curbsides with colleagues.",
    counterpart: "Another physician (PCP, hospitalist, ED doc, or subspecialist).",
    learnerRole: "Orthopedic consultant",
    toneNote: "Concise, structured (one-liner → key data → ask). Peer-to-peer.",
    phrases: [
      { en: "Thanks for the consult — give me the one-liner.", intent: "Open consult" },
      { en: "What's the mechanism of injury?", intent: "Trauma context" },
      { en: "What does the X-ray show?", intent: "Imaging" },
      { en: "Is the patient neurovascularly intact?", intent: "NV check" },
      { en: "Plan is to admit for surgery in the morning.", intent: "Disposition" },
      { en: "Make them NPO after midnight.", intent: "Pre-op order" },
      { en: "I'll come see them within the hour.", intent: "ETA" },
    ],
    vocab: [
      "consult",
      "admit",
      "NPO",
      "neurovascular",
      "mechanism",
      "displaced",
      "comminuted",
      "operative",
    ],
    challenges: [
      "Take a fracture consult call from the ER physician.",
      "Give a one-liner handoff to the on-call partner.",
      "Negotiate a transfer with an outside hospital.",
    ],
  },
  {
    id: "radiology",
    name: "Radiology",
    emoji: "🩻",
    blurb: "Reading studies with the radiologist, ordering correctly, intraop fluoro.",
    counterpart: "Radiologist or radiology tech.",
    learnerRole: "Orthopedic surgeon reviewing imaging",
    toneNote: "Precise anatomic language, side and view always specified.",
    phrases: [
      { en: "Can we get an AP and lateral of the right knee?", intent: "Order views" },
      { en: "I need weight-bearing films.", intent: "Specify technique" },
      { en: "Can you read this MRI with me?", intent: "Joint read" },
      { en: "Is there any displacement?", intent: "Fracture detail" },
      { en: "Any signs of avascular necrosis?", intent: "Pathology check" },
      { en: "Can we get fluoro on the table?", intent: "Intraop imaging" },
    ],
    vocab: [
      "AP view",
      "lateral",
      "oblique",
      "MRI",
      "CT",
      "fluoroscopy",
      "displacement",
      "avulsion",
      "lucency",
    ],
    challenges: [
      "Read a tibial plateau X-ray with the radiologist.",
      "Order pre-op imaging for a total hip arthroplasty.",
      "Describe a Weber B ankle fracture to a colleague.",
    ],
  },
  {
    id: "er-to-ortho",
    name: "ER → Ortho",
    emoji: "🚑",
    blurb: "ED handoff, splinting, reductions, deciding admit vs discharge.",
    counterpart: "ED physician, ED nurse, or trauma patient in the ED.",
    learnerRole: "Ortho on-call resident or attending",
    toneNote: "Fast, structured, decision-focused.",
    phrases: [
      {
        en: "I'm the orthopedics resident — what do you have for me?",
        intent: "Arrive for consult",
      },
      { en: "When did the injury happen?", intent: "Timing" },
      { en: "Has the patient had pain medication?", intent: "Pre-reduction" },
      { en: "We need to reduce this fracture now.", intent: "Plan" },
      { en: "I'll splint it with a sugar-tong.", intent: "Immobilization" },
      { en: "Discharge home with follow-up in clinic in one week.", intent: "Disposition" },
    ],
    vocab: [
      "reduction",
      "splint",
      "cast",
      "neurovascular check",
      "open fracture",
      "dislocation",
      "tetanus",
    ],
    challenges: [
      "Reduce a shoulder dislocation and explain the steps to the patient.",
      "Decide admit vs discharge for an elderly hip fracture.",
      "Counsel a patient on cast care before discharge.",
    ],
  },
  {
    id: "sports",
    name: "Sports Medicine",
    emoji: "⚽",
    blurb: "Athletes, return-to-play decisions, ACL/meniscus, throwing shoulder.",
    counterpart: "Athlete (recreational to elite), parent, coach, or athletic trainer.",
    learnerRole: "Sports medicine orthopedist",
    toneNote: "Encouraging, concrete timelines, performance-oriented vocabulary.",
    phrases: [
      { en: "How did the injury happen on the field?", intent: "Mechanism" },
      { en: "Did you hear or feel a pop?", intent: "ACL screen" },
      { en: "Can you put weight on it?", intent: "WBAT" },
      { en: "You'll be out about six months after ACL surgery.", intent: "Timeline" },
      { en: "We'll start return-to-play protocol once you have full strength.", intent: "RTP" },
      { en: "Wear the brace during all activity for now.", intent: "Bracing" },
    ],
    vocab: [
      "ACL",
      "meniscus",
      "rotator cuff",
      "labrum",
      "sprain",
      "strain",
      "rehab",
      "return to play",
    ],
    challenges: [
      "Counsel a high-school athlete after an ACL tear.",
      "Talk a pitcher through rotator cuff rehab.",
      "Explain return-to-play criteria to a coach.",
    ],
  },
  {
    id: "arthroplasty",
    name: "Arthroplasty",
    emoji: "🦴",
    blurb: "Joint replacement clinic, pre-op education, implant choices, rehab.",
    counterpart: "Older adult considering or recovering from hip/knee replacement.",
    learnerRole: "Joint replacement surgeon",
    toneNote: "Patient, reassuring, expectation-setting.",
    phrases: [
      { en: "Your X-rays show bone-on-bone arthritis.", intent: "Diagnosis" },
      { en: "A total knee replacement could really help.", intent: "Recommend" },
      { en: "Surgery takes about 90 minutes.", intent: "Logistics" },
      { en: "You'll be up and walking the same day.", intent: "Recovery" },
      { en: "Most patients go home the next day.", intent: "Length of stay" },
      { en: "Full recovery is about three months.", intent: "Timeline" },
    ],
    vocab: [
      "arthritis",
      "implant",
      "prosthesis",
      "cemented",
      "uncemented",
      "revision",
      "infection",
      "DVT",
    ],
    challenges: [
      "Counsel a patient about total hip vs total knee replacement.",
      "Explain risks and benefits of joint replacement.",
      "Walk a post-op patient through rehab milestones.",
    ],
  },
  {
    id: "trauma",
    name: "Trauma",
    emoji: "💥",
    blurb: "High-energy injuries, polytrauma, open fractures, time-critical decisions.",
    counterpart: "Trauma team member, ICU nurse, or critically injured patient/family.",
    learnerRole: "Orthopedic trauma surgeon",
    toneNote: "Direct, urgent, ATLS-aligned phrasing.",
    phrases: [
      { en: "What were the vital signs in the field?", intent: "Pre-hospital" },
      { en: "Is this an open fracture?", intent: "Open vs closed" },
      { en: "Give weight-based antibiotics now.", intent: "Open fx protocol" },
      { en: "Has tetanus been updated?", intent: "Tetanus" },
      { en: "We need to take this patient to the OR emergently.", intent: "Disposition" },
      { en: "I'll speak to the family about the surgery.", intent: "Family update" },
    ],
    vocab: [
      "polytrauma",
      "open fracture",
      "compartment syndrome",
      "external fixator",
      "damage control",
      "ICU",
    ],
    challenges: [
      "Run an ortho trauma evaluation on a polytrauma patient.",
      "Update a family on a damage-control orthopedic plan.",
      "Recognize and manage compartment syndrome at the bedside.",
    ],
  },
  {
    id: "oncology",
    name: "Ortho Oncology",
    emoji: "🎗️",
    blurb: "Bone tumors, soft-tissue sarcomas, biopsies, life-altering conversations.",
    counterpart: "Patient (or family) with a suspected or confirmed bone/soft-tissue tumor.",
    learnerRole: "Orthopedic oncologist",
    toneNote: "Slow, compassionate, careful with words like 'cancer' and prognosis.",
    phrases: [
      { en: "We found a mass on your imaging.", intent: "Open the conversation" },
      { en: "We need a biopsy to know exactly what this is.", intent: "Plan" },
      { en: "Some bone tumors are benign — we don't know yet.", intent: "Reassure carefully" },
      { en: "I want to discuss your case at our tumor board.", intent: "Multidisciplinary" },
      { en: "Treatment may include surgery, chemo, and radiation.", intent: "Roadmap" },
      { en: "I know this is a lot to hear.", intent: "Acknowledge emotion" },
    ],
    vocab: [
      "mass",
      "lesion",
      "biopsy",
      "benign",
      "malignant",
      "sarcoma",
      "metastasis",
      "tumor board",
      "limb salvage",
    ],
    challenges: [
      "Break the news of a suspected sarcoma to a young adult.",
      "Explain limb-salvage vs amputation to a family.",
      "Walk a patient through the biopsy process and next steps.",
    ],
  },
];

export function getOrthoArea(id: string | null | undefined): OrthoArea | null {
  if (!id) return null;
  return ORTHO_AREAS.find((a) => a.id === id) ?? null;
}
