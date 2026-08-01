import React from "react";

export const metadata = {
  title: "Politică de Cookie-uri",
  description: "Informații privind utilizarea modulilor cookie pe site-ul MontarePanouri.ro.",
};

export default function CookiePolicyPage() {
  return (
    <div className="pt-28 pb-20 bg-slate-950 min-h-screen text-slate-300">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        
        <div className="border-b border-slate-800 pb-6 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Politică de Module Cookie
          </h1>
          <p className="text-xs text-slate-400">Ultima actualizare: Februarie 2026</p>
        </div>

        <div className="space-y-6 text-sm leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">1. Ce sunt cookie-urile?</h2>
            <p>
              Un cookie este un fișier text de mici dimensiuni pe care un site web îl salvează pe calculatorul sau dispozitivul dumneavoastră mobil atunci când vizitați site-ul.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">2. Ce tipuri de cookie-uri folosim?</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Cookie-uri Esențiale:</strong> Necesare pentru funcționarea corectă a formularelor și a navigației.</li>
              <li><strong>Cookie-uri Analitice:</strong> Ne ajută să înțelegem cum interacționează vizitatorii cu site-ul pentru a îmbunătăți performanța paginilor.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">3. Cum puteți controla cookie-urile?</h2>
            <p>
              Puteți controla și/sau șterge cookie-urile după dorință direct din setările browserului dumneavoastră web (Chrome, Firefox, Edge, Safari).
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
