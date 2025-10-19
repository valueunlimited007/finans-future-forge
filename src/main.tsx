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
  
  // Set data-site attribute on root element BEFORE mounting React
  const rootElement = document.getElementById("root")!;
  const hostname = location.hostname;
  const isCasino = /(^|\.)kasinos\.se$/i.test(hostname);
  const isGerman = /(^|\.)finanzen-guide\.de$/i.test(hostname);
  
  // Determine site type
  let siteType = 'finansguiden';
  if (isCasino) siteType = 'kasinos';
  else if (isGerman) siteType = 'finanzen-guide';
  
  rootElement.setAttribute('data-site', siteType);
  
  createRoot(rootElement).render(<App />);
});
