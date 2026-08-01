"use client";

import React from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface ImageLightboxProps {
  isOpen: boolean;
  src: string;
  alt: string;
  onClose: () => void;
}

export default function ImageLightbox({ isOpen, src, alt, onClose }: ImageLightboxProps) {
  if (!isOpen || !src) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 bg-slate-900/80 hover:bg-slate-800 text-white rounded-full transition-colors z-50 border border-slate-700"
        aria-label="Închide imaginea"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="relative max-w-5xl w-full max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className="w-full h-auto max-h-[85vh] object-contain bg-slate-950"
        />
        <div className="absolute bottom-0 inset-x-0 bg-slate-950/80 backdrop-blur-sm p-4 text-center text-sm font-medium text-slate-200">
          {alt}
        </div>
      </div>
    </div>
  );
}
