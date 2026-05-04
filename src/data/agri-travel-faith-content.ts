// Agri-Travel-Faith domain content for Language Lens Elite.
// Covers five vocational/situational modules:
//   dairy-farmer, ranch-cowboy, meatpacking-butcher, international-travel, catholic-ministry
//
// Language is designed for Spanish-English bilingual learners in real working contexts.
// Dairy/ranch terminology reflects working-class rural Western US bilingual usage.
// Travel scenarios target practical survival language for first-time international travelers.
// Catholic ministry language is warm, theologically accurate, and parish-centered.

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
  phrases: ModulePhrase[]; // 6-8 phrases
  vocab: string[]; // 6-10 terms
  challenges: string[]; // 3 roleplay prompts
  sampleConversation: SampleTurn[]; // 4-6 turns
}

export interface ModuleVocabSet {
  category: string;
  emoji: string;
  words: string[];
}

export interface AgriTravelFaithContent {
  moduleId: string;
  areas: ModuleArea[];
  vocabSets: ModuleVocabSet[];
}

// ─────────────────────────────────────────────────────────────────────────────
// DAIRY FARMER MODULE
// ─────────────────────────────────────────────────────────────────────────────

const dairyFarmerAreas: ModuleArea[] = [
  {
    id: "milking-parlor-briefing",
    name: "Milking Parlor Briefing",
    emoji: "🐄",
    blurb:
      "Start the shift right: review who is on which row, check equipment, and make sure everyone knows the protocol before the first cow enters.",
    counterpart: "Dairy parlor supervisor or herd manager",
    learnerRole: "Milker / parlor worker",
    toneNote:
      "Direct and practical. No fluff — shifts start on time. Respect hierarchy but ask questions openly. Mix of English and Spanish is normal on the floor.",
    phrases: [
      {
        en: "Which row am I on today?",
        intent: "Asking for your assignment at the start of shift.",
      },
      {
        en: "The units on stall three are not pulling right — can someone check the vacuum?",
        intent: "Reporting equipment trouble without stopping the line.",
      },
      {
        en: "She kicked the unit off twice — I think she needs to be checked.",
        intent: "Flagging a cow that may be in pain or has mastitis.",
      },
      {
        en: "How many cows are left in the pen?",
        intent: "Tracking progress so you can pace the shift.",
      },
      {
        en: "I already dipped and wiped — she is ready.",
        intent: "Confirming pre-dip protocol was completed.",
      },
      {
        en: "The strip cup showed something on number 412 — I set her aside.",
        intent: "Reporting a cow with suspicious milk before attaching the unit.",
      },
      {
        en: "We are running about twenty minutes behind — should I skip the dry cows?",
        intent: "Asking for guidance when the shift is falling behind.",
      },
    ],
    vocab: [
      "milking unit",
      "teat dip",
      "strip cup",
      "vacuum line",
      "milk pipeline",
      "forestripping",
      "post-dip",
      "somatic cell count",
      "let-down",
      "parlor rotation",
    ],
    challenges: [
      "Your supervisor tells you the night crew left two units dirty. Explain what you found and ask what the protocol is for reporting it.",
      "A cow in the holding pen is limping badly and has not entered the parlor. Tell the supervisor what you observed and recommend she be flagged.",
      "The milk alarm is beeping on your side. Walk through what you check first and how you communicate the issue without stopping the entire parlor.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Good morning. Which side am I on today — left or right?",
      },
      {
        speaker: "ai",
        en: "Left side, stalls one through eight. Javier has the right. First group is already in the holding pen.",
      },
      {
        speaker: "learner",
        en: "Got it. Hey, unit six has a slow pulse — feels like the liner might be cracked.",
      },
      {
        speaker: "ai",
        en: "Good catch. Swap it out with the spare on the hook and tag the bad one so I can send it to the shop.",
      },
      {
        speaker: "learner",
        en: "Done. Also, number 308 stripped bloody on the left front — I pulled her out.",

      },
      {
        speaker: "ai",
        en: "Good call. Put her in the sick pen and write her number on the board. Doc comes Thursday.",
      },
    ],
  },
  {
    id: "herd-health-check",
    name: "Herd Health Check",
    emoji: "🩺",
    blurb:
      "Walking the pen with the herd manager or vet tech, identifying cows that need attention, and communicating observations clearly.",
    counterpart: "Herd manager or vet technician",
    learnerRole: "Dairy worker doing daily health observations",
    toneNote:
      "Observational and calm. Be precise about cow numbers and what you saw. Do not guess diagnoses — describe what you observed.",
    phrases: [
      {
        en: "She has been off feed since yesterday morning.",
        intent: "Reporting a cow that has stopped eating — early illness sign.",
      },
      {
        en: "Her back end looks sloppy — could be a digestive issue.",
        intent: "Describing loose manure as a health observation.",
      },
      {
        en: "This one has been standing at the water tank all morning — she is not moving much.",
        intent: "Describing lethargic behavior near water.",
      },
      {
        en: "Her left rear quarter feels hard and hot.",
        intent: "Describing a mastitis symptom during a physical check.",
      },
      {
        en: "She freshened three days ago and still looks rough.",
        intent: "Noting a fresh cow that has not bounced back normally.",
      },
      {
        en: "Can you show me how to record this in the health log?",
        intent: "Asking for training on recordkeeping.",
      },
      {
        en: "Number 501 is due to calve — her bag is really full and she is restless.",
        intent: "Alerting the team that a cow is close to calving.",
      },
      {
        en: "Should I move her to the maternity pen now?",
        intent: "Asking for a decision on pen placement.",
      },
    ],
    vocab: [
      "fresh cow",
      "dry period",
      "ketosis",
      "displaced abomasum",
      "body condition score",
      "rumen fill",
      "fever check",
      "heat detection",
      "calving pen",
      "CIDR",
    ],
    challenges: [
      "Describe three different cows you noticed this morning: one off feed, one limping, and one that looks bloated. Use cow numbers and be specific.",
      "The herd manager asks you to do a pen walk and flag any cows under a body condition score of 2.5. Explain how you would do it and what you would report.",
      "A cow is down in the freestall and cannot get up. Describe the situation urgently and ask what to do while help is on the way.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "I wanted to flag 622 — she has not touched her feed since I got here and she is grinding her teeth.",
      },
      {
        speaker: "ai",
        en: "Teeth grinding is a pain sign. Let me check her. Can you take her temperature while I look at her eyes?",
      },
      {
        speaker: "learner",
        en: "Sure. I also noticed her milk was down almost four pounds this morning compared to yesterday.",
      },
      {
        speaker: "ai",
        en: "Production drop plus the teeth — I'm thinking hardware disease or early DA. We'll need an X-ray. Good catch flagging her early.",
      },
      {
        speaker: "learner",
        en: "Do you want me to move her to the treatment pen now or wait for the vet?",
      },
      {
        speaker: "ai",
        en: "Move her now. Keep her separated and don't put any grain in front of her — just water and long-stem hay.",
      },
    ],
  },
  {
    id: "vet-call",
    name: "Vet Call",
    emoji: "💉",
    blurb:
      "Communicating with the veterinarian during a farm visit or over the phone — describing symptoms, following treatment instructions, and asking questions.",
    counterpart: "Large animal veterinarian",
    learnerRole: "Dairy worker or herd manager's assistant",
    toneNote:
      "Respectful and precise. Vets are busy. Get to the point fast, give cow numbers, describe what you saw, and write down instructions.",
    phrases: [
      {
        en: "We have a cow that freshened yesterday and has not passed her placenta.",
        intent: "Reporting retained placenta to the vet.",
      },
      {
        en: "She has a temperature of 104.8 — what do you want me to give her?",
        intent: "Reporting fever and asking for a treatment order.",
      },
      {
        en: "How many cc's and where do I inject it?",
        intent: "Asking for dosage and injection site.",
      },
      {
        en: "How long is the milk withhold on that antibiotic?",
        intent: "Asking about milk withdrawal time to protect the tank.",
      },
      {
        en: "She is not responding to the first treatment — should I repeat or try something else?",
        intent: "Following up when a cow is not improving.",
      },
      {
        en: "Can you come out today, or should we just keep treating her?",
        intent: "Asking if an in-person visit is needed.",
      },
      {
        en: "I will write everything down and make sure we log it in the herd software.",
        intent: "Confirming that treatment records will be kept properly.",
      },
    ],
    vocab: [
      "withdrawal time",
      "subcutaneous injection",
      "intramuscular injection",
      "intramammary tube",
      "IV drip",
      "bolus",
      "fresh cow protocol",
      "prophylactic treatment",
      "culture sample",
      "antibiotic sensitivity",
    ],
    challenges: [
      "Call the vet and describe a cow with a swollen leg, three-inch cut above the hock, and a temperature of 103.5. Ask if you should clean and wrap it or wait for a visit.",
      "The vet gives you a verbal treatment order for two cows. Practice writing it down out loud and reading it back to confirm you got it right.",
      "A cow you treated three days ago for mastitis is still showing signs. Report the history to the vet and ask for next steps.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Hi, this is Carlos from Twin Pines Dairy — I need to talk to Dr. Hensley about cow 714.",
      },
      {
        speaker: "ai",
        en: "This is Dr. Hensley. What are you seeing?",
      },
      {
        speaker: "learner",
        en: "She freshened two days ago, temperature is 105, and she is down in the back end — not eating at all.",
      },
      {
        speaker: "ai",
        en: "Sounds like toxic mastitis or metritis. Give her 500cc of calcium IV, Banamine at 500 pounds, and start her on penicillin. Get me a milk sample too.",
      },
      {
        speaker: "learner",
        en: "How long is the withdrawal on the penicillin for both milk and meat?",
      },
      {
        speaker: "ai",
        en: "Milk is four days, meat is ten. Tag her ear and put her on the do-not-ship list right now.",
      },
    ],
  },
  {
    id: "feed-nutrition",
    name: "Feed & Nutrition",
    emoji: "🌾",
    blurb:
      "Talking with the nutritionist or feed manager about rations, silage quality, bunk management, and what the cows are eating.",
    counterpart: "Dairy nutritionist or feed manager",
    learnerRole: "Dairy worker responsible for feeding or bunk management",
    toneNote:
      "Curious and observational. You are on the ground; the nutritionist is not always there. Your eyes and descriptions matter.",
    phrases: [
      {
        en: "The bunk was pretty much empty by 8 AM — should we be pushing up more?",
        intent: "Reporting that cows ran out of feed early, suggesting they need more.",
      },
      {
        en: "There is some heating in the corn silage — it smells kind of sour and sweet.",
        intent: "Describing possible silage fermentation or spoilage.",
      },
      {
        en: "A lot of cows are sorting out the hay and leaving the wet stuff.",
        intent: "Reporting selective eating that could unbalance the ration.",
      },
      {
        en: "The TMR looks drier than usual — did something change in the mix?",
        intent: "Noticing a change in total mixed ration moisture.",
      },
      {
        en: "Production is down across the pen — could it be the ration?",
        intent: "Connecting a herd-wide milk drop to nutrition.",
      },
      {
        en: "How many pounds of silage are we supposed to be putting in per cow?",
        intent: "Asking for the feed recipe specifics.",
      },
    ],
    vocab: [
      "TMR (total mixed ration)",
      "dry matter",
      "bunk space",
      "silage face",
      "heating",
      "sorting behavior",
      "NDF (neutral detergent fiber)",
      "transition cow",
      "negative energy balance",
      "rumen pH",
    ],
    challenges: [
      "The nutritionist asks you what the bunk looked like at each of the three feedings yesterday. Describe it in detail — was it clean-swept, had leftovers, or were cows still waiting?",
      "You notice the silage pile has a section that looks dark and smells bad. Describe what you found and ask whether it is safe to feed.",
      "Production on the high group dropped 8 pounds per cow over two days. Walk the nutritionist through every change you noticed in the last week.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Hey, I wanted to let you know the high-cow pen has been cleaning up the bunk in about three hours both yesterday and today.",
      },
      {
        speaker: "ai",
        en: "That is too fast — they should have a little left after four hours. Are they sorting or just eating clean?",
      },
      {
        speaker: "learner",
        en: "They seem to be eating clean. No sorting that I noticed. But production is up two pounds since Monday, so maybe they just need more.",
      },
      {
        speaker: "ai",
        en: "Good observation. Let's bump their TMR load by five percent for three days and see if they fill out. Keep watching for sorting.",
      },
      {
        speaker: "learner",
        en: "Will do. Also, the alfalfa bale we opened this morning looks more stemmy than usual — is that a problem?",
      },
      {
        speaker: "ai",
        en: "Pull a sample and I will send it to the lab. For now, keep using it but watch their manure consistency — loose can mean too much rapidly fermentable fiber.",
      },
    ],
  },
  {
    id: "milk-quality-issue",
    name: "Milk Quality Issue",
    emoji: "🥛",
    blurb:
      "Responding to a high somatic cell count, a positive bacteria test, or a milk hauler who flags a problem with the tank.",
    counterpart: "Quality control supervisor, milk hauler, or plant fieldman",
    learnerRole: "Dairy worker or herd manager",
    toneNote:
      "Calm under pressure. Quality issues cost money and can get a dairy dumped. Be factual, take notes, and do not get defensive.",
    phrases: [
      {
        en: "What was the SCC on our last pickup?",
        intent: "Asking for the somatic cell count result.",
      },
      {
        en: "The bulk tank test came back high — can you tell me which bacteria it was?",
        intent: "Getting specific information about a failed bacteria test.",
      },
      {
        en: "We had a unit liner blow out last night — could that have caused contamination?",
        intent: "Proposing a root cause for a quality problem.",
      },
      {
        en: "We are going to re-check every liner and all the gaskets today.",
        intent: "Committing to a corrective action.",
      },
      {
        en: "How long do we have before the next pickup to get our numbers down?",
        intent: "Asking for the timeline to fix the problem.",
      },
      {
        en: "Is this considered a fail, or are we still under the limit?",
        intent: "Understanding whether you are in penalty territory.",
      },
      {
        en: "We will dump the problem cows' milk and keep it out of the tank.",
        intent: "Explaining that cows with high-SCC milk are being managed.",
      },
    ],
    vocab: [
      "somatic cell count (SCC)",
      "bulk tank",
      "standard plate count (SPC)",
      "preliminary incubation count (PI count)",
      "coliform count",
      "milk line",
      "CIP (clean-in-place)",
      "dump pen",
      "antibiotic residue test",
      "quality premium",
    ],
    challenges: [
      "The fieldman from the co-op calls and says your SCC was 425,000 last week. You need to ask what the penalty threshold is and what corrective actions they recommend.",
      "Your PI count failed. Walk through the possible causes out loud with the quality supervisor and commit to three specific fixes.",
      "A milk hauler says the tank smelled off when he opened it this morning. Ask him to describe it and decide together whether to dump.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "I just got the notice that our SPC came back at 32,000. That is the second time this month. What should we look at?",
      },
      {
        speaker: "ai",
        en: "At that level you are close to the warning threshold. First thing — when did you last do a full CIP cycle and check the temperature logs?",
      },
      {
        speaker: "learner",
        en: "We do CIP every night. But now that I think about it, the hot water heater was acting up Tuesday — the wash might not have been hot enough.",
      },
      {
        speaker: "ai",
        en: "That is almost certainly your answer. Bacteria survive a warm wash. Check the temperature log, get the heater fixed, and do an extra wash tonight.",
      },
      {
        speaker: "learner",
        en: "Should I pull a swab from the pipeline to find out where the bacteria is coming from?",
      },
      {
        speaker: "ai",
        en: "Yes — swab the pipeline, the bulk tank outlet, and the receiver jar. That will tell us if it is one spot or the whole system.",
      },
    ],
  },
  {
    id: "new-employee-orientation",
    name: "New Employee Orientation",
    emoji: "👷",
    blurb:
      "Welcoming a new worker to the dairy, showing them the layout, explaining the shift, and covering basic safety and animal handling.",
    counterpart: "New dairy employee",
    learnerRole: "Experienced worker or supervisor doing the orientation",
    toneNote:
      "Patient and welcoming. Many dairy workers are bilingual or new to the US. Use simple, clear language. Repeat important safety information.",
    phrases: [
      {
        en: "Welcome — let me show you around before we start.",
        intent: "Starting the orientation with a warm greeting.",
      },
      {
        en: "This is the parlor — you will spend most of your time here.",
        intent: "Introducing the main work area.",
      },
      {
        en: "Always approach the cows from the side, never from directly behind.",
        intent: "Explaining basic cattle safety.",
      },
      {
        en: "If a cow kicks the unit off, do not reach under her — use the long hook.",
        intent: "Explaining how to handle a kicked unit safely.",
      },
      {
        en: "Breaks are at 10 and 2 — fifteen minutes each. Lunch is thirty minutes.",
        intent: "Explaining the shift schedule.",
      },
      {
        en: "Any questions, come find me or ask the manager — do not guess.",
        intent: "Encouraging new workers to ask rather than assume.",
      },
      {
        en: "If you see something wrong with an animal, tell someone right away.",
        intent: "Teaching animal welfare responsibility.",
      },
    ],
    vocab: [
      "holding pen",
      "return lane",
      "fresh pen",
      "sick pen",
      "head gate",
      "ear tag",
      "OSHA",
      "personal protective equipment",
      "lockout/tagout",
      "emergency shutoff",
    ],
    challenges: [
      "A new worker has never been around cattle before. Walk him through entering a pen, reading an ear tag, and moving slowly around the animals.",
      "The new hire speaks very little English. Demonstrate three critical safety rules using gestures and simple words, then check for understanding.",
      "A new employee asks you how to handle a cow that is very aggressive in the parlor. Explain the steps and when to call for help.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Good morning — you must be the new guy. I am Carlos. I will be showing you around today.",
      },
      {
        speaker: "ai",
        en: "Yes, my name is Miguel. This is my first time working on a dairy. I worked with beef cattle before.",
      },
      {
        speaker: "learner",
        en: "Good, so you know the basics. Dairy cows are calmer but they can still kick. Always come from the side, keep your hand on her flank so she knows where you are.",
      },
      {
        speaker: "ai",
        en: "Got it. What is that strip cup thing I saw them using?",
      },
      {
        speaker: "learner",
        en: "That is how we check the first squirts of milk before we attach the unit. You are looking for chunks, blood, or anything off. If you see it, pull the cow out and tell me.",
      },
      {
        speaker: "ai",
        en: "Okay, I understand. I will do exactly that.",
      },
    ],
  },
];

