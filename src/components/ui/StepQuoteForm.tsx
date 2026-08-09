"use client";

import React, { useState } from "react";
import { 
  Home, 
  Building2, 
  Layers, 
  Battery, 
  Zap, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  ShieldCheck
} from "lucide-react";

export default function StepQuoteForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    propertyType: "Casă / Vilă",
    roofType: "Țiglă Ceramică / Metalică",
    wantBatteries: "Da, doresc stocare pe baterie / banc de stocare",
    monthlyBill: "500 - 1000 lei / lună",
    name: "",
    phone: "",
    email: "",
    county: "Timiș (Timișoara)",
    city: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-12 text-center space-y-6 max-w-2xl mx-auto shadow-2xl">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
          <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Solicitare Înregistrată!</h3>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Vă mulțumim, <span className="text-emerald-400 font-bold">{formData.name}</span>! Am preluat specificațiile pentru sistemul de la proprietatea din <span className="text-white font-bold">{formData.county}</span>.
        </p>
        <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 text-xs text-slate-400 space-y-1">
          <div>Telefon contact: <strong className="text-white">{formData.phone}</strong></div>
          <div>Opțiune Baterie: <strong className="text-emerald-400">{formData.wantBatteries}</strong></div>
          <div>Proprietate: <strong className="text-white">{formData.propertyType}</strong></div>
        </div>
        <p className="text-xs text-slate-400">
          Un tehnician revine telefonic în maxim 30 de minute cu devizul complet de montaj la cheie.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-10 shadow-2xl">
      {/* Progress Bar Header */}
      <div className="mb-6 sm:mb-8 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
          <span>Pasul {currentStep} din 5</span>
          <span className="text-emerald-400">
            {currentStep === 1 && "Tip Proprietate"}
            {currentStep === 2 && "Tip Acoperiș"}
            {currentStep === 3 && "Stocare & Baterii"}
            {currentStep === 4 && "Consum Lunar"}
            {currentStep === 5 && "Date Contact Final"}
          </span>
        </div>
        <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-amber-400 transition-all duration-500"
            style={{ width: `${(currentStep / 5) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        
        {/* Step 1: Property Type */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-xl font-bold text-white">1. Care este tipul proprietății dumneavoastră?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Casă / Vilă Rezidențială", icon: Home, val: "Casă / Vilă" },
                { label: "Spațiu Comercial / Hală", icon: Building2, val: "Spațiu Comercial / Hală" },
                { label: "Fermă / Altele", icon: Layers, val: "Fermă / Altele" },
              ].map((opt) => {
                const IconComponent = opt.icon;
                const selected = formData.propertyType === opt.val;
                return (
                  <button
                    key={opt.val}
                    type="button"
                    onClick={() => setFormData({ ...formData, propertyType: opt.val })}
                    className={`p-5 rounded-2xl border text-left transition-all flex flex-col justify-between gap-4 ${
                      selected
                        ? "bg-emerald-950/40 border-emerald-500 text-white shadow-lg ring-1 ring-emerald-500"
                        : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
                    }`}
                  >
                    <IconComponent className={`w-8 h-8 ${selected ? "text-emerald-400" : "text-slate-500"}`} />
                    <span className="font-bold text-sm">{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 2: Roof Type */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-xl font-bold text-white">2. Ce tip de acoperiș are clădirea?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Țiglă Ceramică / Metalică",
                "Tablă Cutată / Lindab",
                "Terasă Plat / Beton",
                "Șindrilă Bituminoasă / Altele",
              ].map((roof) => {
                const selected = formData.roofType === roof;
                return (
                  <button
                    key={roof}
                    type="button"
                    onClick={() => setFormData({ ...formData, roofType: roof })}
                    className={`p-4 rounded-xl border text-left font-semibold text-sm transition-all ${
                      selected
                        ? "bg-emerald-950/40 border-emerald-500 text-white ring-1 ring-emerald-500"
                        : "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    {roof}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 3: Battery Storage */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-xl font-bold text-white">3. Doriți și baterii / banc de stocare?</h3>
            <div className="space-y-3">
              {[
                "Da, doresc baterii / banc de stocare (autonomie &amp; backup)",
                "Nu, doresc doar montaj panouri solare",
                "Doresc recomandare tehnică",
              ].map((opt) => {
                const selected = formData.wantBatteries === opt;
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setFormData({ ...formData, wantBatteries: opt })}
                    className={`w-full p-4 rounded-xl border text-left text-sm font-medium transition-all flex items-center justify-between ${
                      selected
                        ? "bg-emerald-950/40 border-emerald-500 text-white font-bold ring-1 ring-emerald-500"
                        : "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <Battery className={`w-5 h-5 ${selected ? "text-emerald-400" : "text-slate-500"}`} />
                      {opt}
                    </span>
                    {selected && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 4: Monthly Consumption */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-xl font-bold text-white">4. Care este consumul sau factura medie lunară de energie?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Sub 300 lei / lună (Consum ~200 kWh)",
                "300 - 600 lei / lună (Consum ~400 kWh)",
                "600 - 1200 lei / lună (Consum ~800 kWh)",
                "Peste 1200 lei / lună (Consum Comercial)",
              ].map((bill) => {
                const selected = formData.monthlyBill === bill;
                return (
                  <button
                    key={bill}
                    type="button"
                    onClick={() => setFormData({ ...formData, monthlyBill: bill })}
                    className={`p-4 rounded-xl border text-left text-sm font-semibold transition-all flex items-center gap-3 ${
                      selected
                        ? "bg-emerald-950/40 border-emerald-500 text-white ring-1 ring-emerald-500"
                        : "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    <Zap className={`w-5 h-5 ${selected ? "text-amber-400" : "text-slate-500"}`} />
                    {bill}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 5: Contact Details */}
        {currentStep === 5 && (
          <div className="space-y-4 animate-fadeIn">
            <h3 className="text-xl font-bold text-white">5. Unde vă trimitem oferta de montaj calculată?</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Nume &amp; Prenume *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="Ion Popescu"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Telefon Mobil *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                  <input
                    type="tel"
                    required
                    placeholder="0700 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Email (Opțional)
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    placeholder="nume@email.ro"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Județ *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                  <select
                    value={formData.county}
                    onChange={(e) => setFormData({ ...formData, county: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Timiș (Timișoara)">Timiș (Timișoara)</option>
                    <option value="Arad">Arad</option>
                    <option value="Bihor (Oradea)">Bihor (Oradea)</option>
                    <option value="Caraș-Severin">Caraș-Severin</option>
                    <option value="Hunedoara">Hunedoara</option>
                    <option value="Alt județ (Proiect mare cu baterii)">Alt județ (Proiect mare cu baterii)</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Localitate / Oraș
              </label>
              <input
                type="text"
                placeholder="Ex: Arad, Timișoara, Oradea..."
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>
        )}

        {/* Step Control Buttons */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="px-5 py-2.5 bg-slate-950 hover:bg-slate-800 text-slate-300 font-semibold text-xs rounded-xl border border-slate-800 inline-flex items-center justify-center gap-1.5 transition-colors w-full sm:w-auto"
            >
              <ArrowLeft className="w-4 h-4" /> Înapoi
            </button>
          ) : (
            <div className="hidden sm:block" />
          )}

          {currentStep < 5 ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg inline-flex items-center justify-center gap-1.5 transition-all w-full sm:w-auto"
            >
              <span>Pasul Următor</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              className="px-6 sm:px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-black text-xs rounded-xl shadow-xl shadow-emerald-950/50 inline-flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <ShieldCheck className="w-4 h-4 text-amber-300 shrink-0" />
              <span>Trimite pentru estimare</span>
            </button>
          )}
        </div>

      </form>
    </div>
  );
}
