"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2, ShieldCheck, PhoneCall } from "lucide-react";
import { submitContact } from "@/lib/submit-contact";
import FormPrivacyNote from "@/components/ui/FormPrivacyNote";

interface QuickQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function QuickQuoteModal({
  isOpen,
  onClose,
  defaultService = "Instalații Panouri Fotovoltaice (Rezidențial)",
}: QuickQuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    county: "Timiș (Timișoara)",
    service: defaultService,
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const result = await submitContact({
      source: "Modal Cere Ofertă",
      name: formData.name,
      phone: formData.phone,
      county: formData.county,
      service: formData.service,
      notes: formData.notes,
    });
    setLoading(false);
    if (result.ok) {
      setSubmitted(true);
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl max-h-[min(92dvh,720px)] flex flex-col bg-slate-900 border border-slate-700/80 rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden">
        {/* Decorative ambient light — clipped by overflow-hidden so they don't create scroll */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
          aria-label="Închide"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="relative z-10 p-5 sm:p-8 overflow-y-auto overscroll-contain">
          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full mb-2">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white">Solicitare Trimisă cu Succes!</h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto">
                Vă mulțumim, <span className="font-semibold text-emerald-400">{formData.name}</span>! Echipa tehnică MontarePanouri vă va contacta în maxim 30 de minute pe numărul <span className="font-semibold text-white">{formData.phone}</span> pentru calculul montajului la cheie.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-medium rounded-xl transition-all shadow-lg shadow-emerald-900/30"
                >
                  Am înțeles / Închide
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-5 pr-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-3.5 h-3.5" /> Montaj la Cheie (Panouri + Baterii)
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Cere Ofertă Montaj la Cheie
                </h2>
                <p className="text-slate-400 text-xs mt-1">
                  Servicii în Arad, Timișoara &amp; Vest (sau Național pentru proiecte mari cu baterii).
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Nume &amp; Prenume *
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    placeholder="Ex: Ion Popescu"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label htmlFor="modal-phone" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Telefon Mobil *
                    </label>
                    <input
                      id="modal-phone"
                      type="tel"
                      required
                      placeholder="0743 960 969"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="modal-county" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Județ / Locație *
                    </label>
                    <select
                      id="modal-county"
                      value={formData.county}
                      onChange={(e) => setFormData({ ...formData, county: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm"
                    >
                      <option value="Timiș (Timișoara)" className="bg-slate-900 text-white">Timiș (Timișoara)</option>
                      <option value="Arad" className="bg-slate-900 text-white">Arad</option>
                      <option value="Bihor (Oradea)" className="bg-slate-900 text-white">Bihor (Oradea)</option>
                      <option value="Caraș-Severin" className="bg-slate-900 text-white">Caraș-Severin</option>
                      <option value="Hunedoara" className="bg-slate-900 text-white">Hunedoara</option>
                      <option value="Alt Județ (Proiect Mare + Baterii)" className="bg-slate-900 text-white">Alt Județ (Proiect Mare + Baterii)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="modal-service" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Serviciul Dorit
                  </label>
                  <select
                    id="modal-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm"
                  >
                    <option value="Instalații Panouri Fotovoltaice (Rezidențial)">
                      Instalații Panouri Fotovoltaice (Rezidențial)
                    </option>
                    <option value="Sisteme de Stocare și Baterii">
                      Sisteme de Stocare și Baterii
                    </option>
                    <option value="Montaj Panouri Commercial & Industrial">
                      Montaj Panouri Commercial &amp; Industrial
                    </option>
                    <option value="Mentenanță, Diagnostic & Curățare">
                      Mentenanță, Diagnostic &amp; Curățare
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="modal-notes" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Detalii Suplimentare (Opțional)
                  </label>
                  <textarea
                    id="modal-notes"
                    rows={2}
                    placeholder="Ex: Suprafață acoperiș, dorință baterii / banc de stocare..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-800/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm resize-none"
                  />
                </div>

                <div className="pt-1 space-y-3">
                  {error ? (
                    <p className="text-sm text-red-400 text-center">{error}</p>
                  ) : null}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 bg-emerald-700 hover:bg-emerald-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-lg shadow-emerald-900/30 transition-all flex items-center justify-center gap-2 group"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    {loading ? "Se trimite..." : "Trimite Cerere Estimare Montaj"}
                  </button>
                  <FormPrivacyNote className="text-center" />
                </div>

                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
                  <span className="flex items-center gap-1">
                    <PhoneCall className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Răspuns rapid în 30 min
                  </span>
                  <span>Fără obligație financiară</span>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
