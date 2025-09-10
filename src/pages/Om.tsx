import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import LegacyHeader from "../components/LegacyHeader";
import LegacyFooter from "../components/LegacyFooter";

export default function Om() {
  useEffect(() => {
    const path = window.location.pathname;
    console.info("Mounted page:", path, "source:", "Om.tsx");
  }, []);

  return (
    <>
      <Helmet>
        <title>Om Finansguiden.se - Din pålitliga finansiella rådgivare</title>
        <meta name="description" content="Lär dig mer om Finansguiden.se, vårt uppdrag att hjälpa svenskar göra smarta finansiella beslut, och vår redaktionella integritet." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://finansguiden.se/om" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Om Finansguiden.se - Din pålitliga finansiella rådgivare" />
        <meta property="og:description" content="Lär dig mer om Finansguiden.se, vårt uppdrag att hjälpa svenskar göra smarta finansiella beslut, och vår redaktionella integritet." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://finansguiden.se/om" />
        
        {/* Additional SEO */}
        <meta name="author" content="Finansguiden.se" />
        <meta name="publisher" content="Finansguiden.se" />
      </Helmet>

      <LegacyHeader />
      
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <article className="prose prose-lg max-w-none">
            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-4 text-foreground">Om Finansguiden.se</h1>
              <p className="text-xl text-muted-foreground">Din pålitliga partner för smarta finansiella beslut</p>
            </header>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Vårt uppdrag</h2>
              <p className="mb-4 text-foreground">
                Finansguiden.se grundades med målet att hjälpa svenska konsumenter att navigera i den komplexa finansiella världen. 
                Vi ger opartisk information och jämförelser för att hjälpa dig göra välgrundade beslut om lån, kreditkort och andra finansiella produkter.
              </p>
              <p className="mb-4 text-foreground">
                Vår redaktion arbetar dagligen med att granska marknaden, uppdatera räntor och villkor, samt förmedla komplex finansiell information på ett begripligt sätt.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Redaktionell integritet</h2>
              <p className="mb-4 text-foreground">
                Vi åtar oss att tillhandahålla objektiv, faktabaserad information. Vårt innehåll granskas regelbundet för att säkerställa riktighet och relevans.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">Transparens om affiliatemarknadsföring</h3>
              <div className="bg-muted/50 border border-border rounded-lg p-4 mb-4">
                <p className="text-foreground mb-2">
                  <strong>Viktigt meddelande:</strong> Finansguiden.se kan erhålla provision när du klickar på länkar till finansiella produkter eller tjänster på vår webbplats. 
                </p>
                <p className="text-foreground mb-2">
                  Detta påverkar inte våra recensioner eller rekommendationer - vi rekommenderar endast produkter som vi anser kan vara till nytta för våra läsare. 
                  Alla affiliatelänkar är tydligt märkta.
                </p>
                <p className="text-foreground">
                  Provisionen hjälper oss att hålla webbplatsen kostnadsfri för användare och fortsätta utveckla vårt innehåll.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Kontakta oss</h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-foreground">Finansguiden.se</h3>
                <p className="mb-2 text-foreground">
                  <strong>E-post:</strong> hej@finansguiden.se
                </p>
                <p className="mb-4 text-foreground">
                  <strong>Sajten drivs av:</strong> Value Unlimited
                </p>
                <p className="text-sm text-muted-foreground">
                  För frågor om finansiella produkter, vänligen kontakta respektive leverantör direkt.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Ansvarsfriskrivning</h2>
              <div className="bg-muted/30 border border-border rounded-lg p-4">
                <p className="text-sm text-foreground mb-2">
                  Informationen på Finansguiden.se är endast för allmän information och utgör inte finansiell rådgivning. 
                  Vi rekommenderar alltid att du konsulterar en kvalificerad finansiell rådgivare innan du fattar viktiga ekonomiska beslut.
                </p>
                <p className="text-sm text-foreground">
                  Räntor, villkor och produktinformation kan ändras utan förvarning. Kontrollera alltid aktuella villkor direkt hos leverantören.
                </p>
              </div>
            </section>

            <footer className="text-sm text-muted-foreground border-t border-border pt-4">
              <p>Senast uppdaterad: {new Date().toLocaleDateString('sv-SE')}</p>
            </footer>
          </article>
        </div>
      </main>

      <LegacyFooter />
    </>
  );
}