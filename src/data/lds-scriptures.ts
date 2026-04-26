// Latter-day Saint scripture library — key passages prepared as parallel-reading
// sentence pairs (English ↔ Spanish, Reina-Valera / Santa Biblia / Santas Escrituras).
// All source texts are in the public domain (KJV) or freely published online by
// The Church of Jesus Christ of Latter-day Saints. "Jesus the Christ" by James E.
// Talmage (1915) is in the public domain. Selections are excerpted; not the full text.

import type { SentencePair } from "@/data/library";

export interface ScriptureChapter {
  title: string;
  sentences: SentencePair[];
}

export interface ScriptureBook {
  id: string;
  title: string;
  subtitle: string;
  flag: string;
  chapters: ScriptureChapter[];
}

export const BOOK_OF_MORMON: ScriptureBook = {
  id: "missionary-book-of-mormon",
  title: "The Book of Mormon",
  subtitle: "Another Testament of Jesus Christ",
  flag: "📖",
  chapters: [
    {
      title: "1 Nephi 1 — I, Nephi, having been born of goodly parents",
      sentences: [
        { en: "I, Nephi, having been born of goodly parents, therefore I was taught somewhat in all the learning of my father.", target: "Yo, Nefi, nacido de buenos padres, por tanto, fui instruido en algo de todo el saber de mi padre." },
        { en: "And having seen many afflictions in the course of my days, nevertheless, having been highly favored of the Lord in all my days.", target: "Y habiendo padecido muchas aflicciones en el transcurso de mis días, no obstante, habiendo sido altamente favorecido del Señor en todos mis días." },
        { en: "I make a record of my proceedings in my days.", target: "Hago una relación de mis procedimientos en mis días." },
        { en: "And I know that the record which I make is true; and I make it with mine own hand; and I make it according to my knowledge.", target: "Y sé que la relación que escribo es verdadera; y la hago con mi propia mano; y la hago según mi conocimiento." },
      ],
    },
    {
      title: "1 Nephi 3:7 — I will go and do",
      sentences: [
        { en: "And it came to pass that I, Nephi, said unto my father: I will go and do the things which the Lord hath commanded.", target: "Y aconteció que yo, Nefi, dije a mi padre: Iré y haré lo que el Señor ha mandado." },
        { en: "For I know that the Lord giveth no commandments unto the children of men, save he shall prepare a way for them.", target: "Porque sé que el Señor no da mandamientos a los hijos de los hombres sin prepararles la vía." },
        { en: "That they may accomplish the thing which he commandeth them.", target: "Para que cumplan lo que él les manda." },
      ],
    },
    {
      title: "2 Nephi 2 — Adam fell that men might be",
      sentences: [
        { en: "Adam fell that men might be; and men are, that they might have joy.", target: "Adán cayó para que los hombres existiesen; y existen los hombres para que tengan gozo." },
        { en: "And the Messiah cometh in the fulness of time, that he may redeem the children of men from the fall.", target: "Y el Mesías viene en la plenitud de los tiempos, para redimir a los hijos de los hombres de la caída." },
        { en: "Wherefore, men are free according to the flesh; and all things are given them which are expedient unto man.", target: "Por tanto, los hombres son libres según la carne, y todas las cosas que les son convenientes les son dadas." },
        { en: "And they are free to choose liberty and eternal life, through the great Mediator of all men.", target: "Y son libres para escoger la libertad y la vida eterna, por medio del gran Mediador de todos los hombres." },
      ],
    },
    {
      title: "Mosiah 3:19 — The natural man is an enemy to God",
      sentences: [
        { en: "For the natural man is an enemy to God, and has been from the fall of Adam, and will be, forever and ever.", target: "Porque el hombre natural es enemigo de Dios, y lo ha sido desde la caída de Adán, y lo será para siempre jamás." },
        { en: "Unless he yields to the enticings of the Holy Spirit, and putteth off the natural man.", target: "A menos que se someta al influjo del Santo Espíritu, y se despoje del hombre natural." },
        { en: "And becometh a saint through the atonement of Christ the Lord.", target: "Y se haga santo por la expiación de Cristo el Señor." },
        { en: "And becometh as a child, submissive, meek, humble, patient, full of love.", target: "Y se vuelva como un niño: sumiso, manso, humilde, paciente, lleno de amor." },
      ],
    },
    {
      title: "Alma 32 — Faith is like a seed",
      sentences: [
        { en: "Now, we will compare the word unto a seed.", target: "Ahora bien, compararemos la palabra a una semilla." },
        { en: "Now, if ye give place, that a seed may be planted in your heart, behold, if it be a true seed, it will begin to swell within your breasts.", target: "Si dais lugar para que se plante una semilla en vuestro corazón, he aquí, si es una semilla verdadera, comenzará a hincharse dentro de vuestro pecho." },
        { en: "And when you feel these swelling motions, ye will begin to say within yourselves: It must needs be that this is a good seed.", target: "Y cuando sintáis estos movimientos de hinchazón, empezaréis a deciros: Forzosamente esta tiene que ser una buena semilla." },
        { en: "For behold, it enlargeth my soul; yea, it enlighteneth my understanding.", target: "Porque he aquí, ensancha mi alma; sí, ilumina mi entendimiento." },
      ],
    },
    {
      title: "3 Nephi 11 — Christ appears in the Americas",
      sentences: [
        { en: "Behold, I am Jesus Christ, whom the prophets testified shall come into the world.", target: "He aquí, yo soy Jesucristo, de quien los profetas testificaron que vendría al mundo." },
        { en: "And behold, I am the light and the life of the world.", target: "Y he aquí, yo soy la luz y la vida del mundo." },
        { en: "Arise and come forth unto me, that ye may thrust your hands into my side, and that ye may feel the prints of the nails in my hands and in my feet.", target: "Levantaos y venid a mí, para que metáis vuestras manos en mi costado, y para que toquéis las marcas de los clavos en mis manos y en mis pies." },
        { en: "That ye may know that I am the God of Israel, and the God of the whole earth, and have been slain for the sins of the world.", target: "Para que sepáis que soy el Dios de Israel, y el Dios de toda la tierra, y que he sido muerto por los pecados del mundo." },
      ],
    },
    {
      title: "Moroni 10:3-5 — The promise",
      sentences: [
        { en: "Behold, I would exhort you that when ye shall read these things, ye would remember how merciful the Lord hath been unto the children of men.", target: "He aquí, quisiera exhortaros a que cuando leyereis estas cosas, recordéis cuán misericordioso ha sido el Señor con los hijos de los hombres." },
        { en: "And ponder it in your hearts.", target: "Y que lo meditéis en vuestros corazones." },
        { en: "And when ye shall receive these things, I would exhort you that ye would ask God, the Eternal Father, in the name of Christ, if these things are not true.", target: "Y cuando recibáis estas cosas, quisiera exhortaros a que preguntéis a Dios, el Eterno Padre, en el nombre de Cristo, si no son verdaderas estas cosas." },
        { en: "And if ye shall ask with a sincere heart, with real intent, having faith in Christ, he will manifest the truth of it unto you, by the power of the Holy Ghost.", target: "Y si pedís con un corazón sincero, con verdadera intención, teniendo fe en Cristo, él os manifestará la verdad de ellas por el poder del Espíritu Santo." },
        { en: "And by the power of the Holy Ghost ye may know the truth of all things.", target: "Y por el poder del Espíritu Santo podréis conocer la verdad de todas las cosas." },
      ],
    },
  ],
};

