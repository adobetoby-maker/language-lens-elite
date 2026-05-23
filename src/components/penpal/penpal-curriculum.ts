import type { Language } from "@/state/app-state";

export interface PenPalVocab {
  text: string;
  translation: string;
  pronunciation?: string;
}

export interface CircleQuestion {
  question: string;
  choices: string[];
  correct: number; // index
}

export interface PenPalTopic {
  id: string;
  phase: 1 | 2;
  topic: string; // "Your Name"
  question: string; // "¿Cómo te llamas?"
  questionEnglish: string;
  vocab: PenPalVocab[];
  copyWord: string; // single phrase to trace
  copySentence: string; // full sentence to copy
  circleQuestion: CircleQuestion;
  writePrompt: string; // shown above the free-write canvas
  exampleAnswer: string; // shown as a hint
}

export interface PenPalCurriculum {
  penpalName: string;
  penpalCity: string;
  greeting: string; // opening of the letter template
  topics: PenPalTopic[];
}

// ─── SPANISH ───────────────────────────────────────────────────────────────

const SPANISH: PenPalCurriculum = {
  penpalName: "María",
  penpalCity: "Madrid",
  greeting: "¡Hola María! Me llamo",
  topics: [
    // ── Phase 1: Your Story ─────────────────────────────────────
    {
      id: "name",
      phase: 1,
      topic: "Your Name",
      question: "¿Cómo te llamas?",
      questionEnglish: "What is your name?",
      vocab: [
        { text: "Me llamo", translation: "My name is" },
        { text: "¿Cómo te llamas?", translation: "What is your name?" },
        { text: "Mucho gusto", translation: "Nice to meet you" },
        { text: "Encantado/a", translation: "Pleased to meet you" },
      ],
      copyWord: "Me llamo",
      copySentence: "Me llamo ___. Mucho gusto.",
      circleQuestion: {
        question: "Which phrase means 'My name is'?",
        choices: ["Me llamo", "Me gusta", "Soy de", "Tengo"],
        correct: 0,
      },
      writePrompt: "¿Cómo te llamas? Write your answer.",
      exampleAnswer: "Me llamo [your name].",
    },
    {
      id: "from",
      phase: 1,
      topic: "Where You're From",
      question: "¿De dónde eres?",
      questionEnglish: "Where are you from?",
      vocab: [
        { text: "Soy de", translation: "I am from" },
        { text: "Vivo en", translation: "I live in" },
        { text: "¿De dónde eres?", translation: "Where are you from?" },
        { text: "Estados Unidos", translation: "United States" },
      ],
      copyWord: "Soy de",
      copySentence: "Soy de los Estados Unidos. Vivo en Idaho.",
      circleQuestion: {
        question: "Which means 'I am from'?",
        choices: ["Soy de", "Me llamo", "Vivo en", "Tengo"],
        correct: 0,
      },
      writePrompt: "¿De dónde eres? Write your answer.",
      exampleAnswer: "Soy de [place]. Vivo en [city].",
    },
    {
      id: "age",
      phase: 1,
      topic: "Your Age",
      question: "¿Cuántos años tienes?",
      questionEnglish: "How old are you?",
      vocab: [
        { text: "Tengo ___ años", translation: "I am ___ years old" },
        { text: "¿Cuántos años tienes?", translation: "How old are you?" },
        { text: "años", translation: "years" },
        { text: "cumpleaños", translation: "birthday" },
      ],
      copyWord: "Tengo años",
      copySentence: "Tengo treinta y cinco años. ¿Y tú?",
      circleQuestion: {
        question: "How do you say 'I am 30 years old'?",
        choices: ["Tengo treinta años", "Soy treinta años", "Me llamo treinta", "Estoy treinta"],
        correct: 0,
      },
      writePrompt: "¿Cuántos años tienes? Write your answer.",
      exampleAnswer: "Tengo ___ años.",
    },
    {
      id: "job",
      phase: 1,
      topic: "Your Job",
      question: "¿A qué te dedicas?",
      questionEnglish: "What do you do?",
      vocab: [
        { text: "Soy médico/a", translation: "I am a doctor" },
        { text: "Trabajo como", translation: "I work as" },
        { text: "¿A qué te dedicas?", translation: "What do you do?" },
        { text: "enfermero/a", translation: "nurse" },
      ],
      copyWord: "Trabajo como",
      copySentence: "Soy médico. Trabajo en un hospital.",
      circleQuestion: {
        question: "'¿A qué te dedicas?' means:",
        choices: [
          "What do you do?",
          "Where do you live?",
          "How old are you?",
          "What is your name?",
        ],
        correct: 0,
      },
      writePrompt: "¿A qué te dedicas? Write your answer.",
      exampleAnswer: "Soy [job]. Trabajo en [place].",
    },
    {
      id: "family",
      phase: 1,
      topic: "Your Family",
      question: "¿Cómo es tu familia?",
      questionEnglish: "Tell me about your family.",
      vocab: [
        { text: "Estoy casado/a", translation: "I am married" },
        { text: "Tengo dos hijos", translation: "I have two children" },
        { text: "hijo / hija", translation: "son / daughter" },
        { text: "hermano / hermana", translation: "brother / sister" },
      ],
      copyWord: "Estoy casado",
      copySentence: "Estoy casado y tengo dos hijos.",
      circleQuestion: {
        question: "Which means 'I have children'?",
        choices: ["Tengo hijos", "Soy hijo", "Estoy hijo", "Me gusta hijo"],
        correct: 0,
      },
      writePrompt: "¿Cómo es tu familia? Write your answer.",
      exampleAnswer: "Estoy casado/a y tengo ___ hijos.",
    },
    {
      id: "hobbies",
      phase: 1,
      topic: "Your Hobbies",
      question: "¿Qué te gusta hacer?",
      questionEnglish: "What do you like to do?",
      vocab: [
        { text: "Me gusta", translation: "I like" },
        { text: "Me encanta", translation: "I love" },
        { text: "jugar al golf", translation: "play golf" },
        { text: "leer", translation: "to read" },
      ],
      copyWord: "Me gusta",
      copySentence: "Me gusta leer y jugar al golf.",
      circleQuestion: {
        question: "Which means 'I like'?",
        choices: ["Me gusta", "Me llamo", "Tengo", "Soy de"],
        correct: 0,
      },
      writePrompt: "¿Qué te gusta hacer? Write your answer.",
      exampleAnswer: "Me gusta [hobby] y [hobby].",
    },
    {
      id: "why",
      phase: 1,
      topic: "Why You're Learning",
      question: "¿Por qué estudias español?",
      questionEnglish: "Why are you studying Spanish?",
      vocab: [
        { text: "Estudio español", translation: "I study Spanish" },
        { text: "porque", translation: "because" },
        { text: "quiero hablar", translation: "I want to speak" },
        { text: "mis pacientes", translation: "my patients" },
      ],
      copyWord: "porque",
      copySentence: "Estudio español porque quiero ayudar a mis pacientes.",
      circleQuestion: {
        question: "'porque' means:",
        choices: ["because", "with", "and", "but"],
        correct: 0,
      },
      writePrompt: "¿Por qué estudias español? Write your answer.",
      exampleAnswer: "Estudio español porque [reason].",
    },
    // ── Phase 2: Your World ─────────────────────────────────────
    {
      id: "workday",
      phase: 2,
      topic: "A Typical Day at Work",
      question: "¿Cómo es un día típico en tu trabajo?",
      questionEnglish: "What is a typical day at work like?",
      vocab: [
        { text: "mi turno", translation: "my shift" },
        { text: "empiezo a las", translation: "I start at" },
        { text: "termino a las", translation: "I finish at" },
        { text: "los pacientes", translation: "the patients" },
      ],
      copyWord: "mi turno",
      copySentence: "Empiezo mi turno a las siete. Termino a las tres.",
      circleQuestion: {
        question: "Which means 'my shift'?",
        choices: ["mi turno", "mi trabajo", "mi casa", "mi tiempo"],
        correct: 0,
      },
      writePrompt: "Describe un día típico de trabajo.",
      exampleAnswer: "Empiezo a las ___. Trabajo con ___ pacientes.",
    },
    {
      id: "instructions",
      phase: 2,
      topic: "Giving Instructions",
      question: "¿Cómo le explicas un procedimiento a alguien?",
      questionEnglish: "How do you explain a procedure to someone?",
      vocab: [
        { text: "primero", translation: "first" },
        { text: "luego", translation: "then / next" },
        { text: "después", translation: "after that" },
        { text: "finalmente", translation: "finally" },
      ],
      copyWord: "primero... luego",
      copySentence: "Primero lava las manos. Luego ponte los guantes.",
      circleQuestion: {
        question: "Which word means 'then / next'?",
        choices: ["luego", "pero", "porque", "aunque"],
        correct: 0,
      },
      writePrompt: "Explica cómo haces algo en tu trabajo, paso a paso.",
      exampleAnswer: "Primero ___. Luego ___. Después ___.",
    },
    {
      id: "hobbyDetail",
      phase: 2,
      topic: "Your Hobby in Detail",
      question: "¿Cuánto tiempo llevas haciendo tu pasatiempo favorito?",
      questionEnglish: "How long have you been doing your favorite hobby?",
      vocab: [
        { text: "llevo ___ años", translation: "I have been doing it for ___ years" },
        { text: "el campo de golf", translation: "the golf course" },
        { text: "mi favorito es", translation: "my favorite is" },
        { text: "aprendí a", translation: "I learned to" },
      ],
      copyWord: "llevo jugando",
      copySentence: "Llevo jugando al golf diez años. Me encanta.",
      circleQuestion: {
        question: "'Llevo diez años jugando' means:",
        choices: [
          "I've been playing for 10 years",
          "I played 10 times",
          "I play 10 hours",
          "I started 10 days ago",
        ],
        correct: 0,
      },
      writePrompt: "Describe tu pasatiempo favorito con detalle.",
      exampleAnswer: "Me gusta [hobby]. Llevo [time] haciendo esto.",
    },
    {
      id: "directions",
      phase: 2,
      topic: "Giving Directions",
      question: "¿Cómo se llega a tu trabajo?",
      questionEnglish: "How do you get to your workplace?",
      vocab: [
        { text: "gira a la derecha", translation: "turn right" },
        { text: "gira a la izquierda", translation: "turn left" },
        { text: "sigue recto", translation: "go straight" },
        { text: "a dos cuadras", translation: "two blocks away" },
      ],
      copyWord: "sigue recto",
      copySentence: "Sigue recto dos cuadras, luego gira a la derecha.",
      circleQuestion: {
        question: "Which means 'turn right'?",
        choices: ["gira a la derecha", "gira a la izquierda", "sigue recto", "para aquí"],
        correct: 0,
      },
      writePrompt: "¿Cómo se llega a tu trabajo desde tu casa?",
      exampleAnswer: "Primero ___. Luego ___, después ___ a la derecha.",
    },
    {
      id: "problem",
      phase: 2,
      topic: "Explaining a Problem",
      question: "¿Cómo describes un problema?",
      questionEnglish: "How do you describe a problem?",
      vocab: [
        { text: "tengo un problema con", translation: "I have a problem with" },
        { text: "no funciona", translation: "it doesn't work" },
        { text: "desde ayer", translation: "since yesterday" },
        { text: "necesito ayuda", translation: "I need help" },
      ],
      copyWord: "no funciona",
      copySentence: "Tengo un problema con mi carro. No arranca desde ayer.",
      circleQuestion: {
        question: "Which means 'it doesn't work'?",
        choices: ["no funciona", "no tengo", "no sé", "no quiero"],
        correct: 0,
      },
      writePrompt: "Describe un problema que tuviste recientemente.",
      exampleAnswer: "Tuve un problema con ___. No ___. Necesité ___.",
    },
    {
      id: "memory",
      phase: 2,
      topic: "A Memorable Experience",
      question: "¿Cuál fue una experiencia memorable en tu trabajo?",
      questionEnglish: "What was a memorable experience at work?",
      vocab: [
        { text: "el año pasado", translation: "last year" },
        { text: "fue increíble", translation: "it was incredible" },
        { text: "nunca olvidaré", translation: "I'll never forget" },
        { text: "tuve la oportunidad", translation: "I had the opportunity" },
      ],
      copyWord: "nunca olvidaré",
      copySentence: "El año pasado fui a El Salvador. Fue increíble.",
      circleQuestion: {
        question: "'el año pasado' means:",
        choices: ["last year", "last month", "next year", "a long time ago"],
        correct: 0,
      },
      writePrompt: "Cuéntame una experiencia memorable de tu trabajo o viaje.",
      exampleAnswer: "El año pasado ___. Fue ___. Nunca olvidaré ___.",
    },
    {
      id: "recommend",
      phase: 2,
      topic: "Making a Recommendation",
      question: "¿Qué recomiendas para aprender un idioma?",
      questionEnglish: "What do you recommend for learning a language?",
      vocab: [
        { text: "te recomiendo", translation: "I recommend (to you)" },
        { text: "vale la pena", translation: "it's worth it" },
        { text: "deberías", translation: "you should" },
        { text: "lo mejor es", translation: "the best thing is" },
      ],
      copyWord: "te recomiendo",
      copySentence: "Te recomiendo aprender español. Vale la pena el esfuerzo.",
      circleQuestion: {
        question: "'Vale la pena' means:",
        choices: ["it's worth it", "it costs a lot", "it's easy", "it takes time"],
        correct: 0,
      },
      writePrompt: "¿Qué recomiendas para aprender un idioma?",
      exampleAnswer: "Te recomiendo ___. Vale la pena porque ___.",
    },
  ],
};

