// Curated missionary quick-start content for the LDS Missionary module.
//
// All wording is paraphrased from materials freely published by The Church of
// Jesus Christ of Latter-day Saints — primarily Preach My Gospel (2023) and
// the General Handbook — both available at no cost on churchofjesuschrist.org
// and inside the Gospel Library app. Mission area data is summarized from the
// Church Newsroom's worldwide mission listings.

export interface CommitmentInvitation {
  id: string;
  category:
    | "Restoration"
    | "Plan of Salvation"
    | "Gospel of Jesus Christ"
    | "Commandments"
    | "Ordinances"
    | "Daily Practice";
  prompt: string; // What the missionary asks (English source)
  context: string; // When / why this is used
  reference: string; // Where it comes from in PMG
}

// "Will you…" style commitment invitations are at the heart of missionary
// teaching — see Preach My Gospel ch. 11 ("Help People Make and Keep
// Commitments") and ch. 3 ("The Invitation to Be Baptized and Confirmed").
export const COMMITMENT_INVITATIONS: CommitmentInvitation[] = [
  {
    id: "read-bom",
    category: "Restoration",
    prompt: "Will you read the Book of Mormon and pray to know that it is true?",
    context: "Inviting an investigator to study and ask God in faith (Moroni 10:3–5).",
    reference: "Preach My Gospel, ch. 5 — The Restoration",
  },
  {
    id: "pray-aloud",
    category: "Daily Practice",
    prompt: "Will you offer the closing prayer?",
    context: "Helping someone speak with Heavenly Father in their own words.",
    reference: "Preach My Gospel, ch. 4 — Recognizing the Spirit",
  },
  {
    id: "attend-church",
    category: "Commandments",
    prompt: "Will you come to church with us this Sunday?",
    context: "Sacrament meeting attendance is a baptismal commitment.",
    reference: "Preach My Gospel, ch. 6 — The Plan of Salvation",
  },
  {
    id: "follow-jesus",
    category: "Gospel of Jesus Christ",
    prompt:
      "Will you follow the example of Jesus Christ by being baptized by one holding the priesthood authority of God?",
    context: "The central baptismal invitation — extend it early and often.",
    reference: "Preach My Gospel, ch. 3 — The Invitation to Be Baptized",
  },
  {
    id: "baptism-date",
    category: "Ordinances",
    prompt: "Will you prepare to be baptized on [date]?",
    context: "Setting a specific baptismal date helps people prepare.",
    reference: "Preach My Gospel, ch. 3",
  },
  {
    id: "word-of-wisdom",
    category: "Commandments",
    prompt: "Will you live the Word of Wisdom?",
    context: "Health code: no tobacco, alcohol, coffee, tea, or harmful drugs.",
    reference: "Preach My Gospel, ch. 4 — Commandments",
  },
  {
    id: "law-chastity",
    category: "Commandments",
    prompt: "Will you live the law of chastity?",
    context: "Sexual purity before marriage; fidelity within marriage.",
    reference: "Preach My Gospel, ch. 4",
  },
  {
    id: "tithing",
    category: "Commandments",
    prompt: "After you are baptized, will you obey the law of tithing?",
    context: "One tenth of increase, paid willingly to the Lord.",
    reference: "Preach My Gospel, ch. 4",
  },
  {
    id: "next-appointment",
    category: "Daily Practice",
    prompt: "May we come back on [day] at [time]?",
    context: "Always set a return appointment before leaving.",
    reference: "Preach My Gospel, ch. 10 — Teaching Skills",
  },
  {
    id: "share-friends",
    category: "Daily Practice",
    prompt: "Who do you know who would benefit from this message?",
    context: "Invite members and investigators to share the gospel.",
    reference: "Preach My Gospel, ch. 9 — Finding People to Teach",
  },
  {
    id: "testify-jc",
    category: "Gospel of Jesus Christ",
    prompt:
      "I testify that Jesus Christ is the Son of God and our Savior. Will you ponder this and pray about what we have shared?",
    context: "Pure testimony invites the Spirit to confirm truth.",
    reference: "Preach My Gospel, ch. 8 — How Do I Use the Book of Mormon?",
  },
  {
    id: "fasting",
    category: "Commandments",
    prompt: "Will you fast with us on the first Sunday of next month?",
    context: "Fasting and a fast offering on Fast Sunday.",
    reference: "Preach My Gospel, ch. 4",
  },
];

