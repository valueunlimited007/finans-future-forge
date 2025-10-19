import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Import data (kommer att finnas i samma mapp)
import { ROUTES } from './routes.ts';
import { GLOSSARY_TERMS } from './glossary-data.ts';
import { CASINO_BRANDS } from './casino-brands.ts';

type SiteLabel = 'finanzen' | 'finansguiden' | 'kasinos';

interface SiteConfig {
  domain: string;
  name: string;
  language: string;
  market: string;
}

const SITE_CONFIGS: Record<SiteLabel, SiteConfig> = {
  finanzen: {
    domain: 'finanzen-guide.de',
    name: 'Finanzen Guide',
    language: 'de-DE',
    market: 'DE',
  },
  finansguiden: {
    domain: 'finansguiden.se',
    name: 'Finansguiden.se',
    language: 'sv-SE',
    market: 'SE',
  },
  kasinos: {
    domain: 'kasinos.se',
    name: 'Kasinos.se',
    language: 'sv-SE',
    market: 'SE',
  },
};

function generateSitemap(site: SiteLabel): string {
  const config = SITE_CONFIGS[site];
  const baseUrl = `https://${config.domain}`;
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Add routes from ROUTES data
  const siteRoutes = ROUTES[site] || {};
  for (const [path, data] of Object.entries(siteRoutes)) {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}${path}</loc>\n`;
    xml += `    <lastmod>${data.lastmod || new Date().toISOString().split('T')[0]}</lastmod>\n`;
    xml += `    <changefreq>${data.changefreq || 'weekly'}</changefreq>\n`;
    xml += `    <priority>${data.priority || '0.5'}</priority>\n`;
    xml += '  </url>\n';
  }
  
  // Add glossary terms if available
  if (site === 'finansguiden' || site === 'finanzen') {
    const glossaryPath = site === 'finansguiden' ? '/ordlista' : '/glossar';
    GLOSSARY_TERMS.forEach((term: any) => {
      xml += '  <url>\n';
      xml += `    <loc>${baseUrl}${glossaryPath}/${term.slug}</loc>\n`;
      xml += `    <lastmod>${term.lastUpdated || new Date().toISOString().split('T')[0]}</lastmod>\n`;
      xml += `    <changefreq>monthly</changefreq>\n`;
      xml += `    <priority>0.7</priority>\n`;
      xml += '  </url>\n';
    });
  }
  
  // Add casino reviews if kasinos site
  if (site === 'kasinos') {
    CASINO_BRANDS.forEach((brand: any) => {
      xml += '  <url>\n';
      xml += `    <loc>${baseUrl}/recension/${brand.id}</loc>\n`;
      xml += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
      xml += `    <changefreq>weekly</changefreq>\n`;
      xml += `    <priority>0.8</priority>\n`;
      xml += '  </url>\n';
    });
  }
  
  xml += '</urlset>';
  return xml;
}

function generateRobotsTxt(site: SiteLabel): string {
  const config = SITE_CONFIGS[site];
  const baseUrl = `https://${config.domain}`;
  
  let robots = 'User-agent: *\n';
  robots += 'Allow: /\n\n';
  robots += 'User-agent: GPTBot\n';
  robots += 'Allow: /\n\n';
  robots += 'User-agent: ChatGPT-User\n';
  robots += 'Allow: /\n\n';
  robots += 'User-agent: CCBot\n';
  robots += 'Allow: /\n\n';
  robots += 'User-agent: anthropic-ai\n';
  robots += 'Allow: /\n\n';
  robots += 'User-agent: Claude-Web\n';
  robots += 'Allow: /\n\n';
  robots += 'Crawl-delay: 5\n\n';
  robots += `Sitemap: ${baseUrl}/sitemap.xml\n`;
  
  return robots;
}

function generateLlmsTxt(site: SiteLabel): string {
  const config = SITE_CONFIGS[site];
  const baseUrl = `https://${config.domain}`;
  
  let llms = `# ${config.name}\n\n`;
  llms += `${baseUrl}\n\n`;
  
  if (site === 'kasinos') {
    llms += '## Casino Reviews\n\n';
    llms += 'Independent casino reviews with Swedish license focus.\n\n';
    llms += '## Responsible Gaming\n\n';
    llms += 'Information about safe gambling and Spelpaus.se.\n\n';
  } else {
    llms += '## Financial Guides\n\n';
    llms += 'Comprehensive guides about loans, credit cards, and personal finance.\n\n';
    llms += '## Glossary\n\n';
    llms += 'Financial terminology explained in detail.\n\n';
  }
  
  llms += `## Sitemap\n\n`;
  llms += `${baseUrl}/sitemap.xml\n`;
  
  return llms;
}

function generateSecurityTxt(site: SiteLabel): string {
  const config = SITE_CONFIGS[site];
  
  let security = 'Contact: mailto:security@' + config.domain + '\n';
  security += 'Expires: ' + new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString() + '\n';
  security += 'Preferred-Languages: ' + (site === 'finanzen' ? 'de, en' : 'sv, en') + '\n';
  security += 'Canonical: https://' + config.domain + '/.well-known/security.txt\n';
  
  return security;
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { site } = await req.json();
    
    if (!site || !['finanzen', 'finansguiden', 'kasinos'].includes(site)) {
      throw new Error('Invalid site parameter. Must be: finanzen, finansguiden, or kasinos');
    }

    console.log(`Generating SEO files for: ${site}`);
    
    const sitemap = generateSitemap(site as SiteLabel);
    const robots = generateRobotsTxt(site as SiteLabel);
    const llms = generateLlmsTxt(site as SiteLabel);
    const security = generateSecurityTxt(site as SiteLabel);
    
    const response = {
      success: true,
      site,
      files: {
        'sitemap.xml': sitemap,
        'robots.txt': robots,
        'llms.txt': llms,
        'security.txt': security,
      },
      urlCount: sitemap.split('<url>').length - 1,
      timestamp: new Date().toISOString(),
    };

    console.log(`Generated ${response.urlCount} URLs for ${site}`);

    return new Response(JSON.stringify(response), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error generating SEO files:', error);
    
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
