import { useState } from "react";
import { Loader2, Sparkle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/state/auth-state";

export function AuthModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const { signIn, signUp } = useAuth();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    if (!email.includes("@")) {
      setErr("Enter a valid email.");
      return;
    }
    if (password.length < 6) {
      setErr("Password must be at least 6 characters.");
      return;
    }
    setBusy(true);
    const { error } =
      mode === "signin"
        ? await signIn(email, password)
        : await signUp(email, password);
    setBusy(false);
    if (error) {
      setErr(error);
      return;
    }
    onOpenChange(false);
    setEmail("");
    setPassword("");
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !busy && onOpenChange(v)}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">
            {mode === "signin" ? "Welcome back" : "Create your account"}
          </DialogTitle>
          <DialogDescription className="font-mono text-[11px] uppercase tracking-[0.18em]">
            {mode === "signin"
              ? "Sign in to sync your library across devices"
              : "Your books will sync across all your devices"}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={submit} className="space-y-3">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={busy}
            autoComplete="email"
            className="font-display"
          />
          <Input
            type="password"
            placeholder="Password (min 6 characters)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={busy}
            autoComplete={mode === "signin" ? "current-password" : "new-password"}
            className="font-display"
          />
          {err && (
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-destructive">
              {err}
            </p>
          )}
          <Button
            type="submit"
            disabled={busy}
            className="w-full bg-gold text-midnight hover:bg-gold/90"
          >
            {busy ? (
              <Loader2 className="mr-1 h-3.5 w-3.5 animate-spin" />
            ) : (
              <Sparkle className="mr-1 h-3.5 w-3.5" fill="currentColor" />
            )}
            {mode === "signin" ? "Sign in" : "Create account"}
          </Button>
          <button
            type="button"
            onClick={() => {
              setErr(null);
              setMode(mode === "signin" ? "signup" : "signin");
            }}
            className="w-full font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground"
          >
            {mode === "signin"
              ? "No account? Create one →"
              : "← Already have an account? Sign in"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
