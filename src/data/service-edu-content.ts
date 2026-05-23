// Service industry and education scenario content.
// Phrases are stored in English — the AI tutor translates and roleplays
// in the learner's selected target language.

export interface ModulePhrase {
  /** Short English phrase the learner wants to be able to say. */
  en: string;
  /** What the learner is doing with this phrase (intent / register). */
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
  /** Who the AI plays opposite the learner in this scenario. */
  counterpart: string;
  /** Who the learner is in this scenario. */
  learnerRole: string;
  /** Tone / register guidance for the AI. */
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

export interface ServiceEduContent {
  moduleId: string;
  areas: ModuleArea[];
  vocabSets: ModuleVocabSet[];
}

/** @deprecated Use ServiceEduContent */
export type ModuleContent = ServiceEduContent;

// ─────────────────────────────────────────────
// RESTAURANT & HOSPITALITY
// ─────────────────────────────────────────────

const restaurantHospitalityAreas: ModuleArea[] = [
  {
    id: "pre-shift-briefing",
    name: "Pre-Shift Briefing",
    emoji: "📋",
    blurb:
      "The manager runs the team through tonight's menu, VIP tables, and service priorities before doors open.",
    counterpart: "Front-of-house staff gathered before service begins.",
    learnerRole: "Floor manager or head server running pre-shift",
    toneNote:
      "Professional, efficient, motivating. Good pre-shift is brief — five minutes, specific information, send people out ready.",
    phrases: [
      {
        en: "Tonight's 86 list: we're out of the salmon and the crème brûlée — don't let guests order them.",
        intent: "Announce item unavailability",
      },
      {
        en: "Table 12 is a VIP — the guest is a food critic. No errors, no rushing, be invisible when they're eating.",
        intent: "Brief team on VIP guests",
      },
      {
        en: "The kitchen is running a special tonight — pan-seared duck breast, $42. Learn the description cold.",
        intent: "Introduce a nightly special",
      },
      {
        en: "Turnover is going to be heavy — we have three large parties at 7:30. Coordinate your sections or we'll have chaos.",
        intent: "Warn of a high-volume window",
      },
      {
        en: "Greet every table within 60 seconds. That's not a suggestion — that's the standard.",
        intent: "Reinforce a service standard",
      },
      {
        en: "If a guest has a complaint, solve it first and inform me after. Don't escalate minor issues.",
        intent: "Empower staff to handle problems",
      },
      {
        en: "Any questions before we open? Let's make tonight a great one.",
        intent: "Close the briefing and motivate the team",
      },
    ],
    vocab: [
      "86",
      "VIP",
      "nightly special",
      "turnover",
      "section",
      "upsell",
      "cover",
      "running food",
    ],
    challenges: [
      "Brief a new server on the 86 list, the nightly special, and a VIP table in under two minutes.",
      "Handle a situation where two servers both claim the same section right before service.",
      "Motivate a tired team before a Friday night rush after a difficult lunch service.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Alright everyone — three things before we open. First, we're 86 on salmon and the brûlée. If someone orders them, apologize and redirect to the sea bass or the lava cake.",
      },
      {
        speaker: "ai",
        en: "Got it. What's the special tonight?",
      },
      {
        speaker: "learner",
        en: "Pan-seared duck breast with cherry gastrique and roasted fingerlings. It's $42. Practice saying that before you hit the floor.",
      },
      {
        speaker: "ai",
        en: "And the VIP situation — is that just table 12, or are there others?",
      },
      {
        speaker: "learner",
        en: "Just 12. Her name is Margaret, she writes for the city magazine. Attentive but not hovering — and absolutely do not mention who she is near other guests.",
      },
      {
        speaker: "ai",
        en: "Understood. We're ready.",
      },
    ],
  },
  {
    id: "table-service",
    name: "Table Service",
    emoji: "🍽️",
    blurb:
      "Full table service from greeting to bill — taking orders, answering questions, upselling, and timing courses.",
    counterpart: "Guests at a table in a mid-to-upscale restaurant.",
    learnerRole: "Server",
    toneNote:
      "Warm, polished, and attentive without being intrusive. Read the table's energy — some guests want conversation, others want to be left alone.",
    phrases: [
      {
        en: "Good evening — welcome. My name is Marco and I'll be taking care of you tonight. Can I start you off with still or sparkling water?",
        intent: "Greeting and opening the table",
      },
      {
        en: "Our sea bass tonight is prepared with a lemon beurre blanc — it's one of the chef's favorites this season.",
        intent: "Describe a dish with enthusiasm",
      },
      {
        en: "Excellent choice. Would you like me to pair that with a glass of the Sancerre? It's a beautiful match.",
        intent: "Wine pairing upsell",
      },
      {
        en: "I'll put that right in for you — your appetizers should be out in about ten minutes.",
        intent: "Set course timing expectations",
      },
      {
        en: "I noticed you haven't touched your entrée — is everything alright? I'm happy to have the kitchen make any adjustments.",
        intent: "Check in on a guest who isn't eating",
      },
      {
        en: "Can I tempt you with our dessert menu? The chocolate fondant takes about twelve minutes, so now would be the perfect time.",
        intent: "Time the dessert offer",
      },
      {
        en: "Whenever you're ready — I'll bring your bill. It's been a pleasure having you with us tonight.",
        intent: "Close out the table gracefully",
      },
    ],
    vocab: [
      "beurre blanc",
      "mise en place",
      "upsell",
      "pairing",
      "course",
      "cover",
      "on the fly",
      "side work",
    ],
    challenges: [
      "Handle a guest who has a complex allergy and questions every ingredient in a dish.",
      "Upsell a wine pairing to a guest who says they weren't planning to order wine.",
      "Recover gracefully after bringing the wrong entrée to a guest.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Good evening — welcome in. I'm Cara, and I'll be with you tonight. Can I start you off with some water?",
      },
      {
        speaker: "ai",
        en: "Still please. We're celebrating an anniversary tonight — can you do anything special?",
      },
      {
        speaker: "learner",
        en: "Absolutely — congratulations! I'll let the kitchen know and we'll have something for you at dessert. Are you ready to order, or would you like a few more minutes?",
      },
      {
        speaker: "ai",
        en: "A few more minutes. Actually — what's the risotto like? I'm not sure if it's heavy.",
      },
      {
        speaker: "learner",
        en: "It's actually quite light — it's finished with truffle oil and parmesan, and it's not a full entree portion, so it works beautifully as a starter. Many guests love it.",
      },
      {
        speaker: "ai",
        en: "Sold. We'll start with that. Thank you.",
      },
    ],
  },
  {
    id: "kitchen-communication",
    name: "Kitchen Communication",
    emoji: "👨‍🍳",
    blurb:
      "Front-of-house and back-of-house communication — firing courses, modifications, allergy alerts, and timing.",
    counterpart: "Line cook, expediter, or head chef.",
    learnerRole: "Server or floor manager coordinating with the kitchen",
    toneNote:
      "Direct and precise. Kitchen communication is not a conversation — it's a relay of exact information. No ambiguity.",
    phrases: [
      {
        en: "Fire table 7 — two mains when you're ready.",
        intent: "Call to start cooking main courses",
      },
      {
        en: "Modification on table 4 — the chicken needs to be dairy-free. No butter, no cream sauce. Allergy.",
        intent: "Communicate a dietary modification",
      },
      {
        en: "How long on the sea bass for table 9? Guest has a hard out at 9:30.",
        intent: "Request ETA on a dish",
      },
      {
        en: "I need a re-fire on table 11 — the steak came out medium when they ordered medium-rare. Priority, please.",
        intent: "Request a remake",
      },
      {
        en: "Table 3 is 86 on knowledge — they don't know the hen was the last one. Let's comp them an appetizer and offer an alternative.",
        intent: "Handle a supply shortage at the table gracefully",
      },
      {
        en: "Running food to table 6 — two salmon, one duck. Who can carry the third?",
        intent: "Coordinate food running",
      },
      {
        en: "Thank you, chef — that's perfect. Sending it now.",
        intent: "Acknowledge and dispatch food",
      },
    ],
    vocab: [
      "fire",
      "re-fire",
      "expo",
      "on the fly",
      "allergy alert",
      "86",
      "mise en place",
      "expedite",
    ],
    challenges: [
      "Communicate a severe nut allergy to the kitchen for a table that just placed an order.",
      "Negotiate timing with the expediter when two tables in your section fire at the same time.",
      "Handle a re-fire situation diplomatically when the kitchen is backed up on a busy night.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Chef — allergy alert on table 4. Guest has a severe shellfish allergy. She's having the pasta — I need confirmation no shared surfaces.",
      },
      {
        speaker: "ai",
        en: "Copy. We'll use the clean station. How many covers on table 4?",
      },
      {
        speaker: "learner",
        en: "Four covers — one pasta allergy, one risotto, two duck. Fire when you're ready on the mains.",
      },
      {
        speaker: "ai",
        en: "Firing now. Eight minutes on duck, six on pasta. I'll plate the allergy dish separately — you run it personally.",
      },
      {
        speaker: "learner",
        en: "Understood. I'll be at the pass. Thank you.",
      },
    ],
  },
  {
    id: "guest-complaint",
    name: "Guest Complaint",
    emoji: "😤",
    blurb:
      "Handling a dissatisfied guest with empathy and resolution — defusing tension and turning the experience around.",
    counterpart: "An unhappy guest at the table or at the front desk.",
    learnerRole: "Server, manager, or front desk staff",
    toneNote:
      "Calm, empathetic, solution-first. Never argue or make excuses — acknowledge, apologize, and act.",
    phrases: [
      {
        en: "I'm so sorry about this — that's absolutely not the experience we want you to have.",
        intent: "Sincere apology without defensiveness",
      },
      {
        en: "Let me fix that right now. I'll have a fresh one out to you within five minutes.",
        intent: "Immediate action response",
      },
      {
        en: "I completely understand your frustration — the wait time tonight was not acceptable.",
        intent: "Validate the guest's feeling",
      },
      {
        en: "I'd like to remove that from your bill and offer you a dessert on us.",
        intent: "Offer a concrete service recovery gesture",
      },
      {
        en: "May I ask — is there anything else I can do to make the rest of your evening better?",
        intent: "Check in after resolution",
      },
      {
        en: "I'm going to personally make sure this doesn't happen on your next visit.",
        intent: "Commitment to future improvement",
      },
      {
        en: "Thank you for letting me know — your feedback genuinely helps us improve.",
        intent: "Thank the guest for raising the issue",
      },
    ],
    vocab: [
      "service recovery",
      "comp",
      "escalate",
      "empathy",
      "resolution",
      "follow-up",
      "guest experience",
      "feedback",
    ],
    challenges: [
      "De-escalate a guest who is visibly angry about a 45-minute wait for their entree.",
      "Handle a complaint about a dish that the guest found disappointing but technically correct.",
      "Apologize for a billing error discovered after the guest has already paid.",
    ],
    sampleConversation: [
      {
        speaker: "ai",
        en: "Excuse me — I ordered my steak medium-rare over an hour ago and it just came out well done. This is ridiculous.",
      },
      {
        speaker: "learner",
        en: "I am so sorry — that is completely unacceptable and I take full responsibility. Let me get that fixed immediately.",
      },
      {
        speaker: "ai",
        en: "I don't want to wait another hour. We have a theater reservation.",
      },
      {
        speaker: "learner",
        en: "I hear you. I'm going to put your steak at the top of the queue — it will be eight minutes maximum. And I'm removing it from your bill tonight. I'm sorry we let you down.",
      },
      {
        speaker: "ai",
        en: "Eight minutes — okay. But please, make sure it's right this time.",
      },
      {
        speaker: "learner",
        en: "I'll carry it out personally and verify it before it reaches your table. Thank you for your patience.",
      },
    ],
  },
  {
    id: "hotel-check-in",
    name: "Hotel Check-In",
    emoji: "🏨",
    blurb:
      "Front desk check-in — verifying reservations, explaining amenities, handling upgrades, and managing expectations.",
    counterpart: "Hotel guest arriving at the front desk.",
    learnerRole: "Front desk agent",
    toneNote:
      "Polished, welcoming, efficient. Guests want to feel recognized and get to their room quickly — balance warmth with speed.",
    phrases: [
      {
        en: "Good evening — welcome to the hotel. May I have the name on the reservation?",
        intent: "Open the check-in",
      },
      {
        en: "I see your reservation — we have you in a king room on the 14th floor. Check-out is Sunday at noon.",
        intent: "Confirm reservation details",
      },
      {
        en: "I'd like to upgrade you to a corner suite at no additional charge — it has a great view of the harbor.",
        intent: "Offer a complimentary upgrade",
      },
      {
        en: "Breakfast is served in the Terrace Restaurant from 6:30 to 10:30. Your room rate includes a continental buffet.",
        intent: "Explain included amenities",
      },
      {
        en: "If you need anything during your stay, dial zero for the front desk — we're available 24 hours.",
        intent: "Communicate concierge availability",
      },
      {
        en: "Here are your key cards — please keep them away from your phone to avoid demagnetization.",
        intent: "Hand over room keys",
      },
      {
        en: "Is there anything I can arrange before you head up — restaurant reservations, a wake-up call, late checkout?",
        intent: "Proactive service offer",
      },
    ],
    vocab: [
      "reservation",
      "check-in",
      "check-out",
      "upgrade",
      "concierge",
      "key card",
      "amenity",
      "incidental hold",
    ],
    challenges: [
      "Handle a guest whose reservation cannot be found in the system despite a confirmation number.",
      "Offer an upgrade diplomatically to a regular guest without making others nearby feel they missed out.",
      "Manage a guest who arrives at 10 AM and demands early check-in when no rooms are ready.",
    ],
    sampleConversation: [
      {
        speaker: "ai",
        en: "Hi — reservation under Martinez. I've been traveling since 5 AM and I'm exhausted.",
      },
      {
        speaker: "learner",
        en: "Welcome — I'll get you sorted out right away. I have your reservation here — king room, two nights. I'd actually like to upgrade you to a deluxe room with a park view, at no charge.",
      },
      {
        speaker: "ai",
        en: "Oh, that's very kind. Is there any chance of early check-in? It's only 11.",
      },
      {
        speaker: "learner",
        en: "Standard check-in is at 3, but let me check availability. Actually — your room is ready. I'll assign it to you now. Breakfast starts at 6:30 and is included in your rate.",
      },
      {
        speaker: "ai",
        en: "Perfect. Can you also recommend somewhere for dinner nearby?",
      },
      {
        speaker: "learner",
        en: "Absolutely — our concierge can make a reservation for you. Or I can call ahead right now if you'd like.",
      },
    ],
  },
  {
    id: "housekeeping-coordination",
    name: "Housekeeping Coordination",
    emoji: "🛏️",
    blurb:
      "Coordinating housekeeping duties, communicating room status, and responding to guest requests.",
    counterpart: "Housekeeping supervisor, front desk, or guest requesting service.",
    learnerRole: "Housekeeping staff member or supervisor",
    toneNote:
      "Efficient and service-oriented. Housekeeping communication must be precise about room numbers and status — errors affect the whole hotel.",
    phrases: [
      {
        en: "Room 408 is ready for inspection — turned, fresh linens, amenities restocked.",
        intent: "Report a completed room",
      },
      {
        en: "The guest in 312 has a do-not-disturb on — we'll skip and come back after 2 PM.",
        intent: "Report a skipped room",
      },
      {
        en: "I have a late checkout in 520 — they're staying until 4. Please hold that room off the assignment board.",
        intent: "Flag a late checkout",
      },
      {
        en: "Guest in 215 called for extra towels and a rollaway bed — can someone handle that in the next fifteen minutes?",
        intent: "Relay a guest request to the team",
      },
      {
        en: "We're running low on the herbal shampoo — I'll need a restock before I can finish the floor.",
        intent: "Report a supply shortage",
      },
      {
        en: "Maintenance needs to look at 417 — the shower drain is slow and the ceiling fan is making noise.",
        intent: "Flag a room for maintenance",
      },
      {
        en: "All eight rooms on floor three are complete — ready for new arrivals.",
        intent: "Report a floor as finished",
      },
    ],
    vocab: [
      "do-not-disturb",
      "turndown service",
      "rollaway",
      "inspection",
      "stayover",
      "checkout",
      "amenity",
      "work order",
    ],
    challenges: [
      "Report a maintenance issue you discovered while cleaning a room without alarming the guest.",
      "Coordinate with the front desk to prioritize three rooms for early arrivals when you have a full floor to clean.",
      "Handle a guest who opens the door mid-service and asks how long you will be.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Front desk — this is Maria in housekeeping. Room 312 has a DND on from last night. Guest hasn't checked out. Can you confirm if they're a stayover or if we should check on them?",
      },
      {
        speaker: "ai",
        en: "Good catch — they're a stayover, scheduled to check out tomorrow. Leave them for now and loop back at 2 PM.",
      },
      {
        speaker: "learner",
        en: "Copy. Also flagging 417 — shower drain needs maintenance. I'll submit a work order but wanted you to know so no one assigns it to an early arrival.",
      },
      {
        speaker: "ai",
        en: "Got it — I'll block 417 from early assignment. How many rooms are complete on your floor?",
      },
      {
        speaker: "learner",
        en: "Six of nine. I'll have the remaining three finished by 2:30 barring any new requests.",
      },
    ],
  },
  {
    id: "banquet-event",
    name: "Banquet Event",
    emoji: "🎉",
    blurb:
      "Coordinating a large banquet or event — setup, dietary accommodations, timing, and service flow.",
    counterpart: "Event coordinator, banquet captain, or event client.",
    learnerRole: "Banquet server or banquet captain",
    toneNote:
      "Organized, service-focused, discreet. Banquets require military-level coordination — every table on the same cadence.",
    phrases: [
      {
        en: "Tables 1 through 10 have a vegetarian option flagged — they're marked with the purple napkin fold.",
        intent: "Brief the team on dietary placeholders",
      },
      {
        en: "We're serving simultaneously — start when I give the signal, not before. Keep the pace even.",
        intent: "Coordinate simultaneous service",
      },
      {
        en: "The speeches start at 7:45 — clear all appetizer plates by 7:30 or we'll be working around the microphone.",
        intent: "Time service around the program",
      },
      {
        en: "The bar is open until the first toast — after that, table wine service only. Keep it moving.",
        intent: "Communicate bar policy to the team",
      },
      {
        en: "The client has requested that no one clears a plate while the head table is still eating.",
        intent: "Relay a client-specific instruction",
      },
      {
        en: "If a guest has a question about the dietary options, direct them to me — don't guess.",
        intent: "Manage allergy escalation",
      },
      {
        en: "End of service — clear from the outside in, start with glassware, stay quiet.",
        intent: "Direct the post-dinner clear",
      },
    ],
    vocab: [
      "banquet",
      "plated service",
      "preset",
      "dietary flag",
      "simultaneous service",
      "toast",
      "event order",
      "head table",
    ],
    challenges: [
      "Brief your banquet team of eight in under three minutes before 200 guests are seated.",
      "Handle a guest who insists they ordered the vegetarian option but their seat card says meat.",
      "Coordinate a flawless simultaneous dessert drop for 20 tables at a wedding reception.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Team — two minutes before doors open. Purple napkin fold means vegetarian. Do not swap plates. If there's any confusion at your table, hold the plate and find me immediately.",
      },
      {
        speaker: "ai",
        en: "Understood. What's the signal for simultaneous service?",
      },
      {
        speaker: "learner",
        en: "I'll raise my hand at the entrance. When you see it, start walking — not before. We all hit our tables within 30 seconds of each other.",
      },
      {
        speaker: "ai",
        en: "Got it. And the clear timing?",
      },
      {
        speaker: "learner",
        en: "Speeches start at 7:45 — all plates need to be off the tables by 7:30. We have fifteen minutes. Stay focused and we'll be fine.",
      },
    ],
  },
  {
    id: "end-of-night-debrief",
    name: "End-of-Night Debrief",
    emoji: "🌙",
    blurb:
      "Closing meeting after service — acknowledging the team's work, flagging issues, and setting up for tomorrow.",
    counterpart: "Service staff gathered after close.",
    learnerRole: "Floor manager or shift supervisor",
    toneNote:
      "Honest and appreciative. A good close-of-shift debrief is fast — five minutes max. Thank people specifically and fix one thing.",
    phrases: [
      {
        en: "Seriously solid service tonight — we turned 90 covers and had zero complaints. That's on all of you.",
        intent: "Open with specific praise",
      },
      {
        en: "One thing I want us to improve tomorrow — we were slow on the dessert course. Let's fire it earlier.",
        intent: "Name a single specific improvement",
      },
      {
        en: "The kitchen was exceptional tonight — make sure you thank them before you leave.",
        intent: "Credit the back of house",
      },
      {
        en: "Table 12 left a very kind note for the team — I'll read it out and post it in the back.",
        intent: "Share positive guest feedback",
      },
      {
        en: "Side work is done, cash is counted — you're good to go. Safe trip home.",
        intent: "Release the team",
      },
      {
        en: "Tomorrow we have a private buyout at 7 PM. I'll brief you at 5:30 — be here by 5:15.",
        intent: "Set expectations for the next shift",
      },
    ],
    vocab: [
      "side work",
      "covers",
      "close",
      "cash out",
      "tip pool",
      "private buyout",
      "rotation",
      "rollover reservation",
    ],
    challenges: [
      "Deliver a post-shift debrief after a rough service night without crushing morale.",
      "Recognize one team member for an exceptional moment during service in front of the group.",
      "Brief the team on a high-stakes event the following evening while closing out the current shift.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Before anyone goes — two minutes. Tonight was hard. We were short-staffed and hit with two walk-in parties. But you handled it. 84 covers, no walkouts, one comp — and that comp was our choice, not a demand. That's professional.",
      },
      {
        speaker: "ai",
        en: "The kitchen really came through tonight too.",
      },
      {
        speaker: "learner",
        en: "They absolutely did — please thank them before you clock out. One thing I want to fix: we had four tables sit more than 90 seconds without a greeting. That can't happen. Tomorrow, if you see an open table, it's your table — even if it's not your section.",
      },
      {
        speaker: "ai",
        en: "Understood. What are we looking at tomorrow?",
      },
      {
        speaker: "learner",
        en: "Private dining room at 7 — 30 guests, plated four-course. I'll brief at 5:30. Get some rest. Great work tonight.",
      },
    ],
  },
];

