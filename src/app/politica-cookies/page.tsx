import React from "react";
import Link from "next/link";
import companyData from "@/data/company.json";

export const metadata = {
  title: "Politică de Cookie-uri",
  description:
    "Ce cookie-uri folosește montarepanouri.ro, temeiul legal și cum îți poți gestiona preferințele, conform GDPR și legislației ePrivacy.",
  alternates: { canonical: "/politica-cookies" },
};

export default function CookiePolicyPage() {
  return (
    <div className="pb-20 pt-10 sm:pt-14 bg-slate-950 min-h-screen text-slate-300">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        <div className="border-b border-slate-800 pb-6 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Politică de Cookie-uri
          </h1>
          <p className="text-xs text-slate-400">Ultima actualizare: 15 august 2026</p>
        </div>

        <div className="space-y-8 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Operator</h2>
            <p>
              Această politică explică folosirea cookie-urilor și a tehnologiilor similare pe site-ul
              operat de <strong className="text-white">{companyData.legalName}</strong>, CUI {companyData.cui},
              Nr. Registrul Comerțului {companyData.tradeRegister}, sediu social: {companyData.legalAddress}.
            </p>
            <p>
              Prelucrarea datelor personale asociată este detaliată în{" "}
              <Link href="/politica-confidentialitate" className="text-emerald-400 hover:underline">
                Politica de confidențialitate
              </Link>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Ce sunt cookie-urile</h2>
            <p>
              Cookie-urile sunt fișiere de mici dimensiuni stocate pe dispozitivul dumneavoastră când
              vizitați un site. Tehnologii similare includ stocare locală (localStorage), pixeli și
              identificatori de sesiune. Pot fi „de sesiune” (se șterg la închiderea browserului) sau
              „persistente” (rămân până la expirare sau ștergere).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Temei legal</h2>
            <p>
              Folosirea cookie-urilor este reglementată de Directiva ePrivacy (transpusă în dreptul român)
              și de GDPR, atunci când cookie-urile implică date cu caracter personal.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong className="text-white">Cookie-uri strict necesare</strong> — pot fi folosite fără
                consimțământ, fiind indispensabile pentru funcționarea site-ului (temei: interes legitim /
                necesitate tehnică).
              </li>
              <li>
                <strong className="text-white">Cookie-uri de analiză, marketing sau social media</strong> —
                necesită consimțământ prealabil. Folosim Google Analytics 4 doar după ce apăsați „Accept”
                în banner.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Cookie-uri folosite</h2>
            <h3 className="text-base font-semibold text-white">4.1. Strict necesare</h3>
            <p>
              Pot exista cookie-uri sau identificatori de sesiune puse de infrastructura de găzduire /
              platforma web, pentru securitate și funcționare. Formularele funcționează fără cookie-uri de
              marketing.
            </p>
            <p>
              Memorăm și preferința dumneavoastră de consimțământ în stocarea locală a browserului
              (<code className="text-emerald-400">mp_cookie_consent</code>), ca să nu vă întrebăm la fiecare vizită.
            </p>

            <h3 className="text-base font-semibold text-white pt-2">4.2. Analiză — Google Analytics 4</h3>
            <p>
              Serviciu: Google Analytics 4, ID măsurare <strong className="text-white">G-47SVNCRJC8</strong>,
              furnizat de Google Ireland Limited / Google LLC. Temei: consimțământ (Art. 6(1)(a) GDPR).
            </p>
            <p>Scop: statistici agregate despre vizite (pagini, dispozitiv, sursă de trafic), pentru a îmbunătăți site-ul.</p>
            <p>
              Scriptul <code className="text-emerald-400">googletagmanager.com/gtag/js</code> și cookie-urile
              Google (_ga, _ga_*) se încarcă <strong className="text-white">doar după Accept</strong>. La Refuz,
              Analytics nu pornește.
            </p>
            <p>
              Durată tipică: până la 14 luni (retenție GA4). IP-ul este anonimizat în configurația noastră
              (<code className="text-emerald-400">anonymize_ip</code>). Google poate transfera date în afara SEE,
              cu garanțiile prevăzute în politica Google.
            </p>
            <p>
              Nu folosim cookie-uri de publicitate, remarketing sau pixeli social media (Meta, TikTok, Hotjar).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Bannerul de consimțământ</h2>
            <p>
              La prima vizită apare un banner cu <strong className="text-white">Accept</strong> sau{" "}
              <strong className="text-white">Refuz</strong>. Puteți schimba alegerea oricând din footer, link-ul
              „Setări cookie”. Retragerea consimțământului este la fel de simplă ca acordarea lui.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">6. Servicii terțe la acțiunea dumneavoastră</h2>
            <p>
              Dacă apăsați butonul WhatsApp sau un link ANPC / SOL, părăsiți site-ul nostru. Acei operatori
              își aplică propriile politici de cookie-uri și de confidențialitate. Nu controlăm cookie-urile
              plasate pe domeniile lor.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">7. Cum puteți controla cookie-urile</h2>
            <p>
              Puteți șterge sau bloca cookie-urile din setările browserului (Chrome, Firefox, Edge, Safari).
              Blocarea cookie-urilor strict necesare poate afecta funcționarea unor site-uri.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Chrome: Setări → Confidențialitate și securitate → Cookie-uri
              </li>
              <li>
                Firefox: Setări → Confidențialitate și securitate
              </li>
              <li>
                Edge: Setări → Cookie-uri și permisiuni pentru site
              </li>
              <li>
                Safari: Preferințe → Confidențialitate
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">8. Drepturile dumneavoastră</h2>
            <p>
              Dacă cookie-urile implică date personale, se aplică drepturile GDPR (acces, ștergere, opoziție
              etc.), descrise în{" "}
              <Link href="/politica-confidentialitate" className="text-emerald-400 hover:underline">
                Politica de confidențialitate
              </Link>
              . Contact:{" "}
              <a href={`mailto:${companyData.email}`} className="text-emerald-400 hover:underline">
                {companyData.email}
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">9. Modificări</h2>
            <p>
              Actualizăm această pagină dacă se schimbă tehnologiile folosite. Data de la început indică
              versiunea în vigoare.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
