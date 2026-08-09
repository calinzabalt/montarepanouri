import type { Metadata } from "next";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import QuoteFormSection from "@/components/sections/QuoteFormSection";

export const metadata: Metadata = {
  title: "Servicii Montaj Panouri Solare & Baterii",
  description:
    "Montaj panouri solare pe acoperiș, baterii / bancuri de stocare și diagnostic tehnic pe teren. Arad, Timișoara și Vestul României.",
  alternates: {
    canonical: "/servicii",
  },
  openGraph: {
    title: "Servicii Montaj Panouri Solare & Baterii",
    description:
      "Montaj panouri solare, baterii / bancuri de stocare și verificări tehnice pe teren.",
    url: "/servicii",
  },
};

export default function ServicesPage() {
  return (
    <div>
      <div className="bg-slate-950 py-16 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="px-3.5 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider rounded-full inline-block">
            Servicii Montaj Solar
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Montaj Panouri, Stocare &amp; Diagnostic
          </h1>
          <p className="text-slate-400 text-base max-w-2xl mx-auto">
            Montaj panouri solare pe acoperiș, baterii / bancuri de stocare și verificări tehnice pe teren.
          </p>
        </div>
      </div>

      <ServicesSection />
      <WhyUsSection />
      <QuoteFormSection />
    </div>
  );
}
