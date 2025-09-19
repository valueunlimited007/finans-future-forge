import ModernNavigation from "../components/ModernNavigation";
import LegacyFooter from "../components/LegacyFooter";
import RichPrivatlan from "../components/RichPrivatlan";
import SeoManager from "../seo/SeoManager";

export default function Privatlan() {
  return (
    <>
      <SeoManager />
      <ModernNavigation />
      <RichPrivatlan />
      <LegacyFooter />
    </>
  );
}