const dairyFarmerVocabSets: ModuleVocabSet[] = [
  {
    category: "Parlor Equipment",
    emoji: "⚙️",
    words: [
      "milking unit",
      "liner",
      "claw",
      "pulsator",
      "vacuum pump",
      "milk meter",
      "pipeline",
      "receiver jar",
      "bulk tank",
      "CIP system",
    ],
  },
  {
    category: "Animal Health Terms",
    emoji: "🩺",
    words: [
      "mastitis",
      "ketosis",
      "metritis",
      "milk fever",
      "displaced abomasum",
      "hardware disease",
      "laminitis",
      "retained placenta",
      "fresh cow",
      "dry cow",
    ],
  },
  {
    category: "Milk Quality",
    emoji: "🧪",
    words: [
      "somatic cell count",
      "standard plate count",
      "coliform",
      "PI count",
      "antibiotic residue",
      "inhibitor test",
      "quality premium",
      "bulk tank",
      "dump penalty",
      "hauler",
    ],
  },
  {
    category: "Feeding & Nutrition",
    emoji: "🌽",
    words: [
      "TMR",
      "silage",
      "dry matter",
      "NDF",
      "bunk management",
      "sorting",
      "negative energy balance",
      "transition period",
      "body condition score",
      "nutritionist",
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// RANCH COWBOY MODULE
// ─────────────────────────────────────────────────────────────────────────────

const ranchCowboyAreas: ModuleArea[] = [
  {
    id: "morning-roundup-brief",
    name: "Morning Roundup Brief",
    emoji: "🌅",
    blurb:
      "The foreman lays out the day's plan at first light — which pastures to gather, who rides where, and what the goal is by midday.",
    counterpart: "Ranch foreman or cow boss",
    learnerRole: "Ranch hand or cowboy",
    toneNote:
      "Terse and purposeful. Ranchers don't use ten words when five will do. Pay attention — the briefing is short and everything in it matters.",
    phrases: [
      {
        en: "Which pasture are we gathering today?",
        intent: "Asking for the day's work assignment.",
      },
      {
        en: "Are we just sorting the calves or moving the whole bunch?",
        intent: "Clarifying the scope of the gather.",
      },
      {
        en: "I will take the north draw if nobody else wants it.",
        intent: "Volunteering for a specific area.",
      },
      {
        en: "What time do you want the cattle at the corrals?",
        intent: "Getting the target time for delivery.",
      },
      {
        en: "Is the gate on the south end closed, or do I need to check it?",
        intent: "Asking about pasture gate status before starting.",
      },
      {
        en: "My horse threw a shoe last night — can I grab the bay gelding instead?",
        intent: "Requesting a different horse due to a problem.",
      },
      {
        en: "How many head do you think are in there?",
        intent: "Asking for a cattle count estimate.",
      },
    ],
    vocab: [
      "gather",
      "pasture",
      "draw",
      "corrals",
      "head gate",
      "drag",
      "cutting horse",
      "cow-calf pair",
      "steer",
      "heifer",
    ],
    challenges: [
      "The foreman gives a quick briefing for a three-pasture gather involving five riders. Repeat the plan back to confirm you understood your assignment.",
      "You arrive at the pasture and find a section of fence is down. A dozen cattle have already walked through. Report this to the foreman and ask for instructions.",
      "It is almost noon and you have only found about half the cattle in your pasture. The terrain is rough. Communicate your progress and ask if you should keep looking or head in.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Morning. What are we doing today?",
      },
      {
        speaker: "ai",
        en: "We are gathering the south pasture — all the cow-calf pairs. I want them at the corrals by eleven so we can preg-check in the afternoon.",
      },
      {
        speaker: "learner",
        en: "How many pairs are we talking?",
      },
      {
        speaker: "ai",
        en: "About 180 pairs. You take the east side up through the cedar draws. Ray will push from the west. I will hold the gate at the bottom.",
      },
      {
        speaker: "learner",
        en: "Is that old wire gate at the northeast corner still up?",
      },
      {
        speaker: "ai",
        en: "It was last week but check it on your way through. If it is down, holler on the radio before any cattle get to that corner.",
      },
    ],
  },
  {
    id: "cattle-movement",
    name: "Cattle Movement",
    emoji: "🐂",
    blurb:
      "Moving a herd from one pasture to another through gates, along roads, or across rough terrain — communicating positions and problems on the fly.",
    counterpart: "Fellow cowboys during a drive",
    learnerRole: "Cowboy riding a position in the drive",
    toneNote:
      "Quick and clear. Radio or yelled instructions. No long sentences when cattle are moving. Stay calm — excited voices scatter cattle.",
    phrases: [
      {
        en: "I have got a bunch trying to break back on my side — push up on the left!",
        intent: "Calling for help when cattle are turning back.",
      },
      {
        en: "Gate is open — bring them straight through.",
        intent: "Signaling that the gate is clear for passage.",
      },
      {
        en: "Slow down — the lead cattle are about to hit the road.",
        intent: "Warning others to hold back before a road crossing.",
      },
      {
        en: "One pair split off into the brush — I am going after them.",
        intent: "Alerting others you are leaving your position briefly.",
      },
      {
        en: "Hold them here — I need to open the next gate.",
        intent: "Asking the crew to hold the herd while you move ahead.",
      },
      {
        en: "We are missing about fifteen head — did they go back through the creek?",
        intent: "Noting a count discrepancy and proposing a search area.",
      },
      {
        en: "They are bunching up at the water trough — give them a minute.",
        intent: "Letting the cattle water before pushing on.",
      },
    ],
    vocab: [
      "flank rider",
      "point rider",
      "drag rider",
      "swing",
      "road crossing",
      "bunch quitter",
      "draw gate",
      "water gap",
      "pen up",
      "work the tail",
    ],
    challenges: [
      "You are moving 200 head down a county road and a pickup truck pulls up. Tell the driver to slow down and wait, explain what you are doing, and direct him through safely.",
      "Three cattle broke through a weak spot in the fence during the move. Call your position on the radio, describe where they went, and ask for backup.",
      "The lead cattle refuse to enter the loading alley. Describe what you are seeing and suggest a strategy to get them moving.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Ray, I have got about twenty head stacking up at the creek — they don't want to cross.",
      },
      {
        speaker: "ai",
        en: "Push them in slow — let the lead cow pick her own way. Don't rush them or the whole bunch will turn.",
      },
      {
        speaker: "learner",
        en: "Okay, I got two across. The rest are starting to follow. Watch the left bank — it is slick.",
      },
      {
        speaker: "ai",
        en: "Copy. I will hold the gate on the far side. You just keep the tail moving.",
      },
      {
        speaker: "learner",
        en: "One old cow is really fighting it. Should I let her settle or push harder?",
      },
      {
        speaker: "ai",
        en: "Give her thirty seconds. If she still will not go, cut her out and come back for her — do not wreck the whole herd over one cow.",
      },
    ],
  },
  {
    id: "branding-vaccination-day",
    name: "Branding & Vaccination Day",
    emoji: "🔥",
    blurb:
      "A full crew works the calves through the chute — branding, vaccinating, castrating, and ear-tagging. Roles must be clear and the pace steady.",
    counterpart: "Ranch owner, crew members, and vet tech",
    learnerRole: "Cowboy working a specific role in the branding crew",
    toneNote:
      "Loud, fast, and physical. Short commands. Safety matters — hot irons and stressed calves create risk. Know your role and don't freelance.",
    phrases: [
      {
        en: "What am I doing today — iron, needle, or flanking?",
        intent: "Asking which job you have been assigned.",
      },
      {
        en: "Iron is at temperature — you are good to go.",
        intent: "Confirming the branding iron is ready.",
      },
      {
        en: "Hold him still — I need a clean spot for the iron.",
        intent: "Asking for better control of the calf.",
      },
      {
        en: "This calf is hot — give him a second to breathe.",
        intent: "Calling for a pause when an animal is overheated or stressed.",
      },
      {
        en: "Are we doing all calves, or just the bulls?",
        intent: "Clarifying which animals get which procedures.",
      },
      {
        en: "We are running low on vaccine — how many syringes do we have left?",
        intent: "Checking vaccine supply during a long day.",
      },
      {
        en: "Tag went in crooked — should I pull it and redo it?",
        intent: "Asking whether to fix a poorly placed ear tag.",
      },
    ],
    vocab: [
      "chute",
      "headgate",
      "branding iron",
      "flank",
      "castrate",
      "ear notch",
      "ear tag",
      "vaccine",
      "modified-live vaccine",
      "booster",
    ],
    challenges: [
      "You are running the headgate and the calf is too small for a clean head lock. Describe the problem and ask the crew how they want to handle it.",
      "Halfway through the day the branding iron is leaving shallow brands — some barely visible. Raise the concern with the crew boss.",
      "A calf goes down hard in the chute and is not breathing normally. Call for a stop and describe what you are seeing.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "What do you want me on today? I did iron last year.",
      },
      {
        speaker: "ai",
        en: "You are on vaccine this time. IBR, BVD, and the clostridial — give them the five-way and then the respiratory right after. Two separate needles.",
      },
      {
        speaker: "learner",
        en: "Got it. Where am I standing — tail side or head side?",
      },
      {
        speaker: "ai",
        en: "Head side, right shoulder. Wait for the iron man to call clear before you stick. We keep it in order: brand, then you, then ear tag.",
      },
      {
        speaker: "learner",
        en: "One question — we doing all heifer calves too or just the bulls for the clostridial?",
      },
      {
        speaker: "ai",
        en: "All of them get the full program. No exceptions. Boss wants every calf covered.",
      },
    ],
  },
  {
    id: "livestock-sale-negotiation",
    name: "Livestock Sale Negotiation",
    emoji: "💵",
    blurb:
      "Talking business at the sale barn or directly with a buyer — describing your cattle, negotiating price, and understanding the terms of sale.",
    counterpart: "Cattle buyer or sale barn representative",
    learnerRole: "Ranch owner or cowboy representing the ranch",
    toneNote:
      "Confident but not boastful. Know your cattle. A good rancher can back up every claim with facts. Don't undervalue your work but don't oversell either.",
    phrases: [
      {
        en: "These are all home-raised — never been co-mingled with outside cattle.",
        intent: "Highlighting biosecurity as a selling point.",
      },
      {
        en: "They are all weaned and had their shots — health papers are right here.",
        intent: "Providing health documentation to a buyer.",
      },
      {
        en: "I was hoping to get at least $1.85 a pound on the steers.",
        intent: "Stating your price expectation.",
      },
      {
        en: "What is the cutback on the light ones?",
        intent: "Asking how much of a price discount applies to lighter animals.",
      },
      {
        en: "Can you sort them by weight class before they go through the ring?",
        intent: "Requesting that cattle be grouped for better sale prices.",
      },
      {
        en: "When would the check be mailed — same week?",
        intent: "Asking about payment timing.",
      },
      {
        en: "I have sold here before and my cattle always perform well on the feed lot.",
        intent: "Referencing past performance to build credibility.",
      },
    ],
    vocab: [
      "sale barn",
      "auction ring",
      "commission",
      "slide",
      "fill",
      "shrink",
      "sort",
      "backgrounder",
      "feedlot buyer",
      "health certificate",
    ],
    challenges: [
      "A buyer offers $1.65 but your cattle are exceptional — no health issues, well-weaned, and uniform. Counter the offer with confidence and back it up.",
      "The sale barn manager explains that your lightest steers will get a price break. Ask exactly how the slide works and calculate the impact out loud.",
      "You are selling cattle direct and the buyer wants them delivered Friday but you can only do Thursday. Negotiate the delivery date.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "I have got 47 steer calves to sell — average weight is about 620 pounds. All vaccinated, weaned 60 days ago.",
      },
      {
        speaker: "ai",
        en: "That is a nice set. Are they all same-breed or mixed?",
      },
      {
        speaker: "learner",
        en: "About 80 percent black Angus, the rest are Angus-cross. Very uniform. I can back that up with records.",
      },
      {
        speaker: "ai",
        en: "Good. On steers that weight right now the market is running around $1.78. I can offer $1.76 on the top end.",
      },
      {
        speaker: "learner",
        en: "These deserve $1.82. No health issues, I have the vac records, and they have never left the ranch.",
      },
      {
        speaker: "ai",
        en: "I'll do $1.79 and cover the commission. Bring the records and we will get them sorted by weight class before the ring.",
      },
    ],
  },
  {
    id: "fence-repair-crew",
    name: "Fence Repair Crew",
    emoji: "🔧",
    blurb:
      "Working with a crew to find and fix damaged fence — identifying the problem, gathering materials, and dividing the work.",
    counterpart: "Ranch hand or fence crew partner",
    learnerRole: "Cowboy on the fence repair crew",
    toneNote:
      "Practical and no-nonsense. Fences hold cattle in and keep strangers out. A good fence hand works fast, uses materials wisely, and does it right the first time.",
    phrases: [
      {
        en: "The wire is down for about a quarter mile — a tree fell on it in the storm.",
        intent: "Describing the extent of a fence failure.",
      },
      {
        en: "We need to replace four posts and splice the wire in two places.",
        intent: "Stating the scope of the repair job.",
      },
      {
        en: "Hand me the fence stretcher — this wire is too loose.",
        intent: "Asking for a tool by name.",
      },
      {
        en: "Drive the truck up to the third post — I need more staples.",
        intent: "Directing movement of supplies during the job.",
      },
      {
        en: "This post is rotted at the base — it's got to come out.",
        intent: "Identifying a post that needs replacement, not just repair.",
      },
      {
        en: "Can you hold tension while I wrap the splice?",
        intent: "Asking a partner to assist with a two-person task.",
      },
    ],
    vocab: [
      "barbed wire",
      "post hole digger",
      "T-post",
      "wooden corner post",
      "fence stretcher",
      "staple",
      "splice",
      "brace wire",
      "stay wire",
      "tension",
    ],
    challenges: [
      "You and your partner have materials for six repairs but the damage is longer than expected. Explain the situation and decide how to prioritize which sections to fix today.",
      "A neighbor's cattle have gotten through the damaged fence onto your ranch. Report the situation to the foreman and ask how to handle the neighbor's animals.",
      "Walk a new hand through the steps of setting a corner post and bracing it correctly.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Found the break. Looks like something big — maybe an elk — hit this section. Two posts are snapped off and about 200 feet of wire is on the ground.",
      },
      {
        speaker: "ai",
        en: "We have four posts in the truck. Let me grab the stretcher. You start clearing the old wire so we can see what we are working with.",
      },
      {
        speaker: "learner",
        en: "The corner post on the east end is still solid but the H-brace is loose. Should we reset it while we are here?",
      },
      {
        speaker: "ai",
        en: "Yeah, if it's loose it will fail in a month. Ten minutes now saves three hours later. I have rebar and brace wire in the back.",
      },
      {
        speaker: "learner",
        en: "Good call. Once we get the brace set I will start on the new posts and you can stretch the wire.",
      },
      {
        speaker: "ai",
        en: "Works for me. Watch your hands on that old barbed wire — it is rusty and there are loose ends everywhere.",
      },
    ],
  },
];

