import React from "react";
import { Link } from "react-router-dom";
import type { GlossaryTerm as GlossaryItem } from "@/data/glossary";

interface AlphabeticalGlossaryListProps {
  items: GlossaryItem[];
}

const AlphabeticalGlossaryList: React.FC<AlphabeticalGlossaryListProps> = ({ items }) => {
  if (!items.length) {
    return <p className="text-muted-foreground">Inga träffar.</p>;
  }

  // Group items by first letter
  const groupedItems = items.reduce((acc, item) => {
    const firstLetter = item.term.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(item);
    return acc;
  }, {} as Record<string, GlossaryItem[]>);

  // Sort letters according to Swedish standard: numbers first, then A-Z with Å, Ä, Ö at end
  const sortedLetters = Object.keys(groupedItems).sort((a, b) => {
    // Numbers come first
    const aIsNumber = /^\d/.test(a);
    const bIsNumber = /^\d/.test(b);
    
    if (aIsNumber && !bIsNumber) return -1;
    if (!aIsNumber && bIsNumber) return 1;
    if (aIsNumber && bIsNumber) return a.localeCompare(b, 'sv-SE', { numeric: true });
    
    // Special handling for Swedish characters - Å, Ä, Ö should come at the end
    const swedishOrder = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','Å','Ä','Ö'];
    const aIndex = swedishOrder.indexOf(a);
    const bIndex = swedishOrder.indexOf(b);
    
    if (aIndex !== -1 && bIndex !== -1) {
      return aIndex - bIndex;
    }
    
    // Fallback to Swedish locale comparison
    return a.localeCompare(b, 'sv-SE');
  });

  return (
    <div className="space-y-8">
      {/* Alphabetical navigation */}
      <nav className="flex flex-wrap gap-2 p-4 bg-muted/50 rounded-lg">
        {sortedLetters.map((letter) => (
          <a
            key={letter}
            href={`#letter-${letter}`}
            className="px-3 py-1 text-sm font-medium bg-background border rounded hover:bg-muted transition-colors"
          >
            {letter}
          </a>
        ))}
      </nav>

      {/* Terms grouped by letter */}
      {sortedLetters.map((letter) => (
        <section key={letter} id={`letter-${letter}`} className="scroll-mt-20">
          <h2 className="text-2xl font-bold mb-4 text-foreground border-b border-border pb-2">
            {letter}
          </h2>
          <ul className="space-y-3">
            {groupedItems[letter].map((item) => (
              <li key={item.slug} className="rounded-lg border border-border bg-card text-card-foreground p-4">
                <Link 
                  to={`/ordlista/${item.slug}`} 
                  className="font-medium text-primary hover:underline underline-offset-2"
                >
                  {item.term}
                </Link>
                {item.shortDefinition && (
                  <p className="mt-1 text-sm text-muted-foreground">{item.shortDefinition}</p>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default AlphabeticalGlossaryList;