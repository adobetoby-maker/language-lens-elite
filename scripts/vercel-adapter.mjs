// Post-build script: produces a Vercel Build Output API v3 artifact.
// Vercel detects .vercel/output/ and deploys it directly — no framework detection needed.
import { mkdirSync, writeFileSync, cpSync, renameSync, readdirSync, readFileSync } from 'fs'
import { join } from 'path'

const out = '.vercel/output'
mkdirSync(`${out}/static`, { recursive: true })
mkdirSync(`${out}/functions/index.func`, { recursive: true })

// Static client assets → served from Vercel's CDN
cpSync('dist/client', `${out}/static`, { recursive: true })

// Server chunks → bundled into the serverless function
cpSync('dist/server', `${out}/functions/index.func`, { recursive: true })

// Vercel's custom module loader ignores package.json type:module.
// Rename all .js → .mjs so Node.js recognises them as ESM by extension.
const funcDir = `${out}/functions/index.func`
const assetsDir = `${funcDir}/assets`

// Rename assets/*.js → assets/*.mjs and collect the mapping
const assetRenames = {}
for (const f of readdirSync(assetsDir)) {
  if (f.endsWith('.js')) {
    const newName = f.replace(/\.js$/, '.mjs')
    renameSync(join(assetsDir, f), join(assetsDir, newName))
    assetRenames[`./assets/${f}`] = `./assets/${newName}`
  }
}

// Patch server.js: replace all asset import paths, then rename to server.mjs
let serverSrc = readFileSync(`${funcDir}/server.js`, 'utf8')
for (const [from, to] of Object.entries(assetRenames)) {
  serverSrc = serverSrc.replaceAll(JSON.stringify(from), JSON.stringify(to))
}
writeFileSync(`${funcDir}/server.mjs`, serverSrc)
renameSync(`${funcDir}/server.js`, `${funcDir}/server.js.bak`)

// CJS wrapper: Vercel's Nodejs launcher loads this as CJS, which then
// dynamically imports the ESM server.mjs (explicit .mjs forces ESM regardless of loader).
// Caches the server module across warm invocations.
writeFileSync(`${out}/functions/index.func/entry.cjs`, `
let _server = null
async function getServer() {
  if (!_server) {
    const m = await import('./server.mjs')
    _server = m.default
  }
  return _server
}

module.exports = async function handler(req, res) {
  const server = await getServer()

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
  handler: 'entry.cjs',
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
