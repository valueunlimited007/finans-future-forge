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
    console.log('[SITEMAP] Request from host:', host);
    
    const now = new Date().toISOString().split('T')[0];
    let baseUrl = '';
    let urls: Array<{ url: string; priority: number; changefreq: string }> = [];
    
    // Determine site based on hostname
    if (host.includes('finanzen-guide.de')) {
      baseUrl = 'https://finanzen-guide.de';
      
      // German site URLs
      urls = [
        { url: '/', priority: 1.0, changefreq: 'daily' },
        { url: '/de/ratenkredit', priority: 0.9, changefreq: 'weekly' },
        { url: '/de/kreditkarten', priority: 0.9, changefreq: 'weekly' },
        { url: '/de/unternehmenskredit', priority: 0.9, changefreq: 'weekly' },
        { url: '/de/ratenkredit/beste', priority: 0.8, changefreq: 'weekly' },
        { url: '/de/ratenkredit/ohne-schufa', priority: 0.8, changefreq: 'weekly' },
        { url: '/de/ratenkredit/zinsen', priority: 0.8, changefreq: 'weekly' },
        { url: '/de/ratgeber/banken-vergleich', priority: 0.7, changefreq: 'monthly' },
        { url: '/de/ratgeber/immobilienmarkt', priority: 0.7, changefreq: 'monthly' },
        { url: '/de/ratgeber/deutsche-einkommen', priority: 0.7, changefreq: 'monthly' },
        { url: '/de/ratgeber/karriere', priority: 0.7, changefreq: 'monthly' },
        { url: '/de/ratgeber/gehaltsoptimierung', priority: 0.7, changefreq: 'monthly' },
        { url: '/de/ratgeber/monatliches-sparen', priority: 0.7, changefreq: 'monthly' },
        { url: '/de/ratgeber/sparkonto', priority: 0.7, changefreq: 'monthly' },
        { url: '/de/ratgeber/auto-kosten', priority: 0.7, changefreq: 'monthly' },
        { url: '/de/ratgeber/finanz-tipps', priority: 0.7, changefreq: 'monthly' },
        { url: '/de/ratgeber/bester-kredit', priority: 0.7, changefreq: 'monthly' },
        { url: '/de/ratgeber/zinsen', priority: 0.7, changefreq: 'monthly' },
        { url: '/de/glossar', priority: 0.6, changefreq: 'monthly' },
        { url: '/de/uber-uns', priority: 0.5, changefreq: 'yearly' },
        { url: '/de/datenschutz', priority: 0.5, changefreq: 'yearly' },
        { url: '/de/cookies', priority: 0.5, changefreq: 'yearly' },
        { url: '/de/impressum', priority: 0.5, changefreq: 'yearly' },
      ];
    } else if (host.includes('kasinos.se')) {
      baseUrl = 'https://kasinos.se';
      
      // Casino site URLs
      urls = [
        { url: '/', priority: 1.0, changefreq: 'daily' },
        { url: '/se/casinon-med-bankid', priority: 0.9, changefreq: 'weekly' },
        { url: '/se/pay-n-play', priority: 0.9, changefreq: 'weekly' },
        { url: '/se/live-casino', priority: 0.9, changefreq: 'weekly' },
        { url: '/se/snabbast-uttag', priority: 0.9, changefreq: 'weekly' },
        { url: '/se/slots', priority: 0.9, changefreq: 'weekly' },
        { url: '/se/bordsspel', priority: 0.9, changefreq: 'weekly' },
        { url: '/se/guider/spelpaus', priority: 0.7, changefreq: 'monthly' },
        { url: '/se/guider/ansvarsfullt-spelande', priority: 0.7, changefreq: 'monthly' },
        { url: '/se/guider/svensk-spellicens', priority: 0.7, changefreq: 'monthly' },
        { url: '/se/guider/nybörjarguide', priority: 0.7, changefreq: 'monthly' },
        { url: '/om', priority: 0.5, changefreq: 'yearly' },
        { url: '/integritetspolicy', priority: 0.5, changefreq: 'yearly' },
        { url: '/cookies', priority: 0.5, changefreq: 'yearly' },
        { url: '/kontakt', priority: 0.5, changefreq: 'yearly' },
        { url: '/spelregler', priority: 0.5, changefreq: 'yearly' },
      ];
    } else {
      // Default to finansguiden.se
      baseUrl = 'https://finansguiden.se';
      
      // Swedish finance site URLs
      urls = [
        { url: '/', priority: 1.0, changefreq: 'daily' },
        { url: '/privatlan', priority: 0.9, changefreq: 'weekly' },
        { url: '/foretagslan', priority: 0.9, changefreq: 'weekly' },
        { url: '/kreditkort', priority: 0.9, changefreq: 'weekly' },
        { url: '/lan-utan-uc', priority: 0.9, changefreq: 'weekly' },
        { url: '/andra-tjanster', priority: 0.9, changefreq: 'weekly' },
        { url: '/privatlan/basta', priority: 0.8, changefreq: 'weekly' },
        { url: '/privatlan/jamfor', priority: 0.8, changefreq: 'weekly' },
        { url: '/privatlan/rantejamforelse', priority: 0.8, changefreq: 'weekly' },
        { url: '/privatlan/lan-med-betalningsanmarkning', priority: 0.8, changefreq: 'weekly' },
        { url: '/guider/basta-lanet', priority: 0.7, changefreq: 'monthly' },
        { url: '/guider/lagst-ranta-blancolan', priority: 0.7, changefreq: 'monthly' },
        { url: '/guider/bankjamforelse', priority: 0.7, changefreq: 'monthly' },
        { url: '/guider/bostadsmarknadsanalys', priority: 0.7, changefreq: 'monthly' },
        { url: '/guider/svenska-inkomster', priority: 0.7, changefreq: 'monthly' },
        { url: '/guider/karriar', priority: 0.7, changefreq: 'monthly' },
        { url: '/guider/loneoptimering', priority: 0.7, changefreq: 'monthly' },
        { url: '/guider/manadssparande', priority: 0.7, changefreq: 'monthly' },
        { url: '/guider/sparkonto', priority: 0.7, changefreq: 'monthly' },
        { url: '/guider/bilekonomi', priority: 0.7, changefreq: 'monthly' },
        { url: '/guider/ekonomiska-lifehacks', priority: 0.7, changefreq: 'monthly' },
        { url: '/ordlista', priority: 0.6, changefreq: 'monthly' },
        { url: '/laneformedlare', priority: 0.6, changefreq: 'monthly' },
        { url: '/om', priority: 0.5, changefreq: 'yearly' },
        { url: '/integritetspolicy', priority: 0.5, changefreq: 'yearly' },
        { url: '/cookies', priority: 0.5, changefreq: 'yearly' },
        { url: '/sajtkarta', priority: 0.5, changefreq: 'yearly' },
      ];
    }

    // Generate XML
    const urlEntries = urls.map(entry => `  <url>
    <loc>${baseUrl}${entry.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority.toFixed(1)}</priority>
  </url>`).join('\n');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${urlEntries}
</urlset>`;

    return new Response(xml, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('[SITEMAP] Error:', error);
    return new Response('Internal Server Error', {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'text/plain' },
    });
  }
});
