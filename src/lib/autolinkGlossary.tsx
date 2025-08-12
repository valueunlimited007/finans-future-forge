import React from "react";
import { Link } from "react-router-dom";
import { glossary } from "@/data/glossary";

// Build a simple index of terms to slugs (sorted by term length desc to prefer longer matches)
const TERMS = glossary
  .map((t) => ({ term: t.term, slug: t.slug }))
  .sort((a, b) => b.term.length - a.term.length);

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Autolink the first occurrence of any known glossary term within a plain text string
export function autolinkString(text: string, currentSlug?: string) {
  let out = escapeHtml(text);
  for (const { term, slug } of TERMS) {
    if (currentSlug && slug === currentSlug) continue; // avoid self-link
    const pattern = new RegExp(
      `(^|\\b)(${term.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&")})(\\b|$)`,
      "i"
    );
    if (pattern.test(out)) {
      out = out.replace(
        pattern,
        (_m, p1, p2, p3) => `${p1}<a href="/ordlista/${slug}" class="underline underline-offset-2 hover:no-underline">${p2}</a>${p3}`
      );
      break; // only first occurrence across all terms
    }
  }
  return out;
}

export const AutoLinkedText: React.FC<{ text?: string; currentSlug?: string }> = ({ text = "", currentSlug }) => {
  const html = autolinkString(text, currentSlug);
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
};
