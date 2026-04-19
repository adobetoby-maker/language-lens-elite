import { useMemo } from "react";
import { Flame, Star, BookOpen, Award, Lock } from "lucide-react";
import {
  ACHIEVEMENTS,
  nextTierProgress,
  useApp,
  type Language,
} from "@/state/app-state";
import { CountUp } from "@/components/CountUp";
import { flagFor } from "@/state/library-state";

const LANG_FLAGS: Record<Language, string> = {
  Spanish: "🇪🇸",
  French: "🇫🇷",
  German: "🇩🇪",
  Italian: "🇮🇹",
  Japanese: "🇯🇵",
  Korean: "🇰🇷",
  Portuguese: "🇧🇷",
};

function formatMinutes(seconds: number): string {
  if (seconds <= 0) return "0m";
  const m = Math.floor(seconds / 60);
  if (m < 1) return `${seconds}s`;
  if (m < 60) return `${m}m`;
  const h = Math.floor(m / 60);
  const rem = m % 60;
  return rem === 0 ? `${h}h` : `${h}h ${rem}m`;
}

function formatDay(date: string) {
  const d = new Date(date + "T00:00:00");
  return d.toLocaleDateString(undefined, { weekday: "short" });
}

export function Dashboard() {
  const { state } = useApp();
  const progress = nextTierProgress(state.xp);

  const stats = [
    {
      icon: Flame,
      label: "Streak",
      value: `${state.streak} day${state.streak === 1 ? "" : "s"}`,
      hot: state.streak > 1,
    },
    { icon: Star, label: "XP", value: state.xp, isXp: true },
    { icon: BookOpen, label: "Words Looked Up", value: state.wordsLookedUp },
    { icon: Award, label: "Level", value: state.tier },
  ];

  const maxSessionXp = useMemo(
    () => Math.max(1, ...state.xpSessions.map((s) => s.xp)),
    [state.xpSessions],
  );

  // Pad sessions to 7 entries, oldest-first (right-most = today)
  const sessions = useMemo(() => {
    const arr = [...state.xpSessions];
    while (arr.length < 7) arr.unshift({ date: "", xp: 0 });
    return arr;
  }, [state.xpSessions]);

  const langHistory = state.languagesUsed.map((lang) => ({
    lang,
    flag: LANG_FLAGS[lang] ?? flagFor(lang),
    seconds: state.speakSecondsByLang[lang] ?? 0,
  }));

  return (
    <div className="fade-in space-y-10">
      {/* Header */}
      <div>
        <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold">
          ✦ Trophy Case
        </div>
        <h1 className="mt-2 font-display text-4xl italic text-foreground">
          Your Dashboard
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Every word, note, and conversation — together they form your story.
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-5"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
            <div className="flex items-center gap-2">
              <s.icon
                className={`h-3.5 w-3.5 ${s.hot ? "text-gold" : "text-gold/70"}`}
                strokeWidth={1.8}
              />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                {s.label}
              </span>
            </div>
            <div
              className={`mt-3 font-display text-2xl ${s.hot ? "text-gold" : "text-foreground"}`}
            >
              {s.isXp ? <CountUp value={s.value as number} /> : s.value}
            </div>
          </div>
        ))}
      </div>

      {/* XP progress bar */}
      <div className="rounded-2xl border border-border/60 bg-card/60 p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Tier Progress
            </div>
            <div className="mt-1 font-display text-lg italic text-foreground">
              {progress.current}
              {progress.next && (
                <>
                  <span className="mx-2 text-muted-foreground">→</span>
                  <span className="text-gold">{progress.next}</span>
                </>
              )}
            </div>
          </div>
          <div className="text-right font-mono text-xs text-muted-foreground">
            {progress.next ? (
              <>
                <CountUp value={progress.xpToNext} className="text-gold" /> XP to next
              </>
            ) : (
              <span className="text-gold">Maxed ✦</span>
            )}
          </div>
        </div>
        <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-gradient-to-r from-gold-soft via-gold to-gold-soft transition-[width] duration-700 ease-out"
            style={{ width: `${progress.pct}%` }}
          />
        </div>
        <div className="mt-2 flex justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          <span>{progress.base} XP</span>
          <span>{progress.target} XP</span>
        </div>
      </div>

      {/* Achievements grid */}
      <section>
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-display text-2xl italic text-foreground">Achievements</h2>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            {state.achievements.length} / {ACHIEVEMENTS.length}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {ACHIEVEMENTS.map((a) => {
            const unlocked = state.achievements.includes(a.title);
            return (
              <div
                key={a.id}
                title={unlocked ? "Unlocked" : a.hint}
                className={`group relative overflow-hidden rounded-xl border p-4 transition-all ${
                  unlocked
                    ? "border-gold/60 bg-gradient-to-br from-gold/15 via-card to-card shadow-gold"
                    : "border-border/50 bg-card/40 opacity-60 hover:opacity-90"
                }`}
              >
                {unlocked && (
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
                )}
                <div className="flex items-start justify-between">
                  <div
                    className={`font-display text-base leading-tight ${
                      unlocked ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {a.title}
                  </div>
                  {!unlocked && <Lock className="h-3.5 w-3.5 text-muted-foreground/70" strokeWidth={1.6} />}
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {unlocked ? "Unlocked" : a.hint}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Activity chart */}
      <section className="rounded-2xl border border-border/60 bg-card/60 p-6">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-display text-2xl italic text-foreground">Activity</h2>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Last 7 days
          </span>
        </div>
        {state.xpSessions.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Earn XP to see your activity bloom here.
          </p>
        ) : (
          <div className="flex h-48 items-end justify-between gap-3">
            {sessions.map((s, i) => {
              const pct = s.xp > 0 ? (s.xp / maxSessionXp) * 100 : 0;
              return (
                <div key={i} className="flex flex-1 flex-col items-center gap-2">
                  <div className="relative flex h-full w-full max-w-[40px] items-end">
                    <div
                      className="w-full rounded-t-md bg-gradient-to-t from-gold/40 via-gold to-gold-soft transition-all duration-700 ease-out"
                      style={{ height: `${pct}%` }}
                      title={`${s.xp} XP`}
                    />
                  </div>
                  <div className="font-mono text-[10px] text-muted-foreground">
                    {s.xp > 0 ? s.xp : "–"}
                  </div>
                  <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground/70">
                    {s.date ? formatDay(s.date) : "—"}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Language history */}
      <section className="rounded-2xl border border-border/60 bg-card/60 p-6">
        <h2 className="mb-4 font-display text-2xl italic text-foreground">
          Languages Practiced
        </h2>
        <div className="flex flex-wrap gap-3">
          {langHistory.map((l) => (
            <div
              key={l.lang}
              className="flex items-center gap-3 rounded-full border border-border/60 bg-background/60 px-4 py-2"
            >
              <span className="text-xl leading-none">{l.flag}</span>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground">
                  {l.lang}
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">
                  {formatMinutes(l.seconds)} spoken
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
