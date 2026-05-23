// LDS Scripture library — key missionary passages in German and Italian.
// German follows LDS Germany official usage ("Herr", "Evangelium", "Buch Mormon",
// "Heiliger Geist", "Buße", "Taufe"). Luther Bible register for OT/NT.
// Italian follows LDS Italy official usage ("Signore", "Vangelo", "Libro di Mormon",
// "Spirito Santo", "pentimento", "battesimo"). Ecclesiastical register throughout.
// English `en` fields are KJV / standard LDS English source text (public domain).
// All selections are excerpted; not the complete scripture text.

import type { LibraryEntry, BookChapter } from "@/state/library-state";
import type { SentencePair } from "@/data/library";

// ── GERMAN ──────────────────────────────────────────────────────────────────

const BOM_CHAPTERS_DE: BookChapter[] = [
  {
    title: "1 Nephi 1 — Ich, Nephi, von frommen Eltern geboren",
    sentences: [
      {
        en: "I, Nephi, having been born of goodly parents, therefore I was taught somewhat in all the learning of my father.",
        target:
          "Ich, Nephi, von frommen Eltern geboren, wurde daher in all dem Wissen meines Vaters unterwiesen.",
      },
      {
        en: "And having seen many afflictions in the course of my days, nevertheless, having been highly favored of the Lord in all my days.",
        target:
          "Und da ich viele Bedrängnisse im Verlauf meiner Tage gesehen habe, bin ich dennoch in all meinen Tagen sehr vom Herrn begünstigt worden.",
      },
      {
        en: "I make a record of my proceedings in my days.",
        target: "Ich mache eine Aufzeichnung meiner Handlungen in meinen Tagen.",
      },
      {
        en: "And I know that the record which I make is true; and I make it with mine own hand.",
        target:
          "Und ich weiß, dass die Aufzeichnung, die ich mache, wahr ist; und ich mache sie mit meiner eigenen Hand.",
      },
    ],
  },
  {
    title: "1 Nephi 3:7 — Ich will gehen und tun",
    sentences: [
      {
        en: "And it came to pass that I, Nephi, said unto my father: I will go and do the things which the Lord hath commanded.",
        target:
          "Und es geschah, dass ich, Nephi, zu meinem Vater sprach: Ich will gehen und die Dinge tun, die der Herr geboten hat.",
      },
      {
        en: "For I know that the Lord giveth no commandments unto the children of men, save he shall prepare a way for them.",
        target:
          "Denn ich weiß, dass der Herr den Menschenkindern keine Gebote gibt, ohne ihnen einen Weg zu bereiten.",
      },
      {
        en: "That they may accomplish the thing which he commandeth them.",
        target: "Damit sie die Dinge vollbringen können, die er ihnen gebietet.",
      },
    ],
  },
  {
    title: "Mosiah 2 — König Benjamins Ansprache",
    sentences: [
      {
        en: "I say unto you that if ye should serve him who has created you from the beginning.",
        target: "Ich sage euch, dass wenn ihr dem dienten, der euch von Anfang an geschaffen hat.",
      },
      {
        en: "And is preserving you from day to day, by lending you breath, that ye may live and move and do according to your own will.",
        target:
          "Und euch von Tag zu Tag bewahrt, indem er euch Atem leiht, damit ihr nach eurem eigenen Willen leben und euch bewegen könnt.",
      },
      {
        en: "And are not we ourselves, because of the knowledge of the goodness of God at this time, caused to go out of the natural sleep?",
        target:
          "Und hat uns nicht die Erkenntnis der Güte Gottes zu dieser Zeit veranlasst, aus dem natürlichen Schlaf zu erwachen?",
      },
      {
        en: "I would desire that ye should consider on the blessed and happy state of those that keep the commandments of God.",
        target:
          "Ich würde wünschen, dass ihr den glückseligen und glücklichen Zustand derer bedenkt, die die Gebote Gottes halten.",
      },
      {
        en: "For they are blessed in all things, both temporal and spiritual.",
        target: "Denn sie sind in allen Dingen gesegnet, sowohl zeitlichen als auch geistlichen.",
      },
    ],
  },
  {
    title: "2 Nephi 2 — Adam fiel, damit Menschen sein könnten",
    sentences: [
      {
        en: "Adam fell that men might be; and men are, that they might have joy.",
        target:
          "Adam fiel, damit Menschen sein könnten; und die Menschen sind, damit sie Freude haben mögen.",
      },
      {
        en: "And the Messiah cometh in the fulness of time, that he may redeem the children of men from the fall.",
        target:
          "Und der Messias kommt in der Fülle der Zeit, damit er die Menschenkinder von dem Fall erlöse.",
      },
      {
        en: "Wherefore, men are free according to the flesh; and all things are given them which are expedient unto man.",
        target:
          "Deshalb sind die Menschen frei nach dem Fleisch, und ihnen sind alle Dinge gegeben, die dem Menschen dienlich sind.",
      },
      {
        en: "And they are free to choose liberty and eternal life, through the great Mediator of all men.",
        target:
          "Und sie sind frei, die Freiheit und das ewige Leben zu wählen durch den großen Mittler aller Menschen.",
      },
    ],
  },
  {
    title: "2 Nephi 31 — Der Weg der Errettung",
    sentences: [
      {
        en: "Wherefore, my beloved brethren, I know that if ye shall follow the Son, with full purpose of heart.",
        target:
          "Deshalb, meine geliebten Brüder, weiß ich, dass wenn ihr dem Sohn folgt mit vollem Herzensernst.",
      },
      {
        en: "Witnessing unto the Father that ye are willing to take upon you the name of Christ, by baptism.",
        target:
          "Und dem Vater Zeugnis gebt, dass ihr bereit seid, den Namen Christi durch die Taufe anzunehmen.",
      },
      {
        en: "Then shall ye receive the Holy Ghost; yea, then cometh the baptism of fire and of the Holy Ghost.",
        target:
          "Dann sollt ihr den Heiligen Geist empfangen; ja, dann kommt die Taufe mit Feuer und dem Heiligen Geist.",
      },
      {
        en: "And then can ye speak with the tongue of angels, and shout praises unto the Holy One of Israel.",
        target:
          "Und dann könnt ihr mit der Zunge der Engel sprechen und dem Heiligen Israels Lobpreisungen zuruf.",
      },
    ],
  },
  {
    title: "Alma 7 — Taufe und der Heilige Geist",
    sentences: [
      {
        en: "And he shall go forth, suffering pains and afflictions and temptations of every kind.",
        target:
          "Und er wird ausgehen und Schmerzen und Bedrängnisse und Versuchungen jeder Art leiden.",
      },
      {
        en: "And this that the word might be fulfilled which saith he will take upon him the pains and the sicknesses of his people.",
        target:
          "Und dies damit das Wort erfüllt werde, das besagt, er werde die Schmerzen und Krankheiten seines Volkes auf sich nehmen.",
      },
      {
        en: "Now I say unto you that ye must repent, and be born again.",
        target: "Nun sage ich euch, dass ihr bereuen und von Neuem geboren werden müsst.",
      },
      {
        en: "For the Spirit saith if ye are not born of water and of the Spirit, ye cannot inherit the kingdom of God.",
        target:
          "Denn der Geist spricht, wenn ihr nicht aus Wasser und aus dem Geist geboren seid, könnt ihr das Reich Gottes nicht erben.",
      },
    ],
  },
  {
    title: "Alma 32 — Der Glaube ist wie ein Same",
    sentences: [
      {
        en: "Now, we will compare the word unto a seed.",
        target: "Nun wollen wir das Wort mit einem Samen vergleichen.",
      },
      {
        en: "Now, if ye give place, that a seed may be planted in your heart, behold, if it be a true seed, it will begin to swell within your breasts.",
        target:
          "Nun, wenn ihr Platz macht, dass ein Same in euer Herz gepflanzt werden kann — wenn er ein wahrer Same ist — wird er in euren Herzen zu schwellen beginnen.",
      },
      {
        en: "And when you feel these swelling motions, ye will begin to say within yourselves: It must needs be that this is a good seed.",
        target:
          "Und wenn ihr diese anschwellenden Bewegungen fühlt, werdet ihr anfangen, in euch selbst zu sagen: Es muss so sein, dass dies ein guter Same ist.",
      },
      {
        en: "For behold, it enlargeth my soul; yea, it enlighteneth my understanding.",
        target: "Denn seht, er weitet meine Seele aus; ja, er erleuchtet meinen Verstand.",
      },
      {
        en: "And it is discernible, therefore I must needs know that this is a good seed.",
        target: "Und es ist erkennbar, deshalb muss ich wissen, dass dies ein guter Same ist.",
      },
    ],
  },
  {
    title: "3 Nephi 11 — Christus erscheint den Nephiten",
    sentences: [
      {
        en: "Behold, I am Jesus Christ, whom the prophets testified shall come into the world.",
        target:
          "Seht, ich bin Jesus Christus, von dem die Propheten Zeugnis gaben, dass er in die Welt kommen würde.",
      },
      {
        en: "And behold, I am the light and the life of the world.",
        target: "Und seht, ich bin das Licht und das Leben der Welt.",
      },
      {
        en: "And I have drunk out of that bitter cup which the Father hath given me.",
        target: "Und ich habe aus dem bitteren Kelch getrunken, den der Vater mir gegeben hat.",
      },
      {
        en: "Arise and come forth unto me, that ye may thrust your hands into my side.",
        target: "Steht auf und kommt zu mir, damit ihr eure Hände in meine Seite stecken könnt.",
      },
      {
        en: "That ye may know that I am the God of Israel, and the God of the whole earth, and have been slain for the sins of the world.",
        target:
          "Damit ihr wisst, dass ich der Gott Israels und der Gott der ganzen Erde bin und für die Sünden der Welt getötet worden bin.",
      },
    ],
  },
  {
    title: "Moroni 10:3-5 — Die Verheißung Moronis",
    sentences: [
      {
        en: "Behold, I would exhort you that when ye shall read these things, ye would remember how merciful the Lord hath been unto the children of men.",
        target:
          "Seht, ich würde euch ermahnen, dass ihr, wenn ihr diese Dinge lest, daran denkt, wie gnädig der Herr den Menschenkindern gegenüber gewesen ist.",
      },
      {
        en: "And ponder it in your hearts.",
        target: "Und es in eurem Herzen bedenkt.",
      },
      {
        en: "And when ye shall receive these things, I would exhort you that ye would ask God, the Eternal Father, in the name of Christ, if these things are not true.",
        target:
          "Und wenn ihr diese Dinge empfangen habt, würde ich euch ermahnen, Gott, den Ewigen Vater, im Namen Christi zu fragen, ob diese Dinge nicht wahr sind.",
      },
      {
        en: "And if ye shall ask with a sincere heart, with real intent, having faith in Christ, he will manifest the truth of it unto you, by the power of the Holy Ghost.",
        target:
          "Und wenn ihr mit aufrichtigem Herzen und mit wirklicher Absicht fragt und Glauben an Christus habt, wird er euch die Wahrheit davon durch die Kraft des Heiligen Geistes offenbaren.",
      },
      {
        en: "And by the power of the Holy Ghost ye may know the truth of all things.",
        target:
          "Und durch die Kraft des Heiligen Geistes könnt ihr die Wahrheit aller Dinge erkennen.",
      },
    ],
  },
];

