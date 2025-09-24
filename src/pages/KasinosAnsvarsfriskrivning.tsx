import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, AlertTriangle, Info } from 'lucide-react';

export default function KasinosAnsvarsfriskrivning() {
  useEffect(() => {
    console.log('KasinosAnsvarsfriskrivning page mounted');
  }, []);

  return (
    <>
      <Helmet>
        <title>Ansvarsfriskrivning - Kasinos.se</title>
        <meta name="description" content="Läs vår ansvarsfriskrivning om spelrisker, juridiskt ansvar och villkor för användning av Kasinos.se casinojämförelsetjänst." />
        <link rel="canonical" href="https://kasinos.se/ansvarsfriskrivning" />
        <meta property="og:title" content="Ansvarsfriskrivning - Kasinos.se" />
        <meta property="og:description" content="Läs vår ansvarsfriskrivning om spelrisker, juridiskt ansvar och villkor för användning av Kasinos.se casinojämförelsetjänst." />
        <meta property="og:url" content="https://kasinos.se/ansvarsfriskrivning" />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Ansvarsfriskrivning</h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <section className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-red-600 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-red-800 mb-3">Viktig varning om spelrisker</h2>
                  <p className="text-red-700 mb-3">
                    <strong>Spel kan vara beroendeframkallande och kan leda till ekonomiska problem.</strong> 
                    Du måste vara 18 år för att spela på casino. Spela endast med pengar du har råd att förlora.
                  </p>
                  <p className="text-red-700">
                    För hjälp och stöd vid spelproblem, kontakta{' '}
                    <a href="https://www.stodlinjen.se" target="_blank" rel="noopener noreferrer" className="underline font-medium">
                      Stödlinjen (020-819 100)
                    </a>
                    {' '}eller använd{' '}
                    <a href="https://spelpaus.se" target="_blank" rel="noopener noreferrer" className="underline font-medium">
                      Spelpaus.se
                    </a>
                    {' '}för självavstängning.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Allmän ansvarsfriskrivning</h2>
              <p>
                Kasinos.se är en oberoende jämförelsewebbplats som tillhandahåller information om online casinon 
                med svensk spellicens. All information på denna webbplats tillhandahålls "som den är" utan några 
                garantier eller utfästelser om riktighet, fullständighet eller aktualitet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Informationsansvar</h2>
              <div className="space-y-4">
                <div className="bg-card p-4 rounded-lg border">
                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-casino-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Casinoinformation</h3>
                      <p className="text-sm text-muted-foreground">
                        Vi strävar efter att hålla all information om casinon aktuell, men casinooperatörer 
                        kan ändra sina villkor, bonusar och spelutbud utan förvarning. Kontrollera alltid 
                        aktuella villkor direkt hos casinot innan du spelar.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-4 rounded-lg border">
                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-casino-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Bonusar och kampanjer</h3>
                      <p className="text-sm text-muted-foreground">
                        Bonuserbjudanden och kampanjer kan ha begränsad giltighetstid och specifika villkor. 
                        Vi ansvarar inte för ändringar eller avslutade kampanjer. Läs alltid bonusvillkoren 
                        på casinots egen webbplats.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-4 rounded-lg border">
                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-casino-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Spellicenser</h3>
                      <p className="text-sm text-muted-foreground">
                        Vi kontrollerar att alla rekommenderade casinon har gyldig svensk spellicens vid 
                        tidpunkten för publicering, men licenser kan återkallas eller ändras. 
                        Kontrollera alltid aktuell licensstatus på Spelinspektionens webbplats.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Ekonomiskt ansvar</h2>
              <p>
                Kasinos.se ansvarar inte för:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ekonomiska förluster från spelande på rekommenderade casinon</li>
                <li>Förlorade insättningar eller problem med uttag från casinon</li>
                <li>Missade bonusar eller kampanjer</li>
                <li>Tekniska problem hos casinooperatörer</li>
                <li>Ändringar i casinovillkor som påverkar ditt spelande</li>
                <li>Spelberoende eller andra negativa konsekvenser av spelande</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Affiliate-relation</h2>
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">Transparens om affiliate-intäkter</h3>
                <p className="text-yellow-700 text-sm">
                  Kasinos.se får affiliate-provision när användare registrerar sig hos våra partnercasinon. 
                  Detta påverkar inte våra recensioner eller rekommendationer, men du bör vara medveten om 
                  denna ekonomiska relation. Vi rekommenderar endast casinon vi anser vara säkra och pålitliga.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Juridisk begränsning</h2>
              <p>
                Kasinos.se:s totala ansvar gentemot användare är begränsat till det belopp som betalats 
                för användning av tjänsten (vilket är noll eftersom tjänsten är gratis). Vi ansvarar 
                inte för indirekta skador, förlorad vinst eller följdskador.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Användaransvar</h2>
              <p>Som användare av Kasinos.se ansvarar du för att:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vara minst 18 år gammal</li>
                <li>Följa svensk spellagstiftning</li>
                <li>Spela ansvarsfullt och inom dina ekonomiska möjligheter</li>
                <li>Kontrollera casinovillkor innan du registrerar dig</li>
                <li>Söka hjälp om du utvecklar spelproblem</li>
                <li>Använda webbplatsen på ett lagligt och etiskt sätt</li>
                <li>Respektera andras upphovsrätt och immateriella rättigheter</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Tredjepartsansvar</h2>
              <p>
                Kasinos.se ansvarar inte för handlingar eller underlåtenhet från:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Casinooperatörer och deras tjänster</li>
                <li>Betalningsleverantörer</li>
                <li>Spelleverantörer och deras spel</li>
                <li>Tredjepartslänkar på vår webbplats</li>
                <li>Andra webbplatser som länkar till oss</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Ändringar av villkor</h2>
              <p>
                Kasinos.se förbehåller sig rätten att när som helst ändra denna ansvarsfriskrivning 
                utan förvarning. Fortsatt användning av webbplatsen efter ändringar innebär att du 
                accepterar de nya villkoren.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Tillämplig lag</h2>
              <p>
                Denna ansvarsfriskrivning och all användning av Kasinos.se regleras av svensk lag. 
                Eventuella tvister ska lösas i svenska domstolar.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
              <p>
                För frågor om denna ansvarsfriskrivning, kontakta oss på{" "}
                <a href="mailto:kontakt@kasinos.se" className="text-casino-primary hover:underline">
                  kontakt@kasinos.se
                </a>
              </p>
            </section>

            <section className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <Shield className="h-6 w-6 text-red-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-red-800 mb-2">Slutlig påminnelse</h3>
                  <p className="text-red-700 text-sm">
                    <strong>Spel är underhållning, inte ett sätt att tjäna pengar.</strong> 
                    Sätt alltid gränser för ditt spelande och spela endast med pengar du har råd att förlora. 
                    Om spelandet inte längre är roligt, sök hjälp omedelbart.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}