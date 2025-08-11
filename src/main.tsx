import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.info("[FG_APP] mounted", window.location.pathname);
createRoot(document.getElementById("root")!).render(<App />);
