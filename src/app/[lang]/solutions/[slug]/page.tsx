import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideCard, SolutionCard } from "@/components/marketing/content-cards";
import { PlanBox } from "@/components/marketing/plan-box";
import { Breadcrumbs, FaqList, RichText, Sections } from "@/components/marketing/prose";
import { cardClass, Eyebrow, PageIntro } from "@/components/marketing/ui";
import { getGuide, getSolution, solutionBySlug, solutions } from "@/content";
import { solutionSlugs } from "@/content/slugs";
import { href, pageHref } from "@/i18n/config";
import { getDictionary, resolveLocale } from "@/i18n/dictionaries";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams({ params }: { params: { lang: string } }) {
  const lang = resolveLocale(params.lang);
  return solutions.map((solution) => ({ slug: solutionSlugs[solution.id][lang] }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/solutions/[slug]">): Promise<Metadata> {
  const { lang: raw, slug } = await params;
  const lang = resolveLocale(raw);
  const solution = solutionBySlug(lang, slug);
  if (!solution) return {};
  const content = solution.content[lang];
  return pageMetadata(lang, { type: "solution", id: solution.id }, content.title, content.description);
}

export default async function SolutionPage({ params }: PageProps<"/[lang]/solutions/[slug]">) {
  const { lang: raw, slug } = await params;
  const lang = resolveLocale(raw);
  const solution = solutionBySlug(lang, slug);
  if (!solution) notFound();

  const dict = getDictionary(lang);
  const t = dict.solutions;
  const content = solution.content[lang];

  return (
    <>
      <PageIntro title={content.h1} subtitle={content.summary}>
        <Breadcrumbs
          label={dict.breadcrumb.label}
          items={[
            { name: dict.breadcrumb.home, href: href(lang, "home") },
            { name: t.title, href: href(lang, "solutions") },
            { name: content.eyebrow, href: pageHref(lang, { type: "solution", id: solution.id }) },
          ]}
        />
      </PageIntro>

      <div className="container-page py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <p className="reveal mt-4 text-lg leading-relaxed text-ink-700 sm:text-xl">
            <RichText text={content.intro} lang={lang} />
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.highlights.map((item) => (
            <li key={item.title} className={`reveal p-6 ${cardClass}`}>
              <h2 className="text-[17px] font-bold tracking-tight">{item.title}</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{item.body}</p>
            </li>
          ))}
        </ul>

        <article className="mx-auto mt-16 max-w-3xl">
          <Sections sections={content.sections} lang={lang} />
          <PlanBox lang={lang} planId={solution.plan} dict={dict} description={content.description} />
          <FaqList items={content.faq} lang={lang} title={t.faq} />
        </article>

        {solution.guides.length > 0 && (
          <section className="mt-20">
            <h2 className="font-display text-[clamp(1.5rem,2.6vw,2rem)] font-semibold">{t.relatedGuides}</h2>
            <ul className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {solution.guides.map((id) => (
                <GuideCard key={id} guide={getGuide(id)} lang={lang} readingTime={dict.guides.readingTime} />
              ))}
            </ul>
          </section>
        )}

        <section className="mt-20">
          <h2 className="font-display text-[clamp(1.5rem,2.6vw,2rem)] font-semibold">{t.related}</h2>
          <ul className="mt-6 grid gap-6 md:grid-cols-3">
            {solution.related.map((id) => (
              <SolutionCard key={id} solution={getSolution(id)} lang={lang} more={t.more} />
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
