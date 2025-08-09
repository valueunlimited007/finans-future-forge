import { useEffect, useRef } from "react";
import { readConsent } from "@/lib/consent";
import { GTM_ID } from "@/config/analytics";

function injectGTM(id: string) {
  if (!id) return;
  if (document.getElementById("gtm-base")) return;

  // dataLayer & GTM script
  const s = document.createElement("script");
  s.id = "gtm-base";
  s.innerHTML = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode!.insertBefore(j,f);
    })(window,document,'script','dataLayer','${id}');
  `;
  console.debug("[FG] Injecting GTM", id);
  document.head.appendChild(s);
}

const AnalyticsLoader = () => {
  const loadedRef = useRef(false);

  useEffect(() => {
    const maybeLoad = () => {
      const c = readConsent();
      if (c.analytics && GTM_ID && !loadedRef.current) {
        injectGTM(GTM_ID);
        loadedRef.current = true;
        console.debug("[FG] GTM loaded after consent", { GTM_ID });
      } else {
        console.debug("[FG] GTM not loaded yet", {
          consentAnalytics: c.analytics,
          hasGtmId: Boolean(GTM_ID),
          alreadyLoaded: loadedRef.current,
        });
      }
    };

    maybeLoad();
    const onChange = () => maybeLoad();
    window.addEventListener("fg:consent-changed", onChange as any);
    return () => window.removeEventListener("fg:consent-changed", onChange as any);
  }, []);

  return null;
};

export default AnalyticsLoader;
