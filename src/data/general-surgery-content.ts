// Curated clinical content for the General Surgery module.
//
// Phrases reflect the actual language used by attending surgeons, surgical PAs,
// and surgical residents in clinic, the OR, on rounds, and during consults —
// not textbook descriptions but the real register of the operating room,
// pre-op bay, and surgical floor.
//
// Clinical sources:
//   • SAGES (Society of American Gastrointestinal and Endoscopic Surgeons) guidelines
//   • ACS (American College of Surgeons) — ATLS, surgical quality programs
//   • EAST (Eastern Association for the Surgery of Trauma) guidelines
//   • "Sabiston Textbook of Surgery" 21st Edition — standard reference
//   • ACGME Milestones for General Surgery — communication competencies
//   • ACS NSQIP (National Surgical Quality Improvement Program)
//
// Nothing here is legal, medical, or prescriptive advice for patients.
// All content is for language-learning roleplay only.

export interface SurgeryScript {
  id: string;
  category:
    | "Pre-op Counseling"
    | "OR Communication"
    | "Post-op Management"
    | "Acute Abdomen"
    | "Trauma"
    | "Endoscopy"
    | "Oncology"
    | "Difficult Conversations";
  prompt: string;
  context: string;
  reference: string;
}

export const SURGERY_SCRIPTS: SurgeryScript[] = [
  // ── Pre-op Counseling ────────────────────────────────────────────────────
  {
    id: "surgical-consent-framework",
    category: "Pre-op Counseling",
    prompt:
      "Before we do any operation, I need to walk you through what we're doing, why we're doing it, and what can go wrong. I'm not trying to scare you — I want you to have the full picture so that you're the one making this decision, not me making it for you.",
    context:
      "Opening informed consent. The framing — 'you're making this decision, not me' — reflects the legal and ethical standard of informed consent as a process, not a signature.",
    reference: "ACS Statement on Principles — Informed Consent; ACGME Surgery Milestone: PC-13 (Informed Consent)",
  },
  {
    id: "lap-appy-consent",
    category: "Pre-op Counseling",
    prompt:
      "For the appendectomy, we'll make three small incisions and use a camera — that's the laparoscopic approach, and it means less pain and a faster recovery. The main risks are bleeding, infection, and injury to surrounding structures, which is rare but real. If we get inside and it's more complicated than the CT shows, I may need to convert to an open incision.",
    context:
      "Laparoscopic appendectomy consent — standard risks plus conversion disclosure. Every laparoscopic consent must include the possibility of open conversion or the patient feels deceived if it happens.",
    reference: "SAGES Guidelines for Laparoscopic Appendectomy — Informed Consent",
  },
  {
    id: "elective-cholecystectomy",
    category: "Pre-op Counseling",
    prompt:
      "Your gallbladder has been causing you symptoms, and the ultrasound shows stones. The definitive treatment is removing the gallbladder. You can live completely normally without it — it stores bile but doesn't make it. The risk I want you to know about is a small chance of injuring the bile duct — nationally about 1 in 500 cases.",
    context:
      "Elective laparoscopic cholecystectomy counseling. Bile duct injury is the most consequential risk — patients must hear it explicitly even though its probability is low.",
    reference: "SAGES Clinical Spotlight Review — Cholecystectomy (2023)",
  },
  {
    id: "npo-instructions",
    category: "Pre-op Counseling",
    prompt:
      "Nothing to eat after midnight the night before. Clear liquids — water, apple juice, black coffee — until six hours before your arrival time. If you take blood pressure medications, take them with a sip of water in the morning. Do not stop your blood thinners on your own — I'll give you specific instructions for those.",
    context:
      "Pre-op NPO instructions per ASA fasting guidelines. Specifying 'clear liquids until 6 hours before' (not midnight) and handling blood pressure medications explicitly prevents both aspiration and dangerous medication errors.",
    reference: "ASA Practice Guidelines for Preoperative Fasting, 2017 (updated 2023)",
  },
  {
    id: "hernia-watchful-waiting",
    category: "Pre-op Counseling",
    prompt:
      "Your hernia is small and not causing you symptoms. In someone your age and health, watchful waiting is a reasonable option — we don't have to operate. The thing to watch for is incarceration — if the hernia gets stuck out and won't go back in, or you have severe pain, nausea, and vomiting, that's an emergency.",
    context:
      "Inguinal hernia management — watchful waiting is ACS-endorsed for asymptomatic or minimally symptomatic hernias in low-risk patients. Clear incarceration warning signs are medically and legally essential.",
    reference: "ACS Clinical Practice Guidelines — Inguinal Hernia Management (2023)",
  },

  // ── OR Communication ──────────────────────────────────────────────────────
  {
    id: "surgical-timeout",
    category: "OR Communication",
    prompt:
      "Time out. Patient name — everyone confirm. Procedure: laparoscopic cholecystectomy. Site: right upper quadrant, gallbladder. Consent signed. Allergies on the board — confirm. Antibiotics given within the last hour? Anesthesia, any concerns? Scrub, instruments counted and confirmed. Circulator — documentation complete. Everyone in agreement? Proceed.",
    context:
      "Universal protocol surgical time-out — Joint Commission mandatory. The complete verbal confirmation with each team member responding is what the protocol requires. Partial time-outs are a compliance failure.",
    reference: "Joint Commission Universal Protocol for Preventing Wrong Site, Wrong Procedure, Wrong Person Surgery",
  },
  {
    id: "or-instrument-request",
    category: "OR Communication",
    prompt:
      "Clip, clip, cut — I need to get the cystic duct first. Give me the Maryland dissector. More suction on the right — I can't see the critical view. Retract the fundus cephalad and lateral. Good. Now I need two clips on the duct, space them out.",
    context:
      "Laparoscopic cholecystectomy intraoperative communication. 'Critical view of safety' — visualizing the cystic duct and cystic artery before dividing — is the standard that prevents bile duct injury. Directing the assistant is concurrent with the dissection.",
    reference: "SAGES Safe Cholecystectomy Program — Critical View of Safety (CVS)",
  },
  {
    id: "or-difficult-dissection",
    category: "OR Communication",
    prompt:
      "I'm losing the planes here — there's a lot of inflammation. I'm going to call a culture in case this is infected, and I'm going to convert to open. Call it now. This is not a failure; this is the right call for the patient.",
    context:
      "Laparoscopic-to-open conversion — the decision to convert must be made before a complication, not after. Verbalizing the reasoning out loud is teaching behavior and also documents the decision in the minds of the witnesses.",
    reference: "SAGES Guidelines — When to Convert from Laparoscopic to Open Surgery",
  },
  {
    id: "or-specimen-handoff",
    category: "OR Communication",
    prompt:
      "Specimen going off the field — right colon, labeled for permanent. Orientation: proximal margin is tied with a suture, distal margin is free. I want it opened fresh at the cut margin so path can look at it. Any lymph nodes harvested separately — those are in the second container.",
    context:
      "Specimen labeling and handoff to the pathology tech via the circulating nurse. Incorrect orientation or missing specimens are never-events. Verbal confirmation before the specimen leaves the field prevents errors.",
    reference: "CAP Surgical Pathology Specimen Labeling Guidelines; ACS NSQIP Surgical Specimen Handling",
  },

  // ── Post-op Management ────────────────────────────────────────────────────
  {
    id: "post-op-rounds-lap-appy",
    category: "Post-op Management",
    prompt:
      "Good morning — surgery went well last night. Your appendix is out, no perforation. Right now I'm listening to your belly — your bowel sounds are back, which is good. Pain controlled? Walk once today if you can; that's the single best thing you can do for your recovery. If you tolerate liquids by noon, we can probably get you home tonight.",
    context:
      "Post-op day 0 or 1 rounds after laparoscopic appendectomy — the three questions that drive disposition: pain, bowel function, ambulation. Giving the patient one specific action ('walk once today') improves compliance.",
    reference: "ERAS (Enhanced Recovery After Surgery) Society — Colorectal Protocol; ACS NSQIP Discharge Criteria",
  },
  {
    id: "wound-care-instructions",
    category: "Post-op Management",
    prompt:
      "You can shower tomorrow — let water run over the incisions, pat dry, and cover them with a clean bandage. If you see redness spreading out from the incision, pus, or if the edges start to open up, call us. Some clear or slightly pink drainage in the first 24 hours is normal. If you run a fever over 101.5, that also warrants a call.",
    context:
      "Discharge wound care instructions. Patients who cannot identify wound infection return to ERs unnecessarily or, more dangerously, wait too long. Giving specific visual descriptors — 'redness spreading out' — produces better outcomes than 'watch for infection.'",
    reference: "ACS Wound Care Education Program — Patient Discharge Instructions",
  },
  {
    id: "ileus-counseling",
    category: "Post-op Management",
    prompt:
      "Your belly is more distended than I'd like and you haven't had a bowel movement yet. This is called an ileus — your intestines are basically asleep after the surgery, which is expected, but yours is taking a little longer than usual. I want to hold tube feeds for now, keep you walking, and wait one more day before considering a tube.",
    context:
      "Post-op ileus management — common after abdominal surgery. 'Your intestines are asleep' is the correct lay-language explanation. Walking is the most effective non-pharmacologic intervention.",
    reference: "ERAS Protocol — Post-op Ileus Management; SAGES Colorectal Surgery Guidelines",
  },

  // ── Acute Abdomen ────────────────────────────────────────────────────────
  {
    id: "appendicitis-er-consult",
    category: "Acute Abdomen",
    prompt:
      "I'm the surgery resident — give me the one-liner. Okay, and what's the exam? Right lower quadrant tenderness with guarding — is there rebound? CT in the system? Let me look at it. Elevated WBC, free fluid, inflamed appendix, no perforation. She's going to the OR tonight. I'll consent her now.",
    context:
      "Acute appendicitis ER consult — the surgery resident workflow: one-liner, exam, imaging, decision. Efficient consult language with no wasted words is the cultural norm in surgery.",
    reference: "EAST Practice Management Guidelines — Acute Appendicitis",
  },
  {
    id: "perforated-ulcer",
    category: "Acute Abdomen",
    prompt:
      "This is a perforated peptic ulcer — the X-ray shows free air under the diaphragm, and his exam is a rigid abdomen. He needs emergent surgery. I'm going to talk to the family, and I need anesthesia to see him now. What's his last INR?",
    context:
      "Perforated peptic ulcer — a surgical emergency. 'Free air plus rigid abdomen' is the clinical one-two punch that eliminates the workup. Simultaneous family communication and anesthesia notification reflects real attending-level parallelism.",
    reference: "SAGES Guidelines for Perforated Peptic Ulcer; EAST Trauma Guidelines — Hollow Viscus Injury",
  },
  {
    id: "small-bowel-obstruction-management",
    category: "Acute Abdomen",
    prompt:
      "This looks like a small bowel obstruction — probably adhesions from your prior surgery. I want to admit you, give you a nasogastric tube to decompress the bowel, and watch it for 24 to 48 hours. Most of these resolve without surgery. If you're not improving, or if your exam gets worse, we operate.",
    context:
      "SBO management — non-operative trial is first-line for partial SBO without signs of strangulation. Explaining the two-track plan (conservative first, OR if needed) up front prevents patients from feeling like the goalposts are moving.",
    reference: "EAST Adhesive Small Bowel Obstruction Guidelines — Nonoperative vs. Operative Management",
  },

  // ── Trauma ───────────────────────────────────────────────────────────────
  {
    id: "trauma-activation-team",
    category: "Trauma",
    prompt:
      "Trauma incoming — ETA 8 minutes. Motorcyclist, MVC, ejected, unresponsive in the field, BP 80 systolic on scene. I want the team in gowns, massive transfusion protocol on standby, bedside ultrasound at the head of the bed, and radiology notified for a trauma pan-scan. Questions?",
    context:
      "Trauma team activation announcement — ATLS principles. MTP on standby before the patient arrives reduces time to transfusion. FAST exam at bedside is mandatory in any hemodynamically unstable trauma.",
    reference: "ATLS Student Course Manual, 10th Edition; ACS Committee on Trauma — Resource Document",
  },
  {
    id: "fast-exam-findings",
    category: "Trauma",
    prompt:
      "FAST is positive — free fluid in the hepatorenal space. He's hemodynamically unstable. We're going to the OR right now. This is a positive FAST with instability — that's exploratory laparotomy, not more workup.",
    context:
      "Positive FAST with hemodynamic instability bypasses CT scan — going directly to OR is the ATLS standard. The explicit decision chain ('positive FAST + instability = OR') narrated out loud coordinates the team.",
    reference: "ATLS 10th Edition — Algorithm for Abdominal Trauma; EAST Blunt Abdominal Trauma Guidelines",
  },
  {
    id: "damage-control-surgery-family",
    category: "Trauma",
    prompt:
      "Your son is in surgery right now. He's critically injured, and we've done the first operation to stop the bleeding and control contamination. We're leaving his abdomen temporarily open — we call it damage control surgery — and we'll bring him back to finish the operation once his body can tolerate it, probably in 24 to 48 hours. He's still in critical condition.",
    context:
      "Damage control surgery family communication. Explaining a temporary abdominal closure to a lay family requires the exact phrase 'damage control surgery' — it will appear in subsequent medical records and conversations, and families need to recognize the term.",
    reference: "ACS Statement on Damage Control Surgery; EAST Trauma System Guidelines",
  },

  // ── Endoscopy ─────────────────────────────────────────────────────────────
  {
    id: "egd-indication-explanation",
    category: "Endoscopy",
    prompt:
      "I want to put a camera down into your stomach — it goes through the mouth, down the esophagus, into the stomach and the first part of the small intestine. The whole thing takes about ten minutes and you'll be sedated so you won't feel or remember much. I'm looking for an ulcer, bleeding, or any other reason for your symptoms.",
    context:
      "EGD patient preparation. 'You won't feel or remember much' accurately describes conscious sedation and reduces the most common fear — that the patient will be awake and uncomfortable.",
    reference: "ASGE Guidelines for Patient Preparation for EGD — Sedation and Patient Education",
  },
  {
    id: "colonoscopy-finding-polyp",
    category: "Endoscopy",
    prompt:
      "I found and removed two polyps — we sent them to pathology and I'll call you with the results in about a week. Most polyps like these are benign, but removing them is how we prevent colon cancer. Based on what I saw, I'd recommend your next colonoscopy in three years rather than ten.",
    context:
      "Post-colonoscopy polyp communication. Adjusting surveillance interval based on findings is a key decision the patient needs to understand and remember for future scheduling.",
    reference: "ACG/USMSTF Multi-Society Task Force — Colorectal Cancer Surveillance After Polypectomy, 2020",
  },

  // ── Oncology ──────────────────────────────────────────────────────────────
  {
    id: "cancer-diagnosis-OR-finding",
    category: "Oncology",
    prompt:
      "When we did the operation, we found something we didn't expect — the tissue looked abnormal and I sent it to pathology while you were on the table. The frozen section came back as cancer. I need to talk to you about what that means for what we did and what comes next.",
    context:
      "Intraoperative cancer finding — frozen section diagnosis requires immediate patient disclosure. Structuring the conversation with 'what we did' (completed resection or not) before 'what comes next' is the recommended disclosure framework.",
    reference: "ACGME Surgery Milestone PC-13 — Difficult Conversations; ACS Oncology Communication Guidelines",
  },
  {
    id: "colostomy-counseling",
    category: "Oncology",
    prompt:
      "I need to be honest with you about what the surgery may involve. Depending on where the tumor is, there's a possibility I'll need to create a colostomy — a bag on your abdomen for waste. I know that's a lot to hear. I want you to talk to our ostomy nurse before the operation so you know what it actually looks like and how people live with it — because people live very well with it.",
    context:
      "Colostomy counseling before rectal or sigmoid resection. Pre-op ostomy nurse consultation improves acceptance and self-care post-op. Acknowledging the emotional weight before the practical information is the clinically validated sequence.",
    reference: "WOCN Ostomy Education and Pre-op Counseling Guidelines; ACS Cancer Surgical Communication Standards",
  },

  // ── Difficult Conversations ───────────────────────────────────────────────
  {
    id: "unresectable-cancer",
    category: "Difficult Conversations",
    prompt:
      "I have to tell you something I wish I had different words for. When I got inside, the cancer had spread to places where I can't remove it surgically. I didn't take anything out — taking out part of it wouldn't have helped and would have added risk. What I can tell you is that this means we need to change the goal of treatment. I'd like to bring in oncology today.",
    context:
      "Intraoperative upstaging to unresectable disease — the surgeon must tell the patient that the original plan changed. 'Change the goal of treatment' is the phrase that opens the palliative vs. curative conversation without using the word 'palliative,' which patients often interpret as 'nothing more to do.'",
    reference: "ACS Committee on Ethics — Communicating Intraoperative Findings; ASCO Communication Guidelines",
  },
  {
    id: "surgical-complication-disclosure",
    category: "Difficult Conversations",
    prompt:
      "I need to tell you about something that happened during surgery that you deserve to know about. There was a complication — we injured a small part of the bile duct that we then repaired. I've been involved in the repair and it looks solid, but I want you to know it happened. We're monitoring your drain output closely, and I'll be checking on you twice today.",
    context:
      "Intraoperative complication disclosure — ACS and Joint Commission require honest disclosure to patients. The structure: what happened, what was done about it, what monitoring is in place. Avoiding vague language ('there were some difficulties') is an ethical and legal requirement.",
    reference: "ACS Statement on Surgical Complications Disclosure; Joint Commission Sentinel Event Policy",
  },
];

