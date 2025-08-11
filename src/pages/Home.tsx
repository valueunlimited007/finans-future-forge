import LegacyPage from "./LegacyPage";
// Import the exact static HTML as raw string to preserve markup and CSS
// Vite will inline this at build time
import homeHtml from "../../index.html?raw";

export default function Home() {
  return <LegacyPage html={homeHtml} />;
}
