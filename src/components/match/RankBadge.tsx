import { type CSSProperties } from "react";
import { RANK_COLOR, type RankTier } from "@/state/match-state";

const SIZE_PX: Record<NonNullable<RankBadgeProps["size"]>, number> = {
  xs: 14,
  sm: 20,
  md: 32,
  lg: 56,
  xl: 96,
};

interface RankBadgeProps {
  tier: RankTier;
  badge: string; // emoji
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  intense?: boolean; // bigger ring + spin
  className?: string;
}

export function RankBadge({
  tier,
  badge,
  size = "md",
  intense = false,
  className = "",
}: RankBadgeProps) {
  const px = SIZE_PX[size];
  const color = RANK_COLOR[tier];
  const isUnreal = tier === "Unreal";

  const style: CSSProperties = isUnreal
    ? {}
    : ({
        // Custom property consumed by .rank-glow keyframes
        ["--rank-color" as any]: color,
        textShadow: `0 0 ${px * 0.3}px ${color}, 0 0 ${px * 0.6}px ${color}80`,
      } as CSSProperties);

  return (
    <span
      aria-label={`${tier} rank badge`}
      className={`inline-flex items-center justify-center leading-none ${
        isUnreal ? "rank-glow-rainbow" : "rank-glow"
      } ${intense ? "rank-glow-intense" : ""} ${className}`}
      style={{ ...style, width: px, height: px, fontSize: px * 0.85 }}
    >
      {badge}
    </span>
  );
}
