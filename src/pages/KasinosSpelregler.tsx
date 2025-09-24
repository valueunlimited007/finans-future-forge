import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Dice1, Spade, Heart, Diamond, Club, Star, Shield, AlertCircle } from 'lucide-react';

export default function KasinosSpelregler() {
  useEffect(() => {
    console.log('KasinosSpelregler page mounted');
  }, []);

  return (
    <>
      <Helmet>
        <title>Spelregler för Casino - Kasinos.se</title>
        <meta name="description" content="Lär dig grundläggande spelregler för populära casinospel som blackjack, roulette, slots och poker. Komplett guide för nybörjare." />
        <link rel="canonical" href="https://kasinos.se/se/guider/spelregler" />
        <meta property="og:title" content="Spelregler för Casino - Kasinos.se" />
        <meta property="og:description" content="Lär dig grundläggande spelregler för populära casinospel som blackjack, roulette, slots och poker. Komplett guide för nybörjare." />
        <meta property="og:url" content="https://kasinos.se/se/guider/spelregler" />
        <meta property="og:type" content="article" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <h1 className="text-4xl font-bold mb-8">Spelregler för Casino</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <p className="text-lg text-muted-foreground mb-8">
                Lär dig grundläggande regler för de mest populära casinospelen. 
                Denna guide hjälper dig att förstå hur spelen fungerar och ökar dina chanser att ha roligt och spela ansvarsfullt.
              </p>
            </section>

            <section className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-yellow-600 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-yellow-800 mb-3">Viktigt att komma ihåg</h2>
                  <ul className="text-yellow-700 space-y-1 text-sm">
                    <li>• Du måste vara 18 år för att spela på casino</li>
                    <li>• Spel kan vara beroendeframkallande - spela ansvarsfullt</li>
                    <li>• Huset har alltid en matematisk fördel</li>
                    <li>• Spela endast med pengar du har råd att förlora</li>
                    <li>• Sätt gränser för tid och pengar innan du börjar spela</li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="grid lg:grid-cols-2 gap-8">
              <section className="bg-card p-6 rounded-lg border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex gap-1">
                    <Spade className="h-6 w-6 text-black" />
                    <Heart className="h-6 w-6 text-red-500" />
                  </div>
                  <h2 className="text-2xl font-semibold">Blackjack</h2>
                </div>
                
                <h3 className="font-semibold mb-2">Mål</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Få en hand så nära 21 som möjligt utan att gå över, och slå dealerns hand.
                </p>

                <h3 className="font-semibold mb-2">Kortets värde</h3>
                <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                  <li>• Ess: 1 eller 11 (det som är bäst för handen)</li>
                  <li>• Kung, dam, knekt: 10 poäng var</li>
                  <li>• Övriga kort: Nominellt värde</li>
                </ul>

                <h3 className="font-semibold mb-2">Grundläggande drag</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>Hit:</strong> Ta ett kort till</li>
                  <li>• <strong>Stand:</strong> Nöj dig med nuvarande hand</li>
                  <li>• <strong>Double:</strong> Dubbla insatsen, ta ett kort, sedan stand</li>
                  <li>• <strong>Split:</strong> Dela par i två separata händer</li>
                </ul>
              </section>

              <section className="bg-card p-6 rounded-lg border">
                <div className="flex items-center gap-3 mb-4">
                  <Dice1 className="h-6 w-6 text-red-500" />
                  <h2 className="text-2xl font-semibold">Roulette</h2>
                </div>
                
                <h3 className="font-semibold mb-2">Mål</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Förutsäga var kulan kommer att landa på roulettehjulet.
                </p>

                <h3 className="font-semibold mb-2">Typer av satsningar</h3>
                <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                  <li>• <strong>Rött/Svart:</strong> Utbetalning 1:1</li>
                  <li>• <strong>Jämnt/Udda:</strong> Utbetalning 1:1</li>
                  <li>• <strong>1-18/19-36:</strong> Utbetalning 1:1</li>
                  <li>• <strong>Ett nummer:</strong> Utbetalning 35:1</li>
                  <li>• <strong>Kolonner/Dussin:</strong> Utbetalning 2:1</li>
                </ul>

                <h3 className="font-semibold mb-2">Europisk vs Amerikansk</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>Europisk:</strong> En nolla (0), bättre odds</li>
                  <li>• <strong>Amerikansk:</strong> Två nollor (0, 00), sämre odds</li>
                </ul>
              </section>

              <section className="bg-card p-6 rounded-lg border">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="h-6 w-6 text-yellow-500" />
                  <h2 className="text-2xl font-semibold">Spelautomater (Slots)</h2>
                </div>
                
                <h3 className="font-semibold mb-2">Mål</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Få matchande symboler på aktiva vinstlinjer för att vinna priser.
                </p>

                <h3 className="font-semibold mb-2">Viktiga begrepp</h3>
                <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                  <li>• <strong>RTP:</strong> Return to Player (återbetalningsprocent)</li>
                  <li>• <strong>Volatilitet:</strong> Hur ofta och stort spelet betalar ut</li>
                  <li>• <strong>Vinstlinjer:</strong> Mönster som ger vinst</li>
                  <li>• <strong>Wild:</strong> Ersätter andra symboler</li>
                  <li>• <strong>Scatter:</strong> Utlöser bonusfunktioner</li>
                </ul>

                <h3 className="font-semibold mb-2">Tips</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Välj slots med hög RTP (96%+ är bra)</li>
                  <li>• Läs spelinformationen innan du spelar</li>
                  <li>• Sätt en budget och håll dig till den</li>
                </ul>
              </section>

              <section className="bg-card p-6 rounded-lg border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex gap-1">
                    <Diamond className="h-6 w-6 text-red-500" />
                    <Club className="h-6 w-6 text-black" />
                  </div>
                  <h2 className="text-2xl font-semibold">Poker (Texas Hold'em)</h2>
                </div>
                
                <h3 className="font-semibold mb-2">Mål</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Bilda den bästa pokerhanden med dina två kort plus fem gemensamma kort.
                </p>

                <h3 className="font-semibold mb-2">Handrankningar (högst till lägst)</h3>
                <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                  <li>• <strong>Royal Flush:</strong> A-K-Q-J-10 i samma färg</li>
                  <li>• <strong>Straight Flush:</strong> Fem kort i följd i samma färg</li>
                  <li>• <strong>Fyrtal:</strong> Fyra kort av samma rang</li>
                  <li>• <strong>Kåk:</strong> Tretal + par</li>
                  <li>• <strong>Färg:</strong> Fem kort i samma färg</li>
                  <li>• <strong>Stege:</strong> Fem kort i följd</li>
                  <li>• <strong>Tretal:</strong> Tre kort av samma rang</li>
                  <li>• <strong>Tvåpar:</strong> Två par</li>
                  <li>• <strong>Par:</strong> Två kort av samma rang</li>
                  <li>• <strong>Högt kort:</strong> Inget av ovanstående</li>
                </ul>
              </section>

              <section className="bg-card p-6 rounded-lg border">
                <div className="flex items-center gap-3 mb-4">
                  <Dice1 className="h-6 w-6 text-green-500" />
                  <h2 className="text-2xl font-semibold">Baccarat</h2>
                </div>
                
                <h3 className="font-semibold mb-2">Mål</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Satsa på om spelaren eller bankiren får närmast 9 poäng, eller om det blir oavgjort.
                </p>

                <h3 className="font-semibold mb-2">Kortvärden</h3>
                <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                  <li>• Ess: 1 poäng</li>
                  <li>• 2-9: Nominellt värde</li>
                  <li>• 10, kung, dam, knekt: 0 poäng</li>
                </ul>

                <h3 className="font-semibold mb-2">Satsningsalternativ</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>Spelare:</strong> Utbetalning 1:1</li>
                  <li>• <strong>Bankir:</strong> Utbetalning 1:1 (5% kommission)</li>
                  <li>• <strong>Oavgjort:</strong> Utbetalning 8:1</li>
                </ul>
              </section>

              <section className="bg-card p-6 rounded-lg border">
                <div className="flex items-center gap-3 mb-4">
                  <Dice1 className="h-6 w-6 text-blue-500" />
                  <h2 className="text-2xl font-semibold">Craps</h2>
                </div>
                
                <h3 className="font-semibold mb-2">Grundläggande spel</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Satsa på resultatet av två tärningskast.
                </p>

                <h3 className="font-semibold mb-2">Come Out Roll</h3>
                <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                  <li>• <strong>7 eller 11:</strong> Pass line vinner</li>
                  <li>• <strong>2, 3 eller 12:</strong> Pass line förlorar</li>
                  <li>• <strong>Andra nummer:</strong> Blir "point"</li>
                </ul>

                <h3 className="font-semibold mb-2">Populära satsningar</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>Pass line:</strong> Grundsatsning, låg house edge</li>
                  <li>• <strong>Don't pass:</strong> Motsatsen till pass line</li>
                  <li>• <strong>Field:</strong> Engångssatsning på nästa kast</li>
                </ul>
              </section>
            </div>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Allmänna tips för casinospel</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-3">✅ Gör detta</h3>
                  <ul className="text-green-700 space-y-2 text-sm">
                    <li>• Lär dig spelreglerna innan du satsar riktiga pengar</li>
                    <li>• Sätt en budget och håll dig till den</li>
                    <li>• Ta pauser regelbundet</li>
                    <li>• Spela på licensierade casinon</li>
                    <li>• Använd bonusarna klokt</li>
                    <li>• Ha roligt och se det som underhållning</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                  <h3 className="font-semibold text-red-800 mb-3">❌ Undvik detta</h3>
                  <ul className="text-red-700 space-y-2 text-sm">
                    <li>• Spela med pengar du inte har råd att förlora</li>
                    <li>• Jaga förluster genom att satsa mer</li>
                    <li>• Spela när du är påverkad av alkohol</li>
                    <li>• Ignorera time och spending limits</li>
                    <li>• Tro att du kan "slå systemet"</li>
                    <li>• Spela som en inkomstkälla</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <Shield className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-blue-800 mb-3">Ansvarsfull spelande</h2>
                  <p className="text-blue-700 mb-3">
                    Kom ihåg att casinospel är tänkt som underhållning, inte som ett sätt att tjäna pengar. 
                    Alla casinospel har en "house edge" vilket betyder att casinot har en matematisk fördel.
                  </p>
                  <p className="text-blue-700">
                    Om spelandet inte längre är roligt eller om du känner att du förlorar kontrollen, 
                    sök hjälp omedelbart. Kontakta{' '}
                    <a href="https://www.stodlinjen.se" target="_blank" rel="noopener noreferrer" className="underline font-medium">
                      Stödlinjen
                    </a>
                    {' '}eller använd{' '}
                    <a href="https://spelpaus.se" target="_blank" rel="noopener noreferrer" className="underline font-medium">
                      Spelpaus.se
                    </a>
                    {' '}för att stänga av dig från alla svenska casinon.
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