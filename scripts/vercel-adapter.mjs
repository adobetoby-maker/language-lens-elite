// Post-build script: produces a Vercel Build Output API v3 artifact.
// Vercel detects .vercel/output/ and deploys it directly — no framework detection needed.
import { mkdirSync, writeFileSync, cpSync } from 'fs'

const out = '.vercel/output'
mkdirSync(`${out}/static`, { recursive: true })
mkdirSync(`${out}/functions/index.func`, { recursive: true })

// Static client assets → served from Vercel's CDN
cpSync('dist/client', `${out}/static`, { recursive: true })

// Server chunks → bundled into the serverless function
cpSync('dist/server', `${out}/functions/index.func`, { recursive: true })

// Required so Node.js treats server.js (and all .js chunks) as ESM
writeFileSync(`${out}/functions/index.func/package.json`, JSON.stringify({ type: 'module' }))

// Thin entry point: adapts Node.js IncomingMessage/ServerResponse to Web Fetch API
// and delegates to the TanStack Start fetch handler.
writeFileSync(`${out}/functions/index.func/entry.mjs`, `
import server from './server.js'

export default async function handler(req, res) {
  const proto = req.headers['x-forwarded-proto'] || 'https'
  const host = req.headers['x-forwarded-host'] || req.headers['host'] || 'localhost'
  const url = proto + '://' + host + req.url

  const body = await new Promise((resolve) => {
    const chunks = []
    req.on('data', c => chunks.push(Buffer.from(c)))
    req.on('end', () => resolve(Buffer.concat(chunks)))
    req.on('error', () => resolve(Buffer.alloc(0)))
  })

  const webRequest = new Request(url, {
    method: req.method,
    headers: Object.fromEntries(
      Object.entries(req.headers)
        .filter(([, v]) => v !== undefined)
        .map(([k, v]) => [k, Array.isArray(v) ? v.join(', ') : String(v)])
    ),
    body: ['GET', 'HEAD'].includes(req.method) ? undefined : (body.length > 0 ? body : undefined),
  })

  const webResponse = await server.fetch(webRequest)

  res.statusCode = webResponse.status
  for (const [k, v] of webResponse.headers.entries()) {
    res.setHeader(k, v)
  }

  const buf = await webResponse.arrayBuffer()
  res.end(Buffer.from(buf))
}
`)

// .vc-config.json: tells Vercel runtime how to invoke the function
writeFileSync(`${out}/functions/index.func/.vc-config.json`, JSON.stringify({
  runtime: 'nodejs22.x',
  handler: 'entry.mjs',
  launcherType: 'Nodejs',
  shouldAddHelpers: true,
}))

// Output config: static asset rules + catch-all to the SSR function
writeFileSync(`${out}/config.json`, JSON.stringify({
  version: 3,
  routes: [
    // Immutable hashed assets
    {
      src: '/assets/(.+)',
      headers: { 'cache-control': 'public, max-age=31536000, immutable' },
      dest: '/assets/$1',
    },
    // Other known static files
    { src: '/favicon\\.svg',            dest: '/favicon.svg' },
    { src: '/manifest\\.webmanifest',   dest: '/manifest.webmanifest' },
    { src: '/sw\\.js',                  dest: '/sw.js' },
    { src: '/icons/(.*)',               dest: '/icons/$1' },
    // Everything else → SSR function
    { src: '/(.*)', dest: '/' },
  ],
}))

console.log('✓ Vercel Build Output API v3 artifact created in .vercel/output/')