// ─── FRENCH ────────────────────────────────────────────────────────────────

const FRENCH: PenPalCurriculum = {
  penpalName: "Sophie",
  penpalCity: "Paris",
  greeting: "Bonjour Sophie ! Je m'appelle",
  topics: [
    // ── Phase 1 ──
    {
      id: "name",
      phase: 1,
      topic: "Your Name",
      question: "Comment vous appelez-vous ?",
      questionEnglish: "What is your name?",
      vocab: [
        { text: "Je m'appelle", translation: "My name is" },
        { text: "Comment vous appelez-vous ?", translation: "What is your name?" },
        { text: "Enchanté/e", translation: "Nice to meet you" },
        { text: "Ravi/e de vous connaître", translation: "Pleased to meet you" },
      ],
      copyWord: "Je m'appelle",
      copySentence: "Je m'appelle ___. Enchanté !",
      circleQuestion: {
        question: "Which means 'My name is'?",
        choices: ["Je m'appelle", "Je suis de", "J'aime", "J'ai"],
        correct: 0,
      },
      writePrompt: "Comment vous appelez-vous ? Write your answer.",
      exampleAnswer: "Je m'appelle [your name].",
    },
    {
      id: "from",
      phase: 1,
      topic: "Where You're From",
      question: "D'où venez-vous ?",
      questionEnglish: "Where are you from?",
      vocab: [
        { text: "Je viens de", translation: "I come from" },
        { text: "J'habite à", translation: "I live in" },
        { text: "les États-Unis", translation: "the United States" },
        { text: "D'où venez-vous ?", translation: "Where are you from?" },
      ],
      copyWord: "Je viens de",
      copySentence: "Je viens des États-Unis. J'habite à Idaho.",
      circleQuestion: {
        question: "Which means 'I live in'?",
        choices: ["J'habite à", "Je suis de", "Je viens de", "J'aime"],
        correct: 0,
      },
      writePrompt: "D'où venez-vous ? Write your answer.",
      exampleAnswer: "Je viens de [place]. J'habite à [city].",
    },
    {
      id: "job",
      phase: 1,
      topic: "Your Job",
      question: "Que faites-vous dans la vie ?",
      questionEnglish: "What do you do for a living?",
      vocab: [
        { text: "Je suis médecin", translation: "I am a doctor" },
        { text: "Je travaille comme", translation: "I work as" },
        { text: "Que faites-vous ?", translation: "What do you do?" },
        { text: "infirmier/infirmière", translation: "nurse" },
      ],
      copyWord: "Je suis médecin",
      copySentence: "Je suis médecin. Je travaille dans un hôpital.",
      circleQuestion: {
        question: "'Que faites-vous ?' means:",
        choices: [
          "What do you do?",
          "Where do you live?",
          "How old are you?",
          "What is your name?",
        ],
        correct: 0,
      },
      writePrompt: "Que faites-vous dans la vie ? Write your answer.",
      exampleAnswer: "Je suis [job]. Je travaille à [place].",
    },
    {
      id: "hobbies",
      phase: 1,
      topic: "Your Hobbies",
      question: "Qu'est-ce que vous aimez faire ?",
      questionEnglish: "What do you like to do?",
      vocab: [
        { text: "J'aime", translation: "I like / I love" },
        { text: "lire", translation: "to read" },
        { text: "jouer au golf", translation: "play golf" },
        { text: "voyager", translation: "to travel" },
      ],
      copyWord: "J'aime",
      copySentence: "J'aime lire et voyager.",
      circleQuestion: {
        question: "Which means 'I like / I love'?",
        choices: ["J'aime", "Je suis", "J'ai", "Je viens"],
        correct: 0,
      },
      writePrompt: "Qu'est-ce que vous aimez faire ? Write your answer.",
      exampleAnswer: "J'aime [hobby] et [hobby].",
    },
    {
      id: "why",
      phase: 1,
      topic: "Why You're Learning",
      question: "Pourquoi apprenez-vous le français ?",
      questionEnglish: "Why are you learning French?",
      vocab: [
        { text: "J'apprends le français", translation: "I am learning French" },
        { text: "parce que", translation: "because" },
        { text: "je veux parler", translation: "I want to speak" },
        { text: "mes patients", translation: "my patients" },
      ],
      copyWord: "parce que",
      copySentence: "J'apprends le français parce que j'aime la culture.",
      circleQuestion: {
        question: "'parce que' means:",
        choices: ["because", "with", "and", "but"],
        correct: 0,
      },
      writePrompt: "Pourquoi apprenez-vous le français ? Write your answer.",
      exampleAnswer: "J'apprends le français parce que [reason].",
    },
    // ── Phase 2 ──
    {
      id: "workday",
      phase: 2,
      topic: "Une journée typique",
      question: "Comment se passe une journée typique au travail ?",
      questionEnglish: "What does a typical workday look like?",
      vocab: [
        { text: "je commence à", translation: "I start at" },
        { text: "mon service", translation: "my shift" },
        { text: "je termine à", translation: "I finish at" },
        { text: "mes patients", translation: "my patients" },
      ],
      copyWord: "mon service",
      copySentence: "Je commence mon service à sept heures. Je termine à quinze heures.",
      circleQuestion: {
        question: "Which means 'my shift'?",
        choices: ["mon service", "mon travail", "ma maison", "mon temps"],
        correct: 0,
      },
      writePrompt: "Décrivez une journée typique dans votre travail.",
      exampleAnswer: "Je commence à ___. Je travaille avec ___ patients.",
    },
    {
      id: "instructions",
      phase: 2,
      topic: "Donner des instructions",
      question: "Comment expliquez-vous une procédure étape par étape ?",
      questionEnglish: "How do you explain a procedure step by step?",
      vocab: [
        { text: "d'abord", translation: "first" },
        { text: "ensuite", translation: "then / next" },
        { text: "après", translation: "after that" },
        { text: "enfin", translation: "finally" },
      ],
      copyWord: "d'abord... ensuite",
      copySentence: "D'abord, lavez les mains. Ensuite, mettez les gants.",
      circleQuestion: {
        question: "Which means 'then / next'?",
        choices: ["ensuite", "mais", "parce que", "même si"],
        correct: 0,
      },
      writePrompt: "Expliquez comment vous faites quelque chose dans votre travail.",
      exampleAnswer: "D'abord ___. Ensuite ___. Enfin ___.",
    },
  ],
};

