import React from "react";
import { Helmet } from "react-helmet-async";
import ModernNavigation from "@/components/ModernNavigation";
import LegacyFooter from "@/components/LegacyFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Heart, TrendingUp, Users, Coffee, MapPin } from "lucide-react";

const OmOssKarriar = () => {
  const benefits = [
    {
      title: "Flexibel arbetstid",
      description: "Vi tror på work-life balance och erbjuder flexibla arbetstider som passar ditt liv",
      icon: Coffee
    },
    {
      title: "Fortbildning",
      description: "Kontinuerlig kompetensutveckling med kurser, konferenser och certifieringar",
      icon: TrendingUp
    },
    {
      title: "Meningsfull mission",
      description: "Hjälp miljontals svenskar att fatta smartare ekonomiska beslut",
      icon: Heart
    },
    {
      title: "Fantastiska kollegor",
      description: "Arbeta med passionerade experter inom finans, teknik och kommunikation",
      icon: Users
    }
  ];

  const openPositions = [
    {
      title: "Senior Finansexpert",
      type: "Heltid",
      location: "Stockholm/Remote",
      description: "Vi söker en erfaren finansexpert som kan bidra till vårt innehåll och hjälpa användare med komplexa finansiella frågor."
    },
    {
      title: "Frontend Utvecklare",
      type: "Heltid", 
      location: "Remote",
      description: "Hjälp oss bygga nästa generation av finansiella jämförelseverktyg med modern teknologi."
    },
    {
      title: "Content Specialist",
      type: "Heltid/Deltid",
      location: "Stockholm/Remote", 
      description: "Skapa engagerande och pedagogiskt innehåll som hjälper användare förstå komplexa finansiella produkter."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Karriär & Jobb | Om Finansguiden.se</title>
        <meta 
          name="description" 
          content="Arbeta med oss på Finansguiden.se! Vi söker passionerade experter inom finans, teknik och kommunikation. Se lediga tjänster och ansök idag." 
        />
        <link rel="canonical" href="https://finansguiden.se/om-oss/karriar" />
      </Helmet>

      <ModernNavigation />
      
      <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Jobba Med Oss
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Vill du vara med och forma framtiden för finansiell information i Sverige? 
              Vi söker passionerade individer som vill göra skillnad för miljontals användare.
            </p>
          </header>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">
              Varför Välja Finansguiden?
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
              {benefits.map((benefit) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={benefit.title} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                          <IconComponent className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">
              Lediga Tjänster
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {openPositions.map((position) => (
                <Card key={position.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl text-foreground mb-2">
                          {position.title}
                        </CardTitle>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            {position.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {position.location}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                        Aktivt sökande
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {position.description}
                    </p>
                    <button className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                      Läs mer & Ansök
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="text-center">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 max-w-4xl mx-auto border border-primary/20">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Ser Du Inte Din Drömtjänst?
              </h2>
              <p className="text-muted-foreground mb-6">
                Vi växer ständigt och är alltid intresserade av att träffa talangfulla personer. 
                Skicka en spontanansökan så hör vi av oss när rätt möjlighet dyker upp.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:karriar@finansguiden.se"
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Skicka Spontanansökan
                </a>
                <a 
                  href="/om-oss/team"
                  className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
                >
                  Möt Teamet
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <LegacyFooter />
    </>
  );
};

export default OmOssKarriar;