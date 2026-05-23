// LDS Scripture library — key missionary passages in Japanese and Korean.
// Japanese follows LDS Japan official usage (モルモン書, 教義と聖約, 主, 神, 聖霊, 悔い改め, バプテスマ).
// Korean follows LDS Korea official usage (몰몬경, 교리와 성약, 주님, 하나님, 성령, 회개, 침례).
// English `en` fields are KJV / standard LDS English source text (public domain).
// All selections are excerpted; not the complete scripture text.

import type { LibraryEntry, BookChapter } from "@/state/library-state";
import type { SentencePair } from "@/data/library";

// ── JAPANESE ────────────────────────────────────────────────────────────────

const BOM_CHAPTERS_JA: BookChapter[] = [
  {
    title: "ニーファイ第一書 1章 — わたしニーファイは良い両親のもとに生まれ",
    sentences: [
      {
        en: "I, Nephi, having been born of goodly parents, therefore I was taught somewhat in all the learning of my father.",
        target:
          "わたしニーファイは良い両親のもとに生まれ、したがって父の学問のすべてをある程度教えられた。",
      },
      {
        en: "And having seen many afflictions in the course of my days, nevertheless, having been highly favored of the Lord in all my days.",
        target:
          "また生涯の中で多くの苦難を見てきたが、それにもかかわらず、生涯のすべてにわたって主に大いに恵まれてきた。",
      },
      {
        en: "I make a record of my proceedings in my days.",
        target: "わたしは自分の生涯の出来事の記録を作る。",
      },
      {
        en: "And I know that the record which I make is true; and I make it with mine own hand.",
        target:
          "そしてわたしが作る記録は真実であることを知っている。わたしはそれを自分の手で作っている。",
      },
    ],
  },
  {
    title: "ニーファイ第一書 3章7節 — 行って主の命じられたことを行う",
    sentences: [
      {
        en: "And it came to pass that I, Nephi, said unto my father: I will go and do the things which the Lord hath commanded.",
        target:
          "そしてわたしニーファイは父に言った。わたしは行って、主が命じられたことを行います。",
      },
      {
        en: "For I know that the Lord giveth no commandments unto the children of men, save he shall prepare a way for them.",
        target:
          "なぜなら主は、その道を備えることなしには、人の子らに戒めをお与えにならないことを知っているからです。",
      },
      {
        en: "That they may accomplish the thing which he commandeth them.",
        target: "それは彼らが主の命じられたことを成し遂げることができるためです。",
      },
    ],
  },
  {
    title: "第二ニーファイ 2章 — アダムは堕ちた、それは人が存在するため",
    sentences: [
      {
        en: "Adam fell that men might be; and men are, that they might have joy.",
        target:
          "アダムは堕ちた。それは人が存在するためである。そして人は存在する、それは喜びを持つためである。",
      },
      {
        en: "And the Messiah cometh in the fulness of time, that he may redeem the children of men from the fall.",
        target: "そして救い主は時の満ちるときに来られる、それは人の子らを堕落から贖うためである。",
      },
      {
        en: "Wherefore, men are free according to the flesh; and all things are given them which are expedient unto man.",
        target:
          "それゆえ、人は肉体において自由である。そして人に必要なすべてのものが与えられている。",
      },
      {
        en: "And they are free to choose liberty and eternal life, through the great Mediator of all men.",
        target: "そして人は、すべての人の偉大な仲介者によって、自由と永遠の命を選ぶことができる。",
      },
    ],
  },
  {
    title: "アルマ書 32章 — 信仰は種のようなもの",
    sentences: [
      {
        en: "Now, we will compare the word unto a seed.",
        target: "さて、わたしたちは御言葉を種にたとえることにしよう。",
      },
      {
        en: "Now, if ye give place, that a seed may be planted in your heart, behold, if it be a true seed, it will begin to swell within your breasts.",
        target:
          "さて、もしあなたがたが心の中に種を植える場所を与えるなら、それが真の種であれば、胸の中で膨らみ始めるであろう。",
      },
      {
        en: "And when you feel these swelling motions, ye will begin to say within yourselves: It must needs be that this is a good seed.",
        target:
          "そしてこの膨らむ動きを感じるとき、あなたがたは心の中でこう言い始めるであろう。これは良い種に違いない。",
      },
      {
        en: "For behold, it enlargeth my soul; yea, it enlighteneth my understanding.",
        target: "なぜなら、見よ、それはわたしの魂を広げ、わたしの理解を照らすからだ。",
      },
    ],
  },
  {
    title: "第三ニーファイ 11章 — キリストはニーファイ人の前に現れる",
    sentences: [
      {
        en: "Behold, I am Jesus Christ, whom the prophets testified shall come into the world.",
        target:
          "見よ、わたしはイエス・キリストである。預言者たちが世に来ると証したのはわたしのことである。",
      },
      {
        en: "And behold, I am the light and the life of the world.",
        target: "そして見よ、わたしは世の光であり命である。",
      },
      {
        en: "And I have drunk out of that bitter cup which the Father hath given me.",
        target: "そしてわたしは父がわたしに与えられた苦い杯を飲み干した。",
      },
      {
        en: "Arise and come forth unto me, that ye may thrust your hands into my side.",
        target:
          "起き上がって、わたしのもとに来なさい。そして手をわたしのわき腹に差し入れることができる。",
      },
      {
        en: "That ye may know that I am the God of Israel, and have been slain for the sins of the world.",
        target: "それはわたしがイスラエルの神であり、世の罪のために殺されたことを知るためである。",
      },
    ],
  },
  {
    title: "モロナイ書 10章3-5節 — モロナイの約束",
    sentences: [
      {
        en: "Behold, I would exhort you that when ye shall read these things, ye would remember how merciful the Lord hath been unto the children of men.",
        target:
          "見よ、わたしはあなたがたに勧めたい。これらのことを読むとき、主が人の子らにいかに慈悲深くあられたかを覚えてほしい。",
      },
      {
        en: "And ponder it in your hearts.",
        target: "そして心の中でそれについて考えてほしい。",
      },
      {
        en: "And when ye shall receive these things, I would exhort you that ye would ask God, the Eternal Father, in the name of Christ, if these things are not true.",
        target:
          "そしてこれらのことを受け取ったとき、永遠の父なる神に、キリストの名において、これらのことが真実でないかどうかを尋ねるよう勧めたい。",
      },
      {
        en: "And if ye shall ask with a sincere heart, with real intent, having faith in Christ, he will manifest the truth of it unto you, by the power of the Holy Ghost.",
        target:
          "そしてもし誠実な心と真の意図をもって、キリストへの信仰を持って尋ねるなら、聖霊の力によってその真実があなたがたに示されるであろう。",
      },
      {
        en: "And by the power of the Holy Ghost ye may know the truth of all things.",
        target: "そして聖霊の力によって、あなたがたはすべてのことの真実を知ることができる。",
      },
    ],
  },
];

