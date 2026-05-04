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
  phrases: ModulePhrase[];
  vocab: string[];
  challenges: string[];
  sampleConversation: SampleTurn[];
}

export interface ModuleVocabSet {
  category: string;
  emoji: string;
  words: string[];
}

export interface SportsModuleContent {
  moduleId: string;
  areas: ModuleArea[];
  vocabSets: ModuleVocabSet[];
}

// ─────────────────────────────────────────────────────────────────────────────
// SOCCER
// ─────────────────────────────────────────────────────────────────────────────

const soccerAreas: ModuleArea[] = [
  {
    id: "soccer-on-field",
    name: "On-Field Play Calls",
    emoji: "⚽",
    blurb:
      "Fast, clipped shouts between teammates during live play. Short commands, no full sentences — you need to be heard over crowd noise.",
    counterpart: "Teammate on the pitch",
    learnerRole: "Central midfielder organizing the build-up",
    toneNote:
      "Urgent, loud, clipped. Real players bark single words or short phrases — 'Man on!', 'Turn!', 'Play it back!'",
    phrases: [
      { en: "Man on! Man on!", intent: "Warning a teammate that a defender is right behind them" },
      { en: "Turn! You've got time!", intent: "Telling a teammate the pressure has gone and they can spin" },
      { en: "Play it back — play it back!", intent: "Calling for the ball to be recycled instead of forced forward" },
      { en: "Switch it! Switch it now!", intent: "Demanding a diagonal cross-field pass to change the point of attack" },
      { en: "One-two! Give and go!", intent: "Calling for a quick wall pass combination" },
      { en: "Hold! Hold it up!", intent: "Telling a striker to shield the ball and wait for support" },
      { en: "Press him! Don't let him turn!", intent: "Yelling at a teammate to close down an opponent aggressively" },
      { en: "Square it — I'm free!", intent: "Calling for a lateral pass because the speaker has space" },
    ],
    vocab: [
      "man on",
      "press",
      "switch",
      "one-two / give-and-go",
      "hold it up",
      "drop deep",
      "overlap",
      "cutback",
      "first-time ball",
      "knock it long",
    ],
    challenges: [
      "Your striker has his back to goal with a defender tight on him. What do you shout?",
      "Your winger is driving into a crowded box. Call for the ball to be played wide on the other side.",
      "Your team is losing the ball high up. Organize the press in three shouts or fewer.",
    ],
    sampleConversation: [
      { speaker: "learner", en: "Switch it! Switch it — left side is open!" },
      { speaker: "ai", en: "I see it, I see it — laying it off now. Make the run!" },
      { speaker: "learner", en: "One-two! Wall it back to me, then go!" },
      { speaker: "ai", en: "Nice! Man on you though — turn quick, left foot!" },
      { speaker: "learner", en: "Got it — playing it back. Hold up top, Dani, hold!" },
      { speaker: "ai", en: "Holding! But box is packed — look for the cutback, yeah?" },
    ],
  },
  {
    id: "soccer-halftime",
    name: "Halftime Team Talk",
    emoji: "🗣️",
    blurb:
      "The dressing room at half time. Coaches mix tactical adjustments with emotional messages. Players give honest feedback — sometimes heated.",
    counterpart: "Head coach",
    learnerRole: "Team captain hearing the tactical reset",
    toneNote:
      "Intense but controlled. Coaches in real life use direct language — no hedging. Players push back professionally: 'Gaffer, their ten keeps dropping into our six — can we press higher?'",
    phrases: [
      { en: "We're giving them too much space in behind.", intent: "Pointing out a defensive shape problem" },
      { en: "Their full-backs are bombing on — we've gotta track those runs.", intent: "Warning about opponent's attacking wingbacks" },
      { en: "We're not pressing high enough. We drop off, they just play through us.", intent: "Criticizing the defensive press" },
      { en: "Second balls — we're losing every single one. Win your duels.", intent: "Demanding better effort on loose balls" },
      { en: "We get the next goal, the tie is ours. Keep the tempo up.", intent: "Motivating after a close first half" },
      { en: "Gaffer, their holding mid keeps stepping out — there's a gap in behind him.", intent: "Player flagging a tactical opportunity to the coach" },
      { en: "Stay compact. Don't get stretched. Fifteen meters between lines max.", intent: "Demanding tighter defensive shape" },
    ],
    vocab: [
      "gaffer",
      "shape",
      "track the run",
      "second ball",
      "high press",
      "compact",
      "lines",
      "half-space",
      "pocket of space",
      "switch off",
    ],
    challenges: [
      "The coach asks why you conceded from a set piece. Give an honest tactical answer.",
      "You've spotted the opponent's striker dropping off to create space behind your defensive line. Tell the coach.",
      "Your team is 1-0 down at half. Give a thirty-second motivational speech as captain.",
    ],
    sampleConversation: [
      { speaker: "ai", en: "Right, listen up. Their nine is killing us in behind on that left channel. Who's supposed to be covering that?" },
      { speaker: "learner", en: "That's on me, gaffer. I was tracking the eight and leaving the channel open." },
      { speaker: "ai", en: "Exactly. Second half — you sit tighter, let the winger track back and cover you. We can't keep giving them that run." },
      { speaker: "learner", en: "Understood. One thing though — their holding mid keeps stepping up high. There's a gap right behind him. Can we exploit that on the counter?" },
      { speaker: "ai", en: "Good spot. Tell Ramos to stay on the shoulder — soon as we win it, he goes. Don't wait." },
      { speaker: "learner", en: "Will do. We're creating chances up top — just need to stay tighter at the back and we win this." },
    ],
  },
  {
    id: "soccer-post-match",
    name: "Post-Match Debrief",
    emoji: "📊",
    blurb:
      "After the final whistle — mixed zone interviews, player-to-player chats, social media trash talk or big-up. Real analysis mixed with emotion.",
    counterpart: "Journalist or fellow player",
    learnerRole: "Starting midfielder being interviewed after a draw",
    toneNote:
      "Candid but measured with press. Unfiltered with teammates. Players say 'we deserved all three points' or 'the ref bottled the penalty call' — honest and direct.",
    phrases: [
      { en: "We deserved more than a draw tonight, honestly.", intent: "Expressing disappointment at dropping points" },
      { en: "Credit to them — they made it hard, but we should've converted our chances.", intent: "Respectful but firm post-match take" },
      { en: "The penalty call was blatant. Hand on the ball, clear as day.", intent: "Complaining about a refereeing decision" },
      { en: "We'll take the point on the road and move on.", intent: "Putting a positive spin on a disappointing result" },
      { en: "Massive three points — kept us in the mix for the top four.", intent: "Celebrating a critical win" },
      { en: "Our pressing was relentless tonight. You could see them panic on the ball.", intent: "Praising the team's work rate" },
      { en: "I should've buried that second-half chance. Won't let that happen again.", intent: "Taking personal accountability for a missed opportunity" },
    ],
    vocab: [
      "mixed zone",
      "clean sheet",
      "top four",
      "dropped points",
      "on the road",
      "match-winner",
      "clinical",
      "park the bus",
      "press high",
      "bottled it",
    ],
    challenges: [
      "A journalist asks why your team conceded a late equalizer. Give an honest answer without throwing anyone under the bus.",
      "You scored the winning goal. Describe it and give credit to the assist maker.",
      "Your team lost 3-0 away. Address the dressing room honestly as captain.",
    ],
    sampleConversation: [
      { speaker: "ai", en: "You played well tonight. Frustrated with the result?" },
      { speaker: "learner", en: "Genuinely, yeah. We created the better chances — should've been all three points. That penalty in the second half was nailed on." },
      { speaker: "ai", en: "The referee said the arm was in a natural position. Do you disagree?" },
      { speaker: "learner", en: "His arm was out here — it's not a natural position, is it? But look, that's football. We move on." },
      { speaker: "ai", en: "What's the mood in the dressing room?" },
      { speaker: "learner", en: "Frustrated but focused. We've got a massive home game in four days. We'll be ready." },
    ],
  },
  {
    id: "soccer-referee",
    name: "Referee Interaction",
    emoji: "🟥",
    blurb:
      "How players actually talk to refs — pushing back on calls, asking questions, managing a yellow card situation without getting sent off.",
    counterpart: "Match referee",
    learnerRole: "Player who's just been booked and is protesting a call",
    toneNote:
      "Frustrated but tactical. Pro players know how to argue without getting a second yellow — they ask questions rather than make accusations. 'What's the call for, ref?' vs 'That's a disgrace!'",
    phrases: [
      { en: "Ref, what's the call for? He caught my ankle.", intent: "Questioning a call without directly accusing the ref" },
      { en: "That's a foul, referee — he led with his elbow.", intent: "Pointing out what the player believes is an illegal challenge" },
      { en: "I got the ball, ref! I got the ball clean!", intent: "Defending a tackle that was called as a foul" },
      { en: "Can you check with your assistant? The flag was up.", intent: "Requesting the referee consult the assistant referee" },
      { en: "That's simulation, ref. He dived — plain and simple.", intent: "Accusing an opponent of diving" },
      { en: "Ref, keep an eye on number five — he's been tugging shirts all game.", intent: "Drawing the referee's attention to persistent fouling" },
    ],
    vocab: [
      "booking / yellow card",
      "sending off",
      "simulation / diving",
      "VAR check",
      "advantage",
      "offside",
      "obstruction",
      "dissent",
      "late tackle",
      "professional foul",
    ],
    challenges: [
      "You've been shown a yellow card for a tackle you think was clean. Protest calmly and professionally.",
      "An opponent goes down holding his face after what you think was a dive. Appeal to the referee.",
      "You're about to take a free kick and the wall isn't ten yards back. What do you say to the ref?",
    ],
    sampleConversation: [
      { speaker: "ai", en: "That's a booking — you were late on that challenge." },
      { speaker: "learner", en: "Ref, I got the ball first — ask your assistant, the contact came after." },
      { speaker: "ai", en: "The decision stands. One more word and you'll be off." },
      { speaker: "learner", en: "Understood. Just — keep an eye on their seven, he's been elbowing in every corner." },
      { speaker: "ai", en: "I'll manage the game. Now get back in position." },
      { speaker: "learner", en: "Fair enough. Just asking you to watch for it, that's all." },
    ],
  },
  {
    id: "soccer-fan",
    name: "Fan Conversation",
    emoji: "🏟️",
    blurb:
      "Standing in the terrace or sitting in the pub before and after the match. Pure passion, banter, and hot takes with other supporters.",
    counterpart: "Fellow supporter at a pub or in the stands",
    learnerRole: "Season ticket holder debating the latest result",
    toneNote:
      "Passionate, opinionated, full of banter. Fans say 'bottlers', 'robbery', 'absolute worldie', 'park the bus' — unfiltered matchday energy.",
    phrases: [
      { en: "Absolute robbery — that offside was tighter than tight.", intent: "Complaining about a dubious offside call" },
      { en: "He's been our best player all season — proper engine in midfield.", intent: "Praising a favorite player" },
      { en: "We park the bus every single away game. It's so boring to watch.", intent: "Criticizing defensive tactics" },
      { en: "Did you see that worldie from twenty-five yards? Top bins!", intent: "Getting excited about a spectacular long-range goal" },
      { en: "We need to strengthen in January or we're getting dragged into a relegation fight.", intent: "Discussing the need for new signings" },
      { en: "They bottled it again. Three-nil up and still found a way to draw.", intent: "Criticizing the team for collapsing late" },
      { en: "Derby day, mate — form goes out the window. Anything can happen.", intent: "Explaining why a local rivalry match is unpredictable" },
    ],
    vocab: [
      "worldie",
      "top bins",
      "bottled it",
      "park the bus",
      "relegation six-pointer",
      "derby",
      "banter",
      "dead rubber",
      "January window",
      "sacked in the morning",
    ],
    challenges: [
      "Your team just lost the local derby 2-0. A rival fan starts the banter. Respond with some of your own.",
      "Debate with a fellow fan about whether the manager should be sacked after a five-game winless run.",
      "Describe the best goal you ever saw in person to someone who wasn't there.",
    ],
    sampleConversation: [
      { speaker: "learner", en: "Mate, did you see that finish? Curled it right into the top corner — absolute worldie." },
      { speaker: "ai", en: "Yeah but it came from nothing. We were awful for sixty-five minutes before that. Hoofing it long and losing every header." },
      { speaker: "learner", en: "Fair point. But a win's a win — three points, clean sheet, top of the table." },
      { speaker: "ai", en: "Top of the table in October means nothing. Come back to me in May. Remember last year?" },
      { speaker: "learner", en: "Don't bring up last year — we bottled it from eight points clear. Genuinely traumatic." },
      { speaker: "ai", en: "Exactly! So enjoy the top spot, but don't get ahead of yourself. That's all I'm saying." },
    ],
  },
  {
    id: "soccer-training",
    name: "Training Ground",
    emoji: "🏃",
    blurb:
      "Pre-season sessions, set-piece rehearsals, small-sided games. Where tactics get drilled and banter gets real. Coaches and players talk shop.",
    counterpart: "Fitness coach or teammate at training",
    learnerRole: "Player going through a tactical drill session",
    toneNote:
      "Relaxed but professional. Coaches at training can be sarcastic — 'You'd never do that in a real game, would ya?' Players goof off a little between reps.",
    phrases: [
      { en: "Let's run that set piece again — the timing's still off.", intent: "Requesting a repeat of a corner kick routine" },
      { en: "Gaffer, are we playing out from the back or going direct against their high press?", intent: "Asking about build-up play tactics" },
      { en: "My hamstring's feeling a bit tight — I'm going to ease off the sprints.", intent: "Communicating a minor injury concern" },
      { en: "Can we do a proper rondo today? The boys need touch work.", intent: "Requesting a possession-based passing drill" },
      { en: "That's the run I was talking about — curved, hit the gap at full pace.", intent: "Demonstrating or pointing out the correct movement" },
      { en: "Feels sharp today — legs are fresh, I feel like I'm flying.", intent: "Positive self-assessment at training" },
      { en: "He's been training out of his skin this week. He should start Saturday.", intent: "Advocating for a teammate who's been impressive" },
    ],
    vocab: [
      "rondo",
      "shadow play",
      "set piece",
      "shape work",
      "bib",
      "small-sided game",
      "cones",
      "opposition shape",
      "high press drill",
      "finishing session",
    ],
    challenges: [
      "The coach is running a boring fitness drill. Suggest an alternative that achieves the same goal.",
      "A teammate keeps getting the set-piece run wrong. Explain the correct movement to them.",
      "After a tough defeat, you're back at training. How do you talk to the group to reset the mood?",
    ],
    sampleConversation: [
      { speaker: "ai", en: "Right, we're doing the high press trigger drill again. Last session was sloppy." },
      { speaker: "learner", en: "Can we walk through the triggers first? I think some of the lads are still unclear on when to go." },
      { speaker: "ai", en: "Good shout. So — the trigger is the centre-back's back pass to the keeper. That's when the two forwards spring." },
      { speaker: "learner", en: "And the ten — do I drop to block the out ball or press the keeper directly?" },
      { speaker: "ai", en: "You cut the passing lane to the six — force the keeper to go long. Don't go one-on-one with him." },
      { speaker: "learner", en: "Got it. Let's run it. Feels sharp today — I think we'll lock this down quick." },
    ],
  },
  {
    id: "soccer-transfer",
    name: "Transfer Talk / Club Gossip",
    emoji: "💰",
    blurb:
      "The classic dressing room or pub chat about signings, contracts, wages, and who's on the move. Player power, agents, and club politics.",
    counterpart: "Teammate or supporter speculating about transfers",
    learnerRole: "Player hearing the latest transfer gossip",
    toneNote:
      "Speculative, gossipy, inside-baseball. Players talk about 'release clauses', 'personal terms', and 'he's not happy at the club'. Fans use Twitter rumors as fact.",
    phrases: [
      { en: "I heard his release clause gets triggered at the end of the season.", intent: "Discussing a player's contract exit clause" },
      { en: "He's not happy at the club — been left out of the last three squads.", intent: "Speculating about a player who is being frozen out" },
      { en: "We need a proper number nine. Linking up nice but we're not cutting teams open.", intent: "Calling for a clinical striker signing" },
      { en: "Wages are the issue — he wants double what we're offering.", intent: "Explaining why a transfer deal isn't done yet" },
      { en: "His agent's been tapping him up for six months. Everyone knows it.", intent: "Accusing an agent of illegal contact" },
      { en: "It's just Sky Sports rattling the saber — I'll believe it when I see a shirt reveal.", intent: "Being skeptical about a transfer rumor" },
      { en: "If we cash in on him now, we can rebuild properly in the summer window.", intent: "Suggesting selling a player to reinvest" },
    ],
    vocab: [
      "release clause",
      "transfer window",
      "tapping up",
      "personal terms",
      "shirt reveal",
      "fee agreed",
      "bid",
      "unsettled",
      "sell-on clause",
      "homegrown",
    ],
    challenges: [
      "Your club is linked with a star player but the fee sounds unrealistic. React to the rumor.",
      "A teammate tells you a star player is about to leave on a free transfer. Discuss the news.",
      "You're a journalist pressing a player about transfer interest from a rival club. Play the player side.",
    ],
    sampleConversation: [
      { speaker: "ai", en: "Bro, did you see it on Twitter — Santos bid forty million, club rejected it." },
      { speaker: "learner", en: "Forty million? They're having a laugh. He's worth at least sixty-five, minimum." },
      { speaker: "ai", en: "Exactly, but he's got a year left. If he doesn't sign, they might cash in for less." },
      { speaker: "learner", en: "That'd be a disaster. He's the only one who links the midfield to the attack properly." },
      { speaker: "ai", en: "I know — and if he goes, who replaces him? We've got no one coming through with that quality." },
      { speaker: "learner", en: "Just feels like a leak to pressure him into signing. I'll believe the move when I see a shirt reveal." },
    ],
  },
];

