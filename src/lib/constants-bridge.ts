export const BETA_FREE_UNTIL = new Date("2026-08-01T00:00:00Z");
export const isBetaFree = (): boolean => new Date() < BETA_FREE_UNTIL;
