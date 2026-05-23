import { supabase } from "@/integrations/supabase/client";

function getSessionId(): string {
  try {
    let id = sessionStorage.getItem("lt.analytics.session");
    if (!id) {
      id = crypto.randomUUID();
      sessionStorage.setItem("lt.analytics.session", id);
    }
    return id;
  } catch {
    return "anon";
  }
}

type Json = Record<string, unknown>;

// Fire-and-forget: swallow all errors so analytics never break the UI
async function fire(table: string, payload: Json) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (supabase as any).from(table).insert(payload);
  } catch {
    // silent — analytics must not affect product
  }
}

export const ltAnalytics = {
  fieldPrepSession(data: {
    scenarioId: string;
    language: string;
    missionArea?: string;
    exchangesCount: number;
    feedbackRequestedCount: number;
    usedVoice: boolean;
    durationSeconds: number;
    completed: boolean;
  }) {
    fire("lt_field_prep_events", {
      session_id: getSessionId(),
      scenario_id: data.scenarioId,
      language: data.language,
      mission_area: data.missionArea ?? null,
      exchanges_count: data.exchangesCount,
      feedback_requested_count: data.feedbackRequestedCount,
      used_voice: data.usedVoice,
      duration_seconds: data.durationSeconds,
      completed: data.completed,
    });
  },

  appEvent(
    eventType: string,
    extras?: { language?: string; missionArea?: string; metadata?: Json },
  ) {
    fire("lt_app_events", {
      session_id: getSessionId(),
      event_type: eventType,
      language: extras?.language ?? null,
      mission_area: extras?.missionArea ?? null,
      metadata: extras?.metadata ?? null,
    });
  },

  async submitFeedback(data: {
    feedbackType: "field_prep_session" | "general" | "review";
    rating?: number;
    comment?: string;
    scenarioId?: string;
    language?: string;
    missionArea?: string;
  }) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = await (supabase as any).from("lt_feedback").insert({
      session_id: getSessionId(),
      feedback_type: data.feedbackType,
      rating: data.rating ?? null,
      comment: data.comment ?? null,
      scenario_id: data.scenarioId ?? null,
      language: data.language ?? null,
      mission_area: data.missionArea ?? null,
    });
    return result;
  },

  errorLog(errorType: string, message: string, context?: Json) {
    fire("lt_error_logs", {
      session_id: getSessionId(),
      error_type: errorType,
      message,
      context: context ?? null,
    });
  },
};