const DC_CHAPTERS_JA: BookChapter[] = [
  {
    title: "教義と聖約 第1節 — わが教会の民よ、聞け",
    sentences: [
      {
        en: "Hearken, O ye people of my church, saith the voice of him who dwells on high.",
        target: "高いところに住まわれる方の声はこう言われる。わが教会の民よ、聞け。",
      },
      {
        en: "Search these commandments, for they are true and faithful.",
        target: "これらの戒めを探し求めなさい。それらは真実で信頼できるものだからである。",
      },
      {
        en: "And the prophecies and promises which are in them shall all be fulfilled.",
        target: "そしてそれらの中にある預言と約束はすべて成就するであろう。",
      },
    ],
  },
  {
    title: "教義と聖約 第76節 — 三つの栄光の王国",
    sentences: [
      {
        en: "And we saw the glory of the Son, on the right hand of the Father, and received of his fulness.",
        target:
          "そしてわたしたちは父の右に坐しておられる御子の栄光を見、その満ちたるものを受けた。",
      },
      {
        en: "The glory of the celestial is one, even as the glory of the sun is one.",
        target: "天的な栄光は一つであり、太陽の栄光が一つであるようなものである。",
      },
      {
        en: "And the glory of the terrestrial is one, even as the glory of the moon is one.",
        target: "そして地的な栄光は一つであり、月の栄光が一つであるようなものである。",
      },
      {
        en: "And the glory of the telestial is one, even as the glory of the stars is one.",
        target: "そして星的な栄光は一つであり、星の栄光が一つであるようなものである。",
      },
    ],
  },
  {
    title: "教義と聖約 第88節 — キリストの光",
    sentences: [
      {
        en: "The light of Christ, which light proceedeth forth from the presence of God to fill the immensity of space.",
        target: "キリストの光、その光は神の御前から出て、広大な宇宙を満たしている。",
      },
      {
        en: "Is the light which is in all things, which giveth life to all things.",
        target: "それはすべてのものの中にある光であり、すべてのものに命を与える光である。",
      },
      {
        en: "Seek learning, even by study and also by faith.",
        target: "学問を求めなさい。勉強によって、また信仰によっても。",
      },
    ],
  },
  {
    title: "教義と聖約 第121節 — 強制によらない影響力",
    sentences: [
      {
        en: "No power or influence can or ought to be maintained by virtue of the priesthood.",
        target:
          "神権の力によって、いかなる権力や影響力も維持することはできないし、すべきでもない。",
      },
      {
        en: "Only by persuasion, by long-suffering, by gentleness and meekness, and by love unfeigned.",
        target:
          "ただ説得によって、忍耐によって、柔和と謙遜によって、そして偽りのない愛によってのみ。",
      },
      {
        en: "By kindness, and pure knowledge, which shall greatly enlarge the soul without hypocrisy.",
        target: "親切と純粋な知識によって、偽善なしに魂を大いに広げることができる。",
      },
    ],
  },
  {
    title: "教義と聖約 第130節 — 知性と栄光",
    sentences: [
      {
        en: "Whatever principle of intelligence we attain unto in this life, it will rise with us in the resurrection.",
        target:
          "この生涯において獲得する知性のいかなる原則も、復活においてわたしたちと共に高められる。",
      },
      {
        en: "He will have so much the advantage in the world to come.",
        target: "その人は来世においてそれだけ多くの優位性を持つであろう。",
      },
      {
        en: "The glory of God is intelligence, or, in other words, light and truth.",
        target: "神の栄光は知性である。言い換えれば、光と真理である。",
      },
    ],
  },
];

