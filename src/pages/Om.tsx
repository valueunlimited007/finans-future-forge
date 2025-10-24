import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import SimpleNavigation from "../components/SimpleNavigation";
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

      <SimpleNavigation />
      
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
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Vårt europeiska nätverk</h2>
              <p className="mb-4 text-foreground">
                Finansguiden.se är del av ett europeiskt nätverk av oberoende finansjämförelsesajter. 
                Vår systersajt{" "}
                <a 
                  href="https://finanzen-guide.de" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Finanzen-Guide.de
                </a>
                {" "}är Tysklands ledande jämförelseportal för{" "}
                <a 
                  href="https://finanzen-guide.de/ratenkredit" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Ratenkredite
                </a>
                ,{" "}
                <a 
                  href="https://finanzen-guide.de/unternehmenskredit" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Unternehmenskredite
                </a>
                {" "}och{" "}
                <a 
                  href="https://finanzen-guide.de/kreditkarten" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Kreditkarten
                </a>
                .
              </p>
              <p className="text-foreground">
                Genom detta nätverk kan vi dela expertis, metodologi och bästa praxis över gränserna, 
                vilket höjer kvaliteten på våra tjänster i både Sverige och Tyskland.
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

            <section id="kvalitetsarbete" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Så arbetar vi med kvalitet</h2>
              <p className="mb-6 text-foreground">
                Vi tar kvalitet på allvar. Varje guide genomgår en rigorös process för att säkerställa att du får den mest användbara och korrekta informationen.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                    🔍 Djupgående research
                  </h3>
                  <p className="text-sm text-foreground mb-2">
                    Varje guide kräver 40+ timmar av research där vi analyserar marknaden, jämför hundratals produkter och samlar in aktuella räntor och villkor.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Vi kontaktar finansinstitut direkt för att verifiera information och använder endast officiella källor.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                    👥 Expertgranskning
                  </h3>
                  <p className="text-sm text-foreground mb-2">
                    Alla våra guider granskas av minst två finansexperter med över 10 års branschexpertis inom banking och finansiella tjänster.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Våra experter har bakgrund från svenska storbanker, Finansinspektionen och oberoende rådgivningsbolag.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                    📊 Kontinuerlig uppdatering
                  </h3>
                  <p className="text-sm text-foreground mb-2">
                    Vi övervakar marknaden dagligen och uppdaterar våra guider så snart räntor eller villkor förändras. Automatiska system varnar oss om förändringar.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Varje guide genomgår en fullständig översyn minst en gång per kvartal för att säkerställa fortsatt relevans.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                    ✅ Användartestning
                  </h3>
                  <p className="text-sm text-foreground mb-2">
                    Vi testar våra guider på riktiga användare för att säkerställa att informationen är lätt att förstå och praktiskt användbar.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Feedback från läsare hjälper oss att förbättra och förtydliga vårt innehåll kontinuerligt.
                  </p>
                </div>
              </div>

              <div className="bg-muted/50 border border-border rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold mb-3 text-foreground">Varför så omfattande guider?</h3>
                <p className="text-sm text-foreground mb-2">
                  Finansiella beslut påverkar ditt liv under lång tid. Vi investerar tid i att skapa omfattande, sammanhängande guider istället för korta artiklar eftersom:
                </p>
                <ul className="text-sm text-foreground space-y-1 ml-4">
                  <li>• Du får hela bilden, inte bara fragment av information</li>
                  <li>• Sammanhang hjälper dig förstå <em>varför</em> ett alternativ är bättre</li>
                  <li>• Du slipper leta information från flera källor</li>
                  <li>• Praktiska exempel visar hur teorin fungerar i verkligheten</li>
                </ul>
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