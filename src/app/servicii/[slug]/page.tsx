import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { 
  ShieldCheck, 
  CheckCircle2, 
  Zap, 
  ArrowRight
} from "lucide-react";
import servicesData from "@/data/services.json";
import QuoteFormSection from "@/components/sections/QuoteFormSection";
import FaqSection from "@/components/sections/FaqSection";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);
  if (!service) return { title: "Serviciu Negăsit" };

  return {
    title: `${service.title} | Montaj la Cheie`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} - MontarePanouri.ro`,
      description: service.shortDescription,
      images: [service.image],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  // Structured Service JSON-LD Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.shortDescription,
    "provider": {
      "@type": "LocalBusiness",
      "name": "MontarePanouri.ro",
    },
    "areaServed": "Romania",
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Header Serviciu */}
      <section className="relative py-16 lg:py-24 border-b border-slate-800 bg-slate-900/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="px-3.5 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider rounded-full inline-block">
                <ShieldCheck className="w-3.5 h-3.5 inline mr-1 text-amber-400" />
                Montaj Panouri &amp; Baterii
              </span>

              <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
                {service.title}
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                {service.heroSubtitle}
              </p>

              {/* Technical Specs Quick Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                {service.specs.map((spec, idx) => (
                  <div key={idx} className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs">
                    <div className="text-slate-400 font-medium">{spec.label}</div>
                    <div className="text-emerald-400 font-bold mt-1 text-sm">{spec.value}</div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="#formular-oferta"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-950/60"
                >
                  <Zap className="w-4 h-4 text-amber-300" />
                  <span>SOLICITĂ ESTIMARE PENTRU ACEST SERVICIU</span>
                </a>
              </div>
            </div>

            {/* Main Service Image */}
            <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
              <Image
                src={service.image}
                alt={service.title}
                width={1400}
                height={900}
                priority
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            </div>

          </div>
        </div>
      </section>

      {/* Ce include serviciul: Beneficii și Specificații Tehnice */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Ce include pachetul complet?
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Fiecare lucrare realizată de MontarePanouri.ro include componente de calitate industrială și asistență tehnică pas cu pas.
              </p>

              <div className="space-y-3">
                {service.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-slate-900 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-200">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Detail List */}
            <div className="space-y-6 pt-4">
              <h3 className="text-xl font-bold text-white">
                Specificații &amp; Detalii de Execuție
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feat, idx) => (
                  <div key={idx} className="p-5 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-2">
                    <h4 className="font-bold text-white text-base text-emerald-400">{feat.title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{feat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dedicated Gallery Photos */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center justify-between">
              <span>Galerie Lucrări Executate</span>
              <span className="text-xs font-normal text-slate-400">Poze strict din teren</span>
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {service.galleryImages.map((img, i) => (
                <div key={i} className="relative h-44 rounded-xl overflow-hidden border border-slate-800 group">
                  <Image
                    src={img}
                    alt={`${service.title} - Imagine ${i + 1}`}
                    width={900}
                    height={700}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
                </div>
              ))}
            </div>

            {/* Sticky Intermediary CTA Box */}
            <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-500/30 rounded-2xl space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Zap className="w-4 h-4" /> Solicitare Estimare Rapidă
              </div>
              <h4 className="text-lg font-bold text-white">
                Ai nevoie de o ofertă pentru {service.title}?
              </h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Calculăm gratuit puterea necesară și echipamentele potrivite în funcție de consumul tău.
              </p>
              <a
                href="#formular-oferta"
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <span>Cere Ofertă Personalizată</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ specific for service */}
      {service.faq && service.faq.length > 0 && (
        <FaqSection faqs={service.faq.map((item, idx) => ({ id: `s-faq-${idx}`, ...item }))} />
      )}

      {/* Dedicated Formular Oferta */}
      <QuoteFormSection
        title={`Solicită o ofertă dedicată pentru ${service.title}`}
        subtitle="Completează datele de mai jos și un inginer autorizat vă va contacta pentru devizul tehnic."
      />
    </div>
  );
}
