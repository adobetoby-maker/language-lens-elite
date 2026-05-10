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
  | "Korean"
  | "Portuguese"
  | "English";

// The learner's native ("translation") language — used for the left pane,
// definitions, lesson explanations, etc. Default English; expandable.
export type NativeLanguage =
  | "English"
  | "Spanish"
  | "French"
  | "German"
  | "Italian"
  | "Portuguese"
  | "Dutch"
  | "Polish"
  | "Russian"
  | "Turkish"
  | "Arabic"
  | "Hindi"
  | "Chinese (Simplified)"
  | "Japanese"
  | "Korean";

export const NATIVE_LANGUAGES: NativeLanguage[] = [
  "English",
  "Spanish",
  "French",
  "German",
  "Italian",
  "Portuguese",
  "Dutch",
  "Polish",
  "Russian",
  "Turkish",
  "Arabic",
  "Hindi",
  "Chinese (Simplified)",
  "Japanese",
  "Korean",
];

export type TabKey = "missionary" | "orthopedics" | "reader" | "grammar" | "speak" | "discussions" | "dashboard" | "anatomy" | "modules" | "kana" | "conjugation" | "sentenceBuild" | "games";

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
  // ⚔️ Language Match achievements
  { id: "first-blood", title: "First Blood ⚔️", hint: "Play your first Language Match" },
  { id: "victorious", title: "Victorious 🏆", hint: "Win your first Language Match" },
  { id: "on-a-roll", title: "On a Roll 🔥", hint: "Win 3 matches in a row" },
  { id: "resilient", title: "Resilient 💪", hint: "Lose, then win the next match" },
  { id: "long-game", title: "The Long Game 🕰️", hint: "Survive to Round 7+ in a single match" },
  { id: "silver-tongue", title: "Silver Tongue 🥈", hint: "Reach Silver rank" },
  { id: "golden-word", title: "Golden Word 🥇", hint: "Reach Gold rank" },
  { id: "platinum-standard", title: "Platinum Standard 💎", hint: "Reach Platinum rank" },
  { id: "beyond-diamond", title: "Beyond Diamond 💠", hint: "Reach Diamond rank" },
  { id: "undisputed", title: "Undisputed 🏆", hint: "Reach Champion rank" },
  { id: "unreal", title: "UNREAL 🌟", hint: "Reach Unreal rank" },
];

export interface AppState {
  selectedLanguage: Language;
  nativeLanguage: NativeLanguage;
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
  cefrLevelsCompleted: string[]; // e.g. ["A1","A2"]
  speakSecondsByLang: Partial<Record<Language, number>>;

  // Activity bar chart data — last up to 7 daily totals
  xpSessions: { date: string; xp: number }[];

  // Spoken challenges
  challengesCleared: number;
  recentChallenges: ClearedChallenge[]; // most recent first, capped at 5

  // Celebration trigger
  pendingLevelUp: XpTier | null;

  // Paid plug-in modules (frontend stub for now)
  purchasedModules: string[];
  activeModuleId: string | null;
  // Optional per-module assignments (e.g. LDS missionary mission area id)
  moduleAssignments: Record<string, string>;

  hydrated: boolean;
}

export interface ClearedChallenge {
  id: string;
  kind: "grammar" | "reach";
  hint: string;
  sentence: string;
  language: Language;
  xp: number;
  clearedAt: number;
}

export type AppAction =
  | { type: "HYDRATE"; payload: Partial<AppState> }
  | { type: "SET_LANGUAGE"; payload: Language }
  | { type: "SET_NATIVE_LANGUAGE"; payload: NativeLanguage }
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
  | { type: "MARK_CEFR_COMPLETE"; payload: string }
  | { type: "ADD_SPEAK_SECONDS"; payload: { lang: Language; seconds: number } }
  | { type: "RECORD_CHALLENGE"; payload: ClearedChallenge }
  | { type: "DISMISS_LEVEL_UP" }
  | { type: "PURCHASE_MODULE"; payload: string }
  | { type: "SET_ACTIVE_MODULE"; payload: string | null }
  | { type: "SET_MODULE_ASSIGNMENT"; payload: { moduleId: string; assignmentId: string | null } }
  | { type: "_DERIVE" }; // internal: re-derive tier + pendingLevelUp

