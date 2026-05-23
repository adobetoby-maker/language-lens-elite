// Medical English for Foreign Medical Graduates (FMGs / IMGs)
//
// Content direction: the LEARNER is a non-English-speaking physician;
// English is the TARGET language. Phrases and vocab are English-first.
// `native` fields provide Spanish gloss for the flashcard reveal side.
//
// Five clinical areas:
//   rounds-presentation — SOAP format, presenting to attendings
//   patient-communication — consent, explanation, discharge
//   clinical-documentation — progress note language, H&P
//   team-communication — SBAR, nursing, pharmacy, social work
//   emergency-english — codes, rapid responses, critical handoffs

export interface FmgPhrase {
  en: string;
  intent: string;
  native?: string; // Spanish gloss shown on flashcard flip
}

export interface SampleTurn {
  speaker: "learner" | "ai";
  en: string;
}

export interface FmgArea {
  id: string;
  name: string;
  emoji: string;
  blurb: string;
  counterpart: string;
  learnerRole: string;
  toneNote: string;
  phrases: FmgPhrase[];
  vocab: string[];
  nativeGloss: Record<string, string>; // vocab English term → Spanish translation
  challenges: string[];
  sampleConversation: SampleTurn[];
}

export interface FmgVocabSet {
  category: string;
  emoji: string;
  words: string[];
  nativeGloss: Record<string, string>;
}

export interface FmgModuleContent {
  moduleId: string;
  areas: FmgArea[];
  vocabSets: FmgVocabSet[];
}

// ─────────────────────────────────────────────────────────────────────────────
// ROUNDS PRESENTATION
// ─────────────────────────────────────────────────────────────────────────────

