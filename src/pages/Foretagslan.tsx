import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LegacyPage from "./LegacyPage";
import foretagslanHtml from "../../foretagslan.html?raw";

export default function Foretagslan() {
  const location = useLocation();
  useEffect(() => {
    console.info("Mounted page:", location.pathname, "source:", "foretagslan.html");
    console.info("[FG_PAGE]", location.pathname, "src len:", foretagslanHtml.length, "head:", foretagslanHtml.slice(0,100));
  }, [location.pathname]);
  return <LegacyPage key={location.pathname} htmlRaw={foretagslanHtml} />;
}
