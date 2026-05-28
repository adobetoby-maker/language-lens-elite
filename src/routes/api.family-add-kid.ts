import { createFileRoute } from "@tanstack/react-router";
import { createClient } from "@supabase/supabase-js";

function kidEmail(username: string) {
  return `${username.toLowerCase().replace(/[^a-z0-9]/g, "")}@kids.languagethreshold.app`;
}

export const Route = createFileRoute("/api/family-add-kid")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const url = process.env.SUPABASE_URL;
        const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
        if (!url || !key) {
          return new Response(JSON.stringify({ error: "Server not configured." }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }

        const body = (await request.json()) as { parentId?: string; username?: string; pin?: string };
        const { parentId, username, pin } = body;

        if (!parentId || !username || !pin) {
          return new Response(JSON.stringify({ error: "Missing fields." }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }
        if (username.trim().length < 2) {
          return new Response(JSON.stringify({ error: "Username must be at least 2 characters." }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }
        if (!/^\d{4}$/.test(pin)) {
          return new Response(JSON.stringify({ error: "PIN must be exactly 4 digits." }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        const admin = createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } });

        const email = kidEmail(username.trim());
        const { data, error } = await admin.auth.admin.createUser({
          email,
          password: pin,
          user_metadata: {
            display_name: username.trim(),
            is_kid: true,
            parent_id: parentId,
          },
          email_confirm: true,
        });

        if (error) {
          const msg = error.message.includes("already been registered")
            ? "That username is already taken."
            : error.message;
          return new Response(JSON.stringify({ error: msg }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        return new Response(JSON.stringify({ id: data.user.id, username: username.trim() }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      },
    },
  },
});
