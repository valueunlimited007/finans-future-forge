import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LegacyPage from "./LegacyPage";
import lanHtml from "../../lan-utan-uc.html?raw";

export default function LanUtanUc() {
  const location = useLocation();
  useEffect(() => {
    console.info("Mounted page:", location.pathname, "source:", "lan-utan-uc.html");
    console.info("[FG_PAGE]", location.pathname, "src len:", lanHtml.length, "head:", lanHtml.slice(0,100));
  }, [location.pathname]);
  return <LegacyPage key={location.pathname} htmlRaw={lanHtml} />;
}
