import type { GlossaryFAQDE, GlossaryTermDE } from "@/data/glossary-de";

export function buildFaqDE(term: GlossaryTermDE): GlossaryFAQDE[] {
  if (Array.isArray(term.faqs) && term.faqs.length) return term.faqs;
  const faqs: GlossaryFAQDE[] = [];
  const t = term.term;
  if (term.shortDefinition) faqs.push({ q: `Was ist ${t}?`, a: term.shortDefinition });
  if (term.longDefinition?.[0]) faqs.push({ q: `Wie funktioniert ${t} in der Praxis?`, a: term.longDefinition[0] });
  if (term.example) faqs.push({ q: `Beispiel für ${t}`, a: term.example });
  return faqs.slice(0, 3);
}