const DC_CHAPTERS_DE: BookChapter[] = [
  {
    title: "Lehre und Bündnisse 1 — Hört, ihr Leute meiner Kirche",
    sentences: [
      {
        en: "Hearken, O ye people of my church, saith the voice of him who dwells on high.",
        target: "Hört, ihr Leute meiner Kirche, spricht die Stimme dessen, der in der Höhe wohnt.",
      },
      {
        en: "Search these commandments, for they are true and faithful.",
        target: "Erforscht diese Gebote, denn sie sind wahr und zuverlässig.",
      },
      {
        en: "And the prophecies and promises which are in them shall all be fulfilled.",
        target:
          "Und die Prophezeiungen und Verheißungen, die in ihnen sind, werden alle erfüllt werden.",
      },
      {
        en: "What I the Lord have spoken, I have spoken, and I excuse not myself.",
        target:
          "Was ich, der Herr, gesprochen habe, habe ich gesprochen, und ich entschuldige mich nicht.",
      },
    ],
  },
  {
    title: "Lehre und Bündnisse 76 — Die drei Reiche der Herrlichkeit",
    sentences: [
      {
        en: "And we saw the glory of the Son, on the right hand of the Father, and received of his fulness.",
        target:
          "Und wir sahen die Herrlichkeit des Sohnes zur Rechten des Vaters und empfingen von seiner Fülle.",
      },
      {
        en: "The glory of the celestial is one, even as the glory of the sun is one.",
        target:
          "Die Herrlichkeit des Zölestialreiches ist eine, wie auch die Herrlichkeit der Sonne eine ist.",
      },
      {
        en: "And the glory of the terrestrial is one, even as the glory of the moon is one.",
        target:
          "Und die Herrlichkeit des Terrestrialreiches ist eine, wie auch die Herrlichkeit des Mondes eine ist.",
      },
      {
        en: "And the glory of the telestial is one, even as the glory of the stars is one.",
        target:
          "Und die Herrlichkeit des Telestialreiches ist eine, wie auch die Herrlichkeit der Sterne eine ist.",
      },
    ],
  },
  {
    title: "Lehre und Bündnisse 88 — Das Licht Christi",
    sentences: [
      {
        en: "The light of Christ, which light proceedeth forth from the presence of God to fill the immensity of space.",
        target:
          "Das Licht Christi, das aus der Gegenwart Gottes hervorgeht, um die Unermesslichkeit des Raumes zu erfüllen.",
      },
      {
        en: "Is the light which is in all things, which giveth life to all things.",
        target: "Ist das Licht, das in allen Dingen ist, das allen Dingen Leben gibt.",
      },
      {
        en: "Which is the law by which all things are governed.",
        target: "Das das Gesetz ist, nach dem alle Dinge gelenkt werden.",
      },
      {
        en: "Seek learning, even by study and also by faith.",
        target: "Sucht das Lernen, sowohl durch das Studium als auch durch den Glauben.",
      },
    ],
  },
  {
    title: "Lehre und Bündnisse 121 — Kein Einfluss durch Zwang",
    sentences: [
      {
        en: "No power or influence can or ought to be maintained by virtue of the priesthood.",
        target: "Keine Macht oder Einfluss kann oder soll kraft des Priestertums ausgeübt werden.",
      },
      {
        en: "Only by persuasion, by long-suffering, by gentleness and meekness, and by love unfeigned.",
        target:
          "Nur durch Überzeugung, durch Langmut, durch Sanftmut und Demut und durch aufrichtige Liebe.",
      },
      {
        en: "By kindness, and pure knowledge, which shall greatly enlarge the soul without hypocrisy.",
        target:
          "Durch Güte und lauteres Wissen, das die Seele sehr erweitern wird, ohne Heuchelei.",
      },
      {
        en: "Let thy bowels also be full of charity towards all men, and to the household of faith.",
        target:
          "Dein Herz sei auch voll Nächstenliebe gegenüber allen Menschen und dem Gesinde des Glaubens.",
      },
    ],
  },
  {
    title: "Lehre und Bündnisse 130 — Intelligenz und Herrlichkeit",
    sentences: [
      {
        en: "Whatever principle of intelligence we attain unto in this life, it will rise with us in the resurrection.",
        target:
          "Welches Prinzip der Intelligenz wir auch immer in diesem Leben erlangen, es wird mit uns in der Auferstehung aufsteigen.",
      },
      {
        en: "And if a person gains more knowledge and intelligence in this life through his diligence and obedience than another.",
        target:
          "Und wenn eine Person durch ihren Fleiß und Gehorsam in diesem Leben mehr Wissen und Intelligenz gewinnt als eine andere.",
      },
      {
        en: "He will have so much the advantage in the world to come.",
        target: "Wird er so viel mehr Vorteil in der kommenden Welt haben.",
      },
      {
        en: "The glory of God is intelligence, or, in other words, light and truth.",
        target:
          "Die Herrlichkeit Gottes ist Intelligenz, oder mit anderen Worten, Licht und Wahrheit.",
      },
    ],
  },
];