const NT_CHAPTERS_JA: BookChapter[] = [
  {
    title: "マタイ 5章 — 幸いな人々",
    sentences: [
      {
        en: "Blessed are the poor in spirit: for theirs is the kingdom of heaven.",
        target: "心の貧しい人々は幸いである、天国はその人たちのものである。",
      },
      {
        en: "Blessed are they that mourn: for they shall be comforted.",
        target: "悲しむ人々は幸いである、その人たちは慰められるであろう。",
      },
      {
        en: "Blessed are the meek: for they shall inherit the earth.",
        target: "柔和な人々は幸いである、その人たちは地を受け継ぐであろう。",
      },
      {
        en: "Blessed are the pure in heart: for they shall see God.",
        target: "心の清い人々は幸いである、その人たちは神を見るであろう。",
      },
      {
        en: "Blessed are the peacemakers: for they shall be called the children of God.",
        target: "平和をつくり出す人々は幸いである、その人たちは神の子と呼ばれるであろう。",
      },
    ],
  },
  {
    title: "ヨハネ 3章16-17節 — 神はこのように世を愛してくださった",
    sentences: [
      {
        en: "For God so loved the world, that he gave his only begotten Son.",
        target: "神はこのように世を愛してくださった。神は独り子をお与えになったほどである。",
      },
      {
        en: "That whosoever believeth in him should not perish, but have everlasting life.",
        target: "それは御子を信じる者が一人も滅びないで、永遠の命を持つためである。",
      },
      {
        en: "For God sent not his Son into the world to condemn the world; but that the world through him might be saved.",
        target:
          "神が御子を世に遣わされたのは、世を裁くためではなく、御子によって世が救われるためである。",
      },
    ],
  },
  {
    title: "ヨハネ 17章 — 大祭司の祈り",
    sentences: [
      {
        en: "And this is life eternal, that they might know thee the only true God, and Jesus Christ, whom thou hast sent.",
        target:
          "永遠の命とは、唯一のまことの神であるあなたと、あなたのお遣わしになったイエス・キリストを知ることです。",
      },
      {
        en: "I have glorified thee on the earth: I have finished the work which thou gavest me to do.",
        target:
          "わたしは地上であなたに栄光を帰した。するようにとあなたが与えてくださった業を成し遂げた。",
      },
    ],
  },
  {
    title: "ヤコブ 1章5節 — 知恵を欠いているなら",
    sentences: [
      {
        en: "If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not.",
        target:
          "あなたがたの中で知恵を欠いている人がいれば、その人は神に求めなさい。神はすべての人に惜しみなく与え、とがめることなさらない。",
      },
      {
        en: "And it shall be given him. But let him ask in faith, nothing wavering.",
        target: "そうすれば与えられるであろう。ただし、疑わないで、信仰をもって求めなさい。",
      },
      {
        en: "For he that wavereth is like a wave of the sea driven with the wind and tossed.",
        target: "なぜなら疑う人は、風に吹かれて揺れ動く海の波のようなものだからである。",
      },
    ],
  },
  {
    title: "黙示録 14章 — 永遠の福音の御使い",
    sentences: [
      {
        en: "And I saw another angel fly in the midst of heaven, having the everlasting gospel to preach unto them that dwell on the earth.",
        target:
          "また別の御使いが天の中ほどを飛んでいるのを見た。地に住む人々、すべての国民、部族、言語、民族に宣べ伝える永遠の福音を持っていた。",
      },
      {
        en: "Saying with a loud voice, Fear God, and give glory to him; for the hour of his judgment is come.",
        target: "大声で言った。神を恐れ、神に栄光を帰せよ。神の審判の時が来たからである。",
      },
    ],
  },
];

const OT_CHAPTERS_JA: BookChapter[] = [
  {
    title: "創世記 1章 — はじめに神は天と地を創造された",
    sentences: [
      {
        en: "In the beginning God created the heaven and the earth.",
        target: "はじめに神は天と地を創造された。",
      },
      {
        en: "And God said, Let there be light: and there was light.",
        target: "神は「光あれ」と言われた。すると光があった。",
      },
      {
        en: "And God saw every thing that he had made, and, behold, it was very good.",
        target: "神はお造りになったすべてのものを御覧になった。見よ、それは極めて良かった。",
      },
    ],
  },
  {
    title: "詩篇 23篇 — 主はわたしの羊飼い",
    sentences: [
      {
        en: "The LORD is my shepherd; I shall not want.",
        target: "主はわたしの羊飼い、わたしには乏しいことがない。",
      },
      {
        en: "He maketh me to lie down in green pastures: he leadeth me beside the still waters.",
        target: "主はわたしを緑の牧場に伏させ、憩いの水のほとりに伴われる。",
      },
      {
        en: "He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake.",
        target: "主はわたしの魂を生き返らせ、御名のゆえに正しい道に導かれる。",
      },
      {
        en: "Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me.",
        target:
          "死の陰の谷を歩むときも、わたしは災いを恐れない、あなたがわたしと共にいてくださるから。",
      },
    ],
  },
  {
    title: "イザヤ 53章 — 苦難の僕",
    sentences: [
      {
        en: "He is despised and rejected of men; a man of sorrows, and acquainted with grief.",
        target: "彼は蔑まれ、人々から見捨てられ、多くの痛みを負い、病を知っている人であった。",
      },
      {
        en: "Surely he hath borne our griefs, and carried our sorrows.",
        target: "まことに彼はわたしたちの病を負い、わたしたちの痛みを担った。",
      },
      {
        en: "But he was wounded for our transgressions, he was bruised for our iniquities.",
        target:
          "しかし彼はわたしたちの背きのために刺し貫かれ、わたしたちの罪悪のために打ち砕かれた。",
      },
      {
        en: "The chastisement of our peace was upon him; and with his stripes we are healed.",
        target:
          "彼への懲らしめがわたしたちに平和をもたらし、彼の傷によってわたしたちはいやされた。",
      },
    ],
  },
];

