import React from "react";
import { Helmet } from "react-helmet-async";
import ModernNavigation from "@/components/ModernNavigation";
import LegacyFooter from "@/components/LegacyFooter";
import { Card, CardContent } from "@/components/ui/card";
import { User, Mail, Linkedin } from "lucide-react";

const OmOssTeam = () => {
  const teamMembers = [
    {
      name: "Anna Lindström",
      role: "Grundare & VD",
      description: "Civilekonom med 15+ års erfarenhet från finansbranschen. Tidigare rådgivare på storbank och passionerad om att demokratisera finansiell kunskap.",
      expertise: ["Företagsekonomi", "Kreditanalys", "Strategisk utveckling"],
      image: "expert"
    },
    {
      name: "Erik Johansson", 
      role: "Chefredaktör",
      description: "Ekonomijournalist med bakgrund från Dagens Industri och Svenska Dagbladet. Specialist på konsumentekonomi och finansmarknader.",
      expertise: ["Finansjournalistik", "Marknadsanalys", "Konsumenträttigheter"],
      image: "expert"
    },
    {
      name: "Lisa Eriksson",
      role: "Kreditexpert", 
      description: "Tidigare kredithandläggare med djup kunskap om låneprocesser och riskbedömning. Hjälper våra användare navigera kreditmarknaden.",
      expertise: ["Kreditbedömning", "Låneprocesser", "Regelverkskunskap"],
      image: "expert"
    },
    {
      name: "Marcus Andersson",
      role: "Teknikchef",
      description: "Systemutvecklare och dataingenjör som säkerställer att våra jämförelseverktyg och kalkylatorer alltid ger korrekta resultat.",
      expertise: ["Webbutveckling", "Dataanalys", "Systemintegration"],
      image: "expert"
    },
    {
      name: "Sofia Bergman",
      role: "Content Specialist",
      description: "Kommunikatör med fokus på att göra komplex finansiell information begriplig och användbar för alla målgrupper.",
      expertise: ["Content Strategy", "UX Writing", "Kommunikation"],
      image: "expert"
    },
    {
      name: "David Nielsen",
      role: "Community Manager",
      description: "Ansvarar för vårt community och säkerställer att användarna får den hjälp och support de behöver.",
      expertise: ["Community Building", "Kundservice", "Social Media"],
      image: "expert"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Vårt Team | Om Finansguiden.se</title>
        <meta 
          name="description" 
          content="Möt teamet bakom Finansguiden.se - experter inom ekonomi, juridik och teknik som arbetar för att ge dig bästa finansiella råden." 
        />
        <link rel="canonical" href="https://finansguiden.se/om-oss/team" />
      </Helmet>

      <ModernNavigation />
      
      <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Vårt Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Möt expertteamet som arbetar dagligen för att ge dig de bästa finansiella råden 
              och mest aktuella jämförelserna på marknaden.
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <Card key={member.name} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-3">
                      {member.role}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {member.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground text-sm mb-2">Expertområden:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((skill) => (
                        <span 
                          key={skill}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-center gap-3 pt-4 border-t border-border">
                    <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <section className="mt-16 text-center">
            <div className="bg-muted/50 rounded-lg p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Vi Vill Höra Från Dig
              </h2>
              <p className="text-muted-foreground mb-6">
                Har du frågor eller förslag? Vårt team är alltid här för att hjälpa till och 
                förbättra din upplevelse på Finansguiden.se
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:hej@finansguiden.se"
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Kontakta oss
                </a>
                <a 
                  href="/kontakt/support"
                  className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
                >
                  Support & Hjälp
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

export default OmOssTeam;