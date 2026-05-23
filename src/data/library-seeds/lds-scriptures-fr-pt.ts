// LDS Scripture library — key missionary passages in French and Portuguese (Brazilian).
// French style follows LDS France official usage ("Seigneur", "l'Église de Jésus-Christ",
// "l'Évangile", "le Livre de Mormon"). Ecclesiastical register throughout.
// Portuguese style follows Brazilian LDS usage ("Senhor", "Igreja de Jesus Cristo",
// "o Evangelho", "o Livro de Mórmon"). Ecclesiastical register; correct accents throughout.
// English `en` fields are KJV / standard LDS English source text (public domain).
// All selections are excerpted; not the complete scripture text.

import type { LibraryEntry, BookChapter } from "@/state/library-state";
import type { SentencePair } from "@/data/library";

// ── FRENCH ──────────────────────────────────────────────────────────────────

const BOM_CHAPTERS_FR: BookChapter[] = [
  {
    title: "1 Néphi 1 — Moi, Néphi, étant né de parents vertueux",
    sentences: [
      {
        en: "I, Nephi, having been born of goodly parents, therefore I was taught somewhat in all the learning of my father.",
        target:
          "Moi, Néphi, étant né de parents vertueux, j'ai donc été instruit dans tout le savoir de mon père.",
      },
      {
        en: "And having seen many afflictions in the course of my days, nevertheless, having been highly favored of the Lord in all my days.",
        target:
          "Ayant vu beaucoup d'afflictions au cours de mes jours, j'ai néanmoins été grandement favorisé du Seigneur en tous mes jours.",
      },
      {
        en: "I make a record of my proceedings in my days.",
        target: "Je fais un récit de mes actes en mes jours.",
      },
      {
        en: "And I know that the record which I make is true; and I make it with mine own hand; and I make it according to my knowledge.",
        target:
          "Et je sais que le récit que je fais est véridique ; je le fais de ma propre main et selon ma connaissance.",
      },
    ],
  },
  {
    title: "1 Néphi 3:7 — J'irai et j'accomplirai",
    sentences: [
      {
        en: "And it came to pass that I, Nephi, said unto my father: I will go and do the things which the Lord hath commanded.",
        target:
          "Et il arriva que moi, Néphi, je dis à mon père : J'irai et j'accomplirai les choses que le Seigneur a commandées.",
      },
      {
        en: "For I know that the Lord giveth no commandments unto the children of men, save he shall prepare a way for them.",
        target:
          "Car je sais que le Seigneur ne donne pas de commandements aux enfants des hommes sans leur préparer une voie.",
      },
      {
        en: "That they may accomplish the thing which he commandeth them.",
        target: "Afin qu'ils puissent accomplir la chose qu'il leur commande.",
      },
    ],
  },
  {
    title: "2 Néphi 2 — Adam tomba afin que les hommes puissent être",
    sentences: [
      {
        en: "Adam fell that men might be; and men are, that they might have joy.",
        target:
          "Adam tomba afin que les hommes puissent être ; et les hommes existent afin qu'ils puissent avoir de la joie.",
      },
      {
        en: "And the Messiah cometh in the fulness of time, that he may redeem the children of men from the fall.",
        target:
          "Et le Messie vient en la plénitude des temps, afin de racheter les enfants des hommes de la chute.",
      },
      {
        en: "Wherefore, men are free according to the flesh; and all things are given them which are expedient unto man.",
        target:
          "C'est pourquoi les hommes sont libres selon la chair, et toutes les choses leur sont données qui sont utiles à l'homme.",
      },
      {
        en: "And they are free to choose liberty and eternal life, through the great Mediator of all men.",
        target:
          "Et ils sont libres de choisir la liberté et la vie éternelle, par le grand Médiateur de tous les hommes.",
      },
    ],
  },
  {
    title: "Alma 32 — La foi est comme une semence",
    sentences: [
      {
        en: "Now, we will compare the word unto a seed.",
        target: "Maintenant, nous comparerons la parole à une semence.",
      },
      {
        en: "Now, if ye give place, that a seed may be planted in your heart, behold, if it be a true seed, it will begin to swell within your breasts.",
        target:
          "Maintenant, si vous faites place pour qu'une semence soit plantée dans votre cœur, voici, si c'est une semence vraie, elle commencera à gonfler dans votre poitrine.",
      },
      {
        en: "And when you feel these swelling motions, ye will begin to say within yourselves: It must needs be that this is a good seed.",
        target:
          "Et quand vous sentirez ces mouvements de gonflement, vous commencerez à vous dire en vous-mêmes : Il faut que ce soit une bonne semence.",
      },
      {
        en: "For behold, it enlargeth my soul; yea, it enlighteneth my understanding.",
        target: "Car voici, elle élargit mon âme ; oui, elle illumine mon entendement.",
      },
    ],
  },
  {
    title: "Moroni 10:3-5 — La promesse de Moroni",
    sentences: [
      {
        en: "Behold, I would exhort you that when ye shall read these things, ye would remember how merciful the Lord hath been unto the children of men.",
        target:
          "Voici, je vous exhorterais à vous souvenir, quand vous lirez ces choses, de la miséricorde que le Seigneur a eue envers les enfants des hommes.",
      },
      {
        en: "And ponder it in your hearts.",
        target: "Et à méditer cela dans votre cœur.",
      },
      {
        en: "And when ye shall receive these things, I would exhort you that ye would ask God, the Eternal Father, in the name of Christ, if these things are not true.",
        target:
          "Et quand vous aurez reçu ces choses, je vous exhorterais à demander à Dieu, le Père éternel, au nom du Christ, si ces choses ne sont pas vraies.",
      },
      {
        en: "And if ye shall ask with a sincere heart, with real intent, having faith in Christ, he will manifest the truth of it unto you, by the power of the Holy Ghost.",
        target:
          "Et si vous demandez avec un cœur sincère, avec une intention réelle, ayant foi en Christ, il vous en manifestera la vérité par la puissance du Saint-Esprit.",
      },
      {
        en: "And by the power of the Holy Ghost ye may know the truth of all things.",
        target:
          "Et par la puissance du Saint-Esprit vous pouvez connaître la vérité de toutes choses.",
      },
    ],
  },
  {
    title: "3 Néphi 11 — Le Christ apparaît aux Amériques",
    sentences: [
      {
        en: "Behold, I am Jesus Christ, whom the prophets testified shall come into the world.",
        target:
          "Voici, je suis Jésus-Christ, dont les prophètes ont témoigné qu'il viendrait dans le monde.",
      },
      {
        en: "And behold, I am the light and the life of the world.",
        target: "Et voici, je suis la lumière et la vie du monde.",
      },
      {
        en: "Arise and come forth unto me, that ye may thrust your hands into my side, and that ye may feel the prints of the nails in my hands and in my feet.",
        target:
          "Levez-vous et venez à moi, afin que vous puissiez mettre vos mains dans mon côté et toucher les marques des clous dans mes mains et dans mes pieds.",
      },
      {
        en: "That ye may know that I am the God of Israel, and the God of the whole earth, and have been slain for the sins of the world.",
        target:
          "Afin que vous sachiez que je suis le Dieu d'Israël et le Dieu de toute la terre, et que j'ai été immolé pour les péchés du monde.",
      },
    ],
  },
  {
    title: "Hélaman 5:12 — Le rocher de notre Rédempteur",
    sentences: [
      {
        en: "Remember, remember that it is upon the rock of our Redeemer, who is Christ, the Son of God, that ye must build your foundation.",
        target:
          "Souvenez-vous, souvenez-vous que c'est sur le rocher de notre Rédempteur, qui est le Christ, le Fils de Dieu, que vous devez bâtir votre fondation.",
      },
      {
        en: "That when the devil shall send forth his mighty winds, yea, his shafts in the whirlwind, it shall have no power over you.",
        target:
          "Afin que lorsque le diable lancera ses vents puissants, oui, ses traits dans le tourbillon, il n'ait aucun pouvoir sur vous.",
      },
      {
        en: "Because of the rock upon which ye are built, which is a sure foundation, a foundation whereon if men build they cannot fall.",
        target:
          "À cause du rocher sur lequel vous êtes bâtis, qui est un fondement sûr, un fondement sur lequel, si les hommes bâtissent, ils ne peuvent tomber.",
      },
    ],
  },
  {
    title: "Éther 12 — La foi, l'espérance, et les faiblesses rendues forces",
    sentences: [
      {
        en: "And now, I, Moroni, would speak somewhat concerning these things; I would show unto the world that faith is things which are hoped for and not seen.",
        target:
          "Et maintenant, moi, Moroni, je voudrais dire quelques mots concernant ces choses ; je voudrais montrer au monde que la foi est ce qu'on espère et qu'on ne voit pas.",
      },
      {
        en: "Wherefore, dispute not because ye see not, for ye receive no witness until after the trial of your faith.",
        target:
          "C'est pourquoi, ne disputez pas parce que vous ne voyez pas, car vous ne recevez aucun témoignage qu'après l'épreuve de votre foi.",
      },
      {
        en: "And if men come unto me I will show unto them their weakness.",
        target: "Et si les hommes viennent à moi, je leur montrerai leur faiblesse.",
      },
      {
        en: "I give unto men weakness that they may be humble; and my grace is sufficient for all men that humble themselves before me.",
        target:
          "Je donne aux hommes la faiblesse afin qu'ils soient humbles ; et ma grâce est suffisante pour tous les hommes qui s'humilient devant moi.",
      },
      {
        en: "For if they humble themselves before me, and have faith in me, then will I make weak things become strong unto them.",
        target:
          "Car si ils s'humilient devant moi et ont foi en moi, je ferai que les choses faibles deviennent fortes pour eux.",
      },
    ],
  },
];

