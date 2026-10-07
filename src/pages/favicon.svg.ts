// /favicon.svg gerado a partir do brasão em content.json → marca.logo_vetor (sem metadados).
import type { APIRoute } from 'astro';
import { content } from '../lib/content';

const files = import.meta.glob<string>('/src/assets/marca/*.svg', { query: '?raw', import: 'default', eager: true });

export const GET: APIRoute = () => {
  const raw = files[`/${content.marca.logo_vetor.valor}`] ?? Object.values(files)[0] ?? '';
  const svg = raw
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<metadata>[\s\S]*?<\/metadata>/g, '')
    .replace(/\s+xmlns:\w+="[^"]*"/g, '')
    .replace(/\s(?:role|aria-label)="[^"]*"/g, '')
    .trim();
  return new Response(svg, { headers: { 'Content-Type': 'image/svg+xml' } });
};