const PGP_CHAPTERS_JA: BookChapter[] = [
  {
    title: "モーセ 1章 — これがわたしの業とわたしの栄光",
    sentences: [
      {
        en: "Behold, I am the Lord God Almighty, and Endless is my name.",
        target: "見よ、わたしは主なる全能の神であり、わたしの名は終わりなき者である。",
      },
      {
        en: "For behold, this is my work and my glory—to bring to pass the immortality and eternal life of man.",
        target:
          "見よ、これがわたしの業とわたしの栄光である—人の不死不滅と永遠の命をもたらすことである。",
      },
    ],
  },
  {
    title: "ジョセフ・スミス—歴史 1章 — 最初のビジョン",
    sentences: [
      {
        en: "I saw two Personages, whose brightness and glory defy all description.",
        target:
          "わたしは二つの人格体を見た。その輝きと栄光はいかなる言葉でも言い表せないものであった。",
      },
      {
        en: "Standing above me in the air. One of them spake unto me, calling me by name.",
        target:
          "空中のわたしの上に立っておられた。そのお一人がわたしの名前を呼んでわたしに話しかけられた。",
      },
      {
        en: "And said, pointing to the other: This is My Beloved Son. Hear Him!",
        target:
          "そしてもう一人を指さして言われた。これはわたしの愛する子である。彼の言うことを聞きなさい。",
      },
      {
        en: "I had actually seen a light, and in the midst of that light I saw two Personages, and they did in reality speak to me.",
        target:
          "わたしは確かに光を見た。そしてその光の中に二つの人格体を見た。そして彼らは実際にわたしに話しかけられた。",
      },
    ],
  },
  {
    title: "信仰箇条 1-5",
    sentences: [
      {
        en: "We believe in God, the Eternal Father, and in His Son, Jesus Christ, and in the Holy Ghost.",
        target:
          "わたしたちは永遠の父なる神を信じ、その御子イエス・キリストを信じ、また聖霊を信じる。",
      },
      {
        en: "We believe that men will be punished for their own sins, and not for Adam's transgression.",
        target: "わたしたちは人はアダムの罪のためではなく、自らの罪のために罰せられると信じる。",
      },
      {
        en: "We believe that through the Atonement of Christ, all mankind may be saved, by obedience to the laws and ordinances of the Gospel.",
        target:
          "わたしたちはキリストの贖いによって、福音の律法と儀式に従うことにより、すべての人が救われると信じる。",
      },
      {
        en: "We believe that the first principles and ordinances of the Gospel are: first, Faith in the Lord Jesus Christ.",
        target:
          "わたしたちは福音の最初の原則と儀式は次のとおりであると信じる。第一に主イエス・キリストへの信仰。",
      },
      {
        en: "Second, Repentance; third, Baptism by immersion for the remission of sins; fourth, Laying on of hands for the gift of the Holy Ghost.",
        target:
          "第二に悔い改め、第三に罪の赦しのための浸礼によるバプテスマ、第四に聖霊の賜物のための按手。",
      },
    ],
  },
  {
    title: "信仰箇条 6-13",
    sentences: [
      {
        en: "We believe in the same organization that existed in the Primitive Church, namely, apostles, prophets, pastors, teachers, evangelists, and so forth.",
        target:
          "わたしたちは原始キリスト教会に存在したと同じ組織、すなわち使徒、預言者、牧師、教師、伝道者等を信じる。",
      },
      {
        en: "We believe in the gift of tongues, prophecy, revelation, visions, healing, interpretation of tongues, and so forth.",
        target: "わたしたちは異言の賜物、預言、啓示、幻、癒し、異言の解釈等を信じる。",
      },
      {
        en: "We believe the Bible to be the word of God as far as it is translated correctly; we also believe the Book of Mormon to be the word of God.",
        target:
          "わたしたちは聖書が正しく翻訳されているかぎり神の言葉であると信じる。また、モルモン書も神の言葉であると信じる。",
      },
      {
        en: "We believe in being honest, true, chaste, benevolent, virtuous, and in doing good to all men.",
        target:
          "わたしたちは正直で、誠実で、純潔で、善意があり、高潔であることと、すべての人に善を行うことを信じる。",
      },
      {
        en: "If there is anything virtuous, lovely, or of good report or praiseworthy, we seek after these things.",
        target:
          "何か徳があり、愛すべきものがあり、よい評判のものや称賛に値するものがあれば、わたしたちはそれらのものを求める。",
      },
    ],
  },
];

export const LDS_SCRIPTURES_JA: LibraryEntry[] = [
  {
    id: "missionary-book-of-mormon-ja",
    title: "モルモン書",
    subtitle: "イエス・キリストのもう一つの証",
    language: "Japanese",
    targetLabel: "日本語",
    level: "C1" as const,
    section: "missionary" as const,
    flag: "📖",
    available: true,
    sentences: BOM_CHAPTERS_JA[0].sentences,
    chapters: BOM_CHAPTERS_JA,
  },
  {
    id: "missionary-doctrine-and-covenants-ja",
    title: "教義と聖約",
    subtitle: "ジョセフ・スミスとその後継者たちへの啓示",
    language: "Japanese",
    targetLabel: "日本語",
    level: "C1" as const,
    section: "missionary" as const,
    flag: "📜",
    available: true,
    sentences: DC_CHAPTERS_JA[0].sentences,
    chapters: DC_CHAPTERS_JA,
  },
  {
    id: "missionary-new-testament-kjv-ja",
    title: "新約聖書",
    subtitle: "主要な聖句（パブリックドメイン）",
    language: "Japanese",
    targetLabel: "日本語",
    level: "C1" as const,
    section: "missionary" as const,
    flag: "✝️",
    available: true,
    sentences: NT_CHAPTERS_JA[0].sentences,
    chapters: NT_CHAPTERS_JA,
  },
  {
    id: "missionary-old-testament-kjv-ja",
    title: "旧約聖書",
    subtitle: "主要な聖句（パブリックドメイン）",
    language: "Japanese",
    targetLabel: "日本語",
    level: "C1" as const,
    section: "missionary" as const,
    flag: "✡️",
    available: true,
    sentences: OT_CHAPTERS_JA[0].sentences,
    chapters: OT_CHAPTERS_JA,
  },
  {
    id: "missionary-pearl-of-great-price-ja",
    title: "高価な真珠",
    subtitle: "モーセ書、アブラハム書、ジョセフ・スミス及び信仰箇条より",
    language: "Japanese",
    targetLabel: "日本語",
    level: "C1" as const,
    section: "missionary" as const,
    flag: "🕊️",
    available: true,
    sentences: PGP_CHAPTERS_JA[0].sentences,
    chapters: PGP_CHAPTERS_JA,
  },
];

// ── KOREAN ───────────────────────────────────────────────────────────────────

