import { useEffect } from "react";
import ModernNavigation from "../components/ModernNavigation";
import LegacyPage from "./LegacyPage";
import SeoManager from "../seo/SeoManager";
import LegacyFooter from "../components/LegacyFooter";
import cookiesHtml from "../../cookies.html?raw";

export default function Cookies() {
  useEffect(() => {
    const path = window.location.pathname;
    console.info("Mounted page:", path, "source:", "cookies.html");
    console.info("[FG_PAGE]", path, "src len:", cookiesHtml.length, "head:", cookiesHtml.slice(0,100));
  }, []);
  return (
    <>
      <SeoManager />
      <ModernNavigation />
      <LegacyPage key={window.location.pathname} htmlRaw={cookiesHtml} />
      <LegacyFooter />
    </>
  );
}