// Vocabulary organized by clinical domain
export interface SurgeryVocabSet {
  category: string;
  emoji: string;
  domain: string;
  words: string[];
}

export const SURGERY_VOCAB: SurgeryVocabSet[] = [
  {
    category: "Anatomic Terms",
    emoji: "🫀",
    domain: "Anatomy",
    words: [
      "peritoneum",
      "mesentery",
      "retroperitoneum",
      "fascia",
      "serosa",
      "mucosa",
      "submucosa",
      "hilum",
    ],
  },
  {
    category: "OR Instruments",
    emoji: "🔪",
    domain: "Operative",
    words: [
      "bovie",
      "clip applier",
      "Harmonic",
      "retractor",
      "suction",
      "laparoscope",
      "trocar",
      "stapler",
    ],
  },
  {
    category: "Abdominal Procedures",
    emoji: "🏥",
    domain: "Operations",
    words: [
      "appendectomy",
      "cholecystectomy",
      "colectomy",
      "Whipple",
      "Nissen fundoplication",
      "hernia repair",
      "bowel resection",
      "ostomy",
    ],
  },
  {
    category: "Post-op Assessment",
    emoji: "📋",
    domain: "Recovery",
    words: [
      "bowel sounds",
      "flatus",
      "drain output",
      "wound check",
      "pain control",
      "ambulation",
      "ileus",
      "anastomosis",
    ],
  },
  {
    category: "Trauma",
    emoji: "🚨",
    domain: "Trauma Surgery",
    words: [
      "FAST exam",
      "hemorrhage",
      "hemostasis",
      "damage control",
      "open abdomen",
      "laparotomy",
      "packing",
      "ex-lap",
    ],
  },
  {
    category: "Oncology",
    emoji: "🎗️",
    domain: "Surgical Oncology",
    words: [
      "margins",
      "frozen section",
      "lymph node",
      "staging",
      "resection",
      "excision",
      "tumor board",
      "adjuvant",
    ],
  },
];

