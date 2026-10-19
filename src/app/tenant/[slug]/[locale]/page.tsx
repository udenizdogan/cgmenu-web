import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { ThemedMenu } from "@/components/menu/themed-menu";
import { API_URL, SITE_URL } from "@/lib/site";
import { pick } from "@/lib/tenant/format";
import {
  DEFAULT_LOCALE_SEGMENT,
  getBusiness,
  isDemo,
} from "@/lib/tenant/get-business";

// Blocks on the business like the layout does; see the note there.
export const instant = false;

type Props = PageProps<"/tenant/[slug]/[locale]">;

async function resolve(params: Props["params"]) {
  const { slug, locale: segment } = await params;
  const business = await getBusiness(slug);
  if (!business) notFound();
  // The default locale lives at the root of the subdomain
  if (segment === business.defaultLocale) redirect("/");
  const locale =
    segment === DEFAULT_LOCALE_SEGMENT ? business.defaultLocale : segment;
  if (!business.locales.includes(locale)) notFound();
  return { business, locale };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { business, locale } = await resolve(params);
  const pathOf = (l: string) => (l === business.defaultLocale ? "/" : `/${l}`);
  return {
    title: business.name,
    description: pick(business.tagline, locale, business.defaultLocale),
    alternates: {
      canonical: pathOf(locale),
      languages: Object.fromEntries(business.locales.map((l) => [l, pathOf(l)])),
    },
  };
}

export default async function TenantMenuPage({ params }: Props) {
  const { business, locale } = await resolve(params);

  return (
    <ThemedMenu
      business={business}
      locale={locale}
      marketingUrl={SITE_URL}
      feedbackUrl={
        isDemo(business.slug)
          ? undefined
          : `${API_URL}/public/businesses/${business.slug}/feedback`
      }
      tablesUrl={
        isDemo(business.slug) ? undefined : `${API_URL}/public/businesses/${business.slug}/tables`
      }
    />
  );
}
