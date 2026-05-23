// Curated clinical content for the OB/GYN module.
//
// Phrases reflect the actual language of L&D floors, outpatient OB clinics,
// high-risk maternal-fetal medicine, and gynecologic practice — the language
// an attending OB/GYN, CNM, or MFM fellow actually uses with patients and staff.
//
// Clinical sources:
//   • ACOG (American College of Obstetricians and Gynecologists) — practice bulletins
//   • SMFM (Society for Maternal-Fetal Medicine) — consult series and guidelines
//   • AAP/ACOG Guidelines for Perinatal Care, 9th Edition
//   • ACNM (American College of Nurse-Midwives) — clinical bulletins
//   • "Williams Obstetrics" 26th Edition — standard obstetrics reference
//
// Nothing here is legal, medical, or prescriptive advice for patients.
// All content is for language-learning roleplay only.

export interface ObGynScript {
  id: string;
  category:
    | "Prenatal Care"
    | "Labor & Delivery"
    | "Postpartum"
    | "Gynecology"
    | "High-Risk OB"
    | "Family Planning"
    | "Difficult Conversations"
    | "OR Communication";
  prompt: string;
  context: string;
  reference: string;
}

export const OB_GYN_SCRIPTS: ObGynScript[] = [
  // ── Prenatal Care ────────────────────────────────────────────────────────
  {
    id: "new-ob-first-visit",
    category: "Prenatal Care",
    prompt:
      "Congratulations! Your due date is around [date] — we calculate that from the first day of your last period, and we'll confirm it with your first ultrasound. Today I want to review your labs, talk about what the next few months look like, and make sure you have everything you need.",
    context:
      "First prenatal visit (8–10 weeks) — setting the agenda, confirming EDD, and ordering the first trimester labs. Patients remember the tone of this visit for the rest of the pregnancy.",
    reference: "ACOG Practice Bulletin #180 — Pregestational Diabetes; ACOG Prenatal Care Schedule",
  },
  {
    id: "anatomy-ultrasound-normal",
    category: "Prenatal Care",
    prompt:
      "The 20-week anatomy scan looks great — all the structures we measure are in normal range, the placenta is in a good position, and we got a good look at the heart. I know some people get nervous about this scan, so I want to say clearly: everything looks normal.",
    context:
      "Communicating a normal anatomy scan result. The explicit 'everything looks normal' is important — patients who leave without that phrase often assume something was left unsaid.",
    reference: "AIUM/ACOG Practice Guideline — Standard Diagnostic Ultrasound in Pregnancy",
  },
  {
    id: "gdm-diagnosis",
    category: "Prenatal Care",
    prompt:
      "Your glucose tolerance test came back elevated — you have gestational diabetes. I know that sounds scary, but most patients manage it well with diet changes, and only about 30% end up needing medication. This doesn't mean your baby has diabetes, and it usually resolves after delivery. Let me explain what it means day to day.",
    context:
      "Delivering a GDM diagnosis (1-hour ≥140 mg/dL or 3-hour test by Carpenter-Coustan criteria). Correcting the misconception that GDM equals fetal diabetes prevents unnecessary anxiety.",
    reference: "ACOG Practice Bulletin #190 — Gestational Diabetes Mellitus",
  },
  {
    id: "group-b-strep",
    category: "Prenatal Care",
    prompt:
      "We'll swab for Group B Strep around 36 weeks. If it comes back positive, it doesn't mean you're sick — about 25% of healthy women carry it. It just means we give you antibiotics in labor so your baby doesn't get exposed during delivery.",
    context:
      "GBS counseling at 35–37 weeks. Distinguishing carriage from infection is essential — 'carrier' language reduces stigma and improves compliance with intrapartum prophylaxis.",
    reference: "CDC GBS Prevention Guidelines 2020 — ACOG Committee Opinion #797",
  },
  {
    id: "preeclampsia-symptoms",
    category: "Prenatal Care",
    prompt:
      "I want you to call us right away — not wait until your next appointment — if you develop a severe headache that doesn't go away with Tylenol, vision changes like seeing spots or flashing lights, or pain up under your right rib cage. Those symptoms can be early signs that your blood pressure is affecting other organs.",
    context:
      "Preeclampsia warning signs at 28+ weeks. The specificity ('pain up under your right rib cage') distinguishes severe features from common pregnancy discomforts. Patients who don't receive these instructions present late.",
    reference: "ACOG Practice Bulletin #222 — Gestational Hypertension and Preeclampsia",
  },

  // ── Labor & Delivery ──────────────────────────────────────────────────────
  {
    id: "labor-admission-assessment",
    category: "Labor & Delivery",
    prompt:
      "Let me check your cervix — I want to see where you are. I'm going to do a quick contraction check, and we'll look at the baby's position and heart rate before we decide whether to admit you.",
    context:
      "L&D triage assessment. Cervical exam, contraction frequency and duration, fetal presentation, and FHR pattern are the four data points that drive admit-vs-discharge.",
    reference: "ACOG Practice Bulletin #107 — Induction of Labor; L&D Admission Criteria",
  },
  {
    id: "epidural-explanation",
    category: "Labor & Delivery",
    prompt:
      "The epidural goes in your lower back — the anesthesiologist will numb the skin first so the placement itself isn't as painful as it sounds. Once it's working, your contractions will still be there but you'll feel them as pressure instead of pain. You'll still be able to push when it's time.",
    context:
      "Epidural analgesia counseling. The reassurance that pushing ability is preserved addresses the most common fear about epidurals and improves uptake among anxious patients.",
    reference:
      "ACOG Committee Opinion #766 — Approaches to Limit Intervention During Labor and Birth",
  },
  {
    id: "csection-urgent-consent",
    category: "Labor & Delivery",
    prompt:
      "I need to talk to you right now. Your baby's heart rate has been dropping with contractions and not recovering well — that tells me the baby may not be tolerating labor, and I want to do a cesarean section. I know this is fast and I know it's not what you planned. Do I have your permission to go ahead?",
    context:
      "Category II to Category III FHR tracing requiring urgent C-section. Consent must be obtained even under time pressure. Acknowledging the birth plan change is humane and legally sound.",
    reference: "ACOG Practice Bulletin #106 — Intrapartum Fetal Heart Rate Monitoring",
  },
  {
    id: "pushing-coaching",
    category: "Labor & Delivery",
    prompt:
      "With the next contraction, take a deep breath in and hold it, chin to your chest, and push down like you're having a bowel movement. Three good pushes per contraction. I can see the head — you're doing this.",
    context:
      "Second-stage labor coaching. The explicit instruction ('like you're having a bowel movement') gives patients who have never pushed before a precise physical reference.",
    reference: "AAP/ACOG Guidelines for Perinatal Care, 9th ed. — Second Stage Management",
  },
  {
    id: "delivery-shoulder-dystocia",
    category: "Labor & Delivery",
    prompt:
      "Shoulder — I need McRoberts now. Pull her knees to her chest, hyperflexed. Suprapubic pressure, not fundal. I need the team in here.",
    context:
      "Shoulder dystocia team communication. McRoberts maneuver and suprapubic pressure are the first-line response. 'Not fundal' is critical — fundal pressure worsens the impaction. This is the literal call-and-response language used in obstetric emergency drills.",
    reference:
      "ACOG Practice Bulletin #40 — Shoulder Dystocia; ALSO Course Shoulder Dystocia Drill",
  },

  // ── Postpartum ───────────────────────────────────────────────────────────
  {
    id: "postpartum-discharge-warning",
    category: "Postpartum",
    prompt:
      "Before you go home, I want to make sure you know what to watch for. Heavy bleeding — soaking more than one pad an hour for two hours straight — call us. Fever over 100.4, foul-smelling discharge, redness or opening of your incision, calf pain, or shortness of breath — call us or go to the ER. And if you're feeling hopeless or having thoughts of harming yourself or the baby, that's also an emergency.",
    context:
      "Postpartum discharge warning signs — hemorrhage, infection, DVT, PE, and perinatal mood disorders. Including the mental health warning sign normalizes it and saves lives.",
    reference:
      "ACOG Committee Opinion #736 — Optimizing Postpartum Care; ACOG #757 — Screening for Perinatal Depression",
  },
  {
    id: "ppd-screening-positive",
    category: "Postpartum",
    prompt:
      "Your Edinburgh score today is a 14 — that's in the range that tells me you're struggling more than the typical new-mom exhaustion. What you're feeling has a name — postpartum depression — and it's the most common complication of childbirth that we know of. It also responds well to treatment. Can we talk about what support would feel right for you?",
    context:
      "Edinburgh Postnatal Depression Scale ≥13 is a positive screen. Normalizing PPD as 'the most common complication of childbirth' reduces shame and opens the conversation for treatment.",
    reference:
      "ACOG Practice Bulletin #257 — Screening and Diagnosis of Mental Health Conditions During Pregnancy and the Postpartum Period",
  },
  {
    id: "breastfeeding-support",
    category: "Postpartum",
    prompt:
      "It usually takes three to five days for your milk to come in fully. Until then, colostrum — the thick yellowish milk — is exactly what your baby needs; it's concentrated and nutritious. If the latch is painful, that's usually a positioning issue and a lactation consultant can fix it in one session.",
    context:
      "Breastfeeding initiation counseling. Setting the expectation for milk-coming-in timing prevents mothers from concluding they 'can't breastfeed' in the first 48 hours.",
    reference:
      "ABM (Academy of Breastfeeding Medicine) Clinical Protocol #14 — Breastfeeding-Friendly Physician's Office",
  },

  // ── Gynecology ────────────────────────────────────────────────────────────
  {
    id: "abnormal-pap-colposcopy",
    category: "Gynecology",
    prompt:
      "Your Pap smear came back showing some abnormal cells — the category is called HSIL, which stands for high-grade squamous intraepithelial lesion. I want to do a colposcopy, which is a closer look at your cervix in the office. Most of these findings are precancerous, not cancer — and we're finding it at exactly the right time.",
    context:
      "Explaining an HSIL Pap result. The distinction between precancerous and cancer is critical. Patients often hear 'abnormal Pap' and assume the worst.",
    reference: "ASCCP Management Guidelines for Abnormal Cervical Cancer Screening Tests, 2019",
  },
  {
    id: "ectopic-pregnancy",
    category: "Gynecology",
    prompt:
      "I have to tell you something serious. Your HCG is rising but we're not seeing a pregnancy inside the uterus on ultrasound — that means this pregnancy is likely growing in your fallopian tube. This is called an ectopic pregnancy, and it can become a life-threatening emergency. I need to make sure you understand this is not something we can watch and wait on.",
    context:
      "Ectopic pregnancy diagnosis — one of the leading causes of maternal mortality in the first trimester. The urgency must be communicated without ambiguity while still being humane.",
    reference: "ACOG Practice Bulletin #193 — Tubal Ectopic Pregnancy",
  },
  {
    id: "endometriosis-diagnosis",
    category: "Gynecology",
    prompt:
      "Based on your symptoms and the findings on ultrasound, I'm highly suspicious for endometriosis. To be absolutely certain, we'd need to look inside with laparoscopy — but many patients don't need that diagnosis surgically if we can manage symptoms medically. Let's talk about your options.",
    context:
      "Clinical diagnosis of endometriosis — ACOG allows empirical treatment without laparoscopic confirmation in patients with typical symptoms. Explaining this avoids unnecessary surgery.",
    reference: "ACOG Practice Bulletin #114 — Management of Endometriosis",
  },

  // ── High-Risk OB ──────────────────────────────────────────────────────────
  {
    id: "mfm-consult-introduction",
    category: "High-Risk OB",
    prompt:
      "I'm the maternal-fetal medicine specialist — my job is to manage the parts of your pregnancy that put you in a higher-risk category. Your OB is still your primary doctor; think of me as a consultant they've brought in to help manage your diabetes in pregnancy. We'll work together.",
    context:
      "Introducing the MFM role at a first consult. Patients often feel frightened by the referral — 'high-risk' triggers anxiety. Clarifying that the referring OB remains primary reduces abandonment fear.",
    reference: "SMFM Consult Series — Patient Communication in MFM Practice",
  },
  {
    id: "preterm-labor-tocolysis",
    category: "High-Risk OB",
    prompt:
      "You're having regular contractions at 29 weeks. I want to admit you, start a medication to try to slow the contractions, and give you corticosteroids — a steroid shot that helps the baby's lungs mature faster, in case delivery happens sooner than we want. Our goal is to get you at least 48 hours further along.",
    context:
      "Preterm labor management — tocolysis + antenatal corticosteroids between 24–33+6 weeks. The '48 hours' goal explains why tocolysis doesn't need to work forever — just long enough for steroids to work.",
    reference:
      "ACOG Practice Bulletin #171 — Management of Preterm Labor; SMFM Corticosteroid Guidelines",
  },
  {
    id: "placenta-previa-counseling",
    category: "High-Risk OB",
    prompt:
      "Your placenta is covering the cervix right now — that's called a placenta previa. Two things change for you: no pelvic exams, no intercourse, and any bleeding at all means coming straight to the hospital. Most previas resolve on their own by 32–34 weeks as the uterus grows. We'll recheck the ultrasound at 32 weeks.",
    context:
      "Placenta previa activity restrictions. The explicit list of prohibitions — pelvic exam, intercourse — prevents life-threatening hemorrhage. Explaining likely resolution reduces alarm.",
    reference: "ACOG Practice Bulletin #140 — Management of Abnormal Placentation",
  },

  // ── Family Planning ───────────────────────────────────────────────────────
  {
    id: "contraception-counseling-framework",
    category: "Family Planning",
    prompt:
      "There are four main categories of birth control: long-acting methods that go in and you don't think about — like IUDs and implants — hormonal methods you take or wear regularly, barrier methods, and permanent options. What I want to know first is: are you done having children, or is it a question of timing?",
    context:
      "Contraception counseling framework — categorizing by duration before listing options prevents overwhelming the patient. The LARC-first structure reflects the highest efficacy tier.",
    reference:
      "CDC Medical Eligibility Criteria for Contraceptive Use, 2024 — Tier 1 (LARC) Counseling",
  },
  {
    id: "iud-insertion-counseling",
    category: "Family Planning",
    prompt:
      "The insertion takes about five minutes. Most people feel significant cramping — like a bad period cramp — when I go through the cervix. It's brief and it stops when I'm done. The first few months, irregular spotting is normal. After that, with the hormonal IUD, most patients have very light periods or none at all.",
    context:
      "IUD insertion preparation. Honest pain counseling increases trust and reduces procedure abandonment. Setting expectations for irregular spotting prevents patients from thinking the IUD is failing.",
    reference: "ACOG Practice Bulletin #186 — Long-Acting Reversible Contraception",
  },

  // ── Difficult Conversations ───────────────────────────────────────────────
  {
    id: "fetal-anomaly-discussion",
    category: "Difficult Conversations",
    prompt:
      "I want to go through what we found on the ultrasound carefully, and I want you to have time to absorb this. The anatomy scan showed findings consistent with a heart defect — specifically, it appears the left side of the heart has not developed normally. I'm going to explain what we know, what we don't know yet, and what your next steps are.",
    context:
      "Fetal cardiac anomaly counseling — using a structured disclosure ('what we know, what we don't, what's next') prevents the conversation from becoming a trauma dump. Slow and specific over fast and vague.",
    reference:
      "ACOG Committee Opinion #693 — Counseling Following a Fetal Abnormality; SMFM Communication Guidelines",
  },
  {
    id: "pregnancy-loss-communication",
    category: "Difficult Conversations",
    prompt:
      "I'm so sorry — there is no heartbeat. I know this is devastating news. You don't have to make any decisions right now. When you're ready, I want to talk about what options you have for how we move forward — but there's no rush.",
    context:
      "Communicating intrauterine fetal demise or missed abortion. 'No heartbeat' is clearer than 'fetal demise' for patients in shock. 'No rush' on next steps is empirically important — patients who feel rushed make poorer decisions and have worse grief outcomes.",
    reference:
      "ACOG Practice Bulletin #150 — Early Pregnancy Loss; Miscarriage Care Communication Guidelines",
  },

  // ── OR Communication ──────────────────────────────────────────────────────
  {
    id: "csection-surgical-timeout",
    category: "OR Communication",
    prompt:
      "Time out — patient name, procedure, consent signed for cesarean delivery. She's allergic to penicillin — we're using cefazolin and will crosscheck for cross-reactivity. Foley in, bladder down. Site and side correct. Anesthesia ready? Scrub and circulator check. Everyone good? Proceed.",
    context:
      "Cesarean delivery surgical time-out. Site and side verification is adapted for OB ('site' = lower uterine segment, 'side' = not applicable — modified protocol). Allergy crosscheck is critical in this patient population.",
    reference:
      "ACOG/AAGL Surgical Safety Checklist Adaptation for OB — Joint Commission Universal Protocol",
  },
  {
    id: "postpartum-hemorrhage-team",
    category: "OR Communication",
    prompt:
      "I've got a PPH — EBL is already 1500 and climbing. I need massive transfusion protocol activated, two large-bore IVs if we don't have them, oxytocin running, and call the blood bank now. Is uterology here? I want to go to bakri balloon if bimanual massage and second-line uterotonics don't stop this.",
    context:
      "Postpartum hemorrhage team communication — ACOG CALM algorithm. Activating MTP, ordering uterotonics, and naming the next intervention (Bakri balloon) simultaneously is how experienced attendings run a PPH code.",
    reference:
      "ACOG Practice Bulletin #183 — Postpartum Hemorrhage; Alliance for Innovation on Maternal Health (AIM) PPH Bundle",
  },
];

