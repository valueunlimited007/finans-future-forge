import SimpleNavigation from "../components/SimpleNavigation";
import LegacyFooter from "../components/LegacyFooter";
import RichLanUtanUc from "../components/RichLanUtanUc";
import SeoManager from "../seo/SeoManager";

export default function LanUtanUc() {
  return (
    <>
      <SeoManager />
      <SimpleNavigation />
      <RichLanUtanUc />
      <LegacyFooter />
    </>
  );
}
