import React from "react";
import { Helmet } from "react-helmet-async";
import ModernNavigation from "@/components/ModernNavigation";
import LegacyFooter from "@/components/LegacyFooter";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, TrendingUp, Award } from "lucide-react";

const OmOssHistoria = () => {
  const milestones = [
    {
      year: "2020",
      title: "Finansguiden grundas",
      description: "Value Unlimited startar Finansguiden.se med målet att demokratisera tillgången till finansiell information i Sverige.",
      icon: Calendar
    },
    {
      year: "2021", 
      title: "Första miljonen besökare",
      description: "Webbplatsen når sin första miljon unika besökare och etablerar sig som en pålitlig källa för finansiell information.",
      icon: Users
    },
    {
      year: "2022",
      title: "Expansion av innehåll",
      description: "Lansering av djupgående guider inom privatekonomi, investeringar och företagsfinansiering.",
      icon: TrendingUp
    },
    {
      year: "2023",
      title: "Community-satsning",
      description: "Start av community-driven innehåll där svenska sparare delar sina bästa tips och strategier.",
      icon: Users
    },
    {
      year: "2024",
      title: "Branscherkännande",
      description: "Finansguiden blir en respekterad röst inom svensk finansmedia och citeras av stora medier.",
      icon: Award
    },
    {
      year: "2025",
      title: "Framtiden",
      description: "Fortsatt fokus på att hjälpa svenskar fatta smartare ekonomiska beslut genom transparent och oberoende information.",
      icon: TrendingUp
    }
  ];

  return (
    <>
      <Helmet>
        <title>Vår Historia | Om Finansguiden.se</title>
        <meta 
          name="description" 
          content="Läs om Finansguidens historia - från start 2020 till att bli Sveriges mest pålitliga källa för finansiell information och jämförelser." 
        />
        <link rel="canonical" href="https://finansguiden.se/om-oss/historia" />
      </Helmet>

      <ModernNavigation />
      
      <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Vår Historia
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Från en idé om att demokratisera finansiell information till att bli Sveriges 
              mest pålitliga plattform för lån- och kreditjämförelser.
            </p>
          </header>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20"></div>
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => {
                  const IconComponent = milestone.icon;
                  return (
                    <div key={milestone.year} className="relative">
                      {/* Timeline dot */}
                      <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                      
                      <Card className="ml-16 hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                              <div className="p-3 bg-primary/10 rounded-lg">
                                <IconComponent className="h-6 w-6 text-primary" />
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="text-2xl font-bold text-primary">
                                  {milestone.year}
                                </span>
                                <h3 className="text-xl font-semibold text-foreground">
                                  {milestone.title}
                                </h3>
                              </div>
                              <p className="text-muted-foreground leading-relaxed">
                                {milestone.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <section className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 max-w-4xl mx-auto border border-primary/20">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Vår Mission Idag
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Vi fortsätter att arbeta för en mer transparent och tillgänglig finansmarknad där 
                alla svenskar kan fatta välgrundade ekonomiska beslut. Genom oberoende jämförelser, 
                djupgående analyser och community-driven innehåll hjälper vi miljontals användare 
                att hitta bästa lånen, kreditkorten och sparalternativ för just deras situation.
              </p>
            </div>
          </section>
        </div>
      </main>

      <LegacyFooter />
    </>
  );
};

export default OmOssHistoria;