import React from "react";
import { MessageCircle } from "lucide-react";
import companyData from "@/data/company.json";

export default function FloatingWhatsAppButton() {
  return (
    <a
      href={companyData.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Scrie-ne pe WhatsApp"
      className="fixed bottom-5 right-4 z-50 sm:bottom-6 sm:right-6"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping" aria-hidden="true" />
      <span className="absolute inset-0 rounded-full bg-emerald-500/25 whatsapp-pulse" aria-hidden="true" />

      <span className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-950/60 border border-white/20 whatsapp-float hover:scale-105 active:scale-[0.98] transition-transform">
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
      </span>
    </a>
  );
}