const NT_CHAPTERS_DE: BookChapter[] = [
  {
    title: "Matthäus 5 — Die Seligpreisungen",
    sentences: [
      {
        en: "Blessed are the poor in spirit: for theirs is the kingdom of heaven.",
        target: "Selig sind, die da geistlich arm sind, denn ihnen gehört das Himmelreich.",
      },
      {
        en: "Blessed are they that mourn: for they shall be comforted.",
        target: "Selig sind, die da Leid tragen, denn sie sollen getröstet werden.",
      },
      {
        en: "Blessed are the meek: for they shall inherit the earth.",
        target: "Selig sind die Sanftmütigen, denn sie werden das Erdreich besitzen.",
      },
      {
        en: "Blessed are they which do hunger and thirst after righteousness: for they shall be filled.",
        target:
          "Selig sind, die da hungert und dürstet nach der Gerechtigkeit, denn sie sollen satt werden.",
      },
      {
        en: "Blessed are the pure in heart: for they shall see God.",
        target: "Selig sind, die reinen Herzens sind, denn sie werden Gott schauen.",
      },
      {
        en: "Blessed are the peacemakers: for they shall be called the children of God.",
        target: "Selig sind die Friedfertigen, denn sie werden Gottes Kinder heißen.",
      },
    ],
  },
  {
    title: "Johannes 3:16-17 — So hat Gott die Welt geliebt",
    sentences: [
      {
        en: "For God so loved the world, that he gave his only begotten Son.",
        target: "Denn so sehr hat Gott die Welt geliebt, dass er seinen eingeborenen Sohn gab.",
      },
      {
        en: "That whosoever believeth in him should not perish, but have everlasting life.",
        target: "Damit jeder, der an ihn glaubt, nicht verloren geht, sondern ewiges Leben hat.",
      },
      {
        en: "For God sent not his Son into the world to condemn the world; but that the world through him might be saved.",
        target:
          "Denn Gott hat seinen Sohn nicht in die Welt gesandt, um die Welt zu verurteilen, sondern damit die Welt durch ihn errettet werde.",
      },
    ],
  },
  {
    title: "Johannes 17 — Das Gebet des Hohenpriesters",
    sentences: [
      {
        en: "And this is life eternal, that they might know thee the only true God, and Jesus Christ, whom thou hast sent.",
        target:
          "Das aber ist das ewige Leben, dass sie dich, den allein wahren Gott, und den du gesandt hast, Jesus Christus, erkennen.",
      },
      {
        en: "I have glorified thee on the earth: I have finished the work which thou gavest me to do.",
        target:
          "Ich habe dich auf Erden verherrlicht; die Arbeit habe ich vollbracht, die du mir gegeben hast.",
      },
      {
        en: "Neither pray I for these alone, but for them also which shall believe on me through their word.",
        target:
          "Ich bitte aber nicht allein für diese, sondern auch für die, die durch ihr Wort an mich glauben werden.",
      },
    ],
  },
  {
    title: "Jakobus 1:5 — Wenn jemand Weisheit mangelt",
    sentences: [
      {
        en: "If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not.",
        target:
          "Wenn es aber jemandem von euch an Weisheit mangelt, der bitte Gott, der jedermann gern und ohne Vorwurf gibt.",
      },
      {
        en: "And it shall be given him. But let him ask in faith, nothing wavering.",
        target: "Und sie wird ihm gegeben werden. Er bitte aber im Glauben, ohne zu zweifeln.",
      },
      {
        en: "For he that wavereth is like a wave of the sea driven with the wind and tossed.",
        target:
          "Denn wer zweifelt, gleicht einer Meereswoge, die vom Wind getrieben und hin- und hergeworfen wird.",
      },
    ],
  },
  {
    title: "Offenbarung 14 — Die Botschaft des ewigen Evangeliums",
    sentences: [
      {
        en: "And I saw another angel fly in the midst of heaven, having the everlasting gospel to preach unto them that dwell on the earth.",
        target:
          "Und ich sah einen anderen Engel in der Mitte des Himmels fliegen, der ein ewiges Evangelium hatte, um es denen zu verkünden, die auf der Erde wohnen.",
      },
      {
        en: "Saying with a loud voice, Fear God, and give glory to him; for the hour of his judgment is come.",
        target:
          "Der mit lauter Stimme sprach: Fürchtet Gott und gebt ihm die Ehre, denn die Stunde seines Gerichts ist gekommen.",
      },
      {
        en: "And worship him that made heaven, and earth, and the sea, and the fountains of waters.",
        target:
          "Und betet den an, der den Himmel und die Erde und das Meer und die Wasserquellen gemacht hat.",
      },
    ],
  },
];

