import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import ModernNavigation from "@/components/ModernNavigation";
import LegacyFooter from "@/components/LegacyFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Briefcase, TrendingUp, Users, Mail, Phone, Clock } from "lucide-react";

const KontaktForsaljning = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const partnershipTypes = [
    { value: "bank", label: "Bank/Långivare" },
    { value: "fintech", label: "Fintech-företag" },
    { value: "insurance", label: "Försäkringsbolag" },
    { value: "broker", label: "Mäklare/Rådgivare" },
    { value: "media", label: "Media/PR" },
    { value: "other", label: "Övrigt" }
  ];

  const services = [
    {
      title: "Listning av produkter",
      description: "Få dina lån- och kreditprodukter listade i våra jämförelser och nå miljontals potentiella kunder.",
      icon: TrendingUp
    },
    {
      title: "Premiumprofil",
      description: "Framhäv ditt erbjudande med förbättrad synlighet och detaljerad produktinformation.",
      icon: Briefcase
    },
    {
      title: "Målgruppsanalys",
      description: "Få djupgående insikter om era kunder och marknaden genom vår dataanalys.",
      icon: Users
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    alert("Tack för ditt intresse! Vi återkommer inom 24 timmar för att diskutera möjligheter.");
  };

  return (
    <>
      <Helmet>
        <title>Partnerskap & Försäljning | Finansguiden.se</title>
        <meta 
          name="description" 
          content="Vill du samarbeta med Finansguiden.se? Vi hjälper banker och finansföretag att nå miljontals kunder. Kontakta vårt försäljningsteam idag." 
        />
        <link rel="canonical" href="https://finansguiden.se/kontakt/forsaljning" />
      </Helmet>

      <ModernNavigation />
      
      <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Partnerskap & Samarbeten
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nå miljontals svenskar som söker finansiella lösningar. Vi hjälper banker, 
              fintech-företag och andra aktörer att presentera sina produkter för rätt målgrupp.
            </p>
          </header>

          {/* Services Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">
              Våra Partnertjänster
            </h2>
            <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <Card key={service.title} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                          <IconComponent className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Berätta om ditt företag</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Fyll i formuläret så kontaktar vi dig för att diskutera samarbetsmöjligheter
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="contact-name">Kontaktperson *</Label>
                        <Input id="contact-name" placeholder="Ditt namn" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-email">E-post *</Label>
                        <Input 
                          id="contact-email" 
                          type="email" 
                          placeholder="din@email.se" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="company">Företag *</Label>
                        <Input id="company" placeholder="Företagsnamn" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefon</Label>
                        <Input id="phone" placeholder="+46 70 123 45 67" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="partnership-type">Typ av samarbete</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Välj typ av samarbete" />
                        </SelectTrigger>
                        <SelectContent>
                          {partnershipTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="products">Produkter/Tjänster</Label>
                      <Input 
                        id="products" 
                        placeholder="Vilka produkter erbjuder ni?" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="partnership-message">Meddelande *</Label>
                      <Textarea 
                        id="partnership-message"
                        placeholder="Berätta mer om ert företag och vad ni söker för samarbete..."
                        rows={6}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Skickar..." : "Skicka förfrågan"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Kontakt försäljning</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">E-post</p>
                      <p className="text-sm text-muted-foreground">partner@finansguiden.se</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Telefon</p>
                      <p className="text-sm text-muted-foreground">+46 8 123 456 78</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Svarstid</p>
                      <p className="text-sm text-muted-foreground">Inom 24 timmar</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Statistics */}
              <Card>
                <CardHeader>
                  <CardTitle>Vår räckvidd</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-4 border border-border rounded-lg">
                    <div className="text-2xl font-bold text-primary">2M+</div>
                    <div className="text-sm text-muted-foreground">Besökare per år</div>
                  </div>
                  
                  <div className="text-center p-4 border border-border rounded-lg">
                    <div className="text-2xl font-bold text-primary">50k+</div>
                    <div className="text-sm text-muted-foreground">Låneansökningar per månad</div>
                  </div>
                  
                  <div className="text-center p-4 border border-border rounded-lg">
                    <div className="text-2xl font-bold text-primary">95%</div>
                    <div className="text-sm text-muted-foreground">Återkommande besökare</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <LegacyFooter />
    </>
  );
};

export default KontaktForsaljning;