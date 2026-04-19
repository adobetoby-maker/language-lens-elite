import type { Language } from "@/state/app-state";

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
  sentences: SentencePair[];
}

export const LIBRARY: LibraryText[] = [
  {
    id: "quixote-ch1",
    title: "Don Quixote — Ch. 1",
    subtitle: "Miguel de Cervantes",
    language: "Spanish",
    targetLabel: "Español",
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
];
