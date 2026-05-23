// Soccer field positions with multilingual labels.
// Used by field-position quiz games and tactical formation viewers.
//
// Coordinate system:
//   x=0 is left touchline, x=100 is right touchline
//   y=0 is top (defensive end / own goal), y=100 is bottom (attacking end / opponent goal)
// Positions are described from the perspective of the team attacking downward.

export type SoccerFormation = "4-4-2" | "4-3-3" | "3-5-2" | "4-2-3-1" | "5-3-2";
export type SoccerZone = "goalkeeper" | "defender" | "midfielder" | "forward";

export interface FieldPosition {
  id: string;
  en: string;
  abbreviation: string;
  labels: Record<string, string>; // Language → native label
  x: number; // % of field width  (0 = left, 100 = right)
  y: number; // % of field length (0 = defensive end, 100 = attacking end)
  formations: SoccerFormation[];
  zone: SoccerZone;
}

// ── Goalkeeper ───────────────────────────────────────────────────────────────

export const SOCCER_POSITIONS: FieldPosition[] = [
  {
    id: "gk",
    en: "Goalkeeper",
    abbreviation: "GK",
    x: 50,
    y: 5,
    formations: ["4-4-2", "4-3-3", "3-5-2", "4-2-3-1", "5-3-2"],
    zone: "goalkeeper",
    labels: {
      Spanish: "Portero",
      Portuguese: "Goleiro",
      French: "Gardien de but",
      German: "Torwart",
      Italian: "Portiere",
    },
  },

  // ── Defenders ─────────────────────────────────────────────────────────────

  {
    id: "cb-l",
    en: "Left Center Back",
    abbreviation: "CB",
    x: 35,
    y: 18,
    formations: ["4-4-2", "4-3-3", "4-2-3-1"],
    zone: "defender",
    labels: {
      Spanish: "Central izquierdo",
      Portuguese: "Zagueiro central esquerdo",
      French: "Défenseur central gauche",
      German: "Linker Innenverteidiger",
      Italian: "Difensore centrale sinistro",
    },
  },
  {
    id: "cb-r",
    en: "Right Center Back",
    abbreviation: "CB",
    x: 65,
    y: 18,
    formations: ["4-4-2", "4-3-3", "4-2-3-1"],
    zone: "defender",
    labels: {
      Spanish: "Central derecho",
      Portuguese: "Zagueiro central direito",
      French: "Défenseur central droit",
      German: "Rechter Innenverteidiger",
      Italian: "Difensore centrale destro",
    },
  },
  {
    id: "lb",
    en: "Left Back",
    abbreviation: "LB",
    x: 15,
    y: 18,
    formations: ["4-4-2", "4-3-3", "4-2-3-1"],
    zone: "defender",
    labels: {
      Spanish: "Lateral izquierdo",
      Portuguese: "Lateral esquerdo",
      French: "Arrière gauche",
      German: "Linker Außenverteidiger",
      Italian: "Terzino sinistro",
    },
  },
  {
    id: "rb",
    en: "Right Back",
    abbreviation: "RB",
    x: 85,
    y: 18,
    formations: ["4-4-2", "4-3-3", "4-2-3-1"],
    zone: "defender",
    labels: {
      Spanish: "Lateral derecho",
      Portuguese: "Lateral direito",
      French: "Arrière droit",
      German: "Rechter Außenverteidiger",
      Italian: "Terzino destro",
    },
  },

  // Three-back defenders (3-5-2)
  {
    id: "cb-c",
    en: "Center Back (middle)",
    abbreviation: "CB",
    x: 50,
    y: 17,
    formations: ["3-5-2"],
    zone: "defender",
    labels: {
      Spanish: "Central",
      Portuguese: "Zagueiro central",
      French: "Défenseur central",
      German: "Innenverteidiger (Mitte)",
      Italian: "Difensore centrale",
    },
  },
  {
    id: "cb-3l",
    en: "Left Center Back (3-back)",
    abbreviation: "CB",
    x: 28,
    y: 17,
    formations: ["3-5-2"],
    zone: "defender",
    labels: {
      Spanish: "Central izquierdo (defensa de tres)",
      Portuguese: "Zagueiro esquerdo (linha de três)",
      French: "Défenseur central gauche (3 défenseurs)",
      German: "Linker Innenverteidiger (Dreierkette)",
      Italian: "Difensore centrale sinistro (difesa a tre)",
    },
  },
  {
    id: "cb-3r",
    en: "Right Center Back (3-back)",
    abbreviation: "CB",
    x: 72,
    y: 17,
    formations: ["3-5-2"],
    zone: "defender",
    labels: {
      Spanish: "Central derecho (defensa de tres)",
      Portuguese: "Zagueiro direito (linha de três)",
      French: "Défenseur central droit (3 défenseurs)",
      German: "Rechter Innenverteidiger (Dreierkette)",
      Italian: "Difensore centrale destro (difesa a tre)",
    },
  },

  // Five-back defenders (5-3-2)
  {
    id: "5-cb-c",
    en: "Center Back (5-back)",
    abbreviation: "CB",
    x: 50,
    y: 16,
    formations: ["5-3-2"],
    zone: "defender",
    labels: {
      Spanish: "Central (defensa de cinco)",
      Portuguese: "Zagueiro central (linha de cinco)",
      French: "Défenseur central (5 défenseurs)",
      German: "Innenverteidiger (Fünferkette)",
      Italian: "Difensore centrale (difesa a cinque)",
    },
  },
  {
    id: "5-cb-cl",
    en: "Center-Left Back (5-back)",
    abbreviation: "CB",
    x: 33,
    y: 16,
    formations: ["5-3-2"],
    zone: "defender",
    labels: {
      Spanish: "Central izquierdo (defensa de cinco)",
      Portuguese: "Zagueiro centro-esquerdo (linha de cinco)",
      French: "Défenseur central gauche (5 défenseurs)",
      German: "Halblinker Innenverteidiger (Fünferkette)",
      Italian: "Difensore centrale-sinistro (difesa a cinque)",
    },
  },
  {
    id: "5-cb-cr",
    en: "Center-Right Back (5-back)",
    abbreviation: "CB",
    x: 67,
    y: 16,
    formations: ["5-3-2"],
    zone: "defender",
    labels: {
      Spanish: "Central derecho (defensa de cinco)",
      Portuguese: "Zagueiro centro-direito (linha de cinco)",
      French: "Défenseur central droit (5 défenseurs)",
      German: "Halbrechter Innenverteidiger (Fünferkette)",
      Italian: "Difensore centrale-destro (difesa a cinque)",
    },
  },

  // Wing backs (3-5-2 / 5-3-2)
  {
    id: "lwb",
    en: "Left Wing Back",
    abbreviation: "LWB",
    x: 10,
    y: 30,
    formations: ["3-5-2", "5-3-2"],
    zone: "defender",
    labels: {
      Spanish: "Carrilero izquierdo",
      Portuguese: "Ala-esquerdo defensivo",
      French: "Latéral gauche offensif",
      German: "Linker Schienenspieler",
      Italian: "Ala sinistra difensiva",
    },
  },
  {
    id: "rwb",
    en: "Right Wing Back",
    abbreviation: "RWB",
    x: 90,
    y: 30,
    formations: ["3-5-2", "5-3-2"],
    zone: "defender",
    labels: {
      Spanish: "Carrilero derecho",
      Portuguese: "Ala-direito defensivo",
      French: "Latéral droit offensif",
      German: "Rechter Schienenspieler",
      Italian: "Ala destra difensiva",
    },
  },

  // ── Midfielders ───────────────────────────────────────────────────────────

  {
    id: "dm",
    en: "Defensive Midfielder",
    abbreviation: "DM",
    x: 50,
    y: 33,
    formations: ["4-2-3-1"],
    zone: "midfielder",
    labels: {
      Spanish: "Mediocentro defensivo",
      Portuguese: "Volante defensivo",
      French: "Milieu défensif",
      German: "Defensives Mittelfeld",
      Italian: "Centrocampista difensivo",
    },
  },
  {
    id: "dm-l",
    en: "Left Defensive Midfielder",
    abbreviation: "DM",
    x: 38,
    y: 33,
    formations: ["4-2-3-1"],
    zone: "midfielder",
    labels: {
      Spanish: "Pivote izquierdo",
      Portuguese: "Primeiro volante esquerdo",
      French: "Double pivot gauche",
      German: "Linkes defensives Mittelfeld",
      Italian: "Mediano sinistro",
    },
  },
  {
    id: "dm-r",
    en: "Right Defensive Midfielder",
    abbreviation: "DM",
    x: 62,
    y: 33,
    formations: ["4-2-3-1"],
    zone: "midfielder",
    labels: {
      Spanish: "Pivote derecho",
      Portuguese: "Primeiro volante direito",
      French: "Double pivot droit",
      German: "Rechtes defensives Mittelfeld",
      Italian: "Mediano destro",
    },
  },
  {
    id: "cm-l",
    en: "Left Central Midfielder",
    abbreviation: "CM",
    x: 35,
    y: 48,
    formations: ["4-4-2", "4-3-3", "3-5-2", "5-3-2"],
    zone: "midfielder",
    labels: {
      Spanish: "Mediocentro izquierdo",
      Portuguese: "Meia-centro esquerdo",
      French: "Milieu central gauche",
      German: "Linkes zentrales Mittelfeld",
      Italian: "Centrocampista centrale sinistro",
    },
  },
  {
    id: "cm-r",
    en: "Right Central Midfielder",
    abbreviation: "CM",
    x: 65,
    y: 48,
    formations: ["4-4-2", "4-3-3", "3-5-2", "5-3-2"],
    zone: "midfielder",
    labels: {
      Spanish: "Mediocentro derecho",
      Portuguese: "Meia-centro direito",
      French: "Milieu central droit",
      German: "Rechtes zentrales Mittelfeld",
      Italian: "Centrocampista centrale destro",
    },
  },
  {
    id: "cm-c",
    en: "Central Midfielder",
    abbreviation: "CM",
    x: 50,
    y: 47,
    formations: ["4-3-3", "5-3-2"],
    zone: "midfielder",
    labels: {
      Spanish: "Mediocentro",
      Portuguese: "Meia-centro",
      French: "Milieu central",
      German: "Zentrales Mittelfeld",
      Italian: "Centrocampista centrale",
    },
  },
  {
    id: "lm",
    en: "Left Midfielder",
    abbreviation: "LM",
    x: 15,
    y: 48,
    formations: ["4-4-2"],
    zone: "midfielder",
    labels: {
      Spanish: "Interior izquierdo",
      Portuguese: "Meia esquerdo",
      French: "Milieu gauche",
      German: "Linkes Mittelfeld",
      Italian: "Centrocampista sinistro",
    },
  },
  {
    id: "rm",
    en: "Right Midfielder",
    abbreviation: "RM",
    x: 85,
    y: 48,
    formations: ["4-4-2"],
    zone: "midfielder",
    labels: {
      Spanish: "Interior derecho",
      Portuguese: "Meia direito",
      French: "Milieu droit",
      German: "Rechtes Mittelfeld",
      Italian: "Centrocampista destro",
    },
  },
  {
    id: "am",
    en: "Attacking Midfielder",
    abbreviation: "AM",
    x: 50,
    y: 62,
    formations: ["4-2-3-1", "3-5-2"],
    zone: "midfielder",
    labels: {
      Spanish: "Mediapunta",
      Portuguese: "Meia-atacante",
      French: "Milieu offensif",
      German: "Offensives Mittelfeld",
      Italian: "Trequartista",
    },
  },
  {
    id: "am-l",
    en: "Left Attacking Midfielder",
    abbreviation: "AM",
    x: 30,
    y: 63,
    formations: ["4-2-3-1"],
    zone: "midfielder",
    labels: {
      Spanish: "Mediapunta izquierdo",
      Portuguese: "Meia-atacante esquerdo",
      French: "Milieu offensif gauche",
      German: "Linkes offensives Mittelfeld",
      Italian: "Trequartista sinistro",
    },
  },
  {
    id: "am-r",
    en: "Right Attacking Midfielder",
    abbreviation: "AM",
    x: 70,
    y: 63,
    formations: ["4-2-3-1"],
    zone: "midfielder",
    labels: {
      Spanish: "Mediapunta derecho",
      Portuguese: "Meia-atacante direito",
      French: "Milieu offensif droit",
      German: "Rechtes offensives Mittelfeld",
      Italian: "Trequartista destro",
    },
  },

  // ── Forwards ──────────────────────────────────────────────────────────────

  {
    id: "lw",
    en: "Left Winger",
    abbreviation: "LW",
    x: 15,
    y: 75,
    formations: ["4-3-3"],
    zone: "forward",
    labels: {
      Spanish: "Extremo izquierdo",
      Portuguese: "Ponta-esquerda",
      French: "Ailier gauche",
      German: "Linker Flügelspieler",
      Italian: "Ala sinistra",
    },
  },
  {
    id: "rw",
    en: "Right Winger",
    abbreviation: "RW",
    x: 85,
    y: 75,
    formations: ["4-3-3"],
    zone: "forward",
    labels: {
      Spanish: "Extremo derecho",
      Portuguese: "Ponta-direita",
      French: "Ailier droit",
      German: "Rechter Flügelspieler",
      Italian: "Ala destra",
    },
  },
  {
    id: "cf",
    en: "Center Forward",
    abbreviation: "CF",
    x: 50,
    y: 82,
    formations: ["4-3-3", "4-2-3-1"],
    zone: "forward",
    labels: {
      Spanish: "Delantero centro",
      Portuguese: "Centroavante",
      French: "Avant-centre",
      German: "Mittelstürmer",
      Italian: "Centravanti",
    },
  },
  {
    id: "st-l",
    en: "Left Striker",
    abbreviation: "ST",
    x: 38,
    y: 82,
    formations: ["4-4-2", "3-5-2", "5-3-2"],
    zone: "forward",
    labels: {
      Spanish: "Delantero izquierdo",
      Portuguese: "Atacante esquerdo",
      French: "Attaquant gauche",
      German: "Linker Stürmer",
      Italian: "Attaccante sinistro",
    },
  },
  {
    id: "st-r",
    en: "Right Striker",
    abbreviation: "ST",
    x: 62,
    y: 82,
    formations: ["4-4-2", "3-5-2", "5-3-2"],
    zone: "forward",
    labels: {
      Spanish: "Delantero derecho",
      Portuguese: "Atacante direito",
      French: "Attaquant droit",
      German: "Rechter Stürmer",
      Italian: "Attaccante destro",
    },
  },
  {
    id: "ss",
    en: "Second Striker",
    abbreviation: "SS",
    x: 50,
    y: 72,
    formations: ["4-4-2", "3-5-2"],
    zone: "forward",
    labels: {
      Spanish: "Segundo delantero",
      Portuguese: "Segundo atacante",
      French: "Second attaquant",
      German: "Zweiter Stürmer",
      Italian: "Seconda punta",
    },
  },
];

