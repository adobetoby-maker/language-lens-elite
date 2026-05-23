// Baseball positions with multilingual labels.
// Used by field-position quiz games and baseball vocabulary modules.
//
// Coordinate system — top-down view of a standard baseball diamond:
//   x=0 is left edge, x=100 is right edge
//   y=0 is the top of the diagram (deepest outfield / center field wall)
//   y=100 is the bottom (behind home plate / backstop)
// Home plate sits at approximately (50, 90); second base at (50, 50).

export type BaseballZone = "battery" | "infield" | "outfield";

export interface BaseballPosition {
  id: string;
  en: string;
  /** Official scorecard number (1=P, 2=C, 3=1B, 4=2B, 5=3B, 6=SS, 7=LF, 8=CF, 9=RF) */
  number: number;
  abbreviation: string;
  labels: Record<string, string>; // Language → native label
  x: number; // % of diagram width
  y: number; // % of diagram height
  zone: BaseballZone;
}

export const BASEBALL_POSITIONS: BaseballPosition[] = [
  {
    id: "pitcher",
    en: "Pitcher",
    number: 1,
    abbreviation: "P",
    x: 50,
    y: 58,
    zone: "battery",
    labels: {
      Spanish: "Lanzador",
      Portuguese: "Arremessador",
      French: "Lanceur",
    },
  },
  {
    id: "catcher",
    en: "Catcher",
    number: 2,
    abbreviation: "C",
    x: 50,
    y: 86,
    zone: "battery",
    labels: {
      Spanish: "Receptor",
      Portuguese: "Receptor",
      French: "Receveur",
    },
  },
  {
    id: "first-base",
    en: "First Baseman",
    number: 3,
    abbreviation: "1B",
    x: 68,
    y: 64,
    zone: "infield",
    labels: {
      Spanish: "Primera base",
      Portuguese: "Primeira base",
      French: "Premier but",
    },
  },
  {
    id: "second-base",
    en: "Second Baseman",
    number: 4,
    abbreviation: "2B",
    x: 62,
    y: 50,
    zone: "infield",
    labels: {
      Spanish: "Segunda base",
      Portuguese: "Segunda base",
      French: "Deuxième but",
    },
  },
  {
    id: "third-base",
    en: "Third Baseman",
    number: 5,
    abbreviation: "3B",
    x: 32,
    y: 64,
    zone: "infield",
    labels: {
      Spanish: "Tercera base",
      Portuguese: "Terceira base",
      French: "Troisième but",
    },
  },
  {
    id: "shortstop",
    en: "Shortstop",
    number: 6,
    abbreviation: "SS",
    x: 38,
    y: 50,
    zone: "infield",
    labels: {
      Spanish: "Parador en corto",
      Portuguese: "Parador-geral",
      French: "Arrêt-court",
    },
  },
  {
    id: "left-field",
    en: "Left Fielder",
    number: 7,
    abbreviation: "LF",
    x: 20,
    y: 28,
    zone: "outfield",
    labels: {
      Spanish: "Jardinero izquierdo",
      Portuguese: "Campista esquerdo",
      French: "Voltigeur gauche",
    },
  },
  {
    id: "center-field",
    en: "Center Fielder",
    number: 8,
    abbreviation: "CF",
    x: 50,
    y: 18,
    zone: "outfield",
    labels: {
      Spanish: "Jardinero central",
      Portuguese: "Campista central",
      French: "Voltigeur de centre",
    },
  },
  {
    id: "right-field",
    en: "Right Fielder",
    number: 9,
    abbreviation: "RF",
    x: 80,
    y: 28,
    zone: "outfield",
    labels: {
      Spanish: "Jardinero derecho",
      Portuguese: "Campista direito",
      French: "Voltigeur droit",
    },
  },
];

// ── Lookup helper ─────────────────────────────────────────────────────────────

export function getBaseballPosition(id: string): BaseballPosition | undefined {
  return BASEBALL_POSITIONS.find((p) => p.id === id);
}

