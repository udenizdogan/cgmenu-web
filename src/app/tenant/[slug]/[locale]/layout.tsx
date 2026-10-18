import { directionOf } from "@/lib/tenant/format";
import { DEFAULT_LOCALE_SEGMENT, getBusiness } from "@/lib/tenant/get-business";
import { demoBusiness } from "@/lib/tenant/demo-data";
import "../../../globals.css";

// <html lang> depends on the business, so this root layout has to wait for it.
// Menus are only reached by full page loads (no <Link> between routes), so
// there is no client navigation to keep instant.
export const instant = false;

// Prerender the demo; other businesses render on first request and are cached.
export function generateStaticParams() {
  return [
    DEFAULT_LOCALE_SEGMENT,
    ...demoBusiness.locales.filter((l) => l !== demoBusiness.defaultLocale),
  ].map((locale) => ({ slug: demoBusiness.slug, locale }));
}

export default async function TenantLayout({
  children,
  params,
}: LayoutProps<"/tenant/[slug]/[locale]">) {
  const { slug, locale } = await params;
  const business = await getBusiness(slug);
  const lang =
    locale === DEFAULT_LOCALE_SEGMENT ? (business?.defaultLocale ?? "tr") : locale;

  return (
    <html lang={lang} dir={directionOf(lang)} className="antialiased">
      <body>{children}</body>
    </html>
  );
}
