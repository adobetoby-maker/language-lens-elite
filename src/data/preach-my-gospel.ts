// Preach My Gospel — opening passages adapted as parallel-reading sentences
// for the LDS Missionary module. Source: Preach My Gospel: A Guide to
// Missionary Service (2023 edition), published by The Church of Jesus Christ
// of Latter-day Saints and made freely available online and in the Gospel
// Library app. Paraphrased for sentence-pair format.

import type { SentencePair } from "@/data/library";

export interface PreachMyGospelChapter {
  id: string;
  title: string;
  subtitle: string;
  sentences: SentencePair[];
}

export const PREACH_MY_GOSPEL_CHAPTERS: PreachMyGospelChapter[] = [
  {
    id: "pmg-ch1",
    title: "Chapter 1 — My Purpose as a Missionary",
    subtitle: "Invite others to come unto Christ.",
    sentences: [
      { en: "My purpose is to invite others to come unto Christ by helping them receive the restored gospel.", target: "Mi propósito es invitar a otros a venir a Cristo, ayudándoles a recibir el evangelio restaurado." },
      { en: "They do this through faith in Jesus Christ and His Atonement, repentance, baptism, receiving the gift of the Holy Ghost, and enduring to the end.", target: "Lo hacen mediante la fe en Jesucristo y Su Expiación, el arrepentimiento, el bautismo, el recibir el don del Espíritu Santo y el perseverar hasta el fin." },
      { en: "As a representative of Jesus Christ, I love Him and I love the people I teach.", target: "Como representante de Jesucristo, lo amo a Él y amo a las personas que enseño." },
      { en: "I am set apart by priesthood authority to preach the gospel and bear witness of the Savior.", target: "He sido apartado por la autoridad del sacerdocio para predicar el evangelio y testificar del Salvador." },
      { en: "I will work with all my heart, might, mind, and strength to do the Lord's will every day.", target: "Trabajaré con todo mi corazón, alma, mente y fuerza para hacer la voluntad del Señor cada día." },
      { en: "I know that as I do this, the Lord will bless those I teach and bless me.", target: "Sé que al hacerlo, el Señor bendecirá a quienes enseño y me bendecirá a mí." },
    ],
  },
  {
    id: "pmg-ch3",
    title: "Chapter 3 — The Message of the Restoration",
    subtitle: "Through the Prophet Joseph Smith, the gospel has been restored.",
    sentences: [
      { en: "God is our loving Heavenly Father, and we are His children.", target: "Dios es nuestro amoroso Padre Celestial, y nosotros somos Sus hijos." },
      { en: "He has prepared a wonderful plan to bring us happiness in this life and joy forever.", target: "Él ha preparado un maravilloso plan para darnos felicidad en esta vida y gozo para siempre." },
      { en: "After His ministry, Jesus Christ established His Church with prophets and apostles.", target: "Después de Su ministerio, Jesucristo estableció Su Iglesia con profetas y apóstoles." },
      { en: "Over time, the world fell into apostasy and the priesthood authority was lost.", target: "Con el tiempo, el mundo cayó en apostasía y la autoridad del sacerdocio se perdió." },
      { en: "In the spring of 1820, a young man named Joseph Smith knelt in a grove of trees to ask God which church to join.", target: "En la primavera de 1820, un joven llamado José Smith se arrodilló en una arboleda para preguntar a Dios a qué iglesia debía unirse." },
      { en: "God the Father and His Son Jesus Christ appeared to him in a glorious vision.", target: "Dios el Padre y Su Hijo Jesucristo se le aparecieron en una gloriosa visión." },
      { en: "Through Joseph Smith, the Lord restored the fulness of the gospel and the priesthood authority to act in His name.", target: "Por medio de José Smith, el Señor restauró la plenitud del evangelio y la autoridad del sacerdocio para actuar en Su nombre." },
      { en: "The Book of Mormon is another testament of Jesus Christ and is evidence that these things are true.", target: "El Libro de Mormón es otro testamento de Jesucristo y es evidencia de que estas cosas son verdaderas." },
    ],
  },
  {
    id: "pmg-ch4",
    title: "Chapter 4 — Recognizing the Spirit",
    subtitle: "How the Holy Ghost teaches and confirms truth.",
    sentences: [
      { en: "The Holy Ghost is the third member of the Godhead and bears witness of the Father and the Son.", target: "El Espíritu Santo es el tercer miembro de la Trinidad y testifica del Padre y del Hijo." },
      { en: "The Spirit speaks to our minds and our hearts with thoughts and feelings of peace.", target: "El Espíritu habla a nuestra mente y a nuestro corazón con pensamientos y sentimientos de paz." },
      { en: "When we feel love, joy, peace, patience, kindness, and goodness, the Spirit is present.", target: "Cuando sentimos amor, gozo, paz, paciencia, benignidad y bondad, el Espíritu está presente." },
      { en: "Pray with real intent, with a sincere heart, and the Holy Ghost will manifest the truth unto you.", target: "Ora con verdadera intención, con un corazón sincero, y el Espíritu Santo te manifestará la verdad." },
      { en: "Help those you teach to recognize when the Spirit is speaking to them.", target: "Ayuda a quienes enseñas a reconocer cuándo el Espíritu les está hablando." },
    ],
  },
];
