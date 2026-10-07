// scripts/baixar-fotos-teste.mjs — baixa as FOTOS ILUSTRATIVAS do modo teste para src/assets/fotos/.
// São fotos de banco de imagens (Pexels/Unsplash), sem alunos, só para o site de teste parecer pronto.
// Créditos e licenças: src/assets/fotos/CREDITOS-TESTE.md. A produção recusa estas fotos
// (status "ficticio" no content.json + padrão "foto de teste" em check-content.mjs dist).
// Uso: node scripts/baixar-fotos-teste.mjs
import fs from 'node:fs';
import path from 'node:path';

const destino = path.join(process.cwd(), 'src/assets/fotos');
const fotos = [
  ['teste-hero-sala-infantil.jpg', 'https://images.pexels.com/photos/8088099/pexels-photo-8088099.jpeg?auto=compress&cs=tinysrgb&w=1920'],
  ['teste-sala-de-aula.jpg', 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=80&fm=jpg'],
  ['teste-parquinho.jpg', 'https://images.unsplash.com/photo-1729147947344-865151ce9abf?w=1600&q=80&fm=jpg'],
  ['teste-rampa.jpg', 'https://images.unsplash.com/photo-1744959475930-c31fce3639d2?w=1600&q=80&fm=jpg'],
];

fs.mkdirSync(destino, { recursive: true });
let falhas = 0;
for (const [arquivo, url] of fotos) {
  try {
    const res = await fetch(url, { redirect: 'follow' });
    const tipo = res.headers.get('content-type') ?? '';
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    if (!tipo.startsWith('image/jpeg')) throw new Error(`tipo inesperado: ${tipo}`);
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(path.join(destino, arquivo), buf);
    console.log(`✓ ${arquivo} (${Math.round(buf.length / 1024)} KB)`);
  } catch (e) {
    falhas++;
    console.error(`✗ ${arquivo}: ${e.message}`);
  }
}
process.exit(falhas ? 1 : 0);