const DC_CHAPTERS_FR: BookChapter[] = [
  {
    title: "D&A 4 — Une œuvre merveilleuse est sur le point de se manifester",
    sentences: [
      {
        en: "Now behold, a marvelous work is about to come forth among the children of men.",
        target:
          "Maintenant voici, une œuvre merveilleuse est sur le point de se manifester parmi les enfants des hommes.",
      },
      {
        en: "Therefore, O ye that embark in the service of God, see that ye serve him with all your heart, might, mind and strength.",
        target:
          "C'est pourquoi, ô vous qui vous embarquez dans le service de Dieu, veillez à le servir de tout votre cœur, de toute votre puissance, de tout votre esprit et de toute votre force.",
      },
      {
        en: "That ye may stand blameless before God at the last day.",
        target: "Afin que vous puissiez vous présenter sans reproche devant Dieu au dernier jour.",
      },
      {
        en: "Faith, hope, charity and love, with an eye single to the glory of God, qualify him for the work.",
        target:
          "La foi, l'espérance, la charité et l'amour, avec un œil uniquement fixé sur la gloire de Dieu, le rendent apte à l'œuvre.",
      },
    ],
  },
  {
    title: "D&A 8 — La révélation vient par l'Esprit",
    sentences: [
      {
        en: "I will tell you in your mind and in your heart, by the Holy Ghost, which shall come upon you and which shall dwell in your heart.",
        target:
          "Je vous parlerai à l'esprit et au cœur par le Saint-Esprit, qui viendra sur vous et habitera dans votre cœur.",
      },
      {
        en: "Now, behold, this is the spirit of revelation; behold, this is the spirit by which Moses brought the children of Israel through the Red Sea on dry ground.",
        target:
          "Maintenant voici, c'est l'esprit de révélation ; voici, c'est l'esprit par lequel Moïse a conduit les enfants d'Israël à travers la mer Rouge sur la terre ferme.",
      },
    ],
  },
  {
    title: "D&A 58:26-27 — Ne pas être commandé en toutes choses",
    sentences: [
      {
        en: "For behold, it is not meet that I should command in all things; for he that is compelled in all things, the same is a slothful and not a wise servant.",
        target:
          "Car voici, il ne convient pas que je commande en toutes choses ; car celui qui est contraint en toutes choses, celui-là est un serviteur paresseux et non sage.",
      },
      {
        en: "Verily I say, men should be anxiously engaged in a good cause, and do many things of their own free will.",
        target:
          "En vérité je dis, les hommes doivent s'engager avec zèle dans une bonne cause et faire beaucoup de choses de leur propre libre arbitre.",
      },
      {
        en: "And bring to pass much righteousness; for the power is in them, wherein they are agents unto themselves.",
        target:
          "Et accomplir beaucoup de justice ; car la puissance est en eux, en cela qu'ils sont libres d'agir par eux-mêmes.",
      },
    ],
  },
  {
    title: "D&A 76 — La vision des trois royaumes",
    sentences: [
      {
        en: "Great and marvelous are the works of the Lord, and the mysteries of his kingdom which he showed unto us.",
        target:
          "Grandes et merveilleuses sont les œuvres du Seigneur, et les mystères de son royaume qu'il nous a montrés.",
      },
      {
        en: "And this is the gospel, the glad tidings, which the voice out of the heavens bore record unto us.",
        target:
          "Et c'est là l'Évangile, la bonne nouvelle, dont la voix des cieux nous a rendu témoignage.",
      },
      {
        en: "That he came into the world, even Jesus, to be crucified for the world, and to bear the sins of the world, and to sanctify the world.",
        target:
          "Qu'il est venu dans le monde, oui, Jésus, pour être crucifié pour le monde, et pour porter les péchés du monde, et pour sanctifier le monde.",
      },
    ],
  },
];

