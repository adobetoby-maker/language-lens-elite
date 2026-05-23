// Team sports and hobbies scenario content.
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

export interface ModuleContent {
  moduleId: string;
  areas: ModuleArea[];
  vocabSets: ModuleVocabSet[];
}

// ─────────────────────────────────────────────
// AMERICAN FOOTBALL
// ─────────────────────────────────────────────

const americanFootballAreas: ModuleArea[] = [
  {
    id: "huddle-play-call",
    name: "Huddle Play Call",
    emoji: "🏈",
    blurb:
      "Breaking the huddle — the QB calls the play, protections, and snap count under time pressure.",
    counterpart: "Offensive lineman or wide receiver in the huddle.",
    learnerRole: "Quarterback",
    toneNote: "Clipped, urgent, authoritative. Real huddle language is abbreviated and loud.",
    phrases: [
      {
        en: "Right 38 Power — on two, on two, ready break!",
        intent: "Call a run play and snap count",
      },
      {
        en: "X Post, Y Shallow Cross — protection is Slide Left.",
        intent: "Call a passing concept with protection",
      },
      { en: "Check to Blue 42!", intent: "Audible at the line" },
      { en: "Same play — let's execute it clean this time.", intent: "Repeat after a penalty" },
      { en: "Tight formation — everybody in, eyes on me.", intent: "Get the huddle's attention" },
      { en: "No-huddle — get to the line fast, look for the signal!", intent: "Hurry-up mode" },
      { en: "Motion — Jet left, jet left!", intent: "Pre-snap motion instruction" },
      { en: "Clock's running — let's go!", intent: "Urgency to break huddle" },
    ],
    vocab: [
      "snap count",
      "audible",
      "shotgun",
      "under center",
      "motion",
      "formation",
      "protection",
      "no-huddle",
      "check",
      "break",
    ],
    challenges: [
      "Call a goal-line play with a specific snap count for the entire huddle.",
      "Audible out of the original play when you see the defense shift.",
      "Keep the team calm and focused after a turnover, then call the next play.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Alright, listen up — Right 38 Power, protection Slide Right, on two. Ready?",
      },
      {
        speaker: "ai",
        en: "Ready! But coach — their linebacker is cheating into the A-gap. Should we still run it?",
      },
      {
        speaker: "learner",
        en: "Stay with the call. We'll seal that gap. Trust the blocking scheme. Ready break!",
      },
      {
        speaker: "ai",
        en: "Break! (at the line) — You see the safety rotating? Should we check to a quick out?",
      },
      {
        speaker: "learner",
        en: "Blue 42! Blue 42! — we're checking to the quick slant. Get your eyes right on the snap.",
      },
      {
        speaker: "ai",
        en: "Got it — I'll release inside. Set, hut!",
      },
    ],
  },
  {
    id: "sideline-communication",
    name: "Sideline Communication",
    emoji: "📣",
    blurb:
      "Player-to-coach and player-to-player exchanges on the sideline — adjustments, substitutions, encouragement.",
    counterpart: "Offensive coordinator or position coach on the sideline.",
    learnerRole: "Wide receiver coming off the field",
    toneNote: "Respectful but direct. Sideline talk is fast — coaches want answers, not excuses.",
    phrases: [
      {
        en: "They're playing two-deep the whole drive — I'm getting bracketed every snap.",
        intent: "Report coverage",
      },
      {
        en: "I can beat him on a back-shoulder fade, just give me the shot.",
        intent: "Request a specific route",
      },
      { en: "Understood — I'll adjust my stem going forward.", intent: "Accept coaching" },
      {
        en: "The corner is biting hard on the out route — I can run the comeback right behind him.",
        intent: "Identify a coverage exploit",
      },
      {
        en: "I need about two more plays to get my legs back — cramp.",
        intent: "Report a physical issue",
      },
      {
        en: "We need this first down — who else is healthy and ready?",
        intent: "Assess personnel options",
      },
      {
        en: "Heads up — their safety cheats on the motion every single time.",
        intent: "Share a scouting observation",
      },
    ],
    vocab: [
      "two-deep",
      "bracket coverage",
      "stem",
      "back-shoulder",
      "comeback route",
      "cramp",
      "personnel grouping",
      "substitution",
    ],
    challenges: [
      "Report to the coordinator exactly what the cornerback is doing in man coverage.",
      "Convince the coach to call a specific route that you think will be open.",
      "Respond professionally when the coach criticizes your route running on the last play.",
    ],
    sampleConversation: [
      {
        speaker: "ai",
        en: "What are you seeing out there? Why aren't you getting open on the crossing routes?",
      },
      {
        speaker: "learner",
        en: "Coach, they're playing Tampa 2 — the mike is dropping straight into the middle every time. I'm running right into him.",
      },
      {
        speaker: "ai",
        en: "Okay. So what do you want — what route gets you open against that?",
      },
      {
        speaker: "learner",
        en: "Give me a skinny post. If Mike drops inside, I'll have a window between him and the deep safety.",
      },
      {
        speaker: "ai",
        en: "I like it. We'll work it in on second down next series. Get your helmet back on.",
      },
    ],
  },
  {
    id: "film-room",
    name: "Film Room",
    emoji: "🎬",
    blurb:
      "Breaking down game tape with coaches and teammates — identifying tendencies, errors, and opportunities.",
    counterpart: "Defensive coordinator or linebackers coach running the film session.",
    learnerRole: "Starting linebacker reviewing tape",
    toneNote:
      "Analytical, thoughtful. Film room is calm but competitive — players who speak up earn respect.",
    phrases: [
      {
        en: "Can you pause it right there? Watch how their tight end sets his block — he telegraphs the pull.",
        intent: "Point out a key frame",
      },
      {
        en: "That's my assignment — I should have scraped over the top instead of going underneath.",
        intent: "Self-correct an error",
      },
      {
        en: "Their quarterback always stares down his first read for a full two seconds — we can get an early jump.",
        intent: "Identify a QB tendency",
      },
      {
        en: "On this formation — trips left — they run a bubble screen 70% of the time.",
        intent: "Share a formation tendency",
      },
      {
        en: "I want to see that blitz package again — I think I can time the A-gap perfectly.",
        intent: "Request a replay",
      },
      {
        en: "If we disguise a Cover 2 as Cover 0, they'll throw into a bracket all day.",
        intent: "Suggest a scheme adjustment",
      },
      {
        en: "My keys were wrong on that play — I was reading the wrong back.",
        intent: "Diagnose a recognition error",
      },
    ],
    vocab: [
      "film",
      "tendency",
      "formation",
      "scrape",
      "blitz",
      "coverage disguise",
      "pre-snap read",
      "assignment",
      "key",
    ],
    challenges: [
      "Identify three run-game tendencies from the opponent's film and present them to the group.",
      "Explain to the coach why you made the wrong read on a specific play.",
      "Propose a defensive adjustment based on what you see in the quarterback's footwork.",
    ],
    sampleConversation: [
      {
        speaker: "ai",
        en: "Alright, let's start with the third-quarter drive they went 80 yards on us. What do you see on the first play?",
      },
      {
        speaker: "learner",
        en: "Right there — I'm flowing to the wrong gap. I see the guard pull and I chase it, but the ball goes right behind me into the A-gap.",
      },
      {
        speaker: "ai",
        en: "Exactly. What's the fix?",
      },
      {
        speaker: "learner",
        en: "I have to hold my key one more beat and let the play develop before I commit. The guard is a false pull.",
      },
      {
        speaker: "ai",
        en: "Good. Now — look at their quarterback's eyes on this third-down clip. What do you notice?",
      },
      {
        speaker: "learner",
        en: "He looks off the safety first, then locks onto the slot receiver. Same thing on every third and medium.",
      },
    ],
  },
  {
    id: "tailgate-fan-talk",
    name: "Tailgate Fan Talk",
    emoji: "🍖",
    blurb: "Casual pre-game fan conversation — predictions, team history, friendly trash talk.",
    counterpart: "Friendly rival fan or a new acquaintance at the tailgate.",
    learnerRole: "Home team fan at the tailgate",
    toneNote: "Relaxed, fun, opinionated. Light trash talk is fine — keep it playful, not hostile.",
    phrases: [
      {
        en: "We've been season ticket holders for fifteen years — this is finally our year.",
        intent: "Express fan pride and optimism",
      },
      {
        en: "Their defense is soft against the run — our backs are going to eat today.",
        intent: "Make a pre-game prediction",
      },
      {
        en: "You drove all the way from Ohio for this? Respect — I'll pour you a drink.",
        intent: "Welcome a visiting fan",
      },
      {
        en: "That call in the fourth quarter last week was robbery, plain and simple.",
        intent: "Complain about officiating",
      },
      {
        en: "Who are you starting in fantasy — their tight end has a great matchup.",
        intent: "Fantasy football cross-talk",
      },
      {
        en: "I still can't believe we let that game slip in overtime.",
        intent: "Lament a recent loss",
      },
      {
        en: "Our offensive line is the most underrated unit in the whole league.",
        intent: "Defend a position group",
      },
    ],
    vocab: [
      "tailgate",
      "season tickets",
      "fantasy football",
      "overtime",
      "matchup",
      "defensive end",
      "playmaker",
      "rivalry",
    ],
    challenges: [
      "Strike up a conversation with a fan from the opposing team and debate the key matchup.",
      "Explain to someone who has never watched football why today's game matters.",
      "Make a bold prediction about the final score and back it up with a reason.",
    ],
    sampleConversation: [
      {
        speaker: "ai",
        en: "Nice setup — is that a whole brisket? You guys do this every home game?",
      },
      {
        speaker: "learner",
        en: "Every single one for twelve years. Pull up a chair — what brings you to our stadium? I see you're repping the away team.",
      },
      {
        speaker: "ai",
        en: "Ha — guilty. We drove six hours. Our quarterback has been lights-out this season. I think we cover the spread easy.",
      },
      {
        speaker: "learner",
        en: "Your quarterback hasn't faced a pass rush like ours all year. He's going to be uncomfortable from the first snap.",
      },
      {
        speaker: "ai",
        en: "Bold words. Want to make it interesting? Loser buys the first round after the game.",
      },
    ],
  },
  {
    id: "coachs-halftime-speech",
    name: "Coach's Halftime Speech",
    emoji: "🗣️",
    blurb:
      "Delivering a motivated, tactical halftime address — mix of emotional appeal and X-and-O adjustments.",
    counterpart: "The full roster in the locker room at halftime.",
    learnerRole: "Head coach",
    toneNote:
      "Passionate but controlled. Great halftime speeches balance fire with clarity — emotion, then specifics.",
    phrases: [
      {
        en: "I'm not panicking — and you shouldn't be either. We've been here before.",
        intent: "Calm and anchor the team",
      },
      {
        en: "Fourteen points is nothing. We score on the first drive and this game changes completely.",
        intent: "Reframe the deficit",
      },
      {
        en: "Offensively — we're going to come out in 11 personnel and spread them out.",
        intent: "Announce a halftime adjustment",
      },
      {
        en: "Their defensive end is gassing — he'll be tired in the third. Attack him.",
        intent: "Identify a physical advantage",
      },
      {
        en: "You've worked too hard all week to play like it doesn't matter. Show me something.",
        intent: "Challenge the team's effort",
      },
      {
        en: "Protect the football. One turnover and we're done. Not one.",
        intent: "Stress ball security",
      },
      {
        en: "Second half starts right now — the moment you walk back out of that tunnel.",
        intent: "Closing rallying cry",
      },
    ],
    vocab: [
      "halftime",
      "adjustment",
      "momentum",
      "turnover",
      "personnel",
      "deficit",
      "intensity",
      "locker room",
    ],
    challenges: [
      "Deliver a halftime speech down by 14 points to a team that played flat in the first half.",
      "Address one player directly who made a critical mistake but needs to stay confident.",
      "Announce two specific tactical adjustments and explain why they will work.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Eyes on me. I know we're down — I know that half wasn't what we prepared for. But I've seen everything I need to see to know we can win this game.",
      },
      {
        speaker: "ai",
        en: "Coach — their defensive tackles are eating us alive. What's the adjustment up front?",
      },
      {
        speaker: "learner",
        en: "We're going to go to quick game — three-step drops. We won't give them time to get into the backfield. And we're running the ball to the weak side where there's space.",
      },
      {
        speaker: "ai",
        en: "What about their corner on our number two receiver? He's been taking him completely out of routes.",
      },
      {
        speaker: "learner",
        en: "We're motioning him to the backfield to create a mismatch. Trust the game plan — now get your heads right. We have thirty minutes to take this game.",
      },
    ],
  },
  {
    id: "referee-interaction",
    name: "Referee Interaction",
    emoji: "🟡",
    blurb:
      "Respectful but firm communication with officials — asking for explanations, disputing calls, requesting time.",
    counterpart: "Head referee on the field.",
    learnerRole: "Head coach on the sideline",
    toneNote:
      "Controlled and professional. Arguing gets you flagged — ask questions, don't make accusations.",
    phrases: [
      { en: "Excuse me — can I get an explanation on that call?", intent: "Request clarification" },
      {
        en: "I'm not disputing the call — I just want to understand the ruling.",
        intent: "De-escalate while asking",
      },
      {
        en: "We'd like to challenge that play — we believe the receiver had both feet in bounds.",
        intent: "Initiate a challenge",
      },
      { en: "Can I get a timeout, please?", intent: "Request a timeout" },
      {
        en: "That was a late hit, ref — my player was already down.",
        intent: "Flag a missed call (firmly)",
      },
      { en: "How much time is on the clock right now?", intent: "Confirm game clock" },
      {
        en: "I understand — thank you for the clarification.",
        intent: "Accept a ruling gracefully",
      },
    ],
    vocab: [
      "challenge",
      "flag",
      "ruling",
      "timeout",
      "personal foul",
      "late hit",
      "illegal motion",
      "review",
    ],
    challenges: [
      "Challenge a spot on the ball and explain clearly why you believe the first down was gained.",
      "Dispute a pass interference non-call without getting a flag for unsportsmanlike conduct.",
      "Ask the referee to clarify an obscure rule after a confusing play stoppage.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Excuse me, Ref — can you explain that offensive holding call? I didn't see anything on my end.",
      },
      {
        speaker: "ai",
        en: "Your left tackle grabbed the defensive end's jersey and turned him away from the play. It's a clear hold.",
      },
      {
        speaker: "learner",
        en: "I respect the call — is that reviewable, or are we taking the 10 yards?",
      },
      {
        speaker: "ai",
        en: "Holding is not reviewable under current rules. The penalty stands — first and 20.",
      },
      {
        speaker: "learner",
        en: "Understood. Thank you. Can I get a timeout before the next snap?",
      },
    ],
  },
  {
    id: "post-game-locker-room",
    name: "Post-Game Locker Room",
    emoji: "🥇",
    blurb:
      "Win or loss — addressing the team after the final whistle, handling media, and talking with teammates.",
    counterpart: "Team in the locker room after the game, or a sideline reporter.",
    learnerRole: "Star player or team captain",
    toneNote:
      "In victory: grateful, team-first. In defeat: accountable, forward-looking. Always composed for media.",
    phrases: [
      {
        en: "We did it together — nobody in this room should leave without being proud of that effort.",
        intent: "Celebrate as a team",
      },
      {
        en: "I'll take the blame on that last drive — that's on me, not on this team.",
        intent: "Accept individual accountability",
      },
      {
        en: "Credit to them — they came ready and they deserved it tonight.",
        intent: "Acknowledge the opponent",
      },
      {
        en: "We'll be back. This group is too good to let this define us.",
        intent: "Respond to a loss with resolve",
      },
      {
        en: "Coach put us in the right position — we executed.",
        intent: "Credit the coaching staff",
      },
      {
        en: "I'm proud of the way we competed even when things went sideways.",
        intent: "Praise team resilience",
      },
      {
        en: "We're going to look at the film tomorrow and get better — that's what we do.",
        intent: "Commitment to improvement",
      },
    ],
    vocab: [
      "accountability",
      "resilience",
      "composure",
      "execution",
      "media",
      "podium",
      "credit",
      "film session",
    ],
    challenges: [
      "Address the team after a heartbreaking one-point loss — keep them motivated without dismissing the pain.",
      "Answer a reporter's question about a critical fumble you committed late in the game.",
      "Give an emotional post-game speech to the team after winning the championship.",
    ],
    sampleConversation: [
      {
        speaker: "ai",
        en: "Captain — how are you feeling after that comeback win? That was something special.",
      },
      {
        speaker: "learner",
        en: "Honestly — I never doubted this team. When we were down 17 in the fourth, I looked around that huddle and saw zero panic. That's everything.",
      },
      {
        speaker: "ai",
        en: "You personally had 3 touchdowns tonight. What was clicking for you?",
      },
      {
        speaker: "learner",
        en: "The offensive line gave me all day to throw. I just had to deliver the ball — they were the real story tonight.",
      },
      {
        speaker: "ai",
        en: "Next week you face the number one seed. Are you ready?",
      },
      {
        speaker: "learner",
        en: "We'll enjoy this for one night. Film goes on tomorrow morning. That's how we do it.",
      },
    ],
  },
];

