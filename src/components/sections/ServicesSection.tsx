"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Sun, 
  BatteryCharging, 
  Building2, 
  Wrench, 
  ArrowRight, 
  CheckCircle2 
} from "lucide-react";
import defaultServices from "@/data/services.json";

interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  image: string;
  highlights: string[];
  specs: { label: string; value: string }[];
}

interface ServicesSectionProps {
  services?: ServiceItem[];
  title?: string;
  subtitle?: string;
}

export default function ServicesSection({
  services = defaultServices,
  title = "Gama Noastră de Servicii",
  subtitle = "Montaj panouri solare pe acoperiș, baterii / bancuri de stocare și verificări tehnice pe teren.",
}: ServicesSectionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Sun":
        return <Sun className="w-6 h-6 text-amber-400" />;
      case "BatteryCharging":
        return <BatteryCharging className="w-6 h-6 text-emerald-400" />;
      case "Building2":
        return <Building2 className="w-6 h-6 text-blue-400" />;
      case "Wrench":
        return <Wrench className="w-6 h-6 text-purple-400" />;
      default:
        return <Sun className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="servicii" className="py-16 sm:py-24 lg:py-32 bg-[#080F1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 lg:mb-20 space-y-4">
          <span className="px-3.5 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider rounded-full inline-block">
            Servicii Montaj Solar
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
            {title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service) => (
            <div
              key={service.slug}
              className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group border border-slate-800"
            >
              <div>
                {/* Image header */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={1200}
                    height={700}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 p-3 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-xl shadow-lg">
                    {getIcon(service.icon)}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 sm:p-7 space-y-5">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    <Link href={`/servicii/${service.slug}`}>
                      {service.title}
                    </Link>
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Highlights Bullets */}
                  <div className="space-y-2 pt-2">
                    {service.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="px-5 sm:px-6 py-4 sm:py-5 border-t border-slate-800/60 mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-xs text-slate-400 min-w-0">
                  <span className="font-semibold text-emerald-400">{service.specs[0]?.label}: </span>
                  <span>{service.specs[0]?.value}</span>
                </div>

                <Link
                  href={`/servicii/${service.slug}`}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white font-semibold text-xs rounded-xl border border-emerald-500/30 transition-all group/btn shrink-0 w-full sm:w-auto"
                >
                  <span>Vezi Detalii</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
