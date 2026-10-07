# Prompt inicial — Claude Code

**Como usar:** abra esta pasta no Claude Code e cole o bloco abaixo inteiro como primeira mensagem
(ou digite: `leia o PROMPT-INICIAL.md e execute`).
É o prompt-mestre da §12 do `design/DESIGN-SYSTEM.md`, adaptado para esta estrutura de pastas.

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

<arquivos_do_projeto>
O projeto JÁ ESTÁ ESTRUTURADO nesta pasta. NÃO rode "npm create astro" e não mova estes arquivos:
- CLAUDE.md ..................... regras permanentes do projeto (leia primeiro)
- src/styles/tokens.css ......... tokens: fonte da verdade de cores, tipografia, espaço, movimento
- src/styles/components.css ..... componentes BEM prontos (botão, hero, cards, FAQ, formulário, rodapé)
- src/content/content.json ...... TODOS os dados da escola, cada um com status de confirmação
- scripts/check-content.mjs ..... trava de conformidade (modos "content" e "dist")
- scripts/build.mjs ............. build multiplataforma (produção com travas / staging)
- package.json, astro.config.mjs, tsconfig.json, .gitignore, public/robots.txt
- design/DESIGN-SYSTEM.md ....... regras completas (consulte antes de decidir)
- design/preview.html ........... esqueleto HTML de referência com todos os componentes e estados
- design/referencias/ ........... 5 referências visuais só para consulta; nunca copiar
- src/assets/marca/brasao-placeholder.svg · public/docs/proposta-contrato-2027-EXEMPLO.pdf ... arquivos de teste
- comandos-claude/ .............. 3 comandos do projeto para mover para .claude/commands/ (passo 2)
Pastas já criadas e vazias: src/components, src/layouts, src/pages, src/lib, src/scripts,
src/assets/fotos, src/assets/marca, public/docs.
_materiais-da-escola/ = material bruto da escola: nunca publicar direto dali (tratar e salvar em src/assets).
</arquivos_do_projeto>

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

<modo_teste>
ESTE SITE É DE TESTE. src/content/content.json já está preenchido com dados FICTÍCIOS (status "ficticio";
o valor antigo do dossiê fica em "dossie"). Regras:
- Em dev/staging, "ficticio" renderiza normalmente (sem chip [PREENCHER]); o que ainda for "preencher"
  (fotos, OG) continua como placeholder/slot "Foto pendente".
- Mostrar no topo de todas as páginas: <div class="demo-banner" data-demo role="note">Site de teste — dados
  fictícios. Não compartilhe com as famílias.</div> (componente já em components.css).
- Depoimentos e perfis da equipe fictícios: selo <span class="badge badge--demo" data-demo>Exemplo fictício</span>.
- Brasão de teste: src/assets/marca/brasao-placeholder.svg. Contrato de teste: public/docs/proposta-contrato-2027-EXEMPLO.pdf.
- WhatsApp de teste é inválido de propósito (DDD 00); não use o número real da escola nos testes.
- Seção Equipe e Depoimentos ficam VISÍVEIS no teste (exibir_secao=true).
- npm run build (produção) recusa dados fictícios. Não contorne a trava; use npm run build:staging.
- Nunca copie números, links ou textos de dados de design/preview.html: TODO dado vem de content.json.
</modo_teste>

<dados>
Todo dado da escola vem de src/content/content.json via lib/content.ts:
- status "confirmado" → renderiza; "ficticio" → renderiza só em dev/staging (ver <modo_teste>);
  "provavel" | "confirmar" | "preencher" → em staging renderiza
  <span class="pending">[PREENCHER: …]</span>; em produção: campo opcional é ocultado,
  campo obrigatório faz o build falhar (scripts/check-content.mjs content).
- Após o build, scripts/check-content.mjs dist varre o HTML e falha se sobrar placeholder,
  termo proibido, homônimo ou o WhatsApp antigo (87) 9910-7675.
- Dados do dossiê (referência; NO MODO TESTE IGNORE-OS e use só content.json): WhatsApp (87) 99931-9123; endereço com 2 versões
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
1 Leia CLAUDE.md e design/DESIGN-SYSTEM.md e liste em 10 linhas o que vai construir.
2 Rode: npm install astro @fontsource-variable/nunito @fontsource-variable/nunito-sans @fontsource/caveat
  (o package.json já tem os scripts). Inicie o git (git init) e confirme que "npm run dev" sobe.
  Crie a pasta .claude/commands/, mova para ela os 3 arquivos de comandos-claude/
  (validar.md, revisar-conformidade.md, confirmar-dado.md) e apague comandos-claude/.
3 Construa na ordem: tokens > base > layout > componentes > seções 0→12 > página > polimento.
4 A cada 2 seções, rode o servidor e confira em 390px, 768px e 1280px (prints se tiver
  ferramenta de navegador) e navegue só com teclado.
5 Rode npm run build:staging e mostre o resultado; rode npm run check:conteudo e confirme que
  a produção está bloqueada pelos dados fictícios (comportamento esperado).
6 Faça a revisão de conformidade item a item (<conformidade>) e reporte aprovado/ajustado.
7 Rode Lighthouse mobile e reporte LCP, CLS, INP, Acessibilidade e SEO.
Não invente conteúdo, não adicione bibliotecas além das citadas sem me perguntar.
</processo>

<criterios_de_aceite>
[ ] build:staging gera a página completa com os dados fictícios, a faixa "Site de teste" e os selos "Exemplo fictício"
[ ] build de produção FALHA enquanto houver dado fictício ou obrigatório não confirmado
[ ] nenhum valor visual fora dos tokens; sem branco sobre laranja/amarelo
[ ] barra fixa no celular e flutuante no desktop funcionam e não cobrem rodapé/formulário
[ ] formulário: 3 campos, consentimento desmarcado, abre WhatsApp, erros acessíveis
[ ] sem rolagem horizontal em 360px; alvos ≥48px; teclado completo
[ ] Lighthouse mobile ≥90 em Performance, Acessibilidade, Boas práticas e SEO
[ ] nenhum termo proibido, homônimo ou foto de aluno sem autorização
</criterios_de_aceite>
```
