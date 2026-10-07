// /sitemap.xml — só lista URLs quando houver domínio real em content.json → seo.url_canonica.
// Em staging/teste sai vazio (e o staging ainda tem noindex).
import type { APIRoute } from 'astro';
import { content, STAGING } from '../lib/content';

export const GET: APIRoute = () => {
  const base = /^https?:\/\//.test(content.seo.url_canonica) ? content.seo.url_canonica.replace(/\/$/, '') : undefined;
  const urls = base && !STAGING ? ['/', '/privacidade'].map((p) => `<url><loc>${base}${p}</loc></url>`).join('') : '';
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
