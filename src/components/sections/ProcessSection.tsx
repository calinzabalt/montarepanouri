"use client";

import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import defaultProcess from "@/data/process.json";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  steps?: ProcessStep[];
  title?: string;
  subtitle?: string;
}

export default function ProcessSection({
  steps = defaultProcess,
  title = "Cum Funcționează (Pas cu Pas)",
  subtitle = "Un proces simplu și clar: de la cererea de ofertă până la montaj și punerea în funcțiune.",
}: ProcessSectionProps) {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-slate-900/80 border-y border-white/[0.06] relative overflow-hidden">
      {/* Glow elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 lg:mb-20 space-y-4">
          <span className="px-3.5 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider rounded-full inline-block">
            Proces Simplificat
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
            {title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {steps.map((s, index) => (
            <div
              key={s.step}
              className="glass-card rounded-2xl p-5 sm:p-8 relative flex flex-col justify-between group border border-white/[0.06]"
            >
              <div>
                {/* Step Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black font-mono text-emerald-400/90 group-hover:scale-110 transition-transform">
                    {s.step}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400">
                    <CheckCircle className="w-4 h-4" />
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {s.title}
                </h3>

                <p className="text-slate-400 text-xs leading-relaxed">
                  {s.description}
                </p>
              </div>

              {/* Connecting line indicator for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                  <div className="w-6 h-6 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-500">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
