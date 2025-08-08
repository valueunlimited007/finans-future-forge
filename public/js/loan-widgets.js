// Finansguiden.se - Loan widgets for landing pages
(function(){
  function ready(fn){ if(document.readyState!=='loading'){fn()} else document.addEventListener('DOMContentLoaded',fn) }

  function getClickref(){
    try {
      var key = 'fg_clickref';
      var existing = localStorage.getItem(key);
      if (existing) return existing;
      var ref = 'fg_' + Date.now() + '_' + Math.random().toString(36).slice(2,8);
      localStorage.setItem(key, ref);
      return ref;
    } catch(e){ return 'fg_' + Date.now(); }
  }

  ready(function(){
    // Attach Adtraction clickref + UTM to links marked data-aff="adtraction"
    try {
      var cref = getClickref();
      window.FG_CLICKREF = cref;
      function apply(){ try { if (window.attachClickRef) window.attachClickRef(cref); } catch(e) {} }
      if (window.attachClickRef) {
        apply();
      } else {
        window.addEventListener('load', apply);
      }
      document.addEventListener('fg:offers-updated', apply);
    } catch(e) {}

    // Loan sliders UI (purely UI, not a credit offer)
    var amount = document.getElementById('loan-amount');
    var years = document.getElementById('loan-years');
    var outAmount = document.getElementById('out-amount');
    var outYears = document.getElementById('out-years');
    var outMonthly = document.getElementById('out-monthly');

    function format(num){
      try { return new Intl.NumberFormat('sv-SE').format(num); } catch(e){ return num }
    }

    function calc(){
      if(!amount || !years) return;
      var a = parseInt(amount.value || '100000',10);
      var y = parseInt(years.value || '10',10);
      if(outAmount) outAmount.textContent = format(a) + ' kr';
      if(outYears) outYears.textContent = y + ' år';
      // En förenklad annuitetskalkyl (7.5% nominell) endast för UI
      var r = 0.075/12; var n = y*12; var m = (a*r)/(1-Math.pow(1+r,-n));
      if(outMonthly) outMonthly.textContent = format(Math.round(m)) + ' kr/mån';
    }

    if(amount){ amount.addEventListener('input', calc); }
    if(years){ years.addEventListener('input', calc); }
    calc();

    // CTA scroll till listan
    var btn = document.getElementById('compare-btn');
    if(btn){ btn.addEventListener('click', function(){
      var target = document.getElementById('top5');
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
      try { if (window.attachClickRef && window.FG_CLICKREF) window.attachClickRef(window.FG_CLICKREF); } catch(e) {}
    }); }
  });
})();
