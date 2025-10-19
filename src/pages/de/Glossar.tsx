import { Helmet } from "react-helmet-async";
import { getSiteConfig } from "@/lib/siteConfig";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BookOpen, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

// Sample German financial terms - full glossary would come from a data file
const GERMAN_TERMS = [
  {
    letter: "A",
    terms: [
      { slug: "abgeltungssteuer", title: "Abgeltungssteuer", preview: "Steuer auf Kapitalerträge in Deutschland" },
      { slug: "annuitaet", title: "Annuität", preview: "Gleichbleibende Rate zur Tilgung eines Darlehens" },
      { slug: "apr", title: "APR (Annual Percentage Rate)", preview: "Jährlicher Prozentsatz der Gesamtkosten eines Kredits" },
    ]
  },
  {
    letter: "B",
    terms: [
      { slug: "bafin", title: "BaFin", preview: "Bundesanstalt für Finanzdienstleistungsaufsicht" },
      { slug: "bonität", title: "Bonität", preview: "Kreditwürdigkeit einer Person oder eines Unternehmens" },
    ]
  },
  {
    letter: "E",
    terms: [
      { slug: "effektivzins", title: "Effektivzins", preview: "Zinssatz inklusive aller Kreditkosten" },
      { slug: "eigenkapital", title: "Eigenkapital", preview: "Eigene finanzielle Mittel ohne Fremdkapital" },
    ]
  },
  {
    letter: "K",
    terms: [
      { slug: "kreditwürdigkeit", title: "Kreditwürdigkeit", preview: "Fähigkeit, einen Kredit zurückzuzahlen" },
      { slug: "kontokorrent", title: "Kontokorrentkredit", preview: "Dispositionskredit auf dem Girokonto" },
    ]
  },
  {
    letter: "S",
    terms: [
      { slug: "schufa", title: "SCHUFA", preview: "Schutzgemeinschaft für allgemeine Kreditsicherung" },
      { slug: "sollzins", title: "Sollzins", preview: "Nominalzins ohne Nebenkosten" },
      { slug: "sondertilgung", title: "Sondertilgung", preview: "Außerplanmäßige Rückzahlung eines Kredits" },
    ]
  },
  {
    letter: "T",
    terms: [
      { slug: "tilgung", title: "Tilgung", preview: "Rückzahlung eines Kredits oder Darlehens" },
    ]
  },
  {
    letter: "U",
    terms: [
      { slug: "umschuldung", title: "Umschuldung", preview: "Ablösung eines Kredits durch einen neuen Kredit" },
    ]
  },
  {
    letter: "Z",
    terms: [
      { slug: "zinssatz", title: "Zinssatz", preview: "Preis für geliehenes Geld in Prozent" },
    ]
  }
];

export default function GlossarDE() {
  const siteConfig = getSiteConfig();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTerms = GERMAN_TERMS.map(group => ({
    ...group,
    terms: group.terms.filter(term =>
      term.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.preview.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(group => group.terms.length > 0);

  return (
    <>
      <Helmet>
        <title>Finanz-Glossar - Alle Begriffe erklärt | {siteConfig.name}</title>
        <meta 
          name="description" 
          content="Umfassendes Finanz-Glossar mit über 600 Begriffen. Von Abgeltungssteuer bis Zinssatz - verständlich erklärt." 
        />
        <link rel="canonical" href={`https://${siteConfig.domain}/glossar`} />
      </Helmet>

      <div className="container mx-auto max-w-6xl px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Finanz-Glossar</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Alle wichtigen Finanzbegriffe verständlich erklärt. Von A bis Z.
          </p>
        </div>

        {/* Search */}
        <Card className="mb-12">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Begriff suchen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>
          </CardContent>
        </Card>

        {/* Terms List */}
        <div className="space-y-8">
          {filteredTerms.map((group) => (
            <Card key={group.letter}>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">{group.letter}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {group.terms.map((term) => (
                    <Link
                      key={term.slug}
                      to={`/glossar/${term.slug}`}
                      className="p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                    >
                      <h3 className="font-semibold text-lg mb-1">{term.title}</h3>
                      <p className="text-sm text-muted-foreground">{term.preview}</p>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTerms.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">
                Keine Begriffe gefunden für "{searchQuery}"
              </p>
            </CardContent>
          </Card>
        )}

        {/* Info Box */}
        <Card className="mt-12 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-lg mb-3">💡 Hinweis</h3>
            <p className="text-sm text-muted-foreground">
              Unser Finanz-Glossar wird ständig erweitert und aktualisiert. 
              Fehlt Ihnen ein Begriff? Schreiben Sie uns an{" "}
              <a href="mailto:info@finanzen-guide.de" className="text-primary hover:underline">
                info@finanzen-guide.de
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