const OT_CHAPTERS_DE: BookChapter[] = [
  {
    title: "1. Mose 1 — Am Anfang schuf Gott",
    sentences: [
      {
        en: "In the beginning God created the heaven and the earth.",
        target: "Am Anfang schuf Gott Himmel und Erde.",
      },
      {
        en: "And God said, Let there be light: and there was light.",
        target: "Und Gott sprach: Es werde Licht! Und es ward Licht.",
      },
      {
        en: "And God saw every thing that he had made, and, behold, it was very good.",
        target: "Und Gott sah alles an, was er gemacht hatte; und siehe, es war sehr gut.",
      },
    ],
  },
  {
    title: "Psalm 23 — Der Herr ist mein Hirte",
    sentences: [
      {
        en: "The LORD is my shepherd; I shall not want.",
        target: "Der Herr ist mein Hirte; mir wird nichts mangeln.",
      },
      {
        en: "He maketh me to lie down in green pastures: he leadeth me beside the still waters.",
        target: "Er lässt mich lagern auf grünen Auen und führt mich zum Ruhewasser.",
      },
      {
        en: "He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake.",
        target:
          "Er erquickt meine Seele. Er führt mich auf rechten Pfaden um seines Namens willen.",
      },
      {
        en: "Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me.",
        target:
          "Und ob ich schon wanderte im finstern Tal, fürchte ich kein Unglück; denn du bist bei mir.",
      },
    ],
  },
  {
    title: "Jesaja 53 — Der leidende Knecht",
    sentences: [
      {
        en: "He is despised and rejected of men; a man of sorrows, and acquainted with grief.",
        target:
          "Er war verachtet und von den Menschen verlassen, ein Mann voller Schmerzen und mit Krankheit vertraut.",
      },
      {
        en: "Surely he hath borne our griefs, and carried our sorrows.",
        target: "Fürwahr, er trug unsere Krankheit und lud auf sich unsere Schmerzen.",
      },
      {
        en: "But he was wounded for our transgressions, he was bruised for our iniquities.",
        target:
          "Aber er wurde um unserer Missetat willen durchbohrt und um unserer Sünde willen zerschlagen.",
      },
      {
        en: "The chastisement of our peace was upon him; and with his stripes we are healed.",
        target:
          "Die Strafe liegt auf ihm, damit wir Frieden haben, und durch seine Wunden sind wir geheilt.",
      },
    ],
  },
  {
    title: "Josua 24 — Mir und meinem Haus wollen wir dem Herrn dienen",
    sentences: [
      {
        en: "Now therefore fear the LORD, and serve him in sincerity and in truth.",
        target: "So fürchtet nun den Herrn und dient ihm in Aufrichtigkeit und Treue.",
      },
      {
        en: "And if it seem evil unto you to serve the LORD, choose you this day whom ye will serve.",
        target:
          "Wenn es euch aber nicht gefällt, dem Herrn zu dienen, so wählt heute, wem ihr dienen wollt.",
      },
      {
        en: "But as for me and my house, we will serve the LORD.",
        target: "Mir aber und meinem Haus wollen wir dem Herrn dienen.",
      },
    ],
  },
];

const PGP_CHAPTERS_DE: BookChapter[] = [
  {
    title: "Moses 1 — Das ist mein Werk und meine Herrlichkeit",
    sentences: [
      {
        en: "Behold, I am the Lord God Almighty, and Endless is my name.",
        target: "Siehe, ich bin der Herr, der Allmächtige Gott, und Endlos ist mein Name.",
      },
      {
        en: "For behold, this is my work and my glory—to bring to pass the immortality and eternal life of man.",
        target:
          "Denn sieh, dies ist mein Werk und meine Herrlichkeit — die Unsterblichkeit und das ewige Leben des Menschen zu verwirklichen.",
      },
      {
        en: "And now, Moses, my son, I will speak unto thee concerning this earth upon which thou standest.",
        target:
          "Und nun, Moses, mein Sohn, will ich mit dir über diese Erde sprechen, auf der du stehst.",
      },
    ],
  },
  {
    title: "Joseph Smith — Geschichte 1 — Die erste Vision",
    sentences: [
      {
        en: "I saw two Personages, whose brightness and glory defy all description.",
        target:
          "Ich sah zwei Personages, deren Glanz und Herrlichkeit alle Beschreibung übertreffen.",
      },
      {
        en: "Standing above me in the air. One of them spake unto me, calling me by name.",
        target:
          "Sie standen über mir in der Luft. Einer von ihnen sprach mich an und nannte mich bei meinem Namen.",
      },
      {
        en: "And said, pointing to the other: This is My Beloved Son. Hear Him!",
        target: "Und sprach, auf den anderen zeigend: Dies ist mein geliebter Sohn. Hört ihn!",
      },
      {
        en: "I had actually seen a light, and in the midst of that light I saw two Personages, and they did in reality speak to me.",
        target:
          "Ich hatte tatsächlich ein Licht gesehen, und inmitten dieses Lichts sah ich zwei Personages, und sie sprachen wirklich zu mir.",
      },
    ],
  },
  {
    title: "Glaubensartikel 1-5",
    sentences: [
      {
        en: "We believe in God, the Eternal Father, and in His Son, Jesus Christ, and in the Holy Ghost.",
        target:
          "Wir glauben an Gott, den Ewigen Vater, und an seinen Sohn, Jesus Christus, und an den Heiligen Geist.",
      },
      {
        en: "We believe that men will be punished for their own sins, and not for Adam's transgression.",
        target:
          "Wir glauben, dass die Menschen für ihre eigenen Sünden bestraft werden und nicht für Adams Übertretung.",
      },
      {
        en: "We believe that through the Atonement of Christ, all mankind may be saved, by obedience to the laws and ordinances of the Gospel.",
        target:
          "Wir glauben, dass durch die Sühne Christi alle Menschen gerettet werden können, indem sie den Gesetzen und Verordnungen des Evangeliums gehorchen.",
      },
      {
        en: "We believe that the first principles and ordinances of the Gospel are: first, Faith in the Lord Jesus Christ.",
        target:
          "Wir glauben, dass die ersten Grundsätze und Verordnungen des Evangeliums sind: erstens Glaube an den Herrn Jesus Christus.",
      },
      {
        en: "Second, Repentance; third, Baptism by immersion for the remission of sins; fourth, Laying on of hands for the gift of the Holy Ghost.",
        target:
          "Zweitens Buße; drittens Taufe durch Untertauchen zur Vergebung der Sünden; viertens Auflegung der Hände für die Gabe des Heiligen Geistes.",
      },
    ],
  },
  {
    title: "Glaubensartikel 6-13",
    sentences: [
      {
        en: "We believe in the same organization that existed in the Primitive Church, namely, apostles, prophets, pastors, teachers, evangelists, and so forth.",
        target:
          "Wir glauben an dieselbe Organisation, die in der ursprünglichen Kirche bestand, nämlich: Apostel, Propheten, Hirten, Lehrer, Evangelisten und so weiter.",
      },
      {
        en: "We believe in the gift of tongues, prophecy, revelation, visions, healing, interpretation of tongues, and so forth.",
        target:
          "Wir glauben an die Gabe der Zungen, Prophezeiung, Offenbarung, Visionen, Heilung, Deutung der Zungen und so weiter.",
      },
      {
        en: "We believe the Bible to be the word of God as far as it is translated correctly; we also believe the Book of Mormon to be the word of God.",
        target:
          "Wir glauben, dass die Bibel das Wort Gottes ist, soweit sie richtig übersetzt ist; wir glauben auch, dass das Buch Mormon das Wort Gottes ist.",
      },
      {
        en: "We believe in being honest, true, chaste, benevolent, virtuous, and in doing good to all men.",
        target:
          "Wir glauben daran, ehrlich, aufrichtig, keusch, wohlwollend, tugendhaft zu sein und allen Menschen Gutes zu tun.",
      },
      {
        en: "If there is anything virtuous, lovely, or of good report or praiseworthy, we seek after these things.",
        target:
          "Wenn es etwas Tugendhaftes, Liebliches oder Lobenswürdiges gibt, suchen wir nach diesen Dingen.",
      },
    ],
  },
];

