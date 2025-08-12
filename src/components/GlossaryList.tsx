import React from "react";
import { Link } from "react-router-dom";
import type { GlossaryTerm as GlossaryItem } from "@/data/glossary";

interface GlossaryListProps {
  items: GlossaryItem[];
}

const GlossaryList: React.FC<GlossaryListProps> = ({ items }) => {
  if (!items.length) {
    return <p className="text-muted-foreground">Inga träffar.</p>;
  }

  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item.slug} className="rounded-lg border border-border bg-card text-card-foreground p-4">
          <Link to={`/ordlista/${item.slug}`} className="font-medium underline underline-offset-2 hover:no-underline">
            {item.term}
          </Link>
          {item.shortDefinition && (
            <p className="mt-1 text-sm text-muted-foreground">{item.shortDefinition}</p>
          )}
        </li>
      ))}
    </ul>
  );
};

export default GlossaryList;
