// scripts/build.mjs — build único e multiplataforma (Windows, Linux, Vercel)
// Produção:  check-content (content) -> astro build -> check-content (dist)
// Staging:   placeholders [PREENCHER] visíveis + noindex, sem as travas
//            (npm run build:staging, PUBLIC_STAGING=true, ou preview da Vercel)
import { spawnSync } from 'node:child_process';

const staging =
  process.argv.includes('--staging') ||
  process.env.PUBLIC_STAGING === 'true' ||
  (process.env.VERCEL_ENV !== undefined && process.env.VERCEL_ENV !== 'production');

const env = { ...process.env, PUBLIC_STAGING: staging ? 'true' : 'false' };

const run = (cmd, args) => {
  const r = spawnSync(cmd, args, { stdio: 'inherit', shell: true, env });
  if (r.status !== 0) process.exit(r.status ?? 1);
};

console.log(staging
  ? '\n▶ Build de STAGING (placeholders visíveis, noindex, sem travas)\n'
  : '\n▶ Build de PRODUÇÃO (com travas de conformidade)\n');

if (!staging) run('node', ['scripts/check-content.mjs', 'content']);
run('npx', ['astro', 'build']);
if (!staging) run('node', ['scripts/check-content.mjs', 'dist']);
