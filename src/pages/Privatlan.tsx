import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LegacyPage from "./LegacyPage";
import privatlanHtml from "../../privatlan.html?raw";

export default function Privatlan() {
  const location = useLocation();
  useEffect(() => {
    console.info("Mounted page:", location.pathname, "source:", "privatlan.html");
    console.info("[FG_PAGE]", location.pathname, "src len:", privatlanHtml.length, "head:", privatlanHtml.slice(0,100));
  }, [location.pathname]);
  return <LegacyPage key={location.pathname} htmlRaw={privatlanHtml} />;
}