// ─── JAPANESE ──────────────────────────────────────────────────────────────

const JAPANESE: PenPalCurriculum = {
  penpalName: "ゆき (Yuki)",
  penpalCity: "Osaka",
  greeting: "はじめまして。わたしは",
  topics: [
    // ── Phase 1 ──
    {
      id: "name",
      phase: 1,
      topic: "Your Name",
      question: "おなまえは？",
      questionEnglish: "What is your name?",
      vocab: [
        { text: "わたしは〜です", translation: "I am ~", pronunciation: "watashi wa ~ desu" },
        { text: "はじめまして", translation: "Nice to meet you", pronunciation: "hajimemashite" },
        { text: "よろしく", translation: "Pleased to meet you", pronunciation: "yoroshiku" },
        { text: "なまえ", translation: "name", pronunciation: "namae" },
      ],
      copyWord: "はじめまして",
      copySentence: "はじめまして。わたしは＿＿です。",
      circleQuestion: {
        question: "Which means 'Nice to meet you'?",
        choices: ["はじめまして", "ありがとう", "すみません", "さようなら"],
        correct: 0,
      },
      writePrompt: "おなまえは？ Write your answer in Japanese.",
      exampleAnswer: "わたしは〜です。",
    },
    {
      id: "job",
      phase: 1,
      topic: "Your Job",
      question: "おしごとは？",
      questionEnglish: "What is your job?",
      vocab: [
        { text: "いしゃ", translation: "doctor", pronunciation: "isha" },
        { text: "しごと", translation: "work / job", pronunciation: "shigoto" },
        { text: "〜として", translation: "as a ~", pronunciation: "~ to shite" },
        { text: "びょういん", translation: "hospital", pronunciation: "byouin" },
      ],
      copyWord: "いしゃです",
      copySentence: "わたしはいしゃです。びょういんではたらいています。",
      circleQuestion: {
        question: "Which means 'doctor'?",
        choices: ["いしゃ", "びょういん", "しごと", "がっこう"],
        correct: 0,
      },
      writePrompt: "おしごとは？ Write your answer.",
      exampleAnswer: "わたしは〜です。",
    },
    {
      id: "hobbies",
      phase: 1,
      topic: "Your Hobbies",
      question: "しゅみはなんですか？",
      questionEnglish: "What are your hobbies?",
      vocab: [
        { text: "すきです", translation: "I like", pronunciation: "suki desu" },
        { text: "しゅみは", translation: "my hobby is", pronunciation: "shumi wa" },
        { text: "よむこと", translation: "reading", pronunciation: "yomu koto" },
        { text: "ゴルフ", translation: "golf", pronunciation: "gorufu" },
      ],
      copyWord: "すきです",
      copySentence: "ほんをよむことがすきです。",
      circleQuestion: {
        question: "Which means 'I like'?",
        choices: ["すきです", "きらいです", "わかりません", "あります"],
        correct: 0,
      },
      writePrompt: "しゅみはなんですか？ Write your answer.",
      exampleAnswer: "〜がすきです。",
    },
    {
      id: "why",
      phase: 1,
      topic: "Why You're Learning",
      question: "なぜにほんごをべんきょうしていますか？",
      questionEnglish: "Why are you studying Japanese?",
      vocab: [
        {
          text: "にほんごをべんきょうしています",
          translation: "I study Japanese",
          pronunciation: "nihongo wo benkyou shiteimasu",
        },
        { text: "なぜなら", translation: "because", pronunciation: "nazenara" },
        { text: "はなしたい", translation: "I want to speak", pronunciation: "hanashitai" },
        { text: "にほん", translation: "Japan", pronunciation: "nihon" },
      ],
      copyWord: "なぜなら",
      copySentence: "にほんにいったから、にほんごをべんきょうしています。",
      circleQuestion: {
        question: "Which means 'because'?",
        choices: ["なぜなら", "そして", "でも", "また"],
        correct: 0,
      },
      writePrompt: "なぜにほんごをべんきょうしていますか？ Write your answer.",
      exampleAnswer: "〜から、にほんごをべんきょうしています。",
    },
    // ── Phase 2 ──
    {
      id: "workday",
      phase: 2,
      topic: "仕事の一日",
      question: "ふだんのしごとのいちにちをおしえてください。",
      questionEnglish: "Tell me about a typical day at work.",
      vocab: [
        {
          text: "〜じにはじまります",
          translation: "starts at ~ o'clock",
          pronunciation: "~ ji ni hajimarimasu",
        },
        { text: "きんむ", translation: "shift / duty", pronunciation: "kinmu" },
        { text: "かんじゃ", translation: "patient", pronunciation: "kanja" },
        { text: "おわります", translation: "finishes / ends", pronunciation: "owarimasu" },
      ],
      copyWord: "きんむがあります",
      copySentence: "まいにち、しちじにきんむがはじまります。",
      circleQuestion: {
        question: "Which means 'patient'?",
        choices: ["かんじゃ", "いしゃ", "びょういん", "くすり"],
        correct: 0,
      },
      writePrompt: "ふだんのしごとのいちにちをせつめいしてください。",
      exampleAnswer: "〜じにはじまります。〜にんのかんじゃをみます。",
    },
    {
      id: "instructions",
      phase: 2,
      topic: "手順を説明する",
      question: "てじゅんをどうせつめいしますか？",
      questionEnglish: "How do you explain a procedure step by step?",
      vocab: [
        { text: "まず", translation: "first", pronunciation: "mazu" },
        { text: "つぎに", translation: "next", pronunciation: "tsugini" },
        { text: "それから", translation: "after that", pronunciation: "sorekara" },
        { text: "さいごに", translation: "finally", pronunciation: "saigoni" },
      ],
      copyWord: "まず〜つぎに",
      copySentence: "まず、てをあらいます。つぎに、てぶくろをつけます。",
      circleQuestion: {
        question: "Which means 'next'?",
        choices: ["つぎに", "でも", "だから", "もし"],
        correct: 0,
      },
      writePrompt: "しごとのてじゅんをステップごとにせつめいしてください。",
      exampleAnswer: "まず___。つぎに___。さいごに___。",
    },
  ],
};