const ranchCowboyVocabSets: ModuleVocabSet[] = [
  {
    category: "Cattle & Livestock Terms",
    emoji: "🐄",
    words: [
      "steer",
      "heifer",
      "bull",
      "cow-calf pair",
      "weaned calf",
      "yearling",
      "bred heifer",
      "open cow",
      "preg-check",
      "cut",
    ],
  },
  {
    category: "Ranch Equipment",
    emoji: "🔧",
    words: [
      "chute",
      "headgate",
      "tub",
      "alley",
      "squeeze chute",
      "cutting horse",
      "rope",
      "branding iron",
      "ear tag applicator",
      "drenching gun",
    ],
  },
  {
    category: "Land & Terrain",
    emoji: "🏔️",
    words: [
      "pasture",
      "draw",
      "creek bottom",
      "cedar break",
      "water gap",
      "mesa",
      "canyon",
      "brush",
      "flat",
      "dry lot",
    ],
  },
  {
    category: "Sale & Business",
    emoji: "💰",
    words: [
      "sale barn",
      "auction ring",
      "slide",
      "shrink",
      "health papers",
      "brand inspection",
      "market report",
      "commission house",
      "backgrounding",
      "direct sale",
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// MEATPACKING / BUTCHER MODULE
// ─────────────────────────────────────────────────────────────────────────────

const meatpackingAreas: ModuleArea[] = [
  {
    id: "line-safety-brief",
    name: "Line Safety Brief",
    emoji: "🦺",
    blurb:
      "Starting every shift with a safety review — PPE requirements, knife safety, slippery floors, and emergency procedures.",
    counterpart: "Floor supervisor or safety coordinator",
    learnerRole: "Line worker or new employee",
    toneNote:
      "Non-negotiable tone. Safety is law, not preference. Be respectful but absolutely clear. Every instruction is serious.",
    phrases: [
      {
        en: "Does everyone have their cut-resistant gloves and chainmail on?",
        intent: "Confirming that PPE is being worn before the line starts.",
      },
      {
        en: "If your knife slips, call out and step back — never reach.",
        intent: "Teaching the immediate response to a slip or near-miss.",
      },
      {
        en: "The floor near the cooler door is wet — watch your step.",
        intent: "Warning about a specific slip hazard.",
      },
      {
        en: "Emergency stop button is the red one at each station — do not hesitate.",
        intent: "Identifying the location and use of emergency stops.",
      },
      {
        en: "If you feel fatigue in your wrist or hand, report it before it becomes an injury.",
        intent: "Encouraging early reporting of ergonomic strain.",
      },
      {
        en: "No unauthorized knife sharpening on the floor — take it to the steel rack.",
        intent: "Reinforcing safe knife sharpening procedures.",
      },
      {
        en: "USDA inspector is on the floor today — follow protocol exactly.",
        intent: "Alerting workers to inspector presence.",
      },
    ],
    vocab: [
      "PPE",
      "chainmail glove",
      "cut-resistant sleeve",
      "steel mesh apron",
      "hard hat",
      "hearing protection",
      "emergency stop",
      "HACCP",
      "knife scabbard",
      "ergonomic rest",
    ],
    challenges: [
      "A new worker shows up without their chainmail glove. Explain why they cannot work until it is on and direct them to where spares are kept.",
      "Someone near you drops a knife. Walk through exactly what protocol says should happen and who reports it.",
      "You notice a large puddle of water forming near the drain at station 12. Report it with urgency and request it be addressed before someone falls.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Before we start — everybody check your chainmail. I see two people without their left sleeve.",
      },
      {
        speaker: "ai",
        en: "Sorry — I thought I had it. Let me grab one from the rack.",
      },
      {
        speaker: "learner",
        en: "Please do. Nobody starts without it. Also, the belt drive near station seven was making noise last night — maintenance is aware but let me know if it gets worse.",
      },
      {
        speaker: "ai",
        en: "Understood. What do we do if it stops mid-shift?",
      },
      {
        speaker: "learner",
        en: "Hit the red stop button, back away from the line, and call me on the radio. Do not try to fix it yourself.",
      },
      {
        speaker: "ai",
        en: "Got it. Red button, back away, call the radio. Clear.",
      },
    ],
  },
  {
    id: "cut-specifications",
    name: "Cut Specifications",
    emoji: "🔪",
    blurb:
      "Understanding and communicating exact cut specs from the production sheet — trim level, thickness, bone-in vs. boneless, and packaging requirements.",
    counterpart: "Production supervisor or lead cutter",
    learnerRole: "Butcher or line worker receiving cut orders",
    toneNote:
      "Precise and technical. Cut specs are legal and contractual. Getting them wrong wastes product, fails audits, and loses accounts.",
    phrases: [
      {
        en: "This order is for boneless ribeye, one inch thick, half-pound portions — is that right?",
        intent: "Confirming the cut specification before starting.",
      },
      {
        en: "How much fat cover do they want — quarter inch or half inch?",
        intent: "Asking about fat trim specification.",
      },
      {
        en: "The customer wants USDA Select, not Choice — I flagged it on the order sheet.",
        intent: "Catching a product grade discrepancy.",
      },
      {
        en: "My scale is reading about two ounces heavy on each portion — should I adjust?",
        intent: "Reporting a portioning variance and asking for guidance.",
      },
      {
        en: "There is a lot of sinew on this loin — do you want me to clean it or does it go as-is?",
        intent: "Asking whether to do additional trimming.",
      },
      {
        en: "We are getting close to the end of this primal — not going to make the full order count.",
        intent: "Warning that product will fall short of the order.",
      },
      {
        en: "Can I see the cut sheet again? I want to double-check the packaging spec.",
        intent: "Asking to review the written specification.",
      },
    ],
    vocab: [
      "primal",
      "sub-primal",
      "portion cut",
      "yield grade",
      "quality grade",
      "trim level",
      "bone-in",
      "boneless",
      "fat cap",
      "IMPS number",
    ],
    challenges: [
      "The cut sheet says 8 oz portions but you have been cutting 8.5 oz by feel. Explain the issue to your supervisor and ask how to correct the variance.",
      "A customer order comes in asking for a custom cut you have not seen before — a semi-boneless leg cut a specific way. Ask the lead cutter to walk you through it before you begin.",
      "You are working a beef round and realize the spec calls for a different muscle group than what you have been breaking down. Stop and describe the problem clearly.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "I have got the New York strip order pulled up. It says 10 oz portions, one-and-a-quarter inch, quarter-inch fat cap. That matches what you told me earlier?",
      },
      {
        speaker: "ai",
        en: "Close — the fat cap is supposed to be an eighth inch, not quarter. The customer is a hotel account and they are very specific.",
      },
      {
        speaker: "learner",
        en: "Good catch — let me change that on my sheet. Is the packaging vacuum or the foam tray?",
      },
      {
        speaker: "ai",
        en: "Vacuum pack, four per box, labeled with today's date and the lot number from the kill floor sheet.",
      },
      {
        speaker: "learner",
        en: "And USDA graded Choice or better — I am only pulling from the Choice primal, right?",
      },
      {
        speaker: "ai",
        en: "Correct. Do not mix with the Select primals — they are on the left side of the cooler. Mark them clearly when you pull them.",
      },
    ],
  },
  {
    id: "usda-inspector-visit",
    name: "USDA Inspector Visit",
    emoji: "📋",
    blurb:
      "Interacting professionally with a USDA Food Safety Inspector during a routine or surprise inspection — answering questions, providing records, and following procedure.",
    counterpart: "USDA Food Safety Inspector (FSIS)",
    learnerRole: "Floor supervisor or QA coordinator",
    toneNote:
      "Formal, transparent, and cooperative. Inspectors have authority. Do not be defensive, do not guess — get the records and answer honestly.",
    phrases: [
      {
        en: "Good morning — here is today's HACCP log. Everything was signed off at the start of shift.",
        intent: "Proactively presenting required documentation.",
      },
      {
        en: "Our CCP records are in the binder on the QA desk — I can get them right now.",
        intent: "Directing the inspector to where critical control point records are kept.",
      },
      {
        en: "We had a corrective action this morning — the chill room temperature was at 43 degrees at 5 AM. We logged it and got it back to 36 by 6:30.",
        intent: "Transparently disclosing a deviation and the corrective action taken.",
      },
      {
        en: "I would like to call our QA manager before I answer that — is that all right?",
        intent: "Politely asking to get the right person involved.",
      },
      {
        en: "Can you clarify what section of the regulation this refers to? I want to make sure we are addressing the right issue.",
        intent: "Asking for clarification on a regulatory citation.",
      },
      {
        en: "We take every NR seriously. I will have a written response to you by end of day.",
        intent: "Responding professionally to a noncompliance record.",
      },
      {
        en: "Is there anything specific you want me to pull for you today?",
        intent: "Offering cooperation at the start of an inspection.",
      },
    ],
    vocab: [
      "HACCP",
      "CCP (critical control point)",
      "corrective action",
      "noncompliance record (NR)",
      "ante-mortem inspection",
      "post-mortem inspection",
      "FSIS",
      "sanitation standard operating procedure (SSOP)",
      "food safety plan",
      "hold tag",
    ],
    challenges: [
      "An inspector finds a temperature log with a missing entry from last Thursday. Explain how that happens, what your procedure is, and how you will prevent it going forward.",
      "The inspector asks to see your sanitation pre-op records for the last 30 days. Walk her through the binder and explain the system.",
      "You receive a noncompliance record for a product hold the inspector placed. Walk your team through what a NR means and what the next steps are.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Good morning, Inspector Flores. Good to see you. Here is the sanitation pre-op log — signed by our HACCP coordinator at 4:45 this morning.",
      },
      {
        speaker: "ai",
        en: "Thank you. I want to check your evisceration CCP temperatures. Who is monitoring that station today?",
      },
      {
        speaker: "learner",
        en: "That is Maria — she is at station three. I will walk you over. She has the log right at the station.",
      },
      {
        speaker: "ai",
        en: "I see a gap in the log at 7:15. Can you tell me what happened there?",
      },
      {
        speaker: "learner",
        en: "We had a line stop at 7:10 for a maintenance issue. Maria was called to assist. I will pull the maintenance log to document the reason for that gap.",
      },
      {
        speaker: "ai",
        en: "That is the right approach. Have the documentation ready. I will need a written corrective action by end of inspection.",
      },
    ],
  },
  {
    id: "new-employee-training-butcher",
    name: "New Employee Training",
    emoji: "👷",
    blurb:
      "Onboarding a new worker to a meatpacking floor or retail butcher shop — covering safety, station orientation, and the basics of the job.",
    counterpart: "New meatpacking employee",
    learnerRole: "Lead worker or trainer",
    toneNote:
      "Patient and thorough. The first week is when most injuries happen. Slow down, repeat key safety points, and check for understanding.",
    phrases: [
      {
        en: "Never take your eyes off the blade — it sounds obvious but it saves hands.",
        intent: "Emphasizing the most critical knife safety rule.",
      },
      {
        en: "When the line stops, keep your hands to yourself and wait for a supervisor.",
        intent: "Teaching what to do during an unexpected line stop.",
      },
      {
        en: "Here is your locker — leave your personal knife in here until break time.",
        intent: "Explaining knife storage protocol.",
      },
      {
        en: "The chill room is kept at 34 degrees — get your coat before you go in.",
        intent: "Warning about cold room temperatures.",
      },
      {
        en: "You will start on the trim table — just trim fat to the spec and put it in the bin.",
        intent: "Giving the first assignment with clear instructions.",
      },
      {
        en: "If you do not understand a spec, stop and ask. Do not guess.",
        intent: "Establishing that asking questions is expected.",
      },
    ],
    vocab: [
      "trim table",
      "chill room",
      "blast freezer",
      "boning hook",
      "scabbard",
      "steel (sharpening steel)",
      "whetstone",
      "vacuum sealer",
      "tare weight",
      "label gun",
    ],
    challenges: [
      "A new employee is struggling to hold proper knife grip after an hour. Correct them kindly, demonstrate the right grip, and explain why it matters for both safety and quality.",
      "Walk a new hire through the chill room — explain the temperature rules, the rotation system, and why they can never leave the cooler door open.",
      "Your new employee made a cut that was way off spec — half an inch thicker than ordered. Handle it constructively and explain the cost of waste.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Okay, first thing — chainmail and cut sleeve before you touch anything. Put them on now and they stay on the whole shift.",
      },
      {
        speaker: "ai",
        en: "Both hands or just the left?",
      },
      {
        speaker: "learner",
        en: "Both hands, left sleeve. Right hand gets the glove — that is your knife hand and the chainmail would slow you down. But the left is always protected.",
      },
      {
        speaker: "ai",
        en: "That makes sense. What do I do if I cut myself?",
      },
      {
        speaker: "learner",
        en: "Step back, hold pressure, call for me or any supervisor. We have a first aid station at each end of the floor. Never keep working through a cut — we need to know and document it.",
      },
      {
        speaker: "ai",
        en: "Understood. What are we cutting today?",
      },
    ],
  },
  {
    id: "customer-custom-order",
    name: "Customer Custom Order",
    emoji: "🛒",
    blurb:
      "Helping a retail customer at a butcher counter place a custom order — understanding what they want, recommending cuts, and managing expectations.",
    counterpart: "Retail customer at a butcher shop",
    learnerRole: "Retail butcher behind the counter",
    toneNote:
      "Warm, knowledgeable, and helpful. Customers come to a butcher shop because they want expertise. Educate without condescending.",
    phrases: [
      {
        en: "What are you cooking and how many people are you feeding?",
        intent: "Starting with the customer's cooking goal to recommend the right cut.",
      },
      {
        en: "For a low-and-slow braise, the chuck roast will give you way more flavor than the round.",
        intent: "Making a specific recommendation with a clear reason.",
      },
      {
        en: "How thick do you want them? I can go as thin as a quarter inch.",
        intent: "Asking for portion preference.",
      },
      {
        en: "I can French those racks for you — adds about ten minutes but they will look great on the plate.",
        intent: "Offering an upsell service that adds presentation value.",
      },
      {
        en: "That cut usually takes about two days to special order — would Tuesday work for you?",
        intent: "Setting realistic timeline expectations for a custom order.",
      },
      {
        en: "Let me write your name and number on the tag so nobody else gets these.",
        intent: "Confirming the order is held specifically for the customer.",
      },
      {
        en: "These are grass-fed from a local ranch — no hormones. Very popular right now.",
        intent: "Providing product provenance as a selling point.",
      },
    ],
    vocab: [
      "Frenched rack",
      "brisket",
      "chuck",
      "ribeye cap",
      "flank steak",
      "skirt steak",
      "flat iron",
      "marbling",
      "wet-aged",
      "dry-aged",
    ],
    challenges: [
      "A customer wants the perfect steak for a special anniversary dinner but has a $25 per pound budget. Walk them through the best options and help them decide.",
      "A customer asks for 'the most tender cut you have' for a stir-fry. Explain why tenderloin is not always the best choice for that cooking method and suggest something better.",
      "Someone comes in wanting a whole lamb but you only have lamb by the cut. Explain what you have, what a whole lamb order would look like, and when you could have it.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Good afternoon. What can I cut for you today?",
      },
      {
        speaker: "ai",
        en: "I want to do a big Sunday roast for about eight people. I am thinking prime rib but I am not sure what size I need.",
      },
      {
        speaker: "learner",
        en: "For eight people I would go with a four-bone rib roast — around seven to eight pounds. That will give everyone a good portion with a little leftover.",
      },
      {
        speaker: "ai",
        en: "Should I ask for bone-in or boneless?",
      },
      {
        speaker: "learner",
        en: "Bone-in, without a doubt. The bones act like a natural roasting rack and add flavor. I can cut the bones off after cooking if you want to carve it easier.",
      },
      {
        speaker: "ai",
        en: "That sounds perfect. Can I pick it up Saturday morning?",
      },
    ],
  },
];