const soccerVocabSets: ModuleVocabSet[] = [
  { category: "Positions", emoji: "📍", words: ["goalkeeper", "center-back", "full-back", "wingback", "defensive mid", "box-to-box", "ten / number ten", "winger", "striker / number nine", "false nine"] },
  { category: "Tactics", emoji: "♟️", words: ["high press", "low block", "4-3-3", "back four", "offside trap", "counter-press", "gegenpressing", "half-space", "overlap", "underlap"] },
  { category: "Match Events", emoji: "⚽", words: ["clean sheet", "hat-trick", "brace", "own goal", "penalty shootout", "stoppage time", "added time", "injury time", "VAR", "offside"] },
  { category: "Player Slang", emoji: "🗣️", words: ["worldie", "banger", "nutmeg / panna", "rabona", "chip", "howler", "rush goalie", "screamer", "silky", "touch tight"] },
];

// ─────────────────────────────────────────────────────────────────────────────
// HOCKEY
// ─────────────────────────────────────────────────────────────────────────────

const hockeyAreas: ModuleArea[] = [
  {
    id: "hockey-bench",
    name: "Bench Communication",
    emoji: "🏒",
    blurb:
      "The bench is loud, fast, and urgent. Line changes happen in the blink of an eye. Coaches and players communicate in short bursts — you have three seconds before the puck drops again.",
    counterpart: "Head coach or assistant coach",
    learnerRole: "Forward on the bench waiting for a line change",
    toneNote:
      "Fast and punchy. Hockey bench talk is barely sentences — 'Get out there!', 'You're up!', 'Change change change!'. No time for full thoughts.",
    phrases: [
      { en: "Change it up — you're out there, now!", intent: "Calling for a line change mid-play" },
      { en: "Get to the glass, don't get caught in the middle!", intent: "Directing a player on a dump-in to get to the corner" },
      { en: "Stay on him — don't let him breathe!", intent: "Demanding tight checking coverage" },
      { en: "Get pucks deep! Stop trying to dangle through the neutral zone!", intent: "Coaching a player to dump and chase rather than carry" },
      { en: "Watch the back-door — they run that play all night!", intent: "Warning about a specific backdoor goal scoring play" },
      { en: "You've had a shift and a half — get off!", intent: "Telling an overextended player to come off the ice" },
      { en: "Wheels on! Wheel it out of the zone!", intent: "Telling a fast skater to use their speed to exit the defensive zone" },
    ],
    vocab: [
      "line change",
      "dump and chase",
      "neutral zone",
      "dangle",
      "forecheck",
      "backcheck",
      "pinch",
      "wheels (speed)",
      "crash the net",
      "board battle",
    ],
    challenges: [
      "Your line has been on the ice for 90 seconds and the coach wants you off. Acknowledge and respond.",
      "The opposition just scored on a backdoor pass. You're next on — how do you mentally reset and communicate to your linemates?",
      "You're a coach calling a timeout with 30 seconds left and down by one. Give the message.",
    ],
    sampleConversation: [
      { speaker: "ai", en: "Jordan — you're up! Get in there, now!" },
      { speaker: "learner", en: "Going! Going! What's the call — forecheck or sit back?" },
      { speaker: "ai", en: "Forecheck hard. Their D is tired. Get pucks behind them and grind." },
      { speaker: "learner", en: "Got it. Who's my right wing on this?" },
      { speaker: "ai", en: "Marcus — he just went over the boards. You two together. Go, go, go!" },
      { speaker: "learner", en: "On it. Marcus — right corner, I'll drive the net!" },
    ],
  },
  {
    id: "hockey-powerplay",
    name: "Power Play Coordination",
    emoji: "⚡",
    blurb:
      "Two minutes with a man advantage — every second counts. The power play unit has practiced these sequences a hundred times. Communication is fast and coded.",
    counterpart: "Power play quarterback (defenseman) at the blue line",
    learnerRole: "Forward working the half-wall on the power play",
    toneNote:
      "Controlled urgency. Power play has structure — players know their spots but the talk keeps everyone reading off each other. 'Bumper's open! Back door!'",
    phrases: [
      { en: "Bumper's wide open — feed him on the tape!", intent: "Calling for a pass to the player positioned in the high slot" },
      { en: "Point! Point! D's unchecked at the blue line!", intent: "Calling for the puck to go back to the defenseman at the point" },
      { en: "Get it down low — set up on the half-wall!", intent: "Directing the puck to work down into the zone corners" },
      { en: "Cycle it! Don't force the shot — they're blocking everything.", intent: "Calling for puck movement instead of a forced attempt" },
      { en: "Hammer it — he's screened! Let it go!", intent: "Telling the defenseman to shoot through a screen" },
      { en: "Back door! I'm back door right now!", intent: "Calling for a cross-crease pass to the open side of the net" },
      { en: "Reset — reset, bring it back to the point and start over.", intent: "Calling for the unit to reset formation after losing control" },
    ],
    vocab: [
      "power play (PP)",
      "penalty kill (PK)",
      "bumper position",
      "half-wall",
      "overload",
      "umbrella setup",
      "one-timer",
      "back door",
      "point shot",
      "shot traffic / screen",
    ],
    challenges: [
      "Your power play is struggling to get set up. The puck keeps getting cleared. What do you call?",
      "You're stationed at the back door and no one is passing to you. Make the call.",
      "The PK unit is blocking everything from the point. Suggest a change in strategy mid-power play.",
    ],
    sampleConversation: [
      { speaker: "learner", en: "Back door! Back door — I've had it open twice already!" },
      { speaker: "ai", en: "I know, I know — they keep taking away my cross-ice lane. Work the half-wall first." },
      { speaker: "learner", en: "Half-wall is clogged. Their PK is running at the bumper every time." },
      { speaker: "ai", en: "Okay — next rotation, I'm going bumper, you stretch to back door. We'll draw them over." },
      { speaker: "learner", en: "Works for me. Give me a heads-up before you swing." },
      { speaker: "ai", en: "Two seconds after Marcus touches — that's your cue. Hammer it if it comes." },
    ],
  },
  {
    id: "hockey-locker-room",
    name: "Locker Room",
    emoji: "🧤",
    blurb:
      "Before the game, between periods, after the final horn. The locker room is where truth gets told, friendships are made, and legends are built. Zero filter allowed.",
    counterpart: "Veteran teammate getting ready for warmups",
    learnerRole: "Young player preparing for a big game",
    toneNote:
      "Loose, banter-heavy, but with an undercurrent of focus. Players tape sticks, blast music, talk trash, and say things like 'Let's go to work' and 'Boys are ready tonight'.",
    phrases: [
      { en: "Boys are dialed in tonight — I can feel it.", intent: "Sensing strong team energy before a big game" },
      { en: "Let's just go to work. No drama, no nonsense — just hockey.", intent: "Calling for focus and simplicity" },
      { en: "Whoever's got the music, turn it up — needs to be way louder in here.", intent: "Pumping up the pre-game atmosphere" },
      { en: "Chirped him so bad last game — he's gonna be looking for me tonight.", intent: "Bragging about trash talk from a previous game" },
      { en: "My skates are sharp as a razor tonight. I'm feeling good.", intent: "Expressing physical readiness before the game" },
      { en: "Tape job's clean — always play better when the tape job's clean.", intent: "Hockey superstition about stick taping ritual" },
      { en: "Whatever you did last road trip — do it again. Road warrior energy.", intent: "Calling back to a successful away game ritual" },
    ],
    vocab: [
      "chirp / chirping",
      "tape job",
      "scratch (being left off the lineup)",
      "biscuit (puck)",
      "barnburner (high-scoring game)",
      "tilt (fight)",
      "grocery stick",
      "road warrior",
      "barn (arena)",
      "letterman (team captain)",
    ],
    challenges: [
      "You're a veteran helping a nervous rookie calm down before his first playoff game.",
      "Your best friend on the team just found out he's scratched. How do you handle it in the room?",
      "Give a mid-period locker room speech when you're down two goals after the first period.",
    ],
    sampleConversation: [
      { speaker: "ai", en: "You're taping that thing for the third time. You nervous, rook?" },
      { speaker: "learner", en: "Nah, I'm good. Just — this barn is louder than anything I've played in. Feels different." },
      { speaker: "ai", en: "It is different. Feed off it. This crowd wants to see you play your game." },
      { speaker: "learner", en: "You always this calm before a big one?" },
      { speaker: "ai", en: "Nope. First playoff game I almost threw up in my skates. But once puck drops, it's just hockey." },
      { speaker: "learner", en: "Okay. Yeah. Let's go to work then — boys look ready out there." },
    ],
  },
  {
    id: "hockey-post-whistle",
    name: "Post-Whistle Talk",
    emoji: "😤",
    blurb:
      "After a stoppage in play — players trash talk, argue, jawbone, or celebrate. It's hockey culture. Refs have heard it all. Opponents push buttons.",
    counterpart: "Opposing player jawing after a stoppage",
    learnerRole: "Player handling post-whistle trash talk professionally",
    toneNote:
      "Aggressive banter with a cool head. Real players don't take obvious bait — they chirp back, stay composed, or just skate away laughing. Getting drawn into a scrap on a penalty call is the opponent's plan.",
    phrases: [
      { en: "Nice dive, buddy. Oscar-worthy performance.", intent: "Calling out an opponent for embellishing a penalty" },
      { en: "Keep running your mouth — my game does the talking.", intent: "Shutting down chirping by referencing performance" },
      { en: "Four more minutes in the box — that's on you.", intent: "Holding someone accountable for taking a costly penalty" },
      { en: "You good? That hit looked heavy.", intent: "Checking on an opponent after a big legal hit" },
      { en: "Ref, he's been hacking at me every whistle — keep an eye on him.", intent: "Reporting persistent stick work to the referee" },
      { en: "Boys let's go — don't even look at him, just skate.", intent: "Pulling teammates away from a brewing confrontation" },
    ],
    vocab: [
      "chirp",
      "jawbone",
      "tilt / drop the gloves",
      "embellishment",
      "roughing",
      "slash",
      "crosscheck",
      "two and a ten",
      "unsportsmanlike",
      "instigator",
    ],
    challenges: [
      "An opponent is chirping you hard after every whistle. Respond without taking a penalty.",
      "Your teammate is about to drop the gloves — talk him out of it, it's a bad spot.",
      "A player runs your goalie and gets away with no call. Keep your composure.",
    ],
    sampleConversation: [
      { speaker: "ai", en: "Haha — you couldn't hit a pylon, man. That's your third miss tonight." },
      { speaker: "learner", en: "Scoreboard says one-nothing. Keep talking." },
      { speaker: "ai", en: "Lucky bounce and you know it. You won't see another one." },
      { speaker: "learner", en: "We'll see. Puck drops in ten seconds — worry about that instead." },
      { speaker: "ai", en: "I respect that, actually. Good chirp." },
      { speaker: "learner", en: "I know. Now let's play hockey." },
    ],
  },
  {
    id: "hockey-fan",
    name: "Fan Talk at the Rink",
    emoji: "🚨",
    blurb:
      "Section 114, standing room only, foam finger, overpriced beer. Hockey fans are some of the most knowledgeable and loudest in sports. The talk is passionate, technical, and profane.",
    counterpart: "Season ticket holder next to you at the game",
    learnerRole: "Fan at a big home playoff game",
    toneNote:
      "Loud, passionate, technically savvy. Hockey fans actually know what a forecheck is. They yell 'HE SHOOTS, HE SCORES' and 'WHAT A SAVE' — they're real participants in the game.",
    phrases: [
      { en: "That goal light better go on in the third or I'm losing my mind.", intent: "Expressing frustration at a scoreless game" },
      { en: "Their goalie is absolutely standing on his head tonight — unreal saves.", intent: "Praising the opposing goaltender" },
      { en: "That was a dirty hit — ref is completely blind!", intent: "Reacting to a missed call on a big hit" },
      { en: "He's been snake-bitten all year — hitting posts, hitting sticks, nothing going in.", intent: "Describing a player going through a goal-scoring drought" },
      { en: "Third period hockey — either team can win it. That's why I love this game.", intent: "Expressing excitement about a tight game entering the final period" },
      { en: "The barn is absolutely rocking tonight. Best atmosphere in years.", intent: "Describing an electrifying home game atmosphere" },
      { en: "If they blow a two-goal lead in the third again, I'm done. I'm physically done.", intent: "Humorous exaggeration about a team's late-game collapses" },
    ],
    vocab: [
      "barn",
      "goal light",
      "snipe",
      "standing on his head",
      "snake-bitten",
      "between the pipes",
      "pipes (goalposts)",
      "barn burner",
      "overtime / OT",
      "shootout",
    ],
    challenges: [
      "Your team just tied the game with two minutes left. React to the person next to you.",
      "A bad call costs your team a power play goal. Express your frustration authentically.",
      "After a 4-1 win, discuss the game with the fan next to you on the way out.",
    ],
    sampleConversation: [
      { speaker: "learner", en: "Did you see that snipe? Top shelf, blocker side — the goalie had zero chance!" },
      { speaker: "ai", en: "Unreal shot. The kid has a rocket for a wrist shot. But our D is giving up way too much in the neutral zone." },
      { speaker: "learner", en: "Yeah — they're getting run through the middle every shift. Coach needs to fix that between periods." },
      { speaker: "ai", en: "If they give up another odd-man rush, I swear this barn is going to implode." },
      { speaker: "learner", en: "Our goalie's been standing on his head though — without him it's already four-nothing." },
      { speaker: "ai", en: "True. Okay, just get through the second period and trust the third-period team. They always show up." },
    ],
  },
  {
    id: "hockey-warmup",
    name: "Pre-Game Warmup",
    emoji: "🛼",
    blurb:
      "The twenty-minute warmup skate before the game. Players loosen up, test the goalie, run plays and routines. The rink is quiet but the team is sharpening up.",
    counterpart: "Linemate during warmup skate",
    learnerRole: "Forward running line rushes in warmup",
    toneNote:
      "Light and focused. A little loose but dialing in. Players shout encouragements, test shots, and crack jokes but they're also mentally switching on.",
    phrases: [
      { en: "Give it a rip — see how he's tracking pucks today.", intent: "Telling a teammate to test the goalie with a hard shot" },
      { en: "Nice hands in practice — carry that right into the game.", intent: "Encouraging a teammate after a nice warmup deke" },
      { en: "Legs are feeling heavy — maybe the flight yesterday.", intent: "Noting fatigue from travel on a road trip" },
      { en: "Their goalie looks sharp. We'll need traffic and rebounds tonight.", intent: "Scouting the opposing goaltender during warmup" },
      { en: "Run the 2-on-1 drill twice more — we were sloppy with our reads yesterday.", intent: "Requesting extra reps on a specific play" },
      { en: "Eyes up, Koby — see the ice, don't look at the puck the whole time.", intent: "Coaching a teammate on hockey vision" },
    ],
    vocab: [
      "puck tracking",
      "edge work",
      "deke",
      "2-on-1 / odd-man rush",
      "around the horn (passing around the defense)",
      "breakout",
      "traffic in front",
      "battle drills",
      "stretch pass",
      "skate hard",
    ],
    challenges: [
      "You notice the opposing goalie looks uncomfortable with low shots to the blocker side. Tell your linemates.",
      "A teammate's head is down and he looks distracted in warmup. Try to get him locked in.",
      "Run through a 2-on-1 play setup with a winger before the game starts.",
    ],
    sampleConversation: [
      { speaker: "ai", en: "Rip one on him — low glove side, see how he tracks it." },
      { speaker: "learner", en: "Nice — he kicked it out but looked slow. Blocker side might be there tonight." },
      { speaker: "ai", en: "Yeah I noticed that too. Keep that in your back pocket." },
      { speaker: "learner", en: "Legs feel good. Rested up well. You good?" },
      { speaker: "ai", en: "I'm ready. Let's make sure our breakout is clean — we were turning it over on the left board last game." },
      { speaker: "learner", en: "Agreed. Head on a swivel, tape to tape. Let's go." },
    ],
  },
  {
    id: "hockey-coach-system",
    name: "Coach's System Talk",
    emoji: "📋",
    blurb:
      "Meeting room, whiteboard, X's and O's. Coaches explain systems and players ask clarifying questions. This is where hockey gets strategic and technical.",
    counterpart: "Head coach explaining the defensive structure",
    learnerRole: "Center asking questions about the new neutral zone trap",
    toneNote:
      "Focused and technical. Hockey coaches love their systems. Players push back with smart questions — 'If their D pinches, who's responsible for the breakout lane?' That's the language.",
    phrases: [
      { en: "So when their D pinches, who's picking up the breakout lane — is that me or the winger?", intent: "Asking about defensive responsibility on an opponent's pinching defenseman" },
      { en: "Are we pressing in the offensive zone or falling back into a 1-2-2 neutral zone?", intent: "Asking about forecheck vs. neutral zone setup" },
      { en: "Their center is slow on the backcheck — can we exploit that on quick transitions?", intent: "Identifying a tactical vulnerability on the opponent" },
      { en: "Do we want pucks to the weak side or are we going rim every time?", intent: "Asking about puck movement in the defensive zone" },
      { en: "If I read a turnover at the blue line, do you want me to jump on it or stay responsible?", intent: "Asking about whether to take offensive risks on turnovers" },
      { en: "What's the signal for changing to the trap? From the bench or we read it ourselves?", intent: "Asking how to recognize when the coach wants a system change" },
    ],
    vocab: [
      "neutral zone trap",
      "1-2-2",
      "forechecking system (2-1-2, 1-2-2)",
      "pinch",
      "weak-side",
      "rim",
      "breakout",
      "defensive zone coverage",
      "man-to-man",
      "read-and-react",
    ],
    challenges: [
      "The coach is explaining a new defensive zone coverage but it's unclear what you do when both corners are occupied. Ask the right question.",
      "You disagree with the coach's forecheck system — you think it leaves you vulnerable on turnovers. Voice your concern respectfully.",
      "After a video session, a teammate is confused about his role on the penalty kill. Explain it to him.",
    ],
    sampleConversation: [
      { speaker: "ai", en: "Tonight we're running the 1-2-2 in the neutral zone. Don't let them through the middle. Funnel them wide." },
      { speaker: "learner", en: "Got it. If their winger beats the first layer and their D pinches — do I stay back or go read the play?" },
      { speaker: "ai", en: "Stay back. Do not gamble. Your job is the defensive side of center ice. Your winger reads the D." },
      { speaker: "learner", en: "And on a turnover at our blue line — are we going to the rim or quick outlet pass?" },
      { speaker: "ai", en: "Quick outlet if the lane is there. Rim if you're under pressure. Don't force it through the middle." },
      { speaker: "learner", en: "Clear. One more — what's the signal if you want us to switch to forechecking hard?" },
      { speaker: "ai", en: "I'll tap the board twice. You'll see it. Go then." },
    ],
  },
];

