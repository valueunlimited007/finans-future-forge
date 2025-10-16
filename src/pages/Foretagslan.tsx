import SimpleNavigation from "../components/SimpleNavigation";
import LegacyFooter from "../components/LegacyFooter";
import RichForetagslan from "../components/RichForetagslan";
import SeoManager from "../seo/SeoManager";

export default function Foretagslan() {
  return (
    <>
      <SeoManager />
      <SimpleNavigation />
      <RichForetagslan />
      <LegacyFooter />
    </>
  );
}
