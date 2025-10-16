// Internal page links for SEO and user navigation
export const INTERNAL_LINKS: Record<string, string> = {
  // Lånetyper
  'privatlån': '/privatlan',
  'privatlånet': '/privatlan',
  'blancolån': '/privatlan',
  'blancolånet': '/privatlan',
  'lån utan uc': '/lan-utan-uc',
  'lån utan kreditupplysning': '/lan-utan-uc',
  'företagslån': '/foretagslan',
  'företagslånet': '/foretagslan',
  'bolån': '/privatlan',
  'bolånet': '/privatlan',
  
  // Produkter
  'kreditkort': '/kreditkort',
  'kreditkortet': '/kreditkort',
  'betalkort': '/kreditkort',
  
  // Services
  'låneförmedlare': '/laneformedlare',
  'låneförmedling': '/laneformedlare',
  'låneförmedlaren': '/laneformedlare',
};

// Convert to array sorted by length (longest first) for better matching
export const INTERNAL_LINKS_SORTED = Object.entries(INTERNAL_LINKS)
  .map(([term, path]) => ({ term, path }))
  .sort((a, b) => b.term.length - a.term.length);
