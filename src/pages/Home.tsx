import { useEffect } from "react";
import LegacyPage from "./LegacyPage";
// Import the exact static HTML as raw string to preserve markup and CSS
import homeHtml from "../../home.html?raw";

export default function Home() {
  useEffect(() => {
    const path = window.location.pathname;
    console.info("Mounted page:", path, "source:", "home.html");
    console.info("[FG_PAGE]", path, "src len:", homeHtml.length, "head:", homeHtml.slice(0,100));
  }, []);
  return <LegacyPage key={window.location.pathname} htmlRaw={homeHtml} />;
}