// ─── KOREAN ────────────────────────────────────────────────────────────────

const KOREAN: PenPalCurriculum = {
  penpalName: "지연 (Ji-yeon)",
  penpalCity: "Seoul",
  greeting: "안녕하세요! 저는",
  topics: [
    // ── Phase 1 ──
    {
      id: "name",
      phase: 1,
      topic: "Your Name",
      question: "이름이 뭐예요?",
      questionEnglish: "What is your name?",
      vocab: [
        { text: "저는 ~입니다", translation: "I am ~", pronunciation: "jeoneun ~ imnida" },
        {
          text: "만나서 반갑습니다",
          translation: "Nice to meet you",
          pronunciation: "mannaseo bangapseumnida",
        },
        { text: "이름", translation: "name", pronunciation: "ireum" },
        { text: "안녕하세요", translation: "Hello", pronunciation: "annyeonghaseyo" },
      ],
      copyWord: "안녕하세요",
      copySentence: "안녕하세요. 저는 ___ 입니다.",
      circleQuestion: {
        question: "Which means 'Nice to meet you'?",
        choices: ["만나서 반갑습니다", "감사합니다", "죄송합니다", "안녕히 가세요"],
        correct: 0,
      },
      writePrompt: "이름이 뭐예요? Write your answer.",
      exampleAnswer: "저는 [name] 입니다.",
    },
    {
      id: "job",
      phase: 1,
      topic: "Your Job",
      question: "직업이 뭐예요?",
      questionEnglish: "What is your job?",
      vocab: [
        { text: "의사", translation: "doctor", pronunciation: "uisa" },
        { text: "직업", translation: "job / occupation", pronunciation: "jigeop" },
        { text: "병원", translation: "hospital", pronunciation: "byeongwon" },
        { text: "일해요", translation: "I work", pronunciation: "ilhaeyo" },
      ],
      copyWord: "의사예요",
      copySentence: "저는 의사예요. 병원에서 일해요.",
      circleQuestion: {
        question: "Which means 'doctor'?",
        choices: ["의사", "병원", "직업", "학교"],
        correct: 0,
      },
      writePrompt: "직업이 뭐예요? Write your answer.",
      exampleAnswer: "저는 [job] 예요/이에요.",
    },
    {
      id: "hobbies",
      phase: 1,
      topic: "Your Hobbies",
      question: "취미가 뭐예요?",
      questionEnglish: "What are your hobbies?",
      vocab: [
        { text: "좋아해요", translation: "I like", pronunciation: "joahaeyo" },
        { text: "취미", translation: "hobby", pronunciation: "chwimi" },
        { text: "읽기", translation: "reading", pronunciation: "ikgi" },
        { text: "골프", translation: "golf", pronunciation: "golpeu" },
      ],
      copyWord: "좋아해요",
      copySentence: "책 읽기를 좋아해요.",
      circleQuestion: {
        question: "Which means 'I like'?",
        choices: ["좋아해요", "싫어해요", "몰라요", "있어요"],
        correct: 0,
      },
      writePrompt: "취미가 뭐예요? Write your answer.",
      exampleAnswer: "[hobby] 를/을 좋아해요.",
    },
    // ── Phase 2 ──
    {
      id: "workday",
      phase: 2,
      topic: "직장에서의 하루",
      question: "직장에서 보통 하루가 어때요?",
      questionEnglish: "What is a typical day at work like?",
      vocab: [
        { text: "근무", translation: "shift / duty", pronunciation: "geunmu" },
        { text: "시작해요", translation: "I start", pronunciation: "sijakaeyo" },
        { text: "환자", translation: "patient", pronunciation: "hwanja" },
        { text: "끝나요", translation: "it ends", pronunciation: "kkeunnayo" },
      ],
      copyWord: "근무가 시작해요",
      copySentence: "저는 오전 7시에 근무가 시작해요.",
      circleQuestion: {
        question: "Which means 'patient'?",
        choices: ["환자", "의사", "병원", "약"],
        correct: 0,
      },
      writePrompt: "직장에서 보통 하루를 설명해 주세요.",
      exampleAnswer: "___ 시에 시작해요. 환자 ___ 명을 봐요.",
    },
    {
      id: "instructions",
      phase: 2,
      topic: "지시 내리기",
      question: "절차를 단계별로 어떻게 설명해요?",
      questionEnglish: "How do you explain a procedure step by step?",
      vocab: [
        { text: "먼저", translation: "first", pronunciation: "meonjeo" },
        { text: "그 다음에", translation: "next / then", pronunciation: "geu daeume" },
        { text: "그리고 나서", translation: "after that", pronunciation: "geurigo naseo" },
        { text: "마지막으로", translation: "finally", pronunciation: "majimageuro" },
      ],
      copyWord: "먼저... 그 다음에",
      copySentence: "먼저 손을 씻어요. 그 다음에 장갑을 껴요.",
      circleQuestion: {
        question: "Which means 'next / then'?",
        choices: ["그 다음에", "하지만", "왜냐하면", "만약"],
        correct: 0,
      },
      writePrompt: "직장에서 하는 일을 단계별로 설명해 주세요.",
      exampleAnswer: "먼저 ___. 그 다음에 ___. 마지막으로 ___.",
    },
  ],
};