const roundsPresentationArea: FmgArea = {
  id: "rounds-presentation",
  name: "Rounds Presentation",
  emoji: "📋",
  blurb:
    "Present patients confidently on morning rounds. Master the SOAP format, the opening line every attending expects, and the language of assessment and plan.",
  counterpart: "US attending physician leading morning rounds",
  learnerRole: "First-year resident presenting an admitted patient",
  toneNote:
    "Professional and efficient. Attendings respect conciseness — front-load the key facts. Avoid filler phrases. 'The patient is…' never 'So I have this patient…'",
  phrases: [
    {
      en: "The patient is a 58-year-old male with a history of hypertension and type 2 diabetes who presents with three days of worsening shortness of breath.",
      intent: "Standard opening SOAP line",
      native:
        "El paciente es un hombre de 58 años con antecedentes de hipertensión y diabetes tipo 2 que consulta por dificultad respiratoria progresiva de tres días.",
    },
    {
      en: "On review of systems, he endorses fatigue and leg swelling but denies fever, cough, and chest pain.",
      intent: "ROS — what the patient affirms and denies",
      native:
        "En la revisión por sistemas, refiere fatiga e hinchazón en las piernas, pero niega fiebre, tos y dolor torácico.",
    },
    {
      en: "Vitals are notable for a blood pressure of 168 over 92 and an oxygen saturation of 91% on room air.",
      intent: "Presenting abnormal vitals",
      native:
        "Los signos vitales son notables por una presión arterial de 168/92 y una saturación de oxígeno del 91% al aire ambiente.",
    },
    {
      en: "On physical exam, the patient is in mild respiratory distress. Lungs reveal bilateral crackles at the bases. There is 2+ pitting edema in both lower extremities.",
      intent: "Key physical exam findings",
      native:
        "Al examen físico, el paciente se encuentra en dificultad respiratoria leve. En los pulmones se auscultan estertores bibasales. Hay edema con fóvea 2+ en ambos miembros inferiores.",
    },
    {
      en: "My assessment is acute decompensated heart failure, likely triggered by dietary indiscretion.",
      intent: "Leading with your primary diagnosis",
      native:
        "Mi evaluación es insuficiencia cardíaca descompensada aguda, probablemente desencadenada por transgresión dietética.",
    },
    {
      en: "For the plan, I would like to start IV furosemide, restrict fluids to 1.5 liters per day, and obtain a BNP and a repeat echo.",
      intent: "Presenting an actionable plan",
      native:
        "Para el plan, quisiera iniciar furosemida IV, restringir líquidos a 1.5 litros por día y solicitar BNP y ecocardiograma de control.",
    },
    {
      en: "I will follow up with cardiology and discuss goals of care with the patient and his family.",
      intent: "Disposition and consult plan",
      native:
        "Haré seguimiento con cardiología y hablaré sobre los objetivos del tratamiento con el paciente y su familia.",
    },
    {
      en: "Does anyone have questions or would you like me to address anything else?",
      intent: "Closing the presentation professionally",
      native: "¿Alguien tiene preguntas o desean que aborde algo más?",
    },
  ],
  vocab: [
    "chief complaint",
    "history of present illness",
    "review of systems",
    "physical exam",
    "assessment and plan",
    "vital signs",
    "bilateral",
    "pitting edema",
    "room air",
    "respiratory distress",
    "crackles",
    "differential diagnosis",
    "working diagnosis",
    "disposition",
  ],
  nativeGloss: {
    "chief complaint": "motivo de consulta principal",
    "history of present illness": "historia de la enfermedad actual",
    "review of systems": "revisión por sistemas",
    "physical exam": "examen físico",
    "assessment and plan": "evaluación y plan",
    "vital signs": "signos vitales",
    bilateral: "bilateral",
    "pitting edema": "edema con fóvea",
    "room air": "aire ambiente",
    "respiratory distress": "dificultad respiratoria",
    crackles: "estertores / crepitantes",
    "differential diagnosis": "diagnóstico diferencial",
    "working diagnosis": "diagnóstico de trabajo",
    disposition: "disposición / destino del paciente",
  },
  challenges: [
    "Present a 72-year-old woman admitted overnight for chest pain. Her troponin is elevated. Walk through your full SOAP presentation.",
    "Your attending asks 'What is your differential?' Give three diagnoses with one-sentence reasoning for each.",
    "Summarize yesterday's patient in 30 seconds for the oncoming resident — only the essential updates.",
    "Your patient's O2 sat dropped to 88% overnight. Present the situation to your attending on rounds.",
  ],
  sampleConversation: [
    {
      speaker: "learner",
      en: "The patient is a 65-year-old female with a history of COPD and hypertension who presents with acute onset shortness of breath.",
    },
    {
      speaker: "ai",
      en: "Good opening. I'd suggest adding when it started — 'acute onset this morning' gives me a timeline immediately. Try: '...who presents with acute onset shortness of breath that began this morning.' Go ahead with your physical exam findings.",
    },
    {
      speaker: "learner",
      en: "She has decreased breath sounds on the right side. I think it could be pneumothorax.",
    },
    {
      speaker: "ai",
      en: "That's the right instinct. Lead with the finding, then give your assessment: 'On exam, she has markedly decreased breath sounds on the right. My assessment is right-sided pneumothorax.' State the plan immediately after — attendings want assessment and plan together.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// PATIENT COMMUNICATION
// ─────────────────────────────────────────────────────────────────────────────

const patientCommunicationArea: FmgArea = {
  id: "patient-communication",
  name: "Patient Communication",
  emoji: "🤝",
  blurb:
    "Explain diagnoses, obtain informed consent, give discharge instructions, and respond to patient questions in plain, reassuring American English.",
  counterpart: "US patient and family members at bedside",
  learnerRole: "Resident physician explaining a diagnosis or plan",
  toneNote:
    "Warm, clear, and jargon-free. Use the patient's name. Check for understanding often — 'Does that make sense?' or 'Can you tell me back what I just explained?' Avoid rushing.",
  phrases: [
    {
      en: "Hi, I'm Dr. [name], one of the residents taking care of you. How are you feeling today?",
      intent: "Warm introduction at bedside",
      native:
        "Hola, soy el Dr. [nombre], uno de los residentes que lo está atendiendo. ¿Cómo se siente hoy?",
    },
    {
      en: "I want to explain what we found and what we are going to do about it. Is that okay with you?",
      intent: "Setting up the explanation with patient permission",
      native:
        "Quiero explicarle lo que encontramos y lo que vamos a hacer al respecto. ¿Está bien para usted?",
    },
    {
      en: "Your heart is working harder than it should be because of fluid buildup. We're going to give you a medication through your IV to help your body get rid of that extra fluid.",
      intent: "Explaining heart failure in plain language",
      native:
        "Su corazón está trabajando más de lo que debería debido a la acumulación de líquido. Le vamos a dar un medicamento por su vía IV para ayudar a su cuerpo a eliminar ese líquido extra.",
    },
    {
      en: "Before we do the procedure, I need to explain the risks and benefits and get your signature on a consent form.",
      intent: "Introducing informed consent",
      native:
        "Antes de realizar el procedimiento, necesito explicarle los riesgos y beneficios y obtener su firma en un formulario de consentimiento.",
    },
    {
      en: "The risks include bleeding, infection, and in rare cases injury to nearby structures. Do you have any questions so far?",
      intent: "Disclosing procedural risks",
      native:
        "Los riesgos incluyen sangrado, infección y en casos raros lesión de estructuras cercanas. ¿Tiene alguna pregunta hasta ahora?",
    },
    {
      en: "You are going to be discharged today. I want to make sure you understand your instructions before you leave.",
      intent: "Opening the discharge conversation",
      native:
        "Hoy va a ser dado de alta. Quiero asegurarme de que entienda sus instrucciones antes de irse.",
    },
    {
      en: "Take this medication once a day with food. Do not stop taking it without calling us first.",
      intent: "Clear medication instruction",
      native:
        "Tome este medicamento una vez al día con comida. No deje de tomarlo sin llamarnos primero.",
    },
    {
      en: "Please come back to the emergency room if you have chest pain, sudden shortness of breath, or you feel like something is very wrong.",
      intent: "Return precautions — when to come back",
      native:
        "Por favor regrese a urgencias si tiene dolor en el pecho, dificultad para respirar repentina, o siente que algo está muy mal.",
    },
  ],
  vocab: [
    "informed consent",
    "discharge instructions",
    "follow-up appointment",
    "return precautions",
    "medication side effects",
    "allergies",
    "primary care provider",
    "specialist referral",
    "advance directive",
    "do not resuscitate",
    "goals of care",
    "prognosis",
  ],
  nativeGloss: {
    "informed consent": "consentimiento informado",
    "discharge instructions": "instrucciones de alta",
    "follow-up appointment": "cita de seguimiento",
    "return precautions": "señales de alarma para regresar",
    "medication side effects": "efectos secundarios del medicamento",
    allergies: "alergias",
    "primary care provider": "médico de atención primaria",
    "specialist referral": "referido a especialista",
    "advance directive": "directiva anticipada / voluntades anticipadas",
    "do not resuscitate": "no reanimar / DNR",
    "goals of care": "objetivos del tratamiento",
    prognosis: "pronóstico",
  },
  challenges: [
    "Your patient was just diagnosed with type 2 diabetes. Explain what diabetes is and why lifestyle changes matter, in plain English.",
    "A patient's family member is upset and demands to know why surgery is being recommended. Respond calmly and clearly.",
    "Obtain verbal consent for a lumbar puncture. Walk through what the procedure is, why it's needed, and the key risks.",
    "Your patient cannot recall any of their medications. How do you get a complete medication history in a helpful, non-judgmental way?",
  ],
  sampleConversation: [
    {
      speaker: "learner",
      en: "The result of your test shows that your kidney function is not very good.",
    },
    {
      speaker: "ai",
      en: "Good start, but 'not very good' is vague and can be alarming. Try something more specific and compassionate: 'Your blood test shows that your kidneys are not filtering as well as they should be. This is something we want to treat and monitor closely.' Also — always say the organ's job, not just that it's not working.",
    },
    {
      speaker: "learner",
      en: "We will need to check your kidneys more and maybe refer you to a kidney doctor.",
    },
    {
      speaker: "ai",
      en: "Almost there. In the US, say 'kidney specialist' or 'nephrologist' — 'kidney doctor' is understood but 'specialist' sounds more precise. Try: 'We're going to monitor your kidney function closely and refer you to a nephrologist — that's a kidney specialist — for further evaluation.' Great use of lay language.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// CLINICAL DOCUMENTATION
// ─────────────────────────────────────────────────────────────────────────────

const clinicalDocumentationArea: FmgArea = {
  id: "clinical-documentation",
  name: "Clinical Documentation",
  emoji: "📝",
  blurb:
    "Write progress notes, H&Ps, and discharge summaries in the structured English expected by US hospitals. Master the phrasing that makes notes read as fluent and professional.",
  counterpart: "Attending physician reviewing the chart or giving feedback on a note",
  learnerRole: "Resident writing a daily progress note or admission H&P",
  toneNote:
    "Precise, objective, and concise. US notes use passive voice frequently ('Patient was found to be...') and present tense for current state. Avoid opinion without evidence. Use approved abbreviations.",
  phrases: [
    {
      en: "The patient is a pleasant 55-year-old male in no acute distress.",
      intent: "Standard opening of physical exam section",
      native: "El paciente es un hombre agradable de 55 años sin dificultad respiratoria aguda.",
    },
    {
      en: "Patient reports improvement in pain from 7/10 to 3/10 since initiation of IV morphine.",
      intent: "Documenting patient-reported outcome",
      native: "El paciente reporta mejoría del dolor de 7/10 a 3/10 desde el inicio de morfina IV.",
    },
    {
      en: "Continue current antibiotics. Anticipate discharge in 24–48 hours pending clinical improvement.",
      intent: "Plan section language — pending disposition",
      native:
        "Continuar antibióticos actuales. Se anticipa alta en 24–48 horas según evolución clínica.",
    },
    {
      en: "Will discuss with cardiology regarding optimization of medical therapy.",
      intent: "Documenting a pending consult",
      native: "Se discutirá con cardiología respecto a la optimización del tratamiento médico.",
    },
    {
      en: "Patient was counseled on the importance of medication adherence and smoking cessation.",
      intent: "Documenting patient education",
      native:
        "Se orientó al paciente sobre la importancia de la adherencia al tratamiento y la cesación tabáquica.",
    },
    {
      en: "Labs are significant for a creatinine of 2.1 and a potassium of 5.4.",
      intent: "Highlighting abnormal results in a note",
      native: "Los laboratorios son significativos por una creatinina de 2.1 y un potasio de 5.4.",
    },
    {
      en: "The patient denies any worsening of symptoms overnight.",
      intent: "Subjective section — overnight report",
      native: "El paciente niega empeoramiento de síntomas durante la noche.",
    },
    {
      en: "Patient is stable for discharge. Discharge summary completed. Follow-up arranged with PCP in one week.",
      intent: "Discharge note closing statement",
      native:
        "El paciente está estable para el alta. Resumen de alta completado. Seguimiento programado con médico de cabecera en una semana.",
    },
  ],
  vocab: [
    "progress note",
    "H&P",
    "SOAP note",
    "discharge summary",
    "subjective",
    "objective",
    "assessment",
    "plan",
    "pertinent negatives",
    "significant for",
    "pending",
    "in no acute distress",
    "tolerating po",
    "ambulating independently",
  ],
  nativeGloss: {
    "progress note": "nota de evolución",
    "H&P": "historia y examen físico (anamnesis y exploración)",
    "SOAP note": "nota SOAP",
    "discharge summary": "resumen de alta",
    subjective: "subjetivo",
    objective: "objetivo",
    assessment: "evaluación / diagnóstico",
    plan: "plan",
    "pertinent negatives": "negativos pertinentes",
    "significant for": "notable por / significativo para",
    pending: "pendiente",
    "in no acute distress": "sin dificultad aguda / en buen estado general",
    "tolerating po": "tolerando vía oral",
    "ambulating independently": "deambulando de forma independiente",
  },
  challenges: [
    "Write a one-paragraph SOAP progress note for a patient with pneumonia on hospital day 2. They are improving on IV antibiotics.",
    "Your attending says your note is 'too verbose.' Rewrite this section: 'The patient stated that she was feeling better and that the pain in her abdomen was not as severe as it was before.' Make it concise.",
    "Document that you had a goals-of-care conversation with a patient and their son about transitioning to comfort measures.",
    "Write the Assessment & Plan section for a patient with new-onset atrial fibrillation. Include rate control, anticoagulation, and cardiology consult.",
  ],
  sampleConversation: [
    { speaker: "learner", en: "Patient is doing okay. Vitals are all normal. No complaints." },
    {
      speaker: "ai",
      en: "That's conversational, but a note needs clinical precision. Try: 'Patient reports feeling improved. Vitals within normal limits — see flowsheet. Patient denies pain, fever, or new complaints.' Use 'reports' for subjective, 'within normal limits' instead of 'normal,' and 'denies' for negatives.",
    },
    {
      speaker: "learner",
      en: "The patient denies pain, fever, or new complaints. Vitals within normal limits.",
    },
    {
      speaker: "ai",
      en: "Much better — that reads like a US resident wrote it. For the objective section, follow up with: 'On exam, patient is alert and oriented x3, in no acute distress.' The 'no acute distress' phrase is expected in almost every note and signals you know the format.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// TEAM COMMUNICATION
// ─────────────────────────────────────────────────────────────────────────────

const teamCommunicationArea: FmgArea = {
  id: "team-communication",
  name: "Team Communication",
  emoji: "📞",
  blurb:
    "Communicate effectively with nurses, pharmacists, social workers, and consultants using SBAR and the direct, respectful register of US hospital teams.",
  counterpart: "Charge nurse, pharmacist, or specialty consultant",
  learnerRole: "Resident relaying patient information to another team member",
  toneNote:
    "Direct and collegial. Nurses and pharmacists are professionals — address them as such. Use SBAR for urgent calls. Confirm read-backs for verbal orders. Never sound dismissive.",
  phrases: [
    {
      en: "Hi, this is Dr. [name], the resident covering [patient name] in room [number]. I'm calling because I'm concerned about [issue].",
      intent: "Opening an SBAR call — Situation",
      native:
        "Hola, soy el Dr. [nombre], el residente a cargo de [nombre del paciente] en la habitación [número]. Le llamo porque me preocupa [problema].",
    },
    {
      en: "The patient has a history of CHF and was admitted yesterday. Their current blood pressure is 90 over 60 and they appear more lethargic than this morning.",
      intent: "SBAR — Background and context",
      native:
        "El paciente tiene antecedentes de insuficiencia cardíaca y fue admitido ayer. Su presión arterial actual es de 90/60 y parece más letárgico que esta mañana.",
    },
    {
      en: "I think the patient may be going into cardiogenic shock. I'd like to get a stat EKG, repeat vitals every 15 minutes, and hold the evening diuretic.",
      intent: "SBAR — Assessment and Recommendation",
      native:
        "Creo que el paciente puede estar entrando en shock cardiogénico. Me gustaría un EKG urgente, signos vitales cada 15 minutos y suspender el diurético de la noche.",
    },
    {
      en: "Can you please read that back to me to make sure we are on the same page?",
      intent: "Requesting a verbal order read-back",
      native: "¿Puede repetirme eso para asegurarnos de que estamos en la misma página?",
    },
    {
      en: "I'd like to put in a consult for nephrology. The patient's creatinine has been trending up over the last two days.",
      intent: "Requesting a specialty consult",
      native:
        "Me gustaría solicitar una interconsulta de nefrología. La creatinina del paciente ha ido aumentando en los últimos dos días.",
    },
    {
      en: "Can pharmacy check for any drug interactions? The patient is on warfarin and we just added an antibiotic.",
      intent: "Communicating with pharmacy about safety",
      native:
        "¿Puede farmacia verificar si hay interacciones medicamentosas? El paciente está en warfarina y acabamos de agregar un antibiótico.",
    },
    {
      en: "Can we get social work involved? The patient lives alone and I'm worried about safe discharge.",
      intent: "Initiating a social work referral",
      native:
        "¿Podemos involucrar a trabajo social? El paciente vive solo y me preocupa un alta segura.",
    },
    {
      en: "Thanks for the consult. I'll pass that along to the team at rounds tomorrow morning.",
      intent: "Closing a consult communication",
      native:
        "Gracias por la interconsulta. Lo transmitiré al equipo en las rondas de mañana por la mañana.",
    },
  ],
  vocab: [
    "SBAR",
    "verbal order",
    "read-back",
    "consult",
    "co-sign",
    "covering physician",
    "on call",
    "rapid response team",
    "escalate",
    "handoff",
    "sign-out",
    "nursing note",
    "pharmacy reconciliation",
    "social work referral",
  ],
  nativeGloss: {
    SBAR: "SBAR (Situación, Antecedentes, Evaluación, Recomendación)",
    "verbal order": "orden verbal",
    "read-back": "confirmación de lectura / repetición del mensaje",
    consult: "interconsulta",
    "co-sign": "co-firmar / contrafirmar",
    "covering physician": "médico de guardia / médico cubriente",
    "on call": "de guardia",
    "rapid response team": "equipo de respuesta rápida",
    escalate: "escalar / elevar la atención",
    handoff: "transferencia de pacientes / traspaso",
    "sign-out": "nota de traspaso",
    "nursing note": "nota de enfermería",
    "pharmacy reconciliation": "conciliación de medicamentos",
    "social work referral": "referido a trabajo social",
  },
  challenges: [
    "Call the night nurse using SBAR to report that your patient's blood sugar dropped to 48 and you want to give dextrose IV.",
    "A consultant calls you back and uses a lot of technical terms you don't fully understand. How do you professionally ask for clarification?",
    "Give sign-out to the night resident for three patients. Practice being clear but concise — include diagnosis, key overnight concerns, and what to watch for.",
    "The charge nurse tells you a patient is refusing their medication. How do you respond and what do you document?",
  ],
  sampleConversation: [
    {
      speaker: "learner",
      en: "Hello, I am calling because the patient in bed 12 has low pressure. I think you should come see.",
    },
    {
      speaker: "ai",
      en: "Good instinct to call, but this isn't specific enough for a US nurse. Try SBAR: 'Hi, this is Dr. [name] calling about Mr. Johnson in room 412. His BP just dropped to 88/58. He has a history of sepsis and was admitted for urosepsis. I'm concerned about clinical deterioration. I'd like you to do a full set of vitals and I'm coming to bedside now.' State your name, patient, the number, your concern, and what you want.",
    },
    {
      speaker: "learner",
      en: "This is Dr. Ramirez calling about Mr. Johnson in room 412. His BP is 88 over 58 and I'm worried about septic shock.",
    },
    {
      speaker: "ai",
      en: "That's a strong opener — you have the name, room, vital, and concern. Now add your recommendation: 'Please get a full set of vitals and hold any hypotensive medications. I'm coming to bedside.' Ending with a clear action request is what US nurses expect from a call like this.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// EMERGENCY ENGLISH
// ─────────────────────────────────────────────────────────────────────────────

const emergencyEnglishArea: FmgArea = {
  id: "emergency-english",
  name: "Emergency English",
  emoji: "🚨",
  blurb:
    "High-stakes, time-pressured communication for codes, rapid responses, and critical deterioration. Practice the exact phrases used in US emergency situations.",
  counterpart: "Code team, rapid response nurses, charge nurse, or attending",
  learnerRole: "Resident physician first responder or team leader in an emergency",
  toneNote:
    "Loud, clear, short. In a code: no hedging, no 'maybe.' Use direct commands. State what you are doing as you do it. Confirm acknowledgment. A quiet or unclear voice in a code room is dangerous.",
  phrases: [
    {
      en: "I need to call a rapid response on Mrs. Garcia in room 518. She is unresponsive.",
      intent: "Initiating a rapid response",
      native:
        "Necesito llamar una respuesta rápida por la señora García en la habitación 518. No responde.",
    },
    {
      en: "Code blue, room 412. I need help now.",
      intent: "Calling a code — urgent, minimal words",
      native: "Código azul, habitación 412. Necesito ayuda ahora.",
    },
    {
      en: "Start CPR. I'll get the crash cart. Someone call the attending.",
      intent: "Delegating tasks at the start of a code",
      native: "Inicien RCP. Yo busco el carro de paro. Alguien llame al médico tratante.",
    },
    {
      en: "Give one milligram of epinephrine IV push now. Confirm when it's in.",
      intent: "Ordering medication during a code",
      native:
        "Den un miligramo de epinefrina IV en bolo ahora. Confirmen cuando esté administrado.",
    },
    {
      en: "Hold CPR. Everyone stop. I need a pulse check.",
      intent: "Pausing CPR for rhythm check",
      native: "Pausen la RCP. Todos deténganse. Necesito verificar el pulso.",
    },
    {
      en: "The patient has return of spontaneous circulation. Let's get a 12-lead EKG and transfer to the ICU.",
      intent: "Announcing ROSC — next steps",
      native:
        "El paciente recuperó circulación espontánea. Hagamos un EKG de 12 derivaciones y traslademos a UCI.",
    },
    {
      en: "We have done everything we can. I am calling the time of death at [time].",
      intent: "Pronouncing death — formal and respectful",
      native: "Hemos hecho todo lo posible. Declaro la hora del fallecimiento a las [hora].",
    },
    {
      en: "I need to speak to the family. Can someone take me to the family waiting room?",
      intent: "Moving to family notification after a code",
      native:
        "Necesito hablar con la familia. ¿Alguien puede llevarme a la sala de espera familiar?",
    },
  ],
  vocab: [
    "code blue",
    "rapid response",
    "crash cart",
    "CPR",
    "ROSC",
    "time of death",
    "epinephrine",
    "defibrillation",
    "airway",
    "intubation",
    "vasopressor",
    "ICU transfer",
    "family notification",
    "debriefing",
  ],
  nativeGloss: {
    "code blue": "código azul (paro cardiorrespiratorio)",
    "rapid response": "respuesta rápida (equipo de urgencias)",
    "crash cart": "carro de paro / carro de emergencias",
    CPR: "RCP (reanimación cardiopulmonar)",
    ROSC: "recuperación de circulación espontánea",
    "time of death": "hora del fallecimiento",
    epinephrine: "epinefrina / adrenalina",
    defibrillation: "desfibrilación",
    airway: "vía aérea",
    intubation: "intubación",
    vasopressor: "vasopresor",
    "ICU transfer": "traslado a UCI",
    "family notification": "notificación a la familia",
    debriefing: "reunión de análisis post-evento",
  },
  challenges: [
    "You walk into a patient's room and they are unresponsive and not breathing. Walk through exactly what you say and do in the first 60 seconds.",
    "The code leader asks you to take over chest compressions. How do you announce the handoff and ensure CPR quality?",
    "ROSC has been achieved. Brief the ICU team in 3 sentences on what happened and what was done.",
    "You need to tell a family that their father did not survive resuscitation. Practice opening that conversation in English.",
  ],
  sampleConversation: [
    { speaker: "learner", en: "I think we should maybe call a code on this patient." },
    {
      speaker: "ai",
      en: "In an emergency, 'I think maybe' costs seconds you don't have. Drop the hedging: 'Call a code. Room 412. Now.' In a real code room, your voice needs to be the clearest voice in the space. Practice projecting authority, not uncertainty.",
    },
    { speaker: "learner", en: "Call a code. Room 412. Now." },
    {
      speaker: "ai",
      en: "That's it — direct, clear, zero ambiguity. Now follow immediately with delegation: 'You — start CPR. You — get the crash cart. Someone page the attending.' Point at people if needed. Naming roles prevents everyone waiting for someone else to act.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// MAIN CONTENT OBJECT
// ─────────────────────────────────────────────────────────────────────────────

export const FMG_CONTENT: FmgModuleContent = {
  moduleId: "fmg",
  areas: [
    roundsPresentationArea,
    patientCommunicationArea,
    clinicalDocumentationArea,
    teamCommunicationArea,
    emergencyEnglishArea,
  ],
  vocabSets: [
    {
      category: "SOAP & Rounds Language",
      emoji: "📋",
      words: [
        "chief complaint",
        "HPI",
        "review of systems",
        "past medical history",
        "social history",
        "family history",
        "physical exam",
        "assessment and plan",
        "pertinent negatives",
        "significant for",
        "vital signs stable",
      ],
      nativeGloss: {
        "chief complaint": "motivo de consulta",
        HPI: "historia de la enfermedad actual",
        "review of systems": "revisión por sistemas",
        "past medical history": "antecedentes médicos",
        "social history": "historia social",
        "family history": "antecedentes familiares",
        "physical exam": "examen físico",
        "assessment and plan": "evaluación y plan",
        "pertinent negatives": "negativos pertinentes",
        "significant for": "notable por",
        "vital signs stable": "signos vitales estables",
      },
    },
    {
      category: "Diagnosis & Reasoning",
      emoji: "🧠",
      words: [
        "differential diagnosis",
        "working diagnosis",
        "rule out",
        "most likely",
        "cannot rule out",
        "consistent with",
        "suspicious for",
        "in the setting of",
        "secondary to",
      ],
      nativeGloss: {
        "differential diagnosis": "diagnóstico diferencial",
        "working diagnosis": "diagnóstico de trabajo",
        "rule out": "descartar",
        "most likely": "lo más probable",
        "cannot rule out": "no se puede descartar",
        "consistent with": "compatible con",
        "suspicious for": "sospechoso de",
        "in the setting of": "en el contexto de",
        "secondary to": "secundario a",
      },
    },
    {
      category: "Team & Hospital Workflow",
      emoji: "🏥",
      words: [
        "attending",
        "resident",
        "intern",
        "fellow",
        "consult",
        "handoff",
        "sign-out",
        "on call",
        "covering",
        "co-sign",
        "discharge planning",
        "care coordination",
      ],
      nativeGloss: {
        attending: "médico tratante / médico adjunto",
        resident: "residente",
        intern: "interno",
        fellow: "fellow / médico en subespecialidad",
        consult: "interconsulta",
        handoff: "transferencia / traspaso",
        "sign-out": "nota de traspaso",
        "on call": "de guardia",
        covering: "cubriendo / de cobertura",
        "co-sign": "contrafirmar",
        "discharge planning": "planificación del alta",
        "care coordination": "coordinación de la atención",
      },
    },
    {
      category: "Emergency & Critical Care",
      emoji: "🚨",
      words: [
        "code blue",
        "rapid response",
        "crash cart",
        "ROSC",
        "vasopressor",
        "intubation",
        "defibrillation",
        "CPR",
        "airway management",
        "IV access",
        "ICU",
        "sepsis protocol",
      ],
      nativeGloss: {
        "code blue": "código azul",
        "rapid response": "respuesta rápida",
        "crash cart": "carro de paro",
        ROSC: "recuperación de circulación espontánea",
        vasopressor: "vasopresor",
        intubation: "intubación",
        defibrillation: "desfibrilación",
        CPR: "RCP",
        "airway management": "manejo de vía aérea",
        "IV access": "acceso venoso IV",
        ICU: "UCI (Unidad de Cuidados Intensivos)",
        "sepsis protocol": "protocolo de sepsis",
      },
    },
  ],
};

// ── Lookup helpers ─────────────────────────────────────────────────────────────

export function getFmgArea(areaId: string): FmgArea | undefined {
  return FMG_CONTENT.areas.find((a) => a.id === areaId);
}

export function getFmgContent(): FmgModuleContent {
  return FMG_CONTENT;
}
