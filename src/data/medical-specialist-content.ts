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
        blurb: "Establishing care with a new patient — gathering history, building rapport, and setting expectations.",
        counterpart: "New adult patient, 40s, transferring care from another provider",
        learnerRole: "Family medicine physician or NP conducting an initial visit",
        toneNote: "Warm and unhurried. Use plain language with the patient. Show genuine curiosity about their history. Avoid jargon until you shift to colleague mode.",
        phrases: [
          { en: "Tell me a little about what brings you in today — and feel free to start wherever makes sense to you.", intent: "open-ended chief complaint" },
          { en: "Who was managing your care before you moved here, and do you have records we can request?", intent: "continuity of care" },
          { en: "Walk me through a typical day for you — what you eat, how you sleep, activity level.", intent: "lifestyle history" },
          { en: "Any hospitalizations, surgeries, or times you ended up in the ER in the last few years?", intent: "past medical/surgical history" },
          { en: "I want to make sure I have a complete picture — any family history of heart disease, cancer, or diabetes?", intent: "family history" },
          { en: "Let's go through your medications together — if you brought your bottles, that's even better.", intent: "medication reconciliation" },
          { en: "Is there anything you've been putting off dealing with that you've been wanting to talk to a doctor about?", intent: "uncovering hidden agenda" },
          { en: "Based on what you've told me, here's what I'd like to do today and what I'd like to address over the next few visits.", intent: "visit agenda-setting" },
        ],
        vocab: [
          "chief complaint", "HPI (history of present illness)", "PMH (past medical history)", "family history",
          "social history", "medication reconciliation", "ROS (review of systems)", "establishing care",
          "continuity of care", "health maintenance"
        ],
        challenges: [
          "The patient hasn't seen a doctor in 8 years and is vague about their history. Gather enough to form a problem list.",
          "The patient brings a bag of 11 medications from three different prescribers. Reconcile the list and identify duplicates.",
          "A 55-year-old patient mentions 'a little chest discomfort' almost as an aside. Explore this symptom without alarming them."
        ],
        sampleConversation: [
          { speaker: "learner", en: "So tell me — what brings you in today? And feel free to just start talking, I'm not in a rush." },
          { speaker: "ai", en: "Well, mostly I just need a new doctor since we moved. But honestly, I've been having some fatigue and I don't know, just not feeling myself for a few months." },
          { speaker: "learner", en: "Got it. When you say fatigue, help me understand — is it trouble sleeping, trouble staying awake during the day, or just a general low energy feeling?" },
          { speaker: "ai", en: "More like low energy. I sleep okay, usually seven hours. I just feel wiped out by noon." },
          { speaker: "learner", en: "Any changes in weight, appetite, feeling cold when others aren't, or hair changes? I want to make sure we're not missing something like a thyroid issue." },
          { speaker: "ai", en: "Now that you mention it, my hair has been thinning. My wife noticed it too. Is that related?" },
        ],
      },
      {
        id: "chronic-disease-management",
        name: "Chronic Disease Management",
        emoji: "📋",
        blurb: "Managing ongoing conditions like diabetes, hypertension, and COPD — reviewing labs, adjusting treatment, and motivating adherence.",
        counterpart: "Established patient with type 2 diabetes and hypertension, A1c trending up",
        learnerRole: "Family medicine physician following the patient quarterly",
        toneNote: "Collaborative, non-judgmental. Avoid lecturing. Use shared decision-making language. Acknowledge barriers to adherence without dismissing them.",
        phrases: [
          { en: "Your A1c came back at 8.4 — it's gone up a bit since last time. Let's talk about what's been going on.", intent: "lab result delivery" },
          { en: "I don't want to just add another medication without understanding what's getting in the way.", intent: "adherence exploration" },
          { en: "On a scale of one to ten, how confident are you that you could make one change to your diet this month?", intent: "motivational interviewing" },
          { en: "Your blood pressure is running higher than I'd like — have you been able to check it at home at all?", intent: "BP management check-in" },
          { en: "We need to talk about your kidneys — at this level of blood sugar control, I want to check your microalbumin and GFR annually.", intent: "complication screening" },
          { en: "I want to make sure we're on the same page about the goal — ideally we're aiming for an A1c under 7, but I'd rather get you to 7.5 safely than chase a number too aggressively.", intent: "individualized goal-setting" },
          { en: "Are there any side effects from the metformin, or any reason you've been skipping doses?", intent: "medication side effect check" },
        ],
        vocab: [
          "HbA1c", "microalbuminuria", "eGFR", "hypertension", "titration", "metformin",
          "ACE inhibitor", "statin therapy", "diabetic nephropathy", "metabolic syndrome"
        ],
        challenges: [
          "A diabetic patient's A1c has risen from 7.1 to 9.0. They admit they stopped their metformin due to GI side effects. Counsel them and offer alternatives.",
          "A hypertensive patient says they feel fine and questions why they need medication at all. Use motivational interviewing to address this.",
          "A patient on three antihypertensives has a BP of 162/98 in clinic today. They report taking all medications. Work through secondary causes and next steps."
        ],
        sampleConversation: [
          { speaker: "learner", en: "So your A1c came back at 8.4 this time. How have things been going since your last visit — has anything changed?" },
          { speaker: "ai", en: "Honestly, it's been a rough few months. Work has been crazy, I've been eating out a lot more, and I keep forgetting the evening metformin dose." },
          { speaker: "learner", en: "I appreciate you being straight with me — that actually explains a lot. The evening dose matters because it covers your overnight glucose. What would make it easier to remember?" },
          { speaker: "ai", en: "I don't know, maybe if it was just once a day? My wife takes one pill in the morning and that's it." },
          { speaker: "learner", en: "That's actually a good option. There's an extended-release version of metformin you take once with dinner. It also tends to be easier on the stomach. Want to try that?" },
          { speaker: "ai", en: "Yeah, that sounds way more doable. And what about the blood pressure — was that okay?" },
        ],
      },
      {
        id: "pediatric-visit",
        name: "Pediatric Visit",
        emoji: "👶",
        blurb: "Well-child exams and acute sick visits — communicating with both the child and the parent/guardian.",
        counterpart: "Parent bringing in a 4-year-old for a well-child check",
        learnerRole: "Family medicine physician conducting a well-child visit",
        toneNote: "Warm and playful with the child, clear and informative with the parent. Use age-appropriate language for both. Acknowledge parental concerns without over-reassuring.",
        phrases: [
          { en: "Hi! Who's this you brought with you today? Is that your favorite dinosaur?", intent: "child rapport-building" },
          { en: "Before we get started, what questions or concerns do you have that you want to make sure we cover?", intent: "parent agenda-setting" },
          { en: "At four years old, we're looking at language, social skills, and fine motor — how does she do around other kids?", intent: "developmental screening" },
          { en: "Is she eating a variety of foods, or are there things she's refusing? Picky eating is really common at this age.", intent: "nutrition screening" },
          { en: "We're going to do two shots today — I won't lie, they sting for a second, but you're going to do great.", intent: "vaccine preparation" },
          { en: "You should keep an eye out for fever, fussiness, or a sore arm for the next day or two — that's normal. Call us if she's running over 104 or anything seems off.", intent: "vaccine anticipatory guidance" },
          { en: "Any screen time concerns? At this age we recommend no more than an hour of quality programming per day.", intent: "anticipatory guidance" },
          { en: "She looks great — her growth is right on track and her development is right where we want to see it at four.", intent: "reassurance and summary" },
        ],
        vocab: [
          "well-child exam", "developmental milestone", "anticipatory guidance", "immunization schedule",
          "DTaP", "MMR", "growth percentile", "autism screening", "vision screening", "speech delay"
        ],
        challenges: [
          "A parent is hesitant about the MMR vaccine and cites concerns about autism. Counsel them using current evidence without being dismissive.",
          "A 2-year-old isn't saying any two-word phrases yet. Discuss your approach to speech delay evaluation with the parent.",
          "An 8-year-old's BMI has crossed from the 85th to the 95th percentile. Discuss this with the parent sensitively."
        ],
        sampleConversation: [
          { speaker: "learner", en: "Hey buddy! That is a cool shirt. Is that Spiderman? Okay, can you do something for me — can you draw a circle on this paper?" },
          { speaker: "ai", en: "(as parent) He actually loves drawing. He can write his name too — we've been practicing for preschool." },
          { speaker: "learner", en: "That's wonderful — writing his name at four is right on track, that's great to hear. Does he play well with other kids, take turns, that kind of thing?" },
          { speaker: "ai", en: "Mostly yes. He has a best friend at daycare. But he does still have some tantrums, is that normal?" },
          { speaker: "learner", en: "Totally normal at four — the tantrums should start tapering off more as he heads toward five. If they're escalating or lasting longer than 15-20 minutes, we'd want to hear about it, but what you're describing sounds developmentally appropriate." },
          { speaker: "ai", en: "Okay, that's a relief. And what about the shots — how many today?" },
        ],
      },
      {
        id: "mental-health-screening",
        name: "Mental Health Screening",
        emoji: "🧠",
        blurb: "Screening for depression, anxiety, and suicidality in the primary care setting — broaching sensitive topics skillfully.",
        counterpart: "35-year-old patient presenting for a follow-up who scores a 10 on the PHQ-9",
        learnerRole: "Family medicine physician following up on a PHQ-9 result",
        toneNote: "Slow, calm, non-reactive. Normalize without minimizing. Ask directly about suicidality — don't dance around it. Use reflective listening.",
        phrases: [
          { en: "On the questionnaire you filled out, some of your answers stood out to me and I want to check in about how you've really been doing.", intent: "opening the conversation" },
          { en: "When you say things feel hopeless — can you tell me more about what that feels like for you?", intent: "exploring depression symptoms" },
          { en: "I have to ask directly — have you had any thoughts of hurting yourself or not wanting to be here?", intent: "suicidality screening" },
          { en: "I'm glad you told me that. Let's talk about what kind of support would help most right now.", intent: "safety planning opener" },
          { en: "Depression is a medical condition, same as diabetes — there's no reason to push through it alone.", intent: "destigmatizing" },
          { en: "We have a few options — therapy, medication, or both. What feels right to you to start with?", intent: "shared decision-making" },
          { en: "I want to make sure you have a plan for this week — if things feel really dark, who would you call?", intent: "safety planning" },
          { en: "I'd like to see you back in two to three weeks — not three months. This is something I want to stay close on.", intent: "close follow-up" },
        ],
        vocab: [
          "PHQ-9", "GAD-7", "suicidal ideation", "safety planning", "SSRI", "CBT (cognitive behavioral therapy)",
          "passive ideation", "protective factors", "crisis resources", "warm handoff"
        ],
        challenges: [
          "A patient with a PHQ-9 of 14 denies feeling depressed but endorses low energy, poor sleep, and anhedonia. Help them connect the dots.",
          "A patient discloses passive suicidal ideation with no plan. Walk through a safety assessment and safety plan.",
          "A patient refuses psychiatric referral and says 'I just need to tough it out.' Use motivational interviewing to explore their resistance."
        ],
        sampleConversation: [
          { speaker: "learner", en: "So on the questionnaire you filled out today — you mentioned feeling down nearly every day and having trouble finding enjoyment in things. I want to make sure we actually talk about that." },
          { speaker: "ai", en: "I mean, it's just been a lot lately. Work stuff, some things at home. I didn't really think it was that big a deal." },
          { speaker: "learner", en: "It sounds like you've been carrying a lot. When you say it's been a lot — how long has it felt this way?" },
          { speaker: "ai", en: "Honestly, maybe four or five months. I keep thinking it'll pass, but I wake up dreading the day, and that's not like me." },
          { speaker: "learner", en: "I appreciate you sharing that with me. I want to ask you directly — have you had any thoughts of hurting yourself, or times where you've thought you'd be better off not being here?" },
          { speaker: "ai", en: "Not like, seriously. But sometimes I think about how tired I am and I wonder what the point is. Does that count?" },
        ],
      },
      {
        id: "preventive-care",
        name: "Preventive Care & Health Maintenance",
        emoji: "🛡️",
        blurb: "Annual wellness visits, cancer screenings, vaccine updates, and lifestyle counseling.",
        counterpart: "52-year-old patient presenting for an annual physical, no acute complaints",
        learnerRole: "Family medicine physician conducting a Medicare Annual Wellness Visit or standard physical",
        toneNote: "Efficient but personal. Cover the checklist without making the patient feel like a to-do list. Tie each recommendation to the patient's specific risk factors.",
        phrases: [
          { en: "At 52, there are a few screenings we want to make sure you're up to date on — colonoscopy, mammogram, and a lipid panel are the big ones.", intent: "age-appropriate screening" },
          { en: "Have you ever had a shingles vaccine? It's recommended starting at 50, and it's worth doing.", intent: "vaccine update" },
          { en: "Your LDL came back at 148 — with your family history of heart disease, I'd like to talk about whether a statin makes sense.", intent: "cardiovascular risk discussion" },
          { en: "Are you a current or former smoker? I ask because we may want to do a low-dose CT scan for lung cancer screening.", intent: "lung cancer screening eligibility" },
          { en: "How's your stress level overall, and are you getting any physical activity? Even 150 minutes a week of walking changes your cardiac risk.", intent: "lifestyle counseling" },
          { en: "Let's update your advance directive while you're here — do you have one on file, and is it current?", intent: "advance care planning" },
          { en: "Your bone density scan is due — at your age and with low vitamin D, osteoporosis is something we want to screen for.", intent: "DEXA recommendation" },
        ],
        vocab: [
          "colonoscopy", "mammography", "DEXA scan", "lipid panel", "USPSTF guidelines", "advance directive",
          "lung cancer screening", "cervical cancer screening", "immunization schedule", "10-year cardiovascular risk"
        ],
        challenges: [
          "A 58-year-old patient hasn't had a colonoscopy and is resistant. Address their concerns and offer alternatives like Cologuard.",
          "Calculate and explain a patient's 10-year ASCVD risk score and discuss the shared decision-making process around statin initiation.",
          "A 45-year-old woman asks when she should start getting mammograms. Walk through the evidence and different guideline recommendations."
        ],
        sampleConversation: [
          { speaker: "learner", en: "Everything looks pretty good overall. I do want to flag a few things we should get caught up on. Have you had your colonoscopy yet?" },
          { speaker: "ai", en: "No, I've been putting that off. My brother had one and said it was terrible. Is it really necessary?" },
          { speaker: "learner", en: "I hear that — the prep is not fun. But here's the thing: colorectal cancer is one we can actually prevent, not just catch early. At 52, you're right in the window where it matters most." },
          { speaker: "ai", en: "Is there anything else I could do instead? Like a stool test?" },
          { speaker: "learner", en: "Actually yes — there's a test called Cologuard that you do at home. It's not quite as sensitive as a colonoscopy, but it's a real option if that barrier is keeping you from getting screened at all. Better to do that than nothing." },
          { speaker: "ai", en: "Okay, I'd be willing to try that. What about the cholesterol thing — you mentioned my LDL?" },
        ],
      },
      {
        id: "urgent-visit",
        name: "Urgent / Sick Visit",
        emoji: "🚨",
        blurb: "Acute presentations in the primary care setting — differentiating benign from serious, and knowing when to escalate.",
        counterpart: "Patient presenting with three days of chest pain and shortness of breath",
        learnerRole: "Family medicine physician evaluating an acute complaint",
        toneNote: "Focused and systematic. Move efficiently without seeming dismissive. Be transparent about your clinical reasoning. Know when to say 'I want to rule out something serious before we do anything else.'",
        phrases: [
          { en: "Tell me exactly where the pain is and show me with one finger if you can — is it more here or here?", intent: "pain localization" },
          { en: "Does anything make it better or worse — like leaning forward, taking a deep breath, or lying down?", intent: "aggravating/relieving factors" },
          { en: "I want to get an EKG right now and some labs — I just want to make sure we're not dealing with something cardiac before we go any further.", intent: "urgent workup ordering" },
          { en: "On a scale of one to ten, what's the pain right now, and what's the worst it's been?", intent: "pain severity" },
          { en: "Any chance you've been on a long car or plane ride recently, or had any leg swelling?", intent: "PE risk factor screening" },
          { en: "I'm going to be straight with you — the story you're describing warrants a trip to the ED for a CT scan that we can't do here.", intent: "escalation to ED" },
          { en: "This looks more like musculoskeletal pain — the tenderness here on exam fits, and the EKG is clean. Let's treat it as costochondritis for now and here's what to watch for.", intent: "reassurance with safety net" },
        ],
        vocab: [
          "costochondritis", "pleuritis", "pulmonary embolism", "GERD", "troponin", "D-dimer",
          "EKG (electrocardiogram)", "WELLS score", "pneumothorax", "pericarditis"
        ],
        challenges: [
          "A 44-year-old woman presents with atypical chest pain. Her EKG is normal but her risk factors include diabetes and smoking. Walk through your workup and disposition.",
          "A patient with known GERD presents with chest pain they attribute to reflux. Determine how to distinguish this from a cardiac cause.",
          "You see a 28-year-old with pleuritic chest pain after a long flight. Walk through PE risk stratification using the Wells criteria."
        ],
        sampleConversation: [
          { speaker: "learner", en: "So this chest pain started three days ago. Is it constant or does it come and go?" },
          { speaker: "ai", en: "It comes and goes. It's worse when I take a deep breath in, kind of sharp. And I've been a little short of breath." },
          { speaker: "learner", en: "Sharp pain that's worse with breathing is actually helpful information — it makes me think this might be pleuritis or musculoskeletal rather than something cardiac. But I still want an EKG to make sure. Any recent travel, long drives, leg swelling?" },
          { speaker: "ai", en: "Actually yeah, I drove to see my parents two weeks ago — about a nine-hour drive." },
          { speaker: "learner", en: "Okay, that's important. I want to check your D-dimer — there's a condition called a pulmonary embolism, a clot in the lung, that we need to rule out given that history and your symptoms." },
          { speaker: "ai", en: "A clot in my lung? That sounds serious." },
        ],
      },
      {
        id: "phone-triage",
        name: "Phone Triage",
        emoji: "📞",
        blurb: "Managing patient calls — assessing severity over the phone, giving safe advice, and triaging appropriately.",
        counterpart: "Patient calling to report fever of 103.2 and cough for two days",
        learnerRole: "Family medicine physician or nurse triaging a patient call",
        toneNote: "Efficient, clear, safety-conscious. You can't see the patient — acknowledge that limitation. Set clear return precautions and document the encounter.",
        phrases: [
          { en: "Tell me exactly what's going on — when did this start and what symptoms do you have besides the fever?", intent: "focused history over phone" },
          { en: "Is there any shortness of breath, chest pain, or confusion? Those are things that would mean you need to be seen today.", intent: "red flag screening" },
          { en: "Have you been tested for flu or COVID since this started?", intent: "rapid test inquiry" },
          { en: "Given what you're describing, I think this can be managed at home for now — but here's exactly what I want you to watch for.", intent: "home management guidance" },
          { en: "If your fever goes above 104, you become confused, you're struggling to breathe, or you're not keeping fluids down, you go straight to the ER — don't wait to call us first.", intent: "return precautions" },
          { en: "I'm going to have you come in tomorrow morning if you're not starting to turn a corner — does nine o'clock work?", intent: "follow-up scheduling" },
          { en: "We can send a prescription to your pharmacy for something to help with the symptoms — what pharmacy do you use?", intent: "remote prescribing" },
        ],
        vocab: [
          "triage", "return precautions", "fever management", "influenza", "streptococcal pharyngitis",
          "oxygen saturation", "dehydration", "remote monitoring", "nurse triage protocol", "SBAR"
        ],
        challenges: [
          "A parent calls about a 6-month-old with a fever of 101.8. Walk through your assessment and advice, keeping infant fever guidelines in mind.",
          "A patient with CHF calls to say they gained 5 pounds in 3 days and their ankles are swollen. Triage this call appropriately.",
          "An elderly patient calls confused about their symptoms after a fall. Assess fall safety and determine whether an in-person visit is needed today."
        ],
        sampleConversation: [
          { speaker: "learner", en: "Hi, this is Dr. Chen returning your call. What's going on?" },
          { speaker: "ai", en: "Hi, I've had a fever of 103.2 since last night and a really bad cough. I feel terrible." },
          { speaker: "learner", en: "I'm sorry you're feeling so rough. Let me ask — are you having any trouble breathing, any chest pain, or feeling confused?" },
          { speaker: "ai", en: "No confusion, but I do feel a little short of breath when I walk around." },
          { speaker: "learner", en: "Okay. That's something I want to understand better — when you say short of breath, is it shortness of breath at rest sitting on the couch, or only when you're up moving around?" },
          { speaker: "ai", en: "Mostly when I move around. Sitting still I'm okay." },
        ],
      },
    ],
    vocabSets: [
      {
        category: "Common Diagnoses",
        emoji: "📖",
        words: ["hypertension", "type 2 diabetes", "hyperlipidemia", "GERD", "osteoarthritis", "hypothyroidism", "major depressive disorder", "asthma", "chronic kidney disease", "obesity"]
      },
      {
        category: "Lab Values",
        emoji: "🔬",
        words: ["HbA1c", "LDL cholesterol", "TSH", "creatinine", "eGFR", "CBC", "CMP", "microalbuminuria", "INR", "vitamin D level"]
      },
      {
        category: "Medications",
        emoji: "💊",
        words: ["metformin", "lisinopril", "atorvastatin", "levothyroxine", "sertraline", "amlodipine", "omeprazole", "albuterol", "aspirin", "hydrochlorothiazide"]
      },
      {
        category: "Clinical Actions",
        emoji: "⚕️",
        words: ["titration", "referral", "prior authorization", "shared decision-making", "motivational interviewing", "warm handoff", "care coordination", "risk stratification", "disposition", "follow-up"]
      },
      {
        category: "Preventive Screening",
        emoji: "🛡️",
        words: ["colonoscopy", "mammography", "Pap smear", "DEXA scan", "lung cancer screening", "ASCVD risk", "depression screening", "vision screening", "immunization", "advance directive"]
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
        blurb: "Establishing prenatal care — dating the pregnancy, reviewing history, ordering first-trimester labs, and setting expectations for the coming months.",
        counterpart: "26-year-old patient at 8 weeks gestation, first pregnancy",
        learnerRole: "OB-GYN or midwife conducting the initial obstetric intake visit",
        toneNote: "Warm and reassuring but thorough. This visit sets the tone for the entire pregnancy relationship. Cover medical history without rushing. Acknowledge excitement and anxiety simultaneously.",
        phrases: [
          { en: "Congratulations — based on your LMP and the ultrasound, you're measuring right at eight weeks, with a due date of around the fourteenth.", intent: "pregnancy dating and EDD" },
          { en: "I'm going to order your first-trimester labs today — that includes blood type, rubella immunity, STI screening, and a CBC.", intent: "first-trimester lab panel" },
          { en: "Have you started a prenatal vitamin yet? The folic acid in the first trimester is really important for the baby's neural tube.", intent: "prenatal vitamin counseling" },
          { en: "Any history of miscarriage, prior pregnancy complications, or any genetic conditions that run in either family?", intent: "obstetric and genetic history" },
          { en: "We'll offer genetic screening around 10 to 13 weeks — it looks at the risk for chromosomal conditions like Down syndrome. We can talk through what that testing involves.", intent: "genetic screening counseling" },
          { en: "Foods to avoid during pregnancy: raw fish, deli meat unless heated, unpasteurized cheese, and limit your mercury-heavy fish like tuna.", intent: "dietary counseling" },
          { en: "Normal spotting can happen in early pregnancy, but if you soak a pad or have tissue passing, or cramping that won't quit, call us right away.", intent: "early pregnancy precautions" },
          { en: "We'll see you every four weeks until 28 weeks, then every two weeks, then weekly toward the end.", intent: "prenatal visit schedule" },
        ],
        vocab: [
          "LMP (last menstrual period)", "EDD (estimated due date)", "gestational age", "nuchal translucency",
          "cell-free fetal DNA", "rubella immunity", "Group B Streptococcus", "fundal height", "fetal heart tones", "first-trimester screen"
        ],
        challenges: [
          "A patient at 10 weeks presents with light spotting. Evaluate the differential and communicate your plan while managing her anxiety.",
          "Counsel a patient on the difference between screening tests (NIPT, nuchal translucency) and diagnostic tests (CVS, amniocentesis).",
          "A patient reports nausea and vomiting so severe she can't keep anything down. Assess for hyperemesis gravidarum and discuss management."
        ],
        sampleConversation: [
          { speaker: "learner", en: "So based on your last period and what we saw on ultrasound today, you're eight weeks and two days, which puts your due date at January 14th. How are you feeling so far?" },
          { speaker: "ai", en: "Honestly, really nauseous. Like all day. I thought it was called morning sickness but it's not just in the morning." },
          { speaker: "learner", en: "You're right, 'morning sickness' is a bit of a misnomer — it can be any time of day and for some people it's constant. Usually starts to lift around 12 to 14 weeks. In the meantime, small frequent meals, ginger, and there are safe medications we can use if it gets bad enough that you're losing weight or can't stay hydrated." },
          { speaker: "ai", en: "Okay, good to know. And what about the genetic testing? My mom mentioned something about Down syndrome testing?" },
          { speaker: "learner", en: "Yes, we'll offer that around 10 to 13 weeks. There's a blood test called cell-free fetal DNA — it looks at the baby's DNA in your bloodstream and screens for chromosomal conditions. It's a screen, not a diagnosis, so if it comes back abnormal, we'd talk about whether you'd want to do an amniocentesis to confirm." },
          { speaker: "ai", en: "Is it safe to do? And is it covered by insurance?" },
        ],
      },
      {
        id: "anatomy-scan",
        name: "Anatomy Scan (20-week Ultrasound)",
        emoji: "🖥️",
        blurb: "The mid-pregnancy anatomy survey — reviewing fetal structures, placental location, and communicating findings to the patient.",
        counterpart: "Patient at 20 weeks presenting with her partner for the anatomy ultrasound",
        learnerRole: "OB-GYN or maternal-fetal medicine physician reviewing the anatomy scan",
        toneNote: "Balanced between sharing the joy of seeing the baby and communicating any findings clearly. Use non-alarmist language for soft markers. Be honest about uncertainty.",
        phrases: [
          { en: "We're going to take a look at all the major structures today — brain, heart, spine, kidneys, limbs — and check the placental location.", intent: "anatomy scan overview" },
          { en: "The four-chamber view of the heart looks great, and I can see all four chambers filling nicely.", intent: "cardiac anatomy" },
          { en: "The placenta is anterior and low at this point — we'll want to recheck at 32 weeks to see if it's moved up.", intent: "low-lying placenta counseling" },
          { en: "We see something called a choroid plexus cyst — on its own, this is a normal variant and typically resolves. It becomes more meaningful only if there are other findings.", intent: "soft marker counseling" },
          { en: "The fetal weight is estimated at 12 ounces, which is right on track for 20 weeks.", intent: "fetal biometry" },
          { en: "Fluid levels look good, the cervix is measuring within normal, and fetal movement has been active throughout.", intent: "reassuring findings summary" },
          { en: "We did notice the baby's lips but the palate is hard to visualize on ultrasound — that's not something we can fully assess at this scan.", intent: "limitation disclosure" },
        ],
        vocab: [
          "anatomy survey", "anterior placenta", "placenta previa", "choroid plexus cyst", "echogenic bowel",
          "biometry", "estimated fetal weight", "amniotic fluid index", "cervical length", "vasa previa"
        ],
        challenges: [
          "The anatomy scan shows an echogenic focus in the fetal heart. Counsel the patient about this soft marker for Down syndrome.",
          "The scan reveals placenta previa. Explain what this means for the remainder of the pregnancy and delivery planning.",
          "A cardiac finding of uncertain significance is noted. Walk through how you would communicate this and plan next steps with MFM."
        ],
        sampleConversation: [
          { speaker: "learner", en: "Everything is looking really good. I can see all four chambers of the heart, the brain structures look normal, spine looks great, two kidneys, four limbs. The baby is measuring right on track at 20 weeks." },
          { speaker: "ai", en: "Oh good. Can you tell what it is? We didn't find out at the last scan." },
          { speaker: "learner", en: "I can see — would you like to know?" },
          { speaker: "ai", en: "Yes! We both want to know." },
          { speaker: "learner", en: "It's a girl. I do want to mention one thing — the placenta is sitting a little low right now, what we call a low-lying placenta. This is actually pretty common at 20 weeks. As the uterus grows, the placenta usually moves up. We'll recheck at 32 weeks. For now it doesn't change anything." },
          { speaker: "ai", en: "Low-lying — does that mean I can't do certain things?" },
        ],
      },
      {
        id: "labor-and-delivery",
        name: "Labor & Delivery",
        emoji: "🏥",
        blurb: "Admitting a laboring patient, managing labor progress, communicating during active labor, and conducting delivery.",
        counterpart: "Patient presenting to L&D at 39 weeks with regular contractions every 5 minutes",
        learnerRole: "OB-GYN or labor and delivery nurse/midwife managing active labor",
        toneNote: "Calm, confident, and directive when needed. Support the patient's preferences where possible. Communicate changes in the clinical picture clearly and without alarming language.",
        phrases: [
          { en: "You're four centimeters dilated and about 70 percent effaced — you're definitely in active labor. We're going to admit you.", intent: "labor assessment and admission" },
          { en: "Have you thought about whether you'd like an epidural? There's no wrong answer — we'll support whatever you decide.", intent: "epidural counseling" },
          { en: "The baby's heart rate tracing looks reassuring — we're seeing good variability and accelerations.", intent: "EFM strip reassurance" },
          { en: "I'm seeing some late decelerations on the monitor — I want to roll you onto your left side and give you some oxygen. The baby is telling us it's under a little stress.", intent: "nonreassuring tracing management" },
          { en: "You've been at eight centimeters for three hours without progress. I want to talk about our options, including possibly augmenting with Pitocin or discussing a C-section.", intent: "labor dystocia discussion" },
          { en: "When I tell you to push, I want you to take a big breath in, hold it, and bear down hard for a count of ten. Let's practice.", intent: "pushing instruction" },
          { en: "One more push — the head is right there, you're doing great.", intent: "crowning encouragement" },
          { en: "Your baby is here — she's crying, good tone, she looks great. Congratulations.", intent: "delivery announcement" },
        ],
        vocab: [
          "cervical effacement", "dilation", "station", "active labor", "electronic fetal monitoring",
          "variable deceleration", "late deceleration", "oxytocin augmentation", "operative delivery", "episiotomy"
        ],
        challenges: [
          "The fetal heart rate tracing shows repetitive variable decelerations. Explain your assessment and interventions to the patient and nursing staff.",
          "A patient who has been laboring for 18 hours has not progressed past 7 cm despite augmentation. Discuss the option of cesarean delivery.",
          "A patient with a birth plan requests no episiotomy and freedom of movement during labor. Navigate her preferences within your clinical parameters."
        ],
        sampleConversation: [
          { speaker: "learner", en: "Okay, I've checked you — you're six centimeters, completely effaced, and the baby is at zero station. You're making really good progress. How's the pain?" },
          { speaker: "ai", en: "The contractions are getting really intense. I was trying to go without an epidural but I don't know if I can." },
          { speaker: "learner", en: "That's completely okay — six centimeters, contractions this close together, it makes total sense that you're feeling that. If you want the epidural, we can have anesthesia here within about twenty minutes. There's no penalty for changing your mind." },
          { speaker: "ai", en: "Okay. Yes. I think I need it. Will it slow things down?" },
          { speaker: "learner", en: "The older data suggested that, but more recent evidence shows a well-dosed epidural doesn't actually slow labor down. And a well-rested patient who isn't fighting through every contraction often pushes more effectively." },
          { speaker: "ai", en: "That actually makes me feel better about it. Let's do it." },
        ],
      },
      {
        id: "postpartum-visit",
        name: "Postpartum Visit",
        emoji: "🌸",
        blurb: "The 6-week postpartum visit — physical recovery, breastfeeding, mood screening, contraception, and returning to normal activity.",
        counterpart: "Patient six weeks after a vaginal delivery, here for postpartum follow-up",
        learnerRole: "OB-GYN or midwife conducting the postpartum check",
        toneNote: "Attentive to both physical recovery and emotional wellbeing. Screen actively for postpartum depression — don't just hand the form. Address the whole person, not just the incision.",
        phrases: [
          { en: "How are you doing — really? Not just physically, but how are you managing with the baby, with sleep, with everything?", intent: "holistic postpartum check-in" },
          { en: "We routinely screen for postpartum depression at this visit — it affects about one in five new moms and it's very treatable.", intent: "PPD screening introduction" },
          { en: "Your incision is healing beautifully — good approximation, no signs of infection.", intent: "incision assessment" },
          { en: "Are you breastfeeding? How has that been going — any latch issues, pain, or concerns about supply?", intent: "lactation assessment" },
          { en: "Have you thought about contraception? It's actually possible to ovulate before your first period, so this isn't something to wait on.", intent: "contraception counseling" },
          { en: "Pelvic floor physical therapy is something I recommend to everyone after a vaginal delivery — especially if you're having any leaking or pelvic pressure.", intent: "pelvic floor PT referral" },
          { en: "You can return to exercise, sex, and normal activities — listen to your body, but there's no strict six-week rule anymore.", intent: "activity resumption guidance" },
        ],
        vocab: [
          "postpartum depression", "Edinburgh Postnatal Depression Scale", "lochia", "uterine involution",
          "perineal healing", "lactation", "prolactin", "pelvic floor dysfunction", "postpartum thyroiditis", "LARC (long-acting reversible contraception)"
        ],
        challenges: [
          "A patient at her postpartum visit scores a 14 on the Edinburgh scale and admits to crying daily and feeling detached from her baby. Manage this sensitively.",
          "A breastfeeding patient presents with a painful, hot, red area on her breast. Differentiate mastitis from engorgement and discuss management.",
          "A patient who had a fourth-degree laceration at delivery is afraid to resume intercourse. Counsel her about healing, pelvic PT, and when it's safe to try."
        ],
        sampleConversation: [
          { speaker: "learner", en: "Six weeks out — how are you doing overall? How's sleep, how's feeding going, how are you feeling in yourself?" },
          { speaker: "ai", en: "Sleep is rough, obviously. Breastfeeding is going okay now but the first two weeks were really hard. And honestly, I've been feeling kind of… flat? Like I expected to feel happier." },
          { speaker: "learner", en: "I'm really glad you said that. That flatness you're describing — tell me more. Is it just being tired, or is there something else? Feeling disconnected, anxious, tearful?" },
          { speaker: "ai", en: "More tearful than I expected. And sometimes I feel like I don't know what I'm doing and it's overwhelming." },
          { speaker: "learner", en: "What you're describing sounds like it could be postpartum depression — and I want to be clear that this is a medical condition, not a character flaw. About one in five new moms experience it. There are very effective treatments. Can we talk about options?" },
          { speaker: "ai", en: "I was worried about saying something. I felt like I should just be happy." },
        ],
      },
      {
        id: "annual-exam",
        name: "Annual Gynecologic Exam",
        emoji: "📅",
        blurb: "The annual well-woman visit — Pap smear, STI screening, breast exam, and reproductive health counseling.",
        counterpart: "32-year-old woman presenting for an annual gynecologic exam",
        learnerRole: "OB-GYN or GYN NP conducting a well-woman visit",
        toneNote: "Thorough, non-judgmental, and patient-centered. Cervical cancer screening guidelines change — be precise. Create a safe space for sensitive sexual and reproductive health questions.",
        phrases: [
          { en: "At 32, if your last Pap was normal, current guidelines say we do a Pap with HPV co-testing every five years. When was your last one?", intent: "cervical cancer screening" },
          { en: "I'm going to do a breast exam — have you noticed any lumps, nipple discharge, or skin changes you've been concerned about?", intent: "breast exam introduction" },
          { en: "Are you sexually active? And is there anything about your sexual health or contraception you'd like to discuss?", intent: "sexual health history" },
          { en: "I want to offer STI screening today — chlamydia and gonorrhea testing is recommended for sexually active women under 25, and we offer it to anyone who wants it.", intent: "STI screening offer" },
          { en: "Are you having any irregular cycles, pelvic pain, or anything that's been bothering you?", intent: "GYN symptom review" },
          { en: "I'll do the Pap now — you'll feel some pressure and possibly a pinch. Let me know if you need me to stop.", intent: "Pap smear preparation" },
          { en: "Results typically come back in one to two weeks — normal results go through the portal, and we'll call if anything needs follow-up.", intent: "result communication plan" },
        ],
        vocab: [
          "Pap smear (cervical cytology)", "HPV co-testing", "ASCUS", "CIN (cervical intraepithelial neoplasia)",
          "colposcopy", "chlamydia", "gonorrhea", "endometriosis", "PCOS (polycystic ovary syndrome)", "fibroid"
        ],
        challenges: [
          "A patient's Pap comes back ASCUS with high-risk HPV positive. Explain what this means and why you are recommending colposcopy.",
          "A 28-year-old asks you to tie her tubes at her annual visit. Navigate the informed consent conversation about permanent sterilization.",
          "A patient reports painful, heavy periods with pelvic pressure. Evaluate for fibroids versus endometriosis and discuss workup."
        ],
        sampleConversation: [
          { speaker: "learner", en: "So everything on exam looks really normal. I'm going to go ahead and do the Pap — you're due for a co-test, meaning Pap plus HPV together. You'll feel some pressure." },
          { speaker: "ai", en: "Okay. I always hate this part. Can I ask — if the HPV comes back positive, does that mean I have cancer?" },
          { speaker: "learner", en: "That's a really common concern and the answer is no, not at all. HPV is a virus that most sexually active people are exposed to at some point in their lives. Most HPV infections clear on their own. The test just helps us understand your risk and how frequently to screen." },
          { speaker: "ai", en: "So what happens if it's positive?" },
          { speaker: "learner", en: "It depends on the type and on what the Pap shows. If the Pap is normal and it's a lower-risk strain, we'd just recheck in three years. If it's a high-risk strain with any abnormal cells, we'd bring you in for a colposcopy — which is basically a closer look at the cervix." },
          { speaker: "ai", en: "That doesn't sound too bad. Okay, let's just do it." },
        ],
      },
      {
        id: "abnormal-results",
        name: "Abnormal Results & Colposcopy",
        emoji: "🔍",
        blurb: "Managing abnormal cervical cytology — communicating results, counseling about colposcopy, and managing patient anxiety.",
        counterpart: "Patient calling to discuss her Pap result that shows HSIL (high-grade squamous intraepithelial lesion)",
        learnerRole: "OB-GYN or GYN NP communicating abnormal results and planning colposcopy",
        toneNote: "Clear and direct without catastrophizing. Distinguish between abnormal cells and cancer explicitly. Move the patient toward next steps efficiently while addressing fear.",
        phrases: [
          { en: "I'm calling about your Pap result — it showed some abnormal cells called high-grade changes, and I want to explain what that means and what we do next.", intent: "abnormal result communication" },
          { en: "This does not mean you have cancer — what it means is that some cells on your cervix look atypical and we need a closer look.", intent: "cancer fear management" },
          { en: "We're going to bring you in for a colposcopy, which is basically a Pap with magnification — I look at the cervix under a scope and take a small biopsy from any areas that look abnormal.", intent: "colposcopy explanation" },
          { en: "The biopsy is the part that tells us exactly what grade the abnormality is — and that determines whether we need to treat or just watch closely.", intent: "biopsy rationale" },
          { en: "High-grade changes, especially CIN 2 or CIN 3, we typically treat with a LEEP procedure — a quick in-office procedure that removes the abnormal tissue.", intent: "LEEP counseling" },
          { en: "I know this is frightening. The fact that we caught this on screening is exactly how this is supposed to work — we're well ahead of anything serious.", intent: "reassurance" },
          { en: "Can you come in in the next week or two? This isn't an emergency but we don't want to wait months.", intent: "urgency without panic" },
        ],
        vocab: [
          "HSIL", "CIN 2", "CIN 3", "colposcopy", "LEEP (loop electrosurgical excision procedure)",
          "acetowhite epithelium", "biopsy", "endocervical curettage", "transformation zone", "cervical conization"
        ],
        challenges: [
          "A patient with CIN 2 on biopsy is 22 years old. Discuss the option of conservative management versus LEEP given her age and desire for future fertility.",
          "Explain the LEEP procedure to a patient, including what to expect during and after, and its implications for future pregnancies.",
          "A patient with CIN 3 has been followed for two years without treatment. Counsel her about why treatment is now recommended."
        ],
        sampleConversation: [
          { speaker: "learner", en: "Thank you for calling back. I have your Pap results and I want to go over them with you. Your result showed high-grade changes — I know that can sound scary, so let me walk you through what that means." },
          { speaker: "ai", en: "High-grade — is that cancer? I've been panicking since I saw the portal notification." },
          { speaker: "learner", en: "I completely understand — I want to be very clear: this is not a cancer diagnosis. High-grade changes mean there are cells on your cervix that look atypical. They have the potential to develop into cancer over years if untreated, but we are nowhere near that, and we found this exactly when screening is supposed to find it." },
          { speaker: "ai", en: "Okay. Okay. So what happens now?" },
          { speaker: "learner", en: "We bring you in for something called a colposcopy. It's basically a Pap smear with a magnifying scope — I look at the cervix very closely and take a small tissue sample from any areas that look abnormal. The biopsy tells us exactly what we're dealing with." },
          { speaker: "ai", en: "Does the biopsy hurt?" },
        ],
      },
      {
        id: "contraception-counseling",
        name: "Contraception Counseling",
        emoji: "💊",
        blurb: "Helping patients choose a contraceptive method — reviewing options, side effects, efficacy, and patient preferences.",
        counterpart: "24-year-old patient who wants to go off the pill and is asking about other options",
        learnerRole: "OB-GYN or GYN NP providing contraception counseling",
        toneNote: "Non-directive and non-judgmental. Present options in a balanced way. Let the patient's priorities (efficacy vs. side effects vs. convenience vs. reversibility) guide the conversation.",
        phrases: [
          { en: "There's no perfect method — it really depends on what matters most to you. What are your priorities — reliability, no hormones, convenience?", intent: "values-based counseling" },
          { en: "The IUD is one of the most effective methods available — more than 99 percent. And it's reversible the same day you take it out.", intent: "IUD efficacy counseling" },
          { en: "The hormonal IUD has almost no systemic absorption — the hormone acts locally in the uterus, so the side effects people worry about from the pill are much less of an issue.", intent: "hormonal IUD explanation" },
          { en: "If you want nothing hormonal at all, the copper IUD is also extremely effective and can stay in for up to ten years.", intent: "copper IUD option" },
          { en: "The implant goes in your arm — quick office procedure, lasts three years, you don't have to think about it at all.", intent: "implant counseling" },
          { en: "Condoms are the only method that also protects against STIs — they can be used alone or alongside another method.", intent: "STI protection discussion" },
          { en: "Some people do really well on the pill for years and others have side effects — if hormones have bothered you before, that's important information.", intent: "prior experience acknowledgment" },
        ],
        vocab: [
          "LARC (long-acting reversible contraception)", "levonorgestrel IUD", "copper IUD (Paragard)",
          "subdermal implant (Nexplanon)", "combined oral contraceptive", "progestin-only pill", "contraceptive efficacy",
          "perfect use vs. typical use", "emergency contraception", "sterilization"
        ],
        challenges: [
          "A patient with a history of migraines with aura asks about the combined oral contraceptive pill. Counsel her on why estrogen-containing methods are contraindicated.",
          "A 19-year-old is interested in an IUD but is worried it will affect her future fertility. Address this concern accurately.",
          "A patient asks about emergency contraception after unprotected sex 36 hours ago. Walk through her options and timelines."
        ],
        sampleConversation: [
          { speaker: "learner", en: "So you're thinking of switching off the pill. What's been the issue with it — side effects, convenience, or just wanting something different?" },
          { speaker: "ai", en: "Mostly mood stuff. I feel like I've been kind of flat emotionally and I wonder if the pill is doing that. I just want to feel like myself again." },
          { speaker: "learner", en: "That's a really valid reason to consider a change. Some people do notice mood effects from combined oral contraceptives. Can I ask — are you interested in staying on some form of hormones, or were you thinking of going non-hormonal entirely?" },
          { speaker: "ai", en: "I'm open to either. I just want something reliable that isn't making me feel weird." },
          { speaker: "learner", en: "So a couple of thoughts. The hormonal IUD releases progesterone very locally — very little gets into your system, which is why the mood effects are much less than the pill. It's also over 99 percent effective and you literally don't think about it. The copper IUD is completely hormone-free if you really want to avoid all hormones, and it's equally effective." },
          { speaker: "ai", en: "I didn't realize the IUD could be non-hormonal. I thought they all had hormones." },
        ],
      },
    ],
    vocabSets: [
      {
        category: "Obstetric Terms",
        emoji: "🤰",
        words: ["gravida", "para", "EDD", "gestational age", "fundal height", "fetal presentation", "amniotic fluid", "placenta", "umbilical cord", "Braxton Hicks"]
      },
      {
        category: "Labor & Delivery",
        emoji: "🏥",
        words: ["effacement", "dilation", "station", "membranes rupture", "Pitocin", "epidural", "cesarean section", "APGAR score", "shoulder dystocia", "postpartum hemorrhage"]
      },
      {
        category: "Gynecologic Conditions",
        emoji: "🔬",
        words: ["endometriosis", "PCOS", "uterine fibroids", "ovarian cyst", "ectopic pregnancy", "PID (pelvic inflammatory disease)", "vulvodynia", "menorrhagia", "dysmenorrhea", "amenorrhea"]
      },
      {
        category: "Screening & Diagnostics",
        emoji: "📊",
        words: ["Pap smear", "HPV test", "transvaginal ultrasound", "NIPT", "amniocentesis", "glucose tolerance test", "Group B strep culture", "fetal non-stress test", "biophysical profile", "colposcopy"]
      },
      {
        category: "Medications & Procedures",
        emoji: "💉",
        words: ["progesterone supplementation", "magnesium sulfate", "betamethasone", "oxytocin", "misoprostol", "LEEP", "D&C (dilation and curettage)", "cerclage", "amniotomy", "episiotomy"]
      },
    ],
  },
];