const BOM_CHAPTERS_KO: BookChapter[] = [
  {
    title: "니파이 전서 1장 — 나 니파이는 훌륭한 부모님 밑에서 태어나",
    sentences: [
      {
        en: "I, Nephi, having been born of goodly parents, therefore I was taught somewhat in all the learning of my father.",
        target:
          "나 니파이는 훌륭한 부모님 밑에서 태어났으므로, 아버지의 모든 학식을 어느 정도 교육받았다.",
      },
      {
        en: "And having seen many afflictions in the course of my days, nevertheless, having been highly favored of the Lord in all my days.",
        target:
          "그리고 내 생애에 많은 환난을 보았지만, 그럼에도 불구하고 내 모든 날에 주님께 크게 축복을 받았다.",
      },
      {
        en: "I make a record of my proceedings in my days.",
        target: "나는 내 날들에 나의 행적을 기록한다.",
      },
      {
        en: "And I know that the record which I make is true; and I make it with mine own hand.",
        target:
          "그리고 나는 내가 만드는 기록이 진실임을 알고 있으며, 내 손으로 직접 기록하고 있다.",
      },
    ],
  },
  {
    title: "니파이 전서 3장 7절 — 가서 주님께서 명하신 일을 행하겠나이다",
    sentences: [
      {
        en: "And it came to pass that I, Nephi, said unto my father: I will go and do the things which the Lord hath commanded.",
        target:
          "그리하여 나 니파이가 내 아버지에게 말하였다. 저는 가서 주님께서 명하신 일을 행하겠나이다.",
      },
      {
        en: "For I know that the Lord giveth no commandments unto the children of men, save he shall prepare a way for them.",
        target:
          "왜냐하면 나는 주님께서 사람들의 자녀들에게 계명을 주실 때에는 반드시 그 계명을 이룰 수 있는 길을 예비해 주신다는 것을 알기 때문이다.",
      },
      {
        en: "That they may accomplish the thing which he commandeth them.",
        target: "그것은 그들이 주님께서 명하신 일을 이룰 수 있도록 하기 위함이다.",
      },
    ],
  },
  {
    title: "니파이 후서 2장 — 아담은 타락하였으니 이는 사람이 존재하게 하려 함이요",
    sentences: [
      {
        en: "Adam fell that men might be; and men are, that they might have joy.",
        target:
          "아담은 타락하였으니 이는 사람이 존재하게 하려 함이요, 사람은 존재하니 이는 그들이 기쁨을 갖게 하려 함이니라.",
      },
      {
        en: "And the Messiah cometh in the fulness of time, that he may redeem the children of men from the fall.",
        target:
          "그리고 메시아께서 때가 찰 때에 오시나니 이는 사람의 자녀들을 타락으로부터 구속하시려 함이니라.",
      },
      {
        en: "Wherefore, men are free according to the flesh; and all things are given them which are expedient unto man.",
        target:
          "그러므로 사람은 육신으로 자유로우며, 사람에게 필요한 모든 것들이 그들에게 주어져 있느니라.",
      },
      {
        en: "And they are free to choose liberty and eternal life, through the great Mediator of all men.",
        target:
          "그리고 그들은 모든 사람의 위대한 중재자를 통하여 자유와 영생을 선택하는 것이 자유롭다.",
      },
    ],
  },
  {
    title: "앨마서 32장 — 믿음은 씨앗과 같으니라",
    sentences: [
      {
        en: "Now, we will compare the word unto a seed.",
        target: "이제 우리는 말씀을 씨앗에 비유해 보겠노라.",
      },
      {
        en: "Now, if ye give place, that a seed may be planted in your heart, behold, if it be a true seed, it will begin to swell within your breasts.",
        target:
          "이제 만일 네가 씨앗이 네 마음에 심겨지도록 자리를 내어 준다면, 보라 만일 그것이 참된 씨앗이라면 네 마음속에서 부풀어 오르기 시작할 것이니라.",
      },
      {
        en: "And when you feel these swelling motions, ye will begin to say within yourselves: It must needs be that this is a good seed.",
        target:
          "그리고 네가 이 부풀어 오르는 움직임을 느낄 때, 너는 마음속으로 이렇게 말하기 시작할 것이니라. 이것이 좋은 씨앗임에 틀림없다.",
      },
      {
        en: "For behold, it enlargeth my soul; yea, it enlighteneth my understanding.",
        target:
          "보라, 그것이 내 영혼을 넓혀 주기 때문이니라. 참으로 그것이 나의 이해력을 밝혀 주느니라.",
      },
    ],
  },
  {
    title: "니파이 제삼서 11장 — 그리스도께서 니파이인들에게 나타나시다",
    sentences: [
      {
        en: "Behold, I am Jesus Christ, whom the prophets testified shall come into the world.",
        target:
          "보라, 나는 예수 그리스도니라. 선지자들이 세상에 오실 것을 증거한 이가 바로 나이니라.",
      },
      {
        en: "And behold, I am the light and the life of the world.",
        target: "그리고 보라, 나는 세상의 빛이요 생명이니라.",
      },
      {
        en: "And I have drunk out of that bitter cup which the Father hath given me.",
        target: "나는 아버지께서 나에게 주신 그 쓴 잔을 마셨느니라.",
      },
      {
        en: "Arise and come forth unto me, that ye may thrust your hands into my side.",
        target: "일어나 내게 나아오라. 그리하여 너희가 내 옆구리에 손을 넣어 볼 수 있게 하리라.",
      },
      {
        en: "That ye may know that I am the God of Israel, and have been slain for the sins of the world.",
        target:
          "이는 내가 이스라엘의 하나님이요, 세상의 죄를 위하여 죽임을 당하였음을 너희가 알게 하려 함이니라.",
      },
    ],
  },
  {
    title: "모로나이서 10장 3-5절 — 모로나이의 약속",
    sentences: [
      {
        en: "Behold, I would exhort you that when ye shall read these things, ye would remember how merciful the Lord hath been unto the children of men.",
        target:
          "보라, 나는 너희에게 권하노니, 너희가 이것들을 읽을 때 주님께서 사람의 자녀들에게 얼마나 자비로우셨는지 기억하기 바라노라.",
      },
      {
        en: "And ponder it in your hearts.",
        target: "그리고 너희 마음속으로 그것을 숙고하기 바라노라.",
      },
      {
        en: "And when ye shall receive these things, I would exhort you that ye would ask God, the Eternal Father, in the name of Christ, if these things are not true.",
        target:
          "그리고 너희가 이것들을 받을 때 나는 너희에게 권하노니, 영원하신 아버지 하나님께 그리스도의 이름으로 이것들이 사실이 아닌지 물어보기 바라노라.",
      },
      {
        en: "And if ye shall ask with a sincere heart, with real intent, having faith in Christ, he will manifest the truth of it unto you, by the power of the Holy Ghost.",
        target:
          "만일 너희가 진실된 마음으로 진정한 의도를 가지고 그리스도에 대한 믿음을 지니고 물어본다면, 그분께서 성령의 권능으로 너희에게 그 진실을 나타내 보여 주시리라.",
      },
      {
        en: "And by the power of the Holy Ghost ye may know the truth of all things.",
        target: "그리고 성령의 권능으로 너희는 모든 것의 진실을 알 수 있느니라.",
      },
    ],
  },
];

