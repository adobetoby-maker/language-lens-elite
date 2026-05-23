/**
 * Module-specific practice scenarios for medical, trades, and sports modules.
 * Uses the same RoleplayScenario shape as roleplay-scenarios.ts so components
 * can render them uniformly.
 */

export type PracticeDifficulty = "beginner" | "intermediate" | "advanced";

export interface PracticeScenario {
  id: string;
  moduleGroup: "medical" | "trades" | "sports";
  title: string;
  emoji: string;
  difficulty: PracticeDifficulty;
  description: string;
  partnerName: string;
  partnerRole: string;
  learnerRole: string;
  openingSetup: string;
  typicalChallenges: string[];
  tags: string[];
  tip?: string;
}

// ── MEDICAL ──────────────────────────────────────────────────────────────────

const MEDICAL_SCENARIOS: PracticeScenario[] = [
  {
    id: "med-post-op-visit",
    moduleGroup: "medical",
    title: "Post-Op Check-In",
    emoji: "🩹",
    difficulty: "beginner",
    description:
      "A patient one day after a simple fracture repair. Practice basic post-op reassurance and instructions.",
    partnerName: "Rosa",
    partnerRole: "patient, age 54, post-op day 1 after distal radius ORIF",
    learnerRole: "Orthopedic surgeon doing morning rounds",
    openingSetup:
      "You are lying in the hospital bed, arm in a splint. You slept poorly and you're a little anxious. When the doctor comes in, greet them and ask when you can go home.",
    typicalChallenges: [
      "¿Cuándo me puedo ir a casa?",
      "¿Puedo mover los dedos?",
      "¿Me va a doler mucho cuando llegue a casa?",
      "¿Cuándo me quitan los puntos?",
    ],
    tags: ["post-op", "patient education", "fracture"],
    tip: "Simple, clear language matters most here. Use body language vocabulary — show her where to look for swelling.",
  },
  {
    id: "med-consent",
    moduleGroup: "medical",
    title: "Pre-Op Consent",
    emoji: "📋",
    difficulty: "beginner",
    description:
      "Walk a worried patient through a knee arthroscopy consent before heading to the OR.",
    partnerName: "Manuel",
    partnerRole: "patient, age 38, scheduled for diagnostic knee arthroscopy",
    learnerRole: "Orthopedic surgeon obtaining informed consent",
    openingSetup:
      "You are scared. Nobody has fully explained what is about to happen. When the doctor comes in with the consent form, tell them you have several questions before you'll sign anything.",
    typicalChallenges: [
      "¿Qué exactamente van a hacer adentro de mi rodilla?",
      "¿Cuáles son los riesgos?",
      "¿Cuánto tiempo voy a estar dormido?",
      "¿Qué pasa si encuentran algo peor de lo que esperaban?",
    ],
    tags: ["consent", "pre-op", "knee", "patient anxiety"],
    tip: "Avoid jargon. If you say 'arthroscope,' immediately describe it in plain terms. He's not difficult — he's just scared.",
  },
  {
    id: "med-colleague-consult",
    moduleGroup: "medical",
    title: "Colleague Consult",
    emoji: "🩻",
    difficulty: "intermediate",
    description:
      "A Spanish-speaking colleague calls to discuss a complex trauma case they're sending your way.",
    partnerName: "Dr. Vargas",
    partnerRole: "ER physician calling from the emergency department",
    learnerRole: "On-call orthopedic surgeon",
    openingSetup:
      "You have a 22-year-old MVA patient with an open tibia fracture and neurovascular concerns. You've stabilized him but need ortho right now. Call the on-call surgeon and give them a rapid clinical handoff.",
    typicalChallenges: [
      "Pulsos distales presentes pero débiles",
      "Clasificación Gustilo-Anderson tipo II",
      "Necesitamos desbridamiento urgente",
      "¿Cuándo puedes venir?",
    ],
    tags: ["emergency", "colleague", "trauma", "handoff"],
    tip: "This one is fast-paced. Clinical efficiency counts — get to the point quickly and confirm the plan clearly.",
  },
  {
    id: "med-complication-talk",
    moduleGroup: "medical",
    title: "Complication Conversation",
    emoji: "⚠️",
    difficulty: "intermediate",
    description:
      "A patient developed a post-op infection and is angry. Practice delivering difficult news with compassion.",
    partnerName: "Luis",
    partnerRole: "patient, age 45, two weeks post total knee arthroplasty with wound infection",
    learnerRole: "Orthopedic surgeon managing a post-op complication",
    openingSetup:
      "You've been in pain for five days and you're furious. The knee looks red and is draining. When the surgeon comes in, express your frustration — you feel like nobody warned you this could happen.",
    typicalChallenges: [
      "¿Por qué nadie me dijo que esto podía pasar?",
      "¿Qué van a hacer para arreglarlo?",
      "¿Me van a tener que operar de nuevo?",
      "¿Esto va a afectar el resultado final?",
    ],
    tags: ["complication", "difficult conversation", "infection", "TKA"],
    tip: "Don't get defensive. Acknowledge his feelings first, then explain the plan. Empathy in a second language is hard — practice it.",
  },
  {
    id: "med-oncology-news",
    moduleGroup: "medical",
    title: "Difficult Diagnosis",
    emoji: "🫀",
    difficulty: "advanced",
    description:
      "Delivering a bone tumor biopsy result to a patient and their family. The hardest conversation in medicine.",
    partnerName: "Carmen",
    partnerRole: "patient, age 31, awaiting biopsy results for a femoral mass; husband is present",
    learnerRole: "Orthopedic oncology surgeon",
    openingSetup:
      "You and your husband have been waiting three days for the biopsy results. You are doing your best to stay calm but you're terrified. When the doctor comes in, you can tell from their face it isn't good news.",
    typicalChallenges: [
      "¿Es cáncer?",
      "¿Se puede curar?",
      "¿Qué va a pasar con mi vida normal?",
      "¿Cuánto tiempo tenemos para decidir?",
    ],
    tags: ["oncology", "diagnosis", "family", "difficult news"],
    tip: "Silence is part of the conversation. Let her cry. Let pauses breathe. You don't need to fill every moment — your presence matters as much as your words.",
  },
];

