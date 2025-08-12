import { Button } from "@/components/ui/button";
import React from "react";

export interface AffiliateButtonProps {
  href: string;
  label?: string;
  termSlug?: string;
  className?: string;
}

const safeEvent = (name: string, params: Record<string, any>) => {
  try {
    // Prefer gtag if available
    if (typeof (window as any).gtag === "function") {
      (window as any).gtag("event", name, params);
    } else {
      // Fallback to dataLayer
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({ event: name, ...params });
    }
  } catch {}
};

export const AffiliateButton: React.FC<AffiliateButtonProps> = ({ href, label = "Jämför erbjudanden", termSlug, className }) => {
  const onClick = () => {
    safeEvent("affiliate_click", {
      term: termSlug,
      page: location.pathname,
      ts: Date.now(),
    });
  };

  return (
    <Button asChild className={className}>
      <a href={href} target="_blank" rel="nofollow noopener" onClick={onClick} aria-label={label}>
        {label}
      </a>
    </Button>
  );
};

export default AffiliateButton;
