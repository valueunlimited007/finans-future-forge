/* Finansguiden.se - Main JS */
(function(){
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
})();
