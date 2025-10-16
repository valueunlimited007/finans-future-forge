// Finansguiden.se - Offer schema & seed data (Adtraction/CJ ready) - Updated Sep 23 2024
(function(){
  // Global config
  window.FG_CONFIG = window.FG_CONFIG || { channelId: '2005939977' };

  // Helper to freeze objects lightly (avoid accidental mutation)
  function seal(o){ try { return Object.freeze(o); } catch(e){ return o; } }

  // Cache buster for offers update - Updated with 38 Adtraction partners + 28 utan-UC lenders + 2 övriga
  var cacheVersion = Date.now();

  // Real Adtraction partners - approved for Finansguiden.se
  var privatlan = [
    // VERIFIED PARTNERS (with tracking links)
    {
      id: 'leasy', network: 'adtraction', name: 'L\'EASY',
      url: 'https://go.adt284.net/t/t?a=294654593&as=2005939977&t=2&tk=1',
      amountRange: '10 000 – 100 000 kr', aprFrom: '14,88% - 21,6%', decision: 'Snabbt beslut',
      requirements: 'Eff. ränta 25,05% (exempel)', rating: 4.8,
      highlights: ['Digital långivare', 'Snabb process'],
      logo: '/adtraction-logos/leasy-logo.png',
      isPartner: true
    },
    {
      id: 'thorn', network: 'adtraction', name: 'Thorn',
      url: 'https://go.adt228.com/t/t?a=35567344&as=2005939977&t=2&tk=1',
      amountRange: '10 000 – 150 000 kr', aprFrom: '14,88% - 21,6%', decision: 'Snabbt beslut',
      requirements: 'Kreditupplysning', rating: 4.7,
      highlights: ['Högre lånebelopp', 'Etablerad långivare'],
      logo: '/adtraction-logos/thorn-logo.png',
      isPartner: true
    },
    {
      id: 'klicklan', network: 'adtraction', name: 'Klicklån',
      url: 'https://go.adt284.net/t/t?a=1061611421&as=2005939977&t=2&tk=1',
      amountRange: '10 000 – 40 000 kr', aprFrom: '14,88% - 21,6%', decision: 'Snabbt beslut',
      requirements: 'Kreditupplysning', rating: 4.6,
      highlights: ['Enkel ansökan', 'Flexibla villkor'],
      logo: '/adtraction-logos/klicklan-logo.png',
      isPartner: true
    },
    {
      id: 'banknorwegian', network: 'adtraction', name: 'Bank Norwegian',
      url: 'https://go.adt256.com/t/t?a=1882086706&as=2005939977&t=2&tk=1',
      amountRange: '10 000 – 600 000 kr', aprFrom: '6,99% - 18,99%', decision: 'Snabbt beslut',
      requirements: 'Eff. ränta 7,29% - 27,8%', rating: 4.6,
      highlights: ['Stora lånebelopp', 'Konkurrenskraftiga räntor'],
      logo: '/adtraction-logos/banknorwegian-logo.png',
      isPartner: true
    },
    {
      id: 'brixo', network: 'adtraction', name: 'Brixo',
      url: 'https://go.adt284.net/t/t?a=1091548601&as=2005939977&t=2&tk=1',
      amountRange: '10 000 – 150 000 kr', aprFrom: '19,95%', decision: 'Inom 24 timmar',
      requirements: 'Eff. ränta 22,8%, Min 19 år', rating: 4.5,
      highlights: ['Utan UC - Bisnode-kontroll', 'Utbetalning via Swish eller bank', 'Betalningsanmärkningar accepteras', 'Flexibel återbetalning 36-90 mån'],
      logo: '/adtraction-logos/brixo-logo.png',
      isPartner: true
    },
    {
      id: 'enkelfinans', network: 'adtraction', name: 'Enkelfinans',
      url: 'https://go.adt228.com/t/t?a=1587476854&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 800 000 kr', aprFrom: '4,95% - 23%', decision: 'Snabbt beslut',
      requirements: 'Betalningsanmärkningar OK', rating: 4.6,
      highlights: ['Del av Enklare Ekonomi', '1-20 år löptid'],
      logo: '/adtraction-logos/enkelfinans-logo.png',
      isPartner: true
    },
    {
      id: 'ekonomen', network: 'adtraction', name: 'Ekonomen',
      url: 'https://go.adt267.com/t/t?a=1715408972&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 800 000 kr', aprFrom: '4,95% - 23%', decision: 'Snabbt beslut',
      requirements: 'Betalningsanmärkningar OK', rating: 4.5,
      highlights: ['Del av Enklare Ekonomi', '1-20 år löptid'],
      logo: '/adtraction-logos/ekonomen-logo.png',
      isPartner: true
    },
    {
      id: 'loans-se', network: 'adtraction', name: 'Loans.se',
      url: 'https://go.adt267.com/t/t?a=1810104150&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 800 000 kr', aprFrom: '4,95% - 23%', decision: 'Snabbt beslut',
      requirements: 'Betalningsanmärkningar OK', rating: 4.7,
      highlights: ['Del av Enklare Ekonomi', 'Jämför många långivare'],
      logo: '/adtraction-logos/loans-logo.png',
      isPartner: true
    },
    {
      id: 'finlo-se', network: 'adtraction', name: 'Finlo.se',
      url: 'https://go.adt231.net/t/t?a=1897775047&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 800 000 kr', aprFrom: '4,95% - 23%', decision: 'Snabbt beslut',
      requirements: 'Betalningsanmärkningar OK', rating: 4.6,
      highlights: ['Del av Enklare Ekonomi', '1-20 år löptid'],
      logo: '/adtraction-logos/finlo-logo.png',
      isPartner: true
    },
    {
      id: 'trygga', network: 'adtraction', name: 'Trygga',
      url: 'https://go.adt246.net/t/t?a=1318042077&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 800 000 kr', aprFrom: '4,95% - 22,95%', decision: 'Snabbt beslut',
      requirements: 'Noga utvalda långivare', rating: 4.6,
      highlights: ['Endast 1 kreditupplysning', 'Personlig service'],
      logo: '/adtraction-logos/trygga-logo.png',
      isPartner: true
    },
    {
      id: 'erafinans', network: 'adtraction', name: 'Erafinans',
      url: 'https://go.adt242.com/t/t?a=1870931734&as=2005939977&t=2&tk=1',
      amountRange: '25 000 – 600 000 kr', aprFrom: '3,06% - 29,99%', decision: 'Snabbt beslut',
      requirements: 'Min 18 år, inkomst 8400kr/mån', rating: 4.5,
      highlights: ['Upp till 40 långivare', 'Endast en kreditupplysning'],
      logo: '/adtraction-logos/erafinans-logo.png',
      isPartner: true
    },
    {
      id: 'natfinans', network: 'adtraction', name: 'NätFinans',
      url: 'https://go.adt228.com/t/t?a=1984506666&as=2005939977&t=2&tk=1',
      amountRange: '25 000 – 800 000 kr', aprFrom: 'från 3,95%', decision: 'Snabbt beslut',
      requirements: 'Jämför över 50 långivare', rating: 4.7,
      highlights: ['Bred jämförelse', 'Flera erbjudanden'],
      logo: '/adtraction-logos/natfinans-logo.png',
      isPartner: true
    },
    {
      id: 'lendo', network: 'adtraction', name: 'Lendo SE',
      url: 'https://go.adt228.com/t/t?a=1060519344&as=2005939977&t=2&tk=1',
      amountRange: '10 000 – 500 000 kr', aprFrom: 'Jämför räntor', decision: 'Omedelbart',
      requirements: 'Jämförelsesida', rating: 4.5,
      highlights: ['Snabbt och enkelt', 'Trygg lånejämförelse'],
      logo: '/adtraction-logos/lendo-logo.png',
      isPartner: true
    },
    {
      id: 'ferratum', network: 'adtraction', name: 'Ferratum SE',
      url: 'https://go.adt212.net/t/t?a=679911485&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 200 000 kr', aprFrom: 'från 6,95%', decision: 'Inom minuter',
      requirements: 'Månadsinkomst 8000kr', rating: 4.1,
      highlights: ['Mycket snabbt beslut', 'Flexibla villkor'],
      logo: '/adtraction-logos/ferratum-logo.png',
      isPartner: true
    },
    {
      id: 'hypoteket', network: 'adtraction', name: 'Hypoteket Bolån SE',
      url: 'https://go.adt228.com/t/t?a=1251723904&as=2005939977&t=2&tk=1',
      amountRange: '25 000 – 600 000 kr', aprFrom: 'från 3,95%', decision: 'Snabbt beslut',
      requirements: 'Kreditupplysning', rating: 4.5,
      highlights: ['Bolån och privatlån', 'Snabb process'],
      logo: '/adtraction-logos/hypoteket-logo.png',
      isPartner: true
    },
    {
      id: 'viaconto', network: 'adtraction', name: 'ViaConto SE',
      url: 'https://go.adt284.net/t/t?a=485150298&as=2005939977&t=2&tk=1',
      amountRange: '10 000 – 500 000 kr', aprFrom: 'från 4,95%', decision: 'Snabbt beslut',
      requirements: 'Kreditupplysning', rating: 4.6,
      highlights: ['Digital långivare', 'Flexibla villkor'],
      logo: '/adtraction-logos/viaconto-logo.png',
      isPartner: true
    },
    {
      id: 'loanstep', network: 'adtraction', name: 'Loanstep SE',
      url: 'https://go.adt284.net/t/t?a=1961010341&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 600 000 kr', aprFrom: 'från 3,95%', decision: 'Snabbt beslut',
      requirements: 'Kreditupplysning', rating: 4.5,
      highlights: ['Jämför många långivare', 'En ansökan'],
      logo: '/adtraction-logos/loanstep-logo.png',
      isPartner: true
    },
    {
      id: 'kompar', network: 'adtraction', name: 'Kompar SE',
      url: 'https://go.adt228.com/t/t?a=1269515747&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 600 000 kr', aprFrom: 'från 2,95%', decision: 'Omedelbart',
      requirements: 'En ansökan - många erbjudanden', rating: 4.6,
      highlights: ['Jämför långivare', 'Endast en UC'],
      logo: '/adtraction-logos/kompar-logo.png',
      isPartner: true
    },
    {
      id: 'moank', network: 'adtraction', name: 'Moank',
      url: 'https://go.adt246.net/t/t?a=1160891487&as=2005939977&t=2&tk=1',
      amountRange: '3 000 – 30 000 kr', aprFrom: 'från 21,95%', decision: 'Snabbt beslut',
      requirements: 'Min 21 år', rating: 4.3,
      highlights: ['Kontokredit', 'Flexibel återbetalning'],
      logo: '/adtraction-logos/moank-logo.png',
      isPartner: true
    },
    {
      id: 'banky', network: 'adtraction', name: 'Banky SE',
      url: 'https://go.adt267.com/t/t?a=1745445620&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 500 000 kr', aprFrom: 'från 4,95%', decision: 'Snabbt beslut',
      requirements: 'Kreditupplysning', rating: 4.5,
      highlights: ['Digital långivare', 'Snabb process'],
      logo: '/adtraction-logos/banky-logo.png',
      isPartner: true
    },
    {
      id: 'ekomni', network: 'adtraction', name: 'Ekomni',
      url: 'https://go.adt253.net/t/t?a=1860767369&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 600 000 kr', aprFrom: 'från 4,95%', decision: 'Snabbt beslut',
      requirements: 'Kreditupplysning', rating: 4.5,
      highlights: ['Digital långivare', 'Flexibla villkor'],
      logo: '/adtraction-logos/ekonomi-logo.png',
      isPartner: true
    },
    {
      id: 'northmill-samlings', network: 'adtraction', name: 'Northmill Bank Samlingslån SE',
      url: 'https://go.adt246.net/t/t?a=1963383809&as=2005939977&t=2&tk=1',
      amountRange: '25 000 – 500 000 kr', aprFrom: 'från 4,95%', decision: 'Snabbt beslut',
      requirements: 'Fast anställning', rating: 4.6,
      highlights: ['Samla dina lån', 'Digital process'],
      logo: '/adtraction-logos/northmill-logo.png',
      isPartner: true
    },
    {
      id: 'klaralan', network: 'adtraction', name: 'Klara lån SE',
      url: 'https://go.adt267.com/t/t?a=1153212131&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 600 000 kr', aprFrom: 'från 3,95%', decision: 'Snabbt beslut',
      requirements: 'Kreditupplysning', rating: 4.5,
      highlights: ['Jämför långivare', 'En ansökan'],
      logo: '/adtraction-logos/klaralan-logo.png',
      isPartner: true
    },
    {
      id: 'merax', network: 'adtraction', name: 'Merax SE',
      url: 'https://go.adt291.com/t/t?a=1184128142&as=2005939977&t=2&tk=1',
      amountRange: '10 000 – 500 000 kr', aprFrom: 'från 4,95%', decision: 'Snabbt beslut',
      requirements: 'Kreditupplysning', rating: 4.5,
      highlights: ['Digital långivare', 'Flexibla villkor'],
      logo: '/adtraction-logos/merax-logo.png',
      isPartner: true
    },
    {
      id: 'krea', network: 'adtraction', name: 'Krea SE',
      url: 'https://go.adt253.net/t/t?a=1301012751&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 600 000 kr', aprFrom: 'från 4,95%', decision: 'Snabbt beslut',
      requirements: 'Kreditupplysning', rating: 4.5,
      highlights: ['Digital långivare', 'Snabb process'],
      logo: '/adtraction-logos/krea-logo.png',
      isPartner: true
    },
    {
      id: 'gfmoney', network: 'adtraction', name: 'GF Money SE',
      url: 'https://go.adt246.net/t/t?a=1400909618&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 500 000 kr', aprFrom: 'från 4,95%', decision: 'Snabbt beslut',
      requirements: 'Kreditupplysning', rating: 4.5,
      highlights: ['Digital långivare', 'Flexibla villkor'],
      logo: '/adtraction-logos/gfmoney-logo.png',
      isPartner: true
    },
    {
      id: 'matchbanker', network: 'adtraction', name: 'Matchbanker SE',
      url: 'https://go.adt256.com/t/t?a=1440280668&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 600 000 kr', aprFrom: 'från 3,95%', decision: 'Omedelbart',
      requirements: 'En ansökan - många erbjudanden', rating: 4.6,
      highlights: ['Jämför långivare', 'Endast en UC'],
      logo: '/adtraction-logos/matchbanker-logo.png',
      isPartner: true
    },
    {
      id: 'multitude', network: 'adtraction', name: 'Multitude Bank SE',
      url: 'https://go.adt212.net/t/t?a=1745571705&as=2005939977&t=2&tk=1',
      amountRange: '1 000 – 50 000 kr', aprFrom: 'från 19,95%', decision: 'Snabbt beslut',
      requirements: 'Min 21 år', rating: 4.3,
      highlights: ['Snabb process', 'Digital långivare'],
      logo: '/adtraction-logos/multitude-logo.png',
      isPartner: true
    },
    {
      id: 'myloan24', network: 'adtraction', name: 'Myloan24 SE',
      url: 'https://go.adt291.com/t/t?a=1795653842&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 600 000 kr', aprFrom: 'från 3,95%', decision: 'Snabbt beslut',
      requirements: 'Kreditupplysning', rating: 4.5,
      highlights: ['Jämför långivare', 'En ansökan'],
      logo: '/adtraction-logos/myloan24-logo.png',
      isPartner: true
    },
    {
      id: 'valda', network: 'adtraction', name: 'Valda SE',
      url: 'https://go.adt291.com/t/t?a=1889814892&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 500 000 kr', aprFrom: 'från 4,95%', decision: 'Snabbt beslut',
      requirements: 'Kreditupplysning', rating: 4.5,
      highlights: ['Digital långivare', 'Flexibla villkor'],
      logo: '/adtraction-logos/valda-logo.png',
      isPartner: true
    },
    {
      id: 'pantlan', network: 'adtraction', name: 'Pantlån SE',
      url: 'https://ion.pantlan.se/t/t?a=1869711981&as=2005939977&t=2&tk=1',
      amountRange: '1 000 – 50 000 kr', aprFrom: 'från 19,95%', decision: 'Samma dag',
      requirements: 'Pant mot lån', rating: 4.2,
      highlights: ['Lån mot värdesaker', 'Snabb utbetalning'],
      logo: '/adtraction-logos/pantlan-logo.png',
      isPartner: true
    },
    {
      id: 'uscore', network: 'adtraction', name: 'uScore SE',
      url: 'https://go.adt267.com/t/t?a=1646087132&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 600 000 kr', aprFrom: 'från 3,95%', decision: 'Snabbt beslut',
      requirements: 'Kreditupplysning', rating: 4.5,
      highlights: ['Jämför långivare', 'En ansökan'],
      logo: '/adtraction-logos/uscore-logo.png',
      isPartner: true
    },
    {
      id: 'creddo', network: 'adtraction', name: 'Creddo SE',
      url: 'https://go.adt253.net/t/t?a=1422794609&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 500 000 kr', aprFrom: 'från 4,95%', decision: 'Snabbt beslut',
      requirements: 'Kreditupplysning', rating: 4.5,
      highlights: ['Digital långivare', 'Flexibla villkor'],
      logo: '/adtraction-logos/creddo-logo.png',
      isPartner: true
    },
    {
      id: 'zensum', network: 'adtraction', name: 'Zensum SE',
      url: 'https://go.adt212.net/t/t?a=1548368523&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 600 000 kr', aprFrom: 'från 3,95%', decision: 'Snabbt beslut',
      requirements: 'Kreditupplysning', rating: 4.5,
      highlights: ['Jämför långivare', 'En ansökan'],
      logo: '/adtraction-logos/zensum-logo.png',
      isPartner: true
    },
    {
      id: 'lanekoll', network: 'adtraction', name: 'Lånekoll SE',
      url: 'https://go.adt246.net/t/t?a=1077807847&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 600 000 kr', aprFrom: 'från 3,95%', decision: 'Omedelbart',
      requirements: 'En ansökan - många erbjudanden', rating: 4.6,
      highlights: ['Jämför långivare', 'Endast en UC'],
      logo: '/adtraction-logos/langekoll-logo.png',
      isPartner: true
    },
    {
      id: 'northmill-kontokredit', network: 'adtraction', name: 'Northmill Bank Kontokredit SE',
      url: 'https://go.adt267.com/t/t?a=1105916291&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 100 000 kr', aprFrom: 'från 14,95%', decision: 'Snabbt beslut',
      requirements: 'Fast anställning', rating: 4.5,
      highlights: ['Flexibel kredit', 'Digital process'],
      logo: '/adtraction-logos/northmill-logo.png',
      isPartner: true
    },
    {
      id: 'saldobank-kontokredit', network: 'adtraction', name: 'Saldo Bank Kontokredit',
      url: 'https://go.adt256.com/t/t?a=1877254678&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 50 000 kr', aprFrom: 'från 19,95%', decision: 'Snabbt beslut',
      requirements: 'Min 21 år', rating: 4.4,
      highlights: ['Kontokredit', 'Flexibel återbetalning'],
      logo: '/adtraction-logos/saldobank-logo.png',
      isPartner: true
    },
    {
      id: 'plus1', network: 'adtraction', name: 'Plus 1: Lilla Samlingslånet SE',
      url: 'https://go.adt291.com/t/t?a=1863146032&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 50 000 kr', aprFrom: 'från 19,95%', decision: 'Snabbt beslut',
      requirements: 'Kreditupplysning', rating: 4.3,
      highlights: ['Samla småskulder', 'Enkel process'],
      logo: '/adtraction-logos/plus1-logo.png',
      isPartner: true
    }
  ].map(seal);

  var utanUc = [
    // VERIFIED PARTNERS (with tracking links)
    {
      id: 'fairlo', network: 'adtraction', name: 'Fairlo SE',
      url: 'https://go.adt242.com/t/t?a=1433384226&as=2005939977&t=2&tk=1',
      amountRange: 'upp till 70 000 kr', aprFrom: '20% - 22%', decision: 'Realtid',
      requirements: 'Min. ålder 20 år', rating: 4.4,
      highlights: ['Ändra villkor med ett svajp', 'Utbetalning realtid 24/7'],
      logo: '/adtraction-logos/fairlo-logo.png',
      isPartner: true
    },
    {
      id: 'binly', network: 'adtraction', name: 'Binly',
      url: 'https://go.adt231.net/t/t?a=1797620295&as=2005939977&t=2&tk=1',
      amountRange: '2 000 – 70 000 kr', aprFrom: '68,52% - 270,13%', decision: 'Snabbt beslut',
      requirements: 'Min 18 år', rating: 3.8,
      highlights: ['4-19 månaders löptid', 'Snabb process'],
      logo: '/adtraction-logos/binly-logo.png',
      isPartner: true
    },
    {
      id: 'credifi', network: 'adtraction', name: 'Credifi',
      url: 'https://go.adt228.com/t/t?a=1673075264&as=2005939977&t=2&tk=1',
      amountRange: '2 000 – 70 000 kr', aprFrom: '68,52% - 270,13%', decision: 'Snabbt beslut',
      requirements: 'Min 18 år', rating: 3.8,
      highlights: ['Svenskregistrerat', 'Licensierat företag'],
      logo: '/adtraction-logos/credifi-logo.png',
      isPartner: true
    },
    {
      id: 'tomly', network: 'adtraction', name: 'Tomly',
      url: 'https://go.adt256.com/t/t?a=1934379288&as=2005939977&t=2&tk=1',
      amountRange: '2 000 – 70 000 kr', aprFrom: '68,52% - 270,13%', decision: 'Snabbt beslut',
      requirements: 'Min 18 år', rating: 3.8,
      highlights: ['4-19 månaders löptid', 'Flexibel återbetalning'],
      logo: '/adtraction-logos/tomly-logo.png',
      isPartner: true
    },
    {
      id: 'lumify', network: 'adtraction', name: 'Lumify',
      url: 'https://go.adt246.net/t/t?a=1278835897&as=2005939977&t=2&tk=1',
      amountRange: '2 000 – 70 000 kr', aprFrom: '68,52% - 270,13%', decision: 'Snabbt beslut',
      requirements: 'Min 18 år', rating: 3.8,
      highlights: ['Luma Finans AB', 'Finansinspektionen licensierat'],
      logo: '/adtraction-logos/lumify-logo.png',
      isPartner: true
    },
    {
      id: 'trygga-utanuc', network: 'adtraction', name: 'Trygga',
      url: 'https://go.adt246.net/t/t?a=1318042077&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 800 000 kr', aprFrom: '4,95% - 22,95%', decision: 'Snabbt beslut',
      requirements: 'Noga utvalda långivare', rating: 4.6,
      highlights: ['Endast 1 kreditupplysning', 'Personlig service'],
      logo: '/adtraction-logos/trygga-logo.png',
      isPartner: true
    },
    {
      id: 'erafinans-utanuc', network: 'adtraction', name: 'Erafinans',
      url: 'https://go.adt242.com/t/t?a=1870931734&as=2005939977&t=2&tk=1',
      amountRange: '25 000 – 600 000 kr', aprFrom: '3,06% - 29,99%', decision: 'Snabbt beslut',
      requirements: 'Min 18 år, inkomst 8400kr/mån', rating: 4.5,
      highlights: ['Upp till 40 långivare', 'Endast en kreditupplysning'],
      logo: '/adtraction-logos/erafinans-logo.png',
      isPartner: true
    },
    {
      id: 'natfinans-utanuc', network: 'adtraction', name: 'NätFinans',
      url: 'https://go.adt228.com/t/t?a=1984506666&as=2005939977&t=2&tk=1',
      amountRange: '25 000 – 800 000 kr', aprFrom: 'från 3,95%', decision: 'Snabbt beslut',
      requirements: 'Jämför över 50 långivare', rating: 4.7,
      highlights: ['Bred jämförelse', 'Flera erbjudanden'],
      logo: '/adtraction-logos/natfinans-logo.png',
      isPartner: true
    },
    {
      id: 'enklare', network: 'adtraction', name: 'Enklare',
      url: 'https://do.enklare.se/t/t?a=1244647179&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 800 000 kr', aprFrom: '4,95% - 23%', decision: 'Snabbt beslut',
      requirements: 'Jämför 27 banker & långivare', rating: 4.5,
      highlights: ['Grundat 2014, 150+ anställda', 'Personlig rådgivare'],
      logo: '/adtraction-logos/enklare-logo.png',
      isPartner: true
    },
    {
      id: 'compari', network: 'adtraction', name: 'Compari',
      url: 'https://go.adt267.com/t/t?a=1882428528&as=2005939977&t=2&tk=1',
      amountRange: 'upp till 600 000 kr', aprFrom: '2,95% - 29,27%', decision: 'Omedelbart',
      requirements: 'Endast en UC-upplysning', rating: 4.6,
      highlights: ['Upp till 40 långivare', 'En ansökan - många erbjudanden'],
      logo: '/adtraction-logos/compari-logo.png',
      isPartner: true
    },
    {
      id: 'brixo-utanuc', network: 'adtraction', name: 'Brixo',
      url: 'https://go.adt284.net/t/t?a=1091548601&as=2005939977&t=2&tk=1',
      amountRange: '10 000 – 150 000 kr', aprFrom: '19,95%', decision: 'Inom 24 timmar',
      requirements: 'Eff. ränta 22,8%, Använder Bisnode (ej UC)', rating: 4.5,
      highlights: ['Utan UC - Bisnode-kontroll', 'Betalningsanmärkningar accepteras', 'Utbetalning via Swish eller bank', 'Flexibel återbetalning'],
      logo: '/adtraction-logos/brixo-logo.png',
      isPartner: true
    },
    {
      id: 'kredio', network: 'adtraction', name: 'Kredio',
      url: 'https://go.adt246.net/t/t?a=1989974137&as=2005939977&t=2&tk=1',
      amountRange: '1 000 – 75 000 kr', aprFrom: 'från 21,95%', decision: 'Snabbt beslut',
      requirements: 'Kostnadsfri ansökan', rating: 4.3,
      highlights: ['Kostnadsfri ansökan', 'Ingen UC-upplysning', 'Effektiv ränta 24,3%'],
      logo: '/adtraction-logos/kredio-logo.png',
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
    {
      id: 'flexkontot', network: 'adtraction', name: 'Flexkontot',
      url: 'https://go.adt291.com/t/t?a=1177156373&as=2005939977&t=2&tk=1',
      amountRange: '3 000 – 40 000 kr', aprFrom: '22,98%', decision: 'Inom 24 timmar',
      requirements: 'Min 21 år, 200 000kr/år, använder Bisnode (ej UC)', rating: 4.3,
      highlights: ['Kontokredit utan kort', 'Utbetalning samma dag', 'Välj egen återbetalning'],
      logo: '/adtraction-logos/flexkontot-logo.png',
      isPartner: true
    },
    // ADDITIONAL LENDERS (pending partnership approval)
    {
      id: 'smspengar', network: 'adtraction', name: 'SMSPengar SE',
      url: 'https://go.adt246.net/t/t?a=56814276&as=2005939977&t=2&tk=1',
      amountRange: '500 – 30 000 kr', aprFrom: 'från 19,95%', decision: 'Inom minuter',
      requirements: 'Månadsinkomst 5000kr', rating: 3.9,
      highlights: ['Snabbaste lånet', 'Även med betalningsanmärkningar'],
      logo: '/adtraction-logos/smspengar-logo.png',
      isPartner: true
    },
    {
      id: 'daypay', network: 'adtraction', name: 'Daypay',
      url: 'https://go.adt267.com/t/t?a=1065957440&as=2005939977&t=2&tk=1',
      amountRange: '1 000 – 50 000 kr', aprFrom: 'från 12,95%', decision: 'Samma dag',
      requirements: 'Regelbunden inkomst', rating: 4.0,
      highlights: ['Lön på dagen', 'Flexibel återbetalning'],
      logo: '/adtraction-logos/daypay-logo.png',
      isPartner: true
    },
    // NEW ADDITIONS - Lenders that offer loans without UC check
    {
      id: 'moank-utanuc', network: 'adtraction', name: 'Moank',
      url: 'https://go.adt246.net/t/t?a=1160891487&as=2005939977&t=2&tk=1',
      amountRange: '3 000 – 30 000 kr', aprFrom: 'från 21,95%', decision: 'Snabbt beslut',
      requirements: 'Min 21 år', rating: 4.3,
      highlights: ['Kontokredit utan UC', 'Flexibel återbetalning'],
      logo: '/adtraction-logos/moank-logo.png',
      isPartner: true
    },
    {
      id: 'banky-utanuc', network: 'adtraction', name: 'Banky SE',
      url: 'https://go.adt267.com/t/t?a=1745445620&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 500 000 kr', aprFrom: 'från 4,95%', decision: 'Snabbt beslut',
      requirements: 'Alternativ kreditbedömning', rating: 4.5,
      highlights: ['Digital långivare utan UC', 'Snabb process'],
      logo: '/adtraction-logos/banky-logo.png',
      isPartner: true
    },
    {
      id: 'klaralan-utanuc', network: 'adtraction', name: 'Klara lån SE',
      url: 'https://go.adt267.com/t/t?a=1153212131&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 600 000 kr', aprFrom: 'från 3,95%', decision: 'Snabbt beslut',
      requirements: 'Alternativ kreditbedömning', rating: 4.5,
      highlights: ['Jämför långivare utan UC', 'En ansökan'],
      logo: '/adtraction-logos/klaralan-logo.png',
      isPartner: true
    },
    {
      id: 'gfmoney-utanuc', network: 'adtraction', name: 'GF Money SE',
      url: 'https://go.adt246.net/t/t?a=1400909618&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 500 000 kr', aprFrom: 'från 4,95%', decision: 'Snabbt beslut',
      requirements: 'Alternativ kreditbedömning', rating: 4.5,
      highlights: ['Digital långivare utan UC', 'Flexibla villkor'],
      logo: '/adtraction-logos/gfmoney-logo.png',
      isPartner: true
    },
    {
      id: 'loanstep-utanuc', network: 'adtraction', name: 'Loanstep SE',
      url: 'https://go.adt284.net/t/t?a=1961010341&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 600 000 kr', aprFrom: 'från 3,95%', decision: 'Snabbt beslut',
      requirements: 'Alternativ kreditbedömning', rating: 4.5,
      highlights: ['Jämför många långivare utan UC', 'En ansökan'],
      logo: '/adtraction-logos/loanstep-logo.png',
      isPartner: true
    },
    {
      id: 'viaconto-utanuc', network: 'adtraction', name: 'ViaConto SE',
      url: 'https://go.adt284.net/t/t?a=485150298&as=2005939977&t=2&tk=1',
      amountRange: '10 000 – 500 000 kr', aprFrom: 'från 4,95%', decision: 'Snabbt beslut',
      requirements: 'Alternativ kreditbedömning', rating: 4.6,
      highlights: ['Digital långivare utan UC', 'Flexibla villkor'],
      logo: '/adtraction-logos/viaconto-logo.png',
      isPartner: true
    },
    {
      id: 'merax-utanuc', network: 'adtraction', name: 'Merax SE',
      url: 'https://go.adt291.com/t/t?a=1184128142&as=2005939977&t=2&tk=1',
      amountRange: '10 000 – 500 000 kr', aprFrom: 'från 4,95%', decision: 'Snabbt beslut',
      requirements: 'Alternativ kreditbedömning', rating: 4.5,
      highlights: ['Digital långivare utan UC', 'Flexibla villkor'],
      logo: '/adtraction-logos/merax-logo.png',
      isPartner: true
    },
    {
      id: 'myloan24-utanuc', network: 'adtraction', name: 'Myloan24 SE',
      url: 'https://go.adt291.com/t/t?a=1795653842&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 600 000 kr', aprFrom: 'från 3,95%', decision: 'Snabbt beslut',
      requirements: 'Alternativ kreditbedömning', rating: 4.5,
      highlights: ['Jämför långivare utan UC', 'En ansökan'],
      logo: '/adtraction-logos/myloan24-logo.png',
      isPartner: true
    },
    {
      id: 'northmill-kontokredit-utanuc', network: 'adtraction', name: 'Northmill Bank Kontokredit SE',
      url: 'https://go.adt267.com/t/t?a=1105916291&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 100 000 kr', aprFrom: 'från 14,95%', decision: 'Snabbt beslut',
      requirements: 'Fast anställning', rating: 4.5,
      highlights: ['Flexibel kredit utan UC', 'Digital process'],
      logo: '/adtraction-logos/northmill-logo.png',
      isPartner: true
    },
    {
      id: 'saldobank-kontokredit-utanuc', network: 'adtraction', name: 'Saldo Bank Kontokredit',
      url: 'https://go.adt256.com/t/t?a=1877254678&as=2005939977&t=2&tk=1',
      amountRange: '5 000 – 50 000 kr', aprFrom: 'från 19,95%', decision: 'Snabbt beslut',
      requirements: 'Min 21 år', rating: 4.4,
      highlights: ['Kontokredit utan UC', 'Flexibel återbetalning'],
      logo: '/adtraction-logos/saldobank-logo.png',
      isPartner: true
    },
    {
      id: 'pantlan-utanuc', network: 'adtraction', name: 'Pantlån SE',
      url: 'https://ion.pantlan.se/t/t?a=1869711981&as=2005939977&t=2&tk=1',
      amountRange: '1 000 – 50 000 kr', aprFrom: 'från 19,95%', decision: 'Samma dag',
      requirements: 'Pant mot lån', rating: 4.2,
      highlights: ['Lån mot värdesaker utan UC', 'Snabb utbetalning'],
      logo: '/adtraction-logos/pantlan-logo.png',
      isPartner: true
    }
  ].map(seal);

  var foretagslan = [
    // VERIFIED PARTNERS (with tracking links)
    {
      id: 'northmill-foretagslan', network: 'adtraction', name: 'Northmill Bank Företagslån',
      url: 'https://go.adt253.net/t/t?a=1924643831&as=2005939977&t=2&tk=1',
      amountRange: '25 000 – 1 000 000 kr', aprFrom: '11,5% - 29%', decision: 'Inom minuter',
      requirements: 'Borgensman behövs, ingen UC på företag', rating: 4.4,
      highlights: ['Flexibel kredit', 'Använd vid behov', 'Betala bara för det du använder'],
      logo: '/adtraction-logos/northmill-logo.png',
      isPartner: true
    },
    // Keep some existing direct partners for now
    {
      id: 'lendo-foretagslan', network: 'adtraction', name: 'Lendo Företagslån',
      url: 'https://go.adt284.net/t/t?a=1471453431&as=2005939977&t=2&tk=1',
      amountRange: '10 000 – 2 000 000 kr', aprFrom: 'från 4,5%', decision: '24h',
      requirements: 'AB/EF, 6–12 mån drift', rating: 4.6,
      highlights: ['Svar inom 24h', 'Många banker & långivare'],
      logo: '/adtraction-logos/lendo2-logo.png',
      isPartner: true
    },
    {
      id: 'qred', network: 'adtraction', name: 'Qred SE',
      url: 'https://go.adt228.com/t/t?a=1149630444&as=2005939977&t=2&tk=1',
      amountRange: '10 000 – 3 000 000 kr', aprFrom: 'från 0,99%', decision: 'Inom 24h',
      requirements: 'Omsättning 100 000kr/år', rating: 4.6,
      highlights: ['Snabbt beslut', 'Flexibla villkor'],
      logo: '/adtraction-logos/qred-logo.png',
      isPartner: true
    },
    {
      id: 'froda', network: 'adtraction', name: 'Froda SE',
      url: 'https://go.adt253.net/t/t?a=1266700220&as=2005939977&t=2&tk=1',
      amountRange: '50 000 – 5 000 000 kr', aprFrom: 'från 4,95%', decision: 'Inom några dagar',
      requirements: 'Etablerat företag', rating: 4.4,
      highlights: ['Finansiering som går att växa', 'Inga dolda avgifter'],
      logo: '/adtraction-logos/froda-logo.png',
      isPartner: true
    },
    {
      id: 'capitalbox', network: 'adtraction', name: 'CapitalBox SE',
      url: 'https://go.adt231.net/t/t?a=1090867135&as=2005939977&t=2&tk=1',
      amountRange: '50 000 – 2 000 000 kr', aprFrom: 'från 4,95%', decision: 'Inom några dagar',
      requirements: 'Etablerat företag', rating: 4.4,
      highlights: ['Flexibel finansiering', 'Snabb process'],
      logo: '/adtraction-logos/capitalbox-logo.png',
      isPartner: true
    },
    {
      id: 'opr-foretagslan', network: 'adtraction', name: 'OPR Företagslån',
      url: 'https://go.adt228.com/t/t?a=1115539064&as=2005939977&t=2&tk=1',
      amountRange: '10 000 – 1 000 000 kr', aprFrom: 'från 5,95%', decision: 'Snabbt beslut',
      requirements: 'Etablerat företag', rating: 4.3,
      highlights: ['Digital långivare', 'Flexibla villkor'],
      logo: '/adtraction-logos/opr-logo.png',
      isPartner: true
    },
    {
      id: 'opr-flex', network: 'adtraction', name: 'OPR Företagslån Flex',
      url: 'https://go.adt256.com/t/t?a=1583446458&as=2005939977&t=2&tk=1',
      amountRange: '10 000 – 500 000 kr', aprFrom: 'från 6,95%', decision: 'Snabbt beslut',
      requirements: 'Etablerat företag', rating: 4.3,
      highlights: ['Flexibel kredit', 'Använd vid behov'],
      logo: '/adtraction-logos/oprflex-logo.png',
      isPartner: true
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
      id: 'northmill-debetkort', network: 'adtraction', name: 'Northmill Bank Debetkort SE',
      url: 'https://go.adt212.net/t/t?a=1870916623&as=2005939977&t=2&tk=1',
      annualFee: '0 kr', cashback: 'Reseförsäkring ingår', creditLimit: 'Personkonto med 2% ränta', interestFreeDays: 'Kostnadsfritt betalkort', rating: 4.7,
      highlights: ['0% valutapåslag', 'Välkomstgåva 101 kr'],
      logo: '/adtraction-logos/northmill-logo.png',
      isPartner: true
    },
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
      id: 'banknorwegian-kreditkort', network: 'adtraction', name: 'Bank Norwegian Kreditkort',
      url: 'https://go.adt256.com/t/t?a=1882086706&as=2005939977&t=2&tk=1',
      annualFee: '0 kr', cashback: 'Cashback på köp', creditLimit: 'upp till 150 000 kr', interestFreeDays: '45 dagar', rating: 4.6,
      highlights: ['Nominell ränta 22%, eff. ränta 24,36%', 'Representativt exempel enligt lag'],
      logo: '/adtraction-logos/banknorwegian-logo.png',
      isPartner: true
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
    },
    {
      id: 'northmill-betalkort', network: 'adtraction', name: 'Northmill Betalkort',
      url: 'https://go.adt212.net/t/t?a=1870916623&as=2005939977&t=2&tk=1',
      annualFee: '0 kr', cashback: 'Reseförsäkring ingår', creditLimit: 'Personkonto med 2% ränta', interestFreeDays: 'Kostnadsfritt betalkort', rating: 4.7,
      highlights: ['0% valutapåslag', 'Välkomstgåva 101 kr'],
      logo: '/adtraction-logos/northmill-logo.png',
      isPartner: true
    },
    {
      id: 'northmill-betala-senare', network: 'adtraction', name: 'Northmill Betala Senare',
      url: 'https://go.adt212.net/t/t?a=1870916623&as=2005939977&t=2&tk=1',
      annualFee: '0 kr', cashback: 'Nej', creditLimit: '15 000 kr', interestFreeDays: 'Upp till 42 dagar', rating: 4.6,
      highlights: ['21,9% ränta', 'Flexibla betalsätt'],
      logo: '/adtraction-logos/northmill2-logo.png',
      isPartner: true
    }
  ].map(seal);

  // Övriga finansiella tjänster (valutaväxling, sparande, investering)
  var ovriga = [
    {
      id: 'changegroup', network: 'adtraction', name: 'ChangeGroup SE',
      url: 'https://go.adt253.net/t/t?a=1848047440&as=2005939977&t=2&tk=1',
      amountRange: '60+ valutor', aprFrom: '0% provision online', decision: 'Beställ online',
      requirements: 'Hämta på kontor eller Postombud', rating: 4.6,
      highlights: ['Bästa växelkursen i Sverige', '30+ kontor i Sverige', '0% provision online'],
      logo: '/adtraction-logos/changegroup-logo.png',
      isPartner: true
    },
    {
      id: 'savelend', network: 'adtraction', name: 'SaveLend',
      url: 'https://go.adt228.com/t/t?a=1509487574&as=2005939977&t=2&tk=1',
      amountRange: '10 000 – 2 000 000 kr', 
      aprFrom: '5,5% fast ränta', 
      decision: 'Skapa konto på minuter',
      requirements: 'FastRäntekonto 12 mån', 
      rating: 4.5,
      highlights: ['FastRäntekonto 12 mån', 'Kapitalskydd ingår', 'Högre än sparkonton'],
      logo: '/adtraction-logos/savelend-logo.png',
      isPartner: true
    }
  ].map(seal);

  // Force fresh data to clear any cache
  var OFFERS = {
    foretagslan: foretagslan,
    kreditkort: kreditkort,
    privatlan: privatlan,
    'utan-uc': utanUc,
    ovriga: ovriga
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
