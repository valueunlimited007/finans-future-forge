import React from "react";
import { Helmet } from "react-helmet-async";
import ModernNavigation from "@/components/ModernNavigation";
import LegacyFooter from "@/components/LegacyFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Search, MessageCircle, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const NotFoundBranded = () => {
  const navigate = useNavigate();

  const popularPages = [
    { title: "Privatlån", href: "/privatlan", description: "Jämför privatlån från alla banker" },
    { title: "Kreditkort", href: "/kreditkort", description: "Hitta bästa kreditkortet 2025" },
    { title: "Lån utan UC", href: "/lan-utan-uc", description: "Långivare som inte UC-kontrollerar" },
    { title: "Företagslån", href: "/foretagslan", description: "Finansiering för företag" }
  ];

  return (
    <>
      <Helmet>
        <title>Sidan hittades inte (404) | Finansguiden.se</title>
        <meta 
          name="description" 
          content="Sidan du söker finns inte. Besök vår startsida eller använd sökfunktionen för att hitta det du letar efter." 
        />
      </Helmet>

      <ModernNavigation />
      
      <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            {/* 404 Header */}
            <div className="mb-12">
              <div className="text-8xl font-bold text-primary/20 mb-4">404</div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Sidan hittades inte
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Sidan du söker finns inte eller har flyttats. Men ingen fara - 
                vi hjälper dig hitta det du letar efter!
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button asChild className="min-w-[200px]">
                <Link to="/">
                  <Home className="h-4 w-4 mr-2" />
                  Till startsidan
                </Link>
              </Button>
              
              <Button variant="outline" onClick={() => navigate(-1)} className="min-w-[200px]">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Gå tillbaka
              </Button>
              
              <Button variant="outline" asChild className="min-w-[200px]">
                <Link to="/om">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Om oss
                </Link>
              </Button>
            </div>

            {/* Popular Pages */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Populära sidor
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {popularPages.map((page) => (
                  <Card key={page.href} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4 text-center">
                      <h3 className="font-semibold text-foreground mb-2">
                        {page.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {page.description}
                      </p>
                      <Button asChild variant="outline" size="sm" className="w-full">
                        <Link to={page.href}>
                          Besök sida
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Search Suggestion */}
            <section className="mt-16">
              <div className="bg-muted/50 rounded-lg p-8">
                <Search className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Hittar du fortfarande inte det du söker?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Kolla vår sajtkarta eller kontakta oss så hjälper vi dig hitta rätt information.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="outline">
                    <Link to="/sajtkarta">
                      Visa sajtkarta
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/ordlista">
                      Sök i ordlistan
                    </Link>
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <LegacyFooter />
    </>
  );
};

export default NotFoundBranded;