import type { MetadataRoute } from "next";
import { guides, solutions } from "@/content";
import { locales, pageHref, routeKeys, type Page, type RouteKey } from "@/i18n/config";
import { SITE_URL } from "@/lib/site";

const PRIORITY: Partial<Record<RouteKey, number>> = {
  home: 1,
  solutions: 0.9,
  pricing: 0.9,
  features: 0.8,
  guides: 0.8,
  faq: 0.7,
  contact: 0.5,
  privacy: 0.2,
  terms: 0.2,
  kvkk: 0.2,
};

function entries(page: Page, priority: number, lastModified?: string): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((l) => [l, `${SITE_URL}${pageHref(l, page)}`]));
  return locales.map((lang) => ({
    url: `${SITE_URL}${pageHref(lang, page)}`,
    lastModified,
    changeFrequency: page.type === "guide" ? ("yearly" as const) : ("monthly" as const),
    priority,
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...routeKeys.flatMap((key) => entries({ type: "route", key }, PRIORITY[key] ?? 0.5)),
    ...solutions.flatMap((s) => entries({ type: "solution", id: s.id }, 0.9)),
    ...guides.flatMap((g) => entries({ type: "guide", id: g.id }, 0.7, g.updated)),
  ];
}
