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
import PrivatlanBasta from "./pages/privatlan/Basta";
import PrivatlanJamfor from "./pages/privatlan/Jamfor";
import PrivatlanRantejamforelse from "./pages/privatlan/Rantejamforelse";
import PrivatlanLanMedBetalningsanmarkning from "./pages/privatlan/LanMedBetalningsanmarkning";
import Laneformedlare from "./pages/Laneformedlare";
import Foretagslan from "./pages/Foretagslan";
import AndraTjanster from "./pages/AndraTjanster";
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
import LagstRantaBlancolan from "./pages/guider/LagstRantaBlancolan";
import BastaLanet from "./pages/guider/BastaLanet";
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

// German pages
import HomeDE from "./pages/de/Home";
import RatenkreditDE from "./pages/de/Ratenkredit";
import KreditkartenDE from "./pages/de/Kreditkarten";
import UnternehmenskreditDE from "./pages/de/Unternehmenskredit";
import ImpressumDE from "./pages/de/Impressum";
import DatenschutzDE from "./pages/de/Datenschutz";
import GlossarDE from "./pages/de/Glossar";
import GlossarSlugDE from "./routes/glossar/[slug]";
import AffiliateDE from "./pages/de/Affiliate";
import UberUnsDE from "./pages/de/UberUns";
import CookiesDE from "./pages/de/Cookies";
import BestRatenkreditDE from "./pages/de/ratenkredit/Beste";
import RatenkreditZinsenDE from "./pages/de/ratenkredit/Zinsen";
import KreditOhneSchufaDE from "./pages/de/ratenkredit/OhneSchufa";
import BesterKreditRatgeberDE from "./pages/de/ratgeber/BesterKredit";
import ZinsenVerstehenDE from "./pages/de/ratgeber/Zinsen";
import GehaltsoptimierungDE from "./pages/de/ratgeber/Gehaltsoptimierung";
import SparkontoDE from "./pages/de/ratgeber/Sparkonto";
import FinanzTippsDE from "./pages/de/ratgeber/Finanz-Tipps";
import KarriereDE from "./pages/de/ratgeber/Karriere";
import MonatlichesSparenDE from "./pages/de/ratgeber/Monatliches-Sparen";
import AutoKostenDE from "./pages/de/ratgeber/Auto-Kosten";
import BankenVergleichDE from "./pages/de/ratgeber/Banken-Vergleich";
import ImmobilienmarktDE from "./pages/de/ratgeber/Immobilienmarkt";
import DeutscheEinkommenDE from "./pages/de/ratgeber/Deutsche-Einkommen";
import NavigationDESimple from "./components/de/NavigationDESimple";
import FooterDE from "./components/de/FooterDE";

