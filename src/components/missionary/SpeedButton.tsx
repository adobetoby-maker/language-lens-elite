import { Gauge } from "lucide-react";
import type { MissionaryRate } from "./useMissionarySpeech";

/**
 * Compact pill that cycles through 0.5× → 0.75× → 1× playback speeds for
 * the missionary read-aloud features.
 */
export function SpeedButton({
  rate,
  onCycle,
  size = "sm",
}: {
  rate: MissionaryRate;
  onCycle: () => void;
  size?: "sm" | "md";
}) {
  const small = size === "sm";
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onCycle();
      }}
      title="Playback speed"
      aria-label={`Playback speed ${rate}x — click to change`}
      className={`inline-flex items-center gap-1 rounded-full border border-gold/40 bg-gold/10 text-gold align-middle transition-colors hover:bg-gold/20 ${
        small ? "h-6 px-1.5 text-[10px]" : "h-7 px-2 text-[11px]"
      }`}
    >
      <Gauge className={small ? "h-3 w-3" : "h-3.5 w-3.5"} />
      <span className="font-mono tabular-nums">{rate}×</span>
    </button>
  );
}