// Vocabulary organized by clinical area
export interface ObGynVocabSet {
  category: string;
  emoji: string;
  domain: string;
  words: string[];
}

export const OB_GYN_VOCAB: ObGynVocabSet[] = [
  {
    category: "Obstetric Terminology",
    emoji: "🤰",
    domain: "Obstetrics",
    words: [
      "gestational age",
      "EDD",
      "gravida",
      "para",
      "trimester",
      "fundal height",
      "fetal movement",
      "amniotic fluid",
    ],
  },
  {
    category: "Labor & Delivery",
    emoji: "🏥",
    domain: "Labor",
    words: [
      "dilation",
      "effacement",
      "station",
      "contraction",
      "rupture of membranes",
      "epidural",
      "pushing",
      "crowning",
    ],
  },
  {
    category: "Fetal Monitoring",
    emoji: "📊",
    domain: "Intrapartum",
    words: [
      "FHR",
      "deceleration",
      "variability",
      "Category I",
      "Category II",
      "Category III",
      "accelerations",
      "reactive strip",
    ],
  },
  {
    category: "Complications",
    emoji: "⚠️",
    domain: "High-Risk OB",
    words: [
      "preeclampsia",
      "eclampsia",
      "gestational diabetes",
      "preterm labor",
      "placenta previa",
      "abruption",
      "IUGR",
      "postpartum hemorrhage",
    ],
  },
  {
    category: "Gynecology",
    emoji: "🩺",
    domain: "Gynecology",
    words: [
      "Pap smear",
      "colposcopy",
      "biopsy",
      "fibroid",
      "ovarian cyst",
      "endometriosis",
      "menorrhagia",
      "ectopic",
    ],
  },
  {
    category: "Family Planning",
    emoji: "💊",
    domain: "Contraception",
    words: [
      "IUD",
      "implant",
      "oral contraceptive",
      "LARC",
      "tubal ligation",
      "vasectomy",
      "emergency contraception",
      "fertility",
    ],
  },
];

