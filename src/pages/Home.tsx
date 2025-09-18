import { useEffect } from "react";
import SeoManager from "../seo/SeoManager";
import LegacyHeader from "../components/LegacyHeader";
import LegacyFooter from "../components/LegacyFooter";

export default function Home() {
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
          <h1 className="text-4xl font-bold mb-6">Finansguiden.se – jämför lån & kreditkort smart</h1>
          <p className="text-xl mb-8">Opartiska guider och jämförelser av privatlån, företagslån, kreditkort och lån utan UC. Uppdaterade råd, kalkyler och topplistor.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-3">Privatlån</h2>
              <p className="mb-4">Jämför banker och låneförmedlare. Se räntor, krav och månadskostnad.</p>
              <a href="/privatlan" className="text-primary hover:underline">Läs mer om privatlån →</a>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-3">Kreditkort</h2>
              <p className="mb-4">Hitta kortet som ger mest tillbaka med bonus, cashback och reseförsäkring.</p>
              <a href="/kreditkort" className="text-primary hover:underline">Jämför kreditkort →</a>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-3">Företagslån</h2>
              <p className="mb-4">Finansiera verksamheten rätt med vår kompletta guide till företagslån.</p>
              <a href="/foretagslan" className="text-primary hover:underline">Läs om företagslån →</a>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-3">Lån utan UC</h2>
              <p className="mb-4">Allt om Creditsafe och Bisnode, räntor och risker.</p>
              <a href="/lan-utan-uc" className="text-primary hover:underline">Utforska lån utan UC →</a>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-3">Ordlista</h2>
              <p className="mb-4">Sök i vår finansordlista A–Ö med över 400 termer.</p>
              <a href="/ordlista" className="text-primary hover:underline">Besök ordlistan →</a>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-3">Om oss</h2>
              <p className="mb-4">Läs mer om Finansguiden.se och vår redaktionella integritet.</p>
              <a href="/om" className="text-primary hover:underline">Om Finansguiden →</a>
            </div>
          </div>
        </div>
      </main>
      <LegacyFooter />
    </>
  );
}
