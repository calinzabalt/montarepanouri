"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, User, ArrowRight, BookOpen, Tag } from "lucide-react";
import defaultBlog from "@/data/blog.json";

interface BlogArticle {
  slug: string;
  title: string;
  isHighlighted?: boolean;
  category: string;
  categoryLabel: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  excerpt: string;
}

interface BlogSectionProps {
  articles?: BlogArticle[];
  title?: string;
  subtitle?: string;
  showHeader?: boolean;
  limit?: number;
}

export default function BlogSection({
  articles = defaultBlog,
  title = "Articole, Ghiduri Tehnice & Legislație Solară",
  subtitle = "Sfaturi practice despre montaj panouri solare, baterii / bancuri de stocare și întreținerea sistemului.",
  showHeader = true,
  limit,
}: BlogSectionProps) {
  const highlightedArticle = articles.find((a) => a.isHighlighted) || articles[0];
  const otherArticles = articles.filter((a) => a.slug !== highlightedArticle?.slug);
  const displayedOthers = limit ? otherArticles.slice(0, limit) : otherArticles;

  return (
    <section className={`${showHeader ? "py-16 sm:py-24 lg:py-32" : "py-10 sm:py-14"} bg-[#080F1A] relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {showHeader ? (
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 lg:mb-20 space-y-4">
            <span className="px-3.5 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider rounded-full inline-block">
              <BookOpen className="w-3.5 h-3.5 inline mr-1" />
              Blog &amp; Educație Energetică
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              {title}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {subtitle}
            </p>
          </div>
        ) : null}

        {/* Highlighted Article Card */}
        {highlightedArticle && (
          <div className="mb-14 glass-card rounded-3xl overflow-hidden border border-slate-800 grid grid-cols-1 lg:grid-cols-12 group">
            <div className="lg:col-span-6 relative h-56 sm:h-64 lg:h-full min-h-[220px] lg:min-h-[280px]">
              <Image
                src={highlightedArticle.image}
                alt={highlightedArticle.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider rounded-lg shadow-lg">
                Articol Recomandat
              </div>
            </div>

            <div className="lg:col-span-6 p-5 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                  <span className="px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold rounded-md flex items-center gap-1">
                    <Tag className="w-3 h-3" /> {highlightedArticle.categoryLabel}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-500" /> {highlightedArticle.readTime}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white group-hover:text-emerald-400 transition-colors leading-tight">
                  <Link href={`/blog/${highlightedArticle.slug}`}>
                    {highlightedArticle.title}
                  </Link>
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {highlightedArticle.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <User className="w-4 h-4 text-emerald-400" />
                  <span>{highlightedArticle.author}</span>
                </div>

                <Link
                  href={`/blog/${highlightedArticle.slug}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-md transition-all w-full sm:w-auto"
                >
                  <span>Citește Articolul</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Other Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedOthers.map((art) => (
            <div
              key={art.slug}
              className="glass-card rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={art.image}
                    alt={art.title}
                    width={1200}
                    height={700}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 bg-slate-950/80 backdrop-blur-md border border-slate-800 text-emerald-400 text-[11px] font-bold rounded">
                    {art.categoryLabel}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-slate-400">
                    <span>{art.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {art.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-2">
                    <Link href={`/blog/${art.slug}`}>
                      {art.title}
                    </Link>
                  </h3>

                  <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-5 py-4 border-t border-slate-800/60 mt-2 flex items-center justify-between text-xs">
                <span className="text-slate-500">{art.author}</span>
                <Link
                  href={`/blog/${art.slug}`}
                  className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1"
                >
                  <span>Citește</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