export const LDS_SCRIPTURES_DE: LibraryEntry[] = [
  {
    id: "missionary-book-of-mormon-de",
    title: "The Book of Mormon",
    subtitle: "Ein weiteres Testament Jesu Christi",
    language: "German",
    targetLabel: "Deutsch",
    level: "C1" as const,
    section: "missionary" as const,
    flag: "📖",
    available: true,
    sentences: BOM_CHAPTERS_DE[0].sentences,
    chapters: BOM_CHAPTERS_DE,
  },
  {
    id: "missionary-doctrine-and-covenants-de",
    title: "Doctrine and Covenants",
    subtitle: "Offenbarungen gegeben an Joseph Smith und seine Nachfolger",
    language: "German",
    targetLabel: "Deutsch",
    level: "C1" as const,
    section: "missionary" as const,
    flag: "📜",
    available: true,
    sentences: DC_CHAPTERS_DE[0].sentences,
    chapters: DC_CHAPTERS_DE,
  },
  {
    id: "missionary-new-testament-kjv-de",
    title: "New Testament — KJV",
    subtitle: "Ausgewählte Abschnitte, King-James-Übersetzung (gemeinfrei)",
    language: "German",
    targetLabel: "Deutsch",
    level: "C1" as const,
    section: "missionary" as const,
    flag: "✝️",
    available: true,
    sentences: NT_CHAPTERS_DE[0].sentences,
    chapters: NT_CHAPTERS_DE,
  },
  {
    id: "missionary-old-testament-kjv-de",
    title: "Old Testament — KJV",
    subtitle: "Ausgewählte Abschnitte, King-James-Übersetzung (gemeinfrei)",
    language: "German",
    targetLabel: "Deutsch",
    level: "C1" as const,
    section: "missionary" as const,
    flag: "✡️",
    available: true,
    sentences: OT_CHAPTERS_DE[0].sentences,
    chapters: OT_CHAPTERS_DE,
  },
  {
    id: "missionary-pearl-of-great-price-de",
    title: "Pearl of Great Price",
    subtitle: "Auswahl aus Mose, Abraham, Joseph Smith und den Glaubensartikeln",
    language: "German",
    targetLabel: "Deutsch",
    level: "C1" as const,
    section: "missionary" as const,
    flag: "🕊️",
    available: true,
    sentences: PGP_CHAPTERS_DE[0].sentences,
    chapters: PGP_CHAPTERS_DE,
  },
];

// ── ITALIAN ─────────────────────────────────────────────────────────────────

const BOM_CHAPTERS_IT: BookChapter[] = [
  {
    title: "1 Nefi 1 — Io, Nefi, nato da genitori buoni",
    sentences: [
      {
        en: "I, Nephi, having been born of goodly parents, therefore I was taught somewhat in all the learning of my father.",
        target:
          "Io, Nefi, nato da genitori buoni, sono stato quindi istruito in tutta la sapienza di mio padre.",
      },
      {
        en: "And having seen many afflictions in the course of my days, nevertheless, having been highly favored of the Lord in all my days.",
        target:
          "E avendo visto molte afflizioni nel corso dei miei giorni, sono stato tuttavia molto favorito dal Signore in tutti i miei giorni.",
      },
      {
        en: "I make a record of my proceedings in my days.",
        target: "Faccio un registro delle mie azioni nei miei giorni.",
      },
      {
        en: "And I know that the record which I make is true; and I make it with mine own hand.",
        target: "E so che il registro che faccio è vero; e lo faccio con la mia propria mano.",
      },
    ],
  },
  {
    title: "1 Nefi 3:7 — Andrò e farò le cose",
    sentences: [
      {
        en: "And it came to pass that I, Nephi, said unto my father: I will go and do the things which the Lord hath commanded.",
        target:
          "E avvenne che io, Nefi, dissi a mio padre: Andrò e farò le cose che il Signore ha comandato.",
      },
      {
        en: "For I know that the Lord giveth no commandments unto the children of men, save he shall prepare a way for them.",
        target:
          "Poiché so che il Signore non dà comandamenti ai figli degli uomini senza preparare loro una via.",
      },
      {
        en: "That they may accomplish the thing which he commandeth them.",
        target: "Affinché possano compiere ciò che egli comanda loro.",
      },
    ],
  },
  {
    title: "Mosia 2 — Il discorso di Re Beniamino",
    sentences: [
      {
        en: "I say unto you that if ye should serve him who has created you from the beginning.",
        target: "Vi dico che se doveste servire colui che vi ha creato dal principio.",
      },
      {
        en: "And is preserving you from day to day, by lending you breath, that ye may live and move.",
        target:
          "E vi preserva di giorno in giorno, prestandovi il respiro, affinché possiate vivere e muovervi.",
      },
      {
        en: "I would desire that ye should consider on the blessed and happy state of those that keep the commandments of God.",
        target:
          "Desidero che consideriate lo stato benedetto e felice di coloro che osservano i comandamenti di Dio.",
      },
      {
        en: "For they are blessed in all things, both temporal and spiritual.",
        target: "Poiché sono benedetti in ogni cosa, sia temporale che spirituale.",
      },
    ],
  },
  {
    title: "2 Nefi 2 — Adamo cadde affinché gli uomini potessero esistere",
    sentences: [
      {
        en: "Adam fell that men might be; and men are, that they might have joy.",
        target:
          "Adamo cadde affinché gli uomini potessero esistere; e gli uomini esistono affinché possano avere gioia.",
      },
      {
        en: "And the Messiah cometh in the fulness of time, that he may redeem the children of men from the fall.",
        target:
          "E il Messia viene nella pienezza dei tempi, per riscattare i figli degli uomini dalla caduta.",
      },
      {
        en: "Wherefore, men are free according to the flesh; and all things are given them which are expedient unto man.",
        target:
          "Pertanto, gli uomini sono liberi secondo la carne, e sono date loro tutte le cose che sono utili all'uomo.",
      },
      {
        en: "And they are free to choose liberty and eternal life, through the great Mediator of all men.",
        target:
          "E sono liberi di scegliere la libertà e la vita eterna, tramite il grande Mediatore di tutti gli uomini.",
      },
    ],
  },
  {
    title: "2 Nefi 31 — La via della salvezza",
    sentences: [
      {
        en: "Wherefore, my beloved brethren, I know that if ye shall follow the Son, with full purpose of heart.",
        target:
          "Pertanto, miei amati fratelli, so che se seguirete il Figlio con piena determinazione di cuore.",
      },
      {
        en: "Witnessing unto the Father that ye are willing to take upon you the name of Christ, by baptism.",
        target:
          "Testimoniando al Padre che siete disposti ad assumere il nome di Cristo mediante il battesimo.",
      },
      {
        en: "Then shall ye receive the Holy Ghost; yea, then cometh the baptism of fire and of the Holy Ghost.",
        target:
          "Allora riceverete lo Spirito Santo; sì, allora viene il battesimo di fuoco e dello Spirito Santo.",
      },
      {
        en: "And then can ye speak with the tongue of angels, and shout praises unto the Holy One of Israel.",
        target:
          "E allora potrete parlare con la lingua degli angeli e inneggiare lodi al Santo d'Israele.",
      },
    ],
  },
  {
    title: "Alma 32 — La fede è come un seme",
    sentences: [
      {
        en: "Now, we will compare the word unto a seed.",
        target: "Ora, paragoneremo la parola a un seme.",
      },
      {
        en: "Now, if ye give place, that a seed may be planted in your heart, behold, if it be a true seed, it will begin to swell within your breasts.",
        target:
          "Ora, se farete posto affinché un seme sia piantato nel vostro cuore, se è un seme vero, comincerà a gonfiarsi nel vostro petto.",
      },
      {
        en: "And when you feel these swelling motions, ye will begin to say within yourselves: It must needs be that this is a good seed.",
        target:
          "E quando sentirete questi movimenti di gonfiamento, comincerete a dire in voi stessi: Deve essere che questo è un buon seme.",
      },
      {
        en: "For behold, it enlargeth my soul; yea, it enlighteneth my understanding.",
        target: "Poiché, ecco, allarga la mia anima; sì, illumina la mia comprensione.",
      },
      {
        en: "And it is discernible, therefore I must needs know that this is a good seed.",
        target: "Ed è percettibile, quindi devo necessariamente sapere che questo è un buon seme.",
      },
    ],
  },
  {
    title: "3 Nefi 11 — Cristo appare ai Nefiti",
    sentences: [
      {
        en: "Behold, I am Jesus Christ, whom the prophets testified shall come into the world.",
        target:
          "Ecco, io sono Gesù Cristo, del quale i profeti hanno testimoniato che sarebbe venuto nel mondo.",
      },
      {
        en: "And behold, I am the light and the life of the world.",
        target: "Ed ecco, io sono la luce e la vita del mondo.",
      },
      {
        en: "And I have drunk out of that bitter cup which the Father hath given me.",
        target: "E ho bevuto da quel calice amaro che il Padre mi ha dato.",
      },
      {
        en: "Arise and come forth unto me, that ye may thrust your hands into my side.",
        target: "Alzatevi e venite da me, affinché possiate mettere le vostre mani nel mio fianco.",
      },
      {
        en: "That ye may know that I am the God of Israel, and have been slain for the sins of the world.",
        target:
          "Affinché sappiate che io sono il Dio d'Israele, e sono stato ucciso per i peccati del mondo.",
      },
    ],
  },
  {
    title: "Moroni 10:3-5 — La promessa di Moroni",
    sentences: [
      {
        en: "Behold, I would exhort you that when ye shall read these things, ye would remember how merciful the Lord hath been unto the children of men.",
        target:
          "Ecco, vi esorto che quando leggerete queste cose, ricordiate quanto il Signore sia stato misericordioso verso i figli degli uomini.",
      },
      {
        en: "And ponder it in your hearts.",
        target: "E meditatelo nei vostri cuori.",
      },
      {
        en: "And when ye shall receive these things, I would exhort you that ye would ask God, the Eternal Father, in the name of Christ, if these things are not true.",
        target:
          "E quando avrete ricevuto queste cose, vi esorto a chiedere a Dio, il Padre Eterno, nel nome di Cristo, se queste cose non siano vere.",
      },
      {
        en: "And if ye shall ask with a sincere heart, with real intent, having faith in Christ, he will manifest the truth of it unto you, by the power of the Holy Ghost.",
        target:
          "E se chiederete con un cuore sincero, con vera intenzione, avendo fede in Cristo, egli vi manifesterà la verità di ciò mediante il potere dello Spirito Santo.",
      },
      {
        en: "And by the power of the Holy Ghost ye may know the truth of all things.",
        target: "E mediante il potere dello Spirito Santo potete conoscere la verità di ogni cosa.",
      },
    ],
  },
];

