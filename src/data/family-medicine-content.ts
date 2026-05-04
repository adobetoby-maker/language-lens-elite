// Curated clinical content for the Family Medicine module.
//
// Phrases reflect the actual language of outpatient primary care — wellness
// visits, chronic disease management, preventive counseling, and the
// bread-and-butter encounters a family physician or NP navigates every day.
//
// Clinical scripts are drawn from widely published frameworks:
//   • AAFP (American Academy of Family Physicians) clinical practice guidelines
//   • PHQ-9 / GAD-7 validated screening tools (Kroenke et al., 2001)
//   • U.S. Preventive Services Task Force (USPSTF) recommendations
//   • Motivational Interviewing (Miller & Rollnick, 3rd ed.)
//   • "The Patient-Centered Medical Home" — NCQA standards
//
// Nothing here is legal, medical, or prescriptive advice for patients.
// All content is for language-learning roleplay only.

export interface ClinicalScript {
  id: string;
  category:
    | "History Taking"
    | "Chronic Disease"
    | "Preventive Care"
    | "Behavioral Health"
    | "Pediatrics"
    | "Geriatrics"
    | "Transitions of Care"
    | "Shared Decision-Making";
  prompt: string;        // What the physician actually says
  context: string;       // When / why this exact phrasing is used
  reference: string;     // Published source or framework
}