// Vocabulary anchors — high-frequency words a missionary needs in any language.
export interface VocabSet {
  category: string;
  emoji: string;
  words: string[];
}

export const MISSIONARY_VOCAB: VocabSet[] = [
  {
    category: "The Restoration",
    emoji: "📖",
    words: [
      "prophet",
      "Restoration",
      "First Vision",
      "Joseph Smith",
      "priesthood",
      "Book of Mormon",
      "translate",
      "apostasy",
    ],
  },
  {
    category: "Plan of Salvation",
    emoji: "✨",
    words: [
      "Heavenly Father",
      "premortal life",
      "Atonement",
      "resurrection",
      "agency",
      "spirit",
      "kingdom",
      "eternal life",
    ],
  },
  {
    category: "Gospel of Jesus Christ",
    emoji: "🕊️",
    words: [
      "faith",
      "repentance",
      "baptism",
      "Holy Ghost",
      "endure",
      "Savior",
      "covenant",
      "ordinance",
    ],
  },
  {
    category: "Commandments",
    emoji: "📜",
    words: [
      "tithing",
      "Sabbath",
      "Word of Wisdom",
      "chastity",
      "fast",
      "commandment",
      "obey",
      "blessing",
    ],
  },
  {
    category: "Daily Companion Life",
    emoji: "🤝",
    words: [
      "companion",
      "investigator",
      "appointment",
      "tracting",
      "district",
      "zone",
      "transfer",
      "ward",
    ],
  },
];

// Mission areas — grouped to match how the Church organizes the world ecclesiastically.
// Source: Church Newsroom (worldwide mission listings) and the Area presidencies.
// Each area name maps to typical primary teaching languages so the AI can tailor.
export interface MissionArea {
  id: string;
  name: string;
  region: string;
  languages: string[];
  cultureNote: string;
}

