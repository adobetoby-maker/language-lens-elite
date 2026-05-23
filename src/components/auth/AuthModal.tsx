import { useState } from "react";
import { Loader2, Sparkle, Mail } from "lucide-react";
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

type Mode = "signin" | "signup" | "forgot" | "check-email";

export function AuthModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const { signIn, signUp, resetPassword } = useAuth();
  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [checkEmailMsg, setCheckEmailMsg] = useState("");

  function reset(nextMode: Mode) {
    setErr(null);
    setMode(nextMode);
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);

    if (mode === "forgot") {
      if (!email.includes("@")) {
        setErr("Enter a valid email.");
        return;
      }
      setBusy(true);
      const { error } = await resetPassword(email);
      setBusy(false);
      if (error) {
        setErr(error);
        return;
      }
      setCheckEmailMsg("Password reset link sent — check your inbox.");
      setMode("check-email");
      return;
    }

    if (!email.includes("@")) {
      setErr("Enter a valid email.");
      return;
    }
    if (password.length < 6) {
      setErr("Password must be at least 6 characters.");
      return;
    }

    setBusy(true);
    if (mode === "signin") {
      const { error } = await signIn(email, password);
      setBusy(false);
      if (error) {
        setErr(error);
        return;
      }
      onOpenChange(false);
    } else {
      const { error, needsConfirmation } = await signUp(email, password);
      setBusy(false);
      if (error) {
        setErr(error);
        return;
      }
      if (needsConfirmation) {
        setCheckEmailMsg(
          `We sent a confirmation link to ${email}. Click it to activate your account, then sign in.`,
        );
        setMode("check-email");
      } else {
        onOpenChange(false);
      }
    }
    setEmail("");
    setPassword("");
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !busy && onOpenChange(v)}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">
            {mode === "signin" && "Welcome back"}
            {mode === "signup" && "Create your account"}
            {mode === "forgot" && "Reset your password"}
            {mode === "check-email" && "Check your email"}
          </DialogTitle>
          <DialogDescription className="font-mono text-[11px] uppercase tracking-[0.18em]">
            {mode === "signin" && "Sign in to sync your progress across devices"}
            {mode === "signup" && "Your progress will sync across all your devices"}
            {mode === "forgot" && "We'll send a reset link to your email"}
            {mode === "check-email" && "One more step"}
          </DialogDescription>
        </DialogHeader>

        {/* ── Check-email confirmation screen ── */}
        {mode === "check-email" && (
          <div className="space-y-4">
            <div className="flex flex-col items-center gap-3 rounded-xl border border-gold/30 bg-gold/5 px-5 py-6 text-center">
              <Mail className="h-8 w-8 text-gold" strokeWidth={1.4} />
              <p className="text-sm text-muted-foreground leading-relaxed">{checkEmailMsg}</p>
            </div>
            <button
              type="button"
              onClick={() => reset("signin")}
              className="w-full font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground"
            >
              ← Back to sign in
            </button>
          </div>
        )}

        {/* ── Sign in / Sign up / Forgot forms ── */}
        {mode !== "check-email" && (
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

            {mode !== "forgot" && (
              <Input
                type="password"
                placeholder={mode === "signin" ? "Password" : "Password (min 6 characters)"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={busy}
                autoComplete={mode === "signin" ? "current-password" : "new-password"}
                className="font-display"
              />
            )}

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
              {mode === "signin" && "Sign in"}
              {mode === "signup" && "Create account"}
              {mode === "forgot" && "Send reset link"}
            </Button>

            {/* Secondary links */}
            <div className="flex flex-col gap-1.5">
              {mode === "signin" && (
                <>
                  <button
                    type="button"
                    onClick={() => reset("signup")}
                    className="w-full font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground"
                  >
                    No account? Create one →
                  </button>
                  <button
                    type="button"
                    onClick={() => reset("forgot")}
                    className="w-full font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/50 hover:text-muted-foreground"
                  >
                    Forgot password?
                  </button>
                </>
              )}
              {(mode === "signup" || mode === "forgot") && (
                <button
                  type="button"
                  onClick={() => reset("signin")}
                  className="w-full font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground"
                >
                  ← Back to sign in
                </button>
              )}
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
