import { useEffect } from "react";
import LegacyPage from "./LegacyPage";
import SeoManager from "../seo/SeoManager";
import privatlanHtml from "../../privatlan.html?raw";

export default function Privatlan() {
  useEffect(() => {
    const path = window.location.pathname;
    console.info("Mounted page:", path, "source:", "privatlan.html");
    console.info("[FG_PAGE]", path, "src len:", privatlanHtml.length, "head:", privatlanHtml.slice(0,100));
  }, []);
  return (
    <>
      <SeoManager />
      <LegacyPage key={window.location.pathname} htmlRaw={privatlanHtml} />
    </>
  );
}