// ─── GERMAN ────────────────────────────────────────────────────────────────

const GERMAN: PenPalCurriculum = {
  penpalName: "Lukas",
  penpalCity: "Berlin",
  greeting: "Hallo Lukas! Ich heiße",
  topics: [
    // ── Phase 1 ──
    {
      id: "name",
      phase: 1,
      topic: "Your Name",
      question: "Wie heißen Sie?",
      questionEnglish: "What is your name?",
      vocab: [
        { text: "Ich heiße", translation: "My name is" },
        { text: "Wie heißen Sie?", translation: "What is your name?" },
        { text: "Freut mich", translation: "Nice to meet you" },
        { text: "Ich bin", translation: "I am" },
      ],
      copyWord: "Ich heiße",
      copySentence: "Ich heiße ___. Freut mich!",
      circleQuestion: {
        question: "Which means 'My name is'?",
        choices: ["Ich heiße", "Ich bin aus", "Ich mag", "Ich habe"],
        correct: 0,
      },
      writePrompt: "Wie heißen Sie? Write your answer.",
      exampleAnswer: "Ich heiße [your name].",
    },
    {
      id: "job",
      phase: 1,
      topic: "Your Job",
      question: "Was machen Sie beruflich?",
      questionEnglish: "What do you do for a living?",
      vocab: [
        { text: "Ich bin Arzt/Ärztin", translation: "I am a doctor" },
        { text: "Ich arbeite als", translation: "I work as" },
        { text: "Was machen Sie?", translation: "What do you do?" },
        { text: "Krankenhaus", translation: "hospital" },
      ],
      copyWord: "Ich arbeite als",
      copySentence: "Ich bin Arzt. Ich arbeite in einem Krankenhaus.",
      circleQuestion: {
        question: "Which means 'hospital'?",
        choices: ["Krankenhaus", "Schule", "Büro", "Geschäft"],
        correct: 0,
      },
      writePrompt: "Was machen Sie beruflich? Write your answer.",
      exampleAnswer: "Ich bin [job]. Ich arbeite in [place].",
    },
    {
      id: "hobbies",
      phase: 1,
      topic: "Your Hobbies",
      question: "Was sind Ihre Hobbys?",
      questionEnglish: "What are your hobbies?",
      vocab: [
        { text: "Ich mag", translation: "I like" },
        { text: "Lesen", translation: "reading" },
        { text: "Golf spielen", translation: "play golf" },
        { text: "Reisen", translation: "traveling" },
      ],
      copyWord: "Ich mag",
      copySentence: "Ich mag Lesen und Golf spielen.",
      circleQuestion: {
        question: "Which means 'I like'?",
        choices: ["Ich mag", "Ich bin", "Ich habe", "Ich mache"],
        correct: 0,
      },
      writePrompt: "Was sind Ihre Hobbys? Write your answer.",
      exampleAnswer: "Ich mag [hobby] und [hobby].",
    },
    // ── Phase 2 ──
    {
      id: "workday",
      phase: 2,
      topic: "Ein typischer Arbeitstag",
      question: "Wie sieht ein typischer Arbeitstag bei Ihnen aus?",
      questionEnglish: "What does a typical workday look like for you?",
      vocab: [
        { text: "meine Schicht", translation: "my shift" },
        { text: "ich fange an um", translation: "I start at" },
        { text: "die Patienten", translation: "the patients" },
        { text: "ich höre auf um", translation: "I finish at" },
      ],
      copyWord: "meine Schicht",
      copySentence: "Ich fange meine Schicht um sieben Uhr an.",
      circleQuestion: {
        question: "Which means 'my shift'?",
        choices: ["meine Schicht", "meine Arbeit", "mein Haus", "meine Zeit"],
        correct: 0,
      },
      writePrompt: "Beschreiben Sie einen typischen Arbeitstag.",
      exampleAnswer: "Ich fange um ___ Uhr an. Ich sehe ___ Patienten.",
    },
    {
      id: "instructions",
      phase: 2,
      topic: "Anweisungen geben",
      question: "Wie erklären Sie ein Verfahren Schritt für Schritt?",
      questionEnglish: "How do you explain a procedure step by step?",
      vocab: [
        { text: "zuerst", translation: "first" },
        { text: "dann", translation: "then / next" },
        { text: "danach", translation: "after that" },
        { text: "schließlich", translation: "finally" },
      ],
      copyWord: "zuerst... dann",
      copySentence: "Zuerst waschen Sie die Hände. Dann ziehen Sie Handschuhe an.",
      circleQuestion: {
        question: "Which means 'then / next'?",
        choices: ["dann", "aber", "weil", "obwohl"],
        correct: 0,
      },
      writePrompt: "Erklären Sie Schritt für Schritt, wie Sie etwas bei der Arbeit tun.",
      exampleAnswer: "Zuerst ___. Dann ___. Schließlich ___.",
    },
  ],
};

