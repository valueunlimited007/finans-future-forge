(function(){
  const GA_ID = 'G-99X7KJ1MDZ';

  function init(){
    window.dataLayer = window.dataLayer || [];
    function gtag(){ window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID);
  }

  function tryConsentLoad(){
    try {
      if (window.AnalyticsConsent?.loadScript && window.AnalyticsConsent?.whenConsented){
        window.AnalyticsConsent.loadScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`, { async: true, id: 'ga4-lib' });
        window.AnalyticsConsent.whenConsented(init);
        return true;
      }
    } catch (e) {}
    return false;
  }

  // Attempt immediately; if consent manager isn't ready yet, retry on DOMContentLoaded
  if (!tryConsentLoad()){
    document.addEventListener('DOMContentLoaded', tryConsentLoad, { once: true });
  }
})();
