import Link from "next/link";
import { href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { CONTACT_EMAIL, DEMO_URL } from "@/lib/site";
import { Logo } from "./logo";

const CYPRUS_GUIDE_URL = "https://cyprusguide.com.tr";

export function Footer({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const headingClass = "text-[11px] font-bold uppercase tracking-[0.2em] text-white/40";
  const linkClass = "text-sm text-white/70 transition-colors duration-300 hover:text-white";

  return (
    <footer className="on-dark relative isolate mt-auto overflow-hidden bg-ink-950 text-white">
      <div aria-hidden className="bg-mesh-hero absolute inset-0 -z-10 opacity-30" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(80%_80%_at_20%_0%,transparent_0%,rgba(11,10,29,0.8)_100%)]"
      />
      <div aria-hidden className="bg-grain absolute inset-0 -z-10 opacity-15 mix-blend-overlay" />

      <div className="container-page grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr]">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo lang={lang} width={152} onDark />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            {dict.footer.tagline}
          </p>
          <a href={`mailto:${CONTACT_EMAIL}`} className={`${linkClass} mt-4 inline-block`}>
            {CONTACT_EMAIL}
          </a>
        </div>
        <div>
          <h2 className={headingClass}>{dict.footer.product}</h2>
          <ul className="mt-5 space-y-3">
            <li>
              <Link href={href(lang, "features")} className={linkClass}>
                {dict.nav.features}
              </Link>
            </li>
            <li>
              <Link href={href(lang, "pricing")} className={linkClass}>
                {dict.nav.pricing}
              </Link>
            </li>
            <li>
              <Link href={href(lang, "faq")} className={linkClass}>
                {dict.nav.faq}
              </Link>
            </li>
            <li>
              <a href={DEMO_URL} className={linkClass}>
                {dict.footer.demo}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className={headingClass}>{dict.footer.legal}</h2>
          <ul className="mt-5 space-y-3">
            <li>
              <Link href={href(lang, "privacy")} className={linkClass}>
                {dict.legal.privacy.title}
              </Link>
            </li>
            <li>
              <Link href={href(lang, "terms")} className={linkClass}>
                {dict.legal.terms.title}
              </Link>
            </li>
            <li>
              <Link href={href(lang, "kvkk")} className={linkClass}>
                {dict.legal.kvkk.title}
              </Link>
            </li>
            <li>
              <Link href={href(lang, "contact")} className={linkClass}>
                {dict.nav.contact}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 CG Menu. {dict.footer.rights}</p>
          <a
            href={CYPRUS_GUIDE_URL}
            target="_blank"
            rel="noopener"
            className="transition-colors duration-300 hover:text-white"
          >
            {dict.footer.family}
          </a>
        </div>
      </div>
    </footer>
  );
}
