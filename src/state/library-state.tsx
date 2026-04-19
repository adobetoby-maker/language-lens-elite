import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";
import { LIBRARY as PRELOADED, type LibraryText } from "@/data/library";
import type { Language } from "./app-state";

export type LibrarySection = "classic" | "culture" | "custom";

export interface LibraryEntry extends LibraryText {
  section: LibrarySection;
  flag: string;
  available: boolean; // false = stub (not yet generated/translated)
}

interface LibraryState {
  entries: LibraryEntry[];
  selectedId: string;
  generating: boolean; // culture series generating
}

type Action =
  | { type: "ADD_ENTRY"; payload: LibraryEntry }
  | { type: "SELECT"; payload: string }
  | { type: "SET_GENERATING"; payload: boolean }
  | { type: "REPLACE_BY_ID"; payload: LibraryEntry };

const FLAG_BY_LANGUAGE: Record<Language, string> = {
  Spanish: "🇪🇸",
  French: "🇫🇷",
  German: "🇩🇪",
  Italian: "🇮🇹",
  Japanese: "🇯🇵",
  Portuguese: "🇧🇷",
};

const CLASSIC_STUBS: LibraryEntry[] = [
  {
    id: "classic-quixote",
    title: "Don Quixote — Ch. 1",
    subtitle: "Miguel de Cervantes",
    language: "Spanish",
    targetLabel: "Español",
    sentences: PRELOADED[0].sentences,
    section: "classic",
    flag: "🇪🇸",
    available: true,
  },
  {
    id: "classic-petit-prince",
    title: "Le Petit Prince",
    subtitle: "Antoine de Saint-Exupéry",
    language: "French",
    targetLabel: "Français",
    sentences: [],
    section: "classic",
    flag: "🇫🇷",
    available: false,
  },
  {
    id: "classic-verwandlung",
    title: "Die Verwandlung",
    subtitle: "Franz Kafka",
    language: "German",
    targetLabel: "Deutsch",
    sentences: [],
    section: "classic",
    flag: "🇩🇪",
    available: false,
  },
  {
    id: "classic-pinocchio",
    title: "Le avventure di Pinocchio",
    subtitle: "Carlo Collodi",
    language: "Italian",
    targetLabel: "Italiano",
    sentences: [],
    section: "classic",
    flag: "🇮🇹",
    available: false,
  },
];

const CULTURE_SEED: LibraryEntry = {
  id: "culture-espana-seed",
  title: "Culture: España",
  subtitle: "A short cultural reading",
  language: "Spanish",
  targetLabel: "Español",
  sentences: PRELOADED[1].sentences,
  section: "culture",
  flag: "🇪🇸",
  available: true,
};

const initial: LibraryState = {
  entries: [...CLASSIC_STUBS, CULTURE_SEED],
  selectedId: "classic-quixote",
  generating: false,
};

function reducer(state: LibraryState, action: Action): LibraryState {
  switch (action.type) {
    case "ADD_ENTRY":
      return { ...state, entries: [action.payload, ...state.entries] };
    case "REPLACE_BY_ID": {
      const exists = state.entries.some((e) => e.id === action.payload.id);
      const entries = exists
        ? state.entries.map((e) => (e.id === action.payload.id ? action.payload : e))
        : [action.payload, ...state.entries];
      return { ...state, entries };
    }
    case "SELECT":
      return { ...state, selectedId: action.payload };
    case "SET_GENERATING":
      return { ...state, generating: action.payload };
    default:
      return state;
  }
}

const Ctx = createContext<{
  state: LibraryState;
  dispatch: React.Dispatch<Action>;
  selected: LibraryEntry;
  flagFor: (l: Language) => string;
} | null>(null);

export function LibraryProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initial);

  const selected = useMemo(
    () =>
      state.entries.find((e) => e.id === state.selectedId && e.available) ??
      state.entries.find((e) => e.available) ??
      state.entries[0],
    [state.entries, state.selectedId],
  );

  // Auto-fix selection if it points to an unavailable entry
  useEffect(() => {
    const cur = state.entries.find((e) => e.id === state.selectedId);
    if (!cur || !cur.available) {
      const fallback = state.entries.find((e) => e.available);
      if (fallback) dispatch({ type: "SELECT", payload: fallback.id });
    }
  }, [state.entries, state.selectedId]);

  return (
    <Ctx.Provider
      value={{ state, dispatch, selected, flagFor: (l) => FLAG_BY_LANGUAGE[l] }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useLibrary() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useLibrary must be used inside LibraryProvider");
  return c;
}

export function flagFor(l: Language): string {
  return FLAG_BY_LANGUAGE[l];
}

export function wordCount(sentences: { en?: string; target?: string }[] | string[]): number {
  if (sentences.length === 0) return 0;
  if (typeof sentences[0] === "string") {
    return (sentences as string[]).reduce((n, s) => n + s.split(/\s+/).filter(Boolean).length, 0);
  }
  return (sentences as { target: string }[]).reduce(
    (n, s) => n + (s.target ?? "").split(/\s+/).filter(Boolean).length,
    0,
  );
}
