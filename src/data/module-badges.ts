// Module-specific badge tiers. Each module defines a progression ladder
// the learner climbs as they clear challenges while that module is active.
// Progression metric for now: total challenges cleared (global stub).
// Later this can switch to per-module counters without changing the UI.

export interface ModuleBadge {
  id: string;
  title: string;
  emoji: string;
  blurb: string;
  threshold: number; // challenges cleared to unlock
}

export interface ModuleBadgeLadder {
  moduleId: string;
  accent: string; // CSS color for glow / border
  badges: ModuleBadge[]; // ordered, ascending by threshold
}

export const MODULE_BADGES: ModuleBadgeLadder[] = [
  {
    moduleId: "lds-missionary",
    accent: "oklch(0.78 0.14 95)", // warm gold
    badges: [
      {
        id: "greenie",
        title: "Greenie",
        emoji: "🌱",
        blurb: "Just off the plane — first lessons, first door approaches.",
        threshold: 0,
      },
      {
        id: "senior-companion",
        title: "Senior Companion",
        emoji: "🤝",
        blurb: "Leading the discussions and showing the new missionary the area.",
        threshold: 5,
      },
      {
        id: "district-leader",
        title: "District Leader",
        emoji: "📋",
        blurb: "Running district meetings and tracking baptismal goals.",
        threshold: 12,
      },
      {
        id: "zone-leader",
        title: "Zone Leader",
        emoji: "🛡️",
        blurb: "Coordinating multiple districts across the zone.",
        threshold: 22,
      },
      {
        id: "trainer",
        title: "Trainer",
        emoji: "🎓",
        blurb: "Entrusted to train a new missionary in the field.",
        threshold: 35,
      },
      {
        id: "ap",
        title: "Assistant to the President",
        emoji: "✨",
        blurb: "Serving alongside the mission president — the final assignment.",
        threshold: 55,
      },
    ],
  },
  {
    moduleId: "orthopedics",
    accent: "oklch(0.72 0.13 220)", // clinical blue
    badges: [
      {
        id: "med-student",
        title: "Med Student",
        emoji: "📘",
        blurb: "Learning bones, joints, and the language of the clinic.",
        threshold: 0,
      },
      {
        id: "intern",
        title: "Intern",
        emoji: "🩺",
        blurb: "First rotations — taking histories, presenting on rounds.",
        threshold: 5,
      },
      {
        id: "resident",
        title: "Resident",
        emoji: "🦴",
        blurb: "Reading films and managing fractures with the team.",
        threshold: 12,
      },
      {
        id: "chief-resident",
        title: "Chief Resident",
        emoji: "🏥",
        blurb: "Leading handoffs and coordinating the OR schedule.",
        threshold: 22,
      },
      {
        id: "attending",
        title: "Attending",
        emoji: "🧑‍⚕️",
        blurb: "Independent practice — your call in the OR.",
        threshold: 35,
      },
      {
        id: "chief-of-surgery",
        title: "Chief of Surgery",
        emoji: "⚕️",
        blurb: "Running the department.",
        threshold: 55,
      },
    ],
  },
  {
    moduleId: "framer",
    accent: "oklch(0.74 0.14 60)", // sawdust amber
    badges: [
      {
        id: "laborer",
        title: "Laborer",
        emoji: "🧱",
        blurb: "Hauling material, learning the lingo on site.",
        threshold: 0,
      },
      {
        id: "apprentice",
        title: "Apprentice",
        emoji: "🪚",
        blurb: "Cutting studs and shadowing the lead carpenter.",
        threshold: 5,
      },
      {
        id: "carpenter",
        title: "Journeyman Carpenter",
        emoji: "🔨",
        blurb: "Framing walls clean and plumb without supervision.",
        threshold: 12,
      },
      {
        id: "lead",
        title: "Lead Carpenter",
        emoji: "📐",
        blurb: "Reading prints and directing the framing crew.",
        threshold: 22,
      },
      {
        id: "foreman",
        title: "Foreman",
        emoji: "📋",
        blurb: "Running the jobsite, scheduling deliveries and inspections.",
        threshold: 35,
      },
      {
        id: "superintendent",
        title: "Superintendent",
        emoji: "🏗️",
        blurb: "Overseeing every phase from foundation to finish.",
        threshold: 55,
      },
    ],
  },
  // ── Trades ──────────────────────────────────────────────────────────────
  {
    moduleId: "plumber",
    accent: "oklch(0.75 0.12 230)", // water blue
    badges: [
      {
        id: "helper",
        title: "Helper",
        emoji: "🪣",
        blurb: "Carrying pipe, learning fittings, and watching the master work.",
        threshold: 0,
      },
      {
        id: "apprentice-plumber",
        title: "Apprentice Plumber",
        emoji: "🔩",
        blurb: "Roughing in supply and drain lines under supervision.",
        threshold: 5,
      },
      {
        id: "journeyman-plumber",
        title: "Journeyman Plumber",
        emoji: "🔧",
        blurb: "Licensed and handling service calls independently.",
        threshold: 12,
      },
      {
        id: "lead-plumber",
        title: "Lead Plumber",
        emoji: "💧",
        blurb: "Running a crew on new construction and remodels.",
        threshold: 22,
      },
      {
        id: "master-plumber",
        title: "Master Plumber",
        emoji: "🏠",
        blurb: "Pulling permits, designing systems, and training apprentices.",
        threshold: 35,
      },
      {
        id: "plumbing-contractor",
        title: "Plumbing Contractor",
        emoji: "🏗️",
        blurb: "Running your own shop — bids, crews, and licensing.",
        threshold: 55,
      },
    ],
  },
  {
    moduleId: "drywall",
    accent: "oklch(0.82 0.05 60)", // dusty white-tan
    badges: [
      {
        id: "drywall-helper",
        title: "Helper",
        emoji: "🧤",
        blurb: "Unloading boards and learning how to handle sheet goods.",
        threshold: 0,
      },
      {
        id: "hanger",
        title: "Hanger",
        emoji: "🪛",
        blurb: "Hanging ceilings and walls clean, plumb, and on schedule.",
        threshold: 5,
      },
      {
        id: "taper",
        title: "Taper",
        emoji: "🖌️",
        blurb: "First coat, tape, and corner bead going on straight.",
        threshold: 12,
      },
      {
        id: "finisher",
        title: "Finisher",
        emoji: "🪣",
        blurb: "Floating coats and feathering seams to a Level 4 finish.",
        threshold: 22,
      },
      {
        id: "lead-finisher",
        title: "Lead Finisher",
        emoji: "🏠",
        blurb: "Quality control and training the hanging and finishing crew.",
        threshold: 35,
      },
      {
        id: "drywall-contractor",
        title: "Drywall Contractor",
        emoji: "🏢",
        blurb: "Running your own crew from bid to final walkthrough.",
        threshold: 55,
      },
    ],
  },
  {
    moduleId: "electrician",
    accent: "oklch(0.85 0.16 95)", // electric yellow
    badges: [
      {
        id: "wireman-apprentice",
        title: "Apprentice Wireman",
        emoji: "🔌",
        blurb: "Pulling wire and learning the code under a journeyman.",
        threshold: 0,
      },
      {
        id: "journeyman-electrician",
        title: "Journeyman Electrician",
        emoji: "⚡",
        blurb: "Licensed for residential and commercial rough-in and trim.",
        threshold: 5,
      },
      {
        id: "lead-electrician",
        title: "Lead Electrician",
        emoji: "🔦",
        blurb: "Running a crew and reading engineered drawings.",
        threshold: 12,
      },
      {
        id: "foreman-electrician",
        title: "Foreman",
        emoji: "📋",
        blurb: "Coordinating labor, materials, and inspections on large jobs.",
        threshold: 22,
      },
      {
        id: "master-electrician",
        title: "Master Electrician",
        emoji: "🏆",
        blurb: "Pulling permits and designing electrical systems.",
        threshold: 35,
      },
      {
        id: "electrical-contractor",
        title: "Electrical Contractor",
        emoji: "🏗️",
        blurb: "Owning the business: estimating, managing, and growing.",
        threshold: 55,
      },
    ],
  },
  {
    moduleId: "landscaper",
    accent: "oklch(0.72 0.15 145)", // grass green
    badges: [
      {
        id: "lawn-helper",
        title: "Lawn Helper",
        emoji: "🌱",
        blurb: "Learning the crew routine and basic equipment safety.",
        threshold: 0,
      },
      {
        id: "groundskeeper",
        title: "Groundskeeper",
        emoji: "🌿",
        blurb: "Mowing, edging, and blowing solo accounts reliably.",
        threshold: 5,
      },
      {
        id: "landscape-tech",
        title: "Landscape Technician",
        emoji: "🌳",
        blurb: "Installing plants, irrigation, and basic hardscape.",
        threshold: 12,
      },
      {
        id: "crew-leader",
        title: "Crew Leader",
        emoji: "🏡",
        blurb: "Running a two- or three-person crew and managing client communication.",
        threshold: 22,
      },
      {
        id: "landscape-foreman",
        title: "Landscape Foreman",
        emoji: "📐",
        blurb: "Estimating, job costing, and leading multiple crews.",
        threshold: 35,
      },
      {
        id: "landscape-owner",
        title: "Landscape Contractor",
        emoji: "🌲",
        blurb: "Owning the business — design, sales, and operations.",
        threshold: 55,
      },
    ],
  },
  {
    moduleId: "auto-mechanic",
    accent: "oklch(0.65 0.08 250)", // steel gray-blue
    badges: [
      {
        id: "lube-tech",
        title: "Lube Tech",
        emoji: "🛢️",
        blurb: "Oil changes, tire rotations, and filter swaps.",
        threshold: 0,
      },
      {
        id: "b-tech",
        title: "B Technician",
        emoji: "🔧",
        blurb: "Brakes, suspension, and basic electrical diagnosis.",
        threshold: 5,
      },
      {
        id: "a-tech",
        title: "A Technician",
        emoji: "🚗",
        blurb: "Full diagnostic capability on engine and drivetrain.",
        threshold: 12,
      },
      {
        id: "master-tech",
        title: "Master Technician",
        emoji: "🏆",
        blurb: "ASE master certified — complex diagnosis and calibration.",
        threshold: 22,
      },
      {
        id: "shop-foreman",
        title: "Shop Foreman",
        emoji: "📋",
        blurb: "Technical lead for the shop floor, dispatcher backup.",
        threshold: 35,
      },
      {
        id: "service-manager",
        title: "Service Manager",
        emoji: "🏢",
        blurb: "Running the service department — staff, workflow, and customer satisfaction.",
        threshold: 55,
      },
    ],
  },
  {
    moduleId: "truck-driver",
    accent: "oklch(0.74 0.14 50)", // highway orange
    badges: [
      {
        id: "student-cdl",
        title: "CDL Student",
        emoji: "📚",
        blurb: "Learning the pre-trip, backing, and road test vocabulary.",
        threshold: 0,
      },
      {
        id: "regional-driver",
        title: "Regional Driver",
        emoji: "🚚",
        blurb: "Running regional routes and getting comfortable with dispatch.",
        threshold: 5,
      },
      {
        id: "otr-driver",
        title: "OTR Driver",
        emoji: "🗺️",
        blurb: "Long-haul, coast-to-coast — tight on HOS and border paperwork.",
        threshold: 12,
      },
      {
        id: "hazmat-driver",
        title: "Hazmat Driver",
        emoji: "⚠️",
        blurb: "Endorsed for hazardous materials — placard and manifest fluency.",
        threshold: 22,
      },
      {
        id: "driver-trainer",
        title: "Driver Trainer",
        emoji: "🎓",
        blurb: "Training new drivers on safety, compliance, and communication.",
        threshold: 35,
      },
      {
        id: "fleet-supervisor",
        title: "Fleet Supervisor",
        emoji: "🏗️",
        blurb: "Managing drivers, routes, and cross-border logistics operations.",
        threshold: 55,
      },
    ],
  },
  // ── Agriculture ──────────────────────────────────────────────────────────
  {
    moduleId: "dairy-farmer",
    accent: "oklch(0.88 0.10 85)", // cream yellow
    badges: [
      {
        id: "dairy-helper",
        title: "Farm Helper",
        emoji: "🌾",
        blurb: "Learning the milking schedule and basic herd care.",
        threshold: 0,
      },
      {
        id: "milker",
        title: "Milker",
        emoji: "🐄",
        blurb: "Reliable on the parlor: prep, attach, post-dip, and data logging.",
        threshold: 5,
      },
      {
        id: "herd-tech",
        title: "Herd Health Tech",
        emoji: "💉",
        blurb: "Vaccinations, hoof trimming, and early mastitis detection.",
        threshold: 12,
      },
      {
        id: "herd-manager",
        title: "Herd Manager",
        emoji: "📊",
        blurb: "Reproduction, nutrition, and production record management.",
        threshold: 22,
      },
      {
        id: "farm-supervisor",
        title: "Farm Supervisor",
        emoji: "🏚️",
        blurb: "Overseeing all departments: milk, feed, and employee management.",
        threshold: 35,
      },
      {
        id: "dairy-owner",
        title: "Dairy Owner",
        emoji: "🥛",
        blurb: "Running the operation — marketing milk, managing cash flow, leading the team.",
        threshold: 55,
      },
    ],
  },
  {
    moduleId: "ranch-cowboy",
    accent: "oklch(0.65 0.12 60)", // leather brown
    badges: [
      {
        id: "greenhorn",
        title: "Greenhorn",
        emoji: "🌵",
        blurb: "First days on the ranch — learning the layout and basic cowboy etiquette.",
        threshold: 0,
      },
      {
        id: "ranch-hand",
        title: "Ranch Hand",
        emoji: "🤠",
        blurb: "Reliable with cattle, horses, and daily chores.",
        threshold: 5,
      },
      {
        id: "cowboy",
        title: "Cowboy",
        emoji: "🐂",
        blurb: "Confident on horseback and working cattle independently.",
        threshold: 12,
      },
      {
        id: "trail-boss",
        title: "Trail Boss",
        emoji: "🗺️",
        blurb: "Leading cattle drives and coordinating crew on the range.",
        threshold: 22,
      },
      {
        id: "ranch-foreman",
        title: "Ranch Foreman",
        emoji: "📋",
        blurb: "Running daily operations, managing labor, and liaising with the owner.",
        threshold: 35,
      },
      {
        id: "ranch-owner",
        title: "Ranch Owner",
        emoji: "🏡",
        blurb: "Owning your spread — land, livestock, and legacy.",
        threshold: 55,
      },
    ],
  },
  {
    moduleId: "meatpacking-butcher",
    accent: "oklch(0.58 0.15 20)", // deep red
    badges: [
      {
        id: "floor-worker",
        title: "Floor Worker",
        emoji: "🧤",
        blurb: "Learning the line, sanitation protocols, and knife safety.",
        threshold: 0,
      },
      {
        id: "trim-cutter",
        title: "Trim Cutter",
        emoji: "🔪",
        blurb: "Reliable on trim and de-boning with consistent yield.",
        threshold: 5,
      },
      {
        id: "journeyman-butcher",
        title: "Journeyman Butcher",
        emoji: "🥩",
        blurb: "Fabricating primals and handling custom cut orders.",
        threshold: 12,
      },
      {
        id: "head-butcher",
        title: "Head Butcher",
        emoji: "⚖️",
        blurb: "Quality control, cut specs, and training the floor crew.",
        threshold: 22,
      },
      {
        id: "qa-supervisor",
        title: "QA Supervisor",
        emoji: "📋",
        blurb: "USDA compliance, cold chain documentation, and product holds.",
        threshold: 35,
      },
      {
        id: "plant-manager",
        title: "Plant Manager",
        emoji: "🏭",
        blurb: "Running the full operation: production, safety, and yields.",
        threshold: 55,
      },
    ],
  },
  // ── Travel ───────────────────────────────────────────────────────────────
  {
    moduleId: "international-travel",
    accent: "oklch(0.78 0.13 210)", // sky blue
    badges: [
      {
        id: "tourist",
        title: "Tourist",
        emoji: "📸",
        blurb: "Passport in hand — navigating airports, hotels, and basic phrases.",
        threshold: 0,
      },
      {
        id: "frequent-traveler",
        title: "Frequent Traveler",
        emoji: "🧳",
        blurb: "Comfortable with bookings, transport, and restaurant orders.",
        threshold: 5,
      },
      {
        id: "independent-traveler",
        title: "Independent Traveler",
        emoji: "🗺️",
        blurb: "Off the beaten path — asking locals for directions and real recommendations.",
        threshold: 12,
      },
      {
        id: "cultural-explorer",
        title: "Cultural Explorer",
        emoji: "🌍",
        blurb: "Connecting with locals, navigating emergencies, and blending in.",
        threshold: 22,
      },
      {
        id: "expat",
        title: "Expat",
        emoji: "🏠",
        blurb: "Renting an apartment, opening a bank account, and handling bureaucracy abroad.",
        threshold: 35,
      },
      {
        id: "global-nomad",
        title: "Global Nomad",
        emoji: "🌐",
        blurb: "At home anywhere — the language opens every door.",
        threshold: 55,
      },
    ],
  },
  // ── Medical (additional) ─────────────────────────────────────────────────
  {
    moduleId: "family-medicine",
    accent: "oklch(0.78 0.10 160)", // soft teal-green
    badges: [
      {
        id: "med-student-fm",
        title: "Med Student",
        emoji: "📗",
        blurb: "Shadowing in clinic and learning how to introduce yourself to patients.",
        threshold: 0,
      },
      {
        id: "family-intern",
        title: "Intern",
        emoji: "🩺",
        blurb: "First continuity clinic panel — acute visits and chronic check-ins.",
        threshold: 5,
      },
      {
        id: "family-resident",
        title: "Resident",
        emoji: "👨‍⚕️",
        blurb: "Managing your own patient panel across all ages.",
        threshold: 12,
      },
      {
        id: "family-attending",
        title: "Attending Physician",
        emoji: "🏡",
        blurb: "Independent practice — whole-person, whole-family care.",
        threshold: 22,
      },
      {
        id: "physician-lead",
        title: "Lead Physician",
        emoji: "📊",
        blurb: "Quality improvement, panel management, and mentoring residents.",
        threshold: 35,
      },
      {
        id: "medical-director-fm",
        title: "Medical Director",
        emoji: "🏥",
        blurb: "Leading the practice — strategy, staffing, and community health.",
        threshold: 55,
      },
    ],
  },
  {
    moduleId: "ob-gyn",
    accent: "oklch(0.80 0.10 355)", // soft rose pink
    badges: [
      {
        id: "ob-student",
        title: "Med Student",
        emoji: "📘",
        blurb: "First deliveries and gynecologic exams with supervision.",
        threshold: 0,
      },
      {
        id: "ob-intern",
        title: "Intern",
        emoji: "🤰",
        blurb: "Night call for L&D, first-trimester visits, and pap smears.",
        threshold: 5,
      },
      {
        id: "ob-resident",
        title: "Resident",
        emoji: "💊",
        blurb: "Managing antepartum patients and assisting complex deliveries.",
        threshold: 12,
      },
      {
        id: "ob-fellow",
        title: "Fellow / Senior Resident",
        emoji: "🩺",
        blurb: "High-risk obstetrics, complex gynecologic surgery, and subspecialty skills.",
        threshold: 22,
      },
      {
        id: "ob-attending",
        title: "Attending OB/GYN",
        emoji: "🧑‍⚕️",
        blurb: "Independent practice — delivering babies and managing the full scope.",
        threshold: 35,
      },
      {
        id: "ob-director",
        title: "Department Director",
        emoji: "⭐",
        blurb: "Leading obstetrics and gynecology across the hospital or practice group.",
        threshold: 55,
      },
    ],
  },
  {
    moduleId: "pain-management",
    accent: "oklch(0.72 0.12 290)", // violet-purple
    badges: [
      {
        id: "pain-student",
        title: "Med Student",
        emoji: "📙",
        blurb: "First pain history and basic pharmacology of analgesics.",
        threshold: 0,
      },
      {
        id: "pain-intern",
        title: "Intern",
        emoji: "💊",
        blurb: "Acute pain consults and basic opioid stewardship.",
        threshold: 5,
      },
      {
        id: "pain-resident",
        title: "Resident",
        emoji: "🦴",
        blurb: "Interventional procedures and complex chronic pain management.",
        threshold: 12,
      },
      {
        id: "pain-fellow",
        title: "Fellow",
        emoji: "🔬",
        blurb: "Advanced interventional techniques and neuromodulation.",
        threshold: 22,
      },
      {
        id: "pain-attending",
        title: "Pain Management Physician",
        emoji: "🩺",
        blurb: "Independent practice — comprehensive multimodal pain care.",
        threshold: 35,
      },
      {
        id: "pain-director",
        title: "Program Director",
        emoji: "🎓",
        blurb: "Leading a pain fellowship and shaping the next generation of practitioners.",
        threshold: 55,
      },
    ],
  },
  {
    moduleId: "cardiology",
    accent: "oklch(0.65 0.15 15)", // heart red
    badges: [
      {
        id: "cardio-student",
        title: "Med Student",
        emoji: "📕",
        blurb: "Learning to read an EKG and auscultate heart sounds.",
        threshold: 0,
      },
      {
        id: "cardio-intern",
        title: "Intern",
        emoji: "💓",
        blurb: "Chest pain triage and basic cardiac workup.",
        threshold: 5,
      },
      {
        id: "cardio-resident",
        title: "Cardiology Resident",
        emoji: "❤️",
        blurb: "Cath lab rotations and managing acute coronary syndromes.",
        threshold: 12,
      },
      {
        id: "cardio-fellow",
        title: "Fellow",
        emoji: "🫀",
        blurb: "Interventional and electrophysiology subspecialty training.",
        threshold: 22,
      },
      {
        id: "cardiologist",
        title: "Cardiologist",
        emoji: "🧑‍⚕️",
        blurb: "Independent practice — echos, caths, and complex arrhythmia management.",
        threshold: 35,
      },
      {
        id: "cardio-director",
        title: "Division Chief",
        emoji: "🏥",
        blurb: "Running the cardiology division — research, teaching, and clinical programs.",
        threshold: 55,
      },
    ],
  },
  {
    moduleId: "general-surgery",
    accent: "oklch(0.68 0.11 240)", // slate blue
    badges: [
      {
        id: "surgery-student",
        title: "Med Student",
        emoji: "📗",
        blurb: "First OR scrub — learning surgical anatomy and sterile technique.",
        threshold: 0,
      },
      {
        id: "surgery-intern",
        title: "Surgical Intern",
        emoji: "🩹",
        blurb: "Post-op checks, wound rounds, and first assist in the OR.",
        threshold: 5,
      },
      {
        id: "surgery-resident",
        title: "Resident",
        emoji: "🔬",
        blurb: "Primary surgeon on lap choles, appendectomies, and hernias.",
        threshold: 12,
      },
      {
        id: "chief-resident-surg",
        title: "Chief Resident",
        emoji: "🫀",
        blurb: "Leading complex cases and teaching junior residents.",
        threshold: 22,
      },
      {
        id: "general-surgeon",
        title: "General Surgeon",
        emoji: "🧑‍⚕️",
        blurb: "Independent practice — elective and emergency general surgery.",
        threshold: 35,
      },
      {
        id: "surgery-chief",
        title: "Chief of Surgery",
        emoji: "⚕️",
        blurb: "Departmental leadership, quality metrics, and surgical education.",
        threshold: 55,
      },
    ],
  },
  // ── Sports ───────────────────────────────────────────────────────────────
  {
    moduleId: "soccer",
    accent: "oklch(0.74 0.14 140)", // pitch green
    badges: [
      {
        id: "park-player",
        title: "Park Player",
        emoji: "⚽",
        blurb: "Weekend kickabouts — learning the calls and celebrating with the crew.",
        threshold: 0,
      },
      {
        id: "rec-player",
        title: "Rec League Player",
        emoji: "🎽",
        blurb: "Club league games and basic tactical communication.",
        threshold: 5,
      },
      {
        id: "club-player",
        title: "Club Player",
        emoji: "🥅",
        blurb: "Competitive league — fluid on-field communication and set pieces.",
        threshold: 12,
      },
      {
        id: "captain",
        title: "Team Captain",
        emoji: "🏅",
        blurb: "Leading on and off the pitch — halftime talks and fan interactions.",
        threshold: 22,
      },
      {
        id: "amateur-coach",
        title: "Amateur Coach",
        emoji: "📋",
        blurb: "Coaching youth or adult teams across language barriers.",
        threshold: 35,
      },
      {
        id: "futbol-ambassador",
        title: "Fútbol Ambassador",
        emoji: "🌍",
        blurb: "Playing the beautiful game in any language, any country.",
        threshold: 55,
      },
    ],
  },
  {
    moduleId: "hockey",
    accent: "oklch(0.82 0.09 220)", // ice blue
    badges: [
      {
        id: "pond-hockey",
        title: "Pond Hockey",
        emoji: "⛸️",
        blurb: "Pickup game vocabulary — calling for passes and celebrating goals.",
        threshold: 0,
      },
      {
        id: "rec-hockey",
        title: "Rec League",
        emoji: "🏒",
        blurb: "Communicating on lines and understanding referee calls.",
        threshold: 5,
      },
      {
        id: "travel-hockey",
        title: "Travel Player",
        emoji: "🎽",
        blurb: "Bench talk, power play coordination, and post-game debrief.",
        threshold: 12,
      },
      {
        id: "junior-hockey",
        title: "Junior / Amateur",
        emoji: "🥅",
        blurb: "Competitive vocabulary — locker room culture and coach's system.",
        threshold: 22,
      },
      {
        id: "senior-hockey",
        title: "Senior / Semi-Pro",
        emoji: "🏅",
        blurb: "Film sessions, detailed system communication, multi-lingual teammates.",
        threshold: 35,
      },
      {
        id: "hockey-ambassador",
        title: "Hockey Lifer",
        emoji: "🏆",
        blurb: "Living the game across leagues, countries, and languages.",
        threshold: 55,
      },
    ],
  },
  {
    moduleId: "baseball",
    accent: "oklch(0.72 0.11 55)", // clay/dirt tan
    badges: [
      {
        id: "little-league",
        title: "Little League",
        emoji: "⚾",
        blurb: "First catch, first at-bat — the fundamentals in any language.",
        threshold: 0,
      },
      {
        id: "high-school-ball",
        title: "High School / Rec",
        emoji: "🧢",
        blurb: "Calling plays and reading signs on the diamond.",
        threshold: 5,
      },
      {
        id: "amateur-ball",
        title: "Amateur League",
        emoji: "🥅",
        blurb: "Dugout culture, pitch calling, and umpire conversations.",
        threshold: 12,
      },
      {
        id: "semi-pro",
        title: "Semi-Pro",
        emoji: "📋",
        blurb: "Complex game strategy and multi-lingual clubhouse communication.",
        threshold: 22,
      },
      {
        id: "pro-ball",
        title: "Professional",
        emoji: "🏟️",
        blurb: "The full vocabulary of America's pastime — in any language.",
        threshold: 35,
      },
      {
        id: "baseball-lifer",
        title: "Baseball Lifer",
        emoji: "🏆",
        blurb: "The game transcends language — you're proof of it.",
        threshold: 55,
      },
    ],
  },
  {
    moduleId: "tennis",
    accent: "oklch(0.88 0.14 100)", // tennis yellow
    badges: [
      {
        id: "club-beginner",
        title: "Club Beginner",
        emoji: "🎾",
        blurb: "Grips, scores, and court etiquette in the target language.",
        threshold: 0,
      },
      {
        id: "club-player-tennis",
        title: "Club Player",
        emoji: "🏸",
        blurb: "Rallying, keeping score, and chatting between sets.",
        threshold: 5,
      },
      {
        id: "competitive-club",
        title: "Competitive Club",
        emoji: "🥅",
        blurb: "Doubles coordination and match communication.",
        threshold: 12,
      },
      {
        id: "regional-player",
        title: "Regional Player",
        emoji: "🏅",
        blurb: "Tournament vocabulary, umpire interactions, and post-match analysis.",
        threshold: 22,
      },
      {
        id: "club-coach-tennis",
        title: "Club Coach",
        emoji: "📋",
        blurb: "Teaching lessons, running clinics, and communicating across skill levels.",
        threshold: 35,
      },
      {
        id: "tennis-ambassador",
        title: "Tennis Ambassador",
        emoji: "🏆",
        blurb: "Playing and coaching the game in any language, on any court.",
        threshold: 55,
      },
    ],
  },
  {
    moduleId: "bowling",
    accent: "oklch(0.85 0.06 30)", // lane white
    badges: [
      {
        id: "open-bowler",
        title: "Open Bowler",
        emoji: "🎳",
        blurb: "Saturday open bowling — shoes, ball selection, and scorekeeping.",
        threshold: 0,
      },
      {
        id: "league-bowler",
        title: "League Bowler",
        emoji: "🎽",
        blurb: "Thursday night league — handicaps, team chat, and spare shooting.",
        threshold: 5,
      },
      {
        id: "competitive-bowler",
        title: "Competitive Bowler",
        emoji: "🏅",
        blurb: "Tournaments, oil pattern discussions, and equipment talk.",
        threshold: 12,
      },
      {
        id: "sport-bowler",
        title: "Sport Bowler",
        emoji: "🏆",
        blurb: "High-average player in sport shot competitions.",
        threshold: 22,
      },
      {
        id: "coach-bowler",
        title: "Certified Coach",
        emoji: "📋",
        blurb: "Teaching lane play, release, and spare systems in any language.",
        threshold: 35,
      },
      {
        id: "bowling-pro",
        title: "Pro Bowler",
        emoji: "⭐",
        blurb: "Tour life — communicating with sponsors, coaches, and fellow pros worldwide.",
        threshold: 55,
      },
    ],
  },
  {
    moduleId: "american-football",
    accent: "oklch(0.62 0.10 55)", // pigskin brown
    badges: [
      {
        id: "flag-football",
        title: "Flag Football",
        emoji: "🏈",
        blurb: "Pickup game vocabulary — routes, routes, and more routes.",
        threshold: 0,
      },
      {
        id: "rec-football",
        title: "Rec League",
        emoji: "🎽",
        blurb: "Huddle calls and basic coverage communication.",
        threshold: 5,
      },
      {
        id: "competitive-amateur",
        title: "Competitive Amateur",
        emoji: "🏟️",
        blurb: "Play-calling, sideline communication, and blitz recognition.",
        threshold: 12,
      },
      {
        id: "semi-pro-football",
        title: "Semi-Pro",
        emoji: "🏅",
        blurb: "Film room vocabulary and complex offensive/defensive systems.",
        threshold: 22,
      },
      {
        id: "football-coach",
        title: "Coach",
        emoji: "📋",
        blurb: "Communicating the full playbook and motivating a multilingual roster.",
        threshold: 35,
      },
      {
        id: "football-ambassador",
        title: "Gridiron Ambassador",
        emoji: "🏆",
        blurb: "Bringing American football to the world — in any language.",
        threshold: 55,
      },
    ],
  },
  {
    moduleId: "lacrosse",
    accent: "oklch(0.75 0.15 45)", // lacrosse orange
    badges: [
      {
        id: "lacrosse-beginner",
        title: "Beginner",
        emoji: "🥍",
        blurb: "Stick basics and learning to call for the ball.",
        threshold: 0,
      },
      {
        id: "club-lacrosse",
        title: "Club Player",
        emoji: "🎽",
        blurb: "Field communication, ground balls, and man-up vocabulary.",
        threshold: 5,
      },
      {
        id: "competitive-lax",
        title: "Competitive Player",
        emoji: "🏅",
        blurb: "Set pieces, defensive slides, and fast-break execution.",
        threshold: 12,
      },
      {
        id: "travel-lax",
        title: "Travel / Elite Amateur",
        emoji: "🗺️",
        blurb: "High-level team system communication and tournament talk.",
        threshold: 22,
      },
      {
        id: "lax-captain",
        title: "Team Captain",
        emoji: "📋",
        blurb: "Leading the team, managing officials, and locker room culture.",
        threshold: 35,
      },
      {
        id: "lax-ambassador",
        title: "Lacrosse Ambassador",
        emoji: "🏆",
        blurb: "Growing the game internationally — one bilingual player at a time.",
        threshold: 55,
      },
    ],
  },
  {
    moduleId: "rugby",
    accent: "oklch(0.70 0.12 150)", // rugby green
    badges: [
      {
        id: "rugby-newcomer",
        title: "Newcomer",
        emoji: "🏉",
        blurb: "First scrum and first ruck — learning the laws and the culture.",
        threshold: 0,
      },
      {
        id: "social-rugby",
        title: "Social Player",
        emoji: "🍺",
        blurb: "Club rugby and the third-half tradition — on-pitch and off.",
        threshold: 5,
      },
      {
        id: "club-rugby",
        title: "Club Player",
        emoji: "🎽",
        blurb: "Lineout calls, back-line moves, and referee communication.",
        threshold: 12,
      },
      {
        id: "competitive-rugby",
        title: "Competitive Player",
        emoji: "🏅",
        blurb: "High-level game management and complex set-piece vocabulary.",
        threshold: 22,
      },
      {
        id: "rugby-captain",
        title: "Club Captain",
        emoji: "📋",
        blurb: "Leading the club on and off the pitch — multilingual dressing room.",
        threshold: 35,
      },
      {
        id: "rugby-ambassador",
        title: "Rugby Ambassador",
        emoji: "🏆",
        blurb: "Playing the game across hemispheres — the language goes everywhere you do.",
        threshold: 55,
      },
    ],
  },
  {
    moduleId: "sports-hobbies",
    accent: "oklch(0.76 0.13 30)", // sunset orange
    badges: [
      {
        id: "casual-hobbyist",
        title: "Casual Hobbyist",
        emoji: "🎯",
        blurb: "Weekend warrior — picking up basic vocabulary for your favorite activity.",
        threshold: 0,
      },
      {
        id: "regular-participant",
        title: "Regular Participant",
        emoji: "🎽",
        blurb: "Joining leagues, clubs, and outings with growing confidence.",
        threshold: 5,
      },
      {
        id: "active-member",
        title: "Active Member",
        emoji: "🏅",
        blurb: "Full participant — communicating with coaches, teammates, and opponents.",
        threshold: 12,
      },
      {
        id: "club-organizer",
        title: "Club Organizer",
        emoji: "📋",
        blurb: "Coordinating events, inviting newcomers, and keeping the group together.",
        threshold: 22,
      },
      {
        id: "coach-mentor",
        title: "Coach / Mentor",
        emoji: "🎓",
        blurb: "Teaching and growing the hobby for others in your community.",
        threshold: 35,
      },
      {
        id: "community-leader",
        title: "Community Leader",
        emoji: "🌟",
        blurb: "Building recreational culture across language barriers.",
        threshold: 55,
      },
    ],
  },

  {
    moduleId: "emergency-medicine",
    accent: "oklch(0.68 0.18 25)", // urgent red-orange
    badges: [
      {
        id: "observer",
        title: "Observer",
        emoji: "👀",
        blurb: "Shadowing in triage — learning the rhythms of the ER.",
        threshold: 0,
      },
      {
        id: "intern-er",
        title: "Intern",
        emoji: "🩺",
        blurb: "First solo assessments — vitals, history, and basic presentations.",
        threshold: 5,
      },
      {
        id: "resident-er",
        title: "Resident",
        emoji: "🚑",
        blurb: "Managing the fast track and presenting to attendings.",
        threshold: 12,
      },
      {
        id: "senior-resident",
        title: "Senior Resident",
        emoji: "🏥",
        blurb: "Running traumas and supervising junior residents.",
        threshold: 22,
      },
      {
        id: "attending-er",
        title: "Attending Physician",
        emoji: "🧑‍⚕️",
        blurb: "Independent practice — your call on every critical case.",
        threshold: 35,
      },
      {
        id: "medical-director",
        title: "Medical Director",
        emoji: "🚨",
        blurb: "Leading the department and setting the standard of care.",
        threshold: 55,
      },
    ],
  },
  {
    moduleId: "nursing",
    accent: "oklch(0.76 0.12 175)", // teal-green
    badges: [
      {
        id: "student-nurse",
        title: "Student Nurse",
        emoji: "📗",
        blurb: "Clinical rotations — learning bedside language and patient care basics.",
        threshold: 0,
      },
      {
        id: "new-grad",
        title: "New Graduate",
        emoji: "🩹",
        blurb: "First floor assignment — assessments, med passes, and charting.",
        threshold: 5,
      },
      {
        id: "staff-nurse",
        title: "Staff Nurse",
        emoji: "💊",
        blurb: "Confident with a full patient load and complex care plans.",
        threshold: 12,
      },
      {
        id: "charge-nurse",
        title: "Charge Nurse",
        emoji: "📋",
        blurb: "Running the floor — assignments, escalations, and family communications.",
        threshold: 22,
      },
      {
        id: "travel-nurse",
        title: "Travel Nurse",
        emoji: "✈️",
        blurb: "Adapting quickly to new units, new teams, and new patient populations.",
        threshold: 35,
      },
      {
        id: "nurse-educator",
        title: "Nurse Educator",
        emoji: "🎓",
        blurb: "Training the next generation — leading clinical education in two languages.",
        threshold: 55,
      },
    ],
  },
  {
    moduleId: "restaurant-hospitality",
    accent: "oklch(0.78 0.14 45)", // warm amber-gold
    badges: [
      {
        id: "busser",
        title: "Busser",
        emoji: "🫙",
        blurb: "Learning the floor, the rhythm, and basic service vocabulary.",
        threshold: 0,
      },
      {
        id: "server",
        title: "Server",
        emoji: "🍷",
        blurb: "Taking orders, describing specials, and handling guest requests.",
        threshold: 5,
      },
      {
        id: "lead-server",
        title: "Lead Server",
        emoji: "🍽️",
        blurb: "Training new staff and managing the floor during service.",
        threshold: 12,
      },
      {
        id: "front-manager",
        title: "Front of House Manager",
        emoji: "🏨",
        blurb: "Overseeing service, resolving complaints, and briefing the team.",
        threshold: 22,
      },
      {
        id: "general-manager",
        title: "General Manager",
        emoji: "🗝️",
        blurb: "Running the full operation — staff, guests, and kitchen coordination.",
        threshold: 35,
      },
      {
        id: "executive-director",
        title: "Executive Director",
        emoji: "⭐",
        blurb: "Multi-property leadership and bilingual hospitality at the highest level.",
        threshold: 55,
      },
    ],
  },
  {
    moduleId: "construction-foreman",
    accent: "oklch(0.72 0.13 75)", // safety-vest yellow
    badges: [
      {
        id: "day-laborer",
        title: "Day Laborer",
        emoji: "🧤",
        blurb: "First days on site — tools, safety gear, and basic commands.",
        threshold: 0,
      },
      {
        id: "skilled-laborer",
        title: "Skilled Laborer",
        emoji: "🪛",
        blurb: "Reliable on a crew — understands assignments and communicates issues.",
        threshold: 5,
      },
      {
        id: "crew-lead",
        title: "Crew Lead",
        emoji: "📐",
        blurb: "Directing a small crew through daily tasks and safety checks.",
        threshold: 12,
      },
      {
        id: "foreman",
        title: "Foreman",
        emoji: "🏗️",
        blurb: "Running the jobsite — subs, schedules, and safety compliance.",
        threshold: 22,
      },
      {
        id: "project-manager",
        title: "Project Manager",
        emoji: "📋",
        blurb: "Coordinating across trades, owners, and inspectors.",
        threshold: 35,
      },
      {
        id: "general-contractor",
        title: "General Contractor",
        emoji: "🏢",
        blurb: "Leading every phase of construction from groundbreak to closeout.",
        threshold: 55,
      },
    ],
  },
  {
    moduleId: "legal-immigration",
    accent: "oklch(0.70 0.10 270)", // deep indigo
    badges: [
      {
        id: "intake-volunteer",
        title: "Intake Volunteer",
        emoji: "📝",
        blurb: "Learning basic intake questions and client communication.",
        threshold: 0,
      },
      {
        id: "paralegal",
        title: "Paralegal",
        emoji: "📂",
        blurb: "Preparing documents and explaining procedures to clients.",
        threshold: 5,
      },
      {
        id: "associate-attorney",
        title: "Associate Attorney",
        emoji: "⚖️",
        blurb: "Handling cases independently and representing clients at hearings.",
        threshold: 12,
      },
      {
        id: "staff-attorney",
        title: "Staff Attorney",
        emoji: "🏛️",
        blurb: "Managing a full caseload and mentoring junior staff.",
        threshold: 22,
      },
      {
        id: "senior-attorney",
        title: "Senior Attorney",
        emoji: "🎖️",
        blurb: "Complex cases, appeals, and policy advocacy in two languages.",
        threshold: 35,
      },
      {
        id: "managing-attorney",
        title: "Managing Attorney",
        emoji: "🌐",
        blurb: "Running the practice and setting the standard for bilingual advocacy.",
        threshold: 55,
      },
    ],
  },
  {
    moduleId: "k12-teacher",
    accent: "oklch(0.80 0.13 145)", // apple-green
    badges: [
      {
        id: "student-teacher",
        title: "Student Teacher",
        emoji: "📚",
        blurb: "Supervised classroom practice — basic instruction and parent greetings.",
        threshold: 0,
      },
      {
        id: "first-year",
        title: "First-Year Teacher",
        emoji: "🖊️",
        blurb: "Your own classroom — navigating curriculum, parents, and routines.",
        threshold: 5,
      },
      {
        id: "experienced-teacher",
        title: "Experienced Teacher",
        emoji: "🏫",
        blurb: "Confident with complex parent conversations and diverse learners.",
        threshold: 12,
      },
      {
        id: "mentor-teacher",
        title: "Mentor Teacher",
        emoji: "🤝",
        blurb: "Supporting new colleagues and leading professional development.",
        threshold: 22,
      },
      {
        id: "department-chair",
        title: "Department Chair",
        emoji: "📊",
        blurb: "Curriculum leadership and multilingual family engagement programs.",
        threshold: 35,
      },
      {
        id: "instructional-coach",
        title: "Instructional Coach",
        emoji: "🎓",
        blurb: "District-wide bilingual instruction expert and community liaison.",
        threshold: 55,
      },
    ],
  },
  {
    moduleId: "catholic-ministry",
    accent: "oklch(0.75 0.11 295)", // violet-purple
    badges: [
      {
        id: "parishioner",
        title: "Parishioner",
        emoji: "🕯️",
        blurb: "Learning the basics of parish language and community greeting.",
        threshold: 0,
      },
      {
        id: "eucharistic-minister",
        title: "Eucharistic Minister",
        emoji: "✝️",
        blurb: "Serving at Mass and assisting parishioners with confidence.",
        threshold: 5,
      },
      {
        id: "catechist",
        title: "Catechist",
        emoji: "📖",
        blurb: "Teaching faith formation in the target language.",
        threshold: 12,
      },
      {
        id: "rcia-coordinator",
        title: "RCIA Coordinator",
        emoji: "💧",
        blurb: "Guiding candidates through the Rite of Christian Initiation.",
        threshold: 22,
      },
      {
        id: "deacon",
        title: "Deacon",
        emoji: "🙏",
        blurb: "Pastoral ministry, sacramental prep, and bilingual outreach.",
        threshold: 35,
      },
      {
        id: "pastoral-director",
        title: "Pastoral Director",
        emoji: "🌟",
        blurb: "Leading the parish's multilingual ministries and community programs.",
        threshold: 55,
      },
    ],
  },
];

