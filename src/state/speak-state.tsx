import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Language } from "./app-state";

export type SpeakRole = "user" | "ai";

export interface SpeakTurn {
  id: string;
  role: SpeakRole;
  text: string;
  createdAt: number;
  tip?: string | null;
}

interface SpeakCtx {
  turns: SpeakTurn[];
  addTurn: (role: SpeakRole, text: string, tip?: string | null) => SpeakTurn;
  clear: () => void;
}

const Ctx = createContext<SpeakCtx | null>(null);
const STORAGE_KEY = "lingualens.speak.v1";

type Store = Record<string, SpeakTurn[]>;

export function SpeakProvider({
  children,
  language,
}: {
  children: ReactNode;
  language: Language;
}) {
  const [store, setStore] = useState<Store>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setStore(JSON.parse(raw));
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    } catch {
      /* ignore */
    }
  }, [store, hydrated]);

  const turns = store[language] ?? [];

  const addTurn = useCallback(
    (role: SpeakRole, text: string, tip?: string | null) => {
      const turn: SpeakTurn = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        role,
        text,
        createdAt: Date.now(),
        tip: tip ?? null,
      };
      setStore((s) => ({
        ...s,
        [language]: [...(s[language] ?? []), turn],
      }));
      return turn;
    },
    [language],
  );

  const clear = useCallback(() => {
    setStore((s) => ({ ...s, [language]: [] }));
  }, [language]);

  const value = useMemo(
    () => ({ turns, addTurn, clear }),
    [turns, addTurn, clear],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useSpeak() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useSpeak must be used inside SpeakProvider");
  return c;
}
