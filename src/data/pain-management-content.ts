// Curated clinical content for the Pain Management module.
//
// Phrases reflect real attending-level language used by pain management
// physicians, CRNAs, and APPs in academic pain centers, community
// interventional clinics, cancer pain/palliative settings, and addiction
// medicine crossover practices.
//
// The goal is language a pain clinician actually uses — not a textbook
// description of what they do.
//
// Clinical sources:
//   • CDC Clinical Practice Guideline for Prescribing Opioids — 2022
//   • ASIPP (American Society of Interventional Pain Physicians) Guidelines
//   • PEG Scale (Pain, Enjoyment, General Activity) — Krebs et al. 2009
//   • Opioid Risk Tool (ORT) — Webster & Webster 2005
//   • DIRE Score — Belgrade et al. 2006
//   • Prescription Drug Monitoring Program (PDMP) — NABP/state programs
//
// Nothing here is legal, medical, or prescriptive advice for patients.
// All content is for language-learning roleplay only.

export interface ClinicalScript {
  id: string;
  category:
    | "Pain History"
    | "Interventional Consent"
    | "Controlled Substance Agreement"
    | "Opioid Taper"
    | "Spinal Cord Stimulator"
    | "Multidisciplinary Handoff"
    | "Difficult Conversation";
  prompt: string; // Exact language the provider says
  context: string; // When/why this exact phrasing
  reference: string; // Real source (guideline, framework, tool)
}

export interface ModuleArea {
  id: string;
  name: string;
  emoji: string;
  blurb: string;
  /** Who the AI plays opposite the learner in this scenario. */
  counterpart: string;
  /** Who the learner is in this scenario. */
  learnerRole: string;
  /** Tone / register guidance for the AI. */
  toneNote: string;
  phrases: Array<{ en: string; intent: string }>;
  vocab: string[];
  /** Practice prompts that kick off an AI roleplay. */
  challenges: string[];
  sampleConversation: Array<{ speaker: "learner" | "ai"; en: string }>;
}

export interface VocabSet {
  category: string;
  emoji: string;
  words: string[];
}

export interface ClinicalContext {
  id: string;
  name: string;
  setting: string;
  patientProfile: string;
  languageNote: string;
}

// ─────────────────────────────────────────────
// CLINICAL SCRIPTS — Real phrasing, real sources
// ─────────────────────────────────────────────

