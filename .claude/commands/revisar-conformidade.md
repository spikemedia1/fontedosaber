---
description: Revisão de conformidade (imagens de crianças, promessas, LGPD, preços, homônimos) antes de entregar
---

Revise TODO o código em `src/` e o HTML gerado (rode `npm run build:staging` antes) contra a seção "Conformidade" do `CLAUDE.md` e a §11 de `design/DESIGN-SYSTEM.md`.

Verifique, item a item:
1. Toda imagem passa por `SafeImage`; nenhuma foto com rosto de aluno sem `termo_assinado` + `valido_ate` vigente; nenhum nome de criança em texto, alt ou nome de arquivo.
2. Nenhum apelo direto à criança, brinde ou personagem usado para vender.
3. Nenhuma promessa de resultado, superlativo ou comparação.
4. Seção de depoimentos não renderiza com lista vazia; nenhum texto de exemplo.
5. Bloco de matrículas: valores por etapa, outros custos, vagas por turma, link da proposta de contrato, nota dos 45 dias; nenhum "a partir de".
6. Inclusão "sem cobrança adicional" só aparece se o campo estiver confirmado.
7. Formulário: só 3 campos, consentimento desmarcado, checkbox de novidades separado e opcional, sem dados da criança/saúde, envio só por `wa.me`; página `/privacidade` existe com contato do encarregado.
8. Rodapé com razão social, CNPJ, INEP, ato de autorização, etapas autorizadas, endereço, privacidade, Instagram oficial.
9. Nenhuma infraestrutura não confirmada (piscina, biblioteca, auditório, laboratório, quadra) nem alegação de segurança.
10. Nenhum link/menção a homônimos; WhatsApp antigo ausente.
11. Contraste: nenhum texto branco sobre laranja/amarelo; nenhuma cor fora dos tokens.

MODO TESTE: dados com status "ficticio" são esperados em staging; confira só se a faixa "Site de teste" aparece em todas as páginas, se depoimentos/equipe fictícios têm o selo "Exemplo fictício" e se nenhuma foto de criança (real ou de IA) foi usada.

Corrija direto o que for problema de código. O que depender da escola, apenas aponte.
Entregue uma tabela: item | aprovado / ajustado / pendente | arquivo:linha | o que foi feito.