export const DOCTRINE_AND_COVENANTS: ScriptureBook = {
  id: "missionary-doctrine-and-covenants",
  title: "Doctrine and Covenants",
  subtitle: "Revelations given to Joseph Smith and his successors",
  flag: "📜",
  chapters: [
    {
      title: "D&C 1 — The voice of warning",
      sentences: [
        { en: "Hearken, O ye people of my church, saith the voice of him who dwells on high.", target: "Escuchad, oh pueblo de mi iglesia, dice la voz de aquel que mora en las alturas." },
        { en: "And the voice of warning shall be unto all people, by the mouths of my disciples, whom I have chosen in these last days.", target: "Y la voz de amonestación será para todo pueblo, por boca de mis discípulos, a quienes he escogido en estos últimos días." },
        { en: "And they shall go forth and none shall stay them, for I the Lord have commanded them.", target: "Y saldrán, y nadie los detendrá, porque yo, el Señor, se lo he mandado." },
      ],
    },
    {
      title: "D&C 4 — A marvelous work is about to come forth",
      sentences: [
        { en: "Now behold, a marvelous work is about to come forth among the children of men.", target: "Ahora bien, he aquí, una obra maravillosa está a punto de aparecer entre los hijos de los hombres." },
        { en: "Therefore, O ye that embark in the service of God, see that ye serve him with all your heart, might, mind and strength.", target: "Por tanto, oh vosotros que os embarcáis en el servicio de Dios, mirad que le sirváis con todo vuestro corazón, alma, mente y fuerza." },
        { en: "That ye may stand blameless before God at the last day.", target: "Para que aparezcáis sin culpa ante Dios en el último día." },
        { en: "Faith, hope, charity and love, with an eye single to the glory of God, qualify him for the work.", target: "La fe, la esperanza, la caridad y el amor, con la mira puesta únicamente en la gloria de Dios, lo hacen apto para la obra." },
      ],
    },
    {
      title: "D&C 8 — Revelation comes by the Spirit",
      sentences: [
        { en: "I will tell you in your mind and in your heart, by the Holy Ghost, which shall come upon you and which shall dwell in your heart.", target: "Te hablaré en tu mente y en tu corazón, por medio del Espíritu Santo, que vendrá sobre ti y morará en tu corazón." },
        { en: "Now, behold, this is the spirit of revelation; behold, this is the spirit by which Moses brought the children of Israel through the Red Sea on dry ground.", target: "Ahora bien, he aquí, este es el espíritu de revelación; he aquí, este es el espíritu mediante el cual Moisés condujo a los hijos de Israel por el mar Rojo en seco." },
      ],
    },
    {
      title: "D&C 76 — The vision of the three kingdoms",
      sentences: [
        { en: "Great and marvelous are the works of the Lord, and the mysteries of his kingdom which he showed unto us.", target: "Grandes y maravillosas son las obras del Señor, y los misterios de su reino que nos mostró." },
        { en: "And this is the gospel, the glad tidings, which the voice out of the heavens bore record unto us.", target: "Y este es el evangelio, las buenas nuevas, de las cuales la voz de los cielos nos dio testimonio." },
        { en: "That he came into the world, even Jesus, to be crucified for the world, and to bear the sins of the world, and to sanctify the world.", target: "Que vino al mundo, sí, Jesús, para ser crucificado por el mundo, y llevar los pecados del mundo, y santificarlo." },
      ],
    },
    {
      title: "D&C 89 — The Word of Wisdom",
      sentences: [
        { en: "A Word of Wisdom, for the benefit of the council of high priests, and the church, and also the saints in Zion.", target: "Una Palabra de Sabiduría, en beneficio del consejo de sumos sacerdotes, y de la iglesia, y también de los santos en Sion." },
        { en: "Given for a principle with promise, adapted to the capacity of the weak and the weakest of all saints.", target: "Dada como un principio con promesa, adaptada a la capacidad de los débiles y del más débil de todos los santos." },
        { en: "And all saints who remember to keep and do these sayings, walking in obedience to the commandments, shall receive health in their navel and marrow to their bones.", target: "Y todos los santos que se acuerden de guardar y hacer estas cosas, andando en obediencia a los mandamientos, recibirán salud en el ombligo y médula en los huesos." },
        { en: "And shall find wisdom and great treasures of knowledge, even hidden treasures.", target: "Y hallarán sabiduría y grandes tesoros de conocimiento, sí, tesoros escondidos." },
      ],
    },
    {
      title: "D&C 121 — The rights of the priesthood",
      sentences: [
        { en: "The rights of the priesthood are inseparably connected with the powers of heaven.", target: "Los derechos del sacerdocio están inseparablemente unidos a los poderes del cielo." },
        { en: "And the powers of heaven cannot be controlled nor handled only upon the principles of righteousness.", target: "Y los poderes del cielo no pueden ser gobernados ni manejados sino conforme a los principios de la rectitud." },
        { en: "No power or influence can or ought to be maintained by virtue of the priesthood, only by persuasion, by long-suffering, by gentleness and meekness, and by love unfeigned.", target: "Ningún poder o influencia se puede ni se debe mantener en virtud del sacerdocio, sino por persuasión, por longanimidad, por benignidad y mansedumbre, y por amor sincero." },
      ],
    },
  ],
};

