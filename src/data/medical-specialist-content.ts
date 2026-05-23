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

export interface MedicalModuleContent {
  moduleId: string;
  areas: ModuleArea[];
  vocabSets: ModuleVocabSet[];
}

export const MEDICAL_SPECIALIST_CONTENT: MedicalModuleContent[] = [
  // ─────────────────────────────────────────────
  // FAMILY MEDICINE
  // ─────────────────────────────────────────────
  {
    moduleId: "family-medicine",
    areas: [
      {
        id: "new-patient-visit",
        name: "New Patient Visit",
        emoji: "🩺",
        blurb:
          "Establishing care with a new patient — gathering history, building rapport, and setting expectations.",
        counterpart: "New adult patient, 40s, transferring care from another provider",
        learnerRole: "Family medicine physician or NP conducting an initial visit",
        toneNote:
          "Warm and unhurried. Use plain language with the patient. Show genuine curiosity about their history. Avoid jargon until you shift to colleague mode.",
        phrases: [
          {
            en: "Tell me a little about what brings you in today — and feel free to start wherever makes sense to you.",
            intent: "open-ended chief complaint",
          },
          {
            en: "Who was managing your care before you moved here, and do you have records we can request?",
            intent: "continuity of care",
          },
          {
            en: "Walk me through a typical day for you — what you eat, how you sleep, activity level.",
            intent: "lifestyle history",
          },
          {
            en: "Any hospitalizations, surgeries, or times you ended up in the ER in the last few years?",
            intent: "past medical/surgical history",
          },
          {
            en: "I want to make sure I have a complete picture — any family history of heart disease, cancer, or diabetes?",
            intent: "family history",
          },
          {
            en: "Let's go through your medications together — if you brought your bottles, that's even better.",
            intent: "medication reconciliation",
          },
          {
            en: "Is there anything you've been putting off dealing with that you've been wanting to talk to a doctor about?",
            intent: "uncovering hidden agenda",
          },
          {
            en: "Based on what you've told me, here's what I'd like to do today and what I'd like to address over the next few visits.",
            intent: "visit agenda-setting",
          },
        ],
        vocab: [
          "chief complaint",
          "HPI (history of present illness)",
          "PMH (past medical history)",
          "family history",
          "social history",
          "medication reconciliation",
          "ROS (review of systems)",
          "establishing care",
          "continuity of care",
          "health maintenance",
        ],
        challenges: [
          "The patient hasn't seen a doctor in 8 years and is vague about their history. Gather enough to form a problem list.",
          "The patient brings a bag of 11 medications from three different prescribers. Reconcile the list and identify duplicates.",
          "A 55-year-old patient mentions 'a little chest discomfort' almost as an aside. Explore this symptom without alarming them.",
        ],
        sampleConversation: [
          {
            speaker: "learner",
            en: "So tell me — what brings you in today? And feel free to just start talking, I'm not in a rush.",
          },
          {
            speaker: "ai",
            en: "Well, mostly I just need a new doctor since we moved. But honestly, I've been having some fatigue and I don't know, just not feeling myself for a few months.",
          },
          {
            speaker: "learner",
            en: "Got it. When you say fatigue, help me understand — is it trouble sleeping, trouble staying awake during the day, or just a general low energy feeling?",
          },
          {
            speaker: "ai",
            en: "More like low energy. I sleep okay, usually seven hours. I just feel wiped out by noon.",
          },
          {
            speaker: "learner",
            en: "Any changes in weight, appetite, feeling cold when others aren't, or hair changes? I want to make sure we're not missing something like a thyroid issue.",
          },
          {
            speaker: "ai",
            en: "Now that you mention it, my hair has been thinning. My wife noticed it too. Is that related?",
          },
        ],
      },
      {
        id: "chronic-disease-management",
        name: "Chronic Disease Management",
        emoji: "📋",
        blurb:
          "Managing ongoing conditions like diabetes, hypertension, and COPD — reviewing labs, adjusting treatment, and motivating adherence.",
        counterpart: "Established patient with type 2 diabetes and hypertension, A1c trending up",
        learnerRole: "Family medicine physician following the patient quarterly",
        toneNote:
          "Collaborative, non-judgmental. Avoid lecturing. Use shared decision-making language. Acknowledge barriers to adherence without dismissing them.",
        phrases: [
          {
            en: "Your A1c came back at 8.4 — it's gone up a bit since last time. Let's talk about what's been going on.",
            intent: "lab result delivery",
          },
          {
            en: "I don't want to just add another medication without understanding what's getting in the way.",
            intent: "adherence exploration",
          },
          {
            en: "On a scale of one to ten, how confident are you that you could make one change to your diet this month?",
            intent: "motivational interviewing",
          },
          {
            en: "Your blood pressure is running higher than I'd like — have you been able to check it at home at all?",
            intent: "BP management check-in",
          },
          {
            en: "We need to talk about your kidneys — at this level of blood sugar control, I want to check your microalbumin and GFR annually.",
            intent: "complication screening",
          },
          {
            en: "I want to make sure we're on the same page about the goal — ideally we're aiming for an A1c under 7, but I'd rather get you to 7.5 safely than chase a number too aggressively.",
            intent: "individualized goal-setting",
          },
          {
            en: "Are there any side effects from the metformin, or any reason you've been skipping doses?",
            intent: "medication side effect check",
          },
        ],
        vocab: [
          "HbA1c",
          "microalbuminuria",
          "eGFR",
          "hypertension",
          "titration",
          "metformin",
          "ACE inhibitor",
          "statin therapy",
          "diabetic nephropathy",
          "metabolic syndrome",
        ],
        challenges: [
          "A diabetic patient's A1c has risen from 7.1 to 9.0. They admit they stopped their metformin due to GI side effects. Counsel them and offer alternatives.",
          "A hypertensive patient says they feel fine and questions why they need medication at all. Use motivational interviewing to address this.",
          "A patient on three antihypertensives has a BP of 162/98 in clinic today. They report taking all medications. Work through secondary causes and next steps.",
        ],
        sampleConversation: [
          {
            speaker: "learner",
            en: "So your A1c came back at 8.4 this time. How have things been going since your last visit — has anything changed?",
          },
          {
            speaker: "ai",
            en: "Honestly, it's been a rough few months. Work has been crazy, I've been eating out a lot more, and I keep forgetting the evening metformin dose.",
          },
          {
            speaker: "learner",
            en: "I appreciate you being straight with me — that actually explains a lot. The evening dose matters because it covers your overnight glucose. What would make it easier to remember?",
          },
          {
            speaker: "ai",
            en: "I don't know, maybe if it was just once a day? My wife takes one pill in the morning and that's it.",
          },
          {
            speaker: "learner",
            en: "That's actually a good option. There's an extended-release version of metformin you take once with dinner. It also tends to be easier on the stomach. Want to try that?",
          },
          {
            speaker: "ai",
            en: "Yeah, that sounds way more doable. And what about the blood pressure — was that okay?",
          },
        ],
      },
      {
        id: "pediatric-visit",
        name: "Pediatric Visit",
        emoji: "👶",
        blurb:
          "Well-child exams and acute sick visits — communicating with both the child and the parent/guardian.",
        counterpart: "Parent bringing in a 4-year-old for a well-child check",
        learnerRole: "Family medicine physician conducting a well-child visit",
        toneNote:
          "Warm and playful with the child, clear and informative with the parent. Use age-appropriate language for both. Acknowledge parental concerns without over-reassuring.",
        phrases: [
          {
            en: "Hi! Who's this you brought with you today? Is that your favorite dinosaur?",
            intent: "child rapport-building",
          },
          {
            en: "Before we get started, what questions or concerns do you have that you want to make sure we cover?",
            intent: "parent agenda-setting",
          },
          {
            en: "At four years old, we're looking at language, social skills, and fine motor — how does she do around other kids?",
            intent: "developmental screening",
          },
          {
            en: "Is she eating a variety of foods, or are there things she's refusing? Picky eating is really common at this age.",
            intent: "nutrition screening",
          },
          {
            en: "We're going to do two shots today — I won't lie, they sting for a second, but you're going to do great.",
            intent: "vaccine preparation",
          },
          {
            en: "You should keep an eye out for fever, fussiness, or a sore arm for the next day or two — that's normal. Call us if she's running over 104 or anything seems off.",
            intent: "vaccine anticipatory guidance",
          },
          {
            en: "Any screen time concerns? At this age we recommend no more than an hour of quality programming per day.",
            intent: "anticipatory guidance",
          },
          {
            en: "She looks great — her growth is right on track and her development is right where we want to see it at four.",
            intent: "reassurance and summary",
          },
        ],
        vocab: [
          "well-child exam",
          "developmental milestone",
          "anticipatory guidance",
          "immunization schedule",
          "DTaP",
          "MMR",
          "growth percentile",
          "autism screening",
          "vision screening",
          "speech delay",
        ],
        challenges: [
          "A parent is hesitant about the MMR vaccine and cites concerns about autism. Counsel them using current evidence without being dismissive.",
          "A 2-year-old isn't saying any two-word phrases yet. Discuss your approach to speech delay evaluation with the parent.",
          "An 8-year-old's BMI has crossed from the 85th to the 95th percentile. Discuss this with the parent sensitively.",
        ],
        sampleConversation: [
          {
            speaker: "learner",
            en: "Hey buddy! That is a cool shirt. Is that Spiderman? Okay, can you do something for me — can you draw a circle on this paper?",
          },
          {
            speaker: "ai",
            en: "(as parent) He actually loves drawing. He can write his name too — we've been practicing for preschool.",
          },
          {
            speaker: "learner",
            en: "That's wonderful — writing his name at four is right on track, that's great to hear. Does he play well with other kids, take turns, that kind of thing?",
          },
          {
            speaker: "ai",
            en: "Mostly yes. He has a best friend at daycare. But he does still have some tantrums, is that normal?",
          },
          {
            speaker: "learner",
            en: "Totally normal at four — the tantrums should start tapering off more as he heads toward five. If they're escalating or lasting longer than 15-20 minutes, we'd want to hear about it, but what you're describing sounds developmentally appropriate.",
          },
          {
            speaker: "ai",
            en: "Okay, that's a relief. And what about the shots — how many today?",
          },
        ],
      },
      {
        id: "mental-health-screening",
        name: "Mental Health Screening",
        emoji: "🧠",
        blurb:
          "Screening for depression, anxiety, and suicidality in the primary care setting — broaching sensitive topics skillfully.",
        counterpart: "35-year-old patient presenting for a follow-up who scores a 10 on the PHQ-9",
        learnerRole: "Family medicine physician following up on a PHQ-9 result",
        toneNote:
          "Slow, calm, non-reactive. Normalize without minimizing. Ask directly about suicidality — don't dance around it. Use reflective listening.",
        phrases: [
          {
            en: "On the questionnaire you filled out, some of your answers stood out to me and I want to check in about how you've really been doing.",
            intent: "opening the conversation",
          },
          {
            en: "When you say things feel hopeless — can you tell me more about what that feels like for you?",
            intent: "exploring depression symptoms",
          },
          {
            en: "I have to ask directly — have you had any thoughts of hurting yourself or not wanting to be here?",
            intent: "suicidality screening",
          },
          {
            en: "I'm glad you told me that. Let's talk about what kind of support would help most right now.",
            intent: "safety planning opener",
          },
          {
            en: "Depression is a medical condition, same as diabetes — there's no reason to push through it alone.",
            intent: "destigmatizing",
          },
          {
            en: "We have a few options — therapy, medication, or both. What feels right to you to start with?",
            intent: "shared decision-making",
          },
          {
            en: "I want to make sure you have a plan for this week — if things feel really dark, who would you call?",
            intent: "safety planning",
          },
          {
            en: "I'd like to see you back in two to three weeks — not three months. This is something I want to stay close on.",
            intent: "close follow-up",
          },
        ],
        vocab: [
          "PHQ-9",
          "GAD-7",
          "suicidal ideation",
          "safety planning",
          "SSRI",
          "CBT (cognitive behavioral therapy)",
          "passive ideation",
          "protective factors",
          "crisis resources",
          "warm handoff",
        ],
        challenges: [
          "A patient with a PHQ-9 of 14 denies feeling depressed but endorses low energy, poor sleep, and anhedonia. Help them connect the dots.",
          "A patient discloses passive suicidal ideation with no plan. Walk through a safety assessment and safety plan.",
          "A patient refuses psychiatric referral and says 'I just need to tough it out.' Use motivational interviewing to explore their resistance.",
        ],
        sampleConversation: [
          {
            speaker: "learner",
            en: "So on the questionnaire you filled out today — you mentioned feeling down nearly every day and having trouble finding enjoyment in things. I want to make sure we actually talk about that.",
          },
          {
            speaker: "ai",
            en: "I mean, it's just been a lot lately. Work stuff, some things at home. I didn't really think it was that big a deal.",
          },
          {
            speaker: "learner",
            en: "It sounds like you've been carrying a lot. When you say it's been a lot — how long has it felt this way?",
          },
          {
            speaker: "ai",
            en: "Honestly, maybe four or five months. I keep thinking it'll pass, but I wake up dreading the day, and that's not like me.",
          },
          {
            speaker: "learner",
            en: "I appreciate you sharing that with me. I want to ask you directly — have you had any thoughts of hurting yourself, or times where you've thought you'd be better off not being here?",
          },
          {
            speaker: "ai",
            en: "Not like, seriously. But sometimes I think about how tired I am and I wonder what the point is. Does that count?",
          },
        ],
      },
      {
        id: "preventive-care",
        name: "Preventive Care & Health Maintenance",
        emoji: "🛡️",
        blurb:
          "Annual wellness visits, cancer screenings, vaccine updates, and lifestyle counseling.",
        counterpart: "52-year-old patient presenting for an annual physical, no acute complaints",
        learnerRole:
          "Family medicine physician conducting a Medicare Annual Wellness Visit or standard physical",
        toneNote:
          "Efficient but personal. Cover the checklist without making the patient feel like a to-do list. Tie each recommendation to the patient's specific risk factors.",
        phrases: [
          {
            en: "At 52, there are a few screenings we want to make sure you're up to date on — colonoscopy, mammogram, and a lipid panel are the big ones.",
            intent: "age-appropriate screening",
          },
          {
            en: "Have you ever had a shingles vaccine? It's recommended starting at 50, and it's worth doing.",
            intent: "vaccine update",
          },
          {
            en: "Your LDL came back at 148 — with your family history of heart disease, I'd like to talk about whether a statin makes sense.",
            intent: "cardiovascular risk discussion",
          },
          {
            en: "Are you a current or former smoker? I ask because we may want to do a low-dose CT scan for lung cancer screening.",
            intent: "lung cancer screening eligibility",
          },
          {
            en: "How's your stress level overall, and are you getting any physical activity? Even 150 minutes a week of walking changes your cardiac risk.",
            intent: "lifestyle counseling",
          },
          {
            en: "Let's update your advance directive while you're here — do you have one on file, and is it current?",
            intent: "advance care planning",
          },
          {
            en: "Your bone density scan is due — at your age and with low vitamin D, osteoporosis is something we want to screen for.",
            intent: "DEXA recommendation",
          },
        ],
        vocab: [
          "colonoscopy",
          "mammography",
          "DEXA scan",
          "lipid panel",
          "USPSTF guidelines",
          "advance directive",
          "lung cancer screening",
          "cervical cancer screening",
          "immunization schedule",
          "10-year cardiovascular risk",
        ],
        challenges: [
          "A 58-year-old patient hasn't had a colonoscopy and is resistant. Address their concerns and offer alternatives like Cologuard.",
          "Calculate and explain a patient's 10-year ASCVD risk score and discuss the shared decision-making process around statin initiation.",
          "A 45-year-old woman asks when she should start getting mammograms. Walk through the evidence and different guideline recommendations.",
        ],
        sampleConversation: [
          {
            speaker: "learner",
            en: "Everything looks pretty good overall. I do want to flag a few things we should get caught up on. Have you had your colonoscopy yet?",
          },
          {
            speaker: "ai",
            en: "No, I've been putting that off. My brother had one and said it was terrible. Is it really necessary?",
          },
          {
            speaker: "learner",
            en: "I hear that — the prep is not fun. But here's the thing: colorectal cancer is one we can actually prevent, not just catch early. At 52, you're right in the window where it matters most.",
          },
          { speaker: "ai", en: "Is there anything else I could do instead? Like a stool test?" },
          {
            speaker: "learner",
            en: "Actually yes — there's a test called Cologuard that you do at home. It's not quite as sensitive as a colonoscopy, but it's a real option if that barrier is keeping you from getting screened at all. Better to do that than nothing.",
          },
          {
            speaker: "ai",
            en: "Okay, I'd be willing to try that. What about the cholesterol thing — you mentioned my LDL?",
          },
        ],
      },
      {
        id: "urgent-visit",
        name: "Urgent / Sick Visit",
        emoji: "🚨",
        blurb:
          "Acute presentations in the primary care setting — differentiating benign from serious, and knowing when to escalate.",
        counterpart: "Patient presenting with three days of chest pain and shortness of breath",
        learnerRole: "Family medicine physician evaluating an acute complaint",
        toneNote:
          "Focused and systematic. Move efficiently without seeming dismissive. Be transparent about your clinical reasoning. Know when to say 'I want to rule out something serious before we do anything else.'",
        phrases: [
          {
            en: "Tell me exactly where the pain is and show me with one finger if you can — is it more here or here?",
            intent: "pain localization",
          },
          {
            en: "Does anything make it better or worse — like leaning forward, taking a deep breath, or lying down?",
            intent: "aggravating/relieving factors",
          },
          {
            en: "I want to get an EKG right now and some labs — I just want to make sure we're not dealing with something cardiac before we go any further.",
            intent: "urgent workup ordering",
          },
          {
            en: "On a scale of one to ten, what's the pain right now, and what's the worst it's been?",
            intent: "pain severity",
          },
          {
            en: "Any chance you've been on a long car or plane ride recently, or had any leg swelling?",
            intent: "PE risk factor screening",
          },
          {
            en: "I'm going to be straight with you — the story you're describing warrants a trip to the ED for a CT scan that we can't do here.",
            intent: "escalation to ED",
          },
          {
            en: "This looks more like musculoskeletal pain — the tenderness here on exam fits, and the EKG is clean. Let's treat it as costochondritis for now and here's what to watch for.",
            intent: "reassurance with safety net",
          },
        ],
        vocab: [
          "costochondritis",
          "pleuritis",
          "pulmonary embolism",
          "GERD",
          "troponin",
          "D-dimer",
          "EKG (electrocardiogram)",
          "WELLS score",
          "pneumothorax",
          "pericarditis",
        ],
        challenges: [
          "A 44-year-old woman presents with atypical chest pain. Her EKG is normal but her risk factors include diabetes and smoking. Walk through your workup and disposition.",
          "A patient with known GERD presents with chest pain they attribute to reflux. Determine how to distinguish this from a cardiac cause.",
          "You see a 28-year-old with pleuritic chest pain after a long flight. Walk through PE risk stratification using the Wells criteria.",
        ],
        sampleConversation: [
          {
            speaker: "learner",
            en: "So this chest pain started three days ago. Is it constant or does it come and go?",
          },
          {
            speaker: "ai",
            en: "It comes and goes. It's worse when I take a deep breath in, kind of sharp. And I've been a little short of breath.",
          },
          {
            speaker: "learner",
            en: "Sharp pain that's worse with breathing is actually helpful information — it makes me think this might be pleuritis or musculoskeletal rather than something cardiac. But I still want an EKG to make sure. Any recent travel, long drives, leg swelling?",
          },
          {
            speaker: "ai",
            en: "Actually yeah, I drove to see my parents two weeks ago — about a nine-hour drive.",
          },
          {
            speaker: "learner",
            en: "Okay, that's important. I want to check your D-dimer — there's a condition called a pulmonary embolism, a clot in the lung, that we need to rule out given that history and your symptoms.",
          },
          { speaker: "ai", en: "A clot in my lung? That sounds serious." },
        ],
      },
      {
        id: "phone-triage",
        name: "Phone Triage",
        emoji: "📞",
        blurb:
          "Managing patient calls — assessing severity over the phone, giving safe advice, and triaging appropriately.",
        counterpart: "Patient calling to report fever of 103.2 and cough for two days",
        learnerRole: "Family medicine physician or nurse triaging a patient call",
        toneNote:
          "Efficient, clear, safety-conscious. You can't see the patient — acknowledge that limitation. Set clear return precautions and document the encounter.",
        phrases: [
          {
            en: "Tell me exactly what's going on — when did this start and what symptoms do you have besides the fever?",
            intent: "focused history over phone",
          },
          {
            en: "Is there any shortness of breath, chest pain, or confusion? Those are things that would mean you need to be seen today.",
            intent: "red flag screening",
          },
          {
            en: "Have you been tested for flu or COVID since this started?",
            intent: "rapid test inquiry",
          },
          {
            en: "Given what you're describing, I think this can be managed at home for now — but here's exactly what I want you to watch for.",
            intent: "home management guidance",
          },
          {
            en: "If your fever goes above 104, you become confused, you're struggling to breathe, or you're not keeping fluids down, you go straight to the ER — don't wait to call us first.",
            intent: "return precautions",
          },
          {
            en: "I'm going to have you come in tomorrow morning if you're not starting to turn a corner — does nine o'clock work?",
            intent: "follow-up scheduling",
          },
          {
            en: "We can send a prescription to your pharmacy for something to help with the symptoms — what pharmacy do you use?",
            intent: "remote prescribing",
          },
        ],
        vocab: [
          "triage",
          "return precautions",
          "fever management",
          "influenza",
          "streptococcal pharyngitis",
          "oxygen saturation",
          "dehydration",
          "remote monitoring",
          "nurse triage protocol",
          "SBAR",
        ],
        challenges: [
          "A parent calls about a 6-month-old with a fever of 101.8. Walk through your assessment and advice, keeping infant fever guidelines in mind.",
          "A patient with CHF calls to say they gained 5 pounds in 3 days and their ankles are swollen. Triage this call appropriately.",
          "An elderly patient calls confused about their symptoms after a fall. Assess fall safety and determine whether an in-person visit is needed today.",
        ],
        sampleConversation: [
          { speaker: "learner", en: "Hi, this is Dr. Chen returning your call. What's going on?" },
          {
            speaker: "ai",
            en: "Hi, I've had a fever of 103.2 since last night and a really bad cough. I feel terrible.",
          },
          {
            speaker: "learner",
            en: "I'm sorry you're feeling so rough. Let me ask — are you having any trouble breathing, any chest pain, or feeling confused?",
          },
          {
            speaker: "ai",
            en: "No confusion, but I do feel a little short of breath when I walk around.",
          },
          {
            speaker: "learner",
            en: "Okay. That's something I want to understand better — when you say short of breath, is it shortness of breath at rest sitting on the couch, or only when you're up moving around?",
          },
          { speaker: "ai", en: "Mostly when I move around. Sitting still I'm okay." },
        ],
      },
    ],
    vocabSets: [
      {
        category: "Common Diagnoses",
        emoji: "📖",
        words: [
          "hypertension",
          "type 2 diabetes",
          "hyperlipidemia",
          "GERD",
          "osteoarthritis",
          "hypothyroidism",
          "major depressive disorder",
          "asthma",
          "chronic kidney disease",
          "obesity",
        ],
      },
      {
        category: "Lab Values",
        emoji: "🔬",
        words: [
          "HbA1c",
          "LDL cholesterol",
          "TSH",
          "creatinine",
          "eGFR",
          "CBC",
          "CMP",
          "microalbuminuria",
          "INR",
          "vitamin D level",
        ],
      },
      {
        category: "Medications",
        emoji: "💊",
        words: [
          "metformin",
          "lisinopril",
          "atorvastatin",
          "levothyroxine",
          "sertraline",
          "amlodipine",
          "omeprazole",
          "albuterol",
          "aspirin",
          "hydrochlorothiazide",
        ],
      },
      {
        category: "Clinical Actions",
        emoji: "⚕️",
        words: [
          "titration",
          "referral",
          "prior authorization",
          "shared decision-making",
          "motivational interviewing",
          "warm handoff",
          "care coordination",
          "risk stratification",
          "disposition",
          "follow-up",
        ],
      },
      {
        category: "Preventive Screening",
        emoji: "🛡️",
        words: [
          "colonoscopy",
          "mammography",
          "Pap smear",
          "DEXA scan",
          "lung cancer screening",
          "ASCVD risk",
          "depression screening",
          "vision screening",
          "immunization",
          "advance directive",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // OB-GYN
  // ─────────────────────────────────────────────
  {
    moduleId: "ob-gyn",
    areas: [
      {
        id: "first-prenatal-visit",
        name: "First Prenatal Visit",
        emoji: "🤰",
        blurb:
          "Establishing prenatal care — dating the pregnancy, reviewing history, ordering first-trimester labs, and setting expectations for the coming months.",
        counterpart: "26-year-old patient at 8 weeks gestation, first pregnancy",
        learnerRole: "OB-GYN or midwife conducting the initial obstetric intake visit",
        toneNote:
          "Warm and reassuring but thorough. This visit sets the tone for the entire pregnancy relationship. Cover medical history without rushing. Acknowledge excitement and anxiety simultaneously.",
        phrases: [
          {
            en: "Congratulations — based on your LMP and the ultrasound, you're measuring right at eight weeks, with a due date of around the fourteenth.",
            intent: "pregnancy dating and EDD",
          },
          {
            en: "I'm going to order your first-trimester labs today — that includes blood type, rubella immunity, STI screening, and a CBC.",
            intent: "first-trimester lab panel",
          },
          {
            en: "Have you started a prenatal vitamin yet? The folic acid in the first trimester is really important for the baby's neural tube.",
            intent: "prenatal vitamin counseling",
          },
          {
            en: "Any history of miscarriage, prior pregnancy complications, or any genetic conditions that run in either family?",
            intent: "obstetric and genetic history",
          },
          {
            en: "We'll offer genetic screening around 10 to 13 weeks — it looks at the risk for chromosomal conditions like Down syndrome. We can talk through what that testing involves.",
            intent: "genetic screening counseling",
          },
          {
            en: "Foods to avoid during pregnancy: raw fish, deli meat unless heated, unpasteurized cheese, and limit your mercury-heavy fish like tuna.",
            intent: "dietary counseling",
          },
          {
            en: "Normal spotting can happen in early pregnancy, but if you soak a pad or have tissue passing, or cramping that won't quit, call us right away.",
            intent: "early pregnancy precautions",
          },
          {
            en: "We'll see you every four weeks until 28 weeks, then every two weeks, then weekly toward the end.",
            intent: "prenatal visit schedule",
          },
        ],
        vocab: [
          "LMP (last menstrual period)",
          "EDD (estimated due date)",
          "gestational age",
          "nuchal translucency",
          "cell-free fetal DNA",
          "rubella immunity",
          "Group B Streptococcus",
          "fundal height",
          "fetal heart tones",
          "first-trimester screen",
        ],
        challenges: [
          "A patient at 10 weeks presents with light spotting. Evaluate the differential and communicate your plan while managing her anxiety.",
          "Counsel a patient on the difference between screening tests (NIPT, nuchal translucency) and diagnostic tests (CVS, amniocentesis).",
          "A patient reports nausea and vomiting so severe she can't keep anything down. Assess for hyperemesis gravidarum and discuss management.",
        ],
        sampleConversation: [
          {
            speaker: "learner",
            en: "So based on your last period and what we saw on ultrasound today, you're eight weeks and two days, which puts your due date at January 14th. How are you feeling so far?",
          },
          {
            speaker: "ai",
            en: "Honestly, really nauseous. Like all day. I thought it was called morning sickness but it's not just in the morning.",
          },
          {
            speaker: "learner",
            en: "You're right, 'morning sickness' is a bit of a misnomer — it can be any time of day and for some people it's constant. Usually starts to lift around 12 to 14 weeks. In the meantime, small frequent meals, ginger, and there are safe medications we can use if it gets bad enough that you're losing weight or can't stay hydrated.",
          },
          {
            speaker: "ai",
            en: "Okay, good to know. And what about the genetic testing? My mom mentioned something about Down syndrome testing?",
          },
          {
            speaker: "learner",
            en: "Yes, we'll offer that around 10 to 13 weeks. There's a blood test called cell-free fetal DNA — it looks at the baby's DNA in your bloodstream and screens for chromosomal conditions. It's a screen, not a diagnosis, so if it comes back abnormal, we'd talk about whether you'd want to do an amniocentesis to confirm.",
          },
          { speaker: "ai", en: "Is it safe to do? And is it covered by insurance?" },
        ],
      },
      {
        id: "anatomy-scan",
        name: "Anatomy Scan (20-week Ultrasound)",
        emoji: "🖥️",
        blurb:
          "The mid-pregnancy anatomy survey — reviewing fetal structures, placental location, and communicating findings to the patient.",
        counterpart: "Patient at 20 weeks presenting with her partner for the anatomy ultrasound",
        learnerRole: "OB-GYN or maternal-fetal medicine physician reviewing the anatomy scan",
        toneNote:
          "Balanced between sharing the joy of seeing the baby and communicating any findings clearly. Use non-alarmist language for soft markers. Be honest about uncertainty.",
        phrases: [
          {
            en: "We're going to take a look at all the major structures today — brain, heart, spine, kidneys, limbs — and check the placental location.",
            intent: "anatomy scan overview",
          },
          {
            en: "The four-chamber view of the heart looks great, and I can see all four chambers filling nicely.",
            intent: "cardiac anatomy",
          },
          {
            en: "The placenta is anterior and low at this point — we'll want to recheck at 32 weeks to see if it's moved up.",
            intent: "low-lying placenta counseling",
          },
          {
            en: "We see something called a choroid plexus cyst — on its own, this is a normal variant and typically resolves. It becomes more meaningful only if there are other findings.",
            intent: "soft marker counseling",
          },
          {
            en: "The fetal weight is estimated at 12 ounces, which is right on track for 20 weeks.",
            intent: "fetal biometry",
          },
          {
            en: "Fluid levels look good, the cervix is measuring within normal, and fetal movement has been active throughout.",
            intent: "reassuring findings summary",
          },
          {
            en: "We did notice the baby's lips but the palate is hard to visualize on ultrasound — that's not something we can fully assess at this scan.",
            intent: "limitation disclosure",
          },
        ],
        vocab: [
          "anatomy survey",
          "anterior placenta",
          "placenta previa",
          "choroid plexus cyst",
          "echogenic bowel",
          "biometry",
          "estimated fetal weight",
          "amniotic fluid index",
          "cervical length",
          "vasa previa",
        ],
        challenges: [
          "The anatomy scan shows an echogenic focus in the fetal heart. Counsel the patient about this soft marker for Down syndrome.",
          "The scan reveals placenta previa. Explain what this means for the remainder of the pregnancy and delivery planning.",
          "A cardiac finding of uncertain significance is noted. Walk through how you would communicate this and plan next steps with MFM.",
        ],
        sampleConversation: [
          {
            speaker: "learner",
            en: "Everything is looking really good. I can see all four chambers of the heart, the brain structures look normal, spine looks great, two kidneys, four limbs. The baby is measuring right on track at 20 weeks.",
          },
          {
            speaker: "ai",
            en: "Oh good. Can you tell what it is? We didn't find out at the last scan.",
          },
          { speaker: "learner", en: "I can see — would you like to know?" },
          { speaker: "ai", en: "Yes! We both want to know." },
          {
            speaker: "learner",
            en: "It's a girl. I do want to mention one thing — the placenta is sitting a little low right now, what we call a low-lying placenta. This is actually pretty common at 20 weeks. As the uterus grows, the placenta usually moves up. We'll recheck at 32 weeks. For now it doesn't change anything.",
          },
          { speaker: "ai", en: "Low-lying — does that mean I can't do certain things?" },
        ],
      },
      {
        id: "labor-and-delivery",
        name: "Labor & Delivery",
        emoji: "🏥",
        blurb:
          "Admitting a laboring patient, managing labor progress, communicating during active labor, and conducting delivery.",
        counterpart:
          "Patient presenting to L&D at 39 weeks with regular contractions every 5 minutes",
        learnerRole: "OB-GYN or labor and delivery nurse/midwife managing active labor",
        toneNote:
          "Calm, confident, and directive when needed. Support the patient's preferences where possible. Communicate changes in the clinical picture clearly and without alarming language.",
        phrases: [
          {
            en: "You're four centimeters dilated and about 70 percent effaced — you're definitely in active labor. We're going to admit you.",
            intent: "labor assessment and admission",
          },
          {
            en: "Have you thought about whether you'd like an epidural? There's no wrong answer — we'll support whatever you decide.",
            intent: "epidural counseling",
          },
          {
            en: "The baby's heart rate tracing looks reassuring — we're seeing good variability and accelerations.",
            intent: "EFM strip reassurance",
          },
          {
            en: "I'm seeing some late decelerations on the monitor — I want to roll you onto your left side and give you some oxygen. The baby is telling us it's under a little stress.",
            intent: "nonreassuring tracing management",
          },
          {
            en: "You've been at eight centimeters for three hours without progress. I want to talk about our options, including possibly augmenting with Pitocin or discussing a C-section.",
            intent: "labor dystocia discussion",
          },
          {
            en: "When I tell you to push, I want you to take a big breath in, hold it, and bear down hard for a count of ten. Let's practice.",
            intent: "pushing instruction",
          },
          {
            en: "One more push — the head is right there, you're doing great.",
            intent: "crowning encouragement",
          },
          {
            en: "Your baby is here — she's crying, good tone, she looks great. Congratulations.",
            intent: "delivery announcement",
          },
        ],
        vocab: [
          "cervical effacement",
          "dilation",
          "station",
          "active labor",
          "electronic fetal monitoring",
          "variable deceleration",
          "late deceleration",
          "oxytocin augmentation",
          "operative delivery",
          "episiotomy",
        ],
        challenges: [
          "The fetal heart rate tracing shows repetitive variable decelerations. Explain your assessment and interventions to the patient and nursing staff.",
          "A patient who has been laboring for 18 hours has not progressed past 7 cm despite augmentation. Discuss the option of cesarean delivery.",
          "A patient with a birth plan requests no episiotomy and freedom of movement during labor. Navigate her preferences within your clinical parameters.",
        ],
        sampleConversation: [
          {
            speaker: "learner",
            en: "Okay, I've checked you — you're six centimeters, completely effaced, and the baby is at zero station. You're making really good progress. How's the pain?",
          },
          {
            speaker: "ai",
            en: "The contractions are getting really intense. I was trying to go without an epidural but I don't know if I can.",
          },
          {
            speaker: "learner",
            en: "That's completely okay — six centimeters, contractions this close together, it makes total sense that you're feeling that. If you want the epidural, we can have anesthesia here within about twenty minutes. There's no penalty for changing your mind.",
          },
          { speaker: "ai", en: "Okay. Yes. I think I need it. Will it slow things down?" },
          {
            speaker: "learner",
            en: "The older data suggested that, but more recent evidence shows a well-dosed epidural doesn't actually slow labor down. And a well-rested patient who isn't fighting through every contraction often pushes more effectively.",
          },
          { speaker: "ai", en: "That actually makes me feel better about it. Let's do it." },
        ],
      },
      {
        id: "postpartum-visit",
        name: "Postpartum Visit",
        emoji: "🌸",
        blurb:
          "The 6-week postpartum visit — physical recovery, breastfeeding, mood screening, contraception, and returning to normal activity.",
        counterpart: "Patient six weeks after a vaginal delivery, here for postpartum follow-up",
        learnerRole: "OB-GYN or midwife conducting the postpartum check",
        toneNote:
          "Attentive to both physical recovery and emotional wellbeing. Screen actively for postpartum depression — don't just hand the form. Address the whole person, not just the incision.",
        phrases: [
          {
            en: "How are you doing — really? Not just physically, but how are you managing with the baby, with sleep, with everything?",
            intent: "holistic postpartum check-in",
          },
          {
            en: "We routinely screen for postpartum depression at this visit — it affects about one in five new moms and it's very treatable.",
            intent: "PPD screening introduction",
          },
          {
            en: "Your incision is healing beautifully — good approximation, no signs of infection.",
            intent: "incision assessment",
          },
          {
            en: "Are you breastfeeding? How has that been going — any latch issues, pain, or concerns about supply?",
            intent: "lactation assessment",
          },
          {
            en: "Have you thought about contraception? It's actually possible to ovulate before your first period, so this isn't something to wait on.",
            intent: "contraception counseling",
          },
          {
            en: "Pelvic floor physical therapy is something I recommend to everyone after a vaginal delivery — especially if you're having any leaking or pelvic pressure.",
            intent: "pelvic floor PT referral",
          },
          {
            en: "You can return to exercise, sex, and normal activities — listen to your body, but there's no strict six-week rule anymore.",
            intent: "activity resumption guidance",
          },
        ],
        vocab: [
          "postpartum depression",
          "Edinburgh Postnatal Depression Scale",
          "lochia",
          "uterine involution",
          "perineal healing",
          "lactation",
          "prolactin",
          "pelvic floor dysfunction",
          "postpartum thyroiditis",
          "LARC (long-acting reversible contraception)",
        ],
        challenges: [
          "A patient at her postpartum visit scores a 14 on the Edinburgh scale and admits to crying daily and feeling detached from her baby. Manage this sensitively.",
          "A breastfeeding patient presents with a painful, hot, red area on her breast. Differentiate mastitis from engorgement and discuss management.",
          "A patient who had a fourth-degree laceration at delivery is afraid to resume intercourse. Counsel her about healing, pelvic PT, and when it's safe to try.",
        ],
        sampleConversation: [
          {
            speaker: "learner",
            en: "Six weeks out — how are you doing overall? How's sleep, how's feeding going, how are you feeling in yourself?",
          },
          {
            speaker: "ai",
            en: "Sleep is rough, obviously. Breastfeeding is going okay now but the first two weeks were really hard. And honestly, I've been feeling kind of… flat? Like I expected to feel happier.",
          },
          {
            speaker: "learner",
            en: "I'm really glad you said that. That flatness you're describing — tell me more. Is it just being tired, or is there something else? Feeling disconnected, anxious, tearful?",
          },
          {
            speaker: "ai",
            en: "More tearful than I expected. And sometimes I feel like I don't know what I'm doing and it's overwhelming.",
          },
          {
            speaker: "learner",
            en: "What you're describing sounds like it could be postpartum depression — and I want to be clear that this is a medical condition, not a character flaw. About one in five new moms experience it. There are very effective treatments. Can we talk about options?",
          },
          {
            speaker: "ai",
            en: "I was worried about saying something. I felt like I should just be happy.",
          },
        ],
      },
      {
        id: "annual-exam",
        name: "Annual Gynecologic Exam",
        emoji: "📅",
        blurb:
          "The annual well-woman visit — Pap smear, STI screening, breast exam, and reproductive health counseling.",
        counterpart: "32-year-old woman presenting for an annual gynecologic exam",
        learnerRole: "OB-GYN or GYN NP conducting a well-woman visit",
        toneNote:
          "Thorough, non-judgmental, and patient-centered. Cervical cancer screening guidelines change — be precise. Create a safe space for sensitive sexual and reproductive health questions.",
        phrases: [
          {
            en: "At 32, if your last Pap was normal, current guidelines say we do a Pap with HPV co-testing every five years. When was your last one?",
            intent: "cervical cancer screening",
          },
          {
            en: "I'm going to do a breast exam — have you noticed any lumps, nipple discharge, or skin changes you've been concerned about?",
            intent: "breast exam introduction",
          },
          {
            en: "Are you sexually active? And is there anything about your sexual health or contraception you'd like to discuss?",
            intent: "sexual health history",
          },
          {
            en: "I want to offer STI screening today — chlamydia and gonorrhea testing is recommended for sexually active women under 25, and we offer it to anyone who wants it.",
            intent: "STI screening offer",
          },
          {
            en: "Are you having any irregular cycles, pelvic pain, or anything that's been bothering you?",
            intent: "GYN symptom review",
          },
          {
            en: "I'll do the Pap now — you'll feel some pressure and possibly a pinch. Let me know if you need me to stop.",
            intent: "Pap smear preparation",
          },
          {
            en: "Results typically come back in one to two weeks — normal results go through the portal, and we'll call if anything needs follow-up.",
            intent: "result communication plan",
          },
        ],
        vocab: [
          "Pap smear (cervical cytology)",
          "HPV co-testing",
          "ASCUS",
          "CIN (cervical intraepithelial neoplasia)",
          "colposcopy",
          "chlamydia",
          "gonorrhea",
          "endometriosis",
          "PCOS (polycystic ovary syndrome)",
          "fibroid",
        ],
        challenges: [
          "A patient's Pap comes back ASCUS with high-risk HPV positive. Explain what this means and why you are recommending colposcopy.",
          "A 28-year-old asks you to tie her tubes at her annual visit. Navigate the informed consent conversation about permanent sterilization.",
          "A patient reports painful, heavy periods with pelvic pressure. Evaluate for fibroids versus endometriosis and discuss workup.",
        ],
        sampleConversation: [
          {
            speaker: "learner",
            en: "So everything on exam looks really normal. I'm going to go ahead and do the Pap — you're due for a co-test, meaning Pap plus HPV together. You'll feel some pressure.",
          },
          {
            speaker: "ai",
            en: "Okay. I always hate this part. Can I ask — if the HPV comes back positive, does that mean I have cancer?",
          },
          {
            speaker: "learner",
            en: "That's a really common concern and the answer is no, not at all. HPV is a virus that most sexually active people are exposed to at some point in their lives. Most HPV infections clear on their own. The test just helps us understand your risk and how frequently to screen.",
          },
          { speaker: "ai", en: "So what happens if it's positive?" },
          {
            speaker: "learner",
            en: "It depends on the type and on what the Pap shows. If the Pap is normal and it's a lower-risk strain, we'd just recheck in three years. If it's a high-risk strain with any abnormal cells, we'd bring you in for a colposcopy — which is basically a closer look at the cervix.",
          },
          { speaker: "ai", en: "That doesn't sound too bad. Okay, let's just do it." },
        ],
      },
      {
        id: "abnormal-results",
        name: "Abnormal Results & Colposcopy",
        emoji: "🔍",
        blurb:
          "Managing abnormal cervical cytology — communicating results, counseling about colposcopy, and managing patient anxiety.",
        counterpart:
          "Patient calling to discuss her Pap result that shows HSIL (high-grade squamous intraepithelial lesion)",
        learnerRole: "OB-GYN or GYN NP communicating abnormal results and planning colposcopy",
        toneNote:
          "Clear and direct without catastrophizing. Distinguish between abnormal cells and cancer explicitly. Move the patient toward next steps efficiently while addressing fear.",
        phrases: [
          {
            en: "I'm calling about your Pap result — it showed some abnormal cells called high-grade changes, and I want to explain what that means and what we do next.",
            intent: "abnormal result communication",
          },
          {
            en: "This does not mean you have cancer — what it means is that some cells on your cervix look atypical and we need a closer look.",
            intent: "cancer fear management",
          },
          {
            en: "We're going to bring you in for a colposcopy, which is basically a Pap with magnification — I look at the cervix under a scope and take a small biopsy from any areas that look abnormal.",
            intent: "colposcopy explanation",
          },
          {
            en: "The biopsy is the part that tells us exactly what grade the abnormality is — and that determines whether we need to treat or just watch closely.",
            intent: "biopsy rationale",
          },
          {
            en: "High-grade changes, especially CIN 2 or CIN 3, we typically treat with a LEEP procedure — a quick in-office procedure that removes the abnormal tissue.",
            intent: "LEEP counseling",
          },
          {
            en: "I know this is frightening. The fact that we caught this on screening is exactly how this is supposed to work — we're well ahead of anything serious.",
            intent: "reassurance",
          },
          {
            en: "Can you come in in the next week or two? This isn't an emergency but we don't want to wait months.",
            intent: "urgency without panic",
          },
        ],
        vocab: [
          "HSIL",
          "CIN 2",
          "CIN 3",
          "colposcopy",
          "LEEP (loop electrosurgical excision procedure)",
          "acetowhite epithelium",
          "biopsy",
          "endocervical curettage",
          "transformation zone",
          "cervical conization",
        ],
        challenges: [
          "A patient with CIN 2 on biopsy is 22 years old. Discuss the option of conservative management versus LEEP given her age and desire for future fertility.",
          "Explain the LEEP procedure to a patient, including what to expect during and after, and its implications for future pregnancies.",
          "A patient with CIN 3 has been followed for two years without treatment. Counsel her about why treatment is now recommended.",
        ],
        sampleConversation: [
          {
            speaker: "learner",
            en: "Thank you for calling back. I have your Pap results and I want to go over them with you. Your result showed high-grade changes — I know that can sound scary, so let me walk you through what that means.",
          },
          {
            speaker: "ai",
            en: "High-grade — is that cancer? I've been panicking since I saw the portal notification.",
          },
          {
            speaker: "learner",
            en: "I completely understand — I want to be very clear: this is not a cancer diagnosis. High-grade changes mean there are cells on your cervix that look atypical. They have the potential to develop into cancer over years if untreated, but we are nowhere near that, and we found this exactly when screening is supposed to find it.",
          },
          { speaker: "ai", en: "Okay. Okay. So what happens now?" },
          {
            speaker: "learner",
            en: "We bring you in for something called a colposcopy. It's basically a Pap smear with a magnifying scope — I look at the cervix very closely and take a small tissue sample from any areas that look abnormal. The biopsy tells us exactly what we're dealing with.",
          },
          { speaker: "ai", en: "Does the biopsy hurt?" },
        ],
      },
      {
        id: "contraception-counseling",
        name: "Contraception Counseling",
        emoji: "💊",
        blurb:
          "Helping patients choose a contraceptive method — reviewing options, side effects, efficacy, and patient preferences.",
        counterpart:
          "24-year-old patient who wants to go off the pill and is asking about other options",
        learnerRole: "OB-GYN or GYN NP providing contraception counseling",
        toneNote:
          "Non-directive and non-judgmental. Present options in a balanced way. Let the patient's priorities (efficacy vs. side effects vs. convenience vs. reversibility) guide the conversation.",
        phrases: [
          {
            en: "There's no perfect method — it really depends on what matters most to you. What are your priorities — reliability, no hormones, convenience?",
            intent: "values-based counseling",
          },
          {
            en: "The IUD is one of the most effective methods available — more than 99 percent. And it's reversible the same day you take it out.",
            intent: "IUD efficacy counseling",
          },
          {
            en: "The hormonal IUD has almost no systemic absorption — the hormone acts locally in the uterus, so the side effects people worry about from the pill are much less of an issue.",
            intent: "hormonal IUD explanation",
          },
          {
            en: "If you want nothing hormonal at all, the copper IUD is also extremely effective and can stay in for up to ten years.",
            intent: "copper IUD option",
          },
          {
            en: "The implant goes in your arm — quick office procedure, lasts three years, you don't have to think about it at all.",
            intent: "implant counseling",
          },
          {
            en: "Condoms are the only method that also protects against STIs — they can be used alone or alongside another method.",
            intent: "STI protection discussion",
          },
          {
            en: "Some people do really well on the pill for years and others have side effects — if hormones have bothered you before, that's important information.",
            intent: "prior experience acknowledgment",
          },
        ],
        vocab: [
          "LARC (long-acting reversible contraception)",
          "levonorgestrel IUD",
          "copper IUD (Paragard)",
          "subdermal implant (Nexplanon)",
          "combined oral contraceptive",
          "progestin-only pill",
          "contraceptive efficacy",
          "perfect use vs. typical use",
          "emergency contraception",
          "sterilization",
        ],
        challenges: [
          "A patient with a history of migraines with aura asks about the combined oral contraceptive pill. Counsel her on why estrogen-containing methods are contraindicated.",
          "A 19-year-old is interested in an IUD but is worried it will affect her future fertility. Address this concern accurately.",
          "A patient asks about emergency contraception after unprotected sex 36 hours ago. Walk through her options and timelines.",
        ],
        sampleConversation: [
          {
            speaker: "learner",
            en: "So you're thinking of switching off the pill. What's been the issue with it — side effects, convenience, or just wanting something different?",
          },
          {
            speaker: "ai",
            en: "Mostly mood stuff. I feel like I've been kind of flat emotionally and I wonder if the pill is doing that. I just want to feel like myself again.",
          },
          {
            speaker: "learner",
            en: "That's a really valid reason to consider a change. Some people do notice mood effects from combined oral contraceptives. Can I ask — are you interested in staying on some form of hormones, or were you thinking of going non-hormonal entirely?",
          },
          {
            speaker: "ai",
            en: "I'm open to either. I just want something reliable that isn't making me feel weird.",
          },
          {
            speaker: "learner",
            en: "So a couple of thoughts. The hormonal IUD releases progesterone very locally — very little gets into your system, which is why the mood effects are much less than the pill. It's also over 99 percent effective and you literally don't think about it. The copper IUD is completely hormone-free if you really want to avoid all hormones, and it's equally effective.",
          },
          {
            speaker: "ai",
            en: "I didn't realize the IUD could be non-hormonal. I thought they all had hormones.",
          },
        ],
      },
    ],
    vocabSets: [
      {
        category: "Obstetric Terms",
        emoji: "🤰",
        words: [
          "gravida",
          "para",
          "EDD",
          "gestational age",
          "fundal height",
          "fetal presentation",
          "amniotic fluid",
          "placenta",
          "umbilical cord",
          "Braxton Hicks",
        ],
      },
      {
        category: "Labor & Delivery",
        emoji: "🏥",
        words: [
          "effacement",
          "dilation",
          "station",
          "membranes rupture",
          "Pitocin",
          "epidural",
          "cesarean section",
          "APGAR score",
          "shoulder dystocia",
          "postpartum hemorrhage",
        ],
      },
      {
        category: "Gynecologic Conditions",
        emoji: "🔬",
        words: [
          "endometriosis",
          "PCOS",
          "uterine fibroids",
          "ovarian cyst",
          "ectopic pregnancy",
          "PID (pelvic inflammatory disease)",
          "vulvodynia",
          "menorrhagia",
          "dysmenorrhea",
          "amenorrhea",
        ],
      },
      {
        category: "Screening & Diagnostics",
        emoji: "📊",
        words: [
          "Pap smear",
          "HPV test",
          "transvaginal ultrasound",
          "NIPT",
          "amniocentesis",
          "glucose tolerance test",
          "Group B strep culture",
          "fetal non-stress test",
          "biophysical profile",
          "colposcopy",
        ],
      },
      {
        category: "Medications & Procedures",
        emoji: "💉",
        words: [
          "progesterone supplementation",
          "magnesium sulfate",
          "betamethasone",
          "oxytocin",
          "misoprostol",
          "LEEP",
          "D&C (dilation and curettage)",
          "cerclage",
          "amniotomy",
          "episiotomy",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // PAIN MANAGEMENT
  // ─────────────────────────────────────────────
  {
    moduleId: "pain-management",
    areas: [
      {
        id: "new-patient-consult",
        name: "New Patient Consult",
        emoji: "📋",
        blurb:
          "The initial pain management evaluation — comprehensive pain history, prior treatments, functional impact, and goal-setting.",
        counterpart:
          "50-year-old patient referred for chronic low back pain with radiculopathy, failed PT and NSAIDs",
        learnerRole: "Pain management physician or CRNA conducting the initial consult",
        toneNote:
          "Thorough, empathetic, and non-judgmental about opioid history. Use a functional framing — not just pain scores but how pain affects daily life. Set realistic expectations from the start.",
        phrases: [
          {
            en: "Tell me about your pain in your own words — where it is, what it feels like, and how long it's been going on.",
            intent: "pain history",
          },
          {
            en: "On a scale of zero to ten, what is your average pain level over the last week — not the worst day, but the average?",
            intent: "pain severity baseline",
          },
          {
            en: "Walk me through what a typical day looks like — what can you do, what do you avoid because of the pain?",
            intent: "functional impact assessment",
          },
          {
            en: "What have you already tried? I want to make sure we're not repeating things that didn't work and we're not missing something that might.",
            intent: "prior treatment history",
          },
          {
            en: "Tell me about your sleep — pain and sleep are closely connected, and poor sleep can actually amplify pain perception.",
            intent: "sleep-pain connection",
          },
          {
            en: "I want to be upfront with you — the goal of pain management isn't always to eliminate pain completely. Realistically, we're aiming for meaningful reduction and improved function.",
            intent: "realistic goal-setting",
          },
          {
            en: "Do you have any history of substance use — alcohol, other medications, anything like that? I ask everyone, and it helps me choose the safest treatments.",
            intent: "substance use history",
          },
          {
            en: "Based on your MRI and your exam, you have significant foraminal narrowing at L4-5 — I think you're a good candidate for a targeted epidural steroid injection.",
            intent: "treatment recommendation",
          },
        ],
        vocab: [
          "radiculopathy",
          "neuropathic pain",
          "foraminal stenosis",
          "epidural steroid injection",
          "NRS (numeric rating scale)",
          "functional limitation",
          "multimodal analgesia",
          "central sensitization",
          "opioid risk stratification",
          "PDMP (prescription drug monitoring program)",
        ],
        challenges: [
          "A new patient presents with fibromyalgia and requests opioids. Navigate this request using a multimodal, non-opioid framework.",
          "A patient rates their pain a 10/10 at rest with a normal physical exam and unremarkable imaging. Explore this discordance respectfully.",
          "Discuss the concept of central sensitization with a patient who is frustrated that their pain doesn't seem to match their MRI findings.",
        ],
        sampleConversation: [
          {
            speaker: "learner",
            en: "Before we look at any options, I really want to understand what your day looks like. What can you do without pain, and what have you had to give up?",
          },
          {
            speaker: "ai",
            en: "I can't sit for more than twenty minutes. I had to stop coaching my son's soccer team. I can't drive long distances. It's basically taken over my life.",
          },
          {
            speaker: "learner",
            en: "That's a significant impact — and those are exactly the kinds of goals we should be working toward. Sitting through a meeting, coaching again, driving. That's more useful to me than a number on a pain scale.",
          },
          {
            speaker: "ai",
            en: "My last doctor just kept giving me more pills. I don't want that — I want to actually get better.",
          },
          {
            speaker: "learner",
            en: "I hear you, and I agree with that approach. Let's talk about what we have available — there are interventional options like targeted injections, there are physical medicine approaches, and we can discuss whether any medications might help as part of a bigger plan rather than a standalone solution.",
          },
          {
            speaker: "ai",
            en: "What's the injection thing? My neighbor had one and said it helped.",
          },
        ],
      },
      {
        id: "procedure-prep",
        name: "Procedure Prep (Epidural / Injection)",
        emoji: "💉",
        blurb:
          "Preparing a patient for a pain procedure — informed consent, positioning, explaining the steps, and managing procedure anxiety.",
        counterpart:
          "Patient presenting for a lumbar epidural steroid injection, first time having the procedure",
        learnerRole: "Pain management physician performing the procedure",
        toneNote:
          "Calm and reassuring. Walk the patient through each step before it happens. Normalize anxiety. Be specific about sensations — 'you'll feel pressure, not sharp pain' is more helpful than 'it won't hurt.'",
        phrases: [
          {
            en: "Before we start, let me walk you through exactly what's going to happen so there are no surprises.",
            intent: "pre-procedure orientation",
          },
          {
            en: "I'm going to use a little bit of numbing medicine first — you'll feel a stick and a burn for about five seconds, then it should just be pressure.",
            intent: "local anesthetic warning",
          },
          {
            en: "If at any point you feel sharp shooting pain down your leg, tell me immediately — that's different from the pressure sensation I'm expecting, and I want to know.",
            intent: "procedural safety instruction",
          },
          {
            en: "I'm going to use fluoroscopy — that's a live X-ray — to guide the needle to exactly the right spot.",
            intent: "fluoroscopy explanation",
          },
          {
            en: "You might feel some pressure in your back and some fullness as I inject the medication — that's normal.",
            intent: "injection sensation preparation",
          },
          {
            en: "After the procedure, you'll rest for about 15-20 minutes and we'll check your blood pressure and make sure your legs feel normal before you leave.",
            intent: "recovery instructions",
          },
          {
            en: "Some people feel worse for a day or two before they improve — the steroid takes a few days to kick in, so don't judge it by how you feel tomorrow.",
            intent: "post-procedure expectations",
          },
          {
            en: "Do you have a driver today? You shouldn't drive yourself home after sedation.",
            intent: "pre-procedure safety check",
          },
        ],
        vocab: [
          "epidural space",
          "fluoroscopy",
          "contrast dye",
          "triamcinolone",
          "dexamethasone",
          "conscious sedation",
          "informed consent",
          "facet joint",
          "medial branch block",
          "radiofrequency ablation",
        ],
        challenges: [
          "A patient is extremely anxious about the needle and asks if they can be 'put completely out.' Explain the options for sedation and why light sedation is standard.",
          "During a transforaminal ESI, the patient reports sharp shooting pain down the leg. Walk through your immediate response.",
          "A patient with a contrast allergy presents for an injection requiring fluoroscopy. Discuss your pre-medication protocol and risk-benefit conversation.",
        ],
        sampleConversation: [
          {
            speaker: "learner",
            en: "Okay, you're positioned well. I'm going to start with the numbing medicine — you'll feel a little pinch and then a burn that lasts about five seconds. Ready?",
          },
          { speaker: "ai", en: "Okay. I'm really nervous. How big is the needle?" },
          {
            speaker: "learner",
            en: "The first needle is very small — like an IV needle. The main needle is larger, but by then the area will be numb. I'll tell you every step before I do it, and if anything feels wrong, you tell me.",
          },
          { speaker: "ai", en: "What does 'wrong' feel like? How will I know?" },
          {
            speaker: "learner",
            en: "Good question. Pressure and fullness are normal — expected, even. If you get a sharp shooting pain down your leg, or any numbness in a new place, that's what I want to know about immediately. Aching in your back is fine.",
          },
          { speaker: "ai", en: "Okay, I can do this. Just keep talking to me." },
        ],
      },
      {
        id: "medication-management",
        name: "Medication Management",
        emoji: "💊",
        blurb:
          "Reviewing and adjusting pain medications — discussing opioids, adjuvants, and non-opioid options in a chronic pain context.",
        counterpart: "Established patient on chronic opioid therapy requesting a dose increase",
        learnerRole: "Pain management physician conducting a medication review visit",
        toneNote:
          "Firm but empathetic. Distinguish between tolerance, dependence, and addiction clearly if needed. Be transparent about your clinical reasoning. Never dismiss pain but maintain appropriate boundaries.",
        phrases: [
          {
            en: "Before we talk about the dose, let's look at how the current regimen is actually working — is your function better, worse, or the same since we started?",
            intent: "functional outcome assessment",
          },
          {
            en: "I hear you that the pain is worse — can you help me understand if something has changed, like a new injury, increased activity, or more stress?",
            intent: "pain escalation exploration",
          },
          {
            en: "I want to be honest with you — increasing the opioid dose isn't always the answer, and at some point the risks outweigh the benefits.",
            intent: "dose escalation transparency",
          },
          {
            en: "Have you checked your PDMP recently? I need to do that for every controlled substance visit — it's a requirement for all my patients, not anything personal.",
            intent: "PDMP check normalization",
          },
          {
            en: "Let's talk about adding a low-dose tricyclic or a membrane stabilizer like gabapentin — for neuropathic pain, those often work better than higher opioids.",
            intent: "adjuvant medication suggestion",
          },
          {
            en: "I want to make sure we're giving you what you need to function, but I also want to make sure we're not causing harm in the process.",
            intent: "goals of care framing",
          },
          {
            en: "Your urine drug screen came back this visit — everything looks as expected, which is reassuring.",
            intent: "UDS review",
          },
        ],
        vocab: [
          "opioid tolerance",
          "opioid-induced hyperalgesia",
          "morphine milligram equivalents (MME)",
          "gabapentin",
          "duloxetine",
          "tricyclic antidepressant",
          "PDMP",
          "urine drug screen",
          "pill count",
          "medication agreement",
        ],
        challenges: [
          "A patient on long-term opioids reports their prescription was stolen. Walk through your response and documentation.",
          "A patient's MME is approaching 90 and their function hasn't improved. Discuss tapering and alternative strategies.",
          "A urine drug screen comes back positive for benzodiazepines in a patient not prescribed them. Navigate this conversation.",
        ],
        sampleConversation: [
          {
            speaker: "learner",
            en: "So you mentioned the pain is worse this month. Before we think about any changes, I want to understand the bigger picture. Are you doing more, less? Any changes in your life?",
          },
          {
            speaker: "ai",
            en: "My mom passed away last month and I think the stress has made everything worse. I just need a little more to get through.",
          },
          {
            speaker: "learner",
            en: "I'm so sorry for your loss. Grief absolutely affects pain — it's a physical as much as an emotional stress. That context really matters.",
          },
          { speaker: "ai", en: "So can you adjust my dose?" },
          {
            speaker: "learner",
            en: "Here's my concern — I don't want to respond to grief-related pain escalation with a higher opioid dose, because that doesn't actually treat what's going on. What I think would help more is adding something like duloxetine, which treats both pain and depression, and if you're open to it, talking to someone about the grief. Short-term dose increase doesn't address the root of what's happening.",
          },
          {
            speaker: "ai",
            en: "I wasn't expecting that answer, but I hear you. What's duloxetine?",
          },
        ],
      },
      {
        id: "controlled-substance-agreement",
        name: "Controlled Substance Agreement",
        emoji: "📝",
        blurb:
          "Reviewing and establishing a controlled substance agreement — setting expectations, explaining monitoring, and handling patient questions.",
        counterpart: "New patient being onboarded to long-term opioid therapy",
        learnerRole: "Pain management physician or NP reviewing the controlled substance agreement",
        toneNote:
          "Straightforward and respectful — not punitive. Frame the agreement as a tool that protects both the patient and the provider. Explain the reasoning behind each requirement.",
        phrases: [
          {
            en: "Before we can prescribe any controlled medications, I go through this agreement with every patient — it sets out what we expect from each other.",
            intent: "agreement introduction",
          },
          {
            en: "We use one pharmacy, one prescriber — that's me — for all controlled substances. It's a safety measure, not a sign of distrust.",
            intent: "single pharmacy/prescriber rule",
          },
          {
            en: "We do random urine drug screens — not every visit, but without notice. This protects you as much as it protects me.",
            intent: "UDS requirement explanation",
          },
          {
            en: "We may ask you to bring your medications in for a pill count. Again, this is standard for all patients on this class of medication.",
            intent: "pill count policy",
          },
          {
            en: "If a prescription is lost or stolen, we cannot replace it. I know that seems harsh, but it's a requirement we apply consistently.",
            intent: "lost prescription policy",
          },
          {
            en: "Early refills are not something we can do — the pharmacy won't fill them, and it creates legal and regulatory issues for our practice.",
            intent: "early refill policy",
          },
          {
            en: "Do you have any questions about anything in here before you sign? I want you to actually understand this, not just sign it.",
            intent: "informed signing",
          },
        ],
        vocab: [
          "controlled substance agreement",
          "DEA schedule",
          "urine drug screen",
          "pill count",
          "PDMP",
          "aberrant behavior",
          "opioid stewardship",
          "morphine milligram equivalents",
          "diversion",
          "naloxone co-prescription",
        ],
        challenges: [
          "A patient refuses to sign the controlled substance agreement. Walk through how you respond and what options remain.",
          "A patient asks why they need to carry naloxone if they take their medications exactly as prescribed. Explain the rationale.",
          "A patient on the agreement fails a pill count — they have 12 fewer pills than expected. Walk through your approach.",
        ],
        sampleConversation: [
          {
            speaker: "learner",
            en: "Let me go through this with you before you sign. The agreement has a few key points — one prescriber, one pharmacy, random drug screens, and no early refills. Any of that raise questions?",
          },
          {
            speaker: "ai",
            en: "The random drug screen part makes me a little uncomfortable. Like I'm being treated like a criminal.",
          },
          {
            speaker: "learner",
            en: "That's a fair reaction, and I want to address it directly. The drug screen does two things: it shows that the medication is actually in your system — which protects you — and it makes sure nothing unexpected is there. I do this with every single patient on controlled medications, regardless of history.",
          },
          { speaker: "ai", en: "What happens if I fail?" },
          {
            speaker: "learner",
            en: "It depends on what we find and what the context is. An unexpected substance leads to a conversation, not immediate dismissal. We look at the whole picture. What I can't ignore is a pattern of concerning behavior over time.",
          },
          { speaker: "ai", en: "Okay. And what about the naloxone? My wife asked about that." },
        ],
      },
      {
        id: "followup-visit",
        name: "Follow-up Visit",
        emoji: "🔄",
        blurb:
          "The routine pain management follow-up — assessing treatment response, adjusting the plan, and maintaining the therapeutic relationship.",
        counterpart:
          "Patient three months post-epidural, on gabapentin, reporting partial improvement",
        learnerRole: "Pain management physician conducting a 3-month follow-up",
        toneNote:
          "Efficient but attentive. Track trends, not just today's snapshot. Celebrate improvements in function, not just pain scores. Adjust the plan based on the patient's reported experience.",
        phrases: [
          {
            en: "Since your last visit, how has the pain been trending — better, worse, or about the same?",
            intent: "pain trend assessment",
          },
          {
            en: "You said the injection helped about 40 percent for about six weeks. That's actually useful information — it tells us the target is right.",
            intent: "procedure response interpretation",
          },
          {
            en: "How's the gabapentin — are you tolerating it okay, or noticing any side effects like drowsiness or word-finding problems?",
            intent: "medication side effect review",
          },
          {
            en: "What are you able to do now that you weren't three months ago? Even small things count.",
            intent: "functional improvement inventory",
          },
          {
            en: "I'd like to try a repeat injection given the good response to the first one. We typically allow eight to twelve weeks between procedures.",
            intent: "repeat procedure recommendation",
          },
          {
            en: "Let's titrate the gabapentin up — we're probably not at the therapeutic dose yet, and there's more room to go.",
            intent: "medication titration",
          },
          {
            en: "Where do you want to be in six months? Let's make sure we're working toward what actually matters to you.",
            intent: "goal reassessment",
          },
        ],
        vocab: [
          "treatment response",
          "procedure interval",
          "dose titration",
          "side effect profile",
          "functional restoration",
          "pain diary",
          "adjuvant analgesic",
          "therapeutic dose",
          "repeat injection",
          "plateau effect",
        ],
        challenges: [
          "A patient reports the ESI 'wore off completely' after three weeks. Discuss whether to repeat, modify, or escalate to a different procedure.",
          "A patient on gabapentin reports significant drowsiness but good pain relief. Discuss dose timing modifications.",
          "A patient reports no improvement after two injections and asks what else can be done. Walk through the next steps in the interventional ladder.",
        ],
        sampleConversation: [
          {
            speaker: "learner",
            en: "Three months out from the injection — tell me how you're doing. What's changed?",
          },
          {
            speaker: "ai",
            en: "Honestly, it helped a lot for about six weeks and then started to creep back. But I was able to go back to work, which I haven't done in eight months.",
          },
          {
            speaker: "learner",
            en: "Going back to work after eight months off — that's a really meaningful outcome. The fact that it helped and then started to come back tells me the target was right, the effect just wasn't sustained. That actually tells me something useful.",
          },
          { speaker: "ai", en: "Does that mean I have to do the injection again?" },
          {
            speaker: "learner",
            en: "It might mean we do a repeat injection, or it might mean we look at whether a slightly different approach — like a medial branch block — could give more lasting results. Let me also look at the gabapentin dose — we may not be at the optimal level yet.",
          },
          { speaker: "ai", en: "The gabapentin makes me a little foggy in the morning." },
        ],
      },
      {
        id: "multidisciplinary-planning",
        name: "Multidisciplinary Pain Planning",
        emoji: "🤝",
        blurb:
          "Coordinating care with physical therapy, psychology, and other specialists — presenting a patient in a multidisciplinary pain conference.",
        counterpart:
          "Colleague in a multidisciplinary pain team meeting (PT, psychologist, pharmacist)",
        learnerRole: "Pain management physician presenting a complex patient at a team conference",
        toneNote:
          "Collegial and collaborative. Structured presentation using clinical language. Be open to perspectives from other disciplines. Frame the patient's goals as the anchor for the discussion.",
        phrases: [
          {
            en: "I want to present a 47-year-old with chronic CLBP who has had a partial response to interventional therapy but significant psychosocial overlay.",
            intent: "patient case introduction",
          },
          {
            en: "The patient's PHQ-9 is 16 and she's using catastrophizing language — I think there's a significant psychological component we haven't addressed.",
            intent: "psychology consultation flag",
          },
          {
            en: "Physical therapy has plateaued her — she's compliant but not progressing. Can we think about whether an intensive outpatient pain rehab program makes sense?",
            intent: "PT referral discussion",
          },
          {
            en: "From a pharmacist standpoint, I want to make sure there are no interactions I'm missing before I add duloxetine to her current regimen.",
            intent: "medication safety check",
          },
          {
            en: "The goal we've identified with the patient is returning to part-time work — I want our plan to be oriented toward that functional goal.",
            intent: "goal-directed care",
          },
          {
            en: "I don't think more procedures are the answer right now — I want to make sure we're not just chasing a pain number without addressing the whole person.",
            intent: "procedure moratorium rationale",
          },
        ],
        vocab: [
          "chronic low back pain (CLBP)",
          "psychosocial overlay",
          "pain catastrophizing",
          "fear-avoidance model",
          "interdisciplinary pain program",
          "functional restoration program",
          "acceptance and commitment therapy",
          "biopsychosocial model",
          "opioid tapering",
          "chronic pain syndrome",
        ],
        challenges: [
          "A patient in the pain program is refusing to engage with the psychologist. Discuss how you would address this as the team physician.",
          "Present a patient for opioid tapering — frame it to the team as a positive therapeutic intervention, not a punishment.",
          "A patient has been non-compliant with PT. Before discharging them from the practice, walk through what the team should consider.",
        ],
        sampleConversation: [
          {
            speaker: "learner",
            en: "I want to bring Mrs. Hernandez to the team today. She's 47, chronic low back with radiculopathy, two ESIs with partial and diminishing response, on 45 MME of oxycodone. Functionally she's at about 40 percent of baseline. PHQ-9 is 16.",
          },
          {
            speaker: "ai",
            en: "Has she been seen in psych yet? A PHQ-9 of 16 with that much pain catastrophizing is a significant barrier to any physical rehabilitation.",
          },
          {
            speaker: "learner",
            en: "She hasn't — she's resistant to it. She frames her problem as purely physical and sees the psychology referral as implying the pain isn't real.",
          },
          {
            speaker: "ai",
            en: "That's really common. I'd suggest framing it as pain neuroscience education rather than 'psychology' — patients often respond much better when you position it as learning how the nervous system works rather than therapy.",
          },
          { speaker: "learner", en: "That's a good reframe. PT team — where are you with her?" },
          {
            speaker: "ai",
            en: "She's compliant and doing the exercises, but she's plateaued. I think she's at the ceiling of what standard outpatient PT can do. The functional restoration program would be more appropriate at this point.",
          },
        ],
      },
    ],
    vocabSets: [
      {
        category: "Pain Descriptors",
        emoji: "📊",
        words: [
          "nociceptive pain",
          "neuropathic pain",
          "somatic pain",
          "visceral pain",
          "allodynia",
          "hyperalgesia",
          "burning",
          "lancinating",
          "aching",
          "radicular",
        ],
      },
      {
        category: "Interventional Procedures",
        emoji: "💉",
        words: [
          "epidural steroid injection",
          "medial branch block",
          "radiofrequency ablation",
          "facet injection",
          "trigger point injection",
          "spinal cord stimulator",
          "intrathecal pump",
          "sympathetic block",
          "nerve root block",
          "prolotherapy",
        ],
      },
      {
        category: "Medications",
        emoji: "💊",
        words: [
          "gabapentin",
          "pregabalin",
          "duloxetine",
          "tricyclic antidepressant",
          "tramadol",
          "buprenorphine",
          "naloxone",
          "NSAIDs",
          "muscle relaxants",
          "topical lidocaine",
        ],
      },
      {
        category: "Assessment Tools",
        emoji: "📋",
        words: [
          "NRS (numeric rating scale)",
          "VAS (visual analog scale)",
          "FLACC scale",
          "Oswestry Disability Index",
          "PEG scale",
          "ORT (opioid risk tool)",
          "DIRE score",
          "CAGE-AID",
          "PHQ-9",
          "pain diary",
        ],
      },
      {
        category: "Anatomy & Imaging",
        emoji: "🩻",
        words: [
          "herniated nucleus pulposus",
          "foraminal stenosis",
          "facet arthropathy",
          "spondylolisthesis",
          "sacroiliac joint",
          "discogenic pain",
          "epidural space",
          "dorsal horn",
          "spinal cord",
          "nerve root",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // CARDIOLOGY
  // ─────────────────────────────────────────────
  {
    moduleId: "cardiology",
    areas: [
      {
        id: "new-patient-consult-cardiology",
        name: "New Patient Consult",
        emoji: "❤️",
        blurb:
          "The initial cardiology evaluation — history of cardiac symptoms, risk factor review, family history, and exam findings.",
        counterpart:
          "58-year-old male referred by PCP for exertional chest tightness and shortness of breath",
        learnerRole: "Cardiologist conducting an initial outpatient consultation",
        toneNote:
          "Thorough and systematic. Take the symptom history in detail — the pattern of angina matters. Be honest about risk without catastrophizing. Map out a clear diagnostic plan.",
        phrases: [
          {
            en: "Tell me about the chest tightness — where do you feel it, does it radiate anywhere, and what brings it on?",
            intent: "angina characterization",
          },
          {
            en: "When you say it comes on with exertion — what level of exertion? Climbing stairs, walking flat, or more strenuous activity?",
            intent: "functional class assessment",
          },
          {
            en: "Does it go away when you rest? And how long does it take to resolve?",
            intent: "rest relief pattern",
          },
          {
            en: "Any history of MI, stents, bypass surgery, or heart failure in the past?",
            intent: "cardiac history",
          },
          {
            en: "Let's go through your risk factors — do you have high blood pressure, diabetes, high cholesterol, do you smoke?",
            intent: "ASCVD risk factors",
          },
          {
            en: "Any family history of heart attacks at a young age — under 55 in a father or brother, under 65 in a mother or sister?",
            intent: "premature CAD family history",
          },
          {
            en: "I want to get a stress test — given your symptoms and your risk profile, I need to understand whether the heart is getting adequate blood flow with exercise.",
            intent: "stress test rationale",
          },
          {
            en: "Your EKG shows some nonspecific ST changes — nothing alarming, but it supports getting more information.",
            intent: "EKG finding communication",
          },
        ],
        vocab: [
          "stable angina",
          "unstable angina",
          "NSTEMI",
          "ACS (acute coronary syndrome)",
          "ASCVD risk",
          "coronary artery disease",
          "functional capacity (METs)",
          "left ventricular ejection fraction",
          "cardiac catheterization",
          "stress echocardiogram",
        ],
        challenges: [
          "A patient describes classic angina but insists it's just acid reflux. Pursue the cardiac history while respecting their perspective.",
          "Explain the difference between a treadmill EKG stress test, stress echo, and nuclear stress test and why you're recommending one over another.",
          "A 62-year-old asymptomatic woman asks if she needs cardiac screening given her strong family history. Discuss risk assessment and testing.",
        ],
        sampleConversation: [
          {
            speaker: "learner",
            en: "Tell me more about this chest tightness. Is it more the center of the chest, the left side, and does it go anywhere — arm, jaw, shoulder?",
          },
          {
            speaker: "ai",
            en: "It's right in the middle, kind of like a pressure. Sometimes it goes to my left arm. It started a few months ago when I was shoveling snow.",
          },
          {
            speaker: "learner",
            en: "Okay — shoveling snow is a high-intensity cold-weather activity, which is a classic trigger for angina. Does it happen with other exertion, like climbing a flight of stairs?",
          },
          {
            speaker: "ai",
            en: "Yeah, actually. Going up to my second floor, if I go fast. It goes away when I sit down.",
          },
          {
            speaker: "learner",
            en: "That history is very typical of what we call stable angina — the heart asking for more blood flow than it's getting during exertion. The fact that it reliably goes away with rest is actually a somewhat reassuring pattern compared to pain at rest. But we need to understand the severity.",
          },
          { speaker: "ai", en: "Does that mean it's definitely a blockage?" },
        ],
      },
      {
        id: "ekg-review",
        name: "EKG Review",
        emoji: "📈",
        blurb:
          "Interpreting and communicating EKG findings — from normal variants to emergent patterns, with colleagues and with patients.",
        counterpart: "Senior cardiology fellow presenting an EKG to the attending for review",
        learnerRole: "Attending cardiologist reviewing an EKG with a trainee",
        toneNote:
          "Teaching-oriented but efficient. Walk through interpretation systematically. Connect findings to clinical context. Be clear about what is actionable versus what is informational.",
        phrases: [
          {
            en: "Walk me through it systematically — rate, rhythm, axis, intervals, then look at the morphology.",
            intent: "systematic EKG interpretation instruction",
          },
          {
            en: "The rate is 94, regular, sinus rhythm. PR interval looks about 220 milliseconds — that's a first-degree AV block.",
            intent: "interval measurement finding",
          },
          {
            en: "Look at V1 through V4 — do you see the ST elevation? That's a STEMI until proven otherwise, and we need to activate the cath lab now.",
            intent: "STEMI identification and activation",
          },
          {
            en: "The T waves in the inferior leads are flat, maybe slightly inverted — in this clinical context I want a troponin.",
            intent: "subtle ischemic changes",
          },
          {
            en: "This is a left bundle branch block — new or old? That's the key question. If it's new and the patient has chest pain, that's a STEMI equivalent.",
            intent: "LBBB significance",
          },
          {
            en: "Classic WPW pattern here — delta waves and short PR. Have they ever been worked up for this?",
            intent: "pre-excitation pattern",
          },
          {
            en: "The QTc is prolonged at 520 milliseconds — I want to look at their medication list before we do anything else.",
            intent: "QT prolongation workup",
          },
        ],
        vocab: [
          "PR interval",
          "QRS complex",
          "QTc interval",
          "ST elevation",
          "T wave inversion",
          "left bundle branch block",
          "Wolff-Parkinson-White",
          "sinus bradycardia",
          "first-degree AV block",
          "delta wave",
        ],
        challenges: [
          "An EKG shows ST elevations in the inferior leads. Identify the affected artery, the high-yield reciprocal changes, and activate the cath lab.",
          "Differentiate early repolarization from STEMI on an EKG strip described to you by a colleague over the phone.",
          "An EKG shows a wide complex tachycardia at 160 bpm. Walk through your VT versus SVT with aberrancy differential.",
        ],
        sampleConversation: [
          {
            speaker: "ai",
            en: "I've got an EKG on a 67-year-old who came in with chest pain and diaphoresis. Rate's about 88, regular. But I'm not sure about V2 through V4.",
          },
          {
            speaker: "learner",
            en: "Show me. Okay — I see what you're concerned about. There's ST elevation in V2, V3, V4 — the morphology looks like a tombstone in V3. This is an anterior STEMI. Activate the cath lab now while we're talking.",
          },
          { speaker: "ai", en: "Should I get another set of leads first or get a repeat EKG?" },
          {
            speaker: "learner",
            en: "Don't delay activation for a repeat EKG — if this is STEMI, every minute of delay is myocardium. Call it, get aspirin and heparin on board, and if the cath lab disputes the read when they see the patient, we can cancel. You can't uncath a dead patient.",
          },
          { speaker: "ai", en: "Understood. What do I tell the family?" },
          {
            speaker: "learner",
            en: "Tell them there's a blockage in a major artery of the heart that we need to open as quickly as possible. He's going directly to the catheterization lab and the interventional cardiologist will speak with them there.",
          },
        ],
      },
      {
        id: "cath-lab",
        name: "Cath Lab",
        emoji: "🏗️",
        blurb:
          "The cardiac catheterization laboratory — communicating with the patient before the procedure, with the team during, and reviewing findings after.",
        counterpart: "Patient on the table for a diagnostic coronary angiogram, awake and anxious",
        learnerRole: "Interventional cardiologist performing a coronary angiogram",
        toneNote:
          "Confident and measured. Keep the patient informed step by step. Use 'you'll feel' language — warm flush from contrast, pressure from the sheath. Communicate findings clearly post-procedure.",
        phrases: [
          {
            en: "You're going to feel a warm flush go through your body when I inject the dye — some people describe it as feeling like they wet themselves. That's completely normal.",
            intent: "contrast sensation preparation",
          },
          {
            en: "I can see all three major arteries — I'm looking at them right now on the screen. Give me a moment.",
            intent: "procedural narration",
          },
          {
            en: "There's a significant blockage in the LAD — about 85 percent. That's the one we call the widow-maker, and this is why you've been having symptoms.",
            intent: "finding communication to patient",
          },
          {
            en: "I want to go ahead and put a stent in today while I'm here — it's the right thing to do and it avoids a second procedure.",
            intent: "ad hoc PCI recommendation",
          },
          {
            en: "Hold completely still right now — I'm placing the wire across the lesion.",
            intent: "critical moment instruction",
          },
          {
            en: "The stent is deployed and the artery is wide open — I can see good flow. That went exactly as planned.",
            intent: "procedure success communication",
          },
          {
            en: "After the procedure, you'll need to be on two blood thinners for at least a year — stopping them early is the most dangerous thing you can do. I want to make sure you understand that.",
            intent: "dual antiplatelet therapy counseling",
          },
        ],
        vocab: [
          "coronary angiogram",
          "left anterior descending (LAD)",
          "right coronary artery (RCA)",
          "circumflex",
          "percent stenosis",
          "TIMI flow",
          "drug-eluting stent",
          "percutaneous coronary intervention (PCI)",
          "dual antiplatelet therapy (DAPT)",
          "radial access",
        ],
        challenges: [
          "You find three-vessel disease on an angiogram. Discuss your decision to refer for CABG rather than proceeding with stenting.",
          "During a PCI, you get a no-reflow phenomenon after stent deployment. Describe your management to the cath lab team.",
          "After an angiogram shows non-obstructive CAD, counsel the patient whose symptoms led everyone to expect a significant blockage.",
        ],
        sampleConversation: [
          {
            speaker: "learner",
            en: "Okay, we're all set. I want to warn you — when I inject the dye, you'll feel a warm flush through your whole body for about 15 seconds. Some people feel it in a slightly embarrassing way. It goes away fast. Ready?",
          },
          { speaker: "ai", en: "Okay. I'm scared. Is it going to hurt?" },
          {
            speaker: "learner",
            en: "The most you should feel is pressure at the wrist where the catheter goes in — the numbing medicine takes care of most of that. Inside the arteries, there are no pain receptors, so you shouldn't feel the catheter at all. Just let me know if anything changes.",
          },
          { speaker: "ai", en: "Okay, I trust you. Just tell me what you're seeing." },
          {
            speaker: "learner",
            en: "I'm looking at your right coronary artery — that looks clean, good flow. Now I'm moving to the left side. I see the LAD… there is a significant narrowing here. I'm going to measure this carefully.",
          },
          { speaker: "ai", en: "Is that the problem? Is that what's been causing the chest pain?" },
        ],
      },
      {
        id: "chf-management",
        name: "CHF Management",
        emoji: "💧",
        blurb:
          "Managing heart failure with reduced ejection fraction — titrating GDMT, monitoring for decompensation, and educating patients on fluid and weight management.",
        counterpart:
          "Patient with HFrEF (EF 30%) presenting for a CHF clinic follow-up with a 4-pound weight gain",
        learnerRole:
          "Cardiologist or advanced heart failure nurse practitioner in a dedicated CHF clinic",
        toneNote:
          "Proactive and data-driven. Use daily weights as the primary monitoring tool. Don't wait for decompensation — act on early signals. Acknowledge the lifestyle burden of CHF management.",
        phrases: [
          {
            en: "You've gained four pounds since last week — that's almost certainly fluid. Are you more short of breath or swollen in the legs?",
            intent: "decompensation assessment",
          },
          {
            en: "I want to bump your furosemide from 40 to 80 milligrams for the next three days and see if that brings the weight back down.",
            intent: "diuretic dose adjustment",
          },
          {
            en: "Are you keeping track of your sodium? Two grams a day is the target — most canned soups alone can blow the whole day's budget.",
            intent: "sodium restriction counseling",
          },
          {
            en: "Your BNP last visit was 840 — if we can get that under 500 consistently, it correlates with better outcomes.",
            intent: "BNP trend discussion",
          },
          {
            en: "We're going to work on getting you to the target dose of carvedilol — we can't rush it, but being at goal dose reduces mortality by about 35 percent.",
            intent: "beta-blocker titration",
          },
          {
            en: "Have you been using the scale every morning before breakfast? That's the single most important thing you can do to catch this before it becomes an ER visit.",
            intent: "daily weight monitoring",
          },
          {
            en: "At your ejection fraction, you should be on an SGLT2 inhibitor — there's now strong data showing it reduces hospitalizations independent of diabetes.",
            intent: "SGLT2 inhibitor recommendation",
          },
        ],
        vocab: [
          "HFrEF (heart failure with reduced EF)",
          "ejection fraction",
          "BNP / NT-proBNP",
          "furosemide",
          "carvedilol",
          "sacubitril-valsartan (Entresto)",
          "SGLT2 inhibitor",
          "pulmonary edema",
          "GDMT (guideline-directed medical therapy)",
          "cardiac resynchronization therapy",
        ],
        challenges: [
          "A CHF patient presents 10 pounds over their dry weight with orthopnea. Decide whether to manage this in clinic or admit them.",
          "A patient with HFrEF refuses to take their carvedilol because they read it causes fatigue. Address this concern while explaining the mortality benefit.",
          "Explain why a patient with HFrEF should be on four medication classes simultaneously and why the doses matter.",
        ],
        sampleConversation: [
          {
            speaker: "learner",
            en: "Four pounds up since Thursday — that's significant. Tell me what's been different this week. Any extra salt, missed doses, or feeling more short of breath at night?",
          },
          {
            speaker: "ai",
            en: "We went to a family barbecue and I didn't eat as carefully. And I've been needing an extra pillow to sleep.",
          },
          {
            speaker: "learner",
            en: "Needing to prop up more to breathe is an important symptom — that's called orthopnea and it tells me there's fluid backing up into your lungs. I don't want to ignore that.",
          },
          { speaker: "ai", en: "Do I need to go to the hospital?" },
          {
            speaker: "learner",
            en: "I don't think so today — your oxygen saturation is 95 and you can speak in full sentences. I want to increase your water pill for the next three days and have you call me Friday with your weight. If you gain more, or your breathing gets worse at rest, you go straight to the ED.",
          },
          { speaker: "ai", en: "Okay. I hate the water pill — I'm in the bathroom all day." },
        ],
      },
      {
        id: "arrhythmia-clinic",
        name: "Arrhythmia Clinic",
        emoji: "⚡",
        blurb:
          "Managing atrial fibrillation and other arrhythmias — stroke risk stratification, rate vs. rhythm control, and anticoagulation discussions.",
        counterpart:
          "67-year-old patient with newly diagnosed atrial fibrillation, here for initial management",
        learnerRole: "Cardiologist or electrophysiologist in an outpatient arrhythmia clinic",
        toneNote:
          "Clear and educational — patients often don't understand what Afib is. Use the 'quivering versus pumping' description. Be direct about stroke risk and the importance of anticoagulation.",
        phrases: [
          {
            en: "Atrial fibrillation means the top chambers of your heart are quivering instead of squeezing — it leads to turbulent blood flow and increases your risk of stroke.",
            intent: "Afib patient education",
          },
          {
            en: "Based on your risk factors, your CHA2DS2-VASc score is 4 — that's a high enough score that anticoagulation is strongly recommended.",
            intent: "stroke risk stratification",
          },
          {
            en: "I want to discuss a blood thinner called apixaban — it's more convenient than warfarin and has a better safety profile.",
            intent: "DOAC recommendation",
          },
          {
            en: "We need to decide whether to focus on controlling the heart rate, or whether to try to get you back into normal rhythm. Both are valid strategies.",
            intent: "rate vs. rhythm control discussion",
          },
          {
            en: "A cardioversion is a synchronized electrical shock under sedation that can reset the heart rhythm — it's a procedure, not surgery.",
            intent: "cardioversion explanation",
          },
          {
            en: "If you want a more permanent solution for rhythm control, there's a procedure called ablation — I'd refer you to our EP lab for that.",
            intent: "ablation referral",
          },
          {
            en: "The most important thing right now is the blood thinner — we can figure out the rhythm strategy over the next few weeks, but we cannot delay anticoagulation.",
            intent: "anticoagulation urgency",
          },
        ],
        vocab: [
          "atrial fibrillation",
          "CHA2DS2-VASc score",
          "HAS-BLED score",
          "DOAC (direct oral anticoagulant)",
          "apixaban",
          "rivaroxaban",
          "cardioversion",
          "rate control",
          "rhythm control",
          "pulmonary vein isolation (ablation)",
        ],
        challenges: [
          "A patient with Afib and a CHA2DS2-VASc score of 5 refuses anticoagulation because of fear of bleeding. Navigate this decision.",
          "Explain the difference between rate control and rhythm control strategies and why you might choose one over the other.",
          "A patient on warfarin for Afib has an INR of 5.2 and reports easy bruising. Manage this appropriately.",
        ],
        sampleConversation: [
          {
            speaker: "learner",
            en: "So let me explain what atrial fibrillation actually is, because most patients don't have a clear picture of it. The heart has four chambers. The bottom two do the pumping. The top two are supposed to squeeze to fill the bottom ones before they pump. In Afib, the top chambers quiver instead of squeezing in an organized way.",
          },
          { speaker: "ai", en: "So the heart's not pumping right?" },
          {
            speaker: "learner",
            en: "The bottom chambers — the ones that actually pump blood out to the body — are still working. The issue is two things: one, the heart rate becomes irregular and sometimes fast, which can cause symptoms. Two, the quivering creates a spot in the heart where blood can pool and clot, and that clot can travel to the brain and cause a stroke.",
          },
          { speaker: "ai", en: "A stroke — just from an irregular heartbeat?" },
          {
            speaker: "learner",
            en: "That's the part that surprises most people. Afib is responsible for about one in five strokes. That's why the blood thinner is so important — it prevents that clot from forming in the first place.",
          },
          {
            speaker: "ai",
            en: "Which blood thinner are you recommending? My neighbor takes something called warfarin and she has to get blood tests all the time.",
          },
        ],
      },
      {
        id: "post-mi-rehab",
        name: "Post-MI Follow-up & Cardiac Rehab",
        emoji: "🏃",
        blurb:
          "Follow-up after a myocardial infarction — reviewing the hospitalization, adjusting medications, and enrolling the patient in cardiac rehabilitation.",
        counterpart:
          "Patient two weeks out from a STEMI with LAD stenting, first outpatient follow-up",
        learnerRole: "Cardiologist conducting a post-MI outpatient follow-up",
        toneNote:
          "Encouraging and thorough. Cover medications carefully — the DAPT conversation is critical. Reassure about normal recovery fears. Introduce cardiac rehab as essential, not optional.",
        phrases: [
          {
            en: "You've been through a major event — how are you feeling, both physically and emotionally?",
            intent: "holistic post-MI check-in",
          },
          {
            en: "I want to go through your medications — the aspirin and ticagrelor are the two most important ones. Do not stop either of them without calling me first, even if someone tells you to stop for another procedure.",
            intent: "DAPT critical counseling",
          },
          {
            en: "Your echo from the hospital showed your ejection fraction is 40 percent — it was likely lower right after the heart attack. I want to repeat it in three months.",
            intent: "EF follow-up plan",
          },
          {
            en: "I'm enrolling you in cardiac rehab — it's a supervised exercise program shown to reduce your risk of another heart attack. It's not optional in my mind.",
            intent: "cardiac rehab enrollment",
          },
          {
            en: "Some people feel depressed or anxious after a heart attack — it's very common, and it's important to tell me if you're experiencing that.",
            intent: "post-MI depression screening",
          },
          {
            en: "You can return to light activity now, sexual activity in one to two weeks if you can climb two flights of stairs without symptoms.",
            intent: "activity return guidance",
          },
          {
            en: "The stent is like a tiny scaffold holding that artery open. Your job is to take those blood thinners so it doesn't clot off.",
            intent: "stent patient education",
          },
        ],
        vocab: [
          "myocardial infarction",
          "stent thrombosis",
          "dual antiplatelet therapy",
          "left ventricular ejection fraction",
          "cardiac rehabilitation",
          "beta-blocker",
          "ACE inhibitor",
          "high-intensity statin",
          "post-MI depression",
          "remodeling",
        ],
        challenges: [
          "A patient post-STEMI wants to stop aspirin because of a GI bleed history. Counsel him on managing both risks simultaneously.",
          "Two weeks post-MI, a patient asks when they can return to work as a manual laborer. Discuss the considerations specific to physical work.",
          "A patient is tearful and afraid to exercise, scared of triggering another heart attack. Address this fear using evidence-based reassurance.",
        ],
        sampleConversation: [
          {
            speaker: "learner",
            en: "Two weeks out — how have you been doing? Any chest pain, shortness of breath, palpitations?",
          },
          {
            speaker: "ai",
            en: "No pain. But I'm terrified to do anything. I've been just sitting on the couch. Every time I feel my heart beat I panic.",
          },
          {
            speaker: "learner",
            en: "That's incredibly common after a heart attack. The anxiety can be as debilitating as the physical recovery. First thing I want to say — you had a blockage that we opened, and the artery is now wide open. The stent is holding it there. You are not sitting on a time bomb.",
          },
          { speaker: "ai", en: "But it happened once, it could happen again." },
          {
            speaker: "learner",
            en: "That's true — and we're doing everything possible to prevent that. The medications you're on reduce your risk of another event significantly. And cardiac rehab — which I'm signing you up for today — is shown to reduce mortality after a heart attack by 20 to 25 percent.",
          },
          { speaker: "ai", en: "I thought exercise would be dangerous for me now." },
        ],
      },
      {
        id: "stress-test-results",
        name: "Stress Test Results",
        emoji: "🏋️",
        blurb:
          "Reviewing and communicating stress test results — normal, indeterminate, and clearly abnormal findings and next steps.",
        counterpart: "Patient returning to discuss the results of a nuclear stress test",
        learnerRole: "Cardiologist reviewing stress test results in an outpatient setting",
        toneNote:
          "Clear and structured. Don't bury the lead. If the test is reassuring, say so plainly. If it's abnormal, be direct about what it means and what comes next. Avoid false certainty about imaging limitations.",
        phrases: [
          {
            en: "Your stress test came back abnormal — I want to go over what that means and what I think we should do.",
            intent: "abnormal result opener",
          },
          {
            en: "The nuclear images showed a reversible perfusion defect in the inferior wall — that means there's an area of the heart that's not getting enough blood flow under stress, but recovers at rest.",
            intent: "perfusion defect explanation",
          },
          {
            en: "Based on this, I think the next step is a cardiac catheterization — a direct look at the coronary arteries.",
            intent: "cath recommendation",
          },
          {
            en: "Your stress test is reassuring — you exercised to a good workload, no symptoms, and the images look normal. This is very good news.",
            intent: "normal result communication",
          },
          {
            en: "The test is a bit indeterminate — the imaging quality wasn't perfect. I want to repeat it with a different modality or proceed to cath based on your risk factors.",
            intent: "indeterminate result management",
          },
          {
            en: "An abnormal stress test doesn't mean you're about to have a heart attack — it means we found something to address before it becomes an emergency.",
            intent: "abnormal result reassurance",
          },
          {
            en: "You achieved 9 METs on the treadmill, which is excellent functional capacity — that tells us a lot about your overall cardiac health.",
            intent: "functional capacity interpretation",
          },
        ],
        vocab: [
          "nuclear stress test",
          "stress echocardiogram",
          "perfusion defect",
          "reversible ischemia",
          "fixed defect",
          "METs (metabolic equivalents)",
          "Duke Treadmill Score",
          "SPECT imaging",
          "ischemic threshold",
          "wall motion abnormality",
        ],
        challenges: [
          "A patient with a large reversible perfusion defect and good functional capacity asks whether they really need a cath. Make your case.",
          "A patient has a normal stress test but continues to have atypical chest pain. Discuss your next steps.",
          "Explain why a negative stress test does not completely rule out coronary artery disease.",
        ],
        sampleConversation: [
          {
            speaker: "learner",
            en: "I have your nuclear stress test results and I want to go through them with you. The bottom line is that the test showed an abnormality in one area of your heart.",
          },
          { speaker: "ai", en: "Abnormal — what does that mean exactly? Is it a heart attack?" },
          {
            speaker: "learner",
            en: "No, it's not a heart attack. What the nuclear images show is that during peak stress, one area of the heart wall — the bottom part — isn't getting quite as much blood flow as the rest. When you're resting, it recovers. This is called reversible ischemia, and it's a signal that there may be a partial blockage in one of the arteries feeding that area.",
          },
          { speaker: "ai", en: "So I have a blockage?" },
          {
            speaker: "learner",
            en: "The stress test suggests it's possible — but the only way to know for sure and to know how significant it is, is to do a cardiac catheterization. That's where we put a small camera inside the arteries and look directly. Based on this test, I think that's the right next step.",
          },
          { speaker: "ai", en: "Is the cath itself safe? I've heard it's a big procedure." },
        ],
      },
    ],
    vocabSets: [
      {
        category: "Coronary Artery Disease",
        emoji: "🩸",
        words: [
          "atherosclerosis",
          "plaque",
          "stenosis",
          "coronary artery bypass graft (CABG)",
          "percutaneous coronary intervention",
          "drug-eluting stent",
          "bare metal stent",
          "TIMI flow",
          "fractional flow reserve",
          "collateral circulation",
        ],
      },
      {
        category: "Heart Failure",
        emoji: "💧",
        words: [
          "systolic dysfunction",
          "diastolic dysfunction",
          "ejection fraction",
          "BNP",
          "preload",
          "afterload",
          "congestion",
          "decompensation",
          "cardiac output",
          "stroke volume",
        ],
      },
      {
        category: "Arrhythmias",
        emoji: "⚡",
        words: [
          "atrial fibrillation",
          "atrial flutter",
          "ventricular tachycardia",
          "ventricular fibrillation",
          "heart block",
          "sick sinus syndrome",
          "supraventricular tachycardia",
          "premature ventricular complexes",
          "long QT syndrome",
          "Wolff-Parkinson-White",
        ],
      },
      {
        category: "Medications",
        emoji: "💊",
        words: [
          "beta-blocker",
          "ACE inhibitor",
          "ARB",
          "sacubitril-valsartan",
          "aldosterone antagonist",
          "SGLT2 inhibitor",
          "statin",
          "anticoagulant",
          "antiplatelet",
          "antiarrhythmic",
        ],
      },
      {
        category: "Diagnostics & Procedures",
        emoji: "🔬",
        words: [
          "echocardiogram",
          "coronary angiogram",
          "cardiac catheterization",
          "electrophysiology study",
          "cardiac MRI",
          "Holter monitor",
          "event monitor",
          "cardioversion",
          "ablation",
          "ICD (implantable cardioverter-defibrillator)",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // GENERAL SURGERY
  // ─────────────────────────────────────────────
  {
    moduleId: "general-surgery",
    areas: [
      {
        id: "clinic-consult-surgery",
        name: "Clinic Consult",
        emoji: "🏥",
        blurb:
          "The surgical outpatient consultation — evaluating a patient referred for a surgical problem and counseling on operative versus non-operative management.",
        counterpart:
          "55-year-old patient referred by PCP for symptomatic cholelithiasis with two episodes of biliary colic",
        learnerRole: "General surgeon conducting an outpatient consultation",
        toneNote:
          "Authoritative but collaborative. Explain the surgical recommendation clearly and address fears about anesthesia, scars, and recovery. Be honest about risks without being dismissive of them.",
        phrases: [
          {
            en: "Tell me about these episodes — where was the pain, how long did it last, and was there any fever or jaundice?",
            intent: "biliary colic characterization",
          },
          {
            en: "Your ultrasound shows several gallstones, the largest about 12 millimeters. Given your symptoms, I'd recommend taking the gallbladder out.",
            intent: "cholecystectomy recommendation",
          },
          {
            en: "This is a laparoscopic procedure — four small incisions, each less than a centimeter. Most patients go home the same day.",
            intent: "laparoscopic cholecystectomy explanation",
          },
          {
            en: "The main risks are bleeding, infection, and a rare but important one — injury to the bile duct. That's something we take very seriously and work hard to avoid.",
            intent: "surgical risk discussion",
          },
          {
            en: "If we don't take it out and you have another episode, there's a risk it develops into something more serious, like gallstone pancreatitis or cholangitis.",
            intent: "natural history of untreated cholelithiasis",
          },
          {
            en: "You can eat normally as soon as you feel like it after surgery — the idea that you have to change your diet permanently after a cholecystectomy is a myth for most people.",
            intent: "post-cholecystectomy diet myth-busting",
          },
          {
            en: "Do you have any questions about the procedure, the anesthesia, or recovery before we schedule?",
            intent: "informed consent opening",
          },
        ],
        vocab: [
          "cholelithiasis",
          "cholecystectomy",
          "laparoscopic surgery",
          "biliary colic",
          "cholangitis",
          "choledocholithiasis",
          "ERCP",
          "bile duct injury",
          "port site",
          "trocar",
        ],
        challenges: [
          "A patient with symptomatic gallstones is terrified of surgery and asks about lithotripsy or dissolving the stones with medication. Counsel them accurately.",
          "During a cholecystectomy consent conversation, the patient asks specifically about the risk of bile duct injury. Explain this risk honestly.",
          "A 72-year-old patient with multiple comorbidities has symptomatic cholelithiasis. Navigate the risk-benefit discussion about elective surgery versus watchful waiting.",
        ],
        sampleConversation: [
          {
            speaker: "learner",
            en: "Based on your symptoms and the ultrasound, I think the right recommendation is to take your gallbladder out. I want to go over what that involves and answer your questions.",
          },
          {
            speaker: "ai",
            en: "Is that surgery? I've never had surgery before. I'm scared about going under anesthesia.",
          },
          {
            speaker: "learner",
            en: "It's a very common and well-tolerated surgery. It's done laparoscopically — four small incisions, each about the size of your pinky fingernail. Most people go home the same day and are back to normal activity within a week.",
          },
          { speaker: "ai", en: "And the anesthesia — is that dangerous?" },
          {
            speaker: "learner",
            en: "For someone your age and with your overall health, the anesthesia risk is very low. The anesthesiologist will go through your history thoroughly before the procedure. The risk of serious anesthetic complications in an elective case like this is less than one in ten thousand.",
          },
          { speaker: "ai", en: "What if I just don't do it? Can I just live with the gallstones?" },
        ],
      },
      {
        id: "preop-consent",
        name: "Pre-op Consent",
        emoji: "📝",
        blurb:
          "Obtaining informed consent for a surgical procedure — explaining the operation, risks, benefits, and alternatives clearly and completely.",
        counterpart:
          "Patient scheduled for an elective laparoscopic appendectomy for recurrent appendicitis",
        learnerRole: "General surgeon or surgical resident obtaining informed consent",
        toneNote:
          "Thorough but accessible. Informed consent is a conversation, not a form. Invite questions. Document that the patient understood and had their questions answered. Never rush this.",
        phrases: [
          {
            en: "I want to go through the consent form with you rather than just having you sign it — I want to make sure you actually understand what you're agreeing to.",
            intent: "informed consent framing",
          },
          {
            en: "The procedure is a laparoscopic appendectomy — we remove the appendix through small incisions in the abdomen using a camera and instruments.",
            intent: "procedure description",
          },
          {
            en: "The risks include bleeding, infection, injury to surrounding structures — bowel, ureter, blood vessels — and the risks related to general anesthesia.",
            intent: "surgical risk enumeration",
          },
          {
            en: "There is a chance we need to convert to an open procedure if we encounter unexpected bleeding or anatomy we can't manage laparoscopically. That's not a complication — it's a decision to keep you safe.",
            intent: "conversion to open explanation",
          },
          {
            en: "The alternative to surgery at this point, given your recurrent episodes, is continued observation — but the risk of perforation increases over time.",
            intent: "non-operative alternative discussion",
          },
          {
            en: "Do you have any questions about anything I've said before you sign? Is there anything you want me to clarify or repeat?",
            intent: "consent confirmation",
          },
          {
            en: "By signing this, you're indicating you've had the opportunity to ask questions and understand what we discussed — not that you can't ask more questions on the day of surgery.",
            intent: "ongoing consent clarification",
          },
        ],
        vocab: [
          "informed consent",
          "laparoscopic appendectomy",
          "conversion to open",
          "general anesthesia",
          "perioperative risk",
          "NPO (nothing by mouth)",
          "surgical site infection",
          "ileus",
          "stump appendicitis",
          "mesoappendix",
        ],
        challenges: [
          "A patient is signing consent but clearly doesn't understand the difference between laparoscopic and open surgery. Identify this and correct it before proceeding.",
          "Obtain consent from an anxious patient who keeps asking 'what's the worst that can happen?' Walk through risks honestly without inducing paralytic fear.",
          "A patient speaks limited English and their family member is offering to translate the consent. Discuss the appropriate way to handle language barriers in informed consent.",
        ],
        sampleConversation: [
          {
            speaker: "learner",
            en: "So I'm here to go through the consent for your procedure tomorrow. Before you sign, I want to make sure you really understand what we're doing. Can you tell me in your own words what surgery you're having?",
          },
          { speaker: "ai", en: "You're taking out my appendix, I think." },
          {
            speaker: "learner",
            en: "Exactly right. And we're doing it laparoscopically — that means three small incisions, about a centimeter each, and we use a tiny camera and instruments. The whole thing takes about 45 minutes to an hour.",
          },
          { speaker: "ai", en: "What are the risks I should know about?" },
          {
            speaker: "learner",
            en: "The main ones are bleeding, infection, and injury to nearby structures — there's bowel very close to the appendix. Those complications are uncommon but possible. There's also a small chance we can't finish it laparoscopically and need to make a larger incision — not because something went wrong, but because sometimes the anatomy or inflammation makes the smaller approach unsafe.",
          },
          { speaker: "ai", en: "If that happens, does that mean I'll be in the hospital longer?" },
        ],
      },
      {
        id: "operating-room",
        name: "Operating Room (Time-out Through Close)",
        emoji: "🔪",
        blurb:
          "The surgical procedure itself — from the WHO surgical safety checklist time-out through the operative steps to wound closure.",
        counterpart:
          "Scrub tech, circulator, and anesthesiologist in the OR for a laparoscopic cholecystectomy",
        learnerRole: "General surgeon leading the operative team through the procedure",
        toneNote:
          "Clear, efficient, and commanding when needed. Address the whole team. The time-out is not a formality. Communicate changes in the operative plan in real time.",
        phrases: [
          {
            en: "Let's do the time-out. Patient name and date of birth — can someone confirm from the wristband?",
            intent: "time-out initiation",
          },
          {
            en: "We're doing a laparoscopic cholecystectomy. Antibiotics were given on time? Any allergies? Everyone in agreement?",
            intent: "time-out content",
          },
          {
            en: "I'm in — peritoneum looks clean, no adhesions. I can see the gallbladder.",
            intent: "entry narration",
          },
          {
            en: "I'm dissecting out the critical view of safety. I need to see both the cystic duct and cystic artery clearly before I clip anything.",
            intent: "critical view of safety",
          },
          {
            en: "Can I get a cholangiogram? I want to look at the biliary anatomy before I divide.",
            intent: "intraoperative cholangiogram request",
          },
          {
            en: "Clips are on the duct, clips are on the artery. I'm dividing — specimen is free.",
            intent: "operative milestone narration",
          },
          {
            en: "Closing fascia on the umbilical port with 0-Vicryl. Then skin with 4-0 Monocryl subcuticular.",
            intent: "closure plan",
          },
          {
            en: "Good work, everyone. Let's count before we close — instruments, sponges, sharps.",
            intent: "closing count",
          },
        ],
        vocab: [
          "surgical time-out",
          "critical view of safety",
          "cholangiogram",
          "cystic duct",
          "cystic artery",
          "trocar",
          "insufflation",
          "electrocautery",
          "laparoscope",
          "fascia closure",
        ],
        challenges: [
          "During a laparoscopic cholecystectomy, the anatomy is unclear due to inflammation. Walk through your decision to call for an intraoperative cholangiogram or convert to open.",
          "A scrub tech raises a concern during the time-out that the antibiotic was not given on time. How do you handle this as the surgeon?",
          "You encounter unexpected bleeding from the cystic artery during a laparoscopic case. Walk through your initial response and communication to the team.",
        ],
        sampleConversation: [
          {
            speaker: "learner",
            en: "Let's pause for the time-out before we start. Circulator, can you confirm patient name and date of birth from the wristband?",
          },
          { speaker: "ai", en: "Maria Gonzalez, date of birth March 12, 1969." },
          {
            speaker: "learner",
            en: "Procedure is laparoscopic cholecystectomy, right side of the abdomen. Antibiotics — were they given?",
          },
          {
            speaker: "ai",
            en: "Cefazolin 2 grams was given at 7:42, within the 60-minute window.",
          },
          {
            speaker: "learner",
            en: "Any allergies on the record? Any concerns from anyone before we start?",
          },
          { speaker: "ai", en: "No allergies documented. Anesthesia is ready, no concerns." },
        ],
      },
      {
        id: "postop-rounds",
        name: "Post-op Rounds",
        emoji: "🌅",
        blurb:
          "Morning rounds on surgical patients — assessing post-operative status, managing complications, and planning for discharge.",
        counterpart: "Patient on post-op day one after a laparoscopic sigmoid colectomy",
        learnerRole: "General surgery attending or resident conducting morning rounds",
        toneNote:
          "Efficient and systematic. Address pain, GI function, mobility, and wound. Set daily goals. Communicate the discharge plan early so the patient and family can plan.",
        phrases: [
          {
            en: "Good morning — how did you sleep, and how's your pain this morning?",
            intent: "post-op morning check-in",
          },
          {
            en: "Have you had any gas, any bowel sounds? I want to know when your GI tract wakes back up.",
            intent: "GI function assessment",
          },
          {
            en: "I want you up and walking three times today — I know it hurts but getting moving is the best thing you can do for your recovery.",
            intent: "early ambulation instruction",
          },
          {
            en: "The incisions look good, no redness or drainage. Exactly what I want to see on post-op day one.",
            intent: "wound assessment",
          },
          {
            en: "We're going to advance your diet today — start with clear liquids and see how you tolerate it. If that goes well, regular food tomorrow.",
            intent: "diet advancement plan",
          },
          {
            en: "I'm thinking discharge tomorrow if your pain is controlled on oral medications and you've had a bowel movement.",
            intent: "discharge criteria communication",
          },
          {
            en: "I want your drain output from last night — anything more than 200 mL of non-bloody fluid I want to know about.",
            intent: "drain output review",
          },
        ],
        vocab: [
          "post-operative day (POD)",
          "ileus",
          "early ambulation",
          "wound healing by primary intention",
          "drain output",
          "Foley catheter",
          "ERAS protocol",
          "DVT prophylaxis",
          "oral intake tolerance",
          "discharge criteria",
        ],
        challenges: [
          "A patient on POD 2 after a bowel resection has not passed gas and has a distended, tympanitic abdomen. Walk through your assessment of ileus versus obstruction.",
          "A patient post-colectomy has a fever of 38.9°C on POD 3. Work through your systematic differential for post-op fever at this time point.",
          "A post-op patient is requesting more IV pain medication and refusing to walk. Address this balance between comfort and recovery.",
        ],
        sampleConversation: [
          {
            speaker: "learner",
            en: "Good morning. Post-op day one — tell me how you're feeling. Pain on a scale of one to ten?",
          },
          { speaker: "ai", en: "About a six. Worse when I move. I'm scared to try to get up." },
          {
            speaker: "learner",
            en: "That's expected, and I know it sounds counterintuitive, but getting up and walking is actually what helps the pain get better faster. It gets the bowel moving, it prevents clots, and it helps clear your lungs after anesthesia. We have good pain medication for this.",
          },
          {
            speaker: "ai",
            en: "Has anything bad happened with the surgery? Like did everything go okay?",
          },
          {
            speaker: "learner",
            en: "Everything went exactly as planned. The anastomosis looks good, I got good margins. Your vital signs are stable, your incision looks exactly right for day one. So far so good — we just need to wait for your bowel to wake up.",
          },
          { speaker: "ai", en: "When can I go home?" },
        ],
      },
      {
        id: "discharge-instructions",
        name: "Discharge Instructions",
        emoji: "🏠",
        blurb:
          "Sending a surgical patient home — covering wound care, activity restrictions, diet, medications, and when to call or return.",
        counterpart: "Patient being discharged home on POD 2 after a laparoscopic cholecystectomy",
        learnerRole: "General surgeon or surgical PA providing discharge instructions",
        toneNote:
          "Clear and simple. Write it down or use the printed sheet as an anchor. The discharge conversation is when patients are often least focused — cover the most critical safety net information last so it's memorable.",
        phrases: [
          {
            en: "I'm going to go through your discharge instructions — there's a printout too, but I want to make sure we talk through the important parts.",
            intent: "discharge instruction framing",
          },
          {
            en: "Keep the incisions dry for the next 48 hours, then you can shower normally. No baths or swimming until they're fully healed.",
            intent: "wound care instructions",
          },
          {
            en: "No lifting more than ten pounds for two weeks — that includes groceries, laundry, kids. Ten pounds is roughly a gallon of milk.",
            intent: "activity restriction",
          },
          {
            en: "You can drive once you're off the narcotics and can slam on the brakes without hesitation. Usually about four or five days.",
            intent: "driving restriction",
          },
          {
            en: "Take the ibuprofen and acetaminophen on a schedule first — only use the oxycodone if the other two aren't cutting it. You'll recover faster with less narcotic.",
            intent: "pain medication hierarchy",
          },
          {
            en: "Call us or go to the ER if you have a fever over 101.5, increasing redness around any incision, or severe abdominal pain that's different from normal surgical soreness.",
            intent: "return precautions",
          },
          {
            en: "Follow up with me in two weeks. The appointment is already booked and you should have a reminder.",
            intent: "follow-up plan",
          },
        ],
        vocab: [
          "wound care",
          "activity restriction",
          "return precautions",
          "driving restriction",
          "pain medication regimen",
          "narcotic stewardship",
          "drain care",
          "staple removal",
          "wound dehiscence",
          "surgical follow-up",
        ],
        challenges: [
          "A patient going home with a Jackson-Pratt drain is confused about how to empty and record it. Walk through drain care instructions.",
          "A patient asks if they can take ibuprofen after being prescribed oxycodone. Explain the multimodal pain regimen.",
          "A patient's daughter calls after discharge saying her father's incision looks 'different.' Walk through how you triage this call.",
        ],
        sampleConversation: [
          {
            speaker: "learner",
            en: "You're ready to go home — great recovery. Let me go through the important things before you leave. First, pain: I want you taking the ibuprofen 600 milligrams every six hours with food and the acetaminophen every six hours in between. That leaves the oxycodone as a backup only.",
          },
          { speaker: "ai", en: "Do I need the oxycodone? Can I just not take it?" },
          {
            speaker: "learner",
            en: "You can absolutely try without it — and if you can manage on the ibuprofen and Tylenol, that's better. The oxycodone is there if you're having breakthrough pain that the others aren't controlling. Take as little as you need.",
          },
          { speaker: "ai", en: "What about the wounds? They look a little bruised." },
          {
            speaker: "learner",
            en: "Bruising around the port sites is completely normal — it's from the trocar going through the layers of the abdomen. It can look worse before it looks better and should resolve over a week or two. What I want you to watch for is increasing redness that spreads, warmth, or any pus. That's infection and you'd call us right away.",
          },
          { speaker: "ai", en: "And fever? At what point do I worry?" },
        ],
      },
      {
        id: "complication-discussion",
        name: "Complication Discussion",
        emoji: "⚠️",
        blurb:
          "Disclosing a surgical complication — communicating with honesty and empathy while managing the patient's clinical and emotional response.",
        counterpart: "Patient on POD 4 after a colectomy found to have an anastomotic leak on CT",
        learnerRole: "General surgeon delivering news of a serious post-operative complication",
        toneNote:
          "Direct and honest. Don't bury the diagnosis. Take ownership — use 'I' language. Explain what happens next clinically before the patient has to ask. Allow silence. Don't rush to defense.",
        phrases: [
          {
            en: "I need to talk to you about something important — the CT scan we did this morning showed a problem with the connection I made in your bowel.",
            intent: "complication disclosure opener",
          },
          {
            en: "There's a leak at the anastomosis — the join I created between the two ends of bowel. Some intestinal fluid has gotten outside the bowel into your abdomen.",
            intent: "anastomotic leak explanation",
          },
          {
            en: "I want to be honest with you — this is a known risk of this procedure. It doesn't mean anything was done incorrectly, but it is a complication and it needs to be addressed.",
            intent: "complication context",
          },
          {
            en: "We're going to take you back to the operating room today to address this. I need to go in, wash out the abdomen, and we'll need to create a temporary ostomy.",
            intent: "re-operation plan",
          },
          {
            en: "I know this is not what you were expecting and I'm sorry you're going through this. Do you want me to call a family member who can be with you?",
            intent: "emotional support",
          },
          {
            en: "The goal right now is to get you safe. We can talk about the longer-term plan — including reversing the ostomy — once you've recovered from this acute issue.",
            intent: "phased goal-setting",
          },
          {
            en: "I want to answer every question you have. What can I tell you right now?",
            intent: "open disclosure invitation",
          },
        ],
        vocab: [
          "anastomotic leak",
          "re-operation",
          "diverting ostomy",
          "peritonitis",
          "sepsis",
          "intra-abdominal abscess",
          "fistula",
          "bowel perforation",
          "damage control surgery",
          "ostomy reversal",
        ],
        challenges: [
          "A patient's family is furious about a post-op complication and demands to know if you made a mistake. Navigate this with honesty and composure.",
          "A patient goes into septic shock from an anastomotic leak. Walk through your communication with the ICU team and the family.",
          "A patient is devastated about requiring a temporary ostomy. Address the psychological impact and explain the reversal timeline.",
        ],
        sampleConversation: [
          {
            speaker: "learner",
            en: "Mr. Tran, I need to sit down with you and tell you about what your CT scan showed this morning.",
          },
          { speaker: "ai", en: "I knew something was wrong. I've been feeling worse, not better." },
          {
            speaker: "learner",
            en: "Your instinct was right, and I'm glad we scanned you. The CT shows a leak at the anastomosis — that's the connection I made between the two ends of your colon. Some bowel fluid has gotten into your abdomen.",
          },
          { speaker: "ai", en: "A leak — what does that mean? Is this serious?" },
          {
            speaker: "learner",
            en: "It is serious, and I want to be completely honest with you. This is a known complication of this type of surgery — it happens in about two to five percent of cases, even when everything is done correctly. But it requires a return to the operating room. We need to go back in, clean out the abdomen, and we will need to create a temporary opening in your abdomen — called an ostomy — to let the connection heal.",
          },
          { speaker: "ai", en: "A bag? You're telling me I'm going to have a bag?" },
        ],
      },
      {
        id: "er-consult",
        name: "ER Consult",
        emoji: "🚑",
        blurb:
          "The emergency general surgery consultation — rapid assessment, decision-making under pressure, and clear communication with the ER team.",
        counterpart:
          "Emergency medicine physician calling about a 28-year-old with RLQ pain, rebound tenderness, and CT showing perforated appendix",
        learnerRole: "General surgery resident taking an overnight ER consult call",
        toneNote:
          "Efficient and decisive. Gather the key information quickly. Communicate your plan clearly. In the ED, time to OR matters. Don't over-examine at the expense of action.",
        phrases: [
          {
            en: "Give me the quick version — vitals, exam findings, and what the CT showed.",
            intent: "consult intake",
          },
          {
            en: "Is she peritonitic on exam — voluntary or involuntary guarding, rebound tenderness?",
            intent: "peritonitis assessment",
          },
          {
            en: "Free air on CT with a perforated appy — she needs the OR tonight. What are her vitals and is she hemodynamically stable?",
            intent: "operative urgency determination",
          },
          {
            en: "Get a type and screen, start broad-spectrum antibiotics now — I'd use pip-tazo — and make her NPO. I'm on my way in.",
            intent: "pre-op orders over phone",
          },
          {
            en: "Talk to the family and let them know surgery is planned tonight for a perforated appendix. I'll consent the patient when I arrive.",
            intent: "family communication delegation",
          },
          {
            en: "How long ago did the symptoms start? If this has been going on for more than 48 hours I want to make sure we're not dealing with a contained perforation that we could manage non-operatively.",
            intent: "symptom duration assessment",
          },
          {
            en: "I'm seeing her now — she has diffuse peritonitis, she's tachycardic, and she has rigidity. We're going to the OR.",
            intent: "bedside assessment and decision",
          },
        ],
        vocab: [
          "perforated appendicitis",
          "peritonitis",
          "free air on CT",
          "broad-spectrum antibiotics",
          "piperacillin-tazobactam",
          "exploratory laparotomy",
          "NPO status",
          "type and screen",
          "operative urgency",
          "contained perforation",
        ],
        challenges: [
          "You are called for a 72-year-old with a perforated sigmoid diverticulum and fecal peritonitis. Decide between a Hartmann procedure and primary anastomosis.",
          "You arrive in the ER to find the patient in septic shock from a perforated bowel. Walk through your resuscitation before taking her to the OR.",
          "An ER physician disagrees with your recommendation to manage a contained appendiceal perforation non-operatively. Articulate your rationale.",
        ],
        sampleConversation: [
          {
            speaker: "ai",
            en: "Hey, this is Dr. Park in the ED. I've got a 28-year-old female, 36 hours of RLQ pain, low-grade fever of 38.4, HR 104. CT shows perforated appendix with free air and some fluid in the pelvis.",
          },
          {
            speaker: "learner",
            en: "What's her exam like — guarding, rebound, is she peritonitic?",
          },
          {
            speaker: "ai",
            en: "Definitely guarding in the RLQ, some voluntary guarding diffusely, rebound is present in the RLQ. She's uncomfortable.",
          },
          {
            speaker: "learner",
            en: "Okay. She needs the OR tonight. Get her on pip-tazo now, make her NPO, and get a type and screen if you haven't. I'm coming in. What's her pressure?",
          },
          {
            speaker: "ai",
            en: "BP is 108/72, she's not hypotensive. Okay, I'll get those orders in. Her family is here — what should I tell them?",
          },
          {
            speaker: "learner",
            en: "Tell them she has a perforated appendix and needs emergency surgery tonight. I'll be there in 20 minutes to speak with them and consent her. Start the antibiotics before I get there — don't wait for me.",
          },
        ],
      },
    ],
    vocabSets: [
      {
        category: "Common Procedures",
        emoji: "🔪",
        words: [
          "laparoscopic cholecystectomy",
          "appendectomy",
          "colectomy",
          "hernia repair",
          "bowel resection",
          "Whipple procedure",
          "thyroidectomy",
          "Hartmann procedure",
          "exploratory laparotomy",
          "stoma creation",
        ],
      },
      {
        category: "Anatomy",
        emoji: "🫀",
        words: [
          "mesentery",
          "peritoneum",
          "retroperitoneum",
          "anastomosis",
          "cystic duct",
          "common bile duct",
          "sigmoid colon",
          "cecum",
          "ileum",
          "jejunum",
        ],
      },
      {
        category: "Post-operative Management",
        emoji: "🌅",
        words: [
          "ERAS protocol",
          "ileus",
          "anastomotic leak",
          "surgical site infection",
          "deep vein thrombosis",
          "pulmonary embolism",
          "wound dehiscence",
          "seroma",
          "hematoma",
          "Foley catheter removal",
        ],
      },
      {
        category: "OR Communication",
        emoji: "🏗️",
        words: [
          "time-out",
          "critical view of safety",
          "bovie (electrocautery)",
          "Yankauer suction",
          "retractor",
          "Vicryl suture",
          "stapler",
          "laparoscope",
          "port",
          "insufflation",
        ],
      },
      {
        category: "Emergency Surgery",
        emoji: "🚨",
        words: [
          "perforated viscus",
          "free air",
          "peritonitis",
          "fecal contamination",
          "hemodynamic instability",
          "damage control",
          "mesenteric ischemia",
          "bowel obstruction",
          "volvulus",
          "incarcerated hernia",
        ],
      },
    ],
  },
];

export function getMedicalSpecialistContent(moduleId: string): MedicalModuleContent | null {
  return MEDICAL_SPECIALIST_CONTENT.find((m) => m.moduleId === moduleId) ?? null;
}

export function getMedicalSpecialistArea(moduleId: string, areaId: string): ModuleArea | null {
  return getMedicalSpecialistContent(moduleId)?.areas.find((a) => a.id === areaId) ?? null;
}
