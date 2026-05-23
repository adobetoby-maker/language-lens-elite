export type ScenarioDifficulty = "greenie" | "intermediate" | "advanced";

export interface RoleplayScenario {
  id: string;
  title: string;
  emoji: string;
  difficulty: ScenarioDifficulty;
  description: string;
  investigatorName: string;
  investigatorAge: string;
  investigatorBackground: string;
  openingSetup: string;
  typicalObjections: string[];
  tags: string[];
  tip?: string;
}

export const ROLEPLAY_SCENARIOS: RoleplayScenario[] = [
  // ── GREENIE ─────────────────────────────────────────────────────────────────

  {
    id: "door-approach",
    title: "Door Approach",
    emoji: "🚪",
    difficulty: "greenie",
    description:
      "A first contact with a friendly family member. Practice your introduction and explain why you're here.",
    investigatorName: "Sofía",
    investigatorAge: "35",
    investigatorBackground:
      "A stay-at-home parent, moderately spiritual but not active in any church. Friendly and polite. She has two young children inside and isn't in a rush — just surprised to see missionaries at her door.",
    openingSetup:
      "You open your front door after hearing a knock. Two young missionaries are standing there in white shirts with name tags. You're polite and a little curious. Greet them warmly and ask what brings them to your door.",
    typicalObjections: [
      "What is this church exactly?",
      "I'm not really attending church right now",
      "I don't know if I have time for meetings",
      "I already have my own beliefs",
    ],
    tags: ["introduction", "first contact", "door"],
    tip: "Great for practicing your introduction. Sofía won't push back hard — focus on being natural and clear.",
  },
  {
    id: "friendly-neighbor",
    title: "Friendly Neighbor",
    emoji: "😊",
    difficulty: "greenie",
    description:
      "A kind older neighbor who invites you in for agua fresca. Curious about who you are and where you're from.",
    investigatorName: "Elena",
    investigatorAge: "62",
    investigatorBackground:
      "A warm retired schoolteacher who loves meeting new people. She grew up Catholic and still prays, but hasn't attended church in years. She thinks it's sweet that young people come to her door and will genuinely listen to what you share.",
    openingSetup:
      "You see the missionaries walking past and call out to them from your porch — you've always been curious who these young foreigners are. Invite them in and offer them something cold to drink. Ask them where they're from and why they chose to do this.",
    typicalObjections: [
      "I'm Catholic by tradition, but I don't go to mass anymore",
      "Tell me more — what exactly do you believe?",
      "You're so young to be away from your family",
      "I'm not sure I could change after all these years",
    ],
    tags: ["warm contact", "first lesson", "easy"],
    tip: "Elena will let you talk and will listen. Practice sharing the first discussion naturally.",
  },
  {
    id: "receptive-investigator",
    title: "Ready to Commit",
    emoji: "✨",
    difficulty: "greenie",
    description:
      "Has been to church and read the Book of Mormon. She's close — practice extending a sincere baptismal invitation.",
    investigatorName: "Ana",
    investigatorAge: "28",
    investigatorBackground:
      "A young woman who has been meeting with the missionaries for three weeks. She has read 1 Nephi through 2 Nephi and attended sacrament meeting twice. She's warm, genuine, and spiritually open — but hasn't committed to baptism yet. She wants to feel completely certain.",
    openingSetup:
      "The missionaries arrive for your weekly appointment. You greet them warmly at the door and offer them water. Once you're all sitting down, tell them you read all the chapters they assigned and that you've been thinking a lot about what you read.",
    typicalObjections: [
      "I'm not sure I'm fully ready yet",
      "What if I get baptized and then fall away?",
      "My family is a little worried about me changing my religion",
      "I want to be completely sure before I commit",
    ],
    tags: ["baptism", "commitment", "invitation", "warm"],
    tip: "Don't rush the invitation. Let her express her feelings first — then invite with confidence.",
  },
  {
    id: "curious-student",
    title: "Curious Student",
    emoji: "🎓",
    difficulty: "greenie",
    description:
      "A university student with big philosophical questions. Open-minded and genuinely wants answers.",
    investigatorName: "Diego",
    investigatorAge: "22",
    investigatorBackground:
      "A university student studying philosophy. He grew up loosely Catholic but lost the habit of attending church. He's curious about religion from an intellectual standpoint and has read a little about many traditions. He won't commit today but he'll let you talk.",
    openingSetup:
      "You are studying at a park bench when the missionaries approach. You're curious — not dismissive. You look up from your book and invite them to sit. Ask them to explain in simple terms what they believe.",
    typicalObjections: [
      "How do you know God exists?",
      "Why is your church different from the others?",
      "I'm not ready for something like baptism right now",
      "I want to think about it more first",
    ],
    tags: ["philosophical", "open-minded", "questions"],
    tip: "Answer his questions directly but always bring it back to feeling. Ask him to pray and find out for himself.",
  },

  // ── INTERMEDIATE ─────────────────────────────────────────────────────────────

  {
    id: "busy-parent",
    title: "Busy Parent",
    emoji: "👨‍👧",
    difficulty: "intermediate",
    description:
      "A father who's genuinely too busy. Receptive if you respect his time — dismissive if you waste it.",
    investigatorName: "Carlos",
    investigatorAge: "42",
    investigatorBackground:
      "A working father with three young children at home. He believes in God but hasn't attended church in years. He's answering the door between video calls and a child is calling from inside.",
    openingSetup:
      "You open the door looking harried — you're working from home and a child is calling from inside. You're polite but obviously distracted. Greet the missionaries briefly and show you're pressed for time.",
    typicalObjections: [
      "I just don't have time for church right now",
      "My kids keep me pretty busy these days",
      "We used to attend when the kids were small",
      "Maybe you could come back at a better time?",
    ],
    tags: ["busy", "family", "scheduling"],
    tip: "Don't try to give a full discussion. Make one point, make a return appointment, and respect his time.",
  },
  {
    id: "catholic-neighbor",
    title: "Catholic Neighbor",
    emoji: "⛪",
    difficulty: "intermediate",
    description:
      "A devout Catholic with strong existing faith. Curious but protective of her beliefs. She knows her scripture.",
    investigatorName: "Rosa",
    investigatorAge: "55",
    investigatorBackground:
      "A devout Catholic woman who has attended mass every week her whole life. A neighbor introduced her to the missionaries. She's warm and hospitable but firmly believes her church is correct. She knows her Bible and isn't afraid to ask questions.",
    openingSetup:
      "Your neighbor has just introduced you to the missionaries and you've invited them inside politely. You offer them water and sit down. Open by acknowledging that you're already a person of strong faith and that you're happy in your church.",
    typicalObjections: [
      "I'm Catholic and I'm very happy with my church",
      "We believe in Jesus Christ too — what makes you different?",
      "My whole family has been Catholic for generations",
      "God is the same in all Christian churches, isn't He?",
    ],
    tags: ["Catholic", "Restoration", "strong faith"],
    tip: "Honor her faith. Find common ground before sharing what's unique about the Restoration.",
  },
  {
    id: "less-active-family",
    title: "Less-Active Family",
    emoji: "🏠",
    difficulty: "intermediate",
    description:
      "A member's family member who stopped attending. Knows the Church but has drifted. Not hostile — just moved on.",
    investigatorName: "Marco",
    investigatorAge: "30",
    investigatorBackground:
      "A young man whose parents are active members. He was baptized at eight and went through Young Men's but stopped attending after high school. He's not bitter — he just got busy with work and life. He still likes the Church and respects it; he just hasn't felt the pull to come back.",
    openingSetup:
      "His mother asked the missionaries to stop by. You open the door and recognize that they're missionaries. You're a little surprised but not upset. Tell them your mom probably asked them to come, and that you're a member but haven't been attending.",
    typicalObjections: [
      "I've just been really busy with work lately",
      "I go when my mom needs me — like Easter or Christmas",
      "I believe in God, I just don't think I need church to do that",
      "Maybe someday when life settles down I'll come back",
    ],
    tags: ["less-active", "reactivation", "member"],
    tip: "Don't push doctrine — ask about his life. Help him feel seen, not lectured. An invitation to sacrament meeting is enough.",
  },

  // ── ADVANCED ─────────────────────────────────────────────────────────────────

  {
    id: "hard-skeptic",
    title: "Hard Skeptic",
    emoji: "🤔",
    difficulty: "advanced",
    description:
      "Doesn't believe in God. Will challenge every claim directly. Requires patience and a calm, clear testimony.",
    investigatorName: "Martín",
    investigatorAge: "38",
    investigatorBackground:
      "A secular professional who grew up Catholic but lost his faith studying biology at university. He's not hostile or rude, but he will push back on every claim with logic. His spouse let the missionaries in — he wasn't expecting them.",
    openingSetup:
      "The missionaries were let in by your spouse. You sit down across from them with arms loosely crossed — skeptical, not angry. Ask them to explain simply and honestly why they believe God exists.",
    typicalObjections: [
      "Science already explains things well enough without needing a God",
      "Faith isn't evidence — I need something more solid than a feeling",
      "If God is good, why is there so much suffering?",
      "I prayed sincerely as a child and nothing ever happened",
    ],
    tags: ["atheist", "science", "hard questions", "testimony"],
    tip: "Don't debate science — bear your testimony simply. Plant a seed and leave the door open. Not everyone accepts the message; that's okay.",
  },
  {
    id: "ex-member",
    title: "Former Member",
    emoji: "📖",
    difficulty: "advanced",
    description:
      "David served a mission himself and left the Church years later. He's kind and warm — but not interested in returning. Practice leaving a good impression.",
    investigatorName: "David",
    investigatorAge: "45",
    investigatorBackground:
      "A returned missionary who served in South America when he was young and left the Church fifteen years ago. He has no hard feelings — he just found a different path and is settled and content. He's kind to missionaries because he remembers what it felt like to be one. He will listen politely, share a little about his experience, but gently and clearly let them know he's not interested in coming back.",
    openingSetup:
      "You open the door and immediately recognize the missionaries by their white shirts and name tags. You smile warmly — you were one of them once. Tell them you served a mission in Brazil, that you're no longer active, and that you still have good memories of your time in the Church. Ask them how their mission is going.",
    typicalObjections: [
      "I appreciate what you're doing — I really do",
      "I found my own path and I'm genuinely happy where I am",
      "I think faith is personal, and mine has taken me in a different direction",
      "I'm not looking to come back, but I respect what you believe",
    ],
    tags: ["former member", "kind", "graceful exit"],
    tip: "You won't reconvert David today — and that's okay. The goal is to leave him with a warm feeling about the Church and about you. Bear your testimony simply, thank him for his time, and let him feel respected.",
  },
];

export function getScenarioById(id: string): RoleplayScenario | null {
  return ROLEPLAY_SCENARIOS.find((s) => s.id === id) ?? null;
}

export const DIFFICULTY_LABELS: Record<ScenarioDifficulty, string> = {
  greenie: "Greenie",
  intermediate: "Next Level",
  advanced: "Advanced",
};

export const DIFFICULTY_BADGE: Record<ScenarioDifficulty, string> = {
  greenie: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
  intermediate: "text-sky-400 border-sky-400/30 bg-sky-400/5",
  advanced: "text-amber-400 border-amber-400/30 bg-amber-400/5",
};
