"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import companyData from "@/data/company.json";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="formular-oferta" className="py-28 sm:py-32 bg-[#080F1A] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        <div className="bg-slate-900/90 backdrop-blur-xl border border-white/[0.08] rounded-3xl p-10 sm:p-14 shadow-2xl">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider rounded-full">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              Montaj la Cheie (Panouri + Baterii)
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
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
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Nume &amp; Prenume *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Adrian Popescu"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Telefon Mobil *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0700 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Județ / Regiune *
                  </label>
                  <select
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
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Tip Proprietate
                  </label>
                  <select
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
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Tip Acoperiș
                  </label>
                  <select
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
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Stocare Baterii?
                  </label>
                  <select
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
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Consum Lunar Mediu
                  </label>
                  <select
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
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Observații sau Cerințe Particulare (Opțional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Ex: Doresc montaj în Timișoara / Arad, acoperiș din țiglă ceramică..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-8 bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 hover:from-emerald-600 hover:to-amber-600 text-white font-extrabold text-base rounded-2xl shadow-xl shadow-emerald-950/60 transition-all flex items-center justify-center gap-2 group"
                >
                  <Zap className="w-5 h-5 text-amber-300 group-hover:scale-110 transition-transform" />
                  <span>TRIMITE CEREREA PENTRU ESTIMARE MONTAJ</span>
                  <Send className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-800/80">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Datele tale sunt protejate conform Regulamentului GDPR
                </span>
                <span>Asistență telefonică rapidă: {companyData.phone}</span>
              </div>
            </form>
          )}

        </div>

      </div>
    </section>
  );
}