const DC_CHAPTERS_IT: BookChapter[] = [
  {
    title: "Dottrina e Alleanze 1 — Ascoltate, o voi popolo della mia chiesa",
    sentences: [
      {
        en: "Hearken, O ye people of my church, saith the voice of him who dwells on high.",
        target:
          "Ascoltate, o voi popolo della mia chiesa, dice la voce di colui che dimora in alto.",
      },
      {
        en: "Search these commandments, for they are true and faithful.",
        target: "Scrutate questi comandamenti, poiché sono veri e fedeli.",
      },
      {
        en: "And the prophecies and promises which are in them shall all be fulfilled.",
        target: "E le profezie e le promesse che vi sono contenute si adempiranno tutte.",
      },
      {
        en: "What I the Lord have spoken, I have spoken, and I excuse not myself.",
        target: "Ciò che io, il Signore, ho detto, ho detto, e non mi giustifico.",
      },
    ],
  },
  {
    title: "Dottrina e Alleanze 76 — I tre gradi di gloria",
    sentences: [
      {
        en: "And we saw the glory of the Son, on the right hand of the Father, and received of his fulness.",
        target:
          "E vedemmo la gloria del Figlio, alla destra del Padre, e ricevemmo della sua pienezza.",
      },
      {
        en: "The glory of the celestial is one, even as the glory of the sun is one.",
        target: "La gloria del regno celeste è una, come la gloria del sole è una.",
      },
      {
        en: "And the glory of the terrestrial is one, even as the glory of the moon is one.",
        target: "E la gloria del regno terrestre è una, come la gloria della luna è una.",
      },
      {
        en: "And the glory of the telestial is one, even as the glory of the stars is one.",
        target: "E la gloria del regno teleste è una, come la gloria delle stelle è una.",
      },
    ],
  },
  {
    title: "Dottrina e Alleanze 88 — La luce di Cristo",
    sentences: [
      {
        en: "The light of Christ, which light proceedeth forth from the presence of God to fill the immensity of space.",
        target:
          "La luce di Cristo, che procede dalla presenza di Dio per riempire l'immensità dello spazio.",
      },
      {
        en: "Is the light which is in all things, which giveth life to all things.",
        target: "È la luce che è in tutte le cose, che dà vita a tutte le cose.",
      },
      {
        en: "Seek learning, even by study and also by faith.",
        target: "Cercate l'istruzione, sia mediante lo studio che mediante la fede.",
      },
      {
        en: "The glory of God is intelligence, or, in other words, light and truth.",
        target: "La gloria di Dio è intelligenza, o in altre parole, luce e verità.",
      },
    ],
  },
  {
    title: "Dottrina e Alleanze 121 — Nessuna influenza mediante coercizione",
    sentences: [
      {
        en: "No power or influence can or ought to be maintained by virtue of the priesthood.",
        target:
          "Nessun potere o influenza può o dovrebbe essere mantenuto in virtù del sacerdozio.",
      },
      {
        en: "Only by persuasion, by long-suffering, by gentleness and meekness, and by love unfeigned.",
        target:
          "Solo mediante persuasione, pazienza, dolcezza e mansuetudine, e mediante amore sincero.",
      },
      {
        en: "By kindness, and pure knowledge, which shall greatly enlarge the soul without hypocrisy.",
        target:
          "Mediante bontà e pura conoscenza, che amplierà grandemente l'anima senza ipocrisia.",
      },
    ],
  },
  {
    title: "Dottrina e Alleanze 130 — Intelligenza e gloria",
    sentences: [
      {
        en: "Whatever principle of intelligence we attain unto in this life, it will rise with us in the resurrection.",
        target:
          "Qualunque principio di intelligenza raggiungiamo in questa vita, si eleverà con noi nella risurrezione.",
      },
      {
        en: "And if a person gains more knowledge and intelligence in this life through his diligence and obedience than another, he will have so much the advantage in the world to come.",
        target:
          "E se una persona acquisisce più conoscenza e intelligenza in questa vita mediante la sua diligenza e obbedienza di un'altra, avrà tanto vantaggio nel mondo a venire.",
      },
      {
        en: "The glory of God is intelligence, or, in other words, light and truth.",
        target: "La gloria di Dio è intelligenza, o in altre parole, luce e verità.",
      },
    ],
  },
];

