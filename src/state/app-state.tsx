import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  type ReactNode,
} from "react";
import { toast } from "sonner";

export type Language =
  | "Spanish"
  | "French"
  | "German"
  | "Italian"
  | "Japanese"
  | "Portuguese";

export type TabKey = "reader" | "grammar" | "speak" | "dashboard";

// Learner CEFR-ish self level (used elsewhere for AI prompts)
export type Level = "Beginner" | "Intermediate" | "Advanced" | "Fluent";

// Gamified XP tier
export type XpTier =
  | "Beginner 🌱"
  | "Apprentice 📖"
  | "Scholar 🎓"
  | "Linguist 🗣️"
  | "Maestro ✦";

const TIERS: { min: number; max: number; name: XpTier }[] = [
  { min: 0, max: 99, name: "Beginner 🌱" },
  { min: 100, max: 299, name: "Apprentice 📖" },
  { min: 300, max: 699, name: "Scholar 🎓" },
  { min: 700, max: 1499, name: "Linguist 🗣️" },
  { min: 1500, max: Infinity, name: "Maestro ✦" },
];

export function tierForXp(xp: number): XpTier {
  return (TIERS.find((t) => xp >= t.min && xp <= t.max) ?? TIERS[0]).name;
}

export function nextTierProgress(xp: number) {
  const i = TIERS.findIndex((t) => xp >= t.min && xp <= t.max);
  const cur = TIERS[i];
  const nxt = TIERS[i + 1];
  if (!nxt) {
    return { current: cur.name, next: null, pct: 100, xpToNext: 0, base: cur.min, target: cur.min };
  }
  const span = nxt.min - cur.min;
  const into = xp - cur.min;
  return {
    current: cur.name,
    next: nxt.name,
    pct: Math.min(100, Math.round((into / span) * 100)),
    xpToNext: nxt.min - xp,
    base: cur.min,
    target: nxt.min,
  };
}

export interface Note {
  id: string;
  text: string;
  createdAt: number;
}

export interface Achievement {
  id: string;
  title: string; // includes the icon/emoji per brief
  hint: string; // condition explanation for locked tooltip
}

export const ACHIEVEMENTS: Achievement[] = [
  { id: "first-word", title: "First Word! 🔤", hint: "Open your first word card" },
  { id: "deep-reader", title: "Deep Reader 📚", hint: "Save 5 notes" },
  { id: "good-listener", title: "Good Listener 👂", hint: "Listen to 10 sentences" },
  { id: "grammar-apprentice", title: "Grammar Apprentice ✏️", hint: "Complete your first lesson" },
  { id: "grammar-wizard", title: "Grammar Wizard 🧙", hint: "Complete one full CEFR level" },
  { id: "curious-learner", title: "Curious Learner 🧠", hint: "Send 10 tutor messages" },
  { id: "first-conversation", title: "First Conversation 🗣️", hint: "5 conversation exchanges" },
  { id: "conversationalist", title: "Conversationalist 💬", hint: "20 conversation exchanges" },
  { id: "culture-buff", title: "Culture Buff 🌍", hint: "Read every Culture Series text" },
  { id: "author", title: "Author ✍️", hint: "Add a custom text to your library" },
  { id: "polyglot", title: "Polyglot ⭐", hint: "Switch to 3 different languages" },
  { id: "week-streak", title: "Week Streak 🔥", hint: "Keep a 7-day streak" },
];

export interface AppState {
  selectedLanguage: Language;
  darkMode: boolean;
  currentTab: TabKey;
  xp: number;
  streak: number;
  lastActiveDate: string | null; // YYYY-MM-DD
  level: Level; // learner self-level (existing behavior)
  tier: XpTier; // derived from xp
  achievements: string[]; // achievement ids
  userNotes: Note[];

  // Counters (persisted) for achievement conditions
  wordsLookedUp: number;
  notesSaved: number;
  tutorMessages: number;
  conversationExchanges: number;
  lessonsCompleted: number;
  customTextsAdded: number;
  cultureRead: string[]; // culture entry ids the learner opened
  languagesUsed: Language[]; // distinct order of selection

  // Celebration trigger
  pendingLevelUp: XpTier | null;

  hydrated: boolean;
}

