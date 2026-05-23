// Curated clinical content for the Cardiology module.
//
// Phrases reflect real attending-level language in academic cath labs,
// community cardiology practices, cardiac ICUs, and outpatient clinics.
// The goal is language a cardiologist actually uses — not a textbook description
// of what a cardiologist does.
//
// Clinical sources:
//   • ACC/AHA Clinical Practice Guidelines (multiple conditions)
//   • AHA/ASA Stroke & Atrial Fibrillation guidelines
//   • ACLS Provider Manual — American Heart Association
//   • Heart Failure Society of America (HFSA) 2022 Comprehensive Guidelines
//   • "Braunwald's Heart Disease" — standard cardiology reference text
//
// Nothing here is legal, medical, or prescriptive advice for patients.
// All content is for language-learning roleplay only.

export interface CardioScript {
  id: string;
  category:
    | "Chest Pain Evaluation"
    | "Arrhythmia"
    | "Heart Failure"
    | "Coronary Disease"
    | "Structural Disease"
    | "Anticoagulation"
    | "Cath Lab"
    | "Risk Stratification"
    | "Difficult Conversations";
  prompt: string;
  context: string;
  reference: string;
}

export const CARDIO_SCRIPTS: CardioScript[] = [
  // ── Chest Pain Evaluation ────────────────────────────────────────────────
  {
    id: "acs-history",
    category: "Chest Pain Evaluation",
    prompt:
      "Tell me about the chest pain — when did it start, does it radiate anywhere, did it come on at rest or with exertion, and what does it feel like? Pressure? Sharp? Squeezing?",
    context:
      "Rapid ACS history — onset, radiation, rest vs. exertion, character. The four questions every cardiologist asks in the first 60 seconds of an acute chest pain presentation.",
    reference: "ACC/AHA NSTEMI Guideline, 2014 — Initial Evaluation and Management",
  },
  {
    id: "stemi-team-activation",
    category: "Chest Pain Evaluation",
    prompt:
      "This EKG shows ST elevation in the anterior leads. I'm activating the cath lab — call the interventional fellow, get the team in, and let's get consent signed. Time is muscle.",
    context:
      "STEMI activation — door-to-balloon time target is under 90 minutes. This phrase triggers a team response. 'Time is muscle' is literal medical language used in cath labs worldwide.",
    reference: "ACC/AHA STEMI Guideline 2013 (updated 2022) — Reperfusion Therapy",
  },
  {
    id: "negative-troponin-reaasurance",
    category: "Chest Pain Evaluation",
    prompt:
      "Your troponins have been negative times two, spaced three hours apart, and your EKG looks clean. That's reassuring for the heart not being the source of this pain. I still want to understand what's causing it, but I can tell you right now it's not a heart attack.",
    context:
      "Two negative high-sensitivity troponins rule out NSTEMI in the appropriate clinical context. Patients need to hear the negative result explicitly.",
    reference: "ESC Guidelines on Acute Coronary Syndromes 2023 — Rapid Rule-Out Algorithms",
  },
  {
    id: "stress-test-indication",
    category: "Chest Pain Evaluation",
    prompt:
      "I want to do a stress test — we're going to walk you on a treadmill while your heart is monitored, and we'll be watching for changes that suggest a part of your heart isn't getting enough blood flow. If you can't walk well enough, we have a medication version instead.",
    context:
      "Pre-test explanation for exercise treadmill test (ETT) or pharmacologic stress. Explaining both options up front avoids patient embarrassment about exercise tolerance.",
    reference: "ACC/AHA Exercise Testing Guideline — Indications and Patient Preparation",
  },

  // ── Arrhythmia ───────────────────────────────────────────────────────────
  {
    id: "afib-new-diagnosis",
    category: "Arrhythmia",
    prompt:
      "Your EKG today shows you're in atrial fibrillation — the top chambers of your heart are beating chaotically instead of squeezing in an organized way. The two things I need to address are your stroke risk and your heart rate. Let me explain both.",
    context:
      "New-onset AFib — structuring the explanation around the two immediate concerns (thromboembolic risk + rate control) before discussing rhythm control prevents overwhelming the patient.",
    reference: "ACC/AHA/HRS Atrial Fibrillation Guideline 2023",
  },
  {
    id: "chads-vasc-anticoag",
    category: "Arrhythmia",
    prompt:
      "Based on your age, your blood pressure history, and your diabetes, your stroke risk score is a 4 out of 9. At that level, the benefit of a blood thinner clearly outweighs the bleeding risk. I'm recommending apixaban — it's one of the newer ones that doesn't require weekly blood tests.",
    context:
      "CHA2DS2-VASc score ≥2 in men, ≥3 in women warrants anticoagulation. Explaining score components and why DOAC over warfarin in accessible terms.",
    reference: "ACC/AHA AFib Guideline 2023 — Stroke Prevention, Class I Recommendation",
  },
  {
    id: "cardioversion-consent",
    category: "Arrhythmia",
    prompt:
      "We're going to do an electrical cardioversion — we'll give you a sedative, you'll be asleep for about 60 seconds, and we'll deliver a synchronized shock that resets your heart rhythm. It's not the same as a defibrillation; it's much lower energy. Most patients don't remember anything.",
    context:
      "Explaining elective electrical cardioversion. Distinguishing from emergency defibrillation reduces fear. 'You won't remember anything' is accurate and reassuring.",
    reference: "AHA/ACC Cardioversion Protocol — Synchronized DCCV Preparation",
  },
  {
    id: "svt-vagal-maneuver",
    category: "Arrhythmia",
    prompt:
      "This looks like SVT — your heart is in a fast, regular rhythm. Before I give you medication, I want to try something that sometimes stops it: I'm going to have you bear down hard, like you're trying to have a bowel movement, for about 15 seconds. Ready?",
    context:
      "Valsalva maneuver for SVT — should be attempted before adenosine per ACLS protocol. The plain-language instruction is critical for the maneuver to be performed correctly.",
    reference: "AHA ACLS Algorithm — Tachycardia with a Pulse (Narrow Complex)",
  },

  // ── Heart Failure ────────────────────────────────────────────────────────
  {
    id: "hf-diagnosis-framing",
    category: "Heart Failure",
    prompt:
      "I want to explain what heart failure actually means, because the name sounds scarier than the reality for most people. It doesn't mean your heart is about to stop — it means your heart muscle isn't pumping as efficiently as it should. With the right medications and monitoring, many patients live well for years.",
    context:
      "Reframing 'heart failure' — this term causes significant distress and catastrophic thinking. Evidence shows patient outcomes improve when the initial framing is accurate and hopeful.",
    reference: "HFSA 2022 Comprehensive Heart Failure Guideline — Patient Education Section",
  },
  {
    id: "hf-fluid-monitoring",
    category: "Heart Failure",
    prompt:
      "I want you to weigh yourself every morning before you eat, after you use the bathroom. If your weight goes up more than three pounds in a day or five pounds in a week, call us before you come in — we may be able to adjust your diuretic over the phone and keep you out of the hospital.",
    context:
      "Daily weight monitoring and fluid management education. This specific instruction — with the exact numbers — is what prevents heart failure readmissions. Vague instructions don't work.",
    reference: "HFSA 2022 Guideline — Self-Care Management; ACC HF Action Plan",
  },
  {
    id: "gdmt-initiation",
    category: "Heart Failure",
    prompt:
      "I want to start you on four medications — an ACE inhibitor, a beta-blocker, a mineralocorticoid antagonist, and an SGLT2 inhibitor. I know that sounds like a lot at once, but these four together have been shown to reduce hospitalizations and extend life in patients with your type of heart failure. We'll titrate them up slowly and I'll be watching your labs closely.",
    context:
      "GDMT (Guideline-Directed Medical Therapy) for HFrEF — all four pillars should be initiated in stable patients. Explaining the 'why' for four new medications reduces discontinuation.",
    reference: "ACC/AHA/HFSA Heart Failure Guideline 2022 — Pharmacotherapy for HFrEF, Class I",
  },
  {
    id: "icd-discussion",
    category: "Heart Failure",
    prompt:
      "Your ejection fraction is 30% after three months of optimal medications. At that level, you're at elevated risk for a sudden cardiac event, and I want to talk about an ICD — an implantable defibrillator. Think of it as a backup system inside your chest that can restart your heart if it ever goes into a dangerous rhythm.",
    context:
      "ICD indication for primary prevention — EF ≤35% with NYHA Class II–III symptoms on GDMT for ≥3 months. The 'backup system' analogy consistently resonates with patients.",
    reference: "ACC/AHA Heart Failure Guideline 2022 — Device Therapy, Class I Recommendation",
  },

  // ── Coronary Disease ─────────────────────────────────────────────────────
  {
    id: "cath-results-normal",
    category: "Coronary Disease",
    prompt:
      "Good news — your coronary arteries are open. No blockages significant enough to explain your symptoms. That doesn't mean your chest pain wasn't real; it means the plumbing isn't the problem. I want to look more carefully at whether the arteries are going into spasm, or whether there's another explanation.",
    context:
      "Communicating a negative coronary angiogram. Patients can feel dismissed if the negative result isn't framed carefully. Acknowledges symptoms while directing next steps.",
    reference:
      "ACC/AHA Chest Pain Guideline 2021 — Chest Pain with Non-Obstructive Coronary Disease (MINOCA/INOCA)",
  },
  {
    id: "stent-explanation",
    category: "Coronary Disease",
    prompt:
      "We found a significant blockage in one of your main coronary arteries — about 90%. We placed a stent, which is a tiny metal scaffold, to hold the artery open. You'll need to take two blood thinners for at least a year. Do not stop either one without calling me first — that's the most important thing I'm going to tell you today.",
    context:
      "Post-PCI instructions. Dual antiplatelet therapy (DAPT) discontinuation is the most preventable cause of stent thrombosis. The emphasis needs to be proportional to the risk.",
    reference: "ACC/AHA PCI Guideline 2021 — DAPT Duration After Stent Placement",
  },
  {
    id: "cabg-vs-pci-discussion",
    category: "Coronary Disease",
    prompt:
      "You have three-vessel disease, and I'm presenting your case to our heart team — cardiology and cardiac surgery together. The data suggests bypass surgery gives better long-term outcomes for patients with your anatomy, but I want you to understand both options before we make that decision.",
    context:
      "Multivessel CAD requiring Heart Team discussion. ACC/AHA mandates shared decision-making and Heart Team review for left main or three-vessel disease.",
    reference: "ACC/AHA Revascularization Guideline 2021 — Heart Team Approach, Class I",
  },

  // ── Anticoagulation ──────────────────────────────────────────────────────
  {
    id: "doac-start",
    category: "Anticoagulation",
    prompt:
      "I'm starting you on apixaban — take it twice a day with or without food. The main thing it does is reduce your stroke risk by about two-thirds. The main risk is bleeding, so let me know about any new bruising, blood in your urine, or bleeding that doesn't stop normally.",
    context:
      "DOAC initiation counseling. Giving the benefit AND the risk in one breath is more effective than a separate 'side effects' speech. Specifying real warning signs ('blood in your urine') is more actionable than 'watch for bleeding.'",
    reference: "ACC Expert Consensus on NOACs/DOACs, 2023 — Patient Counseling",
  },
  {
    id: "doac-bridging-procedure",
    category: "Anticoagulation",
    prompt:
      "You're having surgery next week. I need to know the date, and I'll give you specific instructions on when to stop your blood thinner and when to restart it after. Do not try to figure this out yourself — the timing depends on which procedure you're having and your kidney function.",
    context:
      "DOAC periprocedural management — timing varies by drug half-life and procedure bleeding risk. Explicitly discouraging patient self-management prevents both dangerous bleeding and thrombotic events.",
    reference: "ACC/AHA Periprocedural Anticoagulation Guidance 2022",
  },

  // ── Cath Lab ─────────────────────────────────────────────────────────────
  {
    id: "cath-consent",
    category: "Cath Lab",
    prompt:
      "I'm going to go through the risks with you — they're small but real. Access-site bleeding, contrast reaction, kidney strain, and a very small risk of stroke or heart attack from the procedure itself — nationally about 1 in 1000. If I find a blockage, I may be able to fix it in the same sitting, which is what we call an ad hoc PCI.",
    context:
      "Cardiac catheterization consent. 'Ad hoc PCI' must be mentioned before the procedure — proceeding to intervention without prior consent discussion is a major legal and ethical issue.",
    reference: "ACC/AHA Cardiac Catheterization Guideline — Informed Consent",
  },
  {
    id: "cath-lab-team-briefing",
    category: "Cath Lab",
    prompt:
      "This is a 58-year-old with inferior STEMI, ETA 12 minutes. I want the room set up for right radial access, have IVUS ready in case we need it. Keep heparin drawn — we may need GP IIb/IIIa depending on what I see. Any questions before the patient arrives?",
    context:
      "Pre-procedure cath lab team briefing for a STEMI activation. Anticipating contingencies out loud improves team readiness and reduces decision latency intraoperatively.",
    reference: "ACLS STEMI Protocol — Cath Lab Team Preparation",
  },

  // ── Risk Stratification ──────────────────────────────────────────────────
  {
    id: "pooled-cohort-risk",
    category: "Risk Stratification",
    prompt:
      "I ran your numbers through the pooled cohort equations — your ten-year risk of a major cardiovascular event is 12%. That puts you in a category where a statin is likely to benefit you more than harm you. I'd like to start one, but I also want to hear your thoughts.",
    context:
      "Presenting cardiovascular risk calculator results before a statin discussion. Showing the number and then asking for the patient's perspective is the SDM model.",
    reference: "ACC/AHA Pooled Cohort Equations — 10-Year ASCVD Risk Calculator",
  },
  {
    id: "cardiac-rehab",
    category: "Risk Stratification",
    prompt:
      "Cardiac rehab is covered by your insurance and it's not optional in my mind — it's part of your treatment. Supervised exercise three times a week for twelve weeks lowers your risk of another heart attack by up to 25%. I'm going to write the order before you leave today.",
    context:
      "Cardiac rehab is a Class I recommendation post-MI and post-CABG with utilization rates under 30%. Framing it as non-optional and writing the order before discharge significantly increases enrollment.",
    reference: "ACC/AHA Performance Measure for Cardiac Rehab Referral Post-MI/CABG",
  },

  // ── Difficult Conversations ───────────────────────────────────────────────
  {
    id: "advanced-hf-goals",
    category: "Difficult Conversations",
    prompt:
      "I want to have an honest conversation about where we are. We've maxed out your medications, and your heart is working at about 15% capacity. There are still options — a mechanical heart pump, possibly a transplant evaluation — but I also want to ask what matters most to you, and what you'd want if things got to a point where those options didn't work either.",
    context:
      "Goals of care conversation in advanced heart failure. Leading with what remains possible before asking about limitations honors hope without false promise.",
    reference: "HFSA Palliative Care Position Statement — ACC/AHA Advanced HF Guidelines 2022",
  },
  {
    id: "sudden-cardiac-death-family",
    category: "Difficult Conversations",
    prompt:
      "I know this is devastating. What I can tell you is that we did everything — the team moved immediately when the code was called. I'd like to sit with you for a few minutes if that's okay.",
    context:
      "Notifying family of a cardiac arrest death in the hospital. 'We did everything' is appropriate when it is true. Offering to stay — not leaving after delivering the news — is what families most remember.",
    reference:
      "AHA Resuscitation Science Statement — Communicating with Families After Resuscitation",
  },
];

