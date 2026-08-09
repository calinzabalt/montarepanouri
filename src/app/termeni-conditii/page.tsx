import React from "react";

export const metadata = {
  title: "Termeni și Condiții",
  description:
    "Termenii de utilizare a site-ului și a serviciilor de montaj panouri solare și baterii oferite de MontarePanouri.ro.",
  alternates: { canonical: "/termeni-conditii" },
};

export default function TermsPage() {
  return (
    <div className="pb-20 bg-slate-950 min-h-screen text-slate-300">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        
        <div className="border-b border-slate-800 pb-6 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Termeni și Condiții de Utilizare
          </h1>
          <p className="text-xs text-slate-400">Ultima actualizare: Februarie 2026</p>
        </div>

        <div className="space-y-6 text-sm leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">1. Condiții Generale</h2>
            <p>
              Utilizarea site-ului montarepanouri.ro implică acceptarea deplină a prezentilor termeni și condiții. Dacă nu sunteți de acord cu acești termeni, vă rugăm să nu utilizați site-ul nostru.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">2. Servicii și Oferte Tehnic</h2>
            <p>
              Informațiile prezentate pe site au caracter informativ. Estimările de pret și configurările de sistem devin ferme numai în urma verificării tehnice pe teren și semnării contractului de prestări servicii.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">3. Garanții și Responsabilitate</h2>
            <p>
              Echipamentele (panouri, invertoare, baterii) beneficiază de garanția acordată de producători. Manopera de montaj beneficiază de garanție oferită de societatea noastră, detaliată în contract.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">4. Litigii și Drept Aplicabil</h2>
            <p>
              Orice litigiu apărut între clienți și MontarePanouri.ro se va rezolva pe cale amiabilă sau prin intermediul procedurilor SAL/SOL ANPC. În cazul în care rezolvarea amiabilă nu este posibilă, competența revine instanțelor judecătorești române.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
