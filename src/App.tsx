import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
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
import NotFoundBranded from "./pages/NotFoundBranded";
import KasinosHome from "./pages/KasinosHome";
import KasinosOm from "./pages/KasinosOm";
import KasinosCookies from "./pages/KasinosCookies";
import KasinosIntegritetspolicy from "./pages/KasinosIntegritetspolicy";
import KasinosKontakt from "./pages/KasinosKontakt";
import KasinosAnsvarsfriskrivning from "./pages/KasinosAnsvarsfriskrivning";
import KasinosSpelregler from "./pages/KasinosSpelregler";
import { getSiteConfig, isCasinoSite } from "./lib/siteConfig";
import SiteSelector from "./components/SiteSelector";

// Casino components
import CasinoNavigation from "./components/CasinoNavigation";
import CasinoFooter from "./components/CasinoFooter";
import CasinoBankIDPageComponent from "./pages/CasinoBankIDPage";
import CasinoPayNPlayPageComponent from "./pages/CasinoPayNPlayPage";
import CasinoLiveCasinoPageComponent from "./pages/CasinoLiveCasinoPage";
import CasinoReviewPageComponent from "./pages/CasinoReviewPage";
import SpelpausGuidePageComponent from "./pages/SpelpausGuidePage";
import CasinoFastWithdrawalsPageComponent from "./pages/CasinoFastWithdrawalsPage";
import CasinoSlotsPageComponent from "./pages/CasinoSlotsPage";
import CasinoBordsspelPageComponent from "./pages/CasinoBordsspelPage";
import CasinoBeginnerGuidePageComponent from "./pages/CasinoBeginnerGuidePage";
import ResponsibleGamblingGuidePageComponent from "./pages/ResponsibleGamblingGuidePage";
import SwedishLicenseGuidePageComponent from "./pages/SwedishLicenseGuidePage";
import { FavoritesPage } from "./components/FavoriteCasinos";

const queryClient = new QueryClient();

// Site-aware App component
const App = () => {
  const siteConfig = getSiteConfig();
  const isCasino = isCasinoSite();

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <SiteSelector />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              {/* Casino site routes */}
{isCasino ? (
                <>
                  <Route path="/" element={<CasinoHomeWrapper />} />
                  <Route path="/se" element={<CasinoHomeWrapper />} />
                  <Route path="/se/casinon-med-bankid" element={<CasinoCategoryPage category="bankid" />} />
                  <Route path="/se/pay-n-play" element={<CasinoCategoryPage category="pay-n-play" />} />
                  <Route path="/se/live-casino" element={<CasinoCategoryPage category="live-casino" />} />
                  <Route path="/se/snabbast-uttag" element={<CasinoCategoryPage category="fast-withdrawals" />} />
                  <Route path="/se/slots" element={<CasinoCategoryPage category="slots" />} />
                  <Route path="/se/bordsspel" element={<CasinoCategoryPage category="bordsspel" />} />
                  <Route path="/se/recension/:brandId" element={<CasinoReviewPage />} />
                  <Route path="/se/guider/spelpaus" element={<SpelpausGuidePage />} />
                  <Route path="/se/guider/nyborjarguide" element={<CasinoBeginnerGuidePage />} />
                  <Route path="/se/guider/ansvarfullt-spelande" element={<ResponsibleGamblingGuidePage />} />
                  <Route path="/se/guider/svenska-licenser" element={<SwedishLicenseGuidePage />} />
                  <Route path="/se/favoriter" element={<FavoritesPageWrapper />} />
        <Route path="/om" element={<KasinosSitePage><KasinosOm /></KasinosSitePage>} />
                   <Route path="/cookies" element={<KasinosSitePage><KasinosCookies /></KasinosSitePage>} />
                   <Route path="/integritetspolicy" element={<KasinosSitePage><KasinosIntegritetspolicy /></KasinosSitePage>} />
                   <Route path="/kontakt" element={<KasinosSitePage><KasinosKontakt /></KasinosSitePage>} />
                   <Route path="/ansvarsfriskrivning" element={<KasinosSitePage><KasinosAnsvarsfriskrivning /></KasinosSitePage>} />
                   <Route path="/se/guider/spelregler" element={<KasinosSitePage><KasinosSpelregler /></KasinosSitePage>} />
                  <Route path="*" element={<NotFoundBranded />} />
                </>
              ) : (
                /* Finance site routes (original) */
                <>
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
                  <Route path="/bostadsmarknad-analys" element={<BostadsmarknadsAnalys />} />
                  <Route path="/karriar-guide" element={<KarriärGuide />} />
                  <Route path="/ekonomiska-lifehacks" element={<EkonomiskaLifehacks />} />
                  <Route path="/bilekonomy-guide" element={<BilekonomyGuide />} />
                  <Route path="/bankjamforelse-guide" element={<BankjämförelseGuide />} />
                  <Route path="/loneoptimeringsguide" element={<LöneoptimeringsGuide />} />
                  <Route path="/sparkonto-guide" element={<SparkontoGuide />} />
                  <Route path="/svenska-inkomster-2025" element={<SvenskaInkomster />} />
                  <Route path="/manadssparande-guide" element={<MånadssparandeGuide />} />
                  <Route path="*" element={<NotFoundBranded />} />
                </>
              )}
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

// Wrapper components for casino pages (to be implemented)
const CasinoHomeWrapper = () => <KasinosSitePage><KasinosHome /></KasinosSitePage>;
const CasinoCategoryPage = ({ category }: { category: string }) => {
  if (category === 'bankid') {
    return <KasinosSitePage><CasinoBankIDPageComponent /></KasinosSitePage>;
  }
  if (category === 'pay-n-play') {
    return <KasinosSitePage><CasinoPayNPlayPageComponent /></KasinosSitePage>;
  }
  if (category === 'live-casino') {
    return <KasinosSitePage><CasinoLiveCasinoPageComponent /></KasinosSitePage>;
  }
  if (category === 'fast-withdrawals') {
    return <KasinosSitePage><CasinoFastWithdrawalsPageComponent /></KasinosSitePage>;
  }
  if (category === 'slots') {
    return <KasinosSitePage><CasinoSlotsPageComponent /></KasinosSitePage>;
  }
  if (category === 'bordsspel') {
    return <KasinosSitePage><CasinoBordsspelPageComponent /></KasinosSitePage>;
  }
  return <KasinosSitePage><div>Casino Category: {category} (Coming Soon)</div></KasinosSitePage>;
};
const CasinoReviewPage = () => (
  <KasinosSitePage><CasinoReviewPageComponent /></KasinosSitePage>
);
const SpelpausGuidePage = () => (
  <KasinosSitePage><SpelpausGuidePageComponent /></KasinosSitePage>
);
const CasinoBeginnerGuidePage = () => (
  <KasinosSitePage><CasinoBeginnerGuidePageComponent /></KasinosSitePage>
);
const ResponsibleGamblingGuidePage = () => (
  <KasinosSitePage><ResponsibleGamblingGuidePageComponent /></KasinosSitePage>
);
const SwedishLicenseGuidePage = () => (
  <KasinosSitePage><SwedishLicenseGuidePageComponent /></KasinosSitePage>
);
const FavoritesPageWrapper = () => (
  <KasinosSitePage><FavoritesPage /></KasinosSitePage>
);

// Site layout wrapper
const KasinosSitePage = ({ children }: { children: React.ReactNode }) => (
  <>
    <CasinoNavigation />
    {children}
    <CasinoFooter />
  </>
);

export default App;