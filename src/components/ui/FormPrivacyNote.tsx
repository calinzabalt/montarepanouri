import Link from "next/link";

export default function FormPrivacyNote({ className = "" }: { className?: string }) {
  return (
    <p className={`text-[11px] text-slate-400 leading-relaxed ${className}`}>
      Prin trimitere, datele sunt prelucrate pentru a vă contacta în legătură cu cererea,
      conform{" "}
      <Link href="/politica-confidentialitate" className="text-emerald-400 hover:underline">
        Politicii de confidențialitate
      </Link>
      .
    </p>
  );
}
