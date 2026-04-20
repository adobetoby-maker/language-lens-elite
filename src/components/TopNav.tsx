import { Moon, Sun, Sparkle, ChevronDown } from "lucide-react";
import { useApp, type Language, type TabKey } from "@/state/app-state";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { VoicePicker } from "./VoicePicker";
import { LanguageMatchButton } from "./match/LanguageMatchButton";

const LANGUAGES: Language[] = [
  "Spanish",
  "French",
  "German",
  "Italian",
  "Japanese",
  "Korean",
  "Portuguese",
];

const TABS: { key: TabKey; label: string }[] = [
  { key: "reader", label: "Reader" },
  { key: "grammar", label: "Grammar Studio" },
  { key: "speak", label: "Speak & Learn" },
  { key: "dashboard", label: "Dashboard" },
];

export function TopNav({ onOpenMatch }: { onOpenMatch?: () => void }) {
  const { state, dispatch } = useApp();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <Sparkle
            className="h-5 w-5 text-gold"
            strokeWidth={1.5}
            fill="currentColor"
          />
          <span className="font-display text-2xl font-semibold tracking-tight">
            LinguaLens
          </span>
        </div>

        {/* Language selector */}
        <DropdownMenu>
          <DropdownMenuTrigger
            className="group inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-5 py-2 font-mono text-xs uppercase tracking-[0.18em] text-foreground/80 transition-all hover:border-gold/60 hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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

        <div className="flex items-center gap-3">
          {/* Voice picker */}
          <VoicePicker />

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
        </div>
      </div>

      {/* Tabs */}
      <nav className="border-t border-border/40">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-6">
          {TABS.map((tab) => {
            const active = state.currentTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => dispatch({ type: "SET_TAB", payload: tab.key })}
                data-active={active}
                className="gold-underline relative px-5 py-4 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-colors data-[active=true]:text-foreground hover:text-foreground"
              >
                {tab.label}
              </button>
            );
          })}
          {onOpenMatch && (
            <div className="ml-2">
              <LanguageMatchButton onClick={onOpenMatch} />
            </div>
          )}
        </div>
      </nav>
        </div>
      </nav>
    </header>
  );
}
