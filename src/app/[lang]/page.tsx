import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import {
  accents,
  ArrowIcon,
  buttonGlass,
  buttonOutline,
  buttonPrimary,
  cardClass,
  CheckList,
  DarkBackdrop,
  Eyebrow,
  JsonLd,
  SectionHeading,
  type Accent,
} from "@/components/marketing/ui";
import { PhoneMockup } from "@/components/marketing/phone-mockup";
import type { SolutionId } from "@/content/slugs";
import { pageHref } from "@/i18n/config";
import { getDictionary, resolveLocale } from "@/i18n/dictionaries";
import { pageMetadata } from "@/lib/metadata";
import { DEMO_URL, SIGNUP_URL, SITE_URL } from "@/lib/site";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]">): Promise<Metadata> {
  const lang = resolveLocale((await params).lang);
  const dict = getDictionary(lang);
  return {
    ...pageMetadata(lang, "home", dict.meta.title, dict.meta.description),
    title: { absolute: dict.meta.title },
  };
}

const featureIcons = [
  "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h2v2h-2zM18 14h2v2h-2zM14 18h2v2h-2zM18 18h2v2h-2z",
  "M12 3a9 9 0 1 0 0 18c1 0 1.5-.7 1.5-1.5 0-1-.8-1.4-.8-2.3 0-.8.7-1.5 1.5-1.5H16a5 5 0 0 0 5-5c0-4.3-4-7.7-9-7.7ZM7.5 12a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4Zm3-4a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4Zm5 0a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4Z",
  "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 0c2.5 2.4 3.8 5.4 3.8 9s-1.3 6.600-3.8 9c-2.500-2.400-3.800-5.400-3.800-9S9.500 5.400 12 3ZM3.500 9h17M3.500 15h17",
  "M12 3v18M16.500 7.500c-.700-1.300-2.300-2-4.500-2-2.600 0-4.300 1.200-4.300 3.100 0 4.500 9.100 2 9.100 6.600 0 2-1.900 3.300-4.800 3.300-2.400 0-4.200-.900-5-2.500",
  "M4 5h16v11H9l-5 4V5Zm4 4h8M8 12.500h5",
  "M13 3 5 13.500h6L10 21l9-11h-6.500L13 3Z",
];

