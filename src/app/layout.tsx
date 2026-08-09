import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FloatingWhatsAppButton from "@/components/ui/FloatingWhatsAppButton";
import companyData from "@/data/company.json";
import blogData from "@/data/blog.json";
import servicesData from "@/data/services.json";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://montarepanouri.ro"),
  title: {
    default: "MontarePanouri.ro | Montaj Panouri Solare & Baterii / Bancuri de Stocare",
    template: "%s | MontarePanouri.ro",
  },
  description:
    "Montaj panouri solare și baterii / bancuri de stocare la cheie. Sisteme rezidențiale și comerciale în Arad, Timișoara și Vestul României.",
  keywords: [
    "montaj panouri solare",
    "montaj panouri fotovoltaice",
    "baterii stocare",
    "bancuri de stocare",
    "panouri solare Arad",
    "panouri solare Timișoara",
    "sisteme hibrid fotovoltaice",
    "pret panouri fotovoltaice",
  ],
  authors: [{ name: companyData.name }],
  openGraph: {
    title: "MontarePanouri.ro | Montaj Panouri Solare & Baterii",
    description:
      "Transformă-ți acoperișul într-o sursă proprie de energie. Montaj panouri solare și baterii / bancuri de stocare, cu garanție pe echipamente și manoperă.",
    url: "https://montarepanouri.ro",
    siteName: "MontarePanouri.ro",
    locale: "ro_RO",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const breadcrumbBlogEntries = blogData.map((entry) => ({
    slug: entry.slug,
    title: entry.title,
  }));

  const breadcrumbServiceEntries = servicesData.map((entry) => ({
    slug: entry.slug,
    title: entry.title,
  }));

  // LocalBusiness Structured Schema Markup
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": companyData.name,
    "image": "https://montarepanouri.ro/images/montaj-fotovoltaice-rezidential.jpg",
    "telephone": companyData.phone,
    "email": companyData.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "București",
      "addressCountry": "RO",
    },
    "openingHours": "Mo-Fr 08:00-18:00",
    "url": "https://montarepanouri.ro",
  };

  return (
    <html lang="ro" className="">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.className} antialiased selection:bg-emerald-500 selection:text-white`}>
        <Header />
        <Breadcrumbs
          blogEntries={breadcrumbBlogEntries}
          serviceEntries={breadcrumbServiceEntries}
        />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
