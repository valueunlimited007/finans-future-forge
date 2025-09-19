import React from "react";
import { Helmet } from "react-helmet-async";
import ModernNavigation from "@/components/ModernNavigation";
import LegacyFooter from "@/components/LegacyFooter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, BookOpen, Award, Calendar, Mail } from "lucide-react";
import { useParams, Link } from "react-router-dom";

const ForfattareProfile = () => {
  const { slug } = useParams();
  
  // Mock data - in a real app this would come from API/database
  const authors: { [key: string]: any } = {
    "lisa-eriksson": {
      name: "Lisa Eriksson",
      title: "Ekonomijournalist & Kreditexpert",
      bio: "Lisa är en erfaren ekonomijournalist med över 12 års erfarenhet av finansmarknaderna. Hon specialiserar sig på konsumentekonomi, kreditkort och sparande. Lisa har tidigare arbetat på Svenska Dagbladet och är författare till boken 'Smart Privatekonomi'.",
      expertise: ["Konsumentekonomi", "Kreditkort", "Sparande & Investeringar", "Finansjournalistik"],
      credentials: [
        "Ekonomijournalist på Svenska Dagbladet 2015-2020",
        "Författare: 'Smart Privatekonomi' (2022)",
        "Medlem i Ekonomijournalisternas Förening",
        "Pristagare: Årets Konsumentekonomi-artikel 2021"
      ],
      articles: [
        { title: "Bästa kreditkorten 2025", slug: "basta-kreditkorten-2025", date: "2025-01-15" },
        { title: "Så väljer du rätt sparkonto", slug: "valj-ratt-sparkonto", date: "2025-01-10" },
        { title: "Kreditkortshistorik i Sverige", slug: "kreditkort-historia", date: "2025-01-05" }
      ]
    },
    "erik-johansson": {
      name: "Erik Johansson",
      title: "Chefredaktör & Låneexpert",
      bio: "Erik leder Finansguidens redaktionella arbete och har gedigen erfarenhet från finansbranschen. Han har arbetat som kredithandläggare och har djup förståelse för låneprocesser och riskbedömning.",
      expertise: ["Privatlån", "Företagslån", "Kreditbedömning", "Finansiella marknader"],
      credentials: [
        "Civilekonom från Handelshögskolan",
        "Tidigare kredithandläggare på storbank",
        "10+ års erfarenhet av låneförmedling",
        "Certifierad finansiell rådgivare"
      ],
      articles: [
        { title: "Guide till privatlån 2025", slug: "privatlan-guide-2025", date: "2025-01-12" },
        { title: "Så fungerar UC-kontrollen", slug: "uc-kontroll-guide", date: "2025-01-08" },
        { title: "Företagslån för startups", slug: "foretagslan-startups", date: "2025-01-03" }
      ]
    }
  };

  const author = authors[slug || ""] || authors["lisa-eriksson"];

  return (
    <>
      <Helmet>
        <title>{author.name} - {author.title} | Finansguiden.se</title>
        <meta 
          name="description" 
          content={`Läs mer om ${author.name}, ${author.title} på Finansguiden.se. ${author.bio.substring(0, 150)}...`}
        />
        <link rel="canonical" href={`https://finansguiden.se/författare/${slug}`} />
      </Helmet>

      <ModernNavigation />
      
      <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Author Header */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                      <User className="h-16 w-16 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-foreground mb-2">
                      {author.name}
                    </h1>
                    <p className="text-xl text-primary mb-4">
                      {author.title}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {author.bio}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {author.expertise.map((skill: string) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Mail className="h-4 w-4" />
                        <span>Kontakta författaren</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        <span>{author.articles.length} artiklar</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-8 lg:grid-cols-3">
              {/* Articles */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Senaste artiklarna
                </h2>
                <div className="space-y-4">
                  {author.articles.map((article: any) => (
                    <Card key={article.slug} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                              <Link 
                                to={`/artikel/${article.slug}`}
                                className="hover:text-primary transition-colors"
                              >
                                {article.title}
                              </Link>
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>{new Date(article.date).toLocaleDateString('sv-SE')}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Credentials */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-foreground">Meriter</h3>
                    </div>
                    <ul className="space-y-2 text-sm">
                      {author.credentials.map((credential: string, index: number) => (
                        <li key={index} className="text-muted-foreground">
                          • {credential}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Contact */}
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-foreground mb-4">
                      Kontakta {author.name.split(' ')[0]}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Har du frågor eller förslag på artiklar?
                    </p>
                    <a 
                      href={`mailto:${author.name.toLowerCase().replace(' ', '.')}@finansguiden.se`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      Skicka e-post
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <LegacyFooter />
    </>
  );
};

export default ForfattareProfile;