// ── Zone bounding boxes ───────────────────────────────────────────────────────
// Each zone is defined as a rectangle in field-% coordinates.

export interface FieldZone {
  id: string;
  en: string;
  labels: Record<string, string>;
  /** Left edge x% */
  x1: number;
  /** Right edge x% */
  x2: number;
  /** Top edge y% (lower y = defensive end) */
  y1: number;
  /** Bottom edge y% */
  y2: number;
}

export const SOCCER_FIELD_ZONES: FieldZone[] = [
  {
    id: "defensive-third",
    en: "Defensive Third",
    x1: 0,
    x2: 100,
    y1: 0,
    y2: 33,
    labels: {
      Spanish: "Tercio defensivo",
      Portuguese: "Terço defensivo",
      French: "Tiers défensif",
      German: "Defensives Drittel",
      Italian: "Terzo difensivo",
    },
  },
  {
    id: "middle-third",
    en: "Middle Third",
    x1: 0,
    x2: 100,
    y1: 33,
    y2: 67,
    labels: {
      Spanish: "Tercio medio",
      Portuguese: "Terço do meio",
      French: "Tiers médian",
      German: "Mittleres Drittel",
      Italian: "Terzo centrale",
    },
  },
  {
    id: "attacking-third",
    en: "Attacking Third",
    x1: 0,
    x2: 100,
    y1: 67,
    y2: 100,
    labels: {
      Spanish: "Tercio ofensivo",
      Portuguese: "Terço ofensivo",
      French: "Tiers offensif",
      German: "Offensives Drittel",
      Italian: "Terzo offensivo",
    },
  },
  {
    id: "left-channel",
    en: "Left Channel",
    x1: 0,
    x2: 25,
    y1: 0,
    y2: 100,
    labels: {
      Spanish: "Carril izquierdo",
      Portuguese: "Corredor esquerdo",
      French: "Couloir gauche",
      German: "Linker Kanal",
      Italian: "Corsia sinistra",
    },
  },
  {
    id: "right-channel",
    en: "Right Channel",
    x1: 75,
    x2: 100,
    y1: 0,
    y2: 100,
    labels: {
      Spanish: "Carril derecho",
      Portuguese: "Corredor direito",
      French: "Couloir droit",
      German: "Rechter Kanal",
      Italian: "Corsia destra",
    },
  },
  {
    id: "central-corridor",
    en: "Central Corridor",
    x1: 25,
    x2: 75,
    y1: 0,
    y2: 100,
    labels: {
      Spanish: "Corredor central",
      Portuguese: "Corredor central",
      French: "Couloir central",
      German: "Mittelkorridor",
      Italian: "Corridoio centrale",
    },
  },
];

// ── Lookup helpers ────────────────────────────────────────────────────────────

export function getSoccerPosition(id: string): FieldPosition | undefined {
  return SOCCER_POSITIONS.find((p) => p.id === id);
}

export function getPositionsForFormation(formation: string): FieldPosition[] {
  return SOCCER_POSITIONS.filter((p) => p.formations.includes(formation as SoccerFormation));
}
