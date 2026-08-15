export const GA_MEASUREMENT_ID = "G-47SVNCRJC8";
export const CONSENT_STORAGE_KEY = "mp_cookie_consent";
export const CONSENT_EVENT = "mp-cookie-consent-change";

export type CookieConsent = {
  analytics: boolean;
};

export function readConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<CookieConsent>;
    if (typeof parsed.analytics !== "boolean") return null;
    return { analytics: parsed.analytics };
  } catch {
    return null;
  }
}

export function writeConsent(consent: CookieConsent): void {
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: consent }));
}

export function openCookieSettings(): void {
  window.dispatchEvent(new Event("mp-open-cookie-settings"));
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