const restaurantHospitalityVocabSets: ModuleVocabSet[] = [
  {
    category: "Service Terms",
    emoji: "🍽️",
    words: ["mise en place", "cover", "turn", "fire", "expo", "86", "upsell", "comp"],
  },
  {
    category: "Menu & Kitchen",
    emoji: "👨‍🍳",
    words: [
      "special",
      "prix fixe",
      "allergy",
      "modification",
      "re-fire",
      "plating",
      "course",
      "amuse-bouche",
    ],
  },
  {
    category: "Hotel Operations",
    emoji: "🏨",
    words: [
      "check-in",
      "check-out",
      "upgrade",
      "amenity",
      "concierge",
      "stayover",
      "DND",
      "work order",
    ],
  },
  {
    category: "Events & Banquets",
    emoji: "🎉",
    words: [
      "banquet",
      "buyout",
      "event order",
      "head table",
      "dietary flag",
      "simultaneous service",
      "toast",
      "turndown",
    ],
  },
];

// ─────────────────────────────────────────────
// LEGAL & IMMIGRATION
// ─────────────────────────────────────────────

const legalImmigrationAreas: ModuleArea[] = [
  {
    id: "client-intake-interview",
    name: "Client Intake Interview",
    emoji: "📝",
    blurb:
      "First meeting with a new client — gathering information, building trust, and explaining the attorney-client relationship.",
    counterpart: "New immigration client, often nervous and unfamiliar with the legal system.",
    learnerRole: "Immigration attorney or paralegal conducting intake",
    toneNote:
      "Warm, clear, and patient. Many clients have never spoken to a lawyer before — explain everything, assume nothing.",
    phrases: [
      {
        en: "Everything you tell me today is confidential — it stays between us. I can't share it without your permission.",
        intent: "Explain attorney-client privilege in plain language",
      },
      {
        en: "I want to understand your situation fully before we talk about options. There are no wrong answers here.",
        intent: "Open the conversation without judgment",
      },
      {
        en: "Can you tell me when you first entered the United States, and how you entered?",
        intent: "Gather immigration entry information",
      },
      {
        en: "Have you ever had any immigration applications filed before — a visa, a green card, a work permit? Even if they were denied.",
        intent: "Check for prior filings",
      },
      {
        en: "Have you ever been arrested, charged, or convicted of any crime — even a minor one?",
        intent: "Screen for criminal history that affects eligibility",
      },
      {
        en: "I want to be honest with you about what I'm seeing — there are some challenges, but there are also options. Let me explain.",
        intent: "Set realistic expectations honestly",
      },
      {
        en: "Do you have any documents with you today — a passport, a visa, any letters from immigration?",
        intent: "Request supporting documents",
      },
    ],
    vocab: [
      "attorney-client privilege",
      "intake",
      "confidential",
      "undocumented",
      "entry",
      "prior filing",
      "criminal record",
      "inadmissibility",
    ],
    challenges: [
      "Conduct an intake interview with a client who is afraid to disclose their full entry history.",
      "Explain why criminal history matters for immigration eligibility in simple, non-alarming terms.",
      "Tell a client honestly that their situation is difficult without closing the door on hope.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Thank you for coming in today. Before we start, I want you to know — everything you share with me is completely private. I'm here to help you, not to judge.",
      },
      {
        speaker: "ai",
        en: "Thank you. I'm nervous — I've never talked to a lawyer before.",
      },
      {
        speaker: "learner",
        en: "That's very normal. We'll go at whatever pace works for you. Can you start by telling me when you came to the United States and how you arrived?",
      },
      {
        speaker: "ai",
        en: "I came in 2017. I crossed the border — I didn't have papers.",
      },
      {
        speaker: "learner",
        en: "Thank you for telling me that. It takes courage. That information helps me understand what options might be available to you. Have you had any contact with immigration officers since then?",
      },
      {
        speaker: "ai",
        en: "No. I've been very careful. I have two children who were born here.",
      },
    ],
  },
  {
    id: "document-preparation-explanation",
    name: "Document Preparation Explanation",
    emoji: "📄",
    blurb:
      "Explaining what documents the client needs to gather, why they matter, and what happens with them.",
    counterpart: "Client preparing for a visa application or immigration filing.",
    learnerRole: "Immigration attorney or paralegal",
    toneNote:
      "Organized and clear. Document checklists can overwhelm clients — break it into manageable steps and explain why each item matters.",
    phrases: [
      {
        en: "I need you to gather these documents — I'll give you a written list so you don't have to memorize it.",
        intent: "Provide a clear document checklist",
      },
      {
        en: "This form asks for your complete address history going back ten years. If you don't remember exact dates, do your best — we can estimate.",
        intent: "Explain a common form requirement",
      },
      {
        en: "Your birth certificate needs to be officially translated into English by a certified translator — I can refer you to one.",
        intent: "Explain a translation requirement",
      },
      {
        en: "Any document you send to immigration becomes part of the official record. Never submit anything that isn't accurate.",
        intent: "Stress the importance of accuracy",
      },
      {
        en: "This part of the form might feel personal or scary — it's asking about any time you've been in trouble with police. Fill it out completely and let me review it before we submit.",
        intent: "Guide a client through a sensitive form section",
      },
      {
        en: "Once we file, processing can take anywhere from six months to two years. I'll send you status updates whenever there's movement.",
        intent: "Set realistic timeline expectations",
      },
      {
        en: "If immigration contacts you directly — by mail, phone, or in person — please tell me immediately before responding.",
        intent: "Instruct client how to handle government contact",
      },
    ],
    vocab: [
      "filing",
      "certified translation",
      "supporting evidence",
      "processing time",
      "form I-485",
      "biometrics",
      "notice",
      "petition",
    ],
    challenges: [
      "Explain the I-485 adjustment of status process step-by-step to a client who has never heard of it.",
      "Tell a client their document has an error that will delay their case without panicking them.",
      "Explain what happens at a biometrics appointment to a client who is afraid to go.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "I'm giving you a checklist — eight items. Let's go through each one so you understand what it is and why we need it.",
      },
      {
        speaker: "ai",
        en: "Okay. The first one says birth certificate with certified translation — what does certified mean exactly?",
      },
      {
        speaker: "learner",
        en: "It means a professional translator must sign a statement confirming the translation is accurate. It can't be Google Translate or a friend. I can give you the name of a service we use — they're affordable.",
      },
      {
        speaker: "ai",
        en: "And the tax returns — I only have two years, not three. Is that a problem?",
      },
      {
        speaker: "learner",
        en: "Not necessarily. Two years is usually sufficient. If we're missing a year, I'll write a cover letter explaining it. Don't worry about that part — just bring what you have.",
      },
      {
        speaker: "ai",
        en: "How long will all of this take to process once we file?",
      },
    ],
  },
  {
    id: "court-hearing-prep",
    name: "Court Hearing Prep",
    emoji: "⚖️",
    blurb:
      "Preparing a client for an immigration court hearing — what to expect, how to behave, and how to testify.",
    counterpart: "Client appearing in immigration court for the first time.",
    learnerRole: "Immigration attorney",
    toneNote:
      "Clear and reassuring. Clients are terrified of court — demystify the process, give them specific guidance, and build confidence.",
    phrases: [
      {
        en: "When the judge addresses you, stand up, speak clearly, and answer only what they ask. Don't volunteer extra information.",
        intent: "Instruct courtroom conduct",
      },
      {
        en: "The government attorney will ask you questions — their job is to challenge your case. That's normal. Answer calmly and honestly.",
        intent: "Prepare for cross-examination",
      },
      {
        en: "If you don't understand a question, it's completely acceptable to say so and ask for it to be repeated.",
        intent: "Normalize asking for clarification in court",
      },
      {
        en: "Always say 'I don't remember' rather than guessing — if you guess and it contradicts your documents, it looks like a lie.",
        intent: "Instruct against guessing in testimony",
      },
      {
        en: "The judge is not your enemy — they are neutral. Answer directly and respectfully, not emotionally.",
        intent: "Reframe the judge's role to reduce anxiety",
      },
      {
        en: "We've rehearsed your story. Stick to it. If something surprises you, don't panic — look at me and pause.",
        intent: "Establish a safety signal during testimony",
      },
      {
        en: "Dress professionally, arrive 30 minutes early, and turn off your phone. First impressions matter in court.",
        intent: "Practical day-of instructions",
      },
    ],
    vocab: [
      "immigration judge",
      "government counsel",
      "testimony",
      "cross-examination",
      "continuance",
      "order of removal",
      "withholding",
      "master calendar",
    ],
    challenges: [
      "Run a mock direct examination with your client to prepare their testimony for their asylum hearing.",
      "Coach a client who is visibly panicking about testifying in front of a judge.",
      "Explain what a master calendar hearing is and how it differs from an individual merits hearing.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Tomorrow is your individual merits hearing. Let's go through what to expect so nothing surprises you. The hearing room is small — just you, me, the judge, and the government attorney.",
      },
      {
        speaker: "ai",
        en: "Will there be other people watching? I'm scared of speaking in public.",
      },
      {
        speaker: "learner",
        en: "It's a private hearing — just the people I mentioned. You won't be speaking to an audience. I'll be right beside you the entire time.",
      },
      {
        speaker: "ai",
        en: "What if the government attorney asks me something I don't know how to answer?",
      },
      {
        speaker: "learner",
        en: "If you don't know, say 'I don't remember.' Never guess. And if anything seems confusing, glance at me — I may be able to object or ask for clarification.",
      },
      {
        speaker: "ai",
        en: "Okay. I feel a little better. Can we practice the questions one more time?",
      },
    ],
  },
  {
    id: "asylum-case-discussion",
    name: "Asylum Case Discussion",
    emoji: "🕊️",
    blurb:
      "Explaining asylum law, discussing the client's qualifying grounds, and preparing their declaration.",
    counterpart: "Asylum-seeking client sharing their story.",
    learnerRole: "Immigration attorney or accredited representative",
    toneNote:
      "Compassionate and precise. Asylum cases involve trauma — listen carefully, don't rush, and explain the legal standards gently.",
    phrases: [
      {
        en: "To qualify for asylum, you need to show that you were persecuted — or have a well-founded fear of persecution — because of your race, religion, nationality, political opinion, or membership in a particular social group.",
        intent: "Explain the five protected grounds in plain language",
      },
      {
        en: "I need you to tell me everything that happened — in as much detail as you can remember. Even things that seem small may matter legally.",
        intent: "Encourage full disclosure of the claim",
      },
      {
        en: "The government will try to verify your story. Consistency is very important — your written declaration, your testimony, and what you tell me must all match.",
        intent: "Explain the importance of a consistent record",
      },
      {
        en: "If you were harmed by the government itself — police, military, officials — that strengthens the claim significantly.",
        intent: "Explain state-actor persecution",
      },
      {
        en: "If a private group harmed you, we need to show that the government was unwilling or unable to protect you.",
        intent: "Explain persecution by non-state actors",
      },
      {
        en: "Your declaration is the heart of your case. We'll write it together — I'll help you tell your story in legal terms without changing what happened.",
        intent: "Explain the declaration process",
      },
      {
        en: "You have one year from the date you entered the US to file for asylum. If that deadline has passed, we'll need to look at an exception.",
        intent: "Explain the one-year filing deadline",
      },
    ],
    vocab: [
      "asylum",
      "persecution",
      "protected ground",
      "particular social group",
      "well-founded fear",
      "one-year bar",
      "declaration",
      "nexus",
    ],
    challenges: [
      "Explain the five protected asylum grounds to a client who has only described violence without mentioning a specific reason.",
      "Help a client understand why their story must be consistent across all documents and testimony.",
      "Break the news to a client that their case may be barred by the one-year deadline and explain possible exceptions.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "You told me you left because you were threatened. I need to understand exactly why you were targeted. Was it because of your religion? Your political views? Your family background?",
      },
      {
        speaker: "ai",
        en: "It was because of my political opinions. I was vocal against the government. They arrested my brother and then came for me.",
      },
      {
        speaker: "learner",
        en: "That's important. Political opinion is one of the five legally protected grounds for asylum. Can you tell me more about who came for you — was it police, military, or a private group?",
      },
      {
        speaker: "ai",
        en: "It was police officers who came to my house. They had uniforms.",
      },
      {
        speaker: "learner",
        en: "That's significant — when it's government actors, it strengthens your claim considerably. I need you to write down everything you remember — dates, places, names if you know them. That becomes your declaration.",
      },
      {
        speaker: "ai",
        en: "What if I can't remember all the dates exactly?",
      },
    ],
  },
  {
    id: "naturalization-walk-through",
    name: "Naturalization Walk-Through",
    emoji: "🇺🇸",
    blurb:
      "Explaining the citizenship application process — N-400 requirements, the civics test, the interview, and the ceremony.",
    counterpart: "Permanent resident preparing to apply for citizenship.",
    learnerRole: "Immigration attorney or accredited representative",
    toneNote:
      "Encouraging and celebratory in spirit — becoming a citizen is a milestone. But the content must be accurate and thorough.",
    phrases: [
      {
        en: "To apply for citizenship, you generally need to have been a permanent resident for five years — or three years if you're married to a US citizen.",
        intent: "Explain the basic residency requirement",
      },
      {
        en: "The N-400 is the main application form. It asks detailed questions about your residency, your character, and your background.",
        intent: "Introduce the N-400 application",
      },
      {
        en: "After we file, USCIS will schedule you for a biometrics appointment — they'll take your fingerprints and photo. It's routine.",
        intent: "Explain biometrics",
      },
      {
        en: "The civics interview covers 100 questions about US history and government. Most people pass easily — USCIS only asks ten, and you need six correct.",
        intent: "Explain the civics test in plain terms",
      },
      {
        en: "During the interview, the officer will also ask you questions from your N-400. Answer just as you did on the form.",
        intent: "Prepare for the interview",
      },
      {
        en: "If you pass, you'll be scheduled for a naturalization ceremony. You'll take the Oath of Allegiance in front of a judge — it's a meaningful moment.",
        intent: "Describe the ceremony",
      },
      {
        en: "Once you're a citizen, you can apply for a US passport and petition for close family members.",
        intent: "Explain post-naturalization benefits",
      },
    ],
    vocab: [
      "N-400",
      "permanent resident",
      "naturalization",
      "civics test",
      "USCIS",
      "oath of allegiance",
      "biometrics",
      "certificate of citizenship",
    ],
    challenges: [
      "Walk a client through the full N-400 process from filing to ceremony in under five minutes.",
      "Help a client understand the continuous residence requirement when they traveled internationally for six months.",
      "Explain the good moral character standard and why a minor past issue might affect the application.",
    ],
    sampleConversation: [
      {
        speaker: "ai",
        en: "I've had my green card for six years now. My neighbor says I can apply for citizenship — is that right?",
      },
      {
        speaker: "learner",
        en: "Yes — six years as a permanent resident qualifies you. The requirement is five years, or three if your spouse is a US citizen. Are you married to a US citizen?",
      },
      {
        speaker: "ai",
        en: "No, my husband got his green card through me. So it's five years.",
      },
      {
        speaker: "learner",
        en: "Correct. We'll file the N-400 — it's a detailed application that covers your history, your travels, and your background. After that, biometrics, an interview, and if everything goes well, a naturalization ceremony.",
      },
      {
        speaker: "ai",
        en: "What about the civics test? I've been studying but I'm worried about the interview.",
      },
      {
        speaker: "learner",
        en: "There are 100 questions, but the officer only asks ten and you only need six right. Most people pass on the first try, especially if they've studied consistently. We'll do a practice round today if you'd like.",
      },
    ],
  },
  {
    id: "urgent-emergency-consultation",
    name: "Urgent Emergency Consultation",
    emoji: "🚨",
    blurb:
      "Emergency consultation when a client or family member has been detained, has a court date tomorrow, or faces deportation.",
    counterpart: "Panicked client calling after an immigration arrest or emergency notice.",
    learnerRole: "Immigration attorney taking an emergency call",
    toneNote:
      "Calm and decisive. A client in crisis needs a clear voice — take control of the call, get the facts, and tell them exactly what to do.",
    phrases: [
      {
        en: "Take a deep breath — I'm here and I'm going to help you. Tell me exactly what happened.",
        intent: "Calm the client and begin gathering facts",
      },
      {
        en: "Where is your family member right now — which detention facility?",
        intent: "Locate a detained individual",
      },
      {
        en: "Do not say anything to the officers beyond your name and that you want an attorney. That is your right.",
        intent: "Instruct on right to silence",
      },
      {
        en: "I'm going to call the detention center right now — give me 20 minutes and I'll call you back with information.",
        intent: "Take immediate action and set a callback time",
      },
      {
        en: "Do you have the notice or document they gave you? Read me the case number at the top.",
        intent: "Gather case reference information",
      },
      {
        en: "This is serious but it is not hopeless. There are motions we can file to stop a removal while we pursue your case.",
        intent: "Give honest perspective without false hope",
      },
      {
        en: "Call me immediately if anything changes or if officers contact you again before I call back.",
        intent: "Establish a communication protocol",
      },
    ],
    vocab: [
      "detention",
      "deportation",
      "stay of removal",
      "habeas corpus",
      "removal order",
      "ICE",
      "bond hearing",
      "emergency motion",
    ],
    challenges: [
      "Take a call from a panicked client whose spouse was detained at a traffic stop and guide them step by step.",
      "Explain the right to remain silent to a family member who doesn't understand why they shouldn't cooperate with officers.",
      "File an emergency stay of removal and explain the process to a client in 60 seconds over the phone.",
    ],
    sampleConversation: [
      {
        speaker: "ai",
        en: "They took my husband — he was stopped at a checkpoint. I don't know where he is. Please, I don't know what to do.",
      },
      {
        speaker: "learner",
        en: "I hear you. I'm going to help you. Take a breath. First — do you know which agency stopped him? Was it local police or did they say they were from immigration?",
      },
      {
        speaker: "ai",
        en: "They said immigration. ICE. They took him in their car.",
      },
      {
        speaker: "learner",
        en: "Okay. That's ICE. I'm going to call the ICE detainee locator right now. In the meantime — if he calls you, tell him to give only his name and say he has an attorney. Nothing else.",
      },
      {
        speaker: "ai",
        en: "Can they deport him tonight? He has a daughter who was born here.",
      },
      {
        speaker: "learner",
        en: "They cannot remove him without a formal process. I'm going to find out where he is and file for a bond hearing first thing in the morning. I'll call you within 30 minutes. Stay near your phone.",
      },
    ],
  },
  {
    id: "rights-explanation",
    name: "Rights Explanation",
    emoji: "📜",
    blurb:
      "Explaining legal rights to clients in plain, accessible language — what they can and cannot do, and what protections they have.",
    counterpart: "Client who is confused or afraid about their legal rights.",
    learnerRole: "Immigration attorney or legal aid worker",
    toneNote:
      "Clear, empowering, and non-condescending. Many clients don't know their rights — explaining them clearly is one of the most valuable things you can do.",
    phrases: [
      {
        en: "You have the right to remain silent. You do not have to answer questions from immigration officers beyond confirming your identity.",
        intent: "Explain the right to silence",
      },
      {
        en: "You have the right to speak to an attorney before answering any questions. You can ask for one at any time.",
        intent: "Explain the right to counsel",
      },
      {
        en: "If an immigration officer comes to your home, you do not have to open the door unless they show you a warrant signed by a judge. An ICE administrative warrant is not the same as a judicial warrant.",
        intent: "Explain door rights in plain terms",
      },
      {
        en: "Your US-born children are American citizens regardless of your immigration status. They have full rights.",
        intent: "Clarify children's citizenship rights",
      },
      {
        en: "Even without documents, you have the right to emergency medical care and to enroll your children in public school.",
        intent: "Explain rights that apply regardless of status",
      },
      {
        en: "Anything you sign without understanding can affect your case. Never sign a document from immigration without consulting an attorney.",
        intent: "Warn against signing without legal review",
      },
      {
        en: "You cannot be deported simply for being undocumented — there is a legal process that must be followed, and you have the right to appear before a judge.",
        intent: "Correct a common misconception about deportation",
      },
    ],
    vocab: [
      "fifth amendment",
      "right to counsel",
      "judicial warrant",
      "administrative warrant",
      "due process",
      "voluntary departure",
      "self-incrimination",
      "civil rights",
    ],
    challenges: [
      "Explain the difference between a judicial warrant and an ICE administrative warrant to a client who has never heard either term.",
      "Correct a client who believes they have no rights because they are undocumented.",
      "Walk a client through what to do — step by step — if an immigration officer comes to their door.",
    ],
    sampleConversation: [
      {
        speaker: "ai",
        en: "Someone told me that because I'm undocumented I have no rights and I should just do whatever immigration says. Is that true?",
      },
      {
        speaker: "learner",
        en: "That is not true. You have important rights regardless of your immigration status. Let me explain a few of the most important ones.",
      },
      {
        speaker: "ai",
        en: "Okay — please.",
      },
      {
        speaker: "learner",
        en: "First: you have the right to remain silent. You don't have to answer questions beyond telling them your name. Second: you have the right to speak to an attorney before answering anything.",
      },
      {
        speaker: "ai",
        en: "What if they come to my apartment?",
      },
      {
        speaker: "learner",
        en: "You do not have to open the door unless they have a warrant signed by a judge. An ICE administrative warrant doesn't give them the right to enter your home. You can speak through the door and ask to see the warrant.",
      },
    ],
  },
];

