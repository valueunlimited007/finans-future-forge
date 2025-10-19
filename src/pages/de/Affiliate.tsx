import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import NavigationDE from '@/components/de/NavigationDE';
import FooterDE from '@/components/de/FooterDE';

const Affiliate = () => {
  return (
    <>
      <Helmet>
        <title>Affiliate Information - Finanzen-Guide.de</title>
        <meta name="description" content="Information för affiliatepartners och nätverk om vem som driver finanzen-guide.de" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <NavigationDE />
        
        <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Affiliate Information</h1>
            <p className="text-lg text-muted-foreground">
              Om Finanzen-Guide.de och vårt ägarbolag
            </p>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardDescription className="text-base">
                Denna sida innehåller information för affiliatepartners och nätverk om vem som driver finanzen-guide.de
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Om Finanzen-Guide.de</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                <strong>Finanzen-Guide.de är Tysklands guide till privatlån, företagslån och kreditkort.</strong> Vi tillhandahåller detaljerad information om finansiella produkter och tjänster på den tyska marknaden. Sajten hjälper användare att göra informerade val genom att jämföra räntor, villkor och erbjudanden från olika finansinstitut.
              </p>
              <p>
                Vi bygger löpande ut innehållet för att möta användares frågor, behov och intresseområden inom privatekonomi och företagsfinansiering.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Företagsinformation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <span className="font-semibold">Företag:</span> Digisol AB
              </div>
              <div>
                <span className="font-semibold">Organisationsnummer:</span> 556936-8763
              </div>
              <div>
                <span className="font-semibold">Kontaktperson:</span> Lars-Gunnar
              </div>
              <div>
                <span className="font-semibold">E-post:</span>{' '}
                <a href="mailto:hej@finansguiden.se" className="text-primary hover:underline">
                  hej@finansguiden.se
                </a>
              </div>
              <div className="text-sm text-muted-foreground">
                (Vår huvudkontaktadress för alla kanaler är{' '}
                <a href="mailto:valueunlimited007@gmail.com" className="text-primary hover:underline">
                  valueunlimited007@gmail.com
                </a>
                )
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Våra andra sajter</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <p>Vi driver flera informationssajter inom olika nischer:</p>
              <ul>
                <li>
                  <a href="https://snapchat.se/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Snapchat.se
                  </a>{' '}
                  - Social Media
                </li>
                <li>
                  <a href="https://finansguiden.se/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Finansguiden.se
                  </a>{' '}
                  - Finans (Sverige)
                </li>
                <li>
                  <strong>Finanzen-Guide.de</strong> - Finans (Tyskland)
                </li>
                <li>
                  <a href="https://bouppteckningar.se/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Bouppteckningar.se
                  </a>{' '}
                  - Juridik
                </li>
                <li>
                  <a href="https://silverfiskar.se/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Silverfiskar.se
                  </a>{' '}
                  - Skadedjur
                </li>
                <li>
                  <a href="https://mobildelar.se/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Mobildelar.se
                  </a>{' '}
                  - Mobilreservdelar
                </li>
                <li>
                  <a href="https://vihandlar.se/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Vihandlar.se
                  </a>{' '}
                  - E-ämnen och livsmedel
                </li>
              </ul>
              <p>
                Exempel på andra starka domäner i vår portfölj är <strong>atlas.se</strong>, <strong>kamin.se</strong> och{' '}
                <strong>kasinos.se</strong>.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Affiliatesamarbeten</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                Vi samarbetar gärna med annonsörer, affiliateplattformar och varumärken som vill synas i dessa sammanhang. Finanzen-Guide.de är en av flera domäner vi planerar att utveckla vidare under 2025.
              </p>
              <p>Vi samarbetar med följande affiliatenätverk och partners:</p>
              <ul>
                <li>Adtraction</li>
                <li>TradeDoubler</li>
                <li>CJ Affiliate (Commission Junction)</li>
                <li>Direktsamarbeten med utvalda partners</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Transparens och etik</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <p>Vi är transparenta med hur vi tjänar pengar. Finanzen-Guide.de monetäriseras genom:</p>
              <ul>
                <li>Affiliatelänkar till utvalda partners och produkter</li>
                <li>Display-annonsering genom etablerade nätverk</li>
                <li>Sponsrade artiklar och samarbeten (alltid tydligt markerade)</li>
              </ul>
              <p>
                Vi rekommenderar endast produkter och tjänster vi bedömer som relevanta och av god kvalitet för våra användare. All sponsrad eller affiliate-finansierad information är tydligt markerad.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Kontakt för partners</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <p>För frågor om affiliatesamarbeten, partnerskap eller mediakit, kontakta oss på:</p>
              <p>
                <a href="mailto:hej@finansguiden.se" className="text-primary hover:underline font-semibold">
                  hej@finansguiden.se
                </a>
              </p>
              <p className="text-sm text-muted-foreground">
                Observera att denna sida endast används för verifiering och partnerkommunikation – den är inte sökbar via sajtens menyer och är exkluderad från Google-indexering.
              </p>
            </CardContent>
          </Card>
        </main>

        <FooterDE />
      </div>
    </>
  );
};

export default Affiliate;
