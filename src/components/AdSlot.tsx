import React, { useEffect, useRef } from "react";

export interface AdSlotProps {
  slot: string;
  termSlug?: string;
  className?: string;
}

const safeEvent = (name: string, params: Record<string, any>) => {
  try {
    if (typeof (window as any).gtag === "function") {
      (window as any).gtag("event", name, params);
    } else {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({ event: name, ...params });
    }
  } catch {}
};

export const AdSlot: React.FC<AdSlotProps> = ({ slot, termSlug, className }) => {
  const firedRef = useRef(false);

  useEffect(() => {
    if (firedRef.current) return;
    firedRef.current = true;
    safeEvent("ad_impression", { slot, term: termSlug, page: location.pathname, ts: Date.now() });
  }, [slot, termSlug]);

  return (
    <aside
      className={"w-full rounded-md border border-border bg-card text-card-foreground p-4 " + (className || "")}
      aria-label="Annons"
    >
      <div className="text-sm text-muted-foreground">Annonsplats: {slot}</div>
      {/* Här kan ni koppla in ert befintliga offers-script om så önskas */}
    </aside>
  );
};

export default AdSlot;
