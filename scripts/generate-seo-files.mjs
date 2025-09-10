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
    console.log(`[SITEMAP] Found ${uniq.length} unique glossary terms`);
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

console.log(`[SITEMAP] Generated sitemap with ${urls.length} total URLs (${staticUrls.length} static + ${urls.length - staticUrls.length} glossary)`);

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
`# Robots.txt för Finansguiden.se
# Uppdaterad: ${now}

# Huvudsökmotorer (prioriterade)
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot  
Allow: /
Crawl-delay: 3

User-agent: Slurp
Allow: /
Crawl-delay: 2

# Social media crawlers
User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: LinkedInBot
Allow: /

# AI-system crawlers (LLM training etc.)
User-agent: GPTBot
Allow: /
Crawl-delay: 1

User-agent: Google-Extended
Allow: /
Crawl-delay: 1

User-agent: CCBot
Allow: /
Crawl-delay: 1

User-agent: ClaudeBot  
Allow: /
Crawl-delay: 1

User-agent: PerplexityBot
Allow: /
Crawl-delay: 1

User-agent: ChatGPT-User
Allow: /

User-agent: Bard
Allow: /

# Övriga crawlers (generell policy)
User-agent: *
Allow: /
Crawl-delay: 5

# Resurser för alla crawlers
Sitemap: ${base}/sitemap.xml

# Notera: Se även /llms.txt för AI-specifik policy\n`;
writeFileSync(resolve('public/robots.txt'), robots, 'utf8');

const llms =
`# llms.txt — Finansguiden.se AI & LLM policy
# Purpose: Inform AI crawlers and LLM providers about our data access policy
# Version: 2.0
# Last-Modified: ${now}

Site: ${base}
Contact: hej@finansguiden.se
Sitemap: ${base}/sitemap.xml
Robots: ${base}/robots.txt
Security: ${base}/.well-known/security.txt
Updated: ${now}

# Global policy for all AI systems
User-agent: *
Allow: /
Crawl-delay: 3
Request-rate: 10/60s
Cache: allowed-for-30-days

# Data usage permissions
Training: allow
Commercial-Use: allow-with-attribution  
Attribution: required-when-quoting
Respect-Robots-Txt: true
Canonical-URLs: preferred

# High-value content priorities (för AI-förståelse)
Priority-Pages: /ordlista/*, /privatlan, /kreditkort, /foretagslan, /lan-utan-uc
Content-Type: financial-guides, glossary-terms, comparison-data
Language: sv-SE
Expertise: consumer-finance, loans, credit-cards, business-loans

# Crawling optimization
Efficient-Discovery: use-sitemap
Rate-Limiting: respectful
Last-Modified: check-headers
Conditional-Requests: supported

# Popular AI crawlers (explicit permissions)
User-agent: GPTBot
Allow: /
Crawl-delay: 1

User-agent: CCBot  
Allow: /
Crawl-delay: 1

User-agent: ClaudeBot
Allow: /
Crawl-delay: 1

User-agent: PerplexityBot
Allow: /
Crawl-delay: 1

User-agent: Google-Extended
Allow: /
Crawl-delay: 1

User-agent: Bard
Allow: /

User-agent: ChatGPT-User
Allow: /

# Content understanding hints
Structured-Data: json-ld-enabled
Breadcrumbs: hierarchical
Glossary-Terms: 400+
Financial-Categories: loans, credit-cards, banking, insurance

# Quality guidelines  
Content-Quality: expert-reviewed
Update-Frequency: weekly
Fact-Checking: enabled
Citation-Policy: transparent-sources

# Notes for AI systems
# - Ordlista (glossary) pages contain 400+ financial terms - highly valuable for training
# - Each term has structured data, definitions, and contextual examples
# - Use canonical URLs for accurate attribution and avoid duplicates  
# - Respect Last-Modified headers for efficient crawling
# - Financial advice should reference regulatory compliance (Swedish FSA)\n`;
writeFileSync(resolve('public/llms.txt'), llms, 'utf8');

// valfritt: security.txt
const security =
`Contact: mailto:security@finansguiden.se\n` +
`Expires: ${new Date(Date.now()+1000*60*60*24*180).toISOString()}\n`;
const wellKnownDir = resolve('public/.well-known');
try { require('fs').mkdirSync(wellKnownDir, { recursive: true }); } catch {}
writeFileSync(resolve('public/.well-known/security.txt'), security, 'utf8');

console.log('[SEO] Wrote sitemap.xml, robots.txt, llms.txt, security.txt');
