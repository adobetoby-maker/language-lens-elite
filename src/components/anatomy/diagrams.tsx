// SVG anatomy diagrams — Body Parts, Face, Muscles, Organs.
// Each diagram accepts `highlighted` (region id) and optional `onRegion` click handler.
// Regions use a warm ivory fill by default and gold when highlighted.

interface DiagramProps {
  highlighted: string | null;
  onRegion?: (id: string) => void;
  className?: string;
}

function regionFill(id: string, highlighted: string | null) {
  return id === highlighted ? "hsl(var(--gold))" : "hsl(var(--card))";
}
function regionStroke(id: string, highlighted: string | null) {
  return id === highlighted ? "hsl(var(--gold))" : "hsl(var(--border))";
}
function regionProps(
  id: string,
  highlighted: string | null,
  onRegion?: (id: string) => void,
) {
  return {
    fill: regionFill(id, highlighted),
    stroke: regionStroke(id, highlighted),
    strokeWidth: id === highlighted ? 2.5 : 1.2,
    opacity: id === highlighted ? 0.9 : 0.55,
    cursor: onRegion ? "pointer" : "default",
    onClick: onRegion ? () => onRegion(id) : undefined,
    style: { transition: "fill 0.2s, stroke 0.2s, opacity 0.2s" },
  };
}

// ── Body Parts (front view, 200 × 420 viewBox) ──────────────────────────────

export function BodyDiagram({ highlighted, onRegion, className }: DiagramProps) {
  const r = (id: string) => regionProps(id, highlighted, onRegion);
  return (
    <svg viewBox="0 0 200 420" className={className} aria-label="Human body diagram">
      {/* Body silhouette outline */}
      <ellipse cx="100" cy="42" rx="36" ry="40" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="1" opacity="0.15" />
      {/* Head */}
      <ellipse cx="100" cy="42" rx="33" ry="37" {...r("head")} />
      {/* Neck */}
      <rect x="88" y="79" width="24" height="18" rx="4" {...r("neck")} />
      {/* Left Shoulder */}
      <ellipse cx="56" cy="102" rx="22" ry="17" {...r("l-shoulder")} />
      {/* Right Shoulder */}
      <ellipse cx="144" cy="102" rx="22" ry="17" {...r("r-shoulder")} />
      {/* Chest */}
      <rect x="64" y="97" width="72" height="52" rx="6" {...r("chest")} />
      {/* Abdomen */}
      <rect x="66" y="149" width="68" height="48" rx="5" {...r("abdomen")} />
      {/* Hips */}
      <rect x="62" y="197" width="76" height="38" rx="6" {...r("hips")} />
      {/* Left Upper Arm */}
      <rect x="37" y="98" width="22" height="60" rx="8" {...r("l-arm")} />
      {/* Right Upper Arm */}
      <rect x="141" y="98" width="22" height="60" rx="8" {...r("r-arm")} />
      {/* Left Elbow */}
      <ellipse cx="48" cy="162" rx="12" ry="9" {...r("l-elbow")} />
      {/* Right Elbow — shares same "l-elbow" id for simplicity (elbow) */}
      <ellipse cx="152" cy="162" rx="12" ry="9" fill={regionFill("l-elbow", highlighted)} stroke={regionStroke("l-elbow", highlighted)} strokeWidth={highlighted === "l-elbow" ? 2.5 : 1.2} opacity={highlighted === "l-elbow" ? 0.9 : 0.55} style={{ transition: "fill 0.2s" }} />
      {/* Left Forearm */}
      <rect x="35" y="171" width="22" height="50" rx="7" {...r("l-forearm")} />
      {/* Right Forearm */}
      <rect x="143" y="171" width="22" height="50" rx="7" {...r("r-forearm")} />
      {/* Left Hand */}
      <ellipse cx="46" cy="235" rx="14" ry="18" {...r("l-hand")} />
      {/* Right Hand */}
      <ellipse cx="154" cy="235" rx="14" ry="18" {...r("r-hand")} />
      {/* Left Thigh */}
      <rect x="63" y="235" width="34" height="72" rx="8" {...r("l-thigh")} />
      {/* Right Thigh */}
      <rect x="103" y="235" width="34" height="72" rx="8" {...r("r-thigh")} />
      {/* Left Knee */}
      <ellipse cx="80" cy="313" rx="18" ry="11" {...r("l-knee")} />
      {/* Right Knee */}
      <ellipse cx="120" cy="313" rx="18" ry="11" {...r("r-knee")} />
      {/* Left Calf */}
      <rect x="64" y="324" width="32" height="56" rx="8" {...r("l-calf")} />
      {/* Right Calf */}
      <rect x="104" y="324" width="32" height="56" rx="8" {...r("r-calf")} />
      {/* Left Foot */}
      <ellipse cx="80" cy="390" rx="22" ry="12" {...r("l-foot")} />
      {/* Right Foot */}
      <ellipse cx="120" cy="390" rx="22" ry="12" {...r("r-foot")} />
    </svg>
  );
}

