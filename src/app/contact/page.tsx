"use client";

import React, { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2
} from "lucide-react";
import companyData from "@/data/company.json";
import CoverageMapSection from "@/components/sections/CoverageMapSection";
import { submitContact } from "@/lib/submit-contact";
import FormPrivacyNote from "@/components/ui/FormPrivacyNote";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const result = await submitContact({
      source: "Pagină Contact",
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    });
    setLoading(false);
    if (result.ok) {
      setSubmitted(true);
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200">
      
      {/* Header */}
      <div className="py-12 bg-slate-900/60 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="px-3.5 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider rounded-full inline-block">
            Suntem Aici Pentru Tine
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Informații &amp; Contact Direct
          </h1>
          <p className="text-slate-400 text-base max-w-2xl mx-auto">
            Ai o întrebare generală sau dorești o vizită tehnică în județul tău? Echipa noastră îți stă la dispoziție.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Operational Cards */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl font-bold text-white">Date de Contact Direct</h2>

            <div className="space-y-4">
              <a
                href={`tel:${companyData.phoneRaw}`}
                className="flex items-start gap-4 p-5 bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-2xl transition-all group"
              >
                <div className="p-3 bg-slate-800 rounded-xl text-emerald-400 zoom-on-hover-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    Telefon Operativ
                  </div>
                  <div className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {companyData.phone}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">Apel direct inginer de gardă</div>
                </div>
              </a>

              <a
                href={companyData.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 p-5 bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-2xl transition-all group"
              >
                <div className="p-3 bg-slate-800 rounded-xl text-emerald-400 zoom-on-hover-lg">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    WhatsApp Chat Rapid
                  </div>
                  <div className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    Mesaj pe WhatsApp
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">Trimite poze cu acoperișul direct pe chat</div>
                </div>
              </a>

              <a
                href={`mailto:${companyData.email}`}
                className="flex items-start gap-4 p-5 bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-2xl transition-all group"
              >
                <div className="p-3 bg-slate-800 rounded-xl text-emerald-400 zoom-on-hover-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    Email Oficial
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors break-all">
                    {companyData.email}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">Pentru proiecte tehnice &amp; cereri B2B</div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-5 bg-slate-900 border border-slate-800 rounded-2xl">
                <div className="p-3 bg-slate-800 rounded-xl text-amber-400">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    Program de Lucru
                  </div>
                  <div className="text-sm font-bold text-white mt-1">
                    {companyData.schedule}
                  </div>
                </div>
              </div>

              {companyData.showAddress ? (
                <div className="flex items-start gap-4 p-5 bg-slate-900 border border-slate-800 rounded-2xl">
                  <div className="p-3 bg-slate-800 rounded-xl text-purple-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      Sediu Central &amp; Depozit
                    </div>
                    <div className="text-sm font-bold text-white mt-1">
                      {companyData.address}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          {/* Right Column: Simple Contact Form */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl space-y-6">
            <div>
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                Întrebări Generale &amp; Suport
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Formular Simplu de Contact
              </h2>
              <p className="text-slate-400 text-xs mt-1">
                Folosește acest formular pentru întrebări generale, parteneriate sau informații despre garanție.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">Mesaj Trimis cu Succes!</h3>
                <p className="text-xs text-slate-300">
                  Vă mulțumim! Un reprezentant vă va răspunde pe email sau telefon în cel mai scurt timp.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Nume &amp; Prenume *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Ion Popescu"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Telefon Mobil *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="0743 960 969"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="email@domeniu.ro"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Subiect
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      placeholder="Ex: Întrebare garanție, Suport..."
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Mesajul Tău *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    placeholder="Scrieți mesajul dumneavoastră aici..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>

                {error ? (
                  <p className="text-sm text-red-400 text-center">{error}</p>
                ) : null}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-xs rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? "SE TRIMITE..." : "TRIMITE MESAJUL GENERAL"}</span>
                </button>
                <FormPrivacyNote className="text-center" />
              </form>
            )}
          </div>

        </div>
      </div>

      {/* Coverage Map Component */}
      <CoverageMapSection />
    </div>
  );
}