const hockeyVocabSets: ModuleVocabSet[] = [
  { category: "Positions", emoji: "🥅", words: ["center", "left wing", "right wing", "defenseman", "goaltender / goalie", "enforcer", "power play specialist", "fourth liner", "checking line", "shutdown D"] },
  { category: "Penalties", emoji: "🚨", words: ["tripping", "slashing", "roughing", "crosschecking", "interference", "boarding", "charging", "hooking", "high-sticking", "game misconduct"] },
  { category: "Goals & Plays", emoji: "🏒", words: ["hat trick", "natural hat trick", "Gordie Howe hat trick", "shorthand goal", "empty netter", "breakaway", "penalty shot", "deflection", "tip-in", "wrap-around"] },
  { category: "Slang", emoji: "🗣️", words: ["beauty (good play/player)", "dangles (skilled stick handling)", "wheels (speed)", "chirp (trash talk)", "barn (arena)", "biscuit (puck)", "celly (goal celebration)", "piped it (hit the post)", "grocery stick", "letterman"] },
];

// ─────────────────────────────────────────────────────────────────────────────
// BASEBALL
// ─────────────────────────────────────────────────────────────────────────────

const baseballAreas: ModuleArea[] = [
  {
    id: "baseball-dugout",
    name: "Dugout Communication",
    emoji: "⚾",
    blurb:
      "The dugout is a mix of chatter, coaching, and nervous energy. Players on deck talk strategy, coaches flash signs, and guys on the bench keep their teammates loose.",
    counterpart: "Bench coach or veteran teammate",
    learnerRole: "Hitter on deck waiting for your at-bat",
    toneNote:
      "Loose but locked in. Baseball dugouts are all about keeping energy up and reading the game. Players say 'see ball hit ball' and 'good eye' and 'stay within yourself'.",
    phrases: [
      { en: "See ball, hit ball. Don't overthink it up there.", intent: "Simplifying the approach for an anxious hitter" },
      { en: "He's living on the outer half tonight — you gotta protect that outside corner.", intent: "Scouting report on the pitcher's tendencies" },
      { en: "He's at ninety-four pitches — he's gotta be coming with his fastball now.", intent: "Reading the pitcher's fatigue and predicting pitch type" },
      { en: "Good eye! That was on the black — wasn't a strike.", intent: "Praising a hitter for laying off a borderline pitch" },
      { en: "Work the count. Make him throw six, seven pitches.", intent: "Instructing a hitter to grind out a long at-bat" },
      { en: "He's tipping his breaking ball — watch his elbow when it drops.", intent: "Identifying a pitcher's tell for an off-speed pitch" },
      { en: "Keep your hands back. You're out front on everything tonight.", intent: "Mechanical correction for swinging early on off-speed pitches" },
    ],
    vocab: [
      "on deck",
      "in the hole",
      "at-bat",
      "count (balls and strikes)",
      "pitch sequence",
      "outer half / inner half",
      "barrel",
      "off the bench",
      "pinch hitter",
      "hot corner (third base)",
    ],
    challenges: [
      "Your cleanup hitter just struck out on three pitches. Walk up and say something helpful without being patronizing.",
      "You've noticed the pitcher tipping his curveball. How do you share that intel with your teammates?",
      "The team is losing 4-1 in the seventh. Give a boost to the dugout.",
    ],
    sampleConversation: [
      { speaker: "ai", en: "He went slider-slider-fastball on the last three guys. Watch for it." },
      { speaker: "learner", en: "He's been pounding the outer half all game too. Is the low-and-in fastball there?" },
      { speaker: "ai", en: "He's thrown it maybe twice. Hasn't gone there much tonight. Look outer half first." },
      { speaker: "learner", en: "His count is eighty-eight pitches. If I work it to two-two, he's going offspeed." },
      { speaker: "ai", en: "That's the read. Keep your hands back, trust your eye. You've been on his heater all night." },
      { speaker: "learner", en: "Got it. See ball, hit ball. I'm ready." },
    ],
  },
  {
    id: "baseball-pitcher-catcher",
    name: "Pitcher-Catcher Signs",
    emoji: "🤲",
    blurb:
      "The battery — pitcher and catcher — communicates in a silent language of signs, nods, and shaken-off calls. A disagreement on pitch selection has to be resolved in seconds.",
    counterpart: "Catcher calling pitches from behind the plate",
    learnerRole: "Starting pitcher with a runner on second",
    toneNote:
      "Quiet and coded. When they talk it's brief and specific. The catcher jogs to the mound and gets right to it — 'His timing is off, let's bust him in' or 'He's sitting fastball, let's change speeds.'",
    phrases: [
      { en: "I'm shaking that off — he's sitting fastball all day. Give me the deuce.", intent: "Requesting a curveball after shaking off the fastball sign" },
      { en: "Walk him — he's their best run producer. Let's deal with the eight-hole.", intent: "Deciding to intentionally walk a dangerous hitter" },
      { en: "Come to the mound for a second — I need to switch signs, runner's picking them.", intent: "Calling the catcher out because signs may be stolen" },
      { en: "He's early on everything. Throw him off-speed down and away, let him roll over it.", intent: "Exploiting a hitter who is timing the fastball" },
      { en: "My command is off today — let's stay four-seam up in the zone. Simple.", intent: "Pitcher telling catcher to keep the game plan basic" },
      { en: "I've got nothing left in the tank. We're going to need the pen soon.", intent: "Pitcher honestly telling the catcher he is running out of gas" },
    ],
    vocab: [
      "battery (pitcher + catcher)",
      "deuce (curveball)",
      "four-seam fastball",
      "two-seamer",
      "changeup",
      "put-away pitch",
      "backdoor breaking ball",
      "pitch framing",
      "stolen signs",
      "intentional walk",
    ],
    challenges: [
      "The catcher keeps calling for your changeup but your changeup isn't working today. Have the conversation.",
      "A runner on second is relaying your signs to the batter. Call the catcher to the mound and address it.",
      "You're one out away from a complete game shutout and the manager is walking to the mound. Talk him out of pulling you.",
    ],
    sampleConversation: [
      { speaker: "ai", en: "Runner's on second — we're switching to the complex set. Just watch my fingers, ignore the left hand." },
      { speaker: "learner", en: "Got it. What do you want to start him with? He jumped on my first-pitch fastball last time." },
      { speaker: "ai", en: "Let's go slider away to start. Show him it, then come back in with the two-seamer if he takes it." },
      { speaker: "learner", en: "Works for me. My slider's been sharp today. But if he gets to two-two, I want the spike curve in the dirt." },
      { speaker: "ai", en: "I'll call it. You just execute. Trust your stuff — you've got him all day." },
      { speaker: "learner", en: "Let's go. Get back there, I'm ready." },
    ],
  },
  {
    id: "baseball-at-bat",
    name: "At-Bat Approach",
    emoji: "🏏",
    blurb:
      "Inside a hitter's head at the plate — the approach, the adjustments, what they're thinking on each pitch. Then the conversation after the at-bat.",
    counterpart: "Hitting coach or teammate analyzing the at-bat",
    learnerRole: "Hitter working through a prolonged slump",
    toneNote:
      "Analytical and honest. Hitters are brutally honest about their mechanics. 'I was chasing the slider in the dirt all week' or 'My load is too early — I'm tipping myself off.'",
    phrases: [
      { en: "I've been chasing that slider in the dirt for three games. I have to lay off it.", intent: "Self-diagnosing a swing at a bad pitch repeatedly" },
      { en: "I'm sitting dead red — fastball, middle-in. That's my pitch.", intent: "Declaring the specific pitch the hitter is looking for" },
      { en: "My bat path is fine — the timing is off. I'm a tick late on the heater.", intent: "Identifying the timing as the root of the slump problem" },
      { en: "Let me get a hit the other way tonight. Stop pulling everything.", intent: "Deciding to use the whole field and go to right field" },
      { en: "I can't be giving away two-strike at-bats. I gotta make him work.", intent: "Committing to more two-strike plate discipline" },
      { en: "I squared that up — hit it right on the screws. Just right at someone.", intent: "Acknowledging a hard-hit out with bad luck" },
    ],
    vocab: [
      "hot streak / slump",
      "dead red (looking fastball)",
      "BABIP (luck on balls in play)",
      "pull hitter",
      "opposite field",
      "barrel rate",
      "two-strike approach",
      "walk rate",
      "pitch recognition",
      "launch angle",
    ],
    challenges: [
      "You just struck out on three pitches for the second time in a row. Talk to your hitting coach honestly.",
      "You're 0-for-4 with three strikeouts. What's your mentality heading into the last at-bat of the game?",
      "Describe to a teammate what a pitcher is doing to get you out and how you plan to adjust.",
    ],
    sampleConversation: [
      { speaker: "ai", en: "Talk to me — what are you seeing up there? Your load looks late." },
      { speaker: "learner", en: "Yeah, I'm late on the fastball. I know it. I keep waiting on the breaking ball and he's busting me in." },
      { speaker: "ai", en: "You're giving him too much credit. He's throwing you fastball-first because you're sitting off-speed." },
      { speaker: "learner", en: "So what's the adjustment — load earlier, look heater?" },
      { speaker: "ai", en: "Look middle-in fastball first pitch. If he throws the breaking ball for a strike, fine — tip your hat. But make him beat you with something else." },
      { speaker: "learner", en: "Okay. Dead red, middle-in, no more early counts giving away at-bats. Got it." },
    ],
  },
  {
    id: "baseball-umpire",
    name: "Umpire Interaction",
    emoji: "⚫",
    blurb:
      "The contested strikeout call, the close play at the plate, the manager coming out to argue. Baseball has an art form around arguing with umpires.",
    counterpart: "Home plate umpire calling a disputed third strike",
    learnerRole: "Hitter who just got rung up on a pitch they thought was a ball",
    toneNote:
      "Frustrated but calibrated. Players know there's a line — cross it and you're gone. Managers put on a performance. 'That pitch was outside, blue!' and 'Where was that pitch!?'",
    phrases: [
      { en: "Blue, that ball was outside by a foot — you gotta be kidding me.", intent: "Protesting a called third strike" },
      { en: "I'm not arguing balls and strikes, I just want to know where that pitch was.", intent: "Classic safe phrase to avoid ejection while still protesting" },
      { en: "He was safe — his hand got in before the tag! Call for help, blue!", intent: "Requesting the umpire consult the crew on a close play" },
      { en: "That's the same pitch you called a ball two innings ago! Stay consistent!", intent: "Demanding consistency in the strike zone" },
      { en: "Check the replay — that pitcher is doctoring the baseball.", intent: "Requesting a foreign substance check on the pitcher" },
      { en: "You're squeezing my pitcher. Every borderline pitch is going against us.", intent: "Manager complaining about a tight strike zone" },
    ],
    vocab: [
      "blue (umpire nickname)",
      "called third strike",
      "check swing appeal",
      "infield fly rule",
      "obstruction",
      "interference",
      "balk",
      "squeeze the pitcher (tight zone)",
      "ejection",
      "protest the game",
    ],
    challenges: [
      "You're a manager arguing a safe/out call at first base. Make the argument without getting tossed.",
      "The umpire just called a pitch that was clearly outside as a strike. Stay in the game but make your frustration known.",
      "The opposing pitcher keeps stepping off to reset your hitter's timing. Ask the ump to watch for a balk.",
    ],
    sampleConversation: [
      { speaker: "ai", en: "Strike three — you're out." },
      { speaker: "learner", en: "Blue, come on — that ball was off the outside corner. Where's that pitch?" },
      { speaker: "ai", en: "It caught the black. You're done arguing." },
      { speaker: "learner", en: "I'm not arguing, I just want to know where you're setting up the zone tonight." },
      { speaker: "ai", en: "One more word and you're gone. Walk back to the dugout." },
      { speaker: "learner", en: "Fine. Fine. But that pitch was a ball. We both know it." },
    ],
  },
  {
    id: "baseball-fan",
    name: "Fan Talk",
    emoji: "🌭",
    blurb:
      "Bleachers, box seats, sports bar on a weekday afternoon. Baseball fans are statisticians, historians, and passionate hometown boosters all at once.",
    counterpart: "Fellow fan at the ballpark or watching on TV",
    learnerRole: "Fan having a lively mid-game argument about the manager's decisions",
    toneNote:
      "Opinionated and stat-aware. Baseball fans casually drop OBP and WAR into conversation. They second-guess every managerial decision. 'Why are you bunting in the second inning?' is a real fan take.",
    phrases: [
      { en: "Why are you bunting in the second inning? That's two outs waiting to happen.", intent: "Criticizing a manager's decision to bunt early in the game" },
      { en: "This kid is going to be a star — his exit velocity is insane.", intent: "Praising a prospect using a modern stat" },
      { en: "They've left that starter in two batters too long every game this week. It's a pattern.", intent: "Criticizing the manager's slow hook on tired starters" },
      { en: "A .220 hitter with no power batting cleanup — how is that a lineup?", intent: "Criticizing the manager's batting order" },
      { en: "That was a hanging curveball — you could've hit that with a tennis racket.", intent: "Exclaiming about an easy pitch that was crushed" },
      { en: "He went yard again! He's on pace for forty-five this year if he stays healthy.", intent: "Tracking a home run hitter's pace for the season" },
    ],
    vocab: [
      "WAR (wins above replacement)",
      "OBP (on-base percentage)",
      "exit velocity",
      "launch angle",
      "walk-off",
      "complete game",
      "quality start",
      "blown save",
      "DFA (designated for assignment)",
      "no-hitter",
    ],
    challenges: [
      "The manager pulls a dominant starter after six strong innings for a shaky bullpen. Debate the decision with your seatmate.",
      "Your team is down by one in the ninth with the bases loaded and the manager sends up a weak pinch hitter. React.",
      "A player on the other team hits a solo homer off your starter. Defend your pitcher to a pessimistic fan next to you.",
    ],
    sampleConversation: [
      { speaker: "learner", en: "Why is he pulling Martinez? He's only thrown eighty-two pitches and his slider is filthy tonight." },
      { speaker: "ai", en: "He's facing the lineup a third time. Numbers say his ERA goes up a run and a half the third time through." },
      { speaker: "learner", en: "I don't care about the numbers when the guy is dealing. Let him go until he hits trouble." },
      { speaker: "ai", en: "That's how you blow leads. The second he gives up one run, everyone says 'should've pulled him earlier.'" },
      { speaker: "learner", en: "Fair enough, but I hate managing by formula. Baseball has a feel to it too." },
      { speaker: "ai", en: "The front office doesn't want feel — they want wins. Hot takes don't hold up in October." },
    ],
  },
  {
    id: "baseball-batting-practice",
    name: "Batting Practice",
    emoji: "🏋️",
    blurb:
      "Early BP before the game — working on adjustments, getting timing, hitters chatting between rounds. The most relaxed and candid time in a ballplayer's day.",
    counterpart: "Hitting coach or teammate waiting for their round",
    learnerRole: "Hitter working through a mechanical fix in BP",
    toneNote:
      "Loose, instructional, honest. Players crank home runs in BP and high-five, then get serious about a flaw. 'Your hands are too high in your stance' said with a laugh is the vibe.",
    phrases: [
      { en: "There it is — that's the swing. Do it again.", intent: "Coaching someone to repeat a great swing immediately" },
      { en: "Your hands are starting too high — you're casting the barrel out.", intent: "Identifying a mechanical flaw in the swing" },
      { en: "I'm trying to stay through the ball instead of rolling over.", intent: "Explaining what you're working on to get opposite-field power" },
      { en: "Get your reps in — we've got five minutes before the pitchers need the cage.", intent: "Urgency about limited cage time" },
      { en: "That was a tape-measure job — that ball is still going.", intent: "Exclaiming about a massive home run hit in batting practice" },
      { en: "Don't try to murder it. Nice easy hack, let the bat work.", intent: "Coaching against overswinging" },
    ],
    vocab: [
      "cage work",
      "tee work",
      "soft toss",
      "mechanical fix",
      "hip turn",
      "stay back",
      "extension",
      "pull hitter",
      "all-fields approach",
      "two-strike approach",
    ],
    challenges: [
      "Your teammate keeps rolling over on inside pitches. Walk up and give them one specific fix.",
      "You're getting BP pitches at 70 mph but your timing is still off. How do you describe the problem to the hitting coach?",
      "A young callup is nervous in the cage. Calm them down and give a helpful tip.",
    ],
    sampleConversation: [
      { speaker: "ai", en: "Good swing, but you're rolling your wrists early. That's why you're pulling everything." },
      { speaker: "learner", en: "Yeah I feel it. I'm trying to stay through but as soon as I see the ball in, I just pull off it." },
      { speaker: "ai", en: "Think about hitting the ball right back up the middle. Don't think about pulling — just middle." },
      { speaker: "learner", en: "Stay through, middle of the field. Let me try a few like that." },
      { speaker: "ai", en: "There — that one had backspin. That's the right feel." },
      { speaker: "learner", en: "Yeah that felt different. I want five more like that before we wrap up." },
    ],
  },
  {
    id: "baseball-clubhouse",
    name: "Clubhouse / Post-Game",
    emoji: "🍕",
    blurb:
      "After the game, the clubhouse is where honest conversations happen — good game or bad. Players break down what happened, celebrate, or process a tough loss.",
    counterpart: "Veteran teammate unwinding after a brutal loss",
    learnerRole: "Player processing a painful 9th-inning collapse",
    toneNote:
      "Raw and real. Win: loud music, pizza, genuine joy. Loss: quiet, honest, no sugarcoating but no blame games either. Veterans say 'we play tomorrow' — move on fast.",
    phrases: [
      { en: "We play tomorrow. Shower up, eat, flush it.", intent: "Classic baseball mentality to forget a bad loss fast" },
      { en: "I should've had that ball — that's a routine play I make ninety-nine times out of a hundred.", intent: "Taking personal accountability for an error" },
      { en: "No one player wins or loses a game. We fight together tomorrow.", intent: "Deflecting blame away from one player after a team loss" },
      { en: "Brutal loss, but we've been here before. This team bounces back.", intent: "Expressing quiet confidence after a demoralizing defeat" },
      { en: "That walk-off — I'll hear that crowd noise in my sleep tonight.", intent: "Describing the lingering emotional pain of a walk-off loss" },
      { en: "Games like this are why I love baseball. You can't script that.", intent: "A veteran's appreciation for a wild game, even a losing one" },
    ],
    vocab: [
      "flush it",
      "dog pile (celebration pile)",
      "walk-off",
      "mercy rule",
      "series split",
      "sweep",
      "shutout",
      "error",
      "loss column",
      "pennant race",
    ],
    challenges: [
      "You made the last out with the bases loaded to end the game. How do you handle the clubhouse?",
      "Your team just swept a three-game series on the road. Lead the celebration without being obnoxious.",
      "A teammate is being too hard on himself after a rough outing. Talk him off the ledge.",
    ],
    sampleConversation: [
      { speaker: "ai", en: "Man, that's a gut punch. Three-nothing in the ninth and we can't close it out." },
      { speaker: "learner", en: "Yeah. Tough one. But look — we play tomorrow. This is a long season." },
      { speaker: "ai", en: "I know, I know. I just hate leaving that one out there." },
      { speaker: "learner", en: "That's baseball. You can play a perfect game and still lose. Shower up, eat something, reset." },
      { speaker: "ai", en: "You're right. You've been through a pennant race before — it doesn't shake you." },
      { speaker: "learner", en: "Nope. Every game is its own thing. Tomorrow's a new day. We come back hard." },
    ],
  },
];

