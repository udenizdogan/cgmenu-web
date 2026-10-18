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
