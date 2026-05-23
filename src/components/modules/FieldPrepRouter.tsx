import { useApp } from "@/state/app-state";
import { FieldPrepMode } from "@/components/missionary/FieldPrepMode";
import { ModuleFieldPrep } from "./ModuleFieldPrep";

const MEDICAL_IDS = new Set([
  "orthopedics",
  "nursing",
  "emergency-medicine",
  "family-medicine",
  "fmg",
  "ob-gyn",
  "cardiology",
  "general-surgery",
  "physical-therapy",
  "pain-management",
  "medical-receptionist",
  "or-evs",
]);

const TRADES_IDS = new Set([
  "construction-foreman",
  "plumber",
  "drywall",
  "electrician",
  "landscaper",
  "framer",
  "construction-safety",
]);

const SPORTS_IDS = new Set(["soccer", "baseball", "hockey", "tennis"]);

export function FieldPrepRouter() {
  const { state } = useApp();
  const id = state.activeModuleId;

  if (id === "lds-missionary") return <FieldPrepMode />;
  if (id && MEDICAL_IDS.has(id)) return <ModuleFieldPrep moduleGroup="medical" />;
  if (id && TRADES_IDS.has(id)) return <ModuleFieldPrep moduleGroup="trades" />;
  if (id && SPORTS_IDS.has(id)) return <ModuleFieldPrep moduleGroup="sports" />;

  // Fallback: show a prompt to pick a module
  return (
    <div className="mx-auto max-w-xl py-16 text-center space-y-4">
      <p className="text-4xl">🎙️</p>
      <h2 className="font-display text-xl text-foreground">Field Prep</h2>
      <p className="text-sm text-muted-foreground">
        Select a specialty module (medical, trades, sports, or missionary) to unlock module-specific
        practice conversations with voice mode.
      </p>
    </div>
  );
}
