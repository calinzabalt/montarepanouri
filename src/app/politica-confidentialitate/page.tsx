import React from "react";
import Link from "next/link";
import companyData from "@/data/company.json";

export const metadata = {
  title: "Politică de Confidențialitate (GDPR)",
  description:
    "Informații complete privind prelucrarea datelor cu caracter personal de către BRE SOLAR S.R.L. pe montarepanouri.ro, conform GDPR.",
  alternates: { canonical: "/politica-confidentialitate" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pb-20 pt-10 sm:pt-14 bg-slate-950 min-h-screen text-slate-300">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        <div className="border-b border-slate-800 pb-6 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Politică de Confidențialitate (GDPR)
          </h1>
          <p className="text-xs text-slate-400">Ultima actualizare: 15 august 2026</p>
        </div>

        <div className="space-y-8 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Operatorul de date</h2>
            <p>
              Operatorul datelor cu caracter personal este <strong className="text-white">{companyData.legalName}</strong>,
              CUI {companyData.cui}, Nr. Registrul Comerțului {companyData.tradeRegister}, cu sediul social în{" "}
              {companyData.legalAddress} (denumită în continuare „Operatorul” sau „{companyData.name}”).
            </p>
            <p>
              Site-ul {companyData.website} este destinat prezentării serviciilor de montaj panouri solare și
              baterii / bancuri de stocare și preluării cererilor de ofertă / contact.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Date de contact pentru protecția datelor</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                E-mail:{" "}
                <a href={`mailto:${companyData.email}`} className="text-emerald-400 hover:underline">
                  {companyData.email}
                </a>
              </li>
              <li>
                Telefon:{" "}
                <a href={`tel:${companyData.phoneRaw}`} className="text-emerald-400 hover:underline">
                  {companyData.phone}
                </a>
              </li>
              <li>Adresă: {companyData.legalAddress}</li>
            </ul>
            <p>
              Pentru exercitarea drepturilor GDPR, vă rugăm să scrieți la {companyData.email}, cu subiectul
              „Cerere GDPR”. Nu avem desemnat un DPO, nefiind aplicabilă obligația legală de desemnare în
              cazul activității noastre.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Ce date prelucrăm</h2>
            <p>În funcție de interacțiunea dumneavoastră cu site-ul, putem prelucra:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong className="text-white">Date de identificare și contact:</strong> nume, telefon, e-mail
                (dacă este furnizat).
              </li>
              <li>
                <strong className="text-white">Date despre proiect:</strong> județ, localitate, tip proprietate,
                tip acoperiș, opțiune baterii / stocare, consum sau factură lunară estimată, serviciul dorit,
                subiect, mesaj și observații.
              </li>
              <li>
                <strong className="text-white">Date de analiză (doar cu consimțământ):</strong> pagini vizitate,
                sursă de trafic, tip dispozitiv / browser, identificatori de cookie Google Analytics
                (ID măsurare G-47SVNCRJC8) și, după caz, adresă IP anonimizată.
              </li>
              <li>
                <strong className="text-white">Date tehnice de bază:</strong> adresă IP, tip de browser și
                jurnale de server generate automat de infrastructura de găzduire, strict pentru securitate și
                funcționare (dacă sunt reținute de furnizorul de hosting).
              </li>
            </ul>
            <p>
              Nu solicităm CNP, date de sănătate, date biometrice sau alte categorii speciale de date (Art. 9 GDPR).
              Vă rugăm să nu includeți astfel de informații în formulare.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Sursa datelor</h2>
            <p>
              Datele provin de la dumneavoastră, atunci când completați un formular de pe site, ne scrieți pe
              e-mail, ne sunați sau ne contactați pe WhatsApp. Nu cumpărăm baze de date și nu colectăm date
              din surse publice în scop de marketing.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Scopuri și temeiuri legale</h2>
            <p>
              Prelucrăm datele doar pentru scopuri determinate, conform Art. 6 din Regulamentul (UE) 2016/679
              (GDPR):
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-white">Preluarea și răspunsul la cereri de ofertă / contact</strong> —
                temei: Art. 6(1)(b) GDPR (demersuri la cererea persoanei vizate înainte de încheierea unui
                contract) și, după caz, Art. 6(1)(f) (interes legitim de a răspunde solicitărilor).
              </li>
              <li>
                <strong className="text-white">Comunicare privind ofertă, măsurători, montaj și suport</strong> —
                temei: Art. 6(1)(b) GDPR, dacă există o relație precontractuală sau contractuală.
              </li>
              <li>
                <strong className="text-white">Îndeplinirea obligațiilor legale</strong> (contabilitate, fiscalitate,
                apărarea unor drepturi în justiție) — temei: Art. 6(1)(c) GDPR.
              </li>
              <li>
                <strong className="text-white">Analiză de trafic (Google Analytics 4)</strong> — temei: Art. 6(1)(a)
                GDPR (consimțământ). Scriptul și cookie-urile Google se activează doar după ce alegeți „Accept”
                în banner. Puteți refuza sau retrage acordul oricând din footer („Setări cookie”).
              </li>
              <li>
                <strong className="text-white">Securitatea și funcționarea site-ului</strong> — temei: Art. 6(1)(f)
                GDPR (interes legitim de a preveni abuzuri, spam și atacuri).
              </li>
            </ul>
            <p>
              <strong className="text-white">Nu trimitem newslettere sau mesaje comerciale nesolicitate.</strong>{" "}
              Dacă vom introduce astfel de comunicări, o vom face doar pe baza consimțământului (Art. 6(1)(a)
              GDPR), care va putea fi retras oricând.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">6. Destinatari și împuterniciți</h2>
            <p>Datele pot fi accesate sau transmise, strict cât este necesar, către:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>persoane din echipa Operatorului, cu atribuții de preluare oferte și comunicare cu clienții;</li>
              <li>
                furnizorul de e-mail transacțional (Brevo / Sendinblue SAS, Franța), folosit pentru livrarea
                mesajelor din formulare către {companyData.email};
              </li>
              <li>furnizorul de găzduire și mentenanță tehnică a site-ului;</li>
              <li>
                Google Ireland Limited / Google LLC, pentru Google Analytics 4, doar dacă ați acceptat
                cookie-urile de analiză;
              </li>
              <li>
                autorități publice, instanțe sau organe de control, atunci când există o obligație legală.
              </li>
            </ul>
            <p>
              Nu vindem date personale și nu le cedăm către terți în scop de marketing. Împuterniciții sunt
              obligați contractual să prelucreze datele doar conform instrucțiunilor noastre și GDPR.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">7. Transferuri în afara SEE</h2>
            <p>
              În mod obișnuit, datele sunt prelucrate în Uniunea Europeană. Dacă un furnizor tehnic transferă
              date în afara Spațiului Economic European, acest lucru se va face doar cu garanții adecvate
              (decizie de adecvare a Comisiei Europene, clauze contractuale standard sau altă măsură prevăzută
              de Art. 46 GDPR).
            </p>
            <p>
              Google poate transfera date în Statele Unite sau alte țări din afara SEE. Transferul se bazează
              pe garanțiile Google (inclusiv clauze contractuale standard), în limita politicii Google. Analytics
              se încarcă doar după consimțământ.
            </p>
            <p>
              Dacă ne contactați prin WhatsApp, datele sunt prelucrate de Meta Platforms Ireland Limited,
              conform politicii proprii WhatsApp. Recomandăm să nu transmiteți pe chat mai multe date decât
              este necesar.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">8. Durata de stocare</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong className="text-white">Cereri de ofertă și mesaje de contact</strong> fără contract
                ulterior: maximum 12 luni de la ultima interacțiune, apoi ștergere sau anonimizare.
              </li>
              <li>
                <strong className="text-white">Date din contracte, facturi și evidențe contabile:</strong> pe
                duratele prevăzute de legislația fiscală și contabilă (de regulă 10 ani).
              </li>
              <li>
                <strong className="text-white">Date Google Analytics:</strong> conform retenției setate în
                contul GA4 (implicit până la 14 luni), doar dacă ați consimțit.
              </li>
              <li>
                <strong className="text-white">Jurnale tehnice / IP:</strong> maximum 30 de zile, cu excepția
                investigării unui incident de securitate.
              </li>
            </ul>
            <p>
              La expirarea termenelor, datele sunt șterse sau anonimizate, cu excepția cazului în care legea
              impune păstrarea lor.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">9. Obligația de a furniza date</h2>
            <p>
              Completarea formularelor este voluntară. Câmpurile marcate ca obligatorii (de regulă nume și
              telefon) sunt necesare pentru a vă putea contacta. Dacă nu le furnizați, nu putem prelua cererea.
              Restul câmpurilor sunt opționale și ajută la o estimare mai precisă.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">10. Decizii automatizate și profilare</h2>
            <p>
              Nu folosim decizii bazate exclusiv pe prelucrare automată care să producă efecte juridice
              (Art. 22 GDPR). Google Analytics poate grupa statistici de utilizare (pagini, dispozitiv);
              aceasta nu produce efecte juridice asupra dumneavoastră și este dezactivată dacă refuzați cookie-urile.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">11. Drepturile dumneavoastră</h2>
            <p>Conform Art. 15–22 GDPR, aveți următoarele drepturi:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong className="text-white">Acces</strong> — să obțineți confirmarea dacă vă prelucrăm datele
                și o copie a acestora;
              </li>
              <li>
                <strong className="text-white">Rectificare</strong> — corectarea datelor inexacte sau incomplete;
              </li>
              <li>
                <strong className="text-white">Ștergere</strong> („dreptul de a fi uitat”) — în condițiile Art. 17
                GDPR;
              </li>
              <li>
                <strong className="text-white">Restricționare</strong> a prelucrării — Art. 18 GDPR;
              </li>
              <li>
                <strong className="text-white">Portabilitate</strong> — primirea datelor într-un format structurat,
                utilizat frecvent, acolo unde prelucrarea se bazează pe contract sau consimțământ și este
                automatizată;
              </li>
              <li>
                <strong className="text-white">Opoziție</strong> — la prelucrări bazate pe interes legitim
                (Art. 21 GDPR);
              </li>
              <li>
                <strong className="text-white">Retragerea consimțământului</strong> — oricând, dacă prelucrarea s-a
                bazat pe consimțământ; retragerea nu afectează legalitatea prelucrării anterioare;
              </li>
              <li>
                <strong className="text-white">De a nu fi supus unei decizii automate</strong> — Art. 22 GDPR.
              </li>
            </ul>
            <p>
              Pentru a exercita aceste drepturi, trimiteți o cerere la {companyData.email}. Putem solicita
              informații rezonabile pentru a vă verifica identitatea. Răspundem în maximum 30 de zile, cu
              posibilitatea de prelungire cu încă 60 de zile în cazuri complexe, conform Art. 12 GDPR.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">12. Plângere la autoritatea de supraveghere</h2>
            <p>
              Aveți dreptul să depuneți o plângere la Autoritatea Națională de Supraveghere a Prelucrării
              Datelor cu Caracter Personal (ANSPDCP):
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Adresă: B-dul Gheorghe Magheru nr. 28-30, Sector 1, București, România</li>
              <li>
                Site:{" "}
                <a
                  href="https://www.dataprotection.ro"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  www.dataprotection.ro
                </a>
              </li>
            </ul>
            <p>Vă încurajăm să ne contactați mai întâi, pentru a încerca o soluționare amiabilă.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">13. Securitatea datelor</h2>
            <p>
              Aplicăm măsuri tehnice și organizatorice rezonabile: acces limitat la date, comunicare prin
              canale protejate, transmiteri SMTP autentificate și stocare doar cât este necesar. Nicio
              transmisiune pe internet nu este 100% sigură; vă rugăm să nu trimiteți prin formulare
              informații sensibile (parole, date bancare complete, CNP).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">14. Minori</h2>
            <p>
              Site-ul nu se adresează persoanelor sub 16 ani. Nu prelucrăm în mod intenționat date ale
              minorilor. Dacă un părinte sau tutore consideră că un minor ne-a transmis date, ne poate
              scrie la {companyData.email} pentru ștergere.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">15. Cookie-uri</h2>
            <p>
              Detaliile despre modulele cookie și tehnologiile similare sunt în{" "}
              <Link href="/politica-cookies" className="text-emerald-400 hover:underline">
                Politica de cookie-uri
              </Link>
              . Folosim Google Analytics 4 (G-47SVNCRJC8) doar după consimțământul din bannerul de cookie-uri.
              Nu folosim cookie-uri de publicitate sau remarketing.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">16. Modificări</h2>
            <p>
              Putem actualiza această politică pentru a reflecta modificări legale sau operaționale. Data
              de la începutul paginii indică versiunea în vigoare. Continuarea utilizării site-ului după
              publicarea unei versiuni noi înseamnă luarea la cunoștință a conținutului actualizat.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">17. Documente conexe</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <Link href="/termeni-conditii" className="text-emerald-400 hover:underline">
                  Termeni și Condiții
                </Link>
              </li>
              <li>
                <Link href="/politica-cookies" className="text-emerald-400 hover:underline">
                  Politică de Cookie-uri
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
