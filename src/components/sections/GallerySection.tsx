"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Maximize2, MapPin, Zap, ArrowRight } from "lucide-react";
import defaultProjects from "@/data/projects.json";
import ImageLightbox from "@/components/ui/ImageLightbox";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  location: string;
  capacity: string;
  image: string;
  description: string;
}

interface GallerySectionProps {
  projects?: ProjectItem[];
  title?: string;
  subtitle?: string;
  showHeader?: boolean;
  showFilters?: boolean;
  limit?: number;
}

export default function GallerySection({
  projects = defaultProjects,
  title = "Lucrări de Montaj Panouri Solare & Stocare",
  subtitle = "Imagini reale de pe teren: panouri pe acoperiș, invertoare și baterii / bancuri de stocare.",
  showHeader = true,
  showFilters = true,
  limit,
}: GallerySectionProps) {
  const [activeTab, setActiveTab] = useState<string>("toate");
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const categories = [
    { id: "toate", label: "Toate" },
    { id: "rezidential", label: "Panouri pe acoperiș" },
    { id: "baterii", label: "Baterii & stocare" },
  ];

  const filteredProjects = activeTab === "toate"
    ? projects
    : projects.filter((p) => p.category === activeTab);

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section className={`${showHeader ? "py-16 sm:py-24 lg:py-32" : "py-10 sm:py-14"} bg-[#080F1A] relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {showHeader ? (
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
            <span className="px-3.5 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider rounded-full inline-block">
              Imagini din Teren
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
              {title}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {subtitle}
            </p>
          </div>
        ) : null}

        {showFilters && (
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === cat.id
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-950/50 scale-105"
                    : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((proj) => (
            <div
              key={proj.id}
              className="glass-card rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  <span className="absolute top-3 left-3 px-3 py-1 bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-lg text-emerald-400 text-[11px] font-bold">
                    {proj.categoryLabel}
                  </span>

                  <button
                    onClick={() => setSelectedImage({ src: proj.image, alt: proj.title })}
                    className="absolute top-3 right-3 p-2 bg-slate-900/80 hover:bg-emerald-600 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100 shadow-md"
                    aria-label="Mărește Imaginea"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <span className="flex items-center gap-1 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-800 font-semibold text-amber-400">
                      <Zap className="w-3.5 h-3.5" /> {proj.capacity}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{proj.location}</span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug">
                    {proj.title}
                  </h3>

                  <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              </div>

              <div className="px-5 py-4 border-t border-slate-800/60 mt-2 flex items-center justify-between text-xs">
                <button
                  onClick={() => setSelectedImage({ src: proj.image, alt: proj.title })}
                  className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1"
                >
                  <span>Vezi imaginea completă</span>
                  <Maximize2 className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {limit && (
          <div className="text-center mt-12">
            <Link
              href="/galerie"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-xl border border-slate-700 transition-all shadow-lg hover:scale-105"
            >
              <span>Vezi Toate Proiectele din Galerie</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </Link>
          </div>
        )}
      </div>

      {selectedImage && (
        <ImageLightbox
          isOpen={!!selectedImage}
          src={selectedImage.src}
          alt={selectedImage.alt}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
}
