import SimpleNavigation from "../components/SimpleNavigation";
import LegacyFooter from "../components/LegacyFooter";
import RichKreditkort from "../components/RichKreditkort";
import SeoManager from "../seo/SeoManager";

export default function Kreditkort() {
  return (
    <>
      <SeoManager />
      <SimpleNavigation />
      <RichKreditkort />
      <LegacyFooter />
    </>
  );
}