const DC_CHAPTERS_KO: BookChapter[] = [
  {
    title: "교리와 성약 제1절 — 내 교회 백성들이여 들으라",
    sentences: [
      {
        en: "Hearken, O ye people of my church, saith the voice of him who dwells on high.",
        target: "높은 곳에 계신 분의 음성이 이르시느니라. 내 교회 백성들이여 들으라.",
      },
      {
        en: "Search these commandments, for they are true and faithful.",
        target: "이 계명들을 깊이 상고하라. 그것들은 참되고 신실하기 때문이니라.",
      },
      {
        en: "And the prophecies and promises which are in them shall all be fulfilled.",
        target: "그리고 그 안에 있는 예언들과 약속들은 모두 이루어질 것이니라.",
      },
    ],
  },
  {
    title: "교리와 성약 제76절 — 세 가지 영광의 왕국",
    sentences: [
      {
        en: "And we saw the glory of the Son, on the right hand of the Father, and received of his fulness.",
        target:
          "그리고 우리는 아버지의 오른편에 계신 아들의 영광을 보았고 그의 충만함을 받았느니라.",
      },
      {
        en: "The glory of the celestial is one, even as the glory of the sun is one.",
        target: "천상 왕국의 영광은 하나이니, 태양의 영광이 하나인 것과 같으니라.",
      },
      {
        en: "And the glory of the terrestrial is one, even as the glory of the moon is one.",
        target: "그리고 지상 왕국의 영광은 하나이니, 달의 영광이 하나인 것과 같으니라.",
      },
      {
        en: "And the glory of the telestial is one, even as the glory of the stars is one.",
        target: "그리고 텔레스처 왕국의 영광은 하나이니, 별들의 영광이 하나인 것과 같으니라.",
      },
    ],
  },
  {
    title: "교리와 성약 제88절 — 그리스도의 빛",
    sentences: [
      {
        en: "The light of Christ, which light proceedeth forth from the presence of God to fill the immensity of space.",
        target: "그리스도의 빛, 그 빛은 하나님의 면전으로부터 나와 광대한 공간을 가득 채우나니.",
      },
      {
        en: "Is the light which is in all things, which giveth life to all things.",
        target: "모든 것들 안에 있는 빛이요, 모든 것들에 생명을 주는 빛이니라.",
      },
      {
        en: "Seek learning, even by study and also by faith.",
        target: "배움을 구하라. 공부로도, 또한 믿음으로도.",
      },
    ],
  },
  {
    title: "교리와 성약 제121절 — 강요가 아닌 영향력",
    sentences: [
      {
        en: "No power or influence can or ought to be maintained by virtue of the priesthood.",
        target:
          "신권의 힘으로는 어떠한 권력이나 영향력도 유지할 수 없으며 유지해서도 아니 되느니라.",
      },
      {
        en: "Only by persuasion, by long-suffering, by gentleness and meekness, and by love unfeigned.",
        target: "오직 설득으로, 오래 참음으로, 온유와 겸손으로, 위선 없는 사랑으로만 가능하니라.",
      },
      {
        en: "By kindness, and pure knowledge, which shall greatly enlarge the soul without hypocrisy.",
        target: "친절함과 순수한 지식으로, 위선 없이 영혼을 크게 넓힐 것이니라.",
      },
    ],
  },
  {
    title: "교리와 성약 제130절 — 지성과 영광",
    sentences: [
      {
        en: "Whatever principle of intelligence we attain unto in this life, it will rise with us in the resurrection.",
        target:
          "이 생애에서 우리가 도달하는 지성의 어떤 원리든 부활할 때 우리와 함께 높여질 것이니라.",
      },
      {
        en: "He will have so much the advantage in the world to come.",
        target: "그 사람은 장차 올 세상에서 그만큼 더 많은 유리함을 가지게 될 것이니라.",
      },
      {
        en: "The glory of God is intelligence, or, in other words, light and truth.",
        target: "하나님의 영광은 지성이니, 다시 말하면 빛과 진리이니라.",
      },
    ],
  },
];

