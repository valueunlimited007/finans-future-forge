/* Finansguiden.se - Main JS */
(function(){
  // Safety: ensure only one top-level header exists (remove any duplicates appended after footer)
  function normalizeHeaders(){
    try{
      var body = document.body; if (!body) return;
      var headers = Array.from(body.querySelectorAll('body > header'));
      // Keep first, remove the rest
      headers.slice(1).forEach(function(h){ h.parentElement && h.parentElement.removeChild(h); });
      // Remove any header nodes that appear after the footer
      var footer = body.querySelector('body > footer');
      if (footer){
        var sib = footer.nextElementSibling;
        while (sib){
          if (sib.tagName && sib.tagName.toLowerCase()==='header'){
            var toRemove = sib; sib = sib.nextElementSibling; toRemove.remove(); continue;
          }
          sib = sib.nextElementSibling;
        }
      }
    }catch(e){}
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', normalizeHeaders); else normalizeHeaders();
  try { new MutationObserver(normalizeHeaders).observe(document.body, { childList: true }); } catch(e){}

  // Update current year placeholders
  try {
    var year = new Date().getFullYear();
    document.querySelectorAll('.current-year').forEach(function(el){ el.textContent = year; });
  } catch(e) {}

  // Mobile menu toggle
  var btn = document.querySelector('.mobile-menu');
  var nav = document.querySelector('.nav-links');
  if (btn && nav) {
    btn.addEventListener('click', function(){
      var isHidden = getComputedStyle(nav).display === 'none';
      nav.style.display = isHidden ? 'flex' : 'none';
    });
  }


  // Affiliate prep: mark outbound affiliate links
  document.querySelectorAll('a[data-aff]')
    .forEach(function(a){
      a.setAttribute('rel','nofollow sponsored noopener');
      a.setAttribute('target','_blank');
    });

  // Simple helper to attach clickref to affiliate links (Adtraction-ready)
  window.attachClickRef = function(clickref){
    document.querySelectorAll('a[data-aff="adtraction"]').forEach(function(a){
      try {
        var url = new URL(a.href, window.location.origin);
        if (clickref) url.searchParams.set('clickref', clickref);
        url.searchParams.set('utm_source','finansguiden');
        a.href = url.toString();
      } catch(e) {}
    });
  }

  // Dynamic dates (Swedish)
  try {
    var months = ['januari','februari','mars','april','maj','juni','juli','augusti','september','oktober','november','december'];
    var now = new Date();
    var monthYear = months[now.getMonth()] + ' ' + now.getFullYear();
    document.querySelectorAll('.current-month-year').forEach(function(el){ el.textContent = monthYear; });
    document.querySelectorAll('.last-updated').forEach(function(el){ el.textContent = monthYear; });
  } catch(e) {}

  // JSON-LD: set dynamic dates (ISO yyyy-mm-dd)
  try {
    var iso = new Date().toISOString().slice(0,10);
    document.querySelectorAll('script[type="application/ld+json"]').forEach(function(s){
      try {
        var data = JSON.parse(s.textContent || '{}');
        var changed = false;
        function walk(obj){
          if (!obj || typeof obj !== 'object') return;
          if ('datePublished' in obj) { obj.datePublished = iso; changed = true; }
          if ('dateModified' in obj) { obj.dateModified = iso; changed = true; }
          if (Array.isArray(obj)) obj.forEach(walk);
          else Object.keys(obj).forEach(function(k){ walk(obj[k]); });
        }
        walk(data);
        if (changed) s.textContent = JSON.stringify(data);
      } catch(err) {}
    });
  } catch(err) {}

  // Consent helpers for future analytics/ads
  function whenConsented(category, cb){
    try {
      var c = window.CookieConsent && window.CookieConsent.get && window.CookieConsent.get();
      if (c && c[category]) cb();
      document.addEventListener('cookieconsent:change', function(e){ if (e.detail && e.detail[category]) cb(); });
    } catch(err) {}
  }
  window.AnalyticsConsent = {
    when: whenConsented,
    loadScript: function(category, src, attrs){
      whenConsented(category, function(){
        var s = document.createElement('script'); s.src = src; if (attrs) Object.assign(s, attrs); document.head.appendChild(s);
      });
    }
  };

  // Cookie consent (GDPR/ePrivacy - simple, no non-essential cookies by default)
  (function(){
    var KEY = 'fg_cookie_consent';
    function get(){ try { return JSON.parse(localStorage.getItem(KEY) || 'null'); } catch(e){ return null; } }
    function set(value){ localStorage.setItem(KEY, JSON.stringify(value)); document.dispatchEvent(new CustomEvent('cookieconsent:change',{detail:value})); }

    function render(){
      if (document.querySelector('.cookie-banner')) return;
      var wrap = document.createElement('div');
      wrap.className = 'cookie-banner';
      wrap.innerHTML = '\
        <div>\
          <h3>Vi använder cookies</h3>\
          <p>Vi använder nödvändiga cookies för att sidan ska fungera. Du kan välja att acceptera icke-nödvändiga (analys/marknadsföring). Du kan ändra ditt val när som helst.</p>\
          <div class="cookie-actions">\
            <button class="cookie-btn" data-action="reject">Neka icke-nödvändiga</button>\
            <button class="cookie-btn primary" data-action="accept">Acceptera alla</button>\
          </div>\
        </div>';
      document.body.appendChild(wrap);
      wrap.addEventListener('click', function(e){
        var t = e.target;
        if (!(t instanceof HTMLElement)) return;
        if (t.dataset.action === 'accept'){
          set({necessary:true, analytics:true, marketing:true, ts: Date.now()});
          wrap.remove();
        }
        if (t.dataset.action === 'reject'){
          set({necessary:true, analytics:false, marketing:false, ts: Date.now()});
          wrap.remove();
        }
      });
    }

    if (!get()) { if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render); else render(); }
    window.CookieConsent = { get:get, set:set, open:function(){ render(); } };
  })();
})();