export const PAIN_SCRIPTS: ClinicalScript[] = [
  // ── Pain History ────────────────────────────────────────────────────────
  {
    id: "peg-pain-intensity",
    category: "Pain History",
    prompt:
      "I use three questions to track your pain over time. First: on a scale of 0 to 10, what's your average pain this past week? Second: how much has pain interfered with your enjoyment of life? Third: how much has it interfered with your general activity? Zero means no interference, ten means complete.",
    context:
      "The PEG scale — three items covering Pain intensity, Enjoyment of life, and General activity. Validated for chronic pain monitoring and recommended by the CDC for serial assessment. More predictive than a single NRS score.",
    reference:
      "PEG Scale — Krebs EE et al., J Gen Intern Med 2009. Also: CDC 2022 Clinical Practice Guideline, Recommendation 1.",
  },
  {
    id: "pain-history-functional",
    category: "Pain History",
    prompt:
      "I need to understand not just how much it hurts, but what you can and can't do because of it. Can you sleep through the night? Can you walk a block? Can you work? Those answers matter as much to me as the pain number.",
    context:
      "Functional assessment reframe — the CDC 2022 guideline emphasizes that function and quality of life goals should drive opioid therapy decisions, not pain number alone. Sets the right frame from the first visit.",
    reference:
      "CDC Clinical Practice Guideline for Prescribing Opioids, 2022 — Recommendation 2: Goals, Benefits, and Risks.",
  },
  {
    id: "pain-character-neuropathic",
    category: "Pain History",
    prompt:
      "You used the word burning — and you mentioned it radiates down the leg. I want to ask a few more specific things: does it feel electric, like a shock? Does clothing touching the skin make it worse? Does it wake you at night even when you're not moving?",
    context:
      "Neuropathic pain screening — burning, radiation, allodynia, and night pain are cardinal features. This phrasing opens the Douleur Neuropathique 4 (DN4) screen without naming the tool, keeping the conversation patient-centered.",
    reference:
      "DN4 Questionnaire — Bouhassira et al. Pain 2005. Also: IASP Neuropathic Pain Classification.",
  },
  {
    id: "catastrophizing-screen",
    category: "Pain History",
    prompt:
      "I want to ask something that might seem unusual — but it really matters. When your pain is bad, do you find yourself thinking it will never get better, or that something terrible must be wrong? Not judging you — a lot of people feel that way. I just need to know.",
    context:
      "Pain Catastrophizing Scale screening — catastrophizing is one of the strongest predictors of chronic pain disability and opioid misuse. Normalizing the question improves disclosure.",
    reference:
      "Pain Catastrophizing Scale (PCS) — Sullivan et al. 1995. CDC 2022 Guideline: psychological comorbidities as risk factors.",
  },
  {
    id: "prior-treatment-history",
    category: "Pain History",
    prompt:
      "Walk me through everything you've tried for this pain — physical therapy, injections, medications, surgeries, anything. And tell me honestly what helped, what didn't, and what you stopped because of side effects.",
    context:
      "CDC 2022 Guideline prioritizes establishing adequate trials of non-opioid and non-pharmacologic therapies before initiating opioids. Documenting what's been tried — and why it was stopped — is medicolegally important.",
    reference:
      "CDC 2022 Recommendation 1: Non-opioid therapies are preferred for chronic pain. Documentation of prior treatment required.",
  },

  // ── Interventional Consent ───────────────────────────────────────────────
  {
    id: "esi-consent-benefits",
    category: "Interventional Consent",
    prompt:
      "The epidural steroid injection delivers anti-inflammatory medication directly to the area where the nerve is being irritated. Most patients notice improvement within three to seven days. About 50 to 70 percent of patients get meaningful relief — some for weeks, some for months. A minority don't respond at all, and that itself gives us useful information.",
    context:
      "ESI pre-procedure consent — stating realistic response rates prevents unrealistic expectations. 'Useful information' framing for non-responders maintains therapeutic alliance and opens the door to next-step planning.",
    reference:
      "ASIPP Evidence-Based Guidelines for Interventional Pain Management — Lumbar ESI, 2020.",
  },
  {
    id: "esi-consent-risks",
    category: "Interventional Consent",
    prompt:
      "The risks I want you to know about: there's a small chance of bleeding, infection, or nerve irritation — these are uncommon but real. There's an extremely rare risk of a dural puncture, which can cause a severe headache. And because we use a small amount of steroid, your blood sugar may rise for a day or two if you're diabetic.",
    context:
      "ESI informed consent — covering bleeding, infection, dural puncture, and steroid-related hyperglycemia. The hyperglycemia warning is routinely missed and particularly important for diabetic patients, who must be explicitly counseled.",
    reference: "ASIPP Practice Guidelines — Risks and Complications of Epidural Injections, 2020.",
  },
  {
    id: "nerve-block-laterality",
    category: "Interventional Consent",
    prompt:
      "Before we proceed — I need to confirm with you: which side is your pain on? Right. And the consent form you signed says right as well. We're going to mark the right side together right now, before you go to the procedure room.",
    context:
      "Wrong-site procedure prevention — JCAHO Universal Protocol requires active site marking with patient participation. Stating this out loud, in front of the patient, is both required and reassuring.",
    reference:
      "The Joint Commission Universal Protocol for Preventing Wrong Site, Wrong Procedure, Wrong Person Surgery.",
  },
  {
    id: "fluoroscopy-explanation",
    category: "Interventional Consent",
    prompt:
      "We use live X-ray guidance during this procedure — it's called fluoroscopy. It lets me see exactly where the needle is in real time so I can place it precisely. The radiation exposure is very low — similar to a chest X-ray. If you're pregnant or think you might be, please tell me right now.",
    context:
      "Fluoroscopy-guided procedure explanation — image guidance is standard of care for most spinal interventions per ASIPP. The pregnancy query must always be asked regardless of what's in the chart.",
    reference:
      "ASIPP Practice Guidelines — Image Guidance for Spinal Interventions. ACOG guidance on fluoroscopy in pregnancy.",
  },

  // ── Controlled Substance Agreement ──────────────────────────────────────
  {
    id: "csa-intro",
    category: "Controlled Substance Agreement",
    prompt:
      "Before I prescribe opioids, I need to go through an agreement with you — not as a formality, but because it protects both of us and keeps this safe. I'll explain every part. You're not signing away rights — you're agreeing to the conditions that make this treatment legal and appropriate.",
    context:
      "Controlled Substance Agreement introduction — framing it as mutual protection rather than surveillance improves patient buy-in. CDC 2022 recommends discussing the agreement as a safety tool, not a compliance measure.",
    reference:
      "CDC 2022 Recommendation 5: Informed consent for opioid therapy including risks, benefits, and the treatment plan.",
  },
  {
    id: "pdmp-discussion",
    category: "Controlled Substance Agreement",
    prompt:
      "I'm required by state law to check the prescription monitoring database before I prescribe a controlled substance — and I'll be checking it at every visit. It's not that I distrust you. Every prescriber in this state checks it for every controlled substance patient. It's a safety system.",
    context:
      "PDMP disclosure — CDC 2022 Recommendation 7 and most state laws require PDMP queries before prescribing. Explaining it proactively prevents the patient from feeling singled out and reduces resentment.",
    reference:
      "CDC 2022 Recommendation 7: Check PDMP before prescribing and periodically during therapy. NABP PDMP — all 50 states operational.",
  },
  {
    id: "uds-explanation",
    category: "Controlled Substance Agreement",
    prompt:
      "I do urine drug screens for all my chronic pain patients — not to catch you, but to confirm the medication is being used as prescribed and to make sure there's nothing interacting with it. Occasionally we find medications patients forgot to mention, or confirm the prescribed medication is present. It protects you as much as me.",
    context:
      "Urine drug screen (UDS) in chronic pain practice — CDC 2022 Recommendation 8 supports UDS before initiating opioids and periodically during therapy. Proactive framing reduces stigma and improves the clinical relationship.",
    reference:
      "CDC 2022 Recommendation 8: Consider urine drug testing before starting opioids and periodically during therapy.",
  },
  {
    id: "ort-scoring",
    category: "Controlled Substance Agreement",
    prompt:
      "I'm going to ask you a series of questions that help me understand how to prescribe safely for you. There are no wrong answers — your honesty helps me keep you safe. Family history of substance use, personal history with alcohol or other drugs, any history of depression or anxiety, and age. These factors together shape the safety plan.",
    context:
      "Opioid Risk Tool (ORT) administration — 5-item validated screen for opioid misuse risk. Scores predict aberrant behavior risk (low/moderate/high). CDC 2022 recommends risk assessment before initiating opioids.",
    reference:
      "Opioid Risk Tool (ORT) — Webster LR & Webster RM, Pain Medicine 2005. CDC 2022 Recommendation 4: Assess risk of opioid-related harms.",
  },

  // ── Opioid Taper ─────────────────────────────────────────────────────────
  {
    id: "taper-rationale",
    category: "Opioid Taper",
    prompt:
      "I want to have an honest conversation with you about your current opioid dose. The evidence shows that over time, high doses can actually increase your pain sensitivity — what we call opioid-induced hyperalgesia. Tapering gradually may actually help your pain more than the current dose is.",
    context:
      "Opioid taper framing — leading with opioid-induced hyperalgesia (OIH) reframes taper as benefit, not punishment. CDC 2022 strongly supports dose reduction for patients on high doses. This language is less adversarial than citing risk alone.",
    reference:
      "CDC 2022 Recommendation 5 and 6: Reassess benefits and harms; taper to lowest effective dose or discontinue when risks outweigh benefits. Opioid-induced hyperalgesia: Chu et al. J Pain 2008.",
  },
  {
    id: "taper-pace",
    category: "Opioid Taper",
    prompt:
      "I want to be clear — we are not stopping this abruptly. We'll reduce slowly, usually no more than 10 percent every two to four weeks. You will feel some discomfort as your body adjusts, and I'll be here with you through every step. If a reduction is too much too fast, we slow down. This is a collaboration.",
    context:
      "Taper pace and withdrawal counseling — CDC 2022 recommends slow, individualized taper rates. Abrupt discontinuation causes withdrawal and is associated with patient harm including overdose from relapse. Explicitly saying 'collaboration' reduces fear of abandonment.",
    reference:
      "CDC 2022 Recommendation 6: Individualize taper pace based on patient response. HHS Guide to Opioid Tapering 2019.",
  },
  {
    id: "taper-patient-concern",
    category: "Opioid Taper",
    prompt:
      "I hear you — and I want to be honest. The concern I have is that at this dose, the risks are significant: falls, cognitive effects, overdose risk. I'm not doing this to abandon you. I'm doing this because I believe you deserve a safer path to better function. Your comfort during the process is part of my job.",
    context:
      "Managing patient resistance to taper — acknowledging the patient's fear directly while restating the clinical rationale. CDC 2022 warns against abrupt discontinuation when patients express concerns; sustained engagement is the goal.",
    reference:
      "CDC 2022 Recommendation 6: Do not abruptly discontinue. Patient-centered communication: SAMHSA Clinical Advisory 2020.",
  },

  // ── Spinal Cord Stimulator ────────────────────────────────────────────────
  {
    id: "scs-candidate-criteria",
    category: "Spinal Cord Stimulator",
    prompt:
      "You've had two surgeries and significant pain for over two years. You've done physical therapy, tried multiple medications, and had a course of injections with partial benefit. At this point, spinal cord stimulation is something I think we should discuss seriously — you're the kind of patient who tends to respond well.",
    context:
      "SCS candidacy — standard criteria include chronic neuropathic pain, failed conservative and interventional therapy, and absence of significant psychological barriers. Establishing the patient's treatment history before the SCS conversation is essential.",
    reference:
      "ASIPP Practice Guidelines — Spinal Cord Stimulation 2021. North RB et al., Neurosurgery 2007.",
  },
  {
    id: "scs-trial-explanation",
    category: "Spinal Cord Stimulator",
    prompt:
      "What makes spinal cord stimulation unusual is that we do a trial first — before any permanent implant. For about a week, you'll have temporary leads placed in your back connected to an external battery. You go home and live your life. If your pain improves by at least 50 percent, we consider it a success and move to permanent implant.",
    context:
      "SCS trial explanation — the trial-to-implant pathway is unique to SCS and a key differentiator from other procedures. The 50% improvement threshold is the standard evidence-based success criterion.",
    reference:
      "ASIPP SCS Guidelines 2021 — Trial Phase Criteria. Deer TR et al., Neuromodulation 2017 (NACC Consensus).",
  },
  {
    id: "scs-paresthesia",
    category: "Spinal Cord Stimulator",
    prompt:
      "Older-style stimulators produce a tingling sensation over the painful area — called paresthesia. Newer high-frequency and burst-mode devices work subthreshold, meaning you feel nothing at all. I'll explain the options and we'll decide based on what's been shown to work best for your type of pain.",
    context:
      "SCS modality explanation — paresthesia-based vs. high-frequency (HF10) vs. burst stimulation. HF10 has shown superiority in some RCTs for back and leg pain. Patient-centered modality discussion improves shared decision-making.",
    reference:
      "Kapural et al. Neurosurgery 2016 (SENZA-RCT) — HF10 vs. paresthesia-based SCS. Deer TR et al. Neuromodulation 2022.",
  },
  {
    id: "scs-psychological-clearance",
    category: "Spinal Cord Stimulator",
    prompt:
      "Before we can schedule the trial, I'm going to refer you for a psychological evaluation — this is required, and it's genuinely helpful. The psychologist is on our team. They're not looking for a reason to exclude you. They're making sure we're setting you up for the best possible outcome.",
    context:
      "Mandatory psychological evaluation for SCS — required by most insurers and considered standard of care. Patients often feel screened out or judged; reframing the eval as outcome optimization reduces resistance.",
    reference:
      "ASIPP SCS Guidelines 2021 — Psychosocial Evaluation Requirements. Celestin J et al., Pain Med 2009.",
  },

  // ── Multidisciplinary Handoff ─────────────────────────────────────────────
  {
    id: "mdt-referral-pt",
    category: "Multidisciplinary Handoff",
    prompt:
      "I'm referring you to our physical therapist who specializes in pain rehabilitation. I want to be direct: the goal is not just to stretch and exercise — it's to retrain how your nervous system interprets movement signals. It's called graded motor imagery and pain neuroscience education, and the evidence is very strong.",
    context:
      "PT referral with pain neuroscience framing — generic PT referrals are frequently dismissed by chronic pain patients. Naming the specific approach (PNE, GMI) increases engagement and sets accurate expectations.",
    reference:
      "Louw A et al., Phys Ther 2011 — Pain neuroscience education meta-analysis. Moseley GL, Graded Motor Imagery.",
  },
  {
    id: "mdt-referral-psych",
    category: "Multidisciplinary Handoff",
    prompt:
      "I'd like to bring our psychologist into your care — not because the pain is in your head, but because the brain is where pain is processed, and psychological tools like CBT have some of the best evidence for chronic pain of anything we have. I use it as a first-line treatment, not a last resort.",
    context:
      "Psychology referral framing for chronic pain — the phrase 'not because the pain is in your head' directly pre-empts the most common patient fear and resistance. CBT for chronic pain has Level I evidence.",
    reference:
      "Williams AC et al., Cochrane Review 2020 — CBT for Chronic Pain. CDC 2022: Non-pharmacologic therapies preferred.",
  },
  {
    id: "mdt-epic-handoff",
    category: "Multidisciplinary Handoff",
    prompt:
      "I'm sending a warm handoff note to Dr. Reyes in addiction medicine. She's expecting your call. I want to be clear about what I'm doing and why: this isn't a referral away — I stay involved in your pain management. She addresses the addiction medicine piece while I handle the pain. We coordinate closely.",
    context:
      "Warm handoff to addiction medicine — clearly stating continued involvement prevents patients from feeling abandoned at the most vulnerable point. Coordinated care between pain and addiction medicine is best practice for patients with OUD and chronic pain.",
    reference:
      "SAMHSA-HRSA Integrated Care Models. CDC 2022 — Concurrent management of OUD and chronic pain.",
  },
  {
    id: "mdt-oncology-pain",
    category: "Multidisciplinary Handoff",
    prompt:
      "I've reviewed Dr. Kim's oncology notes and I've spoken with her this morning. The pain you're having is directly related to the tumor's location on the nerve root — that's important because it guides what I can offer. I'm also going to loop in palliative care, whose job is specifically quality of life, not end of life.",
    context:
      "Cancer pain — clarifying palliative care's scope prevents patients from interpreting the consult as a sign of imminent death. Early palliative care integration improves quality of life and has been shown to extend survival in some settings.",
    reference:
      "Temel JS et al., NEJM 2010 — Early palliative care in NSCLC. WHO Cancer Pain Ladder.",
  },

  // ── Difficult Conversation ────────────────────────────────────────────────
  {
    id: "aberrant-behavior-confrontation",
    category: "Difficult Conversation",
    prompt:
      "I need to talk to you about something I found in our drug monitoring database. I'm not here to accuse you — I want to understand what's happening. The database shows you received a controlled substance prescription from a different provider last month that wasn't reported to me. That's what the agreement we signed addresses. Help me understand.",
    context:
      "PDMP-detected concurrent prescribing — leading with 'help me understand' rather than accusation preserves therapeutic alliance and may reveal explanations (ER visit, dental, trauma). Documentation of this conversation is essential.",
    reference:
      "CDC 2022 Recommendation 7: PDMP-detected concerning findings should prompt patient discussion. State PDMP query requirements.",
  },
  {
    id: "positive-uds-redirect",
    category: "Difficult Conversation",
    prompt:
      "Your urine test showed a substance that wasn't prescribed — I want to talk about that before we do anything else. I'm not here to end your treatment. I'm here to understand what's happening in your life right now, because something clearly is, and I'd rather know than not know.",
    context:
      "Positive UDS for non-prescribed substance — punitive responses are associated with undertreated pain and patient dropout. This language opens the door to disclosure and referral rather than triggering defensiveness and disenrollment.",
    reference:
      "CDC 2022 — Approach aberrant results with a health-focused conversation. SAMHSA 2020 — Stigma-free communication in SUD.",
  },
  {
    id: "discharge-from-practice",
    category: "Difficult Conversation",
    prompt:
      "This is the most difficult conversation I have in this practice, and I want to be honest with you. Because of what's happened — the repeated policy violations — I'm not able to continue prescribing controlled substances to you. But I'm not abandoning you. I'm referring you to an addiction medicine program that can offer better treatment for what you're dealing with, which I believe is now larger than just pain management.",
    context:
      "Discharge from controlled substance practice — CDC 2022 and ASIPP guidelines state that practice dismissal must include appropriate referral and 30-day bridge supply if clinically safe. Explaining the referral as a clinical upgrade, not a punishment, is both ethical and legally protective.",
    reference:
      "CDC 2022 — Patient safety when discontinuing opioids. AMA Council on Ethical and Judicial Affairs — Patient abandonment guidelines.",
  },
  {
    id: "goals-of-care-recalibration",
    category: "Difficult Conversation",
    prompt:
      "I want to revisit the goals we set at the start — because I think we owe it to each other to be honest. You started at a pain score of 8. After two years of treatment, you're still at a 7. Your function hasn't improved significantly. That tells me the current treatment plan isn't working well enough, and I'd rather acknowledge that and change course than keep doing the same thing.",
    context:
      "Goals of care recalibration — CDC 2022 Recommendation 2 requires periodic reassessment of treatment goals and explicit reassessment when outcomes aren't met. Naming the gap between stated goals and outcomes opens the conversation for honest redirection.",
    reference:
      "CDC 2022 Recommendation 2: Establish goals and reassess them; modify treatment when goals are not being met.",
  },
];

