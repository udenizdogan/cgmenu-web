import Link from "next/link";
import type { Block, Faq, Section } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { parseInline } from "@/lib/content-links";
import { SITE_URL } from "@/lib/site";
import { anchorId } from "@/lib/text";
import { cardClass, JsonLd } from "./ui";

const linkClass =
  "font-semibold text-brand-500 underline decoration-brand-200 underline-offset-4 transition-colors hover:decoration-brand-500";

/** Content text with **bold** and [links](target). */
export function RichText({ text, lang }: { text: string; lang: Locale }) {
  return parseInline(text, lang).map((part, index) => {
    if (part.type === "bold") return <strong key={index} className="font-semibold text-ink-900">{part.text}</strong>;
    if (part.type === "link") {
      return part.external ? (
        <a key={index} href={part.href} className={linkClass} rel="noopener" target="_blank">
          {part.text}
        </a>
      ) : (
        <Link key={index} href={part.href} className={linkClass}>
          {part.text}
        </Link>
      );
    }
    return part.text;
  });
}

function BlockView({ block, lang }: { block: Block; lang: Locale }) {
  switch (block.type) {
    case "p":
      return (
        <p className="leading-relaxed text-ink-700">
          <RichText text={block.text} lang={lang} />
        </p>
      );
    case "list":
      return (
        <ul className="space-y-2.5 pl-1">
          {block.items.map((item, index) => (
            <li key={index} className="flex gap-3 leading-relaxed text-ink-700">
              <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand-500" />
              <span>
                <RichText text={item} lang={lang} />
              </span>
            </li>
          ))}
        </ul>
      );
    case "steps":
      return (
        <ol className="space-y-4">
          {block.items.map((step, index) => (
            <li key={index} className="flex gap-4">
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-50 text-sm font-bold text-brand-500">
                {index + 1}
              </span>
              <div>
                <h3 className="font-bold tracking-tight text-ink-900">{step.title}</h3>
                <p className="mt-1 leading-relaxed text-ink-700">
                  <RichText text={step.body} lang={lang} />
                </p>
              </div>
            </li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div className="overflow-x-auto rounded-2xl ring-1 ring-ink-100">
          <table className="w-full min-w-[32rem] text-left text-sm">
            <thead className="bg-ink-50 text-ink-900">
              <tr>
                {block.head.map((cell) => (
                  <th key={cell} scope="col" className="px-4 py-3 font-bold">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-100">
              {block.rows.map((row, index) => (
                <tr key={index}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-4 py-3 align-top leading-relaxed text-ink-700">
                      <RichText text={cell} lang={lang} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "note":
      return (
        <p className="rounded-2xl bg-sun-50 px-5 py-4 text-sm leading-relaxed text-ink-700 ring-1 ring-sun-100">
          <RichText text={block.text} lang={lang} />
        </p>
      );
  }
}

/** Headed sections of a solution page or guide. */
export function Sections({ sections, lang }: { sections: Section[]; lang: Locale }) {
  return sections.map((section) => (
    <section key={section.heading} id={anchorId(section.heading)} className="reveal mt-12 scroll-mt-28 first:mt-0">
      <h2 className="font-display text-[clamp(1.5rem,2.6vw,2rem)] font-semibold leading-tight text-balance">
        {section.heading}
      </h2>
      <div className="mt-5 space-y-5 text-[16px] sm:text-[17px]">
        {section.blocks.map((block, index) => (
          <BlockView key={index} block={block} lang={lang} />
        ))}
      </div>
    </section>
  ));
}

/** Question list with FAQPage structured data. */
export function FaqList({ items, lang, title }: { items: Faq[]; lang: Locale; title: string }) {
  if (items.length === 0) return null;
  return (
    <section className="mt-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: parseInline(item.a, lang).map((part) => part.text).join(""),
            },
          })),
        }}
      />
      <h2 className="font-display text-[clamp(1.5rem,2.6vw,2rem)] font-semibold">{title}</h2>
      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <details
            key={item.q}
            className={`group px-6 py-4 transition-shadow duration-300 open:shadow-brand open:ring-brand-200 ${cardClass}`}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold tracking-tight [&::-webkit-details-marker]:hidden">
              {item.q}
              <span
                aria-hidden
                className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-50 text-lg font-normal leading-none text-brand-500 transition-transform duration-300 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 leading-relaxed text-ink-700">
              <RichText text={item.a} lang={lang} />
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

/** Visible trail plus BreadcrumbList structured data. The last crumb is the current page. */
export function Breadcrumbs({ items, label }: { items: { name: string; href: string }[]; label: string }) {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: `${SITE_URL}${item.href}`,
          })),
        }}
      />
      <nav aria-label={label} className="mt-6 text-sm text-white/60">
        <ol className="flex flex-wrap justify-center gap-x-2 gap-y-1">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden>/</span>}
              {index === items.length - 1 ? (
                <span aria-current="page" className="text-white/85">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="transition-colors hover:text-white">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
