import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const base = process.env.SITE_BASE || 'https://finansguiden.se';
const routesPath = resolve('src/seo/routes.json');
const routes = JSON.parse(readFileSync(routesPath, 'utf8'));

const now = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
const urls = Object.keys(routes).map(p => ({
  loc: `${base}${p === '/' ? '/' : p}`,
  lastmod: routes[p].lastmod || now,
  changefreq: routes[p].changefreq || 'weekly',
  priority: routes[p].priority ?? (p === '/' ? '1.0' : '0.8'),
}));

const sitemap =
`<?xml version="1.0" encoding="UTF-8"?>\n` +
`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n') +
`\n</urlset>\n`;

writeFileSync(resolve('public/sitemap.xml'), sitemap, 'utf8');

const robots =
`User-agent: *\n` +
`Allow: /\n` +
`Sitemap: ${base}/sitemap.xml\n`;
writeFileSync(resolve('public/robots.txt'), robots, 'utf8');

const llms =
`# llms.txt – vägledning för LLM-crawl\n` +
`Sitemap: ${base}/sitemap.xml\n` +
`Allow: /\n`;
writeFileSync(resolve('public/llms.txt'), llms, 'utf8');

// valfritt: security.txt
const security =
`Contact: mailto:security@finansguiden.se\n` +
`Expires: ${new Date(Date.now()+1000*60*60*24*180).toISOString()}\n`;
const wellKnownDir = resolve('public/.well-known');
try { require('fs').mkdirSync(wellKnownDir, { recursive: true }); } catch {}
writeFileSync(resolve('public/.well-known/security.txt'), security, 'utf8');

console.log('[SEO] Wrote sitemap.xml, robots.txt, llms.txt, security.txt');
