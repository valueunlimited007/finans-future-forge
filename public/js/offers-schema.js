// Finansguiden.se - Offer schema & seed data (Adtraction/CJ ready)
(function(){
  // Global config
  window.FG_CONFIG = window.FG_CONFIG || { channelId: '1996955997' };

  // Helper to freeze objects lightly (avoid accidental mutation)
  function seal(o){ try { return Object.freeze(o); } catch(e){ return o; } }

  // Seed data (manual for now). Later: fetch via Supabase Edge from Adtraction/CJ.
  var foretagslan = [
    {
      id: 'krea', network: 'direct', name: 'Krea Företagslån',
      url: 'https://www.krea.se/foretagslan/?utm_source=finansguiden&utm_medium=affiliate',
      amountRange: '10 000 – 5 000 000 kr', aprFrom: 'från 4,95%', decision: '24–48h',
      requirements: 'AB/EF, 6–12 mån drift', rating: 4.7,
      highlights: ['Jämför 20+ långivare', 'En ansökan – flera svar']
    },
    {
      id: 'lendo', network: 'direct', name: 'Lendo Företagslån',
      url: 'https://www.lendo.se/foretagslan?utm_source=finansguiden&utm_medium=affiliate',
      amountRange: '10 000 – 2 000 000 kr', aprFrom: 'från 4,5%', decision: '24h',
      requirements: 'AB/EF, 6–12 mån drift', rating: 4.6,
      highlights: ['Svar inom 24h', 'Många banker & långivare']
    },
    {
      id: 'qred', network: 'direct', name: 'Qred Företagslån',
      url: 'https://www.qred.se/foretagslan',
      amountRange: '10 000 – 2 000 000 kr', aprFrom: 'individuell', decision: 'Snabbt',
      requirements: '6 mån drift', rating: 4.5,
      highlights: ['Snabb ansökan', 'Flexibel återbetalning']
    },
    {
      id: 'capitalbox', network: 'direct', name: 'CapitalBox',
      url: 'https://www.capitalbox.se/',
      amountRange: '100 000 – 3 500 000 kr', aprFrom: 'individuell', decision: '1–2 dagar',
      requirements: 'Omsättning & borgen', rating: 4.4,
      highlights: ['Utan säkerhet', 'Snabb utbetalning']
    },
    {
      id: 'froda', network: 'direct', name: 'Froda',
      url: 'https://www.froda.se/',
      amountRange: '50 000 – 3 000 000 kr', aprFrom: 'från 4,2%', decision: '48h',
      requirements: '12 mån, 500k omsättning', rating: 4.5,
      highlights: ['Särskilt bra för retail', 'Digital process']
    }
  ].map(seal);

  var kreditkort = [
    {
      id: 'coop', network: 'direct', name: 'Coop Mastercard',
      url: 'https://www.coop.se/bank-och-betala/coop-mastercard/',
      annualFee: '0 kr', cashback: '1–3%', creditLimit: 'upp till 100 000 kr', interestFreeDays: 'upp till 60 dagar', rating: 4.8,
      highlights: ['Bäst totalt', 'Bra cashback']
    },
    {
      id: 'remember-flex', network: 'direct', name: 're:member flex',
      url: 'https://www.remember.se/kreditkort/flex',
      annualFee: '0 kr', cashback: 'upp till 25% (portal)', creditLimit: 'upp till 120 000 kr', interestFreeDays: '56 dagar', rating: 4.5,
      highlights: ['Stor partnerportal', 'Ingen årsavgift']
    },
    {
      id: 'bank-norwegian', network: 'direct', name: 'Bank Norwegian Kreditkort',
      url: 'https://www.banknorwegian.se/kreditkort/',
      annualFee: '0 kr', cashback: 'CashPoints på resor', creditLimit: 'upp till 150 000 kr', interestFreeDays: '45 dagar', rating: 4.6,
      highlights: ['Bra för resor', 'Ingen årsavgift']
    },
    {
      id: 'komplett', network: 'direct', name: 'Komplett Bank Mastercard',
      url: 'https://www.komplettbank.se/kreditkort',
      annualFee: '0 kr', cashback: '1% alla köp (mer hos Komplett)', creditLimit: 'upp till 100 000 kr', interestFreeDays: '50 dagar', rating: 4.5,
      highlights: ['Stabil cashback', 'Utan årsavgift']
    }
  ].map(seal);

  window.FG_OFFERS = Object.assign({
    foretagslan: foretagslan,
    kreditkort: kreditkort
  }, window.FG_OFFERS || {});
})();
