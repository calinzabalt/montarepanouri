"use client";

import React from "react";
import { Star, Quote, MapPin, CheckCircle2 } from "lucide-react";
import defaultTestimonials from "@/data/testimonials.json";

interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  system: string;
  text: string;
  date: string;
}

interface TestimonialsSectionProps {
  testimonials?: TestimonialItem[];
  title?: string;
  subtitle?: string;
}

export default function TestimonialsSection({
  testimonials = defaultTestimonials,
  title = "Ce Spun Clienții Noștri",
  subtitle = "Peste 450 de clienți rezidențiali și comerciali se bucură deja de facturi reduse și autonomie pe baterii.",
}: TestimonialsSectionProps) {
  return (
    <section className="py-28 sm:py-32 bg-slate-900/40 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="px-3.5 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider rounded-full inline-block">
            Opinia Clienților Nostri
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="glass-card rounded-2xl p-8 border border-white/[0.06] flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-slate-800 group-hover:text-emerald-500/30 transition-colors" />
                </div>

                <p className="text-slate-300 text-sm leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/60 mt-4 space-y-2">
                <div className="font-bold text-white text-base">
                  {t.name}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t.location}</span>
                </div>
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-semibold">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{t.system}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