// ─────────────────────────────────────────────
// MODULE AREAS — Scenario-based roleplay
// ─────────────────────────────────────────────

export const PAIN_AREAS: ModuleArea[] = [
  {
    id: "new-patient-pain-history",
    name: "New Patient Pain History",
    emoji: "📋",
    blurb:
      "First visit with a chronic pain patient — establishing history, setting functional goals, assessing risk, and ordering baseline measures. The first appointment shapes the entire treatment relationship.",
    counterpart:
      "New patient presenting with chronic low back pain, neck pain, or complex regional pain syndrome.",
    learnerRole: "Pain management physician or APP conducting a new patient evaluation",
    toneNote:
      "Thorough and unhurried without being exhausting. Patients with chronic pain have often been dismissed or disbelieved — they need to feel genuinely heard before anything clinical happens. Ask about function, not just pain intensity.",
    phrases: [
      {
        en: "Tell me about the pain in your own words — when it started, what brought it on, and how it's changed your daily life.",
        intent: "Open-ended pain history with functional framing",
      },
      {
        en: "On a scale of zero to ten — what's your average pain over the last week, not your worst moment?",
        intent: "PEG item 1 — Pain intensity, averaged not peak",
      },
      {
        en: "How much has this pain interfered with your enjoyment of life? Zero means it hasn't at all, ten means completely.",
        intent: "PEG item 2 — Enjoyment of life",
      },
      {
        en: "And how much has it changed what you can do day to day — work, chores, moving around?",
        intent: "PEG item 3 — General activity interference",
      },
      {
        en: "What's worked before, even partially? And what have you tried that made things worse or had side effects you couldn't tolerate?",
        intent: "Establish prior treatment history for CDC documentation",
      },
      {
        en: "I'm going to ask a few questions about personal and family history — they help me understand how to prescribe safely for you.",
        intent: "Introduce Opioid Risk Tool screening without stigma",
      },
      {
        en: "My goal for you isn't a zero pain score — that's usually not realistic with chronic pain. My goal is for you to function better and have a better quality of life. Let's define together what that looks like.",
        intent: "Set realistic functional goals per CDC 2022 Recommendation 2",
      },
      {
        en: "Before your next visit, I'm ordering a urine drug screen and checking the prescription monitoring database — this is routine for all my patients before I prescribe anything controlled.",
        intent: "Introduce UDS and PDMP proactively, normalize it",
      },
    ],
    vocab: [
      "PEG scale",
      "functional assessment",
      "Opioid Risk Tool",
      "PDMP",
      "baseline UDS",
      "nociceptive",
      "neuropathic",
      "central sensitization",
      "catastrophizing",
      "fear-avoidance",
    ],
    challenges: [
      "Conduct a first-visit pain history with a patient who has been on high-dose opioids at another practice for three years and expects to continue.",
      "Administer the PEG scale and explain why you use it instead of just a single pain number.",
      "Screen for opioid misuse risk using ORT items without making the patient feel interrogated.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Tell me about the pain in your own words — not just the number, but how it's changed your life.",
      },
      {
        speaker: "ai",
        en: "It started four years ago after a car accident. I was in PT, tried injections — nothing helped. My last doctor put me on Norco. I'm taking four a day and I still can't sleep.",
      },
      {
        speaker: "learner",
        en: "Four a day — I appreciate you being direct about that. I want to understand what you can and can't do. Are you working? Can you walk a block? Drive?",
      },
      {
        speaker: "ai",
        en: "I stopped working two years ago. I can walk maybe half a block before it gets too bad. I drive short distances.",
      },
      {
        speaker: "learner",
        en: "That tells me the current treatment isn't meeting your functional goals — not just the pain number. I want to build a real plan for you, but I need to do a full assessment first. I'll check the prescription database and do a baseline urine screen — that's standard for everyone I see. We'll go over results together.",
      },
    ],
  },
  {
    id: "interventional-procedure-consent",
    name: "Interventional Procedure Consent",
    emoji: "💉",
    blurb:
      "Pre-procedure consent for epidural steroid injections, nerve blocks, and other interventional procedures — covering mechanism, realistic benefits, risks, and fluoroscopic guidance.",
    counterpart:
      "Patient preparing for lumbar ESI, cervical medial branch block, or celiac plexus block.",
    learnerRole: "Pain physician or CRNA obtaining procedure consent",
    toneNote:
      "Informed and reassuring without false promises. Quote realistic response rates. The patient should walk in expecting to possibly feel better — not expecting a cure.",
    phrases: [
      {
        en: "The injection delivers anti-inflammatory medication directly to the source of the nerve irritation — it's more targeted than anything you take by mouth.",
        intent: "Explain ESI mechanism vs. oral medication",
      },
      {
        en: "About 50 to 70 percent of patients get meaningful relief. That might last weeks or months. Some don't respond — and that's useful information too, because it tells us where to look next.",
        intent: "Quote evidence-based ESI success rates honestly",
      },
      {
        en: "I'm going to confirm the site with you before we go in — right side, L4-5 level. Please tell me if that matches where your pain is.",
        intent: "Universal Protocol active site verification",
      },
      {
        en: "We use live X-ray to guide the needle. You'll hear some clicks and feel some pressure — tell me if anything feels sharp or shoots down your leg.",
        intent: "Fluoroscopy guidance explanation and warning signs",
      },
      {
        en: "If you're diabetic, your blood sugar may run high for one to two days after — that's the steroid. It normalizes on its own, but please monitor it.",
        intent: "Steroid hyperglycemia consent — commonly omitted",
      },
      {
        en: "You'll be here about an hour total — 20 minutes lying on the table, then observation. Arrange a ride home; we don't let patients drive after sedation.",
        intent: "Logistics and post-procedure instructions",
      },
      {
        en: "Any questions before we walk back? There are no questions too small — this is your body.",
        intent: "Open invitation to questions before procedure start",
      },
    ],
    vocab: [
      "epidural steroid injection",
      "fluoroscopy",
      "contrast dye",
      "dural puncture",
      "post-dural puncture headache",
      "medial branch block",
      "transforaminal",
      "radiofrequency ablation",
      "celiac plexus",
    ],
    challenges: [
      "Obtain informed consent for a lumbar ESI with a patient who has had one before and says 'just do it, I know what it is' — but hasn't acknowledged the risks.",
      "Explain a post-procedure post-dural puncture headache to a patient who calls in two days later with a severe headache.",
      "Walk through site verification with a patient who is confused about which side is being treated.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Before we walk back, I want to go over what we're doing today and make sure you're comfortable. You're here for a right-sided L4-5 epidural steroid injection. Can you confirm — the pain is on the right, radiating down the right leg?",
      },
      {
        speaker: "ai",
        en: "Yes — right side, right down to my foot sometimes.",
      },
      {
        speaker: "learner",
        en: "Good — that matches. The injection goes right where the nerve is being irritated. Realistically, about 60 percent of patients feel significant improvement within a week. A minority don't respond, and that's still useful because it helps me rule things in or out.",
      },
      {
        speaker: "ai",
        en: "Are there risks? My neighbor had one and ended up with a horrible headache.",
      },
      {
        speaker: "learner",
        en: "That's a real risk — it's called a post-dural puncture headache and it happens when the needle accidentally touches the dura, the covering around the spinal cord. It's uncommon — maybe 1 in 100 — and if it happens, it's treatable. I'll be using live X-ray guidance the whole time. Are you diabetic? The steroid can raise blood sugar for a day or two.",
      },
    ],
  },
  {
    id: "controlled-substance-agreement",
    name: "Controlled Substance Agreement",
    emoji: "📝",
    blurb:
      "Reviewing and signing a controlled substance agreement — explaining the terms, the monitoring requirements, and the clinical rationale in a way that is informative, not punitive.",
    counterpart: "Patient being initiated on opioid therapy for chronic pain.",
    learnerRole: "Pain physician or APP initiating opioid therapy",
    toneNote:
      "Collaborative and transparent. This conversation determines whether the patient understands and accepts the terms of safe opioid therapy. Read every clinical sign for resistance — resistance often signals a history that needs to be heard.",
    phrases: [
      {
        en: "This agreement is not about not trusting you — it's the same document every patient who receives controlled substances in this practice signs. Let me walk you through it.",
        intent: "Normalize the CSA, reduce patient defensiveness",
      },
      {
        en: "You agree to take the medication only as prescribed — no sharing, no borrowing, and please store it in a locked box or a medicine safe at home.",
        intent: "Explain safe storage requirement with why",
      },
      {
        en: "I'm going to check the state prescription database before every prescription. That's state law, and it also protects you — it alerts me if there's an interaction or duplicate I don't know about.",
        intent: "PDMP disclosure framed as protection, not surveillance",
      },
      {
        en: "I'll ask for random urine drug screens — this confirms the medication is in your system and there's nothing unsafe interacting with it. If you're ever called for one, it's truly random and not a sign I'm concerned.",
        intent: "Random UDS disclosure without stigma",
      },
      {
        en: "If you lose a prescription, I cannot replace it — that's a term I enforce consistently. I know that sounds strict, but it's both a legal and safety requirement.",
        intent: "Lost prescription policy — state clearly upfront to prevent conflict later",
      },
      {
        en: "If you ever feel like the medication isn't working or you want to stop, call me — please don't just stop on your own. Going off opioids abruptly can be medically dangerous.",
        intent: "Prevent abrupt self-discontinuation",
      },
    ],
    vocab: [
      "controlled substance agreement",
      "PDMP",
      "random UDS",
      "pill count",
      "safe storage",
      "naloxone",
      "co-prescribing",
      "morphine milligram equivalents",
      "MME",
      "diversion",
    ],
    challenges: [
      "Review a controlled substance agreement with a patient who pushes back on the urine drug screen requirement.",
      "Explain the PDMP check to a patient who takes it as a sign of distrust and becomes agitated.",
      "Prescribe naloxone alongside an opioid prescription and explain what it is and when to use it.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Before I write the first prescription, we need to review this agreement together. This isn't unique to you — every patient I have on a controlled substance signs this. Let's go through it.",
      },
      {
        speaker: "ai",
        en: "Do I have to sign it? It feels like you already think I'm going to do something wrong.",
      },
      {
        speaker: "learner",
        en: "I understand why it can feel that way. I want to be clear — I don't. This is a safety document, and it exists to protect you as much as anything. Let me walk you through the parts that matter most.",
      },
      {
        speaker: "ai",
        en: "Okay. What are the main things?",
      },
      {
        speaker: "learner",
        en: "One: take it only as prescribed. Two: I check the state database every time — that's state law, not my preference. Three: occasional urine screens to confirm the medication is in your system and there's nothing dangerous I don't know about. And four — I'm also prescribing you naloxone, which is a reversal medication for overdose. Not because I expect a problem. Because it's the standard of care when I prescribe opioids.",
      },
    ],
  },
  {
    id: "opioid-taper-conversation",
    name: "Opioid Taper Conversation",
    emoji: "📉",
    blurb:
      "Initiating an opioid taper — explaining the clinical rationale, pacing the taper to minimize withdrawal, managing patient anxiety and resistance, and committing to ongoing support.",
    counterpart:
      "Patient on long-term opioid therapy who has been on a stable high dose for months or years.",
    learnerRole: "Pain physician or APP recommending dose reduction",
    toneNote:
      "Honest and compassionate, not apologetic. Lead with clinical rationale — opioid-induced hyperalgesia, functional outcomes data — before mentioning risk. Never imply abandonment. The patient must believe you're still their doctor through the taper.",
    phrases: [
      {
        en: "I want to have an honest conversation about your current dose — not because I want to take something away, but because the evidence says this dose may actually be making your pain worse over time.",
        intent: "Frame taper as clinical benefit, cite OIH",
      },
      {
        en: "What I'm proposing is a slow reduction — about 10 percent every two to four weeks. Most patients tell me that pace feels manageable. If a step is too much, we slow it down.",
        intent: "Taper pace, CDC 2022 individualized approach",
      },
      {
        en: "You will feel some adjustment symptoms. I want to prepare you for that honestly — restlessness, sleep disturbance, maybe some muscle aches. Those are signs of physical dependence, not addiction, and they're temporary.",
        intent: "Distinguish physical dependence from addiction, prepare for withdrawal symptoms",
      },
      {
        en: "I'm not reducing your dose and then stepping back. I want to see you more frequently during the taper — every four weeks instead of every three months.",
        intent: "Commit to closer follow-up, prevent abandonment fear",
      },
      {
        en: "The data on patients who taper successfully is genuinely encouraging — many report less pain, better sleep, sharper thinking. That's what I'm aiming for with you.",
        intent: "Provide hope and outcome evidence for taper",
      },
      {
        en: "Can you tell me what your biggest concern about this is? I want to address it directly before we start.",
        intent: "Elicit and address the specific fear rather than assuming it",
      },
    ],
    vocab: [
      "opioid taper",
      "opioid-induced hyperalgesia",
      "physical dependence",
      "morphine milligram equivalents",
      "MME",
      "withdrawal",
      "adjuvant analgesic",
      "clonidine",
      "buprenorphine",
      "naltrexone",
    ],
    challenges: [
      "Initiate an opioid taper conversation with a patient who has been on 120 MME/day for three years and is terrified of the reduction.",
      "Explain the difference between physical dependence and addiction to a patient who is offended by the discussion.",
      "Manage a patient who calls between visits saying the taper pace is too fast and they can't function.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "I want to bring something up today that's going to take some time to talk through. It's about your current dose. Is this an okay time?",
      },
      {
        speaker: "ai",
        en: "Okay — what about it?",
      },
      {
        speaker: "learner",
        en: "You've been on 90 milligram equivalents a day for two years, and when I look at your PEG scores over that time, your pain hasn't improved and your function has actually declined slightly. That tells me the medication isn't doing what we hoped.",
      },
      {
        speaker: "ai",
        en: "So you want to take me off it? That's the only thing that helps.",
      },
      {
        speaker: "learner",
        en: "I hear you — I know that's what it feels like. What the research tells us is that at higher doses, opioids can actually increase pain sensitivity over time. Reducing the dose gradually often helps more than staying the same. I'm not stopping your treatment — I'm proposing we change the dose. Slowly, with close follow-up from me the whole way.",
      },
      {
        speaker: "ai",
        en: "How slow are we talking?",
      },
      {
        speaker: "learner",
        en: "Ten percent every two to four weeks. Most patients tell me that pace is tolerable. You tell me what's manageable and we adjust. And I want to see you every four weeks during this — not every three months.",
      },
    ],
  },
  {
    id: "spinal-cord-stimulator-consult",
    name: "Spinal Cord Stimulator Consult",
    emoji: "⚡",
    blurb:
      "SCS candidacy evaluation and patient education — explaining the trial-to-implant process, modality options, psychological clearance, and what success means for this patient.",
    counterpart:
      "Patient with failed back surgery syndrome or complex regional pain syndrome who has exhausted other options.",
    learnerRole: "Interventional pain physician conducting an SCS consultation",
    toneNote:
      "Evidence-based and honest. SCS is expensive and invasive — patients need real information, not sales language. Present the trial as the decision point. Never oversell.",
    phrases: [
      {
        en: "You've been through a lot of treatment over the years. I want to review everything carefully before I make a recommendation — because spinal cord stimulation isn't for everyone, and I want to make sure you're the right candidate.",
        intent: "Establish credibility by reviewing history before pitching the procedure",
      },
      {
        en: "What makes this different from most procedures: we do a trial first. You go home with temporary leads and an external battery and live your normal life for a week. If pain drops 50 percent or more, we consider it a success.",
        intent: "Explain the unique trial-first model of SCS",
      },
      {
        en: "There are two main types of stimulation right now. One you can feel as a tingling over the painful area. The newer one operates below sensation — you feel nothing, but studies show it works as well or better for back and leg pain.",
        intent: "Explain paresthesia vs. subthreshold SCS modalities",
      },
      {
        en: "I'm going to refer you to our psychologist before we schedule the trial — this is required, and it genuinely improves outcomes. She'll look at how you're coping with pain, whether there are factors that would help you succeed, and whether there's anything we should address beforehand.",
        intent: "Psychological evaluation framed as outcome optimization",
      },
      {
        en: "If the trial succeeds, the permanent implant is an outpatient surgery. The battery is under the skin — no external parts. You can have a follow-up MRI in some cases depending on the system.",
        intent: "Explain permanent implant logistics including MRI compatibility",
      },
      {
        en: "What questions do you have — about any of it? There's a lot to take in, and I'd rather you ask now than go home wondering.",
        intent: "Invite questions at the close of an information-dense consult",
      },
    ],
    vocab: [
      "spinal cord stimulator",
      "neuromodulation",
      "failed back surgery syndrome",
      "CRPS",
      "trial leads",
      "paresthesia",
      "subthreshold stimulation",
      "high-frequency SCS",
      "burst stimulation",
      "implantable pulse generator",
    ],
    challenges: [
      "Explain the SCS trial process from lead placement to explant decision to a patient who has never heard of the device.",
      "Address a patient who heard 'people get paralyzed from those things' and is considering refusing.",
      "Explain why psychological clearance is required to a patient who is offended by the idea of seeing a psychologist.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "I've reviewed your history — two lumbar surgeries, persistent right-leg pain, multiple injections with partial and temporary benefit, and physical therapy that helped your back but not the leg. At this point, I think you're a reasonable candidate for spinal cord stimulation. Let me explain what that means.",
      },
      {
        speaker: "ai",
        en: "My brother had that done. He said it didn't work.",
      },
      {
        speaker: "learner",
        en: "I hear that — and I think it's worth knowing: the trial determines whether it works for you specifically. Your brother's result doesn't predict yours. The way this works is you try it for a week before any permanent commitment. If your pain drops by half, we move forward. If it doesn't, we explant the trial leads and explore other options.",
      },
      {
        speaker: "ai",
        en: "What does the trial involve? Am I in the hospital?",
      },
      {
        speaker: "learner",
        en: "Outpatient. We place temporary leads in the epidural space under X-ray guidance — that's about 30 minutes. You go home with an external battery and controller. For seven days you live your life: walk, sleep, do what you normally do. You track your pain. At the end of the week, we evaluate together whether it's working.",
      },
    ],
  },
  {
    id: "multidisciplinary-team-handoff",
    name: "Multidisciplinary Team Handoff",
    emoji: "🤝",
    blurb:
      "Coordinating care with physical therapy, psychology, addiction medicine, oncology, and palliative care — warm handoffs, co-management communication, and keeping the patient at the center.",
    counterpart:
      "Physical therapist, psychologist, addiction medicine specialist, or palliative care provider.",
    learnerRole: "Pain physician coordinating multidisciplinary chronic pain care",
    toneNote:
      "Collegial and specific. Effective MDT handoffs include the clinical rationale, what you need from the collaborating clinician, and what you're continuing to manage. Be precise — ambiguous referrals produce ambiguous care.",
    phrases: [
      {
        en: "I'm sending you a patient with a three-year history of chronic low back pain and significant fear-avoidance behavior. I'd like you to focus on pain neuroscience education before graded exercise — she's not ready for activity yet psychologically.",
        intent: "PT referral with specific clinical framing",
      },
      {
        en: "I'm co-managing this patient with oncology — you'll see Dr. Kim's notes in the chart. My role is analgesia. I'm asking you to address the depression and catastrophizing that's amplifying her pain experience.",
        intent: "Oncology pain handoff to psychology",
      },
      {
        en: "I want to do a warm handoff to addiction medicine. The patient is on 150 MME and I believe buprenorphine would serve him better. I'll stay involved in the pain piece — I just need your expertise on the transition.",
        intent: "Addiction medicine referral for high-dose opioid patient",
      },
      {
        en: "This is a palliative consultation, not a hospice consultation — I want you to address quality of life and pain goals directly. She has months, not weeks, and she wants to stay engaged with her family.",
        intent: "Palliative care referral — distinguish from hospice, state goals clearly",
      },
      {
        en: "I've spoken with the patient and prepared him for this call. He understands we work together — he knows you're not replacing me. He's expecting you to reach out this week.",
        intent: "Set patient expectations for the handoff before the call happens",
      },
    ],
    vocab: [
      "multidisciplinary pain program",
      "pain neuroscience education",
      "graded motor imagery",
      "CBT for chronic pain",
      "acceptance and commitment therapy",
      "ACT",
      "opioid use disorder",
      "buprenorphine",
      "MAT",
      "palliative care",
    ],
    challenges: [
      "Refer a patient to the psychologist on your team in a way that doesn't make the patient feel their pain is being dismissed as psychological.",
      "Coordinate a warm handoff to addiction medicine for a patient who is resistant to the referral.",
      "Brief palliative care on a cancer pain patient's history, current analgesic plan, and what you need from them.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Hi Dr. Reyes — thanks for taking my call. I have a patient I'd like to do a warm handoff on. He's been in my practice for 18 months on 120 MME of oxycodone, PDMP is clean, UDS has been consistent, but his function continues to decline and he's had two concerning results on his PHQ-9.",
      },
      {
        speaker: "ai",
        en: "What are you thinking? Full transition to me, or co-management?",
      },
      {
        speaker: "learner",
        en: "Co-management. I want to stay involved in the pain piece. What I'm wondering is whether buprenorphine would serve him better — both for the pain and the psychological component. But I want your read on that.",
      },
      {
        speaker: "ai",
        en: "That's a reasonable thought. Has the patient been told about this referral?",
      },
      {
        speaker: "learner",
        en: "Yes — I had the conversation with him last week. He was defensive at first, but I explained clearly that I'm not ending his care, I'm adding expertise. He's expecting your call. I've prepared a warm handoff note in the chart.",
      },
    ],
  },
  {
    id: "difficult-conversation-aberrant",
    name: "Difficult Conversation",
    emoji: "⚠️",
    blurb:
      "Addressing aberrant drug behavior, unexpected UDS results, PDMP findings, and — when necessary — discharge from controlled substance practice. The hardest conversations in pain management, done with honesty and clinical integrity.",
    counterpart:
      "Patient whose UDS or PDMP has returned a concerning result, or who has violated the controlled substance agreement.",
    learnerRole: "Pain physician or APP addressing a policy violation or clinical concern",
    toneNote:
      "Calm, direct, and non-accusatory. Lead with curiosity before judgment. Every aberrant result has a differential diagnosis — the provider's job is to investigate, not to punish. If discharge is warranted, it must come with referral and a safety plan.",
    phrases: [
      {
        en: "Your drug screen came back with something unexpected — and before I draw any conclusions, I want to hear from you. Can you help me understand this result?",
        intent: "Open aberrant UDS conversation with curiosity, not accusation",
      },
      {
        en: "The monitoring database shows a controlled substance prescription from a provider I'm not aware of — filled last month. That's something we need to talk about. What happened?",
        intent: "PDMP-detected concurrent prescribing — open the conversation",
      },
      {
        en: "I'm not here to end your care today. I'm here because something in your results tells me something is going on in your life, and I'd rather know than not know.",
        intent: "Reframe aberrant behavior conversation as clinical concern, not punishment",
      },
      {
        en: "What you're describing sounds like it may have become larger than pain management. That's not a failure — it's a medical condition, and there are treatments for it that can genuinely help.",
        intent: "Segue from aberrant behavior to OUD as a medical condition",
      },
      {
        en: "Because of what's happened, I'm not able to continue prescribing controlled substances. I want to be direct about that. But I'm not leaving you without a plan — I'm referring you to someone who can offer better treatment for what I think is happening.",
        intent: "Discharge from controlled substance practice — honest, with referral",
      },
      {
        en: "I'm going to write a 30-day bridge prescription so there's no abrupt stop. Your safety matters even in the middle of this. We'll use that time to get you connected with the right care.",
        intent: "Bridge prescription at discharge — CDC safety recommendation",
      },
    ],
    vocab: [
      "aberrant drug behavior",
      "PDMP query",
      "unexpected UDS result",
      "opioid use disorder",
      "diversion",
      "co-prescribing",
      "bridge prescription",
      "motivational interviewing",
      "DIRE score",
      "aberrant medication-related behavior",
    ],
    challenges: [
      "Address a patient whose UDS was negative for their prescribed opioid but positive for cocaine — without immediately discharging them.",
      "Explain to a patient that you found a concurrent controlled substance prescription from an ER in your PDMP query, and ask for their explanation.",
      "Discharge a patient from controlled substance practice while ensuring they leave with a safety plan, a referral, and a bridge prescription.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "I need to talk with you about something from your last visit. Your urine screen came back negative for oxycodone — the medication I prescribe — and positive for methamphetamine. I want to understand what's happening before either of us says anything else.",
      },
      {
        speaker: "ai",
        en: "I didn't take it. Something must be wrong with the test.",
      },
      {
        speaker: "learner",
        en: "I hear that — I'm not assuming the worst. But I need to tell you honestly: a positive result has to be addressed regardless of the explanation. The absence of the prescribed medication is also a concern for me, because it could mean the medication is going somewhere it shouldn't. Can you tell me more about what's been happening lately?",
      },
      {
        speaker: "ai",
        en: "Things have been really bad. I've been using — I know. I didn't know how to tell you.",
      },
      {
        speaker: "learner",
        en: "Thank you for telling me. That took courage. What I'm going to say next isn't a punishment — it's medicine. What you're describing has a name and a treatment. I'm not the right doctor to provide it, but I know who is. I'm going to call Dr. Reyes in addiction medicine today. And I'll give you a 30-day prescription to bridge you safely — no abrupt stop.",
      },
    ],
  },
];

