import React from "react";
import Link from "next/link";
import companyData from "@/data/company.json";

export const metadata = {
  title: "Termeni și Condiții",
  description:
    "Termenii de utilizare a site-ului montarepanouri.ro și condițiile serviciilor de montaj panouri solare și baterii oferite de BRE SOLAR S.R.L.",
  alternates: { canonical: "/termeni-conditii" },
};

export default function TermsPage() {
  return (
    <div className="pb-20 pt-10 sm:pt-14 bg-slate-950 min-h-screen text-slate-300">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        <div className="border-b border-slate-800 pb-6 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Termeni și Condiții de Utilizare
          </h1>
          <p className="text-xs text-slate-400">Ultima actualizare: 15 august 2026</p>
        </div>

        <div className="space-y-8 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Identificarea operatorului</h2>
            <p>
              Site-ul {companyData.website.replace("https://", "")} este deținut și operat de{" "}
              <strong className="text-white">{companyData.legalName}</strong>, CUI {companyData.cui}, Nr. Registrul
              Comerțului {companyData.tradeRegister}, sediu social: {companyData.legalAddress}.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>E-mail: {companyData.email}</li>
              <li>Telefon: {companyData.phone}</li>
              <li>Program: {companyData.schedule}</li>
            </ul>
            <p>
              Informațiile de mai sus sunt furnizate conform obligațiilor de identificare din Legea nr. 365/2002
              privind comerțul electronic și legislația aplicabilă protecției consumatorilor.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Acceptarea termenilor</h2>
            <p>
              Accesarea și utilizarea site-ului implică acceptarea acestor termeni. Dacă nu sunteți de acord,
              vă rugăm să nu folosiți site-ul și să nu transmiteți formulare.
            </p>
            <p>
              Prelucrarea datelor personale este descrisă separat în{" "}
              <Link href="/politica-confidentialitate" className="text-emerald-400 hover:underline">
                Politica de confidențialitate
              </Link>{" "}
              și în{" "}
              <Link href="/politica-cookies" className="text-emerald-400 hover:underline">
                Politica de cookie-uri
              </Link>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Obiectul site-ului</h2>
            <p>
              Site-ul prezintă servicii de montaj panouri solare și baterii / bancuri de stocare, conținut
              informativ (articole, galerie) și permite transmiterea de cereri de ofertă sau mesaje de contact.
            </p>
            <p>
              <strong className="text-white">Site-ul nu este un magazin online.</strong> Nu se încheie contracte
              și nu se efectuează plăți prin intermediul paginilor web. Trimiterea unui formular nu constituie
              comandă fermă și nu generează obligația de a încheia un contract.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Caracterul informativ al conținutului</h2>
            <p>
              Textele, fotografiile, estimările orientative și descrierile de servicii au caracter informativ.
              Configurațiile, prețurile și termenele devin ferme doar după verificare tehnică (inclusiv, după
              caz, vizită pe teren) și după semnarea unui contract de prestări servicii.
            </p>
            <p>
              Ne rezervăm dreptul de a actualiza conținutul site-ului fără notificare prealabilă. Imaginile din
              galerie sunt exemple de lucrări și nu reprezintă o ofertă pentru un proiect identic.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Cereri de ofertă</h2>
            <p>
              Prin completarea unui formular, solicitați o estimare sau un contact din partea echipei noastre.
              Vă angajați să furnizați date corecte. Ofertele transmise ulterior sunt valabile pe perioada
              menționată în documentul de ofertă, dacă aceasta este precizată.
            </p>
            <p>
              Putem refuza preluarea unei solicitări (de exemplu date incomplete, solicitări în afara ariei
              de servicii sau suspiciune de abuz), fără a fi obligați să motivăm în detaliu, cu respectarea
              legislației aplicabile.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">6. Servicii, garanții și contract</h2>
            <p>
              Serviciile efective (montaj, diagnostic, lucrări conexe) sunt prestate pe baza contractului
              scris încheiat între părți. Contractul prevalează asupra conținutului site-ului.
            </p>
            <p>
              Echipamentele (panouri, invertoare, baterii) beneficiază de garanția acordată de producători.
              Manopera de montaj beneficiază de garanție oferită de {companyData.legalName}, în termenii
              prevăzuți în contract. Site-ul nu garantează rezultate energetice specifice (producție kWh,
              facturi), acestea depinzând de condiții tehnice, orientare, umbrire și consum.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">7. Proprietate intelectuală</h2>
            <p>
              Conținutul site-ului (texte, fotografii, logo, structură, grafică) aparține Operatorului sau
              este folosit cu drept de utilizare. Este interzisă copierea, republicarea sau folosirea
              comercială fără acord scris prealabil, cu excepția drepturilor recunoscute de lege (ex.: citare
              rezonabilă).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">8. Obligațiile utilizatorului</h2>
            <p>Vă obligați să nu folosiți site-ul pentru:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>transmiterea de informații false, injurioase sau ilegale;</li>
              <li>spam, tentative de acces neautorizat sau afectarea funcționării site-ului;</li>
              <li>colectarea de date ale altor persoane fără temei legal.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">9. Limitarea răspunderii</h2>
            <p>
              Depunem eforturi rezonabile pentru ca site-ul să funcționeze corect, însă nu garantăm
              disponibilitate neîntreruptă, absența erorilor sau compatibilitatea cu toate dispozitivele.
              În limita permisă de lege, Operatorul nu răspunde pentru daune indirecte rezultate din
              utilizarea sau imposibilitatea utilizării site-ului.
            </p>
            <p>
              Linkurile către terți (WhatsApp, ANPC, platforma SOL etc.) duc către site-uri pe care nu le
              controlăm. Politicile acelor terți se aplică separat.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">10. Protecția consumatorului</h2>
            <p>
              Consumatorii pot apela la procedurile de soluționare alternativă a litigiilor:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                ANPC:{" "}
                <a
                  href={companyData.legal.anpc}
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  anpc.ro
                </a>
              </li>
              <li>
                SAL:{" "}
                <a
                  href={companyData.legal.sal}
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  Soluționare Alternativă a Litigiilor
                </a>
              </li>
              <li>
                SOL (UE):{" "}
                <a
                  href={companyData.legal.sol}
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  Platforma europeană ODR
                </a>
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">11. Drept aplicabil și litigii</h2>
            <p>
              Prezenții termeni sunt guvernați de legea română. Orice litigiu se soluționează pe cale
              amiabilă. Dacă nu este posibil, competența revine instanțelor judecătorești române, cu
              respectarea dispozițiilor de protecție a consumatorilor privind competența teritorială.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">12. Modificări</h2>
            <p>
              Putem actualiza acești termeni. Versiunea publicată pe această pagină, cu data de la început,
              este cea aplicabilă. Pentru contractele deja semnate, rămân valabile clauzele din contract.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
