import Link from "next/link";
import { lang as rootLang } from "next/root-params";
import { href } from "@/i18n/config";
import { ArrowIcon, buttonPrimary, DarkBackdrop } from "@/components/marketing/ui";
import { getDictionary, resolveLocale } from "@/i18n/dictionaries";

export default async function NotFound() {
  const lang = resolveLocale((await rootLang()) ?? "");
  const { notFound } = getDictionary(lang);

  return (
    <section className="on-dark relative isolate -mt-[var(--header-h)] flex min-h-[36rem] flex-1 flex-col justify-center overflow-hidden pt-[var(--header-h)] text-center text-white">
      <DarkBackdrop />
      <div className="container-page py-20">
        <p className="rise font-display text-[clamp(5rem,16vw,9rem)] font-semibold leading-none">
          <em className="text-accent">404</em>
        </p>
        <h1 className="rise mt-4 font-display text-[clamp(1.75rem,3.4vw,2.75rem)] font-semibold">
          {notFound.title}
        </h1>
        <p className="rise mx-auto mt-4 max-w-md text-white/70">{notFound.body}</p>
        <Link href={href(lang, "home")} className={`${buttonPrimary} rise mt-9`}>
          {notFound.back}
          <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}