// ─────────────────────────────────────────────
// VOCAB SETS
// ─────────────────────────────────────────────

export const PAIN_VOCAB: VocabSet[] = [
  {
    category: "Pain Assessment",
    emoji: "📊",
    words: [
      "PEG scale",
      "NRS",
      "nociceptive",
      "neuropathic",
      "central sensitization",
      "allodynia",
      "hyperalgesia",
      "catastrophizing",
      "fear-avoidance",
      "opioid-induced hyperalgesia",
    ],
  },
  {
    category: "Interventional Procedures",
    emoji: "💉",
    words: [
      "epidural steroid injection",
      "transforaminal ESI",
      "medial branch block",
      "radiofrequency ablation",
      "spinal cord stimulator",
      "celiac plexus block",
      "trigger point injection",
      "fluoroscopy",
      "contrast dye",
      "neuromodulation",
    ],
  },
  {
    category: "Pharmacology",
    emoji: "💊",
    words: [
      "morphine milligram equivalents",
      "MME",
      "opioid rotation",
      "adjuvant analgesic",
      "gabapentinoid",
      "SNRI",
      "tricyclic antidepressant",
      "naloxone",
      "buprenorphine",
      "methadone",
    ],
  },
  {
    category: "Behavioral Health Crossover",
    emoji: "🧠",
    words: [
      "opioid use disorder",
      "substance use disorder",
      "motivational interviewing",
      "CBT for chronic pain",
      "pain neuroscience education",
      "acceptance and commitment therapy",
      "graded motor imagery",
      "PHQ-9",
      "GAD-7",
      "medication-assisted treatment",
    ],
  },
  {
    category: "Documentation & Legal",
    emoji: "📋",
    words: [
      "PDMP",
      "controlled substance agreement",
      "urine drug screen",
      "Opioid Risk Tool",
      "DIRE score",
      "aberrant behavior",
      "bridge prescription",
      "informed consent",
      "functional goals",
      "risk-benefit documentation",
    ],
  },
];