// Real attending-level language — the phrases a seasoned family doc uses,
// not the sanitized version from a textbook.
export const CLINICAL_SCRIPTS: ClinicalScript[] = [
  // ── History Taking ──────────────────────────────────────────────────────
  {
    id: "chief-complaint-open",
    category: "History Taking",
    prompt: "What's bringing you in today — tell me in your own words.",
    context: "Open-ended opener for every visit. The pause after matters as much as the question.",
    reference: "Smith's Patient-Centered Interviewing (3rd ed.), ch. 3",
  },
  {
    id: "opqrst-pain",
    category: "History Taking",
    prompt: "When did it start? Does anything make it better or worse? On a scale from zero to ten, what's the pain like right now?",
    context: "OPQRST pain history — onset, provocating/palliating, quality, region, severity, timing — compressed for efficiency.",
    reference: "AAFP Core Curriculum — Clinical Skills",
  },
  {
    id: "medication-reconciliation",
    category: "History Taking",
    prompt: "Can you tell me every medication you're taking — prescription, over-the-counter, vitamins, anything? And are you taking them the way they were prescribed?",
    context: "Medication reconciliation at each visit. Adherence question is embedded, not a separate interrogation.",
    reference: "AHRQ Medication Reconciliation Protocol, 2020",
  },
  {
    id: "social-history-sdoh",
    category: "History Taking",
    prompt: "I want to ask a few questions about your life outside this office — things like where you live, whether you have enough food at home, and whether you feel safe. These affect your health just as much as your labs do.",
    context: "Framing social determinants of health (SDOH) screening so patients understand why it's relevant.",
    reference: "AAFP Social Determinants of Health Framework, 2018",
  },
  {
    id: "ros-quick",
    category: "History Taking",
    prompt: "Any fevers, significant weight change, or anything else your body has been doing that's new or worrying you?",
    context: "Rapid constitutional review of systems without reading a checklist — keeps conversation flowing.",
    reference: "AMA History and Physical Documentation Guidelines",
  },

  // ── Chronic Disease ──────────────────────────────────────────────────────
  {
    id: "dm2-a1c-result",
    category: "Chronic Disease",
    prompt: "Your A1C came back at 8.2 — that's higher than we want. It tells me your blood sugar has been running higher than it should over the past three months. Let's figure out what's been getting in the way.",
    context: "Delivering an out-of-range A1C without shame language. 'Let's figure out what's been getting in the way' invites collaboration.",
    reference: "ADA Standards of Medical Care in Diabetes, 2025 — Section 4 (Glycemic Goals)",
  },
  {
    id: "htn-lifestyle-first",
    category: "Chronic Disease",
    prompt: "Your blood pressure is 148 over 92 today. Before we talk medication, I want to see what we can do with diet and exercise — losing ten pounds and cutting back on sodium can drop that number as much as a pill can. Are you open to trying that for three months?",
    context: "Stage 1 hypertension (130–159/80–99) where lifestyle modification is first-line per JNC guidelines before prescribing.",
    reference: "ACC/AHA Hypertension Guidelines 2017 — Stage 1 HTN, Class I recommendation",
  },
  {
    id: "copd-exacerbation-plan",
    category: "Chronic Disease",
    prompt: "I want to give you a written action plan — a kind of roadmap for what to do if you notice your breathing getting worse before you can get in to see me. Does that sound useful?",
    context: "COPD action plan — reduces ER visits and hospitalizations. Asking permission before handing it to them increases uptake.",
    reference: "GOLD COPD Guidelines 2024 — Non-pharmacological Management",
  },
  {
    id: "statin-conversation",
    category: "Chronic Disease",
    prompt: "I'm going to recommend you start a statin — a cholesterol medication. Your ten-year risk of a heart attack or stroke is about 12%, and this medication cuts that down to around 8%. The most common side effect is muscle aches, and if that happens, we'll try a different one.",
    context: "Using absolute risk reduction numbers (not relative risk) and naming the most likely side effect up front builds trust and adherence.",
    reference: "ACC/AHA Pooled Cohort Equations; USPSTF Statin Use Recommendation, 2022",
  },
  {
    id: "thyroid-results",
    category: "Chronic Disease",
    prompt: "Your TSH is slightly elevated — that means your thyroid is working harder than it should to keep your hormone level normal. This is called subclinical hypothyroidism, and a lot of patients with this feel completely fine. I want to recheck it in three months before we decide whether to treat it.",
    context: "Explaining subclinical hypothyroidism without triggering unnecessary alarm or premature treatment.",
    reference: "ATA Guidelines for Hypothyroidism, 2014 (still current guidance for subclinical disease)",
  },

  // ── Preventive Care ──────────────────────────────────────────────────────
  {
    id: "colonoscopy-recommendation",
    category: "Preventive Care",
    prompt: "You're 45, which means you're now due for a colonoscopy. I know nobody's excited about that conversation — but colon cancer is one of the most preventable cancers we know of, and catching a polyp now is a completely different situation than finding a cancer later.",
    context: "USPSTF updated colorectal cancer screening start age to 45 in 2021. Normalizing the reaction reduces avoidance.",
    reference: "USPSTF Colorectal Cancer Screening Recommendation, 2021",
  },
  {
    id: "mammogram-shared-decision",
    category: "Preventive Care",
    prompt: "Mammography guidelines have changed — there's now a recommendation to start at 40 rather than 50 for average-risk women. The tradeoff is more callbacks and biopsies for things that turn out to be benign. I want to walk you through both sides so we can decide together what makes sense for you.",
    context: "USPSTF 2024 update recommending mammography starting at 40. This is genuinely a shared decision — provider preference should not override patient values.",
    reference: "USPSTF Breast Cancer Screening Recommendation, 2024",
  },
  {
    id: "vaccine-flu",
    category: "Preventive Care",
    prompt: "We have flu vaccine available today — it takes about two weeks to kick in, so getting it now rather than waiting is worthwhile. Any questions before we go ahead?",
    context: "Presumptive offer ('we have it available') outperforms participatory offer ('would you like one?') — reduces refusal by roughly 30%.",
    reference: "Brewer et al., Presumptive vs. Participatory Announcements, Annals of Internal Medicine 2017",
  },
  {
    id: "lung-cancer-screening",
    category: "Preventive Care",
    prompt: "Based on your smoking history — more than twenty pack-years and you're in your mid-fifties — you qualify for a low-dose CT scan of your chest every year. This is covered by insurance at no cost to you, and it's found lung cancers at early, treatable stages in people just like you.",
    context: "USPSTF lung cancer screening criteria: 50–80 years old, 20 pack-year history, current smoker or quit within 15 years.",
    reference: "USPSTF Lung Cancer Screening Recommendation, 2021",
  },

  // ── Behavioral Health ────────────────────────────────────────────────────
  {
    id: "phq9-open",
    category: "Behavioral Health",
    prompt: "I'm going to ask you nine questions about how you've been feeling over the past two weeks. There are no right or wrong answers — I just want to understand what you're dealing with.",
    context: "Framing the PHQ-9 screen before administering it. Reduces defensiveness and anchors the patient in a two-week timeframe.",
    reference: "Kroenke K, Spitzer RL, Williams JBW. The PHQ-9. J Gen Intern Med. 2001",
  },
  {
    id: "phq9-positive-response",
    category: "Behavioral Health",
    prompt: "Your score today is a 14 — that puts you in the moderate depression range. I want you to know that's not a character flaw; it's something we can treat, the same way we treat high blood pressure. Can we talk about what your options are?",
    context: "PHQ-9 ≥10 is the clinical threshold for major depressive episode. Destigmatizing language before offering treatment options.",
    reference: "PHQ-9 Scoring and Clinical Interpretation — Patient Health Questionnaire",
  },
  {
    id: "audit-alcohol",
    category: "Behavioral Health",
    prompt: "A few quick questions about alcohol — how many drinks do you usually have in a week, and how often do you have four or more in a single sitting?",
    context: "AUDIT-C embedded in casual history-taking. Four drinks in one sitting = standard binge threshold. Normalizing the question by embedding it in the flow of the visit.",
    reference: "AUDIT-C (Alcohol Use Disorders Identification Test) — WHO / USPSTF SBIRT Framework",
  },
  {
    id: "brief-mi-change-talk",
    category: "Behavioral Health",
    prompt: "On a scale from one to ten, how important is it to you personally to quit smoking? And what would need to be different for that number to go up?",
    context: "Motivational Interviewing readiness ruler. The second question ('what would need to be different') elicits the patient's own change talk without pushing.",
    reference: "Miller WR, Rollnick S. Motivational Interviewing, 3rd ed. (2013), ch. 7",
  },

  // ── Pediatrics ──────────────────────────────────────────────────────────
  {
    id: "wcc-developmental",
    category: "Pediatrics",
    prompt: "She's 18 months now — she should be saying around 10 to 20 words by this point. Is she pointing at things she wants? Does she bring you objects to show you? Those are the things I'm watching for at this age.",
    context: "18-month well child check developmental surveillance using AAP Bright Futures milestones — walking, functional words, joint attention.",
    reference: "AAP Bright Futures Guidelines, 4th ed. — 18-Month Visit",
  },
  {
    id: "vaccine-hesitancy-parent",
    category: "Pediatrics",
    prompt: "I hear that you're worried. Can you tell me what specifically concerns you? I ask because there's a lot of misinformation out there, and I want to address what you're actually worried about, not what I assume you've heard.",
    context: "Opening response to vaccine hesitancy — listening before educating. The American Academy of Pediatrics recommends acknowledging concern before providing information.",
    reference: "AAP Vaccine Hesitancy Communication Framework, 2023",
  },
  {
    id: "pediatric-fever-counseling",
    category: "Pediatrics",
    prompt: "A fever is actually a sign your child's immune system is working. The number on the thermometer matters less than how your child looks and acts. If they're drinking fluids, comfortable with Tylenol, and not struggling to breathe, watching at home is usually the right call.",
    context: "Fever phobia counseling — parents often over-present to ERs for fevers that don't require evaluation.",
    reference: "AAP Clinical Practice Guideline — Fever and Antipyretic Use in Children, 2011 (reaffirmed 2024)",
  },

  // ── Geriatrics ──────────────────────────────────────────────────────────
  {
    id: "fall-risk-screen",
    category: "Geriatrics",
    prompt: "Have you had any falls in the past year, or any moments where you felt like you might fall? A lot of people don't mention it because they feel embarrassed, but a fall at your age is a medical issue — it's not clumsiness.",
    context: "CDC STEADI (Stopping Elderly Accidents, Deaths & Injuries) fall risk screen. Destigmatizing the question significantly increases disclosure.",
    reference: "CDC STEADI Initiative — Algorithm for Fall Risk Screening, 2023",
  },
  {
    id: "polypharmacy-review",
    category: "Geriatrics",
    prompt: "You're on seven medications right now. With that many, I want to go through each one and ask: Is it still doing what it was started for? Is the dose still right? And is there anything we can safely stop?",
    context: "Deprescribing conversation — patients on ≥5 medications are at significantly elevated risk of adverse drug events. Opening the review without implying the patient did something wrong.",
    reference: "Beers Criteria for Potentially Inappropriate Medication Use in Older Adults, AGS 2023",
  },
  {
    id: "advance-directive",
    category: "Geriatrics",
    prompt: "I want to ask about something we should all have documented but most of us put off — if you were ever in a situation where you couldn't speak for yourself, who would make medical decisions for you? And have you ever thought about what you'd want done — or not done — in that situation?",
    context: "ACP (Advance Care Planning) conversation opener. Framing it as something 'we should all have' removes the end-of-life stigma.",
    reference: "ACP Conversation Guide — The Conversation Project / IHI",
  },

  // ── Transitions of Care ──────────────────────────────────────────────────
  {
    id: "discharge-followup",
    category: "Transitions of Care",
    prompt: "I see you were in the hospital last week for your heart failure. I want to go over what changed while you were there — any new medications, anything that was stopped, and what symptoms to watch for. The first two weeks after discharge are actually the highest-risk period.",
    context: "Post-hospitalization visit. Research shows early PCP follow-up within 7 days cuts 30-day readmission rates significantly.",
    reference: "AHRQ Re-Engineered Discharge (RED) Toolkit — Transition of Care Best Practices",
  },
  {
    id: "specialist-referral-explanation",
    category: "Transitions of Care",
    prompt: "I'm going to have you follow up with cardiology — I'm a little concerned about what I'm hearing on your heart exam and I want a specialist's opinion before I decide what to do next. That's not me saying something is definitely wrong; it's me making sure we don't miss anything.",
    context: "Explaining a specialty referral without catastrophizing. Patients often interpret 'I'm sending you to a specialist' as worse news than it is.",
    reference: "AAFP Care Coordination Toolkit — Referral Communication Standards",
  },

  // ── Shared Decision-Making ────────────────────────────────────────────────
  {
    id: "sdm-options-framework",
    category: "Shared Decision-Making",
    prompt: "There are actually three reasonable paths here, and I don't think one is clearly right for everyone. Let me walk you through each one, including what we know about the tradeoffs, and then I want to hear what matters most to you.",
    context: "Core SDM language — opening a three-option conversation. Avoids the hidden agenda of presenting options in a leading order.",
    reference: "Elwyn G et al. Shared Decision Making: A Model for Clinical Practice. J Gen Intern Med. 2012",
  },
  {
    id: "sdm-values-clarification",
    category: "Shared Decision-Making",
    prompt: "Some patients in your situation prioritize avoiding side effects above everything else. Others are most focused on not having to take a pill every day. And some just want whatever gives them the best odds, full stop. Where do you fall on that?",
    context: "Values clarification before a treatment decision. Works for contraception, cancer screening, joint replacement, psychiatric medication, etc.",
    reference: "Ottawa Personal Decision Guide — Ottawa Research Institute",
  },
];

