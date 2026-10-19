import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GuideCard, SolutionCard } from "@/components/marketing/content-cards";
import { Breadcrumbs, FaqList, RichText, Sections } from "@/components/marketing/prose";
import { ArrowIcon, buttonPrimary, DarkBackdrop, JsonLd, PageIntro } from "@/components/marketing/ui";
import { getSolution, guideBySlug, guides, readingMinutes } from "@/content";
import { guideSlugs } from "@/content/slugs";
import { href, pageHref } from "@/i18n/config";
import { getDictionary, resolveLocale } from "@/i18n/dictionaries";
import { toPlain } from "@/lib/content-links";
import { ogImageUrl, pageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/site";
import { anchorId, fill } from "@/lib/text";

export function generateStaticParams({ params }: { params: { lang: string } }) {
  const lang = resolveLocale(params.lang);
  return guides.map((guide) => ({ slug: guideSlugs[guide.id][lang] }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/guides/[slug]">): Promise<Metadata> {
  const { lang: raw, slug } = await params;
  const lang = resolveLocale(raw);
  const guide = guideBySlug(lang, slug);
  if (!guide) return {};
  const content = guide.content[lang];
  return pageMetadata(lang, { type: "guide", id: guide.id }, content.title, content.description, {
    article: { publishedTime: guide.published, modifiedTime: guide.updated },
  });
}

export default async function GuidePage({ params }: PageProps<"/[lang]/guides/[slug]">) {
  const { lang: raw, slug } = await params;
  const lang = resolveLocale(raw);
  const guide = guideBySlug(lang, slug);
  if (!guide) notFound();

  const dict = getDictionary(lang);
  const t = dict.guides;
  const content = guide.content[lang];
  const url = `${SITE_URL}${pageHref(lang, { type: "guide", id: guide.id })}`;
  const updated = new Intl.DateTimeFormat(lang, { dateStyle: "long" }).format(new Date(guide.updated));
  const others = guides.filter((g) => g.id !== guide.id).slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: content.title,
          description: content.description,
          abstract: toPlain(content.lead, lang),
          inLanguage: lang,
          datePublished: guide.published,
          dateModified: guide.updated,
          mainEntityOfPage: url,
          url,
          image: `${SITE_URL}${ogImageUrl(content.h1, lang)}`,
          author: { "@type": "Organization", name: "CG Menu", url: SITE_URL },
          publisher: {
            "@type": "Organization",
            name: "CG Menu",
            logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
          },
        }}
      />
      <PageIntro title={content.h1}>
        <p className="rise mt-5 text-sm text-white/65">
          {fill(t.readingTime, { minutes: readingMinutes(guide, lang) })} ·{" "}
          <time dateTime={guide.updated}>{fill(t.updated, { date: updated })}</time>
        </p>
        <Breadcrumbs
          label={dict.breadcrumb.label}
          items={[
            { name: dict.breadcrumb.home, href: href(lang, "home") },
            { name: t.title, href: href(lang, "guides") },
            { name: content.h1, href: pageHref(lang, { type: "guide", id: guide.id }) },
          ]}
        />
      </PageIntro>

      <div className="container-page py-16 sm:py-20">
        <article className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-ink-700 sm:text-xl">
            <RichText text={content.lead} lang={lang} />
          </p>

          <nav aria-labelledby="toc" className="mt-10 rounded-2xl bg-ink-50 p-6 ring-1 ring-ink-100">
            <h2 id="toc" className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink-500">
              {t.toc}
            </h2>
            <ol className="mt-4 space-y-2 text-[15px]">
              {content.sections.map((section) => (
                <li key={section.heading}>
                  <a href={`#${anchorId(section.heading)}`} className="font-semibold text-ink-700 hover:text-brand-500">
                    {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-14">
            <Sections sections={content.sections} lang={lang} />
          </div>
          <FaqList items={content.faq ?? []} lang={lang} title={t.faq} />
        </article>

        <section className="mt-20">
          <h2 className="font-display text-[clamp(1.5rem,2.6vw,2rem)] font-semibold">{t.related}</h2>
          <ul className="mt-6 grid gap-6 md:grid-cols-3">
            {guide.solutions.map((id) => (
              <SolutionCard key={id} solution={getSolution(id)} lang={lang} more={dict.solutions.more} />
            ))}
          </ul>
        </section>

        <section className="on-dark relative isolate mt-20 overflow-hidden rounded-[2.5rem] px-6 py-14 text-white sm:px-14">
          <DarkBackdrop />
          <h2 className="font-display text-[clamp(1.75rem,3.6vw,2.75rem)] font-semibold leading-tight">{t.ctaTitle}</h2>
          <p className="mt-4 max-w-lg text-white/70">{t.ctaBody}</p>
          <Link href={href(lang, "pricing")} className={`${buttonPrimary} mt-8`}>
            {t.ctaButton}
            <ArrowIcon />
          </Link>
        </section>

        <section className="mt-20">
          <h2 className="font-display text-[clamp(1.5rem,2.6vw,2rem)] font-semibold">{t.more}</h2>
          <ul className="mt-6 grid gap-6 md:grid-cols-3">
            {others.map((other) => (
              <GuideCard key={other.id} guide={other} lang={lang} readingTime={t.readingTime} />
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