const meatpackingVocabSets: ModuleVocabSet[] = [
  {
    category: "Floor & Safety Terms",
    emoji: "🦺",
    words: [
      "PPE",
      "chainmail",
      "HACCP",
      "CCP",
      "SOP",
      "corrective action",
      "NR (noncompliance record)",
      "hold tag",
      "lockout/tagout",
      "FSIS inspector",
    ],
  },
  {
    category: "Beef Cuts",
    emoji: "🥩",
    words: [
      "primal",
      "chuck",
      "rib",
      "loin",
      "round",
      "brisket",
      "flank",
      "plate",
      "shank",
      "trim",
    ],
  },
  {
    category: "Retail Butcher Terms",
    emoji: "🔪",
    words: [
      "marbling",
      "dry-aged",
      "wet-aged",
      "grass-fed",
      "USDA Choice",
      "USDA Select",
      "Prime",
      "Frenched",
      "portion-cut",
      "custom grind",
    ],
  },
  {
    category: "Processing Equipment",
    emoji: "⚙️",
    words: [
      "band saw",
      "boning knife",
      "breaking knife",
      "scabbard",
      "steel",
      "vacuum sealer",
      "blast chiller",
      "chill room",
      "scale",
      "trim table",
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// INTERNATIONAL TRAVEL MODULE
// ─────────────────────────────────────────────────────────────────────────────

const internationalTravelAreas: ModuleArea[] = [
  {
    id: "airport-arrival",
    name: "Airport Arrival",
    emoji: "✈️",
    blurb:
      "Navigating customs, immigration, baggage, and finding your ground transportation at an international airport.",
    counterpart: "Immigration officer, customs agent, or airport staff",
    learnerRole: "First-time international traveler",
    toneNote:
      "Polite and clear. Immigration officers have authority — be respectful, answer directly, and do not joke. At baggage and transportation desks be friendly and direct.",
    phrases: [
      {
        en: "I am here as a tourist — I will be staying for ten days.",
        intent: "Stating the purpose and duration of your visit.",
      },
      {
        en: "I am staying at the Grand Hyatt in the city center.",
        intent: "Providing your accommodation address when asked.",
      },
      {
        en: "I do not have anything to declare.",
        intent: "Responding to the customs declaration question.",
      },
      {
        en: "My bag did not come through. Where do I report lost luggage?",
        intent: "Asking for help when your bag is missing.",
      },
      {
        en: "How much does the airport taxi to the city center cost?",
        intent: "Asking about taxi fare before you commit.",
      },
      {
        en: "Is there a metro or train that goes to the city center?",
        intent: "Asking about public transit options.",
      },
      {
        en: "Can I get a receipt for the taxi, please?",
        intent: "Requesting a receipt for expense tracking.",
      },
    ],
    vocab: [
      "passport",
      "boarding pass",
      "customs declaration",
      "immigration",
      "baggage claim",
      "lost luggage report",
      "airport shuttle",
      "taxi rank",
      "currency exchange",
      "arrival hall",
    ],
    challenges: [
      "The immigration officer asks why you are traveling alone and how long you will stay. Answer clearly and confidently without over-explaining.",
      "The customs officer says she needs to check your bag. Stay calm, cooperate, and communicate that you have nothing to hide.",
      "Your connecting flight was delayed and you missed your luggage connection. Explain the situation at the baggage desk and find out how they will get your bag to you.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Good morning. Here is my passport and arrival card.",
      },
      {
        speaker: "ai",
        en: "Good morning. What is the purpose of your visit?",
      },
      {
        speaker: "learner",
        en: "Tourism. I will be here for nine days.",
      },
      {
        speaker: "ai",
        en: "Where will you be staying?",
      },
      {
        speaker: "learner",
        en: "I have a reservation at Hotel Miramar on Calle Principal. I have the confirmation on my phone if you need it.",
      },
      {
        speaker: "ai",
        en: "That won't be necessary. Enjoy your stay. Proceed to baggage claim — hall B on your left.",
      },
    ],
  },
  {
    id: "hotel-check-in",
    name: "Hotel Check-In",
    emoji: "🏨",
    blurb:
      "Checking into your hotel, confirming your room, and asking about services and amenities.",
    counterpart: "Hotel front desk agent",
    learnerRole: "Traveler checking in",
    toneNote:
      "Friendly and confident. You have a reservation — you are a customer. Ask for what you need politely and speak up if something is wrong.",
    phrases: [
      {
        en: "I have a reservation under the name Johnson — checking in for three nights.",
        intent: "Identifying yourself and your reservation at check-in.",
      },
      {
        en: "Is it possible to get a room away from the elevator? I am a light sleeper.",
        intent: "Making a special room request.",
      },
      {
        en: "What time is breakfast, and is it included?",
        intent: "Asking about the breakfast offering.",
      },
      {
        en: "The room I was assigned only has a single bed — I reserved a double.",
        intent: "Correcting a room type error.",
      },
      {
        en: "Is there a safe in the room for my laptop?",
        intent: "Asking about in-room security.",
      },
      {
        en: "What is the Wi-Fi password?",
        intent: "The single most universal traveler question.",
      },
      {
        en: "Could you arrange an early morning wake-up call for 5:30?",
        intent: "Requesting a wake-up call.",
      },
    ],
    vocab: [
      "reservation",
      "check-in",
      "check-out",
      "room key card",
      "porter",
      "concierge",
      "minibar",
      "wake-up call",
      "housekeeping",
      "incidentals deposit",
    ],
    challenges: [
      "You arrive at 11 AM and your room is not ready. Ask how long the wait will be, request luggage storage, and find out what you can do in the hotel in the meantime.",
      "Your room smells like smoke and you requested a non-smoking room. Explain the problem clearly and ask to be moved.",
      "You are checking out and see a minibar charge on your bill that you did not make. Dispute it politely and ask for it to be removed.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Good afternoon. I have a reservation — last name Chen, first name David. Checking in for four nights.",
      },
      {
        speaker: "ai",
        en: "Welcome, Mr. Chen. Let me pull that up. I have you in a standard double on the sixth floor. May I see your passport and credit card?",
      },
      {
        speaker: "learner",
        en: "Of course. Can I ask — is the sixth floor quiet? I am here for work and I need a good night's sleep.",
      },
      {
        speaker: "ai",
        en: "The sixth floor faces the courtyard, so it is our quietest side. I can put you in room 614.",
      },
      {
        speaker: "learner",
        en: "That would be wonderful. And is Wi-Fi included?",
      },
      {
        speaker: "ai",
        en: "Yes, complimentary for all guests. The network is HotelMiramar and the password is printed on your key card envelope.",
      },
    ],
  },
  {
    id: "restaurant-food",
    name: "Restaurant & Food",
    emoji: "🍽️",
    blurb:
      "Ordering food, asking about ingredients and allergens, and navigating a restaurant in a foreign country.",
    counterpart: "Waiter or restaurant staff",
    learnerRole: "Traveler dining out",
    toneNote:
      "Relaxed and curious. Food is culture. Ask what things are. Be adventurous but communicate clearly about allergies — that is serious.",
    phrases: [
      {
        en: "What do you recommend today?",
        intent: "Asking for the server's suggestion — builds rapport and gets good food.",
      },
      {
        en: "I am allergic to shellfish — does this dish contain any?",
        intent: "Asking about a serious food allergy.",
      },
      {
        en: "Can you make it less spicy, please?",
        intent: "Requesting a modification to spice level.",
      },
      {
        en: "What is in this dish? I do not recognize some of the ingredients.",
        intent: "Asking for explanation of an unfamiliar dish.",
      },
      {
        en: "Can we share one of each and have some extra bread?",
        intent: "Ordering family-style and adding to the order.",
      },
      {
        en: "The check, please — and can we split it two ways?",
        intent: "Asking for the bill and splitting it.",
      },
      {
        en: "Is the water safe to drink here, or should I order bottled?",
        intent: "Asking the very practical tap water safety question.",
      },
    ],
    vocab: [
      "menu del día",
      "appetizer",
      "main course",
      "dessert",
      "allergen",
      "vegetarian",
      "halal",
      "kosher",
      "draft beer",
      "cover charge",
    ],
    challenges: [
      "You are at a restaurant where the menu is only in the local language. Ask the waiter to describe the two most popular dishes and decide based on the description.",
      "Your food arrives and it is not what you ordered. Politely explain the mistake and ask if they can correct it.",
      "A street food vendor is selling something that looks amazing but you are not sure what it is. Ask three questions before deciding whether to buy.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Good evening. Do you have a menu in English, or should I try the Spanish one?",
      },
      {
        speaker: "ai",
        en: "We have both. But if I may — the tasting menu tonight is excellent. Four courses, very seasonal.",
      },
      {
        speaker: "learner",
        en: "That sounds great. I should mention I do not eat pork. Is that going to be a problem?",
      },
      {
        speaker: "ai",
        en: "Not at all. I will let the kitchen know and they will substitute the second course. Everything else is seafood and vegetables.",
      },
      {
        speaker: "learner",
        en: "Perfect. And can you suggest a local wine to go with it? Something you actually enjoy.",
      },
      {
        speaker: "ai",
        en: "Absolutely. The Albariño from the Rías Baixas — it is crisp, a little mineral, and it pairs beautifully with the seafood.",
      },
    ],
  },
  {
    id: "getting-around",
    name: "Getting Around",
    emoji: "🚕",
    blurb:
      "Navigating taxis, rideshares, buses, and metro systems in an unfamiliar city.",
    counterpart: "Taxi driver, transit worker, or fellow traveler",
    learnerRole: "Tourist trying to get from point A to point B",
    toneNote:
      "Clear and practical. Give addresses in writing when possible. Confirm the price before you get in. Keep your phone charged.",
    phrases: [
      {
        en: "Can you take me to this address? I have it written down here.",
        intent: "Providing a written address to avoid miscommunication.",
      },
      {
        en: "How much will it cost to the old town area?",
        intent: "Asking for a price estimate before entering a taxi.",
      },
      {
        en: "Does the meter start from here or from where we pick up?",
        intent: "Clarifying how the meter works.",
      },
      {
        en: "Which platform does the train to the airport leave from?",
        intent: "Finding the right train platform.",
      },
      {
        en: "Can you tell me which stop to get off for the cathedral?",
        intent: "Asking for help with a transit stop.",
      },
      {
        en: "I missed my stop — how do I get back?",
        intent: "Recovering from going past your destination.",
      },
      {
        en: "Is it safe to walk from here to the market at night?",
        intent: "Asking a local about neighborhood safety.",
      },
    ],
    vocab: [
      "taxi rank",
      "rideshare",
      "metro",
      "tram",
      "bus terminal",
      "platform",
      "single ticket",
      "day pass",
      "transfer",
      "bike share",
    ],
    challenges: [
      "You get into a taxi and realize the driver is taking a much longer route. Politely question the route and ask if there is a faster way.",
      "You are at a bus station but cannot read the schedule. Ask someone nearby to help you find the right bus to your hotel.",
      "Your phone died and you are lost in an unfamiliar neighborhood. Ask three strangers for help until you get clear directions.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Excuse me — is this taxi free?",
      },
      {
        speaker: "ai",
        en: "Yes, get in. Where to?",
      },
      {
        speaker: "learner",
        en: "I need to go to the main train station — Estación Central. Do you know it?",
      },
      {
        speaker: "ai",
        en: "Of course. About fifteen minutes, depending on traffic. The meter starts at 2.50.",
      },
      {
        speaker: "learner",
        en: "Sounds good. Can I pay with a card, or is it cash only?",
      },
      {
        speaker: "ai",
        en: "Cash only, sorry. There is an ATM inside the station if you need one.",
      },
    ],
  },
  {
    id: "medical-pharmacy-emergency",
    name: "Medical & Pharmacy Emergency",
    emoji: "🏥",
    blurb:
      "Getting help when you are sick or injured abroad — at a pharmacy, clinic, or hospital.",
    counterpart: "Pharmacist, doctor, or clinic nurse",
    learnerRole: "Sick or injured traveler",
    toneNote:
      "Stay calm even when scared. Be very precise about symptoms and your medical history. Have your insurance card and passport ready.",
    phrases: [
      {
        en: "I have had a fever since yesterday — about 102 degrees.",
        intent: "Describing your main symptom with specific detail.",
      },
      {
        en: "I take blood pressure medication at home — is it safe to combine with this?",
        intent: "Asking about drug interactions with your existing medication.",
      },
      {
        en: "I need something for food poisoning — severe stomach cramps and vomiting.",
        intent: "Describing food poisoning symptoms to a pharmacist.",
      },
      {
        en: "Do I need a prescription for this, or can I buy it over the counter?",
        intent: "Asking about prescription requirements for a medication.",
      },
      {
        en: "I think I need to go to the emergency room — can you call me a taxi?",
        intent: "Requesting urgent help getting to a hospital.",
      },
      {
        en: "I have travel insurance — here is the card with the emergency number.",
        intent: "Providing insurance information.",
      },
      {
        en: "Is there an English-speaking doctor available?",
        intent: "Asking for a doctor who speaks your language.",
      },
    ],
    vocab: [
      "prescription",
      "over the counter",
      "generic",
      "antibiotic",
      "antihistamine",
      "blood pressure",
      "allergic reaction",
      "dehydration",
      "emergency room",
      "travel insurance",
    ],
    challenges: [
      "You ate something suspicious eight hours ago and are now very sick. Go to the pharmacy and describe exactly what happened and what you need.",
      "You twisted your ankle badly and it is swollen. Ask the hotel front desk to help you find urgent care and explain the injury.",
      "The doctor at the clinic speaks limited English. Use simple, direct language to describe your symptoms, your allergies, and any medications you take.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Good afternoon. I need some help — I have had bad stomach pain since this morning and I think it was something I ate.",
      },
      {
        speaker: "ai",
        en: "I am sorry to hear that. Any vomiting or diarrhea?",
      },
      {
        speaker: "learner",
        en: "Yes, both. I have been able to keep some water down but not much.",
      },
      {
        speaker: "ai",
        en: "How many hours ago did you eat the suspect food?",
      },
      {
        speaker: "learner",
        en: "About twelve hours. I had street food last night — something with shellfish, I think.",
      },
      {
        speaker: "ai",
        en: "I will give you oral rehydration salts and something for the cramps. If the vomiting continues after 24 hours or you develop a fever above 39 degrees, go to the hospital.",
      },
    ],
  },
  {
    id: "making-local-friends",
    name: "Making Local Friends",
    emoji: "🤝",
    blurb:
      "Meeting locals, starting conversations, and navigating social situations in a new culture.",
    counterpart: "Local resident or fellow traveler",
    learnerRole: "Traveler wanting to connect authentically",
    toneNote:
      "Warm, curious, and humble. You are a guest in someone else's home culture. Show genuine interest. Accept invitations when safe. Laugh at yourself.",
    phrases: [
      {
        en: "I love your city — I have only been here two days and I am already planning to come back.",
        intent: "Opening with a genuine compliment to a local.",
      },
      {
        en: "What do you recommend that is not in the tourist guidebooks?",
        intent: "Asking a local for authentic insider recommendations.",
      },
      {
        en: "My language skills are not great but I am trying — please correct me if I get it wrong.",
        intent: "Being humble about language ability and inviting correction.",
      },
      {
        en: "What do people here actually do on weekends?",
        intent: "Showing genuine interest in local culture beyond tourism.",
      },
      {
        en: "I am from Idaho — do you know where that is? Near the Rocky Mountains.",
        intent: "Introducing where you are from in a relatable way.",
      },
      {
        en: "Can I take a photo with you? Only if you are comfortable.",
        intent: "Asking permission for a photo respectfully.",
      },
    ],
    vocab: [
      "local neighborhood",
      "market day",
      "siesta",
      "tipping customs",
      "dress code",
      "haggling",
      "greeting customs",
      "personal space norms",
      "table manners",
      "gift giving",
    ],
    challenges: [
      "You are sitting alone at a café and a local starts chatting with you. Keep the conversation going for at least four exchanges, asking genuine questions about their life.",
      "Someone invites you to a family dinner. Ask the right questions to understand what to bring, when to arrive, and what to wear.",
      "You accidentally committed a cultural faux pas — you used the wrong hand gesture or spoke too loudly. Apologize gracefully and ask what the proper way is.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Excuse me — is this seat taken? The café is pretty full.",
      },
      {
        speaker: "ai",
        en: "Not at all, please sit down. You sound American — first time here?",
      },
      {
        speaker: "learner",
        en: "Yes, first time in Spain actually. I have been here three days and I already do not want to leave. What is your favorite thing about living here?",
      },
      {
        speaker: "ai",
        en: "Honestly? The pace. Nobody rushes lunch. You sit, you talk, you order another coffee. Americans always seem to be in a hurry.",
      },
      {
        speaker: "learner",
        en: "That is fair — I have been doing exactly that. Can I ask — what part of the city do locals actually hang out in? Not the tourist area.",
      },
      {
        speaker: "ai",
        en: "Go to the Triana neighborhood on a Sunday morning. Local market, no tourists, great food. You will see the real city.",
      },
    ],
  },
];