// Clinical contexts — care environments that change how the AI responds
export interface ObGynClinicalContext {
  id: string;
  name: string;
  setting: string;
  patientPopulation: string;
  resourceNote: string;
  toneNote: string;
  typicalChallenges: string[];
}

export const OB_GYN_CONTEXTS: ObGynClinicalContext[] = [
  {
    id: "hospital-ld-floor",
    name: "Hospital L&D Floor",
    setting: "Inpatient labor and delivery, active births",
    patientPopulation:
      "Laboring patients at all gestational ages, postpartum recovery patients, triage evaluations. Mix of scheduled inductions, spontaneous labor, and urgent presentations.",
    resourceNote:
      "Continuous FHR monitoring, on-call anesthesia, NICU nearby. Nursing team manages most routine care — physician is called for cervical exams, complications, and delivery.",
    toneNote:
      "Fast-paced. Language during active labor must be clear and actionable — patients under pain cannot process nuanced explanations. Reserve detailed counseling for triage and early labor.",
    typicalChallenges: [
      "Manage a labor with a Category II FHR tracing: intrauterine resuscitation and decision to continue vs. deliver.",
      "Counsel a patient requesting natural birth about the risks of prolonged labor.",
      "Run a shoulder dystocia drill with the nursing staff.",
    ],
  },
  {
    id: "outpatient-ob-clinic",
    name: "Outpatient OB Clinic",
    setting: "Ambulatory prenatal care, routine to complex",
    patientPopulation:
      "Pregnant patients from 6 weeks to term, routine prenatal visits, high-risk referrals from community OBs, postpartum follow-up.",
    resourceNote:
      "Ultrasound on-site or same-day. Access to dietary counseling, diabetes education, social work. Labs with same-day results for prenatal panels.",
    toneNote:
      "Longitudinal relationship built over 9 months. Tone evolves from informational (first trimester) to preparatory (third trimester). Patients know you — and remember what you said at the last visit.",
    typicalChallenges: [
      "Counsel a patient at 28 weeks who was just diagnosed with gestational diabetes.",
      "Discuss a new fundal height discrepancy and the need for growth ultrasound.",
      "Review a patient's birth preferences and identify potential conflicts with clinical management.",
    ],
  },
  {
    id: "high-risk-mfm",
    name: "High-Risk MFM Practice",
    setting: "Maternal-fetal medicine, complex pregnancies",
    patientPopulation:
      "Preexisting hypertension, diabetes, cardiac disease, autoimmune disorders, multiple gestation, prior adverse pregnancy outcomes, advanced maternal age with fetal anomalies.",
    resourceNote:
      "Level II and III ultrasound capability, fetal echocardiography, cordocentesis, CVS, amniocentesis. Direct access to genetic counseling, perinatology, neonatology.",
    toneNote:
      "Patients arrive frightened. The first task is trust before information transfer. Evidence must be delivered with honesty and compassion simultaneously — 'bad news slowly' is the operating principle.",
    typicalChallenges: [
      "Explain trisomy 21 findings on NIPT and discuss diagnostic confirmation vs. management without testing.",
      "Counsel a patient with Type 1 diabetes on her elevated risk of preeclampsia.",
      "Discuss previable delivery at 23 weeks with a patient in preterm labor: goals of care and fetal limits of viability.",
    ],
  },
  {
    id: "birth-center-midwifery",
    name: "Freestanding Birth Center",
    setting: "Midwifery-led, low-intervention, family-centered",
    patientPopulation:
      "Low-risk patients who have chosen non-hospital birth, strong preferences for unmedicated labor, minimal intervention unless medically indicated.",
    resourceNote:
      "No on-site anesthesia, no OR. Transfer protocol to nearest hospital is the safety net. Nitrous oxide and hydrotherapy for pain management. Midwifery-led with physician backup agreement.",
    toneNote:
      "Language is collaborative and non-hierarchical. Shared decision-making is the default, not the exception. 'What does your body feel like it needs?' is a real clinical question in this setting.",
    typicalChallenges: [
      "Counsel a patient that her prolonged labor requires transfer to the hospital for augmentation — while honoring her birth preferences.",
      "Explain intermittent auscultation to a patient and what findings would require continuous monitoring.",
      "Manage a postpartum hemorrhage with non-pharmacological measures before transferring.",
    ],
  },
];

