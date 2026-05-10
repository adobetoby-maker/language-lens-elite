// Rich, multi-section content for the five Preach My Gospel discussions.
// Source: Preach My Gospel: A Guide to Missionary Service (2023 edition),
// published by The Church of Jesus Christ of Latter-day Saints — freely
// available at churchofjesuschrist.org and in the Gospel Library app.
// Wording is paraphrased for in-app parallel-reading and quiz format.

import type { Language } from "@/state/app-state";

export interface ReflectionPrompt {
  id: string;
  prompt: string; // Inline question to think about / try teaching
}

export interface QuizQuestion {
  id: string;
  q: string;
  choices: string[];
  answerIndex: number;
  explanation: string;
}

export interface LessonParagraph {
  id: string;
  /** English source text */
  en: string;
  /** Optional pre-translated target text per language. Falls back to `en`. */
  i18n?: Partial<Record<Language, string>>;
  /** Optional reflection prompt shown inline beneath this paragraph. */
  reflection?: ReflectionPrompt;
}

export interface LessonSection {
  id: string;
  title: string;
  /** One-line "what missionaries should help investigators understand". */
  blurb: string;
  paragraphs: LessonParagraph[];
  quiz: QuizQuestion[];
}

export interface PmgLesson {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  emoji: string;
  sections: LessonSection[];
}

// Helper — a paragraph that only has an English source.
const en = (id: string, text: string, reflection?: ReflectionPrompt): LessonParagraph => ({
  id,
  en: text,
  reflection,
});

