import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import LanUtanUc from "./pages/LanUtanUc";
import Kreditkort from "./pages/Kreditkort";
import Privatlan from "./pages/Privatlan";
import Foretagslan from "./pages/Foretagslan";
import Cookies from "./pages/Cookies";
import Integritetspolicy from "./pages/Integritetspolicy";
import GlossaryIndex from "./routes/ordlista/index";
import GlossaryTermPage from "./routes/ordlista/[slug]";
import Sajtkarta from "./pages/Sajtkarta";
import Om from "./pages/Om";
import BostadsmarknadsAnalys from "./pages/BostadsmarknadsAnalys";
import KarriärGuide from "./pages/KarriärGuide";
import EkonomiskaLifehacks from "./pages/EkonomiskaLifehacks";
import BilekonomyGuide from "./pages/BilekonomyGuide";
import BankjämförelseGuide from "./pages/BankjämförelseGuide";
import LöneoptimeringsGuide from "./pages/LöneoptimeringsGuide";
import SparkontoGuide from "./pages/SparkontoGuide";
import SvenskaInkomster from "./pages/SvenskaInkomster";
import MånadssparandeGuide from "./pages/MånadssparandeGuide";
import Verktyg from "./pages/Verktyg";
import OmOssHistoria from "./pages/OmOssHistoria";
import OmOssTeam from "./pages/OmOssTeam";
import OmOssKarriar from "./pages/OmOssKarriar";
import KontaktSupport from "./pages/KontaktSupport";
import KontaktForsaljning from "./pages/KontaktForsaljning";
import Laneraknare from "./pages/tools/Laneraknare";
import ForfattareProfile from "./pages/ForfattareProfile";
import NotFoundBranded from "./pages/NotFoundBranded";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lan-utan-uc" element={<LanUtanUc />} />
            <Route path="/kreditkort" element={<Kreditkort />} />
            <Route path="/privatlan" element={<Privatlan />} />
            <Route path="/foretagslan" element={<Foretagslan />} />
            <Route path="/ordlista" element={<GlossaryIndex />} />
            <Route path="/ordlista/:slug" element={<GlossaryTermPage />} />
            <Route path="/sajtkarta" element={<Sajtkarta />} />
            <Route path="/om" element={<Om />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/integritetspolicy" element={<Integritetspolicy />} />
            <Route path="/bostadsmarknad-analys-2025" element={<BostadsmarknadsAnalys />} />
            <Route path="/karriar-100k-guide" element={<KarriärGuide />} />
            <Route path="/ekonomiska-lifehacks" element={<EkonomiskaLifehacks />} />
            <Route path="/bilekonomy-guide-2025" element={<BilekonomyGuide />} />
            <Route path="/bankjämförelse-guide-2025" element={<BankjämförelseGuide />} />
            <Route path="/löneoptimering-guide-2025" element={<LöneoptimeringsGuide />} />
            <Route path="/sparkonto-guide-2025" element={<SparkontoGuide />} />
            <Route path="/svenska-inkomster-2025" element={<SvenskaInkomster />} />
            <Route path="/manadssparande-guide" element={<MånadssparandeGuide />} />
            <Route path="/verktyg" element={<Verktyg />} />
            <Route path="/verktyg/laneraknare" element={<Laneraknare />} />
            <Route path="/om-oss/historia" element={<OmOssHistoria />} />
            <Route path="/om-oss/team" element={<OmOssTeam />} />
            <Route path="/om-oss/karriar" element={<OmOssKarriar />} />
            <Route path="/kontakt/support" element={<KontaktSupport />} />
            <Route path="/kontakt/forsaljning" element={<KontaktForsaljning />} />
            <Route path="/författare/:slug" element={<ForfattareProfile />} />
            <Route path="*" element={<NotFoundBranded />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;