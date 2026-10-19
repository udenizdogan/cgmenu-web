import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    // Search engines and AI assistants alike may read the marketing site;
    // only the API routes are kept out (the social card image stays open).
    rules: { userAgent: "*", allow: ["/", "/api/og"], disallow: ["/api/"] },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