const NT_CHAPTERS_IT: BookChapter[] = [
  {
    title: "Matteo 5 — Le Beatitudini",
    sentences: [
      {
        en: "Blessed are the poor in spirit: for theirs is the kingdom of heaven.",
        target: "Beati i poveri in spirito, perché di essi è il regno dei cieli.",
      },
      {
        en: "Blessed are they that mourn: for they shall be comforted.",
        target: "Beati quelli che sono nel pianto, perché saranno consolati.",
      },
      {
        en: "Blessed are the meek: for they shall inherit the earth.",
        target: "Beati i mansueti, perché erediteranno la terra.",
      },
      {
        en: "Blessed are they which do hunger and thirst after righteousness: for they shall be filled.",
        target: "Beati quelli che hanno fame e sete della giustizia, perché saranno saziati.",
      },
      {
        en: "Blessed are the pure in heart: for they shall see God.",
        target: "Beati i puri di cuore, perché vedranno Dio.",
      },
      {
        en: "Blessed are the peacemakers: for they shall be called the children of God.",
        target: "Beati gli operatori di pace, perché saranno chiamati figli di Dio.",
      },
    ],
  },
  {
    title: "Giovanni 3:16-17 — Dio ha tanto amato il mondo",
    sentences: [
      {
        en: "For God so loved the world, that he gave his only begotten Son.",
        target: "Poiché Dio ha tanto amato il mondo, che ha dato il suo unigenito Figlio.",
      },
      {
        en: "That whosoever believeth in him should not perish, but have everlasting life.",
        target: "Affinché chiunque crede in lui non perisca, ma abbia vita eterna.",
      },
      {
        en: "For God sent not his Son into the world to condemn the world; but that the world through him might be saved.",
        target:
          "Dio infatti non ha mandato il Figlio nel mondo per condannare il mondo, ma perché il mondo sia salvato per mezzo di lui.",
      },
    ],
  },
  {
    title: "Giovanni 17 — La preghiera sacerdotale",
    sentences: [
      {
        en: "And this is life eternal, that they might know thee the only true God, and Jesus Christ, whom thou hast sent.",
        target:
          "Or questa è la vita eterna: che conoscano te, il solo vero Dio, e colui che hai mandato, Gesù Cristo.",
      },
      {
        en: "I have glorified thee on the earth: I have finished the work which thou gavest me to do.",
        target: "Io ti ho glorificato sulla terra; ho compiuto l'opera che mi hai dato da fare.",
      },
      {
        en: "Neither pray I for these alone, but for them also which shall believe on me through their word.",
        target:
          "E non prego solo per questi, ma anche per quelli che crederanno in me per mezzo della loro parola.",
      },
    ],
  },
  {
    title: "Giacomo 1:5 — Se qualcuno manca di sapienza",
    sentences: [
      {
        en: "If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not.",
        target:
          "Se qualcuno di voi manca di sapienza, la chieda a Dio, che dà a tutti liberalmente e senza rinfacciare.",
      },
      {
        en: "And it shall be given him. But let him ask in faith, nothing wavering.",
        target: "E gli sarà data. Ma la chieda con fede, senza dubitare.",
      },
      {
        en: "For he that wavereth is like a wave of the sea driven with the wind and tossed.",
        target: "Poiché chi dubita è simile a un'onda del mare, spinta e agitata dal vento.",
      },
    ],
  },
  {
    title: "Apocalisse 14 — Il messaggio del Vangelo eterno",
    sentences: [
      {
        en: "And I saw another angel fly in the midst of heaven, having the everlasting gospel to preach unto them that dwell on the earth.",
        target:
          "E vidi un altro angelo volare in mezzo al cielo, che aveva un Vangelo eterno da annunziare a quanti abitano sulla terra.",
      },
      {
        en: "Saying with a loud voice, Fear God, and give glory to him; for the hour of his judgment is come.",
        target:
          "Egli diceva con gran voce: Temete Dio e dategli gloria, perché l'ora del suo giudizio è venuta.",
      },
      {
        en: "And worship him that made heaven, and earth, and the sea, and the fountains of waters.",
        target:
          "E adorate colui che ha fatto il cielo e la terra, il mare e le sorgenti delle acque.",
      },
    ],
  },
];

const OT_CHAPTERS_IT: BookChapter[] = [
  {
    title: "Genesi 1 — In principio Dio creò",
    sentences: [
      {
        en: "In the beginning God created the heaven and the earth.",
        target: "In principio Dio creò i cieli e la terra.",
      },
      {
        en: "And God said, Let there be light: and there was light.",
        target: "E Dio disse: Sia la luce! E la luce fu.",
      },
      {
        en: "And God saw every thing that he had made, and, behold, it was very good.",
        target: "E Dio vide tutto quello che aveva fatto; ed ecco, era cosa molto buona.",
      },
    ],
  },
  {
    title: "Salmo 23 — Il Signore è il mio pastore",
    sentences: [
      {
        en: "The LORD is my shepherd; I shall not want.",
        target: "Il Signore è il mio pastore; nulla mi mancherà.",
      },
      {
        en: "He maketh me to lie down in green pastures: he leadeth me beside the still waters.",
        target: "Mi fa riposare in pascoli erbosi; mi conduce presso acque tranquille.",
      },
      {
        en: "He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake.",
        target:
          "Egli rinfranca l'anima mia; mi conduce per i sentieri della giustizia a causa del suo nome.",
      },
      {
        en: "Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me.",
        target:
          "Anche se camminassi nella valle dell'ombra della morte, non temerei alcun male, perché tu sei con me.",
      },
    ],
  },
  {
    title: "Isaia 53 — Il servo sofferente",
    sentences: [
      {
        en: "He is despised and rejected of men; a man of sorrows, and acquainted with grief.",
        target:
          "Era disprezzato e reietto dagli uomini, uomo di dolori, familiare con la sofferenza.",
      },
      {
        en: "Surely he hath borne our griefs, and carried our sorrows.",
        target: "Eppure egli ha portato le nostre malattie e si è caricato dei nostri dolori.",
      },
      {
        en: "But he was wounded for our transgressions, he was bruised for our iniquities.",
        target:
          "Ma egli è stato trafitto per le nostre trasgressioni, schiacciato per le nostre iniquità.",
      },
      {
        en: "The chastisement of our peace was upon him; and with his stripes we are healed.",
        target:
          "Il castigo che ci dà la pace è caduto su di lui, e mediante le sue piaghe siamo stati guariti.",
      },
    ],
  },
  {
    title: "Giosuè 24 — Quanto a me e alla mia casa serviremo il Signore",
    sentences: [
      {
        en: "Now therefore fear the LORD, and serve him in sincerity and in truth.",
        target: "Ora dunque temete il Signore e servitelo con sincerità e fedeltà.",
      },
      {
        en: "And if it seem evil unto you to serve the LORD, choose you this day whom ye will serve.",
        target: "E se vi sembra male servire il Signore, scegliete oggi chi volete servire.",
      },
      {
        en: "But as for me and my house, we will serve the LORD.",
        target: "Quanto a me e alla mia casa, serviremo il Signore.",
      },
    ],
  },
];

