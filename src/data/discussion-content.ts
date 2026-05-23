// Discussion content for the Missionary Discussions area.
// Lessons follow the structure of "Preach My Gospel" (2023) chapters 3-7.
// Each topic has key concepts the missionary should mention to "complete" it
// and unlock bonus points. Source: churchofjesuschrist.org (free resource).

export interface LessonTopic {
  id: string;
  title: string;
  // Mention any of these (case-insensitive, fuzzy) to mark concept "hit".
  keyConcepts: string[];
  // Sample question an investigator might ask about this topic.
  sampleQuestion: string;
}

export interface MissionaryLesson {
  id: string;
  number: number;
  title: string;
  emoji: string;
  focus: string;
  topics: LessonTopic[];
}

export const MISSIONARY_LESSONS: MissionaryLesson[] = [
  {
    id: "restoration",
    number: 1,
    title: "The Restoration",
    emoji: "📖",
    focus: "God speaks to prophets again. The Book of Mormon is evidence.",
    topics: [
      {
        id: "godhead",
        title: "God is our loving Heavenly Father",
        keyConcepts: ["Heavenly Father", "child of God", "love", "prayer"],
        sampleQuestion: "Who is God to you, and how do you talk to Him?",
      },
      {
        id: "apostasy",
        title: "Apostasy and the need for restoration",
        keyConcepts: ["apostasy", "authority", "priesthood", "lost"],
        sampleQuestion: "Why would God need to restore His Church?",
      },
      {
        id: "first-vision",
        title: "Joseph Smith's First Vision",
        keyConcepts: ["Joseph Smith", "First Vision", "grove", "Father and Son", "1820"],
        sampleQuestion: "What happened when Joseph Smith prayed in the grove?",
      },
      {
        id: "book-of-mormon",
        title: "The Book of Mormon — another testament",
        keyConcepts: ["Book of Mormon", "another testament", "Moroni", "translate", "ancient"],
        sampleQuestion: "How is the Book of Mormon different from the Bible?",
      },
      {
        id: "invitation-pray",
        title: "Invitation: read and pray about the Book of Mormon",
        keyConcepts: ["read", "pray", "ponder", "Moroni 10", "promise"],
        sampleQuestion: "How will I know if it's true?",
      },
    ],
  },
  {
    id: "plan-of-salvation",
    number: 2,
    title: "The Plan of Salvation",
    emoji: "✨",
    focus: "Where we came from, why we're here, where we're going.",
    topics: [
      {
        id: "premortal",
        title: "Premortal life",
        keyConcepts: ["premortal", "spirit", "Heavenly Father", "plan"],
        sampleQuestion: "Did we exist before this life?",
      },
      {
        id: "creation-fall",
        title: "Creation and the Fall",
        keyConcepts: ["creation", "Adam", "Eve", "Fall", "agency"],
        sampleQuestion: "Why is there opposition and suffering?",
      },
      {
        id: "atonement",
        title: "The Atonement of Jesus Christ",
        keyConcepts: ["Atonement", "Jesus Christ", "Savior", "repent", "grace"],
        sampleQuestion: "What did Jesus do for us in Gethsemane and on the cross?",
      },
      {
        id: "spirit-world",
        title: "Spirit world and resurrection",
        keyConcepts: ["spirit world", "resurrection", "paradise", "judgment"],
        sampleQuestion: "What happens right after we die?",
      },
      {
        id: "kingdoms",
        title: "Kingdoms of glory and eternal life",
        keyConcepts: ["celestial", "terrestrial", "telestial", "eternal life", "exaltation"],
        sampleQuestion: "Is heaven the same for everyone?",
      },
    ],
  },
  {
    id: "gospel-of-jc",
    number: 3,
    title: "The Gospel of Jesus Christ",
    emoji: "✝️",
    focus: "Faith, repentance, baptism, the Holy Ghost, endure to the end.",
    topics: [
      {
        id: "faith",
        title: "Faith in Jesus Christ",
        keyConcepts: ["faith", "Jesus Christ", "trust", "action"],
        sampleQuestion: "What does it mean to have faith in Christ?",
      },
      {
        id: "repentance",
        title: "Repentance",
        keyConcepts: ["repent", "forgive", "change", "confess", "godly sorrow"],
        sampleQuestion: "How does repentance actually work?",
      },
      {
        id: "baptism",
        title: "Baptism by immersion, by authority",
        keyConcepts: ["baptism", "immersion", "authority", "covenant", "remission"],
        sampleQuestion: "Why immersion, and why your authority?",
      },
      {
        id: "holy-ghost",
        title: "The gift of the Holy Ghost",
        keyConcepts: ["Holy Ghost", "confirmation", "comforter", "gift"],
        sampleQuestion: "What is the Holy Ghost and how is it given?",
      },
      {
        id: "endure",
        title: "Endure to the end",
        keyConcepts: ["endure", "covenant", "sacrament", "renew"],
        sampleQuestion: "What's expected after baptism?",
      },
    ],
  },
  {
    id: "commandments",
    number: 4,
    title: "The Commandments",
    emoji: "📜",
    focus: "Living the gospel daily — blessings of obedience.",
    topics: [
      {
        id: "prayer-scripture",
        title: "Prayer and scripture study",
        keyConcepts: ["prayer", "scripture", "daily", "ponder"],
        sampleQuestion: "How do I really learn to pray?",
      },
      {
        id: "sabbath",
        title: "Keep the Sabbath day holy",
        keyConcepts: ["Sabbath", "sacrament", "rest", "worship"],
        sampleQuestion: "Why is Sunday set apart?",
      },
      {
        id: "tithing",
        title: "Tithing and offerings",
        keyConcepts: ["tithing", "tenth", "fast offering", "blessing"],
        sampleQuestion: "Ten percent of what, and why?",
      },
      {
        id: "wow-chastity",
        title: "Word of Wisdom and law of chastity",
        keyConcepts: ["Word of Wisdom", "chastity", "tobacco", "alcohol", "purity"],
        sampleQuestion: "Why these standards specifically?",
      },
      {
        id: "honesty-service",
        title: "Honesty, integrity, and service",
        keyConcepts: ["honest", "integrity", "service", "love"],
        sampleQuestion: "How does the Church expect members to live?",
      },
    ],
  },
  {
    id: "laws-ordinances",
    number: 5,
    title: "Laws & Ordinances",
    emoji: "⛪",
    focus: "Temples, eternal families, missionary work.",
    topics: [
      {
        id: "temple",
        title: "Temples and covenants",
        keyConcepts: ["temple", "covenant", "ordinance", "endowment"],
        sampleQuestion: "What happens inside an LDS temple?",
      },
      {
        id: "eternal-family",
        title: "Eternal families",
        keyConcepts: ["sealing", "eternal family", "marriage", "forever"],
        sampleQuestion: "What does 'families are forever' actually mean?",
      },
      {
        id: "missionary-work",
        title: "Missionary and family history work",
        keyConcepts: ["missionary", "family history", "ancestors", "share"],
        sampleQuestion: "Why send missionaries everywhere?",
      },
    ],
  },
];

