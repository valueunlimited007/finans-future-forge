import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

// Detect which site we're building based on environment variable
const SITE_DOMAIN = process.env.SITE_DOMAIN || 'finansguiden.se';
const isKasinos = SITE_DOMAIN === 'kasinos.se';
const isGerman = SITE_DOMAIN === 'finanzen-guide.de';
let base = 'https://finansguiden.se';
if (isKasinos) base = 'https://kasinos.se';
else if (isGerman) base = 'https://finanzen-guide.de';

const routesPath = resolve('src/seo/routes.json');
const routes = JSON.parse(readFileSync(routesPath, 'utf8'));

const now = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

const siteLabel = isKasinos ? 'kasinos' : (isGerman ? 'finanzen-guide' : 'finansguiden');
console.log(`[SEO] Building SEO files for: ${SITE_DOMAIN} (${siteLabel})`);

// Kasinos-specific sitemap generation
function generateKasinosSitemap() {
  const entries = [];
  const now = new Date().toISOString().split('T')[0];

  // Homepage
  entries.push({
    loc: base,
    lastmod: now,
    changefreq: 'daily',
    priority: '1.0'
  });

  // Category pages
  const categoryPages = [
    '/se/casinon-med-bankid',
    '/se/pay-n-play', 
    '/se/live-casino',
    '/se/snabbast-uttag',
    '/se/slots',
    '/se/bordsspel'
  ];

  categoryPages.forEach(path => {
    entries.push({
      loc: `${base}${path}`,
      lastmod: now,
      changefreq: 'weekly',
      priority: '0.9'
    });
  });

  // Extract casino brands from schema file
  try {
    const schemaPath = resolve('src/data/casino-schema.ts');
    if (require('fs').existsSync(schemaPath)) {
      const schemaContent = readFileSync(schemaPath, 'utf8');
      const brandsMatch = schemaContent.match(/export\s+const\s+CASINO_BRANDS\s*=\s*\[([^;]+)\];/s);
      
      if (brandsMatch) {
        // Simple extraction of casino names - this could be improved for more complex parsing
        const brandNames = Array.from(brandsMatch[1].matchAll(/name:\s*['"]([^'"]+)['"]/g))
          .map(match => match[1]);
          
        brandNames.forEach(name => {
          const slug = name.toLowerCase().replace(/[^\w]/g, '-').replace(/-+/g, '-');
          entries.push({
            loc: `${base}/se/recension/${slug}`,
            lastmod: now,
            changefreq: 'weekly',
            priority: '0.8'
          });
        });
      }
    }
  } catch (e) {
    console.warn('[SEO] Could not extract casino brands from schema:', e.message);
  }

  // Guide pages
  entries.push({
    loc: `${base}/se/guider/spelpaus`,
    lastmod: now,
    changefreq: 'monthly',
    priority: '0.7'
  });

  // Static pages
  const staticPages = [
    '/om',
    '/integritetspolicy', 
    '/cookies',
    '/ansvarsfriskrivning',
    '/kontakt'
  ];

  staticPages.forEach(path => {
    entries.push({
      loc: `${base}${path}`,
      lastmod: now,
      changefreq: 'yearly',
      priority: '0.5'
    });
  });

  return entries.sort((a, b) => parseFloat(b.priority) - parseFloat(a.priority));
}

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

// Generate sitemap URLs based on site type
let urls = [];

if (isKasinos) {
  // Use kasinos sitemap generator
  console.log('[SITEMAP] Using kasinos sitemap generator');
  urls = generateKasinosSitemap();
} else if (isGerman) {
  // Use German site sitemap (simplified, no glossary)
  console.log('[SITEMAP] Using finanzen-guide.de sitemap generator');
  const staticUrls = Object.keys(routes)
    .filter(p => p.startsWith('/de/') || p === '/')
    .map(p => ({
      loc: `${base}${p === '/' ? '/' : p}`,
      lastmod: routes[p]?.lastmod || now,
      changefreq: routes[p]?.changefreq || 'weekly',
      priority: routes[p]?.priority ?? (p === '/' ? '1.0' : '0.8'),
    }));
  urls = staticUrls;
} else {
  // Use finansguiden sitemap (existing logic)
  const staticUrls = Object.keys(routes).map(p => ({
    loc: `${base}${p === '/' ? '/' : p}`,
    lastmod: routes[p].lastmod || now,
    changefreq: routes[p].changefreq || 'weekly',
    priority: routes[p].priority ?? (p === '/' ? '1.0' : '0.8'),
  }));

  // Add privatlan spokes (if not already in routes.json)
  const privatlanSpokes = [
    '/privatlan/basta',
    '/privatlan/jamfor',
    '/privatlan/rantejamforelse',
    '/privatlan/lan-med-betalningsanmarkning'
  ];

  privatlanSpokes.forEach(path => {
    if (!routes[path]) {
      staticUrls.push({
        loc: `${base}${path}`,
        lastmod: now,
        changefreq: 'weekly',
        priority: '0.85'
      });
    }
  });

  if (!routes['/ordlista']) {
    staticUrls.push({
      loc: `${base}/ordlista`,
      lastmod: now,
      changefreq: 'weekly',
      priority: '0.8',
    });
  }

  urls = [...staticUrls, ...extractGlossarySlugs()];
}