const NT_CHAPTERS_KO: BookChapter[] = [
  {
    title: "마태복음 5장 — 팔복",
    sentences: [
      {
        en: "Blessed are the poor in spirit: for theirs is the kingdom of heaven.",
        target: "심령이 가난한 자는 복이 있나니 천국이 그들의 것임이요.",
      },
      {
        en: "Blessed are they that mourn: for they shall be comforted.",
        target: "애통하는 자는 복이 있나니 그들이 위로를 받을 것임이요.",
      },
      {
        en: "Blessed are the meek: for they shall inherit the earth.",
        target: "온유한 자는 복이 있나니 그들이 땅을 기업으로 받을 것임이요.",
      },
      {
        en: "Blessed are the pure in heart: for they shall see God.",
        target: "마음이 청결한 자는 복이 있나니 그들이 하나님을 볼 것임이요.",
      },
      {
        en: "Blessed are the peacemakers: for they shall be called the children of God.",
        target: "화평하게 하는 자는 복이 있나니 그들이 하나님의 아들이라 일컬음을 받을 것임이요.",
      },
    ],
  },
  {
    title: "요한복음 3장 16-17절 — 하나님이 세상을 이처럼 사랑하사",
    sentences: [
      {
        en: "For God so loved the world, that he gave his only begotten Son.",
        target: "하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니.",
      },
      {
        en: "That whosoever believeth in him should not perish, but have everlasting life.",
        target: "이는 그를 믿는 자마다 멸망하지 않고 영생을 얻게 하려 하심이라.",
      },
      {
        en: "For God sent not his Son into the world to condemn the world; but that the world through him might be saved.",
        target:
          "하나님이 그 아들을 세상에 보내신 것은 세상을 심판하려 하심이 아니요 그로 말미암아 세상이 구원을 받게 하려 하심이라.",
      },
    ],
  },
  {
    title: "야고보서 1장 5절 — 지혜가 부족한 자는",
    sentences: [
      {
        en: "If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not.",
        target:
          "너희 중에 누구든지 지혜가 부족하거든 모든 사람에게 후히 주시고 꾸짖지 아니하시는 하나님께 구하라.",
      },
      {
        en: "And it shall be given him. But let him ask in faith, nothing wavering.",
        target: "그리하면 주시리라. 오직 믿음으로 구하고 조금도 의심하지 말라.",
      },
      {
        en: "For he that wavereth is like a wave of the sea driven with the wind and tossed.",
        target: "의심하는 자는 마치 바람에 밀려 요동하는 바다 물결 같으니.",
      },
    ],
  },
  {
    title: "요한계시록 14장 — 영원한 복음의 천사",
    sentences: [
      {
        en: "And I saw another angel fly in the midst of heaven, having the everlasting gospel to preach unto them that dwell on the earth.",
        target:
          "또 보니 다른 천사가 공중에 날아가는데 땅에 거주하는 자들 곧 모든 민족과 종족과 방언과 백성에게 전할 영원한 복음을 가졌더라.",
      },
      {
        en: "Saying with a loud voice, Fear God, and give glory to him; for the hour of his judgment is come.",
        target:
          "그가 큰 음성으로 이르되 하나님을 두려워하며 그에게 영광을 돌리라 이는 그의 심판의 시간이 이르렀음이니.",
      },
    ],
  },
];

const OT_CHAPTERS_KO: BookChapter[] = [
  {
    title: "창세기 1장 — 태초에 하나님이 천지를 창조하시니라",
    sentences: [
      {
        en: "In the beginning God created the heaven and the earth.",
        target: "태초에 하나님이 천지를 창조하시니라.",
      },
      {
        en: "And God said, Let there be light: and there was light.",
        target: "하나님이 이르시되 빛이 있으라 하시니 빛이 있었고.",
      },
      {
        en: "And God saw every thing that he had made, and, behold, it was very good.",
        target: "하나님이 지으신 그 모든 것을 보시니 보시기에 심히 좋았더라.",
      },
    ],
  },
  {
    title: "시편 23편 — 여호와는 나의 목자시니",
    sentences: [
      {
        en: "The LORD is my shepherd; I shall not want.",
        target: "여호와는 나의 목자시니 내게 부족함이 없으리로다.",
      },
      {
        en: "He maketh me to lie down in green pastures: he leadeth me beside the still waters.",
        target: "그가 나를 푸른 풀밭에 누이시며 쉴 만한 물 가로 인도하시는도다.",
      },
      {
        en: "He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake.",
        target: "내 영혼을 소생시키시고 자기 이름을 위하여 의의 길로 인도하시는도다.",
      },
      {
        en: "Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me.",
        target:
          "내가 사망의 음침한 골짜기로 다닐지라도 해를 두려워하지 않을 것은 주께서 나와 함께 하심이라.",
      },
    ],
  },
  {
    title: "이사야 53장 — 고난받는 종",
    sentences: [
      {
        en: "He is despised and rejected of men; a man of sorrows, and acquainted with grief.",
        target: "그는 멸시를 받아 사람들에게 버림받았으며 간고를 많이 겪었으며 질고를 아는 자라.",
      },
      {
        en: "Surely he hath borne our griefs, and carried our sorrows.",
        target: "그는 실로 우리의 질고를 지고 우리의 슬픔을 당하였거늘.",
      },
      {
        en: "But he was wounded for our transgressions, he was bruised for our iniquities.",
        target: "그가 찔림은 우리의 허물 때문이요 그가 상함은 우리의 죄악 때문이라.",
      },
      {
        en: "The chastisement of our peace was upon him; and with his stripes we are healed.",
        target:
          "그가 징계를 받으므로 우리는 평화를 누리고 그가 채찍에 맞으므로 우리는 나음을 받았도다.",
      },
    ],
  },
];