const americanFootballVocabSets: ModuleVocabSet[] = [
  {
    category: "Offensive Positions",
    emoji: "🏈",
    words: [
      "quarterback",
      "running back",
      "wide receiver",
      "tight end",
      "offensive lineman",
      "fullback",
      "slot receiver",
    ],
  },
  {
    category: "Defensive Positions",
    emoji: "🛡️",
    words: [
      "linebacker",
      "cornerback",
      "safety",
      "defensive tackle",
      "defensive end",
      "nickelback",
    ],
  },
  {
    category: "Play Types",
    emoji: "📋",
    words: [
      "run play",
      "pass play",
      "screen",
      "draw",
      "play action",
      "blitz",
      "zone coverage",
      "man coverage",
    ],
  },
  {
    category: "Game Situations",
    emoji: "⏱️",
    words: [
      "red zone",
      "two-minute drill",
      "fourth down",
      "overtime",
      "kickoff",
      "punt",
      "field goal",
      "extra point",
    ],
  },
];

// ─────────────────────────────────────────────
// LACROSSE
// ─────────────────────────────────────────────

const lacrosseAreas: ModuleArea[] = [
  {
    id: "fast-break-calls",
    name: "Fast Break Calls",
    emoji: "💨",
    blurb:
      "Sprinting transition offense — calling the numbers advantage, positioning, and finishing.",
    counterpart: "Teammate streaking to the crease or cutting from the wing.",
    learnerRole: "Midfielder pushing the fast break",
    toneNote:
      "Short, loud, immediate. Fast break decisions happen in under two seconds — no full sentences.",
    phrases: [
      { en: "Four-on-three — go go go, don't stop!", intent: "Alert team to numbers advantage" },
      { en: "Ball side! I'm hitting you cutting to the crease!", intent: "Call for a feed" },
      { en: "Switch — I've got the goalie, take the shot!", intent: "Redirect the play" },
      { en: "Strong side is clogged — crash the backside pipe!", intent: "Redirect to open space" },
      {
        en: "Hold it — reset, reset, wait for the skip pass!",
        intent: "Slow down a rushed attack",
      },
      {
        en: "I'm trail — drop it back if they collapse!",
        intent: "Identify yourself as the trailer",
      },
      { en: "Shoot it! Clock's at three!", intent: "Urgent shot call" },
    ],
    vocab: ["fast break", "crease", "feed", "trailer", "backside", "skip pass", "collapse", "pipe"],
    challenges: [
      "Call a 4-on-3 fast break and direct three teammates to the correct positions.",
      "Redirect a teammate who is rushing to the wrong side of the crease.",
      "Decide whether to shoot or pass when the defense is collapsing on you.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Four-on-three — push! I'm carrying left, crash the crease early!",
      },
      { speaker: "ai", en: "On the crease! Ball — give it to me!" },
      { speaker: "learner", en: "Covered — skip right, skip right! Open man at the pipe!" },
      { speaker: "ai", en: "I see him — should I shoot or feed the cutter?" },
      { speaker: "learner", en: "Shoot it now — defense is scrambling, you have a step!" },
      { speaker: "ai", en: "Goal! Great break — you saw that skip opening perfectly." },
    ],
  },
  {
    id: "defensive-slide-communication",
    name: "Defensive Slide Communication",
    emoji: "🔁",
    blurb:
      "Coordinating defensive slides, rotations, and help assignments to stop drives to the cage.",
    counterpart: "Defensive teammate on the crease or adjacent to a driving attacker.",
    learnerRole: "Crease defender or adjacent slide defender",
    toneNote:
      "Loud and decisive. Defensive communication in lacrosse must be constant — silence loses games.",
    phrases: [
      {
        en: "I've got ball — who's my slide?",
        intent: "Identify yourself as on-ball defender and find help",
      },
      { en: "You're next slide — stay tight and be ready!", intent: "Assign the second slide" },
      { en: "Slide now! He's past me — go!", intent: "Emergency call for immediate help" },
      {
        en: "Stay home on your crease man — don't cheat!",
        intent: "Warn teammate not to slide prematurely",
      },
      {
        en: "Recovery — get to the open stick!",
        intent: "Call for transition back to shooters after slide",
      },
      {
        en: "Force him up, force him up — don't let him cut baseline!",
        intent: "Instruct angle of containment",
      },
      { en: "Communicate! I can't see behind me!", intent: "General demand for defensive talking" },
    ],
    vocab: [
      "slide",
      "rotation",
      "crease defender",
      "on-ball",
      "recovery",
      "force",
      "help side",
      "baseline",
    ],
    challenges: [
      "Organize a three-man defensive rotation when the ball carrier beats the on-ball defender.",
      "Warn your teammate not to over-commit on a slide when the crease man is dangerous.",
      "Call out a recovery scramble after your slide gets the ball out of the danger zone.",
    ],
    sampleConversation: [
      { speaker: "learner", en: "I've got ball — Marcus, you're my first slide! Communicate!" },
      {
        speaker: "ai",
        en: "I'm ready! He's driving left — force him up, don't let him go baseline!",
      },
      { speaker: "learner", en: "He spun me — slide now! He's two steps from the crease!" },
      { speaker: "ai", en: "Sliding! Recovery — Jordan, get to the open stick on the right side!" },
      {
        speaker: "learner",
        en: "Good slide — now push him wide and make him shoot under pressure.",
      },
    ],
  },
  {
    id: "face-off-talk",
    name: "Face-Off Talk",
    emoji: "⚙️",
    blurb:
      "FOGO communication before, during, and after the face-off — cadence, cheating, and wing assignments.",
    counterpart: "Teammate on the face-off wing or opposing face-off specialist.",
    learnerRole: "Face-off specialist (FOGO)",
    toneNote:
      "Sharp and focused before the whistle. After the clamp — pure instinct communication.",
    phrases: [
      {
        en: "Wings — be ready for a clamp-and-kick. I'm going right.",
        intent: "Pre-face-off wing instruction",
      },
      {
        en: "He's been cheating early every draw — I'm going to time it.",
        intent: "Share a tendencies observation",
      },
      { en: "Set!", intent: "Standard face-off ready call" },
      { en: "Clamp! Kick right — go!", intent: "In-play call after securing the face-off" },
      {
        en: "I lost it — ball's loose, crash the ground ball!",
        intent: "Scramble after a lost face-off",
      },
      {
        en: "Pin him out — push him to the sideline!",
        intent: "Instruct teammate to body out the opponent",
      },
      {
        en: "Good win — push it up and get into the attack!",
        intent: "Transition cue after winning the face-off",
      },
    ],
    vocab: ["FOGO", "face-off", "clamp", "rake", "wing", "ground ball", "possession", "cadence"],
    challenges: [
      "Walk your wing players through your face-off strategy before a crucial fourth-quarter draw.",
      "Adjust your technique after losing three straight face-offs to the same move.",
      "React and communicate after a messy face-off leaves the ball in the scramble zone.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Alright — I've lost the last two. He's doing a motorcycle move off the top. Wings, be ready for a fast ground ball on my right side.",
      },
      { speaker: "ai", en: "Got it — I'll cheat a step right before the whistle." },
      {
        speaker: "learner",
        en: "Don't cheat before the whistle — they'll call an early break. Stay disciplined, just anticipate.",
      },
      { speaker: "ai", en: "Understood. What's your counter for the motorcycle?" },
      {
        speaker: "learner",
        en: "I'm going to get lower and go under him. If I pin it, kick right immediately.",
      },
      { speaker: "ai", en: "Ready. Let's take this one." },
    ],
  },
  {
    id: "sideline-coaching",
    name: "Sideline Coaching",
    emoji: "📋",
    blurb:
      "Coach delivering real-time adjustments and encouragement during live play from the sideline.",
    counterpart: "Players subbing in and out of the game.",
    learnerRole: "Head coach or assistant coach",
    toneNote:
      "Commanding but instructive. Good sideline coaches give one key cue per player, not a lecture.",
    phrases: [
      {
        en: "Hold the ball — we're bleeding time, slow it down!",
        intent: "Instruct tempo control",
      },
      {
        en: "Settle! Get into your set offense — stop freelancing!",
        intent: "Stop disorganized play",
      },
      {
        en: "When you sub in — your one job is to shut down their dodger. Lock him up.",
        intent: "Mission-specific substitution instruction",
      },
      {
        en: "Great move — that's exactly what we worked on. Stay aggressive.",
        intent: "Positive reinforcement mid-game",
      },
      {
        en: "Talk on defense! I can't hear you from here and neither can your teammates!",
        intent: "Demand communication",
      },
      {
        en: "Ride hard — don't let them clear easily, make them earn it.",
        intent: "Instruct defensive ride",
      },
    ],
    vocab: [
      "tempo",
      "set offense",
      "ride",
      "clear",
      "substitution",
      "dodger",
      "lock up",
      "freelancing",
    ],
    challenges: [
      "Sub in a midfielder and give them one specific defensive assignment in five seconds.",
      "Calm down an offense that is panicking and turning the ball over in the final minutes.",
      "Praise a player publicly on the sideline for executing a coaching point.",
    ],
    sampleConversation: [
      { speaker: "ai", en: "Coach — I'm ready to go in. What do you need from me?" },
      {
        speaker: "learner",
        en: "Their number 12 is killing us off the dodge. You have one job — take him, stay between him and the crease.",
      },
      { speaker: "ai", en: "On 12 the whole time?" },
      {
        speaker: "learner",
        en: "All day. Don't help off him. Let someone else slide. Your job is just 12.",
      },
      { speaker: "ai", en: "Got it. I'm ready." },
    ],
  },
  {
    id: "referee-dispute",
    name: "Referee Dispute",
    emoji: "🟨",
    blurb: "Contesting calls professionally — technical fouls, crease violations, illegal checks.",
    counterpart: "Official on the field.",
    learnerRole: "Team captain or head coach",
    toneNote:
      "Controlled and specific. Lacrosse officials respond to precise rule references, not general complaining.",
    phrases: [
      {
        en: "Can I get a clarification on that call — was that a body check or a cross-check?",
        intent: "Ask for specific ruling",
      },
      {
        en: "He was outside the crease when he caught the ball — the foot was on the line.",
        intent: "Dispute a crease violation call",
      },
      {
        en: "That was a legal check — his hands were inside the elbows the whole time.",
        intent: "Argue an illegal check ruling",
      },
      { en: "What's the time remaining on the shot clock?", intent: "Verify shot clock" },
      {
        en: "I'm not arguing — I just want to know the rule so my players understand it.",
        intent: "Diplomatic dispute",
      },
      {
        en: "Can you watch for the push from behind in the crease? It's happened twice.",
        intent: "Alert official to a pattern",
      },
    ],
    vocab: [
      "crease violation",
      "cross-check",
      "body check",
      "shot clock",
      "technical foul",
      "slash",
      "holding",
      "warding",
    ],
    challenges: [
      "Dispute a crease violation call by explaining specifically where the player's feet were.",
      "Ask an official to monitor a repeated foul that has not been called without getting a technical.",
      "Explain to a player why you are not going to dispute a call, even if you think it was wrong.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Excuse me — can I get a clarification on that crease call? I believe his trailing foot was outside the line when he received the pass.",
      },
      {
        speaker: "ai",
        en: "His foot broke the plane of the crease on the catch — that's a violation by rule.",
      },
      {
        speaker: "learner",
        en: "I understand. I just want to make sure my players know what you're watching for so we can avoid it going forward.",
      },
      {
        speaker: "ai",
        en: "Fair enough. Tell them to keep both feet clear until the ball is settled outside.",
      },
      { speaker: "learner", en: "Appreciated. Thank you for the clarification." },
    ],
  },
  {
    id: "post-game-debrief",
    name: "Post-Game Debrief",
    emoji: "📊",
    blurb:
      "Coach-led post-game analysis — what worked, what didn't, and what to fix at the next practice.",
    counterpart: "Players gathered after the game.",
    learnerRole: "Head coach",
    toneNote:
      "Honest and specific. Good debrief is short — two or three things to build on, two or three to fix.",
    phrases: [
      {
        en: "I'll start with what I'm proud of — we won the ground ball battle 18 to 11.",
        intent: "Open with a positive",
      },
      {
        en: "We gave up three transition goals. That cannot happen against a top-five opponent.",
        intent: "Name a critical problem",
      },
      {
        en: "Our clears were sloppy — we practiced that Tuesday and it still fell apart today.",
        intent: "Connect a game mistake to practice",
      },
      {
        en: "Jackson — your defensive effort in the fourth quarter was exactly what this team needs. That's your standard now.",
        intent: "Name an individual for praise",
      },
      {
        en: "Thursday we're going to focus entirely on our ride and our clear. Bring your legs.",
        intent: "Preview next practice focus",
      },
      {
        en: "We won today, but just barely. A win is a win — but we're better than this.",
        intent: "Temper a win with high standards",
      },
    ],
    vocab: [
      "ground ball",
      "transition",
      "clear",
      "ride",
      "effort",
      "standard",
      "execution",
      "improvement",
    ],
    challenges: [
      "Deliver a post-game debrief after a close win where the team played below its standard.",
      "Call out a specific recurring mistake from the game without embarrassing a player.",
      "Set the agenda for the next practice in a way that motivates the team.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Good win today — but I need two minutes, because there are things we have to fix right now while they're fresh.",
      },
      { speaker: "ai", en: "We're listening, Coach." },
      {
        speaker: "learner",
        en: "Ground ball battle — we won it. Ride was aggressive. Those are the positives. Here's the problem: we gave up the same transition goal pattern three times. That's a focus issue, not a talent issue.",
      },
      {
        speaker: "ai",
        en: "The midfielders were flat-footed after we missed shots. Is that what you're seeing?",
      },
      {
        speaker: "learner",
        en: "Exactly. After a missed shot, everybody watches it. Thursday, we drill sprint-back after every missed shot attempt. No exceptions.",
      },
    ],
  },
  {
    id: "club-team-tryout",
    name: "Club Team Tryout",
    emoji: "🥍",
    blurb:
      "Navigating a club team tryout — introducing yourself, asking coaches questions, standing out.",
    counterpart: "Club coach running the tryout or a player being evaluated alongside you.",
    learnerRole: "Player at a club team tryout",
    toneNote:
      "Confident but coachable. Coaches at tryouts watch attitude as much as skill — be engaged, be vocal.",
    phrases: [
      {
        en: "Hi Coach — I'm Alex, I play attack and midfield. Thanks for having me out today.",
        intent: "Professional self-introduction",
      },
      {
        en: "I've been playing since I was eight — I played varsity all three years in high school.",
        intent: "State experience concisely",
      },
      {
        en: "Can I ask — what's the practice and travel schedule for this team?",
        intent: "Ask a logistical question",
      },
      {
        en: "What are you looking for in players at this level?",
        intent: "Show coachability by asking for expectations",
      },
      {
        en: "I prefer attack but I'm comfortable at midfield if that's where you need me.",
        intent: "Show versatility",
      },
      {
        en: "I'm a hard worker — I may not be the best player here today but I'll outcompete everyone.",
        intent: "Sell your effort and mentality",
      },
    ],
    vocab: [
      "tryout",
      "club team",
      "roster spot",
      "commitment",
      "travel schedule",
      "varsity",
      "versatility",
      "evaluation",
    ],
    challenges: [
      "Introduce yourself to the coach at the start of the tryout in a confident, concise way.",
      "Answer a coach who asks why they should pick you over a player with more experience.",
      "Ask two intelligent questions at the end of the tryout that show genuine commitment.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Coach — I'm Alex Rivera. I play attack, three years varsity. Really excited to be here today.",
      },
      {
        speaker: "ai",
        en: "Good to meet you, Alex. What do you think you bring to a club at this level?",
      },
      {
        speaker: "learner",
        en: "I'm a lefty dodger and I finish well around the crease. My weak spot is my right hand — I've been working on it all off-season.",
      },
      {
        speaker: "ai",
        en: "I appreciate the honesty. We like players who know their game. What questions do you have for us?",
      },
      {
        speaker: "learner",
        en: "What does the travel schedule look like, and how many players are you taking at attack?",
      },
      {
        speaker: "ai",
        en: "We travel to about eight tournaments — four out of state. We're taking three attack. Give us everything today.",
      },
    ],
  },
];