// Vocabulary organized by clinical domain
export interface CardioVocabSet {
  category: string;
  emoji: string;
  domain: string;
  words: string[];
}

export const CARDIO_VOCAB: CardioVocabSet[] = [
  {
    category: "EKG & Rhythm",
    emoji: "📈",
    domain: "Electrophysiology",
    words: [
      "ST elevation",
      "atrial fibrillation",
      "SVT",
      "heart block",
      "QTc",
      "sinus rhythm",
      "wide complex",
      "delta wave",
    ],
  },
  {
    category: "Heart Failure",
    emoji: "💔",
    domain: "Heart Failure",
    words: [
      "ejection fraction",
      "HFrEF",
      "HFpEF",
      "BNP",
      "diuretic",
      "congestion",
      "edema",
      "dyspnea",
    ],
  },
  {
    category: "Coronary Artery Disease",
    emoji: "🩸",
    domain: "Interventional Cardiology",
    words: [
      "troponin",
      "catheterization",
      "stent",
      "bypass",
      "stenosis",
      "plaque",
      "reperfusion",
      "TIMI flow",
    ],
  },
  {
    category: "Medications",
    emoji: "💊",
    domain: "Pharmacology",
    words: [
      "anticoagulant",
      "beta-blocker",
      "ACE inhibitor",
      "statin",
      "apixaban",
      "aspirin",
      "nitrate",
      "diuretic",
    ],
  },
  {
    category: "Procedures & Devices",
    emoji: "🔧",
    domain: "Cardiac Devices",
    words: [
      "ICD",
      "pacemaker",
      "LVAD",
      "ablation",
      "cardioversion",
      "echocardiogram",
      "stress test",
      "cardiac rehab",
    ],
  },
  {
    category: "Risk & Prevention",
    emoji: "🛡️",
    domain: "Prevention",
    words: [
      "ASCVD risk",
      "Framingham",
      "hypertension",
      "diabetes",
      "smoking cessation",
      "LDL goal",
      "BMI",
      "metabolic syndrome",
    ],
  },
];