export const PEARL_OF_GREAT_PRICE: ScriptureBook = {
  id: "missionary-pearl-of-great-price",
  title: "Pearl of Great Price",
  subtitle: "Selections of Moses, Abraham, Joseph Smith, and the Articles of Faith",
  flag: "🕊️",
  chapters: [
    {
      title: "Moses 1:39 — This is my work and my glory",
      sentences: [
        { en: "For behold, this is my work and my glory — to bring to pass the immortality and eternal life of man.", target: "Porque he aquí, esta es mi obra y mi gloria: llevar a cabo la inmortalidad y la vida eterna del hombre." },
      ],
    },
    {
      title: "Moses 7 — Enoch and the city of Zion",
      sentences: [
        { en: "And the Lord called his people Zion, because they were of one heart and one mind, and dwelt in righteousness.", target: "Y el Señor llamó Sion a su pueblo, porque eran de un solo corazón y una sola mente, y moraban en rectitud." },
        { en: "And there was no poor among them.", target: "Y no había pobres entre ellos." },
      ],
    },
    {
      title: "Abraham 3 — The noble and great ones",
      sentences: [
        { en: "Now the Lord had shown unto me, Abraham, the intelligences that were organized before the world was.", target: "Ahora bien, el Señor me había mostrado a mí, Abraham, las inteligencias que fueron organizadas antes que existiera el mundo." },
        { en: "And among all these there were many of the noble and great ones.", target: "Y entre todas estas había muchas de las nobles y grandes." },
        { en: "And God saw these souls that they were good, and he stood in the midst of them, and he said: These I will make my rulers.", target: "Y Dios vio estas almas, que eran buenas, y estaba en medio de ellas, y dijo: A estos haré mis gobernantes." },
        { en: "We will go down, for there is space there, and we will take of these materials, and we will make an earth whereon these may dwell.", target: "Descenderemos, porque hay espacio allá; y tomaremos de estos materiales, y haremos una tierra donde estos puedan morar." },
      ],
    },
    {
      title: "Joseph Smith — History 1:15-17 — The First Vision",
      sentences: [
        { en: "I saw a pillar of light exactly over my head, above the brightness of the sun, which descended gradually until it fell upon me.", target: "Vi una columna de luz, más brillante que el sol, directamente arriba de mi cabeza; y esta luz gradualmente descendió hasta descansar sobre mí." },
        { en: "When the light rested upon me I saw two Personages, whose brightness and glory defy all description, standing above me in the air.", target: "Cuando reposó sobre mí, vi en el aire arriba de mí a dos Personajes, cuyo fulgor y gloria no admiten descripción." },
        { en: "One of them spake unto me, calling me by name and said, pointing to the other — This is My Beloved Son. Hear Him!", target: "Uno de ellos me habló, llamándome por mi nombre, y dijo, señalando al otro: Este es mi Hijo Amado. ¡Escúchalo!" },
      ],
    },
    {
      title: "The Articles of Faith — 1, 3, 4, 13",
      sentences: [
        { en: "We believe in God, the Eternal Father, and in His Son, Jesus Christ, and in the Holy Ghost.", target: "Creemos en Dios el Eterno Padre, y en su Hijo Jesucristo, y en el Espíritu Santo." },
        { en: "We believe that through the Atonement of Christ, all mankind may be saved, by obedience to the laws and ordinances of the Gospel.", target: "Creemos que por la Expiación de Cristo, todo el género humano puede salvarse, mediante la obediencia a las leyes y ordenanzas del Evangelio." },
        { en: "We believe that the first principles and ordinances of the Gospel are: first, Faith in the Lord Jesus Christ; second, Repentance; third, Baptism by immersion for the remission of sins; fourth, Laying on of hands for the gift of the Holy Ghost.", target: "Creemos que los primeros principios y ordenanzas del Evangelio son: primero, Fe en el Señor Jesucristo; segundo, Arrepentimiento; tercero, Bautismo por inmersión para la remisión de los pecados; cuarto, Imposición de manos para comunicar el don del Espíritu Santo." },
        { en: "We believe in being honest, true, chaste, benevolent, virtuous, and in doing good to all men.", target: "Creemos en ser honrados, verdaderos, castos, benevolentes, virtuosos, y en hacer el bien a todos los hombres." },
        { en: "If there is anything virtuous, lovely, or of good report or praiseworthy, we seek after these things.", target: "Si hay algo virtuoso, o bello, o de buena reputación, o digno de alabanza, a esto aspiramos." },
      ],
    },
  ],
};

