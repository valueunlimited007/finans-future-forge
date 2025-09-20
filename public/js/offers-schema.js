// Finansguiden.se - Offer schema & seed data (Adtraction/CJ ready)
(function(){
  // Global config
  window.FG_CONFIG = window.FG_CONFIG || { channelId: '2005939977' };

  // Helper to freeze objects lightly (avoid accidental mutation)
  function seal(o){ try { return Object.freeze(o); } catch(e){ return o; } }

  // Real Adtraction partners - approved for Finansguiden.se
  var privatlan = [
    {
      id: 'enkelfinans', network: 'adtraction', name: 'Enkelfinans',
      url: 'https://go.adt228.com/t/t?a=1587476854&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 600 000 kr', aprFrom: 'från 4,95%', decision: 'Snabbt beslut',
      requirements: 'Fast anställning', rating: 4.6,
      highlights: ['Konkurrenskraftiga räntor', 'Snabb ansökan'],
      logo: '/adtraction-logos/enkelfinans-logo.png'
    },
    {
      id: 'ekonomen', network: 'adtraction', name: 'Ekonomen',
      url: 'https://go.adt267.com/t/t?a=1715408972&as=2005939977&t=2&tk=1',
      amountRange: '10 000 – 800 000 kr', aprFrom: 'från 4,95%', decision: 'Snabbt beslut',
      requirements: 'Stabil inkomst', rating: 4.5,
      highlights: ['Hög lånebelopp', 'Flexibla villkor'],
      logo: '/adtraction-logos/ekonomen-logo.png'
    },
    {
      id: 'loans-se', network: 'adtraction', name: 'Loans.se',
      url: 'https://go.adt267.com/t/t?a=1810104150&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 600 000 kr', aprFrom: 'Jämför räntor', decision: 'Omedelbart',
      requirements: 'Jämförelsesida', rating: 4.7,
      highlights: ['Jämför många långivare', 'Hitta bästa räntan'],
      logo: '/adtraction-logos/loans-logo.png'
    },
    {
      id: 'finlo-se', network: 'adtraction', name: 'Finlo.se',
      url: 'https://go.adt231.net/t/t?a=1897775047&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 800 000 kr', aprFrom: 'Jämför räntor', decision: 'Omedelbart',
      requirements: 'Jämförelsesida', rating: 4.6,
      highlights: ['Omfattande jämförelse', 'Enkel process'],
      logo: '/adtraction-logos/finlo-logo.png'
    }
  ].map(seal);

  var utanUc = [
    {
      id: 'fairlo', network: 'adtraction', name: 'Fairlo SE',
      url: 'https://go.adt242.com/t/t?a=1433384226&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 500 000 kr', aprFrom: 'från 4,95%', decision: 'Snabbt beslut',
      requirements: 'Accepterar anmärkningar', rating: 4.4,
      highlights: ['Utan UC-kontroll', 'Även med anmärkningar'],
      logo: '/adtraction-logos/fairlo-logo.png'
    },
    {
      id: 'enklare', network: 'adtraction', name: 'Enklare',
      url: 'https://do.enklare.se/t/t?a=1244647179&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 500 000 kr', aprFrom: 'från 4,95%', decision: 'Snabbt beslut',
      requirements: 'Accepterar anmärkningar', rating: 4.5,
      highlights: ['Flexibla villkor', 'Snabb utbetalning'],
      logo: '/adtraction-logos/enklare-logo.png'
    },
    {
      id: 'compari', network: 'adtraction', name: 'Compari',
      url: 'https://go.adt267.com/t/t?a=1882428528&as=2005939977&t=2&tk=1',
      amountRange: 'Jämför lån', aprFrom: 'Bästa räntan', decision: 'Omedelbart',
      requirements: 'Accepterar anmärkningar', rating: 4.6,
      highlights: ['Jämför utan UC', 'Personlig matchning'],
      logo: '/adtraction-logos/compari-logo.png'
    }
  ].map(seal);

  var foretagslan = [
    // Keep some existing direct partners for now - no Adtraction business loan partners yet
    {
      id: 'lendo', network: 'direct', name: 'Lendo Företagslån',
      url: 'https://www.lendo.se/foretagslan?utm_source=finansguiden&utm_medium=affiliate',
      amountRange: '10 000 – 2 000 000 kr', aprFrom: 'från 4,5%', decision: '24h',
      requirements: 'AB/EF, 6–12 mån drift', rating: 4.6,
      highlights: ['Svar inom 24h', 'Många banker & långivare']
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

  var existing = window.FG_OFFERS || {};
  var OFFERS = Object.assign({}, existing, {
    foretagslan: existing.foretagslan || foretagslan,
    kreditkort: existing.kreditkort || kreditkort,
    privatlan: existing.privatlan || privatlan,
    'utan-uc': existing['utan-uc'] || utanUc
  });

  function pushUnique(cat, item){
    OFFERS[cat] = OFFERS[cat] || [];
    var exists = OFFERS[cat].some(function(x){ return (x.id && item.id && x.id===item.id) || x.name===item.name; });
    if (!exists) OFFERS[cat].push(seal(item));
  }

  function normalizeAdtraction(p){
    var text = ((p.description||'')+' '+(p.name||'')).toLowerCase();
    var category = 'privatlan';
    if (/(kreditkort|mastercard|visa|amex|kort)/.test(text)) category = 'kreditkort';
    if (/(företag|foretag|business)/.test(text)) category = 'foretagslan';
    var isUtanUc = /(utan uc|ej uc|no uc)/.test(text);
    var base = { id: p.id || (p.name||'').toLowerCase().replace(/[^a-z0-9]+/g,'-').slice(0,40), network:'adtraction', name: p.name || 'Okänt program', url: p.url || p.trackingLink || '#', rating: 4.6 };
    if (category==='kreditkort'){
      base.annualFee = p.annualFee || '-';
      base.cashback = p.cashback || (/(cashback)/.test(text)?'cashback':(p.bonus||'-'));
      base.creditLimit = p.creditLimit || '-';
      base.interestFreeDays = p.interestFreeDays || '-';
    } else {
      base.amountRange = p.amountRange || '-';
      base.aprFrom = p.aprFrom || '-';
      base.decision = p.decision || '-';
      base.requirements = p.requirements || '-';
    }
    return {category: category, item: base, isUtanUc: isUtanUc};
  }

  function addFromAdtraction(list){
    (list||[]).forEach(function(p){
      var n = normalizeAdtraction(p);
      pushUnique(n.category, n.item);
      if (n.isUtanUc) pushUnique('utan-uc', n.item);
    });
    window.FG_OFFERS = OFFERS;
    try { document.dispatchEvent(new CustomEvent('fg:offers-updated')); } catch(e) {}
    return OFFERS;
  }

  window.FG_OFFERS = OFFERS;
  window.FG_OFFERS.addFromAdtraction = addFromAdtraction;
})();
