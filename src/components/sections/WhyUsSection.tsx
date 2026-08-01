"use client";

import React from "react";
import { 
  ShieldCheck, 
  Clock, 
  Award, 
  FileCheck, 
  Headphones, 
  Zap 
} from "lucide-react";
import defaultWhyUs from "@/data/why_us.json";

interface WhyUsItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

interface WhyUsSectionProps {
  items?: WhyUsItem[];
  title?: string;
  subtitle?: string;
}

export default function WhyUsSection({
  items = defaultWhyUs,
  title = "De Ce Să Alegi MontarePanouri.ro?",
  subtitle = "Suntem o echipă dedicată de ingineri și tehnicieni autorizați ANRE, axată pe calitate premium, siguranță și randament energetic maxim.",
}: WhyUsSectionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="w-7 h-7 text-emerald-400" />;
      case "Clock":
        return <Clock className="w-7 h-7 text-amber-400" />;
      case "Award":
        return <Award className="w-7 h-7 text-teal-400" />;
      case "FileCheck":
        return <FileCheck className="w-7 h-7 text-purple-400" />;
      case "Headphones":
        return <Headphones className="w-7 h-7 text-blue-400" />;
      case "Zap":
        return <Zap className="w-7 h-7 text-amber-400" />;
      default:
        return <ShieldCheck className="w-7 h-7 text-emerald-400" />;
    }
  };

  return (
    <section className="py-28 sm:py-32 bg-slate-900/60 border-y border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="px-3.5 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider rounded-full inline-block">
            Beneficii &amp; Avantaje Competitive
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {items.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl p-8 relative group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500">
                <span className="font-mono text-emerald-400/80">#EficiențăGarantată</span>
                <span className="group-hover:translate-x-1 transition-transform text-slate-400">
                  Află mai multe &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
