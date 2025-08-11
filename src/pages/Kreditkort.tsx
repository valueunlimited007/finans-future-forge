import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LegacyPage from "./LegacyPage";
import kreditkortHtml from "../../kreditkort.html?raw";

export default function Kreditkort() {
  const location = useLocation();
  useEffect(() => {
    console.info("Mounted page:", location.pathname, "source:", "kreditkort.html");
    console.info("[FG_PAGE]", location.pathname, "src len:", kreditkortHtml.length, "head:", kreditkortHtml.slice(0,100));
  }, [location.pathname]);
  return <LegacyPage key={location.pathname} htmlRaw={kreditkortHtml} />;
}
