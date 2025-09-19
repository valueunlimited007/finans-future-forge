import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ModernNavigation from "../components/ModernNavigation";
import LegacyFooter from "../components/LegacyFooter";
import { websiteJsonLd } from "@/lib/jsonld";

const safeEvent = (name: string, params: Record<string, any>) => {
  try {
    if (typeof (window as any).gtag === "function") {
      (window as any).gtag("event", name, params);
    } else {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({ event: name, ...params });
    }
  } catch {}
};

export default function Sajtkarta() {
  useEffect(() => {
    safeEvent("sitemap_view", { page: location.pathname });
  }, []);

  const jsonld = websiteJsonLd();

  return (
    <>
      <ModernNavigation />
      <main className="mx-auto max-w-4xl px-4 py-8">
        <Helmet>
          <title>Sajtkarta - Översikt av Finansguiden.se</title>
          <meta name="description" content="Hitta enkelt runt på Finansguiden.se. Översikt över alla våra guider om lån, kreditkort, sparande och privatekonomi." />
          <link rel="canonical" href="https://finansguiden.se/sajtkarta" />
          <script type="application/ld+json">
            {JSON.stringify(jsonld)}
          </script>
        </Helmet>

        <header className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Sajtkarta</h1>
          <p className="text-xl text-muted-foreground">
            Hitta enkelt runt på Finansguiden.se. Här är en översikt över alla våra guider och verktyg.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Main Categories */}
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-border pb-2">
                Huvudkategorier
              </h2>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/privatlan" 
                    className="block p-4 rounded-lg border border-border bg-card hover:bg-muted transition-colors"
                  >
                    <h3 className="font-medium text-primary">Privatlån</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Jämför privatlån och hitta bästa räntan för dina behov
                    </p>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/kreditkort" 
                    className="block p-4 rounded-lg border border-border bg-card hover:bg-muted transition-colors"
                  >
                    <h3 className="font-medium text-primary">Kreditkort</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Hitta rätt kreditkort med bästa villkor och förmåner
                    </p>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/lan-utan-uc" 
                    className="block p-4 rounded-lg border border-border bg-card hover:bg-muted transition-colors"
                  >
                    <h3 className="font-medium text-primary">Lån utan UC</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Få lån utan kreditupplysning - jämför alternativ
                    </p>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/foretagslan" 
                    className="block p-4 rounded-lg border border-border bg-card hover:bg-muted transition-colors"
                  >
                    <h3 className="font-medium text-primary">Företagslån</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Finansiering för företag och egenföretagare
                    </p>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-border pb-2">
                Ordlista & Referenser
              </h2>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/ordlista" 
                    className="block p-4 rounded-lg border border-border bg-card hover:bg-muted transition-colors"
                  >
                    <h3 className="font-medium text-primary">Finansordlista A-Ö</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Över 400 finansbegrepp förklarade på svenska
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          {/* Information & Legal */}
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-border pb-2">
                Information & Villkor
              </h2>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/integritetspolicy" 
                    className="block p-4 rounded-lg border border-border bg-card hover:bg-muted transition-colors"
                  >
                    <h3 className="font-medium text-primary">Integritetspolicy</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Hur vi hanterar dina personuppgifter
                    </p>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/cookies" 
                    className="block p-4 rounded-lg border border-border bg-card hover:bg-muted transition-colors"
                  >
                    <h3 className="font-medium text-primary">Cookies</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Information om cookies och spårning
                    </p>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-3 text-foreground">
                Har du frågor?
              </h2>
              <p className="text-muted-foreground mb-4">
                Hittar du inte det du söker? Kontakta oss eller kolla in vår ordlista för mer information.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link 
                  to="/ordlista" 
                  className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  Ordlista
                </Link>
                <a 
                  href="mailto:hej@finansguiden.se" 
                  className="inline-flex items-center px-4 py-2 border border-border rounded-md hover:bg-muted transition-colors"
                >
                  Kontakt
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>
            Sajtkarta uppdaterad: {new Date().toLocaleDateString('sv-SE')} | 
            <Link to="/" className="ml-2 hover:underline">Tillbaka till startsidan</Link>
          </p>
        </div>
      </main>
      <LegacyFooter />
    </>
  );
}