import React from "react";
import { Link } from "react-router-dom";
import { glossary } from "@/data/glossary";
import { INTERNAL_LINKS_SORTED } from "./internalLinks";

// Precompute glossary terms sorted by length (desc) to prefer longer matches first
const GLOSSARY_TERMS = glossary
  .map((t) => ({ term: t.term, slug: t.slug, type: 'glossary' as const }))
  .sort((a, b) => b.term.length - a.term.length);

// New privatlan spokes
const PRIVATLAN_SPOKES = [
  { term: "bästa privatlån", path: "/privatlan/basta" },
  { term: "jämför privatlån", path: "/privatlan/jamfor" },
  { term: "räntejämförelse privatlån", path: "/privatlan/rantejamforelse" },
  { term: "räntejämförelse", path: "/privatlan/rantejamforelse" },
  { term: "lån med betalningsanmärkning", path: "/privatlan/lan-med-betalningsanmarkning" },
  { term: "betalningsanmärkning", path: "/privatlan/lan-med-betalningsanmarkning" }
];

// Combine internal links, privatlan spokes and glossary terms
const ALL_LINKABLE_TERMS = [
  ...INTERNAL_LINKS_SORTED.map(({ term, path }) => ({ term, path, type: 'internal' as const })),
  ...PRIVATLAN_SPOKES.map(({ term, path }) => ({ term, path, type: 'internal' as const })),
  ...GLOSSARY_TERMS.map(({ term, slug }) => ({ term, path: `/ordlista/${slug}`, type: 'glossary' as const }))
].sort((a, b) => b.term.length - a.term.length);

const escapeReg = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export function autolink(text: string): React.ReactNode {
  if (!text) return text;
  
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "";
  
  // Find all matches in the text
  interface Match {
    term: string;
    path: string;
    type: 'internal' | 'glossary';
    index: number;
    length: number;
  }
  
  const matches: Match[] = [];
  const processedRanges: Array<[number, number]> = [];
  
  for (const linkable of ALL_LINKABLE_TERMS) {
    // Skip self-linking
    if (currentPath === linkable.path) continue;
    
    const re = new RegExp(`(^|\\b)(${escapeReg(linkable.term)})(\\b|$)`, "gi");
    let match;
    
    while ((match = re.exec(text)) !== null) {
      const matchStart = match.index + match[1].length;
      const matchEnd = matchStart + match[2].length;
      
      // Check if this range overlaps with an already processed range
      const overlaps = processedRanges.some(([start, end]) => 
        (matchStart >= start && matchStart < end) || (matchEnd > start && matchEnd <= end)
      );
      
      if (!overlaps) {
        matches.push({
          term: match[2],
          path: linkable.path,
          type: linkable.type,
          index: matchStart,
          length: match[2].length
        });
        processedRanges.push([matchStart, matchEnd]);
        break; // Only match once per term
      }
    }
  }
  
  if (matches.length === 0) return text;
  
  // Sort matches by index
  matches.sort((a, b) => a.index - b.index);
  
  // Build the result with links
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  
  matches.forEach((match, i) => {
    // Add text before the match
    if (match.index > lastIndex) {
      nodes.push(text.substring(lastIndex, match.index));
    }
    
    // Add the link
    const linkClass = match.type === 'internal' 
      ? "font-medium text-primary underline underline-offset-2 hover:no-underline" 
      : "underline underline-offset-2 hover:no-underline";
    
    nodes.push(
      <Link key={`lk-${i}`} to={match.path} className={linkClass}>
        {match.term}
      </Link>
    );
    
    lastIndex = match.index + match.length;
  });
  
  // Add remaining text
  if (lastIndex < text.length) {
    nodes.push(text.substring(lastIndex));
  }
  
  return <>{nodes}</>;
}
