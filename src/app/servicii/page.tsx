import React from "react";
import Metadata from "next";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import QuoteFormSection from "@/components/sections/QuoteFormSection";

export const metadata = {
  title: "Servicii Montaj Panouri Fotovoltaice & Baterii",
  description:
    "Descoperă gama completă de servicii autorizate ANRE: sisteme rezidențiale, acumulatori LiFePO4, parcuri comerciale și servicii de mentenanță.",
};

export default function ServicesPage() {
  return (
    <div className="pt-24">
      <div className="bg-slate-950 py-16 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="px-3.5 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider rounded-full inline-block">
            Portofoliu Servicii Solare
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            Servicii de Instalare, Stocare &amp; Diagnosticare
          </h1>
          <p className="text-slate-400 text-base max-w-2xl mx-auto">
            Oferim soluții tehnice la cheie adaptate exact pentru locuințe, afaceri și parcuri fotovoltaice din România.
          </p>
        </div>
      </div>

      <ServicesSection />
      <WhyUsSection />
      <QuoteFormSection />
    </div>
  );
}
