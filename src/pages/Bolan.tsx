import SimpleNavigation from "../components/SimpleNavigation";
import LegacyFooter from "../components/LegacyFooter";
import RichBolan from "../components/RichBolan";
import SeoManager from "../seo/SeoManager";

export default function Bolan() {
  return (
    <>
      <SeoManager />
      <SimpleNavigation />
      <RichBolan />
      <LegacyFooter />
    </>
  );
}
