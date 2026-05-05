import { Moon, Sun, Sparkle, ChevronDown, Puzzle } from "lucide-react";
import { useApp, NATIVE_LANGUAGES, type Language, type NativeLanguage } from "@/state/app-state";
import { getModule, moduleSupportsLanguage } from "@/data/modules";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { VoicePicker } from "./VoicePicker";
import { AuthButton } from "./auth/AuthButton";
import { ModulePickerDialog } from "./ModulePickerDialog";
import { toast } from "sonner";

const LANGUAGES: Language[] = [
  "Spanish", "French", "German", "Italian", "Japanese", "Portuguese",
];

export function TopNav({ onOpenMatch: _onOpenMatch }: { onOpenMatch?: () => void }) {
  const { state, dispatch } = useApp();
  const [moduleOpen, setModuleOpen] = useState(false);
  const activeMod = getModule(state.activeModuleId);

  useEffect(() => {
    if (activeMod && !moduleSupportsLanguage(activeMod, state.selectedLanguage)) {
      dispatch({ type: "SET_ACTIVE_MODULE", payload: null });
      toast(`${activeMod.name} isn't available in ${state.selectedLanguage} yet`, {
        description: "Switched to Core.",
      });
    }
  }, [state.selectedLanguage, activeMod, dispatch]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-xl [padding-top:env(safe-area-inset-top)]">
        <div className="mx-auto flex h-[60px] max-w-7xl items-center justify-between gap-3 px-4 sm:gap-5 sm:px-6">

          {/* Logo */}
          <div className="flex shrink-0 items-center gap-2">
            <Sparkle className="h-5 w-5 text-gold" strokeWidth={1.5} fill="currentColor" />
            <span className="font-display text-xl font-semibold tracking-tight">LinguaLens</span>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2">

            {/* Language */}
            <DropdownMenu>
              <DropdownMenuTrigger className="group inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card/60 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground/80 transition-all hover:border-gold/60 hover:text-foreground focus:outline-none sm:px-4 sm:py-2">
                <span className="text-gold text-[10px]">◈</span>
                <span>{state.selectedLanguage}</span>
                <ChevronDown className="h-3 w-3 opacity-50 transition-transform group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="min-w-[180px] border-border/70 bg-popover/95 backdrop-blur-xl">
                {LANGUAGES.map((lang) => (
                  <DropdownMenuItem
                    key={lang}
                    onSelect={() => dispatch({ type: "SET_LANGUAGE", payload: lang })}
                    className="font-mono text-xs uppercase tracking-[0.16em]"
                  >
                    <span className={state.selectedLanguage === lang ? "text-gold" : "opacity-50"}>◈</span>
                    {lang}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Module trigger */}
            <button
              onClick={() => setModuleOpen(true)}
              className="group inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card/60 px-3 py-1.5 transition-all hover:border-gold/60 focus:outline-none sm:px-4 sm:py-2"
            >
              <Puzzle className="h-3.5 w-3.5 shrink-0 text-gold" strokeWidth={1.8} />
              {activeMod ? (
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-gold max-w-[120px] truncate hidden sm:inline">
                  {activeMod.emoji} {activeMod.name}
                </span>
              ) : (
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-foreground/70 hidden sm:inline">
                  Core (Free)
                </span>
              )}
              <ChevronDown className="h-3 w-3 opacity-50" />
            </button>

            {/* Native language — desktop only */}
            <DropdownMenu>
              <DropdownMenuTrigger className="group hidden lg:inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground transition-all hover:border-gold/50 hover:text-foreground focus:outline-none">
                <span className="opacity-50">native</span>
                <span>{state.nativeLanguage}</span>
                <ChevronDown className="h-3 w-3 opacity-50 transition-transform group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="max-h-[60vh] min-w-[180px] overflow-y-auto border-border/70 bg-popover/95 backdrop-blur-xl">
                <DropdownMenuLabel className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Native language
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {NATIVE_LANGUAGES.map((lang: NativeLanguage) => (
                  <DropdownMenuItem
                    key={lang}
                    onSelect={() => dispatch({ type: "SET_NATIVE_LANGUAGE", payload: lang })}
                    className="font-mono text-xs uppercase tracking-[0.16em]"
                  >
                    <span className={state.nativeLanguage === lang ? "text-gold" : "opacity-50"}>◈</span>
                    {lang}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Voice — desktop */}
            <div className="hidden sm:block"><VoicePicker /></div>

            {/* Theme toggle */}
            <button
              onClick={() => dispatch({ type: "TOGGLE_DARK_MODE" })}
              aria-label="Toggle theme"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-card/60 text-foreground/80 transition-all hover:border-gold/60 hover:text-gold"
            >
              {state.darkMode
                ? <Sun className="h-4 w-4" strokeWidth={1.6} />
                : <Moon className="h-4 w-4" strokeWidth={1.6} />
              }
            </button>

            <AuthButton />
          </div>
        </div>
      </header>

      <ModulePickerDialog open={moduleOpen} onClose={() => setModuleOpen(false)} />
    </>
  );
}
