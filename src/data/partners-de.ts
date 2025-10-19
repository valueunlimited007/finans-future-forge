// German Affiliate Partners from Adtraction
export interface Partner {
  brandId: string;
  name: string;
  logo?: string;
  category: 'ratenkredit' | 'kreditkarte' | 'unternehmenskredit' | 'comparison';
  amountRange?: string;
  aprFrom?: string;
  commission: {
    type: 'cpm' | 'percentage' | 'fixed' | 'tiered';
    value: number | string;
  };
  adtractionId: string;
  requirements: string[];
  pros: string[];
  cons: string[];
  description?: string;
  url?: string;
}

export const GERMAN_PARTNERS: Partner[] = [
  // Comparison Services
  {
    brandId: 'finanzcheck-de',
    name: 'Finanzcheck',
    category: 'comparison',
    amountRange: '1.000 - 100.000 €',
    aprFrom: '0,68%',
    commission: { type: 'cpm', value: '4,81 EUR + 1,9%' },
    adtractionId: 'finanzcheck_program',
    requirements: ['18+ Jahre', 'Regelmäßiges Einkommen', 'Deutsches Bankkonto'],
    pros: ['Vergleicht 20+ Banken', 'Kostenlos & unverbindlich', 'Schnelle Entscheidung', 'TÜV-geprüft'],
    cons: ['SCHUFA-Prüfung erforderlich'],
    description: 'Finanzcheck vergleicht über 20 Banken und findet den günstigsten Kredit für Sie.',
    url: 'https://www.finanzcheck.de'
  },
  {
    brandId: 'deutsche-bank-de',
    name: 'Deutsche Bank',
    category: 'ratenkredit',
    amountRange: '2.500 - 80.000 €',
    aprFrom: '3,49%',
    commission: { type: 'cpm', value: '31,85 EUR + 1,9%' },
    adtractionId: 'deutsche_bank_program',
    requirements: ['18+ Jahre', 'Regelmäßiges Einkommen', 'Gute Bonität'],
    pros: ['Traditionsbank', 'Flexible Laufzeiten', 'Sondertilgungen möglich', 'Online-Abschluss'],
    cons: ['Höhere Zinsen als Online-Banken', 'Bearbeitungsgebühren möglich'],
    description: 'Ratenkredit von Deutschlands größter Bank mit flexiblen Konditionen.',
    url: 'https://www.deutsche-bank.de/ratenkredite'
  },
  {
    brandId: 'smava-de',
    name: 'smava',
    category: 'comparison',
    amountRange: '500 - 120.000 €',
    aprFrom: '0,99%',
    commission: { type: 'cpm', value: '7,95 EUR + 1,8%' },
    adtractionId: 'smava_program',
    requirements: ['18+ Jahre', 'Wohnsitz in Deutschland', 'Regelmäßiges Einkommen'],
    pros: ['Über 30 Banken im Vergleich', 'TÜV-geprüft', 'Kostenlos', 'Schnelle Auszahlung'],
    cons: ['SCHUFA-Abfrage notwendig'],
    description: 'Deutschlands größter Kreditvergleich mit über 30 Banken.',
    url: 'https://www.smava.de'
  },
  {
    brandId: 'auxmoney-de',
    name: 'auxmoney',
    category: 'ratenkredit',
    amountRange: '1.000 - 50.000 €',
    aprFrom: '3,96%',
    commission: { type: 'fixed', value: '65 EUR + 2%' },
    adtractionId: 'auxmoney_program',
    requirements: ['18+ Jahre', 'Deutsches Bankkonto', 'Regelmäßiges Einkommen'],
    pros: ['Kredite auch bei negativer SCHUFA', 'P2P-Finanzierung', 'Schnelle Entscheidung', 'Flexible Verwendung'],
    cons: ['Höhere Zinsen als Bankkredite', 'Vermittlungsgebühr'],
    description: 'P2P-Kreditplattform mit Krediten auch bei schwieriger Bonität.',
    url: 'https://www.auxmoney.com'
  },
  {
    brandId: 'bank-of-scotland-de',
    name: 'Bank of Scotland',
    category: 'ratenkredit',
    amountRange: '3.000 - 50.000 €',
    aprFrom: '2,89%',
    commission: { type: 'percentage', value: 1.9 },
    adtractionId: 'bank_of_scotland_program',
    requirements: ['18+ Jahre', 'Unbefristetes Arbeitsverhältnis', 'Gute Bonität'],
    pros: ['Niedrige Zinsen', 'Kostenlose Sondertilgungen', 'Schnelle Auszahlung', 'Flexible Laufzeiten'],
    cons: ['Nur für Angestellte', 'Höhere Anforderungen an Bonität'],
    description: 'Günstige Ratenkredite mit Top-Konditionen von der Bank of Scotland.',
    url: 'https://www.bankofscotland.de'
  },
  {
    brandId: 'targobank-de',
    name: 'Targobank',
    category: 'ratenkredit',
    amountRange: '1.500 - 80.000 €',
    aprFrom: '3,45%',
    commission: { type: 'percentage', value: 2.0 },
    adtractionId: 'targobank_program',
    requirements: ['18+ Jahre', 'Regelmäßiges Einkommen', 'Deutsches Bankkonto'],
    pros: ['Schnelle Entscheidung', 'Persönliche Beratung', 'Flexible Rückzahlung', 'Online-Abschluss'],
    cons: ['Höhere Zinsen als Direktbanken', 'Filialbank'],
    description: 'Persönliche Kreditberatung in über 300 Filialen deutschlandweit.',
    url: 'https://www.targobank.de'
  },
  {
    brandId: 'verivox-de',
    name: 'Verivox',
    category: 'comparison',
    amountRange: '1.000 - 100.000 €',
    aprFrom: '0,68%',
    commission: { type: 'cpm', value: '6,50 EUR + 1,9%' },
    adtractionId: 'verivox_program',
    requirements: ['18+ Jahre', 'Wohnsitz in Deutschland'],
    pros: ['Über 25 Banken im Vergleich', 'TÜV-geprüft', 'Kostenlos', 'Unabhängig'],
    cons: ['Nur Vergleichsportal'],
    description: 'Unabhängiger Kreditvergleich mit über 25 Banken.',
    url: 'https://www.verivox.de'
  },
  {
    brandId: 'credicom-de',
    name: 'CrediCom',
    category: 'ratenkredit',
    amountRange: '3.000 - 50.000 €',
    aprFrom: '2,99%',
    commission: { type: 'percentage', value: 1.8 },
    adtractionId: 'credicom_program',
    requirements: ['18+ Jahre', 'Regelmäßiges Einkommen', 'Gute Bonität'],
    pros: ['Niedrige Zinsen', 'Schnelle Auszahlung', 'Flexible Laufzeiten', 'Online-Abschluss'],
    cons: ['Höhere Anforderungen an Bonität'],
    description: 'Günstige Ratenkredite von CrediCom mit schneller Auszahlung.',
    url: 'https://www.credicom.de'
  },
  {
    brandId: 'ofina-de',
    name: 'Ofina',
    category: 'ratenkredit',
    amountRange: '2.500 - 100.000 €',
    aprFrom: '3,19%',
    commission: { type: 'percentage', value: 1.9 },
    adtractionId: 'ofina_program',
    requirements: ['18+ Jahre', 'Unbefristetes Arbeitsverhältnis', 'Deutsches Bankkonto'],
    pros: ['Flexible Laufzeiten', 'Sondertilgungen möglich', 'Schnelle Bearbeitung', 'Online-Abschluss'],
    cons: ['Nur für Angestellte'],
    description: 'Ratenkredite mit flexiblen Konditionen von Ofina.',
    url: 'https://www.ofina.de'
  },
  {
    brandId: 'santander-de',
    name: 'Santander Consumer Bank',
    category: 'ratenkredit',
    amountRange: '1.000 - 75.000 €',
    aprFrom: '3,99%',
    commission: { type: 'percentage', value: 2.0 },
    adtractionId: 'santander_program',
    requirements: ['18+ Jahre', 'Regelmäßiges Einkommen', 'Deutsches Bankkonto'],
    pros: ['Erfahrene Bank', 'Flexible Laufzeiten', 'Schnelle Entscheidung', 'Persönliche Beratung'],
    cons: ['Höhere Zinsen als Direktbanken'],
    description: 'Ratenkredite von einer der größten Verbraucherbanken Deutschlands.',
    url: 'https://www.santander.de'
  },

  // Credit Cards (Kreditkarten)
  {
    brandId: 'ferratum-mastercard-de',
    name: 'Ferratum Mastercard',
    category: 'kreditkarte',
    commission: { type: 'fixed', value: '45 EUR' },
    adtractionId: 'ferratum_card_program',
    requirements: ['18+ Jahre', 'Regelmäßiges Einkommen', 'Deutsches Bankkonto'],
    pros: ['Keine Jahresgebühr', 'Weltweit akzeptiert', 'Schnelle Genehmigung', 'Online-Verwaltung'],
    cons: ['Kreditrahmen bonitätsabhängig', 'Auslandseinsatzgebühren'],
    description: 'Kostenlose Mastercard mit weltweiter Akzeptanz.',
    url: 'https://www.ferratum.de/kreditkarte'
  },
  {
    brandId: 'instabank-de',
    name: 'Instabank Kreditkarte',
    category: 'kreditkarte',
    commission: { type: 'fixed', value: '50 EUR' },
    adtractionId: 'instabank_card_program',
    requirements: ['18+ Jahre', 'Regelmäßiges Einkommen', 'Gute Bonität'],
    pros: ['Attraktive Konditionen', 'Flexible Rückzahlung', 'Online-Banking', 'Weltweit nutzbar'],
    cons: ['Jahresgebühr möglich', 'Bonitätsprüfung'],
    description: 'Moderne Kreditkarte mit flexiblen Rückzahlungsoptionen.',
    url: 'https://www.instabank.de'
  },
  {
    brandId: 'florin-mastercard-de',
    name: 'Mastercard FLORIN+',
    category: 'kreditkarte',
    commission: { type: 'fixed', value: '40 EUR' },
    adtractionId: 'florin_card_program',
    requirements: ['18+ Jahre', 'Deutsches Bankkonto', 'Regelmäßiges Einkommen'],
    pros: ['Keine Jahresgebühr', 'Cashback-Programm', 'Apple Pay & Google Pay', 'Weltweit kostenlos'],
    cons: ['Kreditrahmen begrenzt', 'Bonitätsprüfung'],
    description: 'Moderne Mastercard mit Cashback und ohne Jahresgebühr.',
    url: 'https://www.florin.de'
  },
  {
    brandId: 'netkredit24-karte-de',
    name: 'Netkredit24 Kreditkarte',
    category: 'kreditkarte',
    commission: { type: 'fixed', value: '35 EUR' },
    adtractionId: 'netkredit24_card_program',
    requirements: ['18+ Jahre', 'Wohnsitz in Deutschland', 'Regelmäßiges Einkommen'],
    pros: ['Schnelle Genehmigung', 'Online-Verwaltung', 'Flexible Nutzung', 'Weltweit akzeptiert'],
    cons: ['Jahresgebühr möglich', 'SCHUFA-Prüfung'],
    description: 'Kreditkarte mit schneller Genehmigung und flexibler Nutzung.',
    url: 'https://www.netkredit24.de'
  },
  {
    brandId: 'extrakarte-de',
    name: 'Extrakarte',
    category: 'kreditkarte',
    commission: { type: 'fixed', value: '38 EUR' },
    adtractionId: 'extrakarte_program',
    requirements: ['18+ Jahre', 'Deutsches Bankkonto', 'Regelmäßiges Einkommen'],
    pros: ['Keine versteckten Gebühren', 'Transparente Konditionen', 'Online-Beantragung', 'Schnelle Zusage'],
    cons: ['Kreditrahmen bonitätsabhängig'],
    description: 'Transparente Kreditkarte ohne versteckte Gebühren.',
    url: 'https://www.extrakarte.de'
  },

  // Business Loans (Unternehmenskredit)
  {
    brandId: 'qred-de',
    name: 'Qred',
    category: 'unternehmenskredit',
    amountRange: '5.000 - 500.000 €',
    aprFrom: 'Ab 1,99%',
    commission: { type: 'tiered', value: '50-700 EUR' },
    adtractionId: 'qred_de_program',
    requirements: ['Unternehmen mind. 1 Jahr aktiv', 'Monatsumsatz mind. 25.000 €', 'Sitz in Deutschland'],
    pros: ['Schnelle Entscheidung (24h)', 'Flexible Rückzahlung', 'Keine versteckten Gebühren', 'Persönlicher Ansprechpartner'],
    cons: ['Höhere Zinsen als Bankkredite', 'Mindestlaufzeit erforderlich'],
    description: 'Schnelle Unternehmenskredite für Ihr Geschäft - Entscheidung in 24 Stunden.',
    url: 'https://qred.com/de'
  },
  {
    brandId: 'giromatch-de',
    name: 'Giromatch',
    category: 'comparison',
    amountRange: '5.000 - 250.000 €',
    commission: { type: 'percentage', value: 2.5 },
    adtractionId: 'giromatch_program',
    requirements: ['Unternehmen aktiv', 'Wohnsitz in Deutschland'],
    pros: ['Vergleicht mehrere Anbieter', 'Kostenlos', 'Schnelle Vermittlung', 'Auch für Start-ups'],
    cons: ['Nur Vermittlung', 'Bonitätsprüfung notwendig'],
    description: 'Vergleichsportal für Unternehmensfinanzierung.',
    url: 'https://www.giromatch.com'
  },
  {
    brandId: 'bettercompared-de',
    name: 'Bettercompared',
    category: 'comparison',
    amountRange: '1.000 - 100.000 €',
    commission: { type: 'percentage', value: 2.0 },
    adtractionId: 'bettercompared_program',
    requirements: ['18+ Jahre', 'Wohnsitz in Deutschland'],
    pros: ['Unabhängiger Vergleich', 'Kostenlos', 'Über 20 Anbieter', 'Schnelle Übersicht'],
    cons: ['Nur Vergleichsportal'],
    description: 'Unabhängiger Kreditvergleich mit über 20 Anbietern.',
    url: 'https://www.bettercompared.de'
  }
];

export function getPartnersByCategory(category: Partner['category']): Partner[] {
  return GERMAN_PARTNERS.filter(p => p.category === category);
}

export function getPartnerById(brandId: string): Partner | undefined {
  return GERMAN_PARTNERS.find(p => p.brandId === brandId);
}

export function getAllRatenkredite(): Partner[] {
  return GERMAN_PARTNERS.filter(p => p.category === 'ratenkredit' || p.category === 'comparison');
}

export function getAllKreditkarten(): Partner[] {
  return GERMAN_PARTNERS.filter(p => p.category === 'kreditkarte');
}

export function getAllUnternehmenskredite(): Partner[] {
  return GERMAN_PARTNERS.filter(p => p.category === 'unternehmenskredit' || p.category === 'comparison');
}