// ── TRADES ────────────────────────────────────────────────────────────────────

const TRADES_SCENARIOS: PracticeScenario[] = [
  {
    id: "trades-morning-briefing",
    moduleGroup: "trades",
    title: "Morning Safety Brief",
    emoji: "🦺",
    difficulty: "beginner",
    description:
      "Brief your crew on today's work and site hazards. Start here — this happens every single day.",
    partnerName: "Miguel",
    partnerRole: "framing carpenter, first week on this site",
    learnerRole: "Lead foreman running the morning safety meeting",
    openingSetup:
      "It's your first week on this job site and you're still learning the layout. When the foreman starts the morning meeting, listen, ask about where to find PPE, and ask what the biggest hazard is today.",
    typicalChallenges: [
      "¿Dónde están los cascos y las gafas?",
      "¿Hay zanjas abiertas hoy?",
      "¿En qué área voy a trabajar yo?",
      "¿A qué hora es el descanso?",
    ],
    tags: ["safety", "morning", "PPE", "site orientation"],
    tip: "Use simple commands. 'Pongan los cascos' works better than a 3-sentence explanation. Clarity saves lives.",
  },
  {
    id: "trades-client-walkthrough",
    moduleGroup: "trades",
    title: "Client Walkthrough",
    emoji: "🏗️",
    difficulty: "beginner",
    description:
      "A homeowner walks the site and asks about progress. Practice friendly, confident jobsite communication.",
    partnerName: "Elena",
    partnerRole: "homeowner, Spanish-speaking, anxious about the project timeline",
    learnerRole: "General contractor walking the client through the framing stage",
    openingSetup:
      "This is your house being built and you're paying a lot of money. Walk through with the contractor and ask about the progress, the timeline, and what the wood in the corners is for.",
    typicalChallenges: [
      "¿Por qué hay un retraso?",
      "¿Eso es lo que habíamos acordado?",
      "¿Cuándo van a poner las ventanas?",
      "¿Está quedando bien la estructura?",
    ],
    tags: ["client", "communication", "timeline", "framing"],
    tip: "Clients aren't enemies — they're nervous. Calm, confident language builds trust. Specific dates land better than 'pronto.'",
  },
  {
    id: "trades-delivery-problem",
    moduleGroup: "trades",
    title: "Materials Delivery Issue",
    emoji: "🚚",
    difficulty: "intermediate",
    description:
      "Wrong materials showed up. You need to solve the problem before the crew runs out of work.",
    partnerName: "Carlos",
    partnerRole: "delivery driver from the lumber yard",
    learnerRole: "Site foreman dealing with a wrong order",
    openingSetup:
      "You showed up with 2x6s but the order was for 2x8s. You're tired and behind schedule on your route. When the foreman comes out, explain you have what's on the paperwork and it's not your problem.",
    typicalChallenges: [
      "El pedido dice 2x6 — mira la hoja",
      "No puedo quedarme esperando aquí",
      "Llama a la oficina tú mismo",
      "No es mi culpa si el pedido estaba mal",
    ],
    tags: ["logistics", "materials", "problem-solving", "conflict"],
    tip: "Stay professional when it gets tense. You need this person on your side — getting aggressive costs time. Get the facts, propose a solution.",
  },
  {
    id: "trades-safety-incident",
    moduleGroup: "trades",
    title: "Near-Miss Report",
    emoji: "📝",
    difficulty: "intermediate",
    description:
      "A worker almost got hurt. Document the near-miss properly and make sure it doesn't happen again.",
    partnerName: "Roberto",
    partnerRole: "laborer who was involved in the near-miss incident",
    learnerRole: "Foreman conducting the incident debrief",
    openingSetup:
      "A wall section shifted while you were pulling wire near it. Nobody got hurt but it was close. When the foreman comes over with a clipboard, tell them exactly what happened — even the parts where you might have skipped a step.",
    typicalChallenges: [
      "Estaba jalando el cable y la pared se movió sola",
      "No, nadie me avisó que eso estaba suelto",
      "No sé quién puso el puntal ahí",
      "Sí, me salté el candado porque iba tarde",
    ],
    tags: ["safety", "incident", "reporting", "debrief"],
    tip: "You're not interrogating him — you're preventing the next one. The tone should be matter-of-fact, not accusatory.",
  },
  {
    id: "trades-subcontractor",
    moduleGroup: "trades",
    title: "Subcontractor Dispute",
    emoji: "🤝",
    difficulty: "advanced",
    description:
      "A sub says they're done but the work doesn't pass inspection. Navigate the conversation professionally.",
    partnerName: "Héctor",
    partnerRole: "electrical subcontractor, experienced, proud of his work",
    learnerRole: "General contractor managing the inspection failure",
    openingSetup:
      "The electrical rough-in failed inspection because of improperly secured wire runs. You've been doing this work for 20 years and you're insulted. When the GC calls you back to the site, defend your work first.",
    typicalChallenges: [
      "Llevo 20 años haciendo esto — nunca me había reprobado",
      "¿El inspector sabe lo que está viendo?",
      "Eso va a costar tiempo y yo tengo otro trabajo esperando",
      "¿Quién va a pagar el extra?",
    ],
    tags: ["subcontractor", "inspection", "negotiation", "conflict"],
    tip: "This is both a craft conversation and a money conversation. Acknowledge his expertise before you push back — he's right that his work is usually good.",
  },
];

