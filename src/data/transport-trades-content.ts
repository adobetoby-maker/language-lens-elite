// Domain content for three transport & trades modules:
//   auto-mechanic | truck-driver | construction-foreman
//
// Phrases are stored in English — the AI tutor translates and roleplays
// in the learner's selected target language.
// Authenticity standard: a working mechanic, CDL driver, or job-site
// foreman should recognise every phrase and scenario as realistic.

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
  /** One-sentence description shown in the area picker. */
  blurb: string;
  /** Who the AI plays opposite the learner in this scenario. */
  counterpart: string;
  /** Who the learner is in this scenario. */
  learnerRole: string;
  /** Tone / register guidance for the AI. */
  toneNote: string;
  phrases: ModulePhrase[];         // 6-8 phrases
  vocab: string[];                 // 6-10 terms
  /** Roleplay prompts that kick off an AI scenario. */
  challenges: string[];            // 3 prompts
  /** Short sample exchange showing realistic register. */
  sampleConversation: SampleTurn[]; // 4-6 turns
}

export interface ModuleVocabSet {
  category: string;
  emoji: string;
  words: string[];
}

export interface TransportTradesContent {
  moduleId: string;
  areas: ModuleArea[];
  vocabSets: ModuleVocabSet[];
}

// ─────────────────────────────────────────────────────────────────────────────
// AUTO-MECHANIC
// ─────────────────────────────────────────────────────────────────────────────

