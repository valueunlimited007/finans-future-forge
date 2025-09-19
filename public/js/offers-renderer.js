// Finansguiden.se - Generic offers renderer
(function(){
  function el(html){ var t=document.createElement('template'); t.innerHTML=html.trim(); return t.content.firstElementChild; }
  function esc(s){ return (s||'').toString().replace(/[&<>"]/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[c])); }

  function renderContainer(container){
    var category = container.getAttribute('data-category');
    var limit = parseInt(container.getAttribute('data-limit')||'5',10);
    var items = (window.FG_OFFERS && window.FG_OFFERS[category]) || [];
    try { console.log('[FG_OFFERS] Render', category, items.length, window.FG_OFFERS ? Object.keys(window.FG_OFFERS) : null); } catch(e){}
    if (!items.length) { container.innerHTML = '<p class="text-muted">Inga erbjudanden just nu.</p>'; return; }

    var grid = el('<div class="lender-grid"></div>');

    items.slice(0, limit).forEach(function(item, idx){
      var featured = item.featured === true ? ' featured' : '';
      var badge = '';
      
      // Dynamic badges based on item properties - data-driven
      if (item.featured === true) {
        badge = '<span class="badge badge-featured">Bäst val</span>';
      } else if (item.highlights && item.highlights.includes('Utan UC-kontroll')) {
        badge = '<span class="badge badge-utan-uc">Utan UC</span>';
      } else if (item.highlights && item.highlights.includes('Jämför många långivare')) {
        badge = '<span class="badge badge-comparison">Jämför</span>';
      } else if (item.aprFrom && item.aprFrom.includes('4,95%')) {
        badge = '<span class="badge badge-low-rate">Låg ränta</span>';
      }

      var extraLeft = '';
      if (category === 'kreditkort') {
        extraLeft = `
          <div class="lender-features">
            <div class="lender-feature"><strong>Årsavgift:</strong> ${esc(item.annualFee||'-')}</div>
            <div class="lender-feature"><strong>Cashback/Bonus:</strong> ${esc(item.cashback||'-')}</div>
            <div class="lender-feature"><strong>Kredit:</strong> ${esc(item.creditLimit||'-')}</div>
            <div class="lender-feature"><strong>Räntefritt:</strong> ${esc(item.interestFreeDays||'-')}</div>
          </div>`;
      } else {
        extraLeft = `
          <div class="lender-features">
            <div class="lender-feature"><strong>Belopp:</strong> ${esc(item.amountRange||'-')}</div>
            <div class="lender-feature"><strong>Ränta:</strong> ${esc(item.aprFrom||'-')}</div>
            <div class="lender-feature"><strong>Besked:</strong> ${esc(item.decision||'-')}</div>
            <div class="lender-feature"><strong>Krav:</strong> ${esc(item.requirements||'-')}</div>
          </div>`;
      }

      var dataAff = item.network === 'adtraction' ? ' data-aff="adtraction" data-aff-channel="'+(window.FG_CONFIG && window.FG_CONFIG.channelId || '')+'"' : '';

      // Try to resolve a logo URL (feed-provided or derived from domain)
      var rawLogo = item.logo || item.logoUrl || item.image || item.imageUrl || (item.images && (item.images.logo || item.images.main));
      var domainLogo = '';
      try { if (!rawLogo && item.url) { var u = new URL(item.url); domainLogo = 'https://logo.clearbit.com/' + u.hostname; } } catch(e) {}
      var logoSrc = rawLogo || domainLogo || '';
      var logoHtml = logoSrc 
        ? '<img src="'+esc(logoSrc)+'" alt="'+esc(item.name)+' logotyp" loading="lazy" decoding="async" />'
        : esc((item.name||'').split(' ')[0]||'');
      
      var card = el(`
        <article class="lender-card${featured}">
          <div class="lender-logo" aria-label="${esc(item.name)} logotyp">${logoHtml}</div>
          <div class="lender-info">
            <h3>${esc(item.name)} ${badge}</h3>
            ${extraLeft}
          </div>
          <div class="lender-cta">
            <div class="lender-rating"><span class="stars">★★★★★</span> ${esc((item.rating||4.5).toFixed ? item.rating.toFixed(1) : item.rating)}/5</div>
            <a href="${esc(item.url)}" class="btn ${item.featured === true ? 'btn-primary' : 'btn-secondary'} btn-full" rel="nofollow sponsored noopener noreferrer" target="_blank"${dataAff}>Till ansökan</a>
            <small class="text-muted">Sponsrad länk</small>
          </div>
        </article>`);

      // Debug: Log text width issues
      try {
        setTimeout(function() {
          var features = card.querySelectorAll('.lender-feature');
          features.forEach(function(feature) {
            var computedStyle = window.getComputedStyle(feature);
            var width = feature.offsetWidth;
            if (width < 100) {
              console.warn('[OFFERS_DEBUG] Narrow feature detected:', {
                text: feature.textContent,
                width: width,
                computedWidth: computedStyle.width,
                maxWidth: computedStyle.maxWidth,
                gridColumns: computedStyle.gridTemplateColumns
              });
            }
          });
        }, 100);
      } catch(e) {}

      grid.appendChild(card);

      // iPad Safari zoom fallback - use visualViewport API for proper zoom detection
      if (/iPad|iPhone|iPod/.test(navigator.userAgent) && window.visualViewport) {
        var cardInner = card; // The card itself is our inner wrapper
        
        function measureAndSetClass() {
          var rect = cardInner.getBoundingClientRect();
          var scale = window.visualViewport ? window.visualViewport.scale : 1;
          var effectiveWidth = rect.width / scale;
          
          // Remove both classes first
          cardInner.classList.remove('cq-wide', 'cq-narrow');
          
          // Set exactly one class based on effective width
          if (effectiveWidth >= 640) {
            cardInner.classList.add('cq-wide');
          } else {
            cardInner.classList.add('cq-narrow');
          }
          
          console.info('[CQ]', 'Card width:', rect.width, 'Scale:', scale, 'Effective:', effectiveWidth, 'Class:', cardInner.className);
        }
        
        // Listen to proper zoom events
        window.visualViewport.addEventListener('resize', measureAndSetClass);
        window.addEventListener('resize', measureAndSetClass);
        window.addEventListener('orientationchange', measureAndSetClass);
        
        // Initial measurement
        setTimeout(measureAndSetClass, 10);
      }
    });

    container.innerHTML = '';
    container.appendChild(grid);

    // JSON-LD ItemList
    try {
      var list = {"@context":"https://schema.org","@type":"ItemList","itemListElement":items.slice(0,limit).map(function(it, i){
        return {"@type":"ListItem","position":i+1,"item":{"@type":"FinancialProduct","name":it.name,"url":it.url}};
      })};
      var s = document.createElement('script'); s.type='application/ld+json'; s.textContent = JSON.stringify(list); container.appendChild(s);
    } catch(e) {}
  }

  function init(){
    try { console.log('[FG_RENDERER] Init - checking for targets'); } catch(e) {}
    var targets = document.querySelectorAll('[data-offers]');
    if (targets.length === 0) {
      try { console.log('[FG_RENDERER] No targets found, will retry when event fires'); } catch(e) {}
      return;
    }
    try { console.log('[FG_RENDERER] Found', targets.length, 'targets, rendering...'); } catch(e) {}
    targets.forEach(renderContainer);
    try { if (window.attachClickRef && window.FG_CLICKREF) window.attachClickRef(window.FG_CLICKREF); } catch(e) {}
  }

  function rerender(){
    try { console.log('[FG_RENDERER] Rerender triggered'); } catch(e) {}
    var targets = document.querySelectorAll('[data-offers]');
    if (targets.length === 0) {
      try { console.log('[FG_RENDERER] No targets found during rerender'); } catch(e) {}
      return;
    }
    targets.forEach(renderContainer);
    try { if (window.attachClickRef && window.FG_CLICKREF) window.attachClickRef(window.FG_CLICKREF); } catch(e) {}
  }

  // Listen for events (main mechanism)
  document.addEventListener('fg:offers-updated', rerender);

  // Initial render - but DOM targets might not exist yet if React hasn't mounted
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // DOM is ready, but React components may not be mounted yet
    // Try immediate render, but don't worry if no targets
    init();
  }
})();
