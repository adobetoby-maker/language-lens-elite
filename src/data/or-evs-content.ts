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

export interface ModuleVocabSet {
  category: string;
  emoji: string;
  words: string[];
}

export interface OrEvsModuleContent {
  moduleId: string;
  areas: ModuleArea[];
  vocabSets: ModuleVocabSet[];
}

// ─────────────────────────────────────────────────────────────────────────────
// OR ROOM TURNOVER
// ─────────────────────────────────────────────────────────────────────────────

const orTurnoverArea: ModuleArea = {
  id: "or-turnover",
  name: "OR Room Turnover",
  emoji: "🔄",
  blurb:
    "Cleaning between surgical cases. Speed matters — the next patient is waiting. You need to communicate clearly with the circulating nurse about what's in the room, what's been handled, and when the room is ready.",
  counterpart: "Circulating nurse coordinating the next case",
  learnerRole: "EVS housekeeping technician turning over OR Suite 3",
  toneNote:
    "Fast and direct. OR staff are under pressure — they don't have time for long explanations. Say what you need to say in one sentence. 'Room is ready' means everything is done, nothing vague.",
  phrases: [
    {
      en: "Room is ready — mopped, surfaces down, trash out.",
      intent: "Formally reporting that turnover is complete and the room can be inspected",
    },
    {
      en: "Is it okay to come in now?",
      intent: "Asking the circulating nurse for clearance to enter the room and begin cleaning",
    },
    {
      en: "I see blood on the floor. I am going to clean it now.",
      intent: "Alerting staff to a visible contaminated spill before beginning cleanup",
    },
    {
      en: "The sharps container is full. I need to change it.",
      intent: "Reporting a full sharps container that must be swapped before the next case",
    },
    {
      en: "Where do you want the biohazard bag — in the hallway or in the room?",
      intent: "Asking about the correct disposal staging location for contaminated waste",
    },
    {
      en: "I have everything except the mop bucket. Can I leave and come back?",
      intent: "Communicating a missing supply and asking permission to briefly step out",
    },
    {
      en: "Is this room a terminal clean or a turnover?",
      intent:
        "Asking whether the room needs a quick between-case clean or a full end-of-day deep clean",
    },
    {
      en: "How many minutes do I have before the next case?",
      intent: "Asking the charge nurse how much time is available to complete the turnover",
    },
  ],
  vocab: [
    "turnover",
    "terminal clean",
    "between cases",
    "mop",
    "sharps container",
    "biohazard bag",
    "circulating nurse",
    "room ready",
    "case",
    "contaminated",
  ],
  challenges: [
    "The circulating nurse says 'We need to flip this room in 20' — she means 20 minutes. What do you say to confirm you understand and ask if you can start now?",
    "You find a used needle on the floor next to the OR table. You cannot pick it up with your hands. What do you tell the nurse?",
    "You finished the turnover but the mop bucket still has dirty water in the room. The nurse is walking back in. What do you say?",
  ],
  sampleConversation: [
    {
      speaker: "learner",
      en: "Excuse me — is it okay to come in? The case is finished?",
    },
    {
      speaker: "ai",
      en: "Yes, come in. We need this room in 15 minutes. The patient is already in pre-op.",
    },
    {
      speaker: "learner",
      en: "Okay. I see blood on the floor near the table. I will clean that first.",
    },
    {
      speaker: "ai",
      en: "Good. And the sharps container on the back wall needs to be changed — it's almost full.",
    },
    {
      speaker: "learner",
      en: "I will change it now. When I finish, I will tell you — room is ready.",
    },
    {
      speaker: "ai",
      en: "Perfect. Quick as you can — I appreciate it.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// EQUIPMENT NAMES
// ─────────────────────────────────────────────────────────────────────────────

const orEquipmentArea: ModuleArea = {
  id: "or-equipment",
  name: "OR Equipment Names",
  emoji: "🔧",
  blurb:
    "The operating room has equipment you will work around every shift. You do not operate this equipment, but you must know its name so you can ask where to clean, what to avoid, and what needs to be moved.",
  counterpart: "Scrub tech or circulating nurse during room setup",
  learnerRole: "EVS tech cleaning the OR while the team preps for the next case",
  toneNote:
    "Practical and careful. These machines are expensive and some surfaces are sterile. You need to know the names to ask the right questions — 'Can I wipe down the bovie?' or 'Should I go around the back table?'",
  phrases: [
    {
      en: "Can I wipe down the bovie machine or do you need it first?",
      intent: "Asking the scrub tech whether the electrosurgical unit is ready to be cleaned",
    },
    {
      en: "Should I go around the back table or is it already broken down?",
      intent: "Asking whether the sterile back table has been struck so you can clean that area",
    },
    {
      en: "Is the C-arm staying in the room or should I work around it?",
      intent: "Asking whether the mobile X-ray machine will be moved before cleaning",
    },
    {
      en: "The kick bucket has fluid in it — do you want me to empty it?",
      intent: "Reporting a kick bucket with liquid waste and asking for direction",
    },
    {
      en: "Where does the mayo stand go after the case — stays in the room or out in the hall?",
      intent: "Asking about the proper staging location for the mayo stand between cases",
    },
    {
      en: "Is the tourniquet machine staying on the wall or do you need it moved?",
      intent: "Asking whether the tourniquet device needs to be repositioned before mopping",
    },
    {
      en: "The step stool is in my way. Is it okay to move it to the corner?",
      intent: "Asking permission to relocate a step stool to make room for cleaning",
    },
    {
      en: "I see the suction canister — do I empty it or does the nurse do that?",
      intent: "Asking who is responsible for disposing of the suction canister contents",
    },
  ],
  vocab: [
    "OR table (operating table)",
    "bovie (electrosurgical unit / ESU)",
    "mayo stand",
    "back table",
    "instrument table",
    "suction canister",
    "tourniquet machine",
    "C-arm (mobile fluoroscopy)",
    "kick bucket",
    "ring stand",
  ],
  challenges: [
    "The scrub tech says 'Don't touch the back table — it's still sterile.' What do you say to confirm you understand and to ask when you can clean that area?",
    "You need to mop under the OR table but the bovie pad cord is on the floor. You don't know if it's safe to move it. What do you ask?",
    "The nurse points at the ring stand and says 'That needs to go to central sterile.' You don't know where central sterile is. What do you say?",
  ],
  sampleConversation: [
    {
      speaker: "learner",
      en: "Excuse me — is the back table broken down? Can I clean that area?",
    },
    {
      speaker: "ai",
      en: "Not yet. Give me two minutes — I'm still breaking down the instrument table.",
    },
    {
      speaker: "learner",
      en: "Okay. Can I start with the bovie machine and the suction canister?",
    },
    {
      speaker: "ai",
      en: "The bovie is fine, yes. The suction canister — don't empty it. I'll cap it and put it in the biohazard bag. You can take the bag.",
    },
    {
      speaker: "learner",
      en: "Understood. And the kick bucket — there is fluid inside.",
    },
    {
      speaker: "ai",
      en: "Leave that for me too. Everything with body fluids, I handle. You clean surfaces and floor.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// COMMUNICATING WITH OR STAFF
// ─────────────────────────────────────────────────────────────────────────────

const orCommunicationArea: ModuleArea = {
  id: "or-communication",
  name: "Communicating with OR Staff",
  emoji: "🗣️",
  blurb:
    "OR nurses, surgeons, and scrub techs speak fast and expect short, clear answers. Learning to ask for permission, report status, and understand instructions keeps everyone safe and the schedule moving.",
  counterpart: "Charge nurse or circulating nurse in a busy OR hallway or suite",
  learnerRole: "EVS tech checking in at the nursing station or entering a room mid-shift",
  toneNote:
    "Respectful and efficient. OR staff appreciate EVS workers who communicate clearly and don't need to be managed. Don't disappear without saying something — always check in. 'Ready when you are' and 'Let me know' are powerful phrases.",
  phrases: [
    {
      en: "I am ready to clean Suite 4 — is it okay to go in?",
      intent: "Checking with the charge nurse before entering a suite",
    },
    {
      en: "The room is ready. Do you want to check it?",
      intent: "Notifying the nurse that cleaning is complete and inviting inspection",
    },
    {
      en: "I did not understand. Can you say that again, please?",
      intent: "Asking for repetition when you missed an instruction",
    },
    {
      en: "We need 15 minutes — is that okay?",
      intent: "Using the OR staff phrase back at them to communicate your own timeline",
    },
    {
      en: "Is there a spill in this room? I want to make sure I use the right cleaner.",
      intent: "Asking about the nature of any contamination so you select the correct disinfectant",
    },
    {
      en: "Someone told me to hold this room. Who do I check with?",
      intent: "Asking for clarification when you received a conflicting instruction",
    },
    {
      en: "I finished Suite 2. Where do you need me next?",
      intent: "Reporting task completion and asking for your next assignment",
    },
    {
      en: "There is a problem in the room — can you come look?",
      intent: "Flagging an issue you cannot resolve alone and requesting staff attention",
    },
  ],
  vocab: [
    "charge nurse",
    "circulating nurse",
    "scrub tech",
    "surgeon",
    "anesthesiologist",
    "hold the room",
    "clear to enter",
    "suite",
    "on deck (next case ready)",
    "turnaround time",
  ],
  challenges: [
    "The circulating nurse rushes past and says 'We need 15 on Suite 6.' You are currently cleaning Suite 5. What do you say to confirm and manage both assignments?",
    "A surgeon looks at you while walking in and says 'This room is not ready.' You believe it is ready. How do you respond calmly and professionally?",
    "You hear the intercom say 'EVS to OR Suite 8 STAT.' You don't know where Suite 8 is. What do you say when you reach the nursing station?",
  ],
  sampleConversation: [
    {
      speaker: "learner",
      en: "Excuse me — I am EVS. Is Suite 3 ready for me to clean?",
    },
    {
      speaker: "ai",
      en: "Almost. They're still pulling the patient. Give it five minutes, then go in.",
    },
    {
      speaker: "learner",
      en: "Okay. I will wait. Do I need a special cleaner for this case? Was there blood?",
    },
    {
      speaker: "ai",
      en: "Yes, it was an ortho case — there was blood. Use the bleach-based disinfectant, not just the regular wipe.",
    },
    {
      speaker: "learner",
      en: "I understand. Bleach disinfectant. I will get it now so I am ready.",
    },
    {
      speaker: "ai",
      en: "Perfect. Come find me when the room is done — I need to check it before we open for the next case.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// SAFETY PROTOCOLS
// ─────────────────────────────────────────────────────────────────────────────

const orSafetyArea: ModuleArea = {
  id: "or-safety",
  name: "Safety Protocols",
  emoji: "⚠️",
  blurb:
    "The OR has strict safety rules around blood, body fluids, sharps, sterile fields, and PPE. Knowing the vocabulary for these situations is not optional — it protects you, the patients, and the surgical team.",
  counterpart: "Charge nurse or infection control nurse addressing the EVS team",
  learnerRole: "EVS tech being briefed on a contamination situation or safety concern",
  toneNote:
    "Serious and precise. There is no joking around safety talk in the OR. You are expected to know what PPE you need before you enter a room, to never touch a sterile field, and to report any sharps you find immediately.",
  phrases: [
    {
      en: "I need gloves and a gown before I go in — is there a spill?",
      intent: "Confirming what PPE is required before entering a contaminated room",
    },
    {
      en: "I found a sharp on the floor. I did not touch it. Can someone come?",
      intent: "Reporting an unsecured sharp and asking for help handling it safely",
    },
    {
      en: "I will not go near the sterile field. I will clean around it.",
      intent:
        "Verbally confirming to the scrub tech that you understand the sterile field boundary",
    },
    {
      en: "This is a blood spill — I am going to use the blood kit.",
      intent:
        "Announcing your plan to use a proper blood cleanup kit so staff know what you are doing",
    },
    {
      en: "I am putting this in the biohazard bag, not the regular trash.",
      intent: "Confirming correct waste segregation to prevent contamination errors",
    },
    {
      en: "My glove tore. I need to change it before I continue.",
      intent: "Stopping work and reporting a PPE failure before touching anything else",
    },
    {
      en: "The sharps container is almost full — it needs to be changed before the next case.",
      intent: "Proactively flagging a full sharps container as a safety concern",
    },
    {
      en: "Is this a contact-precaution room? Do I need a mask?",
      intent: "Asking whether additional infection control precautions apply before entering",
    },
  ],
  vocab: [
    "PPE (personal protective equipment)",
    "gloves",
    "gown",
    "mask",
    "sharps container",
    "biohazard bag",
    "sterile field",
    "blood spill kit",
    "contact precautions",
    "no-touch technique",
  ],
  challenges: [
    "You enter an OR suite and see a blue sterile drape on the back table with instruments on it. No staff is in the room. What do you do and what do you say when someone walks in?",
    "You are cleaning and your glove catches on the side of the OR table and tears. No one saw it. What is the correct action and what do you say?",
    "A nurse says 'This is a contact-precaution room — full PPE.' You have gloves but you don't have a gown. What do you say?",
  ],
  sampleConversation: [
    {
      speaker: "learner",
      en: "Excuse me — before I go in, is there a blood spill? Do I need the blood kit?",
    },
    {
      speaker: "ai",
      en: "Yes. There was a significant amount on the floor near the table. Use the blood spill kit and make sure you have a gown on too.",
    },
    {
      speaker: "learner",
      en: "Okay. Gown, gloves. I will get the blood kit from the supply room.",
    },
    {
      speaker: "ai",
      en: "And when you're in there — do not go near the back table. The scrub tech hasn't broken it down yet.",
    },
    {
      speaker: "learner",
      en: "I understand. I will not touch the sterile field. I clean around it.",
    },
    {
      speaker: "ai",
      en: "Good. If you find any sharps on the floor, do not pick them up — come get me immediately.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// SUPPLY ROOM & RESTOCKING
// ─────────────────────────────────────────────────────────────────────────────

const orSupplyArea: ModuleArea = {
  id: "or-supply",
  name: "Supply Room & Restocking",
  emoji: "📦",
  blurb:
    "EVS staff often restock OR suites and supply rooms between cases. You need to read supply labels, ask what's low, confirm what goes where, and communicate when something is out of stock.",
  counterpart: "Charge nurse or OR coordinator at the supply station",
  learnerRole: "EVS tech assigned to restocking suites during the afternoon downtime",
  toneNote:
    "Functional and accurate. Supply mistakes in the OR cost time and can delay patient care. If you are not sure where something goes or what a label says, ask — it is always better to ask than to put something in the wrong place.",
  phrases: [
    {
      en: "What supplies do you need restocked in Suite 2?",
      intent:
        "Asking the charge nurse what items are needed before going into the suite to restock",
    },
    {
      en: "We are out of blue biohazard bags in the supply room.",
      intent: "Reporting a stockout to the charge nurse so an order can be placed",
    },
    {
      en: "I cannot find the cleaning wipes — are they in a different location?",
      intent: "Asking where a specific item is stored when it is not in its usual spot",
    },
    {
      en: "This label says 'sterile' — should I put it in the supply room or give it to the scrub tech?",
      intent: "Asking about the correct destination for a sterile-labeled item",
    },
    {
      en: "How many sharps containers do I put in each room?",
      intent: "Asking for the standard count of sharps containers per suite",
    },
    {
      en: "The trash bags for OR rooms — are they the red ones or the clear ones?",
      intent: "Confirming the correct bag type for regulated medical waste versus regular trash",
    },
    {
      en: "I put extra gloves in Suite 4. Is that okay or do I need to move them?",
      intent: "Confirming that a restocking decision you already made was correct",
    },
    {
      en: "The soap dispenser in the scrub sink is empty — do you want me to fill it?",
      intent: "Reporting an empty dispenser and asking permission to refill it",
    },
  ],
  vocab: [
    "supply room",
    "restock",
    "par level (standard stock count)",
    "red bag (regulated medical waste)",
    "clear bag (regular trash)",
    "sterile item",
    "scrub sink",
    "dispenser",
    "count",
    "label",
  ],
  challenges: [
    "You are restocking Suite 5 and you notice the sharps container is only one-third full but the case list shows six more cases today. Should you change it now or wait? What do you ask the nurse?",
    "A box in the supply room has a label you cannot fully read. It says 'sterile — single use' and an expiration date. What do you do before putting it in a room?",
    "The charge nurse says 'Make sure Suite 1 has a par of four on the blue bags.' You are not sure what a par of four means. What do you ask?",
  ],
  sampleConversation: [
    {
      speaker: "learner",
      en: "Excuse me — I am restocking. What does Suite 1 need?",
    },
    {
      speaker: "ai",
      en: "Biohazard bags — we used a lot today. Four bags, the large blue ones. And check the soap dispenser at the scrub sink.",
    },
    {
      speaker: "learner",
      en: "Okay. Blue bags, four of them. And the soap. Is the trash bag in Suite 1 a red bag or a clear bag?",
    },
    {
      speaker: "ai",
      en: "Red bag for OR rooms — always red in any room where there is blood or body fluids. Clear bags are for break rooms and offices only.",
    },
    {
      speaker: "learner",
      en: "I understand. Red bag in the OR. I will remember that.",
    },
    {
      speaker: "ai",
      en: "Good. When you're done with Suite 1, come back — I need you to do Suite 3 as well.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// END-OF-DAY TERMINAL CLEAN
// ─────────────────────────────────────────────────────────────────────────────

const orTerminalCleanArea: ModuleArea = {
  id: "or-terminal-clean",
  name: "End-of-Day Terminal Clean",
  emoji: "🧹",
  blurb:
    "The terminal clean is a complete deep clean of every OR suite at the end of the day — floors, walls, ceiling vents, all surfaces, lights, and equipment exteriors. It is more thorough than a turnover and must be done in the right order. The charge nurse signs off when it is complete.",
  counterpart: "Charge nurse or EVS supervisor doing the end-of-day sign-off walkthrough",
  learnerRole: "EVS tech performing or completing a terminal clean on Suite 7",
  toneNote:
    "Methodical and thorough. The charge nurse does a detailed inspection — she will check the floor corners, the light handles, the tops of the equipment. If something is missed, you will be asked to redo it. Report each step as you complete it.",
  phrases: [
    {
      en: "I am starting the terminal clean on Suite 7. Is the room clear?",
      intent: "Confirming the room is free of staff and equipment before beginning deep clean",
    },
    {
      en: "I finished the walls and ceiling vents. Starting on the floor now.",
      intent:
        "Giving a progress update during the terminal clean so the supervisor knows the status",
    },
    {
      en: "The floor has been mopped — waiting for it to dry before the UV light.",
      intent: "Reporting floor completion and indicating the UV disinfection step is next",
    },
    {
      en: "I need to move the OR table to clean under it. Is that okay?",
      intent: "Asking permission before repositioning a large piece of equipment",
    },
    {
      en: "Suite 7 terminal clean is complete — ready for inspection.",
      intent:
        "Formally reporting the terminal clean is done and requesting the sign-off walkthrough",
    },
    {
      en: "Do you want me to run the UV light for the standard time or longer tonight?",
      intent: "Asking the supervisor for instruction on UV cycle duration for this room",
    },
    {
      en: "I used the high-level disinfectant on all horizontal surfaces — floors, table, equipment tops.",
      intent:
        "Reporting which disinfectant was used and which surfaces were covered for compliance documentation",
    },
    {
      en: "There is a scuff mark on the wall that will not come off — do I need to report it?",
      intent: "Asking whether a cosmetic damage item needs to be documented or reported",
    },
  ],
  vocab: [
    "terminal clean",
    "horizontal surfaces",
    "high-level disinfectant",
    "UV light (ultraviolet disinfection)",
    "ceiling vents",
    "light handles",
    "mop (wet mop / flat mop)",
    "dwell time (how long a disinfectant must stay wet)",
    "sign-off",
    "inspection",
  ],
  challenges: [
    "The charge nurse inspects Suite 7 and points to the corner of the floor near the kick bucket bracket and says 'This area was not done.' You believe you mopped it. What do you say and what do you do?",
    "You are ready to run the UV light but there is a cart left in the room by the surgical team. You don't know who it belongs to. What do you do before running the UV?",
    "Your supervisor asks 'Did you do the light handles?' You are not sure what the light handles are. How do you ask for clarification without sounding careless?",
  ],
  sampleConversation: [
    {
      speaker: "learner",
      en: "I am starting the terminal clean on Suite 6. Is the room clear? Can I go in?",
    },
    {
      speaker: "ai",
      en: "Yes — last case was three hours ago. Room is clear. Make sure you do the overhead light handles — they get missed a lot.",
    },
    {
      speaker: "learner",
      en: "I will do the lights. I start with walls, then surfaces, then floor. Then UV light at the end.",
    },
    {
      speaker: "ai",
      en: "That's the right order. How long do you run the UV in that room?",
    },
    {
      speaker: "learner",
      en: "Thirty minutes — that is the standard time for this suite, right?",
    },
    {
      speaker: "ai",
      en: "Correct. Come get me when you're done. I'll walk through before I sign off for the night.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// VOCAB SETS
// ─────────────────────────────────────────────────────────────────────────────

const orEquipmentVocabSet: ModuleVocabSet = {
  category: "OR Equipment",
  emoji: "🔩",
  words: [
    "OR table (operating table)",
    "bovie / ESU (electrosurgical unit)",
    "mayo stand",
    "back table",
    "instrument table",
    "suction canister",
    "tourniquet machine",
    "C-arm (mobile X-ray)",
    "kick bucket",
    "ring stand",
    "step stool",
    "anesthesia machine",
    "warming blanket unit",
    "IV pole",
  ],
};

const cleaningSuppliesVocabSet: ModuleVocabSet = {
  category: "Cleaning Supplies",
  emoji: "🧴",
  words: [
    "blood spill kit",
    "bleach-based disinfectant",
    "quaternary ammonium wipes",
    "high-level disinfectant",
    "flat mop",
    "wet mop",
    "microfiber cloth",
    "disposable wipe",
    "spray bottle",
    "bucket (clean / dirty)",
    "mop solution",
    "dwell time",
    "two-step clean (pre-clean then disinfect)",
    "sporicidal cleaner",
  ],
};

const wasteSafetyVocabSet: ModuleVocabSet = {
  category: "Waste & Safety",
  emoji: "🚨",
  words: [
    "sharps container",
    "biohazard bag (red bag)",
    "regulated medical waste",
    "PPE (personal protective equipment)",
    "gloves (nitrile)",
    "gown (isolation gown)",
    "face mask",
    "eye protection / face shield",
    "no-touch technique",
    "sterile field",
    "contact precautions",
    "blood-borne pathogen",
    "OSHA standards",
    "spill containment",
  ],
};

const orCommunicationVocabSet: ModuleVocabSet = {
  category: "OR Communication Phrases",
  emoji: "📢",
  words: [
    "room is ready",
    "clear to enter",
    "hold the room",
    "STAT (immediately)",
    "we need 15 (minutes)",
    "flip the room (quick turnover)",
    "on deck (next case ready)",
    "break it down (disassemble sterile setup)",
    "stand by",
    "sign off (supervisor approval)",
    "heads up",
    "check with the charge nurse",
  ],
};

const roomStatusVocabSet: ModuleVocabSet = {
  category: "Room Status Terms",
  emoji: "📋",
  words: [
    "turnover",
    "terminal clean",
    "between cases",
    "room hold",
    "next case ready",
    "case in progress",
    "room closed",
    "add-on case",
    "emergency case",
    "room inspection",
    "sign-off complete",
    "ready for patient",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// MAIN EXPORT
// ─────────────────────────────────────────────────────────────────────────────

export const OR_EVS_CONTENT: OrEvsModuleContent = {
  moduleId: "or-evs",
  areas: [
    orTurnoverArea,
    orEquipmentArea,
    orCommunicationArea,
    orSafetyArea,
    orSupplyArea,
    orTerminalCleanArea,
  ],
  vocabSets: [
    orEquipmentVocabSet,
    cleaningSuppliesVocabSet,
    wasteSafetyVocabSet,
    orCommunicationVocabSet,
    roomStatusVocabSet,
  ],
};

export function getOrEvsArea(areaId: string): ModuleArea | undefined {
  return OR_EVS_CONTENT.areas.find((a) => a.id === areaId);
}
