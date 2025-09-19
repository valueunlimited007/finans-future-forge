import ModernNavigation from "../components/ModernNavigation";
import LegacyFooter from "../components/LegacyFooter";
import RichKreditkort from "../components/RichKreditkort";
import SeoManager from "../seo/SeoManager";

export default function Kreditkort() {
  return (
    <>
      <SeoManager />
      <ModernNavigation />
      <RichKreditkort />
      <LegacyFooter />
    </>
  );
}
