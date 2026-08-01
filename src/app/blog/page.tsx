import React from "react";
import BlogSection from "@/components/sections/BlogSection";
import QuoteFormSection from "@/components/sections/QuoteFormSection";

export const metadata = {
  title: "Blog & Ghiduri Tehnice Panouri Fotovoltaice",
  description:
    "Articole specializate despre alegerea bateriilor LiFePO4, obținerea statutului de prosumator, curățare panouri și legislația fotovoltaică.",
};

export default function BlogPage() {
  return (
    <div className="pt-24 bg-slate-950 min-h-screen">
      <div className="py-16 border-b border-slate-800 text-center bg-slate-900/60">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="px-3.5 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider rounded-full inline-block">
            Ghiduri &amp; Noutăți Solare
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            Articole, Legislație &amp; Ghiduri Practici
          </h1>
          <p className="text-slate-400 text-base max-w-2xl mx-auto">
            Descoperă sfaturi avizate scrie de inginerii noștri pentru optimizarea producției solare și reducerea dependenței de rețea.
          </p>
        </div>
      </div>

      <BlogSection />
      <QuoteFormSection />
    </div>
  );
}