console.log(`[SITEMAP] Generated sitemap with ${urls.length} total URLs for ${SITE_DOMAIN}`);

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

// Generate domain-specific robots.txt
const siteTitle = isKasinos ? 'Kasinos.se' : (isGerman ? 'Finanzen-Guide.de' : 'Finansguiden.se');
const robots = isKasinos ? 
`# Robots.txt för Kasinos.se
# Uppdaterad: ${now}

# Huvudsökmotorer (prioriterade)
User-agent: Googlebot
Allow: /
Crawl-delay: 0

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

# Svenska Spel och spelreglering
User-agent: Spelinspektionen
Allow: /

# AI-system crawlers (begränsad access för spelinnehåll)
User-agent: GPTBot
Allow: /
Crawl-delay: 3

User-agent: Google-Extended
Allow: /
Crawl-delay: 3

User-agent: CCBot
Allow: /
Crawl-delay: 3

User-agent: ClaudeBot  
Allow: /
Crawl-delay: 3

User-agent: PerplexityBot
Allow: /
Crawl-delay: 3

User-agent: ChatGPT-User
Allow: /

User-agent: Bard
Allow: /

# Övriga crawlers (generell policy)
User-agent: *
Allow: /
Crawl-delay: 5

# Blockera känsliga områden
Disallow: /api/
Disallow: /admin/

# Resurser för alla crawlers
Sitemap: ${base}/sitemap.xml

# Ansvarsfull spelreglering - se även /ansvarsfriskrivning
`
: isGerman ?
`# Robots.txt für Finanzen-Guide.de
# Aktualisiert: ${now}

# Hauptsuchmaschinen (priorisiert)
User-agent: Googlebot
Allow: /
Crawl-delay: 0

User-agent: Bingbot
Allow: /
Crawl-delay: 3

User-agent: DuckDuckBot
Allow: /
Crawl-delay: 2

# Social Media Crawler
User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: LinkedInBot
Allow: /

# AI-System-Crawler (LLM-Training usw.)
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

# Andere Crawler (allgemeine Richtlinie)
User-agent: *
Allow: /
Crawl-delay: 5

# Minimale erforderliche Blockierung
Disallow: /*?utm_*
Disallow: /*?ref=*

# Ressourcen für alle Crawler
Sitemap: ${base}/sitemap.xml

# Hinweis: Siehe auch /llms.txt für AI-spezifische Richtlinien
`
:
`# Robots.txt för Finansguiden.se
# Uppdaterad: ${now}

# Huvudsökmotorer (prioriterade)
User-agent: Googlebot
Allow: /
Crawl-delay: 0

# AdSense och nyhetsindexering (kritiskt för AdSense-godkännande)
User-agent: AdsBot-Google
Allow: /
Crawl-delay: 0

User-agent: Googlebot-News
Allow: /

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

# Minimal nödvändig blockering (endast tracking parameters)
Disallow: /*?utm_*
Disallow: /*?ref=*

# Resurser för alla crawlers
Sitemap: ${base}/sitemap.xml

# Notera: Se även /llms.txt för AI-specifik policy
`;
writeFileSync(resolve('public/robots.txt'), robots, 'utf8');