const featureAccents: Accent[] = ["brand", "grape", "aqua", "sun", "coral", "brand"];

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const lang = resolveLocale((await params).lang);
  const { home, meta } = getDictionary(lang);

  const spotlights: { content: typeof home.brand; accent: Accent }[] = [
    { content: home.brand, accent: "brand" },
    { content: home.global, accent: "aqua" },
    { content: home.feedback, accent: "grape" },
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "CG Menu",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description: meta.description,
          url: SITE_URL,
          inLanguage: lang,
          featureList: [
            ...home.features.map((feature) => feature.title),
            ...home.management.items.map((item) => item.title),
          ],
          publisher: { "@id": `${SITE_URL}/#organization` },
        }}
      />

      <section className="on-dark relative isolate -mt-[var(--header-h)] flex min-h-[46rem] flex-col justify-center overflow-hidden pt-[var(--header-h)] text-white lg:min-h-[48rem]">
        <DarkBackdrop />
        <div className="container-page grid items-center gap-16 py-20 sm:py-24 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="rise inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 py-2 pl-3 pr-4 text-xs font-bold text-white/95 backdrop-blur-md">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-sun-500 opacity-70" />
                <span className="relative inline-flex size-2 rounded-full bg-sun-500" />
              </span>
              {home.hero.badge}
            </p>
            <h1 className="mt-7 font-display text-[clamp(2.75rem,6.6vw,4.75rem)] font-semibold leading-[1] drop-shadow-[0_4px_28px_rgba(11,10,29,0.6)]">
              <span className="rise block" style={delay(120)}>
                {home.hero.title}
              </span>
              <span className="rise block" style={delay(230)}>
                <em className="text-accent">{home.hero.titleAccent}</em>
              </span>
            </h1>
            <p
              className="rise mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-[17px]"
              style={delay(340)}
            >
              {home.hero.subtitle}
            </p>
            <div className="rise mt-9 flex flex-wrap gap-3" style={delay(420)}>
              <a href={SIGNUP_URL} className={buttonPrimary}>
                {home.hero.primary}
                <ArrowIcon />
              </a>
              <a href={DEMO_URL} className={buttonGlass} target="_blank">
                {home.hero.secondary}
              </a>
            </div>
            <p className="rise mt-6 text-sm text-white/55" style={delay(500)}>
              {home.hero.note}
            </p>
          </div>
          {/* No delay: the mockup's cover photo is the page's largest paint */}
          <div className="rise">
            <PhoneMockup lang={lang} />
          </div>
        </div>
      </section>

      <section className="container-page py-20 sm:py-24">
        <SectionHeading
          eyebrow={home.featuresEyebrow}
          title={home.featuresTitle}
          subtitle={home.featuresSubtitle}
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {home.features.map((feature, index) => (
            <li
              key={feature.title}
              className={`reveal group p-7 transition-all duration-500 ease-out-expo hover:-translate-y-2 hover:shadow-brand hover:ring-brand-200 ${cardClass}`}
            >
              <span
                className={`grid size-12 place-items-center rounded-2xl ${accents[featureAccents[index]].tile}`}
              >
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="size-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={featureIcons[index]} />
                </svg>
              </span>
              <h3 className="mt-5 text-[17px] font-bold tracking-tight transition-colors duration-300 group-hover:text-brand-500">
                {feature.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{feature.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-page pb-20 sm:pb-24">
        <SectionHeading
          eyebrow={home.management.eyebrow}
          accent="aqua"
          title={home.management.title}
          subtitle={home.management.subtitle}
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {home.management.items.map((item) => (
            <li
              key={item.title}
              className={`reveal group relative p-7 transition-all duration-500 ease-out-expo hover:-translate-y-2 hover:shadow-brand hover:ring-brand-200 ${cardClass}`}
            >
              <h3 className="text-[17px] font-bold tracking-tight transition-colors duration-300 group-hover:text-brand-500">
                <Link
                  href={pageHref(lang, { type: "solution", id: item.solution as SolutionId })}
                  className="after:absolute after:inset-0"
                >
                  {item.title}
                </Link>
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{item.body}</p>
            </li>
          ))}
        </ul>
        <Link
          href={pageHref(lang, { type: "solution", id: "restaurant-management" })}
          className={`${buttonOutline} reveal mt-10`}
        >
          {home.management.cta}
          <ArrowIcon />
        </Link>
      </section>

      <section className="bg-mesh-soft bg-canvas-alt py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow={home.steps.eyebrow}
            accent="grape"
            title={home.steps.title}
          />
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {home.steps.items.map((step, index) => (
              <li key={step.title} className={`reveal p-7 ${cardClass}`}>
                <span className="text-gradient-brand font-display text-5xl font-semibold tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-[17px] font-bold tracking-tight">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-page grid gap-6 py-20 sm:py-24 lg:grid-cols-3">
        {spotlights.map(({ content, accent }) => (
          <div key={content.title} className={`reveal flex flex-col p-8 ${cardClass}`}>
            <Eyebrow accent={accent}>{content.eyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-2xl font-semibold leading-tight text-balance">
              {content.title}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-500">{content.body}</p>
            <div className="mt-6 border-t border-ink-100 pt-6 text-sm font-medium text-ink-700">
              <CheckList items={content.points} accent={accent} />
            </div>
          </div>
        ))}
      </section>

      <section className="container-page pb-20 sm:pb-24">
        <div className="on-dark reveal relative isolate overflow-hidden rounded-[2.5rem] px-6 py-16 text-white sm:px-14 sm:py-20">
          <DarkBackdrop />
          <h2 className="max-w-[18ch] font-display text-[clamp(2rem,4.6vw,3.5rem)] font-semibold leading-[1.04]">
            {home.cta.title} <em className="text-accent">{home.cta.titleAccent}</em>
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/70 sm:text-base">
            {home.cta.body}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href={SIGNUP_URL} className={buttonPrimary}>
              {home.cta.button}
              <ArrowIcon />
            </a>
            <a href={DEMO_URL} className={buttonGlass} target="_blank">
              {home.hero.secondary}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
