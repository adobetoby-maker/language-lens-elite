import { Moon, Sun, Sparkle, ChevronDown, Puzzle } from "lucide-react";
import { useApp, NATIVE_LANGUAGES, type Language, type NativeLanguage, type TabKey } from "@/state/app-state";
import { MODULES, getModule, moduleSupportsLanguage, type AppModule } from "@/data/modules";
import { useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { VoicePicker } from "./VoicePicker";
import { LanguageMatchButton } from "./match/LanguageMatchButton";
import { AuthButton } from "./auth/AuthButton";
import { toast } from "sonner";

const LANGUAGES: Language[] = [
  "Spanish",
  "French",
  "German",
  "Italian",
  "Japanese",
  "Portuguese",
];

const TABS: { key: TabKey; label: string; module?: string }[] = [
  { key: "missionary", label: "Missionary", module: "lds-missionary" },
  { key: "orthopedics", label: "Orthopedics", module: "orthopedics" },
  { key: "reader", label: "Reader" },
  { key: "grammar", label: "Grammar Studio" },
  { key: "speak", label: "Speak & Learn" },
  { key: "discussions", label: "Discussions", module: "lds-missionary" },
  { key: "dashboard", label: "Dashboard" },
];

const TAB_VISIT_XP = 5;
const VISITED_TABS_KEY = "lingualens.visitedTabs.session";

const CATEGORY_ORDER: AppModule["category"][] = [
  "Faith", "Medical", "Trades", "Service", "Education", "Agriculture", "Sports", "Travel",
];

const CATEGORY_EMOJI: Record<AppModule["category"], string> = {
  Faith: "🙏",
  Medical: "🏥",
  Trades: "🔧",
  Service: "🍽️",
  Education: "📚",
  Agriculture: "🌾",
  Sports: "⚽",
  Travel: "✈️",
};

export function TopNav({ onOpenMatch }: { onOpenMatch?: () => void }) {
  const { state, dispatch } = useApp();

  // Filter modules to those supported in the currently selected target language.
  const availableModules = MODULES.filter((m) =>
    moduleSupportsLanguage(m, state.selectedLanguage),
  );
  const modulesByCategory: Record<string, AppModule[]> = {};
  for (const m of availableModules) {
    (modulesByCategory[m.category] ||= []).push(m);
  }

  // If the active module isn't supported in the new language, fall back to Core.
  const activeModule = getModule(state.activeModuleId);
  useEffect(() => {
    if (activeModule && !moduleSupportsLanguage(activeModule, state.selectedLanguage)) {
      dispatch({ type: "SET_ACTIVE_MODULE", payload: null });
      toast(`${activeModule.name} isn't available in ${state.selectedLanguage} yet`, {
        description: "Switched to Core.",
      });
    }
  }, [state.selectedLanguage, activeModule, dispatch]);

  function handleTabSwitch(key: TabKey) {
    if (key === state.currentTab) return;
    dispatch({ type: "SET_TAB", payload: key });
    // Award XP the first time each tab is visited per session so the
    // StatusBar visibly increments without inflating XP on every click.
    try {
      const raw = sessionStorage.getItem(VISITED_TABS_KEY);
      const visited: string[] = raw ? JSON.parse(raw) : [];
      if (!visited.includes(key)) {
        visited.push(key);
        sessionStorage.setItem(VISITED_TABS_KEY, JSON.stringify(visited));
        dispatch({ type: "ADD_XP", payload: TAB_VISIT_XP });
      }
    } catch {
      dispatch({ type: "ADD_XP", payload: TAB_VISIT_XP });
    }
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-xl [padding-top:env(safe-area-inset-top)]">
      <div className="mx-auto flex min-h-16 max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:h-20 sm:flex-nowrap sm:gap-6 sm:px-6 sm:py-0">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <Sparkle
            className="h-5 w-5 text-gold"
            strokeWidth={1.5}
            fill="currentColor"
          />
          <span className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
            LinguaLens
          </span>
        </div>

        {/* Language selector */}
        <DropdownMenu>
          <DropdownMenuTrigger
            className="group order-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border/70 bg-card/60 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/80 transition-all hover:border-gold/60 hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:order-none sm:w-auto sm:px-5 sm:text-xs"
          >
            <span className="text-gold">◈</span>
            <span>{state.selectedLanguage}</span>
            <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform group-data-[state=open]:rotate-180" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="center"
            className="min-w-[200px] border-border/70 bg-popover/95 backdrop-blur-xl"
          >
            {LANGUAGES.map((lang) => (
              <DropdownMenuItem
                key={lang}
                onSelect={() => dispatch({ type: "SET_LANGUAGE", payload: lang })}
                className="font-mono text-xs uppercase tracking-[0.16em]"
              >
                <span
                  className={
                    state.selectedLanguage === lang ? "text-gold" : "opacity-60"
                  }
                >
                  ◈
                </span>
                {lang}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Module switcher */}
        <DropdownMenu>
          <DropdownMenuTrigger
            title="Active module"
            className="group order-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border/70 bg-card/60 px-4 py-2 transition-all hover:border-gold/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:order-none sm:w-auto sm:px-4"
          >
            <Puzzle className="h-3.5 w-3.5 shrink-0 text-gold" strokeWidth={1.8} />
            {getModule(state.activeModuleId) ? (
              <span className="truncate max-w-[160px] font-mono text-sm font-bold uppercase tracking-[0.18em] text-gold">
                {getModule(state.activeModuleId)!.emoji} {getModule(state.activeModuleId)!.name}
              </span>
            ) : (
              <span className="truncate max-w-[140px] font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/80 sm:text-xs">
                Core (Free)
              </span>
            )}
            <ChevronDown className="h-3.5 w-3.5 shrink-0 opacity-60 transition-transform group-data-[state=open]:rotate-180" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="center"
            className="min-w-[240px] border-border/70 bg-popover/95 backdrop-blur-xl"
          >
            <DropdownMenuLabel className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Active module
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onSelect={() => dispatch({ type: "SET_ACTIVE_MODULE", payload: null })}
              className="font-mono text-xs uppercase tracking-[0.16em]"
            >
              <span className={state.activeModuleId === null ? "text-gold" : "opacity-60"}>◈</span>
              Core (Free)
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {CATEGORY_ORDER.filter((cat) => modulesByCategory[cat]?.length).map((cat) => (
              <DropdownMenuSub key={cat}>
                <DropdownMenuSubTrigger className="font-mono text-[11px] uppercase tracking-[0.18em]">
                  <span className="mr-1.5">{CATEGORY_EMOJI[cat]}</span>
                  {cat}
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="min-w-[240px] border-border/70 bg-popover/95 backdrop-blur-xl">
                  {(modulesByCategory[cat] ?? []).map((m) => {
                    const owned = state.purchasedModules.includes(m.id);
                    const active = state.activeModuleId === m.id;
                    return (
                      <DropdownMenuItem
                        key={m.id}
                        onSelect={() => {
                          if (!owned) {
                            dispatch({ type: "PURCHASE_MODULE", payload: m.id });
                            dispatch({ type: "SET_ACTIVE_MODULE", payload: m.id });
                            toast(`${m.emoji} ${m.name} unlocked`, {
                              description: "Stubbed — payments not wired yet.",
                            });
                          } else {
                            dispatch({ type: "SET_ACTIVE_MODULE", payload: m.id });
                            toast(`${m.emoji} ${m.name} active`);
                          }
                        }}
                        className="flex items-start gap-2 py-2"
                      >
                        <span className={active ? "text-gold mt-0.5" : "opacity-40 mt-0.5"}>◈</span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className={`font-mono text-xs uppercase tracking-[0.16em] ${active ? "text-gold font-semibold" : ""}`}>
                              {m.emoji} {m.name}
                            </span>
                            {!owned && (
                              <span className="ml-auto rounded-full border border-gold/40 px-2 py-0.5 text-[9px] uppercase tracking-wider text-gold">
                                ${(m.priceCents / 100).toFixed(2)}
                              </span>
                            )}
                            {owned && active && (
                              <span className="ml-auto text-[9px] uppercase tracking-wider text-gold">
                                Active
                              </span>
                            )}
                          </div>
                          <div className="mt-0.5 line-clamp-2 text-[10px] normal-case tracking-normal text-muted-foreground">
                            {m.blurb}
                          </div>
                        </div>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Native language picker */}
          <DropdownMenu>
            <DropdownMenuTrigger
              title={`Native language: ${state.nativeLanguage}`}
              className="group hidden items-center gap-1.5 rounded-full border border-border/70 bg-card/60 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition-all hover:border-gold/50 hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:inline-flex"
            >
              <span className="opacity-60">native</span>
              <span className="text-foreground/90">{state.nativeLanguage}</span>
              <ChevronDown className="h-3 w-3 opacity-60 transition-transform group-data-[state=open]:rotate-180" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="max-h-[60vh] min-w-[200px] overflow-y-auto border-border/70 bg-popover/95 backdrop-blur-xl"
            >
              <DropdownMenuLabel className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Native language
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {NATIVE_LANGUAGES.map((lang: NativeLanguage) => (
                <DropdownMenuItem
                  key={lang}
                  onSelect={() =>
                    dispatch({ type: "SET_NATIVE_LANGUAGE", payload: lang })
                  }
                  className="font-mono text-xs uppercase tracking-[0.16em]"
                >
                  <span
                    className={
                      state.nativeLanguage === lang ? "text-gold" : "opacity-60"
                    }
                  >
                    ◈
                  </span>
                  {lang}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Voice picker */}
          <div className="hidden sm:block">
            <VoicePicker />
          </div>

          {/* Theme toggle */}
          <button
            onClick={() => dispatch({ type: "TOGGLE_DARK_MODE" })}
            aria-label="Toggle theme"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-card/60 text-foreground/80 transition-all hover:border-gold/60 hover:text-gold"
          >
            {state.darkMode ? (
              <Sun className="h-4 w-4" strokeWidth={1.6} />
            ) : (
              <Moon className="h-4 w-4" strokeWidth={1.6} />
            )}
          </button>

          {/* Auth button */}
          <AuthButton />
        </div>
      </div>

      {/* Tabs */}
      <nav className="border-t border-border/40">
        <div className="mx-auto flex max-w-7xl items-center gap-3 overflow-x-auto px-3 sm:gap-4 sm:px-6 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {TABS.filter((t) => !t.module || state.activeModuleId === t.module).map((tab) => {
            const active = state.currentTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => handleTabSwitch(tab.key)}
                data-active={active}
                className="gold-underline relative shrink-0 px-3 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition-colors data-[active=true]:text-foreground hover:text-foreground sm:px-5 sm:py-4 sm:text-[11px] sm:tracking-[0.22em]"
              >
                {tab.label}
              </button>
            );
          })}
          {onOpenMatch && (
            <div className="ml-1 shrink-0 sm:ml-2">
              <LanguageMatchButton onClick={onOpenMatch} />
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
