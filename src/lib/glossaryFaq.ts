import type { GlossaryFAQ, GlossaryTerm } from "@/data/glossary";

export function buildFaq(term: GlossaryTerm): GlossaryFAQ[] {
  if (Array.isArray(term.faqs) && term.faqs.length) return term.faqs;
  const faqs: GlossaryFAQ[] = [];
  const t = term.term;
  if (term.shortDefinition) faqs.push({ q: `Vad är ${t}?`, a: term.shortDefinition });
  if (term.longDefinition?.[0]) faqs.push({ q: `Hur fungerar ${t} i praktiken?`, a: term.longDefinition[0] });
  if (term.example) faqs.push({ q: `Exempel på ${t}`, a: term.example });
  return faqs.slice(0, 3);
}
