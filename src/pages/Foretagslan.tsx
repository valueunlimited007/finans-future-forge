import ModernNavigation from "../components/ModernNavigation";
import LegacyFooter from "../components/LegacyFooter";
import RichForetagslan from "../components/RichForetagslan";
import SeoManager from "../seo/SeoManager";

export default function Foretagslan() {
  return (
    <>
      <SeoManager />
      <ModernNavigation />
      <RichForetagslan />
      <LegacyFooter />
    </>
  );
}
