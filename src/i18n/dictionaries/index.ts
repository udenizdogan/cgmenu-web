import { defaultLocale, hasLocale, type Locale } from "../config";
import { en } from "./en";
import { tr, type Dictionary } from "./tr";

const dictionaries: Record<Locale, Dictionary> = { tr, en };

export type { Dictionary };

export function resolveLocale(value: string): Locale {
  return hasLocale(value) ? value : defaultLocale;
}

export function getDictionary(lang: Locale): Dictionary {
  return dictionaries[lang];
}