// ── SPORTS ────────────────────────────────────────────────────────────────────

const SPORTS_SCENARIOS: PracticeScenario[] = [
  {
    id: "sports-pre-game",
    moduleGroup: "sports",
    title: "Pre-Game Talk",
    emoji: "⚽",
    difficulty: "beginner",
    description:
      "Get your squad focused before the whistle. Practice the vocabulary of motivation and tactics.",
    partnerName: "Tomás",
    partnerRole: "starting midfielder, 19 years old, a bit nervous about today's match",
    learnerRole: "Head coach giving the pre-game address",
    openingSetup:
      "You're nervous — this is the biggest game of the season. When the coach starts talking, ask about your specific role in today's match plan and whether you'll be starting.",
    typicalChallenges: [
      "¿Voy a empezar yo hoy?",
      "¿Cómo vamos a defender contra su delantero?",
      "¿En qué posición quiere que juegue?",
      "¿Qué hago si me mandan a entrar de cambio?",
    ],
    tags: ["pre-game", "tactics", "motivation", "position"],
    tip: "Be direct and energetic. Pre-game language has its own rhythm — short, punchy, present tense. Avoid long explanations when the adrenaline is already running.",
  },
  {
    id: "sports-halftime",
    moduleGroup: "sports",
    title: "Halftime Adjustment",
    emoji: "🗣️",
    difficulty: "beginner",
    description: "Down by one. Make a clear tactical adjustment and keep the team's belief alive.",
    partnerName: "Diego",
    partnerRole: "striker, frustrated after missing two chances in the first half",
    learnerRole: "Coach making halftime adjustments",
    openingSetup:
      "You missed two clear chances in the first half and you're hard on yourself. When the coach comes over, you're expecting to be benched. Push back a little — you think you just need different service.",
    typicalChallenges: [
      "Dame otra oportunidad, yo sé que puedo",
      "El balón no me está llegando bien",
      "¿Me va a cambiar?",
      "Necesito que alguien me ponga el balón al pie",
    ],
    tags: ["halftime", "adjustment", "confidence", "tactics"],
    tip: "He's fragile right now. Fix the tactics and the confidence at the same time — one reinforces the other.",
  },
  {
    id: "sports-player-feedback",
    moduleGroup: "sports",
    title: "Post-Match Feedback",
    emoji: "📊",
    difficulty: "intermediate",
    description:
      "Individual session after the match. Balance honest criticism with encouragement for a young player.",
    partnerName: "Andrés",
    partnerRole: "17-year-old defender, just made a costly mistake that led to a goal",
    learnerRole: "Youth coach conducting a post-match debrief",
    openingSetup:
      "You know you made the mistake and you feel awful. When the coach pulls you aside, you're already defensive — you're going to explain what happened before they can criticize you.",
    typicalChallenges: [
      "Es que el árbitro no marcó el foul antes",
      "No vi al delantero, venía de mi ángulo ciego",
      "No fue solo mi culpa",
      "¿Van a seguir contando conmigo?",
    ],
    tags: ["youth", "feedback", "mistake", "development"],
    tip: "Young athletes remember their first real criticism from a coach for the rest of their lives. Be honest and be kind — both at once.",
  },
  {
    id: "sports-injury",
    moduleGroup: "sports",
    title: "Player Injury Chat",
    emoji: "🏥",
    difficulty: "intermediate",
    description:
      "A player is on the bench with a hamstring concern. Decide whether they're safe to return.",
    partnerName: "Fernanda",
    partnerRole: "midfielder, right hamstring tightness, wants to keep playing",
    learnerRole: "Coach assessing whether to put her back in",
    openingSetup:
      "You feel a pull in your hamstring but you want to play — it's the regional final. When the coach pulls you off and comes to check, insist you're fine while describing your symptoms honestly.",
    typicalChallenges: [
      "Estoy bien, solo fue un jalón",
      "No me puedo perder este partido",
      "Me duele cuando acelero pero puedo seguir",
      "No me quiero ir ahora — puedo aguantar",
    ],
    tags: ["injury", "player safety", "decision-making", "finals"],
    tip: "This conversation is also about trust. She needs to know you're protecting her career, not just today's score.",
  },
  {
    id: "sports-tryout",
    moduleGroup: "sports",
    title: "Tryout Evaluation",
    emoji: "🏆",
    difficulty: "advanced",
    description:
      "End of tryouts. A player asks if they made the team — and they didn't. Deliver the news respectfully.",
    partnerName: "Javier",
    partnerRole: "18-year-old aspiring player who has trained hard all year",
    learnerRole: "Coach delivering tryout results",
    openingSetup:
      "You've worked harder than anyone in tryouts and you're confident you made the team. When the coach pulls you aside, you have no idea what's coming.",
    typicalChallenges: [
      "¿Me quedé en el equipo?",
      "¿Qué fue lo que me faltó?",
      "¿Puedo volver a intentarlo el año que viene?",
      "¿En qué me tengo que mejorar?",
    ],
    tags: ["tryout", "rejection", "development path", "encouragement"],
    tip: "The 'no' is one sentence. The rest of the conversation is about what comes next. Give him a concrete development plan — that's what he'll remember.",
  },
];

