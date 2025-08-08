// Finansguiden.se - Fallback seeds to ensure lists render even if feeds are slow/unavailable
(function(){
  function run(){
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
      { id:'brixo', network:'direct', name:'Brixo', url:'https://www.brixo.se/', amountRange:'10 000 – 350 000 kr', aprFrom:'från 9,9%', decision:'24h', requirements:'Creditsafe', rating:4.3 },
      { id:'qred-privat', network:'direct', name:'Qred', url:'https://www.qred.se/', amountRange:'20 000 – 400 000 kr', aprFrom:'individuell', decision:'Samma dag', requirements:'Egen bedömning', rating:4.5 }
    ]);

    try { document.dispatchEvent(new CustomEvent('fg:offers-updated')); } catch(e) {}
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();
