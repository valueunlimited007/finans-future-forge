import { CASINO_BRANDS } from '@/data/casino-schema';

export interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export class SitemapGenerator {
  private baseUrl = 'https://kasinos.se';
  
  generateSitemap(): SitemapEntry[] {
    const entries: SitemapEntry[] = [];
    const now = new Date().toISOString().split('T')[0];

    // Homepage
    entries.push({
      url: this.baseUrl,
      lastmod: now,
      changefreq: 'daily',
      priority: 1.0
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
        url: `${this.baseUrl}${path}`,
        lastmod: now,
        changefreq: 'weekly',
        priority: 0.9
      });
    });

    // Casino review pages
    CASINO_BRANDS.forEach(casino => {
      const slug = casino.name.toLowerCase().replace(/[^\w]/g, '-');
      entries.push({
        url: `${this.baseUrl}/se/recension/${slug}`,
        lastmod: now,
        changefreq: 'weekly',
        priority: 0.8
      });
    });

    // Guide pages
    entries.push({
      url: `${this.baseUrl}/se/guider/spelpaus`,
      lastmod: now,
      changefreq: 'monthly',
      priority: 0.7
    });

    // Static pages
    const staticPages = [
      '/om',
      '/integritetspolicy', 
      '/cookies'
    ];

    staticPages.forEach(path => {
      entries.push({
        url: `${this.baseUrl}${path}`,
        lastmod: now,
        changefreq: 'yearly',
        priority: 0.5
      });
    });

    return entries.sort((a, b) => b.priority - a.priority);
  }

  generateXmlSitemap(): string {
    const entries = this.generateSitemap();
    
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${entries.map(entry => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority.toFixed(1)}</priority>
  </url>`).join('\n')}
</urlset>`;

    return xml;
  }

  generateRobotsTxt(): string {
    return `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${this.baseUrl}/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Block sensitive areas
Disallow: /api/
Disallow: /admin/
Disallow: /_next/
Disallow: /static/

# Allow specific important pages
Allow: /se/
Allow: /om
Allow: /integritetspolicy

# Block parameter pages to avoid duplicate content
Disallow: /*?*

# Block development files
Disallow: /*.json$
Disallow: /*.xml$
Disallow: /*.txt$

# Special instructions for different bots
User-agent: Googlebot
Allow: /

User-agent: Bingbot  
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

# Block AI training crawlers (optional)
User-agent: ChatGPT-User
Disallow: /

User-agent: GPTBot
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: anthropic-ai
Disallow: /`;
  }
}

export const sitemapGenerator = new SitemapGenerator();