const baseballVocabSets: ModuleVocabSet[] = [
  { category: "Pitch Types", emoji: "⚾", words: ["four-seam fastball", "two-seam fastball", "cut fastball (cutter)", "slider", "curveball", "knuckle curve", "changeup", "splitter", "sinker", "eephus"] },
  { category: "Hitting Stats", emoji: "📊", words: ["batting average", "on-base percentage (OBP)", "slugging percentage", "OPS", "WAR", "exit velocity", "launch angle", "BABIP", "K rate (strikeout rate)", "barrel rate"] },
  { category: "Field Positions", emoji: "🏟️", words: ["pitcher", "catcher", "first baseman", "second baseman", "shortstop", "third baseman", "left fielder", "center fielder", "right fielder", "designated hitter (DH)"] },
  { category: "Game Slang", emoji: "🗣️", words: ["dinger / gone yard", "duck snort (blooper)", "can of corn (easy fly ball)", "frozen rope (hard line drive)", "painting the corner", "meatball (easy pitch)", "wheelhouse", "golden sombrero (4 Ks)", "cycle", "walk-off"] },
];

// ─────────────────────────────────────────────────────────────────────────────
// TENNIS
// ─────────────────────────────────────────────────────────────────────────────

const tennisAreas: ModuleArea[] = [
  {
    id: "tennis-court-warmup",
    name: "Court Warm-Up",
    emoji: "🎾",
    blurb:
      "Before the match starts — the five-minute warm-up at the net, feeding balls, getting eyes on the opponent's game. Players test serves, returns, and observe tendencies.",
    counterpart: "Opponent during the warm-up rally",
    learnerRole: "Player observing the opponent's weaknesses during warm-up",
    toneNote:
      "Neutral and polite on the surface but mentally calculating. Players say 'nice shot' while mentally noting 'his backhand is late on pace.' Warm-up is intel gathering.",
    phrases: [
      { en: "Let's take a few groundstrokes first — then volleys.", intent: "Suggesting the order of the warm-up sequence" },
      { en: "Send me a few overheads — I need to get my swing timing down.", intent: "Requesting overhead lobs for warm-up practice" },
      { en: "Nice and easy pace — we've got five minutes, no need to be a hero.", intent: "Setting a relaxed tone for the pre-match warm-up" },
      { en: "His backhand return is short — I should attack that side off the serve.", intent: "Mental note about a tactical opportunity spotted in warm-up" },
      { en: "She's comfortable in the rally but I haven't seen her handle net pressure yet.", intent: "Analyzing an opponent's weakness before the match" },
      { en: "Let me try a few second serves — I haven't hit a topspin kicker all morning.", intent: "Working on a specific serve type in warm-up" },
    ],
    vocab: [
      "baseline",
      "net cord",
      "overhead smash",
      "kicker (topspin second serve)",
      "slice backhand",
      "groundstroke",
      "rally",
      "crosscourt",
      "down the line",
      "approach shot",
    ],
    challenges: [
      "During warm-up you notice your opponent can't handle high balls to the backhand. Make a mental game plan.",
      "Your topspin forehand is inconsistent in the warm-up. Tell yourself what adjustment to make.",
      "Suggest a structured warm-up routine to a new practice partner.",
    ],
    sampleConversation: [
      { speaker: "learner", en: "Let's start with some easy crosscourt groundstrokes — get the legs moving." },
      { speaker: "ai", en: "Works for me. I'm going to go a bit flat early just to find the strings." },
      { speaker: "learner", en: "Sure. Nice pace, no need to blast it. Want to do some volleys at the net after?" },
      { speaker: "ai", en: "Definitely. And a few overheads if you can feed them — I always feel late on those early on." },
      { speaker: "learner", en: "I noticed you're loading up on the forehand — loading pretty wide?" },
      { speaker: "ai", en: "Yeah, wide unit turn. It gives me more pace but sometimes I'm late on balls hit right at me." },
    ],
  },
  {
    id: "tennis-doubles",
    name: "Doubles Coordination",
    emoji: "👥",
    blurb:
      "Doubles partners communicating between points, calling targets, switching formations. The court is smaller but the communication has to be tighter.",
    counterpart: "Doubles partner between games",
    learnerRole: "Net player helping organize the team's strategy",
    toneNote:
      "Quick and tactical. Doubles partners whisper to each other at the net between points. They use terms like 'Australian formation', 'I formation', 'poach', and 'lob me again, I'm ready.'",
    phrases: [
      { en: "I'm going to poach on the next return game — fake left, go right.", intent: "Setting up a surprise poaching move at the net" },
      { en: "They're lobbing over my head every chance they get. I need to back up a step.", intent: "Noticing a pattern and adjusting net position" },
      { en: "Let's switch to Australian formation — their returner keeps going crosscourt.", intent: "Calling a formation change to counter a predictable return" },
      { en: "Stay back on returns — don't rush the net, they're hitting heavy.", intent: "Warning a partner against coming in on the return" },
      { en: "I'll take anything in the middle — yours is the alley on my right.", intent: "Clarifying court division responsibilities" },
      { en: "Great poach! Now let's run that same play with a fake.", intent: "Praising a successful net move and setting up a variation" },
    ],
    vocab: [
      "poach",
      "I formation",
      "Australian formation",
      "alley",
      "down the middle (middle T)",
      "switch",
      "up-and-back formation",
      "overhead",
      "lob over",
      "second serve +1",
    ],
    challenges: [
      "Your opponents are lobbing over your partner at the net every point. Develop a counter-strategy.",
      "Your partner is getting aced on the serve return. What advice can you give between games?",
      "Set up a specific play combination for the next service game using signals.",
    ],
    sampleConversation: [
      { speaker: "ai", en: "They keep lobbing me at net. I'm getting killed up there." },
      { speaker: "learner", en: "Back up just a half step. And when their returner winds up, I'll call 'back' if a lob is coming." },
      { speaker: "ai", en: "Good. And what about the middle? They're threading it between us." },
      { speaker: "learner", en: "I'll take middle on my side. You cheat a step to your alley — we'll run the switch if they go wide." },
      { speaker: "ai", en: "Okay. Should we try Australian to stop the crosscourt return?" },
      { speaker: "learner", en: "Yes — next service game. I'll signal it before I toss. Keep an eye on me." },
    ],
  },
  {
    id: "tennis-line-call",
    name: "Arguing a Line Call",
    emoji: "📏",
    blurb:
      "The disputed line call is a rite of passage in amateur and club tennis. Polite but firm disagreements about whether a ball was in or out — an essential social skill on court.",
    counterpart: "Opponent who called your shot out",
    learnerRole: "Player disputing a ball they were sure landed in",
    toneNote:
      "Civil but firm. Club tennis has its own etiquette — you can question a call without causing a scene. 'Are you sure about that? I had it in clearly' is the move, not losing your temper.",
    phrases: [
      { en: "Are you sure that was out? I had that landing on the line from here.", intent: "Politely questioning a disputed line call" },
      { en: "If you're not sure, the point goes to me — the benefit of the doubt is mine.", intent: "Invoking the rule that unclear calls favor the opponent" },
      { en: "Can we ask the chair if there's a mark? I think we can check on clay.", intent: "Requesting to check the court surface for a ball mark" },
      { en: "I'm not saying you're wrong, I just saw it differently. Shall we replay it?", intent: "Diplomatically suggesting a let without accusing the opponent of cheating" },
      { en: "That's been happening a lot on that side — I'd appreciate a closer look.", intent: "Noting a pattern of disputed calls on the same side of the court" },
      { en: "I'll take your call. Good match — that's tennis.", intent: "Accepting a disputed call graciously to keep the match moving" },
    ],
    vocab: [
      "in / out",
      "let",
      "fault",
      "foot fault",
      "overrule",
      "chair umpire",
      "Hawk-Eye challenge",
      "benefit of the doubt",
      "mark on the clay",
      "hindrance",
    ],
    challenges: [
      "Your opponent calls a ball out that you were certain landed clearly in. Go through the process of disputing it calmly.",
      "You're unsure about a ball that may have been out. How do you handle it honestly?",
      "A persistent opponent is disputing every close call you make. How do you handle it without the match turning hostile?",
    ],
    sampleConversation: [
      { speaker: "learner", en: "I had that ball in. Are you sure about the call?" },
      { speaker: "ai", en: "I called it out — it was long." },
      { speaker: "learner", en: "From my angle it was clearly on the line. Can we check for a mark?" },
      { speaker: "ai", en: "I don't see a clear mark there. I'm confident in the call." },
      { speaker: "learner", en: "Okay. If you're not sure, you should give me the benefit of the doubt. But I'll accept it and we move on." },
      { speaker: "ai", en: "Fair enough. Let's play." },
    ],
  },
  {
    id: "tennis-club-pro",
    name: "Lesson with Club Pro",
    emoji: "🎓",
    blurb:
      "A paid lesson with the club's teaching professional — working on technique, getting specific feedback, asking smart questions about game improvement.",
    counterpart: "Club teaching professional",
    learnerRole: "Intermediate club player working on consistency",
    toneNote:
      "Engaged and specific. Good students ask targeted questions: 'Am I dropping my shoulder on the backhand?' rather than vague ones. Pros give direct feedback without sugarcoating.",
    phrases: [
      { en: "My second serve is the biggest hole in my game right now — what do I fix first?", intent: "Prioritizing the most critical weakness to work on" },
      { en: "I feel like I'm jamming myself on the forehand. Am I standing too close to the ball?", intent: "Self-diagnosing a mechanical error with a specific question" },
      { en: "How much topspin should I be generating on the return — is it more wrist or shoulder rotation?", intent: "Asking about technique mechanics for a specific shot" },
      { en: "Can we do a drill that simulates pressure? I fall apart when the score gets tight.", intent: "Requesting competition-simulation practice to address nerves" },
      { en: "My kick serve looks good in practice but it flattens out in matches.", intent: "Describing a practice-to-match inconsistency" },
      { en: "I get it technically, but how do I turn it into muscle memory?", intent: "Asking about the bridge between understanding and automatic execution" },
    ],
    vocab: [
      "topspin",
      "slice",
      "kick serve",
      "open stance",
      "closed stance",
      "contact point",
      "follow-through",
      "unit turn",
      "split step",
      "recovery footwork",
    ],
    challenges: [
      "Ask the club pro to explain the difference between your forehand in practice and in matches.",
      "You've had a specific tip from a YouTube video that contradicts what your pro is teaching. Raise it respectfully.",
      "After thirty minutes of backhand work, ask for a drill that puts everything together under pressure.",
    ],
    sampleConversation: [
      { speaker: "ai", en: "Good session. What's the one thing you most want to improve today?" },
      { speaker: "learner", en: "My second serve. I double-fault under pressure and it's costing me matches." },
      { speaker: "ai", en: "Okay. Let me see a few. Hit three to the deuce side." },
      { speaker: "learner", en: "I notice I'm slowing my swing speed down when I'm nervous — is that killing the spin?" },
      { speaker: "ai", en: "Exactly right. You need more racket head speed, not less. Trust the spin — swing through aggressively." },
      { speaker: "learner", en: "Can we do a drill where I serve at game point pressure? I need to practice it under stress." },
    ],
  },
  {
    id: "tennis-scheduling",
    name: "Match Scheduling",
    emoji: "📅",
    blurb:
      "The low-key but culturally essential tennis conversation — coordinating court times, finding opponents, managing league commitments. As important as the tennis itself.",
    counterpart: "Club member you want to arrange a match with",
    learnerRole: "Player trying to get a practice match organized",
    toneNote:
      "Casual and social. Club tennis scheduling is a mix of politeness and mild negotiation — 'I've got Tuesday morning or Thursday after 5 — which works for you?' Very everyday English.",
    phrases: [
      { en: "Are you free Thursday evening? Court 3 opens up at six.", intent: "Proposing a specific time and court for a match" },
      { en: "I've been trying to get in some competitive points before the club tournament.", intent: "Explaining the motivation for wanting a practice match" },
      { en: "Should we book through the app or just check in at the desk?", intent: "Asking about the booking process for court time" },
      { en: "I can play doubles Thursday and singles Sunday — does that work for you?", intent: "Offering multiple match options to accommodate schedules" },
      { en: "Weather looks dodgy Saturday — are the indoor courts available if we need them?", intent: "Planning a rain backup for an outdoor match" },
      { en: "Mind if we keep it social? I'm not trying to compete, just warm up my game.", intent: "Setting expectations for a relaxed, low-pressure match" },
    ],
    vocab: [
      "club tournament",
      "ladder match",
      "social tennis",
      "hitting partner",
      "indoor / outdoor courts",
      "court booking",
      "round robin",
      "box league",
      "pro sets",
      "match tiebreak",
    ],
    challenges: [
      "Arrange a match with a better player you've never played before — invite them without being awkward.",
      "You need to cancel a previously arranged match. Apologize and reschedule.",
      "Organize a four-player doubles round-robin for the weekend — coordinate with three others.",
    ],
    sampleConversation: [
      { speaker: "learner", en: "Hey — are you around Thursday evening? I've been looking for a singles match before the club championship." },
      { speaker: "ai", en: "Thursday could work. What time are you thinking?" },
      { speaker: "learner", en: "There's a court free at 6:30. We could play a set and a half, maybe two hours?" },
      { speaker: "ai", en: "That works. Should I book it through the app or do you want to handle it?" },
      { speaker: "learner", en: "I'll book it — I'll put your name on it too. Just let me know if anything changes." },
      { speaker: "ai", en: "Perfect. Fair warning — I've been working on my net game, so bring your passing shots." },
    ],
  },
  {
    id: "tennis-post-match",
    name: "Post-Match Handshake",
    emoji: "🤝",
    blurb:
      "The moment at the net after the match ends. Genuine compliments, honest reflections, graceful winning and losing. It's one of tennis's defining cultural moments.",
    counterpart: "Opponent at the net after a three-set match",
    learnerRole: "Player who just won a close, competitive match",
    toneNote:
      "Gracious but honest. Winners don't brag; losers don't make excuses — but both can be candid. 'Your backhand gave me so much trouble' is genuine, not flattery.",
    phrases: [
      { en: "Well played — that was a real battle. You pushed me hard in the third.", intent: "Genuine praise after a competitive match" },
      { en: "Your backhand crosscourt was untouchable today — where did that come from?", intent: "Complimenting a specific shot that caused problems" },
      { en: "I left a few too many second-serve returns in the net. That cost me the set.", intent: "Honest self-critique of a specific weakness without excuses" },
      { en: "You serve huge under pressure — I couldn't get a read on it in the third set.", intent: "Acknowledging the opponent's strength in a key moment" },
      { en: "Rematch next week? I think I've got a better game plan now.", intent: "Issuing a friendly rematch challenge" },
      { en: "That tiebreak was pure nerves for me — I just tried to hold my game together.", intent: "Describing the emotional challenge of a pressure moment" },
    ],
    vocab: [
      "handshake",
      "tiebreak",
      "deuce",
      "advantage",
      "match point",
      "set point",
      "game, set, and match",
      "breadstick (6-1 set)",
      "bagel (6-0 set)",
      "good match",
    ],
    challenges: [
      "You just lost a tight three-setter in which you had a match point. Respond at the net with grace.",
      "You won 6-0, 6-1 against a weaker opponent. How do you handle the handshake without being condescending?",
      "Compliment three specific things about the opponent's game as you walk off together.",
    ],
    sampleConversation: [
      { speaker: "learner", en: "Well played — you really made me earn that one in the third." },
      { speaker: "ai", en: "Thanks. I felt like I had you in the second — I just couldn't hold the break." },
      { speaker: "learner", en: "Your forehand winner on that last deuce was brilliant. Perfectly placed." },
      { speaker: "ai", en: "Thank you. Your kick serve gave me real trouble — I never got comfortable on the return." },
      { speaker: "learner", en: "Rematch soon? I feel like we bring out the best in each other." },
      { speaker: "ai", en: "Absolutely. Good match — see you out here next week." },
    ],
  },
  {
    id: "tennis-club-social",
    name: "Club Social",
    emoji: "🥂",
    blurb:
      "Post-match drinks, club tournament socials, round-robin mixers. The informal side of tennis — where the game gets talked about and friendships are made.",
    counterpart: "Club member at a post-tournament drinks event",
    learnerRole: "Player chatting about the day's matches over a drink",
    toneNote:
      "Relaxed, sociable, and fun. Club social tennis talk is all about mild bragging, friendly ribbing, and shared passion for the game. It's the golf nineteenth-hole equivalent.",
    phrases: [
      { en: "I had match point twice in the final — twice! And still managed to choke it away.", intent: "Self-deprecating humor about a missed chance to win" },
      { en: "Mike's forehand has gotten legitimately scary since he started getting lessons.", intent: "Complimenting a clubmate's improvement" },
      { en: "These round-robins are my favorite — you get to play everyone in one afternoon.", intent: "Expressing enthusiasm for the format" },
      { en: "I've been playing for twenty years and I still can't get my second serve consistent.", intent: "Humorous admission about a persistent weakness" },
      { en: "Did you see the final? That tiebreak went nineteen-seventeen — incredible.", intent: "Sharing excitement about a memorable match at the event" },
      { en: "Same time next month? I'm already thinking about tactics for the rematch.", intent: "Making plans to compete again in the next club event" },
    ],
    vocab: [
      "round robin",
      "club championship",
      "ladder",
      "mixed doubles",
      "social tennis",
      "grading",
      "handicap",
      "club night",
      "ballhopper",
      "pro shop",
    ],
    challenges: [
      "Introduce yourself to a new club member at a social event and invite them into the conversation.",
      "Someone is being a poor sport about losing at a club social. Lighten the mood.",
      "Describe your most memorable match at this club to a group of listeners.",
    ],
    sampleConversation: [
      { speaker: "learner", en: "That final was something else — I thought Sarah had it when she went up a break in the third." },
      { speaker: "ai", en: "I know! But then she double-faulted at five-four and the whole momentum shifted." },
      { speaker: "learner", en: "Painful to watch. I've done that exact thing — your arm goes tight at the worst moment." },
      { speaker: "ai", en: "At least she made the final. My round-robin was a disaster — lost to Dave who I've beaten every other time." },
      { speaker: "learner", en: "Dave's been hitting with the club pro all summer. His backhand is a completely different shot now." },
      { speaker: "ai", en: "That explains it. I'm booking lessons tomorrow. See you here next month for the rematch?" },
    ],
  },
];

