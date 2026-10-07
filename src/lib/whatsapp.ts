// lib/whatsapp.ts — links wa.me com mensagem pronta. Número e mensagem vêm de content.json.
import { content, get } from './content';

export const WA_NUMBER: string | undefined = get<string>(content.contato.whatsapp_e164);
export const WA_MSG: string = get<string>(content.contato.mensagem_padrao_whatsapp) ?? '';

/** Mensagem padrão, com a etapa de interesse quando houver. */
export const waText = (etapa?: string): string =>
  etapa ? `${WA_MSG} Tenho interesse em: ${etapa}.` : WA_MSG;

/** https://wa.me/<e164>?text=<mensagem>. Sem número publicável, aponta para a seção de localização. */
export const waLink = (etapa?: string): string =>
  WA_NUMBER ? `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waText(etapa))}` : '#onde';
