"use client";

import React, { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import companyData from "@/data/company.json";

const SHOW_AFTER_MS = 10_000;

export default function FloatingWhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), SHOW_AFTER_MS);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <a
      href={companyData.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Scrie-ne pe WhatsApp"
      className="fixed bottom-3 right-3 z-50 sm:bottom-6 sm:right-6 animate-fadeIn"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping hidden sm:block" aria-hidden="true" />
      <span className="absolute inset-0 rounded-full bg-emerald-500/25 whatsapp-pulse hidden sm:block" aria-hidden="true" />

      <span className="relative flex items-center justify-center w-14 h-14 sm:w-12 sm:h-12 rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-950/60 border border-white/20 whatsapp-float md:hover:scale-105 active:scale-[0.98] md:transition-transform">
        <MessageCircle className="w-7 h-7 sm:w-6 sm:h-6" />
      </span>
    </a>
  );
}
