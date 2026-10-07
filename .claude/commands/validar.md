---
description: Roda as travas de conteúdo e conformidade e resume o que ainda falta para publicar
---

1. Rode `npm run check:conteudo`. Agrupe as pendências por bloco (escola, contato, etapas, rotina, matrículas, privacidade) e diga, em 1 linha cada, o que a escola precisa enviar.
2. Rode `npm run build:staging` e confirme que compila sem erro. Se falhar, corrija o código (não o conteúdo).
3. Rode `npm run build` (produção). É ESPERADO falhar enquanto houver dado fictício (modo teste) ou obrigatório pendente: explique o motivo e confirme que a falha veio da trava, não de bug.
4. Se existir `dist/`, rode `npm run check:html` e liste qualquer termo proibido, homônimo ou placeholder encontrado.
5. Termine com uma tabela: bloco | itens pendentes | quem resolve (escola ou código).

Nunca mude campos de `src/content/content.json` para "confirmado" nesta tarefa.
