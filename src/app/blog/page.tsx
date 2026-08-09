import type { Metadata } from "next";
import BlogSection from "@/components/sections/BlogSection";
import QuoteFormSection from "@/components/sections/QuoteFormSection";

export const metadata: Metadata = {
  title: "Blog Panouri Solare & Stocare",
  description:
    "Articole și ghiduri practice despre montaj panouri solare, baterii / bancuri de stocare și întreținerea sistemului.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog Panouri Solare & Stocare",
    description:
      "Sfaturi practice despre montaj panouri, baterii / bancuri de stocare și întreținere.",
    url: "/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <div className="py-16 border-b border-slate-800 text-center bg-slate-900/60">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="px-3.5 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider rounded-full inline-block">
            Blog &amp; Educație Energetică
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Articole &amp; Ghiduri Practice
          </h1>
          <p className="text-slate-400 text-base max-w-2xl mx-auto">
            Sfaturi despre montaj panouri solare, baterii / bancuri de stocare și întreținerea sistemului.
          </p>
        </div>
      </div>

      <BlogSection showHeader={false} />
      <QuoteFormSection />
    </div>
  );
}
