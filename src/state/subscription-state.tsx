import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/state/auth-state";

export type SubscriptionStatus = "active" | "trialing" | "canceled" | "none";

interface SubscriptionContextValue {
  status: SubscriptionStatus;
  loading: boolean;
  isActive: boolean;
  refresh: () => Promise<void>;
}

const Ctx = createContext<SubscriptionContextValue | null>(null);

export function SubscriptionProvider({ children }: { children: ReactNode }) {
  const { user, loading: authLoading } = useAuth();
  const [status, setStatus] = useState<SubscriptionStatus>("none");
  const [loading, setLoading] = useState(true);

  const load = useCallback(async (userId: string | null) => {
    if (!userId) {
      setStatus("none");
      setLoading(false);
      return;
    }
    try {
      const { data } = await supabase
        .from("profiles")
        .select("data")
        .eq("id", userId)
        .single();
      const s = (data?.data as Record<string, unknown>)?.subscription_status;
      setStatus((s as SubscriptionStatus) ?? "none");
    } catch {
      setStatus("none");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (authLoading) return;
    setLoading(true);
    load(user?.id ?? null);
  }, [user?.id, authLoading, load]);

  const refresh = useCallback(async () => {
    if (user?.id) await load(user.id);
  }, [user?.id, load]);

  const isActive = status === "active" || status === "trialing";

  const value = useMemo<SubscriptionContextValue>(
    () => ({ status, loading, isActive, refresh }),
    [status, loading, isActive, refresh],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

const fallback: SubscriptionContextValue = {
  status: "none",
  loading: false,
  isActive: false,
  refresh: async () => {},
};

// eslint-disable-next-line react-refresh/only-export-components
export function useSubscription() {
  return useContext(Ctx) ?? fallback;
}
