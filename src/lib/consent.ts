export type ConsentState = {
  analytics: boolean | null; // null = undecided, true/false = choice
};

const KEY = "fg_consent_v1";

export function readConsent(): ConsentState {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { analytics: null };
    const parsed = JSON.parse(raw);
    return { analytics: typeof parsed.analytics === "boolean" ? parsed.analytics : null };
  } catch {
    return { analytics: null };
  }
}

export function writeConsent(state: ConsentState) {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
    window.dispatchEvent(new CustomEvent("fg:consent-changed"));
  } catch {}
}

export function acceptAll() {
  writeConsent({ analytics: true });
}

export function rejectAll() {
  writeConsent({ analytics: false });
}