// ─── PORTUGUESE ────────────────────────────────────────────────────────────

const PORTUGUESE: PenPalCurriculum = {
  penpalName: "Ana",
  penpalCity: "Lisbon",
  greeting: "Olá Ana! Meu nome é",
  topics: [
    // ── Phase 1 ──
    {
      id: "name",
      phase: 1,
      topic: "Your Name",
      question: "Como você se chama?",
      questionEnglish: "What is your name?",
      vocab: [
        { text: "Meu nome é", translation: "My name is" },
        { text: "Prazer em conhecer", translation: "Nice to meet you" },
        { text: "Como você se chama?", translation: "What is your name?" },
        { text: "Eu sou", translation: "I am" },
      ],
      copyWord: "Meu nome é",
      copySentence: "Meu nome é ___. Muito prazer!",
      circleQuestion: {
        question: "Which means 'My name is'?",
        choices: ["Meu nome é", "Eu gosto de", "Sou de", "Tenho"],
        correct: 0,
      },
      writePrompt: "Como você se chama? Write your answer.",
      exampleAnswer: "Meu nome é [your name].",
    },
    {
      id: "job",
      phase: 1,
      topic: "Your Job",
      question: "O que você faz?",
      questionEnglish: "What do you do?",
      vocab: [
        { text: "Sou médico/a", translation: "I am a doctor" },
        { text: "Trabalho como", translation: "I work as" },
        { text: "hospital", translation: "hospital" },
        { text: "O que você faz?", translation: "What do you do?" },
      ],
      copyWord: "Trabalho como",
      copySentence: "Sou médico. Trabalho em um hospital.",
      circleQuestion: {
        question: "'O que você faz?' means:",
        choices: ["What do you do?", "Where do you live?", "How old are you?", "What do you like?"],
        correct: 0,
      },
      writePrompt: "O que você faz? Write your answer.",
      exampleAnswer: "Sou [job]. Trabalho em [place].",
    },
    {
      id: "hobbies",
      phase: 1,
      topic: "Your Hobbies",
      question: "O que você gosta de fazer?",
      questionEnglish: "What do you like to do?",
      vocab: [
        { text: "Eu gosto de", translation: "I like" },
        { text: "ler", translation: "to read" },
        { text: "jogar golfe", translation: "play golf" },
        { text: "viajar", translation: "to travel" },
      ],
      copyWord: "Eu gosto de",
      copySentence: "Eu gosto de ler e viajar.",
      circleQuestion: {
        question: "Which means 'I like'?",
        choices: ["Eu gosto de", "Eu sou", "Eu tenho", "Eu vou"],
        correct: 0,
      },
      writePrompt: "O que você gosta de fazer? Write your answer.",
      exampleAnswer: "Eu gosto de [hobby] e [hobby].",
    },
    // ── Phase 2 ──
    {
      id: "workday",
      phase: 2,
      topic: "Um dia típico de trabalho",
      question: "Como é um dia típico no seu trabalho?",
      questionEnglish: "What is a typical workday like?",
      vocab: [
        { text: "meu turno", translation: "my shift" },
        { text: "começo às", translation: "I start at" },
        { text: "os pacientes", translation: "the patients" },
        { text: "termino às", translation: "I finish at" },
      ],
      copyWord: "meu turno",
      copySentence: "Começo meu turno às sete horas. Termino às três.",
      circleQuestion: {
        question: "Which means 'my shift'?",
        choices: ["meu turno", "meu trabalho", "minha casa", "meu tempo"],
        correct: 0,
      },
      writePrompt: "Descreva um dia típico no seu trabalho.",
      exampleAnswer: "Começo às ___. Atendo ___ pacientes por dia.",
    },
    {
      id: "instructions",
      phase: 2,
      topic: "Dar instruções",
      question: "Como você explica um procedimento passo a passo?",
      questionEnglish: "How do you explain a procedure step by step?",
      vocab: [
        { text: "primeiro", translation: "first" },
        { text: "depois", translation: "then / next" },
        { text: "em seguida", translation: "after that" },
        { text: "finalmente", translation: "finally" },
      ],
      copyWord: "primeiro... depois",
      copySentence: "Primeiro lave as mãos. Depois coloque as luvas.",
      circleQuestion: {
        question: "Which means 'then / next'?",
        choices: ["depois", "mas", "porque", "embora"],
        correct: 0,
      },
      writePrompt: "Explique como você faz algo no trabalho, passo a passo.",
      exampleAnswer: "Primeiro ___. Depois ___. Finalmente ___.",
    },
  ],
};