const PGP_CHAPTERS_IT: BookChapter[] = [
  {
    title: "Mosè 1 — Questa è l'opera mia e la mia gloria",
    sentences: [
      {
        en: "Behold, I am the Lord God Almighty, and Endless is my name.",
        target: "Ecco, io sono il Signore Dio Onnipotente, e il mio nome è Infinito.",
      },
      {
        en: "For behold, this is my work and my glory—to bring to pass the immortality and eternal life of man.",
        target:
          "Poiché ecco, questa è l'opera mia e la mia gloria — realizzare l'immortalità e la vita eterna dell'uomo.",
      },
      {
        en: "And now, Moses, my son, I will speak unto thee concerning this earth upon which thou standest.",
        target: "E ora, Mosè figlio mio, ti parlerò di questa terra su cui stai.",
      },
    ],
  },
  {
    title: "Joseph Smith — Storia 1 — La prima visione",
    sentences: [
      {
        en: "I saw two Personages, whose brightness and glory defy all description.",
        target: "Vidi due Personaggi, il cui splendore e gloria sfidano ogni descrizione.",
      },
      {
        en: "Standing above me in the air. One of them spake unto me, calling me by name.",
        target: "Stavano sopra di me nell'aria. Uno di loro mi parlò, chiamandomi per nome.",
      },
      {
        en: "And said, pointing to the other: This is My Beloved Son. Hear Him!",
        target: "E disse, indicando l'altro: Questo è il mio Figlio diletto. Ascoltalo!",
      },
      {
        en: "I had actually seen a light, and in the midst of that light I saw two Personages, and they did in reality speak to me.",
        target:
          "Avevo effettivamente visto una luce, e in mezzo a quella luce vidi due Personaggi, e mi parlarono veramente.",
      },
    ],
  },
  {
    title: "Articoli di Fede 1-5",
    sentences: [
      {
        en: "We believe in God, the Eternal Father, and in His Son, Jesus Christ, and in the Holy Ghost.",
        target:
          "Crediamo in Dio, il Padre Eterno, e in Suo Figlio, Gesù Cristo, e nello Spirito Santo.",
      },
      {
        en: "We believe that men will be punished for their own sins, and not for Adam's transgression.",
        target:
          "Crediamo che gli uomini saranno puniti per i propri peccati e non per la trasgressione di Adamo.",
      },
      {
        en: "We believe that through the Atonement of Christ, all mankind may be saved, by obedience to the laws and ordinances of the Gospel.",
        target:
          "Crediamo che mediante l'Espiazione di Cristo, tutta l'umanità possa essere salvata, mediante l'ubbidienza alle leggi e alle ordinanze del Vangelo.",
      },
      {
        en: "We believe that the first principles and ordinances of the Gospel are: first, Faith in the Lord Jesus Christ.",
        target:
          "Crediamo che i primi principi e le ordinanze del Vangelo siano: primo, la fede nel Signore Gesù Cristo.",
      },
      {
        en: "Second, Repentance; third, Baptism by immersion for the remission of sins; fourth, Laying on of hands for the gift of the Holy Ghost.",
        target:
          "Secondo, il pentimento; terzo, il battesimo mediante immersione per la remissione dei peccati; quarto, l'imposizione delle mani per il dono dello Spirito Santo.",
      },
    ],
  },
  {
    title: "Articoli di Fede 6-13",
    sentences: [
      {
        en: "We believe in the same organization that existed in the Primitive Church, namely, apostles, prophets, pastors, teachers, evangelists, and so forth.",
        target:
          "Crediamo nella stessa organizzazione che esisteva nella Chiesa primitiva, cioè: apostoli, profeti, pastori, insegnanti, evangelisti e così via.",
      },
      {
        en: "We believe in the gift of tongues, prophecy, revelation, visions, healing, interpretation of tongues, and so forth.",
        target:
          "Crediamo nel dono delle lingue, nella profezia, nella rivelazione, nelle visioni, nella guarigione, nell'interpretazione delle lingue e così via.",
      },
      {
        en: "We believe the Bible to be the word of God as far as it is translated correctly; we also believe the Book of Mormon to be the word of God.",
        target:
          "Crediamo che la Bibbia sia la parola di Dio nei limiti in cui è tradotta correttamente; crediamo anche che il Libro di Mormon sia la parola di Dio.",
      },
      {
        en: "We believe in being honest, true, chaste, benevolent, virtuous, and in doing good to all men.",
        target:
          "Crediamo nell'essere onesti, veri, casti, benevoli, virtuosi, e nel fare del bene a tutti gli uomini.",
      },
      {
        en: "If there is anything virtuous, lovely, or of good report or praiseworthy, we seek after these things.",
        target:
          "Se c'è qualcosa di virtuoso, amabile, di buona reputazione o degno di lode, cerchiamo queste cose.",
      },
    ],
  },
];

export const LDS_SCRIPTURES_IT: LibraryEntry[] = [
  {
    id: "missionary-book-of-mormon-it",
    title: "The Book of Mormon",
    subtitle: "Un altro testamento di Gesù Cristo",
    language: "Italian",
    targetLabel: "Italiano",
    level: "C1" as const,
    section: "missionary" as const,
    flag: "📖",
    available: true,
    sentences: BOM_CHAPTERS_IT[0].sentences,
    chapters: BOM_CHAPTERS_IT,
  },
  {
    id: "missionary-doctrine-and-covenants-it",
    title: "Doctrine and Covenants",
    subtitle: "Rivelazioni date a Joseph Smith e ai suoi successori",
    language: "Italian",
    targetLabel: "Italiano",
    level: "C1" as const,
    section: "missionary" as const,
    flag: "📜",
    available: true,
    sentences: DC_CHAPTERS_IT[0].sentences,
    chapters: DC_CHAPTERS_IT,
  },
  {
    id: "missionary-new-testament-kjv-it",
    title: "New Testament — KJV",
    subtitle: "Passi scelti, versione King James (dominio pubblico)",
    language: "Italian",
    targetLabel: "Italiano",
    level: "C1" as const,
    section: "missionary" as const,
    flag: "✝️",
    available: true,
    sentences: NT_CHAPTERS_IT[0].sentences,
    chapters: NT_CHAPTERS_IT,
  },
  {
    id: "missionary-old-testament-kjv-it",
    title: "Old Testament — KJV",
    subtitle: "Passi scelti, versione King James (dominio pubblico)",
    language: "Italian",
    targetLabel: "Italiano",
    level: "C1" as const,
    section: "missionary" as const,
    flag: "✡️",
    available: true,
    sentences: OT_CHAPTERS_IT[0].sentences,
    chapters: OT_CHAPTERS_IT,
  },
  {
    id: "missionary-pearl-of-great-price-it",
    title: "Pearl of Great Price",
    subtitle: "Selezioni da Mosè, Abramo, Joseph Smith e gli Articoli di Fede",
    language: "Italian",
    targetLabel: "Italiano",
    level: "C1" as const,
    section: "missionary" as const,
    flag: "🕊️",
    available: true,
    sentences: PGP_CHAPTERS_IT[0].sentences,
    chapters: PGP_CHAPTERS_IT,
  },
];