export const MISSION_AREAS: MissionArea[] = [
  // North America
  {
    id: "utah",
    name: "Utah & Mountain West",
    region: "North America",
    languages: ["English", "Spanish"],
    cultureNote: "Heavy member presence; many part-member families and reactivation work.",
  },
  {
    id: "us-northeast",
    name: "U.S. Northeast",
    region: "North America",
    languages: ["English", "Spanish", "Portuguese"],
    cultureNote: "Diverse urban populations; many immigrant communities.",
  },
  {
    id: "us-southeast",
    name: "U.S. Southeast",
    region: "North America",
    languages: ["English", "Spanish"],
    cultureNote: "Strong Christian background; Bible-literate investigators.",
  },
  {
    id: "us-west-coast",
    name: "U.S. West Coast",
    region: "North America",
    languages: ["English", "Spanish", "Mandarin", "Vietnamese"],
    cultureNote: "Highly secular; many language-specific branches.",
  },
  {
    id: "canada",
    name: "Canada",
    region: "North America",
    languages: ["English", "French"],
    cultureNote: "Quebec missions teach in French; rest primarily English.",
  },
  // Latin America
  {
    id: "mexico",
    name: "Mexico",
    region: "Latin America",
    languages: ["Spanish"],
    cultureNote: "Strong Catholic culture; family-centered teaching resonates deeply.",
  },
  {
    id: "central-america",
    name: "Central America",
    region: "Latin America",
    languages: ["Spanish"],
    cultureNote: "Warm hospitality; door approaches usually welcomed.",
  },
  {
    id: "brazil",
    name: "Brazil",
    region: "Latin America",
    languages: ["Portuguese"],
    cultureNote: "One of the largest mission fields; vibrant member culture.",
  },
  {
    id: "south-america-south",
    name: "South America South",
    region: "Latin America",
    languages: ["Spanish"],
    cultureNote: "Argentina, Chile, Uruguay, Paraguay — strong member base.",
  },
  {
    id: "south-america-northwest",
    name: "South America Northwest",
    region: "Latin America",
    languages: ["Spanish"],
    cultureNote:
      "Peru, Ecuador, Colombia, Bolivia, Venezuela — many Indigenous languages alongside Spanish.",
  },
  // Europe
  {
    id: "europe-central",
    name: "Europe Central",
    region: "Europe",
    languages: ["German", "Czech", "Hungarian", "Polish"],
    cultureNote: "Highly secular; teaching often begins with belief in God.",
  },
  {
    id: "europe-north",
    name: "Europe North",
    region: "Europe",
    languages: ["English", "Dutch", "Danish", "Swedish", "Norwegian", "Finnish"],
    cultureNote: "Reserved cultures; relationships built slowly.",
  },
  {
    id: "europe-iberia",
    name: "Iberia & France",
    region: "Europe",
    languages: ["Spanish", "Portuguese", "French"],
    cultureNote: "Strong Catholic background; teaching the Restoration is central.",
  },
  {
    id: "italy-greece",
    name: "Italy & Mediterranean",
    region: "Europe",
    languages: ["Italian", "Greek"],
    cultureNote: "Family-centered, Catholic-rooted; doors open through warmth.",
  },
  // Africa
  {
    id: "africa-west",
    name: "Africa West",
    region: "Africa",
    languages: ["English", "French"],
    cultureNote: "Rapid Church growth; many investigators come prepared and eager.",
  },
  {
    id: "africa-south-east",
    name: "Africa South / East",
    region: "Africa",
    languages: ["English", "Portuguese", "French"],
    cultureNote: "Mixed Anglophone / Lusophone areas; community-oriented teaching.",
  },
  // Asia / Pacific
  {
    id: "philippines",
    name: "Philippines",
    region: "Asia / Pacific",
    languages: ["Tagalog", "Cebuano", "English"],
    cultureNote: "Warm, family-oriented; many local dialects in addition to Tagalog.",
  },
  {
    id: "asia-east",
    name: "Asia (Japan/Korea/Taiwan)",
    region: "Asia / Pacific",
    languages: ["Japanese", "Korean", "Mandarin"],
    cultureNote: "Politeness levels and honorifics matter; teaching is patient and relational.",
  },
  {
    id: "asia-southeast",
    name: "Southeast Asia",
    region: "Asia / Pacific",
    languages: ["Thai", "Khmer", "Vietnamese", "Indonesian"],
    cultureNote: "Buddhist majority in many areas; bridge to belief in a personal God.",
  },
  {
    id: "pacific",
    name: "Pacific Islands",
    region: "Asia / Pacific",
    languages: ["English", "Samoan", "Tongan", "Tahitian", "Fijian"],
    cultureNote: "Deep member roots; many multi-generational LDS families.",
  },
  {
    id: "australia-nz",
    name: "Australia & New Zealand",
    region: "Asia / Pacific",
    languages: ["English", "Maori"],
    cultureNote: "Mix of urban secular and Pacific Islander branches.",
  },
];

export function getMissionArea(id: string | null | undefined): MissionArea | null {
  if (!id) return null;
  return MISSION_AREAS.find((m) => m.id === id) ?? null;
}

export const FREE_RESOURCES = [
  {
    label: "Preach My Gospel (2023)",
    url: "https://www.churchofjesuschrist.org/study/manual/preach-my-gospel-2023",
    note: "Mission training manual — free in 60+ languages.",
  },
  {
    label: "Book of Mormon",
    url: "https://www.churchofjesuschrist.org/study/scriptures/bofm",
    note: "Free scripture downloads in over 100 languages.",
  },
  {
    label: "General Handbook",
    url: "https://www.churchofjesuschrist.org/study/manual/general-handbook",
    note: "Authoritative Church policy and doctrine reference.",
  },
  {
    label: "Gospel Library app",
    url: "https://www.churchofjesuschrist.org/study/get-started-with-the-gospel-library-app",
    note: "All scriptures, manuals, and General Conference talks offline and free.",
  },
] as const;