export function getLadder(moduleId: string | null | undefined): ModuleBadgeLadder | null {
  if (!moduleId) return null;
  return MODULE_BADGES.find((l) => l.moduleId === moduleId) ?? null;
}

export interface LadderProgress {
  ladder: ModuleBadgeLadder;
  current: ModuleBadge;
  next: ModuleBadge | null;
  unlockedIds: string[];
  cleared: number; // metric value
  toNext: number; // remaining clears to next badge (0 if maxed)
  pct: number; // 0..100 progress within current → next band
}

export function ladderProgress(
  moduleId: string | null | undefined,
  cleared: number,
): LadderProgress | null {
  const ladder = getLadder(moduleId);
  if (!ladder) return null;
  const sorted = [...ladder.badges].sort((a, b) => a.threshold - b.threshold);
  const unlocked = sorted.filter((b) => cleared >= b.threshold);
  const current = unlocked[unlocked.length - 1] ?? sorted[0];
  const nextIdx = sorted.indexOf(current) + 1;
  const next = sorted[nextIdx] ?? null;
  const unlockedIds = unlocked.map((b) => b.id);
  if (!next) {
    return { ladder, current, next: null, unlockedIds, cleared, toNext: 0, pct: 100 };
  }
  const span = Math.max(1, next.threshold - current.threshold);
  const into = Math.max(0, cleared - current.threshold);
  const pct = Math.min(100, (into / span) * 100);
  return {
    ladder,
    current,
    next,
    unlockedIds,
    cleared,
    toNext: Math.max(0, next.threshold - cleared),
    pct,
  };
}
