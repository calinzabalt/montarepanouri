"use client";

import React from "react";
import { MapPin, ShieldCheck, PhoneCall, BatteryCharging } from "lucide-react";
import companyData from "@/data/company.json";

interface CoverageMapSectionProps {
  title?: string;
  subtitle?: string;
}

export default function CoverageMapSection({
  title = "Acoperire Geografică & Zone de Intervenție",
  subtitle = "Echipele noastre tehnice de montaj se deplasează direct la locația dumneavoastră pentru instalare și punere în funcțiune.",
}: CoverageMapSectionProps) {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#080F1A] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left info */}
          <div className="lg:col-span-5 space-y-6">
            <span className="px-3.5 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider rounded-full inline-block">
              Deplasare &amp; Montaj la Cheie
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
              {title}
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed">
              {subtitle}
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3.5 bg-slate-900 rounded-xl border border-slate-800">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-bold text-white">Focus Principal: Vestul României</div>
                  <div className="text-slate-400">Intervenție rapidă în Arad, Timișoara, Bihor, Caraș-Severin și Hunedoara.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-slate-900 rounded-xl border border-slate-800">
                <BatteryCharging className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-bold text-white">Național: Proiecte Mari cu Baterii</div>
                  <div className="text-slate-400">Ne deplasăm în orice județ din țară pentru instalații mari care includ baterii / bancuri de stocare.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-slate-900 rounded-xl border border-slate-800">
                <ShieldCheck className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-bold text-white">Montaj Tehnic la Cheie</div>
                  <div className="text-slate-400">Panouri solare + invertoare hibride + bancuri de stocare instalate de echipe proprii.</div>
                </div>
              </div>
            </div>

            <a
              href={`tel:${companyData.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-lg shadow-emerald-950/50 transition-all w-full sm:w-auto text-center"
            >
              <PhoneCall className="w-4 h-4 shrink-0" />
              <span>Verifică disponibilitatea</span>
            </a>
          </div>

          {/* Right Counties Grid */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Primary West Counties */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0" />
                Zone Prioritare (Vestul României)
              </h3>

              <div className="grid grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-3 gap-3">
                {companyData.countiesPrimary.map((county) => (
                  <div
                    key={county}
                    className="px-3.5 py-2.5 bg-slate-950 rounded-xl border border-emerald-500/30 flex items-center gap-2 text-xs font-semibold text-white min-w-0"
                  >
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <span className="truncate">{county}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* National Large Projects */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <BatteryCharging className="w-5 h-5 text-amber-400 shrink-0" />
                Acoperire Națională (Proiecte Mari + Stocare)
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {companyData.countiesNational.map((county) => (
                  <div
                    key={county}
                    className="px-3.5 py-2.5 bg-slate-950 rounded-xl border border-slate-800 flex items-center gap-2 text-xs font-semibold text-slate-300 min-w-0"
                  >
                    <div className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                    <span className="truncate">{county}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