// Vocabulary sets organized by clinical domain — not a flat list.
export interface ClinicalVocabSet {
  category: string;
  emoji: string;
  domain: string; // Which clinical area this vocab set belongs to
  words: string[];
}

export const FAMILY_MED_VOCAB: ClinicalVocabSet[] = [
  {
    category: "Vitals & Assessment",
    emoji: "📊",
    domain: "General",
    words: [
      "blood pressure",
      "heart rate",
      "BMI",
      "oxygen saturation",
      "temperature",
      "weight",
      "growth chart",
      "baseline",
    ],
  },
  {
    category: "Chronic Disease",
    emoji: "🩺",
    domain: "Chronic Disease Management",
    words: [
      "A1C",
      "hemoglobin A1C",
      "fasting glucose",
      "insulin resistance",
      "LDL",
      "triglycerides",
      "TSH",
      "creatinine",
    ],
  },
  {
    category: "Medications",
    emoji: "💊",
    domain: "Pharmacology",
    words: [
      "statin",
      "metformin",
      "lisinopril",
      "beta-blocker",
      "diuretic",
      "inhaler",
      "refill",
      "adherence",
    ],
  },
  {
    category: "Preventive Care",
    emoji: "🛡️",
    domain: "Prevention",
    words: [
      "screening",
      "colonoscopy",
      "mammogram",
      "Pap smear",
      "vaccine",
      "immunization",
      "bone density",
      "skin check",
    ],
  },
  {
    category: "Behavioral Health",
    emoji: "🧠",
    domain: "Mental Health",
    words: [
      "depression",
      "anxiety",
      "PHQ-9",
      "GAD-7",
      "sleep",
      "appetite",
      "fatigue",
      "counseling",
    ],
  },
  {
    category: "Patient Education",
    emoji: "📋",
    domain: "Communication",
    words: [
      "lifestyle change",
      "diet",
      "exercise",
      "quit smoking",
      "alcohol",
      "stress",
      "follow-up",
      "action plan",
    ],
  },
];

