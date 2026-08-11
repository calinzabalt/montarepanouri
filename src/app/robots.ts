import type { MetadataRoute } from "next";
import companyData from "@/data/company.json";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${companyData.website}/sitemap.xml`,
    host: companyData.website,
  };
}