const lacrosseVocabSets: ModuleVocabSet[] = [
  {
    category: "Positions",
    emoji: "🥍",
    words: ["attack", "midfielder", "defender", "goalie", "FOGO", "long-stick midfielder"],
  },
  {
    category: "Stickwork",
    emoji: "🏒",
    words: [
      "cradle",
      "scoop",
      "clamp",
      "rake",
      "feed",
      "skip pass",
      "behind-the-back",
      "bounce pass",
    ],
  },
  {
    category: "Offensive Concepts",
    emoji: "⚔️",
    words: [
      "dodge",
      "split dodge",
      "roll dodge",
      "pick",
      "set offense",
      "ride",
      "fast break",
      "extra-man opportunity",
    ],
  },
  {
    category: "Defensive Concepts",
    emoji: "🛡️",
    words: ["slide", "rotation", "force", "clear", "ground ball", "ride", "crease defense", "zone"],
  },
];

// ─────────────────────────────────────────────
// RUGBY
// ─────────────────────────────────────────────

const rugbyAreas: ModuleArea[] = [
  {
    id: "scrum-engagement",
    name: "Scrum Engagement",
    emoji: "💪",
    blurb:
      "The props, hookers, and locks communicating the sequence — crouch, bind, set — and adjusting under pressure.",
    counterpart: "Tight-head prop or hooker during a scrum.",
    learnerRole: "Loose-head prop or scrum-half feeding the scrum",
    toneNote:
      "Physical and brief. Scrum talk is grunted commands — no speeches. Sequence and timing are everything.",
    phrases: [
      {
        en: "Crouch — bind — set. Stay low and drive through.",
        intent: "Call the engagement sequence",
      },
      { en: "Hit and hold — don't pop up, lock your hips.", intent: "Instruct body position" },
      { en: "Feed's coming left — be ready to strike.", intent: "Signal ball entry to the hooker" },
      {
        en: "They're angling — reset your bind and push square.",
        intent: "Correct a collapsing scrum",
      },
      { en: "Drive! Drive! Keep them going back!", intent: "Call for sustained forward push" },
      { en: "Channel one — number 8 pick and go!", intent: "Call the ball exit channel" },
      {
        en: "Hold it — scrum penalty, don't wheel.",
        intent: "Signal to hold position for a penalty advantage",
      },
    ],
    vocab: [
      "scrum",
      "loose-head prop",
      "tight-head prop",
      "hooker",
      "bind",
      "channel",
      "number 8",
      "wheel",
      "feed",
      "strike",
    ],
    challenges: [
      "Call the engagement sequence and correct a teammate who is coming in too high.",
      "Signal the ball channel to the number 8 while managing a dominant opposing pack.",
      "Respond to a referee warning about your scrum technique before it becomes a penalty.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Alright — crouch. Tight bind, lock your hips. We're going channel one on this.",
      },
      { speaker: "ai", en: "Their tight-head is a monster — we need to hit him low and together." },
      {
        speaker: "learner",
        en: "Don't pop up. Hit through his hips, not his shoulders. Bind — set — drive!",
      },
      { speaker: "ai", en: "They're pushing us off — I'm losing my angle!" },
      {
        speaker: "learner",
        en: "Reset! Square your shoulders and drive with your legs — you're using your back. Leg drive, leg drive!",
      },
    ],
  },
  {
    id: "lineout-calls",
    name: "Lineout Calls",
    emoji: "🔑",
    blurb:
      "The hooker and captain communicating coded lineout calls — jump, lift, and target positions.",
    counterpart: "Jumper at position 2 or 4 in the lineout.",
    learnerRole: "Hooker throwing in, or captain calling the lineout",
    toneNote:
      "Coded and fast. Lineout calls are deliberately confusing to the opponent — the team must know the real signal buried inside the call.",
    phrases: [
      { en: "Omega — Zulu — Green!", intent: "Deliver a coded lineout call (middle jumper)" },
      {
        en: "Color in the call means front — shape means middle — animal means back.",
        intent: "Explain the call system to a new player",
      },
      { en: "Jumper — I'm throwing to your outside shoulder.", intent: "Signal throw direction" },
      { en: "Pod two — peel, peel!", intent: "Call a driving maul off the lineout" },
      {
        en: "Quick throw — don't set, just go!",
        intent: "Call a quick lineout before defense sets",
      },
      {
        en: "They've cracked our code — we're switching to the number system.",
        intent: "Change the call system mid-game",
      },
      {
        en: "Lift early — I'll put it above you and let you come up to it.",
        intent: "Instruct the timing of the lift",
      },
    ],
    vocab: [
      "lineout",
      "hooker",
      "jumper",
      "lifter",
      "throw",
      "pod",
      "maul",
      "peel",
      "front",
      "middle",
      "back of the lineout",
    ],
    challenges: [
      "Deliver a lineout call and make sure everyone knows which position is jumping.",
      "Change the lineout code mid-game after the opposition decodes your signals.",
      "Walk a replacement player through the lineout call system between plays.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Listen up — Sierra, Oscar, Red. Remember: animal means back. Jumper is going back. Lifters — early drive, get him above their reach.",
      },
      {
        speaker: "ai",
        en: "Got it — back of the lineout. Do you want a peel or straight ball to 10?",
      },
      {
        speaker: "learner",
        en: "Straight to 10. Hit the channels quick. If we win clean, we're running the blindside.",
      },
      { speaker: "ai", en: "The ref just warned us about binding in the lineout. Are we clean?" },
      {
        speaker: "learner",
        en: "Inside arm under the thigh, outside arm on the hip — standard grip. We're legal, don't worry.",
      },
    ],
  },
  {
    id: "ruck-maul-instructions",
    name: "Ruck & Maul Instructions",
    emoji: "🔄",
    blurb: "Organizing the ruck and maul — gate, bind, body position, and timing of ball away.",
    counterpart: "Flanker or lock arriving at a ruck or maul.",
    learnerRole: "Scrum-half or openside flanker directing traffic at the breakdown",
    toneNote:
      "Fast and commanding. Breakdown communication decides the game — late calls are useless.",
    phrases: [
      {
        en: "Ruck! Get over the ball — stay on your feet, stay on your feet!",
        intent: "Secure the ruck",
      },
      {
        en: "Gate! You're coming in from the side — you'll give away a penalty!",
        intent: "Warn about an illegal entry",
      },
      {
        en: "Bind or you're useless — get a proper grip on his jersey!",
        intent: "Demand proper bind in a maul",
      },
      { en: "Ball away! Ball away — go wide!", intent: "Signal ball is out of the ruck" },
      {
        en: "Bodies over — we need one more man to win this ruck!",
        intent: "Call for support at the breakdown",
      },
      {
        en: "Slow the ball down — their 7 is coming, hold it in!",
        intent: "Warn of an incoming jackal threat",
      },
      {
        en: "Drive it! Pick and go — keep the maul moving!",
        intent: "Keep momentum in a driving maul",
      },
    ],
    vocab: [
      "ruck",
      "maul",
      "breakdown",
      "gate",
      "bind",
      "jackal",
      "cleanout",
      "scrum-half",
      "pick and go",
      "turnover",
    ],
    challenges: [
      "Organize a ruck over a tackled ball carrier with two teammates arriving late.",
      "Warn a player about an illegal entry into the ruck before the referee sees it.",
      "Direct a driving maul through three phases to the try line.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Ruck! Over the ball — stay on your feet. Their seven is coming to jackal — protect it!",
      },
      { speaker: "ai", en: "I'm coming in — do I clean him out or bind on?" },
      {
        speaker: "learner",
        en: "Clean him out first — go through him legally, chest up, drive him back off the ball.",
      },
      { speaker: "ai", en: "He's off the ball — ruck is secure." },
      {
        speaker: "learner",
        en: "Ball away! Go wide — hit the 12 channel before they reset their defense!",
      },
    ],
  },
  {
    id: "referee-talk",
    name: "Referee Talk",
    emoji: "🟡",
    blurb:
      "Communicating with the referee professionally — understanding decisions, requesting explanations, staying onside.",
    counterpart: "Match referee.",
    learnerRole: "Captain",
    toneNote:
      "Respectful and measured. Rugby referees give a lot of dialogue — captains who talk calmly get answers.",
    phrases: [
      {
        en: "Ref — can you help me understand that decision? Was it a technical offside or a positional offside?",
        intent: "Request a detailed explanation",
      },
      {
        en: "Understood — I'll get that message to my props.",
        intent: "Acknowledge a scrum warning",
      },
      {
        en: "Is there a reason you're not pinging the gate infringement on their side?",
        intent: "Query a non-call diplomatically",
      },
      { en: "Thank you — we'll adjust.", intent: "Accept a ruling and move on" },
      {
        en: "Can I speak to you at the next stoppage about the ruck laws specifically?",
        intent: "Request a structured conversation",
      },
      {
        en: "My player says there was a knock-on before the intercept — is that reviewable?",
        intent: "Query a TMO referral",
      },
    ],
    vocab: [
      "captain",
      "offside",
      "penalty",
      "TMO",
      "knock-on",
      "advantage",
      "warning",
      "obstruction",
    ],
    challenges: [
      "Ask the referee why your scrum received a penalty when you believe you were dominating legally.",
      "Relay a referee warning to your forwards clearly and quickly.",
      "Request a TMO review after a potentially forward pass led to a try.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Ref — quick one. That penalty at the ruck — was it the gate or the bind you were unhappy with?",
      },
      {
        speaker: "ai",
        en: "Your flanker came in from the side. He needs to come through the gate over the ball.",
      },
      {
        speaker: "learner",
        en: "Clear — I'll get that to him now. Do we have any warnings outstanding or is it a clean slate?",
      },
      {
        speaker: "ai",
        en: "Clean slate on that. But I've got my eye on your prop's binding at the scrum. One more issue and it's a penalty try risk.",
      },
      { speaker: "learner", en: "Understood. I'll fix it. Thank you for telling me directly." },
    ],
  },
  {
    id: "third-half-clubhouse",
    name: "Third-Half Clubhouse",
    emoji: "🍺",
    blurb:
      "The social tradition after a rugby match — hosting the opposition, songs, toasts, and rugby culture.",
    counterpart: "Opposing team's captain or players at the post-match function.",
    learnerRole: "Home team player or captain",
    toneNote:
      "Warm, inclusive, good-humored. The third half is sacred in rugby — hospitality is non-negotiable.",
    phrases: [
      {
        en: "Brilliant game — you guys made us earn everything today. Welcome to our clubhouse.",
        intent: "Host the opposition warmly",
      },
      {
        en: "We've got a bit of a tradition here — hope you'll join in.",
        intent: "Introduce a club custom",
      },
      {
        en: "Your number 8 was a menace all day — absolute class player.",
        intent: "Compliment an opposition player",
      },
      {
        en: "First round is on us — you traveled far to play us, we appreciate that.",
        intent: "Show appreciation for a touring team",
      },
      { en: "To the game, to rugby, and to both teams — cheers!", intent: "Propose a toast" },
      {
        en: "We'd love to return the fixture next season if you're open to it.",
        intent: "Propose a future match",
      },
    ],
    vocab: [
      "third half",
      "clubhouse",
      "fixture",
      "touring team",
      "hospitality",
      "toast",
      "club song",
      "social",
    ],
    challenges: [
      "Welcome the opposing team to your clubhouse and introduce your club's post-match traditions.",
      "Give a short, genuine toast that acknowledges the game and honors both teams.",
      "Compliment the opposition captain on a specific play or player from the match.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Mate — that was a hell of a game. Your defensive line speed in the second half was something else. Welcome to the clubhouse — glad you made the trip.",
      },
      {
        speaker: "ai",
        en: "Cheers. Your crowd was incredible — we felt it every time you scored. Great atmosphere.",
      },
      {
        speaker: "learner",
        en: "We love a good home crowd. We've got a tradition — both captains give a short toast. Are you up for it?",
      },
      { speaker: "ai", en: "I'd be honored. You go first." },
      {
        speaker: "learner",
        en: "To the game of rugby — and to a team that gave us everything we could handle today. Cheers!",
      },
      {
        speaker: "ai",
        en: "To the hosts — thank you for the welcome. This is what rugby's all about.",
      },
    ],
  },
  {
    id: "captains-prematch-talk",
    name: "Captain's Pre-Match Talk",
    emoji: "🏆",
    blurb:
      "The captain addressing the team in the changing room before a big match — composure, identity, and motivation.",
    counterpart: "Full squad in the changing room.",
    learnerRole: "Team captain",
    toneNote:
      "Personal and powerful. A great captain's talk is short, specific, and deeply felt — not generic.",
    phrases: [
      {
        en: "I don't need to tell you what today means — you've been carrying it all week.",
        intent: "Acknowledge the emotional weight without over-explaining",
      },
      {
        en: "We've put in the work. No team in this competition has trained harder than us.",
        intent: "Assert preparation and deservedness",
      },
      {
        en: "Leave everything on that pitch — I mean everything.",
        intent: "Demand full commitment",
      },
      {
        en: "When it gets hard — and it will get hard — look at the man beside you.",
        intent: "Invoke team unity at the difficult moment",
      },
      {
        en: "We play for this badge. We play for each other. That's all there is.",
        intent: "Identity statement",
      },
      { en: "Let's go out there and take what's ours.", intent: "Final rallying call" },
    ],
    vocab: [
      "changing room",
      "pre-match",
      "badge",
      "commitment",
      "unity",
      "identity",
      "intensity",
      "legacy",
    ],
    challenges: [
      "Deliver a pre-match speech before a championship final without using clichés.",
      "Address the team after a string of losses — rebuild belief without false promises.",
      "Single out one senior player for a specific acknowledgment and use it to motivate the group.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Everyone quiet for a second. Look around this room. We've been through an entire season together. Today — it comes down to eighty minutes.",
      },
      {
        speaker: "ai",
        en: "Captain — this is the biggest game most of us have ever played. How do we stay composed?",
      },
      {
        speaker: "learner",
        en: "You stay composed by trusting your preparation. You've done the work. When you feel nerves — that's just your body telling you it matters. Use it.",
      },
      { speaker: "ai", en: "What about if we go down early?" },
      {
        speaker: "learner",
        en: "We stay together. We've come back before. Just do your job, trust the man next to you, and the scoreboard takes care of itself.",
      },
      { speaker: "ai", en: "Let's go then." },
    ],
  },
  {
    id: "touring-team-welcome",
    name: "Touring Team Welcome",
    emoji: "✈️",
    blurb:
      "Welcoming a visiting team from abroad — cultural exchange, logistics, and rugby brotherhood.",
    counterpart: "Manager or captain of the visiting touring team.",
    learnerRole: "Home club host captain or club manager",
    toneNote:
      "Warm, proud, and culturally curious. International rugby tours are a privilege — make visitors feel at home.",
    phrases: [
      {
        en: "On behalf of the whole club — welcome. We've been looking forward to this tour all season.",
        intent: "Formal welcome",
      },
      {
        en: "The changing rooms are through that door — we've left you plenty of space.",
        intent: "Orient visitors to the facility",
      },
      {
        en: "We've arranged dinner tonight for both squads — it would be great to get to know your team.",
        intent: "Invite social mixing",
      },
      {
        en: "Is there anything your players need — dietary requirements, equipment, extra kit?",
        intent: "Practical hospitality",
      },
      {
        en: "We have a small ceremony before the match — it's our tradition to present a club jersey.",
        intent: "Explain a pre-match tradition",
      },
      {
        en: "We hope you take home a great memory of this place — and a win wouldn't hurt either!",
        intent: "Lighthearted farewell remark",
      },
    ],
    vocab: [
      "tour",
      "host club",
      "jersey",
      "ceremony",
      "fixture list",
      "itinerary",
      "hospitality",
      "exchange",
    ],
    challenges: [
      "Welcome a touring team from Japan and explain your club's pre-match ceremony.",
      "Manage a logistical hiccup — the changing room isn't ready — without making visitors feel unwelcome.",
      "Invite the touring captain to say a few words to the combined group before dinner.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Captain — welcome to our club. It's an honor to have you here. How was the travel?",
      },
      {
        speaker: "ai",
        en: "Long flight but we're ready. The boys are very excited. This is our first tour to this country.",
      },
      {
        speaker: "learner",
        en: "We want to make sure it's one you remember. Tonight we've got a dinner arranged for both squads — nothing formal, just food and conversation.",
      },
      {
        speaker: "ai",
        en: "That's very kind. Our players have been learning about the local culture — they'll have many questions.",
      },
      {
        speaker: "learner",
        en: "We love that. We have a tradition before the match — we present a club jersey to your captain. It goes both ways — I hope you'll bring something from your club too.",
      },
      {
        speaker: "ai",
        en: "We brought our club flag. We present it at every tour stop — it would be an honor to leave it here.",
      },
    ],
  },
];

