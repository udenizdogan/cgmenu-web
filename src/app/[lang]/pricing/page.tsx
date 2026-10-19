import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import {
  ArrowIcon,
  buttonOutline,
  buttonPrimary,
  cardClass,
  CheckList,
  PageIntro,
} from "@/components/marketing/ui";
import { href, type Locale } from "@/i18n/config";
import { getDictionary, resolveLocale } from "@/i18n/dictionaries";
import { pageMetadata } from "@/lib/metadata";
import { formatPlanPrice, getPlans, localized } from "@/lib/plans";
import { SIGNUP_URL } from "@/lib/site";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/pricing">): Promise<Metadata> {
  const lang = resolveLocale((await params).lang);
  const { pricing } = getDictionary(lang);
  return pageMetadata(lang, "pricing", pricing.title, pricing.subtitle);
}

export default async function PricingPage({
  params,
}: PageProps<"/[lang]/pricing">) {
  const lang = resolveLocale((await params).lang);
  const { pricing } = getDictionary(lang);

  return (
    <>
      <PageIntro title={pricing.title} subtitle={pricing.subtitle} />
      <div className="container-page max-w-5xl py-16 sm:py-20">
        <Suspense fallback={<div className={`h-[32rem] ${cardClass}`} />}>
          <Plans lang={lang} />
        </Suspense>
        <p className="mt-8 text-center text-sm text-ink-500">{pricing.note}</p>
      </div>
    </>
  );
}

async function Plans({ lang }: { lang: Locale }) {
  const { pricing } = getDictionary(lang);
  const plans = await getPlans();

  if (!plans?.length) {
    return (
      <div className={`flex flex-col items-center gap-6 p-10 text-center ${cardClass}`}>
        <p className="text-ink-500">{pricing.unavailable}</p>
        <Link href={href(lang, "contact")} className={buttonOutline}>
          {pricing.contact}
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {plans.map((plan) => (
        <section
          key={plan.id}
          className={`reveal flex flex-col p-8 sm:p-10 ${cardClass} ${
            plan.highlighted ? "shadow-brand ring-2 ring-brand-500" : ""
          }`}
        >
          <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-500">
            {localized(plan.name, lang)}
          </h2>
          <p className="mt-4 flex flex-wrap items-baseline gap-x-2">
            <span className="font-display text-5xl font-semibold">
              {formatPlanPrice(plan, lang)}
            </span>
            <span className="text-ink-500">
              {plan.periodMonths === 12
                ? pricing.perYear
                : pricing.perMonths.replace("{count}", String(plan.periodMonths))}
            </span>
          </p>
          <p className="mt-3 text-ink-500">{localized(plan.description, lang)}</p>
          <div className="my-8 flex-1 border-t border-ink-100 pt-8 text-sm font-medium text-ink-700">
            <CheckList items={plan.features.map((feature) => localized(feature, lang))} />
          </div>
          {/* The dashboard carries the chosen plan through sign-up to payment */}
          <a
            href={`${SIGNUP_URL}?plan=${encodeURIComponent(plan.id)}`}
            className={plan.highlighted ? buttonPrimary : buttonOutline}
          >
            {pricing.cta}
            {plan.highlighted && <ArrowIcon />}
          </a>
        </section>
      ))}
    </div>
  );
}
