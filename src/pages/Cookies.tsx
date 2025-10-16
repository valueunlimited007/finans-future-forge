import SimpleNavigation from "../components/SimpleNavigation";
import LegacyFooter from "../components/LegacyFooter";
import SeoManager from "../seo/SeoManager";

export default function Cookies() {
  return (
    <>
      <SeoManager />
      <SimpleNavigation />
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
              <p>På Finansguiden.se använder vi cookies för följande ändamål:</p>
              
              <h3 className="text-xl font-medium mt-6 mb-3">Nödvändiga cookies</h3>
              <p>
                Dessa cookies är nödvändiga för att webbplatsen ska fungera korrekt och kan inte stängas av. 
                De lagrar inga personligt identifierbara uppgifter.
              </p>

              <h3 className="text-xl font-medium mt-6 mb-3">Analys-cookies</h3>
              <p>
                Vi använder Google Analytics för att förstå hur besökare använder vår webbplats. 
                Dessa cookies hjälper oss att förbättra innehåll och funktionalitet.
              </p>

              <h3 className="text-xl font-medium mt-6 mb-3">Reklam-cookies</h3>
              <p>
                Vi använder Google AdSense för att visa relevanta annonser. Dessa cookies kan användas 
                för att personalisera annonsupplevelsen baserat på ditt webbläsarbeteende.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Tredjepartscookies</h2>
              <p>Vår webbplats använder tjänster från följande tredjeparter:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Google Analytics:</strong> För webbplatsanalys och statistik</li>
                <li><strong>Google AdSense:</strong> För att visa annonser</li>
                <li><strong>Adtraction:</strong> För affiliateföljning</li>
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
                <li>Se vilka cookies som lagras</li>
                <li>Blockera cookies från specifika webbplatser</li>
                <li>Blockera tredjepartscookies</li>
                <li>Rensa alla cookies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Kontakta oss</h2>
              <p>
                Om du har frågor om vår användning av cookies, kontakta oss på{" "}
                <a href="mailto:hej@finansguiden.se" className="text-primary hover:underline">
                  hej@finansguiden.se
                </a>
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
