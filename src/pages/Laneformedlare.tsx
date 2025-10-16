import SimpleNavigation from "../components/SimpleNavigation";
import LegacyFooter from "../components/LegacyFooter";
import OffersContainer from "../components/OffersContainer";
import SeoManager from "../seo/SeoManager";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CustomBreadcrumb from "../components/CustomBreadcrumb";

export default function Laneformedlare() {
  const breadcrumbItems = [
    { label: "Låneförmedlare" }
  ];

  return (
    <>
      <Helmet>
        <title>Låneförmedlare - Jämför flera banker med en ansökan | Finansguiden.se</title>
        <meta name="description" content="Genom en låneförmedlare gör du endast en ansökan och får erbjudanden från 30-50 banker. Jämför villkor och räntor. Endast EN kreditupplysning. ✓ Sparar tid ✓ Fler erbjudanden" />
        <link rel="canonical" href="https://finansguiden.se/laneformedlare" />
        <meta property="og:title" content="Låneförmedlare - Jämför flera banker med en ansökan" />
        <meta property="og:description" content="Få erbjudanden från 30-50 banker med endast en ansökan. Endast EN kreditupplysning. Jämför låneförmedlare." />
        <meta property="og:type" content="article" />
      </Helmet>
      <SeoManager />
      <SimpleNavigation />
      
      <main className="min-h-screen">
        <div className="container mx-auto max-w-6xl px-4 py-8">
          <CustomBreadcrumb items={breadcrumbItems} />
        </div>

        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Låneförmedlare - Jämför flera banker med <span className="text-blue-600">en ansökan</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Genom en låneförmedlare gör du endast en ansökan och får erbjudanden från 30-50 banker. 
              Spar tid och endast EN kreditupplysning.
            </p>
          </div>
        </section>

        {/* Fördelar */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <Card className="p-8 mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Fördelar med låneförmedlare</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1 h-6 w-6" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Endast EN kreditupplysning</h3>
                    <p className="text-muted-foreground">
                      Trots att du får erbjudanden från många banker görs bara en UC-kontroll. Detta 
                      påverkar din kreditvärdighet mindre än att ansöka hos varje bank separat.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1 h-6 w-6" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Jämför 30-50+ banker</h3>
                    <p className="text-muted-foreground">
                      Få konkurrerande erbjudanden från Sveriges ledande långivare och välj det 
                      bästa för din situation. Ingen bank har alltid bäst villkor för alla.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1 h-6 w-6" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Sparar tid och energi</h3>
                    <p className="text-muted-foreground">
                      Slipper ansöka hos varje bank separat. Fyll i en ansökan så skickar 
                      låneförmedlaren den till alla sina samarbetspartners.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1 h-6 w-6" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Helt kostnadsfritt</h3>
                    <p className="text-muted-foreground">
                      Du betalar inget extra för att använda en låneförmedlare. Räntan och villkoren 
                      är desamma som om du ansökt direkt hos banken.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Skillnad mot direktlångivare */}
            <Card className="p-8 mb-12 bg-blue-50 dark:bg-blue-950">
              <h2 className="text-2xl font-bold mb-4">Skillnad mot direktlångivare</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  En <strong className="text-foreground">direktlångivare</strong> (t.ex. Nordea, Resurs Bank, Northmill) 
                  ger dig endast sitt eget erbjudande. Du måste ansöka hos varje bank separat för att 
                  jämföra villkor, vilket kräver flera kreditupplysningar och tar mycket tid.
                </p>
                <p>
                  En <strong className="text-foreground">låneförmedlare</strong> samarbetar med 30-50 banker och 
                  långivare. De skickar din ansökan till alla sina partners samtidigt och presenterar 
                  de erbjudanden du blir godkänd för. Du väljer sedan det bästa alternativet.
                </p>
                <p className="font-semibold text-foreground">
                  Exempel på låneförmedlare: Lendo, Sambla, Advisa, Trygga, Loans.se, Kompar, Matchbanker
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Erbjudanden */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Jämför låneförmedlare</h2>
            <OffersContainer 
              category="laneformedlare" 
              limit={25}
              className="mb-8"
            />
          </div>
        </section>
      </main>
      
      <LegacyFooter />
    </>
  );
}
