import Link from "next/link";
import { Suspense } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import { href, type Locale } from "@/i18n/config";
import { formatPlanPrice, getPlans, localized } from "@/lib/plans";
import { DEMO_URL, SIGNUP_URL, SITE_URL } from "@/lib/site";
import { fill } from "@/lib/text";
import { ArrowIcon, buttonOutline, buttonPrimary, cardClass, CheckList, JsonLd } from "./ui";

type Props = { lang: Locale; planId: string; dict: Dictionary; description: string };

/** The plan that includes a solution, with its live price and an Offer for search engines. */
export function PlanBox(props: Props) {
  return (
    <Suspense fallback={<div className={`mt-16 h-72 ${cardClass}`} />}>
      <PlanBoxContent {...props} />
    </Suspense>
  );
}

async function PlanBoxContent({ lang, planId, dict, description }: Props) {
  const plan = (await getPlans())?.find((p) => p.id === planId);
  const { solutions, pricing } = dict;
  const name = plan ? localized(plan.name, lang) : "";

  return (
    <section className={`reveal mt-16 grid gap-8 p-8 sm:p-10 md:grid-cols-[1fr_auto] ${cardClass} shadow-brand ring-2 ring-brand-200`}>
      {plan && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: `CG Menu ${name}`,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description,
            url: SITE_URL,
            offers: {
              "@type": "Offer",
              price: (plan.price / 100).toFixed(2),
              priceCurrency: plan.currency,
              url: `${SITE_URL}${href(lang, "pricing")}`,
              availability: "https://schema.org/InStock",
            },
          }}
        />
      )}
      <div>
        <h2 className="font-display text-2xl font-semibold">
          {plan ? fill(solutions.planTitle, { plan: name }) : pricing.title}
        </h2>
        {plan ? (
          <>
            <p className="mt-3 flex flex-wrap items-baseline gap-x-2">
              <span className="font-display text-4xl font-semibold">{formatPlanPrice(plan, lang)}</span>
              <span className="text-ink-500">
                {plan.periodMonths === 12
                  ? pricing.perYear
                  : fill(pricing.perMonths, { count: plan.periodMonths })}
              </span>
            </p>
            <div className="mt-6 text-sm font-medium text-ink-700">
              <CheckList items={plan.features.map((feature) => localized(feature, lang))} />
            </div>
          </>
        ) : (
          <p className="mt-3 text-ink-500">{pricing.unavailable}</p>
        )}
      </div>
      <div className="flex flex-col justify-end gap-3">
        <a
          href={plan ? `${SIGNUP_URL}?plan=${encodeURIComponent(plan.id)}` : SIGNUP_URL}
          className={buttonPrimary}
        >
          {solutions.planCta}
          <ArrowIcon />
        </a>
        <Link href={href(lang, "pricing")} className={buttonOutline}>
          {solutions.planPrices}
        </Link>
        <a href={DEMO_URL} target="_blank" className="text-center text-sm font-semibold text-ink-500 hover:text-ink-900">
          {solutions.demo}
        </a>
      </div>
    </section>
  );
}