const initialState: AppState = {
  selectedLanguage: "Spanish",
  nativeLanguage: "English",
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
  cefrLevelsCompleted: [],
  speakSecondsByLang: {},
  xpSessions: [],
  challengesCleared: 0,
  recentChallenges: [],
  pendingLevelUp: null,
  purchasedModules: ["orthopedics", "lds-missionary", "framer"],
  activeModuleId: "orthopedics",
  moduleAssignments: {},
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
    case "SET_NATIVE_LANGUAGE":
      return { ...state, nativeLanguage: action.payload };
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
      // Append to today's bucket in xpSessions (keep last 7 days)
      const today = todayKey();
      const sessions = [...state.xpSessions];
      const last = sessions[sessions.length - 1];
      if (last && last.date === today) {
        sessions[sessions.length - 1] = { date: today, xp: last.xp + action.payload };
      } else {
        sessions.push({ date: today, xp: action.payload });
      }
      while (sessions.length > 7) sessions.shift();
      return {
        ...state,
        xp,
        tier: newTier,
        xpSessions: sessions,
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
    case "MARK_CEFR_COMPLETE":
      if (state.cefrLevelsCompleted.includes(action.payload)) return state;
      return {
        ...state,
        cefrLevelsCompleted: [...state.cefrLevelsCompleted, action.payload],
      };
    case "ADD_SPEAK_SECONDS": {
      const cur = state.speakSecondsByLang[action.payload.lang] ?? 0;
      return {
        ...state,
        speakSecondsByLang: {
          ...state.speakSecondsByLang,
          [action.payload.lang]: cur + action.payload.seconds,
        },
      };
    }
    case "DISMISS_LEVEL_UP":
      return { ...state, pendingLevelUp: null };
    case "PURCHASE_MODULE": {
      if (state.purchasedModules.includes(action.payload)) return state;
      return {
        ...state,
        purchasedModules: [...state.purchasedModules, action.payload],
      };
    }
    case "SET_ACTIVE_MODULE": {
      // Auto-purchase on activation — no double-dispatch needed
      const purchasedModules =
        action.payload && !state.purchasedModules.includes(action.payload)
          ? [...state.purchasedModules, action.payload]
          : state.purchasedModules;
      const next = { ...state, activeModuleId: action.payload, purchasedModules };
      // When activating the missionary module, jump to its dedicated tab.
      if (action.payload === "lds-missionary") {
        next.currentTab = "missionary";
      } else if (action.payload === "orthopedics") {
        next.currentTab = "orthopedics";
      } else if (
        state.currentTab === "missionary" ||
        state.currentTab === "discussions" ||
        state.currentTab === "orthopedics"
      ) {
        // Leaving the module — these tabs disappear, so fall back to Reader.
        next.currentTab = "reader";
      }
      return next;
    }
    case "SET_MODULE_ASSIGNMENT": {
      const next = { ...state.moduleAssignments };
      if (action.payload.assignmentId == null) {
        delete next[action.payload.moduleId];
      } else {
        next[action.payload.moduleId] = action.payload.assignmentId;
      }
      return { ...state, moduleAssignments: next };
    }
    case "RECORD_CHALLENGE": {
      const recent = [action.payload, ...state.recentChallenges].slice(0, 5);
      return {
        ...state,
        challengesCleared: state.challengesCleared + 1,
        recentChallenges: recent,
      };
    }
    case "_DERIVE":
      return state;
    default:
      return state;
  }
}

const STORAGE_KEY = "lingualens.app.v2";
const LEGACY_STORAGE_KEYS = ["lingualens.app", "lingualens.app.v1"];
const SCHEMA_VERSION = 2;

type PersistedShape = Partial<AppState> & { __v?: number };

/**
 * Migrate a persisted blob from any older schema to the current SCHEMA_VERSION.
 * Each step is additive and defensive: unknown/invalid fields are dropped rather
 * than thrown so a stale localStorage never breaks app boot.
 */
