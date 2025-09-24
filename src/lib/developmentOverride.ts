// Development site override utility
// Separated to avoid circular dependencies

let developmentSiteOverride: string | null = null;

export function getDevelopmentSiteOverride(): string | null {
  return developmentSiteOverride;
}

export function setDevelopmentSiteOverride(site: string | null) {
  developmentSiteOverride = site;
}

export function initializeDevelopmentOverride() {
  if (typeof window !== 'undefined' && import.meta.env.DEV) {
    const stored = localStorage.getItem('site-selector-override');
    if (stored && stored !== 'auto') {
      setDevelopmentSiteOverride(stored);
    }
  }
}

// Initialize on module load
initializeDevelopmentOverride();