// Casino components
import CasinoNavigation from "./components/CasinoNavigation";
import CasinoNavigationKasinos from "./components/CasinoNavigationKasinos";
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
              {/* German site routes */}
              {siteConfig.market === 'DE' ? (
                <>
                  <Route path="/" element={<GermanSiteWrapper><HomeDE /></GermanSiteWrapper>} />
                  <Route path="/ratenkredit" element={<GermanSiteWrapper><RatenkreditDE /></GermanSiteWrapper>} />
                  <Route path="/ratenkredit/beste" element={<GermanSiteWrapper><BestRatenkreditDE /></GermanSiteWrapper>} />
                  <Route path="/ratenkredit/zinsen" element={<GermanSiteWrapper><RatenkreditZinsenDE /></GermanSiteWrapper>} />
                  <Route path="/ratenkredit/ohne-schufa" element={<GermanSiteWrapper><KreditOhneSchufaDE /></GermanSiteWrapper>} />
                  <Route path="/kreditkarten" element={<GermanSiteWrapper><KreditkartenDE /></GermanSiteWrapper>} />
                  <Route path="/unternehmenskredit" element={<GermanSiteWrapper><UnternehmenskreditDE /></GermanSiteWrapper>} />
                  <Route path="/glossar" element={<GermanSiteWrapper><GlossarDE /></GermanSiteWrapper>} />
                  <Route path="/glossar/:slug" element={<GlossarSlugDE />} />
                  <Route path="/impressum" element={<GermanSiteWrapper><ImpressumDE /></GermanSiteWrapper>} />
                  <Route path="/datenschutz" element={<GermanSiteWrapper><DatenschutzDE /></GermanSiteWrapper>} />
                  <Route path="/cookies" element={<GermanSiteWrapper><CookiesDE /></GermanSiteWrapper>} />
                  <Route path="/uber-uns" element={<GermanSiteWrapper><UberUnsDE /></GermanSiteWrapper>} />
                  <Route path="/ratgeber/bester-kredit" element={<GermanSiteWrapper><BesterKreditRatgeberDE /></GermanSiteWrapper>} />
                  <Route path="/ratgeber/zinsen" element={<GermanSiteWrapper><ZinsenVerstehenDE /></GermanSiteWrapper>} />
                  <Route path="/ratgeber/gehaltsoptimierung" element={<GermanSiteWrapper><GehaltsoptimierungDE /></GermanSiteWrapper>} />
                  <Route path="/ratgeber/sparkonto" element={<GermanSiteWrapper><SparkontoDE /></GermanSiteWrapper>} />
                  <Route path="/ratgeber/finanz-tipps" element={<GermanSiteWrapper><FinanzTippsDE /></GermanSiteWrapper>} />
                  <Route path="/ratgeber/karriere" element={<GermanSiteWrapper><KarriereDE /></GermanSiteWrapper>} />
                  <Route path="/ratgeber/monatliches-sparen" element={<GermanSiteWrapper><MonatlichesSparenDE /></GermanSiteWrapper>} />
                  <Route path="/ratgeber/auto-kosten" element={<GermanSiteWrapper><AutoKostenDE /></GermanSiteWrapper>} />
                  <Route path="/ratgeber/banken-vergleich" element={<GermanSiteWrapper><BankenVergleichDE /></GermanSiteWrapper>} />
                  <Route path="/ratgeber/immobilienmarkt" element={<GermanSiteWrapper><ImmobilienmarktDE /></GermanSiteWrapper>} />
                  <Route path="/ratgeber/deutsche-einkommen" element={<GermanSiteWrapper><DeutscheEinkommenDE /></GermanSiteWrapper>} />
                  <Route path="/affiliate" element={<GermanSiteWrapper><AffiliateDE /></GermanSiteWrapper>} />
                  <Route path="*" element={<GermanSiteWrapper><NotFoundBranded /></GermanSiteWrapper>} />
                </>
              ) : isCasino ? (
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
                  <Route path="/se/guider/nyborjare" element={<CasinoBeginnerGuidePage />} />
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
                  <Route path="/privatlan/basta" element={<PrivatlanBasta />} />
                  <Route path="/privatlan/jamfor" element={<PrivatlanJamfor />} />
                  <Route path="/privatlan/rantejamforelse" element={<PrivatlanRantejamforelse />} />
                  <Route path="/privatlan/lan-med-betalningsanmarkning" element={<PrivatlanLanMedBetalningsanmarkning />} />
                  <Route path="/laneformedlare" element={<Laneformedlare />} />
                  <Route path="/foretagslan" element={<Foretagslan />} />
                  <Route path="/andra-tjanster" element={<AndraTjanster />} />
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
                  <Route path="/guider/lagst-ranta-blancolan" element={<LagstRantaBlancolan />} />
                  <Route path="/guider/basta-lanet" element={<BastaLanet />} />
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
const KasinosSitePage = ({ children }: { children: React.ReactNode }) => {
  const siteConfig = getSiteConfig();
  const isCasino = isCasinoSite();
  
  return (
    <>
      {isCasino ? (
        <CasinoNavigationKasinos />
      ) : (
        <CasinoNavigation />
      )}
      {children}
      <CasinoFooter />
    </>
  );
};

// German site wrapper
const GermanSiteWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavigationDESimple />
      <main className="min-h-screen pt-[80px] sm:pt-[96px] md:pt-[112px] lg:pt-[128px]">
        {children}
      </main>
      <FooterDE />
    </>
  );
};

export default App;