// ─────────────────────────────────────────────
// CLINICAL CONTEXTS
// ─────────────────────────────────────────────

export const PAIN_CONTEXTS: ClinicalContext[] = [
  {
    id: "academic-pain-center",
    name: "Academic Pain Center",
    setting:
      "University-based multidisciplinary pain program with co-located PT, psychology, addiction medicine, and neurosurgery.",
    patientProfile:
      "Complex chronic pain patients often with multiple prior treatments, significant psychological comorbidities, and high healthcare utilization. Some are referred from litigation contexts.",
    languageNote:
      "Academic language is acceptable but should be translated for patients. Use 'opioid use disorder' not 'addiction.' Presentations often involve trainees — teaching while consenting is a real workflow challenge.",
  },
  {
    id: "community-interventional-clinic",
    name: "Community Interventional Clinic",
    setting:
      "Standalone interventional pain practice — procedural volume is high, visit times short, payer mix includes commercial, Medicare, and Medicaid. Prescribers see 25–35 patients per day.",
    patientProfile:
      "Mix of post-surgical, musculoskeletal, and neuropathic pain. High proportion of patients on long-term opioids. PDMP and UDS compliance critical. Procedural revenue-driven environment creates pressure to treat everyone interventionally.",
    languageNote:
      "Keep explanations efficient — patients expect volume. Flag the cases that genuinely need slow, careful conversation and protect that time.",
  },
  {
    id: "cancer-pain-palliative",
    name: "Cancer Pain & Palliative Care",
    setting:
      "Embedded pain/palliative service in an oncology center or inpatient hospital. Patients range from curative intent with pain as a side effect to end-of-life comfort focus.",
    patientProfile:
      "Oncology patients with nociceptive tumor pain, neuropathic treatment-related pain (chemo-induced peripheral neuropathy), and existential suffering. Opioid risk stratification applies differently — benefit-risk calculation shifts toward liberal prescribing at end of life.",
    languageNote:
      "The word 'palliative' must be explained every time it is used. Patients hear 'giving up.' Distinguish early palliative from hospice care clearly. Avoid prognostic language unless explicitly asked.",
  },
  {
    id: "addiction-medicine-crossover",
    name: "Addiction Medicine Crossover",
    setting:
      "Pain patients referred to or being co-managed with addiction medicine. Setting may be a standalone MAT clinic, inpatient detox, or co-located addiction/pain program.",
    patientProfile:
      "Patients with concurrent opioid use disorder and legitimate chronic pain — one of the most clinically and ethically complex scenarios in medicine. Language and stigma matter enormously. Many patients have been discharged from other practices and carry deep shame.",
    languageNote:
      "Use 'opioid use disorder,' never 'addict.' Use 'substance use disorder' not 'abuse.' 'Physical dependence' is not the same as 'addiction' and conflating them destroys trust. Motivational interviewing register is appropriate throughout.",
  },
];

