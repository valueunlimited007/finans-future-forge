// Finansguiden.se - Adtraction public data feeds integration (no tracking yet)
(function(){
  var FEED_KEY = 'FG_ADTR_FEED_V1';
  var FEED_TTL_MS = 6 * 60 * 60 * 1000; // 6h cache

  function now(){ return Date.now ? Date.now() : new Date().getTime(); }

  function readCache(){
    try {
      var s = localStorage.getItem(FEED_KEY);
      if (!s) return null;
      var obj = JSON.parse(s);
      if (!obj || !obj.t || !obj.data) return null;
      if ((now() - obj.t) > FEED_TTL_MS) return null;
      return obj.data;
    } catch(e) { return null; }
  }

  function writeCache(data){
    try { localStorage.setItem(FEED_KEY, JSON.stringify({ t: now(), data: data })); } catch(e) {}
  }

  function fetchJson(url){
    return fetch(url, { headers: { 'Accept': 'application/json' } }).then(function(r){
      if (!r.ok) throw new Error('HTTP '+r.status);
      return r.json();
    });
  }

  function toArray(maybe){
    if (!maybe) return [];
    if (Array.isArray(maybe)) return maybe;
    // Some public endpoints may return {items:[...]} or {data:[...]}
    if (maybe.items) return maybe.items;
    if (maybe.data) return maybe.data;
    return [];
  }

  function normalizeItem(p){
    var obj = Object.assign({}, p);
    // Normalize URL fields if any
    obj.url = obj.url || obj.landingUrl || obj.landing_url || obj.programUrl || obj.program_url || obj.trackingLink || obj.tracking_link || '#';
    // Keep common logo fields for renderer fallback (if schema doesn't copy them)
    obj.logo = obj.logo || obj.logoUrl || obj.logo_url || obj.image || obj.imageUrl || obj.image_url || (obj.images && (obj.images.logo || obj.images.main));
    return obj;
  }

  function load(){
    try { console.log('[FG_ADTR] Starting load, FG_CONFIG:', window.FG_CONFIG); } catch(e) {}
    
    var cached = readCache();
    if (cached && window.FG_OFFERS && typeof window.FG_OFFERS.addFromAdtraction==='function'){
      try { 
        console.log('[FG_ADTR] Using cached data:', cached.length, 'items');
        window.FG_OFFERS.addFromAdtraction(cached); 
      } catch(e) {}
      return;
    }

    // Get channel ID from global config
    var channelId = (window.FG_CONFIG && window.FG_CONFIG.channelId) || '2005939977';
    try { console.log('[FG_ADTR] Using channelId:', channelId); } catch(e) {}
    
    var urls = [
      'https://api.adtraction.com/v3/public/data/se/loans?channelId=' + channelId,
      'https://api.adtraction.com/v3/public/data/se/paydayloans?channelId=' + channelId
    ];

    try { console.log('[FG_ADTR] Making API calls:', urls); } catch(e) {}

    Promise.all(urls.map(fetchJson)).then(function(all){
      var combined = [];
      all.forEach(function(d, idx){
        var tag = idx===0 ? 'loans' : 'paydayloans';
        toArray(d).forEach(function(p){
          var obj = normalizeItem(p);
          // Hint the categorizer: paydayloans are typically snabblån/utan UC on reference sites
          if (tag === 'paydayloans') {
            obj.description = ((obj.description||'') + ' utan uc snabblan').trim();
          }
          combined.push(obj);
        });
      });

      writeCache(combined);
      try { console.log('[FG_ADTR] Loaded feed items:', combined.length); } catch(e){}
      if (window.FG_OFFERS && typeof window.FG_OFFERS.addFromAdtraction==='function'){
        try { window.FG_OFFERS.addFromAdtraction(combined); } catch(e) {}
      }
    }).catch(function(err){ 
      try { console.log('[FG_ADTR] Feed error:', err.message, 'falling back to seeds'); } catch(e){}
      // Fall back to static offers from schema if API fails
      try { document.dispatchEvent(new CustomEvent('fg:offers-updated')); } catch(e) {}
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', load); else load();
})();
