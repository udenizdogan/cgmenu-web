import type { Metadata } from "next";
import { cardClass, JsonLd, PageIntro } from "@/components/marketing/ui";
import { getDictionary, resolveLocale } from "@/i18n/dictionaries";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/faq">): Promise<Metadata> {
  const lang = resolveLocale((await params).lang);
  const { faq } = getDictionary(lang);
  return pageMetadata(lang, "faq", faq.title, faq.subtitle);
}

export default async function FaqPage({ params }: PageProps<"/[lang]/faq">) {
  const { faq } = getDictionary(resolveLocale((await params).lang));

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.items.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }}
      />
      <PageIntro title={faq.title} subtitle={faq.subtitle} />
      <div className="container-page max-w-3xl space-y-4 py-16 sm:py-20">
        {faq.items.map((item) => (
          <details
            key={item.q}
            className={`reveal group px-7 py-5 transition-shadow duration-300 open:shadow-brand open:ring-brand-200 ${cardClass}`}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-bold tracking-tight [&::-webkit-details-marker]:hidden">
              {item.q}
              <span
                aria-hidden
                className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-50 text-xl font-normal leading-none text-brand-500 transition-transform duration-300 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 leading-relaxed text-ink-500">{item.a}</p>
          </details>
        ))}
      </div>
    </>
  );
}
