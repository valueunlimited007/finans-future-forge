import SimpleNavigation from "../components/SimpleNavigation";
import LegacyFooter from "../components/LegacyFooter";
import RichHome from "./RichHome";
import SeoManager from "../seo/SeoManager";

export default function Home() {
  return (
    <>
      <SeoManager />
      <SimpleNavigation />
      <RichHome />
      <LegacyFooter />
    </>
  );
}
