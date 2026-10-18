import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowIcon,
  buttonOutline,
  buttonPrimary,
  cardClass,
  CheckList,
  PageIntro,
} from "@/components/marketing/ui";
import { href } from "@/i18n/config";
import { getDictionary, resolveLocale } from "@/i18n/dictionaries";
import { pageMetadata } from "@/lib/metadata";
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
        <div className="grid gap-6 md:grid-cols-2">
          {pricing.plans.map((plan) => (
            <section
              key={plan.name}
              className={`reveal flex flex-col p-8 sm:p-10 ${cardClass} ${
                plan.highlighted ? "shadow-brand ring-2 ring-brand-500" : ""
              }`}
            >
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-500">
                {plan.name}
              </h2>
              <p className="mt-4 font-display text-5xl font-semibold">{plan.price}</p>
              <p className="mt-3 text-ink-500">{plan.description}</p>
              <div className="my-8 flex-1 border-t border-ink-100 pt-8 text-sm font-medium text-ink-700">
                <CheckList items={plan.features} />
              </div>
              {plan.highlighted ? (
                <a href={SIGNUP_URL} className={buttonPrimary}>
                  {plan.cta}
                  <ArrowIcon />
                </a>
              ) : (
                <Link href={href(lang, "contact")} className={buttonOutline}>
                  {plan.cta}
                </Link>
              )}
            </section>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-ink-500">{pricing.note}</p>
      </div>
    </>
  );
}