const PGP_CHAPTERS_KO: BookChapter[] = [
  {
    title: "모세서 1장 — 이것이 나의 사업이요 나의 영광이니라",
    sentences: [
      {
        en: "Behold, I am the Lord God Almighty, and Endless is my name.",
        target: "보라, 나는 전능하신 주 하나님이니라. 그리고 내 이름은 끝이 없는 자니라.",
      },
      {
        en: "For behold, this is my work and my glory—to bring to pass the immortality and eternal life of man.",
        target:
          "보라, 이것이 나의 사업이요 나의 영광이니라 — 인간의 불사불멸과 영생을 성취하는 것이니라.",
      },
    ],
  },
  {
    title: "조셉 스미스 — 역사 1장 — 첫 번째 시현",
    sentences: [
      {
        en: "I saw two Personages, whose brightness and glory defy all description.",
        target:
          "나는 두 분을 뵈었는데, 그분들의 밝음과 영광은 어떠한 말로도 표현할 수 없을 정도였다.",
      },
      {
        en: "Standing above me in the air. One of them spake unto me, calling me by name.",
        target:
          "그분들은 공중에서 내 위에 서 계셨다. 그분들 중 한 분이 내 이름을 부르시며 내게 말씀하셨다.",
      },
      {
        en: "And said, pointing to the other: This is My Beloved Son. Hear Him!",
        target:
          "그리고 다른 분을 가리키시며 말씀하셨다. 이는 내 사랑하는 아들이니라. 그의 말을 들으라!",
      },
      {
        en: "I had actually seen a light, and in the midst of that light I saw two Personages, and they did in reality speak to me.",
        target:
          "나는 실제로 빛을 보았고, 그 빛 가운데 두 분을 보았으며, 그분들은 실제로 내게 말씀하셨다.",
      },
    ],
  },
  {
    title: "신앙개조 1-5조",
    sentences: [
      {
        en: "We believe in God, the Eternal Father, and in His Son, Jesus Christ, and in the Holy Ghost.",
        target: "우리는 영원하신 아버지 하나님과 그의 아들 예수 그리스도와 성령을 믿는다.",
      },
      {
        en: "We believe that men will be punished for their own sins, and not for Adam's transgression.",
        target: "우리는 사람이 아담의 범죄가 아닌 자신의 죄로 인해 벌을 받게 된다고 믿는다.",
      },
      {
        en: "We believe that through the Atonement of Christ, all mankind may be saved, by obedience to the laws and ordinances of the Gospel.",
        target:
          "우리는 그리스도의 속죄를 통하여 모든 인류가 복음의 율법과 의식에 순종함으로써 구원받을 수 있다고 믿는다.",
      },
      {
        en: "We believe that the first principles and ordinances of the Gospel are: first, Faith in the Lord Jesus Christ.",
        target:
          "우리는 복음의 첫 번째 원리와 의식이 다음과 같다고 믿는다. 첫째, 주 예수 그리스도에 대한 믿음.",
      },
      {
        en: "Second, Repentance; third, Baptism by immersion for the remission of sins; fourth, Laying on of hands for the gift of the Holy Ghost.",
        target: "둘째, 회개. 셋째, 죄 사함을 위한 침례. 넷째, 성령의 선물을 위한 안수.",
      },
    ],
  },
  {
    title: "신앙개조 6-13조",
    sentences: [
      {
        en: "We believe in the same organization that existed in the Primitive Church, namely, apostles, prophets, pastors, teachers, evangelists, and so forth.",
        target:
          "우리는 초기 교회에 존재했던 것과 동일한 조직을 믿는다. 즉, 사도, 선지자, 목자, 교사, 전도자 등이다.",
      },
      {
        en: "We believe in the gift of tongues, prophecy, revelation, visions, healing, interpretation of tongues, and so forth.",
        target: "우리는 방언의 은사, 예언, 계시, 환상, 치유, 방언 통역 등을 믿는다.",
      },
      {
        en: "We believe the Bible to be the word of God as far as it is translated correctly; we also believe the Book of Mormon to be the word of God.",
        target:
          "우리는 성경이 올바르게 번역된 한 하나님의 말씀임을 믿는다. 또한 우리는 몰몬경도 하나님의 말씀임을 믿는다.",
      },
      {
        en: "We believe in being honest, true, chaste, benevolent, virtuous, and in doing good to all men.",
        target:
          "우리는 정직하고, 진실하고, 순결하고, 자비롭고, 덕스러우며, 모든 사람에게 선을 행함을 믿는다.",
      },
      {
        en: "If there is anything virtuous, lovely, or of good report or praiseworthy, we seek after these things.",
        target:
          "덕스럽거나 사랑스럽거나 좋은 평판이 있거나 칭찬받을 만한 것이 있다면 우리는 이것들을 추구한다.",
      },
    ],
  },
];

export const LDS_SCRIPTURES_KO: LibraryEntry[] = [
  {
    id: "missionary-book-of-mormon-ko",
    title: "몰몬경",
    subtitle: "예수 그리스도의 또 하나의 증거",
    language: "Korean",
    targetLabel: "한국어",
    level: "C1" as const,
    section: "missionary" as const,
    flag: "📖",
    available: true,
    sentences: BOM_CHAPTERS_KO[0].sentences,
    chapters: BOM_CHAPTERS_KO,
  },
  {
    id: "missionary-doctrine-and-covenants-ko",
    title: "교리와 성약",
    subtitle: "조셉 스미스와 그 후계자들에게 주어진 계시",
    language: "Korean",
    targetLabel: "한국어",
    level: "C1" as const,
    section: "missionary" as const,
    flag: "📜",
    available: true,
    sentences: DC_CHAPTERS_KO[0].sentences,
    chapters: DC_CHAPTERS_KO,
  },
  {
    id: "missionary-new-testament-kjv-ko",
    title: "신약전서",
    subtitle: "주요 성구 선집 (퍼블릭 도메인)",
    language: "Korean",
    targetLabel: "한국어",
    level: "C1" as const,
    section: "missionary" as const,
    flag: "✝️",
    available: true,
    sentences: NT_CHAPTERS_KO[0].sentences,
    chapters: NT_CHAPTERS_KO,
  },
  {
    id: "missionary-old-testament-kjv-ko",
    title: "구약전서",
    subtitle: "주요 성구 선집 (퍼블릭 도메인)",
    language: "Korean",
    targetLabel: "한국어",
    level: "C1" as const,
    section: "missionary" as const,
    flag: "✡️",
    available: true,
    sentences: OT_CHAPTERS_KO[0].sentences,
    chapters: OT_CHAPTERS_KO,
  },
  {
    id: "missionary-pearl-of-great-price-ko",
    title: "값진 진주",
    subtitle: "모세서, 조셉 스미스 역사 및 신앙개조에서 발췌",
    language: "Korean",
    targetLabel: "한국어",
    level: "C1" as const,
    section: "missionary" as const,
    flag: "🕊️",
    available: true,
    sentences: PGP_CHAPTERS_KO[0].sentences,
    chapters: PGP_CHAPTERS_KO,
  },
];