const NT_CHAPTERS_FR: BookChapter[] = [
  {
    title: "Jean 3:16-17 — Car Dieu a tant aimé le monde",
    sentences: [
      {
        en: "For God so loved the world, that he gave his only begotten Son.",
        target: "Car Dieu a tant aimé le monde qu'il a donné son Fils unique.",
      },
      {
        en: "That whosoever believeth in him should not perish, but have everlasting life.",
        target: "Afin que quiconque croit en lui ne périsse point, mais ait la vie éternelle.",
      },
      {
        en: "For God sent not his Son into the world to condemn the world; but that the world through him might be saved.",
        target:
          "Car Dieu n'a pas envoyé son Fils dans le monde pour condamner le monde, mais afin que le monde soit sauvé par lui.",
      },
    ],
  },
  {
    title: "Jacques 1:5 — Si quelqu'un d'entre vous manque de sagesse",
    sentences: [
      {
        en: "If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him.",
        target:
          "Si quelqu'un d'entre vous manque de sagesse, qu'il la demande à Dieu, qui donne à tous généreusement et sans faire de reproche, et elle lui sera donnée.",
      },
      {
        en: "But let him ask in faith, nothing wavering.",
        target: "Mais qu'il la demande avec foi, sans hésiter.",
      },
    ],
  },
  {
    title: "Matthieu 28:19-20 — Allez et faites des disciples",
    sentences: [
      {
        en: "Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost.",
        target:
          "Allez donc, et faites des disciples de toutes les nations, les baptisant au nom du Père, du Fils et du Saint-Esprit.",
      },
      {
        en: "Teaching them to observe all things whatsoever I have commanded you.",
        target: "Et enseignez-leur à observer tout ce que je vous ai prescrit.",
      },
      {
        en: "And, lo, I am with you always, even unto the end of the world.",
        target: "Et voici, je suis avec vous tous les jours, jusqu'à la fin du monde.",
      },
    ],
  },
  {
    title: "Actes 3:19-21 — Repentez-vous et convertissez-vous",
    sentences: [
      {
        en: "Repent ye therefore, and be converted, that your sins may be blotted out.",
        target: "Repentez-vous donc et convertissez-vous, afin que vos péchés soient effacés.",
      },
      {
        en: "When the times of refreshing shall come from the presence of the Lord.",
        target: "Afin que des temps de rafraîchissement viennent de la part du Seigneur.",
      },
      {
        en: "And he shall send Jesus Christ, which before was preached unto you.",
        target: "Et qu'il envoie Jésus-Christ, qui vous a été précédemment annoncé.",
      },
      {
        en: "Whom the heaven must receive until the times of restitution of all things.",
        target: "Lui que le ciel doit retenir jusqu'aux temps du rétablissement de toutes choses.",
      },
    ],
  },
  {
    title: "Jean 14:26-27 — Le Consolateur vous enseignera toutes choses",
    sentences: [
      {
        en: "But the Comforter, which is the Holy Ghost, whom the Father will send in my name, he shall teach you all things.",
        target:
          "Mais le Consolateur, le Saint-Esprit, que le Père enverra en mon nom, vous enseignera toutes choses.",
      },
      {
        en: "And bring all things to your remembrance, whatsoever I have said unto you.",
        target: "Et vous rappellera tout ce que je vous ai dit.",
      },
      {
        en: "Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you.",
        target:
          "Je vous laisse la paix, je vous donne ma paix. Je ne vous la donne pas comme le monde la donne.",
      },
      {
        en: "Let not your heart be troubled, neither let it be afraid.",
        target: "Que votre cœur ne se trouble point, et ne se laisse pas effrayer.",
      },
    ],
  },
];

const OT_CHAPTERS_FR: BookChapter[] = [
  {
    title: "Ésaïe 29:14 — Une œuvre merveilleuse et prodigieuse",
    sentences: [
      {
        en: "Therefore, behold, I will proceed to do a marvellous work among this people, even a marvellous work and a wonder.",
        target:
          "C'est pourquoi, voici, je vais faire parmi ce peuple une œuvre merveilleuse et prodigieuse.",
      },
      {
        en: "For the wisdom of their wise men shall perish, and the understanding of their prudent men shall be hid.",
        target:
          "Car la sagesse de ses sages périra, et l'intelligence de ses hommes prudents disparaîtra.",
      },
    ],
  },
  {
    title: "Amos 3:7 — Le Seigneur ne fait rien sans révéler son secret",
    sentences: [
      {
        en: "Surely the Lord God will do nothing, but he revealeth his secret unto his servants the prophets.",
        target:
          "Certainement, le Seigneur, l'Éternel, ne fait rien sans avoir révélé son secret à ses serviteurs les prophètes.",
      },
    ],
  },
  {
    title: "Ézéchiel 37:15-17 — Les deux bâtons réunis en un",
    sentences: [
      {
        en: "The word of the Lord came again unto me, saying, Moreover, thou son of man, take thee one stick.",
        target:
          "La parole de l'Éternel me fut adressée, en ces mots : Et toi, fils de l'homme, prends un bâton.",
      },
      {
        en: "And write upon it, For Judah, and for the children of Israel his companions.",
        target: "Et écris dessus : Pour Juda, et pour les enfants d'Israël qui lui sont associés.",
      },
      {
        en: "Then take another stick, and write upon it, For Joseph, the stick of Ephraim.",
        target: "Prends ensuite un autre bâton, et écris dessus : Pour Joseph, bâton d'Éphraïm.",
      },
      {
        en: "And join them one to another into one stick; and they shall become one in thine hand.",
        target:
          "Rapproche-les l'un de l'autre pour n'en faire qu'un seul bâton, et ils seront unis dans ta main.",
      },
    ],
  },
];

