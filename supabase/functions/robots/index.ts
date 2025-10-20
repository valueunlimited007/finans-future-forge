const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const host = req.headers.get('host') || '';
    console.log('[ROBOTS] Request from host:', host);
    
    let robotsContent = '';
    
    // Determine site based on hostname
    if (host.includes('finanzen-guide.de')) {
      robotsContent = `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://finanzen-guide.de/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Block sensitive areas
Disallow: /api/
Disallow: /admin/

# Allow specific important pages
Allow: /de/

# Block parameter pages to avoid duplicate content
Disallow: /*?*

# Special instructions for different bots
User-agent: Googlebot
Allow: /

User-agent: Bingbot  
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /`;
    } else if (host.includes('kasinos.se')) {
      robotsContent = `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://kasinos.se/sitemap.xml

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
    } else {
      // Default to finansguiden.se
      robotsContent = `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://finansguiden.se/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Block sensitive areas
Disallow: /api/
Disallow: /admin/

# Allow specific important pages
Allow: /privatlan
Allow: /foretagslan
Allow: /kreditkort
Allow: /om

# Block parameter pages to avoid duplicate content
Disallow: /*?*

# Special instructions for different bots
User-agent: Googlebot
Allow: /

User-agent: Bingbot  
Allow: /`;
    }

    return new Response(robotsContent, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('[ROBOTS] Error:', error);
    return new Response('Internal Server Error', {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'text/plain' },
    });
  }
});
