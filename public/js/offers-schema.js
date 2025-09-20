// Finansguiden.se - Offer schema & seed data (Adtraction/CJ ready)
(function(){
  // Global config
  window.FG_CONFIG = window.FG_CONFIG || { channelId: '2005939977' };

  // Helper to freeze objects lightly (avoid accidental mutation)
  function seal(o){ try { return Object.freeze(o); } catch(e){ return o; } }

  // Cache buster for offers update
  var cacheVersion = Date.now();

  // Real Adtraction partners - approved for Finansguiden.se
  var privatlan = [
    // VERIFIED PARTNERS (with tracking links)
    {
      id: 'enkelfinans', network: 'adtraction', name: 'Enkelfinans',
      url: 'https://go.adt228.com/t/t?a=1587476854&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 600 000 kr', aprFrom: 'från 4,95%', decision: 'Snabbt beslut',
      requirements: 'Fast anställning', rating: 4.6,
      highlights: ['Konkurrenskraftiga räntor', 'Snabb ansökan'],
      logo: '/adtraction-logos/enkelfinans-logo.png',
      isPartner: true
    },
    {
      id: 'ekonomen', network: 'adtraction', name: 'Ekonomen',
      url: 'https://go.adt267.com/t/t?a=1715408972&as=2005939977&t=2&tk=1',
      amountRange: '10 000 – 800 000 kr', aprFrom: 'från 4,95%', decision: 'Snabbt beslut',
      requirements: 'Stabil inkomst', rating: 4.5,
      highlights: ['Hög lånebelopp', 'Flexibla villkor'],
      logo: '/adtraction-logos/ekonomen-logo.png',
      isPartner: true
    },
    {
      id: 'loans-se', network: 'adtraction', name: 'Loans.se',
      url: 'https://go.adt267.com/t/t?a=1810104150&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 600 000 kr', aprFrom: 'Jämför räntor', decision: 'Omedelbart',
      requirements: 'Jämförelsesida', rating: 4.7,
      highlights: ['Jämför många långivare', 'Hitta bästa räntan'],
      logo: '/adtraction-logos/loans-logo.png',
      isPartner: true
    },
    {
      id: 'finlo-se', network: 'adtraction', name: 'Finlo.se',
      url: 'https://go.adt231.net/t/t?a=1897775047&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 800 000 kr', aprFrom: 'Jämför räntor', decision: 'Omedelbart',
      requirements: 'Jämförelsesida', rating: 4.6,
      highlights: ['Omfattande jämförelse', 'Enkel process'],
      logo: '/adtraction-logos/finlo-logo.png',
      isPartner: true
    },
    // ADDITIONAL LENDERS (pending partnership approval)
    {
      id: 'anyfin', name: 'Anyfin',
      url: 'https://www.anyfin.com/sv/',
      amountRange: '5 000 – 350 000 kr', aprFrom: 'från 4,95%', decision: 'Snabbt beslut',
      requirements: 'Kreditupplysning', rating: 4.4,
      highlights: ['Sänk dina kreditkostnader', 'Samla dina lån'],
      isPartner: false
    },
    {
      id: 'danske-bank', name: 'Danske Bank',
      url: 'https://www.danskebank.se/privat/lana/privatlan',
      amountRange: '25 000 – 600 000 kr', aprFrom: 'från 5,45%', decision: 'Inom några dagar',
      requirements: 'Kund i banken', rating: 4.3,
      highlights: ['Etablerad storbank', 'Konkurrenskraftiga räntor'],
      isPartner: false
    },
    {
      id: 'lendo', name: 'Lendo',
      url: 'https://www.lendo.se/',
      amountRange: '10 000 – 500 000 kr', aprFrom: 'Jämför räntor', decision: 'Omedelbart',
      requirements: 'Jämförelsesida', rating: 4.5,
      highlights: ['Snabbt och enkelt', 'Trygg lånejämförelse'],
      isPartner: false
    },
    {
      id: 'svea-ekonomi', name: 'Svea Ekonomi',
      url: 'https://www.svea.com/se/sv/privatpersoner/privatlan/',
      amountRange: '15 000 – 350 000 kr', aprFrom: 'från 5,95%', decision: 'Snabbt beslut',
      requirements: 'Regelbunden inkomst', rating: 4.2,
      highlights: ['Flexibel återbetalning', 'Snabb handläggning'],
      isPartner: false
    },
    {
      id: 'northmill-bank', name: 'Northmill Bank',
      url: 'https://www.northmill.se/privatlan',
      amountRange: '25 000 – 500 000 kr', aprFrom: 'från 4,95%', decision: 'Inom 24h',
      requirements: 'Fast anställning', rating: 4.4,
      highlights: ['Digital bank', 'Snabb process'],
      isPartner: false
    },
    {
      id: 'ferratum', name: 'Ferratum',
      url: 'https://www.ferratum.se/privatlan',
      amountRange: '5 000 – 200 000 kr', aprFrom: 'från 6,95%', decision: 'Inom minuter',
      requirements: 'Månadsinkomst 8000kr', rating: 4.1,
      highlights: ['Mycket snabbt beslut', 'Flexibla villkor'],
      logo: '/adtraction-logos/ferratum-logo.png',
      isPartner: false
    }
  ].map(seal);

  var utanUc = [
    // VERIFIED PARTNERS (with tracking links)
    {
      id: 'fairlo', network: 'adtraction', name: 'Fairlo SE',
      url: 'https://go.adt242.com/t/t?a=1433384226&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 500 000 kr', aprFrom: 'från 4,95%', decision: 'Snabbt beslut',
      requirements: 'Accepterar anmärkningar', rating: 4.4,
      highlights: ['Utan UC-kontroll', 'Även med anmärkningar'],
      logo: '/adtraction-logos/fairlo-logo.png',
      isPartner: true
    },
    {
      id: 'enklare', network: 'adtraction', name: 'Enklare',
      url: 'https://do.enklare.se/t/t?a=1244647179&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 500 000 kr', aprFrom: 'från 4,95%', decision: 'Snabbt beslut',
      requirements: 'Accepterar anmärkningar', rating: 4.5,
      highlights: ['Flexibla villkor', 'Snabb utbetalning'],
      logo: '/adtraction-logos/enklare-logo.png',
      isPartner: true
    },
    {
      id: 'compari', network: 'adtraction', name: 'Compari',
      url: 'https://go.adt267.com/t/t?a=1882428528&as=2005939977&t=2&tk=1',
      amountRange: 'Jämför lån', aprFrom: 'Bästa räntan', decision: 'Omedelbart',
      requirements: 'Accepterar anmärkningar', rating: 4.6,
      highlights: ['Jämför utan UC', 'Personlig matchning'],
      logo: '/adtraction-logos/compari-logo.png',
      isPartner: true
    },
    {
      id: 'creditstar', network: 'adtraction', name: 'CreditStar',
      url: 'https://go.creditstar.se/t/t?a=1896267775&as=2005939977&t=2&tk=1',
      amountRange: '1 000 – 90 000 kr', aprFrom: 'från 20%', decision: 'Inom minuter',
      requirements: 'Över 21 år, fast anställning', rating: 4.1,
      highlights: ['Direkt utbetalning samma dag', 'Lån utan UC upp till 90 000 kr'],
      logo: '/adtraction-logos/creditstar-logo.png',
      isPartner: true
    },
    // ADDITIONAL LENDERS (pending partnership approval)
    {
    {
      id: 'smspengar', name: 'SMSpengar',
      url: 'https://www.smspengar.se/',
      amountRange: '500 – 30 000 kr', aprFrom: 'från 19,95%', decision: 'Inom minuter',
      requirements: 'Månadsinkomst 5000kr', rating: 3.9,
      highlights: ['Snabbaste lånet', 'Även med betalningsanmärkningar'],
      isPartner: false
    },
    {
      id: 'daypay', name: 'Daypay',
      url: 'https://www.daypay.se/',
      amountRange: '1 000 – 50 000 kr', aprFrom: 'från 12,95%', decision: 'Samma dag',
      requirements: 'Regelbunden inkomst', rating: 4.0,
      highlights: ['Lön på dagen', 'Flexibel återbetalning'],
      isPartner: false
    }
  ].map(seal);

  var foretagslan = [
    // Keep some existing direct partners for now - no Adtraction business loan partners yet
    {
      id: 'lendo', network: 'direct', name: 'Lendo Företagslån',
      url: 'https://www.lendo.se/foretagslan?utm_source=finansguiden&utm_medium=affiliate',
      amountRange: '10 000 – 2 000 000 kr', aprFrom: 'från 4,5%', decision: '24h',
      requirements: 'AB/EF, 6–12 mån drift', rating: 4.6,
      highlights: ['Svar inom 24h', 'Många banker & långivare'],
      isPartner: false
    },
    // ADDITIONAL LENDERS (pending partnership approval)
    {
      id: 'qred', name: 'Qred',
      url: 'https://www.qred.com/se/',
      amountRange: '10 000 – 3 000 000 kr', aprFrom: 'från 0,99%', decision: 'Inom 24h',
      requirements: 'Omsättning 100 000kr/år', rating: 4.6,
      highlights: ['Snabbt beslut', 'Flexibla villkor'],
      isPartner: false
    },
    {
      id: 'froda', name: 'Froda',
      url: 'https://www.froda.se/',
      amountRange: '50 000 – 5 000 000 kr', aprFrom: 'från 4,95%', decision: 'Inom några dagar',
      requirements: 'Etablerat företag', rating: 4.4,
      highlights: ['Finansiering som går att växa', 'Inga dolda avgifter'],
      isPartner: false
    },
    {
      id: 'nordnet-foretag', name: 'Nordnet Företag',
      url: 'https://www.nordnet.se/se/tjanster/lan/foretagslan',
      amountRange: '100 000 – 10 000 000 kr', aprFrom: 'från 3,95%', decision: 'Inom en vecka',
      requirements: 'Befintlig kund', rating: 4.3,
      highlights: ['Stora lånebelopp', 'Till ditt nästa mål'],
      isPartner: false
    },
    {
      id: 'savelend', name: 'SaveLend',
      url: 'https://www.savelend.se/',
      amountRange: '25 000 – 1 500 000 kr', aprFrom: 'från 5,95%', decision: 'Inom några dagar',
      requirements: 'Omsättning 200 000kr/år', rating: 4.2,
      highlights: ['Investera i lån', 'P2P-plattform'],
      isPartner: false
    },
    {
      id: 'bluestep-foretag', name: 'Bluestep Bank Företag',
      url: 'https://www.bluestep.se/foretag/',
      amountRange: '50 000 – 2 000 000 kr', aprFrom: 'från 4,50%', decision: 'Inom en vecka',
      requirements: 'Etablerat företag', rating: 4.1,
      highlights: ['En bostadsbank för fler', 'Flexibel finansiering'],
      isPartner: false
    }
  ].map(seal);

  var kreditkort = [
    {
      id: 'coop', network: 'direct', name: 'Coop Mastercard',
      url: 'https://www.coop.se/bank-och-betala/coop-mastercard/',
      annualFee: '0 kr', cashback: '1–3%', creditLimit: 'upp till 100 000 kr', interestFreeDays: 'upp till 60 dagar', rating: 4.8,
      highlights: ['Bäst totalt', 'Bra cashback'],
      isPartner: false
    },
    {
      id: 'remember-flex', network: 'direct', name: 're:member flex',
      url: 'https://www.remember.se/kreditkort/flex',
      annualFee: '0 kr', cashback: 'upp till 25% (portal)', creditLimit: 'upp till 120 000 kr', interestFreeDays: '56 dagar', rating: 4.5,
      highlights: ['Stor partnerportal', 'Ingen årsavgift'],
      isPartner: false
    },
    {
      id: 'bank-norwegian', network: 'direct', name: 'Bank Norwegian Kreditkort',
      url: 'https://www.banknorwegian.se/kreditkort/',
      annualFee: '0 kr', cashback: 'CashPoints på resor', creditLimit: 'upp till 150 000 kr', interestFreeDays: '45 dagar', rating: 4.6,
      highlights: ['Bra för resor', 'Ingen årsavgift'],
      isPartner: false
    },
    {
      id: 'komplett', network: 'direct', name: 'Komplett Bank Mastercard',
      url: 'https://www.komplettbank.se/kreditkort',
      annualFee: '0 kr', cashback: '1% alla köp (mer hos Komplett)', creditLimit: 'upp till 100 000 kr', interestFreeDays: '50 dagar', rating: 4.5,
      highlights: ['Stabil cashback', 'Utan årsavgift'],
      isPartner: false
    },
    // ADDITIONAL LENDERS (pending partnership approval)
    {
      id: 'swedbank-kreditkort', name: 'Swedbank Kreditkort',
      url: 'https://www.swedbank.se/privat/kort-och-betalningar/kreditkort/',
      annualFee: '150-495 kr', cashback: 'Poäng på köp', creditLimit: 'upp till 300 000 kr', interestFreeDays: '56 dagar', rating: 4.5,
      highlights: ['Betala och kreditkort Mastercard', 'Bra förmåner'],
      isPartner: false
    },
    {
      id: 'northmill-kreditkort', name: 'Northmill Bank Kreditkort',
      url: 'https://www.northmill.se/kreditkort',
      annualFee: '0 kr', cashback: 'Räntefritt', creditLimit: 'upp till 250 000 kr', interestFreeDays: '56 dagar', rating: 4.4,
      highlights: ['Flexibel kredit', 'Digital process'],
      isPartner: false
    },
    {
      id: 'moregolf-mastercard', name: 'MoreGolf Kreditkort',
      url: 'https://www.moregolf.se/mastercard/',
      annualFee: '295 kr', cashback: 'Golfförmåner', creditLimit: 'upp till 150 000 kr', interestFreeDays: '56 dagar', rating: 4.1,
      highlights: ['Bara för golfarna', 'Specialförmåner för golf'],
      isPartner: false
    }
  ].map(seal);

  // Force fresh data to clear any cache
  var OFFERS = {
    foretagslan: foretagslan,
    kreditkort: kreditkort,
    privatlan: privatlan,
    'utan-uc': utanUc
  };

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
