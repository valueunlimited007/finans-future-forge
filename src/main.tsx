import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { isCasinoSite } from './lib/siteConfig'

// Conditional CSS loading: only load legacy CSS for Finansguiden
if (!isCasinoSite()) {
  await import('./styles/legacy.css')
  await import('../public/css/offers-enhanced.css')
}

// Always load Tailwind last
await import('./index.css')

console.info("[FG_APP] mounted", window.location.pathname);
createRoot(document.getElementById("root")!).render(<App />);
