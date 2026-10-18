import type { Metadata } from "next";
import { defaultLocale, href, locales, type Locale, type RouteKey } from "@/i18n/config";

/** Per-page metadata with canonical and hreflang alternates. */
export function pageMetadata(
  lang: Locale,
  key: RouteKey,
  title: string,
  description: string,
): Metadata {
  const canonical = href(lang, key);
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, href(l, key)])),
        "x-default": href(defaultLocale, key),
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "CG Menu",
      locale: lang === "tr" ? "tr_TR" : "en_US",
      type: "website",
    },
  };
}
