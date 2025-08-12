import React from "react";
import { Link } from "react-router-dom";
import { glossary } from "@/data/glossary";

// Precompute terms sorted by length (desc) to prefer longer matches first
const TERMS = glossary
  .map((t) => ({ term: t.term, slug: t.slug }))
  .sort((a, b) => b.term.length - a.term.length);

const escapeReg = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export function autolink(text: string): React.ReactNode {
  if (!text) return text;
  const current = (typeof window !== "undefined" && window.location.pathname.startsWith("/ordlista/"))
    ? window.location.pathname.split("/").pop() || ""
    : "";

  let firstMatchIndex = -1;
  let matchTerm: { term: string; slug: string } | null = null;
  for (const t of TERMS) {
    if (t.slug === current) continue; // avoid self-linking
    const re = new RegExp(`(^|\\b)(${escapeReg(t.term)})(\\b|$)`, "i");
    const m = text.match(re);
    if (m) {
      firstMatchIndex = m.index ?? -1;
      matchTerm = t;
      break;
    }
  }

  if (!matchTerm || firstMatchIndex < 0) return text;

  const re = new RegExp(`(^|\\b)(${escapeReg(matchTerm.term)})(\\b|$)`, "i");
  const parts = text.split(re);
  // parts: [prefix, boundary, term, boundary, suffix] depending on split
  const nodes: React.ReactNode[] = [];
  for (let i = 0; i < parts.length; i++) {
    const chunk = parts[i];
    if (!chunk) continue;
    if (i === 2) {
      nodes.push(
        <Link key={`lk`} to={`/ordlista/${matchTerm.slug}`} className="underline underline-offset-2 hover:no-underline">{chunk}</Link>
      );
    } else {
      nodes.push(chunk);
    }
  }
  return <>{nodes}</>;
}
