import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const base = process.env.SITE_BASE || 'https://finansguiden.se';
const routesPath = resolve('src/seo/routes.json');
const routes = JSON.parse(readFileSync(routesPath, 'utf8'));

const now = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

function slugify(s){
  return s
    .toLowerCase()
    .replace(/å/g,'a').replace(/ä/g,'a').replace(/ö/g,'o')
    .replace(/[^a-z0-9\- ]+/g,'')
    .replace(/ /g,'-')
    .replace(/-+/g,'-')
    .replace(/^-|-$/g,'');
}

function extractGlossarySlugs(){
  try {
    const ts = readFileSync(resolve('src/data/glossary.ts'),'utf8');

    const extractBlock = (varName) => {
      const re = new RegExp(`const\\s+${varName}[^=]*=\\s*{([\\s\\S]*?)};`);
      const m = ts.match(re);
      if (!m) return [];
      const block = m[1];
      return Array.from(block.matchAll(/"([^"]+)"/g)).map(x=>x[1]);
    };

    const terms = [
      ...extractBlock('CATEGORIES'),
      ...extractBlock('EXTRA'), // fångar upp extra-blocket som lagts till efter rad 75
    ];

    const uniq = Array.from(new Set(terms));
    const slugs = uniq.map(t => slugify(t));
    return slugs.map(slug => ({
      loc: `${base}/ordlista/${slug}`,
      lastmod: now,
      changefreq: 'weekly',
      priority: '0.7',
    }));
  } catch (e) {
    console.warn('[SEO] Failed to parse glossary.ts for slugs', e);
    return [];
  }
}

const staticUrls = Object.keys(routes).map(p => ({
  loc: `${base}${p === '/' ? '/' : p}`,
  lastmod: routes[p].lastmod || now,
  changefreq: routes[p].changefreq || 'weekly',
  priority: routes[p].priority ?? (p === '/' ? '1.0' : '0.8'),
}));

if (!routes['/ordlista']) {
  staticUrls.push({
    loc: `${base}/ordlista`,
    lastmod: now,
    changefreq: 'weekly',
    priority: '0.8',
  });
}

const urls = [...staticUrls, ...extractGlossarySlugs()];

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
