"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore, type CSSProperties } from "react";
import { href, pageFromPath, type Locale, type RouteKey } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { LOGIN_URL, SIGNUP_URL } from "@/lib/site";
import { LangSwitch } from "./lang-switch";
import { Logo } from "./logo";
import { ArrowIcon } from "./ui";

const navKeys = ["solutions", "features", "pricing", "guides", "faq"] as const satisfies
  readonly RouteKey[];

function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

/**
 * Every page opens with a dark band, so the header starts transparent with
 * light text and turns into a light glass bar once the page is scrolled.
 */
export function Header({ lang, nav }: { lang: Locale; nav: Dictionary["nav"] }) {
  const scrolled = useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > 8,
    () => false,
  );
  const [open, setOpen] = useState(false);
  const page = pageFromPath(usePathname());
  // Content pages light up their section
  const current: RouteKey | undefined =
    page?.type === "route" ? page.key : page?.type === "solution" ? "solutions" : page ? "guides" : undefined;
  const onDark = !scrolled && !open;

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const ctaClass =
    "shine rounded-full bg-gradient-to-r from-brand-500 to-grape-500 text-white shadow-[0_12px_28px_-16px_rgba(72,70,247,0.95)]";

  return (
    <header
      className={`sticky top-0 z-50 h-[var(--header-h)] border-b transition-[background-color,border-color,box-shadow] duration-500 ${
        onDark
          ? "on-dark border-white/10 bg-transparent"
          : "border-ink-100 bg-canvas/85 shadow-[0_1px_3px_#14122e0d] backdrop-blur-xl"
      }`}
    >
      <div className="container-page flex h-full items-center gap-4">
        <Logo lang={lang} onDark={onDark} />
        <div className="ml-auto flex shrink-0 items-center gap-3">
          <nav className="hidden items-center gap-1 lg:flex">
            {navKeys.map((key) => {
              const active = key === current;
              return (
                <Link
                  key={key}
                  href={href(lang, key)}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-full px-4 py-2 text-[15px] font-semibold transition-colors duration-300 ${
                    onDark
                      ? active
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                      : active
                        ? "text-ink-900"
                        : "text-ink-500 hover:text-ink-900"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-brand-500 to-grape-500 transition-opacity duration-300 ${
                      active ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  {nav[key]}
                </Link>
              );
            })}
          </nav>
          <LangSwitch lang={lang} label={nav.language} onDark={onDark} />
          <a
            href={LOGIN_URL}
            className={`hidden rounded-full px-3 py-2 text-[15px] font-semibold transition-colors duration-300 lg:block ${
              onDark ? "text-white/70 hover:text-white" : "text-ink-500 hover:text-ink-900"
            }`}
          >
            {nav.login}
          </a>
          <a
            href={SIGNUP_URL}
            className={`${ctaClass} hidden px-5 py-2.5 text-sm font-bold transition-transform duration-300 hover:-translate-y-0.5 sm:block`}
          >
            {nav.cta}
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={nav.menu}
            onClick={() => setOpen((value) => !value)}
            className={`grid size-10 place-items-center rounded-xl transition-colors lg:hidden ${
              onDark ? "text-white hover:bg-white/10" : "text-ink-900 hover:bg-ink-50"
            }`}
          >
            <span aria-hidden className="relative block h-4 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 rounded-full bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Absolute, not fixed: the header's backdrop-filter would contain it */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full h-[calc(100dvh-var(--header-h))] overflow-y-auto border-t border-ink-100 bg-canvas lg:hidden"
      >
        <nav className="container-page flex flex-col gap-1.5 py-6">
          {navKeys.map((key, index) => (
            <Link
              key={key}
              href={href(lang, key)}
              onClick={() => setOpen(false)}
              aria-current={key === current ? "page" : undefined}
              style={{ "--delay": `${index * 55}ms` } as CSSProperties}
              className={`rise flex items-center justify-between rounded-2xl px-4 py-3.5 font-display text-xl transition-colors hover:bg-ink-50 ${
                key === current ? "text-brand-500" : "text-ink-900"
              }`}
            >
              {nav[key]}
              <ArrowIcon />
            </Link>
          ))}
          <a
            href={LOGIN_URL}
            className="mt-3 rounded-full px-5 py-3.5 text-center text-base font-bold text-ink-900 ring-1 ring-ink-200"
          >
            {nav.login}
          </a>
          <a
            href={SIGNUP_URL}
            className={`${ctaClass} mt-1.5 flex items-center justify-center gap-2 px-5 py-3.5 text-base font-bold`}
          >
            {nav.cta}
            <ArrowIcon />
          </a>
        </nav>
      </div>
    </header>
  );
}
