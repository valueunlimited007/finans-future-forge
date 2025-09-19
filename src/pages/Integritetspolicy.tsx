import { useEffect } from "react";
import ModernNavigation from "../components/ModernNavigation";
import LegacyPage from "./LegacyPage";
import SeoManager from "../seo/SeoManager";
import LegacyFooter from "../components/LegacyFooter";
import policyHtml from "../../integritetspolicy.html?raw";

export default function Integritetspolicy() {
  useEffect(() => {
    const path = window.location.pathname;
    console.info("Mounted page:", path, "source:", "integritetspolicy.html");
    console.info("[FG_PAGE]", path, "src len:", policyHtml.length, "head:", policyHtml.slice(0,100));
  }, []);
  return (
    <>
      <SeoManager />
      <ModernNavigation />
      <LegacyPage key={window.location.pathname} htmlRaw={policyHtml} />
      <LegacyFooter />
    </>
  );
}
