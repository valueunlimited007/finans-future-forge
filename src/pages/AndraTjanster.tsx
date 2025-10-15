import ModernNavigation from "../components/ModernNavigation";
import LegacyFooter from "../components/LegacyFooter";
import RichAndraTjanster from "../components/RichAndraTjanster";
import SeoManager from "../seo/SeoManager";

export default function AndraTjanster() {
  return (
    <>
      <SeoManager />
      <ModernNavigation />
      <RichAndraTjanster />
      <LegacyFooter />
    </>
  );
}
