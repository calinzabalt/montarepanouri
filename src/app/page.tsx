import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import GallerySection from "@/components/sections/GallerySection";
import FaqSection from "@/components/sections/FaqSection";
import QuoteFormSection from "@/components/sections/QuoteFormSection";
import CoverageMapSection from "@/components/sections/CoverageMapSection";
import BlogSection from "@/components/sections/BlogSection";

export const metadata: Metadata = {
  title: {
    absolute: "Montaj Panouri Solare & Baterii la Cheie | MontarePanouri.ro",
  },
  description:
    "Montaj panouri solare și baterii / bancuri de stocare la cheie. Focus pe Arad, Timișoara și Vestul României; proiecte mai mari cu stocare și la nivel național.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Montaj Panouri Solare & Baterii la Cheie | MontarePanouri.ro",
    description:
      "Montaj panouri solare și baterii / bancuri de stocare la cheie în Arad, Timișoara și Vestul României.",
    url: "/",
  },
  twitter: {
    title: "Montaj Panouri Solare & Baterii la Cheie | MontarePanouri.ro",
    description:
      "Montaj panouri solare și baterii / bancuri de stocare la cheie. Focus pe Arad, Timișoara și Vestul României; proiecte mai mari cu stocare și la nivel național.",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyUsSection />
      <ServicesSection />
      <ProcessSection />
      <GallerySection limit={6} />
      <CoverageMapSection />
      <BlogSection limit={3} />
      <FaqSection />
      <QuoteFormSection />
    </>
  );
}
