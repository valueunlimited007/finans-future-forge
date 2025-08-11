import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LegacyPage from "./LegacyPage";
import foretagslanHtml from "../../foretagslan.html?raw";

export default function Foretagslan() {
  const location = useLocation();
  useEffect(() => {
    console.info("Mounted page:", location.pathname, "source:", "foretagslan.html");
  }, [location.pathname]);
  return <LegacyPage htmlRaw={foretagslanHtml} />;
}
