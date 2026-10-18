import type { CSSProperties, ReactNode } from "react";

export const buttonPrimary =
  "shine inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-grape-500 px-7 py-3.5 text-sm font-bold text-white shadow-[0_12px_32px_-12px_rgba(72,70,247,0.95)] transition-transform duration-300 hover:-translate-y-0.5";

export const buttonGlass =
  "ring-gradient inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-colors duration-300 hover:bg-white/20";

export const buttonOutline =
  "inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-ink-900 ring-1 ring-ink-200 transition-all duration-300 hover:-translate-y-0.5 hover:ring-brand-400";

export const cardClass =
  "rounded-[1.75rem] bg-white shadow-card ring-1 ring-ink-100";

export const accents = {
  brand: { text: "text-brand-500", dot: "bg-brand-500", tile: "bg-brand-50 text-brand-500" },
  grape: { text: "text-grape-600", dot: "bg-grape-500", tile: "bg-grape-50 text-grape-600" },
  aqua: { text: "text-aqua-600", dot: "bg-aqua-500", tile: "bg-aqua-50 text-aqua-600" },
  sun: { text: "text-sun-600", dot: "bg-sun-500", tile: "bg-sun-50 text-sun-600" },
  coral: { text: "text-coral-500", dot: "bg-coral-500", tile: "bg-coral-50 text-coral-500" },
} as const;

export type Accent = keyof typeof accents;

export function ArrowIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

export function Eyebrow({
  children,
  accent = "brand",
}: {
  children: ReactNode;
  accent?: Accent;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] ${accents[accent].text}`}
    >
      <span className={`size-1.5 rounded-full ${accents[accent].dot}`} />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  accent,
  title,
  subtitle,
}: {
  eyebrow?: string;
  accent?: Accent;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="reveal max-w-2xl">
      {eyebrow && <Eyebrow accent={accent}>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 font-display text-[clamp(1.75rem,3.4vw,2.75rem)] font-semibold leading-[1.08] text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-[17px]">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/** Layered backdrop for dark sections: mesh, drifting glows, grid and grain. */
export function DarkBackdrop() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden bg-ink-950">
      <div className="bg-mesh-hero absolute inset-0 opacity-55" />
      <div className="animate-aurora absolute -left-40 top-[-20%] size-[36rem] rounded-full bg-brand-500/30 blur-[130px]" />
      <div className="animate-aurora absolute -right-32 top-[-10%] size-[30rem] rounded-full bg-grape-500/30 blur-[120px] [animation-delay:-7s]" />
      <div className="animate-aurora absolute -bottom-48 left-1/3 size-[32rem] rounded-full bg-aqua-500/20 blur-[140px] [animation-delay:-14s]" />
      <div className="bg-grid-fine absolute inset-0 opacity-45 [mask-image:radial-gradient(70%_60%_at_50%_40%,#000,transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(78%_68%_at_36%_44%,transparent_0%,rgba(11,10,29,0.62)_100%)]" />
      <div className="bg-grain absolute inset-0 opacity-20 mix-blend-overlay" />
    </div>
  );
}

/** Dark band at the top of a page; slides under the transparent header. */
export function PageIntro({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="on-dark relative isolate -mt-[var(--header-h)] overflow-hidden pt-[var(--header-h)] text-white">
      <DarkBackdrop />
      <div className="container-page py-16 text-center sm:py-24">
        <h1 className="rise mx-auto max-w-3xl font-display text-[clamp(2.25rem,5.4vw,4rem)] font-semibold leading-[1.02] text-balance drop-shadow-[0_4px_28px_rgba(11,10,29,0.6)]">
          {title}
        </h1>
        {subtitle && (
          <p
            className="rise mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-[17px]"
            style={{ "--delay": "120ms" } as CSSProperties}
          >
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

export function CheckList({
  items,
  accent = "brand",
}: {
  items: readonly string[];
  accent?: Accent;
}) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <svg
            aria-hidden
            viewBox="0 0 20 20"
            className={`mt-0.5 size-5 shrink-0 ${accents[accent].text}`}
            fill="currentColor"
          >
            <path d="M10 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Zm3.9 6.6-4.4 4.9a.9.9 0 0 1-1.3 0L6.1 10.8a.9.9 0 1 1 1.3-1.2l1.4 1.5 3.8-4.2a.9.9 0 1 1 1.3 1.2Z" />
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function LegalPage({
  title,
  notice,
  sections,
}: {
  title: string;
  notice: string;
  sections: readonly { h: string; p: string }[];
}) {
  return (
    <>
      <PageIntro title={title} />
      <article className="container-page max-w-3xl py-16 sm:py-20">
        <p className="rounded-2xl bg-sun-50 px-5 py-4 text-sm leading-relaxed text-ink-700 ring-1 ring-sun-100">
          {notice}
        </p>
        {sections.map((section) => (
          <section key={section.h} className="mt-10">
            <h2 className="font-display text-2xl font-semibold">{section.h}</h2>
            <p className="mt-3 leading-relaxed text-ink-500">{section.p}</p>
          </section>
        ))}
      </article>
    </>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`${cardClass} p-7 ${className}`}>{children}</div>;
}
