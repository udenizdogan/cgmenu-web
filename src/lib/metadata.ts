import type { Metadata } from "next";
import {
  defaultLocale,
  locales,
  pageHref,
  type Locale,
  type Page,
  type RouteKey,
} from "@/i18n/config";

/** Social preview image, drawn by app/api/og with the page title. */
export const ogImageUrl = (title: string, lang: Locale) =>
  `/api/og?${new URLSearchParams({ title, lang })}`;

type Options = {
  /** Articles get og:type "article" and their dates */
  article?: { publishedTime: string; modifiedTime: string };
};

/** Per-page metadata with canonical, hreflang alternates and a social card. */
export function pageMetadata(
  lang: Locale,
  page: Page | RouteKey,
  title: string,
  description: string,
  options: Options = {},
): Metadata {
  const target: Page = typeof page === "string" ? { type: "route", key: page } : page;
  const canonical = pageHref(lang, target);
  // Content titles already end with the brand; the card shows the logo instead
  const cardTitle = title.replace(/ \| CG Menu$/, "");
  const image = { url: ogImageUrl(cardTitle, lang), width: 1200, height: 630, alt: cardTitle };
  return {
    title: cardTitle === title ? title : { absolute: title },
    description,
    alternates: {
      canonical,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, pageHref(l, target)])),
        "x-default": pageHref(defaultLocale, target),
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "CG Menu",
      locale: lang === "tr" ? "tr_TR" : "en_US",
      alternateLocale: lang === "tr" ? ["en_US"] : ["tr_TR"],
      images: [image],
      ...(options.article
        ? { type: "article", ...options.article, authors: ["CG Menu"] }
        : { type: "website" }),
    },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  };
}