// Clinical contexts — care environments that change how the AI responds
export interface CardiologyClinicalContext {
  id: string;
  name: string;
  setting: string;
  patientPopulation: string;
  resourceNote: string;
  toneNote: string;
  typicalChallenges: string[];
}

export const CARDIOLOGY_CONTEXTS: CardiologyClinicalContext[] = [
  {
    id: "academic-medical-center",
    name: "Academic Medical Center",
    setting: "Tertiary/quaternary referral center, teaching hospital",
    patientPopulation:
      "Complex, referred patients — advanced heart failure, rare structural disease, high-risk interventions, clinical trial candidates.",
    resourceNote:
      "Full subspecialty support: EP, structural, interventional, cardiac surgery, MFM for cardiac disease in pregnancy, HF/transplant team. Trainees present at every bedside conversation.",
    toneNote:
      "Presentations are thorough and evidence-referenced. Teaching is woven into clinical encounters. Patient discussions may be observed by residents — model the language you want trainees to replicate.",
    typicalChallenges: [
      "Present a complex HFrEF case on morning rounds and field attending questions.",
      "Discuss an LVAD as bridge-to-transplant with a patient and their family.",
      "Teach a resident the correct consent language for a high-risk PCI.",
    ],
  },
  {
    id: "community-hospital-cath-lab",
    name: "Community Hospital Cath Lab",
    setting: "Community hospital, active interventional program",
    patientPopulation:
      "Local STEMI activations, elective cath referrals from primary care, post-MI follow-up, AFib management.",
    resourceNote:
      "Cardiac surgery may be at a different facility — complex cases requiring emergent CABG require transfer. Direct relationship with referring PCPs is core to the practice model.",
    toneNote:
      "Efficient, protocol-driven. The cardiologist often personally calls the referring physician with results. STEMI protocol language is standardized and rehearsed.",
    typicalChallenges: [
      "Activate the cath lab team for a STEMI coming in by ambulance.",
      "Call the referring PCP with coronary angiogram results and a management plan.",
      "Decide whether to proceed with ad hoc PCI or transfer for CABG.",
    ],
  },
  {
    id: "outpatient-cardiology",
    name: "Outpatient Cardiology Clinic",
    setting: "Ambulatory cardiology — new consults, established follow-up",
    patientPopulation:
      "Stable CAD, managed AFib, post-MI patients, chest pain evaluation, HF optimization, risk factor management.",
    resourceNote:
      "On-site echo, stress testing, and device clinic. Close coordination with primary care for co-management. Phone triage of urgent symptom questions is a daily workflow.",
    toneNote:
      "The relationship is longitudinal. Patients often have been with the same cardiologist for years. Nuance matters — reviewing what changed since the last visit, adjusting medications, explaining why numbers moved.",
    typicalChallenges: [
      "Review a 3-month post-STEMI follow-up and adjust GDMT based on echo results.",
      "Manage an AFib patient whose INR is persistently supratherapeutic.",
      "Counsel a patient about elective cardioversion vs. rate control in persistent AFib.",
    ],
  },
  {
    id: "cardiac-icu",
    name: "Cardiac ICU (CICU)",
    setting: "Intensive care, critically ill cardiac patients",
    patientPopulation:
      "Cardiogenic shock, massive PE, end-stage heart failure, post-arrest, mechanical circulatory support.",
    resourceNote:
      "Invasive hemodynamic monitoring (PA catheters, arterial lines), mechanical support (IABP, Impella, ECMO), continuous telemetry. Hourly decision-making cadence.",
    toneNote:
      "Terse, data-driven at the bedside. Goals of care conversations happen in family meetings outside the room. Orders are specific: exact doses, exact targets, explicit triggers for escalation or de-escalation.",
    typicalChallenges: [
      "Manage a patient in cardiogenic shock: titrate vasopressors and interpret hemodynamic data.",
      "Have a family meeting about withdrawal of mechanical circulatory support.",
      "Communicate an overnight status change to the day team at morning handoff.",
    ],
  },
];

