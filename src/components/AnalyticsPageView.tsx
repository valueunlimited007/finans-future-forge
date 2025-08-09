import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { readConsent } from "@/lib/consent";

/**
 * Sends fg_page_view to dataLayer on SPA route changes after consent.
 * GA4 Config tag should auto-send the initial page_view on GTM load.
 */
const AnalyticsPageView = () => {
  const { pathname, search } = useLocation();
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return; // avoid duplicate with GA4 Config's initial page_view
    }

    const c = readConsent();
    if (!c.analytics) return; // respect consent

    try {
      (window as any).dataLayer = (window as any).dataLayer || [];
      const payload = {
        event: "fg_page_view",
        page_location: window.location.href,
        page_path: `${window.location.pathname}${window.location.search}`,
        page_title: document.title,
      };
      (window as any).dataLayer.push(payload);
      console.debug("[FG] Pushed fg_page_view", payload);
    } catch {}
  }, [pathname, search]);

  return null;
};

export default AnalyticsPageView;