const PGP_CHAPTERS_FR: BookChapter[] = [
  {
    title: "Moïse 1:39 — Voici mon œuvre et ma gloire",
    sentences: [
      {
        en: "For behold, this is my work and my glory — to bring to pass the immortality and eternal life of man.",
        target:
          "Car voici, telle est mon œuvre et ma gloire : réaliser l'immortalité et la vie éternelle de l'homme.",
      },
    ],
  },
  {
    title: "Les Articles de Foi 1-5",
    sentences: [
      {
        en: "We believe in God, the Eternal Father, and in His Son, Jesus Christ, and in the Holy Ghost.",
        target:
          "Nous croyons en Dieu, le Père éternel, et en son Fils, Jésus-Christ, et au Saint-Esprit.",
      },
      {
        en: "We believe that men will be punished for their own sins, and not for Adam's transgression.",
        target:
          "Nous croyons que les hommes seront punis pour leurs propres péchés et non pour la transgression d'Adam.",
      },
      {
        en: "We believe that through the Atonement of Christ, all mankind may be saved, by obedience to the laws and ordinances of the Gospel.",
        target:
          "Nous croyons que par l'Expiation du Christ, toute l'humanité peut être sauvée en obéissant aux lois et aux ordonnances de l'Évangile.",
      },
      {
        en: "We believe that the first principles and ordinances of the Gospel are: first, Faith in the Lord Jesus Christ; second, Repentance; third, Baptism by immersion for the remission of sins; fourth, Laying on of hands for the gift of the Holy Ghost.",
        target:
          "Nous croyons que les premiers principes et ordonnances de l'Évangile sont : premièrement, la Foi au Seigneur Jésus-Christ ; deuxièmement, le Repentir ; troisièmement, le Baptême par immersion pour la rémission des péchés ; quatrièmement, l'Imposition des mains pour le don du Saint-Esprit.",
      },
      {
        en: "We believe that a man must be called of God, by prophecy, and by the laying on of hands by those who are in authority.",
        target:
          "Nous croyons qu'un homme doit être appelé de Dieu, par la prophétie et par l'imposition des mains de ceux qui ont l'autorité.",
      },
    ],
  },
  {
    title: "Les Articles de Foi 6-13",
    sentences: [
      {
        en: "We believe in the same organization that existed in the Primitive Church, namely, apostles, prophets, pastors, teachers, evangelists, and so forth.",
        target:
          "Nous croyons à la même organisation qui existait dans l'Église primitive, à savoir : apôtres, prophètes, pasteurs, enseignants, évangélistes, etc.",
      },
      {
        en: "We believe in the gift of tongues, prophecy, revelation, visions, healing, interpretation of tongues, and so forth.",
        target:
          "Nous croyons au don des langues, à la prophétie, à la révélation, aux visions, à la guérison, à l'interprétation des langues, etc.",
      },
      {
        en: "We believe the Bible to be the word of God as far as it is translated correctly; we also believe the Book of Mormon to be the word of God.",
        target:
          "Nous croyons que la Bible est la parole de Dieu dans la mesure où elle est correctement traduite ; nous croyons aussi que le Livre de Mormon est la parole de Dieu.",
      },
      {
        en: "We believe all that God has revealed, all that He does now reveal, and we believe that He will yet reveal many great and important things.",
        target:
          "Nous croyons tout ce que Dieu a révélé, tout ce qu'il révèle maintenant, et nous croyons qu'il révélera encore beaucoup de choses grandes et importantes.",
      },
      {
        en: "We believe in being honest, true, chaste, benevolent, virtuous, and in doing good to all men.",
        target:
          "Nous croyons qu'il faut être honnête, vrai, chaste, bienveillant, vertueux et faire le bien à tous les hommes.",
      },
      {
        en: "If there is anything virtuous, lovely, or of good report or praiseworthy, we seek after these things.",
        target:
          "S'il y a quelque chose de vertueux, d'aimable ou de bonne réputation, ou digne de louange, nous recherchons ces choses.",
      },
    ],
  },
];

// ── PORTUGUESE (BRAZILIAN) ──────────────────────────────────────────────────

