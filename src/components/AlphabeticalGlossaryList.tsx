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

  // Sort letters alphabetically
  const sortedLetters = Object.keys(groupedItems).sort();

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