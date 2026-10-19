import Link from "next/link";
import { readingMinutes } from "@/content";
import type { Guide, Solution } from "@/content/types";
import { pageHref, type Locale } from "@/i18n/config";
import { fill } from "@/lib/text";
import { ArrowIcon, cardClass, Eyebrow } from "./ui";

const cardLink =
  "group relative flex flex-col p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-brand hover:ring-brand-200";

/** Whole card is the link target; the heading carries the accessible name. */
export function SolutionCard({ solution, lang, more }: { solution: Solution; lang: Locale; more: string }) {
  const content = solution.content[lang];
  return (
    <li className={`reveal ${cardLink} ${cardClass}`}>
      <Eyebrow>{content.eyebrow}</Eyebrow>
      <h3 className="mt-3 text-[17px] font-bold tracking-tight transition-colors group-hover:text-brand-500">
        <Link href={pageHref(lang, { type: "solution", id: solution.id })} className="after:absolute after:inset-0">
          {content.h1}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-500">{content.summary}</p>
      <span aria-hidden className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-500">
        {more}
        <ArrowIcon />
      </span>
    </li>
  );
}

export function GuideCard({
  guide,
  lang,
  readingTime,
}: {
  guide: Guide;
  lang: Locale;
  /** "{minutes} min read" */
  readingTime: string;
}) {
  const content = guide.content[lang];
  return (
    <li className={`reveal ${cardLink} ${cardClass}`}>
      <span className="text-xs font-semibold text-ink-500">
        {fill(readingTime, { minutes: readingMinutes(guide, lang) })}
      </span>
      <h3 className="mt-2 text-[17px] font-bold leading-snug tracking-tight transition-colors group-hover:text-brand-500">
        <Link href={pageHref(lang, { type: "guide", id: guide.id })} className="after:absolute after:inset-0">
          {content.h1}
        </Link>
      </h3>
      <p className="mt-2 line-clamp-3 flex-1 text-[15px] leading-relaxed text-ink-500">{content.description}</p>
    </li>
  );
}
