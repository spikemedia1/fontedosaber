# Escola Fonte do Saber — Landing de Matrículas 2027

Landing page de uma escola particular pequena de Jupi-PE (Educação Infantil + Fundamental anos iniciais).
**Objetivo único:** o pai/mãe clicar em "Agendar visita" (abre o WhatsApp). O público é o **responsável**, não a criança.
Detalhes completos: `design/DESIGN-SYSTEM.md` (consulte antes de qualquer decisão visual, de texto ou de conformidade).

## Stack e comandos

- Astro (saída estática) + CSS puro com custom properties + JS vanilla mínimo. Sem React/Vue/Tailwind no cliente.
- O projeto **já está estruturado**: NÃO rode `npm create astro`. Na primeira vez: `npm install astro @fontsource-variable/nunito @fontsource-variable/nunito-sans @fontsource/caveat`.
- `npm run dev` → servidor local (mostra placeholders `[PREENCHER]`).
- `npm run build:staging` → build com placeholders visíveis e `noindex` (para mostrar à escola).
- `npm run build` → build de produção: roda `check-content.mjs content` → `astro build` → `check-content.mjs dist`. **Falha de propósito** enquanto houver dado obrigatório não confirmado. Em preview da Vercel (`VERCEL_ENV` ≠ production) vira staging automaticamente.
- `npm run check:conteudo` → lista o que falta confirmar.
- Comandos do projeto: `/validar`, `/revisar-conformidade`, `/confirmar-dado` (em `.claude/commands/`). Se ainda estiverem em `comandos-claude/`, mova-os para `.claude/commands/` e apague essa pasta.

## MODO TESTE (estado atual)

O site está em **teste**: `src/content/content.json` foi preenchido com **dados fictícios** (status `"ficticio"`; o valor antigo do dossiê, quando existia, está em `"dossie"`).
- Em dev/staging, campo `"ficticio"` renderiza **normalmente** (sem o chip `[PREENCHER]`).
- Enquanto existir qualquer `"ficticio"`, mostrar no topo de todas as páginas a faixa `<div class="demo-banner" data-demo role="note">Site de teste — dados fictícios. Não compartilhe com as famílias.</div>`.
- Depoimentos e perfis da equipe fictícios levam o selo `<span class="badge badge--demo" data-demo>Exemplo fictício</span>`.
- Fotos continuam como slot "Foto pendente" (não usar foto de banco nem imagem de IA de crianças). Brasão: `src/assets/marca/brasao-placeholder.svg` (escudo genérico, não é o logo real).
- WhatsApp de teste é inválido de propósito (DDD 00). Para testar o fluxo, o usuário troca pelo número DELE; nunca usar o da escola nos testes.
- Staging sempre com `<meta name="robots" content="noindex, nofollow">`.
- Nunca copie números, links ou textos de dados de `design/preview.html` ou do `DESIGN-SYSTEM.md`: todo dado vem de `content.json`.
- `npm run build` (produção) **recusa** qualquer dado fictício; não contorne a trava.

## Onde fica cada coisa (fontes da verdade)

| Caminho | Conteúdo |
|---|---|
| `src/styles/tokens.css` | Tokens (cores, tipografia, espaço, raios, sombras, movimento). Único lugar com valores visuais. |
| `src/styles/components.css` | Componentes BEM prontos (botão, hero, cards, FAQ, formulário, rodapé…). |
| `src/content/content.json` | **Todos** os dados da escola, cada um com `status`. Nunca escrever dado da escola direto no HTML. |
| `scripts/check-content.mjs` | Trava de conformidade (modo `content` e `dist`). |
| `scripts/build.mjs` | Build multiplataforma (produção/staging). |
| `design/preview.html` | Esqueleto HTML de referência com todos os componentes e estados. |
| `design/referencias/` | 5 referências visuais. Só para consultar ritmo/acabamento. **Nunca copiar.** |
| `_materiais-da-escola/` | Material bruto enviado pela escola. Nunca publicar direto daqui. |
| `src/assets/fotos`, `src/assets/marca` | Imagens já tratadas (sem EXIF/GPS) usadas pelo site via `astro:assets`. |
| `public/docs/` | PDF da proposta de contrato 2027 (quando a escola enviar). |

Arquitetura planejada: `src/components/` (Topbar, Nav, Hero, Wave, StageCard, Feature, Timeline, TeamCard, Gallery, EventCard, Testimonials, Enroll, Faq, VisitForm, Location, Footer, WaFab, StickyCta, CookieBanner, Pending, SafeImage), `src/layouts/Base.astro`, `src/lib/content.ts`, `src/lib/whatsapp.ts`, `src/pages/index.astro`, `src/pages/privacidade.astro`, `src/scripts/site.js`.

## Regras de código

