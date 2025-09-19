import ModernNavigation from "../components/ModernNavigation";
import LegacyFooter from "../components/LegacyFooter";
import RichHome from "./RichHome";
import SeoManager from "../seo/SeoManager";

export default function Home() {
  return (
    <>
      <SeoManager />
      <ModernNavigation />
      <RichHome />
      <LegacyFooter />
    </>
  );
}
