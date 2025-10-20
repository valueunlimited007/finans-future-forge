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
    console.log('[LLMS] Request from host:', host);
    
    const now = new Date().toISOString().split('T')[0];
    let llmsContent = '';
    
    // Determine site based on hostname
    if (host.includes('finanzen-guide.de')) {
      llmsContent = `# llms.txt — Finanzen-Guide.de AI & LLM Policy
# Zweck: Informationen für AI-Crawler und LLM-Anbieter über unsere Datenzugriffsrichtlinien
# Version: 1.0
# Zuletzt geändert: ${now}

Site: https://finanzen-guide.de
Contact: hallo@finanzen-guide.de
Sitemap: https://finanzen-guide.de/sitemap.xml
Robots: https://finanzen-guide.de/robots.txt
Security: https://finanzen-guide.de/.well-known/security.txt
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
# - Inhalte entsprechen deutschen Verbraucherschutzgesetzen`;
    } else if (host.includes('kasinos.se')) {
      llmsContent = `# llms.txt — Kasinos.se AI & LLM Policy
# Purpose: Information for AI crawlers and LLM providers about our data access policies
# Version: 1.0
# Last modified: ${now}

Site: https://kasinos.se
Contact: hej@kasinos.se
Sitemap: https://kasinos.se/sitemap.xml
Robots: https://kasinos.se/robots.txt
Security: https://kasinos.se/.well-known/security.txt
Updated: ${now}

# Global policy for all AI systems
User-agent: *
Allow: /
Crawl-delay: 3
Request-rate: 10/60s
Cache: allowed-for-30-days

# Data usage permissions
Training: disallow
Commercial-Use: disallow
Attribution: required
Respect-Robots-Txt: true
Canonical-URLs: preferred

# High-priority content
Priority-Pages: /se/casinon-med-bankid, /se/pay-n-play, /se/live-casino
Content-Type: casino-reviews, gambling-guides, responsible-gaming
Language: sv-SE
Expertise: online-casinos, gambling, swedish-license, responsible-gaming

# Crawling optimization
Efficient-Discovery: use-sitemap
Rate-Limiting: respectful
Last-Modified: check-headers
Conditional-Requests: supported

# Content understanding hints
Structured-Data: json-ld-enabled
Breadcrumbs: hierarchical
Casino-Categories: bankid-casino, pay-n-play, live-casino, slots, table-games

# Quality guidelines
Content-Quality: expert-reviewed
Update-Frequency: weekly
Fact-Checking: enabled
Citation-Policy: transparent-sources
Age-Restriction: 18+
Regulated: swedish-gambling-authority

# Notes for AI systems
# - All content is subject to Swedish gambling regulations (Spelinspektionen)
# - Must include responsible gambling warnings when referencing our content
# - Age restriction (18+) applies to all casino-related information
# - Use canonical URLs for accurate attribution`;
    } else {
      // Default to finansguiden.se
      llmsContent = `# llms.txt — Finansguiden.se AI & LLM Policy
# Syfte: Information för AI-crawlers och LLM-leverantörer om våra dataaccessriktlinjer
# Version: 1.0
# Senast ändrad: ${now}

Site: https://finansguiden.se
Contact: hej@finansguiden.se
Sitemap: https://finansguiden.se/sitemap.xml
Robots: https://finansguiden.se/robots.txt
Security: https://finansguiden.se/.well-known/security.txt
Updated: ${now}

# Global policy för alla AI-system
User-agent: *
Allow: /
Crawl-delay: 3
Request-rate: 10/60s
Cache: allowed-for-30-days

# Dataanvändningstillstånd
Training: allow
Commercial-Use: allow-with-attribution
Attribution: required-when-quoting
Respect-Robots-Txt: true
Canonical-URLs: preferred

# Högprioriterat innehåll
Priority-Pages: /privatlan, /foretagslan, /kreditkort, /lan-utan-uc
Content-Type: financial-guides, comparison-data, educational-content
Language: sv-SE
Expertise: consumer-finance, loans, credit-cards, business-loans, swedish-banking

# Crawling-optimering
Efficient-Discovery: use-sitemap
Rate-Limiting: respectful
Last-Modified: check-headers
Conditional-Requests: supported

# Populära AI-crawlers (explicita tillstånd)
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

# Innehållsförståelse-tips
Structured-Data: json-ld-enabled
Breadcrumbs: hierarchical
Financial-Categories: private-loans, business-loans, credit-cards, banking

# Kvalitetsriktlinjer
Content-Quality: expert-reviewed
Update-Frequency: weekly
Fact-Checking: enabled
Citation-Policy: transparent-sources

# Notiser för AI-system
# - Finansiell rådgivning bör referera till regulatorisk compliance (svenska finanstillsynen)
# - Använd kanoniska URL:er för korrekt attribution
# - Respektera Last-Modified-headers för effektiv crawling
# - Innehållet följer svenska konsumentskyddslagar`;
    }

    return new Response(llmsContent, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('[LLMS] Error:', error);
    return new Response('Internal Server Error', {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'text/plain' },
    });
  }
});