- Só `var(--*)` dos tokens. Nada de HEX, px ou ms soltos em componente (exceções: 0, 100%, fr, auto, currentColor).
- Nomenclatura BEM igual à de `components.css`. Reaproveite as classes existentes antes de criar novas.
- `lib/content.ts`: `get(campo)` devolve o valor se `status === "confirmado"` (ou `"ficticio"` em dev/staging). Em dev/staging (`import.meta.env.DEV` ou `process.env.PUBLIC_STAGING === "true"`), campo não confirmado vira `<span class="pending">[PREENCHER: …]</span>`; em produção, opcional é ocultado e obrigatório já terá barrado o build.
- Texto escuro (`--color-on-primary`) sobre laranja/amarelo. **Nunca branco sobre laranja ou amarelo.**
- Mobile-first; testar em 390, 768 e 1280px; sem rolagem horizontal; alvos de toque ≥ 48px; navegação completa por teclado.
- Performance: 1ª carga ≤ 300 KB, página ≤ 1 MB, JS ≤ 10 KB, imagens AVIF/WebP com `width`/`height`, hero com `fetchpriority="high"`, demais `loading="lazy"`.
- Sem emojis no site. `lang="pt-BR"`. 1 H1, sem pular níveis de título.

### Movimento (`src/styles/motion.css` + `@component reveal` em `components.css` + `site.js`)

- Só CSS + IntersectionObserver. Nenhuma biblioteca de animação (GSAP, AOS, Lenis, Framer…). JS de animação ≤ 2 KB.
- Animar só `transform` e `opacity`. Exceções aceitas: `background-size` do marca-texto `.hl`, `block-size` do FAQ (`::details-content`) e `stroke-dashoffset` do "check" do formulário. Nunca `width`, `height`, `top`, `margin`.
- Só tokens de movimento (`--duration-*`, `--ease-*`, `--reveal-distance*`, `--stagger*`…). Valor novo vira token em `tokens.css` e é zerado no bloco `prefers-reduced-motion`.
- Cada elemento anima uma vez; nada em loop (exceto o spinner). Proibido: parallax, scroll-jacking, carrossel automático, piscar, contador numérico, mudar a altura do header, animar a faixa "Site de teste".
- Sem JS ou com `prefers-reduced-motion: reduce`: tudo visível e parado (estado escondido só dentro de `.js` + `@media (prefers-reduced-motion: no-preference)`). Foco pelo Tab revela na hora (`:focus-within`).
- H1, texto e botões do hero nunca começam escondidos (LCP). Grades escalonam com `style="--i: n"` e teto `--stagger-max`; celular usa `--reveal-distance-sm`.
- Recursos novos (`animation-timeline`, `::details-content`, `@view-transition`) só dentro de `@supports`/melhoria progressiva; sem suporte, o site fica como antes.

## Conformidade (inegociável)

1. **Foto de aluno** só via `SafeImage`: renderiza se `tem_rosto_de_aluno=false` OU (`termo_assinado=true` e `valido_ate` ≥ hoje). Senão, slot "Foto pendente de autorização". Nunca nome de criança.
2. Falar com os pais. Nada de apelo direto à criança, brinde ou personagem como isca.
3. Sem promessa de resultado, superlativo ou comparação ("a melhor", "garantido", "lendo em X meses", "melhor que a pública").
4. Depoimentos só reais e autorizados; seção não renderiza se a lista estiver vazia.
5. Matrículas: valores **por etapa**, outros custos, vagas por turma e proposta de contrato, publicados ≥ 45 dias antes do fim das matrículas (Lei 9.870/99). Nunca "a partir de" sem etapa.
6. Inclusão "sem cobrança adicional" só depois de a escola confirmar como funciona o apoio.
7. Formulário: só nome do responsável, WhatsApp e etapa; consentimento obrigatório **desmarcado** + checkbox separado e opcional para novidades; envio = abrir `wa.me` (nada armazenado). Sem Pixel/GA por padrão.
8. Rodapé com razão social, CNPJ, INEP, ato de autorização, etapas autorizadas, endereço, privacidade, encarregado de dados, Instagram oficial (@esc_fontedosaber).
9. **Nunca** mostrar/mencionar: piscina, biblioteca, auditório, laboratório, quadra, portaria, câmeras, "escola segura", prêmios, notas, resultados, faixa de preços de portal.
10. **Nunca** linkar homônimos: Facebook "esc.fontedosaber" (Fortaleza), Reclame Aqui (ABC), "Colégio Fonte do Saber", Fonte do Saber de Surubim.
11. WhatsApp antigo (87) 9910-7675 nunca aparece.

## Dados

- Fora do modo teste, nunca invente ou "complete" dado da escola. Se faltar, deixe o placeholder e avise. Os dados fictícios atuais já estão em `content.json`; não crie outros fora dele.
- Só mude um campo de `content.json` para `"confirmado"` quando o usuário trouxer a informação vinda da escola (use `/confirmar-dado`).

## Fluxo de trabalho

tokens → base → layout → componentes → seções na ordem da §4 do DESIGN-SYSTEM → página → polimento (imagens, SEO, JSON-LD, Lighthouse).
A cada 2 seções: rodar `npm run dev`, conferir 390/768/1280px e teclado. Antes de entregar: `/revisar-conformidade` e `/validar`.
Não adicione bibliotecas além das citadas sem perguntar.
