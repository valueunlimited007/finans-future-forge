import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, MessageSquare, AlertCircle, Shield, Clock } from 'lucide-react';

export default function KasinosKontakt() {
  useEffect(() => {
    console.log('KasinosKontakt page mounted');
  }, []);

  return (
    <>
      <Helmet>
        <title>Kontakt - Kasinos.se</title>
        <meta name="description" content="Kontakta Kasinos.se för frågor om casinorecensioner, teknisk support eller förslag på förbättringar av vår jämförelsetjänst." />
        <link rel="canonical" href="https://kasinos.se/kontakt" />
        <meta property="og:title" content="Kontakt - Kasinos.se" />
        <meta property="og:description" content="Kontakta Kasinos.se för frågor om casinorecensioner, teknisk support eller förslag på förbättringar av vår jämförelsetjänst." />
        <meta property="og:url" content="https://kasinos.se/kontakt" />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Kontakt</h1>
          
          <div className="space-y-8">
            <section>
              <p className="text-lg text-muted-foreground mb-8">
                Har du frågor om våra casinorecensioner, tekniska problem med webbplatsen, 
                eller förslag på hur vi kan förbättra vår jämförelsetjänst? Vi hjälper gärna till!
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-8">
              <section className="space-y-6">
                <h2 className="text-2xl font-semibold mb-4">Allmänna frågor</h2>
                
                <div className="bg-card p-6 rounded-lg border">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-casino-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">E-post</h3>
                      <p className="text-muted-foreground mb-2">
                        Den snabbaste vägen att nå oss för allmänna frågor.
                      </p>
                      <a 
                        href="mailto:kontakt@kasinos.se" 
                        className="text-casino-primary hover:underline font-medium"
                      >
                        kontakt@kasinos.se
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg border">
                  <div className="flex items-start gap-4">
                    <MessageSquare className="h-6 w-6 text-casino-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Casinorecensioner</h3>
                      <p className="text-muted-foreground mb-2">
                        Frågor om specifika casinon, bonusar eller spelupplevelser.
                      </p>
                      <a 
                        href="mailto:recensioner@kasinos.se" 
                        className="text-casino-primary hover:underline font-medium"
                      >
                        recensioner@kasinos.se
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg border">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="h-6 w-6 text-casino-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Teknisk support</h3>
                      <p className="text-muted-foreground mb-2">
                        Problem med webbplatsen, brutna länkar eller andra tekniska frågor.
                      </p>
                      <a 
                        href="mailto:support@kasinos.se" 
                        className="text-casino-primary hover:underline font-medium"
                      >
                        support@kasinos.se
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-2xl font-semibold mb-4">Viktiga resurser</h2>

                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <Shield className="h-6 w-6 text-yellow-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-yellow-800 mb-2">Ansvarsfull spelande</h3>
                      <p className="text-yellow-700 text-sm mb-3">
                        Om du behöver hjälp med spelande kontakta dessa organisationer direkt:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <a 
                            href="https://www.stodlinjen.se" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-yellow-800 hover:underline font-medium"
                          >
                            Stödlinjen: 020-819 100
                          </a>
                        </li>
                        <li>
                          <a 
                            href="https://spelpaus.se" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-yellow-800 hover:underline font-medium"
                          >
                            Spelpaus.se - Självavstängning
                          </a>
                        </li>
                        <li>
                          <a 
                            href="https://spelberoendesrikssforbund.se" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-yellow-800 hover:underline font-medium"
                          >
                            Spelberoendes riksförbund
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg border">
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-casino-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Svarstider</h3>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>• Allmänna frågor: Inom 24 timmar</li>
                        <li>• Casinorecensioner: Inom 48 timmar</li>
                        <li>• Teknisk support: Inom 72 timmar</li>
                        <li>• Helger kan förlänga svarstiderna</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Vanliga frågor som vi får</h2>
              <div className="space-y-4">
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold mb-2">Hur uppdaterar ni era casinorecensioner?</h3>
                  <p className="text-muted-foreground">
                    Vi uppdaterar våra recensioner regelbundet baserat på nya bonusar, spelutbud, 
                    användarfeedback och förändringar i casinooperatörernas tjänster.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold mb-2">Får ni provision från casinon?</h3>
                  <p className="text-muted-foreground">
                    Ja, vi får affiliate-provision när någon registrerar sig via våra länkar. 
                    Detta påverkar aldrig våra recensioner eller rekommendationer - vi är transparenta med detta.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold mb-2">Varför rekommenderar ni bara svenska licensierade casinon?</h3>
                  <p className="text-muted-foreground">
                    För din säkerhet och enligt svensk lag rekommenderar vi endast casinon med 
                    gyldig svensk spellicens från Spelinspektionen.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold mb-2">Kan ni hjälpa mig med problem med ett casino?</h3>
                  <p className="text-muted-foreground">
                    Vi kan ge allmänna råd, men för specifika tvister bör du kontakta casinots kundservice först, 
                    sedan Spelinspektionen om problemet kvarstår.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-red-800 mb-3">⚠️ Viktigt meddelande</h2>
              <p className="text-red-700 text-sm mb-3">
                <strong>Vi är INTE ett casino</strong> - vi är en jämförelsewebbplats. Vi kan inte hjälpa dig med:
              </p>
              <ul className="text-red-700 text-sm space-y-1 list-disc pl-5">
                <li>Insättningar eller uttag från casinon</li>
                <li>Bonusar eller kampanjer (kontakta casinot direkt)</li>
                <li>Spelhistorik eller kontoinformation</li>
                <li>Tekniska problem med casinospel</li>
              </ul>
              <p className="text-red-700 text-sm mt-3">
                För sådana frågor, kontakta det aktuella casinots kundservice direkt.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}