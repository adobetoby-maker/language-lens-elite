import { useState } from "react";
import { MapPin, Calendar, ChevronDown, Pencil, Check } from "lucide-react";
import { useApp } from "@/state/app-state";
import { getMissionArea, MISSION_AREAS } from "@/data/missionary-content";
import { cn } from "@/lib/utils";

interface MissionBannerProps {
  compact?: boolean;
}

export function MissionBanner({ compact = false }: MissionBannerProps) {
  const { state, dispatch } = useApp();
  const [editingDate, setEditingDate] = useState(false);
  const [editingMission, setEditingMission] = useState(false);
  const [dateInput, setDateInput] = useState(state.departureDate ?? "");

  const assignmentId = state.moduleAssignments["lds-missionary"] ?? null;
  const area = getMissionArea(assignmentId);
  const { departureDate } = state;

  const daysRemaining = departureDate ? daysUntil(departureDate) : null;
  const totalDays = 90; // target mission-prep window
  const pct =
    daysRemaining !== null
      ? Math.max(0, Math.min(100, Math.round(((totalDays - daysRemaining) / totalDays) * 100)))
      : 0;

  const saveDate = () => {
    if (dateInput) {
      dispatch({ type: "SET_DEPARTURE_DATE", payload: dateInput });
    }
    setEditingDate(false);
  };

  if (compact) {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-gold/20 bg-gold/5 px-4 py-2.5">
        {area ? (
          <>
            <MapPin className="h-3.5 w-3.5 shrink-0 text-gold/70" />
            <span className="font-mono text-[11px] text-gold/90 truncate">{area.name}</span>
            <span className="text-gold/30">·</span>
            <span className="font-mono text-[11px] text-muted-foreground">
              {area.languages.join(", ")}
            </span>
          </>
        ) : (
          <span className="font-mono text-[11px] text-muted-foreground">No mission area set</span>
        )}
        {daysRemaining !== null && daysRemaining >= 0 && (
          <>
            <span className="text-gold/30">·</span>
            <Calendar className="h-3.5 w-3.5 shrink-0 text-gold/50" />
            <span className="font-mono text-[11px] text-gold font-bold">{daysRemaining}d</span>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/8 via-card/60 to-card/40 p-5 space-y-4">
      {/* Mission area row */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3 min-w-0">
          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
            <MapPin className="h-3.5 w-3.5 text-gold" />
          </div>
          <div className="min-w-0">
            {area ? (
              <>
                <p className="font-display text-sm text-foreground leading-tight">{area.name}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground mt-0.5">
                  {area.region} · {area.languages.join(", ")}
                </p>
                {area.cultureNote && (
                  <p className="mt-1.5 font-mono text-[11px] text-foreground/60 leading-relaxed max-w-lg">
                    {area.cultureNote}
                  </p>
                )}
              </>
            ) : (
              <p className="font-mono text-[11px] text-muted-foreground">
                No mission area selected yet
              </p>
            )}
          </div>
        </div>
        <button
          onClick={() => setEditingMission((v) => !v)}
          className="shrink-0 flex items-center gap-1 rounded-full border border-border/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold"
        >
          <Pencil className="h-2.5 w-2.5" />
          {editingMission ? "Done" : "Change"}
        </button>
      </div>

      {/* Mission picker dropdown */}
      {editingMission && (
        <div className="rounded-xl border border-border/60 bg-background/60 overflow-hidden">
          {MISSION_AREAS.map((m) => (
            <button
              key={m.id}
              onClick={() => {
                dispatch({
                  type: "SET_MODULE_ASSIGNMENT",
                  payload: { moduleId: "lds-missionary", assignmentId: m.id },
                });
                setEditingMission(false);
              }}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-2.5 text-left font-mono text-[11px] border-b border-border/40 last:border-0 transition-colors",
                m.id === assignmentId
                  ? "bg-gold/10 text-gold"
                  : "text-foreground/80 hover:bg-card/80 hover:text-foreground",
              )}
            >
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full shrink-0",
                  m.id === assignmentId ? "bg-gold" : "bg-muted-foreground/30",
                )}
              />
              <span className="truncate">{m.name}</span>
              <span className="ml-auto text-muted-foreground/50 shrink-0">{m.region}</span>
            </button>
          ))}
        </div>
      )}

      {/* Departure date row */}
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/8">
          <Calendar className="h-3.5 w-3.5 text-gold/80" />
        </div>

        {editingDate ? (
          <div className="flex items-center gap-2 flex-1">
            <input
              type="date"
              value={dateInput}
              onChange={(e) => setDateInput(e.target.value)}
              className="flex-1 max-w-[180px] rounded-lg border border-gold/40 bg-background/60 px-3 py-1.5 font-mono text-[12px] text-foreground focus:border-gold/70 focus:outline-none"
              min={new Date().toISOString().slice(0, 10)}
            />
            <button
              onClick={saveDate}
              className="flex items-center gap-1 rounded-full bg-gold px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-midnight"
            >
              <Check className="h-3 w-3" />
              Save
            </button>
            <button
              onClick={() => {
                setDateInput(state.departureDate ?? "");
                setEditingDate(false);
              }}
              className="rounded-full border border-border/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground"
            >
              Cancel
            </button>
          </div>
        ) : departureDate && daysRemaining !== null ? (
          <div className="flex-1 space-y-2">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-base text-gold font-bold">{daysRemaining}</span>
              <span className="font-mono text-[11px] text-foreground/70">
                {daysRemaining === 1 ? "day" : "days"} until the field
              </span>
              <span className="ml-auto font-mono text-[10px] text-muted-foreground">
                {formatDate(departureDate)}
              </span>
              <button
                onClick={() => {
                  setDateInput(departureDate);
                  setEditingDate(true);
                }}
                className="text-muted-foreground/50 hover:text-gold transition-colors"
              >
                <Pencil className="h-3 w-3" />
              </button>
            </div>
            <div className="relative h-1.5 rounded-full bg-border/40 overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-gold transition-all duration-500"
                style={{ width: `${pct}%` }}
              />
            </div>
            <p className="font-mono text-[10px] text-muted-foreground/60">
              {pct}% of your 90-day prep window complete
            </p>
          </div>
        ) : (
          <button
            onClick={() => setEditingDate(true)}
            className="flex items-center gap-2 rounded-full border border-dashed border-gold/30 px-4 py-1.5 font-mono text-[11px] text-muted-foreground transition-colors hover:border-gold/60 hover:text-gold"
          >
            <Calendar className="h-3 w-3" />
            Set your departure date
            <ChevronDown className="h-3 w-3 -rotate-90" />
          </button>
        )}
      </div>
    </div>
  );
}

function daysUntil(dateStr: string): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(dateStr + "T00:00:00");
  return Math.round((target.getTime() - today.getTime()) / 86400000);
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
