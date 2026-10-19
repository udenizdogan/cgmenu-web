import type { Metadata } from "next";
import { SolutionCard } from "@/components/marketing/content-cards";
import { Breadcrumbs } from "@/components/marketing/prose";
import { PageIntro } from "@/components/marketing/ui";
import { solutions } from "@/content";
import type { Solution } from "@/content/types";
import { href } from "@/i18n/config";
import { getDictionary, resolveLocale } from "@/i18n/dictionaries";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/solutions">): Promise<Metadata> {
  const lang = resolveLocale((await params).lang);
  const { solutions: t } = getDictionary(lang);
  return pageMetadata(lang, "solutions", t.title, t.subtitle);
}

const BUSINESS_TYPES = new Set<Solution["id"]>(["cafe", "hotel"]);

export default async function SolutionsPage({ params }: PageProps<"/[lang]/solutions">) {
  const lang = resolveLocale((await params).lang);
  const dict = getDictionary(lang);
  const t = dict.solutions;
  const groups = [
    { title: t.products, items: solutions.filter((s) => !BUSINESS_TYPES.has(s.id)) },
    { title: t.businesses, items: solutions.filter((s) => BUSINESS_TYPES.has(s.id)) },
  ];

  return (
    <>
      <PageIntro title={t.title} subtitle={t.subtitle}>
        <Breadcrumbs
          label={dict.breadcrumb.label}
          items={[
            { name: dict.breadcrumb.home, href: href(lang, "home") },
            { name: t.title, href: href(lang, "solutions") },
          ]}
        />
      </PageIntro>
      <div className="container-page space-y-16 py-16 sm:py-20">
        {groups.map((group) => (
          <section key={group.title}>
            <h2 className="reveal font-display text-[clamp(1.5rem,2.6vw,2rem)] font-semibold">{group.title}</h2>
            <ul className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {group.items.map((solution) => (
                <SolutionCard key={solution.id} solution={solution} lang={lang} more={t.more} />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
