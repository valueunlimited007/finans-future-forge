import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

export default function KasinosOm() {
  useEffect(() => {
    const path = window.location.pathname;
    console.info("Mounted page:", path, "source:", "KasinosOm.tsx");
  }, []);

  return (
    <>
      <Helmet>
        <title>Om Kasinos.se - Din pålitliga guide till svenska casinon</title>
        <meta name="description" content="Lär dig mer om Kasinos.se, vårt uppdrag att hjälpa svenskar hitta säkra casinon med svensk licens, och vårt engagemang för ansvarsfullt spelande." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://kasinos.se/om" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Om Kasinos.se - Din pålitliga guide till svenska casinon" />
        <meta property="og:description" content="Lär dig mer om Kasinos.se, vårt uppdrag att hjälpa svenskar hitta säkra casinon med svensk licens, och vårt engagemang för ansvarsfullt spelande." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kasinos.se/om" />
        
        {/* Additional SEO */}
        <meta name="author" content="Kasinos.se" />
        <meta name="publisher" content="Kasinos.se" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <article className="prose prose-lg max-w-none">
            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-4 text-foreground">Om Kasinos.se</h1>
              <p className="text-xl text-muted-foreground">Din pålitliga guide till säkra svenska casinon</p>
            </header>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Vårt uppdrag</h2>
              <p className="mb-4 text-foreground">
                Kasinos.se grundades med målet att hjälpa svenska spelare navigera i den reglerade casino-världen. 
                Vi ger objektiv information och recensioner för att hjälpa dig göra välgrundade val när det gäller svenska casinon med licens från Spelinspektionen.
              </p>
              <p className="mb-4 text-foreground">
                Vår redaktion arbetar dagligen med att granska casinomarknaden, uppdatera bonusar och villkor, samt förmedla viktig information om ansvarsfullt spelande på ett begripligt sätt.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Säkerhet och svensk licens</h2>
              <p className="mb-4 text-foreground">
                Vi recenserar endast casinon som har svensk spellicens från Spelinspektionen. Detta säkerställer att alla casinon vi rekommenderar:
              </p>
              <ul className="mb-4 text-foreground ml-6 space-y-2">
                <li>• Följer svenska spelregler och konsumentskydd</li>
                <li>• Erbjuder verktyg för ansvarsfullt spelande</li>
                <li>• Har säkra betalningsmetoder och snabba uttag</li>
                <li>• Skyddar spelares personuppgifter enligt GDPR</li>
                <li>• Bidrar till svenskt samhälle genom spelskatt</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Ansvarsfullt spelande</h2>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                <p className="text-amber-800 mb-2 font-semibold">
                  Viktigt meddelande om spelansvar
                </p>
                <p className="text-amber-700 mb-2">
                  Vi på Kasinos.se tar spelansvar på allvar. Spel ska vara roligt och aldrig orsaka problem i ditt liv.
                </p>
                <p className="text-amber-700">
                  Om du känner att ditt spelande börjar bli problematiskt, använd verktyg som Spelpaus.se eller kontakta Stödlinjen: 020-819 100.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Redaktionell integritet</h2>
              <p className="mb-4 text-foreground">
                Vi åtar oss att tillhandahålla objektiv, faktabaserad information. Vårt innehåll granskas regelbundet för att säkerställa riktighet och relevans.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">Transparens om affiliatemarknadsföring</h3>
              <div className="bg-muted/50 border border-border rounded-lg p-4 mb-4">
                <p className="text-foreground mb-2">
                  <strong>Viktigt meddelande:</strong> Kasinos.se kan erhålla provision när du klickar på länkar till casinon på vår webbplats. 
                </p>
                <p className="text-foreground mb-2">
                  Detta påverkar inte våra recensioner eller rekommendationer - vi rekommenderar endast casinon som vi anser är säkra och pålitliga för våra läsare. 
                  Alla affiliatelänkar är tydligt märkta.
                </p>
                <p className="text-foreground">
                  Provisionen hjälper oss att hålla webbplatsen kostnadsfri för användare och fortsätta utveckla vårt innehåll om ansvarsfullt spelande.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Kontakta oss</h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-foreground">Kasinos.se</h3>
                <p className="mb-2 text-foreground">
                  <strong>E-post:</strong> hej@kasinos.se
                </p>
                <p className="mb-4 text-foreground">
                  <strong>Sajten drivs av:</strong> Value Unlimited
                </p>
                <p className="text-sm text-muted-foreground">
                  För frågor om casinobonusar eller spelkonton, vänligen kontakta respektive casino direkt.
                </p>
              </div>
            </section>

            <section id="kvalitetsarbete" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Så arbetar vi med kvalitet</h2>
              <p className="mb-6 text-foreground">
                Vi tar kvalitet och spelansvar på allvar. Varje casinorecension genomgår en rigorös process för att säkerställa att du får den mest användbara och korrekta informationen.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                    🔍 Djupgående granskning
                  </h3>
                  <p className="text-sm text-foreground mb-2">
                    Varje casino granskas noggrant där vi testar registreringsprocessen, spelutbud, bonusar, betalningsmetoder och kundtjänst.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Vi kontrollerar alltid att casinot har giltig svensk licens från Spelinspektionen.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                    👥 Expertgranskning
                  </h3>
                  <p className="text-sm text-foreground mb-2">
                    Alla våra recensioner granskas av experter med lång erfarenhet av svenska spelmarknaden och spelreglering.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Våra experter har bakgrund från spelbranschen, juridik och konsumentskydd.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                    📊 Kontinuerlig uppdatering
                  </h3>
                  <p className="text-sm text-foreground mb-2">
                    Vi övervakar casinomarknaden dagligen och uppdaterar våra recensioner så snart bonusar eller villkor förändras.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Varje recension genomgår en fullständig översyn minst en gång per kvartal för att säkerställa fortsatt relevans.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                    ✅ Spelansvar i fokus
                  </h3>
                  <p className="text-sm text-foreground mb-2">
                    Vi utvärderar särskilt noga vilka verktyg för ansvarsfullt spelande varje casino erbjuder och hur lätt de är att använda.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Casinon som inte tar spelansvar på allvar rekommenderas aldrig på vår sajt.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Ansvarsfriskrivning</h2>
              <div className="bg-muted/30 border border-border rounded-lg p-4">
                <p className="text-sm text-foreground mb-2">
                  Informationen på Kasinos.se är endast för allmän information. Spel innehåller alltid risk och kan orsaka beroende. 
                  Spela endast med pengar du har råd att förlora och sätt alltid gränser för ditt spelande.
                </p>
                <p className="text-sm text-foreground mb-2">
                  Bonusar, kampanjer och spelutbud kan ändras utan förvarning. Kontrollera alltid aktuella villkor direkt hos casinot.
                </p>
                <p className="text-sm text-foreground">
                  Denna webbplats riktar sig endast till personer som är 18 år eller äldre och bosatta i Sverige.
                </p>
              </div>
            </section>

            <footer className="text-sm text-muted-foreground border-t border-border pt-4">
              <p>Senast uppdaterad: {new Date().toLocaleDateString('sv-SE')}</p>
            </footer>
          </article>
        </div>
      </main>
    </>
  );
}