const autoMechanicAreas: ModuleArea[] = [
  {
    id: "service-desk-intake",
    name: "Service Desk Intake",
    emoji: "📋",
    blurb: "Check in a customer's vehicle, capture the complaint, and set expectations at the counter.",
    counterpart: "Car owner dropping off their vehicle.",
    learnerRole: "Service advisor or lead mechanic at the front desk",
    toneNote: "Friendly, professional, plain language. Never talk over the customer's head but don't over-explain either.",
    phrases: [
      { en: "What brings you in today?", intent: "Open the ticket" },
      { en: "How long has it been doing that?", intent: "Duration of complaint" },
      { en: "Any warning lights on the dash?", intent: "Screen for codes" },
      { en: "Has anyone else looked at it?", intent: "Prior work history" },
      { en: "We'll get it on the lift and call you with a diagnosis before we touch anything.", intent: "Set inspection expectation" },
      { en: "Do you need a ride or a loaner while it's here?", intent: "Customer care" },
      { en: "Can I get your best phone number?", intent: "Capture contact info" },
      { en: "We should have an answer for you by early afternoon.", intent: "Time commitment" },
    ],
    vocab: ["work order", "complaint", "mileage", "VIN", "loaner", "estimate", "authorization", "drop-off"],
    challenges: [
      "Check in a customer who says their car is 'making a weird noise' — get enough detail to write the work order.",
      "A customer is upset because they were here last week for the same issue. De-escalate and reopen the ticket.",
      "Explain your shop's diagnostic fee policy to a first-time customer before they decide whether to leave the car.",
    ],
    sampleConversation: [
      { speaker: "ai", en: "Hi, I've got a 2018 Camry — the check-engine light came on this morning." },
      { speaker: "learner", en: "Good morning! Any idea when it first came on, or did it just show up today?" },
      { speaker: "ai", en: "Just today. It was fine yesterday." },
      { speaker: "learner", en: "Is it solid or flashing?" },
      { speaker: "ai", en: "Solid, I think. Should I be worried?" },
      { speaker: "learner", en: "A solid light usually means something to look at but you're okay to drive here. We'll plug in a scanner and read the code — takes about twenty minutes. We'll call you before we do any work." },
    ],
  },
  {
    id: "diagnostic-conversation",
    name: "Diagnostic Conversation",
    emoji: "🔍",
    blurb: "Talk through a diagnosis with a customer — translate what the scanner and your inspection found into plain English.",
    counterpart: "Car owner waiting for the verdict on their vehicle.",
    learnerRole: "Mechanic explaining findings to the customer",
    toneNote: "Clear, honest, no upselling pressure. Use an analogy if it helps. Don't apologise for what you found.",
    phrases: [
      { en: "We pulled code P0420 — that's the catalytic converter running below efficiency.", intent: "Report code" },
      { en: "I want to show you what I found before I quote you anything.", intent: "Transparent approach" },
      { en: "The good news is it's not the transmission.", intent: "Narrow the concern" },
      { en: "Think of the catalytic converter like your car's exhaust filter.", intent: "Use an analogy" },
      { en: "This needs to be fixed — it won't pass emissions like this.", intent: "State urgency" },
      { en: "We also noticed the rear brakes are down to about two millimeters.", intent: "Additional finding" },
      { en: "I'd recommend handling the cat now and monitoring the brakes for another month.", intent: "Prioritise repairs" },
    ],
    vocab: ["diagnostic code", "catalytic converter", "oxygen sensor", "live data", "freeze frame", "misfire", "emissions", "coolant temp"],
    challenges: [
      "Explain a P0300 random misfire code to a customer who has no mechanical background.",
      "You found three issues during inspection — help the customer understand which ones are safety-critical and which can wait.",
      "A customer insists their car just needs an oil change but your scan shows a serious coolant leak. How do you respond?",
    ],
    sampleConversation: [
      { speaker: "learner", en: "Thanks for waiting. So we scanned the car and got a P0171 — that's a lean condition on bank one." },
      { speaker: "ai", en: "What does that mean?" },
      { speaker: "learner", en: "It means the engine is getting too much air and not enough fuel. Nine times out of ten it's a vacuum leak or a dirty mass air flow sensor." },
      { speaker: "ai", en: "Is that expensive?" },
      { speaker: "learner", en: "If it's the MAF sensor, we're looking at about 150 parts and labor. Let me clean it first — sometimes that fixes it at no charge. I'll call you either way before I go further." },
    ],
  },
  {
    id: "under-the-hood-explanation",
    name: "Under-the-Hood Explanation",
    emoji: "🔧",
    blurb: "Walk a customer through what you see under the hood — build trust by showing, not just telling.",
    counterpart: "Curious or skeptical car owner looking over your shoulder.",
    learnerRole: "Mechanic with the hood open, showing the customer",
    toneNote: "Patient, confident, not condescending. Point to physical parts. Let the customer ask questions.",
    phrases: [
      { en: "Come around here — I'll show you exactly what I'm talking about.", intent: "Invite customer over" },
      { en: "This hose here is cracked — you can see it's weeping coolant.", intent: "Point to evidence" },
      { en: "See how this belt is frayed along the edge? That means it's been slipping.", intent: "Show belt wear" },
      { en: "That's your serpentine belt — it drives the alternator, power steering, and AC all at once.", intent: "Explain component function" },
      { en: "This is the original brake fluid — see how dark it is? It should be clear.", intent: "Fluid condition" },
      { en: "Touch right there — feel how loose that is? That's a bad tie rod.", intent: "Tactile demonstration" },
      { en: "I took a photo so you can see it from underneath too.", intent: "Documentation" },
    ],
    vocab: ["serpentine belt", "coolant reservoir", "tie rod", "brake fluid", "valve cover", "air filter", "battery terminal", "radiator hose"],
    challenges: [
      "Show a first-time car owner why their air filter needs replacing and what a clean one looks like.",
      "A customer thinks you're making up problems. Walk them to the car and show them the evidence.",
      "Explain to a customer standing at the hood why you can't quote a final price until you have the car on the lift.",
    ],
    sampleConversation: [
      { speaker: "learner", en: "Come take a look with me. See this hose right here?" },
      { speaker: "ai", en: "The one on the left?" },
      { speaker: "learner", en: "Exactly. Run your finger along the bottom — feel that moisture? That's a slow coolant leak. It's not dumping yet, but if it blows while you're on the highway, you'll overheat in minutes." },
      { speaker: "ai", en: "How did I not notice?" },
      { speaker: "learner", en: "It drips when the engine's hot and evaporates fast. Easy to miss. It's about a ninety-dollar fix — hose and clamp, half an hour of labor." },
    ],
  },
  {
    id: "parts-order",
    name: "Parts Order",
    emoji: "📦",
    blurb: "Order parts from a supplier — confirm specs, pricing, and delivery window.",
    counterpart: "Parts counter person at an auto parts store or supplier.",
    learnerRole: "Mechanic or shop owner calling or walking the counter",
    toneNote: "Efficient and specific. Use part numbers when you have them. Confirm fit before hanging up.",
    phrases: [
      { en: "I need a water pump for a 2015 F-150 with the 5.0 — what do you have in stock?", intent: "Initial inquiry with specs" },
      { en: "Give me the OEM equivalent, not the cheap house brand.", intent: "Quality preference" },
      { en: "What's the part number on that?", intent: "Confirm part number" },
      { en: "Does that include the gasket, or do I need to order that separate?", intent: "Check kit contents" },
      { en: "What's the core charge on the alternator?", intent: "Core fee inquiry" },
      { en: "How fast can you get it here? I've got the car on the lift.", intent: "Urgency" },
      { en: "Put it on account for Johnson's Auto — I'll pick it up in twenty.", intent: "Charge to account" },
    ],
    vocab: ["OEM", "aftermarket", "core charge", "part number", "in stock", "back order", "fitment", "gasket kit", "interchange"],
    challenges: [
      "Order a replacement alternator for a specific vehicle, confirm it's the right amperage, and ask about the core return.",
      "The parts counter tells you the part you need is back-ordered two days. Negotiate an alternative or find out if another location has it.",
      "You ordered the wrong caliper — call the parts store to arrange a return and reorder the correct side.",
    ],
    sampleConversation: [
      { speaker: "learner", en: "Hey — I need front brake pads and rotors for a 2019 Silverado 1500, the half-ton with the V8." },
      { speaker: "ai", en: "Z71 package or base?" },
      { speaker: "learner", en: "Z71." },
      { speaker: "ai", en: "Got it. I've got Bosch QuietCast pads and slotted rotors — comes to $187 for the set." },
      { speaker: "learner", en: "Does that come with hardware and the caliper lube?" },
      { speaker: "ai", en: "Hardware's included, lube is a dollar-fifty separate." },
      { speaker: "learner", en: "Fine, add the lube. Put it on the Miller account and I'll be there in fifteen." },
    ],
  },
  {
    id: "estimate-delivery",
    name: "Estimate Delivery",
    emoji: "💰",
    blurb: "Present a repair estimate to a customer — break down labor and parts without losing them.",
    counterpart: "Car owner hearing the cost for the first time.",
    learnerRole: "Service advisor presenting the written estimate",
    toneNote: "Calm, matter-of-fact, no apology for the price. Be ready for pushback. Offer options where genuine ones exist.",
    phrases: [
      { en: "I've got your estimate here — let me walk you through it.", intent: "Frame the conversation" },
      { en: "Parts are $340, labor is $210 — total comes to $550 plus tax.", intent: "State the total" },
      { en: "The labor is two and a half hours at our shop rate of $85 an hour.", intent: "Explain labor charge" },
      { en: "We can do just the safety items today and schedule the rest for next month.", intent: "Offer phased approach" },
      { en: "If you decline the brake repair, I need you to sign here acknowledging the risk.", intent: "Document refusal" },
      { en: "Parts have a two-year, 24,000-mile warranty through our supplier.", intent: "State warranty" },
      { en: "I can get you out of here today if you authorize it now.", intent: "Close same-day" },
    ],
    vocab: ["estimate", "labor rate", "shop supplies", "disposal fee", "warranty", "authorization", "decline", "safety item"],
    challenges: [
      "Present a $1,200 estimate to a customer who expected to spend $300. Stay calm and itemize it clearly.",
      "A customer wants a discount. Explain your shop's pricing without being defensive or giving away margin.",
      "Walk a customer through why labor costs more than parts on a timing chain job.",
    ],
    sampleConversation: [
      { speaker: "learner", en: "So your total for the head gasket repair is $1,450. I know that's a number, so let me break it down." },
      { speaker: "ai", en: "That's a lot more than I expected." },
      { speaker: "learner", en: "I get it. The parts alone are $380 — head gasket set, head bolts, thermostat, and coolant. The rest is labor. We have to pull the intake manifold, drain the cooling system, and torque the head to spec. That's eight hours at $135 an hour." },
      { speaker: "ai", en: "Can you do it cheaper?" },
      { speaker: "learner", en: "Not on the labor — that's the job. But I can source a quality aftermarket gasket set and save you about forty dollars on parts if you want. Either way, work comes with a twelve-month warranty." },
    ],
  },
  {
    id: "repair-update",
    name: "Repair Update",
    emoji: "📞",
    blurb: "Call a customer mid-repair with a status update or an unexpected finding.",
    counterpart: "Car owner waiting for news at home or at work.",
    learnerRole: "Mechanic calling the customer from the shop",
    toneNote: "Direct, honest. Don't bury the bad news. Give the customer a clear choice.",
    phrases: [
      { en: "Hey, it's Mike over at Central Auto — I've got an update on your Civic.", intent: "Opening" },
      { en: "Good news: it's done and ready whenever you are.", intent: "Good update" },
      { en: "We ran into something once we had it apart.", intent: "Flag an issue" },
      { en: "The rotor underneath was more worn than the outside showed.", intent: "Explain finding" },
      { en: "I can fix it today for an extra $85, or I can put it back together as-is and you can decide.", intent: "Give the choice" },
      { en: "I'd rather tell you now than surprise you with the bill.", intent: "Transparency" },
      { en: "Take your time — we're not going anywhere with the car until I hear from you.", intent: "No pressure" },
    ],
    vocab: ["tear-down", "additional finding", "authorization", "put-back", "ready for pickup", "updated estimate", "documented"],
    challenges: [
      "Call a customer to say a strut replacement uncovered a torn CV boot — explain both issues and get authorization.",
      "Explain a same-day repair delay: the part came in wrong and you're waiting on the correct one.",
      "A customer calls you before you call them and asks if their car is ready. It's not — be honest about the timeline.",
    ],
    sampleConversation: [
      { speaker: "learner", en: "Hi, this is Carlos at Precision Auto. Calling about your Tahoe." },
      { speaker: "ai", en: "Is it ready?" },
      { speaker: "learner", en: "Almost — but I need to talk to you first. When I pulled the left caliper, I found the brake line going to it has a kink and a small bubble. It's not leaking yet, but I don't like it." },
      { speaker: "ai", en: "How much are we talking?" },
      { speaker: "learner", en: "It's a $65 line — about forty minutes of labor, so another $90. I can do it while I already have the wheel off, which saves you time and money versus coming back." },
      { speaker: "ai", en: "Okay, yeah, do it." },
      { speaker: "learner", en: "Perfect. I'll get you an updated total and call when it's done — should be before five." },
    ],
  },
  {
    id: "vehicle-pickup",
    name: "Vehicle Pickup",
    emoji: "🔑",
    blurb: "Hand the car back to the customer — review the work, collect payment, and close the ticket.",
    counterpart: "Car owner coming to pick up their vehicle.",
    learnerRole: "Service advisor or mechanic at the counter",
    toneNote: "Friendly, professional. Don't rush through the review. Make sure the customer leaves confident.",
    phrases: [
      { en: "Everything we talked about is done — here's your copy of the invoice.", intent: "Summary" },
      { en: "We replaced both front rotors and pads, flushed the brake fluid, and test-drove it.", intent: "Recap work done" },
      { en: "The tech noted the rear tires are wearing on the inside — could be an alignment issue.", intent: "Pass on tech note" },
      { en: "Your total today is $612.50 — card, cash, or check?", intent: "Collect payment" },
      { en: "Keep that receipt — all labor and parts are under warranty for 12 months or 12,000 miles.", intent: "Warranty reminder" },
      { en: "If anything feels off in the next couple days, call us and we'll get you right in.", intent: "Open door for return" },
    ],
    vocab: ["invoice", "receipt", "warranty", "test drive", "tech note", "satisfied", "payment", "deductible"],
    challenges: [
      "Hand off a vehicle after a major repair — review every line on the invoice with the customer.",
      "A customer says the car feels different than before. Listen, troubleshoot, and decide if they need to leave it.",
      "Process payment from a customer who is surprised by a shop supplies charge that wasn't on the estimate.",
    ],
    sampleConversation: [
      { speaker: "ai", en: "Is my car ready?" },
      { speaker: "learner", en: "It is! Let me walk you through what we did. We replaced the water pump and thermostat, flushed the cooling system, and filled it with fresh coolant. Tech drove it twenty miles — no leaks, temp gauge held steady." },
      { speaker: "ai", en: "Great. And the bill?" },
      { speaker: "learner", en: "Total is $498. We also noticed the cabin air filter is pretty dirty — didn't touch it but wanted to flag it. It's a fifteen-dollar fix you can even do yourself." },
      { speaker: "ai", en: "Good to know. I'll pay by card." },
    ],
  },
  {
    id: "safety-advisory",
    name: "Safety Advisory",
    emoji: "⚠️",
    blurb: "Tell a customer their vehicle has a safety issue and explain the consequences of driving it.",
    counterpart: "Car owner who may be resistant to hearing bad news.",
    learnerRole: "Mechanic delivering a serious safety finding",
    toneNote: "Firm but not alarmist. Be specific about the risk. Document everything if they refuse.",
    phrases: [
      { en: "I need to be straight with you about something.", intent: "Signal seriousness" },
      { en: "The inner tie rod is worn to the point where I can't let it go without saying something.", intent: "State finding" },
      { en: "If that lets go at highway speed, you lose steering.", intent: "Explain consequence" },
      { en: "I can't make you fix it, but I have to document that we told you.", intent: "Liability statement" },
      { en: "I wouldn't put my family in this car until that's repaired.", intent: "Personal statement" },
      { en: "If you want, we can do a payment plan — I want to help you get this fixed.", intent: "Offer flexibility" },
    ],
    vocab: ["tie rod", "ball joint", "brake fade", "structural failure", "liability waiver", "urgent", "condemn", "documented refusal"],
    challenges: [
      "Inform a customer that their ball joints are so worn the shop cannot legally return the vehicle without a safety waiver.",
      "A single parent says they can't afford the repair right now. What do you tell them?",
      "Explain brake fade to a customer who thinks their brakes are fine because the pedal still feels firm.",
    ],
    sampleConversation: [
      { speaker: "learner", en: "Before I hand you the keys, I need to talk to you about the left front ball joint." },
      { speaker: "ai", en: "I thought I was just here for an oil change." },
      { speaker: "learner", en: "You were, and we did that. But when we put it on the lift, I checked the suspension because the tire was wearing funny. The lower ball joint has significant play in it — I can show you." },
      { speaker: "ai", en: "How bad is it really?" },
      { speaker: "learner", en: "Bad enough that if it separates, the wheel can fold under the car. I'm not saying it happens tomorrow, but I'd feel terrible if I didn't tell you. Repair is about $280. If you drive it as-is, I need your signature acknowledging we told you." },
    ],
  },
];

