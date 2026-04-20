import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

export type RankTier =
  | "Bronze"
  | "Silver"
  | "Gold"
  | "Platinum"
  | "Diamond"
  | "Champion"
  | "Unreal";

export const RANK_ORDER: RankTier[] = [
  "Bronze",
  "Silver",
  "Gold",
  "Platinum",
  "Diamond",
  "Champion",
  "Unreal",
];

export const RANK_BADGE: Record<RankTier, string> = {
  Bronze: "🥉",
  Silver: "🥈",
  Gold: "🥇",
  Platinum: "💎",
  Diamond: "💠",
  Champion: "🏆",
  Unreal: "🌟",
};

/** Signature glow color (CSS color value). Unreal uses a special rainbow class. */
export const RANK_COLOR: Record<RankTier, string> = {
  Bronze: "#CD7F32",
  Silver: "#A8A9AD",
  Gold: "#C9A84C",
  Platinum: "#00CFCF",
  Diamond: "#9B59B6",
  Champion: "#E74C3C",
  Unreal: "#FFFFFF", // visual handled by .rank-glow-rainbow
};

/** Secondary color for gradient ranks (Diamond, Champion). */
export const RANK_COLOR_SECONDARY: Partial<Record<RankTier, string>> = {
  Diamond: "#2980B9",
  Champion: "#F39C12",
};

export const RANK_TITLE: Record<RankTier, string> = {
  Bronze: "The Wandering Student",
  Silver: "Seeker of Tongues",
  Gold: "Voice of the World",
  Platinum: "Eloquent Nomad",
  Diamond: "Master of Meaning",
  Champion: "Champion of Languages",
  Unreal: "Mythic Polyglot of the Ages",
};

export const RANK_FLAVOR: Record<RankTier, string> = {
  Bronze: "Every expert was once a beginner.",
  Silver: "The words are starting to speak back.",
  Gold: "You speak — and the world listens.",
  Platinum: "Borders mean nothing to those who speak many tongues.",
  Diamond: "Language bends to your will.",
  Champion: "You have conquered what most never attempt.",
  Unreal:
    "A legend. There are no more words — only those you haven't learned yet.",
};

export const POINTS_PER_TIER = 100;

/** Ranked points awarded per match outcome. */
export const POINTS_WIN = 10;
export const POINTS_LOSS = 3;
export const POINTS_TIE = 0;

interface MatchState {
  tier: RankTier;
  points: number; // 0..POINTS_PER_TIER (within current tier)
}

interface MatchCtx extends MatchState {
  glowColor: string;
  badge: string;
  title: string;
  flavor: string;
  isMaxTier: boolean;
  /** A rank-up that just happened and hasn't been acknowledged by the UI yet. */
  pendingRankUp: RankTier | null;
  acknowledgeRankUp: () => void;
  addPoints: (n: number) => void;
  removePoints: (n: number) => void;
  reset: () => void;
}

const Ctx = createContext<MatchCtx | null>(null);
const STORAGE_KEY = "lingualens.match.v1";

const initialState: MatchState = { tier: "Bronze", points: 0 };

export function MatchProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<MatchState>(initialState);
  const [hydrated, setHydrated] = useState(false);
  const [pendingRankUp, setPendingRankUp] = useState<RankTier | null>(null);
  const prevTierRef = useRef<RankTier>(initialState.tier);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<MatchState>;
        if (
          parsed &&
          typeof parsed.tier === "string" &&
          RANK_ORDER.includes(parsed.tier as RankTier) &&
          typeof parsed.points === "number"
        ) {
          const tier = parsed.tier as RankTier;
          setState({
            tier,
            points: Math.max(0, Math.min(POINTS_PER_TIER, parsed.points)),
          });
          prevTierRef.current = tier;
        }
      }
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* ignore */
    }
  }, [state, hydrated]);

  // Detect rank-up (tier increase) and queue ceremony.
  useEffect(() => {
    if (!hydrated) return;
    const prev = prevTierRef.current;
    const prevIdx = RANK_ORDER.indexOf(prev);
    const curIdx = RANK_ORDER.indexOf(state.tier);
    if (curIdx > prevIdx) {
      setPendingRankUp(state.tier);
    }
    prevTierRef.current = state.tier;
  }, [state.tier, hydrated]);

  const addPoints = useCallback((n: number) => {
    if (n <= 0) return;
    setState((s) => {
      let points = s.points + n;
      let tierIdx = RANK_ORDER.indexOf(s.tier);
      // On crossing 100, reset to 0 in the new tier (per spec).
      while (points >= POINTS_PER_TIER && tierIdx < RANK_ORDER.length - 1) {
        points = 0;
        tierIdx += 1;
      }
      if (tierIdx === RANK_ORDER.length - 1) {
        points = Math.min(points, POINTS_PER_TIER);
      }
      return { tier: RANK_ORDER[tierIdx], points };
    });
  }, []);

  const removePoints = useCallback((n: number) => {
    if (n <= 0) return;
    setState((s) => {
      // Never drop below 0 within current tier (per spec).
      const points = Math.max(0, s.points - n);
      return { tier: s.tier, points };
    });
  }, []);

  const acknowledgeRankUp = useCallback(() => setPendingRankUp(null), []);

  const reset = useCallback(() => {
    setState(initialState);
    setPendingRankUp(null);
  }, []);

  const value = useMemo<MatchCtx>(
    () => ({
      tier: state.tier,
      points: state.points,
      glowColor: RANK_COLOR[state.tier],
      badge: RANK_BADGE[state.tier],
      title: RANK_TITLE[state.tier],
      flavor: RANK_FLAVOR[state.tier],
      isMaxTier: state.tier === "Unreal",
      pendingRankUp,
      acknowledgeRankUp,
      addPoints,
      removePoints,
      reset,
    }),
    [state, addPoints, removePoints, reset, pendingRankUp, acknowledgeRankUp],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useMatch() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useMatch must be used inside MatchProvider");
  return c;
}
