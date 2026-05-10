import { BookOpen, GraduationCap, Mic2, MessageCircle, BarChart3, Church, Activity, Flame, Star, Trophy, Repeat2, AlignLeft, Gamepad2, Headphones, Grid3x3, Quote, AlertTriangle } from "lucide-react";
import { useApp, type TabKey } from "@/state/app-state";
import { getModule } from "@/data/modules";
import { CountUp } from "./CountUp";
import { cn } from "@/lib/utils";

const TAB_ITEMS: { key: TabKey; label: string; Icon: React.ElementType; moduleOnly?: string }[] = [
  { key: "missionary",  label: "Missionary",     Icon: Church,         moduleOnly: "lds-missionary" },
  { key: "orthopedics", label: "Orthopedics",     Icon: Activity,       moduleOnly: "orthopedics"    },
  { key: "reader",      label: "Reader",           Icon: BookOpen                                     },
  { key: "grammar",     label: "Grammar Studio",   Icon: GraduationCap                                },
  { key: "conjugation", label: "Conjugation",      Icon: Repeat2                                       },
  { key: "sentenceBuild", label: "Sentence Builder", Icon: AlignLeft                                  },
  { key: "listeningDrill", label: "Listening Drill", Icon: Headphones                                 },
  { key: "wordMatch",   label: "Word Match",       Icon: Grid3x3                                       },
  { key: "idiomMaster", label: "Idiom Master",     Icon: Quote                                         },
  { key: "falseFriends", label: "False Friends",   Icon: AlertTriangle                                 },
  { key: "games",       label: "Games Hub",        Icon: Gamepad2                                      },
  { key: "speak",       label: "Speak & Learn",    Icon: Mic2                                         },
  { key: "discussions", label: "Discussions",      Icon: MessageCircle,  moduleOnly: "lds-missionary" },
  { key: "dashboard",   label: "Dashboard",        Icon: BarChart3                                    },
];

const VISITED_KEY = "lingualens.visitedTabs.session";
const TAB_XP = 5;

export function AppSidebar({ onOpenMatch }: { onOpenMatch?: () => void }) {
  const { state, dispatch } = useApp();
  const mod = getModule(state.activeModuleId);
  const fiery = state.streak > 1;

  const visible = TAB_ITEMS.filter(
    (t) => !t.moduleOnly || state.activeModuleId === t.moduleOnly
  );

  function switchTab(key: TabKey) {
    if (key === state.currentTab) return;
    dispatch({ type: "SET_TAB", payload: key });
    try {
      const visited: string[] = JSON.parse(sessionStorage.getItem(VISITED_KEY) ?? "[]");
      if (!visited.includes(key)) {
        sessionStorage.setItem(VISITED_KEY, JSON.stringify([...visited, key]));
        dispatch({ type: "ADD_XP", payload: TAB_XP });
      }
    } catch {
      dispatch({ type: "ADD_XP", payload: TAB_XP });
    }
  }

  return (
    <>
      {/* ── Desktop sidebar ─────────────────────────────────── */}
      <aside className="hidden md:flex flex-col w-[68px] shrink-0 border-r border-border/50 bg-card/20 sticky top-0 h-screen">
        {/* Module indicator */}
        <div className="flex h-16 items-center justify-center border-b border-border/40">
          {mod
            ? <span className="text-2xl leading-none" title={mod.name}>{mod.emoji}</span>
            : <span className="font-display text-gold text-lg leading-none">✦</span>
          }
        </div>

        {/* Tab icons */}
        <nav className="flex flex-1 flex-col items-center gap-1 overflow-y-auto py-4">
          {visible.map(({ key, label, Icon }) => {
            const active = state.currentTab === key;
            return (
              <button
                key={key}
                onClick={() => switchTab(key)}
                title={label}
                className={cn(
                  "relative flex h-11 w-11 items-center justify-center rounded-xl transition-all",
                  active
                    ? "bg-gold/15 text-gold"
                    : "text-muted-foreground hover:bg-card/80 hover:text-foreground"
                )}
              >
                <Icon className="h-[18px] w-[18px]" strokeWidth={1.6} />
                {active && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-0.5 rounded-r-full bg-gold" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Language Match */}
        {onOpenMatch && (
          <div className="flex justify-center pb-1">
            <button
              onClick={onOpenMatch}
              title="Language Match"
              className="flex h-11 w-11 items-center justify-center rounded-xl text-muted-foreground transition-all hover:bg-card/80 hover:text-gold"
            >
              <Trophy className="h-[18px] w-[18px]" strokeWidth={1.6} />
            </button>
          </div>
        )}

        {/* Status */}
        <div className="border-t border-border/40 px-2 py-4 space-y-2.5">
          <div className="flex items-center justify-center gap-1.5">
            <Flame className={cn("h-3 w-3", fiery ? "text-gold" : "text-gold/50")} strokeWidth={1.8} />
            <span className={cn("font-mono text-[10px]", fiery ? "font-bold text-gold" : "text-foreground")}>
              {state.streak}d
            </span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <Star className="h-3 w-3 text-gold/50" strokeWidth={1.8} />
            <CountUp value={state.xp} className="font-mono text-[10px] text-foreground" />
          </div>
          <p className="text-center font-mono text-[9px] uppercase tracking-wider text-muted-foreground/60 truncate px-1">
            {state.tier}
          </p>
        </div>
      </aside>

      {/* ── Bottom nav ──────────────────────────────────────────
         Shown on BOTH mobile and desktop per product request: phone
         users get bottom-only navigation (no top header), desktop
         users get the top nav PLUS this bottom nav for thumb-zone
         tab switching even on a trackpad-driven layout. */}
      <nav className="fixed bottom-0 inset-x-0 z-40 flex items-center justify-around border-t border-border/50 bg-background/95 backdrop-blur-xl [padding-bottom:env(safe-area-inset-bottom)]">
        {([
          { key: "reader"    as TabKey, Icon: BookOpen      },
          { key: "grammar"   as TabKey, Icon: GraduationCap },
          { key: "speak"     as TabKey, Icon: Mic2          },
          { key: "dashboard" as TabKey, Icon: BarChart3      },
        ] as const).map(({ key, Icon }) => {
          const active = state.currentTab === key;
          return (
            <button
              key={key}
              onClick={() => switchTab(key)}
              className={cn(
                "flex flex-1 items-center justify-center py-3.5 transition-colors",
                active ? "text-gold" : "text-muted-foreground"
              )}
            >
              <Icon className="h-5 w-5" strokeWidth={1.6} />
            </button>
          );
        })}
        {onOpenMatch && (
          <button
            onClick={onOpenMatch}
            className="flex flex-1 items-center justify-center py-3.5 text-muted-foreground transition-colors hover:text-gold"
          >
            <Trophy className="h-5 w-5" strokeWidth={1.6} />
          </button>
        )}
      </nav>
    </>
  );
}