const rugbyVocabSets: ModuleVocabSet[] = [
  {
    category: "Forward Positions",
    emoji: "💪",
    words: ["loose-head prop", "hooker", "tight-head prop", "lock", "flanker", "number 8"],
  },
  {
    category: "Back Positions",
    emoji: "🏃",
    words: ["scrum-half", "fly-half", "inside center", "outside center", "wing", "fullback"],
  },
  {
    category: "Set Piece",
    emoji: "⚙️",
    words: ["scrum", "lineout", "maul", "ruck", "restart", "kick-off", "drop goal", "penalty kick"],
  },
  {
    category: "Rugby Culture",
    emoji: "🏉",
    words: [
      "third half",
      "club song",
      "tour",
      "hospitality",
      "cap",
      "tryline",
      "jersey swap",
      "respect",
    ],
  },
];

// ─────────────────────────────────────────────
// SPORTS & HOBBIES
// ─────────────────────────────────────────────

const sportsHobbiesAreas: ModuleArea[] = [
  {
    id: "gym-conversation",
    name: "Gym Conversation",
    emoji: "🏋️",
    blurb: "Casual gym talk — asking to work in, getting advice, talking about training routines.",
    counterpart: "Gym regular or personal trainer.",
    learnerRole: "Gym member",
    toneNote:
      "Friendly and respectful. Gym etiquette is real — be aware of personal space and equipment use.",
    phrases: [
      {
        en: "Hey — are you using this bench? Can I work in between your sets?",
        intent: "Ask to share equipment",
      },
      {
        en: "How many sets do you have left on the squat rack?",
        intent: "Politely wait for equipment",
      },
      {
        en: "Do you mind giving me a spot on this last set? It's heavy.",
        intent: "Ask for a spotter",
      },
      {
        en: "I've been doing this program for six weeks — my bench has gone up 20 pounds.",
        intent: "Share training progress",
      },
      {
        en: "What does your push-pull-legs split look like?",
        intent: "Ask about training program",
      },
      {
        en: "I'm trying to add more volume — do you think that's a good idea at my stage?",
        intent: "Seek advice",
      },
      {
        en: "That's a solid deadlift — have you been lifting long?",
        intent: "Give a compliment and start a conversation",
      },
    ],
    vocab: [
      "rep",
      "set",
      "spot",
      "bench press",
      "squat rack",
      "deadlift",
      "split",
      "volume",
      "progressive overload",
    ],
    challenges: [
      "Ask someone to work in on the bench press without being awkward about it.",
      "Ask a more experienced lifter for advice on fixing your squat form.",
      "Politely tell someone they have been on a machine for a long time and ask how long they will be.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Hey — are you still on the squat rack? I don't want to rush you — just trying to plan my workout.",
      },
      {
        speaker: "ai",
        en: "Two more sets — probably eight minutes. You're welcome to warm up and jump in right after.",
      },
      {
        speaker: "learner",
        en: "Perfect. I appreciate it. Are you following a specific program or just doing your own thing?",
      },
      {
        speaker: "ai",
        en: "I've been running 5/3/1 for about four months. It's been great for strength. You?",
      },
      {
        speaker: "learner",
        en: "I've been doing PPL — trying to add more frequency. I feel like my legs are recovering faster now.",
      },
    ],
  },
  {
    id: "hiking-trip-planning",
    name: "Hiking Trip Planning",
    emoji: "🥾",
    blurb:
      "Planning a hiking trip with friends or a group — trail selection, gear, safety, and logistics.",
    counterpart: "Friend or hiking group member.",
    learnerRole: "Trip organizer or enthusiastic hiker",
    toneNote:
      "Enthusiastic and practical. Good trip planning balances adventure with safety — know your group's ability.",
    phrases: [
      {
        en: "I'm thinking we do the 12-mile loop with the waterfall — it's about 1,500 feet of gain.",
        intent: "Propose a specific trail",
      },
      {
        en: "What's your fitness level right now? I want to pick something that challenges everyone but doesn't destroy anyone.",
        intent: "Assess group ability diplomatically",
      },
      {
        en: "Bring at least two liters of water — the last section has no shade.",
        intent: "Safety briefing on hydration",
      },
      {
        en: "We should leave by 7 AM if we want to summit before the afternoon storms roll in.",
        intent: "Plan departure time around weather",
      },
      {
        en: "I'll share the map link and the parking coordinates tonight.",
        intent: "Distribute logistics information",
      },
      {
        en: "Does anyone have trekking poles? The descent is pretty steep and they really help.",
        intent: "Gear recommendation",
      },
      {
        en: "If someone can't finish, we'll split up — never leave anyone alone on the trail.",
        intent: "State safety policy",
      },
    ],
    vocab: [
      "trailhead",
      "elevation gain",
      "loop trail",
      "summit",
      "switchback",
      "trekking poles",
      "blister",
      "turnaround point",
    ],
    challenges: [
      "Convince a friend who is nervous about their fitness level to join a moderately challenging hike.",
      "Give a safety briefing to a group of first-time hikers before hitting the trail.",
      "Adjust the trail plan when the weather forecast changes the night before.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Alright — so here's what I'm thinking. There's a 10-mile trail with about 2,000 feet of climb. Waterfalls, great views at the top, doable in a day.",
      },
      {
        speaker: "ai",
        en: "That sounds amazing. But I haven't hiked in like two years — is that going to be too much for me?",
      },
      {
        speaker: "learner",
        en: "Honestly? It's challenging but not extreme. We go at a comfortable pace and take breaks. You'll be tired but you'll make it.",
      },
      { speaker: "ai", en: "What do I need to bring?" },
      {
        speaker: "learner",
        en: "Good boots, two liters of water minimum, snacks, a light rain jacket, and sunscreen. I'll bring the first aid kit.",
      },
      { speaker: "ai", en: "I'm in. What time are we leaving?" },
    ],
  },
  {
    id: "golf-round-talk",
    name: "Golf Round Talk",
    emoji: "⛳",
    blurb:
      "Conversation during a round of golf — shot talk, rules questions, course etiquette, and friendly banter.",
    counterpart: "Playing partner or caddie.",
    learnerRole: "Recreational golfer",
    toneNote:
      "Relaxed and good-natured. Golf is social — conversation is part of the game, but never during someone's swing.",
    phrases: [
      {
        en: "That's a lovely shot — you're on the front of the green with a good look at birdie.",
        intent: "Compliment a partner's shot",
      },
      {
        en: "I'm going to lay up here — the wind is too strong to go for it in two.",
        intent: "Explain a strategic decision",
      },
      {
        en: "Can you confirm — is the red stake a lateral hazard or out of bounds?",
        intent: "Ask a rules question",
      },
      {
        en: "I'll take a provisional — just in case that one went left into the trees.",
        intent: "Announce a provisional ball",
      },
      {
        en: "Nice putt. That break from the right was tricky — I misjudged it completely.",
        intent: "Compliment and comment on a putt",
      },
      {
        en: "Do you want to play a little Nassau? Make the back nine interesting.",
        intent: "Propose a friendly wager format",
      },
      {
        en: "That's good — pick it up. You've already got the hole.",
        intent: "Concede a short putt",
      },
    ],
    vocab: [
      "birdie",
      "bogey",
      "fairway",
      "rough",
      "lay up",
      "provisional",
      "lateral hazard",
      "Nassau",
      "green in regulation",
      "handicap",
    ],
    challenges: [
      "Explain the correct procedure for a ball that goes into a water hazard to a new golfer.",
      "Propose and explain the rules of a Nassau bet to your playing partners.",
      "Handle a slow group ahead diplomatically without causing conflict on the course.",
    ],
    sampleConversation: [
      {
        speaker: "ai",
        en: "That went straight left — I think it might be in the trees. What should I do?",
      },
      {
        speaker: "learner",
        en: "Hit a provisional before we walk up there. Saves time if it's lost — just announce it out loud.",
      },
      { speaker: "ai", en: "Good idea. Provisional!" },
      {
        speaker: "learner",
        en: "Nice. Now let's go find the first one. If it's playable, you pick up the provisional, no harm done.",
      },
      { speaker: "ai", en: "What if I can't find it after a few minutes?" },
      {
        speaker: "learner",
        en: "Three minutes is the limit under the rules. After that, it's a lost ball — play the provisional with a one-stroke penalty.",
      },
    ],
  },
  {
    id: "basketball-pickup-game",
    name: "Basketball Pickup Game",
    emoji: "🏀",
    blurb:
      "Pickup basketball communication — calling teams, calling fouls, trash talk, and game management.",
    counterpart: "Fellow pickup player at the court.",
    learnerRole: "Pickup basketball player",
    toneNote:
      "Direct and confident. Pickup culture rewards assertiveness but punishes whining — call your fouls cleanly.",
    phrases: [
      {
        en: "Call it before the shot — you can't call a foul after you miss.",
        intent: "Dispute a foul call timing",
      },
      {
        en: "Ball — I'm open on the wing. Skip it!",
        intent: "Call for the ball in a clear position",
      },
      { en: "Check ball — your ball, top of the key.", intent: "Start or restart play" },
      { en: "Make it, take it — next bucket wins.", intent: "Confirm the rules of the game" },
      { en: "That's a foul — you hit my arm on the release.", intent: "Call a shooting foul" },
      { en: "Good game. You hit some tough shots — rematch?", intent: "Post-game sportsmanship" },
      { en: "Losers off — next team is already waiting.", intent: "Standard pickup game protocol" },
    ],
    vocab: [
      "check ball",
      "make it take it",
      "shooting foul",
      "and-one",
      "full-court",
      "half-court",
      "top of the key",
      "wing",
      "screen and roll",
    ],
    challenges: [
      "Resolve a disputed foul call fairly and get the game moving again quickly.",
      "Organize teams for a new pickup game when eight people show up at once.",
      "Call a proper foul when you are fouled hard driving to the basket.",
    ],
    sampleConversation: [
      { speaker: "ai", en: "That's a foul — you hacked my arm." },
      { speaker: "learner", en: "I got ball — clean block. Your call though, it's your ball." },
      { speaker: "ai", en: "It felt like contact on my arm coming down." },
      {
        speaker: "learner",
        en: "Pickup rules — if you feel contact you can call it. No drama. Your ball at the top.",
      },
      {
        speaker: "ai",
        en: "Check. And just so you know — that screen-and-roll you keep running is giving us trouble.",
      },
      { speaker: "learner", en: "Ha — well, switch it and stop it then. Check ball." },
    ],
  },
  {
    id: "volleyball-club",
    name: "Volleyball Club",
    emoji: "🏐",
    blurb:
      "Recreational volleyball club communication — rotations, serve receive, setting, and encouragement.",
    counterpart: "Volleyball club teammate during a game or practice.",
    learnerRole: "Volleyball club player",
    toneNote:
      "Positive and supportive. Club volleyball culture is social — everyone is there to improve and have fun.",
    phrases: [
      { en: "Mine! I've got it!", intent: "Call for the ball to avoid collision" },
      { en: "Rotate — we're moving to the next position.", intent: "Signal a rotation" },
      { en: "Set me wide — I'm going line!", intent: "Call for a set in a specific position" },
      {
        en: "Good dig! Now set it up — we can attack this.",
        intent: "Encourage after a defensive touch",
      },
      {
        en: "Their setter is tipping on the second contact — watch for that.",
        intent: "Share a scouting observation mid-game",
      },
      {
        en: "Serve to zone five — their passer on the left is struggling tonight.",
        intent: "Call a serve direction",
      },
      {
        en: "Let it go — that's out! Don't touch it!",
        intent: "Signal a ball is going out of bounds",
      },
    ],
    vocab: [
      "serve receive",
      "dig",
      "set",
      "spike",
      "block",
      "rotation",
      "libero",
      "zone",
      "tip",
      "out of bounds",
    ],
    challenges: [
      "Organize your team's serve receive formation and assign positions before a big serve.",
      "Encourage a teammate who just made an error and missed a key dig.",
      "Read the opponent's setter and call out a tipping pattern to your blockers.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Zone up — serve is coming to the back row. Sarah, you take zone six, I'll take zone five.",
      },
      { speaker: "ai", en: "Got it. What are you seeing from their server?" },
      {
        speaker: "learner",
        en: "She's been going cross-court heavy. Cheat a step right and be ready.",
      },
      { speaker: "ai", en: "Mine! — got it. Setting you middle!" },
      {
        speaker: "learner",
        en: "Perfect pass — yes! Now get off the net, rotate and let's close this out!",
      },
    ],
  },
  {
    id: "recreational-league-signup",
    name: "Recreational League Signup",
    emoji: "📝",
    blurb:
      "Signing up for a recreational sports league — asking about formats, fees, skill levels, and schedules.",
    counterpart: "League coordinator or league organizer.",
    learnerRole: "Adult looking to join a recreational league",
    toneNote:
      "Friendly and curious. Rec leagues are social — ask about skill level fit and the vibe, not just the rules.",
    phrases: [
      {
        en: "Hi — I'm interested in joining your adult softball league. Can you walk me through how it works?",
        intent: "Initial inquiry",
      },
      {
        en: "What skill level is this league? I haven't played in a few years.",
        intent: "Assess appropriate skill fit",
      },
      {
        en: "Are teams formed by the league, or do I need to bring my own group?",
        intent: "Clarify team formation",
      },
      { en: "What's the registration fee, and what does it cover?", intent: "Ask about costs" },
      {
        en: "What night of the week are the games? I need to check my work schedule.",
        intent: "Confirm scheduling",
      },
      {
        en: "Is there a waitlist? I'd like to get on it even if the current season is full.",
        intent: "Express interest despite availability",
      },
      {
        en: "What happens if we don't have enough players one week — do we forfeit?",
        intent: "Ask about roster rules",
      },
    ],
    vocab: [
      "registration",
      "roster",
      "season",
      "division",
      "forfeit",
      "free agent",
      "playoff",
      "waiver",
    ],
    challenges: [
      "Sign yourself up for a recreational badminton league as a beginner without underselling your ability.",
      "Negotiate a roster spot as a free agent being placed on an existing team.",
      "Ask a coordinator whether the league is more competitive or social-focused.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Hi — I saw the flyer for your adult soccer league. I'm interested. Is there still room?",
      },
      {
        speaker: "ai",
        en: "We have two spots left in the Thursday evening division. What's your experience level?",
      },
      {
        speaker: "learner",
        en: "I played in high school and I've done a few pickup games since, but nothing organized in about five years.",
      },
      {
        speaker: "ai",
        en: "That's perfect for our intermediate division — it's competitive but very social. Games are 7 PM Thursdays.",
      },
      { speaker: "learner", en: "Great. Is it a full team or would I be placed as a free agent?" },
      {
        speaker: "ai",
        en: "We'd place you with a team that needs players. Registration is $75 for the ten-week season, and it includes a jersey.",
      },
    ],
  },
  {
    id: "post-activity-social",
    name: "Post-Activity Social",
    emoji: "🍕",
    blurb:
      "The conversation after the game or activity — winding down, catching up, and making plans.",
    counterpart: "Teammates, fellow club members, or activity friends.",
    learnerRole: "Activity participant at the post-game social",
    toneNote:
      "Relaxed and friendly. Post-activity socials are where real friendships form — be present and curious.",
    phrases: [
      {
        en: "Great game today — I feel like we're finally clicking as a team.",
        intent: "Reflect on team progress",
      },
      {
        en: "That last play was wild — I still can't believe we pulled it off.",
        intent: "Relive a memorable moment",
      },
      {
        en: "How long have you been playing? You've got a really natural feel for the game.",
        intent: "Give a genuine compliment and start a conversation",
      },
      { en: "Same time next week? I'm in for sure.", intent: "Commit to the next activity" },
      {
        en: "Are you coming to the tournament in April? We should field a full team.",
        intent: "Coordinate for a future event",
      },
      {
        en: "I'm starving — who wants to grab food? There's a great place two blocks away.",
        intent: "Organize post-activity food",
      },
    ],
    vocab: [
      "debrief",
      "camaraderie",
      "regular",
      "team dinner",
      "tournament",
      "commitment",
      "social",
      "offseason",
    ],
    challenges: [
      "Start a conversation with someone you just played with for the first time.",
      "Invite the group to a dinner spot and get consensus on where to go.",
      "Encourage a teammate who had a rough game to come back next week.",
    ],
    sampleConversation: [
      {
        speaker: "learner",
        en: "Hey — great game. I'm Alex, I just joined the league last week. You've clearly been playing here a while.",
      },
      {
        speaker: "ai",
        en: "Ha — yeah, three seasons now. You fit right in though — that play you made in the second half was clutch.",
      },
      {
        speaker: "learner",
        en: "Thanks — I wasn't sure it was going to come together but it worked out. Do you guys usually stick around after games?",
      },
      {
        speaker: "ai",
        en: "Most of us go grab food or drinks down the street. You should come — good group of people.",
      },
      {
        speaker: "learner",
        en: "I'm in. Give me five minutes to change and I'll walk over with you.",
      },
    ],
  },
];