function migrate(raw: unknown): PersistedShape {
  if (!raw || typeof raw !== "object") return { __v: SCHEMA_VERSION };
  let data = { ...(raw as Record<string, unknown>) } as PersistedShape;
  let v = typeof data.__v === "number" ? data.__v : 1;

  // v1 -> v2: introduce module fields + speakSecondsByLang + xpSessions defaults
  if (v < 2) {
    data.purchasedModules ??= [];
    data.activeModuleId ??= null;
    data.moduleAssignments ??= {};
    data.speakSecondsByLang ??= {};
    data.xpSessions ??= [];
    data.recentChallenges ??= [];
    data.cultureRead ??= [];
    data.languagesUsed ??= [];
    data.cefrLevelsCompleted ??= [];
    v = 2;
  }

  // Drop keys not in PERSIST_KEYS (forward-compat / cleanup)
  const allowed = new Set<string>([...(PERSIST_KEYS as string[]), "__v"]);
  for (const k of Object.keys(data)) {
    if (!allowed.has(k)) delete (data as Record<string, unknown>)[k];
  }

  // Validate selectedLanguage against current Language union
  const validLangs: Language[] = [
    "Spanish", "French", "German", "Italian", "Japanese", "Korean", "Portuguese", "English",
  ];
  if (data.selectedLanguage && !validLangs.includes(data.selectedLanguage)) {
    delete data.selectedLanguage;
  }

  data.__v = SCHEMA_VERSION;
  return data;
}

function loadPersisted(): PersistedShape | null {
  try {
    let raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      for (const legacy of LEGACY_STORAGE_KEYS) {
        const v = localStorage.getItem(legacy);
        if (v) { raw = v; localStorage.removeItem(legacy); break; }
      }
    }
    if (!raw) return null;
    return migrate(JSON.parse(raw));
  } catch {
    // Corrupt JSON — clear so we don't loop on the same bad payload
    try { localStorage.removeItem(STORAGE_KEY); } catch { /* ignore */ }
    return null;
  }
}

const PERSIST_KEYS: (keyof AppState)[] = [
  "selectedLanguage",
  "nativeLanguage",
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
  "cefrLevelsCompleted",
  "speakSecondsByLang",
  "xpSessions",
  "challengesCleared",
  "recentChallenges",
  "purchasedModules",
  "activeModuleId",
  "moduleAssignments",
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
    const parsed = loadPersisted();
    if (parsed) {
      const xp = typeof parsed.xp === "number" ? parsed.xp : 0;
      // Strip migration metadata before merging into state
      const { __v: _v, ...rest } = parsed;
      dispatch({
        type: "HYDRATE",
        payload: { ...rest, tier: tierForXp(xp), pendingLevelUp: null },
      });
    } else {
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
      const toSave: Record<string, unknown> = { __v: SCHEMA_VERSION };
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
      { id: "Grammar Wizard 🧙", ok: state.cefrLevelsCompleted.length >= 1 },
      { id: "Curious Learner 🧠", ok: state.tutorMessages >= 10 },
      { id: "First Conversation 🗣️", ok: state.conversationExchanges >= 5 },
      { id: "Conversationalist 💬", ok: state.conversationExchanges >= 20 },
      { id: "Culture Buff 🌍", ok: state.cultureRead.length >= 3 },
      { id: "Author ✍️", ok: state.customTextsAdded >= 1 },
      { id: "Polyglot ⭐", ok: state.languagesUsed.length >= 3 },
      { id: "Week Streak 🔥", ok: state.streak >= 7 },
    ];
    for (const c of conds) {
      if (c.ok && !state.achievements.includes(c.id)) {
        dispatch({ type: "ADD_ACHIEVEMENT", payload: c.id });
        toast(c.id, {
          description: "Achievement Unlocked!",
          className: "achievement-toast",
        });
      }
    }
  }, [
    state.hydrated,
    state.wordsLookedUp,
    state.notesSaved,
    state.lessonsCompleted,
    state.cefrLevelsCompleted.length,
    state.tutorMessages,
    state.conversationExchanges,
    state.cultureRead.length,
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
