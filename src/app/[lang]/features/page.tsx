import type { Metadata } from "next";
import { accents, cardClass, PageIntro, type Accent } from "@/components/marketing/ui";
import { getDictionary, resolveLocale } from "@/i18n/dictionaries";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/features">): Promise<Metadata> {
  const lang = resolveLocale((await params).lang);
  const { features } = getDictionary(lang);
  return pageMetadata(lang, "features", features.title, features.subtitle);
}

const groupAccents: Accent[] = ["brand", "grape", "aqua", "sun"];

export default async function FeaturesPage({
  params,
}: PageProps<"/[lang]/features">) {
  const { features } = getDictionary(resolveLocale((await params).lang));

  return (
    <>
      <PageIntro title={features.title} subtitle={features.subtitle} />
      <div className="container-page space-y-16 py-16 sm:py-20">
        {features.groups.map((group, index) => {
          const accent = accents[groupAccents[index % groupAccents.length]];
          return (
            <section key={group.title}>
              <h2 className="reveal flex items-center gap-3 font-display text-[clamp(1.5rem,2.6vw,2rem)] font-semibold">
                <span className={`size-2.5 rounded-full ${accent.dot}`} />
                {group.title}
              </h2>
              <ul className="mt-6 grid gap-6 md:grid-cols-3">
                {group.items.map((item) => (
                  <li key={item.title} className={`reveal p-7 ${cardClass}`}>
                    <h3 className="text-[17px] font-bold tracking-tight">{item.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-500">
                      {item.body}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </>
  );
}
