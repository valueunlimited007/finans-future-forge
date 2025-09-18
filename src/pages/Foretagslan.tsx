import { useEffect } from "react";
import SeoManager from "../seo/SeoManager";
import LegacyHeader from "../components/LegacyHeader";
import LegacyFooter from "../components/LegacyFooter";

export default function Foretagslan() {
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
          <h1 className="text-4xl font-bold mb-6">Företagslån 2025 – din kompletta guide</h1>
          <p className="text-xl mb-8">Så fungerar företagslån: belopp, krav, räntor och alternativ. Jämför aktörer och finansiera verksamheten rätt.</p>
          
          <div className="prose max-w-none">
            <h2>Vad är ett företagslån?</h2>
            <p>Ett företagslån är en kredit som riktar sig till företag och används för att finansiera verksamheten, investeringar eller överbrygga tillfälliga likviditetsbehov.</p>
            
            <h3>Typer av företagslån</h3>
            <ul>
              <li><strong>Rörelsekapitallån</strong> - För löpande utgifter och säsongssvängningar</li>
              <li><strong>Investeringslån</strong> - För maskiner, utrustning och lokaler</li>
              <li><strong>Kreditlinje</strong> - Flexibel kredit som du kan utnyttja vid behov</li>
              <li><strong>Fakturalån</strong> - Låna mot dina utestående fakturor</li>
            </ul>
            
            <h3>Krav för att få företagslån</h3>
            <ul>
              <li>Registrerat företag (minst 6-12 månader)</li>
              <li>Stabil omsättning och lönsamhet</li>
              <li>God kreditvärdighet</li>
              <li>Genomgående ekonomisk redovisning</li>
              <li>Säkerhet kan krävas för större belopp</li>
            </ul>
            
            <h3>Så jämför du företagslån</h3>
            <p>Viktiga faktorer att titta på:</p>
            <ul>
              <li><strong>Räntenivå</strong> - Ofta rörlig och beroende av företagets risk</li>
              <li><strong>Lånebelopp</strong> - Hur mycket kan du låna?</li>
              <li><strong>Löptid</strong> - Från månader till flera år</li>
              <li><strong>Säkerhetskrav</strong> - Personlig borgen eller företagssäkerhet</li>
              <li><strong>Snabbhet</strong> - Hur fort får du pengarna?</li>
            </ul>
          </div>
        </div>
      </main>
      <LegacyFooter />
    </>
  );
}