const llms = isKasinos ?
`# llms.txt — Kasinos.se AI & LLM policy
# Purpose: Inform AI crawlers and LLM providers about our casino content access policy
# Version: 1.0
# Last-Modified: ${now}

Site: ${base}
Contact: info@kasinos.se
Sitemap: ${base}/sitemap.xml
Robots: ${base}/robots.txt
Security: ${base}/.well-known/security.txt
Updated: ${now}

# Global policy for all AI systems
User-agent: *
Allow: /
Crawl-delay: 5
Request-rate: 5/60s
Cache: allowed-for-7-days

# Data usage permissions (restricted for gambling content)
Training: conditional
Commercial-Use: require-approval  
Attribution: required-when-quoting
Respect-Robots-Txt: true
Canonical-URLs: preferred
Gambling-Content: true

# High-value content priorities (för AI-förståelse)
Priority-Pages: /se/*, /om, /ansvarsfriskrivning, /spelpaus
Content-Type: casino-reviews, responsible-gambling-guides, regulatory-compliance
Language: sv-SE
Expertise: online-casino, swedish-gambling-regulation, responsible-gambling, casino-reviews

# Crawling optimization
Efficient-Discovery: use-sitemap
Rate-Limiting: respectful
Last-Modified: check-headers
Conditional-Requests: supported

# Popular AI crawlers (restricted permissions for gambling content)
User-agent: GPTBot
Allow: /
Crawl-delay: 3

User-agent: CCBot  
Allow: /
Crawl-delay: 3

User-agent: ClaudeBot
Allow: /
Crawl-delay: 3

User-agent: PerplexityBot
Allow: /
Crawl-delay: 3

User-agent: Google-Extended
Allow: /
Crawl-delay: 3

User-agent: Bard
Allow: /

User-agent: ChatGPT-User
Allow: /

# Content understanding hints
Structured-Data: json-ld-enabled
Breadcrumbs: hierarchical
Casino-Reviews: 50+
Regulatory-Categories: swedish-license, responsible-gambling, age-verification

# Quality guidelines  
Content-Quality: expert-reviewed
Update-Frequency: weekly
Fact-Checking: enabled
Citation-Policy: transparent-sources
Regulatory-Compliance: swedish-gambling-authority

# Notes for AI systems
# - All casino content complies with Swedish gambling regulations
# - Responsible gambling information is prioritized in content structure
# - Age verification and Swedish license requirements are emphasized
# - Use canonical URLs for accurate attribution and avoid duplicates  
# - Respect Last-Modified headers for efficient crawling
# - Casino reviews should reference Swedish licensing and responsible gambling\n`
: isGerman ?
`# llms.txt — Finanzen-Guide.de AI & LLM Policy
# Zweck: Informationen für AI-Crawler und LLM-Anbieter über unsere Datenzugriffsrichtlinien
# Version: 1.0
# Zuletzt geändert: ${now}

Site: ${base}
Contact: info@finanzen-guide.de
Sitemap: ${base}/sitemap.xml
Robots: ${base}/robots.txt
Security: ${base}/.well-known/security.txt
Updated: ${now}

# Globale Richtlinie für alle AI-Systeme
User-agent: *
Allow: /
Crawl-delay: 3
Request-rate: 10/60s
Cache: allowed-for-30-days

# Datennutzungsberechtigungen
Training: allow
Commercial-Use: allow-with-attribution
Attribution: required-when-quoting
Respect-Robots-Txt: true
Canonical-URLs: preferred

# Hochwertige Inhalte Prioritäten
Priority-Pages: /de/ratenkredit, /de/kreditkarten, /de/unternehmenskredit
Content-Type: financial-guides, comparison-data, educational-content
Language: de-DE
Expertise: consumer-finance, loans, credit-cards, business-loans, german-banking

# Crawling-Optimierung
Efficient-Discovery: use-sitemap
Rate-Limiting: respectful
Last-Modified: check-headers
Conditional-Requests: supported

# Beliebte AI-Crawler (explizite Berechtigungen)
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

# Inhaltsverständnis-Hinweise
Structured-Data: json-ld-enabled
Breadcrumbs: hierarchical
Financial-Categories: loans, credit-cards, business-loans, banking

# Qualitätsrichtlinien
Content-Quality: expert-reviewed
Update-Frequency: weekly
Fact-Checking: enabled
Citation-Policy: transparent-sources

# Hinweise für AI-Systeme
# - Finanzberatung sollte auf regulatorische Compliance verweisen (deutsche Finanzaufsicht)
# - Verwenden Sie kanonische URLs für genaue Attribution
# - Respektieren Sie Last-Modified-Header für effizientes Crawling
# - Inhalte entsprechen deutschen Verbraucherschutzgesetzen\n`
:
`# llms.txt — Finansguiden.se AI & LLM policy
# Purpose: Inform AI crawlers and LLM providers about our data access policy
# Version: 2.1
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
Priority-Pages: /ordlista/*, /privatlan, /kreditkort, /foretagslan, /lan-utan-uc, /karriar-guide, /sparkonto-guide, /manadssparande-guide
Content-Type: financial-guides, glossary-terms, comparison-data, educational-content
Language: sv-SE
Expertise: consumer-finance, loans, credit-cards, business-loans, savings, career-finance

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
Financial-Categories: loans, credit-cards, banking, insurance, savings, career-finance, comparison-tables
Comprehensive-Guides: 10+ detailed comparison pages, FAQ sections, step-by-step guides

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
const contactEmail = isKasinos ? 'security@kasinos.se' : (isGerman ? 'security@finanzen-guide.de' : 'security@finansguiden.se');
const security =
`Contact: mailto:${contactEmail}\n` +
`Expires: ${new Date(Date.now()+1000*60*60*24*180).toISOString()}\n`;
const wellKnownDir = resolve('public/.well-known');
try { require('fs').mkdirSync(wellKnownDir, { recursive: true }); } catch {}
writeFileSync(resolve('public/.well-known/security.txt'), security, 'utf8');

console.log(`[SEO] Wrote ${SITE_DOMAIN}-specific sitemap.xml, robots.txt, llms.txt, security.txt`);