const internationalTravelVocabSets: ModuleVocabSet[] = [
  {
    category: "Airport & Transit",
    emoji: "✈️",
    words: [
      "boarding pass",
      "customs",
      "immigration",
      "baggage claim",
      "connecting flight",
      "gate",
      "departure lounge",
      "transit visa",
      "travel insurance",
      "currency exchange",
    ],
  },
  {
    category: "Accommodation",
    emoji: "🏨",
    words: [
      "check-in",
      "check-out",
      "reservation",
      "room key",
      "concierge",
      "double room",
      "suite",
      "wake-up call",
      "late check-out",
      "housekeeping",
    ],
  },
  {
    category: "Health & Safety",
    emoji: "🏥",
    words: [
      "travel insurance card",
      "prescription",
      "antibiotic",
      "rehydration salts",
      "emergency number",
      "nearest hospital",
      "pharmacy",
      "allergic reaction",
      "food poisoning",
      "first aid kit",
    ],
  },
  {
    category: "Cultural Navigation",
    emoji: "🌍",
    words: [
      "tip",
      "haggle",
      "local custom",
      "dress modestly",
      "sacred site",
      "siesta",
      "cover charge",
      "hostel",
      "local SIM card",
      "power adapter",
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// CATHOLIC MINISTRY MODULE
// ─────────────────────────────────────────────────────────────────────────────

const catholicMinistryAreas: ModuleArea[] = [
  {
    id: "rcia-welcome",
    name: "RCIA Welcome",
    emoji: "🕯️",
    blurb:
      "Welcoming an inquirer to the Rite of Christian Initiation of Adults — the process by which adults enter the Catholic Church.",
    counterpart: "New inquirer attending their first RCIA session",
    learnerRole: "RCIA coordinator or welcoming parishioner",
    toneNote:
      "Warm, unhurried, and non-pressuring. Many inquirers come with questions, wounds, or skepticism. Meet them where they are. This is an invitation, not a sales pitch.",
    phrases: [
      {
        en: "We are so glad you came tonight — there are no stupid questions here, only honest ones.",
        intent: "Creating immediate psychological safety for a new inquirer.",
      },
      {
        en: "RCIA is a journey, not a deadline. You move at your own pace.",
        intent: "Addressing anxiety about commitment by emphasizing the process.",
      },
      {
        en: "What drew you to come tonight — is there something specific you are looking for?",
        intent: "Opening a genuine conversation about the person's spiritual search.",
      },
      {
        en: "You do not have to be Catholic to come — we welcome anyone who wants to explore.",
        intent: "Removing a barrier for non-Catholics who think they are not allowed.",
      },
      {
        en: "If it would help, I can sit with you tonight and explain what is happening as we go.",
        intent: "Offering companionship during the first unfamiliar session.",
      },
      {
        en: "We will be spending time with scripture, the Catechism, and a lot of conversation.",
        intent: "Setting expectations for what RCIA looks like.",
      },
      {
        en: "The Easter Vigil is the traditional moment for reception — but that is months away. Tonight is just a beginning.",
        intent: "Putting the timeline in perspective without rushing.",
      },
    ],
    vocab: [
      "RCIA",
      "inquirer",
      "catechumen",
      "elect",
      "scrutinies",
      "Rite of Election",
      "Easter Vigil",
      "sponsor",
      "catechist",
      "sacraments of initiation",
    ],
    challenges: [
      "An inquirer says she used to be Catholic but left after a painful experience with the Church. Respond with empathy, no defensiveness, and an invitation to talk more.",
      "A man comes with his Catholic wife but says he is not interested in converting — he just wants to understand what she believes. How do you welcome him warmly?",
      "An inquirer asks directly: 'Do I have to believe everything the Church teaches to come here?' Give an honest, welcoming answer.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Good evening — welcome. I do not think we have met. I am Deacon Robert. Are you here for RCIA?",
      },
      {
        speaker: "ai",
        en: "Yes. I am not sure I belong here — I was raised Baptist and I have a lot of doubts.",
      },
      {
        speaker: "learner",
        en: "You are exactly who this program is for. Doubts are the beginning of real faith, not the end of it. What made you decide to come tonight?",
      },
      {
        speaker: "ai",
        en: "Honestly? My wife is Catholic. I have been coming to Mass with her and something just started pulling at me. I want to understand it better.",
      },
      {
        speaker: "learner",
        en: "That pull is worth following. You do not have to decide anything tonight. Just come in, ask questions, and see how it feels.",
      },
      {
        speaker: "ai",
        en: "That is more relaxed than I expected. I thought you would hand me a membership form.",
      },
    ],
  },
  {
    id: "sacramental-prep-baptism",
    name: "Sacramental Prep — Baptism",
    emoji: "💧",
    blurb:
      "Preparing parents for their child's baptism — explaining the sacrament, the commitment it involves, and what the ceremony will look like.",
    counterpart: "Parents preparing their infant for Baptism",
    learnerRole: "Parish priest, deacon, or baptism preparation coordinator",
    toneNote:
      "Joyful and pastoral. This is a happy occasion. Explain clearly but do not lecture. Ask about the family's faith life and meet them where they are.",
    phrases: [
      {
        en: "Congratulations on your new baby — this is a beautiful moment for your family.",
        intent: "Beginning with genuine celebration.",
      },
      {
        en: "In Baptism, your child is welcomed into the family of God — it is a covenant, not just a ceremony.",
        intent: "Explaining the theological meaning accessibly.",
      },
      {
        en: "As parents, you are promising to raise your child in the faith. That is the heart of what we ask.",
        intent: "Making clear what the parental commitment involves.",
      },
      {
        en: "Who is the godparent? They should be a practicing Catholic who can be a faith companion for your child.",
        intent: "Clarifying the requirements for godparents.",
      },
      {
        en: "The ceremony takes about 30 minutes — would you like me to walk you through it step by step?",
        intent: "Offering to demystify the ritual.",
      },
      {
        en: "Do you have any questions about what we believe or what you will be asked to say during the rite?",
        intent: "Inviting questions before the ceremony.",
      },
      {
        en: "We baptize by pouring water three times and saying the Trinitarian formula — the water is blessed.",
        intent: "Explaining the physical act of baptism clearly.",
      },
    ],
    vocab: [
      "sacrament",
      "Trinitarian formula",
      "godparent",
      "chrism oil",
      "white garment",
      "Easter candle",
      "rite of baptism",
      "original sin",
      "covenant",
      "domestic church",
    ],
    challenges: [
      "The parents admit they have not been to Mass in years. Acknowledge it without judgment and refocus on their hopes for their child.",
      "The proposed godmother is not Catholic. Explain the requirement kindly and suggest alternatives like a Christian witness.",
      "A parent asks: 'What happens to my baby if she dies without being baptized?' Answer with pastoral care and theological honesty.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Congratulations on little Sofia. How old is she now?",
      },
      {
        speaker: "ai",
        en: "She is six weeks old. We are very excited. We want her baptized soon — both our families are expecting it.",
      },
      {
        speaker: "learner",
        en: "That is wonderful. I want to make sure the ceremony is meaningful for you, not just a family tradition. What does baptism mean to you personally?",
      },
      {
        speaker: "ai",
        en: "Honestly, Father, I am still figuring that out. I believe in God but I am not sure about everything.",
      },
      {
        speaker: "learner",
        en: "That is a very honest answer and I respect it. What we ask of you is your intention to raise Sofia in the faith — to bring her to Mass, to teach her to pray. Can you commit to that?",
      },
      {
        speaker: "ai",
        en: "Yes. That we can do. We want her to grow up with what we did not hold onto ourselves.",
      },
    ],
  },
  {
    id: "pastoral-counseling-visit",
    name: "Pastoral Counseling Visit",
    emoji: "🙏",
    blurb:
      "Visiting a parishioner who is going through difficulty — grief, illness, family breakdown, or spiritual crisis.",
    counterpart: "Parishioner in need of pastoral support",
    learnerRole: "Parish priest, deacon, or trained lay minister",
    toneNote:
      "Quiet, present, and compassionate. Do not rush to fix. Listening is ministry. Offer prayer when appropriate but follow the person's lead. Never minimize their pain.",
    phrases: [
      {
        en: "Thank you for letting me come. I just wanted to be with you.",
        intent: "Opening a visit with presence, not agenda.",
      },
      {
        en: "You do not have to say anything — I am just here.",
        intent: "Removing any pressure to perform or explain.",
      },
      {
        en: "How are you holding up — really?",
        intent: "Going past the social 'fine' to invite honesty.",
      },
      {
        en: "I am not going to pretend I have an easy answer to this. But I am not going anywhere.",
        intent: "Being honest about the limits of what you can offer while committing to presence.",
      },
      {
        en: "Would it be all right if we prayed together before I go?",
        intent: "Offering prayer without assuming the person is ready.",
      },
      {
        en: "Is there anything practical I can help with — food, transportation, someone to sit with you?",
        intent: "Moving from spiritual to practical care.",
      },
      {
        en: "The Church does not leave you to face this alone. We are your family.",
        intent: "Naming the community as a real source of support.",
      },
    ],
    vocab: [
      "pastoral visit",
      "anointing of the sick",
      "viaticum",
      "spiritual direction",
      "rosary",
      "divine mercy",
      "grief ministry",
      "corporal works of mercy",
      "spiritual works of mercy",
      "accompaniment",
    ],
    challenges: [
      "A parishioner says she is angry at God because of her daughter's death and she does not want to pray. Respond with honesty and love, without dismissing her anger.",
      "A man tells you his marriage is falling apart and he does not think God cares. Listen, respond, and offer what the Church can genuinely offer without hollow reassurance.",
      "You visit a sick parishioner who has just received a terminal diagnosis. She has questions about death and dying. Be present and honest.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Maria, I heard about your husband's passing. I am so sorry. May I come in?",
      },
      {
        speaker: "ai",
        en: "Please, Father. I just — I do not know what to do with myself. The house is so quiet.",
      },
      {
        speaker: "learner",
        en: "Quiet can be unbearable. How long were you together?",
      },
      {
        speaker: "ai",
        en: "Forty-one years. People keep telling me he is in a better place. I know that. But I am still here.",
      },
      {
        speaker: "learner",
        en: "You are allowed to grieve. That is not a lack of faith — it is love. Forty-one years of love does not just disappear because he is gone.",
      },
      {
        speaker: "ai",
        en: "I keep talking to him. Is that crazy?",
      },
    ],
  },
  {
    id: "mass-explanation",
    name: "Mass Explanation",
    emoji: "⛪",
    blurb:
      "Explaining the structure and meaning of the Catholic Mass to someone who is attending for the first time or returning after a long absence.",
    counterpart: "Non-Catholic guest or lapsed Catholic returning to Mass",
    learnerRole: "Catechist, RCIA sponsor, or welcoming parishioner",
    toneNote:
      "Welcoming and clear. The Mass can feel confusing or even alienating to an outsider. Explain it with reverence but without jargon. Invite participation at whatever level is comfortable.",
    phrases: [
      {
        en: "Mass has two main parts — the Liturgy of the Word and the Liturgy of the Eucharist.",
        intent: "Giving the big-picture structure of the Mass simply.",
      },
      {
        en: "You are welcome to sit, stand, or kneel with us — follow along as best you can.",
        intent: "Removing pressure on a guest to perform the gestures perfectly.",
      },
      {
        en: "The readings come from the Bible — Old Testament, a Psalm, then a letter, then the Gospel.",
        intent: "Explaining the Liturgy of the Word structure.",
      },
      {
        en: "The Eucharist is the most sacred part — Catholics believe the bread and wine truly become Christ's body and blood.",
        intent: "Explaining real presence simply and without apology.",
      },
      {
        en: "If you are not Catholic, please come up with your arms crossed for a blessing — you will not receive communion.",
        intent: "Explaining the communion protocol for non-Catholics without embarrassment.",
      },
      {
        en: "The sign of peace is when we turn and shake hands or offer peace to those around us.",
        intent: "Previewing a ritual gesture that can surprise newcomers.",
      },
      {
        en: "Mass is about an hour. There is coffee and donuts after — please stay and meet some people.",
        intent: "Making the post-Mass social welcoming.",
      },
    ],
    vocab: [
      "liturgy",
      "Eucharist",
      "transubstantiation",
      "tabernacle",
      "genuflection",
      "Gloria",
      "Creed",
      "homily",
      "offertory",
      "dismissal",
    ],
    challenges: [
      "A Protestant visitor asks why Catholics receive communion differently than in her church. Explain transubstantiation respectfully without implying her tradition is wrong.",
      "A visitor is confused by all the standing, sitting, and kneeling. Explain what each posture means spiritually, not just ritually.",
      "Someone asks you why Catholics pray to Mary if she is not God. Answer theologically and accessibly.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Welcome — is this your first time at Mass? I am happy to sit with you and explain things as we go.",
      },
      {
        speaker: "ai",
        en: "Yes, my girlfriend invited me. I do not know when to stand or what anything means.",
      },
      {
        speaker: "learner",
        en: "No worries — just follow the people around you and do not worry about getting it perfect. Nobody is watching.",
      },
      {
        speaker: "ai",
        en: "What is that thing at the front — the gold box behind the altar?",
      },
      {
        speaker: "learner",
        en: "That is the tabernacle. It holds the consecrated hosts — what Catholics believe are the real presence of Jesus. That is why people genuflect, or bow on one knee, when they pass it.",
      },
      {
        speaker: "ai",
        en: "And at communion — should I go up?",
      },
    ],
  },
  {
    id: "confession-prep",
    name: "Confession Prep",
    emoji: "🕊️",
    blurb:
      "Preparing a parishioner for the Sacrament of Reconciliation — explaining how it works, what to say, and how to make a good examination of conscience.",
    counterpart: "Parishioner preparing for first confession or returning after many years",
    learnerRole: "Parish priest, RCIA catechist, or sacramental prep minister",
    toneNote:
      "Gentle and non-shaming. Confession can feel frightening, especially for returnees. Emphasize God's mercy. Be practical about the format without trivializing the sacrament.",
    phrases: [
      {
        en: "Confession is not about making a perfect list — it is about an honest heart.",
        intent: "Relieving perfectionism around the sacrament.",
      },
      {
        en: "You begin by saying how long it has been since your last confession.",
        intent: "Giving the practical opening line.",
      },
      {
        en: "The priest acts in the person of Christ — he is not judging you as a man.",
        intent: "Explaining the theological role of the priest in persona Christi.",
      },
      {
        en: "After you confess, the priest will give you a penance — usually a prayer or a small act of kindness.",
        intent: "Demystifying penance so it is not frightening.",
      },
      {
        en: "Act of contrition — I will give you a card with the words if you do not remember them.",
        intent: "Making the act of contrition accessible.",
      },
      {
        en: "The absolution is the moment God forgives you — it is real, and it is complete.",
        intent: "Emphasizing the efficacy and completeness of absolution.",
      },
      {
        en: "If you are nervous, that is actually a good sign — it means you take it seriously.",
        intent: "Reframing nervousness as evidence of sincerity.",
      },
    ],
    vocab: [
      "reconciliation",
      "absolution",
      "act of contrition",
      "penance",
      "examination of conscience",
      "mortal sin",
      "venial sin",
      "seal of confession",
      "in persona Christi",
      "firm purpose of amendment",
    ],
    challenges: [
      "A returning Catholic says she has not been to confession in twenty years and does not even know what to say. Walk her through the entire format step by step.",
      "A man asks if the priest will remember what he confesses and tell others. Explain the seal of confession clearly and honestly.",
      "Someone confesses a sin they feel very ashamed of and asks if God can really forgive something that bad. Respond with mercy and sound theology.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "I can tell you are nervous. How long has it been since your last confession?",
      },
      {
        speaker: "ai",
        en: "About fifteen years. I do not even know the words anymore. I feel ridiculous.",
      },
      {
        speaker: "learner",
        en: "You are not ridiculous. Coming back after fifteen years takes more courage than someone who comes every week. Let me give you a card with the act of contrition — you can just read it.",
      },
      {
        speaker: "ai",
        en: "What if I forget something important? Something from fifteen years ago?",
      },
      {
        speaker: "learner",
        en: "Be as honest as you can about what you remember. God sees the sincerity of your heart. What you genuinely forget is not held against you.",
      },
      {
        speaker: "ai",
        en: "What does the priest actually say when he forgives you?",
      },
    ],
  },
  {
    id: "bereavement-visit",
    name: "Bereavement Visit",
    emoji: "🌹",
    blurb:
      "Accompanying a family in the days following the death of a loved one — offering pastoral presence, arranging sacramental support, and planning the funeral liturgy.",
    counterpart: "Bereaved family member",
    learnerRole: "Parish priest, deacon, or bereavement minister",
    toneNote:
      "Slow, gentle, and full of silence. Do not fill every space with words. Practical help matters. Let the family lead on timing and how much conversation they want.",
    phrases: [
      {
        en: "I am deeply sorry for your loss. How is everyone holding up?",
        intent: "Opening with grief acknowledgment and care for the whole family.",
      },
      {
        en: "Whenever you are ready, I would like to talk about the funeral Mass — but only when you are ready.",
        intent: "Moving toward practical planning without rushing.",
      },
      {
        en: "Would you like to choose the readings, or would you like suggestions?",
        intent: "Offering choice and participation in the liturgy planning.",
      },
      {
        en: "We will pray the rosary here at the house tonight if the family would like that.",
        intent: "Offering a traditional prayer of accompaniment.",
      },
      {
        en: "The Church will take care of all of this — you do not have to figure it out alone.",
        intent: "Offering the full institutional support of the parish.",
      },
      {
        en: "He lived a full life of faith — the Church gives him back to God at the altar.",
        intent: "Offering a theological frame for the Christian death.",
      },
      {
        en: "Is there anything you need that the parish can help provide this week — meals, transportation, company?",
        intent: "Connecting bereavement ministry to corporal works of mercy.",
      },
    ],
    vocab: [
      "funeral Mass",
      "vigil service",
      "rosary",
      "committal",
      "obituary",
      "pallbearer",
      "pall",
      "paschal candle",
      "eternal rest",
      "Christian burial",
    ],
    challenges: [
      "A family member asks why God would let her father die so painfully. Respond honestly, without pat answers, and with genuine compassion.",
      "The family wants music at the funeral that the pastor does not think is liturgically appropriate. Navigate the conversation with pastoral sensitivity and find a middle ground.",
      "A non-Catholic family member asks if her Catholic father who died can still be saved if he had not been to Mass in many years. Answer with mercy and theological care.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Mrs. Gómez, I came as soon as I heard. I am so sorry about your husband. He was a wonderful man.",
      },
      {
        speaker: "ai",
        en: "Thank you, Father. He went so quickly. I did not get to say goodbye.",
      },
      {
        speaker: "learner",
        en: "That is one of the hardest kinds of grief. He knew how much you loved him — forty years of your life together said everything that needed to be said.",
      },
      {
        speaker: "ai",
        en: "Was he afraid? Do you think he was afraid?",
      },
      {
        speaker: "learner",
        en: "Your husband received the Anointing of the Sick just three weeks ago. He was prepared. He was not alone, and neither are you.",
      },
      {
        speaker: "ai",
        en: "I keep thinking about the funeral. I do not even know where to start.",
      },
    ],
  },
  {
    id: "youth-ministry",
    name: "Youth Ministry",
    emoji: "🎉",
    blurb:
      "Engaging teenagers and young adults in the faith community — through events, retreats, honest conversation, and walking with them through questions.",
    counterpart: "Parish teenager or young adult",
    learnerRole: "Youth minister or young adult ministry leader",
    toneNote:
      "Real, energetic, and honest. Do not talk down to young people. They can sense condescension immediately. Meet them in their world. Humor is welcome. Hard questions deserve real answers.",
    phrases: [
      {
        en: "I am not going to pretend there are easy answers to everything you are asking — but I will wrestle with the questions alongside you.",
        intent: "Building credibility with young people through intellectual honesty.",
      },
      {
        en: "This retreat is about you encountering God, not just doing Catholic stuff.",
        intent: "Framing a retreat as personal and experiential, not merely religious routine.",
      },
      {
        en: "What do you actually believe? Not what you were told — what do you think?",
        intent: "Inviting authentic faith exploration rather than recited answers.",
      },
      {
        en: "You are not too young to have a real relationship with God. Age has nothing to do with it.",
        intent: "Addressing the common young person's feeling that faith is for adults.",
      },
      {
        en: "The Church needs your generation — not someday when you are 40. Right now.",
        intent: "Communicating genuine belonging and urgency.",
      },
      {
        en: "Service is where a lot of people first feel God. Have you ever done mission work or volunteered?",
        intent: "Connecting service and mission as an entry point to faith.",
      },
    ],
    vocab: [
      "confirmation",
      "retreat",
      "life teen",
      "FOCUS",
      "World Youth Day",
      "service trip",
      "theology of the body",
      "young adult group",
      "adoration",
      "discipleship",
    ],
    challenges: [
      "A 16-year-old asks you why the Church teaches what it does about sexuality when it seems outdated. Give a real, thoughtful answer that takes the question seriously.",
      "A teenager says she stopped believing when her parents got divorced and God did not answer her prayers. Listen well and respond honestly.",
      "A young man wants to stop coming to youth group because his friends think it is embarrassing. Help him think through it without shaming him.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Hey, good to see you tonight. I was not sure you were going to come back after last week's discussion got pretty heated.",
      },
      {
        speaker: "ai",
        en: "I almost did not. Honestly, some of what was said bugged me. The answers felt too neat.",
      },
      {
        speaker: "learner",
        en: "Good. If the answers feel too neat, push back. I would rather have a room full of people asking hard questions than a room full of people pretending they believe things they don't.",
      },
      {
        speaker: "ai",
        en: "Okay. Here is my real question: Why should I believe in a God who lets suffering happen? Like, real suffering. Kids dying.",
      },
      {
        speaker: "learner",
        en: "That is the most important question in theology and I am not going to give you a five-second answer. But here is what I can tell you: the Church does not ask you to pretend suffering is okay. The cross is God in suffering, not God outside it.",
      },
      {
        speaker: "ai",
        en: "I had never thought about it that way. Keep going.",
      },
    ],
  },
];