// ─── ITALIAN ───────────────────────────────────────────────────────────────

const ITALIAN: PenPalCurriculum = {
  penpalName: "Marco",
  penpalCity: "Rome",
  greeting: "Ciao Marco! Mi chiamo",
  topics: [
    // ── Phase 1 ──
    {
      id: "name",
      phase: 1,
      topic: "Your Name",
      question: "Come si chiama?",
      questionEnglish: "What is your name?",
      vocab: [
        { text: "Mi chiamo", translation: "My name is" },
        { text: "Piacere di conoscerti", translation: "Nice to meet you" },
        { text: "Sono", translation: "I am" },
        { text: "Come si chiama?", translation: "What is your name?" },
      ],
      copyWord: "Mi chiamo",
      copySentence: "Mi chiamo ___. Piacere!",
      circleQuestion: {
        question: "Which means 'My name is'?",
        choices: ["Mi chiamo", "Mi piace", "Sono di", "Ho"],
        correct: 0,
      },
      writePrompt: "Come si chiama? Write your answer.",
      exampleAnswer: "Mi chiamo [your name].",
    },
    {
      id: "hobbies",
      phase: 1,
      topic: "Your Hobbies",
      question: "Cosa le piace fare?",
      questionEnglish: "What do you like to do?",
      vocab: [
        { text: "Mi piace", translation: "I like" },
        { text: "leggere", translation: "to read" },
        { text: "giocare a golf", translation: "play golf" },
        { text: "viaggiare", translation: "to travel" },
      ],
      copyWord: "Mi piace",
      copySentence: "Mi piace leggere e viaggiare.",
      circleQuestion: {
        question: "Which means 'I like'?",
        choices: ["Mi piace", "Mi chiamo", "Ho", "Sono"],
        correct: 0,
      },
      writePrompt: "Cosa le piace fare? Write your answer.",
      exampleAnswer: "Mi piace [hobby] e [hobby].",
    },
    // ── Phase 2 ──
    {
      id: "workday",
      phase: 2,
      topic: "Una giornata tipica",
      question: "Com'è una giornata tipica al lavoro?",
      questionEnglish: "What is a typical workday like?",
      vocab: [
        { text: "il mio turno", translation: "my shift" },
        { text: "comincio alle", translation: "I start at" },
        { text: "i pazienti", translation: "the patients" },
        { text: "finisco alle", translation: "I finish at" },
      ],
      copyWord: "il mio turno",
      copySentence: "Comincio il mio turno alle sette. Finisco alle tre.",
      circleQuestion: {
        question: "Which means 'my shift'?",
        choices: ["il mio turno", "il mio lavoro", "la mia casa", "il mio tempo"],
        correct: 0,
      },
      writePrompt: "Descrivi una giornata tipica al lavoro.",
      exampleAnswer: "Comincio alle ___. Vedo ___ pazienti al giorno.",
    },
    {
      id: "instructions",
      phase: 2,
      topic: "Dare istruzioni",
      question: "Come spiega una procedura passo per passo?",
      questionEnglish: "How do you explain a procedure step by step?",
      vocab: [
        { text: "prima", translation: "first" },
        { text: "poi", translation: "then / next" },
        { text: "dopo", translation: "after that" },
        { text: "infine", translation: "finally" },
      ],
      copyWord: "prima... poi",
      copySentence: "Prima lavati le mani. Poi indossa i guanti.",
      circleQuestion: {
        question: "Which means 'then / next'?",
        choices: ["poi", "ma", "perché", "anche se"],
        correct: 0,
      },
      writePrompt: "Spiega come fai qualcosa al lavoro, passo per passo.",
      exampleAnswer: "Prima ___. Poi ___. Infine ___.",
    },
  ],
};