// ─────────────────────────────────────────────
// FREE RESOURCES
// ─────────────────────────────────────────────

export const FREE_RESOURCES = [
  {
    label: "CDC Clinical Practice Guideline for Prescribing Opioids (2022)",
    url: "https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm",
    note: "Comprehensive 2022 guideline replacing the 2016 version. 12 recommendations covering initiation, titration, tapering, and monitoring.",
  },
  {
    label: "ASIPP Evidence-Based Clinical Practice Guidelines",
    url: "https://www.asipp.org/guidelines/",
    note: "American Society of Interventional Pain Physicians — procedural guidelines for ESI, RFA, SCS, and other interventions.",
  },
  {
    label: "PEG Scale (Pain, Enjoyment, General Activity)",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3600298/",
    note: "Krebs EE et al. 2009 — 3-item validated scale for chronic pain monitoring. Recommended by CDC 2022.",
  },
  {
    label: "Opioid Risk Tool (ORT)",
    url: "https://www.drugabuse.gov/sites/default/files/files/OpioidRiskTool.pdf",
    note: "Webster & Webster 2005 — 5-item validated screen for opioid misuse risk stratification. Low/moderate/high scoring.",
  },
  {
    label: "PDMP — National Alliance for Model State Drug Laws",
    url: "https://namsdl.org/prescription-monitoring-programs/",
    note: "State-by-state PDMP resource. All 50 states operational. Required query before controlled substance prescribing in most states.",
  },
] as const;
