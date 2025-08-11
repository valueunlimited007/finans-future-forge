import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LegacyPage from "./LegacyPage";
// Import the exact static HTML as raw string to preserve markup and CSS
import homeHtml from "../../index.html?raw";

export default function Home() {
  const location = useLocation();
  useEffect(() => {
    console.info("Mounted page:", location.pathname, "source:", "index.html");
  }, [location.pathname]);
  return <LegacyPage key={location.pathname} htmlRaw={homeHtml} />;
}
