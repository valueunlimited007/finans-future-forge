import React, { useEffect, useRef } from 'react';
import type { AdtractionBanner as BannerConfig } from '@/lib/adtractionBanners';

interface AdtractionBannerProps {
  banner: BannerConfig;
  placement: string;
  termSlug?: string;
}

// Safe event tracking helper
const safeEvent = (name: string, params: Record<string, any>) => {
  try {
    if (typeof (window as any).gtag === "function") {
      (window as any).gtag("event", name, params);
    } else {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({ event: name, ...params });
    }
  } catch (e) {
    // Silently fail - analytics should never break the page
  }
};

export default function AdtractionBanner({ 
  banner, 
  placement, 
  termSlug 
}: AdtractionBannerProps) {
  const impressionLogged = useRef(false);
  
  // Log impression when banner is rendered
  useEffect(() => {
    if (!impressionLogged.current) {
      safeEvent('ad_impression', {
        partner: 'enklare',
        banner_id: banner.id,
        placement,
        format: banner.format,
        term_slug: termSlug,
        page: location.pathname,
      });
      impressionLogged.current = true;
    }
  }, [banner.id, placement, termSlug, banner.format]);
  
  const handleClick = () => {
    safeEvent('ad_click', {
      partner: 'enklare',
      banner_id: banner.id,
      placement,
      format: banner.format,
      term_slug: termSlug,
      page: location.pathname,
    });
  };
  
  const trackingUrl = `https://do.enklare.se/t/t?a=${banner.id}&as=2005939977&t=2&tk=1`;
  const imageUrl = `https://track.adtraction.com/t/t?a=${banner.id}&as=2005939977&t=1&tk=1&i=1`;
  
  return (
    <div 
      className="adtraction-banner flex justify-center my-4"
      data-placement={placement}
      data-format={banner.format}
    >
      <a 
        href={trackingUrl}
        onClick={handleClick}
        target="_blank"
        rel="nofollow noopener sponsored"
        aria-label="Enklare - Jämför lån och finansiella tjänster"
      >
        <img
          src={imageUrl}
          width={banner.width}
          height={banner.height}
          alt="Enklare - Jämför lån och finansiella tjänster"
          loading="lazy"
          style={{ 
            maxWidth: '100%', 
            height: 'auto',
            display: 'block'
          }}
        />
      </a>
    </div>
  );
}