export function getObGynContext(id: string | null | undefined): ObGynClinicalContext | null {
  if (!id) return null;
  return OB_GYN_CONTEXTS.find((c) => c.id === id) ?? null;
}

export const OB_GYN_FREE_RESOURCES = [
  {
    label: "ACOG Practice Bulletins",
    url: "https://www.acog.org/clinical/clinical-guidance/practice-bulletin",
    note: "American College of OB/GYN — evidence-based clinical management guidelines, many free.",
  },
  {
    label: "SMFM Consult Series",
    url: "https://www.smfm.org/publications/consult-series",
    note: "Society for Maternal-Fetal Medicine — high-risk pregnancy management guidelines, free.",
  },
  {
    label: "CDC Reproductive Health Guidelines",
    url: "https://www.cdc.gov/reproductivehealth",
    note: "CDC Medical Eligibility Criteria for Contraceptive Use — free clinical decision tool.",
  },
  {
    label: "ACNM Clinical Bulletins",
    url: "https://www.midwife.org/acnm-publications",
    note: "American College of Nurse-Midwives — clinical practice guidelines for midwifery care.",
  },
  {
    label: "AIM Patient Safety Bundles",
    url: "https://www.aimprogram.com/bundles",
    note: "Alliance for Innovation on Maternal Health — hemorrhage, hypertension, and safety bundles.",
  },
] as const;