export type AppAction =
  | { type: "HYDRATE"; payload: Partial<AppState> }
  | { type: "SET_LANGUAGE"; payload: Language }
  | { type: "TOGGLE_DARK_MODE" }
  | { type: "SET_DARK_MODE"; payload: boolean }
  | { type: "SET_TAB"; payload: TabKey }
  | { type: "ADD_XP"; payload: number }
  | { type: "SET_STREAK"; payload: { streak: number; date: string } }
  | { type: "SET_LEVEL"; payload: Level }
  | { type: "ADD_ACHIEVEMENT"; payload: string }
  | { type: "ADD_NOTE"; payload: Note }
  | { type: "INC_COUNTER"; payload: keyof Pick<AppState, "wordsLookedUp" | "notesSaved" | "tutorMessages" | "conversationExchanges" | "lessonsCompleted" | "customTextsAdded"> }
  | { type: "MARK_CULTURE_READ"; payload: string }
  | { type: "DISMISS_LEVEL_UP" }
  | { type: "_DERIVE" }; // internal: re-derive tier + pendingLevelUp

const initialState: AppState = {
  selectedLanguage: "Spanish",
  darkMode: true,
  currentTab: "reader",
  xp: 0,
  streak: 0,
  lastActiveDate: null,
  level: "Beginner",
  tier: "Beginner 🌱",
  achievements: [],
  userNotes: [],
  wordsLookedUp: 0,
  notesSaved: 0,
  tutorMessages: 0,
  conversationExchanges: 0,
  lessonsCompleted: 0,
  customTextsAdded: 0,
  cultureRead: [],
  languagesUsed: ["Spanish"],
  pendingLevelUp: null,
  hydrated: false,
};

function reducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "HYDRATE":
      return { ...state, ...action.payload, hydrated: true };
    case "SET_LANGUAGE": {
      const languagesUsed = state.languagesUsed.includes(action.payload)
        ? state.languagesUsed
        : [...state.languagesUsed, action.payload];
      return { ...state, selectedLanguage: action.payload, languagesUsed };
    }
    case "TOGGLE_DARK_MODE":
      return { ...state, darkMode: !state.darkMode };
    case "SET_DARK_MODE":
      return { ...state, darkMode: action.payload };
    case "SET_TAB":
      return { ...state, currentTab: action.payload };
    case "ADD_XP": {
      const xp = state.xp + action.payload;
      const newTier = tierForXp(xp);
      const leveled = newTier !== state.tier;
      return {
        ...state,
        xp,
        tier: newTier,
        pendingLevelUp: leveled ? newTier : state.pendingLevelUp,
      };
    }
    case "SET_STREAK":
      return { ...state, streak: action.payload.streak, lastActiveDate: action.payload.date };
    case "SET_LEVEL":
      return { ...state, level: action.payload };
    case "ADD_ACHIEVEMENT":
      if (state.achievements.includes(action.payload)) return state;
      return { ...state, achievements: [...state.achievements, action.payload] };
    case "ADD_NOTE":
      return { ...state, userNotes: [action.payload, ...state.userNotes] };
    case "INC_COUNTER":
      return { ...state, [action.payload]: (state[action.payload] as number) + 1 } as AppState;
    case "MARK_CULTURE_READ":
      if (state.cultureRead.includes(action.payload)) return state;
      return { ...state, cultureRead: [...state.cultureRead, action.payload] };
    case "DISMISS_LEVEL_UP":
      return { ...state, pendingLevelUp: null };
    case "_DERIVE":
      return state;
    default:
      return state;
  }
}

const STORAGE_KEY = "lingualens.app.v2";

const PERSIST_KEYS: (keyof AppState)[] = [
  "selectedLanguage",
  "darkMode",
  "currentTab",
  "xp",
  "streak",
  "lastActiveDate",
  "level",
  "tier",
  "achievements",
  "userNotes",
  "wordsLookedUp",
  "notesSaved",
  "tutorMessages",
  "conversationExchanges",
  "lessonsCompleted",
  "customTextsAdded",
  "cultureRead",
  "languagesUsed",
];

function todayKey() {
  const d = new Date();
  const m = (d.getMonth() + 1).toString().padStart(2, "0");
  const day = d.getDate().toString().padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}
