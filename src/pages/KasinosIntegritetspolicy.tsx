import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export default function KasinosIntegritetspolicy() {
  useEffect(() => {
    console.log('KasinosIntegritetspolicy page mounted');
  }, []);

  return (
    <>
      <Helmet>
        <title>Integritetspolicy - Kasinos.se</title>
        <meta name="description" content="Läs om hur Kasinos.se samlar in, använder och skyddar dina personuppgifter när du använder vår casinojämförelsetjänst." />
        <link rel="canonical" href="https://kasinos.se/integritetspolicy" />
        <meta property="og:title" content="Integritetspolicy - Kasinos.se" />
        <meta property="og:description" content="Läs om hur Kasinos.se samlar in, använder och skyddar dina personuppgifter när du använder vår casinojämförelsetjänst." />
        <meta property="og:url" content="https://kasinos.se/integritetspolicy" />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Integritetspolicy</h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Inledning</h2>
              <p>
                Kasinos.se är en jämförelsetjänst för online casinon med svensk spellicens. 
                Vi värnar om din integritet och denna policy förklarar hur vi samlar in, använder och skyddar dina personuppgifter 
                när du använder vår casinojämförelsewebbplats.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Personuppgiftsansvarig</h2>
              <p>
                Personuppgiftsansvarig för behandlingen av dina personuppgifter är Kasinos.se. 
                Kontakta oss på <a href="mailto:kontakt@kasinos.se" className="text-casino-primary hover:underline">kontakt@kasinos.se</a> 
                för frågor om integritet och personuppgifter.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Vilka personuppgifter samlar vi in?</h2>
              <p>Vi samlar in följande typer av information:</p>
              
              <h3 className="text-xl font-medium mt-6 mb-3">Information du lämnar till oss</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Kontaktinformation när du kontaktar oss</li>
                <li>Feedback och kommentarer om casinorecensioner</li>
                <li>Information när du rapporterar problem eller fel</li>
              </ul>

              <h3 className="text-xl font-medium mt-6 mb-3">Information som samlas in automatiskt</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP-adress och webbläsarinformation</li>
                <li>Besöksmönster och sidvisningar via Google Analytics</li>
                <li>Vilka casinorecensioner du tittar på</li>
                <li>Klick på partnerlänkar till casinon</li>
                <li>Cookies och liknande tekniker</li>
              </ul>

              <h3 className="text-xl font-medium mt-6 mb-3">Information från casinopartners</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Registreringsdata när du klickar på våra partnerlänkar</li>
                <li>Affiliate-tracking information</li>
                <li>Konverteringsdata för provision</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Hur använder vi dina personuppgifter?</h2>
              <p>Vi använder dina personuppgifter för att:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Tillhandahålla och förbättra vår casinojämförelsetjänst</li>
                <li>Svara på dina förfrågningar och ge kundservice</li>
                <li>Analysera användning av webbplatsen och casinorecensioner</li>
                <li>Visa relevanta annonser relaterade till online casinon</li>
                <li>Spåra affiliate-konverteringar från våra casinopartners</li>
                <li>Förbättra våra casinorecensioner och jämförelser</li>
                <li>Stödja ansvarsfull spelande-initiativ</li>
                <li>Följa juridiska krav enligt svensk spellag</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibred mb-4">Rättslig grund för behandling</h2>
              <p>Vi behandlar dina personuppgifter baserat på:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Berättigat intresse:</strong> För att tillhandahålla casinojämförelsetjänsten och förbättra användarupplevelsen</li>
                <li><strong>Samtycke:</strong> För marknadsföring och personaliserade annonser där detta krävs</li>
                <li><strong>Rättslig förpliktelse:</strong> När vi måste följa spellagstiftning och andra regleringar</li>
                <li><strong>Avtal:</strong> När du kontaktar oss eller använder våra tjänster</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Delning med tredje parter</h2>
              <p>Vi delar dina uppgifter med:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Casinopartners:</strong> När du klickar på våra partnerlänkar för att registrera dig</li>
                <li><strong>Google:</strong> För Analytics och AdSense-tjänster</li>
                <li><strong>Adtraction:</strong> För affiliateföljning av klick på partnerlänkar</li>
                <li><strong>Teknikleverantörer:</strong> Som hjälper oss att driva webbplatsen</li>
                <li><strong>Spelinspektionen:</strong> Vid behov enligt svensk spellagstiftning</li>
                <li><strong>Ansvarsfull spelande-organisationer:</strong> För att stödja spelberoendeprevention</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Särskilt om speldata</h2>
              <p>
                Som en casinojämförelsewebbplats hanterar vi spelrelaterad data på ett särskilt sätt:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vi lagrar ingen spelinformation eller spelhistorik från casinon</li>
                <li>Vi spårar endast klick på våra partnerlänkar för affiliateändamål</li>
                <li>Vi delar aldrig speldata med andra parter än den aktuella casinooperatören</li>
                <li>Vi stödjer ansvarsfull spelande genom att visa varningar och hjälpresurser</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Internationella överföringar</h2>
              <p>
                Vissa av våra tjänsteleverantörer (som Google) kan vara baserade utanför EU/EES. 
                Vi säkerställer att sådana överföringar sker i enlighet med GDPR genom adequacy decisions eller lämpliga skyddsåtgärder.
                Våra casinopartners är licensierade i Sverige och följer svensk spellagstiftning.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Dina rättigheter</h2>
              <p>Du har rätt att:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Få information om vilka personuppgifter vi behandlar</li>
                <li>Få felaktiga uppgifter rättade</li>
                <li>Få dina uppgifter raderade under vissa omständigheter</li>
                <li>Begränsa behandlingen av dina uppgifter</li>
                <li>Invända mot behandling baserad på berättigat intresse</li>
                <li>Få ut dina uppgifter i ett strukturerat format (dataportabilitet)</li>
                <li>Återkalla samtycke när behandling baseras på samtycke</li>
                <li>Begära att vi slutar spåra dina klick på partnerlänkar</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Säkerhet</h2>
              <p>
                Vi vidtar lämpliga tekniska och organisatoriska åtgärder för att skydda dina personuppgifter 
                mot obehörig åtkomst, förlust eller missbruk. Detta inkluderar särskilda säkerhetsåtgärder 
                för spelrelaterad data enligt svensk spellagstiftning.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Lagringstid</h2>
              <p>
                Vi lagrar dina personuppgifter så länge det är nödvändigt för de ändamål som beskrivs i denna policy, 
                eller så länge som krävs enligt svensk spellagstiftning. Affiliate-tracking data lagras vanligtvis i 24 månader.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Barn och minderåriga</h2>
              <p>
                Vår webbplats och tjänster är endast avsedda för personer som är 18 år eller äldre. 
                Vi samlar inte medvetet in personuppgifter från minderåriga. Om vi upptäcker att vi har samlat in 
                information från någon under 18 år, kommer vi omedelbart att radera sådan information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Kontakt och klagomål</h2>
              <p>
                För frågor om denna integritetspolicy eller för att utöva dina rättigheter, kontakta oss på{" "}
                <a href="mailto:kontakt@kasinos.se" className="text-casino-primary hover:underline">
                  kontakt@kasinos.se
                </a>
              </p>
              <p>
                Du har också rätt att lämna klagomål till Integritetsskyddsmyndigheten (IMY) om du anser 
                att vi behandlar dina personuppgifter på ett felaktigt sätt.
              </p>
            </section>

            <section className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Viktigt:</strong> Du måste vara 18 år för att spela på casino. Spel kan vara beroendeframkallande. 
                För hjälp och stöd, kontakta{' '}
                <a href="https://www.stodlinjen.se" target="_blank" rel="noopener noreferrer" className="underline">
                  Stödlinjen (020-819 100)
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