const BOM_CHAPTERS_PT: BookChapter[] = [
  {
    title: "1 Néfi 1 — Eu, Néfi, tendo nascido de pais bondosos",
    sentences: [
      {
        en: "I, Nephi, having been born of goodly parents, therefore I was taught somewhat in all the learning of my father.",
        target:
          "Eu, Néfi, tendo nascido de pais bondosos, por isso fui instruído em todo o aprendizado de meu pai.",
      },
      {
        en: "And having seen many afflictions in the course of my days, nevertheless, having been highly favored of the Lord in all my days.",
        target:
          "E tendo visto muitas aflições no decorrer de meus dias, no entanto, tendo sido muito favorecido do Senhor em todos os meus dias.",
      },
      {
        en: "I make a record of my proceedings in my days.",
        target: "Faço um registro de minhas ações em meus dias.",
      },
      {
        en: "And I know that the record which I make is true; and I make it with mine own hand; and I make it according to my knowledge.",
        target:
          "E sei que o registro que faço é verdadeiro; e o faço com minha própria mão e de acordo com meu conhecimento.",
      },
    ],
  },
  {
    title: "1 Néfi 3:7 — Irei e farei as coisas",
    sentences: [
      {
        en: "And it came to pass that I, Nephi, said unto my father: I will go and do the things which the Lord hath commanded.",
        target:
          "E aconteceu que eu, Néfi, disse a meu pai: Irei e farei as coisas que o Senhor ordenou.",
      },
      {
        en: "For I know that the Lord giveth no commandments unto the children of men, save he shall prepare a way for them.",
        target:
          "Pois sei que o Senhor não dá mandamentos aos filhos dos homens sem lhes preparar um caminho.",
      },
      {
        en: "That they may accomplish the thing which he commandeth them.",
        target: "Para que possam cumprir o que Ele lhes ordena.",
      },
    ],
  },
  {
    title: "2 Néfi 2 — Adão caiu para que os homens pudessem existir",
    sentences: [
      {
        en: "Adam fell that men might be; and men are, that they might have joy.",
        target:
          "Adão caiu para que os homens pudessem existir; e os homens existem para que possam ter alegria.",
      },
      {
        en: "And the Messiah cometh in the fulness of time, that he may redeem the children of men from the fall.",
        target:
          "E o Messias vem na plenitude dos tempos para redimir os filhos dos homens da queda.",
      },
      {
        en: "Wherefore, men are free according to the flesh; and all things are given them which are expedient unto man.",
        target:
          "Por isso, os homens são livres segundo a carne, e todas as coisas que são necessárias ao homem lhes são dadas.",
      },
      {
        en: "And they are free to choose liberty and eternal life, through the great Mediator of all men.",
        target:
          "E são livres para escolher a liberdade e a vida eterna, por meio do grande Mediador de todos os homens.",
      },
    ],
  },
  {
    title: "Alma 32 — A fé é como uma semente",
    sentences: [
      {
        en: "Now, we will compare the word unto a seed.",
        target: "Agora, compararemos a palavra a uma semente.",
      },
      {
        en: "Now, if ye give place, that a seed may be planted in your heart, behold, if it be a true seed, it will begin to swell within your breasts.",
        target:
          "Agora, se derdes lugar para que uma semente seja plantada em vosso coração, eis que, se for uma semente verdadeira, ela começará a inchar em vosso seio.",
      },
      {
        en: "And when you feel these swelling motions, ye will begin to say within yourselves: It must needs be that this is a good seed.",
        target:
          "E quando sentirdes esses movimentos de intumescência, começareis a dizer em vós mesmos: Necessariamente esta deve ser uma boa semente.",
      },
      {
        en: "For behold, it enlargeth my soul; yea, it enlighteneth my understanding.",
        target: "Pois eis que ela dilata minha alma; sim, ilumina meu entendimento.",
      },
    ],
  },
  {
    title: "Morôni 10:3-5 — A promessa de Morôni",
    sentences: [
      {
        en: "Behold, I would exhort you that when ye shall read these things, ye would remember how merciful the Lord hath been unto the children of men.",
        target:
          "Eis que eu vos exortaria a que, quando lerdes estas coisas, vos lembreis de quão misericordioso o Senhor tem sido para com os filhos dos homens.",
      },
      {
        en: "And ponder it in your hearts.",
        target: "E mediteis sobre isso em vossos corações.",
      },
      {
        en: "And when ye shall receive these things, I would exhort you that ye would ask God, the Eternal Father, in the name of Christ, if these things are not true.",
        target:
          "E quando receberdes estas coisas, eu vos exortaria a perguntar a Deus, o Pai Eterno, em nome de Cristo, se estas coisas não são verdadeiras.",
      },
      {
        en: "And if ye shall ask with a sincere heart, with real intent, having faith in Christ, he will manifest the truth of it unto you, by the power of the Holy Ghost.",
        target:
          "E se perguntardes com coração sincero, com intenção real, tendo fé em Cristo, Ele vos manifestará a verdade delas pelo poder do Espírito Santo.",
      },
      {
        en: "And by the power of the Holy Ghost ye may know the truth of all things.",
        target: "E pelo poder do Espírito Santo podeis conhecer a verdade de todas as coisas.",
      },
    ],
  },
  {
    title: "3 Néfi 11 — Cristo aparece nas Américas",
    sentences: [
      {
        en: "Behold, I am Jesus Christ, whom the prophets testified shall come into the world.",
        target:
          "Eis que eu sou Jesus Cristo, de quem os profetas testemunharam que viria ao mundo.",
      },
      {
        en: "And behold, I am the light and the life of the world.",
        target: "E eis que eu sou a luz e a vida do mundo.",
      },
      {
        en: "Arise and come forth unto me, that ye may thrust your hands into my side, and that ye may feel the prints of the nails in my hands and in my feet.",
        target:
          "Levantai-vos e vinde a mim, para que possais colocar vossas mãos no meu lado e tocar as marcas dos pregos em minhas mãos e em meus pés.",
      },
      {
        en: "That ye may know that I am the God of Israel, and the God of the whole earth, and have been slain for the sins of the world.",
        target:
          "Para que saibais que eu sou o Deus de Israel e o Deus de toda a terra, e que fui morto pelos pecados do mundo.",
      },
    ],
  },
  {
    title: "Helamã 5:12 — O rochedo do nosso Redentor",
    sentences: [
      {
        en: "Remember, remember that it is upon the rock of our Redeemer, who is Christ, the Son of God, that ye must build your foundation.",
        target:
          "Lembrai-vos, lembrai-vos de que é sobre o rochedo de nosso Redentor, que é Cristo, o Filho de Deus, que deveis edificar vosso fundamento.",
      },
      {
        en: "That when the devil shall send forth his mighty winds, yea, his shafts in the whirlwind, it shall have no power over you.",
        target:
          "Para que, quando o diabo enviar seus ventos poderosos, sim, seus dardos no redemoinho, não tenha poder algum sobre vós.",
      },
      {
        en: "Because of the rock upon which ye are built, which is a sure foundation, a foundation whereon if men build they cannot fall.",
        target:
          "Por causa do rochedo sobre o qual estais edificados, que é um fundamento seguro, um fundamento sobre o qual, se os homens edificarem, não podem cair.",
      },
    ],
  },
  {
    title: "Éter 12 — Fé, esperança, e as coisas fracas tornadas fortes",
    sentences: [
      {
        en: "And now, I, Moroni, would speak somewhat concerning these things; I would show unto the world that faith is things which are hoped for and not seen.",
        target:
          "E agora, eu, Morôni, desejaria dizer algo sobre estas coisas; desejaria mostrar ao mundo que a fé é o que se espera e não se vê.",
      },
      {
        en: "Wherefore, dispute not because ye see not, for ye receive no witness until after the trial of your faith.",
        target:
          "Por isso, não disputeis porque não veis, pois não recebeis nenhum testemunho senão após a provação de vossa fé.",
      },
      {
        en: "And if men come unto me I will show unto them their weakness.",
        target: "E se os homens vierem a mim, mostrarei a eles sua fraqueza.",
      },
      {
        en: "I give unto men weakness that they may be humble; and my grace is sufficient for all men that humble themselves before me.",
        target:
          "Dou aos homens fraqueza para que sejam humildes; e minha graça é suficiente para todos os homens que se humilham perante mim.",
      },
      {
        en: "For if they humble themselves before me, and have faith in me, then will I make weak things become strong unto them.",
        target:
          "Pois se se humilharem perante mim e tiverem fé em mim, farei que as coisas fracas se tornem fortes para eles.",
      },
    ],
  },
];