// Clinical contexts — like mission areas, but for care environments.
// These tell the AI how to adjust register, urgency, resource availability,
// and patient population when responding.
export interface ClinicalContext {
  id: string;
  name: string;
  setting: string;
  patientPopulation: string;
  resourceNote: string; // What's different about resources/consultations here
  toneNote: string;     // How physician language shifts in this environment
  typicalChallenges: string[];
}

export const FAMILY_MED_CONTEXTS: ClinicalContext[] = [
  {
    id: "urban-fqhc",
    name: "Urban FQHC",
    setting: "Federally Qualified Health Center, high-volume urban",
    patientPopulation:
      "Uninsured and Medicaid patients, immigrant families, patients with significant SDOH barriers — housing instability, food insecurity, transportation gaps.",
    resourceNote:
      "Same-day access to behavioral health co-location, sliding-scale labs, pharmacy assistance programs. Specialist referrals face long wait times and insurance barriers.",
    toneNote:
      "Plain language is non-negotiable. Use teach-back constantly. Avoid assuming health literacy. Build trust explicitly — many patients have historically distrusted healthcare institutions.",
    typicalChallenges: [
      "Interpret elevated A1C in a patient who can't afford the medication.",
      "Counsel a patient who skipped follow-up due to lack of childcare.",
      "Warm-hand-off to behavioral health co-located in the same building.",
    ],
  },
  {
    id: "rural-critical-access",
    name: "Rural Critical Access Hospital",
    setting: "Rural community, sole provider for 50+ miles",
    patientPopulation:
      "Aging population, farming and ranching community, significant unmet mental health needs, patients who travel long distances for care.",
    resourceNote:
      "No on-site specialist. Telehealth is primary referral pathway. Formulary limitations. Provider often covers ER, inpatient, and outpatient simultaneously.",
    toneNote:
      "Relationships span decades — the physician knows the family. Directness and practical problem-solving are respected. Stoicism is common; patients often minimize symptoms.",
    typicalChallenges: [
      "Manage a new heart failure patient with no local cardiology access.",
      "Conduct a behavioral health visit via telehealth proxy with a reluctant farmer.",
      "Decide when to transfer vs. stabilize-and-treat at a critical access hospital.",
    ],
  },
  {
    id: "concierge-direct-primary-care",
    name: "Concierge / Direct Primary Care",
    setting: "Small panel, membership-based, unhurried visits",
    patientPopulation:
      "Higher income, higher health literacy, proactive about preventive care, expect detailed explanations and access to the physician directly.",
    resourceNote:
      "Longer appointments (60–90 minutes), same-day access, direct physician texting. Robust specialist network. Patients often arrive with online research.",
    toneNote:
      "Collegial, evidence-based, willing to go deep on data. Patients are partners in decision-making. Engage with their research rather than dismissing it.",
    typicalChallenges: [
      "Walk a patient through a functional medicine vs. conventional medicine debate on thyroid treatment.",
      "Counsel a patient who wants to try a GLP-1 agonist purely for weight loss without other metabolic risk factors.",
      "Navigate a patient who arrives with their own 23andMe data and wants to interpret the pharmacogenomics.",
    ],
  },
  {
    id: "urgent-care",
    name: "Urgent Care",
    setting: "Walk-in, acute care, no established patient relationship",
    patientPopulation:
      "Working adults who can't get same-day PCP appointments, patients without a primary care provider, acute illness and minor injury.",
    resourceNote:
      "No longitudinal records without health information exchange. Limited imaging. No ability to follow up on abnormal results — must close the loop through messaging or hand-off instructions.",
    toneNote:
      "Efficient, focused on the chief complaint. Clear discharge instructions are the product of the visit. Always provide a return-precautions plan.",
    typicalChallenges: [
      "Manage an acute URTI in a patient on immunosuppressants without knowing their baseline.",
      "Decide whether to treat or refer a patient with a blood pressure of 172/104 who has no PCP.",
      "Discharge a patient with suspected early appendicitis and clear return-to-ED criteria.",
    ],
  },
  {
    id: "telehealth",
    name: "Telehealth Visit",
    setting: "Video or phone visit, patient at home",
    patientPopulation:
      "Broad — established patients preferring convenience, rural patients, patients with mobility limitations, follow-ups.",
    resourceNote:
      "No physical exam. Lab and imaging orders require patient to travel to a facility. Must assess patient's environment visually — medication bottles, home environment.",
    toneNote:
      "Compensate for absent physical exam with more thorough history. Narrate your clinical reasoning explicitly so the patient understands what you're doing and why. Ask about tech barriers.",
    typicalChallenges: [
      "Assess chest pain severity over video and decide whether the patient needs to come in now.",
      "Reconcile a full medication list using pill bottles the patient holds up to the camera.",
      "Counsel on a new diagnosis of type 2 diabetes without any in-person visit to anchor the conversation.",
    ],
  },
];

