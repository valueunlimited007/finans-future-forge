import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { isCasinoSite } from './lib/siteConfig'

// Async CSS loader to avoid top-level await
async function loadStyles() {
  // Always load Tailwind last
  await import('./index.css')
}

// Load styles and mount app
loadStyles().then(() => {
  console.info("[FG_APP] mounted", window.location.pathname);
  createRoot(document.getElementById("root")!).render(<App />);
});
