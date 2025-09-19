import React from "react";
import { Helmet } from "react-helmet-async";
import ModernNavigation from "@/components/ModernNavigation";
import LegacyFooter from "@/components/LegacyFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, TrendingUp, PieChart, Target, DollarSign, Percent } from "lucide-react";
import { Link } from "react-router-dom";

const Verktyg = () => {
  const tools = [
    {
      title: "Låneräknare",
      description: "Beräkna månadsavgift och total kostnad för ditt lån",
      icon: Calculator,
      href: "/verktyg/laneraknare",
      popular: true
    },
    {
      title: "Sparräknare",
      description: "Se hur ditt sparande växer över tid med ränta på ränta",
      icon: TrendingUp,
      href: "/verktyg/sparraknare",
      popular: true
    },
    {
      title: "Kreditkortkalkylator",
      description: "Jämför kostnader och förmåner för olika kreditkort",
      icon: PieChart,
      href: "/verktyg/kreditkort-kalkylator"
    },
    {
      title: "Budgetplanerare",
      description: "Planera din ekonomi och sätt upp realistiska sparmål",
      icon: Target,
      href: "/verktyg/budget"
    },
    {
      title: "Amorteringsplan",
      description: "Se hur din låneskuld minskar över tid med olika amorteringar",
      icon: DollarSign,
      href: "/verktyg/amortering"
    },
    {
      title: "Ränteräknare",
      description: "Jämför olika räntor och se skillnaden över tid",
      icon: Percent,
      href: "/verktyg/ranta"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Finansiella Verktyg & Kalkylatorer | Finansguiden.se</title>
        <meta 
          name="description" 
          content="Använd våra gratis finansiella verktyg och kalkylatorer. Låneräknare, sparräknare, budgetplanerare och mer för att planera din ekonomi smart." 
        />
        <link rel="canonical" href="https://finansguiden.se/verktyg" />
      </Helmet>

      <ModernNavigation />
      
      <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Finansiella Verktyg
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Använd våra gratis kalkylatorer och verktyg för att fatta smarta ekonomiska beslut. 
              Planera din ekonomi, jämför alternativ och nå dina finansiella mål snabbare.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {tools.map((tool) => {
              const IconComponent = tool.icon;
              return (
                <Card key={tool.href} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <IconComponent className="h-8 w-8 text-primary" />
                      {tool.popular && (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                          Populär
                        </span>
                      )}
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {tool.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {tool.description}
                    </p>
                    <Link 
                      to={tool.href}
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                    >
                      Använd verktyget →
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <section className="mt-16 text-center">
            <div className="bg-muted/50 rounded-lg p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Behöver du hjälp med verktygen?
              </h2>
              <p className="text-muted-foreground mb-6">
                Våra experter hjälper dig att använda verktygen effektivt och tolka resultaten korrekt.
              </p>
              <Link 
                to="/kontakt/support"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Kontakta support
              </Link>
            </div>
          </section>
        </div>
      </main>

      <LegacyFooter />
    </>
  );
};

export default Verktyg;