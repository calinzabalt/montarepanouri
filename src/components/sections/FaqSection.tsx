"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import defaultFaqs from "@/data/faqs.json";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs?: FaqItem[];
  title?: string;
  subtitle?: string;
}

export default function FaqSection({
  faqs = defaultFaqs,
  title = "Întrebări Frecvente (FAQ)",
  subtitle = "Răspunsuri transparente la cele mai comune nedumeriri privind costurile, procesul de montaj și autorizarea ANRE.",
}: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  // Structured JSON-LD Schema markup for Google Rich Results
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer,
      },
    })),
  };

  return (
    <section className="py-28 sm:py-32 bg-slate-900/60 border-t border-white/[0.06] relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <span className="px-3.5 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider rounded-full inline-block">
            <HelpCircle className="w-3.5 h-3.5 inline mr-1" />
            Răspunsuri la Nedumeriri
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden transition-all shadow-md"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-white pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-emerald-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-emerald-500/20" : ""
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/60 pt-4 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
