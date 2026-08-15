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
    <div className="fixed z-[60] inset-x-0 bottom-0 sm:inset-auto sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md">
      <div className="flex items-center gap-2 bg-slate-950 border-t border-slate-800 px-2.5 py-1.5 pr-16 pb-[max(0.375rem,env(safe-area-inset-bottom))] sm:block sm:rounded-2xl sm:border sm:bg-slate-900 sm:p-5 sm:pr-5 sm:pb-5">
        <p className="min-w-0 flex-1 text-[11px] leading-snug text-slate-300 sm:text-sm sm:leading-relaxed sm:text-slate-200">
          Folosim cookie-uri esențiale și, cu acordul tău, Google Analytics pentru a înțelege cum e folosit site-ul.{" "}
          <Link href="/politica-cookies" className="text-emerald-400 underline sm:no-underline sm:hover:underline">
            Detalii
          </Link>
        </p>
        <div className="flex shrink-0 gap-1 sm:mt-4 sm:gap-2">
          <button
            type="button"
            onClick={() => choose(true)}
            className="px-2.5 py-1 rounded-md bg-emerald-700 hover:bg-emerald-600 text-white text-[10px] font-semibold sm:flex-1 sm:px-4 sm:py-2.5 sm:rounded-xl sm:text-sm"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={() => choose(false)}
            className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-200 text-[10px] font-semibold sm:flex-1 sm:px-4 sm:py-2.5 sm:rounded-xl sm:text-sm"
          >
            Refuz
          </button>
        </div>
      </div>
    </div>
  );
}