const DC_CHAPTERS_PT: BookChapter[] = [
  {
    title: "D&C 4 — Uma obra maravilhosa está prestes a surgir",
    sentences: [
      {
        en: "Now behold, a marvelous work is about to come forth among the children of men.",
        target:
          "Agora eis que uma obra maravilhosa está prestes a surgir entre os filhos dos homens.",
      },
      {
        en: "Therefore, O ye that embark in the service of God, see that ye serve him with all your heart, might, mind and strength.",
        target:
          "Portanto, ó vós que vos embarcais no serviço de Deus, vede que o servis com todo vosso coração, força, mente e poder.",
      },
      {
        en: "That ye may stand blameless before God at the last day.",
        target: "Para que possais apresentar-vos sem culpa perante Deus no último dia.",
      },
      {
        en: "Faith, hope, charity and love, with an eye single to the glory of God, qualify him for the work.",
        target:
          "A fé, a esperança, a caridade e o amor, com os olhos fixos unicamente na glória de Deus, o qualificam para a obra.",
      },
    ],
  },
  {
    title: "D&C 8 — A revelação vem pelo Espírito",
    sentences: [
      {
        en: "I will tell you in your mind and in your heart, by the Holy Ghost, which shall come upon you and which shall dwell in your heart.",
        target:
          "Falarei à vossa mente e ao vosso coração pelo Espírito Santo, que virá sobre vós e habitará em vosso coração.",
      },
      {
        en: "Now, behold, this is the spirit of revelation; behold, this is the spirit by which Moses brought the children of Israel through the Red Sea on dry ground.",
        target:
          "Agora eis que este é o espírito de revelação; eis que este é o espírito pelo qual Moisés conduziu os filhos de Israel através do Mar Vermelho em terra seca.",
      },
    ],
  },
  {
    title: "D&C 58:26-27 — Não ser comandado em todas as coisas",
    sentences: [
      {
        en: "For behold, it is not meet that I should command in all things; for he that is compelled in all things, the same is a slothful and not a wise servant.",
        target:
          "Pois eis que não é adequado que eu comande em todas as coisas; pois aquele que é compelido em todas as coisas é um servo preguiçoso e não sábio.",
      },
      {
        en: "Verily I say, men should be anxiously engaged in a good cause, and do many things of their own free will.",
        target:
          "Em verdade digo, os homens devem estar ativamente engajados em uma boa causa e fazer muitas coisas de seu próprio livre-arbítrio.",
      },
      {
        en: "And bring to pass much righteousness; for the power is in them, wherein they are agents unto themselves.",
        target: "E realizar muita justiça; pois o poder está neles, pois são agentes de si mesmos.",
      },
    ],
  },
  {
    title: "D&C 76 — A visão dos três reinos",
    sentences: [
      {
        en: "Great and marvelous are the works of the Lord, and the mysteries of his kingdom which he showed unto us.",
        target:
          "Grandes e maravilhosas são as obras do Senhor e os mistérios de seu reino que Ele nos mostrou.",
      },
      {
        en: "And this is the gospel, the glad tidings, which the voice out of the heavens bore record unto us.",
        target: "E este é o Evangelho, as boas novas, das quais a voz dos céus nos deu testemunho.",
      },
      {
        en: "That he came into the world, even Jesus, to be crucified for the world, and to bear the sins of the world, and to sanctify the world.",
        target:
          "Que Ele veio ao mundo, sim, Jesus, para ser crucificado pelo mundo, para carregar os pecados do mundo e para santificar o mundo.",
      },
    ],
  },
];