// ── Face (200 × 240 viewBox) ─────────────────────────────────────────────────

export function FaceDiagram({ highlighted, onRegion, className }: DiagramProps) {
  const r = (id: string) => regionProps(id, highlighted, onRegion);
  return (
    <svg viewBox="0 0 200 240" className={className} aria-label="Face diagram">
      {/* Head outline */}
      <ellipse cx="100" cy="120" rx="83" ry="108" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="1" opacity="0.12" />
      {/* Left Ear */}
      <ellipse cx="20" cy="120" rx="15" ry="27" {...r("l-ear")} />
      {/* Right Ear */}
      <ellipse cx="180" cy="120" rx="15" ry="27" {...r("r-ear")} />
      {/* Left Temple */}
      <ellipse cx="34" cy="76" rx="18" ry="22" {...r("l-temple")} />
      {/* Right Temple */}
      <ellipse cx="166" cy="76" rx="18" ry="22" {...r("r-temple")} />
      {/* Forehead */}
      <rect x="42" y="22" width="116" height="46" rx="30" {...r("forehead")} />
      {/* Left Eyebrow */}
      <rect x="44" y="70" width="44" height="11" rx="5" {...r("l-eyebrow")} />
      {/* Right Eyebrow */}
      <rect x="112" y="70" width="44" height="11" rx="5" {...r("r-eyebrow")} />
      {/* Left Eye */}
      <ellipse cx="72" cy="96" rx="23" ry="14" {...r("l-eye")} />
      {/* Right Eye */}
      <ellipse cx="128" cy="96" rx="23" ry="14" {...r("r-eye")} />
      {/* Left Cheek */}
      <ellipse cx="52" cy="138" rx="24" ry="20" {...r("l-cheek")} />
      {/* Right Cheek */}
      <ellipse cx="148" cy="138" rx="24" ry="20" {...r("r-cheek")} />
      {/* Nose */}
      <ellipse cx="100" cy="125" rx="16" ry="20" {...r("nose")} />
      {/* Mouth */}
      <ellipse cx="100" cy="163" rx="28" ry="11" {...r("mouth")} />
      {/* Lips */}
      <ellipse cx="100" cy="163" rx="22" ry="8" {...r("lips")} />
      {/* Jaw */}
      <path d="M 44 148 Q 100 210 156 148" fill="none" stroke={regionStroke("jaw", highlighted)} strokeWidth={highlighted === "jaw" ? 3 : 1.5} opacity="0.6" onClick={onRegion ? () => onRegion("jaw") : undefined} cursor={onRegion ? "pointer" : "default"} />
      {/* Jaw clickable area */}
      <ellipse cx="100" cy="178" rx="50" ry="22" fill={regionFill("jaw", highlighted)} stroke="none" opacity="0.3" onClick={onRegion ? () => onRegion("jaw") : undefined} cursor={onRegion ? "pointer" : "default"} />
      {/* Chin */}
      <ellipse cx="100" cy="204" rx="28" ry="20" {...r("chin")} />
    </svg>
  );
}

// ── Muscle Groups (200 × 420 viewBox) ───────────────────────────────────────

export function MuscleDiagram({ highlighted, onRegion, className }: DiagramProps) {
  const r = (id: string) => regionProps(id, highlighted, onRegion);
  return (
    <svg viewBox="0 0 200 420" className={className} aria-label="Muscle groups diagram">
      {/* Silhouette */}
      <ellipse cx="100" cy="42" rx="36" ry="40" fill="hsl(var(--muted))" stroke="none" opacity="0.12" />
      <rect x="64" y="82" width="72" height="120" rx="6" fill="hsl(var(--muted))" stroke="none" opacity="0.12" />
      {/* Trapezius (neck/upper back) */}
      <path d="M 80 82 Q 100 72 120 82 L 130 100 Q 100 94 70 100 Z" {...r("trapezius")} />
      {/* Left Deltoid */}
      <ellipse cx="54" cy="102" rx="20" ry="17" {...r("l-deltoid")} />
      {/* Right Deltoid */}
      <ellipse cx="146" cy="102" rx="20" ry="17" {...r("r-deltoid")} />
      {/* Pectorals */}
      <rect x="68" y="100" width="64" height="42" rx="5" {...r("pectorals")} />
      {/* Left Bicep */}
      <rect x="37" y="106" width="20" height="42" rx="8" {...r("l-bicep")} />
      {/* Right Bicep */}
      <rect x="143" y="106" width="20" height="42" rx="8" {...r("r-bicep")} />
      {/* Left Tricep (behind, slightly wider/offset) */}
      <rect x="34" y="110" width="16" height="36" rx="7" {...r("l-tricep")} />
      {/* Right Tricep */}
      <rect x="150" y="110" width="16" height="36" rx="7" {...r("r-tricep")} />
      {/* Abdominals */}
      <rect x="74" y="144" width="52" height="46" rx="4" {...r("abdominals")} />
      {/* Left Oblique */}
      <rect x="62" y="148" width="16" height="40" rx="4" {...r("l-oblique")} />
      {/* Right Oblique */}
      <rect x="122" y="148" width="16" height="40" rx="4" {...r("r-oblique")} />
      {/* Left Glute */}
      <ellipse cx="78" cy="210" rx="18" ry="17" {...r("l-glute")} />
      {/* Right Glute */}
      <ellipse cx="122" cy="210" rx="18" ry="17" {...r("r-glute")} />
      {/* Latissimus (back side visible on sides) */}
      <rect x="62" y="130" width="12" height="55" rx="5" {...r("latissimus")} />
      <rect x="126" y="130" width="12" height="55" rx="5" fill={regionFill("latissimus", highlighted)} stroke={regionStroke("latissimus", highlighted)} strokeWidth={highlighted === "latissimus" ? 2.5 : 1.2} opacity={highlighted === "latissimus" ? 0.9 : 0.55} style={{ transition: "fill 0.2s" }} />
      {/* Left Quad */}
      <rect x="65" y="228" width="32" height="70" rx="8" {...r("l-quad")} />
      {/* Right Quad */}
      <rect x="103" y="228" width="32" height="70" rx="8" {...r("r-quad")} />
      {/* Left Hamstring (same area, different quiz label) */}
      <rect x="64" y="230" width="30" height="65" rx="8" {...r("l-hamstring")} />
      {/* Right Hamstring */}
      <rect x="106" y="230" width="30" height="65" rx="8" {...r("r-hamstring")} />
      {/* Left Calf/Gastro */}
      <rect x="66" y="310" width="28" height="56" rx="8" {...r("l-gastro")} />
      {/* Right Calf/Gastro */}
      <rect x="106" y="310" width="28" height="56" rx="8" {...r("r-gastro")} />
    </svg>
  );
}