export function getCardiologyContext(
  id: string | null | undefined,
): CardiologyClinicalContext | null {
  if (!id) return null;
  return CARDIOLOGY_CONTEXTS.find((c) => c.id === id) ?? null;
}

export const CARDIOLOGY_FREE_RESOURCES = [
  {
    label: "ACC/AHA Guideline Hub",
    url: "https://www.acc.org/guidelines",
    note: "American College of Cardiology — all major cardiology practice guidelines, free access.",
  },
  {
    label: "AHA Scientific Statements",
    url: "https://www.ahajournals.org/journal/circ",
    note: "Circulation — AHA's flagship journal; guidelines and scientific statements.",
  },
  {
    label: "HFSA Heart Failure Guidelines 2022",
    url: "https://www.onlinejhf.org/article/S1071-9164(22)00076-1/fulltext",
    note: "Heart Failure Society of America — comprehensive 2022 guideline, free access.",
  },
  {
    label: "MDCalc — Cardiology Tools",
    url: "https://www.mdcalc.com/specialty/cardiology",
    note: "Free clinical calculators: CHA2DS2-VASc, TIMI, GRACE, Pooled Cohort Equations, and more.",
  },
  {
    label: "UpToDate Cardiology (Preview)",
    url: "https://www.uptodate.com/contents/search?search=cardiology",
    note: "UpToDate — clinical decision support; subscription required for full access.",
  },
] as const;
