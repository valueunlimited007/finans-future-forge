import { useEffect } from "react";
import LegacyPage from "./LegacyPage";
import SeoManager from "../seo/SeoManager";
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
      <LegacyPage key={window.location.pathname} htmlRaw={cookiesHtml} />
    </>
  );
}
