import React from "react";

export const metadata = {
  title: "Politică de Confidențialitate (GDPR)",
  description: "Politica de confidențialitate și prelucrare a datelor cu caracter personal conform Regulamentului UE 2016/679 (GDPR).",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20 bg-slate-950 min-h-screen text-slate-300">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        
        <div className="border-b border-slate-800 pb-6 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Politică de Confidențialitate (GDPR)
          </h1>
          <p className="text-xs text-slate-400">Ultima actualizare: Februarie 2026</p>
        </div>

        <div className="space-y-6 text-sm leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">1. Informații Generale</h2>
            <p>
              Confidențialitatea datelor dumneavoastră cu caracter personal reprezintă o preocupare majoră pentru S.C. MONTARE PANOURI FOTOVOLTAICE S.R.L. (denumită în continuare &ldquo;MontarePanouri.ro&rdquo;). Acest document are rolul de a vă informa cu privire la prelucrarea datelor cu caracter personal, în contextul utilizării site-ului montarepanouri.ro.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">2. Categoriile de Date Prelucrate</h2>
            <p>
              Dacă sunteți vizitator al site-ului, vom prelucra datele cu caracter personal pe care le furnizați în mod direct în cadrul secțiunilor de formular (Nume, Prenume, Număr de telefon, Adresă de e-mail, Județ/Localitate, Detalii consum energetic).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">3. Scopurile și Temeiurile Prelucrării</h2>
            <p>
              Prelucrarea datelor se face pentru:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Preluarea și procesarea cererilor de ofertă tehnică pentru sisteme fotovoltaice și baterii.</li>
              <li>Întocmirea dosarului de prosumator și comunicarea cu distribuitorul de energie.</li>
              <li>Contactarea telefonică în vederea efectuării măsurătorilor pe teren.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">4. Durata de Păstrare a Datelor</h2>
            <p>
              Datele vor fi păstrate pe perioada necesară îndeplinirii scopurilor menționate sau până la exercitarea dreptului de ștergere (&ldquo;dreptul de a fi uitat&rdquo;).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">5. Drepturile Dumneavoastră</h2>
            <p>
              Conform Regulamentului GDPR, beneficiați de dreptul de acces, rectificare, ștergere, restricționare a prelucrării, portabilitate a datelor și dreptul de a depune o plângere la ANSPDCP.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