// Clinical contexts — care environments that change how the AI responds
export interface SurgeryClinicalContext {
  id: string;
  name: string;
  setting: string;
  patientPopulation: string;
  resourceNote: string;
  toneNote: string;
  typicalChallenges: string[];
}

export const SURGERY_CONTEXTS: SurgeryClinicalContext[] = [
  {
    id: "level-i-trauma-center",
    name: "Level I Trauma Center",
    setting: "Academic trauma center, 24/7 trauma surgery coverage",
    patientPopulation:
      "High-energy mechanisms — MVC, GSW, stab wounds, falls from height, industrial accidents. Polytrauma common. Full spectrum of age and comorbidity.",
    resourceNote:
      "Trauma bays with immediate OR access, on-site neurosurgery, orthopedic surgery, thoracic surgery, interventional radiology. Massive transfusion protocol activated within minutes. Trauma fellow or attending must respond within 15 minutes (ACS verification standard).",
    toneNote:
      "Urgent and structured. ATLS language is standardized globally — team members trained across institutions speak the same protocol language. Efficiency is safety; verbose communication causes delay.",
    typicalChallenges: [
      "Run the primary survey (ABCDE) on a hemodynamically unstable blunt trauma patient.",
      "Decide between emergent OR and IR angioembolization for a splenic laceration.",
      "Communicate a change-of-plan after a negative FAST becomes positive.",
    ],
  },
  {
    id: "community-hospital-or",
    name: "Community Hospital OR",
    setting: "Community hospital, general surgery practice",
    patientPopulation:
      "Elective and semi-urgent general surgery — cholecystectomies, hernia repairs, appendectomies, colon resections, skin and soft tissue. Mix of insured and uninsured patients.",
    resourceNote:
      "No on-site subspecialty backup for complex hepatobiliary or vascular complications. Transfer agreement with regional referral center. Surgeon often covers ER call for surgical consults simultaneously.",
    toneNote:
      "Relationship-oriented — the same patients come back, and referring PCPs are close colleagues. Practical, direct communication. The surgeon often knows the patient from prior surgeries or from the community.",
    typicalChallenges: [
      "Consent a patient for a laparoscopic cholecystectomy with Respectful risk disclosure.",
      "Manage an intraoperative complication without subspecialty backup.",
      "Counsel a patient on watchful waiting for a reducible inguinal hernia.",
    ],
  },
  {
    id: "outpatient-surgery-center",
    name: "Ambulatory Surgery Center",
    setting: "Outpatient ASC — elective, same-day surgery and discharge",
    patientPopulation:
      "Healthy to low-comorbidity patients undergoing elective procedures: laparoscopic cholecystectomy, hernia repair, appendectomy (non-perforated), colonoscopy, EGD, skin excisions.",
    resourceNote:
      "No overnight capability. Unplanned admission requires transfer to hospital. Pre-op clearance and risk stratification must be more stringent — no safety net for overnight observation.",
    toneNote:
      "Efficient and protocol-driven. Pre-op communication is compressed — most education happened in clinic. Day-of conversation focuses on consent confirmation, last-minute questions, and explicit discharge criteria.",
    typicalChallenges: [
      "Identify a same-day surgical patient whose pre-op labs are out of range and decide proceed vs. postpone.",
      "Explain same-day discharge expectations and wound care in under five minutes.",
      "Manage nausea and pain at discharge to avoid unplanned hospital transfer.",
    ],
  },
  {
    id: "rural-general-surgery",
    name: "Rural General Surgery",
    setting: "Rural or frontier hospital, single surgeon covers broad scope",
    patientPopulation:
      "Rural community, farming and ranching population, significant delays in presentation (patients often 'tough it out'). Provider often the only surgeon within 60+ miles.",
    resourceNote:
      "Minimal subspecialty support. Transfer is the safety net but adds 1–2 hours. Scope of practice is broader — may include appendectomy, hernia, cholecystectomy, trauma, C-section, obstetric emergencies, and basic urologic procedures.",
    toneNote:
      "The surgeon is a trusted community figure. Directness and honesty are deeply respected. Patients often delayed seeking care and may present sicker — no condescension about late presentation.",
    typicalChallenges: [
      "Decide whether to operate on a perforated appendicitis or transfer to a larger center.",
      "Counsel a patient with a clearly resectable colon cancer on surgery vs. transfer for workup at a cancer center.",
      "Explain the limits of local capability to a patient's family honestly and without apology.",
    ],
  },
];

