import { useEffect } from "react";
import SeoManager from "../seo/SeoManager";
import LegacyHeader from "../components/LegacyHeader";
import LegacyFooter from "../components/LegacyFooter";

export default function Kreditkort() {
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
          <h1 className="text-4xl font-bold mb-6">Kreditkort 2025 – hitta kortet som ger mest tillbaka</h1>
          <p className="text-xl mb-8">Jämför bonus, cashback, reseförsäkring och avgifter. Se topplistor och hitta bästa kreditkortet för din ekonomi.</p>
          
          <div className="prose max-w-none">
            <h2>Vad ska du tänka på när du väljer kreditkort?</h2>
            <p>Ett kreditkort kan ge dig både fördelar och kostnader. Här är vad du bör överväga:</p>
            
            <h3>Typer av kreditkort</h3>
            <ul>
              <li><strong>Belöningskort</strong> - Få poäng eller cashback på dina köp</li>
              <li><strong>Resekort</strong> - Inkluderar reseförsäkringar och flygplatslounge</li>
              <li><strong>Låg ränta</strong> - Bra om du ibland behöver dela upp betalningar</li>
              <li><strong>Avgiftsfria</strong> - Inga årliga avgifter</li>
            </ul>
            
            <h3>Viktiga faktorer att jämföra</h3>
            <ul>
              <li><strong>Årsavgift</strong> - Vad kortet kostar per år</li>
              <li><strong>Ränta</strong> - Kostnad om du inte betalar hela beloppet</li>
              <li><strong>Belöningsprogram</strong> - Hur mycket får du tillbaka?</li>
              <li><strong>Försäkringar</strong> - Vilka försäkringar ingår?</li>
              <li><strong>Uttagsavgifter</strong> - Kostnader för kontantuttag</li>
            </ul>
          </div>
        </div>
      </main>
      <LegacyFooter />
    </>
  );
}
