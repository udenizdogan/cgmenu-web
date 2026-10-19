import type { Metadata } from "next";
import { GuideCard } from "@/components/marketing/content-cards";
import { Breadcrumbs } from "@/components/marketing/prose";
import { JsonLd, PageIntro } from "@/components/marketing/ui";
import { guides } from "@/content";
import { href, pageHref } from "@/i18n/config";
import { getDictionary, resolveLocale } from "@/i18n/dictionaries";
import { pageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/site";

export async function generateMetadata({ params }: PageProps<"/[lang]/guides">): Promise<Metadata> {
  const lang = resolveLocale((await params).lang);
  const { guides: t } = getDictionary(lang);
  return pageMetadata(lang, "guides", t.title, t.subtitle);
}

export default async function GuidesPage({ params }: PageProps<"/[lang]/guides">) {
  const lang = resolveLocale((await params).lang);
  const dict = getDictionary(lang);
  const t = dict.guides;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: t.title,
          description: t.subtitle,
          url: `${SITE_URL}${href(lang, "guides")}`,
          inLanguage: lang,
          hasPart: guides.map((guide) => ({
            "@type": "Article",
            headline: guide.content[lang].title,
            url: `${SITE_URL}${pageHref(lang, { type: "guide", id: guide.id })}`,
          })),
        }}
      />
      <PageIntro title={t.title} subtitle={t.subtitle}>
        <Breadcrumbs
          label={dict.breadcrumb.label}
          items={[
            { name: dict.breadcrumb.home, href: href(lang, "home") },
            { name: t.title, href: href(lang, "guides") },
          ]}
        />
      </PageIntro>
      <div className="container-page py-16 sm:py-20">
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <GuideCard key={guide.id} guide={guide} lang={lang} readingTime={t.readingTime} />
          ))}
        </ul>
      </div>
    </>
  );
}
