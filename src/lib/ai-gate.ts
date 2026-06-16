import { isBetaFree } from "./constants-bridge";

export const AI_GATE_CALL_KEY = "lt.aiCallCount";
export const AI_GATE_EMAIL_KEY = "lt.emailCaptured";
export const AI_GATE_FREE_LIMIT = 3; // 3rd call triggers the gate

export type GateStatus =
  | "open"            // call is allowed — no gate needed
  | "email-required"  // 3rd call, need email before continuing
  | "paywall";        // post-beta, email captured, no subscription

export function getCallCount(): number {
  try {
    return parseInt(localStorage.getItem(AI_GATE_CALL_KEY) ?? "0", 10) || 0;
  } catch {
    return 0;
  }
}

export function incrementCallCount(): number {
  const next = getCallCount() + 1;
  try {
    localStorage.setItem(AI_GATE_CALL_KEY, String(next));
  } catch {
    // ignore
  }
  return next;
}

export function isEmailCaptured(): boolean {
  try {
    return !!localStorage.getItem(AI_GATE_EMAIL_KEY);
  } catch {
    return false;
  }
}

export function markEmailCaptured(email: string): void {
  try {
    localStorage.setItem(AI_GATE_EMAIL_KEY, email);
  } catch {
    // ignore
  }
}

/**
 * Check whether an AI API call should proceed, show the email gate,
 * or show the paywall. Called BEFORE making any AI API request.
 *
 * Flow:
 *   count < FREE_LIMIT  → open (always)
 *   count >= FREE_LIMIT && !email captured → email-required
 *   count >= FREE_LIMIT && email captured && beta → open
 *   count >= FREE_LIMIT && email captured && !beta → paywall
 *   subscribed → always open (caller checks subscription separately)
 */
export function checkGate(_isSubscribed: boolean): GateStatus {
  // DEMO MODE — AI gate disabled
  return "open";
}