const legalImmigrationVocabSets: ModuleVocabSet[] = [
  {
    category: "Immigration Status",
    emoji: "📋",
    words: [
      "undocumented",
      "permanent resident",
      "visa",
      "green card",
      "naturalization",
      "asylum",
      "TPS",
      "DACA",
    ],
  },
  {
    category: "Court & Process",
    emoji: "⚖️",
    words: [
      "immigration judge",
      "removal order",
      "master calendar",
      "individual hearing",
      "motion to reopen",
      "appeal",
      "continuance",
    ],
  },
  {
    category: "Documents & Forms",
    emoji: "📄",
    words: [
      "I-485",
      "I-589",
      "N-400",
      "notice to appear",
      "biometrics",
      "petition",
      "affidavit",
      "declaration",
    ],
  },
  {
    category: "Rights & Protections",
    emoji: "🛡️",
    words: [
      "right to remain silent",
      "right to counsel",
      "judicial warrant",
      "due process",
      "stay of removal",
      "bond hearing",
      "habeas corpus",
    ],
  },
];

// ─────────────────────────────────────────────
// K-12 TEACHER
// ─────────────────────────────────────────────

const k12TeacherAreas: ModuleArea[] = [
  {
    id: "first-day-of-school",
    name: "First Day of School",
    emoji: "🏫",
    blurb:
      "Setting the tone on day one — establishing rules, building rapport, and making every student feel welcome.",
    counterpart: "A classroom of students on the first day.",
    learnerRole: "Teacher on the first day of school",
    toneNote:
      "Warm, confident, and clear. Students need to feel safe and curious on day one — not overwhelmed by rules.",
    phrases: [
      {
        en: "Welcome, everyone — I'm so glad you're here. I've been looking forward to meeting this class.",
        intent: "Warm opening to establish relationship",
      },
      {
        en: "We're going to do something before I go over any rules — I want to hear from each of you first.",
        intent: "Center students before procedures",
      },
      {
        en: "In this classroom, there's one rule above all others: we respect each other. Everything else builds from that.",
        intent: "State the core principle",
      },
      {
        en: "I'm going to make mistakes this year — and so will you. That's okay. What matters is that we keep trying.",
        intent: "Normalize mistakes to build psychological safety",
      },
      {
        en: "I don't give homework to punish — I give it when I know it helps you practice something important.",
        intent: "Set homework expectations with rationale",
      },
      {
        en: "If you're ever confused, or struggling, or something is going on outside of school — my door is open.",
        intent: "Signal availability and care",
      },
      {
        en: "By the end of this year, you're going to surprise yourselves. I've seen it happen, and I can already see it in this room.",
        intent: "Express genuine belief in the class",
      },
    ],
    vocab: [
      "classroom expectations",
      "roster",
      "ice breaker",
      "seating chart",
      "syllabus",
      "rapport",
      "procedure",
      "norms",
    ],
    challenges: [
      "Introduce yourself and your classroom norms in a way that feels warm rather than rule-heavy.",
      "Handle a student who seems withdrawn or anxious on the first day without drawing attention to them.",
      "Turn a chaotic first-day energy into engaged curiosity through one opening activity.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Good morning, everyone. Before we do anything, I want to go around the room. Tell me your name — and one thing you hope we do in this class this year.",
      },
      {
        speaker: "ai",
        en: "I'm Jalen. I hope we do something with science experiments.",
      },
      {
        speaker: "learner",
        en: "I love that, Jalen — and I think you're going to be happy. We've got labs in October that I think will blow your mind.",
      },
      {
        speaker: "ai",
        en: "My name is Sofia. I'm worried about the homework. My last teacher gave a lot.",
      },
      {
        speaker: "learner",
        en: "Sofia, I hear that. I want to be honest with you — I give homework when I truly believe it helps. I'll always explain why. And if it ever feels like too much, come talk to me.",
      },
    ],
  },
  {
    id: "parent-phone-call",
    name: "Parent Phone Call",
    emoji: "📞",
    blurb:
      "Phone communication with parents — positive check-ins, academic concerns, and behavioral updates.",
    counterpart: "Parent or guardian of a student.",
    learnerRole: "Teacher making or receiving a parent call",
    toneNote:
      "Professional and collaborative. Parents are partners — even in difficult calls, begin with something genuine and positive.",
    phrases: [
      {
        en: "Good afternoon — this is Ms. Ramirez calling from Jefferson Middle School. Do you have a few minutes?",
        intent: "Open the call professionally",
      },
      {
        en: "I want to start by saying — Marcus is a delight to have in class. He brings real energy.",
        intent: "Open a difficult call with a genuine positive",
      },
      {
        en: "I'm calling because I've noticed a change in Marcus's focus lately and I want to make sure we're working together on it.",
        intent: "Raise a concern collaboratively",
      },
      {
        en: "I want to ask you — is there anything going on at home that might help me support him better?",
        intent: "Invite parental context without prying",
      },
      {
        en: "Here's what I'm going to do on my end — here's what I'd love your support on at home.",
        intent: "Propose a partnership plan",
      },
      {
        en: "Please know — you can call me anytime. I'm also reachable by email if that's easier.",
        intent: "Open communication going forward",
      },
      {
        en: "I appreciate you taking the time. Marcus is lucky to have a parent who's engaged.",
        intent: "Close the call warmly",
      },
    ],
    vocab: [
      "conference",
      "behavior log",
      "academic concern",
      "IEP",
      "504 plan",
      "school counselor",
      "engagement",
      "communication log",
    ],
    challenges: [
      "Call a parent to report that their child has been disruptive in class without being adversarial.",
      "Receive a call from an upset parent who thinks their child was treated unfairly and de-escalate.",
      "Make a positive call to a parent whose child had a breakthrough moment this week.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Hi, is this Mrs. Chen? This is Mr. Alvarez, Lily's seventh-grade English teacher. Do you have about five minutes?",
      },
      {
        speaker: "ai",
        en: "Yes — is everything okay? Is Lily in trouble?",
      },
      {
        speaker: "learner",
        en: "Not at all — actually, I'm calling with good news first. Lily submitted an essay last week that genuinely moved me. She has a real voice as a writer.",
      },
      {
        speaker: "ai",
        en: "Oh — thank you. She worked hard on that.",
      },
      {
        speaker: "learner",
        en: "It shows. I also wanted to check in — she seems a bit quieter lately in class. Not a concern yet, just a change I noticed. Is everything alright?",
      },
      {
        speaker: "ai",
        en: "We've had a lot going on at home — her grandfather has been sick. I should have mentioned it.",
      },
    ],
  },
  {
    id: "iep-meeting",
    name: "IEP Meeting",
    emoji: "📊",
    blurb:
      "Participating in an Individualized Education Plan meeting — presenting progress, discussing accommodations, and setting goals.",
    counterpart: "Parents, special education coordinator, and school team at an IEP review.",
    learnerRole: "General education teacher presenting to the IEP team",
    toneNote:
      "Collaborative and specific. Parents in IEP meetings often feel defensive or overwhelmed — use clear language, cite observations, and honor their expertise on their child.",
    phrases: [
      {
        en: "In my classroom, Darius is showing real strengths in verbal participation — he contributes thoughtful ideas to discussion.",
        intent: "Open with a genuine strength",
      },
      {
        en: "His reading fluency in grade-level texts is below benchmark — I'm seeing about a two-year gap. We have data on that.",
        intent: "Present an academic challenge with specific evidence",
      },
      {
        en: "The accommodations from the last IEP — extended time and preferential seating — I'm implementing both. He responds well to the seating.",
        intent: "Report on accommodation fidelity and effectiveness",
      },
      {
        en: "I'd like to propose adding a note-taking support — either a peer notes model or a structured outline I provide.",
        intent: "Suggest a new accommodation",
      },
      {
        en: "Mr. and Mrs. Jones — what are you seeing at home? Your observations help us set goals that are realistic across settings.",
        intent: "Invite parent input into goal-setting",
      },
      {
        en: "Our goal for the next six months: increase his independent reading at grade level by 20%, with the supports in place.",
        intent: "State a measurable IEP goal",
      },
      {
        en: "I want Darius to know we all believe in him — that's the foundation everything else is built on.",
        intent: "Affirm the student-centered purpose of the meeting",
      },
    ],
    vocab: [
      "IEP",
      "accommodation",
      "modification",
      "benchmark",
      "progress monitoring",
      "least restrictive environment",
      "FAPE",
      "annual goal",
    ],
    challenges: [
      "Present a student's academic data to parents in a way that is honest but not alarming.",
      "Respond to a parent who pushes back against a proposed accommodation.",
      "Suggest a new modification when the current plan is clearly not working.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "I want to start with what Darius is doing well, because I think that gets lost sometimes in these meetings. He is one of the most genuinely curious students I have. He asks better questions than kids who read two years ahead of him.",
      },
      {
        speaker: "ai",
        en: "We see that at home too. He reads everything — just not his textbooks.",
      },
      {
        speaker: "learner",
        en: "Exactly — and that curiosity is something we can build from. The challenge is that grade-level written text is a barrier right now. His decoding fluency is two years behind, which shows up in tests and assignments.",
      },
      {
        speaker: "ai",
        en: "We've tried tutoring but it doesn't seem to help. What else can the school do?",
      },
      {
        speaker: "learner",
        en: "I'd like to add audio supports to his accommodations — having texts read aloud removes the decoding barrier and lets his actual intelligence show. I've seen it change everything for students like him.",
      },
    ],
  },
  {
    id: "student-behavioral-redirection",
    name: "Student Behavioral Redirection",
    emoji: "🔄",
    blurb:
      "Redirecting off-task or disruptive behavior in the moment — privately, effectively, and with dignity.",
    counterpart: "Student who is being disruptive, off-task, or testing boundaries.",
    learnerRole: "Teacher in the classroom",
    toneNote:
      "Calm, quiet, and private whenever possible. Effective redirection avoids power struggles — give the student a way to save face.",
    phrases: [
      {
        en: "Hey — I need you with me right now. What's going on?",
        intent: "Low-key check-in before formal redirection",
      },
      {
        en: "I'm going to come back to you in thirty seconds — take a breath and be ready.",
        intent: "Give the student a moment to self-regulate",
      },
      {
        en: "That choice isn't going to work in here. Let's figure out a better one together.",
        intent: "Redirect without shaming",
      },
      {
        en: "I'm not going to argue about this right now — we can talk after class. For now, I need you to get started.",
        intent: "Defer the conflict to preserve instructional time",
      },
      {
        en: "I see you're frustrated. That's okay. Show me you can handle it — I know you can.",
        intent: "Validate and challenge simultaneously",
      },
      {
        en: "You have two options — you can take your work to the quiet corner and finish, or you can stay here and get back on task. Your choice.",
        intent: "Give structured choice to return agency to the student",
      },
      {
        en: "I'm not going to put you on the spot in front of the class — let's talk after the lesson.",
        intent: "Protect the student's dignity",
      },
    ],
    vocab: [
      "redirection",
      "de-escalation",
      "restorative practice",
      "power struggle",
      "proactive",
      "trigger",
      "quiet corner",
      "reset",
    ],
    challenges: [
      "Redirect a student who is loudly talking while you are teaching without stopping the lesson.",
      "Handle a student who says 'this class is stupid' in front of their peers.",
      "Approach a student who seems upset and is shutting down rather than acting out.",
    ],
    sampleConversation: [
      {
        speaker: "ai",
        en: "I'm not doing this. It's pointless. [puts head down on desk]",
      },
      {
        speaker: "learner",
        en: "[quietly, walking over] Hey. I'm not going to make a scene. Just checking in — what's going on with you right now?",
      },
      {
        speaker: "ai",
        en: "Nothing. Leave me alone.",
      },
      {
        speaker: "learner",
        en: "Okay. You've got five minutes. Then I'm going to ask you to do just the first two problems — not the whole page, just two. Can you do that?",
      },
      {
        speaker: "ai",
        en: "... Fine. Two.",
      },
      {
        speaker: "learner",
        en: "That's all I'm asking. I'll check back in on you. [walks away calmly]",
      },
    ],
  },
  {
    id: "emergency-drill-announcement",
    name: "Emergency Drill Announcement",
    emoji: "🚨",
    blurb:
      "Conducting an emergency drill — clear instructions, calm delivery, and managing student anxiety.",
    counterpart: "Students in the classroom during a drill announcement.",
    learnerRole: "Teacher leading an emergency drill",
    toneNote:
      "Calm, clear, and authoritative. Students take cues from teacher affect — panic in your voice creates panic in the room. Be steady.",
    phrases: [
      {
        en: "Attention, everyone — we're going to do a safety drill right now. Stop what you're doing and listen.",
        intent: "Call attention immediately and clearly",
      },
      {
        en: "This is a lockdown drill — it is a practice, not a real emergency. Follow my instructions and stay calm.",
        intent: "Clarify drill status to prevent panic",
      },
      {
        en: "Move quickly and quietly to the back corner. Leave your things where they are.",
        intent: "Direct movement without hesitation",
      },
      {
        en: "No phones out. We stay silent until the all-clear. Does everyone understand?",
        intent: "Enforce protocol during the drill",
      },
      {
        en: "I know this can feel uncomfortable — you're doing a great job staying calm.",
        intent: "Acknowledge student discomfort mid-drill",
      },
      {
        en: "All clear — we can return to our seats. You followed the instructions exactly right.",
        intent: "Release and praise after the drill",
      },
      {
        en: "If any of this brought up feelings or questions, I'm here after class — please come see me.",
        intent: "Check in after a drill that may trigger anxiety",
      },
    ],
    vocab: [
      "lockdown",
      "evacuation",
      "shelter in place",
      "fire drill",
      "all-clear",
      "safety protocol",
      "assembly point",
      "headcount",
    ],
    challenges: [
      "Conduct a lockdown drill with a class of students while keeping anxiety levels low.",
      "Handle a student who begins to cry or panic during a drill and calm them without breaking protocol.",
      "Debrief students after a real shelter-in-place event and answer their questions honestly.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Everyone stop — we have a drill starting now. Lockdown drill. Put everything down and move quietly to the back wall, away from the windows.",
      },
      {
        speaker: "ai",
        en: "[whispered] Is this real? I'm scared.",
      },
      {
        speaker: "learner",
        en: "[calmly, quietly] It's a practice. You're safe. Come to the back and stay with us.",
      },
      {
        speaker: "ai",
        en: "What do we do if it's real?",
      },
      {
        speaker: "learner",
        en: "We do exactly this. Stay calm, stay quiet, stay together. For now — it's a drill. Focus on me.",
      },
      {
        speaker: "ai",
        en: "[all-clear sounds] Can we go back to our seats?",
      },
    ],
  },
  {
    id: "report-card-conference",
    name: "Report Card Conference",
    emoji: "📝",
    blurb:
      "Parent-teacher conference to discuss a student's academic progress, strengths, and areas for growth.",
    counterpart: "Parent or guardian at a scheduled conference.",
    learnerRole: "Teacher leading a report card conference",
    toneNote:
      "Warm and specific. Good conferences feel like a conversation between two people who both care about the same child — not a judgment.",
    phrases: [
      {
        en: "Thank you for coming in — it means everything to your child when parents are this engaged.",
        intent: "Open by honoring parent presence",
      },
      {
        en: "Let me start with what's going well, because I want you to hear that first.",
        intent: "Lead with strengths",
      },
      {
        en: "In math, Zoe is performing at grade level — her computation skills are strong. Where she struggles is multi-step word problems.",
        intent: "Give a specific, balanced academic picture",
      },
      {
        en: "I measure progress with both grades and effort. Zoe's grade might not show how hard she's working — and she's working very hard.",
        intent: "Contextualize grades with effort and growth",
      },
      {
        en: "I'd recommend about 20 minutes of reading per night — not worksheets, just a book she enjoys. Builds fluency without pressure.",
        intent: "Make a specific, doable home recommendation",
      },
      {
        en: "Here's my goal for the rest of the year — what's yours for her at home?",
        intent: "Invite shared goal-setting",
      },
      {
        en: "You can email me anytime if something comes up before our next conference.",
        intent: "Maintain open communication",
      },
    ],
    vocab: [
      "grade report",
      "benchmark",
      "effort grade",
      "growth mindset",
      "reading level",
      "homework completion",
      "social-emotional",
      "follow-up",
    ],
    challenges: [
      "Deliver a difficult message — a student may need to repeat a grade — with honesty and compassion.",
      "Conference with a parent who is dismissive of academic concerns and believes the teacher is the problem.",
      "Translate complex standardized test data into plain language a parent can act on.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Thank you for being here — I know it's a busy time of year. I've been looking forward to talking with you about Tyler.",
      },
      {
        speaker: "ai",
        en: "His grades have been down. I'm worried.",
      },
      {
        speaker: "learner",
        en: "I understand. Let me give you the full picture. His reading grade is a C, which looks concerning. But I want you to know — his growth from September to November is one of the biggest jumps in the class. He's working harder than his grade shows right now.",
      },
      {
        speaker: "ai",
        en: "So he is improving? It just doesn't look like it?",
      },
      {
        speaker: "learner",
        en: "Exactly. Grades measure where he is, not how far he's come. He's come very far. What I need from home is consistent reading — even 15 minutes a night makes a real difference at this stage.",
      },
      {
        speaker: "ai",
        en: "We can do that. Is there anything specific I should watch for?",
      },
    ],
  },
  {
    id: "new-student-welcome",
    name: "New Student Welcome",
    emoji: "👋",
    blurb:
      "Welcoming a new student to the class — making them feel included, introducing them to peers, and reducing first-day anxiety.",
    counterpart: "New student entering the class mid-year, or students already in the class.",
    learnerRole: "Teacher welcoming a new student",
    toneNote:
      "Warm, low-pressure, and attentive. New students are watching the whole class for social cues — how the teacher treats them signals everything.",
    phrases: [
      {
        en: "Everyone — I want to introduce someone who's joining us today. Please make her feel as welcome as this class made you feel on your first day.",
        intent: "Frame the welcome as a community responsibility",
      },
      {
        en: "You don't have to know everything today — just get a feel for the class. I've got you.",
        intent: "Relieve pressure from the new student",
      },
      {
        en: "Marcus, would you be willing to be her buddy today — show her around, sit with her at lunch?",
        intent: "Assign a class buddy without embarrassing anyone",
      },
      {
        en: "If you get lost or confused about anything — homework, where things are, anything — come to me after class.",
        intent: "Make yourself available privately",
      },
      {
        en: "We're going to do a quick introduction — you can share as much or as little as you like.",
        intent: "Make the introduction low-stakes",
      },
      {
        en: "I think you're going to like it here. This is a really good group of people.",
        intent: "Offer genuine reassurance",
      },
    ],
    vocab: [
      "buddy system",
      "class roster",
      "orientation",
      "locker",
      "schedule",
      "lunch period",
      "elective",
      "homeroom",
    ],
    challenges: [
      "Welcome a new student who appears very shy and doesn't want to stand up and introduce themselves.",
      "Handle a situation where the class is not particularly welcoming to a new student.",
      "Welcome a new student mid-lesson without losing the momentum of what the class was doing.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Class — quick pause. We have someone joining us today. Her name is Amara. Let's make her feel like she's been here all year.",
      },
      {
        speaker: "ai",
        en: "Hi. [quietly]",
      },
      {
        speaker: "learner",
        en: "Hi, Amara — you can sit right there next to Deja. You don't need to know where everything is today — Deja will help you out. Sound okay?",
      },
      {
        speaker: "ai",
        en: "Yes, thank you.",
      },
      {
        speaker: "learner",
        en: "We were just starting a group project — I'll give you a minute to look it over and you can jump in when you're ready. No pressure.",
      },
    ],
  },
  {
    id: "staff-collaboration",
    name: "Staff Collaboration",
    emoji: "🤝",
    blurb:
      "Professional communication with colleagues — collaborative planning, feedback, and problem-solving.",
    counterpart: "Fellow teacher, department chair, or instructional coach.",
    learnerRole: "Teacher in a planning meeting or professional conversation",
    toneNote:
      "Collegial and professional. Teachers are often protective of their autonomy — offer ideas, not instructions.",
    phrases: [
      {
        en: "I tried something last week that worked really well — mind if I share it?",
        intent: "Offer a strategy without imposing",
      },
      {
        en: "I'm struggling with my fifth period — they're a tough group. Can I pick your brain?",
        intent: "Ask a colleague for help without undermining yourself",
      },
      {
        en: "I think we could save ourselves a lot of time if we co-plan this unit together.",
        intent: "Propose a collaborative planning effort",
      },
      {
        en: "I noticed something about how you handled that transition — I'd love to try it in my room.",
        intent: "Give a genuine compliment about a colleague's technique",
      },
      {
        en: "I want to be honest with you — I think the pacing on this unit is too fast for our students. Can we look at it together?",
        intent: "Raise a concern with a colleague constructively",
      },
      {
        en: "Your idea about the warm-up routine is exactly what I needed — would you be okay with me adapting it?",
        intent: "Credit a colleague and seek permission",
      },
      {
        en: "Let's schedule 20 minutes next week — I want your eyes on this lesson plan before I teach it.",
        intent: "Invite peer feedback proactively",
      },
    ],
    vocab: [
      "common planning",
      "PLC",
      "vertical alignment",
      "co-teaching",
      "instructional coach",
      "data team",
      "lesson study",
      "debrief",
    ],
    challenges: [
      "Propose co-planning a unit with a colleague who tends to work in isolation.",
      "Give honest feedback to a fellow teacher who asked for it but seems defensive.",
      "Navigate a disagreement about grading standards with a department colleague professionally.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Hey — do you have ten minutes? I want to bounce something off you. I'm reworking my third-quarter writing unit and I keep hitting the same wall.",
      },
      {
        speaker: "ai",
        en: "Sure. What's the issue?",
      },
      {
        speaker: "learner",
        en: "Students are producing decent paragraphs but falling apart when they have to structure an argument. I can't figure out if it's a scaffolding problem or a modeling problem.",
      },
      {
        speaker: "ai",
        en: "I saw the same thing last year. What helped me was doing a live write — I modeled the whole essay in front of them, thinking aloud every step. Took a whole period but it changed everything.",
      },
      {
        speaker: "learner",
        en: "I've been meaning to try that but I always feel awkward writing in front of students. Does it get easier?",
      },
      {
        speaker: "ai",
        en: "Hugely easier. And honestly — they love seeing you make mistakes and fix them. It normalizes the process.",
      },
    ],
  },
];