// ── Internal Organs (180 × 310 viewBox) ─────────────────────────────────────

export function OrganDiagram({ highlighted, onRegion, className }: DiagramProps) {
  const r = (id: string) => regionProps(id, highlighted, onRegion);
  return (
    <svg viewBox="0 0 180 310" className={className} aria-label="Internal organs diagram">
      {/* Torso outline */}
      <rect x="20" y="50" width="140" height="240" rx="30" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="1" opacity="0.1" />
      {/* Head (for brain) */}
      <ellipse cx="90" cy="30" rx="44" ry="36" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="1" opacity="0.12" />
      {/* Brain */}
      <ellipse cx="90" cy="28" rx="36" ry="26" {...r("brain")} />
      {/* Thyroid (neck area) */}
      <rect x="74" y="60" width="32" height="16" rx="6" {...r("thyroid")} />
      {/* Right Lung (patient's right = viewer's left) */}
      <ellipse cx="62" cy="118" rx="30" ry="52" {...r("r-lung")} />
      {/* Left Lung (patient's left = viewer's right) */}
      <ellipse cx="118" cy="118" rx="30" ry="52" {...r("l-lung")} />
      {/* Heart (center-left chest) */}
      <ellipse cx="82" cy="112" rx="20" ry="23" {...r("heart")} />
      {/* Liver (right side abdomen) */}
      <ellipse cx="66" cy="183" rx="32" ry="24" {...r("liver")} />
      {/* Gallbladder (under liver) */}
      <ellipse cx="72" cy="204" rx="12" ry="9" {...r("gallbladder")} />
      {/* Stomach (left side) */}
      <ellipse cx="112" cy="182" rx="22" ry="19" {...r("stomach")} />
      {/* Spleen (far left) */}
      <ellipse cx="44" cy="178" rx="14" ry="18" {...r("spleen")} />
      {/* Pancreas (behind stomach) */}
      <rect x="72" y="200" width="54" height="14" rx="6" {...r("pancreas")} />
      {/* Left Kidney (right side of diagram) */}
      <ellipse cx="126" cy="210" rx="14" ry="20" {...r("l-kidney")} />
      {/* Right Kidney (left side of diagram) */}
      <ellipse cx="54" cy="210" rx="14" ry="20" {...r("r-kidney")} />
      {/* Small Intestine (center) */}
      <ellipse cx="90" cy="240" rx="28" ry="24" {...r("sm-intestine")} />
      {/* Large Intestine (frame around small) */}
      <rect x="32" y="218" width="116" height="58" rx="20" fill="none" stroke={regionStroke("lg-intestine", highlighted)} strokeWidth={highlighted === "lg-intestine" ? 3 : 1.5} opacity="0.6" onClick={onRegion ? () => onRegion("lg-intestine") : undefined} cursor={onRegion ? "pointer" : "default"} />
      {/* Large Intestine fill area */}
      <ellipse cx="90" cy="248" rx="42" ry="32" fill={regionFill("lg-intestine", highlighted)} stroke="none" opacity="0.25" onClick={onRegion ? () => onRegion("lg-intestine") : undefined} cursor={onRegion ? "pointer" : "default"} />
      {/* Bladder (bottom) */}
      <ellipse cx="90" cy="284" rx="22" ry="16" {...r("bladder")} />
    </svg>
  );
}
