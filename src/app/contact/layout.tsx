import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Montaj Panouri Solare & Baterii",
  description:
    "Contactează MontarePanouri.ro pentru oferte de montaj panouri solare și baterii / bancuri de stocare în Arad, Timișoara și Vestul României.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Montaj Panouri Solare & Baterii",
    description:
      "Telefonează sau scrie-ne pentru o ofertă de montaj panouri solare și stocare.",
    url: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
