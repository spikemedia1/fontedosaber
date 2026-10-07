# Design System — Escola Fonte do Saber · Landing de Matrículas 2027

**Versão 1.0 · 07/10/2026** · Base: 5 referências visuais anexadas + dossiê do usuário (consultado em 05/10/2026).
**Arquivos deste pacote:** `DESIGN-SYSTEM.md` (este), `tokens.css`, `tokens.json`, `tailwind.tokens.js`, `content.json`, `components.css`, `preview.html` (prévia de staging com todos os componentes).
> **Neste projeto:** `tokens.css` e `components.css` estão em `src/styles/`, `content.json` em `src/content/`, `check-content.mjs` em `scripts/`. Para começar a implementação use o `PROMPT-INICIAL.md` da raiz (é o prompt-mestre da §12 adaptado a esta estrutura). **Modo teste ativo:** `content.json` está com dados fictícios (status `"ficticio"`), exibidos só em dev/staging com a faixa "Site de teste"; a produção os bloqueia.

**Legenda de origem:** [REF n] referência visual · [DOSSIÊ] dossiê · [INFERIDO] dedução a partir do que se vê · [ESTIMADO] medida/HEX aproximado · [SUGESTÃO MINHA] decisão de design sem base direta.

> Nenhuma pergunta prévia foi necessária: as lacunas críticas (HEX oficiais, etapas exatas, valores) viram placeholders `[PREENCHER]`/`[CONFIRMAR]` sem bloquear o sistema. Suposições declaradas na §14.

---

## RESUMO EXECUTIVO

