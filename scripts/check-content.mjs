// scripts/check-content.mjs — trava de conformidade da Escola Fonte do Saber
// Uso:
//   node scripts/check-content.mjs content   -> antes do build de produção (lê src/content/content.json)
//   node scripts/check-content.mjs dist      -> depois do build (varre dist/**/*.html)
// Sai com código 1 (falha o deploy) se encontrar problema.
import fs from 'node:fs';
import path from 'node:path';

const mode = process.argv[2] ?? 'content';
const root = process.cwd();
const errors = [];

if (mode === 'content') {
  const file = process.env.CONTENT_FILE ?? path.join(root, 'src/content/content.json');
  const c = JSON.parse(fs.readFileSync(file, 'utf8'));

  // 1) Modo teste: QUALQUER dado fictício bloqueia a produção
  // 2) Campo obrigatório precisa estar confirmado
  const ficticios = [];
  const walk = (node, p) => {
    if (Array.isArray(node)) return node.forEach((n, i) => walk(n, `${p}[${i}]`));
    if (!node || typeof node !== 'object') return;
    for (const [k, v] of Object.entries(node)) {
      if (k.startsWith('status') && v === 'ficticio') ficticios.push(k === 'status' ? p : `${p}.${k}`);
    }
    if (node.ficticio === true && node.status !== 'ficticio') ficticios.push(`${p} (ficticio=true)`);
    if ('status' in node && node.obrigatorio === true && node.status !== 'confirmado' && node.status !== 'ficticio') {
      errors.push(`[dado] ${p} está "${node.status}" (obrigatório precisa de "confirmado")`);
    }
    for (const [k, v] of Object.entries(node)) if (k !== '_meta' && k !== 'dossie') walk(v, p ? `${p}.${k}` : k);
  };
  walk(c, '');
  if (ficticios.length) {
    errors.unshift(`[teste] ${ficticios.length} campo(s) com dados FICTÍCIOS — site de teste não pode ir para produção. Troque cada um pelo dado real (/confirmar-dado). Primeiros: ${ficticios.slice(0, 8).join(', ')}${ficticios.length > 8 ? ', …' : ''}`);
  }

  // 2) Imagem com rosto de aluno precisa de termo assinado e vigente
  const hoje = new Date().toISOString().slice(0, 10);
  const fotos = [...(c.imagens ?? []), ...((c.equipe?.membros ?? []).map(m => ({ slot: `equipe:${m.nome_exibicao}`, ...m.foto })))];
  for (const img of fotos) {
    if (!img?.arquivo) continue;
    const a = img.autorizacao;
    if (img.tem_rosto_de_aluno && !(a?.termo_assinado && a?.valido_ate && a.valido_ate >= hoje)) {
      errors.push(`[imagem] ${img.slot}: rosto de aluno sem termo assinado/vigente`);
    }
  }

  // 3) Depoimentos: só com autorização escrita
  for (const [i, d] of (c.depoimentos?.itens ?? []).entries()) {
    if (!d.autorizacao_escrita) errors.push(`[depoimento] item ${i} sem autorizacao_escrita=true`);
  }

  // 4) Matrículas: data de publicação >= 45 dias antes da data final (Lei 9.870/99)
  const fim = c.matriculas?.data_final?.valor;
  const pub = c.matriculas?.data_publicacao?.valor;
  if (fim && pub) {
    const dias = (new Date(fim) - new Date(pub)) / 86400000;
    if (dias < 45) errors.push(`[matrícula] publicação a ${dias} dias do fim (mínimo 45)`);
  }
}

if (mode === 'dist') {
  const dir = path.join(root, process.env.DIST_DIR ?? 'dist');
  const files = [];
  const list = (d) => fs.readdirSync(d, { withFileTypes: true }).forEach(e => {
    const f = path.join(d, e.name);
    if (e.isDirectory()) list(f); else if (f.endsWith('.html')) files.push(f);
  });
  list(dir);
  const proibidos = [
    [/\[(PREENCHER|CONFIRMAR)/i, 'placeholder não resolvido'],
    [/class="pending"/, 'componente .pending em produção'],
    [/9910-?7675/, 'WhatsApp ANTIGO'],
    [/piscina|biblioteca|audit[óo]rio|laborat[óo]rio|quadra (poli|de esporte)/i, 'infraestrutura não confirmada'],
    [/portaria|c[âa]meras? de seguran|monitoramento 24|escola segura/i, 'alegação de segurança'],
    [/garantid[ao]|a melhor escola|n[ºo°] ?1 |lendo em \d/i, 'promessa/superlativo'],
    [/esc\.fontedosaber|reclameaqui|surubim|fortaleza|col[ée]gio fonte do saber/i, 'homônimo'],
    [/a partir de R\$/i, '"a partir de" sem etapa'],
    // resíduos do modo teste
    [/00\.000\.000\/0000-00|5500000000000|\(00\) 00000-0000|\.example\b|-EXEMPLO\.pdf|brasao-placeholder/i, 'dado fictício do modo teste'],
    [/data-demo|site de teste|exemplo fict[íi]cio/i, 'marcação do modo teste'],
    [/\/teste-[\w-]+\.|foto ilustrativa/i, 'foto de teste'],
  ];
  for (const f of files) {
    const html = fs.readFileSync(f, 'utf8');
    for (const [re, msg] of proibidos) if (re.test(html)) errors.push(`[html] ${path.relative(root, f)}: ${msg} (${re})`);
  }
}

if (errors.length) {
  console.error(`\n✗ check-content (${mode}) encontrou ${errors.length} problema(s):\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log(`✓ check-content (${mode}) ok`);