export const PMG_LESSONS: PmgLesson[] = [
  // ─────────────────────────── LESSON 1 ───────────────────────────
  {
    id: "restoration",
    number: 1,
    title: "The Message of the Restoration",
    subtitle: "Through the Prophet Joseph Smith, the gospel has been restored.",
    emoji: "📖",
    sections: [
      {
        id: "godhead",
        title: "God is our loving Heavenly Father",
        blurb: "We are literally His children and He hears every prayer.",
        paragraphs: [
          {
            id: "p1",
            en: "God is our Heavenly Father. We are His children. He has a body of flesh and bones, and He knows each of us by name.",
            i18n: {
              Spanish: "Dios es nuestro Padre Celestial. Nosotros somos Sus hijos. Él tiene un cuerpo de carne y huesos, y nos conoce a cada uno por nombre.",
              Portuguese: "Deus é nosso Pai Celestial. Nós somos Seus filhos. Ele tem um corpo de carne e ossos, e nos conhece a cada um pelo nome.",
              French: "Dieu est notre Père céleste. Nous sommes ses enfants. Il a un corps de chair et d’os, et il nous connaît chacun par notre nom.",
              German: "Gott ist unser Vater im Himmel. Wir sind seine Kinder. Er hat einen Körper aus Fleisch und Gebein und kennt jeden von uns mit Namen.",
              Italian: "Dio è il nostro Padre Celeste. Noi siamo i Suoi figli. Egli ha un corpo di carne e ossa e ci conosce ciascuno per nome.",
            },
            reflection: { id: "r1", prompt: "How would you describe God to someone who has never thought about Him?" },
          },
          {
            id: "p2",
            en: "Because He loves us, He has given us commandments and a plan to bring us back to Him.",
            i18n: {
              Spanish: "Porque nos ama, nos ha dado mandamientos y un plan para hacernos volver a Él.",
              Portuguese: "Porque Ele nos ama, deu-nos mandamentos e um plano para nos trazer de volta a Ele.",
              French: "Parce qu’il nous aime, il nous a donné des commandements et un plan pour nous ramener à lui.",
              German: "Weil er uns liebt, hat er uns Gebote und einen Plan gegeben, der uns zu ihm zurückführen soll.",
              Italian: "Poiché ci ama, ci ha dato dei comandamenti e un piano per riportarci a Lui.",
            },
          },
        ],
        quiz: [
          {
            id: "q1",
            q: "What kind of body does Heavenly Father have?",
            choices: ["A spirit only", "A body of flesh and bones", "He has no form"],
            answerIndex: 1,
            explanation: "D&C 130:22 — The Father has a body of flesh and bones as tangible as man's.",
          },
        ],
      },
      {
        id: "first-vision",
        title: "Joseph Smith and the First Vision",
        blurb: "In 1820, God the Father and Jesus Christ appeared to a 14-year-old boy.",
        paragraphs: [
          {
            id: "p1",
            en: "In the spring of 1820, a young man named Joseph Smith went into a grove of trees to pray. He wanted to know which church to join.",
            i18n: {
              Spanish: "En la primavera de 1820, un joven llamado José Smith se arrodilló en una arboleda para orar. Deseaba saber a qué iglesia debía unirse.",
              Portuguese: "Na primavera de 1820, um jovem chamado Joseph Smith ajoelhou-se em um bosque para orar. Ele queria saber a qual igreja deveria se filiar.",
              French: "Au printemps 1820, un jeune homme du nom de Joseph Smith est entré dans un bosquet pour prier. Il voulait savoir à quelle Église se joindre.",
              German: "Im Frühjahr 1820 ging ein junger Mann namens Joseph Smith in einen Hain, um zu beten. Er wollte wissen, welcher Kirche er sich anschließen sollte.",
              Italian: "Nella primavera del 1820, un giovane di nome Joseph Smith entrò in un bosco per pregare. Voleva sapere a quale chiesa unirsi.",
            },
            reflection: { id: "r1", prompt: "Have you ever knelt down and asked God a sincere question? What happened?" },
          },
          {
            id: "p2",
            en: "God the Father and His Son Jesus Christ appeared to him in a glorious vision and called him to be a prophet.",
            i18n: {
              Spanish: "Dios el Padre y Su Hijo Jesucristo se le aparecieron en una gloriosa visión y lo llamaron a ser profeta.",
              Portuguese: "Deus, o Pai, e Seu Filho Jesus Cristo apareceram a ele em uma visão gloriosa e o chamaram para ser profeta.",
              French: "Dieu le Père et son Fils Jésus-Christ lui sont apparus dans une vision glorieuse et l’ont appelé à être prophète.",
              German: "Gott der Vater und sein Sohn Jesus Christus erschienen ihm in einer herrlichen Vision und beriefen ihn zum Propheten.",
              Italian: "Dio Padre e Suo Figlio Gesù Cristo gli apparvero in una visione gloriosa e lo chiamarono a essere un profeta.",
            },
          },
          en("p3", "Through Joseph Smith, the Lord restored the fulness of the gospel and the priesthood authority to act in His name."),
        ],
        quiz: [
          {
            id: "q1",
            q: "Who appeared to Joseph Smith in the Sacred Grove?",
            choices: ["An angel", "God the Father and Jesus Christ", "The Holy Ghost only"],
            answerIndex: 1,
            explanation: "Joseph Smith—History 1:17 records that two Personages appeared: the Father introduced His Son.",
          },
          {
            id: "q2",
            q: "Why did Joseph go into the grove?",
            choices: ["To rest", "To ask God which church was true", "To preach"],
            answerIndex: 1,
            explanation: "Inspired by James 1:5, Joseph went to ask God for wisdom about which church to join.",
          },
        ],
      },
      {
        id: "book-of-mormon",
        title: "The Book of Mormon — another testament of Jesus Christ",
        blurb: "Tangible evidence that Joseph Smith was a prophet.",
        paragraphs: [
          en(
            "p1",
            "The Book of Mormon is a record of God's dealings with people who lived in the ancient Americas. Like the Bible, it testifies of Jesus Christ.",
            { id: "r1", prompt: "Why does it matter that we have a second witness of Jesus Christ?" },
          ),
          en(
            "p2",
            "Moroni promises that anyone who reads the Book of Mormon and asks God in sincere prayer can know by the Holy Ghost that it is true.",
          ),
        ],
        quiz: [
          {
            id: "q1",
            q: "What promise is made in Moroni 10:3-5?",
            choices: ["A free copy", "That God will reveal the truth by the Holy Ghost", "Eternal life automatically"],
            answerIndex: 1,
            explanation: "If you read, ponder, and ask with real intent, the Holy Ghost will manifest the truth.",
          },
        ],
      },
    ],
  },

  // ─────────────────────────── LESSON 2 ───────────────────────────
  {
    id: "plan-of-salvation",
    number: 2,
    title: "The Plan of Salvation",
    subtitle: "Where we came from, why we are here, where we are going.",
    emoji: "✨",
    sections: [
      {
        id: "premortal",
        title: "Premortal life",
        blurb: "We lived with Heavenly Father before we were born.",
        paragraphs: [
          {
            id: "p1",
            en: "Before we came to earth, we lived as spirit children with our Heavenly Father. He prepared a plan for us to gain bodies, learn, and become like Him.",
            i18n: {
              Spanish: "Antes de venir a la tierra, vivimos como hijos espirituales con nuestro Padre Celestial. Él preparó un plan para que obtuviéramos cuerpos, aprendiéramos y llegáramos a ser como Él.",
              Portuguese: "Antes de virmos à terra, vivemos como filhos espirituais com nosso Pai Celestial. Ele preparou um plano para que recebêssemos corpos, aprendêssemos e nos tornássemos como Ele.",
            },
            reflection: { id: "r1", prompt: "Does it change how you see yourself to know you lived before birth?" },
          },
          en("p2", "In that council in heaven, Jesus Christ was chosen to be our Savior. We chose to follow Him."),
        ],
        quiz: [
          {
            id: "q1",
            q: "Where did we live before we were born?",
            choices: ["Nowhere", "On another planet", "With Heavenly Father as His spirit children"],
            answerIndex: 2,
            explanation: "We are literally spirit children of God who lived with Him in a premortal existence.",
          },
        ],
      },
      {
        id: "atonement",
        title: "The Atonement of Jesus Christ",
        blurb: "Christ suffered for our sins so we could repent and return.",
        paragraphs: [
          en(
            "p1",
            "Because of the Fall, all people sin and all people die. We could not return to Heavenly Father on our own.",
            { id: "r1", prompt: "Why do you think a Savior was needed?" },
          ),
          {
            id: "p2",
            en: "Jesus Christ suffered for our sins in the Garden of Gethsemane and on the cross. He was resurrected so that we will all live again.",
            i18n: {
              Spanish: "Jesucristo sufrió por nuestros pecados en el Jardín de Getsemaní y en la cruz. Resucitó para que todos podamos vivir de nuevo.",
              Portuguese: "Jesus Cristo sofreu por nossos pecados no Jardim do Getsêmani e na cruz. Ele ressuscitou para que todos vivamos novamente.",
            },
          },
          en("p3", "When we exercise faith in Him and repent, His Atonement cleanses us and gives us strength to keep trying."),
        ],
        quiz: [
          {
            id: "q1",
            q: "What does the Atonement of Jesus Christ do for us?",
            choices: [
              "Excuses us from commandments",
              "Cleanses us from sin and gives us power to change",
              "Only forgives small mistakes",
            ],
            answerIndex: 1,
            explanation: "Through faith and repentance, Christ's Atonement cleanses, heals, and strengthens us.",
          },
        ],
      },
      {
        id: "after-life",
        title: "Life after death and kingdoms of glory",
        blurb: "Where we go after this life depends on our choices and covenants.",
        paragraphs: [
          en("p1", "When we die, our spirit goes to the spirit world to wait for the resurrection."),
          en(
            "p2",
            "After judgment, we will be assigned to one of three kingdoms of glory: celestial, terrestrial, or telestial. The greatest gift is eternal life with God.",
            { id: "r1", prompt: "What kind of life would you want forever?" },
          ),
        ],
        quiz: [
          {
            id: "q1",
            q: "How many kingdoms of glory are there?",
            choices: ["One", "Two", "Three"],
            answerIndex: 2,
            explanation: "Celestial, terrestrial, and telestial — see D&C 76.",
          },
        ],
      },
    ],
  },

  // ─────────────────────────── LESSON 3 ───────────────────────────
  {
    id: "gospel-of-jc",
    number: 3,
    title: "The Gospel of Jesus Christ",
    subtitle: "Faith, repentance, baptism, the Holy Ghost, and enduring to the end.",
    emoji: "✝️",
    sections: [
      {
        id: "faith",
        title: "Faith in Jesus Christ",
        blurb: "Trust in Christ that leads to action.",
        paragraphs: [
          {
            id: "p1",
            en: "Faith in Jesus Christ is more than belief. It is trust that moves us to act on His teachings.",
            i18n: {
              Spanish: "La fe en Jesucristo es más que creer. Es confianza que nos lleva a actuar según Sus enseñanzas.",
              Portuguese: "Fé em Jesus Cristo é mais do que crer. É a confiança que nos leva a agir conforme Seus ensinamentos.",
            },
            reflection: { id: "r1", prompt: "What is one act of faith you could try this week?" },
          },
          en("p2", "As our faith grows, we feel hope and we feel the love of Christ in our lives."),
        ],
        quiz: [
          {
            id: "q1",
            q: "What is faith in Jesus Christ?",
            choices: ["Just a feeling", "Trust in Him that leads to action", "An emotion of fear"],
            answerIndex: 1,
            explanation: "Faith is a principle of action — see Hebrews 11 and Alma 32.",
          },
        ],
      },
      {
        id: "repentance",
        title: "Repentance",
        blurb: "Turning our heart and life back toward God.",
        paragraphs: [
          en(
            "p1",
            "To repent means to change — our thoughts, our actions, and our hearts. Heavenly Father invites every one of us to repent daily.",
            { id: "r1", prompt: "What does change look like in real life?" },
          ),
          en("p2", "Through Christ's Atonement, our sins can be completely forgiven and forgotten."),
        ],
        quiz: [
          {
            id: "q1",
            q: "What does repentance mean?",
            choices: ["Feeling guilty forever", "Turning to God and changing", "Doing penance"],
            answerIndex: 1,
            explanation: "Repentance is a positive change of heart, mind, and behavior toward God.",
          },
        ],
      },
      {
        id: "baptism-hg",
        title: "Baptism and the gift of the Holy Ghost",
        blurb: "Saving ordinances performed by proper priesthood authority.",
        paragraphs: [
          {
            id: "p1",
            en: "Baptism by immersion, performed by one with priesthood authority, is the way Jesus taught us to enter His Church.",
            i18n: {
              Spanish: "El bautismo por inmersión, efectuado por alguien con autoridad del sacerdocio, es la forma en que Jesús nos enseñó a entrar en Su Iglesia.",
            },
          },
          en(
            "p2",
            "After baptism, we receive the gift of the Holy Ghost — a constant companion who comforts, warns, and teaches us.",
            { id: "r1", prompt: "When have you felt peace or guidance you couldn't explain?" },
          ),
        ],
        quiz: [
          {
            id: "q1",
            q: "How is baptism performed?",
            choices: ["By sprinkling", "By immersion, with proper authority", "Only as a baby"],
            answerIndex: 1,
            explanation: "Jesus Himself was baptized by immersion (Matthew 3) by one with authority — John the Baptist.",
          },
        ],
      },
    ],
  },

  // ─────────────────────────── LESSON 4 ───────────────────────────
  {
    id: "commandments",
    number: 4,
    title: "The Commandments",
    subtitle: "Daily living that brings happiness and the Spirit.",
    emoji: "📜",
    sections: [
      {
        id: "prayer-scripture",
        title: "Prayer and scripture study",
        blurb: "Daily conversation with God; daily nourishment from His word.",
        paragraphs: [
          en(
            "p1",
            "Pray to Heavenly Father every morning and night. Speak to Him as you would a loving parent.",
            { id: "r1", prompt: "What would you say to Heavenly Father right now if He were standing here?" },
          ),
          {
            id: "p2",
            en: "Read the scriptures every day, even just a few verses. The Spirit teaches you as you read.",
            i18n: {
              Spanish: "Lee las Escrituras todos los días, aunque solo sean unos pocos versículos. El Espíritu te enseña mientras lees.",
            },
          },
        ],
        quiz: [
          {
            id: "q1",
            q: "How often should we pray?",
            choices: ["Once a week", "Morning and night, and always in our hearts", "Only in emergencies"],
            answerIndex: 1,
            explanation: "Pray morning and night, and have a prayer in your heart always.",
          },
        ],
      },
      {
        id: "sabbath-tithing",
        title: "Sabbath day, tithing, and offerings",
        blurb: "Sacred time and sacred resources, given back to God.",
        paragraphs: [
          en("p1", "Keep the Sabbath day holy by attending Church, taking the sacrament, and resting from worldly things."),
          en(
            "p2",
            "Tithing is one tenth of your increase, paid willingly to the Lord. The Lord promises great blessings to those who pay it.",
            { id: "r1", prompt: "What blessings might come from giving God one tenth of what He gives you?" },
          ),
        ],
        quiz: [
          {
            id: "q1",
            q: "How much is tithing?",
            choices: ["1%", "10% of increase", "Whatever you can spare"],
            answerIndex: 1,
            explanation: "Tithing is one tenth of one's increase, paid willingly (D&C 119).",
          },
        ],
      },
      {
        id: "wow-chastity",
        title: "Word of Wisdom and law of chastity",
        blurb: "Standards that protect body and spirit.",
        paragraphs: [
          en("p1", "The Word of Wisdom teaches us to avoid alcohol, tobacco, coffee, tea, and harmful drugs, and to eat wholesome food."),
          en(
            "p2",
            "The law of chastity is purity in thought and action — sexual relations only between a man and woman married to each other.",
            { id: "r1", prompt: "How can these standards protect families and personal peace?" },
          ),
        ],
        quiz: [
          {
            id: "q1",
            q: "What does the Word of Wisdom counsel us to avoid?",
            choices: ["All sweets", "Alcohol, tobacco, coffee, tea, harmful drugs", "Only red meat"],
            answerIndex: 1,
            explanation: "D&C 89 lists the substances to avoid and counsels wholesome eating.",
          },
        ],
      },
    ],
  },

  // ─────────────────────────── LESSON 5 ───────────────────────────
  {
    id: "laws-ordinances",
    number: 5,
    title: "Laws and Ordinances",
    subtitle: "Temples, eternal families, and lifelong discipleship.",
    emoji: "⛪",
    sections: [
      {
        id: "temple",
        title: "Temples and covenants",
        blurb: "Sacred ordinances that bind us to God and our families.",
        paragraphs: [
          {
            id: "p1",
            en: "A temple is the house of the Lord. Inside, we make sacred covenants and receive ordinances necessary for exaltation.",
            i18n: {
              Spanish: "Un templo es la casa del Señor. En su interior hacemos convenios sagrados y recibimos las ordenanzas necesarias para la exaltación.",
            },
            reflection: { id: "r1", prompt: "What might it mean to have a place set apart as God's house in your city?" },
          },
          en("p2", "Worthy members can be sealed as families forever in the temple."),
        ],
        quiz: [
          {
            id: "q1",
            q: "What happens in temples?",
            choices: ["Sunday meetings", "Sacred ordinances and covenants", "Concerts"],
            answerIndex: 1,
            explanation: "Temples are houses of the Lord where saving ordinances and sealings occur.",
          },
        ],
      },
      {
        id: "eternal-family",
        title: "Eternal families",
        blurb: "Families can be together forever through priesthood sealings.",
        paragraphs: [
          en(
            "p1",
            "When a husband and wife are sealed in the temple, their marriage and any children born to them can last for eternity.",
            { id: "r1", prompt: "Who in your family would you most want to be with forever?" },
          ),
          en("p2", "Family history work allows us to find our ancestors and offer these blessings to them in the temple."),
        ],
        quiz: [
          {
            id: "q1",
            q: "How can families be together forever?",
            choices: ["By being good people", "By being sealed in the temple by priesthood authority", "By signing a contract"],
            answerIndex: 1,
            explanation: "Sealing ordinances performed in the temple bind families together for eternity.",
          },
        ],
      },
      {
        id: "endure-serve",
        title: "Endure to the end and serve",
        blurb: "Living the gospel daily and lifting others.",
        paragraphs: [
          en("p1", "Baptism is a beginning, not an end. We renew our covenants each week as we partake of the sacrament."),
          en(
            "p2",
            "We serve in the Church, share the gospel, and care for those in need — following the example of Jesus Christ.",
            { id: "r1", prompt: "Who could you serve this week the way Jesus would?" },
          ),
        ],
        quiz: [
          {
            id: "q1",
            q: "How do we renew our baptismal covenants?",
            choices: ["By being rebaptized", "By taking the sacrament weekly", "By praying once a year"],
            answerIndex: 1,
            explanation: "Each week we partake of the sacrament to remember Christ and renew our covenants.",
          },
        ],
      },
    ],
  },

  // ─────────────────────────── SACRAMENT PRAYERS ───────────────────────────
  // Official ordinance prayers from D&C 20:77, 79 (also Moroni 4:3, 5:2).
  // Wording in non-English languages is taken from the Church's published
  // scriptures so missionaries can follow along word-for-word at the
  // sacrament table on Sunday.
  {
    id: "sacrament-prayers",
    number: 6,
    title: "Sacrament Prayers (Sunday Services)",
    subtitle: "The exact wording spoken by the priest each Sunday — D&C 20:77, 79.",
    emoji: "🍞",
    sections: [
      {
        id: "bread",
        title: "Blessing on the Bread — D&C 20:77",
        blurb: "The priest kneels and offers this prayer over the broken bread.",
        paragraphs: [
          {
            id: "p1",
            en: "O God, the Eternal Father, we ask thee in the name of thy Son, Jesus Christ, to bless and sanctify this bread to the souls of all those who partake of it, that they may eat in remembrance of the body of thy Son, and witness unto thee, O God, the Eternal Father, that they are willing to take upon them the name of thy Son, and always remember him and keep his commandments which he has given them; that they may always have his Spirit to be with them. Amen.",
            i18n: {
              Spanish: "Oh Dios, Padre Eterno, te pedimos en el nombre de tu Hijo Jesucristo que bendigas y santifiques este pan para las almas de todos los que participen de él; para que lo coman en memoria del cuerpo de tu Hijo, y testifiquen ante ti, oh Dios, Padre Eterno, que están dispuestos a tomar sobre sí el nombre de tu Hijo, y a recordarle siempre, y a guardar sus mandamientos que él les ha dado, para que siempre puedan tener su Espíritu consigo. Amén.",
              Portuguese: "Ó Deus, Pai Eterno, nós te rogamos em nome de teu Filho, Jesus Cristo, que abençoes e santifiques este pão para as almas de todos os que partilharem dele, para que o comam em lembrança do corpo de teu Filho e testifiquem a ti, ó Deus, Pai Eterno, que estão dispostos a tomar sobre si o nome de teu Filho e recordá-lo sempre e guardar os mandamentos que ele lhes deu, para que possam ter sempre consigo o seu Espírito. Amém.",
              French: "Ô Dieu, Père éternel, nous te demandons, au nom de ton Fils, Jésus-Christ, de bénir et de sanctifier ce pain pour les âmes de tous ceux qui en prendront, afin qu’ils en mangent en souvenir du corps de ton Fils et qu’ils te témoignent, ô Dieu, Père éternel, qu’ils sont disposés à prendre sur eux le nom de ton Fils, à se souvenir toujours de lui et à garder les commandements qu’il leur a donnés, afin qu’ils aient toujours son Esprit avec eux. Amen.",
              German: "O Gott, du Ewiger Vater, wir bitten dich im Namen deines Sohnes Jesus Christus, dieses Brot zu segnen und zu heiligen für die Seelen all derer, die davon nehmen, damit sie es essen zum Gedächtnis des Leibes deines Sohnes und dir, o Gott, du Ewiger Vater, bezeugen, dass sie willens sind, den Namen deines Sohnes auf sich zu nehmen und immer an ihn zu denken und seine Gebote, die er ihnen gegeben hat, zu halten, damit sein Geist immer mit ihnen sei. Amen.",
              Italian: "O Dio, Padre Eterno, ti chiediamo nel nome di tuo Figlio Gesù Cristo di benedire e santificare questo pane per le anime di tutti coloro che ne prenderanno, affinché ne mangino in ricordo del corpo di tuo Figlio, e ti attestino, o Dio, Padre Eterno, che sono disposti a prendere su di loro il nome di tuo Figlio, e a ricordarsi sempre di lui, e a obbedire ai suoi comandamenti che egli ha dato loro, affinché possano sempre avere con sé il suo Spirito. Amen.",
              Japanese: "おお神よ、永遠の父よ、われらはあなたの御子イエス・キリストの御名により、このパンをこれにあずかるすべての人々の魂のために祝福し、聖めてくださるようお願いいたします。彼らがあなたの御子の体を覚えてこれを食し、おお神、永遠の父よ、彼らがあなたの御子の御名を受け、いつも御子を覚え、御子が彼らに授けられた戒めを守ろうとしていることをあなたに証しできますように。そして、彼らがいつも御子の御霊を伴うことができますように。アーメン。",
              Korean: "오 하나님, 영원하신 아버지여, 우리가 아버지의 아들 예수 그리스도의 이름으로 비옵나니, 이 떡을 받는 모든 자의 영혼을 위하여 이를 축복하고 거룩하게 하시옵소서. 그리하여 그들로 하여금 아버지의 아들의 몸을 기억하여 이를 먹게 하시고, 또 오 하나님, 영원하신 아버지여, 그들이 아버지의 아들의 이름을 받들며 항상 그를 기억하고 그가 그들에게 주신 계명을 지키기 원함을 아버지께 증거하게 하시옵소서. 그리하여 그들로 하여금 항상 그의 영을 함께하게 하시옵소서. 아멘.",
            },
          },
        ],
        quiz: [
          {
            id: "q1",
            q: "What does the bread represent in the sacrament prayer?",
            choices: ["The blood of Christ", "The body of Christ", "The covenants of baptism"],
            answerIndex: 1,
            explanation: "The bread is blessed in remembrance of the body of God's Son.",
          },
          {
            id: "q2",
            q: "What three things do those who partake covenant to do?",
            choices: [
              "Pay tithing, attend church, serve a mission",
              "Take upon them Christ's name, always remember Him, keep His commandments",
              "Read scriptures, pray daily, love their neighbor",
            ],
            answerIndex: 1,
            explanation: "The prayer names exactly these three covenants — and promises His Spirit in return.",
          },
        ],
      },
      {
        id: "water",
        title: "Blessing on the Water — D&C 20:79",
        blurb: "After the bread, the priest offers this shorter prayer over the water.",
        paragraphs: [
          {
            id: "p1",
            en: "O God, the Eternal Father, we ask thee in the name of thy Son, Jesus Christ, to bless and sanctify this water to the souls of all those who drink of it, that they may do it in remembrance of the blood of thy Son, which was shed for them; that they may witness unto thee, O God, the Eternal Father, that they do always remember him, that they may have his Spirit to be with them. Amen.",
            i18n: {
              Spanish: "Oh Dios, Padre Eterno, te pedimos en el nombre de tu Hijo Jesucristo que bendigas y santifiques este agua para las almas de todos los que la beban, para que lo hagan en memoria de la sangre de tu Hijo, que por ellos fue derramada; para que testifiquen ante ti, oh Dios, Padre Eterno, que siempre se acuerdan de él, para que puedan tener su Espíritu consigo. Amén.",
              Portuguese: "Ó Deus, Pai Eterno, nós te rogamos em nome de teu Filho, Jesus Cristo, que abençoes e santifiques esta água para as almas de todos os que dela beberem, para que o façam em lembrança do sangue de teu Filho, que por eles foi derramado, para que testifiquem a ti, ó Deus, Pai Eterno, que dele sempre se lembram, para que possam ter consigo o seu Espírito. Amém.",
              French: "Ô Dieu, Père éternel, nous te demandons, au nom de ton Fils, Jésus-Christ, de bénir et de sanctifier cette eau pour les âmes de tous ceux qui en boiront, afin qu’ils le fassent en souvenir du sang de ton Fils, qui a été versé pour eux, afin qu’ils te témoignent, ô Dieu, Père éternel, qu’ils se souviennent toujours de lui, afin qu’ils aient son Esprit avec eux. Amen.",
              German: "O Gott, du Ewiger Vater, wir bitten dich im Namen deines Sohnes Jesus Christus, dieses Wasser zu segnen und zu heiligen für die Seelen all derer, die davon trinken, damit sie es tun zum Gedächtnis des Blutes deines Sohnes, das für sie vergossen wurde, damit sie dir, o Gott, du Ewiger Vater, bezeugen, dass sie immer an ihn denken, damit sein Geist mit ihnen sei. Amen.",
              Italian: "O Dio, Padre Eterno, ti chiediamo nel nome di tuo Figlio Gesù Cristo di benedire e santificare quest’acqua per le anime di tutti coloro che ne berranno, affinché lo facciano in ricordo del sangue di tuo Figlio, che è stato versato per loro; affinché ti attestino, o Dio, Padre Eterno, che si ricordano sempre di lui, affinché possano avere con sé il suo Spirito. Amen.",
              Japanese: "おお神よ、永遠の父よ、われらはあなたの御子イエス・キリストの御名により、この水をこれを飲むすべての人々の魂のために祝福し、聖めてくださるようお願いいたします。彼らが、彼らのために流された御子の血を覚えてこれを行い、おお神、永遠の父よ、彼らがいつも御子を覚えていることをあなたに証しできますように。そして、彼らが御子の御霊を伴うことができますように。アーメン。",
              Korean: "오 하나님, 영원하신 아버지여, 우리가 아버지의 아들 예수 그리스도의 이름으로 비옵나니, 이 물을 마시는 모든 자의 영혼을 위하여 이를 축복하고 거룩하게 하시옵소서. 그리하여 그들로 하여금 그들을 위하여 흘리신 아버지의 아들의 피를 기억하여 이를 행하게 하시고, 또 오 하나님, 영원하신 아버지여, 그들이 항상 그를 기억함을 아버지께 증거하게 하시옵소서. 그리하여 그들로 하여금 그의 영을 함께하게 하시옵소서. 아멘.",
            },
          },
        ],
        quiz: [
          {
            id: "q1",
            q: "What does the water represent?",
            choices: ["The body of Christ", "The blood of Christ shed for us", "Living water of revelation"],
            answerIndex: 1,
            explanation: "The water is taken in remembrance of the blood of God's Son, which was shed for us.",
          },
        ],
      },
    ],
  },
];

/** Pick the best translation for a paragraph, falling back to English. */
export function paragraphTarget(p: LessonParagraph, lang: Language): string {
  return p.i18n?.[lang] ?? p.en;
}