const NT_CHAPTERS_PT: BookChapter[] = [
  {
    title: "João 3:16-17 — Porque Deus amou o mundo de tal maneira",
    sentences: [
      {
        en: "For God so loved the world, that he gave his only begotten Son.",
        target: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito.",
      },
      {
        en: "That whosoever believeth in him should not perish, but have everlasting life.",
        target: "Para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
      },
      {
        en: "For God sent not his Son into the world to condemn the world; but that the world through him might be saved.",
        target:
          "Pois Deus não enviou o seu Filho ao mundo para condenar o mundo, mas para que o mundo seja salvo por meio dele.",
      },
    ],
  },
  {
    title: "Tiago 1:5 — Se alguém dentre vós tem falta de sabedoria",
    sentences: [
      {
        en: "If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him.",
        target:
          "Se alguém dentre vós tem falta de sabedoria, peça-a a Deus, que a todos dá liberalmente e não faz reprovação, e ser-lhe-á dada.",
      },
      {
        en: "But let him ask in faith, nothing wavering.",
        target: "Mas peça com fé, sem hesitar.",
      },
    ],
  },
  {
    title: "Mateus 28:19-20 — Ide e fazei discípulos de todas as nações",
    sentences: [
      {
        en: "Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost.",
        target:
          "Ide, portanto, e fazei discípulos de todas as nações, batizando-os em nome do Pai, e do Filho, e do Espírito Santo.",
      },
      {
        en: "Teaching them to observe all things whatsoever I have commanded you.",
        target: "Ensinando-os a guardar todas as coisas que vos ordenei.",
      },
      {
        en: "And, lo, I am with you always, even unto the end of the world.",
        target: "E eis que estou convosco todos os dias até a consumação dos séculos.",
      },
    ],
  },
  {
    title: "Atos 3:19-21 — Arrependei-vos e convertei-vos",
    sentences: [
      {
        en: "Repent ye therefore, and be converted, that your sins may be blotted out.",
        target: "Arrependei-vos, pois, e convertei-vos para que os vossos pecados sejam apagados.",
      },
      {
        en: "When the times of refreshing shall come from the presence of the Lord.",
        target: "Para que venham os tempos de refrigério da presença do Senhor.",
      },
      {
        en: "And he shall send Jesus Christ, which before was preached unto you.",
        target: "E para que Ele envie Jesus Cristo, que vos foi anteriormente pregado.",
      },
      {
        en: "Whom the heaven must receive until the times of restitution of all things.",
        target: "O qual os céus devem receber até os tempos da restauração de todas as coisas.",
      },
    ],
  },
  {
    title: "João 14:26-27 — O Consolador vos ensinará todas as coisas",
    sentences: [
      {
        en: "But the Comforter, which is the Holy Ghost, whom the Father will send in my name, he shall teach you all things.",
        target:
          "Mas o Consolador, o Espírito Santo, que o Pai enviará em meu nome, esse vos ensinará todas as coisas.",
      },
      {
        en: "And bring all things to your remembrance, whatsoever I have said unto you.",
        target: "E vos fará lembrar de tudo o que eu vos disse.",
      },
      {
        en: "Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you.",
        target: "Deixo-vos a paz, a minha paz vos dou; não vo-la dou como o mundo a dá.",
      },
      {
        en: "Let not your heart be troubled, neither let it be afraid.",
        target: "Não se turbe o vosso coração, nem se atemorize.",
      },
    ],
  },
];

const OT_CHAPTERS_PT: BookChapter[] = [
  {
    title: "Isaías 29:14 — Uma obra maravilhosa e espantosa",
    sentences: [
      {
        en: "Therefore, behold, I will proceed to do a marvellous work among this people, even a marvellous work and a wonder.",
        target:
          "Portanto, eis que procederei a fazer uma obra maravilhosa e espantosa entre este povo.",
      },
      {
        en: "For the wisdom of their wise men shall perish, and the understanding of their prudent men shall be hid.",
        target:
          "Pois a sabedoria dos seus sábios perecerá e o entendimento dos seus prudentes se ocultará.",
      },
    ],
  },
  {
    title: "Amós 3:7 — O Senhor não faz nada sem revelar seu segredo",
    sentences: [
      {
        en: "Surely the Lord God will do nothing, but he revealeth his secret unto his servants the prophets.",
        target:
          "Certamente o Senhor Deus não fará coisa alguma, sem que revele o seu segredo aos seus servos os profetas.",
      },
    ],
  },
  {
    title: "Ezequiel 37:15-17 — Os dois paus unidos em um",
    sentences: [
      {
        en: "The word of the Lord came again unto me, saying, Moreover, thou son of man, take thee one stick.",
        target: "Veio a mim a palavra do Senhor, dizendo: E tu, ó filho do homem, toma um pau.",
      },
      {
        en: "And write upon it, For Judah, and for the children of Israel his companions.",
        target: "E escreve nele: Para Judá e para os filhos de Israel seus companheiros.",
      },
      {
        en: "Then take another stick, and write upon it, For Joseph, the stick of Ephraim.",
        target: "Depois toma outro pau e escreve nele: Para José, pau de Efraim.",
      },
      {
        en: "And join them one to another into one stick; and they shall become one in thine hand.",
        target: "E ajunta-os um ao outro, para que sejam um único pau, e se tornem um em tua mão.",
      },
    ],
  },
];

const PGP_CHAPTERS_PT: BookChapter[] = [
  {
    title: "Moisés 1:39 — Esta é minha obra e minha glória",
    sentences: [
      {
        en: "For behold, this is my work and my glory — to bring to pass the immortality and eternal life of man.",
        target:
          "Pois eis que esta é minha obra e minha glória: realizar a imortalidade e a vida eterna do homem.",
      },
    ],
  },
  {
    title: "Os Artigos de Fé 1-5",
    sentences: [
      {
        en: "We believe in God, the Eternal Father, and in His Son, Jesus Christ, and in the Holy Ghost.",
        target: "Cremos em Deus, o Pai Eterno, e em Seu Filho, Jesus Cristo, e no Espírito Santo.",
      },
      {
        en: "We believe that men will be punished for their own sins, and not for Adam's transgression.",
        target:
          "Cremos que os homens serão punidos pelos seus próprios pecados e não pela transgressão de Adão.",
      },
      {
        en: "We believe that through the Atonement of Christ, all mankind may be saved, by obedience to the laws and ordinances of the Gospel.",
        target:
          "Cremos que pela Expiação de Cristo toda a humanidade pode ser salva, mediante obediência às leis e ordenanças do Evangelho.",
      },
      {
        en: "We believe that the first principles and ordinances of the Gospel are: first, Faith in the Lord Jesus Christ; second, Repentance; third, Baptism by immersion for the remission of sins; fourth, Laying on of hands for the gift of the Holy Ghost.",
        target:
          "Cremos que os primeiros princípios e ordenanças do Evangelho são: primeiro, Fé no Senhor Jesus Cristo; segundo, Arrependimento; terceiro, Batismo por imersão para a remissão dos pecados; quarto, Imposição de mãos para o dom do Espírito Santo.",
      },
      {
        en: "We believe that a man must be called of God, by prophecy, and by the laying on of hands by those who are in authority.",
        target:
          "Cremos que o homem deve ser chamado por Deus, por profecia e pela imposição de mãos dos que têm autoridade.",
      },
    ],
  },
  {
    title: "Os Artigos de Fé 6-13",
    sentences: [
      {
        en: "We believe in the same organization that existed in the Primitive Church, namely, apostles, prophets, pastors, teachers, evangelists, and so forth.",
        target:
          "Cremos na mesma organização que existia na Igreja Primitiva, a saber: apóstolos, profetas, pastores, mestres, evangelistas, e assim por diante.",
      },
      {
        en: "We believe in the gift of tongues, prophecy, revelation, visions, healing, interpretation of tongues, and so forth.",
        target:
          "Cremos no dom de línguas, profecia, revelação, visões, curas, interpretação de línguas, e assim por diante.",
      },
      {
        en: "We believe the Bible to be the word of God as far as it is translated correctly; we also believe the Book of Mormon to be the word of God.",
        target:
          "Cremos que a Bíblia é a palavra de Deus na medida em que está corretamente traduzida; cremos também que o Livro de Mórmon é a palavra de Deus.",
      },
      {
        en: "We believe all that God has revealed, all that He does now reveal, and we believe that He will yet reveal many great and important things.",
        target:
          "Cremos em tudo o que Deus revelou, em tudo o que Ele revela agora e cremos que Ele ainda revelará muitas coisas grandes e importantes.",
      },
      {
        en: "We believe in being honest, true, chaste, benevolent, virtuous, and in doing good to all men.",
        target:
          "Cremos em ser honestos, verdadeiros, castos, benevolentes, virtuosos e em fazer o bem a todos os homens.",
      },
      {
        en: "If there is anything virtuous, lovely, or of good report or praiseworthy, we seek after these things.",
        target: "Se há algo virtuoso, belo, de boa fama ou digno de louvor, buscamos essas coisas.",
      },
    ],
  },
];

