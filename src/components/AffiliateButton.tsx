import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { affiliateManager } from "@/lib/affiliate/AffiliateManager";
import { AffiliateLinkBadge } from "./AffiliateLinkBadge";
import { isCasinoSite } from "@/lib/siteConfig";

export interface AffiliateButtonProps {
  href: string;
  label?: string;
  termSlug?: string;
  brandId?: string;
  brandName?: string;
  className?: string;
  variant?: "default" | "secondary" | "outline" | "ghost" | "link" | "destructive";
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

export const AffiliateButton: React.FC<AffiliateButtonProps> = ({ 
  href, 
  label = "Jämför erbjudanden", 
  termSlug, 
  brandId,
  brandName,
  className,
  variant = "default"
}) => {
  const [trackingUrl, setTrackingUrl] = useState(href);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonText, setButtonText] = useState(label);

  useEffect(() => {
    if (brandId && affiliateManager.isMockMode()) {
      // Generera tracking URL för casino brands
      const tracked = affiliateManager.generateTrackingUrl(brandId, href, {
        source: 'kasinos_se',
        term: termSlug || '',
        button_label: label
      });
      setTrackingUrl(tracked);
    } else {
      setTrackingUrl(href);
    }
  }, [href, brandId, termSlug, label]);

  const onClick = async () => {
    setIsLoading(true);
    setButtonText('Öppnar...');
    
    try {
      // Track click med affiliate manager
      if (brandId && brandName) {
        await affiliateManager.trackClick(brandId, brandName, undefined, {
          term: termSlug || '',
          button_label: label
        });
      }

      // Legacy tracking för finansguiden
      safeEvent("affiliate_click", {
        term: termSlug,
        brandId: brandId || 'unknown',
        brandName: brandName || 'unknown',
        page: location.pathname,
        ts: Date.now(),
      });

      // Add slight delay for better UX
      setTimeout(() => {
        setButtonText(label);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error tracking affiliate click:', error);
      setButtonText(label);
      setIsLoading(false);
    }
  };

  const showAffiliateBadge = isCasinoSite();

  return (
    <div className={showAffiliateBadge ? "space-y-2" : "relative"}>
      <Button 
        asChild 
        className={className} 
        variant={variant}
        disabled={isLoading}
      >
        <a 
          href={trackingUrl} 
          target="_blank" 
          rel="nofollow sponsored noopener" 
          onClick={onClick} 
          aria-label={`${label} (affiliatelänk - öppnas i nytt fönster)`}
        >
          {isLoading ? (
            <div className="flex items-center gap-1">
              <div className="animate-spin h-3 w-3 border border-current border-t-transparent rounded-full" />
              {buttonText}
            </div>
          ) : (
            label
          )}
        </a>
      </Button>
      
      {/* Affiliate disclosure for casino site */}
      {showAffiliateBadge && (
        <div className="flex items-center gap-2">
          <AffiliateLinkBadge />
          <span className="text-xs text-muted-foreground">
            Vi kan få provision om du registrerar dig via denna länk
          </span>
        </div>
      )}
      
      {/* Legacy finance site disclosure */}
      {!showAffiliateBadge && (
        <span 
          className="absolute -top-1 -right-1 bg-muted text-muted-foreground text-xs px-1.5 py-0.5 rounded-full border text-[9px] leading-tight"
          title="Reklam - Vi får provision om du genomför ett köp via denna länk. Detta påverkar inte priset för dig."
        >
          Reklam
        </span>
      )}
      
      {affiliateManager.isMockMode() && (
        <span 
          className="absolute -bottom-1 -left-1 bg-yellow-500 text-yellow-900 text-xs px-1.5 py-0.5 rounded-full border text-[9px] leading-tight"
          title="Mock mode - tracking är simulerad"
        >
          Mock
        </span>
      )}
    </div>
  );
};

export default AffiliateButton;
