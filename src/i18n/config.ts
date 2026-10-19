import { guideIds, guideSlugs, solutionIds, solutionSlugs, type GuideId, type SolutionId } from "@/content/slugs";

export const locales = ["tr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "tr";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

/**
 * Internal route segment (folder name under `app/[lang]`) → public slug per
 * locale. The default locale is served without a prefix (`/ozellikler`),
 * other locales with one (`/en/features`).
 */
export const routes = {
  home: { tr: "", en: "" },
  features: { tr: "ozellikler", en: "features" },
  pricing: { tr: "fiyatlar", en: "pricing" },
  faq: { tr: "sss", en: "faq" },
  contact: { tr: "iletisim", en: "contact" },
  privacy: { tr: "gizlilik", en: "privacy" },
  terms: { tr: "kullanim-sartlari", en: "terms" },
  kvkk: { tr: "kvkk", en: "kvkk" },
  solutions: { tr: "cozumler", en: "solutions" },
  guides: { tr: "rehber", en: "guides" },
} as const;

export type RouteKey = keyof typeof routes;
export const routeKeys = Object.keys(routes) as RouteKey[];

/** Public path of a marketing page in the given locale. */
export function href(lang: Locale, key: RouteKey): string {
  const slug = routes[key][lang];
  const prefix = lang === defaultLocale ? "" : `/${lang}`;
  return `${prefix}/${slug}`.replace(/\/$/, "") || "/";
}

/**
 * Reverse lookup: path → route key, or null if it is not a known page.
 * Accepts both the public form (`/ozellikler`) and the internal one the proxy
 * rewrites to (`/tr/features`), since prerendering sees the latter.
 */
export function routeKeyFromPath(pathname: string): RouteKey | null {
  const segments = pathname.split("/").filter(Boolean);
  const lang: Locale =
    segments[0] && hasLocale(segments[0])
      ? (segments.shift() as Locale)
      : defaultLocale;
  if (segments.length > 1) return null;
  const slug = segments[0] ?? "";
  if (slug === "") return "home";
  return (
    routeKeys.find((key) => routes[key][lang] === slug || key === slug) ?? null
  );
}

/** Any marketing page: a fixed route, a solution page or a guide. */
export type Page =
  | { type: "route"; key: RouteKey }
  | { type: "solution"; id: SolutionId }
  | { type: "guide"; id: GuideId };

/** Public path of any marketing page in the given locale. */
export function pageHref(lang: Locale, page: Page): string {
  if (page.type === "route") return href(lang, page.key);
  const [parent, slug] =
    page.type === "solution"
      ? (["solutions", solutionSlugs[page.id][lang]] as const)
      : (["guides", guideSlugs[page.id][lang]] as const);
  return `${href(lang, parent)}/${slug}`;
}

/** Reverse of `pageHref`, for both public and internal (`/tr/guides/...`) paths. */
export function pageFromPath(pathname: string): Page | null {
  const segments = pathname.split("/").filter(Boolean);
  const lang: Locale =
    segments[0] && hasLocale(segments[0]) ? (segments.shift() as Locale) : defaultLocale;
  if (segments.length <= 1) {
    const key = routeKeyFromPath(lang === defaultLocale ? `/${segments.join("/")}` : `/${lang}/${segments.join("/")}`);
    return key ? { type: "route", key } : null;
  }
  if (segments.length !== 2) return null;
  const [parent, slug] = segments;
  const is = (key: RouteKey) => parent === routes[key][lang] || parent === key;
  if (is("solutions")) {
    const id = solutionIds.find((i) => solutionSlugs[i][lang] === slug);
    return id ? { type: "solution", id } : null;
  }
  if (is("guides")) {
    const id = guideIds.find((i) => guideSlugs[i][lang] === slug);
    return id ? { type: "guide", id } : null;
  }
  return null;
}