// ─── ENGLISH ───────────────────────────────────────────────────────────────

const ENGLISH: PenPalCurriculum = {
  penpalName: "James",
  penpalCity: "London",
  greeting: "Hello James! My name is",
  topics: [
    // ── Phase 1 ──
    {
      id: "name",
      phase: 1,
      topic: "Your Name",
      question: "What is your name?",
      questionEnglish: "What is your name?",
      vocab: [
        { text: "My name is", translation: "Mi nombre es / 私の名前は" },
        { text: "Nice to meet you", translation: "Mucho gusto / よろしく" },
        { text: "I am from", translation: "Soy de / 〜出身です" },
        { text: "I work as", translation: "Trabajo como / 〜として働いています" },
      ],
      copyWord: "My name is",
      copySentence: "My name is ___. Nice to meet you!",
      circleQuestion: {
        question: "Which is a formal greeting in English?",
        choices: ["Nice to meet you", "What's up", "Hey", "Yo"],
        correct: 0,
      },
      writePrompt: "What is your name? Write your answer.",
      exampleAnswer: "My name is [your name]. I am from [place].",
    },
    {
      id: "job",
      phase: 1,
      topic: "Your Job",
      question: "What do you do for a living?",
      questionEnglish: "What do you do for a living?",
      vocab: [
        { text: "I am a doctor", translation: "Soy médico / 医者です" },
        { text: "I work at", translation: "Trabajo en / 〜で働いています" },
        { text: "What do you do?", translation: "¿A qué te dedicas? / 仕事は何ですか？" },
        { text: "I specialize in", translation: "Me especializo en / 専門は〜です" },
      ],
      copyWord: "I am a doctor",
      copySentence: "I am a doctor. I work at a hospital.",
      circleQuestion: {
        question: "Which is most professional?",
        choices: ["I am an orthopedic surgeon", "I do bones", "I fix people", "I'm in medicine"],
        correct: 0,
      },
      writePrompt: "What do you do for a living? Write your answer.",
      exampleAnswer: "I am a [job]. I work at [place].",
    },
    // ── Phase 2 ──
    {
      id: "workday",
      phase: 2,
      topic: "A Typical Workday",
      question: "What does a typical day at work look like for you?",
      questionEnglish: "What does a typical day at work look like for you?",
      vocab: [
        { text: "my shift", translation: "mi turno / 勤務" },
        { text: "I start at", translation: "Empiezo a las / 〜時に始まります" },
        { text: "my patients", translation: "mis pacientes / 患者さん" },
        { text: "I round on", translation: "Paso visita / 回診する" },
      ],
      copyWord: "my shift starts",
      copySentence: "My shift starts at seven. I round on twenty patients.",
      circleQuestion: {
        question: "Which phrase is most natural in a medical context?",
        choices: ["I round on patients", "I visit patients", "I check patients", "I see patients"],
        correct: 0,
      },
      writePrompt: "Describe a typical day at work. What do you do, and when?",
      exampleAnswer: "My shift starts at ___. I usually ___. By ___ I have ___.",
    },
    {
      id: "instructions",
      phase: 2,
      topic: "Giving Instructions",
      question: "How do you explain a procedure step by step?",
      questionEnglish: "How do you explain a procedure step by step?",
      vocab: [
        { text: "first", translation: "primero / まず" },
        { text: "next", translation: "luego / つぎに" },
        { text: "make sure to", translation: "asegúrate de / 必ず〜してください" },
        { text: "finally", translation: "finalmente / 最後に" },
      ],
      copyWord: "first... next",
      copySentence: "First, wash your hands. Next, put on gloves.",
      circleQuestion: {
        question: "Which transition word introduces the last step?",
        choices: ["finally", "first", "next", "because"],
        correct: 0,
      },
      writePrompt: "Explain how to do something at your job, step by step.",
      exampleAnswer: "First, ___. Next, ___. Make sure to ___. Finally, ___.",
    },
  ],
};

// ─── Export ─────────────────────────────────────────────────────────────────

export const PENPAL_CURRICULA: Partial<Record<Language, PenPalCurriculum>> = {
  Spanish: SPANISH,
  French: FRENCH,
  Japanese: JAPANESE,
  Korean: KOREAN,
  German: GERMAN,
  Portuguese: PORTUGUESE,
  Italian: ITALIAN,
  English: ENGLISH,
};
