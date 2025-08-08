// Finansguiden.se - Generic offers renderer
(function(){
  function el(html){ var t=document.createElement('template'); t.innerHTML=html.trim(); return t.content.firstElementChild; }
  function esc(s){ return (s||'').toString().replace(/[&<>"]/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[c])); }

  function renderContainer(container){
    var category = container.getAttribute('data-category');
    var limit = parseInt(container.getAttribute('data-limit')||'5',10);
    var items = (window.FG_OFFERS && window.FG_OFFERS[category]) || [];
    if (!items.length) { container.innerHTML = '<p class="text-muted">Inga erbjudanden just nu.</p>'; return; }

    var grid = el('<div class="lender-grid"></div>');

    items.slice(0, limit).forEach(function(item, idx){
      var featured = idx===0 ? ' featured' : '';
      var badge = idx===0 ? '<span class="badge badge-featured">Bäst val</span>' : '';
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
            <a href="${esc(item.url)}" class="btn ${idx===0?'btn-primary':'btn-secondary'} btn-full" rel="nofollow sponsored noopener noreferrer" target="_blank"${dataAff}>Till ansökan</a>
            <small class="text-muted">Sponsrad länk</small>
          </div>
        </article>`);

      grid.appendChild(card);
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
    document.querySelectorAll('[data-offers]').forEach(renderContainer);
    try { if (window.attachClickRef && window.FG_CLICKREF) window.attachClickRef(window.FG_CLICKREF); } catch(e) {}
  }

  function rerender(){
    document.querySelectorAll('[data-offers]').forEach(renderContainer);
    try { if (window.attachClickRef && window.FG_CLICKREF) window.attachClickRef(window.FG_CLICKREF); } catch(e) {}
  }

  document.addEventListener('fg:offers-updated', rerender);

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