function dateDelta(a: string, b: string) {
  const A = new Date(a + "T00:00:00").getTime();
  const B = new Date(b + "T00:00:00").getTime();
  return Math.round((B - A) / 86400000);
}

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  pingActivity: () => void;
} | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Hydrate
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<AppState>;
        // Re-derive tier from xp on load (do not auto-trigger overlay on first hydrate)
        const xp = typeof parsed.xp === "number" ? parsed.xp : 0;
        dispatch({
          type: "HYDRATE",
          payload: { ...parsed, tier: tierForXp(xp), pendingLevelUp: null },
        });
      } else {
        dispatch({ type: "HYDRATE", payload: {} });
      }
    } catch {
      dispatch({ type: "HYDRATE", payload: {} });
    }
  }, []);

  // Daily streak engine (runs once on hydrate)
  const ranStreak = useRef(false);
  useEffect(() => {
    if (!state.hydrated || ranStreak.current) return;
    ranStreak.current = true;
    const today = todayKey();
    if (!state.lastActiveDate) {
      dispatch({ type: "SET_STREAK", payload: { streak: 1, date: today } });
      return;
    }
    if (state.lastActiveDate === today) return; // already counted
    const delta = dateDelta(state.lastActiveDate, today);
    if (delta === 1) {
      dispatch({ type: "SET_STREAK", payload: { streak: state.streak + 1, date: today } });
    } else if (delta >= 2) {
      dispatch({ type: "SET_STREAK", payload: { streak: 1, date: today } });
    }
  }, [state.hydrated, state.lastActiveDate, state.streak]);

  // Persist
  useEffect(() => {
    if (!state.hydrated) return;
    try {
      const toSave: Record<string, unknown> = {};
      for (const k of PERSIST_KEYS) toSave[k] = (state as any)[k];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    } catch {
      /* ignore quota */
    }
  }, [state]);

  // Dark mode class
  useEffect(() => {
    const root = document.documentElement;
    if (state.darkMode) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [state.darkMode]);

  // Achievement evaluator — runs on every state change
  useEffect(() => {
    if (!state.hydrated) return;
    type Cond = { id: string; ok: boolean };
    const conds: Cond[] = [
      { id: "First Word! 🔤", ok: state.wordsLookedUp >= 1 },
      { id: "Deep Reader 📚", ok: state.notesSaved >= 5 },
      { id: "Good Listener 👂", ok: false /* awarded in speech-state */ },
      { id: "Grammar Apprentice ✏️", ok: state.lessonsCompleted >= 1 },
      { id: "Curious Learner 🧠", ok: state.tutorMessages >= 10 },
      { id: "First Conversation 🗣️", ok: state.conversationExchanges >= 5 },
      { id: "Conversationalist 💬", ok: state.conversationExchanges >= 20 },
      { id: "Author ✍️", ok: state.customTextsAdded >= 1 },
      { id: "Polyglot ⭐", ok: state.languagesUsed.length >= 3 },
      { id: "Week Streak 🔥", ok: state.streak >= 7 },
    ];
    for (const c of conds) {
      if (c.ok && !state.achievements.includes(c.id)) {
        dispatch({ type: "ADD_ACHIEVEMENT", payload: c.id });
        toast(`✦ ${c.id}`, { description: "Achievement unlocked" });
      }
    }
  }, [
    state.hydrated,
    state.wordsLookedUp,
    state.notesSaved,
    state.lessonsCompleted,
    state.tutorMessages,
    state.conversationExchanges,
    state.customTextsAdded,
    state.languagesUsed.length,
    state.streak,
    state.achievements,
  ]);

  // pingActivity — call on any meaningful action; refreshes lastActiveDate (but doesn't double-count streak)
  const pingActivity = useCallback(() => {
    const today = todayKey();
    if (state.lastActiveDate === today) return;
    if (!state.lastActiveDate) {
      dispatch({ type: "SET_STREAK", payload: { streak: 1, date: today } });
      return;
    }
    const delta = dateDelta(state.lastActiveDate, today);
    if (delta === 1) dispatch({ type: "SET_STREAK", payload: { streak: state.streak + 1, date: today } });
    else if (delta >= 2) dispatch({ type: "SET_STREAK", payload: { streak: 1, date: today } });
  }, [state.lastActiveDate, state.streak]);

  const value = useMemo(() => ({ state, dispatch, pingActivity }), [state, pingActivity]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
}
