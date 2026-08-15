import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, User, Calendar, Tag, ArrowLeft, ShieldCheck, Sun } from "lucide-react";
import blogData from "@/data/blog.json";
import companyData from "@/data/company.json";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogData.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const article = blogData.find((b) => b.slug === resolvedParams.slug);
  if (!article) return { title: "Articol Negăsit" };

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `/blog/${article.slug}`,
      type: "article",
      images: [article.image],
    },
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const resolvedParams = await params;
  const article = blogData.find((b) => b.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    image: [`https://montarepanouri.ro${article.image}`],
    datePublished: article.dateIso,
    dateModified: article.dateIso,
    author: {
      "@type": "Person",
      name: article.author,
      jobTitle: article.authorRole,
    },
    publisher: {
      "@type": "Organization",
      name: "MontarePanouri.ro",
      url: "https://montarepanouri.ro",
    },
    mainEntityOfPage: `https://montarepanouri.ro/blog/${article.slug}`,
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Înapoi la Toate Articolele</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Article Content Column */}
          <article className="lg:col-span-8 space-y-8">
            
            {/* Metadata Header */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold rounded-lg flex items-center gap-1">
                  <Tag className="w-3 h-3" /> {article.categoryLabel}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" /> {article.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-500" /> {article.readTime}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                {article.title}
              </h1>

              <div className="flex items-center gap-3 pt-2 text-sm text-slate-300">
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400 font-bold">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-white">{article.author}</div>
                  <div className="text-xs text-slate-400">{article.authorRole}</div>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
              <Image
                src={article.image}
                alt={article.title}
                width={1400}
                height={900}
                priority
                className="w-full h-full object-cover"
              />
            </div>

            {/* Excerpt Lead */}
            <div className="p-6 bg-slate-900 border-l-4 border-emerald-500 rounded-r-2xl text-slate-200 text-base italic leading-relaxed">
              {article.excerpt}
            </div>

            {/* Article Body Paragraphs */}
            <div className="space-y-6 text-slate-300 text-base leading-relaxed">
              {article.content.map((paragraph, idx) => {
                if (paragraph.startsWith("### ")) {
                  return (
                    <h3 key={idx} className="text-2xl font-bold text-white pt-4">
                      {paragraph.replace("### ", "")}
                    </h3>
                  );
                }
                if (paragraph.startsWith("- ")) {
                  return (
                    <li key={idx} className="ml-4 list-disc text-slate-300 text-sm">
                      {paragraph.replace("- ", "")}
                    </li>
                  );
                }
                return <p key={idx}>{paragraph}</p>;
              })}
            </div>

          </article>

          {/* Sticky Sidebar Column: Quick Quote Request Form */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="lg:sticky lg:top-32 bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-2xl space-y-6">
              
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-bold uppercase rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5" /> Deviz Gratuit
                </span>
                <h3 className="text-xl font-extrabold text-white">
                  Cere o Ofertă Rapidă
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Vrei să știi cât te costă sistemul fotovoltaic potrivit pentru acoperișul tău?
                </p>
              </div>

              <form className="space-y-3">
                <div>
                  <label htmlFor="blog-name" className="sr-only">Nume</label>
                  <input
                    id="blog-name"
                    type="text"
                    required
                    placeholder="Numele tău *"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-400 text-xs focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label htmlFor="blog-phone" className="sr-only">Telefon</label>
                  <input
                    id="blog-phone"
                    type="tel"
                    required
                    placeholder="Număr de telefon *"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-400 text-xs focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label htmlFor="blog-county" className="sr-only">Județ</label>
                  <select
                    id="blog-county"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs focus:outline-none focus:border-emerald-500"
                  >
                    {companyData.countiesPrimary.map((c) => (
                      <option key={c} value={c} className="bg-slate-900">
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-xs rounded-xl shadow-lg flex items-center justify-center gap-1.5 transition-all"
                >
                  <Sun className="w-4 h-4 text-amber-300" />
                  <span>TRIMITE PENTRU ESTIMARE</span>
                </button>
                <p className="text-[11px] text-slate-400 leading-relaxed text-center">
                  Prin trimitere, datele sunt prelucrate pentru a vă contacta în legătură cu cererea, conform{" "}
                  <Link href="/politica-confidentialitate" className="text-emerald-400 hover:underline">
                    Politicii de confidențialitate
                  </Link>
                  .
                </p>
              </form>

              <div className="pt-4 border-t border-slate-800 text-center text-[11px] text-slate-400">
                Te contactăm în maxim 30 min. Telefon: <strong className="text-white">{companyData.phone}</strong>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
