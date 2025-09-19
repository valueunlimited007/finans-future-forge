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
import { HelpCircle, MessageSquare, Clock, Phone, Mail } from "lucide-react";

const KontaktSupport = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const supportCategories = [
    { value: "loan", label: "Frågor om lån" },
    { value: "credit-card", label: "Kreditkortsfrågor" },
    { value: "calculator", label: "Hjälp med kalkylatorer" },
    { value: "account", label: "Kontoproblem" },
    { value: "technical", label: "Tekniska problem" },
    { value: "other", label: "Övrigt" }
  ];

  const faqItems = [
    {
      question: "Hur fungerar lånejmförelserna?",
      answer: "Vi samlar information från alla större långivare och visar dig aktuella räntor och villkor. Vårt system uppdateras dagligen för att säkerställa att du får den senaste informationen."
    },
    {
      question: "Är era tjänster verkligen gratis?",
      answer: "Ja, alla våra jämförelser och kalkylatorer är helt gratis att använda. Vi finansieras genom provisioner från leverantörer när du väljer att ansöka genom våra länkar."
    },
    {
      question: "Hur snabbt kan jag få svar på min fråga?",
      answer: "Vi strävar efter att svara på alla frågor inom 24 timmar på vardagar. Tekniska problem och akuta frågor prioriteras och besvaras oftast inom några timmar."
    },
    {
      question: "Kan ni ge personlig finansiell rådgivning?",
      answer: "Vi kan ge allmän information och vägledning, men ger inte personlig finansiell rådgivning. För specifika råd rekommenderar vi att du kontaktar en certifierad rådgivare."
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    alert("Tack för ditt meddelande! Vi återkommer inom 24 timmar.");
  };

  return (
    <>
      <Helmet>
        <title>Support & Hjälp | Finansguiden.se</title>
        <meta 
          name="description" 
          content="Behöver du hjälp? Kontakta vår support för frågor om lån, kreditkort eller våra tjänster. Vi svarar inom 24 timmar." 
        />
        <link rel="canonical" href="https://finansguiden.se/kontakt/support" />
      </Helmet>

      <ModernNavigation />
      
      <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Support & Hjälp
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Vi är här för att hjälpa dig! Har du frågor om våra tjänster, behöver hjälp med 
              kalkylatorer eller har tekniska problem? Kontakta oss så hjälper vi dig.
            </p>
          </header>

          <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Skicka oss ett meddelande
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Namn *</Label>
                        <Input id="name" placeholder="Ditt namn" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-post *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="din@email.se" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="category">Kategori</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Välj kategori" />
                        </SelectTrigger>
                        <SelectContent>
                          {supportCategories.map((category) => (
                            <SelectItem key={category.value} value={category.value}>
                              {category.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Ämne *</Label>
                      <Input 
                        id="subject" 
                        placeholder="Beskriv kort ditt ärende" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Meddelande *</Label>
                      <Textarea 
                        id="message"
                        placeholder="Beskriv ditt ärende så detaljerat som möjligt..."
                        rows={6}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Skickar..." : "Skicka meddelande"}
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
                  <CardTitle>Kontaktinformation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">E-post</p>
                      <p className="text-sm text-muted-foreground">support@finansguiden.se</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Svarstid</p>
                      <p className="text-sm text-muted-foreground">Inom 24 timmar</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Telefon</p>
                      <p className="text-sm text-muted-foreground">Endast e-post just nu</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5" />
                    Vanliga frågor
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {faqItems.map((item, index) => (
                    <div key={index} className="border-b border-border pb-4 last:border-b-0">
                      <h3 className="font-medium text-foreground mb-2">
                        {item.question}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.answer}
                      </p>
                    </div>
                  ))}
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

export default KontaktSupport;