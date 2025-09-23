// Finansguiden.se - Fallback seeds to ensure lists render even if feeds are slow/unavailable
(function(){
  function run(){
    try { console.log('[FG_SEEDS] Running fallback seeds'); } catch(e) {}
    
    var FG = window.FG_OFFERS = window.FG_OFFERS || {};
    function ensure(cat, items){
      FG[cat] = FG[cat] || [];
      var seen = {};
      FG[cat].forEach(function(it){ seen[(it.id||it.name||'').toLowerCase()] = true; });
      (items||[]).forEach(function(it){
        var key = (it.id||it.name||'').toLowerCase();
        if (!seen[key]) FG[cat].push(it);
      });
    }

    ensure('privatlan', [
      { id:'lendo-privat', network:'direct', name:'Lendo Privatlån', url:'https://www.lendo.se/privatlan', amountRange:'10 000 – 600 000 kr', aprFrom:'från 4,95%', decision:'Snabbt', requirements:'18+, inkomst', rating:4.7 },
      { id:'sambla-privat', network:'direct', name:'Sambla Privatlån', url:'https://www.sambla.se/privatlan/', amountRange:'5 000 – 600 000 kr', aprFrom:'från 4,95%', decision:'1–3 dagar', requirements:'18+, inkomst', rating:4.6 }
    ]);

    ensure('utan-uc', [
      { id:'natfinans', network:'direct', name:'NätFinans', url:'https://www.natfinans.se/', amountRange:'15 000 – 400 000 kr', aprFrom:'från 4,95%', decision:'Samma dag', requirements:'Fast anställning', rating:4.7 },
      { id:'enklare', network:'direct', name:'Enklare', url:'https://www.enklare.se/', amountRange:'5 000 – 500 000 kr', aprFrom:'från 4,95%', decision:'15 min', requirements:'18+, fast inkomst', rating:4.8 },
      { id:'compari', network:'direct', name:'Compari', url:'https://www.compari.se/', amountRange:'upp till 600 000 kr', aprFrom:'2,95% - 29,27%', decision:'Omedelbart', requirements:'Endast en UC-upplysning', rating:4.6 },
      { id:'brixo-utanuc', network:'direct', name:'Brixo', url:'https://www.brixo.se/', amountRange:'5 000 – 50 000 kr', aprFrom:'21,95%', decision:'Inom 24 timmar', requirements:'Använder Bisnode (ej UC)', rating:4.5 },
      { id:'kredio', network:'direct', name:'Kredio', url:'https://go.adt246.net/t/t?a=1989974137&as=2005939977&t=2&tk=1', amountRange:'1 000 – 75 000 kr', aprFrom:'från 21,95%', decision:'Snabbt beslut', requirements:'Kostnadsfri ansökan', rating:4.3 },
      { id:'creditstar', network:'direct', name:'CreditStar', url:'https://www.creditstar.se/', amountRange:'1 000 – 90 000 kr', aprFrom:'från 20%', decision:'Inom minuter', requirements:'Över 21 år, fast anställning', rating:4.1 }
    ]);

    ensure('foretagslan', [
      { id:'qred', network:'direct', name:'Qred Företagslån', url:'https://www.qred.se/foretagslan', amountRange:'10 000 – 2 000 000 kr', aprFrom:'individuell', decision:'Samma dag', requirements:'F-skatt, omsättning', rating:4.6 },
      { id:'kompar', network:'direct', name:'Kompar', url:'https://www.kompar.se/', amountRange:'50 000 – 5 000 000 kr', aprFrom:'individuell', decision:'1–2 dagar', requirements:'AB/EF, omsättning', rating:4.4 }
    ]);

    ensure('kreditkort', [
      { id:'remember-flex', network:'direct', name:'Remember Flex', url:'https://www.remember.se/kreditkort/flex/', logo:'/remember-logo.png', annualFee:'0 kr', cashback:'Bonuspoäng', creditLimit:'Upp till 120 000 kr', interestFreeDays:'Upp till 56 dagar', rating:4.5 },
      { id:'coop-mersa', network:'direct', name:'Coop Mastercard', url:'https://www.coop.se/medlem/ekonomi/coop-matkonto/mastercard/', logo:'/coop.png', annualFee:'0–295 kr', cashback:'Bonus på köp', creditLimit:'Upp till 100 000 kr', interestFreeDays:'Upp till 55 dagar', rating:4.4 }
    ]);

    try { 
      console.log('[FG_SEEDS] Dispatching fg:offers-updated event'); 
      console.log('[FG_SEEDS] Current offers:', Object.keys(FG).map(function(k){ return k + ':' + (FG[k] || []).length; }));
      document.dispatchEvent(new CustomEvent('fg:offers-updated')); 
    } catch(e) {}
  }

  try { console.log('[FG_SEEDS] Running initial seed'); } catch(e) {}
  run();
  try { document.addEventListener('DOMContentLoaded', run); } catch(e) {}
})();