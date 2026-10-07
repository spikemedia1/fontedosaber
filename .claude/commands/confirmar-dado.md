---
description: Atualiza um dado da escola em content.json com a informação confirmada (ex.: /confirmar-dado endereço Rua G, s/n — confirmado pela secretaria em 10/10)
argument-hint: <campo> <valor confirmado> — <fonte e data>
---

Dado recebido: $ARGUMENTS

1. Encontre o campo correspondente em `src/content/content.json` (busque pelo nome ou pelo assunto; se houver mais de um candidato, pergunte qual).
2. Atualize `valor` com a informação exatamente como recebida (substituindo o valor fictício, se houver), mude `status` para `"confirmado"`, preencha `fonte` com a origem e a data informadas e apague a chave `dossie` desse campo. Se não vier fonte/data, pergunte antes de salvar.
3. Se o dado afetar outro campo (ex.: endereço → `geo`, JSON-LD; WhatsApp → `whatsapp_e164`), mostre o que mais precisa mudar e peça confirmação.
4. Rode `npm run check:conteudo` e informe quantos campos fictícios e quantas pendências obrigatórias restam.

Nunca marque como confirmado um dado que não veio na mensagem.
