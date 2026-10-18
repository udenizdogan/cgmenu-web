import type { Currency, Localized } from "./types";

export function pick(
  text: Localized | undefined,
  locale: string,
  fallbackLocale: string,
): string {
  if (!text) return "";
  return text[locale] ?? text[fallbackLocale] ?? Object.values(text)[0] ?? "";
}

/** Converts a base-currency amount in minor units and formats it for display. */
export function formatPrice(minor: number, currency: Currency, locale: string) {
  const value = Math.round(minor * currency.rate) / 100;
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency.code,
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value);
}

const RTL_LOCALES = new Set(["ar", "fa", "he", "ur"]);

export const directionOf = (locale: string) =>
  RTL_LOCALES.has(locale.split("-")[0]) ? "rtl" : "ltr";
