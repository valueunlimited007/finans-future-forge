import { useEffect } from "react";
import LegacyPage from "./LegacyPage";
import SeoManager from "../seo/SeoManager";
import foretagslanHtml from "../../foretagslan.html?raw";

export default function Foretagslan() {
  useEffect(() => {
    const path = window.location.pathname;
    console.info("Mounted page:", path, "source:", "foretagslan.html");
    console.info("[FG_PAGE]", path, "src len:", foretagslanHtml.length, "head:", foretagslanHtml.slice(0,100));
  }, []);
  return (
    <>
      <SeoManager />
      <LegacyPage key={window.location.pathname} htmlRaw={foretagslanHtml} />
    </>
  );
}
