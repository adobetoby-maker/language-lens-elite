import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Deploying to Vercel — disable the Cloudflare Workers build adapter.
// TanStack Start will output a standard Node.js server to .output/server/index.mjs
export default defineConfig({ cloudflare: false });
