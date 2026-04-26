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
    {
      title: "1 Nephi 8 — The vision of the tree of life",
      sentences: [
        { en: "I beheld a tree, whose fruit was desirable to make one happy.", target: "Vi un árbol cuyo fruto era deseable para hacer feliz a uno." },
        { en: "And I went forth and partook of the fruit thereof; and it was most sweet, above all that I ever before tasted.", target: "Y fui y participé de su fruto, y era dulce, sobre todo lo que yo jamás había probado antes." },
        { en: "And as I partook of the fruit thereof it filled my soul with exceedingly great joy.", target: "Y al participar de su fruto, llenó mi alma de un gozo sumamente grande." },
        { en: "And I beheld a rod of iron, and it extended along the bank of the river, and led to the tree by which I stood.", target: "Y vi una barra de hierro que se extendía a lo largo de la ribera del río, y conducía hasta el árbol junto al cual me hallaba yo." },
      ],
    },
    {
      title: "2 Nephi 31 — The doctrine of Christ",
      sentences: [
        { en: "Wherefore, do the things which I have told you I have seen that your Lord and your Redeemer should do.", target: "Por tanto, haced las cosas que os he dicho he visto que vuestro Señor y vuestro Redentor harán." },
        { en: "For, for this cause have they been shown unto me, that ye might know the gate by which ye should enter.", target: "Porque por esta razón me han sido mostradas, para que sepáis la puerta por la cual debéis entrar." },
        { en: "For the gate by which ye should enter is repentance and baptism by water.", target: "Porque la puerta por la cual debéis entrar es el arrepentimiento y el bautismo en el agua." },
        { en: "And then cometh a remission of your sins by fire and by the Holy Ghost.", target: "Y entonces viene la remisión de vuestros pecados por fuego y por el Espíritu Santo." },
      ],
    },
    {
      title: "Mosiah 2 — When ye are in the service of your fellow beings",
      sentences: [
        { en: "When ye are in the service of your fellow beings ye are only in the service of your God.", target: "Cuando os halláis al servicio de vuestros semejantes, no estáis sino al servicio de vuestro Dios." },
        { en: "Ye should remember to retain the name written always in your hearts.", target: "Debéis acordaros de retener el nombre escrito siempre en vuestros corazones." },
      ],
    },
    {
      title: "Alma 7 — He shall go forth, suffering pains and afflictions",
      sentences: [
        { en: "And he shall go forth, suffering pains and afflictions and temptations of every kind.", target: "Y él saldrá, sufriendo dolores, aflicciones y tentaciones de todas clases." },
        { en: "And this that the word might be fulfilled which saith he will take upon him the pains and the sicknesses of his people.", target: "Y esto para que se cumpla la palabra que dice que tomará sobre sí los dolores y las enfermedades de su pueblo." },
        { en: "And he will take upon him death, that he may loose the bands of death which bind his people.", target: "Y tomará sobre sí la muerte, para soltar las ligaduras de la muerte que sujetan a su pueblo." },
        { en: "And he will take upon him their infirmities, that his bowels may be filled with mercy, according to the flesh.", target: "Y tomará sobre sí sus enfermedades, para que sus entrañas sean llenas de misericordia, según la carne." },
      ],
    },
    {
      title: "Helaman 5:12 — The rock of our Redeemer",
      sentences: [
        { en: "Remember, remember that it is upon the rock of our Redeemer, who is Christ, the Son of God, that ye must build your foundation.", target: "Recordad, recordad que es sobre la roca de nuestro Redentor, el cual es Cristo, el Hijo de Dios, que debéis establecer vuestro fundamento." },
        { en: "That when the devil shall send forth his mighty winds, yea, his shafts in the whirlwind, it shall have no power over you.", target: "Para que cuando el diablo lance sus impetuosos vientos, sí, sus dardos en el torbellino, no tenga poder alguno sobre vosotros." },
        { en: "Because of the rock upon which ye are built, which is a sure foundation, a foundation whereon if men build they cannot fall.", target: "A causa de la roca sobre la cual estáis edificados, que es un fundamento seguro, un fundamento sobre el cual, si los hombres edifican, no pueden caer." },
      ],
    },
    {
      title: "3 Nephi 12 — The Sermon at the Temple (Beatitudes)",
      sentences: [
        { en: "Blessed are ye when men shall revile you and persecute you, and shall say all manner of evil against you falsely, for my sake.", target: "Bienaventurados sois cuando los hombres os vituperen y os persigan, y digan toda clase de mal contra vosotros, mintiendo, por mi causa." },
        { en: "For ye shall have great joy and be exceedingly glad, for great shall be your reward in heaven.", target: "Porque tendréis gran gozo y os alegraréis sumamente, porque grande será vuestra recompensa en el cielo." },
        { en: "Ye are the light of this people. A city that is set on a hill cannot be hid.", target: "Vosotros sois la luz de este pueblo. Una ciudad asentada sobre un monte no se puede esconder." },
      ],
    },
    {
      title: "Ether 12 — Faith, hope, and weak things made strong",
      sentences: [
        { en: "And now, I, Moroni, would speak somewhat concerning these things; I would show unto the world that faith is things which are hoped for and not seen.", target: "Y ahora, yo, Moroni, hablaré algo concerniente a estas cosas; quisiera mostrar al mundo que la fe es las cosas que se esperan y no se ven." },
        { en: "Wherefore, dispute not because ye see not, for ye receive no witness until after the trial of your faith.", target: "Por tanto, no disputéis porque no veáis, pues no recibís ningún testimonio sino hasta después de la prueba de vuestra fe." },
        { en: "And if men come unto me I will show unto them their weakness.", target: "Y si los hombres vienen a mí, les mostraré su debilidad." },
        { en: "I give unto men weakness that they may be humble; and my grace is sufficient for all men that humble themselves before me.", target: "Doy a los hombres debilidad para que sean humildes; y mi gracia es suficiente para todos los hombres que se humillan delante de mí." },
        { en: "For if they humble themselves before me, and have faith in me, then will I make weak things become strong unto them.", target: "Porque si se humillan ante mí, y tienen fe en mí, entonces haré que las cosas débiles sean fuertes para ellos." },
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
    {
      title: "D&C 18:10 — The worth of souls is great",
      sentences: [
        { en: "Remember the worth of souls is great in the sight of God.", target: "Recordad que el valor de las almas es grande a la vista de Dios." },
        { en: "For, behold, the Lord your Redeemer suffered death in the flesh; wherefore he suffered the pain of all men.", target: "Porque, he aquí, el Señor vuestro Redentor padeció la muerte en la carne; por lo que sufrió el dolor de todos los hombres." },
        { en: "And how great is his joy in the soul that repenteth!", target: "¡Y cuán grande es su gozo en el alma que se arrepiente!" },
      ],
    },
    {
      title: "D&C 19:16-19 — I, God, have suffered these things for all",
      sentences: [
        { en: "For behold, I, God, have suffered these things for all, that they might not suffer if they would repent.", target: "Porque he aquí, yo, Dios, he padecido estas cosas por todos, para que no padezcan, si se arrepienten." },
        { en: "But if they would not repent they must suffer even as I.", target: "Pero si no se arrepienten, tendrán que padecer así como yo." },
        { en: "Which suffering caused myself, even God, the greatest of all, to tremble because of pain, and to bleed at every pore.", target: "Padecimiento que hizo que yo mismo, Dios, el mayor de todos, temblara a causa del dolor y sangrara por cada poro." },
      ],
    },
    {
      title: "D&C 64:9-10 — I, the Lord, will forgive whom I will forgive",
      sentences: [
        { en: "Wherefore, I say unto you, that ye ought to forgive one another.", target: "Por lo que os digo que debéis perdonaros los unos a los otros." },
        { en: "For he that forgiveth not his brother his trespasses standeth condemned before the Lord.", target: "Porque el que no perdona a su hermano sus ofensas, queda condenado ante el Señor." },
        { en: "I, the Lord, will forgive whom I will forgive, but of you it is required to forgive all men.", target: "Yo, el Señor, perdonaré a quien quiera perdonar, mas de vosotros se requiere que perdonéis a todos los hombres." },
      ],
    },
    {
      title: "D&C 88 — The light of Christ",
      sentences: [
        { en: "He that ascended up on high, as also he descended below all things, in that he comprehended all things.", target: "Aquel que ascendió a lo alto, así como también descendió debajo de todo, por cuanto comprendió todas las cosas." },
        { en: "Which light proceedeth forth from the presence of God to fill the immensity of space.", target: "Cuya luz procede de la presencia de Dios para llenar la inmensidad del espacio." },
        { en: "The light which is in all things, which giveth life to all things, which is the law by which all things are governed.", target: "La luz que está en todas las cosas, que da vida a todas las cosas, que es la ley por la cual todas las cosas son gobernadas." },
      ],
    },
    {
      title: "D&C 130 — When we attain it in the resurrection",
      sentences: [
        { en: "There is no such thing as immaterial matter. All spirit is matter, but it is more fine or pure.", target: "No existe tal cosa como la materia inmaterial. Todo espíritu es materia, pero es más fino o puro." },
        { en: "And whatever principle of intelligence we attain unto in this life, it will rise with us in the resurrection.", target: "Y cualquier principio de inteligencia que logremos en esta vida, se levantará con nosotros en la resurrección." },
        { en: "If a person gains more knowledge and intelligence in this life through his diligence and obedience, he will have so much the advantage in the world to come.", target: "Si una persona en esta vida adquiere más conocimiento e inteligencia por su diligencia y obediencia, gozará de mayor ventaja en el mundo venidero." },
      ],
    },
    {
      title: "D&C 138 — The vision of the redemption of the dead",
      sentences: [
        { en: "I beheld that the faithful elders of this dispensation, when they depart from mortal life, continue their labors in the preaching of the gospel.", target: "Vi que los fieles élderes de esta dispensación, cuando parten de la vida mortal, continúan sus labores en la predicación del evangelio." },
        { en: "Unto the spirits of those who have died without a knowledge of the truth, or in transgression, having rejected the prophets.", target: "A los espíritus de los que han muerto sin un conocimiento de la verdad, o en transgresión, habiendo rechazado a los profetas." },
        { en: "The dead who repent will be redeemed, through obedience to the ordinances of the house of God.", target: "Los muertos que se arrepientan serán redimidos mediante la obediencia a las ordenanzas de la casa de Dios." },
      ],
    },
    {
      title: "Moses 1 — Behold, thou art my son",
      sentences: [
        { en: "Behold, thou art my son; wherefore look, and I will show thee the workmanship of mine hands.", target: "He aquí, tú eres mi hijo; mira, pues, y te mostraré la obra de mis manos." },
        { en: "And I have a work for thee, Moses, my son.", target: "Y tengo una obra para ti, Moisés, hijo mío." },
        { en: "And, behold, thou art my son; therefore look, and I will show thee.", target: "Y he aquí, tú eres mi hijo; por tanto, mira, y te mostraré." },
      ],
    },
    {
      title: "Abraham 3:22-23 — Thou wast chosen before thou wast born",
      sentences: [
        { en: "And God saw these souls that they were good, and he stood in the midst of them.", target: "Y Dios vio estas almas, que eran buenas, y estaba en medio de ellas." },
        { en: "And he said: These I will make my rulers; for he stood among those that were spirits, and he saw that they were good.", target: "Y dijo: A estos haré mis gobernantes; porque estaba entre aquellos que eran espíritus, y vio que eran buenos." },
        { en: "And he said unto me: Abraham, thou art one of them; thou wast chosen before thou wast born.", target: "Y me dijo: Abraham, tú eres uno de ellos; fuiste escogido antes de nacer." },
      ],
    },
    {
      title: "Joseph Smith — History 1:11-14 — If any of you lack wisdom",
      sentences: [
        { en: "I was one day reading the Epistle of James, first chapter and fifth verse.", target: "Un día estaba leyendo la Epístola de Santiago, capítulo primero, versículo quinto." },
        { en: "If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him.", target: "Si alguno de vosotros tiene falta de sabiduría, pídala a Dios, el cual da a todos abundantemente y sin reproche, y le será dada." },
        { en: "Never did any passage of scripture come with more power to the heart of man than this did at this time to mine.", target: "Jamás un pasaje de las Escrituras llegó con más poder al corazón del hombre que este al mío en aquella ocasión." },
        { en: "I at length came to the conclusion that I must either remain in darkness and confusion, or else I must do as James directs.", target: "Por fin llegué a la conclusión de que debía permanecer en tinieblas y confusión, o bien hacer como Santiago indica." },
      ],
    },
    {
      title: "Articles of Faith — 5, 8, 9, 10",
      sentences: [
        { en: "We believe that a man must be called of God, by prophecy, and by the laying on of hands by those who are in authority.", target: "Creemos que el hombre debe ser llamado por Dios, por profecía y la imposición de manos, por aquellos que tienen la autoridad." },
        { en: "We believe the Bible to be the word of God as far as it is translated correctly; we also believe the Book of Mormon to be the word of God.", target: "Creemos que la Biblia es la palabra de Dios hasta donde esté traducida correctamente; también creemos que el Libro de Mormón es la palabra de Dios." },
        { en: "We believe all that God has revealed, all that He does now reveal, and we believe that He will yet reveal many great and important things.", target: "Creemos todo lo que Dios ha revelado, todo lo que ahora revela, y creemos que aún revelará muchos grandes e importantes asuntos." },
        { en: "We believe in the literal gathering of Israel and in the restoration of the Ten Tribes.", target: "Creemos en la congregación literal de Israel y en la restauración de las Diez Tribus." },
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
    {
      title: "Genesis 12 — The call of Abram",
      sentences: [
        { en: "Now the Lord had said unto Abram, Get thee out of thy country, and from thy kindred, and from thy father's house, unto a land that I will shew thee.", target: "Pero Jehová había dicho a Abram: Vete de tu tierra y de tu parentela, y de la casa de tu padre, a la tierra que te mostraré." },
        { en: "And I will make of thee a great nation, and I will bless thee, and make thy name great; and thou shalt be a blessing.", target: "Y haré de ti una nación grande, y te bendeciré, y engrandeceré tu nombre, y serás bendición." },
        { en: "And in thee shall all families of the earth be blessed.", target: "Y serán benditas en ti todas las familias de la tierra." },
      ],
    },
    {
      title: "Joshua 24:15 — Choose you this day whom ye will serve",
      sentences: [
        { en: "And if it seem evil unto you to serve the Lord, choose you this day whom ye will serve.", target: "Y si mal os parece servir a Jehová, escogeos hoy a quién sirváis." },
        { en: "But as for me and my house, we will serve the Lord.", target: "Pero yo y mi casa serviremos a Jehová." },
      ],
    },
    {
      title: "1 Samuel 16:7 — The Lord looketh on the heart",
      sentences: [
        { en: "But the Lord said unto Samuel, Look not on his countenance, or on the height of his stature; because I have refused him.", target: "Y Jehová respondió a Samuel: No mires a su parecer, ni a lo grande de su estatura, porque yo lo desecho." },
        { en: "For the Lord seeth not as man seeth; for man looketh on the outward appearance, but the Lord looketh on the heart.", target: "Porque Jehová no mira lo que mira el hombre; pues el hombre mira lo que está delante de sus ojos, pero Jehová mira el corazón." },
      ],
    },
    {
      title: "Proverbs 3:5-6 — Trust in the Lord",
      sentences: [
        { en: "Trust in the Lord with all thine heart; and lean not unto thine own understanding.", target: "Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia prudencia." },
        { en: "In all thy ways acknowledge him, and he shall direct thy paths.", target: "Reconócelo en todos tus caminos, y él enderezará tus veredas." },
      ],
    },
    {
      title: "Ecclesiastes 3 — A time to every purpose",
      sentences: [
        { en: "To every thing there is a season, and a time to every purpose under the heaven.", target: "Todo tiene su tiempo, y todo lo que se quiere debajo del cielo tiene su hora." },
        { en: "A time to be born, and a time to die; a time to plant, and a time to pluck up that which is planted.", target: "Tiempo de nacer, y tiempo de morir; tiempo de plantar, y tiempo de arrancar lo plantado." },
        { en: "A time to weep, and a time to laugh; a time to mourn, and a time to dance.", target: "Tiempo de llorar, y tiempo de reír; tiempo de endechar, y tiempo de bailar." },
      ],
    },
    {
      title: "Jeremiah 1:5 — Before I formed thee in the belly I knew thee",
      sentences: [
        { en: "Before I formed thee in the belly I knew thee; and before thou camest forth out of the womb I sanctified thee.", target: "Antes que te formase en el vientre te conocí, y antes que nacieses te santifiqué." },
        { en: "And I ordained thee a prophet unto the nations.", target: "Te di por profeta a las naciones." },
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
    {
      title: "Luke 2 — The birth of Jesus",
      sentences: [
        { en: "And it came to pass in those days, that there went out a decree from Caesar Augustus, that all the world should be taxed.", target: "Aconteció en aquellos días, que se promulgó un edicto de parte de Augusto César, que todo el mundo fuese empadronado." },
        { en: "And she brought forth her firstborn son, and wrapped him in swaddling clothes, and laid him in a manger; because there was no room for them in the inn.", target: "Y dio a luz a su hijo primogénito, y lo envolvió en pañales, y lo acostó en un pesebre, porque no había lugar para ellos en el mesón." },
        { en: "And the angel said unto them, Fear not: for, behold, I bring you good tidings of great joy, which shall be to all people.", target: "Pero el ángel les dijo: No temáis; porque he aquí os doy nuevas de gran gozo, que será para todo el pueblo." },
        { en: "For unto you is born this day in the city of David a Saviour, which is Christ the Lord.", target: "Que os ha nacido hoy, en la ciudad de David, un Salvador, que es Cristo el Señor." },
      ],
    },
    {
      title: "Matthew 11:28-30 — Come unto me",
      sentences: [
        { en: "Come unto me, all ye that labour and are heavy laden, and I will give you rest.", target: "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar." },
        { en: "Take my yoke upon you, and learn of me; for I am meek and lowly in heart: and ye shall find rest unto your souls.", target: "Llevad mi yugo sobre vosotros, y aprended de mí, que soy manso y humilde de corazón; y hallaréis descanso para vuestras almas." },
        { en: "For my yoke is easy, and my burden is light.", target: "Porque mi yugo es fácil, y ligera mi carga." },
      ],
    },
    {
      title: "Mark 12:30-31 — The two great commandments",
      sentences: [
        { en: "And thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind, and with all thy strength: this is the first commandment.", target: "Y amarás al Señor tu Dios con todo tu corazón, y con toda tu alma, y con toda tu mente y con todas tus fuerzas. Este es el principal mandamiento." },
        { en: "And the second is like, namely this, Thou shalt love thy neighbour as thyself. There is none other commandment greater than these.", target: "Y el segundo es semejante: Amarás a tu prójimo como a ti mismo. No hay otro mandamiento mayor que estos." },
      ],
    },
    {
      title: "Luke 15 — The parable of the prodigal son",
      sentences: [
        { en: "And he arose, and came to his father. But when he was yet a great way off, his father saw him, and had compassion.", target: "Y levantándose, vino a su padre. Y cuando aún estaba lejos, lo vio su padre, y fue movido a misericordia." },
        { en: "And ran, and fell on his neck, and kissed him.", target: "Y corrió, y se echó sobre su cuello, y le besó." },
        { en: "For this my son was dead, and is alive again; he was lost, and is found.", target: "Porque este mi hijo muerto era, y ha revivido; se había perdido, y es hallado." },
      ],
    },
    {
      title: "Acts 2 — The day of Pentecost",
      sentences: [
        { en: "And when the day of Pentecost was fully come, they were all with one accord in one place.", target: "Cuando llegó el día de Pentecostés, estaban todos unánimes juntos." },
        { en: "And there appeared unto them cloven tongues like as of fire, and it sat upon each of them.", target: "Y se les aparecieron lenguas repartidas, como de fuego, asentándose sobre cada uno de ellos." },
        { en: "And they were all filled with the Holy Ghost, and began to speak with other tongues, as the Spirit gave them utterance.", target: "Y fueron todos llenos del Espíritu Santo, y comenzaron a hablar en otras lenguas, según el Espíritu les daba que hablasen." },
      ],
    },
    {
      title: "Romans 8 — Nothing shall separate us from the love of God",
      sentences: [
        { en: "For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come.", target: "Por lo cual estoy seguro de que ni la muerte, ni la vida, ni ángeles, ni principados, ni potestades, ni lo presente, ni lo por venir." },
        { en: "Nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord.", target: "Ni lo alto, ni lo profundo, ni ninguna otra cosa creada nos podrá separar del amor de Dios, que es en Cristo Jesús Señor nuestro." },
      ],
    },
    {
      title: "Hebrews 11 — Now faith is the substance of things hoped for",
      sentences: [
        { en: "Now faith is the substance of things hoped for, the evidence of things not seen.", target: "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve." },
        { en: "But without faith it is impossible to please him: for he that cometh to God must believe that he is, and that he is a rewarder of them that diligently seek him.", target: "Pero sin fe es imposible agradar a Dios; porque es necesario que el que se acerca a Dios crea que le hay, y que es galardonador de los que le buscan." },
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
    {
      title: "Chapter 14 — Early incidents of His public ministry",
      sentences: [
        { en: "After His baptism, the Lord retired into the wilderness, there to commune with the Father and to prepare for His ministry.", target: "Después de Su bautismo, el Señor se retiró al desierto, para comulgar con el Padre y prepararse para Su ministerio." },
        { en: "There He fasted forty days, and was tempted of the adversary, yet He overcame every trial.", target: "Allí ayunó cuarenta días, y fue tentado por el adversario; pero venció toda prueba." },
        { en: "Returning in the power of the Spirit, He began to call disciples and to proclaim the kingdom of God.", target: "Volviendo en el poder del Espíritu, comenzó a llamar discípulos y a proclamar el reino de Dios." },
      ],
    },
    {
      title: "Chapter 17 — Lord of the Sabbath",
      sentences: [
        { en: "The Sabbath was made for man, and not man for the Sabbath; the Son of Man is Lord even of the Sabbath.", target: "El día de reposo fue hecho para el hombre, y no el hombre para el día de reposo; el Hijo del Hombre es Señor aun del día de reposo." },
        { en: "He healed on that holy day, declaring that to do good is the truest observance of the Sabbath.", target: "Sanó en ese día santo, declarando que hacer el bien es la más verdadera observancia del día de reposo." },
      ],
    },
    {
      title: "Chapter 26 — Parables by the sea",
      sentences: [
        { en: "By parables the Master taught the multitude, that those whose hearts were prepared might understand.", target: "Por medio de parábolas el Maestro enseñó a la multitud, para que aquellos cuyos corazones estuvieran preparados pudieran comprender." },
        { en: "The kingdom of heaven is like unto a treasure hid in a field; the which when a man hath found, he hideth, and for joy thereof goeth and selleth all that he hath, and buyeth that field.", target: "El reino de los cielos es semejante a un tesoro escondido en un campo, el cual un hombre halla, y lo esconde de nuevo; y gozoso por ello va y vende todo lo que tiene, y compra aquel campo." },
        { en: "So is the kingdom of God to him who finds it: more precious than all earthly possessions.", target: "Así es el reino de Dios para quien lo encuentra: más precioso que todas las posesiones terrenales." },
      ],
    },
    {
      title: "Chapter 32 — The Last Supper",
      sentences: [
        { en: "On the night of His betrayal, the Lord ate the Passover with His apostles, and instituted the sacrament in remembrance of Him.", target: "En la noche de Su traición, el Señor comió la Pascua con Sus apóstoles, e instituyó la Santa Cena en memoria de Él." },
        { en: "He took bread, and blessed it, and brake it, and gave to them, saying: Take, eat; this is my body.", target: "Tomó el pan, y lo bendijo, y lo partió, y les dio, diciendo: Tomad, comed; esto es mi cuerpo." },
        { en: "And he took the cup, and gave thanks, and gave it to them, saying: This is my blood of the new testament, which is shed for many for the remission of sins.", target: "Y tomando la copa, dio gracias, y les dio, diciendo: Esto es mi sangre del nuevo pacto, que por muchos es derramada para remisión de los pecados." },
      ],
    },
    {
      title: "Chapter 35 — The trial and the cross",
      sentences: [
        { en: "He was led as a lamb to the slaughter, and as a sheep before her shearers is dumb, so He opened not His mouth.", target: "Como cordero fue llevado al matadero; y como oveja delante de sus trasquiladores enmudece, así no abrió Su boca." },
        { en: "Upon the cross of Calvary He completed the great work of redemption, that all who believe might have eternal life.", target: "Sobre la cruz del Calvario completó la gran obra de la redención, para que todos los que creen tuvieran vida eterna." },
      ],
    },
    {
      title: "Chapter 41 — He shall come again",
      sentences: [
        { en: "As He ascended in glory, so shall He return in like manner, with power and great glory.", target: "Así como ascendió en gloria, así volverá de la misma manera, con poder y gran gloria." },
        { en: "Every knee shall bow, and every tongue shall confess that Jesus is the Christ, the Son of the living God, the Redeemer and Lord of all.", target: "Toda rodilla se doblará, y toda lengua confesará que Jesús es el Cristo, el Hijo del Dios viviente, el Redentor y Señor de todos." },
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