export function getFamilyMedContext(id: string | null | undefined): ClinicalContext | null {
  if (!id) return null;
  return FAMILY_MED_CONTEXTS.find((c) => c.id === id) ?? null;
}

export const FAMILY_MED_FREE_RESOURCES = [
  {
    label: "AAFP Clinical Recommendations",
    url: "https://www.aafp.org/family-physicians/patient-care/clinical-recommendations.html",
    note: "American Academy of Family Physicians — clinical practice guidelines, free access.",
  },
  {
    label: "USPSTF Recommendations",
    url: "https://www.uspreventiveservicestaskforce.org/uspstf/recommendation-topics",
    note: "U.S. Preventive Services Task Force — grade A/B preventive care recommendations.",
  },
  {
    label: "PHQ-9 Scoring",
    url: "https://www.phqscreeners.com",
    note: "Patient Health Questionnaire — free validated depression and anxiety screening tools.",
  },
  {
    label: "CDC STEADI (Fall Prevention)",
    url: "https://www.cdc.gov/steadi",
    note: "CDC fall prevention toolkit for older adults — clinical algorithms and patient materials.",
  },
  {
    label: "ADA Standards of Care 2025",
    url: "https://diabetesjournals.org/care/issue/48/Supplement_1",
    note: "American Diabetes Association — annual diabetes management standards, free online.",
  },
] as const;
