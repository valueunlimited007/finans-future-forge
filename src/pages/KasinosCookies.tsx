import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export default function KasinosCookies() {
  useEffect(() => {
    console.log('KasinosCookies page mounted');
  }, []);

  return (
    <>
      <Helmet>
        <title>Cookies - Kasinos.se</title>
        <meta name="description" content="Information om hur Kasinos.se använder cookies för att förbättra din upplevelse på vår casinojämförelsewebbplats." />
        <link rel="canonical" href="https://kasinos.se/cookies" />
        <meta property="og:title" content="Cookies - Kasinos.se" />
        <meta property="og:description" content="Information om hur Kasinos.se använder cookies för att förbättra din upplevelse på vår casinojämförelsewebbplats." />
        <meta property="og:url" content="https://kasinos.se/cookies" />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Cookies</h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Vad är cookies?</h2>
              <p>
                Cookies är små textfiler som lagras på din dator eller mobila enhet när du besöker en webbplats. 
                De används för att förbättra din användarupplevelse och för att webbplatsen ska fungera korrekt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Hur vi använder cookies</h2>
              <p>På Kasinos.se använder vi cookies för följande ändamål:</p>
              
              <h3 className="text-xl font-medium mt-6 mb-3">Nödvändiga cookies</h3>
              <p>
                Dessa cookies är nödvändiga för att webbplatsen ska fungera korrekt och kan inte stängas av. 
                De lagrar inga personligt identifierbara uppgifter.
              </p>

              <h3 className="text-xl font-medium mt-6 mb-3">Analys-cookies</h3>
              <p>
                Vi använder Google Analytics för att förstå hur besökare använder vår casinojämförelsewebbplats. 
                Dessa cookies hjälper oss att förbättra innehåll och funktionalitet för våra casinorecensioner.
              </p>

              <h3 className="text-xl font-medium mt-6 mb-3">Reklam-cookies</h3>
              <p>
                Vi använder Google AdSense för att visa relevanta annonser relaterade till online casinon. 
                Dessa cookies kan användas för att personalisera annonsupplevelsen baserat på ditt webbläsarbeteende.
              </p>

              <h3 className="text-xl font-medium mt-6 mb-3">Affiliate-cookies</h3>
              <p>
                Vi använder cookies för att följa upp klick på våra partnerlänkar till casinon. 
                Detta hjälper oss att få provision när du registrerar dig hos våra casinopartners, 
                vilket inte påverkar våra recensioner eller rekommendationer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Tredjepartscookies</h2>
              <p>Vår casinowebbplats använder tjänster från följande tredjeparter:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Google Analytics:</strong> För webbplatsanalys och statistik</li>
                <li><strong>Google AdSense:</strong> För att visa casinorelaterade annonser</li>
                <li><strong>Adtraction:</strong> För affiliateföljning av casinopartners</li>
                <li><strong>Casinooperatörer:</strong> Cookies från våra partnercasinon när du klickar på deras länkar</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Spelrelaterade cookies</h2>
              <p>
                Eftersom vi är en casinojämförelsewebbplats kan våra partnercasinon sätta cookies när du klickar på deras länkar. 
                Dessa cookies kan användas för:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Spårning av registreringar och insättningar</li>
                <li>Bonusspårning och kampanjer</li>
                <li>Spelhistorik och preferenser</li>
                <li>Ansvarsfull spelande-verktyg</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Hantera dina cookie-inställningar</h2>
              <p>
                Du kan när som helst ändra dina cookie-inställningar i din webbläsare. 
                Observera att om du blockerar vissa cookies kan det påverka hur webbplatsen fungerar.
              </p>
              <p>
                De flesta webbläsare tillåter dig att:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Se vilka cookies som lagrats</li>
                <li>Blockera cookies från specifika webbplatser</li>
                <li>Blockera tredjepartscookies</li>
                <li>Rensa alla cookies</li>
                <li>Ställa in varningar innan cookies accepteras</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Ansvarsfull spelande och cookies</h2>
              <p>
                Vi använder cookies för att stödja ansvarsfull spelande genom att:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Visa information om ansvarsfull spelande</li>
                <li>Komma ihåg dina preferenser för spelvarningar</li>
                <li>Samla in data för att förbättra våra ansvarsfulla spelverktyg</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Kontakta oss</h2>
              <p>
                Om du har frågor om vår användning av cookies, kontakta oss på{" "}
                <a href="mailto:kontakt@kasinos.se" className="text-casino-primary hover:underline">
                  kontakt@kasinos.se
                </a>
              </p>
            </section>

            <section className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Viktigt:</strong> Du måste vara 18 år för att spela på casino. Spel kan vara beroendeframkallande. 
                För hjälp och stöd, kontakta{' '}
                <a href="https://www.stodlinjen.se" target="_blank" rel="noopener noreferrer" className="underline">
                  Stödlinjen
                </a>
                {' '}eller använd{' '}
                <a href="https://spelpaus.se" target="_blank" rel="noopener noreferrer" className="underline">
                  Spelpaus.se
                </a>
                {' '}för självavstängning.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}