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
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs uppercase text-muted-foreground">Annonsplats</div>
          <div className="font-medium">Din annons här</div>
          <div className="text-xs text-muted-foreground">Slot: {slot}</div>
        </div>
        <button
          type="button"
          className="rounded-md border border-border px-3 py-1 text-sm hover:bg-accent hover:text-accent-foreground"
          onClick={() => safeEvent("ad_click_house", { slot, term: termSlug, page: location.pathname, ts: Date.now() })}
          aria-label="Klicka på husannons"
        >
          Läs mer
        </button>
      </div>
    </aside>
  );
};

export default AdSlot;
