import { createContext, useContext, useEffect, useReducer, type ReactNode } from "react";

export type Language =
  | "Spanish"
  | "French"
  | "German"
  | "Italian"
  | "Japanese"
  | "Portuguese";

export type TabKey = "reader" | "grammar" | "speak" | "dashboard";

export type Level = "Beginner" | "Intermediate" | "Advanced" | "Fluent";

export interface Note {
  id: string;
  text: string;
  createdAt: number;
}

export interface AppState {
  selectedLanguage: Language;
  darkMode: boolean;
  currentTab: TabKey;
  xp: number;
  streak: number;
  level: Level;
  achievements: string[];
  userNotes: Note[];
}

export type AppAction =
  | { type: "SET_LANGUAGE"; payload: Language }
  | { type: "TOGGLE_DARK_MODE" }
  | { type: "SET_DARK_MODE"; payload: boolean }
  | { type: "SET_TAB"; payload: TabKey }
  | { type: "ADD_XP"; payload: number }
  | { type: "INCREMENT_STREAK" }
  | { type: "SET_LEVEL"; payload: Level }
  | { type: "ADD_ACHIEVEMENT"; payload: string }
  | { type: "ADD_NOTE"; payload: Note };

const initialState: AppState = {
  selectedLanguage: "Spanish",
  darkMode: true,
  currentTab: "reader",
  xp: 0,
  streak: 0,
  level: "Beginner",
  achievements: [],
  userNotes: [],
};

function reducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "SET_LANGUAGE":
      return { ...state, selectedLanguage: action.payload };
    case "TOGGLE_DARK_MODE":
      return { ...state, darkMode: !state.darkMode };
    case "SET_DARK_MODE":
      return { ...state, darkMode: action.payload };
    case "SET_TAB":
      return { ...state, currentTab: action.payload };
    case "ADD_XP":
      return { ...state, xp: state.xp + action.payload };
    case "INCREMENT_STREAK":
      return { ...state, streak: state.streak + 1 };
    case "SET_LEVEL":
      return { ...state, level: action.payload };
    case "ADD_ACHIEVEMENT":
      return { ...state, achievements: [...state.achievements, action.payload] };
    case "ADD_NOTE":
      return { ...state, userNotes: [action.payload, ...state.userNotes] };
    default:
      return state;
  }
}

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const root = document.documentElement;
    if (state.darkMode) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [state.darkMode]);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
}
