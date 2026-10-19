"use client";

import { usePathname } from "next/navigation";
import { locales, pageFromPath, pageHref, type Locale, type Page } from "@/i18n/config";

export function LangSwitch({
  lang,
  label,
  onDark = false,
}: {
  lang: Locale;
  label: string;
  onDark?: boolean;
}) {
  const page: Page = pageFromPath(usePathname()) ?? { type: "route", key: "home" };

  return (
    <nav
      aria-label={label}
      className={`flex items-center gap-0.5 rounded-full p-1 text-xs font-bold ring-1 transition-colors duration-500 ${
        onDark ? "bg-white/10 ring-white/15" : "bg-ink-50 ring-ink-100"
      }`}
    >
      {locales.map((locale) => {
        const active = locale === lang;
        return (
          // Plain anchors: switching locale changes the root layout
          <a
            key={locale}
            href={pageHref(locale, page)}
            hrefLang={locale}
            lang={locale}
            aria-current={active ? "true" : undefined}
            className={`rounded-full px-2.5 py-1 transition-colors duration-300 ${
              onDark
                ? active
                  ? "bg-white text-ink-900"
                  : "text-white/70 hover:text-white"
                : active
                  ? "bg-white text-ink-900 shadow-sm"
                  : "text-ink-500 hover:text-ink-900"
            }`}
          >
            {locale.toUpperCase()}
          </a>
        );
      })}
    </nav>
  );
}