const tennisVocabSets: ModuleVocabSet[] = [
  { category: "Shots", emoji: "🎾", words: ["forehand", "backhand", "volley", "overhead smash", "drop shot", "lob", "slice", "topspin", "flat shot", "half-volley"] },
  { category: "Scoring", emoji: "📋", words: ["love", "deuce", "advantage", "game point", "set point", "match point", "tiebreak", "bagel (6-0)", "breadstick (6-1)", "super tiebreak"] },
  { category: "Court Zones", emoji: "📍", words: ["baseline", "service box", "T (center service line)", "alley", "no man's land", "net cord", "net tape", "singles sideline", "doubles sideline", "center mark"] },
  { category: "Player Slang", emoji: "🗣️", words: ["moonball (high topspin lob)", "pusher (defensive baseliner)", "baseliner", "serve and volley", "chip and charge", "western grip", "continental grip", "eastern grip", "big server", "retriever"] },
];

// ─────────────────────────────────────────────────────────────────────────────
// BOWLING
// ─────────────────────────────────────────────────────────────────────────────

const bowlingAreas: ModuleArea[] = [
  {
    id: "bowling-lane-assignment",
    name: "Lane Assignment & Shoe Rental",
    emoji: "🎳",
    blurb:
      "Walking in, getting set up, renting shoes, finding your lane. For league night or casual bowling — the first five minutes at the desk.",
    counterpart: "Front desk staff at the bowling alley",
    learnerRole: "Person arriving for the first time with a group",
    toneNote:
      "Casual and friendly. Bowling alleys are relaxed. The desk staff and bowlers are chatty. 'What size you need?' and 'Lane 12 is all yours, have fun!' is the energy.",
    phrases: [
      { en: "Hey — we've got four people, do you have two lanes open next to each other?", intent: "Requesting adjacent lanes for a group" },
      { en: "Size nine in rental shoes, please — do you have the anti-fungal spray too?", intent: "Requesting a specific shoe size and sanitary spray" },
      { en: "Are the bumpers available for my kids? They're pretty young.", intent: "Asking about bumper rails for young children" },
      { en: "How long is the wait for a lane on a Saturday evening like this?", intent: "Asking about expected wait time on a busy night" },
      { en: "We're doing two games each — what does that come out to for four people?", intent: "Asking about the total cost for the group's session" },
      { en: "Can we get a lane closer to the snack bar? We're going to be ordering a lot.", intent: "Requesting a specific lane location" },
    ],
    vocab: [
      "lane",
      "bumpers / gutter guards",
      "rental shoes",
      "bowling ball rack",
      "approach (the area behind the foul line)",
      "foul line",
      "pin deck",
      "ball return",
      "overhead display / scoring screen",
      "house ball",
    ],
    challenges: [
      "Your group of six arrives to find only individual lanes available, not two adjacent ones. Negotiate with the desk.",
      "You forgot to bring your personal bowling shoes. Ask about rental options and pricing.",
      "You're celebrating a birthday — ask about any party packages the alley might offer.",
    ],
    sampleConversation: [
      { speaker: "learner", en: "Hi — we've got four people, do you have two lanes side by side?" },
      { speaker: "ai", en: "Sure! Lanes 7 and 8 just opened up. How many games are you thinking?" },
      { speaker: "learner", en: "Probably two games each. And we'll need shoes for all four of us." },
      { speaker: "ai", en: "No problem. What sizes?" },
      { speaker: "learner", en: "Nine, nine-and-a-half, seven, and a men's ten. Oh — and do you have the sanitizing spray?" },
      { speaker: "ai", en: "Yep, right here. Total comes to thirty-six for shoes and forty for the games. Any food coming too?" },
    ],
  },
  {
    id: "bowling-league-night",
    name: "League Night",
    emoji: "🏆",
    blurb:
      "The heart and soul of bowling culture — weekly league competition with your team. There's scoring, competition, strategy, and a lot of good-natured ribbing.",
    counterpart: "Teammate during league night competition",
    learnerRole: "Regular bowler competing in the Thursday night league",
    toneNote:
      "Relaxed and competitive at the same time. League bowlers are social — lots of trash talk between teams, celebration of good shots, and 'shaking off' bad frames. 'Pick it up, you've got this' and 'Ohhh, right in the pocket!' is the soundtrack.",
    phrases: [
      { en: "Right in the pocket — that's a strike all day!", intent: "Calling a perfect pocket hit that should result in a strike" },
      { en: "Wash those frames clean — we've got four more to make it up.", intent: "Encouragement after a rough stretch of frames" },
      { en: "They're averaging two-oh-five as a team tonight — we need to bring our average up or we lose the games.", intent: "Calculating what score the team needs to win" },
      { en: "You're creeping past the foul line — watch your slide.", intent: "Warning a teammate about a potential foul" },
      { en: "We need a mark every frame to stay in this — no open frames.", intent: "Setting the strategic goal of sparing or striking every frame" },
      { en: "Good spare! Two down is still tough to convert, you made it look easy.", intent: "Praising a teammate for a difficult spare conversion" },
      { en: "That's a handicap game — we've got points advantage built in, don't sweat it.", intent: "Reminding a teammate about the handicap system" },
    ],
    vocab: [
      "mark (strike or spare)",
      "open frame (no mark)",
      "handicap",
      "series (three game total)",
      "average",
      "anchor (last bowler up)",
      "team average",
      "pins over average",
      "baker format",
      "position round",
    ],
    challenges: [
      "Your team is down by fifteen pins with one frame left. Explain to your teammate what you need to do to win.",
      "A teammate has had three open frames in a row and looks defeated. Lift their spirits.",
      "Explain the handicap system to someone who's never bowled in a league before.",
    ],
    sampleConversation: [
      { speaker: "ai", en: "Ugh — split in the seventh. No way I'm picking that up." },
      { speaker: "learner", en: "You might get the seven — worth a shot. What's the split, five-six?" },
      { speaker: "ai", en: "Seven-ten. Classic." },
      { speaker: "learner", en: "Okay, let it go. We're still up by twenty. Just need marks the rest of the way." },
      { speaker: "ai", en: "I've had three open frames. I'm killing us." },
      { speaker: "learner", en: "Stop — we're a team. Marcus is carrying us right now. You'll have your moment. Just trust your release." },
    ],
  },
  {
    id: "bowling-spare-shooting",
    name: "Spare Shooting Strategy",
    emoji: "🎯",
    blurb:
      "The difference between good and great bowlers is spare shooting. The tactical conversation around picking up splits and corner pins.",
    counterpart: "More experienced bowler giving tips on spare conversion",
    learnerRole: "Bowler consistently missing corner pin spares",
    toneNote:
      "Analytical and specific. Bowlers talk about their 'board' (as in board number on the lane), 'target arrows', and angles. It's more technical than people expect — 'I was targeting the second arrow and the ball was rolling out by the pins.'",
    phrases: [
      { en: "For the ten-pin, move your feet two boards left and stay on your normal target arrow.", intent: "Teaching the foot adjustment for a corner pin spare" },
      { en: "I was losing my swing — pulling the ball left every time, that's why I keep leaving the seven.", intent: "Self-diagnosing a persistent spare miss" },
      { en: "Cross-lane angle — aim at the opposite gutter from the pin you're shooting.", intent: "Teaching the cross-lane technique for corner pin spares" },
      { en: "Your ball's hooking too early to pick up the seven — you need a straighter line.", intent: "Explaining why a hook ball causes problems on spare shots" },
      { en: "Switch to a plastic ball for spares — no hook, straight shot, much more consistent.", intent: "Recommending a plastic spare ball for reliability" },
      { en: "Visualize a straight line from your target arrow right through the pin. Lock onto that line.", intent: "Mental focus cue for spare shooting" },
    ],
    vocab: [
      "spare",
      "split",
      "corner pin (7-pin, 10-pin)",
      "baby split (2-7, 3-10)",
      "bucket (2-4-5-8 or 3-5-6-9)",
      "board",
      "target arrow",
      "plastic ball (spare ball)",
      "straight shot",
      "roll-out (ball losing energy)",
    ],
    challenges: [
      "You have a 6-7-10 split. Walk through your decision-making process out loud.",
      "A friend is missing the ten-pin consistently by two boards. Give them the specific adjustment.",
      "Explain why using a hook ball for spares is harder than using a plastic ball.",
    ],
    sampleConversation: [
      { speaker: "learner", en: "I keep missing the ten-pin. I don't understand it — I'm targeting the second arrow, same as always." },
      { speaker: "ai", en: "Your feet are in the wrong spot for a corner pin. Move two boards left before you throw." },
      { speaker: "learner", en: "Two boards left — and still target the second arrow?" },
      { speaker: "ai", en: "Exactly. The angle change does the work. You don't have to aim differently — the feet do it." },
      { speaker: "learner", en: "And for the seven-pin, do I do the same thing on the other side?" },
      { speaker: "ai", en: "Mirror image — move two boards right, same target arrow, and throw it straight. No hook." },
    ],
  },
  {
    id: "bowling-equipment",
    name: "Equipment Talk (Ball, Shoes)",
    emoji: "🔵",
    blurb:
      "The bowling pro shop — selecting a ball, drilling finger holes, discussing reactive resin vs urethane, adjusting shoe soles. Equipment talk is serious business for league bowlers.",
    counterpart: "Pro shop owner helping select a new ball",
    learnerRole: "Intermediate bowler looking to upgrade from a house ball",
    toneNote:
      "Technical and enthusiastic. Bowling equipment talk gets surprisingly deep — coverstock, pin placement, RG, differential. The pro shop owner is the expert and asks the right questions to match equipment to your game.",
    phrases: [
      { en: "I'm averaging around one-sixty-five and I want a ball with more backend reaction.", intent: "Describing current level and desired ball motion" },
      { en: "Is reactive resin right for me or should I start with urethane?", intent: "Asking about coverstock options as an intermediate bowler" },
      { en: "My fingers are a bit swollen in the summer — what do I do about grip size?", intent: "Asking about finger hole sizing for seasonal swelling" },
      { en: "What's the difference between the pin placement high versus low in the ball?", intent: "Asking about drilling layout options and their effect on ball motion" },
      { en: "My sliding shoe has too much grip on this approach — what sole do I swap in?", intent: "Asking about interchangeable shoe sole options" },
      { en: "I bowl on oily house shots — what coverstock handles that better?", intent: "Asking about equipment for a specific lane oil condition" },
    ],
    vocab: [
      "coverstock",
      "reactive resin",
      "urethane",
      "pearl",
      "solid",
      "RG (radius of gyration)",
      "differential",
      "drilling layout",
      "pin placement",
      "flare potential",
    ],
    challenges: [
      "You want to buy your first personal bowling ball. Walk through the questions you'd ask a pro shop owner.",
      "Explain the difference between a plastic ball, urethane ball, and reactive resin ball to a beginner.",
      "Your current ball is hooking too early on a dry lane. Ask the pro shop what can be done.",
    ],
    sampleConversation: [
      { speaker: "ai", en: "What's your average and what kind of release do you have — do you throw a hook?" },
      { speaker: "learner", en: "I'm averaging about one-sixty. I do throw a hook but it's fairly mild — rev rate is low." },
      { speaker: "ai", en: "With a lower rev rate, you might want to start with a urethane or a mild reactive resin. Too much backend will be hard to control." },
      { speaker: "learner", en: "I've heard reactive resin gives you more backend reaction — is that too much for me?" },
      { speaker: "ai", en: "A weak symmetric reactive would be fine. Something like this Storm — it's controllable but you'll see more backend than a plastic ball." },
      { speaker: "learner", en: "Let's do it. And for the drilling — what layout do you recommend for consistency?" },
    ],
  },
  {
    id: "bowling-scoring",
    name: "Scoring Explanation",
    emoji: "📋",
    blurb:
      "Teaching someone how bowling scoring works — or getting a refresher on perfect games, turkeys, and the tenth frame. A genuine everyday language use case.",
    counterpart: "Friend who has never bowled before and is confused by the scoreboard",
    learnerRole: "Experienced bowler explaining the scoring system",
    toneNote:
      "Patient and clear. Explaining bowling scoring is a right of passage. Real bowlers say 'a strike counts ten plus your next two balls, so a double is worth forty' without blinking — but to a newcomer it's confusing.",
    phrases: [
      { en: "A strike is all ten pins on your first ball — and it counts as ten plus your next two balls.", intent: "Explaining the strike scoring rule" },
      { en: "A spare is all ten with both balls — ten plus your next one ball as a bonus.", intent: "Explaining the spare scoring rule" },
      { en: "A turkey is three strikes in a row — that's where the scoring really adds up.", intent: "Teaching the meaning of a turkey" },
      { en: "In the tenth frame you can bowl up to three balls — that's how you max it out.", intent: "Explaining the special rule for the final frame" },
      { en: "A perfect game is twelve strikes in a row — that's three hundred total.", intent: "Describing the perfect score in bowling" },
      { en: "Double in the ninth and tenth frame can swing your score by twenty pins — that's why the back end matters so much.", intent: "Explaining the high value of late-game strikes" },
    ],
    vocab: [
      "strike",
      "spare",
      "open frame",
      "turkey (3 consecutive strikes)",
      "double (2 strikes in a row)",
      "four-bagger",
      "perfect game (300)",
      "tenth frame",
      "fill ball",
      "clean game (all marks)",
    ],
    challenges: [
      "Explain to a beginner why a double in the ninth frame is so valuable.",
      "Walk through what happens in the tenth frame if you get a strike, then explain what 'fill balls' mean.",
      "A friend just asked why someone with only one open frame can still have a higher score than someone with three spares. Explain how.",
    ],
    sampleConversation: [
      { speaker: "ai", en: "Wait — she got a strike but the computer is showing thirty instead of ten. Why?" },
      { speaker: "learner", en: "Because a strike counts as ten plus your next two balls. She followed it with eight — so the strike frame is worth eighteen already." },
      { speaker: "ai", en: "Oh! So if you get two strikes in a row—" },
      { speaker: "learner", en: "The first one counts as ten plus whatever the next two are. Two strikes plus a nine means the first strike is worth twenty-nine." },
      { speaker: "ai", en: "That's why people get so excited about back-to-back strikes." },
      { speaker: "learner", en: "Exactly. String them together and the numbers compound fast. Three in a row — a turkey — and you're rolling." },
    ],
  },
  {
    id: "bowling-tournament",
    name: "Tournament Day",
    emoji: "🥇",
    blurb:
      "Local or regional tournament — more pressure, fresh oil patterns, competitors you don't know, and stakes beyond the usual Thursday night league.",
    counterpart: "Practice partner in the tournament warm-up period",
    learnerRole: "Competitive bowler adjusting to an unfamiliar oil pattern",
    toneNote:
      "Competitive and focused. Tournament bowlers are more intense — they talk about 'reading the pattern', 'missing in', and 'staying behind the ball'. The vibe shifts from social to sharp.",
    phrases: [
      { en: "This pattern is tighter than what I'm used to — I need to get closer to the gutter to let the ball come back.", intent: "Adjusting to a short or tight oil pattern" },
      { en: "I missed in on that spare — hooking too early, the oil's breaking down inside.", intent: "Explaining a spare miss due to lane transition" },
      { en: "What line are you playing? I've been trying the fourteen-board and getting wild results.", intent: "Asking a competitor about their targeting line on the lane" },
      { en: "My ball's reading this pattern really well — I'm going to stick with it until the lanes transition.", intent: "Deciding to stay with the current equipment choice" },
      { en: "I'll make my move in the last three games when the pattern breaks down.", intent: "Planning a strategic timing shift for the later stages of competition" },
      { en: "He's playing way outside — the outside line must be holding better than it looks.", intent: "Observing a competitor's successful unusual line" },
    ],
    vocab: [
      "oil pattern",
      "pattern length",
      "lane transition / breakdown",
      "inside line",
      "outside line",
      "entry angle",
      "carry percentage",
      "ball surface (grit)",
      "sanding",
      "benchmark ball",
    ],
    challenges: [
      "You're struggling through the first three games of a tournament. Diagnose the problem with your partner.",
      "An opponent is bowling on a completely different part of the lane than you and scoring higher. React.",
      "You're in a position to win the tournament. Talk yourself through staying calm in the final frames.",
    ],
    sampleConversation: [
      { speaker: "learner", en: "I've been on the fourteen board all day and my ball is over-hooking badly in games three and four." },
      { speaker: "ai", en: "The pattern's breaking down on the inside. You need to move your feet and target left — play more of an outside angle." },
      { speaker: "learner", en: "I hate the outside line. I never have confidence with it." },
      { speaker: "ai", en: "You don't have to go all the way out. Move feet three boards right, same target — just let the lane friction do the work." },
      { speaker: "learner", en: "What ball should I switch to? My benchmark is too long for what this pattern's doing." },
      { speaker: "ai", en: "Try the urethane. It'll give you more control and read the friction earlier than the reactive." },
    ],
  },
  {
    id: "bowling-celebration",
    name: "Post-Bowling Celebration",
    emoji: "🍻",
    blurb:
      "After the session or the tournament — grabbing food and drinks, replaying shots, laughing at gutter balls, and planning the next outing.",
    counterpart: "Teammates at the bar or snack area after bowling",
    learnerRole: "Bowler celebrating a personal best series with the league team",
    toneNote:
      "Fun, social, and a little rowdy. Bowling celebrations are all about laughing at yourself and hyping up teammates. Nobody takes themselves too seriously after bowling.",
    phrases: [
      { en: "Six-ninety-five! That's a personal best by fifteen pins — I'm buying a round!", intent: "Celebrating a personal best series score" },
      { en: "Did you see that turkey in the seventh? I almost didn't believe it myself.", intent: "Reliving a personal highlight from the session" },
      { en: "Next week I'm going to crack seven hundred. I was so close tonight.", intent: "Setting a performance goal for the next session" },
      { en: "That gutter ball in the third frame is going to haunt me for a week.", intent: "Laughing at a terrible shot in a lighthearted way" },
      { en: "Honestly, I bowl better when I stop thinking and just throw it.", intent: "Sharing a paradoxical insight about performance anxiety" },
      { en: "Same time next Thursday? I need my revenge on that lane seven oil pattern.", intent: "Committing to the next league night" },
    ],
    vocab: [
      "series (three-game total)",
      "personal best",
      "average",
      "honor score",
      "300 ring",
      "honor roll",
      "blind score",
      "sub / substitute",
      "team night out",
      "next week",
    ],
    challenges: [
      "Your teammate just bowled a 279 — one pin away from a perfect game. What do you say?",
      "Recap the most entertaining moment from the evening in a story that will make everyone laugh.",
      "Plan the end-of-season party for your bowling league.",
    ],
    sampleConversation: [
      { speaker: "learner", en: "Six-ninety-five — I can't believe it. I've never broken six-eighty before." },
      { speaker: "ai", en: "The turkey in game two was the turning point. You were locked in after that." },
      { speaker: "learner", en: "I honestly just stopped thinking and threw it. The moment I started analyzing it went wrong." },
      { speaker: "ai", en: "That's the secret to bowling. Your best games are always the ones where you're not in your own head." },
      { speaker: "learner", en: "I'm going for seven hundred next Thursday. You're going to watch me do it." },
      { speaker: "ai", en: "Big talk. I'll be right here. First round is on you though — six-ninety-five deserves a celebration." },
    ],
  },
];