const catholicMinistryVocabSets: ModuleVocabSet[] = [
  {
    category: "Sacraments",
    emoji: "✝️",
    words: [
      "Baptism",
      "Confirmation",
      "Eucharist",
      "Reconciliation",
      "Anointing of the Sick",
      "Holy Orders",
      "Matrimony",
      "absolution",
      "chrism",
      "viaticum",
    ],
  },
  {
    category: "Mass & Liturgy",
    emoji: "⛪",
    words: [
      "Liturgy of the Word",
      "Liturgy of the Eucharist",
      "Gloria",
      "Creed",
      "homily",
      "offertory",
      "consecration",
      "sign of peace",
      "dismissal",
      "genuflection",
    ],
  },
  {
    category: "Ministry Roles",
    emoji: "🙏",
    words: [
      "pastor",
      "deacon",
      "catechist",
      "RCIA coordinator",
      "youth minister",
      "extraordinary minister",
      "lector",
      "bereavement minister",
      "spiritual director",
      "pastoral associate",
    ],
  },
  {
    category: "Prayer & Devotion",
    emoji: "🕯️",
    words: [
      "rosary",
      "divine mercy chaplet",
      "adoration",
      "novena",
      "lectio divina",
      "examination of conscience",
      "Act of Contrition",
      "Memorare",
      "angelus",
      "benediction",
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// EXPORTED ARRAY — all five modules
// ─────────────────────────────────────────────────────────────────────────────

export const AGRI_TRAVEL_FAITH_CONTENT: AgriTravelFaithContent[] = [
  {
    moduleId: "dairy-farmer",
    areas: dairyFarmerAreas,
    vocabSets: dairyFarmerVocabSets,
  },
  {
    moduleId: "ranch-cowboy",
    areas: ranchCowboyAreas,
    vocabSets: ranchCowboyVocabSets,
  },
  {
    moduleId: "meatpacking-butcher",
    areas: meatpackingAreas,
    vocabSets: meatpackingVocabSets,
  },
  {
    moduleId: "international-travel",
    areas: internationalTravelAreas,
    vocabSets: internationalTravelVocabSets,
  },
  {
    moduleId: "catholic-ministry",
    areas: catholicMinistryAreas,
    vocabSets: catholicMinistryVocabSets,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// HELPER FUNCTIONS
// ─────────────────────────────────────────────────────────────────────────────

export function getAgriTravelFaithContent(
  moduleId: string
): AgriTravelFaithContent | null {
  return AGRI_TRAVEL_FAITH_CONTENT.find((m) => m.moduleId === moduleId) ?? null;
}

export function getAgriTravelFaithArea(
  moduleId: string,
  areaId: string
): ModuleArea | null {
  return (
    getAgriTravelFaithContent(moduleId)?.areas.find((a) => a.id === areaId) ??
    null
  );
}
