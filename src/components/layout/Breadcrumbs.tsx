"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

type BreadcrumbItem = {
  href: string;
  label: string;
};

type BlogEntry = {
  slug: string;
  title: string;
};

type ServiceEntry = {
  slug: string;
  title: string;
};

interface BreadcrumbsProps {
  blogEntries: BlogEntry[];
  serviceEntries: ServiceEntry[];
}

const STATIC_LABELS: Record<string, string> = {
  blog: "Blog",
  servicii: "Servicii",
  galerie: "Galerie",
  contact: "Contact",
  "cere-oferta": "Cere oferta",
  "politica-confidentialitate": "Politica de confidentialitate",
  "politica-cookies": "Politica cookies",
  "termeni-conditii": "Termeni si conditii",
};

function toTitleCase(value: string) {
  return value
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function normalizeSegment(segment: string) {
  return toTitleCase(decodeURIComponent(segment).replace(/-/g, " "));
}

function getDynamicLabel(
  segments: string[],
  index: number,
  blogEntries: BlogEntry[],
  serviceEntries: ServiceEntry[]
) {
  const segment = segments[index];

  if (index > 0 && segments[index - 1] === "blog") {
    const article = blogEntries.find((entry) => entry.slug === segment);
    return article?.title ?? normalizeSegment(segment);
  }

  if (index > 0 && segments[index - 1] === "servicii") {
    const service = serviceEntries.find((entry) => entry.slug === segment);
    return service?.title ?? normalizeSegment(segment);
  }

  return STATIC_LABELS[segment] ?? normalizeSegment(segment);
}

export default function Breadcrumbs({ blogEntries, serviceEntries }: BreadcrumbsProps) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return null;
  }

  const items: BreadcrumbItem[] = [
    { href: "/", label: "Acasa" },
    ...segments.map((segment, index) => ({
      href: `/${segments.slice(0, index + 1).join("/")}`,
      label: getDynamicLabel(segments, index, blogEntries, serviceEntries),
    })),
  ];

  return (
    <nav
      aria-label="Breadcrumb"
      className="relative z-30 mt-[106px] sm:mt-[112px] bg-[#080F1A]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 overflow-x-auto">
        <ol className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.06] bg-white/[0.03] px-3.5 py-1.5 text-[11px] sm:text-xs whitespace-nowrap">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={item.href} className="flex items-center gap-1.5 min-w-0">
                {index === 0 ? (
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-emerald-400 transition-colors"
                    aria-label={item.label}
                  >
                    <Home className="w-3.5 h-3.5" aria-hidden="true" />
                    <span className="hidden sm:inline">{item.label}</span>
                  </Link>
                ) : isLast ? (
                  <span className="font-semibold text-emerald-400 truncate max-w-[42vw] sm:max-w-md">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors truncate max-w-[28vw] sm:max-w-xs"
                  >
                    {item.label}
                  </Link>
                )}

                {!isLast ? (
                  <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" aria-hidden="true" />
                ) : null}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
