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
    <div className="relative">
      <Button asChild className={className}>
        <a 
          href={href} 
          target="_blank" 
          rel="nofollow sponsored noopener" 
          onClick={onClick} 
          aria-label={`${label} (affiliatelänk - öppnas i nytt fönster)`}
        >
          {label}
        </a>
      </Button>
      <span 
        className="absolute -top-1 -right-1 bg-muted text-muted-foreground text-xs px-1.5 py-0.5 rounded-full border text-[9px] leading-tight"
        title="Reklam - Vi får provision om du genomför ett köp via denna länk. Detta påverkar inte priset för dig."
      >
        Reklam
      </span>
    </div>
  );
};

export default AffiliateButton;
