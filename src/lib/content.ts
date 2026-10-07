// lib/content.ts — única porta de entrada dos dados da escola (src/content/content.json).
// Regra de publicação:
//   "confirmado"                        → renderiza sempre
//   "ficticio"                          → renderiza só em dev/staging (modo teste)
//   "provavel" | "confirmar" | "preencher" | outros
//                                       → staging: <span class="pending">[PREENCHER/CONFIRMAR: …]</span>
//                                         produção: opcional some; obrigatório já barrou o build (check-content.mjs)
import data from '../content/content.json';

export const content = data;

// process.env lido via globalThis: funciona no build (Node) sem depender de @types/node
const nodeEnv = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env ?? {};

export const STAGING: boolean =
  import.meta.env.DEV ||
  import.meta.env.PUBLIC_STAGING === 'true' ||
  nodeEnv.PUBLIC_STAGING === 'true';

export type Status = string | undefined | null;

/** O status pode ser publicado neste ambiente? */
export const ok = (status: Status): boolean =>
  status === 'confirmado' || (STAGING && status === 'ficticio');

/** Status estritamente confirmado (para JSON-LD e metadados, nunca fictício). */
export const confirmed = (status: Status): boolean => status === 'confirmado';

/** Rótulo do placeholder conforme o status. */
export const pendingLabel = (status: Status, label: string): string => {
  const kind = status === 'preencher' || !status ? 'PREENCHER' : 'CONFIRMAR';
  return `[${kind}: ${label}]`;
};

type Field<T = unknown> = { valor?: T; status?: string } | undefined | null;

/** Valor do campo se publicável; senão undefined. */
export function get<T>(f: Field<T>): T | undefined {
  return f && ok(f.status) ? (f.valor as T) : undefined;
}

/** Existe qualquer dado fictício no content.json? (liga a faixa "Site de teste") */
function hasFicticio(node: unknown): boolean {
  if (Array.isArray(node)) return node.some(hasFicticio);
  if (!node || typeof node !== 'object') return false;
  return Object.entries(node as Record<string, unknown>).some(([k, v]) =>
    k === 'dossie' || k === '_meta'
      ? false
      : (k.startsWith('status') && v === 'ficticio') || (k === 'ficticio' && v === true) || hasFicticio(v),
  );
}
export const DEMO: boolean = STAGING && hasFicticio(data);

/** Data ISO (AAAA-MM-DD) → "3 de novembro de 2026". */
export const dataPorExtenso = (iso: string): string =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });

/** "a · b · c" → ["a", "b", "c"] */
export const lista = (s: string | undefined): string[] =>
  (s ?? '').split('·').map((x) => x.trim()).filter(Boolean);

/** Hoje em AAAA-MM-DD (para validade de termos de imagem). */
export const hoje = (): string => new Date().toISOString().slice(0, 10);

/** Termo de imagem assinado e vigente? */
export const termoValido = (a: { termo_assinado?: boolean; valido_ate?: string | null } | null | undefined): boolean =>
  Boolean(a?.termo_assinado && a.valido_ate && a.valido_ate >= hoje());
