"use client";

import React from "react";
import Link from "next/link";
import { 
  Sun, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  MessageCircle,
  ExternalLink
} from "lucide-react";
import companyData from "@/data/company.json";
import servicesData from "@/data/services.json";
import { openCookieSettings } from "@/lib/cookie-consent";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-8 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-emerald-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-900/30">
                <Sun className="w-6 h-6 text-slate-950" />
              </div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white">
                MONTARE<span className="text-emerald-400">PANOURI</span>.ro
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed pr-4">
              Montaj panouri solare și baterii / bancuri de stocare pentru sisteme rezidențiale și comerciale. Soluții la cheie în Vestul României și proiecte mari în toată țara.
            </p>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-amber-400 shrink-0" />
              <div className="text-xs">
                <div className="font-bold text-white">Garanție pe Echipamente &amp; Montaj</div>
                <div className="text-slate-400">Garanție producător pentru echipamente și garanție pe manoperă</div>
              </div>
            </div>

            {/* WhatsApp only */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={companyData.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/35 text-emerald-400 hover:text-white hover:bg-emerald-500/20 hover:border-emerald-400 transition-colors text-xs font-semibold"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h2 className="text-white text-sm font-bold uppercase tracking-wider">
              Navigare Rapidă
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  Acasă
                </Link>
              </li>
              <li>
                <Link href="/servicii" className="hover:text-emerald-400 transition-colors">
                  Servicii Solare
                </Link>
              </li>
              <li>
                <Link href="/galerie" className="hover:text-emerald-400 transition-colors">
                  Galerie Proiecte
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-emerald-400 transition-colors">
                  Articole &amp; Ghiduri
                </Link>
              </li>
              <li>
                <Link href="/cere-oferta" className="text-emerald-400 font-semibold hover:underline">
                  Cere Ofertă Evaluare
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                  Contact &amp; Acoperire
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Links */}
          <div className="space-y-4">
            <h2 className="text-white text-sm font-bold uppercase tracking-wider">
              Serviciile Noastre
            </h2>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/servicii/${s.slug}`}
                    className="hover:text-emerald-400 transition-colors line-clamp-1"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & ANPC Banners */}
          <div className="space-y-4">
            <h2 className="text-white text-sm font-bold uppercase tracking-wider">
              Contact Operativ
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span>{companyData.phone}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span>{companyData.email}</span>
              </div>
              {companyData.showAddress ? (
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{companyData.address}</span>
                </div>
              ) : null}
            </div>

            {/* ANPC Banners / Links */}
            <div className="pt-2 space-y-2">
              <div className="text-xs text-slate-400 font-semibold">Protecția Consumatorului:</div>
              <div className="flex flex-col gap-2">
                <a
                  href={companyData.legal.sal}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-lg text-xs flex items-center justify-between gap-2 text-slate-300 transition-colors"
                >
                  <span className="min-w-0">ANPC - SAL</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 shrink-0" />
                </a>
                <a
                  href={companyData.legal.sol}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-lg text-xs flex items-center justify-between gap-2 text-slate-300 transition-colors"
                >
                  <span className="min-w-0">Platforma SOL</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 shrink-0" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row md:items-end justify-between gap-6 text-xs text-slate-400">
          <div className="space-y-1.5 max-w-xl">
            <div>
              © {currentYear} {companyData.legalName}. Toate drepturile rezervate.
            </div>
            <div className="leading-relaxed">
              CUI {companyData.cui} · Nr. Registrul Comerțului {companyData.tradeRegister}
              <br />
              Sediu social: {companyData.legalAddress}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/politica-confidentialitate" className="hover:text-white transition-colors">
              Politică de Confidențialitate (GDPR)
            </Link>
            <Link href="/termeni-conditii" className="hover:text-white transition-colors">
              Termeni și Condiții
            </Link>
            <Link href="/politica-cookies" className="hover:text-white transition-colors">
              Politică de Cookie-uri
            </Link>
            <button
              type="button"
              onClick={openCookieSettings}
              className="hover:text-white transition-colors"
            >
              Setări cookie
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