export type InvestigatorType = "golden" | "challenging" | "difficult";

export interface InvestigatorProfile {
  id: InvestigatorType;
  name: string;
  emoji: string;
  shortLabel: string;
  description: string;
  // Number of follow-up questions per topic before moving on
  questionsPerTopic: number;
  // Fraction of keyConcepts that must be mentioned to advance
  conceptThreshold: number;
  // Personality tone for the AI prompt
  tone: string;
  // Distance multiplier (higher = more points per topic)
  pointMultiplier: number;
}

export const INVESTIGATORS: InvestigatorProfile[] = [
  {
    id: "golden",
    name: "Maria — Golden Investigator",
    emoji: "🌟",
    shortLabel: "Golden",
    description: "Open, prepared by the Spirit. One sincere question per topic. Easy to teach.",
    questionsPerTopic: 1,
    conceptThreshold: 0.4,
    tone: "warm, eager, soft-spoken; thanks the missionaries often; accepts invitations readily.",
    pointMultiplier: 1,
  },
  {
    id: "challenging",
    name: "David — Thoughtful Investigator",
    emoji: "🤔",
    shortLabel: "Challenging",
    description:
      "Curious but careful. 2–3 thoughtful questions per topic. Needs solid gospel vocabulary to feel safe.",
    questionsPerTopic: 3,
    conceptThreshold: 0.6,
    tone: "polite but probing; asks for clarification; cites Bible verses; respects sincerity.",
    pointMultiplier: 2,
  },
  {
    id: "difficult",
    name: "Sister Wong — Difficult Investigator",
    emoji: "🧱",
    shortLabel: "Difficult",
    description:
      "Skeptical, well-read in other faiths. 3–4 sharp questions per topic. Requires precise doctrine and key gospel terms to advance.",
    questionsPerTopic: 4,
    conceptThreshold: 0.75,
    tone: "skeptical, well-read, polite but firm; pushes back on assumptions; demands scriptural backing.",
    pointMultiplier: 3,
  },
];

export function getInvestigator(id: InvestigatorType): InvestigatorProfile {
  return INVESTIGATORS.find((i) => i.id === id) ?? INVESTIGATORS[0];
}

export function getLesson(id: string): MissionaryLesson | null {
  return MISSIONARY_LESSONS.find((l) => l.id === id) ?? null;
}
