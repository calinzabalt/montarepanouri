import type { Metadata } from "next";
import "./globals.css";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import companyData from "@/data/company.json";

export const metadata: Metadata = {
  metadataBase: new URL("https://montarepanouri.ro"),
  title: {
    default: "MontarePanouri.ro | Montaj Panouri Fotovoltaice & Baterii Autorizat ANRE",
    template: "%s | MontarePanouri.ro",
  },
  description:
    "Instalator autorizat ANRE pentru panouri fotovoltaice rezidențiale, industriale și bancuri de baterii de stocare LiFePO4. Montaj la cheie în zona Arad, Timișoara și Vestul României.",
  keywords: [
    "montaj panouri fotovoltaice",
    "fotovoltaice romania",
    "baterii stocare fotovoltaice",
    "baterii lifepo4",
    "dosar prosumator anre",
    "panouri solare bucuresti",
    "sisteme hibrid fotovoltaice",
    "pret panouri fotovoltaice",
  ],
  authors: [{ name: companyData.name }],
  openGraph: {
    title: "MontarePanouri.ro | Sisteme Fotovoltaice & Stocare Baterii",
    description:
      "Transformă-ți acoperișul într-o sursă proprie de energie. Echipă autorizată ANRE, 25 ani garanție și dosar prosumator gratuit.",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="antialiased selection:bg-emerald-500 selection:text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