export const OLD_TESTAMENT_KJV: ScriptureBook = {
  id: "missionary-old-testament-kjv",
  title: "Old Testament — KJV",
  subtitle: "Selected passages, King James Version (public domain)",
  flag: "✡️",
  chapters: [
    {
      title: "Genesis 1:1-5 — In the beginning",
      sentences: [
        { en: "In the beginning God created the heaven and the earth.", target: "En el principio creó Dios los cielos y la tierra." },
        { en: "And the earth was without form, and void; and darkness was upon the face of the deep.", target: "Y la tierra estaba desordenada y vacía, y las tinieblas estaban sobre la faz del abismo." },
        { en: "And the Spirit of God moved upon the face of the waters.", target: "Y el Espíritu de Dios se movía sobre la faz de las aguas." },
        { en: "And God said, Let there be light: and there was light.", target: "Y dijo Dios: Sea la luz; y fue la luz." },
        { en: "And God saw the light, that it was good: and God divided the light from the darkness.", target: "Y vio Dios que la luz era buena; y separó Dios la luz de las tinieblas." },
      ],
    },
    {
      title: "Exodus 20 — The Ten Commandments (excerpt)",
      sentences: [
        { en: "I am the Lord thy God, which have brought thee out of the land of Egypt, out of the house of bondage.", target: "Yo soy Jehová tu Dios, que te saqué de la tierra de Egipto, de casa de servidumbre." },
        { en: "Thou shalt have no other gods before me.", target: "No tendrás dioses ajenos delante de mí." },
        { en: "Remember the sabbath day, to keep it holy.", target: "Acuérdate del día de reposo para santificarlo." },
        { en: "Honour thy father and thy mother: that thy days may be long upon the land which the Lord thy God giveth thee.", target: "Honra a tu padre y a tu madre, para que tus días se alarguen en la tierra que Jehová tu Dios te da." },
        { en: "Thou shalt not kill. Thou shalt not commit adultery. Thou shalt not steal. Thou shalt not bear false witness against thy neighbour.", target: "No matarás. No cometerás adulterio. No hurtarás. No hablarás contra tu prójimo falso testimonio." },
      ],
    },
    {
      title: "Psalm 23 — The Lord is my shepherd",
      sentences: [
        { en: "The Lord is my shepherd; I shall not want.", target: "Jehová es mi pastor; nada me faltará." },
        { en: "He maketh me to lie down in green pastures: he leadeth me beside the still waters.", target: "En lugares de delicados pastos me hará descansar; junto a aguas de reposo me pastoreará." },
        { en: "He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake.", target: "Confortará mi alma; me guiará por sendas de justicia por amor de su nombre." },
        { en: "Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.", target: "Aunque ande en valle de sombra de muerte, no temeré mal alguno, porque tú estarás conmigo; tu vara y tu cayado me infundirán aliento." },
        { en: "Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the Lord for ever.", target: "Ciertamente el bien y la misericordia me seguirán todos los días de mi vida, y en la casa de Jehová moraré por largos días." },
      ],
    },
    {
      title: "Isaiah 53 — He was wounded for our transgressions",
      sentences: [
        { en: "He is despised and rejected of men; a man of sorrows, and acquainted with grief.", target: "Despreciado y desechado entre los hombres, varón de dolores, experimentado en quebranto." },
        { en: "Surely he hath borne our griefs, and carried our sorrows.", target: "Ciertamente llevó él nuestras enfermedades, y sufrió nuestros dolores." },
        { en: "But he was wounded for our transgressions, he was bruised for our iniquities.", target: "Mas él herido fue por nuestras rebeliones, molido por nuestros pecados." },
        { en: "The chastisement of our peace was upon him; and with his stripes we are healed.", target: "El castigo de nuestra paz fue sobre él, y por su llaga fuimos nosotros curados." },
        { en: "All we like sheep have gone astray; we have turned every one to his own way; and the Lord hath laid on him the iniquity of us all.", target: "Todos nosotros nos descarriamos como ovejas, cada cual se apartó por su camino; mas Jehová cargó en él el pecado de todos nosotros." },
      ],
    },
    {
      title: "Malachi 3:10 — Bring ye all the tithes",
      sentences: [
        { en: "Bring ye all the tithes into the storehouse, that there may be meat in mine house.", target: "Traed todos los diezmos al alfolí y haya alimento en mi casa." },
        { en: "And prove me now herewith, saith the Lord of hosts, if I will not open you the windows of heaven.", target: "Y probadme ahora en esto, dice Jehová de los ejércitos, si no os abriré las ventanas de los cielos." },
        { en: "And pour you out a blessing, that there shall not be room enough to receive it.", target: "Y derramaré sobre vosotros bendición hasta que sobreabunde." },
      ],
    },
  ],
};

