import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LegacyPage from "./LegacyPage";
import kreditkortHtml from "../../kreditkort.html?raw";

export default function Kreditkort() {
  const location = useLocation();
  useEffect(() => {
    console.info("Mounted page:", location.pathname, "source:", "kreditkort.html");
  }, [location.pathname]);
  return <LegacyPage htmlRaw={kreditkortHtml} />;
}
