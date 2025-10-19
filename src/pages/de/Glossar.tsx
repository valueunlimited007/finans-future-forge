import { Helmet } from "react-helmet-async";
import { getSiteConfig } from "@/lib/siteConfig";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BookOpen, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { getGlossaryByLetter } from "@/data/glossary-de";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";

export default function GlossarDE() {
  const siteConfig = getSiteConfig();
  const [searchQuery, setSearchQuery] = useState("");
  const allTerms = getGlossaryByLetter();

  const breadcrumbItems = [
    { label: "Startseite", href: "/" },
    { label: "Glossar", href: "/glossar" }
  ];

  const filteredTerms = allTerms.map(group => ({
    ...group,
    terms: group.terms.filter(term =>
      term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.shortDefinition.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(group => group.terms.length > 0);

  return (
    <>
      <Helmet>
        <title>Finanz-Glossar - Über 600 Begriffe erklärt | {siteConfig.name}</title>
        <meta 
          name="description" 
          content="Deutschlands umfassendstes Finanz-Glossar mit über 600 Begriffen. Von Abgeltungssteuer bis Zinseszins - alle Finanzterme verständlich erklärt für bessere Kreditentscheidungen." 
        />
        <meta name="keywords" content="Finanzlexikon, Kreditbegriffe, Zinsen erklärt, Tilgung, SCHUFA, Bonität, Effektivzins, Baufinanzierung, Ratenkredit" />
        <meta property="og:title" content="Finanz-Glossar - Über 600 Begriffe erklärt" />
        <meta property="og:description" content="Deutschlands umfassendstes Finanz-Glossar. Alle wichtigen Kreditbegriffe verständlich erklärt." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://${siteConfig.domain}/glossar`} />
      </Helmet>

      {/* Breadcrumbs */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto max-w-6xl px-4">
          <CustomBreadcrumb items={breadcrumbItems} />
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Finanz-Glossar: Über 600 Begriffe
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Deutschlands umfassendstes Finanzlexikon. Alle wichtigen Kredit- und Finanzbegriffe 
            verständlich erklärt - von Abgeltungssteuer bis Zinseszins.
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
                      className="block p-4 rounded-lg border hover:bg-muted/50 hover:shadow-md transition-all"
                    >
                      <h3 className="font-semibold text-lg mb-1">{term.term}</h3>
                      <p className="text-sm text-muted-foreground">{term.shortDefinition}</p>
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

        {/* Info und SEO Box */}
        <Card className="mt-12 bg-primary/5 border-primary/20">
          <CardContent className="pt-6 space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-3">💡 Über unser Finanz-Glossar</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Unser Finanz-Glossar wird täglich aktualisiert und erweitert, um Ihnen die 
                aktuellsten und relevantesten Informationen zu bieten. Mit über 600 Begriffen 
                aus den Bereichen Kredite, Zinsen, Immobilienfinanzierung, Investment und 
                Steuern ist es Deutschlands umfassendste Quelle für Finanzwissen.
              </p>
              <p className="text-sm text-muted-foreground">
                Fehlt Ihnen ein Begriff oder haben Sie Fragen? Schreiben Sie uns an{" "}
                <a href="mailto:hallo@finanzen-guide.de" className="text-primary hover:underline font-medium">
                  hallo@finanzen-guide.de
                </a>
              </p>
            </div>
            
            <div className="border-t pt-4">
              <h4 className="font-semibold mb-2">Warum ist Finanzwissen wichtig?</h4>
              <p className="text-sm text-muted-foreground">
                Das Verständnis von Finanzbegriffen hilft Ihnen, bessere Kreditentscheidungen 
                zu treffen, versteckte Kosten zu erkennen und Ihr Geld optimal zu verwalten. 
                Ob Sie einen Ratenkredit, eine Baufinanzierung oder einen Unternehmenskredit 
                suchen - fundiertes Wissen spart Geld und schützt vor teuren Fehlentscheidungen.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