const sportsHobbiesVocabSets: ModuleVocabSet[] = [
  {
    category: "Gym & Fitness",
    emoji: "💪",
    words: ["rep", "set", "PR", "spotter", "warm-up", "cool-down", "progressive overload", "DOMS"],
  },
  {
    category: "Outdoor Sports",
    emoji: "🌲",
    words: [
      "trailhead",
      "elevation",
      "summit",
      "switchback",
      "tee time",
      "fairway",
      "birdie",
      "handicap",
    ],
  },
  {
    category: "Court & Field Sports",
    emoji: "🏀",
    words: [
      "check ball",
      "pickup game",
      "serve receive",
      "dig",
      "rotation",
      "league",
      "free agent",
      "forfeit",
    ],
  },
  {
    category: "Social Sports Culture",
    emoji: "🤝",
    words: [
      "recreational",
      "club",
      "tournament",
      "season",
      "roster",
      "third half",
      "post-game",
      "social",
    ],
  },
];

// ─────────────────────────────────────────────
// ASSEMBLED MODULE CONTENT
// ─────────────────────────────────────────────

export const TEAM_SPORTS_CONTENT: ModuleContent[] = [
  {
    moduleId: "american-football",
    areas: americanFootballAreas,
    vocabSets: americanFootballVocabSets,
  },
  {
    moduleId: "lacrosse",
    areas: lacrosseAreas,
    vocabSets: lacrosseVocabSets,
  },
  {
    moduleId: "rugby",
    areas: rugbyAreas,
    vocabSets: rugbyVocabSets,
  },
  {
    moduleId: "sports-hobbies",
    areas: sportsHobbiesAreas,
    vocabSets: sportsHobbiesVocabSets,
  },
];

export function getTeamSportsContent(moduleId: string): ModuleContent | null {
  return TEAM_SPORTS_CONTENT.find((m) => m.moduleId === moduleId) ?? null;
}

export function getTeamSportsArea(moduleId: string, areaId: string): ModuleArea | null {
  const module = getTeamSportsContent(moduleId);
  if (!module) return null;
  return module.areas.find((a) => a.id === areaId) ?? null;
}
