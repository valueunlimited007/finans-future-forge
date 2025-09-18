import { useEffect } from "react";
import SeoManager from "../seo/SeoManager";
import LegacyHeader from "../components/LegacyHeader";
import LegacyFooter from "../components/LegacyFooter";

export default function Cookies() {
  useEffect(() => {
    const path = window.location.pathname;
    console.info("Mounted page:", path, "source:", "React component");
  }, []);
  
  return (
    <>
      <SeoManager />
      <LegacyHeader />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-6">Cookies – Finansguiden.se</h1>
          <p className="text-xl mb-8">Läs om vår cookiepolicy och hur vi använder kakor för att förbättra din upplevelse på sajten.</p>
          
          <div className="prose max-w-none">
            <h2>Vad är cookies?</h2>
            <p>Cookies är små textfiler som sparas på din enhet när du besöker en webbplats. De hjälper oss att förbättra din upplevelse genom att komma ihåg dina preferenser och analysera hur sajten används.</p>
            
            <h3>Vilka cookies använder vi?</h3>
            
            <h4>Nödvändiga cookies</h4>
            <p>These cookies are necessary for the website to function and cannot be switched off in our systems.</p>
            
            <h4>Analytiska cookies</h4>
            <p>Vi använder Google Analytics för att förstå hur besökare använder vår sajt. Detta hjälper oss att förbättra innehållet och användarupplevelsen.</p>
            
            <h4>Marknadsföringscookies</h4>
            <p>Vi kan använda cookies för att visa relevanta annonser och mäta effektiviteten av våra marknadsföringskampanjer.</p>
            
            <h3>Hantera cookies</h3>
            <p>Du kan när som helst ändra dina cookie-inställningar i din webbläsare. Observera att om du blockerar vissa cookies kan funktionaliteten på sajten påverkas.</p>
            
            <h3>Kontakt</h3>
            <p>Om du har frågor om vår användning av cookies, kontakta oss på: <a href="mailto:hej@finansguiden.se" className="text-primary hover:underline">hej@finansguiden.se</a></p>
            
            <p><strong>Uppdaterad:</strong> 8 januari 2025</p>
          </div>
        </div>
      </main>
      <LegacyFooter />
    </>
  );
}
