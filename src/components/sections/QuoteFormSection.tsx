"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import companyData from "@/data/company.json";
import { submitContact } from "@/lib/submit-contact";
import FormPrivacyNote from "@/components/ui/FormPrivacyNote";

interface QuoteFormSectionProps {
  title?: string;
  subtitle?: string;
}

export default function QuoteFormSection({
  title = "Solicită o Evaluare Tehnică și o Ofertă de Montaj la Cheie",
  subtitle = "Completează formularul extins. Ne concentrăm pe zona Arad & Timișoara, dar preluăm proiecte în toată țara dacă includ și montarea bancurilor de baterii!",
}: QuoteFormSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    county: "Timiș (Timișoara)",
    propertyType: "Casă / Vilă",
    roofType: "Țiglă Ceramică / Metalică",
    batteryOption: "Da, vreau și baterii / banc de stocare",
    monthlyBill: "500 - 1000 lei/lună",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const result = await submitContact({
      source: "Formular Ofertă Extins",
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      county: formData.county,
      propertyType: formData.propertyType,
      roofType: formData.roofType,
      batteryOption: formData.batteryOption,
      monthlyBill: formData.monthlyBill,
      notes: formData.notes,
    });
    setLoading(false);
    if (result.ok) {
      setSubmitted(true);
    } else {
      setError(result.error);
    }
  };

  return (
    <section id="formular-oferta" className="scroll-mt-32 py-16 sm:py-24 lg:py-32 bg-[#080F1A] relative overflow-hidden">
      {/* Background glow */}
      <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="bg-slate-900/95 sm:bg-slate-900/90 sm:backdrop-blur-xl border border-white/[0.08] rounded-2xl sm:rounded-3xl p-5 sm:p-10 lg:p-14 shadow-2xl">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider rounded-full">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              Montaj la Cheie
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
              {title}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {subtitle}
            </p>
          </div>

          {submitted ? (
            <div className="py-16 text-center space-y-4 max-w-md mx-auto">
              <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-extrabold text-white">Solicitare Trimisă cu Succes!</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Vă mulțumim, <span className="font-semibold text-emerald-400">{formData.name}</span>! Am înregistrat detaliile proiectului dumneavoastră din <span className="font-semibold text-white">{formData.county}</span>.
              </p>
              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 text-xs text-slate-400">
                Echipa noastră va analiza specificațiile dumneavoastră și vă va suna în maxim 30 minute pe numărul <strong className="text-white">{formData.phone}</strong>.
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step 1: Contact basic details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="quote-name" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Nume &amp; Prenume *
                  </label>
                  <input
                    id="quote-name"
                    type="text"
                    required
                    placeholder="Ex: Adrian Popescu"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label htmlFor="quote-phone" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Telefon Mobil *
                  </label>
                  <input
                    id="quote-phone"
                    type="tel"
                    required
                    placeholder="0743 960 969"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label htmlFor="quote-county" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Județ / Regiune *
                  </label>
                  <select
                    id="quote-county"
                    value={formData.county}
                    onChange={(e) => setFormData({ ...formData, county: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Timiș (Timișoara)">Timiș (Timișoara)</option>
                    <option value="Arad">Arad</option>
                    <option value="Bihor (Oradea)">Bihor (Oradea)</option>
                    <option value="Caraș-Severin">Caraș-Severin</option>
                    <option value="Hunedoara">Hunedoara</option>
                    <option value="Alt județ (Proiect mare cu baterii)">Alt județ (Proiect mare cu baterii)</option>
                  </select>
                </div>
              </div>

              {/* Step 2: Technical Specifications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label htmlFor="quote-property" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Tip Proprietate
                  </label>
                  <select
                    id="quote-property"
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Casă / Vilă">Casă / Vilă</option>
                    <option value="Spațiu Comercial / Hală">Spațiu Comercial / Hală</option>
                    <option value="Fermă / Altele">Fermă / Altele</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="quote-roof" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Tip Acoperiș
                  </label>
                  <select
                    id="quote-roof"
                    value={formData.roofType}
                    onChange={(e) => setFormData({ ...formData, roofType: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Țiglă Ceramică / Metalică">Țiglă Ceramică / Metalică</option>
                    <option value="Tablă Cutată / Lindab">Tablă Cutată / Lindab</option>
                    <option value="Terasă Plat / Beton">Terasă Plat / Beton</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="quote-battery" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Stocare Baterii?
                  </label>
                  <select
                    id="quote-battery"
                    value={formData.batteryOption}
                    onChange={(e) => setFormData({ ...formData, batteryOption: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Da, vreau și baterii / banc de stocare">Da, vreau și baterii</option>
                    <option value="Doar panouri (On-Grid)">Doar panouri (On-Grid)</option>
                    <option value="Doresc recomandare tehnică">Doresc recomandare</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="quote-bill" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Consum Lunar Mediu
                  </label>
                  <select
                    id="quote-bill"
                    value={formData.monthlyBill}
                    onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Sub 300 lei/lună">Sub 300 lei/lună</option>
                    <option value="300 - 600 lei/lună">300 - 600 lei/lună</option>
                    <option value="600 - 1200 lei/lună">600 - 1200 lei/lună</option>
                    <option value="Peste 1200 lei/lună (B2B)">Peste 1200 lei/lună (B2B)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="quote-notes" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Observații sau Cerințe Particulare (Opțional)
                </label>
                <textarea
                  id="quote-notes"
                  rows={3}
                  placeholder="Ex: Doresc montaj în Timișoara / Arad, acoperiș din țiglă ceramică..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 space-y-3">
                {error ? (
                  <p className="text-sm text-red-400 text-center">{error}</p>
                ) : null}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 sm:py-4 px-4 sm:px-8 bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 hover:from-emerald-600 hover:to-amber-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-xl shadow-emerald-950/60 transition-all flex flex-wrap items-center justify-center gap-2 group"
                >
                  <Zap className="w-5 h-5 text-amber-300 md:group-hover:scale-110 md:transition-transform shrink-0" />
                  <span>{loading ? "Se trimite..." : "Trimite cererea pentru estimare"}</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
                </button>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between text-xs text-slate-400 pt-3 border-t border-slate-800/80">
                <FormPrivacyNote />
                <span>Asistență: {companyData.phone}</span>
              </div>
            </form>
          )}

        </div>

      </div>
    </section>
  );
}
