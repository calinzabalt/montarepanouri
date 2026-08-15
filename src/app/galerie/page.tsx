import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sun, ShieldCheck } from "lucide-react";
import GallerySection from "@/components/sections/GallerySection";

export const metadata: Metadata = {
  title: "Galerie Lucrări Montaj Panouri & Stocare",
  description:
    "Imagini reale din teren: montaj panouri solare pe acoperiș, invertoare și baterii / bancuri de stocare.",
  alternates: {
    canonical: "/galerie",
  },
  openGraph: {
    title: "Galerie Lucrări Montaj Panouri & Stocare",
    description:
      "Exemple reale de pe teren: panouri pe acoperiș, invertoare și baterii / bancuri de stocare.",
    url: "/galerie",
  },
};

export default function GalleryPage() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <div className="py-16 border-b border-slate-800 text-center bg-slate-900/60">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="px-3.5 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider rounded-full inline-block">
            Imagini din Teren
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Lucrări de Montaj Panouri Solare &amp; Stocare
          </h1>
          <p className="text-slate-400 text-base max-w-2xl mx-auto">
            Exemple reale de pe teren: panouri pe acoperiș, invertoare și baterii / bancuri de stocare.
          </p>
        </div>
      </div>

      <GallerySection showHeader={false} showFilters={true} />

      <section className="py-20 bg-gradient-to-r from-emerald-950/60 via-slate-900 to-slate-950 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            Montaj Panouri &amp; Baterii la Cheie
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Vrei un sistem similar la tine acasă sau la afacere?
          </h2>

          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Venim pe teren pentru măsurători și îți trimitem o ofertă clară pentru montaj panouri solare și baterii / bancuri de stocare.
          </p>

          <div className="pt-2">
            <Link
              href="/cere-oferta"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-700 hover:bg-emerald-600 text-white font-extrabold text-sm rounded-2xl shadow-xl shadow-emerald-950/60 md:hover:scale-105 md:transition-transform"
            >
              <Sun className="w-5 h-5 text-amber-300" />
              <span>CERE O OFERTĂ</span>
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
