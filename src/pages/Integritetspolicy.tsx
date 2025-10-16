import SimpleNavigation from "../components/SimpleNavigation";
import LegacyFooter from "../components/LegacyFooter";
import SeoManager from "../seo/SeoManager";

export default function Integritetspolicy() {
  return (
    <>
      <SeoManager />
      <SimpleNavigation />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Integritetspolicy</h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Inledning</h2>
              <p>
                Finansguiden.se är en jämförelsetjänst för finansiella produkter som lån, kreditkort och andra finansiella tjänster. 
                Vi värnar om din integritet och denna policy förklarar hur vi samlar in, använder och skyddar dina personuppgifter.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Personuppgiftsansvarig</h2>
              <p>
                Personuppgiftsansvarig för behandlingen av dina personuppgifter är Finansguiden.se. 
                Kontakta oss på <a href="mailto:hej@finansguiden.se" className="text-primary hover:underline">hej@finansguiden.se</a> 
                för frågor om integritet och personuppgifter.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Vilka personuppgifter samlar vi in?</h2>
              <p>Vi samlar in följande typer av information:</p>
              
              <h3 className="text-xl font-medium mt-6 mb-3">Information du lämnar till oss</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Kontaktinformation när du kontaktar oss</li>
                <li>Information i förfrågningar om finansiella produkter</li>
              </ul>

              <h3 className="text-xl font-medium mt-6 mb-3">Information som samlas in automatiskt</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP-adress och webbläsarinformation</li>
                <li>Besöksmönster och sidvisningar via Google Analytics</li>
                <li>Cookies och liknande tekniker</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Hur använder vi dina personuppgifter?</h2>
              <p>Vi använder dina personuppgifter för att:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Tillhandahålla och förbättra vår jämförelsetjänst</li>
                <li>Svara på dina förfrågningar och ge kundservice</li>
                <li>Analysera användning av webbplatsen</li>
                <li>Visa relevanta annonser via Google AdSense</li>
                <li>Följa juridiska krav</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Rättslig grund för behandling</h2>
              <p>Vi behandlar dina personuppgifter baserat på:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Berättigat intresse:</strong> För att tillhandahålla jämförelsetjänsten och förbättra användarupplevelsen</li>
                <li><strong>Samtycke:</strong> För marknadsföring och personaliserade annonser där detta krävs</li>
                <li><strong>Rättslig förpliktelse:</strong> När vi måste följa lagar och regleringar</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Delning med tredje parter</h2>
              <p>Vi delar dina uppgifter med:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Finansiella partners:</strong> När du begär information om deras produkter</li>
                <li><strong>Google:</strong> För Analytics och AdSense-tjänster</li>
                <li><strong>Adtraction:</strong> För affiliateföljning av klick på partnerlänkar</li>
                <li><strong>Teknikleverantörer:</strong> Som hjälper oss att driva webbplatsen</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Internationella överföringar</h2>
              <p>
                Vissa av våra tjänsteleverantörer (som Google) kan vara baserade utanför EU/EES. 
                Vi säkerställer att sådana överföringar sker i enlighet med GDPR genom adequacy decisions eller lämpliga skyddsåtgärder.
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
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Säkerhet</h2>
              <p>
                Vi vidtar lämpliga tekniska och organisatoriska åtgärder för att skydda dina personuppgifter 
                mot obehörig åtkomst, förlust eller missbruk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Lagringstid</h2>
              <p>
                Vi lagrar dina personuppgifter så länge det är nödvändigt för de ändamål som beskrivs i denna policy, 
                eller så länge som krävs enligt lag.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Kontakt och klagomål</h2>
              <p>
                För frågor om denna integritetspolicy eller för att utöva dina rättigheter, kontakta oss på{" "}
                <a href="mailto:hej@finansguiden.se" className="text-primary hover:underline">
                  hej@finansguiden.se
                </a>
              </p>
              <p>
                Du har också rätt att lämna klagomål till Integritetsskyddsmyndigheten (IMY) om du anser 
                att vi behandlar dina personuppgifter på ett felaktigt sätt.
              </p>
            </section>

            <section>
              <p className="text-sm text-muted-foreground mt-8">
                Senast uppdaterad: {new Date().toLocaleDateString('sv-SE')}
              </p>
            </section>
          </div>
        </div>
      </main>
      <LegacyFooter />
    </>
  );
}
