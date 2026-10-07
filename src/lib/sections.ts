// lib/sections.ts — decide quais seções condicionais existem (usado pela página para posicionar as ondas).
import { content, ok, STAGING, termoValido } from './content';

type Membro = (typeof content.equipe.membros)[number];

/** Perfil completo: nome, função, formação e status publicável. Em produção exige termo de imagem vigente. */
export const membroPublicavel = (m: Membro): boolean =>
  Boolean(m.nome_exibicao && m.funcao && m.formacao && ok(m.status)) &&
  (STAGING || termoValido(m.foto?.autorizacao));

export const equipeVisivel = (): Membro[] => {
  const ms = content.equipe.membros.filter(membroPublicavel);
  return content.equipe.exibir_secao && ms.length >= 3 ? ms : [];
};

/** Depoimento só real e autorizado; em staging, os fictícios aparecem com selo. */
export const depoimentosVisiveis = () =>
  content.depoimentos.exibir_secao
    ? content.depoimentos.itens.filter((d) => ok(d.status) && (STAGING || (d.autorizacao_escrita && !d.ficticio)))
    : [];

/** Galeria: slots de estrutura. Em produção, só fotos publicáveis com arquivo. */
export const GALERIA_SLOTS = ['estrutura-sala', 'estrutura-patio', 'estrutura-parquinho', 'estrutura-rampa', 'estrutura-fachada'];
export const galeriaVisivel = () => {
  const imgs = GALERIA_SLOTS.map((s) => content.imagens.find((i) => i.slot === s)).filter((i) => i !== undefined);
  return STAGING ? imgs : imgs.filter((i) => i.arquivo && ok(i.status));
};

export const rotinaVisivel = () => content.rotina.passos.some((p) => ok(p.status)) || STAGING;
