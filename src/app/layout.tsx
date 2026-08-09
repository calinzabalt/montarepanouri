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
  metadataBase: new URL(companyData.website),
  title: {
    default: "Montaj Panouri Solare & Baterii la Cheie | MontarePanouri.ro",
    template: "%s | MontarePanouri.ro",
  },
  description: companyData.description,
  keywords: [
    "montaj panouri solare",
    "montaj panouri fotovoltaice",
    "baterii stocare",
    "bancuri de stocare",
    "panouri solare Arad",
    "panouri solare Timișoara",
    "montaj panouri Vest România",
    "sisteme hibrid fotovoltaice",
  ],
  authors: [{ name: companyData.name }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Montaj Panouri Solare & Baterii la Cheie | MontarePanouri.ro",
    description: companyData.description,
    url: companyData.website,
    siteName: companyData.name,
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "/images/panouri-pe-acoperis-tila.jpg",
        width: 1200,
        height: 800,
        alt: "Montaj panouri solare pe acoperiș",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Montaj Panouri Solare & Baterii | MontarePanouri.ro",
    description: companyData.description,
    images: ["/images/panouri-pe-acoperis-tila.jpg"],
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

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${companyData.website}/#business`,
    name: companyData.name,
    legalName: companyData.legalName,
    description: companyData.description,
    url: companyData.website,
    telephone: companyData.phone,
    email: companyData.email,
    image: `${companyData.website}/images/panouri-pe-acoperis-tila.jpg`,
    logo: `${companyData.website}/icon.svg`,
    priceRange: "$$",
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Vestul României",
      },
      ...companyData.primaryCities.map((city) => ({
        "@type": "City",
        name: city,
      })),
      {
        "@type": "Country",
        name: "Romania",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Timișoara",
      addressRegion: "Timiș",
      addressCountry: "RO",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    knowsAbout: companyData.servicesOffered,
    sameAs: Object.values(companyData.socials),
  };

  return (
    <html lang="ro">
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