const k12TeacherVocabSets: ModuleVocabSet[] = [
  {
    category: "Classroom Management",
    emoji: "🏫",
    words: [
      "norms",
      "procedures",
      "redirection",
      "de-escalation",
      "restorative",
      "growth mindset",
      "positive reinforcement",
      "reset",
    ],
  },
  {
    category: "Student Support",
    emoji: "📊",
    words: [
      "IEP",
      "504 plan",
      "accommodation",
      "modification",
      "benchmark",
      "intervention",
      "differentiation",
      "progress monitoring",
    ],
  },
  {
    category: "Parent Communication",
    emoji: "📞",
    words: [
      "conference",
      "behavior log",
      "academic concern",
      "communication log",
      "school counselor",
      "home-school connection",
    ],
  },
  {
    category: "Colleague & Professional",
    emoji: "🤝",
    words: [
      "PLC",
      "co-planning",
      "instructional coach",
      "data team",
      "lesson study",
      "peer observation",
      "vertical alignment",
      "common assessment",
    ],
  },
];

// ─────────────────────────────────────────────
// ASSEMBLED MODULE CONTENT
// ─────────────────────────────────────────────

export const SERVICE_EDU_CONTENT: ServiceEduContent[] = [
  {
    moduleId: "restaurant-hospitality",
    areas: restaurantHospitalityAreas,
    vocabSets: restaurantHospitalityVocabSets,
  },
  {
    moduleId: "legal-immigration",
    areas: legalImmigrationAreas,
    vocabSets: legalImmigrationVocabSets,
  },
  {
    moduleId: "k12-teacher",
    areas: k12TeacherAreas,
    vocabSets: k12TeacherVocabSets,
  },
];

export function getServiceEduContent(moduleId: string): ServiceEduContent | null {
  return SERVICE_EDU_CONTENT.find((m) => m.moduleId === moduleId) ?? null;
}

export function getServiceEduArea(moduleId: string, areaId: string): ModuleArea | null {
  const module = getServiceEduContent(moduleId);
  if (!module) return null;
  return module.areas.find((a) => a.id === areaId) ?? null;
}
