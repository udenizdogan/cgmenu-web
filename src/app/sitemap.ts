import type { MetadataRoute } from "next";
import { href, locales, routeKeys } from "@/i18n/config";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return routeKeys.flatMap((key) =>
    locales.map((lang) => ({
      url: `${SITE_URL}${href(lang, key)}`,
      changeFrequency: "monthly" as const,
      priority: key === "home" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${SITE_URL}${href(l, key)}`]),
        ),
      },
    })),
  );
}
