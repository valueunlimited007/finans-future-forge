import { useEffect } from "react";
import SeoManager from "../seo/SeoManager";
import LegacyHeader from "../components/LegacyHeader";
import LegacyFooter from "../components/LegacyFooter";

export default function Privatlan() {
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
          <h1 className="text-4xl font-bold mb-6">Privatlån – jämför räntor & låna smart</h1>
          <p className="text-xl mb-8">Jämför banker och låneförmedlare. Se räntor, krav och månadskostnad – samt tips för att sänka räntan.</p>
          
          <div className="prose max-w-none">
            <h2>Vad är ett privatlån?</h2>
            <p>Ett privatlån är en kredit utan säkerhet som du kan använda till vad du vill - från hemrenovering till att betala av dyrare krediter.</p>
            
            <h3>Fördelar med privatlån</h3>
            <ul>
              <li>Ingen säkerhet krävs</li>
              <li>Fast ränta under låneperioden</li>
              <li>Förutsägbara månadskostnader</li>
              <li>Snabb ansökan och utbetalning</li>
            </ul>
            
            <h3>Så jämför du privatlån</h3>
            <p>När du jämför privatlån bör du titta på:</p>
            <ul>
              <li><strong>Effektiv ränta</strong> - den verkliga kostnaden</li>
              <li><strong>Månadskostnad</strong> - vad du betalar varje månad</li>
              <li><strong>Löptid</strong> - hur länge lånet löper</li>
              <li><strong>Avgifter</strong> - uppläggningsavgifter och andra kostnader</li>
            </ul>
          </div>
        </div>
      </main>
      <LegacyFooter />
    </>
  );
}
