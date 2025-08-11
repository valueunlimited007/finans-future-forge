import { useEffect } from "react";
import LegacyPage from "./LegacyPage";
import SeoManager from "../seo/SeoManager";
import kreditkortHtml from "../../kreditkort.html?raw";

export default function Kreditkort() {
  useEffect(() => {
    const path = window.location.pathname;
    console.info("Mounted page:", path, "source:", "kreditkort.html");
    console.info("[FG_PAGE]", path, "src len:", kreditkortHtml.length, "head:", kreditkortHtml.slice(0,100));
  }, []);
  return (
    <>
      <SeoManager />
      <LegacyPage key={window.location.pathname} htmlRaw={kreditkortHtml} />
    </>
  );
}
