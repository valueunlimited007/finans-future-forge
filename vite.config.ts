import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    {
      name: 'seo-files-generator',
      buildStart() {
        try {
          const base = process.env.SITE_BASE || 'https://finansguiden.se';
          const routesPath = path.resolve(__dirname, 'src/seo/routes.json');
          if (!fs.existsSync(routesPath)) return;
          const routes = JSON.parse(fs.readFileSync(routesPath, 'utf8'));
          const now = new Date().toISOString().slice(0, 10);
          const urls = Object.keys(routes).map((p) => ({
            loc: `${base}${p === '/' ? '/' : p}`,
            lastmod: routes[p].lastmod || now,
            changefreq: routes[p].changefreq || 'weekly',
            priority: routes[p].priority ?? (p === '/' ? '1.0' : '0.8'),
          }));

          const sitemap =
            `<?xml version="1.0" encoding="UTF-8"?>\n` +
            `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
            urls
              .map(
                (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
              )
              .join('\n') +
            `\n</urlset>\n`;
          fs.writeFileSync(path.resolve(__dirname, 'public/sitemap.xml'), sitemap, 'utf8');

          const robots = `User-agent: *\n` + `Allow: /\n` + `Sitemap: ${base}/sitemap.xml\n`;
          fs.writeFileSync(path.resolve(__dirname, 'public/robots.txt'), robots, 'utf8');

          const llms =
            `# llms.txt – vägledning för LLM-crawl\n` +
            `Sitemap: ${base}/sitemap.xml\n` +
            `Allow: /\n`;
          fs.writeFileSync(path.resolve(__dirname, 'public/llms.txt'), llms, 'utf8');

          const wellKnownDir = path.resolve(__dirname, 'public/.well-known');
          fs.mkdirSync(wellKnownDir, { recursive: true });
          const security =
            `Contact: mailto:security@finansguiden.se\n` +
            `Expires: ${new Date(Date.now() + 1000 * 60 * 60 * 24 * 180).toISOString()}\n`;
          fs.writeFileSync(path.resolve(wellKnownDir, 'security.txt'), security, 'utf8');

          console.log('[SEO] Wrote sitemap.xml, robots.txt, llms.txt, security.txt');
        } catch (e) {
          console.warn('[SEO] generation failed:', e);
        }
      },
    },
  ].filter(Boolean),
  base: '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
