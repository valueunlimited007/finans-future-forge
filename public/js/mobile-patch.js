/* Mobile Patch helper – keeps CSS last and fixes common overflow issues */
(function(){
  'use strict';

  function ensureMobilePatchLast(){
    var link = document.querySelector('link[data-mobile-patch]');
    if (!link) return;
    // Move to end of <head> so it overrides late-injected legacy CSS
    document.head.appendChild(link);
  }

  function wrapWideTables(){
    try {
      var isMobile = window.matchMedia('(max-width: 768px)').matches;
      if (!isMobile) return;
      document.querySelectorAll('table').forEach(function(t){
        var p = t.parentElement; if (!p) return;
        if (p.classList && p.classList.contains('table-scroll')) return;
        // If table would overflow viewport, wrap it
        var shouldWrap = t.scrollWidth > document.documentElement.clientWidth || true; // safe wrap on mobile
        if (shouldWrap){
          var wrap = document.createElement('div');
          wrap.className = 'table-scroll';
          wrap.style.overflowX = 'auto';
          wrap.style.webkitOverflowScrolling = 'touch';
          wrap.style.marginBottom = '1rem';
          p.insertBefore(wrap, t);
          wrap.appendChild(t);
        }
      });
    } catch(_){

    }
  }

  function makeEmbedsResponsive(){
    try {
      document.querySelectorAll('iframe, embed').forEach(function(el){
        el.style.maxWidth = '100%';
        el.style.width = '100%';
      });
    } catch(_){

    }
  }

  function onReady(){
    ensureMobilePatchLast();
    wrapWideTables();
    makeEmbedsResponsive();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', onReady);
  else onReady();

  // If legacy CSS is injected after load, keep our patch last
  try {
    var mo = new MutationObserver(function(mutations){
      var changed = mutations.some(function(m){
        return Array.prototype.some.call(m.addedNodes || [], function(n){
          return n && (n.nodeName === 'LINK' || n.nodeName === 'STYLE');
        });
      });
      if (changed) ensureMobilePatchLast();
    });
    mo.observe(document.head, { childList: true });
  } catch(_){

  }
})();
