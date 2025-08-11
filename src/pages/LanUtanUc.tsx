import { useEffect } from "react";
import LegacyPage from "./LegacyPage";
import lanHtml from "../../lan-utan-uc.html?raw";

export default function LanUtanUc() {
  useEffect(() => {
    const path = window.location.pathname;
    console.info("Mounted page:", path, "source:", "lan-utan-uc.html");
    console.info("[FG_PAGE]", path, "src len:", lanHtml.length, "head:", lanHtml.slice(0,100));
  }, []);
  return <LegacyPage key={window.location.pathname} htmlRaw={lanHtml} />;
}
