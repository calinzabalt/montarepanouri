import React from "react";
import Link from "next/link";
import { ArrowRight, Sun, ShieldCheck } from "lucide-react";
import GallerySection from "@/components/sections/GallerySection";

export const metadata = {
  title: "Galerie Proiecte Fotovoltaice Executate",
  description:
    "Portofoliu foto și detalii tehnice pentru lucrările noastre rezidențiale, comerciale și bancuri de stocare pe baterii LiFePO4.",
};

export default function GalleryPage() {
  return (
    <div className="pt-24 bg-slate-950 min-h-screen">
      {/* Page Header */}
      <div className="py-16 border-b border-slate-800 text-center bg-slate-900/60">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="px-3.5 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider rounded-full inline-block">
            Imagini &amp; Specificații Reale
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            Galerie Proiecte &amp; Lucrări Executate
          </h1>
          <p className="text-slate-400 text-base max-w-2xl mx-auto">
            Fiecare lucrare reflectă standardele noastre ridicate de calitate, de la montajul panourilor pe acoperiș până la cablajul tabloului tehnic.
          </p>
        </div>
      </div>

      {/* Main Filterable Gallery */}
      <GallerySection showFilters={true} />

      {/* Bottom CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-emerald-950/60 via-slate-900 to-slate-950 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            Echipa Ta de Încredere în Fotovoltaice
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Vrei un sistem fotovoltaic similar la tine acasă sau la afacerea ta?
          </h2>

          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Efectuăm măsurătorile pe teren și îți trimitem oferta completă în maxim 24 de ore cu dosar de prosumator inclus.
          </p>

          <div className="pt-2">
            <Link
              href="/cere-oferta"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm rounded-2xl shadow-xl shadow-emerald-950/60 transition-all hover:scale-105"
            >
              <Sun className="w-5 h-5 text-amber-300" />
              <span>CERE O OFERTĂ PENTRU CASA TA</span>
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