// ── Exported LibraryEntry arrays ─────────────────────────────────────────────

export const LDS_SCRIPTURES_FR: LibraryEntry[] = [
  {
    id: "missionary-book-of-mormon-fr",
    title: "The Book of Mormon",
    subtitle: "Un autre témoignage de Jésus-Christ",
    language: "French",
    targetLabel: "Français",
    level: "C1" as const,
    section: "missionary" as const,
    flag: "📖",
    available: true,
    sentences: BOM_CHAPTERS_FR[0].sentences,
    chapters: BOM_CHAPTERS_FR,
  },
  {
    id: "missionary-doctrine-and-covenants-fr",
    title: "Doctrine and Covenants",
    subtitle: "Révélations données à Joseph Smith et à ses successeurs",
    language: "French",
    targetLabel: "Français",
    level: "C1" as const,
    section: "missionary" as const,
    flag: "📜",
    available: true,
    sentences: DC_CHAPTERS_FR[0].sentences,
    chapters: DC_CHAPTERS_FR,
  },
  {
    id: "missionary-new-testament-kjv-fr",
    title: "New Testament — KJV",
    subtitle: "Passages choisis, version King James (domaine public)",
    language: "French",
    targetLabel: "Français",
    level: "C1" as const,
    section: "missionary" as const,
    flag: "✝️",
    available: true,
    sentences: NT_CHAPTERS_FR[0].sentences,
    chapters: NT_CHAPTERS_FR,
  },
  {
    id: "missionary-old-testament-kjv-fr",
    title: "Old Testament — KJV",
    subtitle: "Passages choisis, version King James (domaine public)",
    language: "French",
    targetLabel: "Français",
    level: "C1" as const,
    section: "missionary" as const,
    flag: "✡️",
    available: true,
    sentences: OT_CHAPTERS_FR[0].sentences,
    chapters: OT_CHAPTERS_FR,
  },
  {
    id: "missionary-pearl-of-great-price-fr",
    title: "Pearl of Great Price",
    subtitle: "Sélections de Moïse, Abraham, Joseph Smith et les Articles de Foi",
    language: "French",
    targetLabel: "Français",
    level: "C1" as const,
    section: "missionary" as const,
    flag: "🕊️",
    available: true,
    sentences: PGP_CHAPTERS_FR[0].sentences,
    chapters: PGP_CHAPTERS_FR,
  },
];

export const LDS_SCRIPTURES_PT: LibraryEntry[] = [
  {
    id: "missionary-book-of-mormon-pt",
    title: "The Book of Mormon",
    subtitle: "Outro testamento de Jesus Cristo",
    language: "Portuguese",
    targetLabel: "Português",
    level: "C1" as const,
    section: "missionary" as const,
    flag: "📖",
    available: true,
    sentences: BOM_CHAPTERS_PT[0].sentences,
    chapters: BOM_CHAPTERS_PT,
  },
  {
    id: "missionary-doctrine-and-covenants-pt",
    title: "Doctrine and Covenants",
    subtitle: "Revelações dadas a Joseph Smith e seus sucessores",
    language: "Portuguese",
    targetLabel: "Português",
    level: "C1" as const,
    section: "missionary" as const,
    flag: "📜",
    available: true,
    sentences: DC_CHAPTERS_PT[0].sentences,
    chapters: DC_CHAPTERS_PT,
  },
  {
    id: "missionary-new-testament-kjv-pt",
    title: "New Testament — KJV",
    subtitle: "Passagens selecionadas, versão King James (domínio público)",
    language: "Portuguese",
    targetLabel: "Português",
    level: "C1" as const,
    section: "missionary" as const,
    flag: "✝️",
    available: true,
    sentences: NT_CHAPTERS_PT[0].sentences,
    chapters: NT_CHAPTERS_PT,
  },
  {
    id: "missionary-old-testament-kjv-pt",
    title: "Old Testament — KJV",
    subtitle: "Passagens selecionadas, versão King James (domínio público)",
    language: "Portuguese",
    targetLabel: "Português",
    level: "C1" as const,
    section: "missionary" as const,
    flag: "✡️",
    available: true,
    sentences: OT_CHAPTERS_PT[0].sentences,
    chapters: OT_CHAPTERS_PT,
  },
  {
    id: "missionary-pearl-of-great-price-pt",
    title: "Pearl of Great Price",
    subtitle: "Seleções de Moisés, Abraão, Joseph Smith e os Artigos de Fé",
    language: "Portuguese",
    targetLabel: "Português",
    level: "C1" as const,
    section: "missionary" as const,
    flag: "🕊️",
    available: true,
    sentences: PGP_CHAPTERS_PT[0].sentences,
    chapters: PGP_CHAPTERS_PT,
  },
];
