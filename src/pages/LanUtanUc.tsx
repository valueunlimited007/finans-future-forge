import { useEffect } from "react";
import SeoManager from "../seo/SeoManager";
import LegacyHeader from "../components/LegacyHeader";
import LegacyFooter from "../components/LegacyFooter";

export default function LanUtanUc() {
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
          <h1 className="text-4xl font-bold mb-6">Lån utan UC – så funkar kreditupplysning utan UC</h1>
          <p className="text-xl mb-8">Allt om Creditsafe och Bisnode, räntor och risker. Jämför långivare utan UC och läs vanliga frågor & svar.</p>
          
          <div className="prose max-w-none">
            <h2>Vad betyder "lån utan UC"?</h2>
            <p>När en långivare erbjuder "lån utan UC" betyder det att de inte gör en kreditupplysning hos UC (Upplysningscentralen) när du ansöker. Istället använder de ofta andra kreditupplysningsföretag som Creditsafe eller Bisnode.</p>
            
            <h3>Skillnaden mellan UC och andra kreditupplysningar</h3>
            <ul>
              <li><strong>UC (Upplysningscentralen)</strong> - Sveriges största kreditupplysningsföretag</li>
              <li><strong>Creditsafe</strong> - Alternativ kreditupplysningsbyrå</li>
              <li><strong>Bisnode</strong> - Ännu ett alternativ till UC</li>
            </ul>
            
            <h3>Fördelar och nackdelar</h3>
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-green-800 font-semibold mb-2">Fördelar</h4>
                <ul className="text-green-700">
                  <li>Ingen UC-notering vid ansökan</li>
                  <li>Kan vara enklare att få lånet beviljat</li>
                  <li>Snabbare process</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-red-800 font-semibold mb-2">Nackdelar</h4>
                <ul className="text-red-700">
                  <li>Ofta högre räntor</li>
                  <li>Kreditupplysning görs ändå (bara inte hos UC)</li>
                  <li>Kan ha sämre villkor</li>
                </ul>
              </div>
            </div>
            
            <h3>Vanliga frågor</h3>
            <div className="space-y-4">
              <div>
                <h4>Görs verkligen ingen kreditupplysning alls?</h4>
                <p>Nej, långivaren gör fortfarande en kreditupplysning - bara inte hos UC. De använder istället andra företag som Creditsafe eller Bisnode.</p>
              </div>
              <div>
                <h4>Är räntan högre på lån utan UC?</h4>
                <p>Ofta ja, eftersom långivaren tar en större risk när de inte använder den mest omfattande kreditupplysningen från UC.</p>
              </div>
              <div>
                <h4>Vem passar lån utan UC för?</h4>
                <p>Det kan passa personer som har betalningsanmärkningar hos UC men ändå har en stabil ekonomi, eller de som vill undvika UC-noteringar.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <LegacyFooter />
    </>
  );
}