const autoMechanicVocabSets: ModuleVocabSet[] = [
  {
    category: "Engine & Drivetrain",
    emoji: "⚙️",
    words: ["cylinder head", "camshaft", "crankshaft", "timing chain", "intake manifold", "exhaust manifold", "torque converter", "differential"],
  },
  {
    category: "Brakes & Suspension",
    emoji: "🛑",
    words: ["caliper", "rotor", "pad", "brake line", "master cylinder", "strut", "ball joint", "tie rod", "sway bar link", "wheel bearing"],
  },
  {
    category: "Electrical & Electronics",
    emoji: "⚡",
    words: ["alternator", "battery", "starter", "fuse", "relay", "ground strap", "PCM", "OBD-II", "diagnostic code", "scan tool"],
  },
  {
    category: "Fluids & Filters",
    emoji: "🛢️",
    words: ["motor oil", "coolant", "transmission fluid", "brake fluid", "power steering fluid", "differential fluid", "cabin air filter", "fuel filter"],
  },
  {
    category: "Tools & Equipment",
    emoji: "🔩",
    words: ["torque wrench", "impact gun", "floor jack", "jack stand", "lift", "pry bar", "wire brush", "thread chaser", "compression tester"],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// TRUCK DRIVER
// ─────────────────────────────────────────────────────────────────────────────

const truckDriverAreas: ModuleArea[] = [
  {
    id: "pre-trip-inspection",
    name: "Pre-Trip Inspection",
    emoji: "🔦",
    blurb: "Walk around the rig before departure — federal regulations require a systematic check and a written report.",
    counterpart: "Dock supervisor, shop mechanic, or another driver.",
    learnerRole: "CDL driver doing the mandatory pre-trip",
    toneNote: "Methodical, short sentences. This is regulatory compliance — not conversation.",
    phrases: [
      { en: "Starting my pre-trip on unit 4412.", intent: "Log entry opener" },
      { en: "Left steer tire looks good — tread's legal, no cuts.", intent: "Tire check" },
      { en: "Glad-hands secured, no air leaks on the trailer line.", intent: "Air lines" },
      { en: "Marker lights are all lit.", intent: "Lighting check" },
      { en: "I've got a cracked mudflap on the right rear — I need a quick repair before I roll.", intent: "Report defect" },
      { en: "Brakes applied — no creep, air pressure holding at 120.", intent: "Brake test" },
      { en: "Defect found on prior report hasn't been signed off yet.", intent: "Flag uncorrected DVIR" },
    ],
    vocab: ["DVIR", "pre-trip", "glad-hands", "air lines", "fifth wheel", "kingpin", "mudflap", "marker lights", "brake stroke"],
    challenges: [
      "Walk through a verbal pre-trip inspection as if talking to a student driver riding with you.",
      "You find a cracked fifth-wheel plate during pre-trip. Tell the shop foreman what you found and why you can't roll.",
      "A dock supervisor is pressuring you to leave without completing pre-trip. How do you handle it?",
    ],
    sampleConversation: [
      { speaker: "learner", en: "Hey — I got a defect on the DVIR from the last driver. Left marker light out. Has maintenance seen it?" },
      { speaker: "ai", en: "They signed it off yesterday afternoon — bulb's been replaced." },
      { speaker: "learner", en: "Okay. I'm walking it now. I'll verify before I clear it." },
      { speaker: "ai", en: "Good call. You got a tight window — load closes at 0600." },
      { speaker: "learner", en: "Won't take long. I'd rather be five minutes late than get put out of service at the scales." },
    ],
  },
  {
    id: "dispatch-call",
    name: "Dispatch Call",
    emoji: "📡",
    blurb: "Check in with dispatch — get a load assignment, update your ETA, or report a problem.",
    counterpart: "Dispatcher on the other end of the radio or phone.",
    learnerRole: "Driver calling or responding to dispatch",
    toneNote: "Terse, professional, confirmation-focused. Repeat back critical info. Keep it short — everyone's busy.",
    phrases: [
      { en: "Dispatch, this is Martinez on unit 88 — I'm loaded and rolling.", intent: "Departure check-in" },
      { en: "Copy. What's my delivery window?", intent: "Confirm appointment" },
      { en: "I'm running about forty minutes behind — there's a wreck slowing 80 westbound.", intent: "ETA update" },
      { en: "Got a tire pressure warning on the trailer — I'm pulling over at the next rest area to check.", intent: "Safety stop notice" },
      { en: "Confirm the consignee's dock number — I'm not seeing it on the paperwork.", intent: "Paperwork issue" },
      { en: "What's my next load out of Chicago?", intent: "Next assignment" },
      { en: "I'll be 34 hours out of reset by Thursday morning — I need a load that works with that.", intent: "HOS planning" },
    ],
    vocab: ["dispatch", "load", "consignee", "BOL", "ETA", "34-hour reset", "deadhead", "drop and hook", "live unload", "appointment window"],
    challenges: [
      "Call dispatch to report a two-hour delay caused by a traffic accident. Ask if the appointment can be rescheduled.",
      "Dispatch gives you a load that will put you over your available hours. Explain the HOS situation clearly.",
      "You arrive at a receiver and the dock is closed. Call dispatch and work out a plan.",
    ],
    sampleConversation: [
      { speaker: "learner", en: "Dispatch, Jenkins on 217. I'm empty at Joliet — ready for next assignment." },
      { speaker: "ai", en: "Jenkins, I've got a drop-and-hook in Blue Island. Trailer 9914. Take it to Cincinnati, appt at 0200." },
      { speaker: "learner", en: "Copy — 9914 to Cincinnati, 0200. What's the address?" },
      { speaker: "ai", en: "Sending it to your Qualcomm now." },
      { speaker: "learner", en: "Got it. I'm at hour nine of eleven available — that works." },
    ],
  },
  {
    id: "weigh-station",
    name: "Weigh Station",
    emoji: "⚖️",
    blurb: "Get through a weigh station — know your weights, have your paperwork clean, and handle a pull-in without panic.",
    counterpart: "DOT officer or weight station attendant.",
    learnerRole: "Driver at the scale or pulled in for inspection",
    toneNote: "Calm, cooperative, professional. Answer questions directly. Do not volunteer extra information.",
    phrases: [
      { en: "Gross is 78,400 — steer is 12,100.", intent: "State weights" },
      { en: "Here's my registration, insurance, and medical card.", intent: "Present documents" },
      { en: "I've got a Bill of Lading right here.", intent: "Offer BOL" },
      { en: "I'm on a 10-hour break — my logs are current.", intent: "HOS compliance" },
      { en: "Understood — I'll pull around to bay three.", intent: "Comply with direction" },
      { en: "Is there something specific you'd like me to check?", intent: "Cooperate with inspection" },
    ],
    vocab: ["gross weight", "steer axle", "drive axles", "tandem", "GVWR", "axle weight", "permit", "overweight", "Level 1 inspection", "logbook"],
    challenges: [
      "You get a green light but then a secondary inspection sign flashes. Pull in and cooperate with the officer's questions.",
      "The officer tells you your drive axles are overweight by 400 pounds. Explain what you'll do to correct it.",
      "An officer asks for your last 8 days of logs. Walk through what you hand over and what the logs should show.",
    ],
    sampleConversation: [
      { speaker: "ai", en: "Pull forward and step out, please. I need your license, registration, and IFTA credentials." },
      { speaker: "learner", en: "Yes sir. Here you go — CDL, registration, IFTA, and medical card." },
      { speaker: "ai", en: "Your drive axles are reading 34,200. Legal limit is 34,000. You've got a scale variance of 200 pounds — you're fine. I do want to see your last 24 hours of logs." },
      { speaker: "learner", en: "No problem. I'm on paper logs today — here's the current sheet and yesterday's." },
      { speaker: "ai", en: "Everything looks good. You're cleared to go." },
      { speaker: "learner", en: "Thank you, officer. Have a good one." },
    ],
  },
  {
    id: "fuel-stop",
    name: "Fuel Stop",
    emoji: "⛽",
    blurb: "Handle a fuel stop efficiently — use the fuel desk, troubleshoot a card issue, and get back on the road fast.",
    counterpart: "Fuel desk cashier at a truck stop.",
    learnerRole: "Driver fueling and using the fuel desk",
    toneNote: "Efficient, no-nonsense. Time is money at a fuel stop.",
    phrases: [
      { en: "I need a company fuel code for unit 4412 — diesel, pump nine.", intent: "Get fuel authorization" },
      { en: "The card's showing declined — can you try running it again?", intent: "Card problem" },
      { en: "I need a DEF fill too — can I do that on the same transaction?", intent: "DEF with diesel" },
      { en: "Can I get a receipt for the whole transaction?", intent: "IFTA documentation" },
      { en: "Do you have showers available? I need to book one.", intent: "Shower request" },
      { en: "Is the scale out back working? I want to check my weights before I leave.", intent: "CAT scale" },
    ],
    vocab: ["DEF", "IFTA", "CAT scale", "fuel code", "company card", "receipt", "diesel", "reefer fuel", "idle shutdown", "APU"],
    challenges: [
      "Your company fuel card is declined and you need to call the carrier to get it resolved before you lose your delivery appointment.",
      "The cashier overcharged for DEF. Walk through getting the transaction corrected before you leave.",
      "You forgot to get a fuel receipt and are two miles down the road. Turn back or call ahead — explain your IFTA obligation.",
    ],
    sampleConversation: [
      { speaker: "learner", en: "Hi — fuel code for pump twelve, unit 217, diesel." },
      { speaker: "ai", en: "What carrier?" },
      { speaker: "learner", en: "Apex Freight. Authorization should be on file." },
      { speaker: "ai", en: "Got it — you're set for 200 gallons. DEF too?" },
      { speaker: "learner", en: "Yeah, same pump. And I need a printed receipt — IFTA." },
      { speaker: "ai", en: "I'll print it when you're done." },
    ],
  },
  {
    id: "delivery-dock",
    name: "Delivery Dock",
    emoji: "🏭",
    blurb: "Back into a dock, communicate with dock workers, and complete the delivery paperwork.",
    counterpart: "Dock worker, receiver, or warehouse supervisor.",
    learnerRole: "Driver delivering a load at a receiver's dock",
    toneNote: "Efficient, cooperative. Be patient with dock workers — they're doing their job too.",
    phrases: [
      { en: "I've got a delivery for you — BOL number 44819.", intent: "Check in at receiver" },
      { en: "Which door am I in?", intent: "Get dock assignment" },
      { en: "I'll need someone to spot me — it's tight back there.", intent: "Request spotter" },
      { en: "Seal number on the trailer is 88441 — it's intact.", intent: "Verify seal" },
      { en: "I'm showing 24 pallets on the BOL — sign here and I'll take my copy.", intent: "Delivery complete" },
      { en: "I've got a short on pallet 18 — I need that noted before you sign.", intent: "Document shortage" },
    ],
    vocab: ["dock door", "BOL", "seal number", "pallet count", "short", "overage", "lumper", "live unload", "drop", "consignee"],
    challenges: [
      "The receiver says the count is short by two cases. Walk through how you note it on the BOL before you leave.",
      "The dock is full and they can't take you for two hours. Call dispatch and log your wait time.",
      "A dock worker wants you to break the seal before the supervisor arrives. Explain why you won't.",
    ],
    sampleConversation: [
      { speaker: "learner", en: "Hi — I've got a delivery, BOL 44819, scheduled for 0200." },
      { speaker: "ai", en: "You're a little early. Give me a minute — you'll be in door seven." },
      { speaker: "learner", en: "Copy, door seven. Seal's intact — 88441. Want to verify before I open?" },
      { speaker: "ai", en: "Yeah, let me get my clipboard. 88441 — that matches. Back her in." },
      { speaker: "learner", en: "I'll need a spotter. There's a support post that cuts it close on the left." },
      { speaker: "ai", en: "Jorge will spot you." },
    ],
  },
  {
    id: "breakdown-call",
    name: "Breakdown Call",
    emoji: "🆘",
    blurb: "Your rig has broken down on the road — get safe, call it in, and manage the situation.",
    counterpart: "Roadside assistance dispatcher or your carrier's breakdown line.",
    learnerRole: "Driver broken down and calling for help",
    toneNote: "Calm but urgent. Give exact location first — everything else comes after that.",
    phrases: [
      { en: "I've got a breakdown on I-80 eastbound, mile marker 212, right shoulder.", intent: "Location first" },
      { en: "I've got triangles out and four-ways on.", intent: "Safety measures taken" },
      { en: "Left rear inside dual has a blowout — trailer is sitting on the rim.", intent: "Describe problem" },
      { en: "I need a tire truck as fast as you can get one here.", intent: "Request service" },
      { en: "Load is refrigerated — trailer temp is set at 36 degrees. Reefer is still running.", intent: "Load status" },
      { en: "How long is your ETA on the road call?", intent: "Get time estimate" },
    ],
    vocab: ["blowout", "rim ride", "reflective triangles", "four-ways", "road call", "tire truck", "tow", "reefer", "hazmat placard", "mile marker"],
    challenges: [
      "Your engine coolant light comes on and steam is coming from under the hood on the interstate. Make the call to dispatch.",
      "You have a blown steer tire at night. Walk through the steps: safety measures, call, what you tell the dispatcher.",
      "Your load is refrigerated and the reefer unit dies during a breakdown. Who do you call first and what do you say?",
    ],
    sampleConversation: [
      { speaker: "learner", en: "Breakdown line — I've got an emergency. I'm on I-40 westbound, mile marker 88, right shoulder." },
      { speaker: "ai", en: "Copy — unit number and carrier?" },
      { speaker: "learner", en: "Unit 312, Titan Transport. Left steer tire blew. I've got triangles out, I'm off the travel lane." },
      { speaker: "ai", en: "Are you safe? Any injuries?" },
      { speaker: "learner", en: "I'm fine. But I've got a perishable load — needs to be moving. How fast can you get a tire service here?" },
      { speaker: "ai", en: "Closest truck is 45 minutes. I'll put a rush on it." },
    ],
  },
  {
    id: "hours-of-service",
    name: "Hours of Service",
    emoji: "🕐",
    blurb: "Manage and explain your HOS status — to dispatch, a DOT officer, or another driver.",
    counterpart: "Dispatcher, DOT officer, or fellow driver.",
    learnerRole: "Driver explaining or managing their HOS log",
    toneNote: "Precise. HOS numbers matter legally. Never guess — check your log.",
    phrases: [
      { en: "I've got four hours and twenty minutes left on my 11-hour clock.", intent: "State available drive time" },
      { en: "I'm at 69 hours on my 8-day cycle — I need to reset before I take that long run.", intent: "70-hour limit" },
      { en: "I went into a 30-minute break at mile marker 44 — that's logged.", intent: "Document break" },
      { en: "I can make that delivery but I'll need to split my sleeper berth.", intent: "Sleeper berth provision" },
      { en: "I'm past my 14 — I can drive but I can't go past the hour.", intent: "14-hour window" },
      { en: "I'll restart Thursday morning — I'll be fresh for the Chicago turn.", intent: "34-hour restart planning" },
    ],
    vocab: ["11-hour rule", "14-hour window", "70-hour/8-day", "34-hour restart", "sleeper berth", "on-duty not driving", "personal conveyance", "ELD", "adverse conditions"],
    challenges: [
      "Explain to a new driver the difference between the 11-hour driving limit and the 14-hour window.",
      "Dispatch wants you to push through to make a delivery but you're 30 minutes past your 14-hour window. Hold your ground.",
      "Walk a DOT officer through your last 24 hours of ELD logs.",
    ],
    sampleConversation: [
      { speaker: "ai", en: "Jenkins, I need you to make a run to Memphis tonight. 480 miles." },
      { speaker: "learner", en: "I need to check my hours first. I'm at hour 10 on my 11-hour clock. Memphis is pushing eight hours." },
      { speaker: "ai", en: "Can you split the berth?" },
      { speaker: "learner", en: "I'd have to take my 8 and 2 split. I can get there but I won't have any margin if I hit traffic." },
      { speaker: "ai", en: "What if you take a 10 tonight and start fresh in the morning?" },
      { speaker: "learner", en: "That works. I'm at 62 hours on my 8-day so I still have runway. Get me a confirmed appointment time and I'll make it work." },
    ],
  },
  {
    id: "border-crossing",
    name: "Border Crossing",
    emoji: "🛂",
    blurb: "Cross the US-Canada or US-Mexico border — present documents, answer officer questions, and understand your cargo declaration.",
    counterpart: "Customs and Border Protection (CBP) officer.",
    learnerRole: "Driver at a port of entry",
    toneNote: "Respectful, brief, direct. Answer only what is asked. Have documents ready before you pull forward.",
    phrases: [
      { en: "US citizen, sir. Here's my passport, FAST card, and PAPS paperwork.", intent: "Opening presentation" },
      { en: "I'm carrying automotive parts — non-hazmat, commercial shipment.", intent: "Cargo declaration" },
      { en: "The importer of record is Great Lakes Manufacturing out of Detroit.", intent: "Importer info" },
      { en: "I don't have anything to declare personally.", intent: "Personal declaration" },
      { en: "The shipper sealed the trailer — seal number 77302.", intent: "Sealed load" },
      { en: "I understand. I'll pull into secondary and wait for your instructions.", intent: "Comply with secondary" },
    ],
    vocab: ["FAST card", "PAPS", "C-TPAT", "port of entry", "CBP", "importer of record", "manifest", "secondary inspection", "ACE", "hazmat placard"],
    challenges: [
      "A CBP officer asks you to describe every item on your manifest. Walk through it clearly.",
      "You're sent to secondary inspection. Stay calm, cooperate, and explain the load without oversharing.",
      "The officer says your paperwork lists the wrong shipper address. Walk through how you'd resolve it on the spot.",
    ],
    sampleConversation: [
      { speaker: "ai", en: "License and travel documents." },
      { speaker: "learner", en: "Yes sir — US passport, FAST card, and PAPS number is on the front of this sheet." },
      { speaker: "ai", en: "What are you carrying?" },
      { speaker: "learner", en: "Automotive stampings, non-hazardous. Fifty pallets, bound for a tier-one supplier in Windsor." },
      { speaker: "ai", en: "Importer of record?" },
      { speaker: "learner", en: "Canadian Auto Parts Ltd., Windsor, Ontario. Contact info is on the BOL." },
      { speaker: "ai", en: "Pull ahead to door four for a secondary. Leave your keys in the ignition." },
    ],
  },
];

const truckDriverVocabSets: ModuleVocabSet[] = [
  {
    category: "Federal Regulations (FMCSA)",
    emoji: "📜",
    words: ["Hours of Service", "DVIR", "ELD mandate", "out-of-service", "Level 1 inspection", "CDL", "medical certificate", "IFTA"],
  },
  {
    category: "Loads & Paperwork",
    emoji: "📄",
    words: ["Bill of Lading", "manifest", "PAPS", "seal number", "proof of delivery", "hazmat placard", "oversize permit", "fuel surcharge"],
  },
  {
    category: "Truck & Trailer",
    emoji: "🚛",
    words: ["fifth wheel", "kingpin", "glad-hands", "landing gear", "tandems", "reefer", "dry van", "flatbed", "step-deck", "bobtail"],
  },
  {
    category: "Road & Navigation",
    emoji: "🗺️",
    words: ["truck route", "low clearance", "weigh station", "port of entry", "scale bypass", "mile marker", "rest area", "toll plaza"],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// CONSTRUCTION FOREMAN
// ─────────────────────────────────────────────────────────────────────────────

const constructionForemanAreas: ModuleArea[] = [
  {
    id: "morning-safety-tailgate",
    name: "Morning Safety Tailgate",
    emoji: "🦺",
    blurb: "Open the day with a safety meeting — cover hazards, PPE, and the day's work plan.",
    counterpart: "Crew of five to fifteen workers starting the day.",
    learnerRole: "Foreman running the morning tailgate",
    toneNote: "Direct, clear, no lecture tone. Keep it under five minutes. Make it real, not a checkbox.",
    phrases: [
      { en: "Alright, let's huddle up — tailgate before anyone touches a tool.", intent: "Gather the crew" },
      { en: "Today's hazards: we're working near the excavation on the north end — nobody within six feet of that edge without a spotter.", intent: "State the hazard" },
      { en: "Hard hats and hi-vis on site from the minute you step out of your truck.", intent: "PPE mandate" },
      { en: "We've got a concrete pour starting at ten — I need four bodies on that crew.", intent: "Preview day's work" },
      { en: "Anybody not feeling right today — fatigue, sick, anything — tell me now, not after you get hurt.", intent: "Fitness for duty" },
      { en: "Any questions before we move?", intent: "Open floor" },
      { en: "Sign the tailgate sheet before you leave the circle.", intent: "Documentation" },
    ],
    vocab: ["tailgate meeting", "PPE", "hi-vis", "hard hat", "excavation", "fall hazard", "spotter", "toolbox talk", "incident log", "SDS"],
    challenges: [
      "Run a five-minute tailgate for a crew that will be trenching near an existing gas line today.",
      "A worker shows up without a hard hat. Address it in front of the crew without embarrassing them.",
      "Yesterday there was a near-miss with a forklift and a pedestrian. Bring it up at tailgate without creating blame.",
    ],
    sampleConversation: [
      { speaker: "learner", en: "Let's go, circle up. Quick tailgate — five minutes." },
      { speaker: "ai", en: "What's on the agenda today, boss?" },
      { speaker: "learner", en: "Three things. First: we start setting forms on the east wall today. Edges are unguarded until we get the handrail in — nobody works within four feet of that drop without a harness. Second: the electricians are pulling wire in the same zone. Coordinate with their foreman before you move. Third: heat advisory starts at noon — mandatory shade break at twelve and again at two." },
      { speaker: "ai", en: "Are we still pouring Friday?" },
      { speaker: "learner", en: "That's the plan if forms are done by Thursday afternoon. Let me worry about that — you worry about today. Sign the sheet and let's go." },
    ],
  },
  {
    id: "crew-task-assignment",
    name: "Crew Task Assignment",
    emoji: "📋",
    blurb: "Assign the day's work — who does what, where, by when.",
    counterpart: "Individual workers or small crews being assigned tasks.",
    learnerRole: "Foreman assigning morning tasks",
    toneNote: "Direct and specific. No ambiguity about who, what, where, and when. Check for understanding.",
    phrases: [
      { en: "Marco, I need you and Tomas on the block wall today — pick up where you left off on the north face.", intent: "Assign pair" },
      { en: "Finish that by noon or come find me — don't make a decision without me.", intent: "Set checkpoint" },
      { en: "If you run out of block, talk to the gate — there's a delivery due at nine.", intent: "Material instruction" },
      { en: "Don't touch the conduit on the east wall — that's the electricians' work.", intent: "Scope boundary" },
      { en: "Any issues, radio me on channel three.", intent: "Communication protocol" },
      { en: "Tell me back what I just said so I know we're good.", intent: "Read-back for clarity" },
    ],
    vocab: ["task assignment", "scope of work", "coordination", "channel", "checkpoint", "deadline", "crew lead", "punch list", "change order"],
    challenges: [
      "Assign three different crews to three different tasks in under two minutes at the start of the day.",
      "A worker finishes early and comes back to you. You need to reassign them without disrupting the current flow.",
      "Two workers are doing the same task because the assignment was unclear. Redirect both without creating a conflict.",
    ],
    sampleConversation: [
      { speaker: "learner", en: "Luis — I need you on the scaffold today. Third level, tie-ins on the west bay." },
      { speaker: "ai", en: "Just me?" },
      { speaker: "learner", en: "You and Ramos. Finish the west bay by lunch, then move to the south side. Do not start on the south until I walk it with you — there are some anchor points I need to check first." },
      { speaker: "ai", en: "Got it — west bay, stop for lunch, wait for you on the south." },
      { speaker: "learner", en: "Right. You need anything before you start?" },
      { speaker: "ai", en: "More tie wire — we're low." },
      { speaker: "learner", en: "Check the gang box by the trailer. If it's empty, radio me and I'll get it to you." },
    ],
  },
  {
    id: "subcontractor-coordination",
    name: "Subcontractor Coordination",
    emoji: "🤝",
    blurb: "Coordinate with other trades on site — electrical, plumbing, HVAC — and manage schedule conflicts.",
    counterpart: "Foreman or lead from another trade.",
    learnerRole: "General contractor's foreman coordinating site activity",
    toneNote: "Collaborative but firm. You set the schedule on your site. Keep it professional — you'll need these people tomorrow.",
    phrases: [
      { en: "Hey — we've got a conflict on the second floor. My guys are framing the south wall today and you're roughing-in on the same side.", intent: "Flag conflict" },
      { en: "Can your crew start on the north side and come back to the south tomorrow?", intent: "Propose solution" },
      { en: "I need the rough plumbing done in unit 204 before my drywall crew comes in Thursday.", intent: "Set deadline" },
      { en: "If that changes, I need 24 hours' notice — not the morning of.", intent: "Schedule expectation" },
      { en: "Are your guys trained on the fall protection requirements for this site?", intent: "Safety check" },
      { en: "Let's walk the floor together so there's no miscommunication.", intent: "Joint walkthrough" },
    ],
    vocab: ["rough-in", "penetration", "coordination drawing", "sequencing", "lead time", "punch out", "as-built", "RFI", "change order", "substantial completion"],
    challenges: [
      "The plumbing sub ran a drain line through a beam you need to keep clear. Address it without shutting down work.",
      "An electrical sub's crew is behind and is going to push your drywall start. Have the conversation about the schedule impact.",
      "Two subs are arguing on your site. Step in and resolve it without taking sides.",
    ],
    sampleConversation: [
      { speaker: "learner", en: "Hey Dave — your guys knocked out the rough-in in 201 and 202. Nice work. But I need 203 done by Wednesday or my drywall crew is sitting idle." },
      { speaker: "ai", en: "We've got a material issue — fixtures are delayed until Thursday." },
      { speaker: "learner", en: "I don't need the fixtures — I need the rough-in and inspection ready. Fixtures can come after drywall." },
      { speaker: "ai", en: "Yeah, I can do that. We can rough 203 Tuesday." },
      { speaker: "learner", en: "Tuesday works. And call the inspector yourself — I don't want to be chasing that for you." },
      { speaker: "ai", en: "I'll have it called in by end of day Monday." },
    ],
  },
  {
    id: "inspection-walk",
    name: "Inspection Walk",
    emoji: "📐",
    blurb: "Walk a job with a building inspector or quality control supervisor — answer questions, manage findings.",
    counterpart: "City/county building inspector or owner's QC rep.",
    learnerRole: "Foreman accompanying an inspector",
    toneNote: "Professional, cooperative. Know your specs. Do not argue findings on the spot — note them and respond properly.",
    phrases: [
      { en: "Good morning — I'm the foreman. I'll walk the site with you.", intent: "Greet inspector" },
      { en: "The footing pour was Tuesday — here's the inspection card.", intent: "Present documentation" },
      { en: "That penetration is sealed — I can pull up the approval if you need it.", intent: "Defend work with backup" },
      { en: "I'll get that corrected before you come back.", intent: "Accept a finding" },
      { en: "Can you note what section of code that falls under so my PM has it?", intent: "Request code reference" },
      { en: "What else do you need to see before you sign off?", intent: "Wrap up" },
    ],
    vocab: ["inspection card", "correction notice", "code citation", "re-inspection", "sign-off", "as-built", "approved plans", "shop drawing", "RFI", "submittal"],
    challenges: [
      "An inspector flags rebar spacing that doesn't match the approved drawings. Stay calm and verify before you accept the finding.",
      "The inspector wants to see a submittal approval you don't have on site. Explain how you'll get it and buy time for the inspection.",
      "You get a correction notice on five items. Walk your PM through each one and what you'll do to resolve them.",
    ],
    sampleConversation: [
      { speaker: "ai", en: "I need to see the anchor bolt placement on the east wall before I can sign off on the framing." },
      { speaker: "learner", en: "Absolutely — let me take you right to it. Here are the approved drawings. The pattern is per detail A-7." },
      { speaker: "ai", en: "This spacing looks closer to 48 inches, not 36." },
      { speaker: "learner", en: "Let me get a tape on that. — You're right on one section, looks like it's off by about two inches near the corner. I'll have the crew correct it today." },
      { speaker: "ai", en: "I'll put it on the correction notice. Call me when it's done and I'll come back out." },
      { speaker: "learner", en: "I'll have it corrected by tomorrow morning. Is there anything else you need to see while you're here?" },
    ],
  },
  {
    id: "material-shortage",
    name: "Material Shortage",
    emoji: "📦",
    blurb: "React to a material shortage on site — problem-solve without shutting down the job.",
    counterpart: "Supplier rep, project manager, or crew member reporting the shortage.",
    learnerRole: "Foreman managing a material shortage in real time",
    toneNote: "Problem-solving mode. Stay calm. Identify who has the authority to fix it and escalate fast.",
    phrases: [
      { en: "We're short on the 3/8 rebar — we've got enough for the south footing but not the east.", intent: "Report shortage" },
      { en: "What's the soonest you can get me another 50 sticks on site?", intent: "Urgent reorder" },
      { en: "I'm going to redirect the crew to work the south pour and hold on the east until material arrives.", intent: "Workaround plan" },
      { en: "This is going to push the east footing by half a day — I need the PM to know.", intent: "Escalate schedule impact" },
      { en: "Is there any material on another phase I can pull from temporarily?", intent: "Internal transfer" },
      { en: "Get me a delivery confirmation in writing so I can document the delay.", intent: "Documentation" },
    ],
    vocab: ["shortage", "reorder", "delivery window", "stockpile", "material transfer", "schedule impact", "back charge", "surplus", "take-off error"],
    challenges: [
      "The concrete truck is on its way and you're short on form lumber. You have 30 minutes to solve it.",
      "Your supplier tells you the specified product is back-ordered six weeks. Call your PM and propose a substitution.",
      "A crew member used material from the wrong phase. Figure out the impact and how to correct it without a blowup.",
    ],
    sampleConversation: [
      { speaker: "ai", en: "Hey boss — we just ran out of 2x10s on the floor frame. We're about 40 pieces short." },
      { speaker: "learner", en: "When's the next delivery scheduled?" },
      { speaker: "ai", en: "Thursday. That's two days out." },
      { speaker: "learner", en: "Okay. Move the crew to the interior partition walls for the rest of today — we've got plenty of 2x4 material. I'm calling the supplier now to see if they can get me an emergency drop tomorrow morning." },
      { speaker: "ai", en: "You want me to start the partition layout?" },
      { speaker: "learner", en: "Yes. Use the drawings in the plan box — page A-4. Don't start framing until I've walked it with you, but get your layout done." },
    ],
  },
  {
    id: "safety-incident",
    name: "Safety Incident",
    emoji: "🚨",
    blurb: "Respond to a jobsite safety incident — secure the scene, get help, and document properly.",
    counterpart: "Injured worker, crew members, or the safety officer.",
    learnerRole: "Foreman responding to a safety incident on site",
    toneNote: "Controlled urgency. First priority is the person, second is the scene, third is documentation. Never coach what happened.",
    phrases: [
      { en: "Stop work — everyone away from the area.", intent: "Immediate stop work" },
      { en: "Is he conscious? — Someone call 911 now.", intent: "Assess and call for help" },
      { en: "Don't move him until EMS arrives.", intent: "Prevent further injury" },
      { en: "Nobody leaves the site until I've got your statement.", intent: "Preserve witness info" },
      { en: "I'm calling the PM and the safety officer right now.", intent: "Notify up the chain" },
      { en: "The area is preserved — nothing gets moved until safety has seen it.", intent: "Scene preservation" },
      { en: "Write down exactly what you saw and sign it — don't discuss it with anyone else first.", intent: "Witness statement" },
    ],
    vocab: ["stop work authority", "incident report", "near miss", "first aid", "EMS", "OSHA 300", "recordable incident", "root cause", "witness statement", "scene preservation"],
    challenges: [
      "A worker falls from a ladder and is conscious but holding his arm. Walk through your immediate response.",
      "A near-miss occurs: a load swings and almost hits a worker. No one is hurt. How do you handle the aftermath?",
      "Your PM tells you to get the work going again before the investigation is complete. Push back professionally.",
    ],
    sampleConversation: [
      { speaker: "ai", en: "Boss — Rivera slipped off the scaffold. He's down on the second floor." },
      { speaker: "learner", en: "Everyone stop work. You — call 911 right now. Tell them the address, second-floor scaffold, possible fall injury. Don't move Rivera — stay with him and keep him calm." },
      { speaker: "ai", en: "He says he can walk." },
      { speaker: "learner", en: "Tell him not to. EMS will evaluate him. I don't want him moving until they say so. Hold the rest of the crew — nobody goes home and nobody touches anything near that scaffold." },
      { speaker: "ai", en: "What do I tell the guys?" },
      { speaker: "learner", en: "Tell them we're following procedure. Write down what you saw before you talk to anyone else. I'm calling the PM now." },
    ],
  },
  {
    id: "owner-gc-meeting",
    name: "Owner / GC Meeting",
    emoji: "🏗️",
    blurb: "Meet with the owner's rep or general contractor to report progress, discuss issues, and manage expectations.",
    counterpart: "Project owner, owner's rep, or general contractor's PM.",
    learnerRole: "Subcontractor foreman or GC foreman reporting to the owner or PM",
    toneNote: "Professional, confident, concise. Come with numbers. Don't hide problems — give them with solutions.",
    phrases: [
      { en: "We're at 60% complete on the structural steel — on track for the Friday milestone.", intent: "Progress update" },
      { en: "We have a three-day delay on the south tower due to the footing revision.", intent: "Report delay with cause" },
      { en: "Here's what I need to recover: two extra ironworkers and a crane extension through Wednesday.", intent: "Recovery plan" },
      { en: "The change order for the added anchor bolts is still outstanding — I can't finish that scope without approval.", intent: "CO status" },
      { en: "I want to walk the site with you before we close out this section.", intent: "Invite walkthrough" },
      { en: "If we get the engineer's clarification by Monday, we can still hit the original date.", intent: "Conditional schedule" },
    ],
    vocab: ["schedule of values", "percent complete", "change order", "RFI", "submittal", "milestone", "liquidated damages", "retainage", "punch list", "substantial completion"],
    challenges: [
      "Present a one-week schedule delay to an owner who is already under pressure from their bank. Give it with a recovery plan.",
      "The owner asks you to do extra work that isn't in your contract. Explain the change order process without being difficult.",
      "You're behind on a milestone and the owner is asking why. Be honest and come with a solution, not just an excuse.",
    ],
    sampleConversation: [
      { speaker: "ai", en: "Where are we on the second-floor pour? We were supposed to be done by last Friday." },
      { speaker: "learner", en: "We poured Thursday — we're three days behind the original schedule. The footing revision from the structural engineer added two additional days of forming work. That's documented in RFI 44." },
      { speaker: "ai", en: "What's that do to my occupancy date?" },
      { speaker: "learner", en: "As of today, nothing — I have float in the schedule through the MEP rough-in phase. If we get the third-floor forms started Monday, I can still hit substantial completion on the 28th." },
      { speaker: "ai", en: "I need that in writing by end of day." },
      { speaker: "learner", en: "I'll have an updated schedule in your inbox by four o'clock." },
    ],
  },
  {
    id: "end-of-day-debrief",
    name: "End-of-Day Debrief",
    emoji: "🌅",
    blurb: "Close out the workday with your crew — review what got done, flag issues, and set up tomorrow.",
    counterpart: "Crew members or crew leads at end of shift.",
    learnerRole: "Foreman running end-of-day debrief",
    toneNote: "Brief and forward-looking. Give credit where it's due. Leave people knowing what tomorrow looks like.",
    phrases: [
      { en: "Good work today — the east wall is fully framed, two days ahead of where I expected.", intent: "Positive feedback" },
      { en: "Before you leave, make sure all tools are locked in the gang box.", intent: "Secure tools" },
      { en: "We had one near-miss today on the forklift — I'll be talking to the operator separately, but everybody needs to stay out of the travel path.", intent: "Address safety event" },
      { en: "Tomorrow we start on the roof deck — be here at six, not six-fifteen.", intent: "Set next day expectation" },
      { en: "If you used any consumables today — saw blades, drill bits — log it on the sheet so we can reorder.", intent: "Consumable log" },
      { en: "Anything I need to know before we wrap up?", intent: "Open floor" },
    ],
    vocab: ["gang box", "consumables", "daily log", "punch list item", "float", "schedule update", "crew debrief", "quality check", "rework"],
    challenges: [
      "Close out a day where the crew fell short of the plan. Acknowledge it honestly and reset for tomorrow without demoralizing the team.",
      "One worker did outstanding work today. Recognize them in front of the crew in a way that motivates everyone.",
      "End the day by reviewing four open items that need to be resolved tomorrow before you can continue the critical path work.",
    ],
    sampleConversation: [
      { speaker: "learner", en: "Alright — two minutes before you all head out. Good day overall. The block crew finished the north elevation — that's a week ahead of schedule. Nice work, Marco's crew." },
      { speaker: "ai", en: "What about the concrete delivery issue this morning?" },
      { speaker: "learner", en: "We lost about 90 minutes waiting on the second truck. I talked to the plant — it's a dispatching issue on their end. It's documented and it'll be in tomorrow's daily log." },
      { speaker: "ai", en: "Does that push us back?" },
      { speaker: "learner", en: "Not yet — we made up time on the framing. Tomorrow: we're starting the window rough openings on the east face. Be here at six-thirty. Tools locked up, gate closed. Any questions?" },
    ],
  },
];

const constructionForemanVocabSets: ModuleVocabSet[] = [
  {
    category: "Safety & Compliance",
    emoji: "🦺",
    words: ["OSHA 10", "stop work authority", "SDS", "lockout/tagout", "fall protection", "excavation safety", "confined space", "hot work permit"],
  },
  {
    category: "Structural & Concrete",
    emoji: "🧱",
    words: ["footing", "rebar", "form", "pour", "cure", "grade beam", "slab", "anchor bolt", "cold joint", "slump test"],
  },
  {
    category: "Project Management",
    emoji: "📊",
    words: ["critical path", "float", "baseline schedule", "percent complete", "RFI", "submittal", "change order", "retainage", "daily log", "punch list"],
  },
  {
    category: "Trades Coordination",
    emoji: "🔌",
    words: ["rough-in", "MEP", "above ceiling", "coordination drawing", "penetration", "sleeve", "conduit", "stub-out", "above slab", "tie-in"],
  },
  {
    category: "Equipment & Tools",
    emoji: "🏗️",
    words: ["crane", "forklift", "boom lift", "scaffold", "compactor", "transit", "level", "gang box", "come-along", "impact driver"],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// MAIN EXPORT ARRAY
// ─────────────────────────────────────────────────────────────────────────────

export const TRANSPORT_TRADES_CONTENT: TransportTradesContent[] = [
  {
    moduleId: "auto-mechanic",
    areas: autoMechanicAreas,
    vocabSets: autoMechanicVocabSets,
  },
  {
    moduleId: "truck-driver",
    areas: truckDriverAreas,
    vocabSets: truckDriverVocabSets,
  },
  {
    moduleId: "construction-foreman",
    areas: constructionForemanAreas,
    vocabSets: constructionForemanVocabSets,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// HELPER FUNCTIONS
// ─────────────────────────────────────────────────────────────────────────────

export function getTransportTradesContent(moduleId: string): TransportTradesContent | null {
  return TRANSPORT_TRADES_CONTENT.find(m => m.moduleId === moduleId) ?? null;
}

export function getTransportTradesArea(moduleId: string, areaId: string): ModuleArea | null {
  return getTransportTradesContent(moduleId)?.areas.find(a => a.id === areaId) ?? null;
}
