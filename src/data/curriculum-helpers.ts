import type { TabKey } from "@/state/app-state";

export interface LessonStep {
  tab: TabKey;
  tabLabel: string;
  instruction: string;
  durationMin: number;
}

type S = LessonStep;

export const r  = (instruction: string, min = 7): S => ({ tab: "reader",        tabLabel: "Reader",           instruction, durationMin: min });
export const sp = (instruction: string, min = 6): S => ({ tab: "speak",         tabLabel: "Speak & Learn",    instruction, durationMin: min });
export const wm = (instruction: string, min = 5): S => ({ tab: "wordMatch",     tabLabel: "Word Match",       instruction, durationMin: min });
export const pt = (instruction: string, min = 6): S => ({ tab: "patterns",      tabLabel: "Grammar Patterns", instruction, durationMin: min });
export const sb = (instruction: string, min = 5): S => ({ tab: "sentenceBuild", tabLabel: "Sentence Builder", instruction, durationMin: min });
export const ms = (instruction: string, min = 7): S => ({ tab: "missionary",    tabLabel: "Missionary",       instruction, durationMin: min });
export const ot = (instruction: string, min = 7): S => ({ tab: "orthopedics",   tabLabel: "Orthopedics",      instruction, durationMin: min });
export const ev = (instruction: string, min = 7): S => ({ tab: "orEvs",         tabLabel: "OR/EVS Module",    instruction, durationMin: min });
export const sc = (instruction: string, min = 7): S => ({ tab: "soccer",        tabLabel: "Soccer Module",    instruction, durationMin: min });
export const bb = (instruction: string, min = 7): S => ({ tab: "baseball",      tabLabel: "Baseball Module",  instruction, durationMin: min });
export const fm = (instruction: string, min = 7): S => ({ tab: "fmg",           tabLabel: "FMG Module",       instruction, durationMin: min });
export const gr = (instruction: string, min = 5): S => ({ tab: "grammar",       tabLabel: "Grammar Studio",   instruction, durationMin: min });
export const ld = (instruction: string, min = 5): S => ({ tab: "listeningDrill",tabLabel: "Listening Drill",  instruction, durationMin: min });
export const ds = (instruction: string, min = 7): S => ({ tab: "discussions",   tabLabel: "Discussions",      instruction, durationMin: min });
