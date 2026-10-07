// @ts-check
import { defineConfig } from 'astro/config';

// Quando o domínio estiver definido (content.json → seo.url_canonica),
// preencha `site` e adicione a integração @astrojs/sitemap.
export default defineConfig({
  output: 'static',
  // site: 'https://[PREENCHER-dominio]',
  vite: {
    build: {
      // site.js (~5,5 KB) volta a ser embutido no HTML: sem requisição extra no caminho do LCP.
      // Só scripts; imagens e fontes seguem o padrão (nada vira base64).
      assetsInlineLimit: (file) => (/\.(js|ts)$/.test(file) && !file.includes('node_modules') ? true : undefined),
    },
  },
});
