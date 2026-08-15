"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { readConsent, writeConsent } from "@/lib/cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(readConsent() === null);

    const reopen = () => setVisible(true);
    window.addEventListener("mp-open-cookie-settings", reopen);
    return () => window.removeEventListener("mp-open-cookie-settings", reopen);
  }, []);

  if (!visible) return null;

  const choose = (analytics: boolean) => {
    writeConsent({ analytics });
    setVisible(false);
    if (!analytics && typeof window.gtag === "function") {
      window.location.reload();
    }
  };

  return (
    <div className="fixed z-[60] left-4 right-4 bottom-24 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md">
      <div className="rounded-2xl bg-slate-900/95 border border-slate-700 shadow-2xl p-4 sm:p-5 backdrop-blur-md">
        <p className="text-sm text-slate-200 leading-relaxed">
          Folosim cookie-uri esențiale și, cu acordul tău, Google Analytics pentru a înțelege cum e folosit site-ul.{" "}
          <Link href="/politica-cookies" className="text-emerald-400 hover:underline">
            Detalii
          </Link>
        </p>
        <div className="mt-4 flex flex-col sm:flex-row gap-2">
          <button
            type="button"
            onClick={() => choose(true)}
            className="flex-1 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-semibold transition-colors"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={() => choose(false)}
            className="flex-1 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-sm font-semibold transition-colors"
          >
            Refuz
          </button>
        </div>
      </div>
    </div>
  );
}