export const NEW_TESTAMENT_KJV: ScriptureBook = {
  id: "missionary-new-testament-kjv",
  title: "New Testament — KJV",
  subtitle: "Selected passages, King James Version (public domain)",
  flag: "✝️",
  chapters: [
    {
      title: "Matthew 5 — The Beatitudes (excerpt)",
      sentences: [
        { en: "Blessed are the poor in spirit: for theirs is the kingdom of heaven.", target: "Bienaventurados los pobres en espíritu, porque de ellos es el reino de los cielos." },
        { en: "Blessed are they that mourn: for they shall be comforted.", target: "Bienaventurados los que lloran, porque ellos recibirán consolación." },
        { en: "Blessed are the meek: for they shall inherit the earth.", target: "Bienaventurados los mansos, porque ellos recibirán la tierra por heredad." },
        { en: "Blessed are they which do hunger and thirst after righteousness: for they shall be filled.", target: "Bienaventurados los que tienen hambre y sed de justicia, porque ellos serán saciados." },
        { en: "Blessed are the merciful: for they shall obtain mercy.", target: "Bienaventurados los misericordiosos, porque ellos alcanzarán misericordia." },
        { en: "Blessed are the pure in heart: for they shall see God.", target: "Bienaventurados los de limpio corazón, porque ellos verán a Dios." },
        { en: "Blessed are the peacemakers: for they shall be called the children of God.", target: "Bienaventurados los pacificadores, porque ellos serán llamados hijos de Dios." },
      ],
    },
    {
      title: "John 3:16-17 — For God so loved the world",
      sentences: [
        { en: "For God so loved the world, that he gave his only begotten Son.", target: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito." },
        { en: "That whosoever believeth in him should not perish, but have everlasting life.", target: "Para que todo aquel que en él cree, no se pierda, mas tenga vida eterna." },
        { en: "For God sent not his Son into the world to condemn the world; but that the world through him might be saved.", target: "Porque no envió Dios a su Hijo al mundo para condenar al mundo, sino para que el mundo sea salvo por él." },
      ],
    },
    {
      title: "John 14 — In my Father's house are many mansions",
      sentences: [
        { en: "Let not your heart be troubled: ye believe in God, believe also in me.", target: "No se turbe vuestro corazón; creéis en Dios, creed también en mí." },
        { en: "In my Father's house are many mansions: if it were not so, I would have told you.", target: "En la casa de mi Padre muchas moradas hay; si así no fuera, yo os lo hubiera dicho." },
        { en: "I go to prepare a place for you. And if I go and prepare a place for you, I will come again, and receive you unto myself.", target: "Voy, pues, a preparar lugar para vosotros. Y si me fuere y os preparare lugar, vendré otra vez, y os tomaré a mí mismo." },
        { en: "I am the way, the truth, and the life: no man cometh unto the Father, but by me.", target: "Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí." },
      ],
    },
    {
      title: "John 17 — The Intercessory Prayer (excerpt)",
      sentences: [
        { en: "And this is life eternal, that they might know thee the only true God, and Jesus Christ, whom thou hast sent.", target: "Y esta es la vida eterna: que te conozcan a ti, el único Dios verdadero, y a Jesucristo, a quien has enviado." },
        { en: "I have glorified thee on the earth: I have finished the work which thou gavest me to do.", target: "Yo te he glorificado en la tierra; he acabado la obra que me diste que hiciese." },
      ],
    },
    {
      title: "1 Corinthians 13 — Charity never faileth",
      sentences: [
        { en: "Though I speak with the tongues of men and of angels, and have not charity, I am become as sounding brass, or a tinkling cymbal.", target: "Si yo hablase lenguas humanas y angélicas, y no tengo amor, vengo a ser como metal que resuena, o címbalo que retiñe." },
        { en: "Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up.", target: "El amor es sufrido, es benigno; el amor no tiene envidia; el amor no es jactancioso, no se envanece." },
        { en: "Beareth all things, believeth all things, hopeth all things, endureth all things.", target: "Todo lo sufre, todo lo cree, todo lo espera, todo lo soporta." },
        { en: "Charity never faileth.", target: "El amor nunca deja de ser." },
        { en: "And now abideth faith, hope, charity, these three; but the greatest of these is charity.", target: "Y ahora permanecen la fe, la esperanza y el amor, estos tres; pero el mayor de ellos es el amor." },
      ],
    },
    {
      title: "James 1:5 — If any of you lack wisdom",
      sentences: [
        { en: "If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him.", target: "Y si alguno de vosotros tiene falta de sabiduría, pídala a Dios, el cual da a todos abundantemente y sin reproche, y le será dada." },
        { en: "But let him ask in faith, nothing wavering.", target: "Pero pida con fe, no dudando nada." },
      ],
    },
    {
      title: "Revelation 21 — A new heaven and a new earth",
      sentences: [
        { en: "And I saw a new heaven and a new earth: for the first heaven and the first earth were passed away.", target: "Vi un cielo nuevo y una tierra nueva; porque el primer cielo y la primera tierra pasaron." },
        { en: "And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain.", target: "Y Dios enjugará toda lágrima de los ojos de ellos; y ya no habrá muerte, ni habrá más llanto, ni clamor, ni dolor." },
        { en: "Behold, I make all things new.", target: "He aquí, yo hago nuevas todas las cosas." },
      ],
    },
  ],
};

// "Jesus the Christ" — by James E. Talmage (1915, public domain).
// NOTE: User asked for "Bruce McConkie." The classic LDS work titled "Jesus the
// Christ" is by James E. Talmage. Elder McConkie's similar work is "The Mortal
// Messiah" / "The Promised Messiah." We've included Talmage's "Jesus the Christ"
// because it matches the title given and is fully in the public domain.
export const JESUS_THE_CHRIST: ScriptureBook = {
  id: "missionary-jesus-the-christ",
  title: "Jesus the Christ",
  subtitle: "James E. Talmage (1915) · Public domain",
  flag: "✝️",
  chapters: [
    {
      title: "Preface — A Study of the Messiah",
      sentences: [
        { en: "Jesus the Christ is the Son of the Living God, the chosen and foreordained Savior of mankind.", target: "Jesús el Cristo es el Hijo del Dios viviente, el Salvador escogido y preordenado de la humanidad." },
        { en: "His mortal mission was that of revealing the Father, of fulfilling the Law, and of working out the great atoning sacrifice.", target: "Su misión mortal fue la de revelar al Padre, cumplir la ley y llevar a cabo el gran sacrificio expiatorio." },
        { en: "We approach the study of His life with reverence, knowing that He stands at the center of all that is sacred in human history.", target: "Nos acercamos al estudio de Su vida con reverencia, sabiendo que Él está en el centro de todo lo sagrado en la historia humana." },
      ],
    },
    {
      title: "Chapter 8 — The Babe of Bethlehem",
      sentences: [
        { en: "In the meridian of time, the Son of God came down to dwell among men, taking upon Himself the form of mortal flesh.", target: "En el meridiano de los tiempos, el Hijo de Dios descendió a morar entre los hombres, tomando sobre Sí la forma de carne mortal." },
        { en: "He was born in Bethlehem of Judea, the city of David, in fulfillment of ancient prophecy.", target: "Nació en Belén de Judea, la ciudad de David, en cumplimiento de antigua profecía." },
        { en: "Angels heralded His birth to humble shepherds, and a new star marked His coming.", target: "Los ángeles anunciaron Su nacimiento a humildes pastores, y una nueva estrella señaló Su venida." },
        { en: "Thus the King of Heaven entered the world in lowliness, that He might raise the lowly to glory.", target: "Así, el Rey de los cielos entró al mundo en humildad, para poder levantar a los humildes a la gloria." },
      ],
    },
    {
      title: "Chapter 11 — The Baptism of Jesus",
      sentences: [
        { en: "Jesus came from Galilee to Jordan unto John, to be baptized of him.", target: "Jesús vino de Galilea al Jordán, para ser bautizado por Juan." },
        { en: "John forbade Him, saying: I have need to be baptized of thee, and comest thou to me?", target: "Mas Juan se le oponía, diciendo: Yo necesito ser bautizado por ti, ¿y tú vienes a mí?" },
        { en: "Jesus answered: Suffer it to be so now, for thus it becometh us to fulfil all righteousness.", target: "Pero Jesús le respondió: Permítelo ahora, porque así nos conviene cumplir toda justicia." },
        { en: "And the Spirit of God descended like a dove and the Father's voice declared: This is my beloved Son, in whom I am well pleased.", target: "Y el Espíritu de Dios descendió como paloma, y la voz del Padre declaró: Este es mi Hijo amado, en quien tengo complacencia." },
        { en: "Even the sinless Son of God submitted Himself to the ordinance of baptism, leaving an example for all who would follow Him.", target: "Aun el Hijo de Dios sin pecado se sometió a la ordenanza del bautismo, dejando un ejemplo para todos los que le siguieran." },
      ],
    },
    {
      title: "Chapter 23 — The Sermon on the Mount",
      sentences: [
        { en: "From a hillside above the Sea of Galilee the Master taught the multitude the higher law of the kingdom.", target: "Desde una ladera por encima del mar de Galilea, el Maestro enseñó a la multitud la ley superior del reino." },
        { en: "Not the letter of the law, but its spirit; not outward observance, but inward purity.", target: "No la letra de la ley, sino su espíritu; no la observancia externa, sino la pureza interior." },
        { en: "He revealed that righteousness is a matter of the heart, and that the disciple must love even his enemies.", target: "Reveló que la rectitud es asunto del corazón, y que el discípulo debe amar aun a sus enemigos." },
      ],
    },
    {
      title: "Chapter 34 — The Atonement and the Garden of Gethsemane",
      sentences: [
        { en: "Christ's agony in Gethsemane is unfathomable to the finite mind, both in extent and in cause.", target: "La agonía de Cristo en Getsemaní es insondable para la mente finita, tanto en su extensión como en su causa." },
        { en: "It was not physical pain alone, nor mental anguish alone, that caused Him to suffer such torture as to produce an extrusion of blood from every pore.", target: "No fue solo el dolor físico, ni solo la angustia mental, lo que le hizo sufrir tal tortura que produjo el brotar de sangre por cada poro." },
        { en: "He took upon Himself the burden of the sins of mankind from Adam to the end of the world.", target: "Tomó sobre Sí la carga de los pecados de la humanidad desde Adán hasta el fin del mundo." },
        { en: "By that supreme sacrifice He opened the way of salvation to every soul that will repent and obey.", target: "Por ese supremo sacrificio abrió el camino de la salvación a toda alma que se arrepienta y obedezca." },
      ],
    },
    {
      title: "Chapter 37 — The Resurrected Lord",
      sentences: [
        { en: "On the third day, as He had foretold, Jesus rose from the dead — the first fruits of them that slept.", target: "Al tercer día, como había predicho, Jesús resucitó de entre los muertos: las primicias de los que durmieron." },
        { en: "He appeared first to Mary Magdalene, then to the disciples, showing them His pierced hands and side.", target: "Apareció primero a María Magdalena, luego a los discípulos, mostrándoles Sus manos y costado traspasados." },
        { en: "Through His resurrection, every soul born into mortality is assured of resurrection from the dead.", target: "Por Su resurrección, toda alma nacida en la mortalidad tiene asegurada la resurrección de entre los muertos." },
        { en: "He lives. Of this great truth the writer bears solemn witness.", target: "Él vive. De esta gran verdad el autor da solemne testimonio." },
      ],
    },
  ],
};

export const LDS_SCRIPTURES: ScriptureBook[] = [
  BOOK_OF_MORMON,
  DOCTRINE_AND_COVENANTS,
  PEARL_OF_GREAT_PRICE,
  OLD_TESTAMENT_KJV,
  NEW_TESTAMENT_KJV,
  JESUS_THE_CHRIST,
];