export function getSurgeryContext(id: string | null | undefined): SurgeryClinicalContext | null {
  if (!id) return null;
  return SURGERY_CONTEXTS.find((c) => c.id === id) ?? null;
}

export const SURGERY_FREE_RESOURCES = [
  {
    label: "SAGES Guidelines",
    url: "https://www.sages.org/publications/guidelines",
    note: "Society of American Gastrointestinal and Endoscopic Surgeons — laparoscopic and endoscopic surgery guidelines, free.",
  },
  {
    label: "ACS Clinical Practice Guidelines",
    url: "https://www.facs.org/for-medical-professionals/clinical-practice/clinical-practice-guidelines",
    note: "American College of Surgeons — evidence-based surgical practice guidelines, free.",
  },
  {
    label: "EAST Practice Management Guidelines",
    url: "https://www.east.org/education/practice-management-guidelines",
    note: "Eastern Association for the Surgery of Trauma — trauma surgery guidelines, free.",
  },
  {
    label: "ERAS Society Protocols",
    url: "https://www.erassociety.org/guidelines",
    note: "Enhanced Recovery After Surgery — perioperative care protocols for multiple surgical specialties.",
  },
  {
    label: "ATLS Student Manual (Overview)",
    url: "https://www.facs.org/quality-programs/trauma/education/atls",
    note: "Advanced Trauma Life Support — ACS trauma assessment and management framework.",
  },
] as const;
