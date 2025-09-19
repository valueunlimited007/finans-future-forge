import ModernNavigation from "../components/ModernNavigation";
import LegacyFooter from "../components/LegacyFooter";
import RichLanUtanUc from "../components/RichLanUtanUc";
import SeoManager from "../seo/SeoManager";

export default function LanUtanUc() {
  return (
    <>
      <SeoManager />
      <ModernNavigation />
      <RichLanUtanUc />
      <LegacyFooter />
    </>
  );
}
