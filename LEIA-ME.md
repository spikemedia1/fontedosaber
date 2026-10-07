# Escola Fonte do Saber — projeto do site

```
Fonte do saber/
├─ CLAUDE.md                  ← regras que o Claude Code lê sozinho em toda sessão
├─ PROMPT-INICIAL.md          ← cole no Claude Code para começar a construir
├─ LEIA-ME.md                 ← este arquivo
├─ package.json · astro.config.mjs · tsconfig.json · .gitignore
├─ comandos-claude/           ← /validar · /revisar-conformidade · /confirmar-dado
│                               (o Claude Code move para .claude/commands/ no 1º passo)
├─ design/
│  ├─ DESIGN-SYSTEM.md        ← o design system completo
│  ├─ preview.html            ← prévia de todos os componentes (abrir no navegador)
│  ├─ previa-desktop-mobile.png
│  ├─ tokens.json · tailwind.tokens.js
│  └─ referencias/            ← as 5 referências (só consulta)
├─ src/
│  ├─ styles/                 ← tokens.css + components.css (já prontos)
│  ├─ content/content.json    ← todos os dados da escola, com status
│  ├─ components/ · layouts/ · pages/ · lib/ · scripts/   ← o Claude Code preenche
│  └─ assets/fotos · assets/marca                          ← imagens já tratadas
├─ scripts/                   ← check-content.mjs (trava) + build.mjs
├─ public/                    ← robots.txt · docs/ (PDF do contrato)
└─ _materiais-da-escola/      ← tudo que a escola mandar (não vai pro site nem pro GitHub)
   ├─ pendencias-para-a-escola.md   ← lista para enviar à escola
   ├─ fotos-originais/ · marca/ · documentos/
```

## Modo teste (agora)

O `content.json` está preenchido com **dados fictícios** para o site parecer pronto: valores, horários, equipe, depoimentos, FAQ, endereço, contrato de exemplo (`public/docs/proposta-contrato-2027-EXEMPLO.pdf`) e brasão provisório. O site mostra a faixa **"Site de teste — dados fictícios"** e o `npm run build` de produção **se recusa** a publicar enquanto existir qualquer dado fictício.

- **WhatsApp de teste é inválido (DDD 00).** Para testar o botão de verdade, troque em `content.json → contato` pelo **seu** número — não pelo da escola.
- CNPJ, INEP, e-mail e ato de autorização usam valores que não pertencem a ninguém (`00.000.000/0000-00`, `@….example`).
- Não mostre o link de teste para pais nem coloque na bio do Instagram: os preços e nomes são inventados.
- Para trocar um dado fictício pelo real: `/confirmar-dado` no Claude Code.

## Próximos passos

1. **Mande para a escola** o arquivo `_materiais-da-escola/pendencias-para-a-escola.md`.
2. **Abra esta pasta no Claude Code** e cole o conteúdo do `PROMPT-INICIAL.md` (ou escreva: `leia o PROMPT-INICIAL.md e execute`). Ele instala o Astro, inicia o git e constrói o site com placeholders.
3. Quando a escola responder, use `/confirmar-dado` para cada informação (ex.: `/confirmar-dado WhatsApp (87) 99931-9123 — confirmado pela secretaria em 12/10`).
4. Fotos e brasão vão em `_materiais-da-escola/`; peça ao Claude Code para tratar e mover para `src/assets/`.
5. Antes de publicar: `/revisar-conformidade` e `/validar`.

## Comandos

| Comando | O que faz |
|---|---|
| `npm run dev` | Abre o site no navegador local, com os placeholders `[PREENCHER]` visíveis |
| `npm run build:staging` | Gera a versão para mostrar à escola (placeholders visíveis, fora do Google) |
| `npm run build` | Gera a versão final. **Falha de propósito** enquanto faltar dado obrigatório |
| `npm run check:conteudo` | Lista o que ainda falta confirmar |

Na Vercel, os deploys de preview viram staging automaticamente; só a produção passa pelas travas.