// ── Dugout / game vocabulary ──────────────────────────────────────────────────

export interface BaseballDugoutVocab {
  en: string;
  es: string;
  pt: string;
  /** Thematic grouping for quiz filtering */
  category: string;
}

export const BASEBALL_DUGOUT_VOCAB: BaseballDugoutVocab[] = [
  // Pitch types
  { en: "Fastball", es: "Recta", pt: "Bola rápida", category: "pitch-type" },
  { en: "Curveball", es: "Curva", pt: "Bola curva", category: "pitch-type" },
  { en: "Slider", es: "Deslizante", pt: "Slider", category: "pitch-type" },
  { en: "Changeup", es: "Cambio de velocidad", pt: "Change-up", category: "pitch-type" },
  { en: "Sinker", es: "Sinker", pt: "Sinker", category: "pitch-type" },
  { en: "Cutter", es: "Cortada", pt: "Cortante", category: "pitch-type" },
  { en: "Splitter", es: "Tenedor", pt: "Splitter", category: "pitch-type" },
  { en: "Knuckleball", es: "Mariposa", pt: "Knuckleball", category: "pitch-type" },

  // Calls and rulings
  { en: "Strike", es: "Strike", pt: "Strike", category: "call" },
  { en: "Ball", es: "Bola", pt: "Bola", category: "call" },
  { en: "Out", es: "Out", pt: "Out", category: "call" },
  { en: "Safe", es: "Salvo", pt: "Salvo", category: "call" },
  { en: "Balk", es: "Balqueo", pt: "Balk", category: "call" },
  { en: "Foul", es: "Foul", pt: "Falta", category: "call" },
  { en: "Walk", es: "Base por bolas", pt: "Base por bolas", category: "call" },
  { en: "Hit by pitch", es: "Golpe de pelota", pt: "Bola no corpo", category: "call" },
  { en: "Infield fly", es: "Toque de palomita", pt: "Bola de infield", category: "call" },
  { en: "Error", es: "Error", pt: "Erro", category: "call" },

  // Plays and situations
  { en: "Double play", es: "Doble matanza", pt: "Dupla eliminação", category: "play" },
  { en: "Triple play", es: "Triple matanza", pt: "Tripla eliminação", category: "play" },
  { en: "Squeeze play", es: "Jugada de suicidio", pt: "Jogada de squeeze", category: "play" },
  { en: "Hit and run", es: "Golpe y corre", pt: "Rebate e corre", category: "play" },
  { en: "Stolen base", es: "Base robada", pt: "Base roubada", category: "play" },
  { en: "Sacrifice bunt", es: "Toque de sacrificio", pt: "Toque de sacrifício", category: "play" },
  { en: "Sacrifice fly", es: "Elevado de sacrificio", pt: "Fly de sacrifício", category: "play" },
  { en: "Pick-off", es: "Pickoff", pt: "Pickoff", category: "play" },
  { en: "Pinch hit", es: "Batear de emergencia", pt: "Bater por substituto", category: "play" },
  { en: "Grand slam", es: "Grand slam", pt: "Grand slam", category: "play" },
  { en: "Home run", es: "Jonrón", pt: "Home run", category: "play" },
  { en: "Strikeout", es: "Ponche", pt: "Strikeout", category: "play" },

  // Equipment
  { en: "Bat", es: "Bate", pt: "Bastão", category: "equipment" },
  { en: "Glove", es: "Guante", pt: "Luva", category: "equipment" },
  { en: "Helmet", es: "Casco", pt: "Capacete", category: "equipment" },
  { en: "Cleats", es: "Tacos de béisbol", pt: "Chuteiras de beisebol", category: "equipment" },
  { en: "Base", es: "Base", pt: "Base", category: "equipment" },
  { en: "Home plate", es: "Goma", pt: "Home plate", category: "equipment" },
  { en: "Batting tee", es: "Soporte de bateo", pt: "Tee de rebatida", category: "equipment" },
  { en: "Rosin bag", es: "Bolsa de resina", pt: "Saco de resina", category: "equipment" },
];
