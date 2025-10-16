import { GlossaryPartner } from '@/data/glossary';

/**
 * Hämtar partners från offers-schema.js global databas
 */
export function getPartnersFromOffers(brandIds: string[]): GlossaryPartner[] {
  // Vänta tills offers-schema.js har laddat
  const offers = (window as any).FG_OFFERS;
  if (!offers || !offers.privatlan) {
    console.warn('FG_OFFERS not loaded yet');
    return [];
  }

  const allOffers = [
    ...(offers.privatlan || []),
    ...(offers['utan-uc'] || []),
    ...(offers.laneformedlare || []),
    ...(offers.ovriga || [])
  ];

  return brandIds
    .map(brandId => {
      const offer = allOffers.find((o: any) => o.id === brandId);
      if (!offer) {
        console.warn(`Partner not found: ${brandId}`);
        return null;
      }

      return {
        name: offer.name,
        logo: offer.logo,
        description: offer.highlights?.[0] || offer.requirements || '',
        url: offer.url,
        brandId: offer.id,
        rating: offer.rating || 4.5,
        amountRange: offer.amountRange,
        aprFrom: offer.aprFrom,
        decision: offer.decision,
        requirements: offer.requirements,
        isPartner: offer.isPartner || true
      } as GlossaryPartner;
    })
    .filter((p): p is GlossaryPartner => p !== null);
}
