"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sun, ShieldCheck, Zap, Phone, ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import companyData from "@/data/company.json";
import { submitContact } from "@/lib/submit-contact";
import FormPrivacyNote from "@/components/ui/FormPrivacyNote";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  badgeText?: string;
  imageSrc?: string;
}

export default function HeroSection({
  title = "Montaj Panouri Solare & Baterii la Cheie",
  subtitle = "Specializați pe montajul panourilor solare și al bateriilor / bancurilor de stocare. Deservim prioritar Arad, Timișoara și Vestul României.",
  badgeText = "Montaj la Cheie · Panouri + Baterii",
  imageSrc = "/images/montaj-fotovoltaice-rezidential.jpg",
}: HeroSectionProps) {
  const [formData, setFormData] = useState({ name: "", phone: "", county: "Timiș (Timișoara)" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const result = await submitContact({
      source: "Hero — Calcul Rapid Estimare",
      name: formData.name,
      phone: formData.phone,
      county: formData.county,
    });
    setLoading(false);
    if (result.ok) {
      setSubmitted(true);
    } else {
      setError(result.error);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-[#080F1A]">
      {/* Ambient glows */}
      <div className="hidden sm:block absolute top-1/3 -left-32 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="hidden sm:block absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-500/08 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.07] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* ── Left ── */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wide">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                {badgeText}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/60 border border-white/[0.07] text-slate-400 text-xs font-medium">
                <MapPin className="w-3 h-3 text-amber-400" />
                Arad · Timișoara · Vest &amp; Național Proiecte Mari
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
                {title.split("&")[0].trim()}
                <br />
                <span className="gradient-text-emerald">
                  &amp; {(title.split("&")[1] || "Baterii la Cheie").trim()}
                </span>
              </h1>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">
                {subtitle}
              </p>
            </div>

            {/* Checkmarks */}
            <div className="flex flex-col sm:flex-row gap-3">
              {[
                { icon: CheckCircle2, color: "text-emerald-400", label: "Montaj fizic la cheie" },
                { icon: CheckCircle2, color: "text-amber-400", label: "Garanție pe echipamente" },
                { icon: CheckCircle2, color: "text-teal-400", label: "Panouri + baterii / stocare" },
              ].map(({ icon: Icon, color, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-slate-900/60 border border-white/[0.06] text-sm font-medium text-slate-200"
                >
                  <Icon className={`w-4 h-4 ${color} shrink-0`} />
                  {label}
                </div>
              ))}
            </div>

            {/* CTA phone */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={`tel:${companyData.phoneRaw}`}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.10] text-white font-semibold text-sm rounded-xl transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                {companyData.phone}
              </a>
              <a href="#servicii" className="hidden sm:inline-flex items-center gap-1.5 text-slate-400 hover:text-emerald-400 text-sm font-medium transition-colors">
                Descoperă serviciile <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* ── Right ── */}
          <div className="lg:col-span-5 space-y-5">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl group">
              <div className="relative h-72 sm:h-80">
                <Image
                  src={imageSrc}
                  alt="Montaj Panouri Fotovoltaice Arad Timișoara"
                  width={1200}
                  height={800}
                  priority
                  className="w-full h-full object-cover zoom-on-hover-sm"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080F1A] via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="flex items-center gap-2 bg-[#080F1A]/90 px-3 py-1.5 rounded-lg border border-white/[0.08] text-slate-300">
                  <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  Panouri + Baterie
                </span>
                <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-400 font-bold rounded-lg">
                  La cheie
                </span>
              </div>
            </div>

            {/* Mini form card */}
            <div className="rounded-2xl bg-[#0D1727] border border-white/[0.08] p-4 sm:p-6 shadow-xl relative overflow-hidden">
              <div className="hidden sm:block absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-base font-bold text-white">Calcul Rapid Estimare</h2>
                    <p className="text-slate-400 text-xs mt-0.5">Răspuns în maxim 30 de minute</p>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-lg border border-emerald-500/20 uppercase tracking-wide">
                    Gratuit
                  </span>
                </div>

                {submitted ? (
                  <div className="py-6 text-center space-y-2">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                    <p className="font-bold text-white text-sm">Cerere Înregistrată!</p>
                    <p className="text-xs text-slate-400">Vă contactăm la <span className="text-emerald-400 font-medium">{formData.phone}</span></p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <label htmlFor="hero-name" className="sr-only">Numele dumneavoastră</label>
                    <input
                      id="hero-name"
                      type="text"
                      required
                      placeholder="Numele dumneavoastră *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#080F1A] border border-white/[0.08] rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div>
                        <label htmlFor="hero-phone" className="sr-only">Telefon</label>
                        <input
                          id="hero-phone"
                          type="tel"
                          required
                          placeholder="Telefon *"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-[#080F1A] border border-white/[0.08] rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="hero-county" className="sr-only">Județ</label>
                        <select
                          id="hero-county"
                          value={formData.county}
                          onChange={(e) => setFormData({ ...formData, county: e.target.value })}
                          className="w-full px-3 py-3 bg-[#080F1A] border border-white/[0.08] rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
                        >
                        <option value="Timiș (Timișoara)">Timiș</option>
                        <option value="Arad">Arad</option>
                        <option value="Bihor (Oradea)">Bihor</option>
                        <option value="Caraș-Severin">Caraș-Severin</option>
                        <option value="Hunedoara">Hunedoara</option>
                        <option value="Alt județ">Alt județ</option>
                        </select>
                      </div>
                    </div>
                    {error ? (
                      <p className="text-xs text-red-400 text-center">{error}</p>
                    ) : null}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30"
                    >
                      <Sun className="w-4 h-4 text-amber-300" />
                      {loading ? "Se trimite..." : "Solicită Estimarea Gratuită"}
                    </button>
                    <FormPrivacyNote className="text-center" />
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
