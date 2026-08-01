"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  MessageCircle,
  ChevronDown,
  Menu,
  X,
  Sun,
  ShieldCheck,
  BatteryCharging,
  Building2,
  Wrench,
  MapPin,
  Zap,
} from "lucide-react";
import companyData from "@/data/company.json";
import servicesData from "@/data/services.json";
import QuickQuoteModal from "@/components/ui/QuickQuoteModal";

/* ─── Topbar ticker items ───────────────────────────────────── */
const TICKER_ITEMS = [
  { icon: <Phone className="w-3 h-3 text-emerald-400" />, text: companyData.phone },
  { icon: <MapPin className="w-3 h-3 text-amber-400" />, text: "Arad • Timișoara • Zona de Vest" },
  { icon: <ShieldCheck className="w-3 h-3 text-emerald-400" />, text: "Atestat ANRE C1A / C2A" },
  { icon: <BatteryCharging className="w-3 h-3 text-amber-400" />, text: "Montaj la Cheie: Panouri + Baterii" },
  { icon: <Zap className="w-3 h-3 text-emerald-400" />, text: "Proiecte mari cu baterii → toată țara" },
  { icon: <MessageCircle className="w-3 h-3 text-amber-400" />, text: "WhatsApp rapid: " + companyData.phone },
];

function Topbar({ onOpenModal }: { onOpenModal: () => void }) {
  // Duplicate items so the ticker loop is seamless
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="relative bg-slate-950 border-b border-white/[0.05] overflow-hidden">
      {/* Gradient fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-slate-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-52 z-10 bg-gradient-to-l from-slate-950 via-slate-950/95 to-transparent" />

      {/* Right side: CTA pill — solid bg so ticker text never bleeds through */}
      <div className="absolute right-0 inset-y-0 z-20 flex items-center pr-4 pl-8 bg-slate-950">
        <button
          onClick={onOpenModal}
          className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 text-[11px] font-bold uppercase tracking-wider hover:bg-emerald-500/25 transition-colors whitespace-nowrap"
        >
          <Zap className="w-3 h-3" />
          Cere Ofertă Rapidă
        </button>
      </div>

      {/* Ticker track */}
      <div className="ticker-track py-2.5 pl-4">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 mr-10 text-slate-400 text-[11px] font-medium">
            {item.icon}
            <span>{item.text}</span>
            <span className="text-slate-700">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Main Nav ──────────────────────────────────────────────── */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case "Sun":          return <Sun className="w-4.5 h-4.5 text-amber-400" />;
      case "BatteryCharging": return <BatteryCharging className="w-4.5 h-4.5 text-emerald-400" />;
      case "Building2":   return <Building2 className="w-4.5 h-4.5 text-sky-400" />;
      case "Wrench":      return <Wrench className="w-4.5 h-4.5 text-violet-400" />;
      default:            return <Sun className="w-4.5 h-4.5 text-amber-400" />;
    }
  };

  const navLinkClass = (href: string, exact = false) => {
    const active = exact ? pathname === href : pathname.startsWith(href);
    return `relative text-sm font-medium transition-colors duration-200 ${
      active
        ? "text-emerald-400"
        : "text-slate-300 hover:text-white"
    }`;
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 flex flex-col">
        {/* ── Topbar ── */}
        <Topbar onOpenModal={() => setModalOpen(true)} />

        {/* ── Main nav ── */}
        <nav
          className={`transition-all duration-300 ${
            isScrolled
              ? "bg-[#080F1A]/95 backdrop-blur-2xl shadow-[0_1px_0_rgba(255,255,255,0.05)] py-3"
              : "bg-[#080F1A]/70 backdrop-blur-xl py-4"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-900/30 group-hover:scale-105 transition-transform">
                <Sun className="w-5 h-5 text-slate-950" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-base font-extrabold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                  MONTARE<span className="text-emerald-400">PANOURI</span>
                  <span className="text-slate-500 font-light">.ro</span>
                </span>
                <span className="text-[9px] uppercase font-semibold tracking-[0.18em] text-slate-500 mt-0.5">
                  Montaj Panouri &amp; Baterii la Cheie
                </span>
              </div>
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-8">
              <Link href="/" className={navLinkClass("/", true)}>Acasă</Link>

              {/* Servicii dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href="/servicii"
                  className={`${navLinkClass("/servicii")} flex items-center gap-1`}
                >
                  Servicii
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </Link>

                {servicesOpen && (
                  <div className="absolute top-full pt-3 left-1/2 -translate-x-1/2 animate-fadeIn">
                    <div className="w-[340px] bg-[#0D1727] border border-white/[0.08] rounded-2xl p-2 shadow-2xl shadow-black/60">
                      {servicesData.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/servicii/${s.slug}`}
                          onClick={() => setServicesOpen(false)}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.05] transition-colors group/item"
                        >
                          <div className="w-8 h-8 rounded-lg bg-slate-800/80 flex items-center justify-center shrink-0 group-hover/item:bg-slate-700/80 transition-colors mt-0.5">
                            {getServiceIcon(s.icon)}
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-white group-hover/item:text-emerald-400 transition-colors leading-tight">
                              {s.title}
                            </p>
                            <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                              {s.shortDescription}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/galerie" className={navLinkClass("/galerie", true)}>Galerie</Link>
              <Link href="/blog" className={navLinkClass("/blog")}>Blog</Link>
              <Link href="/contact" className={navLinkClass("/contact", true)}>Contact</Link>
            </div>

            {/* CTA button */}
            <div className="hidden lg:flex items-center">
              <button
                onClick={() => setModalOpen(true)}
                className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold shadow-lg shadow-emerald-900/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Zap className="w-4 h-4 text-amber-300 group-hover:rotate-12 transition-transform" />
                Cere Ofertă
              </button>
            </div>

            {/* Mobile toggles */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => setModalOpen(true)}
                className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg transition-colors"
              >
                Ofertă
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-800 rounded-xl transition-colors"
                aria-label="Meniu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile drawer */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-white/[0.06] px-6 py-5 space-y-1 animate-fadeIn bg-[#0A1120]">
              {[
                { href: "/", label: "Acasă" },
                { href: "/galerie", label: "Galerie Proiecte" },
                { href: "/blog", label: "Articole / Blog" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                >
                  {label}
                </Link>
              ))}

              <div className="pt-2 border-t border-white/[0.06] space-y-1">
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 py-1.5">
                  Servicii
                </p>
                {servicesData.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/servicii/${s.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-sm text-slate-400 hover:text-emerald-400 transition-colors pl-2"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>

              <div className="pt-3">
                <button
                  onClick={() => { setMobileMenuOpen(false); setModalOpen(true); }}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl transition-colors"
                >
                  Cere Ofertă Personalizată
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      <QuickQuoteModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
