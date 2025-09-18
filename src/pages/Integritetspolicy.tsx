import { useEffect } from "react";
import SeoManager from "../seo/SeoManager";
import LegacyHeader from "../components/LegacyHeader";
import LegacyFooter from "../components/LegacyFooter";

export default function Integritetspolicy() {
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
          <h1 className="text-4xl font-bold mb-6">Integritetspolicy – Finansguiden.se</h1>
          <p className="text-xl mb-8">Hur vi hanterar personuppgifter och skyddar din integritet enligt GDPR och svensk lagstiftning.</p>
          
          <div className="prose max-w-none">
            <h2>Personuppgiftsansvarig</h2>
            <p>Finansguiden.se är personuppgiftsansvarig för behandlingen av dina personuppgifter.</p>
            
            <p>
              <strong>Kontaktuppgifter:</strong><br />
              E-post: <a href="mailto:hej@finansguiden.se" className="text-primary hover:underline">hej@finansguiden.se</a>
            </p>
            
            <h2>Vilka personuppgifter samlar vi in?</h2>
            <p>Vi kan samla in följande typer av personuppgifter:</p>
            <ul>
              <li><strong>Teknisk information:</strong> IP-adress, webbläsartyp, operativsystem</li>
              <li><strong>Användningsdata:</strong> Vilka sidor du besöker, hur länge du stannar</li>
              <li><strong>Kontaktuppgifter:</strong> Om du kontaktar oss via e-post</li>
            </ul>
            
            <h2>Varför behandlar vi personuppgifter?</h2>
            <p>Vi behandlar personuppgifter för följande ändamål:</p>
            <ul>
              <li>Tillhandahålla och förbättra vår tjänst</li>
              <li>Analysera användningen av webbplatsen</li>
              <li>Svara på dina frågor och förfrågningar</li>
              <li>Uppfylla rättsliga förpliktelser</li>
            </ul>
            
            <h2>Rättslig grund för behandling</h2>
            <p>Vi behandlar personuppgifter baserat på:</p>
            <ul>
              <li><strong>Berättigat intresse:</strong> För webbplatsanalys och förbättringar</li>
              <li><strong>Samtycke:</strong> För marknadsföringscookies (när tillämpligt)</li>
              <li><strong>Rättslig förpliktelse:</strong> När lagen kräver det</li>
            </ul>
            
            <h2>Dina rättigheter</h2>
            <p>Enligt GDPR har du följande rättigheter:</p>
            <ul>
              <li>Rätt till tillgång till dina personuppgifter</li>
              <li>Rätt till rättelse av felaktiga uppgifter</li>
              <li>Rätt till radering ("rätten att bli bortglömd")</li>
              <li>Rätt till begränsning av behandling</li>
              <li>Rätt till dataportabilitet</li>
              <li>Rätt att invända mot behandling</li>
            </ul>
            
            <h2>Hur länge sparar vi personuppgifter?</h2>
            <p>Vi sparar personuppgifter endast så länge som är nödvändigt för de ändamål de samlades in för, eller enligt gällande lagstiftning.</p>
            
            <h2>Säkerhet</h2>
            <p>Vi vidtar lämpliga tekniska och organisatoriska åtgärder för att skydda dina personuppgifter mot obehörig åtkomst, förlust eller förstöring.</p>
            
            <h2>Kontakt</h2>
            <p>Om du har frågor om denna integritetspolicy eller vill utöva dina rättigheter, kontakta oss på: <a href="mailto:hej@finansguiden.se" className="text-primary hover:underline">hej@finansguiden.se</a></p>
            
            <p><strong>Uppdaterad:</strong> 8 januari 2025</p>
          </div>
        </div>
      </main>
      <LegacyFooter />
    </>
  );
}