const bowlingVocabSets: ModuleVocabSet[] = [
  { category: "Scoring Terms", emoji: "📊", words: ["strike", "spare", "open frame", "double", "turkey", "four-bagger / hambone", "perfect game (300)", "clean game", "series", "fill ball"] },
  { category: "Equipment", emoji: "🎳", words: ["house ball", "reactive resin ball", "urethane ball", "plastic / polyester ball", "coverstock", "finger inserts", "wrist brace", "bowling shoes (slide sole)", "rosin bag", "towel"] },
  { category: "Lane Terms", emoji: "🏟️", words: ["approach", "foul line", "arrows / target arrows", "dots", "breakpoint", "pocket", "pin deck", "oil pattern", "dry spot", "ball return"] },
  { category: "Bowler Slang", emoji: "🗣️", words: ["Brooklyn (opposite pocket hit)", "choking the ball", "lofting (throwing too far)", "chicken wing (bad arm swing)", "cranker (high-rev player)", "stroker", "tweener", "carry (converting a hit)", "flat ball (no hook)", "washout"] },
];

// ─────────────────────────────────────────────────────────────────────────────
// MAIN EXPORT
// ─────────────────────────────────────────────────────────────────────────────

export const BALL_SPORTS_CONTENT: SportsModuleContent[] = [
  {
    moduleId: "soccer",
    areas: soccerAreas,
    vocabSets: soccerVocabSets,
  },
  {
    moduleId: "hockey",
    areas: hockeyAreas,
    vocabSets: hockeyVocabSets,
  },
  {
    moduleId: "baseball",
    areas: baseballAreas,
    vocabSets: baseballVocabSets,
  },
  {
    moduleId: "tennis",
    areas: tennisAreas,
    vocabSets: tennisVocabSets,
  },
  {
    moduleId: "bowling",
    areas: bowlingAreas,
    vocabSets: bowlingVocabSets,
  },
];

export function getBallSportsContent(moduleId: string): SportsModuleContent | null {
  return BALL_SPORTS_CONTENT.find(m => m.moduleId === moduleId) ?? null;
}

export function getBallSportsArea(moduleId: string, areaId: string): ModuleArea | null {
  return getBallSportsContent(moduleId)?.areas.find(a => a.id === areaId) ?? null;
}
