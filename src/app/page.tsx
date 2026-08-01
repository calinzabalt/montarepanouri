import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import GallerySection from "@/components/sections/GallerySection";
import FaqSection from "@/components/sections/FaqSection";
import QuoteFormSection from "@/components/sections/QuoteFormSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CoverageMapSection from "@/components/sections/CoverageMapSection";
import BlogSection from "@/components/sections/BlogSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Puncte Forte / De ce noi */}
      <WhyUsSection />

      {/* 3. Gama de Servicii */}
      <ServicesSection />

      {/* 4. Cum Funcționează (Pas cu Pas) */}
      <ProcessSection />

      {/* 5. Galerie Rapidă / Proiecte Recente (limit 6) */}
      <GallerySection limit={6} />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Coverage Map */}
      <CoverageMapSection />

      {/* Latest Blog Articles Preview */}
      <BlogSection limit={3} />

      {/* 6. Secțiune FAQ */}
      <FaqSection />

      {/* 7. Formular Comercial (Secțiune Finală) */}
      <QuoteFormSection />
    </>
  );
}