1. **Assinatura visual:** laranja da escola como cor de toda ação (botão com "sombra de adesivo"), faixa dupla laranja+amarela do fardamento, fundo creme quente, títulos Nunito ExtraBold com uma palavra em marca-texto amarelo, ondas suaves "da fonte" entre seções, brasão FS sempre visível, faixa navy de Matrículas.
2. **Referência dominante:** [REF 5] (Bright Future) para estrutura e conversão — é a única que fala com pais, tem brasão, WhatsApp no topo, cards de turma com idade e faixa "Admissions Open". Acabamento de [REF 2]; funil de matrícula de [REF 1]; ondas de [REF 3]; selo sobre foto e top bar de [REF 4].
3. **Marca preservada:** laranja (#F5891F [ESTIMADO]) e amarelo (#FFCB2B [ESTIMADO]) são as cores da marca; o navy entra só como âncora de confiança (texto, faixa de matrículas, rodapé), derivado de [REF 1][REF 5] e dos toques de azul que a escola já usa [DOSSIÊ]. Roxo [REF 3] e teal [REF 2][REF 4] descartados.
4. **Contraste resolvido por regra:** branco sobre laranja falha (2,48:1). Por isso o CTA é **texto escuro sobre laranja (6,36:1, AA)** e laranja como texto só no tom 800 (7,11:1).
5. **Conformidade embutida:** foto de aluno só renderiza com flag de autorização; depoimentos ocultos até existirem reais; build de produção falha se houver dado `provavel/confirmar/preencher` obrigatório (`content.json` + `check-content.mjs`); formulário com 3 campos e consentimento não pré-marcado, que só abre o WhatsApp (nada é armazenado).
6. **Principais lacunas:** HEX/vetor do brasão, endereço oficial (2 versões), anos do fundamental (4º ou 5º), idades das turmas, valores 2027, ato de autorização, procedimento de entrada/saída, atendimento de inclusão, fotos autorizadas.

---

# PARTE A — ANÁLISE (FASES 1–3)

## FASE 1 — INVENTÁRIO DAS REFERÊNCIAS

| Ref | O que é | O mais forte | Padrões que contém | Ilegível / limite |
|---|---|---|---|---|
| **1** | "Horizon Academy" (Vietnã): 2 telas mobile/tablet (home + página de admissões) em mockup fotografado | Credibilidade (navy + dourado, títulos serifados) e **funil de matrícula completo**: 4 passos numerados → formulário → "agendar visita ao campus" → FAQ | Hero com 2 CTAs (inscrever / visitar), linha de ícones de valores, ícones de etapas (Mầm non → THPT), galeria de espaços com legenda, faixa escura com CTA, passos 01–04, formulário com ícones nos campos, FAQ em lista | Textos de corpo (pequenos demais); rodapé de crédito da agência |
| **2** | "EduLearn": landing de plataforma de professores substitutos (não é escola) | Acabamento: off-white quente, blocos bento teal + laranja, rabiscos à mão (sublinhado, estrelas, setas), cards cinza com botão-seta no canto | Hero dividido 50/50, sublinhado manuscrito sob palavra-chave, cards de serviço com ícone + "↗", bento de números (3k+, 300+, 48+), depoimentos com estrelas, grid de blog, faixa CTA teal, rodapé escuro | Metade direita (2ª página cortada) e textos de corpo |
| **3** | "KiddyLand": template de pré-escola | Energia e alegria: divisores em **onda/nuvem**, programas com ícone colorido + faixa etária, faixas roxas alternadas | Hero roxo com criança recortada em anel, chips de valores, contadores (12+, 200+, 5K+, 10+), grade de programas 2×3 com idade, checklist com ícones verdes, faixa "Admissions Open", carrossel de galeria, faixa rosa de depoimento, notícias, rodapé roxo | Textos de corpo; ícones pequenos |
| **4** | "eduka": template genérico de educação (texto lorem ipsum, marca d'água de site de temas) | Top bar de informações, 4 cards numerados sobrepostos ao hero, **máscaras orgânicas** nas fotos + selo "30 Years", faixa de números teal com ícones em gotas laranja | Hero com foto + overlay escuro + setas de slider, "About" com colagem de fotos, faixa de estatísticas, cards de cursos | Coluna direita (miniatura da página inteira) ilegível; todo o texto é lorem ipsum |
| **5** | "Bright Future Public School" (Paquistão): home de escola | **Clareza e conversão para pais**: top bar navy (endereço, telefone, e-mail), brasão + tagline, botão "WhatsApp Us" amarelo no header, cards de turma com idade, faixa navy "Admissions Open" | Hero com foto + degradê navy à esquerda, 5 valores com ícone em linha, "About" com foto do prédio + checklist + frase manuscrita, linha de 7 ícones de estrutura, 6 cards de turma, galeria 4 fotos, depoimento com avatar, rodapé navy 4 colunas | Rodapé (texto pequeno) |

**Cores medidas por amostragem de pixels** (script Python/PIL; arquivos comprimidos → tolerância ±3%) [REF n]:

| Ref | Fundo | Cor dominante | Ação / destaque | Outras |
|---|---|---|---|---|
| 1 | `#FCFCF6` creme | `#001E42` / `#0A223D` navy | `#F0C678` dourado | `#CDBBA5` bege |
| 2 | `#F8F7F3` off-white | `#317971` teal | `#F69C06` laranja | `#EFEFEF` card cinza |
| 3 | `#FEFEFE` branco | `#3C1AA6` / `#4E1EAE` roxo (≈26% da área) | `#FCB41E` amarelo | `#F33090` rosa, `#ACE8A0` verde |
| 4 | `#FFFFFF` | `#286E63` teal | `#FCA218` laranja | `#1B2F56` navy |
| 5 | `#FEFEFE` + `#EDF4FB` azul-claro | `#063C66` / `#06305A` navy | `#FCCC30` amarelo | — |

> Achado útil: 3 das 5 referências ([REF 2] `#F69C06`, [REF 3] `#FCB41E`, [REF 4] `#FCA218`) já usam laranja/âmbar como cor de ação. A marca laranja da escola encaixa naturalmente nesse vocabulário.

---

## FASE 2 — ANÁLISE DAS REFERÊNCIAS

### 2.1 Por referência

| Dimensão | REF 1 Horizon | REF 2 EduLearn | REF 3 KiddyLand | REF 4 eduka | REF 5 Bright Future |
|---|---|---|---|---|---|
| **Sensação** | Sério, premium, institucional (navy + serifa + dourado) | Leve, moderno, "feito à mão" (rabiscos + off-white) | Festivo, infantil, barulhento (roxo saturado + recortes) | Genérico, "template" (lorem ipsum, overlay escuro) | Confiável, claro, familiar (navy + amarelo + fotos de escola) |
| **Cores / proporção** | ~60 creme, ~30 navy, ~10 dourado | ~70 off-white/cinza, ~20 teal, ~10 laranja | ~45 branco, ~35 roxo, ~20 amarelo/rosa/verde | ~60 branco, ~25 teal, ~15 laranja/navy | ~55 branco/azul-claro, ~35 navy, ~10 amarelo |
| **Tipografia** | Display serifada de alto contraste (parecida com Playfair) [INFERIDO]; corpo sans | Grotesca bold, tracking apertado; palavra-chave com sublinhado manuscrito | Sans geométrica bold (parecida com Poppins) [INFERIDO]; palavra colorida no título | Sans geométrica bold; palavra laranja no título | Sans geométrica bold; 2ª linha do H1 em amarelo; script em "Small Steps Big Dreams" |
| **H1 estimado** (escalado p/ 1440px) | ~44px mobile [ESTIMADO] | ~58px [ESTIMADO] | ~44px [ESTIMADO] | ~48px [ESTIMADO] | ~44px [ESTIMADO] |
| **Grid / layout** | Coluna única (mobile), cards empilhados | 12 col, hero 50/50, bento assimétrico | Blocos alternados texto/imagem, 2×3 | 12 col, cards sobrepostos ao hero | Container ~88% da largura (~1200px a 1440) [ESTIMADO], linhas de ícones |
| **Ritmo vertical** | Denso (~40px entre seções) [ESTIMADO] | Arejado (~90px) [ESTIMADO] | Médio, separado por ondas | Médio (~70px) | Compacto (~56px) [ESTIMADO] |
| **Componentes-chave** | Passos 01–04, formulário, FAQ, faixa escura | Card com "↗", bento de números, rabiscos | Lista de programas com idade, contadores, ondas | Cards numerados, selo sobre foto, faixa de números | Botão WhatsApp no header, cards de turma com idade, faixa de admissão |
| **Superfícies** | Raio ~12px, sombra leve | Raio ~16–20px, sem sombra, cinza chapado | Raio ~20px, nuvens/ondas, anéis | Raio ~24px + blobs | Raio ~8px, bordas finas, sombra mínima |
| **Imagens** | Fotos reais, alunos de uniforme com rosto | Recortes (cutouts) de crianças de banco | Recortes de crianças + ilustração | Fotos de banco com overlay | Fotos de alunos com rosto, prédio |
| **Ícones** | Traço fino, monocromático | Traço 2px dentro de card | Ícone preenchido em quadrado colorido | Ícone branco em gota laranja | Traço/preenchido navy |
| **Movimento** | Nenhum visível | Nenhum visível | Setas/pontos → carrossel [INFERIDO] | Setas de slider → carrossel [INFERIDO] | Pontos → carrossel de depoimentos [INFERIDO] |
| **Tom / microcopy** | Aspiracional ("chuẩn mực", "toàn cầu" = padrão, global) | Corporativo-amigável | Fala com a criança ("Fun & Engaging") | Lorem ipsum | Fala com pais ("Your child's safety is our priority", "Parent Partnership") |

### 2.2 Em comum (o que define o "gênero")

- Header com logo à esquerda, menu central, **CTA em pílula à direita** (4/5 refs).
- H1 curto com **uma palavra/linha destacada em cor** (5/5).
- **Linha de 3–5 valores com ícone** logo abaixo do hero (4/5).
- **Cards de etapa/turma com faixa etária** ([REF 1][REF 3][REF 5]).
- **Faixa de "matrículas abertas"** em cor escura ou forte com CTA de alto contraste ([REF 1][REF 3][REF 5]).
- Galeria de 4 fotos com legenda (4/5), depoimento (4/5), rodapé escuro em 3–4 colunas (5/5).
- Sem animação visível; carrosséis inferidos em 3/5.

### 2.3 Conflitos e decisões

| Conflito | Decisão | Descartado |
|---|---|---|
| Cor de confiança: navy [REF 1][REF 5] × teal [REF 2][REF 4] × roxo [REF 3] | **Navy** — combina com laranja (complementar), a escola já usa azul em artes [DOSSIÊ] e transmite seriedade aos pais | Teal e roxo como cores estruturais |
| Display serifada [REF 1] × sans arredondada (artes da escola) | **Sans arredondada** (Nunito) — a marca usa letras arredondadas [DOSSIÊ] | Serifa |
| Hero com texto sobre foto + overlay [REF 4][REF 5] × hero dividido [REF 2][REF 3] | **Hero dividido** texto/imagem — contraste garantido e permite foto sem aluno | Overlay escuro sobre foto |
| Crianças recortadas/rostos no hero [REF 2][REF 3][REF 5] | **Proibido por padrão** (ECA/LGPD) — foto de estrutura ou ilustração | Recortes e rostos |
| Contadores "12+ anos, 5K alunos" [REF 3][REF 4] | Só com dado confirmado; componente oculto por padrão | Números de exemplo |
| Galerias com biblioteca/laboratório/quadra [REF 1][REF 5] | Só espaços confirmados (salas, pátio, parquinho, rampas) | Qualquer espaço não confirmado |
| "Safe Environment"/CCTV [REF 5] | Não usar segurança como diferencial (Censo indica ausência) | Selo de segurança |
| Carrossel automático [REF 3][REF 4] | Conteúdo estático; sem autoplay (acessibilidade e peso) | Sliders |
| Botão retangular raio 6px [REF 2] × pílula [REF 3][REF 4][REF 5] | **Pílula** (mais amigável, alvo de toque maior) | Retângulo |
| Copy para a criança [REF 3] | Copy para pais (CDC/CONANDA) | "Fun & Engaging" e afins |

---

## FASE 3 — AUDITORIA DA MARCA ATUAL

| PRESERVAR | MODERNIZAR | EVITAR |
|---|---|---|
| Laranja dominante + amarelo + branco [DOSSIÊ] | HEX estimados viram escala de 10 tons com regras de contraste | Laranja como cor de texto pequeno (falha AA) |
| Brasão FS com faixa "Educação Infantil & Ensino Fundamental – Jupi – Pernambuco" | Usar o brasão sem alterar; fundo creme/navy para destacá-lo; versão monocromática para favicon [SUGESTÃO MINHA] | Redesenhar ou "simplificar" o brasão sem a escola pedir |
| Slogan "Aprendizagem com diversão, alegria e amor!" | Vira H1 e assinatura do rodapé | Trocar por slogan inventado |
| Letras arredondadas e manuscritas | Arredondada no título (Nunito), manuscrita só em frases curtas (Caveat) | Manuscrita em parágrafo, botão ou formulário |
| Fardamento branco com faixas laranja e amarela | **Faixa dupla laranja+amarela** como elemento gráfico (topo, rodapé, eyebrow) | — |
| Tom afetuoso ("Tia" + nome) | Mantido nos cards de equipe e legendas, sempre com função/formação ao lado | Emojis no site; tom infantilizado nos títulos |
| Fotos reais de celular | Briefing de fotos com luz, ângulo e sem rostos (§7) | Banco de imagens "americano" |
| Rosa e azul em datas | Só na seção Eventos, como selo (≤3% da página) | Rosa/azul fora de Eventos |

**Assinatura visual (8 traços — se tirar, deixa de ser Fonte do Saber + referências):**

1. **CTA laranja com texto escuro e sombra sólida "adesivo"** (`0 4px 0 #8A4208`) [SUGESTÃO MINHA].
2. **Faixa do fardamento**: 3px laranja + 3px amarelo no topo, no rodapé e antes de cada eyebrow [DOSSIÊ].
3. **Fundo creme quente** `#FFFBF4` alternando com areia `#FBF3E7` [REF 1][REF 2].
4. **Títulos Nunito ExtraBold/Black** com **1 palavra em marca-texto amarelo** [REF 2 reinterpretado].
5. **Frase manuscrita curta** (Caveat, laranja-800) no máx. 1 por seção [REF 5][DOSSIÊ].
6. **Ondas suaves "da fonte"** entre seções e **máscara orgânica** na foto do hero [REF 3][REF 4] — ligadas ao nome "Fonte".
7. **Brasão FS** sempre visível (navbar + rodapé) [DOSSIÊ][REF 5].
8. **Faixa navy de Matrículas 2027** com CTA amarelo e formulário ao lado [REF 5][REF 1].

---

# PARTE B — DESIGN SYSTEM

## 1. VISÃO GERAL

### 1.1 Princípios

| # | Princípio | Faça | Não faça |
|---|---|---|---|
| 1 | **Fale com o responsável** | "Venha conhecer a escola com seu filho" | "Criançada, venham brincar!" |
| 2 | **Mostre, não prometa** | Descrever rotina, método, estrutura confirmada | "Seu filho lendo em 6 meses", "a melhor de Jupi" |
| 3 | **WhatsApp é o caminho** | CTA "Agendar visita" a cada 2 seções + barra fixa no celular | Formulário longo, "matricule já" |
| 4 | **Laranja age, navy assegura** | Laranja só em ação/destaque; navy em texto, faixa de matrícula e rodapé | Laranja em tudo; branco sobre laranja |
| 5 | **Alegre sem infantilizar** | 1 marca-texto + 1 frase manuscrita por seção, ondas suaves | Personagens, arco-íris, 5 cores por seção |
| 6 | **Leve para 4G fraco** | ≤ 1 MB na 1ª carga, sem carrossel, mapa sob demanda | Vídeo de fundo, iframe do Maps na carga, fontes em excesso |
| 7 | **Dado pendente é visível, nunca inventado** | `[PREENCHER]` em staging; build bloqueia em produção | Texto "plausível" no lugar do dado real |

### 1.2 Referência dominante e convivência com a marca

[REF 5] define **estrutura** (ordem das seções, header com WhatsApp, cards de etapa com idade, faixa de matrícula). [REF 2] define **acabamento** (fundo quente, cards sem borda dura, rabiscos/marca-texto). A **marca** define **cor e voz**: onde [REF 5] usa amarelo como CTA, usamos o **laranja** da escola; o amarelo vira apoio (marca-texto, selos, CTA sobre navy). O navy de [REF 5] é mantido só como "âncora de confiança", nunca como cor principal.

---

## 2. FUNDAÇÕES (TOKENS)

> Fonte da verdade: `tokens.css`. Os 3 formatos (CSS, JSON DTCG, Tailwind) foram **gerados pelo mesmo script**, então não divergem. Contrastes **calculados** pela fórmula WCAG 2.x de luminância relativa.

### 2.1 Cores

**Primitivas**

| Família | Passos (HEX) | Origem |
|---|---|---|
| cream | 50 `#FFFBF4` | [REF 1][REF 2] fundos #FCFCF6/#F8F7F3 → aquecido p/ marca |
| white | base `#FFFFFF` | — |
| sand | 100 `#FBF3E7` · 200 `#F3E6D3` · 300 `#E6D4BC` | [REF 2] cards #EFEFEF/#EAE9E6 → aquecido [ESTIMADO] |
| ink | 400 `#7C8595` · 500 `#5B6577` · 700 `#34425A` · 900 `#14233B` | [SUGESTÃO MINHA] navy-tinta derivado de [REF 5] |
| orange | 50 `#FFF5EA` · 100 `#FFE6CC` · 200 `#FFCD99` · 300 `#FFB366` · 400 `#FB9D3B` · 500 `#F5891F` · 600 `#DB6E0A` · 700 `#B25607` · 800 `#8A4208` · 900 `#5C2D07` | [DOSSIÊ] laranja dominante · HEX [ESTIMADO]; refs usam #F69C06 [REF 2], #FCA218 [REF 4] |
| yellow | 50 `#FFFAE6` · 100 `#FFF1BF` · 200 `#FFE58A` · 300 `#FFD84F` · 400 `#FFCB2B` · 500 `#F2B705` | [DOSSIÊ] amarelo do fardamento · [ESTIMADO]; [REF 5] #FCCC30, [REF 3] #FCB41E |
| navy | 50 `#EEF4FB` · 100 `#D8E5F4` · 200 `#B0C9E7` · 300 `#7FA5D3` · 400 `#4E7DB9` · 500 `#2E5F9E` · 600 `#1F4A85` · 700 `#173B6C` · 800 `#112E56` · 900 `#0B2140` | [REF 5] #063C66/#06305A · [REF 1] #001E42 · [DOSSIÊ] toques de azul |
| pink | 100 `#FDE4EF` · 400 `#EE5C98` · 700 `#A82860` | [DOSSIÊ] rosa em datas · [REF 3] #F33090 (dessaturado) |
| sky | 100 `#E0F0FB` · 400 `#3FA3E0` · 700 `#1A6AA3` | [DOSSIÊ] azul em datas · [SUGESTÃO MINHA] |
| green | 100 `#E3F5EA` · 700 `#17633A` | [SUGESTÃO MINHA] estado de sucesso |
| red | 100 `#FDE8E6` · 700 `#A1281A` | [SUGESTÃO MINHA] estado de erro |
| wa-green | 500 `#128C7E` · 600 `#0F7A6E` | Verde secundário oficial do WhatsApp (#128C7E) — passa 3:1 com ícone branco |

**Semânticas** (componentes usam SOMENTE estas)

| Token | Aponta para | HEX | Uso |
|---|---|---|---|
| `--color-bg` | `cream.50` | #FFFBF4 | Fundo da página (60% da área) |
| `--color-bg-alt` | `sand.100` | #FBF3E7 | Fundo de seção alternada |
| `--color-surface` | `white.base` | #FFFFFF | Cards, formulário, menus |
| `--color-surface-brand` | `orange.50` | #FFF5EA | Faixas/cards de destaque da marca |
| `--color-surface-highlight` | `yellow.100` | #FFF1BF | Avisos suaves, marca-texto de fundo |
| `--color-surface-dark` | `navy.800` | #112E56 | Faixa Matrículas e rodapé |
| `--color-surface-dark-alt` | `navy.900` | #0B2140 | Barra inferior do rodapé |
| `--color-text` | `ink.900` | #14233B | Títulos e texto forte |
| `--color-text-body` | `ink.700` | #34425A | Texto corrido |
| `--color-text-muted` | `ink.500` | #5B6577 | Legendas, apoio (mín. 14px) |
| `--color-text-on-dark` | `white.base` | #FFFFFF | Texto sobre navy |
| `--color-text-on-dark-muted` | `navy.100` | #D8E5F4 | Texto de apoio sobre navy |
| `--color-text-brand` | `orange.800` | #8A4208 | Eyebrow e texto laranja pequeno |
| `--color-text-brand-lg` | `orange.700` | #B25607 | Texto laranja só >= 24px ou >= 18.66px bold |
| `--color-text-accent-on-dark` | `yellow.400` | #FFCB2B | Destaque de palavra sobre navy |
| `--color-link` | `navy.700` | #173B6C | Links no texto (sempre sublinhados) |
| `--color-link-hover` | `navy.900` | #0B2140 | Link hover |
| `--color-border` | `sand.300` | #E6D4BC | Bordas decorativas de cards |
| `--color-border-subtle` | `sand.200` | #F3E6D3 | Divisores internos |
| `--color-border-strong` | `ink.400` | #7C8595 | Borda de inputs (>= 3:1) |
| `--color-primary` | `orange.500` | #F5891F | Fundo do CTA principal |
| `--color-primary-hover` | `orange.600` | #DB6E0A | CTA hover/active |
| `--color-primary-shadow` | `orange.800` | #8A4208 | Sombra sólida 'adesivo' do CTA |
| `--color-on-primary` | `ink.900` | #14233B | Texto sobre laranja (nunca branco) |
| `--color-secondary` | `navy.700` | #173B6C | Botão secundário (contorno/texto) |
| `--color-secondary-hover-bg` | `navy.50` | #EEF4FB | Fundo hover do secundário |
| `--color-on-secondary` | `white.base` | #FFFFFF | Texto sobre navy sólido |
| `--color-accent` | `yellow.400` | #FFCB2B | Marca-texto, selos, CTA sobre navy |
| `--color-on-accent` | `ink.900` | #14233B | Texto sobre amarelo (nunca branco) |
| `--color-success` | `green.700` | #17633A | Mensagem de sucesso |
| `--color-success-bg` | `green.100` | #E3F5EA | Fundo de sucesso |
| `--color-warning` | `orange.800` | #8A4208 | Aviso |
| `--color-warning-bg` | `yellow.100` | #FFF1BF | Fundo de aviso |
| `--color-danger` | `red.700` | #A1281A | Erro de formulário |
| `--color-danger-bg` | `red.100` | #FDE8E6 | Fundo de erro |
| `--color-info` | `navy.700` | #173B6C | Informação |
| `--color-info-bg` | `navy.50` | #EEF4FB | Fundo de informação |
| `--color-focus` | `navy.600` | #1F4A85 | Anel de foco em fundo claro |
| `--color-focus-on-dark` | `yellow.400` | #FFCB2B | Anel de foco em fundo navy |
| `--color-whatsapp` | `wa-green.500` | #128C7E | Botão flutuante WhatsApp |
| `--color-whatsapp-hover` | `wa-green.600` | #0F7A6E | Hover do flutuante |
| `--color-on-whatsapp` | `white.base` | #FFFFFF | Ícone sobre verde WhatsApp |
| `--color-event-pink` | `pink.700` | #A82860 | Texto de selo rosa (só Eventos) |
| `--color-event-pink-bg` | `pink.100` | #FDE4EF | Fundo de selo rosa (só Eventos) |
| `--color-event-sky` | `sky.700` | #1A6AA3 | Texto de selo azul-céu (só Eventos) |
| `--color-event-sky-bg` | `sky.100` | #E0F0FB | Fundo de selo azul-céu (só Eventos) |
| `--color-pending` | `orange.800` | #8A4208 | Texto do placeholder [PREENCHER] (só staging) |
| `--color-pending-bg` | `yellow.100` | #FFF1BF | Fundo do placeholder [PREENCHER] (só staging) |

**Proporção na página (60/30/10)** [SUGESTÃO MINHA]

| Fatia | Cores | Onde |
|---|---|---|
| 60% | `bg` creme, `bg-alt` areia, `surface` branco | Fundos de seção e cards |
| 30% | Laranja (CTAs, faixas, ícones, `surface-brand`) + navy (faixa Matrículas, rodapé, top bar) | ~20% laranja / ~10% navy |
| 10% | Amarelo (marca-texto, selos, CTA sobre navy) + rosa/azul-céu (≤3%, só Eventos) | Destaques |

**Tabela de contraste WCAG (calculada)**

| Texto / elemento | Fundo | Razão | Nível | Uso permitido |
|---|---|---|---|---|
| `ink.900` #14233B | `cream.50` #FFFBF4 | 15.27:1 | AAA | Títulos sobre fundo da página |
| `ink.700` #34425A | `cream.50` #FFFBF4 | 9.82:1 | AAA | Texto corrido |
| `ink.700` #34425A | `sand.100` #FBF3E7 | 9.20:1 | AAA | Texto corrido em seção alternada |
| `ink.500` #5B6577 | `cream.50` #FFFBF4 | 5.70:1 | AA | Texto de apoio |
| `ink.500` #5B6577 | `sand.100` #FBF3E7 | 5.34:1 | AA | Texto de apoio em seção alternada |
| `ink.500` #5B6577 | `white.base` #FFFFFF | 5.88:1 | AA | Texto de apoio em card |
| `ink.900` #14233B | `orange.500` #F5891F | 6.36:1 | AA | CTA principal (texto escuro sobre laranja) |
| `ink.900` #14233B | `orange.600` #DB6E0A | 4.69:1 | AA | CTA principal em hover |
| `ink.900` #14233B | `orange.100` #FFE6CC | 13.08:1 | AAA | Texto em superfície laranja clara |
| `orange.800` #8A4208 | `cream.50` #FFFBF4 | 7.11:1 | AAA | Eyebrow/texto laranja pequeno |
| `orange.800` #8A4208 | `orange.50` #FFF5EA | 6.81:1 | AA | Texto laranja em superfície da marca |
| `orange.800` #8A4208 | `sand.100` #FBF3E7 | 6.66:1 | AA | Eyebrow em seção alternada |
| `orange.700` #B25607 | `cream.50` #FFFBF4 | 4.82:1 | AA | Texto laranja GRANDE (≥24px ou ≥18.66px bold) |
| `orange.700` #B25607 | `white.base` #FFFFFF | 4.97:1 | AA | Texto laranja GRANDE em card |
| `ink.900` #14233B | `yellow.400` #FFCB2B | 10.37:1 | AAA | Selo/botão amarelo |
| `ink.900` #14233B | `yellow.100` #FFF1BF | 13.94:1 | AAA | Aviso/placeholder |
| `orange.800` #8A4208 | `yellow.100` #FFF1BF | 6.49:1 | AA | Texto de aviso/[PREENCHER] |
| `white.base` #FFFFFF | `navy.800` #112E56 | 13.56:1 | AAA | Texto na faixa Matrículas/rodapé |
| `navy.100` #D8E5F4 | `navy.800` #112E56 | 10.61:1 | AAA | Texto de apoio no rodapé |
| `yellow.400` #FFCB2B | `navy.800` #112E56 | 8.93:1 | AAA | Palavra destacada sobre navy |
| `orange.500` #F5891F | `navy.800` #112E56 | 5.47:1 | AA | Palavra laranja sobre navy (≥18px) |
| `ink.900` #14233B | `yellow.400` #FFCB2B | 10.37:1 | AAA | Botão amarelo na faixa navy |
| `white.base` #FFFFFF | `navy.700` #173B6C | 11.18:1 | AAA | Botão navy sólido |
| `navy.700` #173B6C | `cream.50` #FFFBF4 | 10.84:1 | AAA | Links e botão secundário |
| `navy.700` #173B6C | `navy.50` #EEF4FB | 10.10:1 | AAA | Botão secundário hover |
| `pink.700` #A82860 | `pink.100` #FDE4EF | 5.58:1 | AA | Selo rosa (Eventos) |
| `sky.700` #1A6AA3 | `sky.100` #E0F0FB | 4.96:1 | AA | Selo azul-céu (Eventos) |
| `ink.900` #14233B | `pink.100` #FDE4EF | 13.14:1 | AAA | Texto escuro em selo rosa |
| `green.700` #17633A | `green.100` #E3F5EA | 6.42:1 | AA | Mensagem de sucesso |
| `red.700` #A1281A | `red.100` #FDE8E6 | 6.30:1 | AA | Mensagem de erro (bloco) |
| `red.700` #A1281A | `white.base` #FFFFFF | 7.41:1 | AAA | Texto de erro abaixo do campo |
| `ink.400` #7C8595 | `white.base` #FFFFFF | 3.72:1 | OK (UI ≥3:1) | Borda de input sobre card |
| `ink.400` #7C8595 | `cream.50` #FFFBF4 | 3.61:1 | OK (UI ≥3:1) | Borda de input sobre fundo |
| `navy.600` #1F4A85 | `cream.50` #FFFBF4 | 8.57:1 | OK (UI ≥3:1) | Anel de foco em fundo claro |
| `navy.600` #1F4A85 | `orange.500` #F5891F | 3.57:1 | OK (UI ≥3:1) | Anel de foco encostado no laranja |
| `yellow.400` #FFCB2B | `navy.800` #112E56 | 8.93:1 | OK (UI ≥3:1) | Anel de foco em fundo navy |
| `white.base` #FFFFFF | `wa-green.500` #128C7E | 4.14:1 | OK (UI ≥3:1) | Ícone branco no botão WhatsApp |
| `wa-green.500` #128C7E | `cream.50` #FFFBF4 | 4.01:1 | OK (UI ≥3:1) | Botão WhatsApp contra o fundo |
| `orange.800` #8A4208 | `cream.50` #FFFBF4 | 7.11:1 | OK (UI ≥3:1) | Sombra sólida do CTA contra o fundo |

**Combinações PROIBIDAS (falham AA para texto):**

| Texto | Fundo | Razão | Motivo |
|---|---|---|---|
| `white.base` #FFFFFF | `orange.500` #F5891F | 2.48:1 | Branco sobre laranja da marca |
| `white.base` #FFFFFF | `orange.600` #DB6E0A | 3.36:1 | Branco sobre laranja hover |
| `orange.500` #F5891F | `cream.50` #FFFBF4 | 2.40:1 | Laranja da marca como texto |
| `orange.600` #DB6E0A | `cream.50` #FFFBF4 | 3.26:1 | Laranja 600 como texto pequeno |
| `white.base` #FFFFFF | `yellow.400` #FFCB2B | 1.52:1 | Branco sobre amarelo |
| `yellow.400` #FFCB2B | `cream.50` #FFFBF4 | 1.47:1 | Amarelo como texto |
| `white.base` #FFFFFF | `#25D366` #25D366 | 1.98:1 | Branco sobre verde WhatsApp claro (#25D366) |
| `sand.300` #E6D4BC | `cream.50` #FFFBF4 | 1.40:1 | Borda areia como única borda de input |

**Regras de cor obrigatórias**

- Texto sobre laranja ou amarelo: **sempre `--color-on-primary`/`--color-on-accent` (#14233B)**. Nunca branco.
- Laranja como texto: `--color-text-brand` (#8A4208) em qualquer tamanho; `--color-text-brand-lg` (#B25607) só ≥ 24px ou ≥ 18,66px bold.
- Amarelo nunca é texto sobre fundo claro (1,47:1). Sobre navy, pode (8,93:1).
- Bordas de campos de formulário: `--color-border-strong` (3,61:1). A areia `#E6D4BC` é só decorativa.
- Selo azul-céu: o primeiro tom testado (#1C74B0) dava 4,32:1 sobre `sky-100` — falhava. Ajustado para **#1A6AA3 (4,96:1)**.
- Verde do WhatsApp: o verde claro oficial `#25D366` com ícone branco dá 1,98:1. Usamos o verde secundário oficial **#128C7E** (4,14:1 com ícone branco; 4,01:1 contra o fundo).

**Modo escuro:** **não implementar** [SUGESTÃO MINHA]. Landing de página única, público que chega pelo Instagram/WhatsApp em horário diurno, marca baseada em laranja sobre creme; o custo (dobrar testes de contraste, fotos, brasão em 2 versões) não se paga. Declarar `color-scheme: light` (já está em `tokens.css`).

### 2.2 Tipografia

**Identificação das fontes das referências:** não identifiquei nenhuma com certeza. Pela anatomia: [REF 1] display serifada de alto contraste; [REF 2] grotesca bold de abertura estreita; [REF 3][REF 4][REF 5] sans geométrica com "o" circular e "a" de dois andares (família tipo Poppins/Montserrat) [INFERIDO]. A fonte oficial da escola é [NÃO ENCONTRADO].

| Papel | Escolha | Candidatas (Google Fonts, OFL) | Por quê (anatomia) |
|---|---|---|---|
| **Display** (H1–H4) | **Nunito** 700/800/900 | 1. **Nunito** · 2. Baloo 2 · 3. Fredoka | Terminais arredondados ecoam as letras das artes da escola; x-height alta; em 800/900 tem peso de credibilidade. Baloo 2 é mais próxima das artes, porém mais "infantil"; Fredoka, mais ainda. |
| **Texto** | **Nunito Sans** 400/600/700/800 | 1. **Nunito Sans** · 2. Atkinson Hyperlegible · 3. Inter | Mesmo esqueleto da Nunito sem terminais redondos → coesão + sobriedade. Atkinson é a alternativa se a prioridade for leitura por pessoas com baixa visão. |
| **Acento manuscrito** | **Caveat** 700 | 1. **Caveat** · 2. Kalam · 3. Patrick Hand | Traço de caneta casual, legível em 24–32px; usada em [REF 5] ("Small Steps Big Dreams") e combina com as artes manuscritas da escola. |

**Peso medido dos arquivos (latin, woff2, Fontsource 5.3):** Nunito variável 39 KB · Nunito Sans variável 31 KB · Caveat 700 51 KB. → Caveat deve ser **subconjunto** (só os caracteres usados; meta ≤ 15 KB [ESTIMADO]) ou carregada com `font-display: optional`.

**Escala fluida** (interpolação linear entre 360px e 1280px de viewport)

| Token | 360px | 1280px | Valor CSS | Uso |
|---|---|---|---|---|
| `--text-display` | 34px | 56px | `clamp(2.125rem, 1.587rem + 2.3913vw, 3.5rem)` | H1 do hero |
| `--text-h2` | 28px | 40px | `clamp(1.75rem, 1.4565rem + 1.3043vw, 2.5rem)` | Título de seção |
| `--text-h3` | 20px | 24px | `clamp(1.25rem, 1.1522rem + 0.4348vw, 1.5rem)` | Título de card |
| `--text-h4` | 18px | 20px | `clamp(1.125rem, 1.0761rem + 0.2174vw, 1.25rem)` | Subtítulo, pergunta do FAQ |
| `--text-lead` | 18px | 20px | `clamp(1.125rem, 1.0761rem + 0.2174vw, 1.25rem)` | Subtítulo do hero/seção |
| `--text-body` | 17px | 17px | `1.0625rem` | Texto corrido |
| `--text-small` | 15px | 15px | `0.9375rem` | Apoio, labels |
| `--text-caption` | 14px | 14px | `0.875rem` | Legendas, rodapé (mínimo absoluto) |
| `--text-eyebrow` | 14px | 14px | `0.875rem` | Rótulo acima do título (CAIXA ALTA) |
| `--text-hand` | 24px | 32px | `clamp(1.5rem, 1.3043rem + 0.8696vw, 2rem)` | Frase manuscrita curta (Caveat) |
| `--text-stat` | 32px | 44px | `clamp(2rem, 1.7065rem + 1.3043vw, 2.75rem)` | Número de destaque (só dado confirmado) |

| Token | Valor | Uso |
|---|---|---|
| `--leading-tight` | 1.1 | H1, números, manuscrita |
| `--leading-snug` | 1.2 | H2, botões |
| `--leading-heading` | 1.25 | H3/H4, perguntas do FAQ |
| `--leading-normal` | 1.5 | Legendas, rodapé legal |
| `--leading-relaxed` | 1.6 | Texto corrido |
| `--tracking-tight` | -0.02em | H1 |
| `--tracking-snug` | -0.01em | H2 |
| `--tracking-wider` | 0.08em | Eyebrow em caixa alta |
| `--measure-prose` | 65ch | Largura máx. de parágrafo (45–75 caracteres) |

**Regras tipográficas**
- Pesos: H1 900, H2 800, H3/H4 700, corpo 400, rótulos 700, botões 800.
- Manuscrita (Caveat): **≤ 6 palavras, ≤ 1 por seção, ≥ 24px**, nunca em botão, formulário, preço, FAQ ou texto legal.
- Marca-texto amarelo (`.hl`): 1 por título, 1–3 palavras.
- Mínimo absoluto de corpo: 14px (`--text-caption`), só em legenda/rodapé legal.
- `text-wrap: balance` em títulos; `text-wrap: pretty` em parágrafos.

### 2.3 Espaçamento

Base **4px**. Escala: `--space-1` 4 · `2` 8 · `3` 12 · `4` 16 · `5` 20 · `6` 24 · `8` 32 · `10` 40 · `12` 48 · `14` 56 · `16` 64 · `20` 80 · `24` 96 · `32` 128 (px).

| Token semântico | Mobile (360) → Desktop (1280) | Uso |
|---|---|---|
| `--section-py` | 56 → 96px | Padding vertical de seção |
| `--section-gap` | 32 → 48px | Cabeçalho da seção → conteúdo |
| `--gutter` | 16 → 32px | Margem lateral |
| `--grid-gap` | 16 → 32px | Espaço entre cards |
| `--card-pad` | 20 → 32px | Padding interno de card |
| `--stack` (fixo) | 8 / 16 / 24px | Espaço entre elementos de um card |

### 2.4 Grid e layout

| Breakpoint | Colunas | Gutter (gap) | Margem | Container |
|---|---|---|---|---|
| < 480 (xs) | 4 | 16px | 16px | 100% |
| ≥ 480 (sm) | 4 | ~18px | ~18px | 100% |
| ≥ 768 (md) | 8 | ~22px | ~22px | 100% |
| ≥ 1024 (lg) | 12 | ~28px | ~28px | 100% |
| ≥ 1280 (xl) | 12 | 32px | 32px | **1200px** + margens |

- Texto, FAQ e formulário: `--container-narrow` 760px.
- Grades de cards usam `repeat(auto-fit, minmax(min(264px, 100%), 1fr))` → 1 col no celular, 2 no tablet, 3–4 no desktop, sem media query.
- Hero: 1 coluna até 1023px (texto **antes** da imagem); 2 colunas 1.05fr/0.95fr a partir de 1024px.

### 2.5 Raios, bordas, sombras, formas, opacidade, camadas

| Token | Valor | Uso |
|---|---|---|
| `--radius-xs` | 6px | Placeholder, foco |
| `--radius-sm` | 10px | Inputs, mensagens |
| `--radius-md` | 16px | FAQ, ícone de etapa, selo do hero |
| `--radius-lg` | 24px | Cards, galeria, tabela |
| `--radius-xl` | 32px | Faixa CTA |
| `--radius-2xl` | 48px | Canto "orgânico" da 1ª foto da galeria |
| `--radius-pill` | 999px | Botões, badges |
| `--radius-blob` | 62% 38% 54% 46% / 48% 56% 44% 52% | Foto do hero, foto da equipe (forma de "gota") |
| `--border-1/2/3` | 1 / 2 / 3px | Card / input e botão secundário / foco e faixa |
| `--shadow-xs` → `--shadow-lg` | sombras tingidas de navy (6% → 22%) | Elevação de cards e flutuantes |
| `--shadow-sticker` | `0 4px 0 0 #8A4208` | CTA laranja (hover 6px, ativo 1px) |
| `--shadow-sticker-navy` | `0 4px 0 0 #0B2140` | CTA amarelo sobre navy |
| `--opacity-disabled` | 0.5 | Botão/campo desabilitado |
| `--opacity-overlay` | 0.6 | Fundo do menu mobile |
| `--opacity-decor` | 0.35 | Rabiscos decorativos |

**Formas decorativas permitidas** [SUGESTÃO MINHA]: onda "da fonte" (1 por transição de seção, altura 40→64px), blob amarelo atrás da foto do hero, faixa dupla do fardamento, rabiscos de traço 2px (estrela, seta curva, sublinhado; máx. 2 por seção, `--opacity-decor`). **Proibidas**: nuvens, arco-íris, foguetes e personagens como em [REF 3].

**Camadas (z-index):** base 0 · raised 1 · dropdown 10 · header 100 · sticky-cta 200 · fab 300 · cookie 400 · overlay (menu) 500 · skip-link 1000.

### 2.6 Movimento

| Token | Valor | Uso |
|---|---|---|
| `--duration-instant` | 80ms | Mudança de cor |
| `--duration-fast` | 150ms | Hover de botão |
| `--duration-base` | 220ms | Cards, FAQ |
| `--duration-slow` | 320ms | Menu mobile, barra fixa |
| `--duration-reveal` | 500ms | Entrada de cards (1x) |
| `--ease-standard` | cubic-bezier(0.2, 0, 0, 1) | Padrão |
| `--ease-out` | cubic-bezier(0, 0, 0.2, 1) | Entradas |
| `--ease-pop` | cubic-bezier(0.34, 1.56, 0.64, 1) | Só o botão flutuante |
| `--translate-lift` / `--translate-press` | -2px / 2px | Hover / clique |
| `--reveal-distance` | 12px | Deslocamento da entrada |

- **Anima:** `transform` e `opacity` apenas (GPU, sem reflow); hover de botão/card; abertura do menu; barra fixa; entrada única de cards.
- **Não anima:** texto do hero (LCP), carrosséis (não existem), parallax, contadores numéricos, vídeo de fundo.
- **`prefers-reduced-motion: reduce`**: todas as durações viram 0ms e os deslocamentos 0px (já em `tokens.css`); `scroll-behavior` volta a `auto`. O giro do spinner de carregamento é mantido (feedback essencial).

### 2.7 Breakpoints

`sm` 480px · `md` 768px · `lg` 1024px · `xl` 1280px — mobile-first (`min-width`). Em CSS puro use `30em / 48em / 64em / 80em` (variáveis não funcionam dentro de `@media`).

### 2.8 Tokens nos 3 formatos

**(a) CSS custom properties — `tokens.css` (completo)**

```css
/* ==========================================================================
   Escola Fonte do Saber — Design Tokens v1.0 (gerado por gen_tokens.py)
   Fonte da verdade: NÃO edite valores soltos nos componentes; edite aqui.
   Cores da marca (laranja/amarelo) = [ESTIMADO] até a escola enviar HEX/vetor oficial.
   Breakpoints (não usáveis em @media via var): sm 480 · md 768 · lg 1024 · xl 1280
   ========================================================================== */
:root {
  color-scheme: light;

  /* ---- Cores primitivas ---- */
  --color-cream-50: #FFFBF4;
  --color-white: #FFFFFF;
  --color-sand-100: #FBF3E7;
  --color-sand-200: #F3E6D3;
  --color-sand-300: #E6D4BC;
  --color-ink-400: #7C8595;
  --color-ink-500: #5B6577;
  --color-ink-700: #34425A;
  --color-ink-900: #14233B;
  --color-orange-50: #FFF5EA;
  --color-orange-100: #FFE6CC;
  --color-orange-200: #FFCD99;
  --color-orange-300: #FFB366;
  --color-orange-400: #FB9D3B;
  --color-orange-500: #F5891F;
  --color-orange-600: #DB6E0A;
  --color-orange-700: #B25607;
  --color-orange-800: #8A4208;
  --color-orange-900: #5C2D07;
  --color-yellow-50: #FFFAE6;
  --color-yellow-100: #FFF1BF;
  --color-yellow-200: #FFE58A;
  --color-yellow-300: #FFD84F;
  --color-yellow-400: #FFCB2B;
  --color-yellow-500: #F2B705;
  --color-navy-50: #EEF4FB;
  --color-navy-100: #D8E5F4;
  --color-navy-200: #B0C9E7;
  --color-navy-300: #7FA5D3;
  --color-navy-400: #4E7DB9;
  --color-navy-500: #2E5F9E;
  --color-navy-600: #1F4A85;
  --color-navy-700: #173B6C;
  --color-navy-800: #112E56;
  --color-navy-900: #0B2140;
  --color-pink-100: #FDE4EF;
  --color-pink-400: #EE5C98;
  --color-pink-700: #A82860;
  --color-sky-100: #E0F0FB;
  --color-sky-400: #3FA3E0;
  --color-sky-700: #1A6AA3;
  --color-green-100: #E3F5EA;
  --color-green-700: #17633A;
  --color-red-100: #FDE8E6;
  --color-red-700: #A1281A;
  --color-wa-green-500: #128C7E;
  --color-wa-green-600: #0F7A6E;

  /* ---- Cores semânticas (use SEMPRE estas nos componentes) ---- */
  --color-bg: var(--color-cream-50); /* Fundo da página (60% da área) */
  --color-bg-alt: var(--color-sand-100); /* Fundo de seção alternada */
  --color-surface: var(--color-white); /* Cards, formulário, menus */
  --color-surface-brand: var(--color-orange-50); /* Faixas/cards de destaque da marca */
  --color-surface-highlight: var(--color-yellow-100); /* Avisos suaves, marca-texto de fundo */
  --color-surface-dark: var(--color-navy-800); /* Faixa Matrículas e rodapé */
  --color-surface-dark-alt: var(--color-navy-900); /* Barra inferior do rodapé */
  --color-text: var(--color-ink-900); /* Títulos e texto forte */
  --color-text-body: var(--color-ink-700); /* Texto corrido */
  --color-text-muted: var(--color-ink-500); /* Legendas, apoio (mín. 14px) */
  --color-text-on-dark: var(--color-white); /* Texto sobre navy */
  --color-text-on-dark-muted: var(--color-navy-100); /* Texto de apoio sobre navy */
  --color-text-brand: var(--color-orange-800); /* Eyebrow e texto laranja pequeno */
  --color-text-brand-lg: var(--color-orange-700); /* Texto laranja só >= 24px ou >= 18.66px bold */
  --color-text-accent-on-dark: var(--color-yellow-400); /* Destaque de palavra sobre navy */
  --color-link: var(--color-navy-700); /* Links no texto (sempre sublinhados) */
  --color-link-hover: var(--color-navy-900); /* Link hover */
  --color-border: var(--color-sand-300); /* Bordas decorativas de cards */
  --color-border-subtle: var(--color-sand-200); /* Divisores internos */
  --color-border-strong: var(--color-ink-400); /* Borda de inputs (>= 3:1) */
  --color-primary: var(--color-orange-500); /* Fundo do CTA principal */
  --color-primary-hover: var(--color-orange-600); /* CTA hover/active */
  --color-primary-shadow: var(--color-orange-800); /* Sombra sólida 'adesivo' do CTA */
  --color-on-primary: var(--color-ink-900); /* Texto sobre laranja (nunca branco) */
  --color-secondary: var(--color-navy-700); /* Botão secundário (contorno/texto) */
  --color-secondary-hover-bg: var(--color-navy-50); /* Fundo hover do secundário */
  --color-on-secondary: var(--color-white); /* Texto sobre navy sólido */
  --color-accent: var(--color-yellow-400); /* Marca-texto, selos, CTA sobre navy */
  --color-on-accent: var(--color-ink-900); /* Texto sobre amarelo (nunca branco) */
  --color-success: var(--color-green-700); /* Mensagem de sucesso */
  --color-success-bg: var(--color-green-100); /* Fundo de sucesso */
  --color-warning: var(--color-orange-800); /* Aviso */
  --color-warning-bg: var(--color-yellow-100); /* Fundo de aviso */
  --color-danger: var(--color-red-700); /* Erro de formulário */
  --color-danger-bg: var(--color-red-100); /* Fundo de erro */
  --color-info: var(--color-navy-700); /* Informação */
  --color-info-bg: var(--color-navy-50); /* Fundo de informação */
  --color-focus: var(--color-navy-600); /* Anel de foco em fundo claro */
  --color-focus-on-dark: var(--color-yellow-400); /* Anel de foco em fundo navy */
  --color-whatsapp: var(--color-wa-green-500); /* Botão flutuante WhatsApp */
  --color-whatsapp-hover: var(--color-wa-green-600); /* Hover do flutuante */
  --color-on-whatsapp: var(--color-white); /* Ícone sobre verde WhatsApp */
  --color-event-pink: var(--color-pink-700); /* Texto de selo rosa (só Eventos) */
  --color-event-pink-bg: var(--color-pink-100); /* Fundo de selo rosa (só Eventos) */
  --color-event-sky: var(--color-sky-700); /* Texto de selo azul-céu (só Eventos) */
  --color-event-sky-bg: var(--color-sky-100); /* Fundo de selo azul-céu (só Eventos) */
  --color-pending: var(--color-orange-800); /* Texto do placeholder [PREENCHER] (só staging) */
  --color-pending-bg: var(--color-yellow-100); /* Fundo do placeholder [PREENCHER] (só staging) */

  /* ---- Tipografia ---- */
  --font-display: "Nunito", ui-rounded, "Segoe UI", system-ui, sans-serif;
  --font-body: "Nunito Sans", "Segoe UI", system-ui, -apple-system, Roboto, sans-serif;
  --font-hand: "Caveat", "Segoe Print", "Bradley Hand", cursive;
  --weight-regular: 400;
  --weight-semibold: 600;
  --weight-bold: 700;
  --weight-extrabold: 800;
  --weight-black: 900;
  --text-display: clamp(2.125rem, 1.587rem + 2.3913vw, 3.5rem); /* 34px→56px · H1 do hero */
  --text-h2: clamp(1.75rem, 1.4565rem + 1.3043vw, 2.5rem); /* 28px→40px · Título de seção */
  --text-h3: clamp(1.25rem, 1.1522rem + 0.4348vw, 1.5rem); /* 20px→24px · Título de card */
  --text-h4: clamp(1.125rem, 1.0761rem + 0.2174vw, 1.25rem); /* 18px→20px · Subtítulo, pergunta do FAQ */
  --text-lead: clamp(1.125rem, 1.0761rem + 0.2174vw, 1.25rem); /* 18px→20px · Subtítulo do hero/seção */
  --text-body: 1.0625rem; /* 17px→17px · Texto corrido */
  --text-small: 0.9375rem; /* 15px→15px · Apoio, labels */
  --text-caption: 0.875rem; /* 14px→14px · Legendas, rodapé (mínimo absoluto) */
  --text-eyebrow: 0.875rem; /* 14px→14px · Rótulo acima do título (CAIXA ALTA) */
  --text-hand: clamp(1.5rem, 1.3043rem + 0.8696vw, 2rem); /* 24px→32px · Frase manuscrita curta (Caveat) */
  --text-stat: clamp(2rem, 1.7065rem + 1.3043vw, 2.75rem); /* 32px→44px · Número de destaque (só dado confirmado) */
  --leading-tight: 1.1;
  --leading-snug: 1.2;
  --leading-heading: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.6;
  --tracking-tight: -0.02em;
  --tracking-snug: -0.01em;
  --tracking-normal: 0;
  --tracking-wide: 0.04em;
  --tracking-wider: 0.08em;
  --measure-prose: 65ch;
  --measure-narrow: 45ch;

  /* ---- Espaçamento (base 4px) ---- */
  --space-0: 0rem; /* 0px */
  --space-1: 0.25rem; /* 4px */
  --space-2: 0.5rem; /* 8px */
  --space-3: 0.75rem; /* 12px */
  --space-4: 1rem; /* 16px */
  --space-5: 1.25rem; /* 20px */
  --space-6: 1.5rem; /* 24px */
  --space-8: 2rem; /* 32px */
  --space-10: 2.5rem; /* 40px */
  --space-12: 3rem; /* 48px */
  --space-14: 3.5rem; /* 56px */
  --space-16: 4rem; /* 64px */
  --space-20: 5rem; /* 80px */
  --space-24: 6rem; /* 96px */
  --space-32: 8rem; /* 128px */

  /* ---- Layout e tamanhos ---- */
  --section-py: clamp(3.5rem, 2.5217rem + 4.3478vw, 6rem); /* Padding vertical de seção 56→96px */
  --section-gap: clamp(2rem, 1.6087rem + 1.7391vw, 3rem); /* Cabeçalho da seção → conteúdo 32→48px */
  --gutter: clamp(1rem, 0.6087rem + 1.7391vw, 2rem); /* Margem lateral do container 16→32px */
  --grid-gap: clamp(1rem, 0.6087rem + 1.7391vw, 2rem); /* Gap das grades 16→32px */
  --card-pad: clamp(1.25rem, 0.9565rem + 1.3043vw, 2rem); /* Padding interno de card 20→32px */
  --container-max: 1200px; /* Largura máxima do conteúdo */
  --container-narrow: 760px; /* Texto, FAQ, formulário */
  --header-h: 64px; /* Altura da navbar (mobile) */
  --header-h-lg: 76px; /* Altura da navbar (>=1024px) */
  --topbar-h: 40px; /* Faixa 'Matrículas 2027 abertas' */
  --stripe-h: 6px; /* Faixa do fardamento (3px laranja + 3px amarelo) */
  --logo-h: 44px; /* Brasão na navbar (mobile) */
  --logo-h-lg: 52px; /* Brasão na navbar (desktop) */
  --tap-min: 48px; /* Alvo de toque mínimo (>=44px WCAG 2.5.5) */
  --btn-h-sm: 44px; /* Botão pequeno */
  --btn-h: 52px; /* Botão padrão */
  --btn-h-lg: 56px; /* Botão do hero */
  --input-h: 52px; /* Campo de formulário */
  --fab-size: 56px; /* Botão flutuante WhatsApp */
  --sticky-bar-h: 64px; /* Barra CTA fixa (mobile) */
  --icon-sm: 16px; /* Ícone inline */
  --icon-md: 20px; /* Ícone em botão */
  --icon-lg: 24px; /* Ícone em card */
  --icon-xl: 32px; /* Ícone de etapa */
  --icon-badge: 56px; /* Círculo do ícone de diferencial */
  --card-min: 264px; /* Largura mínima de card em grade auto-fit */
  --card-min-sm: 220px; /* Largura mínima de card compacto */
  --gallery-min: 240px; /* Largura mínima de foto na galeria */
  --hero-media-max: 560px; /* Largura máxima da imagem do hero */
  --map-h: 320px; /* Altura da fachada do mapa */
  --timeline-dot: 16px; /* Marcador da linha do tempo */
  --avatar: 120px; /* Foto da equipe */
  --fab-offset: 20px; /* Distância do flutuante às bordas */
  --stripe-seg: 3px; /* Cada cor da faixa do fardamento */
  --focus-offset: 3px; /* Afastamento do anel de foco */
  --menu-panel-w: min(88vw, 360px); /* Largura do menu mobile */
  --cookie-max: 640px; /* Largura máxima do banner de cookies */

  /* ---- Raios, bordas, sombras ---- */
  --radius-xs: 6px;
  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 32px;
  --radius-2xl: 48px;
  --radius-pill: 999px;
  --radius-blob: 62% 38% 54% 46% / 48% 56% 44% 52%;
  --border-1: 1px;
  --border-2: 2px;
  --border-3: 3px;
  --shadow-xs: 0 1px 2px rgba(20, 35, 59, 0.06);
  --shadow-sm: 0 2px 6px -1px rgba(20, 35, 59, 0.08);
  --shadow-md: 0 8px 20px -6px rgba(20, 35, 59, 0.14);
  --shadow-lg: 0 18px 40px -12px rgba(20, 35, 59, 0.22);
  --shadow-sticker: 0 4px 0 0 #8A4208;
  --shadow-sticker-hover: 0 6px 0 0 #8A4208;
  --shadow-sticker-active: 0 1px 0 0 #8A4208;
  --shadow-sticker-navy: 0 4px 0 0 #0B2140;
  --shadow-focus: 0 0 0 3px #FFFBF4, 0 0 0 6px #1F4A85;

  /* ---- Opacidade e camadas ---- */
  --opacity-disabled: 0.5;
  --opacity-decor: 0.35;
  --opacity-overlay: 0.6;
  --opacity-muted-img: 0.9;
  --z-base: 0;
  --z-raised: 1;
  --z-dropdown: 10;
  --z-header: 100;
  --z-sticky-cta: 200;
  --z-fab: 300;
  --z-cookie: 400;
  --z-overlay: 500;
  --z-skip-link: 1000;

  /* ---- Movimento ---- */
  --duration-instant: 80ms;
  --duration-fast: 150ms;
  --duration-base: 220ms;
  --duration-slow: 320ms;
  --duration-reveal: 500ms;
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-pop: cubic-bezier(0.34, 1.56, 0.64, 1);
  --reveal-distance: 12px;
  --translate-lift: -2px;
  --translate-press: 2px;
  --duration-spin: 800ms;
  --hl-start: 58%;
  --hl-end: 90%;
  --underline-offset: 0.18em;
  --icon-stroke: 2;

  /* ---- Proporções de imagem ---- */
  --ratio-hero: 4 / 3;
  --ratio-card: 3 / 2;
  --ratio-square: 1 / 1;
  --ratio-portrait: 4 / 5;
  --ratio-wide: 16 / 9;
  --ratio-og: 1200 / 630;
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --duration-instant: 0ms;
    --duration-fast: 0ms;
    --duration-base: 0ms;
    --duration-slow: 0ms;
    --duration-reveal: 0ms;
    --reveal-distance: 0px;
    --translate-lift: 0px;
    --translate-press: 0px;
  }
}
```

**(b) JSON DTCG/W3C — `tokens.json` (trecho; arquivo completo no pacote)**

```json
{
  "color": {
    "orange": {
      "50": {
        "$value": "#FFF5EA",
        "$type": "color"
      },
      "100": {
        "$value": "#FFE6CC",
        "$type": "color"
      },
      "200": {
        "$value": "#FFCD99",
        "$type": "color"
      },
      "300": {
        "$value": "#FFB366",
        "$type": "color"
      },
      "400": {
        "$value": "#FB9D3B",
        "$type": "color"
      },
      "500": {
        "$value": "#F5891F",
        "$type": "color"
      },
      "600": {
        "$value": "#DB6E0A",
        "$type": "color"
      },
      "700": {
        "$value": "#B25607",
        "$type": "color"
      },
      "800": {
        "$value": "#8A4208",
        "$type": "color"
      },
      "900": {
        "$value": "#5C2D07",
        "$type": "color"
      }
    }
  },
  "semantic": {
    "color": {
      "primary": {
        "$value": "{color.orange.500}",
        "$type": "color",
        "$description": "Fundo do CTA principal"
      },
      "on-primary": {
        "$value": "{color.ink.900}",
        "$type": "color",
        "$description": "Texto sobre laranja (nunca branco)"
      },
      "text-brand": {
        "$value": "{color.orange.800}",
        "$type": "color",
        "$description": "Eyebrow e texto laranja pequeno"
      },
      "surface-dark": {
        "$value": "{color.navy.800}",
        "$type": "color",
        "$description": "Faixa Matrículas e rodapé"
      },
      "focus": {
        "$value": "{color.navy.600}",
        "$type": "color",
        "$description": "Anel de foco em fundo claro"
      }
    }
  },
  "font": {
    "family": {
      "display": {
        "$value": "\"Nunito\", ui-rounded, \"Segoe UI\", system-ui, sans-serif",
        "$type": "fontFamily"
      },
      "body": {
        "$value": "\"Nunito Sans\", \"Segoe UI\", system-ui, -apple-system, Roboto, sans-serif",
        "$type": "fontFamily"
      },
      "hand": {
        "$value": "\"Caveat\", \"Segoe Print\", \"Bradley Hand\", cursive",
        "$type": "fontFamily"
      }
    },
    "size": {
      "display": {
        "$value": "clamp(2.125rem, 1.587rem + 2.3913vw, 3.5rem)",
        "$type": "dimension",
        "$description": "H1 do hero",
        "$extensions": {
          "br.fontedosaber.fluid": {
            "minPx": 34,
            "maxPx": 56,
            "minVw": 360,
            "maxVw": 1280
          }
        }
      }
    }
  },
  "space": {
    "4": {
      "$value": "16px",
      "$type": "dimension"
    },
    "8": {
      "$value": "32px",
      "$type": "dimension"
    },
    "24": {
      "$value": "96px",
      "$type": "dimension"
    }
  },
  "shadow": {
    "sticker": {
      "$value": "0 4px 0 0 #8A4208",
      "$type": "shadow",
      "$description": "string CSS (Style Dictionary repassa como está)"
    }
  },
  "duration": {
    "base": {
      "$value": "220ms",
      "$type": "duration"
    }
  }
}
// … demais grupos: lineHeight, tracking, layout, radius, borderWidth, opacity, zIndex, easing, breakpoint, aspectRatio, misc
```

**(c) Tailwind — `tailwind.tokens.js` (trecho; arquivo completo no pacote)**

```js
// Escola Fonte do Saber — tokens para Tailwind CSS v3 (theme.extend).
// Gerado por gen_tokens.py a partir da mesma fonte de tokens.css/tokens.json.
// Uso (v3):  const fs = require('./tailwind.tokens.js');
//            module.exports = { content: ['./src/**/*.{astro,html,js}'],
//                               theme: { screens: fs.screens, extend: fs.extend } };
// As cores semânticas usam var(--color-*): importe tokens.css no CSS global.
// Tailwind v4: prefira mapear tokens.css com @theme inline { --color-primary: var(--color-primary); }.
// 'screens' SUBSTITUI os breakpoints padrão do Tailwind (mobile-first, min-width).
const extend = {
  "screens": {
    "sm": "480px",
    "md": "768px",
    "lg": "1024px",
    "xl": "1280px"
  },
  "colors": {
    "orange": {
      "50": "#FFF5EA",
      "100": "#FFE6CC",
      "200": "#FFCD99",
      "300": "#FFB366",
      "400": "#FB9D3B",
      "500": "#F5891F",
      "600": "#DB6E0A",
      "700": "#B25607",
      "800": "#8A4208",
      "900": "#5C2D07"
    },
    "primary": "var(--color-primary)",
    "on-primary": "var(--color-on-primary)",
    "surface-dark": "var(--color-surface-dark)"
  },
  "fontFamily": {
    "display": [
      "Nunito",
      "ui-rounded",
      "Segoe UI",
      "system-ui",
      "sans-serif"
    ],
    "body": [
      "Nunito Sans",
      "Segoe UI",
      "system-ui",
      "-apple-system",
      "Roboto",
      "sans-serif"
    ],
    "hand": [
      "Caveat",
      "Segoe Print",
      "Bradley Hand",
      "cursive"
    ]
  },
  "fontSize": {
    "display": [
      "clamp(2.125rem, 1.587rem + 2.3913vw, 3.5rem)",
      {
        "lineHeight": "1.1"
      }
    ],
    "h2": [
      "clamp(1.75rem, 1.4565rem + 1.3043vw, 2.5rem)",
      {
        "lineHeight": "1.2"
      }
    ],
    "body": [
      "1.0625rem",
      {
        "lineHeight": "1.6"
      }
    ]
  },
  "borderRadius": {
    "lg": "24px",
    "pill": "999px",
    "blob": "62% 38% 54% 46% / 48% 56% 44% 52%"
  },
  "boxShadow": {
    "sticker": "0 4px 0 0 #8A4208"
  }
}; // trecho
module.exports = { extend, screens: extend.screens };
```

---

## 3. COMPONENTES

> Todo o CSS abaixo está em `components.css` (BEM, sem valores soltos). A prévia `preview.html` renderiza todos os componentes e estados. Medidas = tokens.
> **Exceções permitidas a "só tokens":** `0`, `100%`, `1fr`/frações de grid, `auto`, `currentColor`, ângulos de gradiente e o padrão `.visually-hidden` (1px).

### 3.0 Base, layout e acentos tipográficos

Reset mínimo, foco visível global (`3px` navy, afastado 3px; amarelo em fundo navy), `skip-link`, container, seções (`--alt`, `--brand`, `--dark`), cabeçalho de seção, `.eyebrow` (com a faixa do fardamento), `.hl` (marca-texto) e `.hand` (manuscrita).

```css
*, *::before, *::after { box-sizing: border-box; }
.icon { width: var(--icon-lg); height: var(--icon-lg); flex: none; fill: none; stroke: currentColor; stroke-width: var(--icon-stroke); stroke-linecap: round; stroke-linejoin: round; }
html { -webkit-text-size-adjust: 100%; scroll-behavior: smooth; scroll-padding-top: var(--header-h-lg); }
@media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }
body {
  margin: 0;
  background: var(--color-bg);
  color: var(--color-text-body);
  font-family: var(--font-body);
  font-size: var(--text-body);
  line-height: var(--leading-relaxed);
  -webkit-font-smoothing: antialiased;
}
h1, h2, h3, h4 {
  margin: 0;
  color: var(--color-text);
  font-family: var(--font-display);
  text-wrap: balance;
}
h1 { font-size: var(--text-display); font-weight: var(--weight-black); line-height: var(--leading-tight); letter-spacing: var(--tracking-tight); }
h2 { font-size: var(--text-h2); font-weight: var(--weight-extrabold); line-height: var(--leading-snug); letter-spacing: var(--tracking-snug); }
h3 { font-size: var(--text-h3); font-weight: var(--weight-bold); line-height: var(--leading-heading); }
h4 { font-size: var(--text-h4); font-weight: var(--weight-bold); line-height: var(--leading-heading); }
p { margin: 0; max-width: var(--measure-prose); text-wrap: pretty; }
img, svg, video { display: block; max-width: 100%; height: auto; }
a { color: var(--color-link); text-decoration: underline; text-underline-offset: var(--underline-offset); }
a:hover { color: var(--color-link-hover); }
:focus-visible { outline: var(--border-3) solid var(--color-focus); outline-offset: var(--focus-offset); border-radius: var(--radius-xs); }
.section--dark :focus-visible, .footer :focus-visible { outline-color: var(--color-focus-on-dark); }
.visually-hidden { position: absolute !important; width: 1px; height: 1px; margin: -1px; padding: 0; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0; }
.skip-link { position: absolute; left: var(--space-4); top: calc(-1 * var(--space-16)); z-index: var(--z-skip-link); padding: var(--space-3) var(--space-4); background: var(--color-surface); color: var(--color-text); border-radius: var(--radius-sm); box-shadow: var(--shadow-md); }
.skip-link:focus { top: var(--space-4); }
.container { width: 100%; max-width: calc(var(--container-max) + 2 * var(--gutter)); margin-inline: auto; padding-inline: var(--gutter); }
.container--narrow { max-width: calc(var(--container-narrow) + 2 * var(--gutter)); }
.section { padding-block: var(--section-py); position: relative; }
.section--alt { background: var(--color-bg-alt); }
.section--brand { background: var(--color-surface-brand); }
.section--dark { background: var(--color-surface-dark); color: var(--color-text-on-dark); }
.section--dark .section__header :is(h2, h3), .section--dark > .container > :is(h2, h3) { color: var(--color-text-on-dark); }
/* Superfícies claras dentro de seção escura voltam à cor de texto padrão */
.section--dark :is(.form, .enroll__card, .steps__item, .price-table, .cta-band, .faq__item) { color: var(--color-text-body); }
.section__header { display: grid; gap: var(--space-3); margin-bottom: var(--section-gap); max-width: var(--container-narrow); }
.section__header--center { margin-inline: auto; text-align: center; justify-items: center; }
.section__lead { font-size: var(--text-lead); color: var(--color-text-body); }
.section--dark .section__lead { color: var(--color-text-on-dark-muted); }
.grid { display: grid; gap: var(--grid-gap); grid-template-columns: repeat(auto-fit, minmax(min(var(--card-min), 100%), 1fr)); }
.grid--sm { grid-template-columns: repeat(auto-fill, minmax(min(var(--card-min-sm), 100%), 1fr)); }
.split { display: grid; gap: var(--grid-gap); align-items: center; }
@media (min-width: 64em) { .split { grid-template-columns: 1fr 1fr; } .split--media-first > :first-child { order: 2; } }
.stack { display: grid; gap: var(--space-4); }
.eyebrow {
  display: inline-flex; align-items: center; gap: var(--space-2);
  font-family: var(--font-body); font-size: var(--text-eyebrow); font-weight: var(--weight-extrabold);
  letter-spacing: var(--tracking-wider); text-transform: uppercase; color: var(--color-text-brand);
}
.eyebrow::before { content: ""; width: var(--space-6); height: var(--stripe-h); border-radius: var(--radius-pill);
  background: linear-gradient(var(--color-primary) 0 50%, var(--color-accent) 50% 100%); }
.section--dark .eyebrow { color: var(--color-text-accent-on-dark); }
/* Marca-texto amarelo (1 por título, 1–3 palavras) */
.hl { background: linear-gradient(transparent var(--hl-start), var(--color-accent) var(--hl-start), var(--color-accent) var(--hl-end), transparent var(--hl-end));
  padding-inline: var(--space-1); -webkit-box-decoration-break: clone; box-decoration-break: clone; }
.section--dark .hl { background: none; color: var(--color-text-accent-on-dark); padding: 0; }
/* Frase manuscrita: máx. 5 palavras, 1 por seção, nunca em botão/formulário/texto corrido */
.hand { font-family: var(--font-hand); font-size: var(--text-hand); font-weight: var(--weight-bold); line-height: var(--leading-tight); color: var(--color-text-brand); }
.section--dark .hand, .footer .hand { color: var(--color-text-accent-on-dark); }
/* Faixa do fardamento: laranja + amarelo. Topo da página, base do rodapé, divisor curto. */
.stripe { height: var(--stripe-h); background: linear-gradient(var(--color-primary) 0 var(--stripe-seg), var(--color-accent) var(--stripe-seg) 100%); }
.stripe--short { width: var(--space-16); border-radius: var(--radius-pill); }
```

### 3.1 Botão

| | |
|---|---|
| **Anatomia** | [ícone 20px opcional] + rótulo (Nunito Sans 800) · pílula · altura 52px (sm 44 / lg 56) · padding lateral 24px |
| **Variantes** | `btn` (primário laranja, texto escuro, sombra adesivo) · `btn--secondary` (contorno navy 2px) · `btn--on-dark` (amarelo sobre navy) · `btn--link` (texto sublinhado, alvo 48px) · tamanhos `--sm`/`--lg` · `--block` (100%) |
| **Estados** | default · hover (laranja-600, sobe 2px, sombra 6px) · focus-visible (anel navy 3px + 3px) · active (desce 2px, sombra 1px) · disabled (`opacity .5`, sem sombra) · loading (`.is-loading`: spinner + texto "Abrindo WhatsApp…", sem cliques) |
| **Quando usar** | Primário: **uma** ação por bloco ("Agendar visita"). Secundário: ação alternativa ("Ver valores"). Link: ação terciária dentro de card. Sobre navy: só na faixa de Matrículas. |
| **Microcopy** | Verbo + objeto: "Agendar visita", "Agendar visita pelo WhatsApp", "Perguntar no WhatsApp", "Ver valores e matrícula". Nunca "Clique aqui", "Matricule já". |

```html
<a class="btn btn--lg" href="https://wa.me/55XXXXXXXXXXX?text=..." target="_blank" rel="noopener">
  <svg class="icon btn__icon" aria-hidden="true"><use href="#i-chat"/></svg>Agendar visita pelo WhatsApp
</a>
<a class="btn btn--secondary" href="#matriculas">Ver valores e matrícula</a>
<button class="btn is-loading" type="button" aria-busy="true">Abrindo WhatsApp…</button>
```

```css
.btn {
  --_bg: var(--color-primary); --_fg: var(--color-on-primary); --_shadow: var(--shadow-sticker); --_bd: transparent;
  display: inline-flex; align-items: center; justify-content: center; gap: var(--space-2);
  min-height: var(--btn-h); padding: 0 var(--space-6);
  font-family: var(--font-body); font-size: var(--text-body); font-weight: var(--weight-extrabold); line-height: var(--leading-snug);
  color: var(--_fg); background: var(--_bg); border: var(--border-2) solid var(--_bd); border-radius: var(--radius-pill);
  box-shadow: var(--_shadow); text-decoration: none; cursor: pointer; -webkit-tap-highlight-color: transparent;
  transition: transform var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard), background-color var(--duration-fast) var(--ease-standard);
}
.btn svg { width: var(--icon-md); height: var(--icon-md); flex: none; }
.btn:hover { color: var(--_fg); background: var(--color-primary-hover); box-shadow: var(--shadow-sticker-hover); transform: translateY(var(--translate-lift)); }
.btn:active { box-shadow: var(--shadow-sticker-active); transform: translateY(var(--translate-press)); }
.btn--secondary { --_bg: transparent; --_fg: var(--color-secondary); --_bd: var(--color-secondary); --_shadow: none; }
.btn--secondary:hover { background: var(--color-secondary-hover-bg); box-shadow: none; }
.btn--secondary:active { box-shadow: none; }
.btn--on-dark { --_bg: var(--color-accent); --_fg: var(--color-on-accent); --_shadow: var(--shadow-sticker-navy); }
.btn--on-dark:hover { background: var(--color-yellow-300); box-shadow: var(--shadow-sticker-navy); }
.btn--link { --_bg: transparent; --_fg: var(--color-link); --_shadow: none; min-height: var(--tap-min); padding: 0 var(--space-1); text-decoration: underline; text-underline-offset: var(--underline-offset); }
.btn--link:hover { background: transparent; box-shadow: none; transform: none; color: var(--color-link-hover); }
.btn--sm { min-height: var(--btn-h-sm); padding: 0 var(--space-4); font-size: var(--text-small); }
.btn--lg { min-height: var(--btn-h-lg); padding: 0 var(--space-8); font-size: var(--text-lead); }
.btn--block { width: 100%; }
.btn:disabled, .btn[aria-disabled="true"] { opacity: var(--opacity-disabled); cursor: not-allowed; transform: none; box-shadow: none; }
.btn.is-loading { pointer-events: none; }
.btn.is-loading .btn__icon { display: none; }
.btn.is-loading::before { content: ""; width: var(--icon-md); height: var(--icon-md); border-radius: var(--radius-pill);
  border: var(--border-3) solid currentColor; border-right-color: transparent; animation: fs-spin var(--duration-spin) linear infinite; }
@keyframes fs-spin { to { transform: rotate(1turn); } }
.btn-group { display: flex; flex-wrap: wrap; gap: var(--space-3); align-items: center; }
```

### 3.2 Botão flutuante de WhatsApp + barra fixa (mobile)

| | |
|---|---|
| **Anatomia** | Desktop (≥1024): círculo 56px, verde #128C7E, ícone 32px branco, 20px das bordas, `aria-label="Conversar com a escola no WhatsApp"`. Mobile (<1024): **barra fixa** inferior 64px com botão primário de largura total. |
| **Comportamento** | Barra aparece só **depois que o hero sai da tela**; some quando o **rodapé** entra (não cobre dados legais) e quando um **campo recebe foco** (teclado aberto). O flutuante some quando o rodapé aparece. `body` ganha `padding-bottom: 64px` no mobile para nada ficar escondido. Respeita `env(safe-area-inset-bottom)` (iPhone). |
| **Por que não flutuante no celular** | Um círculo no canto cobre conteúdo e concorre com o CTA; a barra é maior, rotulada e não sobrepõe texto. |
| **Ícone** | Usar o glifo oficial do WhatsApp do **Simple Icons (CC0)**. A prévia usa um balão genérico do Lucide como substituto. |

```html
<a class="wa-fab" href="https://wa.me/5500000000000" data-wa aria-label="Conversar com a escola no WhatsApp"><svg class="icon" aria-hidden="true"><use href="#i-chat"/></svg></a>
<div class="sticky-cta" aria-label="Atalho de agendamento">
  <a class="btn" href="https://wa.me/5500000000000" data-wa><svg class="icon btn__icon" aria-hidden="true"><use href="#i-chat"/></svg>Agendar visita</a>
</div>
```

```css
/* Desktop (>=1024px): botão flutuante. Mobile: substituído pela .sticky-cta (não cobre conteúdo). */
.wa-fab {
  position: fixed; right: var(--fab-offset); bottom: var(--fab-offset); z-index: var(--z-fab);
  display: none; place-items: center; width: var(--fab-size); height: var(--fab-size); border-radius: var(--radius-pill);
  background: var(--color-whatsapp); color: var(--color-on-whatsapp); box-shadow: var(--shadow-lg);
  transition: transform var(--duration-fast) var(--ease-pop), opacity var(--duration-base) var(--ease-standard);
}
.wa-fab svg { width: var(--icon-xl); height: var(--icon-xl); }
.wa-fab:hover { background: var(--color-whatsapp-hover); color: var(--color-on-whatsapp); transform: translateY(var(--translate-lift)); }
.wa-fab.is-hidden { opacity: 0; pointer-events: none; }  /* JS aplica quando o rodapé entra na tela */
@media (min-width: 64em) { .wa-fab { display: grid; } }

.sticky-cta {
  position: fixed; inset-inline: 0; bottom: 0; z-index: var(--z-sticky-cta);
  display: flex; gap: var(--space-2); align-items: center; min-height: var(--sticky-bar-h);
  padding: var(--space-2) var(--gutter) calc(var(--space-2) + env(safe-area-inset-bottom));
  background: var(--color-surface); border-top: var(--border-1) solid var(--color-border); box-shadow: var(--shadow-lg);
  transform: translateY(100%); transition: transform var(--duration-slow) var(--ease-standard);
}
.sticky-cta.is-visible { transform: translateY(0); }  /* JS: aparece após o hero, some no rodapé e com teclado aberto */
.sticky-cta .btn { flex: 1; }
@media (min-width: 64em) { .sticky-cta { display: none; } }
body.has-sticky-cta { padding-bottom: var(--sticky-bar-h); }
@media (min-width: 64em) { body.has-sticky-cta { padding-bottom: 0; } }
```

### 3.3 Navbar, menu mobile e faixa "Matrículas 2027 abertas"

| | |
|---|---|
| **Anatomia** | Top bar navy 40px (selo amarelo "2027" + texto + link) → faixa do fardamento 6px → navbar creme sticky 64px (76px ≥1024): brasão 44/52px + nome + subtítulo · links (só ≥1024) · CTA `btn--sm` (só ≥1024) · botão hambúrguer 48px (só <1024). |
| **Menu mobile** | Painel lateral direito `min(88vw, 360px)` + fundo escuro 60%. Abre com `aria-expanded`, foco vai para o 1º item, **Esc** fecha, clicar fora fecha, clicar num link fecha e devolve o foco ao botão. Último item = CTA de largura total. |
| **Estados dos links** | hover: fundo laranja-50 · focus-visible: anel navy · atual: sublinhado laranja 3px (`aria-current="true"`, via IntersectionObserver opcional). |
| **Brasão** | Arquivo oficial em SVG; mínimo 44px de altura; nunca recortar a faixa do escudo; `alt`/`aria-label` "Escola Fonte do Saber". A prévia usa um escudo genérico **apenas como placeholder**. |

```html
<div class="topbar" role="region" aria-label="Aviso de matrículas">
  <div class="container topbar__inner">
    <span class="topbar__badge">2027</span>
    <span>Matrículas abertas · <a href="https://wa.me/5500000000000?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20visita." data-wa>agende uma visita</a></span>
  </div>
</div>
<div class="stripe" aria-hidden="true"></div>
<header class="nav">
  <div class="container nav__inner">
    <a class="nav__brand" href="#inicio" aria-label="Escola Fonte do Saber — início">
      <!-- Substituir pelo brasão oficial (SVG). Placeholder genérico, NÃO é o logo. -->
      <svg class="nav__logo" viewBox="0 0 48 56" role="img" aria-label="Brasão (placeholder)"><path d="M24 2 44 9v18c0 13-9 22-20 27C13 49 4 40 4 27V9Z" fill="var(--color-surface-brand)" stroke="var(--color-primary)" stroke-width="3"/><text x="24" y="34" text-anchor="middle" font-family="Nunito, sans-serif" font-weight="900" font-size="16" fill="var(--color-text)">FS</text></svg>
      <span class="nav__name">Escola Fonte do Saber<small>Educação Infantil e Fundamental · Jupi-PE</small></span>
    </a>
    <nav aria-label="Principal">
      <ul class="nav__links">
        <li><a href="#etapas">Etapas</a></li>
        <li><a href="#diferenciais">Diferenciais</a></li>
        <li><a href="#rotina">Rotina</a></li>
        <li><a href="#estrutura">Estrutura</a></li>
        <li><a href="#matriculas">Matrículas</a></li>
        <li><a href="#duvidas">Dúvidas</a></li>
      </ul>
    </nav>
    <a class="btn btn--sm nav__cta" href="https://wa.me/5500000000000" data-wa><svg class="icon btn__icon" aria-hidden="true"><use href="#i-chat"/></svg>Agendar visita</a>
    <button class="nav__toggle" type="button" aria-expanded="false" aria-controls="menu-mobile" aria-label="Abrir menu"><svg class="icon" aria-hidden="true"><use href="#i-menu"/></svg></button>
  </div>
  <div class="nav__scrim" data-open="false"></div>
  <div class="nav__panel" id="menu-mobile" data-open="false" aria-label="Menu">
    <button class="nav__toggle" type="button" data-close aria-label="Fechar menu" style="justify-self:end"><svg class="icon" aria-hidden="true"><use href="#i-x"/></svg></button>
    <a href="#etapas">Etapas</a><a href="#diferenciais">Diferenciais</a><a href="#rotina">Um dia na escola</a><a href="#estrutura">Estrutura</a><a href="#matriculas">Matrículas</a><a href="#duvidas">Dúvidas</a><a href="#onde">Onde estamos</a>
    <a class="btn btn--block" href="https://wa.me/5500000000000" data-wa>Agendar visita pelo WhatsApp</a>
  </div>
</header>
```

```css
.topbar { background: var(--color-surface-dark); color: var(--color-text-on-dark); font-size: var(--text-small); }
.topbar__inner { display: flex; align-items: center; justify-content: center; gap: var(--space-3); min-height: var(--topbar-h); text-align: center; }
.topbar__badge { display: inline-flex; align-items: center; padding: 0 var(--space-2); border-radius: var(--radius-pill);
  background: var(--color-accent); color: var(--color-on-accent); font-weight: var(--weight-extrabold); font-size: var(--text-caption); }
.topbar a { color: var(--color-text-on-dark); font-weight: var(--weight-bold); }
.topbar a:hover { color: var(--color-text-accent-on-dark); }
.topbar :focus-visible { outline-color: var(--color-focus-on-dark); }
.nav { position: sticky; top: 0; z-index: var(--z-header); background: var(--color-bg); border-bottom: var(--border-1) solid var(--color-border-subtle); }
.nav__inner { display: flex; align-items: center; justify-content: space-between; gap: var(--space-4); min-height: var(--header-h); }
.nav__brand { display: inline-flex; align-items: center; gap: var(--space-3); text-decoration: none; color: var(--color-text); }
.nav__logo { height: var(--logo-h); width: auto; }
.nav__name { font-family: var(--font-display); font-weight: var(--weight-extrabold); font-size: var(--text-h4); line-height: var(--leading-snug); }
.nav__name small { display: block; font-family: var(--font-body); font-size: var(--text-caption); font-weight: var(--weight-semibold); color: var(--color-text-muted); }
.nav__links { display: none; list-style: none; margin: 0; padding: 0; gap: var(--space-1); }
.nav__links a { display: inline-flex; align-items: center; min-height: var(--tap-min); padding: 0 var(--space-3); border-radius: var(--radius-pill);
  color: var(--color-text); font-weight: var(--weight-bold); text-decoration: none; }
.nav__links a:hover { background: var(--color-surface-brand); }
.nav__links a[aria-current="true"] { box-shadow: inset 0 calc(-1 * var(--border-3)) 0 var(--color-primary); border-radius: 0; }
.nav__cta { display: none; }
.nav__toggle { display: inline-grid; place-items: center; width: var(--tap-min); height: var(--tap-min); border: 0; border-radius: var(--radius-pill);
  background: var(--color-surface-brand); color: var(--color-text); cursor: pointer; }
.nav__toggle svg { width: var(--icon-lg); height: var(--icon-lg); }
.nav__panel { position: fixed; inset: 0 0 0 auto; z-index: var(--z-overlay); width: var(--menu-panel-w); padding: var(--space-6);
  background: var(--color-surface); box-shadow: var(--shadow-lg); display: grid; align-content: start; gap: var(--space-2);
  transform: translateX(100%); visibility: hidden; transition: transform var(--duration-slow) var(--ease-standard), visibility 0s linear var(--duration-slow); }
.nav__panel[data-open="true"] { transform: translateX(0); visibility: visible; transition: transform var(--duration-slow) var(--ease-standard); }
.nav__panel a:not(.btn) { display: flex; align-items: center; min-height: var(--tap-min); padding: 0 var(--space-3); border-radius: var(--radius-sm);
  color: var(--color-text); font-weight: var(--weight-bold); font-size: var(--text-lead); text-decoration: none; }
.nav__panel a:not(.btn):hover { background: var(--color-surface-brand); }
.nav__scrim { position: fixed; inset: 0; z-index: calc(var(--z-overlay) - 1); background: var(--color-ink-900); opacity: 0; pointer-events: none; transition: opacity var(--duration-slow) var(--ease-standard); }
.nav__scrim[data-open="true"] { opacity: var(--opacity-overlay); pointer-events: auto; }
@media (min-width: 64em) {
  .nav__inner { min-height: var(--header-h-lg); }
  .nav__logo { height: var(--logo-h-lg); }
  .nav__links { display: flex; }
  .nav__cta { display: inline-flex; }
  .nav__toggle, .nav__panel, .nav__scrim { display: none; }
}
```

### 3.4 Hero

| | |
|---|---|
| **Anatomia** | Eyebrow "Escola particular em Jupi-PE" → H1 (slogan + "aqui em Jupi", 1 marca-texto) → lead (etapas + bairro + convite) → CTA primário `--lg` + secundário → nota (horário da secretaria, "sem compromisso") · Imagem 4:3 com máscara blob + blob amarelo atrás + **selo de confiança** (ex.: "Todas as salas climatizadas" quando confirmado). |
| **Imagem padrão** | Sala climatizada **sem alunos**, luz da manhã. Alternativa: fachada. Rosto de aluno só com termo assinado (§7). Imagem é o LCP: `fetchpriority="high"`, sem `loading="lazy"`, AVIF ≤ 120 KB a 1280px. |
| **Selo de confiança** | 1 dado **confirmado**: "Todas as salas climatizadas" ou "Em Jupi desde [ano]". Se nenhum confirmado → selo oculto. Nunca "Escola segura", "Nº 1". |
| **Mobile** | Texto primeiro, imagem depois; botões empilham; H1 34px. |

```html
<section class="hero" id="inicio" aria-labelledby="hero-title">
  <div class="container hero__inner">
    <div class="hero__content">
      <span class="eyebrow">Escola particular em Jupi-PE</span>
      <h1 class="hero__title" id="hero-title">Aprendizagem com diversão, <span class="hl">alegria e amor</span>, aqui em Jupi</h1>
      <p class="hero__lead">Educação Infantil e Ensino Fundamental <span class="pending">[CONFIRMAR: 1º ao 4º/5º ano]</span> no Loteamento Silvestre. Venha conhecer as salas, conversar com a coordenação e tirar suas dúvidas pessoalmente.</p>
      <div class="btn-group">
        <a class="btn btn--lg" href="https://wa.me/5500000000000" data-wa><svg class="icon btn__icon" aria-hidden="true"><use href="#i-chat"/></svg>Agendar visita pelo WhatsApp</a>
        <a class="btn btn--secondary" href="#matriculas">Ver valores e matrícula</a>
      </div>
      <p class="hero__note">Secretaria: <span class="pending">[PREENCHER: dias e horários]</span> · Sem compromisso.</p>
    </div>
    <div class="hero__media">
      <!-- Foto padrão: sala climatizada SEM alunos (slot hero em content.json). -->
      <div class="hero__img photo-pending" role="img" aria-label="Foto da sala de aula a produzir"><svg class="icon" aria-hidden="true"><use href="#i-camoff"/></svg>Foto a produzir: sala climatizada, sem alunos, luz da manhã</div>
      <span class="hero__badge"><svg class="icon" aria-hidden="true"><use href="#i-snow"/></svg>Todas as salas climatizadas <span class="pending">[CONFIRMAR]</span></span>
    </div>
  </div>
</section>
```

```css
.hero { padding-block: var(--space-10) var(--section-py); overflow: hidden; }
.hero__inner { display: grid; gap: var(--space-10); align-items: center; }
.hero__content { display: grid; gap: var(--space-5); justify-items: start; }
.hero__title { font-size: var(--text-display); }
.hero__lead { font-size: var(--text-lead); color: var(--color-text-body); }
.hero__note { font-size: var(--text-small); color: var(--color-text-muted); }
.hero__media { position: relative; justify-self: center; width: 100%; max-width: var(--hero-media-max); }
.hero__img { width: 100%; aspect-ratio: var(--ratio-hero); object-fit: cover; border-radius: var(--radius-blob); background: var(--color-surface-brand); }
.hero__media::before { content: ""; position: absolute; inset: auto calc(-1 * var(--space-4)) calc(-1 * var(--space-4)) auto; width: 60%; height: 60%;
  border-radius: var(--radius-blob); background: var(--color-accent); z-index: -1; }
.hero__badge { position: absolute; left: 0; bottom: var(--space-6); display: inline-flex; align-items: center; gap: var(--space-2);
  padding: var(--space-3) var(--space-4); border-radius: var(--radius-md); background: var(--color-surface); box-shadow: var(--shadow-md);
  font-weight: var(--weight-bold); font-size: var(--text-small); color: var(--color-text); }
.hero__badge svg { width: var(--icon-lg); height: var(--icon-lg); color: var(--color-primary-shadow); }
@media (min-width: 64em) { .hero__inner { grid-template-columns: 1.05fr 0.95fr; } .hero { padding-top: var(--space-16); } }
```

### 3.5 Divisor em onda "da fonte"

SVG decorativo (`aria-hidden`), 40px (64px ≥768). **Regra:** `background` = cor da seção de cima; `color` (preenchimento) = cor da seção de baixo. Máx. 1 por transição; não usar entre seções da mesma cor.

```html
<svg class="wave" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true"><path fill="currentColor" d="M0 48C180 16 360 16 540 40s360 40 540 16 270-40 360-24V80H0Z"/></svg>
```

```css
/* Onda "da fonte": colocar no fim de uma seção; color = cor da seção SEGUINTE. Decorativa (aria-hidden). */
.wave { display: block; width: 100%; height: var(--space-10); color: var(--color-bg-alt); margin-bottom: calc(-1 * var(--border-1)); }
.wave--brand { color: var(--color-surface-brand); }
.wave--dark { color: var(--color-surface-dark); }
.wave--bg { color: var(--color-bg); }
@media (min-width: 48em) { .wave { height: var(--space-16); } }
```

### 3.6 Card de etapa

| | |
|---|---|
| **Anatomia** | Ícone 32px em quadrado 56px laranja-50 → H3 nome da etapa → badge de faixa etária → lista (turmas, turnos, creche/material) → link "Perguntar sobre vagas →" (abre WhatsApp com a etapa na mensagem). |
| **Variantes** | `stage-card` (Infantil, ícone laranja) · `stage-card--accent` (Fundamental, ícone em amarelo-100). |
| **Estados** | hover: sobe 2px + sombra md · focus-visible no link · sem estado "ativo". |
| **Conteúdo** | Etapas e anos **só os autorizados** [DOSSIÊ]. Idades vêm de `content.json → etapas[].faixa_etaria`. Hoje tudo `[CONFIRMAR]` (Infantil I–III? creche? Fundamental até 4º ou 5º?). |

```html
<article class="stage-card">
  <span class="stage-card__icon"><svg class="icon" aria-hidden="true"><use href="#i-smile"/></svg></span>
  <h3>Educação Infantil</h3>
  <span class="badge stage-card__age"><span class="pending">[CONFIRMAR: idades]</span></span>
  <ul class="stage-card__list">
    <li>Turmas: <span class="pending">[CONFIRMAR: Infantil I, II e III]</span></li>
    <li>Turnos: <span class="pending">[PREENCHER]</span></li>
    <li>Creche/berçário: <span class="pending">[CONFIRMAR]</span></li>
  </ul>
  <a class="btn btn--link" href="https://wa.me/5500000000000" data-wa data-etapa="Educação Infantil">Perguntar sobre vagas<svg class="icon" aria-hidden="true"><use href="#i-arrow"/></svg></a>
</article>
```

```css
.stage-card { display: grid; gap: var(--space-4); align-content: start; padding: var(--card-pad); border-radius: var(--radius-lg);
  background: var(--color-surface); border: var(--border-1) solid var(--color-border); box-shadow: var(--shadow-sm);
  transition: transform var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard); }
.stage-card:hover { transform: translateY(var(--translate-lift)); box-shadow: var(--shadow-md); }
.stage-card__icon { display: grid; place-items: center; width: var(--icon-badge); height: var(--icon-badge); border-radius: var(--radius-md); background: var(--color-surface-brand); color: var(--color-primary-shadow); }
.stage-card__icon svg { width: var(--icon-xl); height: var(--icon-xl); }
.stage-card__age { justify-self: start; }
.stage-card__list { margin: 0; padding: 0; list-style: none; display: grid; gap: var(--space-2); font-size: var(--text-small); }
.stage-card__list li { display: flex; gap: var(--space-2); align-items: baseline; }
.stage-card__list li::before { content: ""; flex: none; width: var(--space-2); height: var(--space-2); border-radius: var(--radius-pill); background: var(--color-primary); transform: translateY(calc(-1 * var(--border-1))); }
.stage-card--accent .stage-card__icon { background: var(--color-surface-highlight); }
```

### 3.7 Card de diferencial

| | |
|---|---|
| **Anatomia** | Ícone 24px em círculo 56px com borda tracejada laranja-300 (lembra carimbo/adesivo) → H3 → texto curto (≤ 25 palavras). Variante `feature--wide` ocupa a linha toda com ícone à esquerda. |
| **Itens permitidos** | Salas climatizadas [PROVÁVEL] · Turmas pequenas [número a PREENCHER] · Inclusão [PROVÁVEL + confirmar atendimento] · Pátio coberto e parquinho [PROVÁVEL] · Aprender fora da sala [CONFIRMADO] · A rotina no Instagram [CONFIRMADO]. |
| **Proibidos** | Piscina, biblioteca, auditório, laboratório, quadra, segurança/portaria/câmeras, comparação com outra escola. |

```html
<article class="feature">
  <span class="feature__icon"><svg class="icon" aria-hidden="true"><use href="#i-snow"/></svg></span>
  <h3>Salas climatizadas</h3>
  <p class="feature__text"><span class="pending">[CONFIRMAR: 11]</span> salas com ar-condicionado, para estudar com conforto no calor.</p>
</article>
```

```css
.feature { display: grid; gap: var(--space-3); align-content: start; padding: var(--card-pad); border-radius: var(--radius-lg); background: var(--color-surface); }
.section--alt .feature, .section--brand .feature { box-shadow: var(--shadow-xs); }
.feature__icon { display: grid; place-items: center; width: var(--icon-badge); height: var(--icon-badge); border-radius: var(--radius-pill);
  background: var(--color-surface-brand); color: var(--color-primary-shadow); border: var(--border-2) dashed var(--color-orange-300); }
.feature__icon svg { width: var(--icon-lg); height: var(--icon-lg); }
.feature__text { font-size: var(--text-small); color: var(--color-text-body); }
.feature--wide { grid-column: 1 / -1; }
@media (min-width: 48em) { .feature--wide { grid-template-columns: auto 1fr; column-gap: var(--space-6); align-items: center; } .feature--wide .feature__icon { grid-row: span 2; } }
```

### 3.8 Linha do tempo "Um dia na escola"

Lista ordenada (`<ol>`) com marcador laranja 16px e trilho tracejado. Vertical no celular, horizontal (6 colunas) ≥1024px. Cada passo: horário (eyebrow) → H3 → 1 frase. Horários e textos vêm de `content.json → rotina` (hoje `[PREENCHER]`). "Saída" descreve o procedimento real, **sem prometer segurança**.

```html
<ol class="timeline">
  <li class="timeline__item"><span class="timeline__time"><span class="pending">[hora]</span></span><h3 class="timeline__title">Chegada e acolhida</h3><p class="timeline__text"><span class="pending">[PREENCHER: quem recebe a criança]</span></p></li>
  <li class="timeline__item"><span class="timeline__time"><span class="pending">[hora]</span></span><h3 class="timeline__title">Roda de conversa</h3><p class="timeline__text"><span class="pending">[CONFIRMAR]</span></p></li>
  <li class="timeline__item"><span class="timeline__time"><span class="pending">[hora]</span></span><h3 class="timeline__title">Atividades da turma</h3><p class="timeline__text"><span class="pending">[PREENCHER]</span></p></li>
  <li class="timeline__item"><span class="timeline__time"><span class="pending">[hora]</span></span><h3 class="timeline__title">Lanche</h3><p class="timeline__text"><span class="pending">[CONFIRMAR: oferecido ou levado]</span></p></li>
  <li class="timeline__item"><span class="timeline__time"><span class="pending">[hora]</span></span><h3 class="timeline__title">Recreio no pátio</h3><p class="timeline__text"><span class="pending">[CONFIRMAR]</span></p></li>
  <li class="timeline__item"><span class="timeline__time"><span class="pending">[hora]</span></span><h3 class="timeline__title">Saída</h3><p class="timeline__text"><span class="pending">[PREENCHER: como a criança é entregue]</span></p></li>
</ol>
```

```css
.timeline { list-style: none; margin: 0; padding: 0; display: grid; gap: var(--space-6); position: relative; }
.timeline::before { content: ""; position: absolute; top: var(--space-2); bottom: var(--space-2); left: calc(var(--timeline-dot) / 2 - var(--border-1)); width: var(--border-2);
  background: repeating-linear-gradient(var(--color-orange-300) 0 var(--space-2), transparent var(--space-2) var(--space-4)); }
.timeline__item { position: relative; display: grid; gap: var(--space-1); padding-left: calc(var(--timeline-dot) + var(--space-4)); }
.timeline__item::before { content: ""; position: absolute; left: 0; top: var(--space-1); width: var(--timeline-dot); height: var(--timeline-dot); border-radius: var(--radius-pill);
  background: var(--color-primary); box-shadow: 0 0 0 var(--space-1) var(--color-surface-brand); }
.timeline__time { font-size: var(--text-caption); font-weight: var(--weight-extrabold); letter-spacing: var(--tracking-wide); color: var(--color-text-brand); text-transform: uppercase; }
.timeline__title { font-size: var(--text-h4); }
.timeline__text { font-size: var(--text-small); }
@media (min-width: 64em) {
  .timeline { grid-auto-flow: column; grid-auto-columns: 1fr; gap: var(--space-4); }
  .timeline::before { top: calc(var(--timeline-dot) / 2 - var(--border-1)); bottom: auto; left: 0; right: 0; width: auto; height: var(--border-2);
    background: repeating-linear-gradient(90deg, var(--color-orange-300) 0 var(--space-2), transparent var(--space-2) var(--space-4)); }
  .timeline__item { padding-left: 0; padding-top: calc(var(--timeline-dot) + var(--space-4)); }
}
```

### 3.9 Card da equipe (com slot de foto pendente)

| | |
|---|---|
| **Anatomia** | Foto 120px em blob → nome de exibição ("Tia Ana") → função · formação. |
| **Slot obrigatório** | Sem termo assinado/vigente → `.photo-pending` com ícone de câmera riscada + "Foto pendente de autorização". Nunca usar foto de banco no lugar. |
| **Regra da seção** | Só aparece em produção com **≥ 3 perfis** completos (nome, função, formação, termo). Adultos podem ter nome; crianças, nunca. |

```html
<article class="team-card">
  <div class="photo-pending" role="img" aria-label="Foto pendente de autorização"><svg class="icon" aria-hidden="true"><use href="#i-camoff"/></svg>Foto pendente de autorização</div>
  <h3 class="team-card__name"><span class="pending">[Tia Nome]</span></h3>
  <p class="team-card__role"><span class="pending">[Função]</span> · <span class="pending">[Formação]</span></p>
</article>
```

```css
.team-card { display: grid; justify-items: center; gap: var(--space-2); padding: var(--card-pad); text-align: center; border-radius: var(--radius-lg); background: var(--color-surface); border: var(--border-1) solid var(--color-border); }
.team-card__photo { width: var(--avatar); height: var(--avatar); border-radius: var(--radius-blob); object-fit: cover; background: var(--color-surface-brand); }
.team-card__name { font-size: var(--text-h4); }
.team-card__role { font-size: var(--text-small); color: var(--color-text-muted); }
/* Slot obrigatório quando não há termo de autorização assinado */
.photo-pending { display: grid; place-items: center; gap: var(--space-1); padding: var(--space-3); text-align: center;
  background: repeating-linear-gradient(45deg, var(--color-surface-brand) 0 var(--space-2), var(--color-surface) var(--space-2) var(--space-4));
  border: var(--border-2) dashed var(--color-orange-300); color: var(--color-text-brand); font-size: var(--text-caption); font-weight: var(--weight-bold); }
.photo-pending svg { width: var(--icon-lg); height: var(--icon-lg); }
.team-card .photo-pending { width: var(--avatar); height: var(--avatar); border-radius: var(--radius-blob); }
```

### 3.10 Galeria de estrutura

Grade `auto-fit` (mín. 240px); variante `gallery--feature` com a 1ª foto ocupando 2 linhas (≥1024). Proporção 3:2, raio 24px (1ª foto com um canto 48px). **Sem rostos por padrão**; legendas curtas e verdadeiras ("Pátio coberto"). Slots `.photo-pending` mostram "Foto a produzir" enquanto não há foto. Sem lightbox/carrossel na v1.

```html
<div class="gallery gallery--feature">
  <figure class="gallery__item"><div class="gallery__img photo-pending" role="img" aria-label="Foto a produzir"><svg class="icon" aria-hidden="true"><use href="#i-camoff"/></svg>Sala climatizada</div><figcaption class="gallery__caption">Sala de aula <span class="pending">[CONFIRMAR climatizada]</span></figcaption></figure>
  <figure class="gallery__item"><div class="gallery__img photo-pending" role="img" aria-label="Foto a produzir"><svg class="icon" aria-hidden="true"><use href="#i-camoff"/></svg>Pátio coberto</div><figcaption class="gallery__caption">Pátio coberto</figcaption></figure>
  <figure class="gallery__item"><div class="gallery__img photo-pending" role="img" aria-label="Foto a produzir"><svg class="icon" aria-hidden="true"><use href="#i-camoff"/></svg>Parquinho</div><figcaption class="gallery__caption">Parquinho</figcaption></figure>
  <figure class="gallery__item"><div class="gallery__img photo-pending" role="img" aria-label="Foto a produzir"><svg class="icon" aria-hidden="true"><use href="#i-camoff"/></svg>Rampa com corrimão</div><figcaption class="gallery__caption">Acessibilidade</figcaption></figure>
  <figure class="gallery__item"><div class="gallery__img photo-pending" role="img" aria-label="Foto a produzir"><svg class="icon" aria-hidden="true"><use href="#i-camoff"/></svg>Fachada</div><figcaption class="gallery__caption">Entrada da escola</figcaption></figure>
</div>
```

```css
.gallery { display: grid; gap: var(--space-4); grid-template-columns: repeat(auto-fit, minmax(min(var(--gallery-min), 100%), 1fr)); }
.gallery__item { margin: 0; display: grid; gap: var(--space-2); }
.gallery__img { width: 100%; aspect-ratio: var(--ratio-card); object-fit: cover; border-radius: var(--radius-lg); background: var(--color-bg-alt); }
.gallery__item:first-child .gallery__img { border-radius: var(--radius-lg) var(--radius-2xl) var(--radius-lg) var(--radius-lg); }
.gallery__caption { font-size: var(--text-small); font-weight: var(--weight-semibold); color: var(--color-text); }
.gallery .photo-pending { aspect-ratio: var(--ratio-card); border-radius: var(--radius-lg); }
@media (min-width: 64em) { .gallery--feature { grid-template-columns: 2fr 1fr 1fr; } .gallery--feature .gallery__item:first-child { grid-row: span 2; } .gallery--feature .gallery__item:first-child .gallery__img { height: 100%; aspect-ratio: auto; } }
```

### 3.11 Cards de eventos

| | |
|---|---|
| **Anatomia** | Pílula do mês (cor do tom) → H3 → 1–2 frases → (opcional) foto 3:2 com regra de autorização. Borda superior 4px na cor do tom. |
| **Tons** | padrão laranja · `--sky` (7 de Setembro, inclusão) · `--pink` (Semana da Criança) · `--yellow` (Fonte Folia). Rosa e azul-céu **só aqui**. |
| **Itens** | Folclore (agosto [INFERIDO]) · 7 de Setembro, desfile e fanfarra · Semana da Criança (outubro [INFERIDO]) · Fonte Folia (mês [CONFIRMAR]) · Aulas de campo "Detetives da saúde" · Ações de inclusão — todos [CONFIRMADO no Instagram]. |
| **Imagem** | Preferir detalhes: instrumentos da fanfarra, fantasias de costas, mãos em atividade. Personagens/decoração podem aparecer como **ambientação**, nunca como "isca" de venda. |

```html
<article class="event-card"><span class="event-card__month">Agosto</span><div class="stack"><h3 class="event-card__title">Folclore</h3><p class="event-card__text"><span class="pending">[PREENCHER: o que as turmas fazem]</span></p></div></article>
```

```css
.event-card { --_tone-bg: var(--color-surface-brand); --_tone-fg: var(--color-text-brand);
  display: grid; gap: var(--space-3); align-content: start; padding: var(--card-pad);
  border-radius: var(--radius-lg); background: var(--color-surface); border: var(--border-1) solid var(--color-border); border-top: var(--space-1) solid var(--_tone-bg); }
.event-card__month { justify-self: start; display: inline-flex; align-items: center; gap: var(--space-1); min-height: var(--space-8); padding: 0 var(--space-3);
  border-radius: var(--radius-pill); background: var(--_tone-bg); color: var(--_tone-fg); font-size: var(--text-caption); font-weight: var(--weight-black);
  text-transform: uppercase; letter-spacing: var(--tracking-wide); line-height: var(--leading-snug); }
.event-card__title { font-size: var(--text-h4); }
.event-card__text { font-size: var(--text-small); }
.event-card--pink { --_tone-bg: var(--color-event-pink-bg); --_tone-fg: var(--color-event-pink); }
.event-card--sky { --_tone-bg: var(--color-event-sky-bg); --_tone-fg: var(--color-event-sky); }
.event-card--yellow { --_tone-bg: var(--color-surface-highlight); --_tone-fg: var(--color-text); }
```

### 3.12 Depoimentos reais

Componente pronto, **estado padrão = oculto**. Renderiza só se `depoimentos.exibir_secao = true` e houver itens com autorização escrita. Assinatura: primeiro nome do adulto + relação + etapa ("Ana, mãe de aluno do Infantil"). Nunca nome de criança, nunca depoimento de criança, nunca estrelas/notas inventadas. Em staging mostra `.testimonial-empty` com a instrução.

```html
<p class="testimonial-empty">Nenhum depoimento autorizado ainda. Peça aos pais um texto curto e o termo de autorização assinado. Nunca use depoimento de criança.</p>
<!-- Quando houver: -->
<!-- <figure class="testimonial"><blockquote class="testimonial__quote">“Texto real do responsável.”</blockquote><figcaption class="testimonial__author">Ana, mãe de aluno do Infantil</figcaption></figure> -->
```

```css
/* Renderizar SOMENTE se content.depoimentos.exibir_secao=true e itens.length>0. Sem estado "exemplo". */
.testimonial { margin: 0; display: grid; gap: var(--space-4); padding: var(--card-pad); border-radius: var(--radius-lg); background: var(--color-surface); border-left: var(--space-1) solid var(--color-primary); }
.testimonial__quote { margin: 0; font-size: var(--text-lead); color: var(--color-text); }
.testimonial__author { font-size: var(--text-small); font-weight: var(--weight-bold); color: var(--color-text-muted); }
.testimonial-empty { padding: var(--card-pad); border-radius: var(--radius-lg); border: var(--border-2) dashed var(--color-border-strong); color: var(--color-text-muted); font-size: var(--text-small); }
/* .testimonial-empty aparece APENAS em staging; em produção a seção inteira não é renderizada. */
```

### 3.13 Bloco "Matrículas" (Lei 9.870/99)

| | |
|---|---|
| **Anatomia** | Seção navy → 3 passos numerados (círculo amarelo) → **tabela de valores por etapa** (anuidade, parcelas) + linhas "Outros custos" e "Vagas por turma" → card "Antes de matricular" (período, documentos, **link da proposta de contrato PDF**) → nota legal com data de publicação. Coluna direita: formulário (§3.15). |
| **Regras** | Valores **por etapa** (nunca "a partir de" sem etapa). Publicar valores, contrato e vagas por sala **≥ 45 dias antes da data final de matrícula**. Custos extras listados ou "não há". Tudo `[PREENCHER]` hoje. |

```html
<div class="enroll__grid">
  <div class="stack" style="gap:var(--grid-gap)">
    <ol class="steps">
      <li class="steps__item"><h3>Agende a visita</h3><p>Fale com a secretaria pelo WhatsApp e escolha um horário.</p></li>
      <li class="steps__item"><h3>Conheça a escola</h3><p>Veja as salas, converse com a coordenação, tire dúvidas.</p></li>
      <li class="steps__item"><h3>Leve os documentos</h3><p>A matrícula é feita na secretaria, presencialmente.</p></li>
    </ol>
    <table class="price-table">
      <caption>Valores 2027 por etapa</caption>
      <thead><tr><th scope="col">Etapa</th><th scope="col">Anuidade</th><th scope="col">Parcelas</th></tr></thead>
      <tbody>
        <tr><th scope="row">Educação Infantil</th><td><span class="pending">[PREENCHER]</span></td><td><span class="pending">[PREENCHER]</span></td></tr>
        <tr><th scope="row">Fundamental — Anos Iniciais</th><td><span class="pending">[PREENCHER]</span></td><td><span class="pending">[PREENCHER]</span></td></tr>
        <tr><th scope="row">Outros custos</th><td colspan="2"><span class="pending">[PREENCHER: matrícula, material, uniforme — ou “não há”]</span></td></tr>
        <tr><th scope="row">Vagas por turma</th><td colspan="2"><span class="pending">[PREENCHER]</span></td></tr>
      </tbody>
    </table>
    <div class="enroll__card">
      <h3>Antes de matricular</h3>
      <p><strong>Período:</strong> <span class="pending">[PREENCHER]</span><br><strong>Documentos:</strong> <span class="pending">[PREENCHER: lista oficial]</span></p>
      <a class="btn btn--secondary" href="#"><svg class="icon btn__icon" aria-hidden="true"><use href="#i-file"/></svg>Ler a proposta de contrato 2027 (PDF)</a>
    </div>
    <p class="enroll__legal">Valores, proposta de contrato e número de vagas publicados em <span class="pending">[data]</span>, no mínimo 45 dias antes do fim do prazo de matrícula (Lei 9.870/1999, art. 2º).</p>
  </div>
```

```css
.enroll__grid { display: grid; gap: var(--grid-gap); }
.enroll__grid > * { min-width: 0; }
@media (min-width: 64em) { .enroll__grid { grid-template-columns: 1.2fr 0.8fr; align-items: start; } }
.steps { list-style: none; margin: 0; padding: 0; display: grid; gap: var(--space-4); counter-reset: step; }
@media (min-width: 48em) { .steps { grid-template-columns: repeat(3, 1fr); } }
.steps__item { counter-increment: step; display: grid; gap: var(--space-2); padding: var(--card-pad); border-radius: var(--radius-lg); background: var(--color-surface); color: var(--color-text-body); }
.steps__item::before { content: counter(step); display: grid; place-items: center; width: var(--tap-min); height: var(--tap-min); border-radius: var(--radius-pill);
  background: var(--color-accent); color: var(--color-on-accent); font-family: var(--font-display); font-weight: var(--weight-black); font-size: var(--text-h4); }
.steps__item h3 { color: var(--color-text); font-size: var(--text-h4); }
.price-table { width: 100%; table-layout: fixed; border-collapse: collapse; background: var(--color-surface); color: var(--color-text-body); border-radius: 0 0 var(--radius-lg) var(--radius-lg); overflow: hidden; font-size: var(--text-small); }
.price-table caption { text-align: left; padding: var(--space-4) var(--space-4) var(--space-2); font-weight: var(--weight-bold); color: var(--color-text); background: var(--color-surface); border-radius: var(--radius-lg) var(--radius-lg) 0 0; }
.price-table th, .price-table td { padding: var(--space-3) var(--space-4); text-align: left; border-top: var(--border-1) solid var(--color-border-subtle); vertical-align: top; overflow-wrap: anywhere; }
.price-table th { color: var(--color-text); font-weight: var(--weight-bold); }
.enroll__card { display: grid; gap: var(--space-4); padding: var(--card-pad); border-radius: var(--radius-lg); background: var(--color-surface); color: var(--color-text-body); }
.enroll__card h3 { color: var(--color-text); }
.enroll__legal { font-size: var(--text-caption); color: var(--color-text-on-dark-muted); }
```

### 3.14 FAQ / accordion

`<details>/<summary>` nativo (acessível sem JS, abre com Enter/Espaço). Pergunta em Nunito 700 18–20px; indicador "+"/"−" em círculo 32px; item aberto ganha borda laranja-300 + sombra sm. **8 perguntas** cobrindo as objeções do dossiê (o dossiê lista 8, não 7: por que pagar · custos escondidos · quem cuida · entrada/saída · alfabetização · depois do último ano · regularização · inclusão sem taxa extra). Respostas em `content.json → faq`.

```html
<div class="faq">
  <details class="faq__item"><summary class="faq__q">Por que escolher uma escola particular se a pública é gratuita?</summary><div class="faq__a"><p>Cada família decide o que é melhor para o seu filho. Aqui você encontra <span class="pending">[CONFIRMAR: turmas de até X crianças]</span>, <span class="pending">[CONFIRMAR: salas climatizadas]</span> e contato direto com a professora. Venha conhecer e compare com calma.</p></div></details>
  <details class="faq__item"><summary class="faq__q">Quanto custa? Tem alguma taxa além da mensalidade?</summary><div class="faq__a"><p><span class="pending">[PREENCHER: valores por etapa e todos os custos extras]</span>. Veja a <a href="#matriculas">proposta de contrato 2027</a>.</p></div></details>
  <details class="faq__item"><summary class="faq__q">Quem cuida do meu filho durante o dia?</summary><div class="faq__a"><p><span class="pending">[PREENCHER: professora da turma, auxiliares, formação]</span></p></div></details>
  <details class="faq__item"><summary class="faq__q">Como funciona a entrada e a saída das crianças?</summary><div class="faq__a"><p><span class="pending">[PREENCHER: procedimento real de entrega ao responsável]</span></p></div></details>
  <details class="faq__item"><summary class="faq__q">Como a escola acompanha a alfabetização?</summary><div class="faq__a"><p><span class="pending">[PREENCHER: método, material e como os pais acompanham]</span>. A BNCC prevê que a alfabetização aconteça nos dois primeiros anos do Ensino Fundamental.</p></div></details>
  <details class="faq__item"><summary class="faq__q">E quando meu filho terminar o último ano daqui?</summary><div class="faq__a"><p><span class="pending">[PREENCHER: até que ano a escola atende e como ajuda na transferência]</span></p></div></details>
  <details class="faq__item"><summary class="faq__q">A escola é regularizada?</summary><div class="faq__a"><p>Código INEP <span class="pending">[CONFIRMAR: 26182220]</span>. Ato de autorização nº <span class="pending">[PREENCHER]</span>.</p></div></details>
  <details class="faq__item"><summary class="faq__q">Vocês recebem crianças com deficiência? Cobra algo a mais?</summary><div class="faq__a"><p><span class="pending">[CONFIRMAR antes de publicar]</span> Recebemos, sem cobrança de valor adicional, como determina a Lei Brasileira de Inclusão. Converse com a coordenação na visita.</p></div></details>
</div>
```

```css
/* <details>/<summary> nativo: acessível por teclado e leitor de tela sem JS. */
.faq { display: grid; gap: var(--space-3); }
.faq__item { border-radius: var(--radius-md); background: var(--color-surface); border: var(--border-1) solid var(--color-border); }
.faq__item[open] { border-color: var(--color-orange-300); box-shadow: var(--shadow-sm); }
.faq__q { display: flex; align-items: center; justify-content: space-between; gap: var(--space-4); min-height: var(--tap-min);
  padding: var(--space-4) var(--space-5); cursor: pointer; list-style: none; font-family: var(--font-display); font-weight: var(--weight-bold); font-size: var(--text-h4); color: var(--color-text); line-height: var(--leading-heading); }
.faq__q::-webkit-details-marker { display: none; }
.faq__q::after { content: "+"; flex: none; display: grid; place-items: center; width: var(--space-8); height: var(--space-8); border-radius: var(--radius-pill);
  background: var(--color-surface-brand); color: var(--color-text-brand); font-weight: var(--weight-black); transition: transform var(--duration-base) var(--ease-standard); }
.faq__item[open] .faq__q::after { content: "−"; background: var(--color-primary); color: var(--color-on-primary); }
.faq__q:focus-visible { outline-offset: calc(-1 * var(--focus-offset)); }
.faq__a { padding: 0 var(--space-5) var(--space-5); display: grid; gap: var(--space-3); }
```

### 3.15 Formulário mínimo LGPD

| | |
|---|---|
| **Campos** | 1. Seu nome (`autocomplete="name"`) · 2. Seu WhatsApp (`type="tel"`, `inputmode="tel"`, máscara opcional, validação 10–11 dígitos) · 3. Etapa de interesse (select). **Proibido**: nome completo da criança, data de nascimento, CPF, laudo, deficiência, alergia, saúde. |
| **Consentimento** | Checkbox obrigatório, **não pré-marcado**: "Li a Política de Privacidade e concordo que a escola use estes dados para responder e agendar a visita." Checkbox **separado e opcional** para novidades. |
| **Envio** | Não há servidor: o JS monta a mensagem e abre `wa.me`. Nada é armazenado no site. (Alternativa com e-mail via Formspree/Web3Forms exige atualizar a política: dados passam por terceiro.) |
| **Estados** | default · hover (borda ink-700) · focus-visible (borda navy + halo navy-100) · erro (`.is-invalid`: borda e fundo vermelhos + mensagem com ícone, `aria-invalid`, foco vai ao 1º campo inválido) · disabled · sucesso (`.is-success`, `role="status"`, link de reserva "Se não abriu, toque aqui") · erro geral. |
| **Mensagens** | Nome: "Digite seu nome." · WhatsApp: "Confira o número: precisa ter DDD + 8 ou 9 dígitos." · Etapa: "Escolha a etapa." · Consentimento: "Marque para continuar." |
| **Celular** | Campos 52px, fonte 17px (evita zoom do iOS), labels acima, botão de largura total, barra fixa some com o teclado. |

```html
<form class="form" id="form-visita" novalidate aria-labelledby="form-title">
  <h3 id="form-title">Agende sua visita</h3>
  <p class="form__privacy">Só pedimos o essencial. Nada sobre a criança além da etapa.</p>
  <div class="field">
    <label class="field__label" for="f-nome">Seu nome <span class="req" aria-hidden="true">*</span></label>
    <input class="field__input" id="f-nome" name="nome" autocomplete="name" required aria-describedby="f-nome-err">
    <span class="field__error" id="f-nome-err"><svg class="icon" aria-hidden="true"><use href="#i-alert"/></svg>Digite seu nome.</span>
  </div>
  <div class="field">
    <label class="field__label" for="f-wa">Seu WhatsApp <span class="req" aria-hidden="true">*</span></label>
    <input class="field__input" id="f-wa" name="whatsapp" type="tel" inputmode="tel" autocomplete="tel-national" placeholder="(87) 9 0000-0000" required aria-describedby="f-wa-hint f-wa-err">
    <span class="field__hint" id="f-wa-hint">Com DDD.</span>
    <span class="field__error" id="f-wa-err"><svg class="icon" aria-hidden="true"><use href="#i-alert"/></svg>Confira o número: precisa ter DDD + 8 ou 9 dígitos.</span>
  </div>
  <div class="field">
    <label class="field__label" for="f-etapa">Etapa de interesse <span class="req" aria-hidden="true">*</span></label>
    <select class="field__input" id="f-etapa" name="etapa" required aria-describedby="f-etapa-err">
      <option value="">Escolha uma opção</option>
      <option>Educação Infantil</option>
      <option>1º ano</option><option>2º ano</option><option>3º ano</option><option>4º ano</option>
      <option>Ainda não sei — quero orientação</option>
    </select>
    <span class="field__error" id="f-etapa-err"><svg class="icon" aria-hidden="true"><use href="#i-alert"/></svg>Escolha a etapa.</span>
  </div>
  <div class="field">
    <label class="check"><input type="checkbox" name="consentimento" required aria-describedby="f-cons-err"><span>Li a <a href="/privacidade">Política de Privacidade</a> e concordo que a escola use estes dados para responder e agendar a visita. <span class="req" aria-hidden="true">*</span></span></label>
    <span class="field__error" id="f-cons-err"><svg class="icon" aria-hidden="true"><use href="#i-alert"/></svg>Marque para continuar.</span>
  </div>
  <label class="check"><input type="checkbox" name="novidades"><span>Quero receber novidades da escola pelo WhatsApp (opcional).</span></label>
  <button class="btn btn--block" type="submit"><svg class="icon btn__icon" aria-hidden="true"><use href="#i-chat"/></svg>Agendar pelo WhatsApp</button>
  <div class="form__status" role="status" aria-live="polite"></div>
  <p class="form__privacy">Ao enviar, o WhatsApp abre com a mensagem pronta. Nada fica guardado neste site.</p>
</form>
```

```css
.form { display: grid; gap: var(--space-5); padding: var(--card-pad); border-radius: var(--radius-lg); background: var(--color-surface); box-shadow: var(--shadow-md); }
.field { display: grid; gap: var(--space-2); }
.field__label { font-weight: var(--weight-bold); color: var(--color-text); font-size: var(--text-small); }
.field__label .req { color: var(--color-danger); }
.field__input { width: 100%; min-height: var(--input-h); padding: 0 var(--space-4); font: inherit; font-size: var(--text-body); color: var(--color-text);
  background: var(--color-surface); border: var(--border-2) solid var(--color-border-strong); border-radius: var(--radius-sm);
  transition: border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard); }
.field__input:hover { border-color: var(--color-ink-700); }
.field__input:focus-visible { outline: none; border-color: var(--color-focus); box-shadow: 0 0 0 var(--border-3) var(--color-navy-100); }
.field__input:disabled { opacity: var(--opacity-disabled); cursor: not-allowed; background: var(--color-bg-alt); }
select.field__input { appearance: none; padding-right: var(--space-10);
  background-image: linear-gradient(45deg, transparent 50%, var(--color-text) 50%), linear-gradient(135deg, var(--color-text) 50%, transparent 50%);
  background-position: calc(100% - var(--space-5)) 50%, calc(100% - var(--space-4)) 50%; background-size: var(--space-1) var(--space-1), var(--space-1) var(--space-1); background-repeat: no-repeat; }
.field__hint { font-size: var(--text-caption); color: var(--color-text-muted); }
.field__error { display: none; align-items: center; gap: var(--space-1); font-size: var(--text-small); font-weight: var(--weight-bold); color: var(--color-danger); }
.field.is-invalid .field__input { border-color: var(--color-danger); background: var(--color-danger-bg); }
.field.is-invalid .field__error { display: flex; }
.check { display: grid; grid-template-columns: auto 1fr; gap: var(--space-3); align-items: start; font-size: var(--text-small); cursor: pointer; }
.check input { width: var(--icon-lg); height: var(--icon-lg); margin: 0; accent-color: var(--color-navy-700); }
.check__box-wrap { display: grid; place-items: center; min-width: var(--tap-min); min-height: var(--space-6); }
.form__status { display: none; gap: var(--space-2); padding: var(--space-4); border-radius: var(--radius-sm); font-size: var(--text-small); font-weight: var(--weight-semibold); }
.form__status.is-success { display: grid; background: var(--color-success-bg); color: var(--color-success); }
.form__status.is-error { display: grid; background: var(--color-danger-bg); color: var(--color-danger); }
.form__privacy { font-size: var(--text-caption); color: var(--color-text-muted); }
```

### 3.16 Mapa + endereço + horário

Coluna de informações (ícone 24px + texto) + **fachada do mapa**: imagem estática (ou fundo areia) com botão "Carregar mapa"; o iframe/Leaflet só carrega após o clique (economiza ~500 KB+ e evita cookies de terceiros antes do consentimento). Botão "Abrir no mapa" com link direto para o Google Maps. Endereço e CEP `[CONFIRMAR]` até a escola escolher entre as 2 versões.

```html
<div class="location">
  <div class="location__info">
    <div class="location__row"><svg class="icon" aria-hidden="true"><use href="#i-pin"/></svg><p><span class="pending">[CONFIRMAR ENDEREÇO]</span><br>Loteamento Silvestre, Jupi-PE · CEP <span class="pending">[CONFIRMAR: 55395-000]</span></p></div>
    <div class="location__row"><svg class="icon" aria-hidden="true"><use href="#i-clock"/></svg><p>Secretaria: <span class="pending">[PREENCHER: dias e horários]</span></p></div>
    <div class="location__row"><svg class="icon" aria-hidden="true"><use href="#i-phone"/></svg><p>WhatsApp: <span class="pending">[CONFIRMAR: (87) 99931-9123]</span></p></div>
    <div class="btn-group">
      <a class="btn" href="https://wa.me/5500000000000" data-wa>Agendar visita</a>
      <a class="btn btn--secondary" href="https://www.google.com/maps/search/?api=1&query=-8.7128022,-36.4225995" rel="noopener">Abrir no mapa</a>
    </div>
  </div>
  <div class="map-facade">
    <!-- <img class="map-facade__img" src="/img/mapa-estatico.webp" alt="" width="800" height="480" loading="lazy"> -->
    <div class="map-facade__actions"><svg class="icon" aria-hidden="true"><use href="#i-pin"/></svg><p>O mapa só carrega se você pedir.</p><button class="btn btn--sm btn--secondary" type="button">Carregar mapa</button></div>
  </div>
</div>
```

```css
.location { display: grid; gap: var(--grid-gap); }
@media (min-width: 64em) { .location { grid-template-columns: 0.9fr 1.1fr; align-items: stretch; } }
.location__info { display: grid; gap: var(--space-4); align-content: start; }
.location__row { display: grid; grid-template-columns: auto 1fr; gap: var(--space-3); align-items: start; }
.location__row svg { width: var(--icon-lg); height: var(--icon-lg); color: var(--color-primary-shadow); margin-top: var(--space-1); }
/* Fachada do mapa: imagem estática + botão. O iframe/Leaflet só carrega após clique (performance + LGPD). */
.map-facade { position: relative; display: grid; place-items: center; min-height: var(--map-h); border-radius: var(--radius-lg); overflow: hidden;
  background: var(--color-bg-alt); border: var(--border-1) solid var(--color-border); }
.map-facade__img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.map-facade__actions { position: relative; display: grid; gap: var(--space-2); justify-items: center; padding: var(--space-4); border-radius: var(--radius-md); background: var(--color-surface); box-shadow: var(--shadow-md); text-align: center; }
```

### 3.17 Rodapé de conformidade

Navy, 3 colunas (marca + slogan manuscrito · navegação · contato) + **faixa legal** navy-900 com lista de definições: razão social, CNPJ, código INEP, ato de autorização, etapas autorizadas, endereço; links de Política de Privacidade, contato do encarregado de dados e Instagram oficial. Termina com a faixa do fardamento. **Nunca** linkar homônimos (Fortaleza, ABC, Surubim, "Colégio Fonte do Saber").

```html
<footer class="footer" id="rodape">
  <div class="container footer__grid">
    <div class="footer__brand">
      <svg class="footer__logo" viewBox="0 0 48 56" role="img" aria-label="Brasão (placeholder)"><path d="M24 2 44 9v18c0 13-9 22-20 27C13 49 4 40 4 27V9Z" fill="var(--color-surface-dark-alt)" stroke="var(--color-accent)" stroke-width="3"/><text x="24" y="34" text-anchor="middle" font-family="Nunito, sans-serif" font-weight="900" font-size="16" fill="#fff">FS</text></svg>
      <p class="hand">Aprendizagem com diversão, alegria e amor!</p>
    </div>
    <nav aria-label="Rodapé"><h2>Navegação</h2><ul class="footer__list"><li><a href="#etapas">Etapas</a></li><li><a href="#matriculas">Matrículas 2027</a></li><li><a href="#duvidas">Dúvidas</a></li><li><a href="/privacidade">Política de privacidade</a></li></ul></nav>
    <div><h2>Contato</h2><ul class="footer__list"><li><a href="https://wa.me/5500000000000" data-wa>WhatsApp <span class="pending">[CONFIRMAR]</span></a></li><li><a href="https://www.instagram.com/esc_fontedosaber/" rel="noopener">Instagram @esc_fontedosaber</a></li><li>Encarregado de dados: <span class="pending">[PREENCHER contato]</span></li></ul></div>
  </div>
  <div class="footer__legal">
    <div class="container">
      <dl>
        <dt>Razão social</dt><dd><span class="pending">[CONFIRMAR: Escola Fonte do Saber Limitada]</span></dd>
        <dt>CNPJ</dt><dd><span class="pending">[CONFIRMAR: 11.642.388/0001-40]</span></dd>
        <dt>Código INEP</dt><dd><span class="pending">[CONFIRMAR: 26182220]</span></dd>
        <dt>Autorização</dt><dd><span class="pending">[PREENCHER: ato nº, órgão e data]</span></dd>
        <dt>Etapas autorizadas</dt><dd><span class="pending">[PREENCHER]</span></dd>
        <dt>Endereço</dt><dd><span class="pending">[CONFIRMAR ENDEREÇO]</span>, Loteamento Silvestre, Jupi-PE</dd>
      </dl>
    </div>
  </div>
  <div class="stripe" aria-hidden="true"></div>
</footer>
```

```css
.footer { background: var(--color-surface-dark); color: var(--color-text-on-dark-muted); font-size: var(--text-small); }
.footer a { color: var(--color-text-on-dark); }
.footer a:hover { color: var(--color-text-accent-on-dark); }
.footer h2, .footer h3 { color: var(--color-text-on-dark); font-size: var(--text-h4); }
.footer__grid { display: grid; gap: var(--space-8); padding-block: var(--space-12); }
@media (min-width: 48em) { .footer__grid { grid-template-columns: 1.4fr 1fr 1fr; } }
.footer__brand { display: grid; gap: var(--space-3); align-content: start; }
.footer__logo { height: var(--space-16); width: auto; }
.footer__list { list-style: none; margin: 0; padding: 0; display: grid; gap: var(--space-1); }
.footer__list a { display: inline-flex; align-items: center; min-height: var(--tap-min); }
.footer__legal { background: var(--color-surface-dark-alt); padding-block: var(--space-6); font-size: var(--text-caption); line-height: var(--leading-normal); }
.footer__legal dl { display: grid; gap: var(--space-1) var(--space-6); margin: 0; }
@media (min-width: 48em) { .footer__legal dl { grid-template-columns: repeat(2, auto 1fr); } }
.footer__legal dt { font-weight: var(--weight-bold); color: var(--color-text-on-dark); }
.footer__legal dd { margin: 0; }
```

### 3.18 Banner de cookies

Só existe se houver Meta Pixel/GA4. Scripts de rastreio carregam **somente após "Aceitar"**. "Recusar" e "Aceitar" com o **mesmo peso visual** (sem dark pattern). Recomendação padrão: **analytics sem cookies** (Vercel Web Analytics ou Cloudflare Web Analytics) → banner desnecessário.

```html
<div class="cookie" role="dialog" aria-labelledby="cookie-txt" hidden>
  <p id="cookie-txt">Usamos cookies de medição para entender as visitas ao site. Você escolhe. <a href="/privacidade">Saiba mais</a>.</p>
  <div class="cookie__actions">
    <button class="btn btn--sm btn--secondary" type="button" data-cookie="recusar">Recusar</button>
    <button class="btn btn--sm btn--secondary" type="button" data-cookie="aceitar">Aceitar</button>
  </div>
</div>
```

```css
/* Só existe se houver Meta Pixel/GA4. Scripts de rastreio carregam APENAS após "Aceitar". */
.cookie { position: fixed; inset-inline: var(--space-4); bottom: var(--space-4); z-index: var(--z-cookie); max-width: var(--cookie-max); margin-inline: auto;
  display: grid; gap: var(--space-3); padding: var(--space-5); border-radius: var(--radius-lg); background: var(--color-surface); box-shadow: var(--shadow-lg); border: var(--border-1) solid var(--color-border); font-size: var(--text-small); }
.cookie[hidden] { display: none; }
.cookie__actions { display: flex; flex-wrap: wrap; gap: var(--space-2); }
/* Aceitar e Recusar com o MESMO peso visual (sem dark pattern) */
```

### 3.19 Badges, placeholder, faixa CTA, ícones e entrada suave

- **Badge**: pílula 32px, 14px/800. Tons: laranja (padrão), amarelo, navy, rosa e céu (só Eventos).
- **`.pending`**: placeholder visível de dado pendente (amarelo-100 + texto laranja-800 + contorno tracejado). **Só staging.**
- **`.cta-band`**: faixa de repetição do CTA (laranja-50, borda tracejada laranja-300, raio 32px).
- **`.icon`**: SVG 24px, traço 2px, `currentColor`, pontas arredondadas.
- **`.reveal`**: entrada única de cards (opacity + 12px). Sem JS, tudo visível.

```html
<span class="badge badge--yellow">1º ao 4º ano</span>
<span class="pending">[PREENCHER: horário]</span>
<div class="cta-band" style="margin-top:var(--section-gap)">
  <div class="stack">
    <h3 class="cta-band__title">Quer ver tudo isso de perto?</h3>
    <p>A visita é rápida e sem compromisso. Você conversa direto com a secretaria pelo WhatsApp.</p>
  </div>
  <a class="btn" href="https://wa.me/5500000000000" data-wa><svg class="icon btn__icon" aria-hidden="true"><use href="#i-calendar"/></svg>Agendar visita</a>
</div>
```

```css
.badge { display: inline-flex; align-items: center; gap: var(--space-1); min-height: var(--space-8); padding: 0 var(--space-3); border-radius: var(--radius-pill);
  font-size: var(--text-caption); font-weight: var(--weight-extrabold); line-height: var(--leading-snug); background: var(--color-surface-brand); color: var(--color-text-brand); }
.badge svg { width: var(--icon-sm); height: var(--icon-sm); }
.badge--yellow { background: var(--color-accent); color: var(--color-on-accent); }
.badge--navy { background: var(--color-info-bg); color: var(--color-info); }
.badge--pink { background: var(--color-event-pink-bg); color: var(--color-event-pink); }
.badge--sky { background: var(--color-event-sky-bg); color: var(--color-event-sky); }
/* Placeholder visível de dado pendente — SOMENTE em staging. check-content.mjs bloqueia em produção. */
.pending { display: inline; padding: 0 var(--space-1); border-radius: var(--radius-xs); background: var(--color-pending-bg); color: var(--color-pending);
  outline: var(--border-1) dashed var(--color-pending); font-family: var(--font-body); font-weight: var(--weight-bold); font-size: inherit; }
.cta-band { display: grid; gap: var(--space-4); align-items: center; padding: var(--card-pad); border-radius: var(--radius-xl); background: var(--color-surface-brand); border: var(--border-2) dashed var(--color-orange-300); }
@media (min-width: 48em) { .cta-band { grid-template-columns: 1fr auto; padding: var(--space-8) var(--space-10); } }
.cta-band__title { font-size: var(--text-h3); }
/* Entrada suave 1x por elemento (IntersectionObserver adiciona .is-in). Sem JS = conteúdo visível. */
.js .reveal { opacity: 0; transform: translateY(var(--reveal-distance)); transition: opacity var(--duration-reveal) var(--ease-out), transform var(--duration-reveal) var(--ease-out); }
.js .reveal.is-in { opacity: 1; transform: none; }
```

### 3.20 Comportamentos (JS mínimo, sem dependências, ~3 KB)

Links `[data-wa]` com mensagem pronta (e etapa) · menu mobile acessível · barra fixa/flutuante · teclado esconde barra · entrada suave · formulário → WhatsApp.

```html
<script>
(() => {
  document.documentElement.classList.add('js');
  const WA = '5500000000000'; // vem de content.json (contato.whatsapp_e164) — só publicar se status=confirmado
  const MSG = 'Olá! Vi o site da Escola Fonte do Saber e gostaria de agendar uma visita.';
  const waLink = (text) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;

  // Links de WhatsApp com mensagem pronta (e etapa, quando houver)
  document.querySelectorAll('[data-wa]').forEach(a => {
    const etapa = a.dataset.etapa;
    a.href = waLink(etapa ? `${MSG} Tenho interesse em: ${etapa}.` : MSG);
    a.target = '_blank'; a.rel = 'noopener';
  });

  // Menu mobile
  const toggle = document.querySelector('.nav__toggle[aria-controls]');
  const panel = document.getElementById('menu-mobile');
  const scrim = document.querySelector('.nav__scrim');
  const setMenu = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    panel.dataset.open = scrim.dataset.open = String(open);
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) panel.querySelector('a, button')?.focus(); else toggle.focus();
  };
  toggle?.addEventListener('click', () => setMenu(true));
  panel?.querySelector('[data-close]')?.addEventListener('click', () => setMenu(false));
  scrim?.addEventListener('click', () => setMenu(false));
  panel?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && panel?.dataset.open === 'true') setMenu(false); });

  // Barra fixa (mobile) e flutuante (desktop): aparecem após o hero, somem no rodapé
  const bar = document.querySelector('.sticky-cta'), fab = document.querySelector('.wa-fab');
  const hero = document.querySelector('.hero'), footer = document.querySelector('.footer');
  let heroOut = false, footerIn = false;
  const sync = () => { bar?.classList.toggle('is-visible', heroOut && !footerIn); fab?.classList.toggle('is-hidden', footerIn); };
  new IntersectionObserver(([e]) => { heroOut = !e.isIntersecting; sync(); }).observe(hero);
  new IntersectionObserver(([e]) => { footerIn = e.isIntersecting; sync(); }).observe(footer);
  // Esconde a barra quando o teclado abre (foco em campo)
  document.addEventListener('focusin', e => { if (e.target.matches('input, select, textarea')) bar?.classList.remove('is-visible'); });
  document.addEventListener('focusout', sync);

  // Revelação suave (1x). Respeita prefers-reduced-motion via tokens (duração 0).
  const io = new IntersectionObserver((entries) => entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } }), { rootMargin: '0px 0px -10% 0px' });
  document.querySelectorAll('.stage-card, .feature, .event-card, .steps__item').forEach(el => { el.classList.add('reveal'); io.observe(el); });

  // Formulário -> WhatsApp (nada é enviado a servidor)
  const form = document.getElementById('form-visita');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = form.querySelector('.form__status');
    let firstInvalid = null;
    const check = (el, ok) => { el.closest('.field').classList.toggle('is-invalid', !ok); el.setAttribute('aria-invalid', String(!ok)); if (!ok && !firstInvalid) firstInvalid = el; };
    const nome = form.nome, wa = form.whatsapp, etapa = form.etapa, cons = form.consentimento;
    check(nome, nome.value.trim().length >= 2);
    check(wa, /^\d{10,11}$/.test(wa.value.replace(/\D/g, '')));
    check(etapa, etapa.value !== '');
    check(cons, cons.checked);
    if (firstInvalid) { firstInvalid.focus(); status.className = 'form__status is-error'; status.textContent = 'Confira os campos marcados.'; return; }
    const texto = `${MSG}\nMeu nome: ${nome.value.trim()}\nEtapa: ${etapa.value}` + (form.novidades.checked ? '\nQuero receber novidades.' : '');
    window.open(waLink(texto), '_blank', 'noopener');
    status.className = 'form__status is-success';
    status.innerHTML = `Pronto! Abrimos o WhatsApp com a sua mensagem. <a href="${waLink(texto)}" target="_blank" rel="noopener">Se não abriu, toque aqui.</a>`;
  });
})();
</script>
```

---

## 4. LAYOUTS E SEÇÕES

Ordem mantida conforme pedido, com 2 ajustes justificados: (a) o **formulário** fica dentro de Matrículas (seção 9), ao lado de valores e passos — é o ponto de decisão, como no funil de [REF 1]; (b) Equipe (5) e Depoimentos (8) **não renderizam** em produção enquanto não houver conteúdo autorizado, então a página real começa com 10 seções.

| # | Seção | Fundo | Estrutura / grid | Hierarquia | Espaçamento | CTA |
|---|---|---|---|---|---|---|
| 0 | Top bar + faixa do fardamento + navbar | navy / faixa / creme | flex, 1 linha | selo "2027" > texto > link | 40 + 6 + 64/76px | Link "agende uma visita"; CTA `--sm` na navbar (≥1024) |
| 1 | **Hero** | creme | 1 col → 2 col (1.05/0.95) ≥1024 | eyebrow → H1 → lead → botões → nota | topo 40/64px, base `--section-py` | **Primário lg** + secundário |
| ~ | onda → areia | | | | | |
| 2 | **Etapas** | areia | grid auto-fit (2 cards) | eyebrow → H2 → lead → cards | `--section-py` | Link por card "Perguntar sobre vagas" |
| ~ | onda → creme | | | | | |
| 3 | **Diferenciais** | creme | grid auto-fit (6 cards: 1/2/3–4 col) | eyebrow → H2 → manuscrita → cards | `--section-py` | **Faixa CTA** ao final |
| ~ | onda → laranja-50 | | | | | |
| 4 | **Um dia na escola** | laranja-50 | `<ol>` vertical → 6 col ≥1024 | eyebrow → H2 → turnos → passos | `--section-py` | — |
| ~ | onda → creme | | | | | |
| 5 | **Equipe** (se ≥3 perfis) | creme | grid auto-fill 220px | eyebrow → H2 → cards | `--section-py` | Link "Agendar visita para conhecer a equipe" |
| 6 | **Estrutura** | areia | galeria feature (1 grande + 4) | eyebrow → H2 → lead → fotos | `--section-py` | — |
| 7 | **Eventos e projetos** | creme | grid auto-fit (6 cards) | eyebrow → H2 → cards | `--section-py` | **Faixa CTA** (Instagram, secundário) |
| 8 | **Depoimentos** (se houver) | areia | 1–3 cards, container estreito | H2 → citações | `--section-py` | — |
| ~ | onda → navy | | | | | |
| 9 | **Matrículas 2027** | navy | 1.2fr / 0.8fr ≥1024 (passos+valores / formulário) | eyebrow amarelo → H2 (palavra amarela) → lead → passos → tabela → card contrato → nota legal | `--section-py` | **Formulário** + botão secundário "Proposta de contrato" |
| ~ | onda → creme | | | | | |
| 10 | **Perguntas frequentes** | creme | container estreito 760px | H2 central → 8 itens | `--section-py` | **Faixa CTA** "Ficou alguma dúvida?" |
| 11 | **Localização** | areia | 0.9fr / 1.1fr ≥1024 | eyebrow → H2 → endereço/horário/WhatsApp → mapa | `--section-py` | Primário "Agendar visita" + secundário "Abrir no mapa" |
| 12 | **Rodapé** | navy / navy-900 | 1.4fr/1fr/1fr ≥768 + faixa legal | marca → navegação → contato → dados legais | 48px + 24px | Link WhatsApp |

**Mapa de repetição do CTA "Agendar visita":** hero (1) → fim de Diferenciais (3) → Equipe (5, se existir) → Eventos (7, Instagram) → Matrículas (9, formulário) → FAQ (10) → Localização (11). Mais: navbar (desktop), top bar (sempre), **barra fixa no celular** (após o hero) e **botão flutuante no desktop**.

---

## 5. RESPONSIVIDADE

| Item | < 768 (celular) | 768–1023 (tablet) | ≥ 1024 (desktop) |
|---|---|---|---|
| Navegação | Hambúrguer 48px + painel lateral | Igual ao celular | Links + CTA na barra |
| Hero | 1 col, texto antes da imagem, botões empilhados | 1 col, botões lado a lado | 2 col |
| Grades | 1 col | 2 col | 3–4 col |
| Linha do tempo | Vertical | Vertical | Horizontal |
| Matrículas | Passos empilhados → tabela → card → formulário | Passos em 3 col | 2 col (conteúdo / formulário) |
| CTA persistente | Barra fixa inferior | Barra fixa inferior | Botão flutuante 56px |
| H1 / H2 / corpo | 34 / 28 / 17px | ~44 / ~34 / 17px | 56 / 40 / 17px |
| Seção (padding) | 56px | ~76px | 96px |

- **Alvos de toque:** mínimo 48px (`--tap-min`) em botões, links de menu, links do rodapé, hambúrguer, checkbox (área do label inteiro). Acima do mínimo de 44px pedido.
- **Imagens:** `<picture>` com AVIF + WebP, `srcset` (640/960/1280w no hero; 480/800w na galeria), `sizes` coerente, `width`/`height` sempre (evita CLS), `aspect-ratio` via token, `object-fit: cover`.
- **Formulário no celular:** fonte do campo ≥ 16px (usamos 17px) para o iOS não dar zoom; `inputmode="tel"`; labels sempre visíveis (nunca só placeholder).
- **Sem rolagem horizontal:** validado na prévia a 390px (`scrollWidth = 390`). A tabela de preços usa `table-layout: fixed` e quebra de linha.
- **Orçamento de peso (4G fraco)** [SUGESTÃO MINHA]:

| Recurso | Orçamento |
|---|---|
| HTML (gzip) | ≤ 15 KB (a prévia completa com placeholders tem 11 KB gzip) |
| CSS total | ≤ 15 KB com gzip (medido: tokens 12 KB + componentes 37 KB sem compressão → ≈ 8,4 KB gzip sem comentários) |
| JS | ≤ 10 KB, sem framework no cliente |
| Fontes | ≤ 90 KB (Nunito 39 + Nunito Sans 31 + Caveat subconjunto ≤ 15) |
| Imagem do hero | ≤ 120 KB (AVIF 1280w), ≤ 60 KB (640w) |
| Demais imagens | ≤ 80 KB cada, `loading="lazy"` |
| **Primeira carga (acima da dobra)** | **≤ 300 KB** |
| **Página inteira** | **≤ 1 MB** |
| Metas | LCP < 2,5 s · CLS < 0,1 · INP < 200 ms (Lighthouse mobile, "Slow 4G") |

---

## 6. USABILIDADE E ACESSIBILIDADE

- **Padrão de leitura:** F/Z simples — eyebrow → título → 1 frase → ação. Parágrafos ≤ 3 linhas no celular. Quem chega pelo Instagram/WhatsApp precisa entender em 5 segundos: *que escola, onde, que etapas, como agendar*. Tudo isso está acima da dobra.
- **CTA:** sempre o mesmo texto e a mesma cor; um primário por bloco.
- **Foco visível:** anel 3px navy-600 com 3px de afastamento (8,57:1 no creme; 3,57:1 encostado no laranja); amarelo em fundo navy. Nunca `outline: none` sem substituto.
- **Teclado:** ordem lógica; `skip-link` "Pular para o conteúdo" é o 1º Tab (validado); menu fecha com Esc e devolve o foco; FAQ com `<details>` nativo.
- **Contraste:** todos os pares de texto ≥ 4,5:1 (AA); títulos e corpo ≥ 7:1 (AAA). Tabela na §2.1.
- **Landmarks:** `header` (banner) · `nav[aria-label]` · `main#conteudo` · `section[aria-labelledby]` · `footer`. Top bar como `role="region"` com rótulo.
- **Títulos:** 1 H1 (hero) → H2 por seção → H3 em cards. Sem pular nível.
- **Alt text:** descritivo e factual ("Pátio coberto da escola com bancos coloridos"); decorativos (ondas, rabiscos, blob) com `aria-hidden` ou `alt=""`; nunca nome de criança no alt.
- **Formulário:** `<label for>` em todos os campos; obrigatório com `required` + asterisco `aria-hidden` + texto; erros com `aria-invalid` + `aria-describedby`; região `role="status"` para sucesso/erro.
- **Movimento:** `prefers-reduced-motion` respeitado; nada pisca; sem autoplay.
- **Linguagem simples:** frases curtas, voz ativa, palavras do dia a dia ("valores" em vez de "investimento", "documentos" em vez de "documentação necessária"), siglas explicadas (INEP, LGPD) na primeira menção.
- **Idioma:** `<html lang="pt-BR">`.
- **Emojis:** não usar no site (leitores de tela leem o nome do emoji).

---

## 7. DIREÇÃO DE IMAGENS

### 7a. Estilo geral
Luz natural (manhã 7h30–9h30 ou fim de tarde 15h30–16h30), cores quentes, foto honesta de celular bem feita, sem filtros pesados. Enquadramento à altura dos olhos de uma criança (~1 m) para os espaços. **Padrão: sem rosto de aluno.** Pessoas, quando houver, de costas, mãos em atividade ou fora de foco. Proporções: hero 4:3, galeria 3:2, equipe 1:1, OG 1200×630.

### 7b. Briefing de fotos para a escola (celular)

**Preparação:** limpar a lente; câmera na lente 1× (0,5× só em sala pequena, com o celular na vertical do chão); HDR ligado; grade ligada para alinhar paredes; arrumar o espaço; **esconder nomes de alunos** em paredes, cadernos, mochilas e cabides; ligar o ar-condicionado e mostrar o aparelho na foto das salas.

| # | Foto | Ângulo / horário | Uso |
|---|---|---|---|
| 1 | Sala climatizada arrumada, ar-condicionado visível | Do fundo da sala para a lousa, 1 m de altura, manhã | Hero, galeria |
| 2 | 2ª sala (outra etapa) | Diagonal, do canto | Galeria |
| 3 | Pátio coberto vazio | Da entrada do pátio, horizontal | Galeria |
| 4 | Parquinho vazio | Baixo (60 cm), fim de tarde | Galeria |
| 5 | Rampa com corrimão + sinalização visual | Lateral, mostrando inclinação | Galeria (inclusão) |
| 6 | Fachada com o nome da escola | Calçada oposta, manhã, sem carros/pessoas | Galeria, OG, Google |
| 7 | Detalhes: lápis de cor, cadernos (sem nomes), mochilas penduradas | Close, de cima | Texturas, eventos |
| 8 | Mãos de criança pintando/montando (sem rosto, com autorização) | Close lateral | Diferenciais, eventos |
| 9 | Professoras (adultas) em retrato, fundo de sala | Retrato vertical, luz de janela, **com termo assinado** | Equipe |
| 10 | Eventos: instrumentos da fanfarra, fantasias de costas, decoração do Folclore | Detalhe | Eventos |

**Entrega:** arquivos originais (sem filtro do Instagram, sem print), nome descritivo (`sala-infantil-2.jpg`). **Remover metadados de localização (EXIF/GPS)** antes de publicar.

### 7c. Termo de autorização de uso de imagem (lembrete, não é parecer jurídico)
Necessário para **qualquer** foto em que aluno possa ser identificado (rosto, nome, uniforme + contexto). O termo deve trazer: identificação do responsável e da criança (só no papel, nunca no site); **finalidade específica** (site da escola, Instagram oficial); **canais** listados um a um com opção de marcar cada um; **prazo** (ex.: ano letivo 2027); gratuidade; direito de **revogar a qualquer momento** e como fazer; compromisso de **não divulgar nome completo**, turma junto com a foto ou dados de saúde; onde as imagens ficam guardadas e por quanto tempo; contato do encarregado de dados. Base: ECA arts. 17–18 e LGPD art. 14. Validar o modelo com advogado(a).

### 7d. Prompts-modelo para imagem por IA (decorativos, sem pessoas)

1. **Textura de papel:** `Seamless subtle paper grain texture, warm cream background #FFFBF4, very low contrast, flat, no objects, no text, tileable, 1024x1024.`
2. **Kit de rabiscos:** `Set of 12 hand-drawn doodle icons, single continuous line 2px, color #B25607 on transparent background: pencil, star, curly arrow, sun, water droplet, small sprout, open book, ruler, paper plane, heart, music note, underline swoosh. Neat, slightly playful, no text, no characters, no faces, SVG-like flat style.`
3. **Motivo "fonte":** `Abstract gentle water waves and droplets rising like a small fountain, flat vector shapes, colors #F5891F, #FFCB2B and #FFE6CC on #FFFBF4 background, soft organic curves, no text, no people, minimal.`
4. **Ilustração de sala vazia (alternativa ao hero sem foto):** `Flat warm illustration of an empty, bright primary-school classroom in a small town in Northeast Brazil, colorful small desks, wall air conditioner, window with tropical light, orange and yellow accents, no people, no text, no logos, no brand characters.`
5. **Spot do Folclore:** `Flat vector spot illustration with generic Brazilian festival elements: paper flag garland (bandeirinhas), straw hat, tambourine, colors #F5891F #FFCB2B #EE5C98 #3FA3E0 on cream, no people, no characters, no text.`

Regras: **sem rostos de crianças reais**, sem personagens de terceiros (inclusive versões autorais de figuras do folclore, como as do *Sítio do Picapau Amarelo*), sem marcas; revisar se a imagem não sugere estrutura inexistente (ex.: piscina, laboratório). Rotular internamente como "ilustração".

### 7e. Otimização

| Uso | Dimensões (w) | Formato | Peso máx. | Carregamento |
|---|---|---|---|---|
| Hero | 640 / 960 / 1280 | AVIF + WebP fallback | 60 / 90 / 120 KB | `fetchpriority="high"`, sem lazy |
| Galeria | 480 / 800 | AVIF + WebP | 50 / 80 KB | `loading="lazy" decoding="async"` |
| Equipe | 240 / 360 | AVIF + WebP | 25 KB | lazy |
| Eventos | 480 / 800 | AVIF + WebP | 80 KB | lazy |
| OG / compartilhamento | 1200×630 | JPG | 200 KB | — |
| Mapa estático | 800×480 | WebP | 60 KB | lazy |

Ferramentas: pipeline de imagem do Astro (`astro:assets`, usa sharp) ou Squoosh manual.

---

## 8. ICONOGRAFIA E ELEMENTOS GRÁFICOS

- **Biblioteca:** **Lucide** (licença ISC) — traço 2px, pontas e junções arredondadas, grade 24px; combina com os terminais da Nunito. Importar só os ícones usados (SVG inline ou sprite). Alternativa: **Tabler Icons** (MIT, mesmo estilo).
- **Marcas (WhatsApp, Instagram):** **Simple Icons** (CC0), preenchido, cor sólida.
- **Tamanhos:** 16px (inline em badge) · 20px (botão) · 24px (card, endereço) · 32px (etapa, flutuante). Contêineres: quadrado 56px raio 16 (etapa) ou círculo 56px com borda tracejada (diferencial).
- **Cor:** `--color-primary-shadow` (laranja-800) sobre laranja-50; navy em contexto neutro; branco só sobre navy/verde.
- **Mapa de ícones:** clima = `snowflake` · turmas = `users` · inclusão = `accessibility` · pátio = `sun` · aula de campo = `sprout` · Instagram = glifo · Infantil = `smile` · Fundamental = `book-open` · calendário = `calendar` · endereço = `map-pin` · horário = `clock` · contrato = `file-text` · foto pendente = `camera-off` · erro = `circle-alert`.
- **Proibidos:** `shield`, `cctv`, `lock` (sugerem segurança não confirmada); `trophy`, `medal`, `star` como nota (sugerem prêmio/avaliação inexistente).
- **Elementos gráficos permitidos:** faixa do fardamento, ondas, blob amarelo, marca-texto, rabiscos de traço (máx. 2 por seção, opacidade 0,35).

---

## 9. TOM DE VOZ E MICROCOPY

**Personalidade:** acolhedora como a secretaria que conhece cada família; clara como um bilhete na agenda; confiável como um documento assinado. **Fala com o responsável, na 2ª pessoa ("você", "seu filho")**. Afeto sim, infantilização não.

| Elemento | Padrão | Exemplo |
|---|---|---|
| Eyebrow | 1–4 palavras, CAIXA ALTA | ESCOLA PARTICULAR EM JUPI-PE |
| Título (H2) | ≤ 8 palavras, concreto, 1 marca-texto | Um dia na **escola** |
| Subtítulo | 1 frase, ≤ 20 palavras, benefício prático | Veja a idade de cada turma e escolha a etapa do seu filho. |
| CTA | Verbo no infinitivo + objeto | Agendar visita · Perguntar sobre vagas |
| Erro | O que fazer, sem culpar | Confira o número: precisa ter DDD + 8 ou 9 dígitos. |
| Sucesso | Confirma + próximo passo | Pronto! Abrimos o WhatsApp com a sua mensagem. |
| Manuscrita | ≤ 6 palavras, exclamação opcional | venha ver de perto! |
| "Tia" | Só com função ao lado | Tia Ana · Professora do Infantil II · Pedagoga |

**5 exemplos prontos** (sem promessa de resultado, sem dado inventado):

1. **Slogan (hero):** "Aprendizagem com diversão, **alegria e amor**, aqui em Jupi." / "Educação Infantil e Ensino Fundamental no Loteamento Silvestre. Venha conhecer as salas, conversar com a coordenação e tirar suas dúvidas pessoalmente." / [Agendar visita pelo WhatsApp]
2. **Agende uma visita (faixa CTA):** "Quer ver tudo isso de perto? A visita é rápida e sem compromisso. Você conversa direto com a secretaria pelo WhatsApp." / [Agendar visita]
3. **Aprender fora da sala:** "Aprender fora da sala também é aprender. Nas aulas de campo, como o projeto Detetives da Saúde, a turma sai para observar, perguntar e registrar o que descobriu."
4. **Clima + turmas pequenas:** "Salas climatizadas para o calor de Jupi: todas as [CONFIRMAR: 11] salas têm ar-condicionado. E turmas de no máximo [PREENCHER] crianças, para a professora acompanhar cada uma de perto."
5. **Inclusão:** "Aqui tem lugar para todas as crianças. Temos rampas, corrimão e sinalização visual, e recebemos crianças com deficiência sem cobrança adicional. Venha conversar com a coordenação sobre o seu filho." [publicar só após a escola confirmar como funciona o apoio]

**Celular (Lei 15.100/2025), se a escola quiser citar:** "Seguimos a Lei 15.100/2025: durante as aulas, o celular fica guardado." — como cuidado, nunca como diferencial exclusivo.

**O que NÃO escrever:**

| Proibido | Por quê |
|---|---|
| "Matricule já!", "Últimas vagas!" (sem número real) | Pressão; vagas devem ser informadas com número |
| "A melhor escola de Jupi", "Nº 1", "referência" | Superlativo sem base (CDC art. 37) |
| "Seu filho lendo em X meses", "aprovação garantida" | Promessa de resultado (CDC arts. 30 e 37) |
| "Melhor que a escola pública", "diferente da outra escola" | Comparação sem base |
| "Escola 100% segura", "monitoramento", "portaria" | Não confirmado; Censo indica o contrário |
| "Criançada, peçam aos pais!", "Ganhe um brinde!" | Apelo direto à criança (CONANDA 163/2014) |
| "Biblioteca", "laboratório", "quadra", "piscina" | Infraestrutura não confirmada |
| "Investimento a partir de R$ 199" | Valor sem etapa e sem fonte real |
| Depoimento "de exemplo", estrelas, "mais de 1.000 famílias" | Dado inventado |
| Emojis, CAIXA ALTA em frases, "!!!" | Acessibilidade e credibilidade |

---

## 10. SEO LOCAL E DADOS ESTRUTURADOS

**Metadados sugeridos**

| Item | Valor |
|---|---|
| `<title>` (51 caracteres) | Escola Fonte do Saber \| Escola particular em Jupi-PE |
| Meta description (145 caracteres) | Educação Infantil e Ensino Fundamental em Jupi-PE. Matrículas 2027 abertas: agende uma visita pelo WhatsApp e conheça a Escola Fonte do Saber. |
| H1 | Aprendizagem com diversão, alegria e amor, aqui em Jupi |
| URL canônica | [PREENCHER domínio; sugestão: escolafontedosaber.com.br — verificar disponibilidade no Registro.br] |
| Open Graph | `og:title` = title · `og:description` = description · `og:image` 1200×630 (brasão + fachada sem alunos) · `og:locale` pt_BR · `og:type` website |

**Termos prioritários e onde entram**

| Termo | Onde |
|---|---|
| Escola Fonte do Saber Jupi | title, logo alt, rodapé, schema `name` |
| escola em Jupi / escola particular em Jupi PE | eyebrow do hero, title, description |
| educação infantil Jupi | H3 do card de etapa, texto da seção Etapas |
| matrícula 2027 escola Jupi | H2 da seção Matrículas, top bar |
| Loteamento Silvestre | lead do hero, endereço |
| "creche" e "escola inclusiva" | **só se a escola confirmar** (creche/berçário e atendimento de inclusão) |

**JSON-LD** (gerado a partir de `content.json`; campos não confirmados ficam **fora** do JSON publicado):

```json
{
  "@context": "https://schema.org",
  "@type": ["School", "LocalBusiness"],
  "name": "Escola Fonte do Saber",
  "slogan": "Aprendizagem com diversão, alegria e amor!",
  "url": "[PREENCHER domínio]",
  "logo": "[PREENCHER]/brasao.svg",
  "image": "[PREENCHER]/og.jpg",
  "telephone": "+55-87-99931-9123 [CONFIRMAR]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[CONFIRMAR ENDEREÇO]",
    "addressLocality": "Jupi",
    "addressRegion": "PE",
    "postalCode": "55395-000 [CONFIRMAR]",
    "addressCountry": "BR"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": -8.7128022, "longitude": -36.4225995 },
  "openingHoursSpecification": "[PREENCHER horário da secretaria]",
  "identifier": { "@type": "PropertyValue", "propertyID": "INEP", "value": "26182220 [CONFIRMAR]" },
  "taxID": "11.642.388/0001-40 [CONFIRMAR]",
  "sameAs": ["https://www.instagram.com/esc_fontedosaber/"]
}
```

Notas: tipo múltiplo `School` + `LocalBusiness` [SUGESTÃO MINHA] — validar no Schema Markup Validator e no Teste de Resultados Avançados do Google. **Não** esperar rich result de FAQ: desde 2023 o Google restringe esse recurso a sites governamentais e de saúde; a marcação `FAQPage` é opcional.

**Performance (Core Web Vitals):** LCP < 2,5 s (imagem do hero AVIF + `fetchpriority="high"` + fonte display com `preload`), CLS < 0,1 (`width/height` em toda imagem, fontes com `size-adjust`/fallback métrico, nada injetado acima do conteúdo), INP < 200 ms (JS mínimo, sem framework no cliente).

**Google (fora do site, maior impacto local):**
1. Criar/reivindicar o **Perfil da Empresa no Google** com o mesmo nome, endereço e telefone do site (NAP idêntico). Categoria principal: "Escola particular"; adicionais conforme etapas confirmadas ("Pré-escola", "Escola de ensino fundamental"). Horário, fotos de estrutura (sem alunos), link do site e do WhatsApp.
2. Nenhuma das duas escolas de Jupi tem avaliações no Google [DOSSIÊ] → oportunidade: pedir a pais reais que avaliem, **sem oferecer nada em troca** (a política do Google proíbe incentivo).
3. Bio do Instagram com o link do site.
4. `sitemap.xml` + `robots.txt` + verificação no Google Search Console.

---

## 11. REGRAS DE IMPLEMENTAÇÃO

**Stack recomendada** [SUGESTÃO MINHA]: **Astro** (saída estática, zero JS por padrão, componentes `.astro`, importa `content.json`, otimiza imagens) + **CSS puro com os tokens** + deploy na **Vercel via GitHub**. Alternativa mais simples: HTML/CSS/JS estático (a `preview.html` já é esse esqueleto). Next.js funciona, mas para uma landing de 1 página envia JS de hidratação sem necessidade.

**Nomenclatura: BEM + custom properties** (`.stage-card__icon`, `.btn--secondary`). Motivo: ~20 componentes, CSS final pequeno, legível para quem for manter, tokens como única fonte. Se preferir Tailwind, use `tailwind.tokens.js` e **não** escreva cores/medidas arbitrárias (`bg-[#...]`, `p-[13px]`).

**Estrutura de pastas**

```
fonte-do-saber/
├─ design/                     ← este pacote (DESIGN-SYSTEM.md, tokens.json, tailwind.tokens.js, preview.html)
├─ public/  favicon.svg · og.jpg · robots.txt
├─ scripts/ check-content.mjs
└─ src/
   ├─ content/ content.json    ← ÚNICO lugar com dados da escola
   ├─ styles/  tokens.css · components.css
   ├─ lib/     content.ts (get(campo) → valor só se "confirmado") · whatsapp.ts
   ├─ components/
   │   Topbar · Nav · Hero · Wave · StageCard · Feature · Timeline · TeamCard · Gallery
   │   EventCard · Testimonials · Enroll · Faq · VisitForm · Location · Footer
   │   WaFab · StickyCta · CookieBanner · Pending · SafeImage (aplica a regra de autorização)
   ├─ pages/   index.astro · privacidade.astro
   └─ scripts/ site.js
```

**Ordem de construção:** tokens → base/reset → layout (container, seção, grid) → componentes (botão primeiro) → seções na ordem da §4 → página → polimento (imagens, SEO, JSON-LD, Lighthouse).

**`package.json`:** `"build": "node scripts/check-content.mjs content && astro build && node scripts/check-content.mjs dist"` em produção; `"build:staging"` sem as travas, com placeholders visíveis e `noindex`.

**DO / DON'T**

| DO | DON'T |
|---|---|
| Usar só `var(--color-*)`, `var(--space-*)` etc. | Cor HEX, px ou ms soltos em componente |
| Ler todo dado da escola de `content.json` via `get()` | Escrever dado da escola direto no HTML |
| `SafeImage`: rosto de aluno só com `termo_assinado` e `valido_ate` vigente | Exibir foto de aluno "porque está no Instagram" |
| Ocultar componente opcional não confirmado em produção | Publicar `[PREENCHER]`/`[CONFIRMAR]` |
| Texto escuro sobre laranja/amarelo | Branco sobre laranja/amarelo |
| 1 CTA primário por bloco, mesmo texto | Vários CTAs concorrentes com textos diferentes |
| `<details>` no FAQ, `<ol>` em passos, `<table>` em valores | `div` clicável sem teclado |
| Testar em 390, 768 e 1280px + teclado + Lighthouse mobile | Testar só no desktop |
| Remover EXIF/GPS das fotos | Subir foto direto do celular |

**Anti-padrões (deixam o site genérico, "feito por IA" ou infantilizado):**
- Gradientes roxo-azul, glassmorphism, ícones 3D, emojis em título.
- Fotos de banco de crianças "americanas", recortes flutuando, sorrisos de catálogo.
- Contadores animados com números arredondados ("+500 alunos felizes").
- Seção "Por que nos escolher" com 6 ícones genéricos e textos que servem para qualquer escola.
- Depoimentos com foto de banco e 5 estrelas.
- Carrossel automático no hero; vídeo de fundo.
- Fonte manuscrita em parágrafo; 4+ cores fortes por seção; nuvens, arco-íris, foguetes, mascote.
- Textos em inglês nos rótulos ("Kids", "Fun", "Learning").
- Copiar layout de [REF 3] ou [REF 4] sem a faixa do fardamento, o brasão e o laranja da escola.

---

## 12. PROMPT-MESTRE DE IMPLEMENTAÇÃO (colar no Claude Code)

```text
<papel>
Você é dev front-end sênior especialista em sites rápidos, acessíveis e em conformidade
para escolas particulares pequenas do interior do Brasil. Escreve código limpo, sem
dependências desnecessárias, e nunca inventa dados.
</papel>

<objetivo>
Construir a landing page de MATRÍCULAS 2027 da Escola Fonte do Saber (Jupi-PE), mobile-first,
cujo objetivo único é o pai/mãe clicar em "Agendar visita" (abre WhatsApp). O público é o
responsável (não a criança).
</objetivo>

<arquivos_de_entrada>
Se a pasta ./design existir, ela é a FONTE DA VERDADE e prevalece sobre este prompt:
- design/tokens.css (tokens), design/components.css (componentes BEM), design/content.json
  (dados com status), design/check-content.mjs (trava), design/preview.html (esqueleto de
  referência com todos os componentes), design/DESIGN-SYSTEM.md (regras completas).
Copie tokens.css e components.css para src/styles/, content.json para src/content/ e
check-content.mjs para scripts/. Se a pasta não existir, recrie a partir dos valores abaixo.
</arquivos_de_entrada>

<stack>
Astro (versão estável atual, output "static"), CSS puro com custom properties, JS vanilla
mínimo (sem React/Vue no cliente), imagens via astro:assets (AVIF+WebP, srcset), deploy na
Vercel via GitHub. Fontes auto-hospedadas via Fontsource: @fontsource-variable/nunito,
@fontsource-variable/nunito-sans e Caveat 700 em subconjunto. Ícones Lucide (SVG inline,
só os usados); glifos WhatsApp/Instagram do Simple Icons.
</stack>

<tokens_essenciais>
Cores (HEX laranja/amarelo são ESTIMADOS até a escola enviar os oficiais):
- bg #FFFBF4 · bg-alt #FBF3E7 · surface #FFFFFF · surface-brand #FFF5EA · surface-dark #112E56
  · surface-dark-alt #0B2140
- text #14233B · text-body #34425A · text-muted #5B6577 · text-brand #8A4208 (laranja p/ texto)
  · text-on-dark #FFFFFF · text-on-dark-muted #D8E5F4 · text-accent-on-dark #FFCB2B
- primary #F5891F (hover #DB6E0A) com TEXTO #14233B (nunca branco) · sombra adesivo 0 4px 0 #8A4208
- secondary/link #173B6C · accent #FFCB2B (texto #14233B) · focus #1F4A85 (no navy: #FFCB2B)
- border #E6D4BC (decorativa) · border-strong #7C8595 (inputs) · danger #A1281A / bg #FDE8E6
  · success #17633A / bg #E3F5EA · whatsapp #128C7E (ícone branco)
- Eventos apenas: pink #A82860 sobre #FDE4EF · sky #1A6AA3 sobre #E0F0FB
Tipografia: display "Nunito" (H1 900, H2 800, H3/H4 700) · texto "Nunito Sans" 400/600/700/800 ·
manuscrita "Caveat" 700 (≤6 palavras, ≤1 por seção, ≥24px, nunca em botão/form/preço).
Tamanhos (360→1280px, clamp linear): H1 34→56 · H2 28→40 · H3 20→24 · H4/lead 18→20 ·
corpo 17 · small 15 · caption 14 (mínimo) · manuscrita 24→32. Line-height: 1.1 H1, 1.2 H2,
1.25 H3, 1.6 corpo. Parágrafo máx. 65ch.
Espaço base 4px: 4 8 12 16 20 24 32 40 48 56 64 80 96 128. Seção 56→96px · gutter 16→32 ·
gap 16→32 · padding de card 20→32. Container 1200px; estreito 760px.
Raios: 6/10/16/24/32/48/pill; blob "62% 38% 54% 46% / 48% 56% 44% 52%".
Sombras navy translúcidas (xs→lg). Foco: outline 3px + offset 3px.
Alturas: botão 52 (sm 44, lg 56) · input 52 · alvo de toque mínimo 48 · navbar 64/76 · top bar 40
· faixa do fardamento 6 (3 laranja + 3 amarelo) · flutuante 56 · barra fixa 64.
Movimento: 150/220/320/500ms, ease cubic-bezier(.2,0,0,1); só transform/opacity;
prefers-reduced-motion zera tudo. Breakpoints 480/768/1024/1280 (min-width).
</tokens_essenciais>

<assinatura_visual>
1 CTA laranja com texto escuro e sombra sólida "adesivo" · 2 faixa laranja+amarela do
fardamento (topo, rodapé, antes de cada eyebrow) · 3 fundo creme alternando com areia ·
4 títulos Nunito com 1 palavra em marca-texto amarelo · 5 1 frase manuscrita curta por seção ·
6 ondas suaves entre seções + foto do hero com máscara blob e blob amarelo atrás ·
7 brasão FS sempre visível (navbar e rodapé) · 8 faixa navy de Matrículas com formulário.
O site deve ser reconhecível como Fonte do Saber, não como clone de template.
</assinatura_visual>

<secoes_em_ordem>
0 Top bar navy "2027 · Matrículas abertas · agende uma visita" + faixa do fardamento +
  navbar sticky (brasão, nome, links ≥1024, CTA "Agendar visita", hambúrguer <1024).
1 Hero dividido (texto antes da imagem no celular): eyebrow "Escola particular em Jupi-PE";
  H1 "Aprendizagem com diversão, alegria e amor, aqui em Jupi" (marca-texto em "alegria e
  amor"); lead com etapas + Loteamento Silvestre + convite; CTA primário lg "Agendar visita
  pelo WhatsApp" + secundário "Ver valores e matrícula"; nota com horário da secretaria;
  imagem 4:3 de sala SEM alunos + selo de 1 dado confirmado.
2 Etapas: cards Educação Infantil e Fundamental (anos iniciais) com faixa etária, turmas,
  turnos; link "Perguntar sobre vagas" (WhatsApp com a etapa).
3 Diferenciais (6 cards): salas climatizadas, turmas pequenas, inclusão, pátio coberto e
  parquinho, aprender fora da sala (Detetives da Saúde), a rotina no Instagram + faixa CTA.
4 Um dia na escola: linha do tempo de 6 passos (vertical no celular, horizontal ≥1024).
5 Equipe: só renderiza com ≥3 perfis completos e termo de imagem; senão, não existe.
6 Estrutura: galeria 3:2 sem rostos (sala, pátio, parquinho, rampa, fachada).
7 Eventos: cards com pílula do mês (Folclore, 7 de Setembro, Semana da Criança, Fonte Folia,
  aulas de campo, inclusão) + faixa CTA para o Instagram @esc_fontedosaber.
8 Depoimentos: só renderiza com itens reais autorizados; senão, não existe.
9 Matrículas 2027 (fundo navy): 3 passos, tabela de valores POR ETAPA + outros custos + vagas
  por turma, card com período, documentos e link da proposta de contrato (PDF), nota legal
  "publicado em [data], ≥45 dias antes do fim das matrículas (Lei 9.870/99)"; formulário ao lado.
10 FAQ (<details>): 8 perguntas de content.json + faixa CTA "Ficou alguma dúvida?".
11 Localização: endereço, horário, WhatsApp, botões "Agendar visita" e "Abrir no mapa";
  fachada do mapa (iframe só após clique).
12 Rodapé navy: brasão + slogan manuscrito, navegação, contato; faixa legal com razão social,
  CNPJ, INEP, ato de autorização, etapas autorizadas, endereço, política de privacidade,
  encarregado de dados, Instagram; faixa do fardamento no final.
Ondas entre seções de cores diferentes. Barra fixa de CTA no celular (aparece após o hero,
some no rodapé e com teclado aberto); botão flutuante WhatsApp #128C7E no desktop.
</secoes_em_ordem>

<conformidade obrigatoria="true">
1 Foto de aluno: componente SafeImage só renderiza imagem com tem_rosto_de_aluno=true se
  autorizacao.termo_assinado=true e valido_ate >= hoje; senão mostra o slot "Foto pendente de
  autorização". Nunca nome completo de criança + turma + foto. Crianças nunca são nomeadas.
2 Persuasão fala com pais; nada de apelo direto à criança, brindes ou personagens como isca.
3 Nenhuma promessa de resultado, superlativo ou comparação ("a melhor", "garantido",
  "lendo em X meses", "melhor que a pública").
4 Depoimentos só reais e autorizados; nunca texto de exemplo; nunca de criança.
5 Valores por etapa, outros custos, vagas por sala e proposta de contrato publicados ≥45 dias
  antes da data final de matrícula. Nunca "a partir de" sem etapa.
6 Inclusão "sem cobrança adicional" só após a escola confirmar como funciona o apoio.
7 Formulário: só nome do responsável, WhatsApp e etapa; consentimento obrigatório NÃO
  pré-marcado + checkbox separado e opcional para novidades; nada de dados da criança ou saúde;
  envio = abrir wa.me com mensagem (nada armazenado). Página /privacidade em linguagem simples
  com contato do encarregado. Sem Pixel/GA por padrão (se houver: banner opt-in, Recusar e
  Aceitar com o mesmo peso, scripts só após aceitar).
8 Rodapé com razão social, CNPJ, INEP, endereço, contato, etapas autorizadas, privacidade,
  Instagram oficial. Nunca anunciar etapa não autorizada.
9 NUNCA mencionar ou mostrar: piscina, biblioteca, auditório, laboratório, quadra, portaria,
  câmeras, "escola segura", prêmios, notas, resultados, faixa de preços de portal.
10 NUNCA linkar/citar homônimos: Facebook "esc.fontedosaber" (Fortaleza), Reclame Aqui (ABC),
  "Colégio Fonte do Saber", Fonte do Saber de Surubim. Instagram oficial: @esc_fontedosaber.
11 Lei 15.100/2025 (celular), se citada, como cuidado, nunca como exclusividade.
</conformidade>

<dados>
Todo dado da escola vem de src/content/content.json via lib/content.ts:
- status "confirmado" → renderiza; "provavel" | "confirmar" | "preencher" → em staging renderiza
  <span class="pending">[PREENCHER: …]</span>; em produção: campo opcional é ocultado,
  campo obrigatório faz o build falhar (scripts/check-content.mjs content).
- Após o build, scripts/check-content.mjs dist varre o HTML e falha se sobrar placeholder,
  termo proibido, homônimo ou o WhatsApp antigo (87) 9910-7675.
- Dados conhecidos (todos a confirmar): WhatsApp (87) 99931-9123; endereço com 2 versões
  ("Rua Maria José de Araújo, 200" ou "Rua G, s/n"), Loteamento Silvestre, Jupi-PE,
  CEP 55395-000; CNPJ 11.642.388/0001-40; INEP 26182220; razão social Escola Fonte do Saber
  Limitada; coordenadas -8.7128022, -36.4225995. Slogan confirmado: "Aprendizagem com
  diversão, alegria e amor!". Nunca preencha com dado plausível.
</dados>

<comportamentos_js>
Links [data-wa] → https://wa.me/<e164>?text=<mensagem codificada> (+ etapa quando houver),
target _blank, rel noopener. Menu mobile com aria-expanded, foco no 1º item, Esc fecha, foco
volta ao botão. IntersectionObserver para barra fixa/flutuante e entrada suave (1x, sem JS =
tudo visível). Formulário: validação no submit (nome ≥2, WhatsApp 10–11 dígitos, etapa,
consentimento), foco no 1º inválido, aria-invalid, mensagens da §3.15, role="status" no
sucesso com link de reserva. Total ≤10 KB.
</comportamentos_js>

<qualidade>
Acessibilidade: WCAG 2.2 AA (contrastes já validados nos tokens), skip-link, landmarks,
1 H1, sem pular níveis, foco visível, alvos ≥48px, lang="pt-BR", sem emojis.
Performance (Lighthouse mobile, Slow 4G): LCP <2,5s, CLS <0,1, INP <200ms; 1ª carga ≤300 KB,
página ≤1 MB; hero AVIF ≤120 KB com fetchpriority="high"; demais imagens lazy; width/height
em todas; remover EXIF/GPS.
SEO: title "Escola Fonte do Saber | Escola particular em Jupi-PE"; description "Educação
Infantil e Ensino Fundamental em Jupi-PE. Matrículas 2027 abertas: agende uma visita pelo
WhatsApp e conheça a Escola Fonte do Saber."; Open Graph 1200x630; JSON-LD School+LocalBusiness
gerado só com campos confirmados; sitemap.xml e robots.txt; staging com noindex.
</qualidade>

<processo>
1 Leia design/DESIGN-SYSTEM.md (se existir) e liste em 10 linhas o que vai construir.
2 Crie o projeto Astro e a estrutura de pastas; copie tokens/componentes/conteúdo.
3 Construa na ordem: tokens > base > layout > componentes > seções 0→12 > página > polimento.
4 A cada 2 seções, rode o servidor e confira em 390px, 768px e 1280px (prints se tiver
  ferramenta de navegador) e navegue só com teclado.
5 Rode build:staging (placeholders visíveis) e mostre a lista de pendências que
  check-content.mjs content aponta.
6 Faça a revisão de conformidade item a item (<conformidade>) e reporte aprovado/ajustado.
7 Rode Lighthouse mobile e reporte LCP, CLS, INP, Acessibilidade e SEO.
Não invente conteúdo, não adicione bibliotecas além das citadas sem me perguntar.
</processo>

<criterios_de_aceite>
[ ] build:staging gera a página com todas as seções e placeholders visíveis
[ ] build de produção FALHA enquanto houver dado obrigatório não confirmado
[ ] nenhum valor visual fora dos tokens; sem branco sobre laranja/amarelo
[ ] barra fixa no celular e flutuante no desktop funcionam e não cobrem rodapé/formulário
[ ] formulário: 3 campos, consentimento desmarcado, abre WhatsApp, erros acessíveis
[ ] sem rolagem horizontal em 360px; alvos ≥48px; teclado completo
[ ] Lighthouse mobile ≥90 em Performance, Acessibilidade, Boas práticas e SEO
[ ] nenhum termo proibido, homônimo ou foto de aluno sem autorização
</criterios_de_aceite>
```

---

## 13. LISTA DE PENDÊNCIAS PARA A ESCOLA

> Para enviar ao responsável da escola. Cada item corresponde a um campo de `content.json`.

**Identidade e documentos legais**
- [ ] Razão social exata (confirmar "Escola Fonte do Saber Limitada")
- [ ] CNPJ (confirmar 11.642.388/0001-40)
- [ ] Código INEP (confirmar 26182220)
- [ ] Número, órgão e data do **ato de autorização** de cada etapa
- [ ] Quais etapas e anos são autorizados
- [ ] Ano de início das aulas (para o selo "Em Jupi desde…"; o CNPJ é de 2010)
- [ ] 2–3 frases sobre a história da escola (opcional)

**Contato**
- [ ] **Endereço oficial**: "Rua Maria José de Araújo, 200" ou "Rua G, s/n"? (Loteamento Silvestre, CEP 55395-000)
- [ ] WhatsApp oficial da secretaria (confirmar (87) 99931-9123; o (87) 9910-7675 é antigo?)
- [ ] E-mail da secretaria
- [ ] Dias e horários de atendimento
- [ ] Pino exato no Google Maps (foto da tela feita na porta da escola)

**Etapas e rotina**
- [ ] Nomes das turmas da Educação Infantil e idade de cada uma
- [ ] Atende creche/berçário (0 a 3 anos)?
- [ ] Fundamental vai até o 4º ou o 5º ano?
- [ ] Turnos e horários de cada etapa (tem integral?)
- [ ] Material didático (sistema/editora ou próprio)
- [ ] Rotina de um dia: chegada, atividades, lanche (a escola oferece?), recreio, saída
- [ ] Como funciona a **entrada e a entrega** da criança ao responsável
- [ ] Número máximo de crianças por turma em cada etapa
- [ ] O que acontece quando o aluno termina o último ano (orientação, transferência)
- [ ] Método/acompanhamento da alfabetização (como os pais acompanham)

**Matrículas 2027**
- [ ] Data de início e **data final** das matrículas
- [ ] Anuidade e parcelas **por etapa**
- [ ] Outros custos: matrícula, material, uniforme, agenda, passeios (ou "não há")
- [ ] Descontos (irmãos, pontualidade), se houver
- [ ] **Vagas por turma**
- [ ] **Proposta de contrato 2027** em PDF
- [ ] Lista oficial de documentos para matrícula

**Estrutura, diferenciais e inclusão**
- [ ] Confirmar: 11 salas, todas climatizadas
- [ ] Confirmar: pátio coberto e parquinho
- [ ] Confirmar: rampas, corrimão, sinalização visual
- [ ] Como funciona o atendimento a crianças com deficiência (profissional de apoio, AEE) e confirmação de que não há cobrança extra
- [ ] Algum outro espaço real (biblioteca, quadra etc.)? Só entra com confirmação + foto
- [ ] Há alguma medida de segurança na entrada? (Só entra se for real e descrita com precisão)

**Equipe**
- [ ] Nome de exibição ("Tia …"), função e formação de cada professora/coordenadora
- [ ] Termo de autorização de imagem de cada adulto que aparecer

**Eventos**
- [ ] Mês da Fonte Folia e das aulas de campo
- [ ] 1 frase sobre o que acontece em cada evento

**Marca**
- [ ] Brasão em **vetor** (SVG, PDF ou AI) ou PNG ≥ 1000px
- [ ] HEX oficiais do laranja e do amarelo (se houver manual ou gráfica que imprimiu o fardamento)

**Fotos e autorizações**
- [ ] Fotos do briefing §7b (salas, pátio, parquinho, rampa, fachada, detalhes)
- [ ] Modelo de **termo de autorização de imagem** revisado por advogado(a)
- [ ] Termos assinados para qualquer foto com aluno identificável
- [ ] Depoimentos reais de pais, por escrito, com autorização (opcional)

**LGPD e site**
- [ ] Nome/função e contato do **encarregado de dados**
- [ ] Aprovação da Política de Privacidade (rascunho a gerar)
- [ ] Vai usar Meta Pixel/Google Analytics? (Se sim, entra banner de cookies)
- [ ] Domínio desejado e quem será o titular no Registro.br

**Google**
- [ ] Acesso ao Perfil da Empresa no Google (ou autorização para criar)

---

## 14. LACUNAS E RISCOS

**Não foi possível determinar**
- HEX oficiais e arquivo do brasão (cores do sistema são estimadas pela descrição do dossiê; não acessei os posts).
- Fonte oficial da marca.
- Etapas/anos exatos, idades das turmas, turnos, creche.
- Endereço oficial (duas versões), horário, e-mail.
- Comportamentos interativos das referências (hover, animação, mobile real) — imagens estáticas; os padrões propostos são [SUGESTÃO MINHA].
- Medidas exatas das referências: são mockups reduzidos (512–736px de largura); tamanhos e espaçamentos foram escalados e marcados [ESTIMADO].

**Suposições feitas**
- Público majoritariamente em celular Android de entrada, 4G médio [DOSSIÊ: hipótese].
- Navy aceito pela escola como cor de apoio. Se vetado: trocar `--color-surface-dark` por `ink-900` (#14233B) e manter o resto.
- Formulário sem servidor (WhatsApp) é suficiente para a secretaria.
- Sem analytics com cookies na v1.

**Riscos que exigem validação humana/jurídica**
- Termo de imagem, Política de Privacidade e base legal do formulário (LGPD) → advogado(a).
- Prazo de 45 dias da Lei 9.870/99 → definir data final de matrícula já considerando a publicação.
- Afirmação de inclusão sem cobrança → só após a escola descrever o atendimento real.
- Texto do FAQ "por que pagar se a pública é gratuita" → não pode depreciar a rede municipal.
- Uso de "Tia" em perfil público → confirmar que as professoras concordam.

**5 perguntas finais**
1. A escola aceita o **navy** como cor de apoio (faixa de matrículas, rodapé), ou prefere ficar só em laranja/amarelo/branco?
2. Existe o brasão em **vetor** e algum registro das cores oficiais (gráfica do fardamento)?
3. Qual é a **data final** das matrículas 2027? (Ela define até quando valores e contrato precisam estar no ar.)
4. A secretaria prefere receber os pedidos **só pelo WhatsApp** ou também por e-mail?
5. Você vai implementar com **Astro** (recomendado) ou prefere HTML estático puro / Next.js?

---

# FASE 5 — SKILLS E FERRAMENTAS

Levantamento feito com as ferramentas de listagem desta conta (skills, plugins e conectores do claude.ai em 07/10/2026). **No Claude Code do seu computador a lista pode ser diferente** — confira com `/plugin` e `/mcp` antes de começar. Nada foi instalado.

| Skill / ferramenta | Tipo · status | Relevância | Fase | Motivo (por que ela e não outra) | Ordem | Risco / limite |
|---|---|---|---|---|---|---|
| **marketing:draft-content** (ou content-creation) | Plugin ativo | Alta | Copy | Redige textos de landing page por canal; recebe a §9 + `content.json` e devolve o texto de cada seção com placeholders | 1 | Pode "melhorar" com superlativos → passa pelo gate (5) |
| **prompt-engineer** | Skill ativa | Média | Antes do código | Revisa o prompt-mestre (§12) se você quiser encurtá-lo ou adaptar ao Next.js | 2 (opcional) | Pode remover regras de conformidade ao "otimizar" — conferir |
| **Claude Code + este pacote** | — | Alta | Implementação | Executa o prompt-mestre com tokens, componentes e trava de conteúdo | 3 | Depende dos arquivos em `./design` |
| **searchfit-seo:schema-markup / generate-schema** | Plugin ativo | Alta | SEO | Gera/valida o JSON-LD School + LocalBusiness a partir do conteúdo confirmado | 4 | Não deve receber dados `[CONFIRMAR]` |
| **searchfit-seo:on-page-seo / seo-check** | Plugin ativo | Alta | SEO | Confere title, meta, headings, alt e OG da página pronta | 4 | Foco em SEO, não em conformidade |
| **marketing:brand-review** | Plugin ativo | **Alta (gate)** | **Revisão de conformidade** | Detecta alegações sem base, superlativos, falta de avisos — o "filtro" de promessas e apelos | **5 (obrigatório antes da entrega)** | Não conhece ECA/LGPD/Lei 9.870 por padrão → usar junto com a checklist §11 e `check-content.mjs` |
| **chrome-devtools-mcp** | Skill ativa (configura o MCP no Claude Code) | Alta | Validação | Lighthouse (Performance, Acessibilidade, SEO) com throttling 4G e traces de LCP/CLS | 6 | Exige instalar o MCP no Claude Code (pedir sua confirmação) |
| **Navegador embutido / Claude in Chrome** | Disponível nesta conta | Média | Validação | Prints em 390/768/1280px e navegação por teclado do preview publicado | 6 | Não mede performance real |
| **searchfit-seo:technical-seo** | Plugin ativo | Média | Validação | robots.txt, sitemap, Core Web Vitals, indexação | 6 | Sobreposição com Lighthouse |
| **Vercel** | Conector · **conexão incompleta** | Média | Deploy | Preview por branch, logs e domínio | 7 | Concluir a conexão nas configurações; ou usar o painel da Vercel |
| **Figma** | Conector ativo | Média | Opcional (antes do código) | Montar 1 tela para a escola aprovar antes de codar | — | Duplica trabalho; a `preview.html` já cumpre esse papel |
| **Canva** (+ brand-check) | Plugin + conector ativos | Média | Pós-lançamento | Brand Kit com os tokens para manter as artes do Instagram coerentes com o site; imagem OG | — | Não usar para criar fotos de crianças |
| **docs / pdf** | Skills ativas | Média | Comunicação | Transformar a §13 em documento para enviar à escola | — | — |
| shadcn-ui-mcp · magic-mcp | Skills ativas | Baixa | — | Focadas em React; adicionariam JS e visual genérico | — | Contra o princípio 6 |
| Gamma · Slack · Spotify · Gmail | Conectores | Baixa | — | Sem papel no site | — | — |

**Conjunto mínimo e fluxo**

```
(1) marketing:draft-content ── recebe §9 + content.json ──► textos por seção (com placeholders)
(2) Claude Code + prompt-mestre §12 + ./design ──────────► site Astro (staging)
(3) searchfit-seo:schema-markup + on-page-seo ───────────► JSON-LD e metadados
(4) GATE DE CONFORMIDADE ─ marketing:brand-review (copy)
                          + checklist §11/§3 (imagens de crianças, promessas, LGPD, preços)
                          + node scripts/check-content.mjs content && dist
                          ► só segue com tudo "aprovado"
(5) chrome-devtools-mcp (Lighthouse mobile 4G) + prints 390/768/1280 ► ajustes
(6) Vercel: preview → aprovação da escola → produção
```

**Capacidades que faltam e substitutos**
- **Auditoria automática de acessibilidade (axe):** sem skill dedicada → Lighthouse via chrome-devtools-mcp + `@axe-core/playwright` no Claude Code (instalar só com sua confirmação).
- **Revisão jurídica (ECA, LGPD, CDC, Lei 9.870/99):** nenhuma ferramenta substitui → advogado(a) revisa termo de imagem, política de privacidade e textos de matrícula.
- **Extrair HEX dos posts da escola:** sem acesso ao Instagram aqui → pedir os arquivos à escola ou extrair de um print com conta-gotas.

**Bibliotecas recomendadas** (licença livre, baixo peso)

| Necessidade | Recomendada | Peso / licença | Alternativa leve |
|---|---|---|---|
| Fontes | Fontsource: `@fontsource-variable/nunito`, `@fontsource-variable/nunito-sans`, `@fontsource/caveat` (subconjunto) | 39 + 31 + ≤15 KB · OFL · auto-hospedadas (sem enviar IP do visitante ao Google) | Só fontes do sistema (0 KB) |
| Ícones | Lucide (SVG inline) | ~0,3–1 KB por ícone · ISC | Tabler Icons (MIT) |
| Marcas | Simple Icons (WhatsApp, Instagram) | <1 KB · CC0 | — |
| Animação | CSS + IntersectionObserver | 0 KB extra | Motion (motion.dev, MIT) só se necessário |
| Mapa | Imagem estática + link Google Maps; iframe sob demanda | ~60 KB (imagem) | Leaflet (BSD-2) + OpenStreetMap após clique (~40 KB gz) |
| Analytics | Nenhum, ou Vercel Web Analytics / Cloudflare Web Analytics (sem cookies) | ~1–2 KB | — |
| Formulário | `wa.me` (sem servidor) | 0 KB | Web3Forms/Formspree → e-mail (atualizar a política) |
| Imagens | `astro:assets` (sharp) | build-time | Squoosh manual |

---

# FASE 6 — AUTOAVALIAÇÃO (checklist final)

| Item | Status | Evidência |
|---|---|---|
| Todas as referências foram analisadas e citadas | **Aprovado** | Fases 1–2 cobrem REF 1–5; HEX medidos por script |
| Marca preservada (laranja, brasão FS, slogan); refs só em estrutura/ritmo/acabamento | **Aprovado** | §1.2, Fase 3; navy declarado como apoio vetável |
| Nenhum dado [NÃO ENCONTRADO] preenchido com informação inventada | **Aprovado** | Tudo em `content.json` com status; 31 campos obrigatórios pendentes travam o build |
| Nenhuma infraestrutura não confirmada no design/copy | **Aprovado** | Varredura automática: termos só aparecem nas listas de proibição |
| Nenhum homônimo citado ou linkado | **Aprovado** | Homônimos aparecem só na lista "nunca linkar"; `check-content.mjs dist` bloqueia |
| Endereço e telefone marcados [CONFIRMAR] | **Aprovado** | Hero, Localização, rodapé, JSON-LD, `content.json` |
| Nenhuma foto de aluno sem flag de autorização | **Aprovado** | `SafeImage` + `photo-pending` + verificação de `termo_assinado`/`valido_ate` |
| Sem promessa de resultado, depoimento inventado ou apelo à criança | **Aprovado** | §9 (lista do que não escrever), depoimentos com estado vazio |
| Formulário só com nome, WhatsApp e etapa; consentimento desmarcado | **Aprovado** | §3.15, `preview.html` |
| Bloco de matrículas com valores, vagas por sala e proposta de contrato | **Aprovado** | §3.13; trava dos 45 dias em `check-content.mjs` |
| Rodapé com razão social, CNPJ, INEP e privacidade | **Aprovado** | §3.17 |
| Contrastes ≥ WCAG AA, inclusive laranja/amarelo | **Ajustado** | Branco sobre laranja reprovado → texto escuro; azul-céu #1C74B0 → #1A6AA3; verde WhatsApp #25D366 → #128C7E |
| Mobile-first, alvos ≥ 44px, peso adequado ao 4G | **Ajustado** | Alvo mínimo 48px; tabela de preços estourava 390px → corrigida (`scrollWidth` 390); orçamento §5 |
| Componentes com estados (hover, focus, disabled, erro) | **Aprovado** | §3 + "Guia de estados" na `preview.html` |
| Nenhum valor de componente fora dos tokens | **Ajustado** | Varredura encontrou `0.18em`, `0.2em`, `0.9em` → viraram `--underline-offset` e `inherit`; exceções declaradas na §3 |
| Conflitos entre referências e marca documentados | **Aprovado** | Fase 2.3 |
| Skills escolhidas existem de fato, com ordem e revisão de conformidade | **Aprovado** | Listadas pelas ferramentas da conta; gate (4) no fluxo |
| Prompt-mestre funciona sozinho, sem as imagens | **Aprovado** | §12 traz tokens, seções, regras e dados; usa `./design` quando existir |
| Lista de pendências para a escola pronta | **Aprovado** | §13 (≈50 itens) |

**Erros encontrados e corrigidos durante a verificação:** variável `--color-whatsapp` apontava para ela mesma (botão flutuante ficava transparente) → primitiva renomeada para `wa-green`; títulos do formulário e texto do consentimento herdavam branco dentro da seção navy (invisíveis) → superfícies claras redefinem a cor do texto; slogan manuscrito no rodapé saía laranja-escuro sobre navy → amarelo.
