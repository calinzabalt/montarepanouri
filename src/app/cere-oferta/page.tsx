import React from "react";
import StepQuoteForm from "@/components/ui/StepQuoteForm";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import { ShieldCheck, CheckCircle2, PhoneCall } from "lucide-react";
import companyData from "@/data/company.json";

export const metadata = {
  title: "Cere Ofertă Fotovoltaică & Stocare Gratuită",
  description:
    "Solicită o evaluare gratuită și o ofertă personalizată pentru montaj panouri solare și baterii / bancuri de stocare.",
};

export default function CereOfertaPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200">
      
      {/* Header Landing */}
      <div className="py-12 bg-slate-900/60 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider rounded-full inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            Evaluare Tehnică Gratuită 100%
          </span>

          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            Solicită o Evaluare Gratuită și o Ofertă Personalizată
          </h1>

          <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            Află în 5 pași simpli puterea optimă a sistemului fotovoltaic, capacitatea necesară a bateriei de stocare și timpul estimat de amortizare.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs font-medium text-slate-400">
            <span className="flex items-center gap-1 text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Fără obligație financiară
            </span>
            <span className="flex items-center gap-1 text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Răspuns rapid în 30 min
            </span>
            <span className="flex items-center gap-1 text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Garanție pe echipamente
            </span>
          </div>
        </div>
      </div>

      {/* Main Interactive Step Form Section */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <StepQuoteForm />
      </section>

      {/* Why Us Highlights */}
      <WhyUsSection />

      {/* Testimonials for Trust */}
      <TestimonialsSection />

      {/* Direct Call Banner */}
      <section className="py-16 bg-slate-900 border-t border-slate-800 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h3 className="text-2xl font-bold text-white">Preferi să vorbești direct cu un inginer?</h3>
          <p className="text-slate-400 text-sm">
            Suntem disponibili de Luni până Vineri între 08:00 și 18:00 pentru consultanță directă la telefon.
          </p>
          <a
            href={`tel:${companyData.phoneRaw}`}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-950 hover:bg-slate-800 text-emerald-400 font-bold text-sm rounded-xl border border-emerald-500/40 transition-all"
          >
            <PhoneCall className="w-5 h-5" />
            <span>Sună Acum: {companyData.phone}</span>
          </a>
        </div>
      </section>
    </div>
  );
}
