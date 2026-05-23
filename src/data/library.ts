import type { Language } from "@/state/app-state";
import type { CefrLevel } from "@/fns/grammar.functions";

export interface SentencePair {
  en: string;
  target: string;
}

export interface LibraryText {
  id: string;
  title: string;
  subtitle: string;
  language: Language;
  targetLabel: string; // e.g. "Español"
  level?: CefrLevel; // CEFR reading level (A1..C2). Optional during migration.
  sentences: SentencePair[];
}

export const LIBRARY: LibraryText[] = [
  {
    id: "quixote-ch1",
    title: "Don Quixote — Ch. 1",
    subtitle: "Miguel de Cervantes",
    language: "Spanish",
    targetLabel: "Español",
    level: "C2",
    sentences: [
      {
        en: "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing.",
        target:
          "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.",
      },
      {
        en: "An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.",
        target:
          "Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lentejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda.",
      },
      {
        en: "The rest of it went in a doublet of fine cloth and velvet breeches and shoes to match for holidays, while on week-days he made a brave figure in his best homespun.",
        target:
          "El resto della concluían sayo de velarte, calzas de velludo para las fiestas, con sus pantuflos de lo mesmo, y los días de entresemana se honraba con su vellorí de lo más fino.",
      },
      {
        en: "He had in his house a housekeeper past forty, a niece under twenty, and a lad for the field and market-place, who used to saddle the hack as well as handle the bill-hook.",
        target:
          "Tenía en su casa una ama que pasaba de los cuarenta, y una sobrina que no llegaba a los veinte, y un mozo de campo y plaza, que así ensillaba el rocín como tomaba la podadera.",
      },
      {
        en: "The age of this gentleman of ours was bordering on fifty; he was of a hardy habit, spare, gaunt-featured, a very early riser and a great sportsman.",
        target:
          "Frisaba la edad de nuestro hidalgo con los cincuenta años; era de complexión recia, seco de carnes, enjuto de rostro, gran madrugador y amigo de la caza.",
      },
      {
        en: "You must know, then, that the above-named gentleman whenever he was at leisure (which was mostly all the year round) gave himself up to reading books of chivalry with such ardour and avidity.",
        target:
          "Es, pues, de saber que este sobredicho hidalgo, los ratos que estaba ocioso, que eran los más del año, se daba a leer libros de caballerías, con tanta afición y gusto.",
      },
      {
        en: "He almost entirely neglected the pursuit of his field-sports, and even the management of his property; and to such a pitch did his eagerness and infatuation go.",
        target:
          "Que olvidó casi de todo punto el ejercicio de la caza, y aun la administración de su hacienda; y llegó a tanto su curiosidad y desatino en esto.",
      },
      {
        en: "In short, he became so absorbed in his books that he spent his nights from sunset to sunrise, and his days from dawn to dark, poring over them.",
        target:
          "En resolución, él se enfrascó tanto en su lectura, que se le pasaban las noches leyendo de claro en claro, y los días de turbio en turbio.",
      },
    ],
  },
  {
    id: "culture-espana",
    title: "Culture: España",
    subtitle: "A short cultural reading",
    language: "Spanish",
    targetLabel: "Español",
    level: "B1",
    sentences: [
      {
        en: "Spain is a country of vivid contrasts, where ancient traditions live alongside modern art and design.",
        target:
          "España es un país de contrastes vivos, donde las tradiciones antiguas conviven con el arte y el diseño modernos.",
      },
      {
        en: "From the narrow streets of Seville to the wide avenues of Madrid, every city tells a different story.",
        target:
          "Desde las calles estrechas de Sevilla hasta las amplias avenidas de Madrid, cada ciudad cuenta una historia diferente.",
      },
      {
        en: "The cuisine is generous and unhurried; meals are shared, and conversation is its own course.",
        target:
          "La cocina es generosa y sin prisa; las comidas se comparten, y la conversación es un plato más.",
      },
      {
        en: "Flamenco is not only a dance — it is a language of the body, full of longing and pride.",
        target:
          "El flamenco no es solo un baile: es un idioma del cuerpo, lleno de añoranza y orgullo.",
      },
      {
        en: "To understand Spain, one must learn to slow down and listen.",
        target: "Para entender España, hay que aprender a ir despacio y escuchar.",
      },
    ],
  },

  // ── Module sample: LDS Missionary ───────────────────────────────────────
  {
    id: "lds-restoration-short",
    title: "The Restoration — Short Lesson",
    subtitle: "LDS Missionary · teaching outline",
    language: "Spanish",
    targetLabel: "Español",
    level: "B1",
    sentences: [
      {
        en: "We believe that God is our loving Heavenly Father and that He speaks to His children through prophets.",
        target:
          "Creemos que Dios es nuestro amoroso Padre Celestial y que Él habla a Sus hijos por medio de profetas.",
      },
      {
        en: "Through sincere prayer and study of the scriptures, we can come to know the truth for ourselves.",
        target:
          "Mediante la oración sincera y el estudio de las Escrituras, podemos llegar a conocer la verdad por nosotros mismos.",
      },
      {
        en: "Joseph Smith saw God the Father and Jesus Christ, and through him the gospel was restored to the earth.",
        target:
          "José Smith vio a Dios el Padre y a Jesucristo, y por medio de él el evangelio fue restaurado a la tierra.",
      },
      {
        en: "The Book of Mormon is another testament of Jesus Christ and a witness of His divine mission.",
        target:
          "El Libro de Mormón es otro testamento de Jesucristo y un testigo de Su misión divina.",
      },
      {
        en: "We invite you to read, ponder, and pray about these things, and to be baptized as Jesus was.",
        target:
          "Le invitamos a leer, meditar y orar sobre estas cosas, y a bautizarse como Jesús lo hizo.",
      },
      {
        en: "I bear my testimony that the Spirit will confirm the truth of this message to your heart.",
        target:
          "Comparto mi testimonio de que el Espíritu confirmará la verdad de este mensaje en su corazón.",
      },
    ],
  },
  {
    id: "lds-door-approach",
    title: "At the Door — A Member Visit",
    subtitle: "LDS Missionary · everyday companion conversation",
    language: "Spanish",
    targetLabel: "Español",
    level: "A2",
    sentences: [
      {
        en: "Good evening, Sister López. We are the missionaries from your ward — do you have a moment?",
        target:
          "Buenas noches, hermana López. Somos los misioneros de su barrio. ¿Tiene un momento?",
      },
      {
        en: "We just wanted to share a short scripture and offer a prayer with your family tonight.",
        target:
          "Solo queríamos compartir una breve escritura y ofrecer una oración con su familia esta noche.",
      },
      {
        en: "Thank you for the dinner appointment last week — the spirit in your home was wonderful.",
        target:
          "Gracias por la cita para cenar de la semana pasada; el espíritu en su hogar fue maravilloso.",
      },
      {
        en: "Is there anyone you know who might enjoy hearing more about the gospel of Jesus Christ?",
        target:
          "¿Conoce a alguien a quien le gustaría escuchar más sobre el evangelio de Jesucristo?",
      },
      {
        en: "We will close with a prayer of gratitude for your faith and your example.",
        target: "Cerraremos con una oración de gratitud por su fe y su ejemplo.",
      },
    ],
  },

  // ── Module sample: Orthopedics ─────────────────────────────────────────
  {
    id: "ortho-xray-read",
    title: "X-ray Read: Distal Radius Fracture",
    subtitle: "Orthopedics · imaging dictation",
    language: "Spanish",
    targetLabel: "Español",
    level: "C1",
    sentences: [
      {
        en: "PA and lateral views of the right wrist demonstrate a transverse fracture of the distal radius.",
        target:
          "Las proyecciones PA y lateral de la muñeca derecha muestran una fractura transversa del radio distal.",
      },
      {
        en: "There is dorsal angulation of approximately twenty degrees with mild shortening.",
        target: "Hay angulación dorsal de aproximadamente veinte grados con acortamiento leve.",
      },
      {
        en: "The ulnar styloid is intact and the distal radioulnar joint appears congruent.",
        target:
          "La apófisis estiloides cubital está intacta y la articulación radiocubital distal se ve congruente.",
      },
      {
        en: "Recommend closed reduction with sugar-tong splint and orthopedic follow-up in one week.",
        target:
          "Se recomienda reducción cerrada con férula en pinza de azúcar y control ortopédico en una semana.",
      },
    ],
  },

  // ── Module sample: Framer ──────────────────────────────────────────────
  {
    id: "framer-jobsite",
    title: "Jobsite Briefing — Wall Layout",
    subtitle: "Framer · crew communication",
    language: "Spanish",
    targetLabel: "Español",
    level: "B2",
    sentences: [
      {
        en: "Today we are framing the south wall — studs at sixteen on center, double top plate.",
        target:
          "Hoy estamos enmarcando la pared sur: montantes a dieciséis pulgadas al centro, placa superior doble.",
      },
      {
        en: "The header over this window is a double two-by-ten with a half-inch plywood spacer.",
        target:
          "El cabezal sobre esta ventana es un doble dos por diez con un separador de contrachapado de media pulgada.",
      },
      {
        en: "Check that the wall is plumb and level before you nail off the bottom plate.",
        target: "Verifica que la pared esté a plomo y nivelada antes de clavar la placa inferior.",
      },
      {
        en: "We need thirty more studs and ten sheets of OSB delivered before lunch.",
        target:
          "Necesitamos treinta montantes más y diez hojas de OSB entregadas antes del almuerzo.",
      },
      {
        en: "Read the blueprint carefully — the load-bearing wall shifts six inches on the second floor.",
        target:
          "Lee el plano con cuidado: la pared de carga se desplaza seis pulgadas en el segundo piso.",
      },
    ],
  },
];