// ── Exports ───────────────────────────────────────────────────────────────────

export const ALL_PRACTICE_SCENARIOS: PracticeScenario[] = [
  ...MEDICAL_SCENARIOS,
  ...TRADES_SCENARIOS,
  ...SPORTS_SCENARIOS,
];

export function getPracticeScenarios(
  moduleGroup: "medical" | "trades" | "sports",
): PracticeScenario[] {
  return ALL_PRACTICE_SCENARIOS.filter((s) => s.moduleGroup === moduleGroup);
}

export const PRACTICE_DIFFICULTY_LABELS: Record<PracticeDifficulty, string> = {
  beginner: "Starter",
  intermediate: "Fluent",
  advanced: "Advanced",
};

export const PRACTICE_DIFFICULTY_BADGE: Record<PracticeDifficulty, string> = {
  beginner: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
  intermediate: "text-sky-400 border-sky-400/30 bg-sky-400/5",
  advanced: "text-amber-400 border-amber-400/30 bg-amber-400/5",
};

export function buildScenarioContext(s: PracticeScenario, language: string): string {
  return (
    `Roleplay scenario — ${s.title}.\n` +
    `You are playing: ${s.partnerName} (${s.partnerRole}).\n` +
    `The learner is playing: ${s.learnerRole}.\n` +
    `Setting: ${s.openingSetup}\n` +
    `Speak only in ${language}. Keep responses conversational (1-3 sentences). ` +
    `Stay in character throughout. Begin the scene — speak as ${s.partnerName} first.`
  );
}
