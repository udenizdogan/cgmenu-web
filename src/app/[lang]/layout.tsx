import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/marketing/footer";
import { Header } from "@/components/marketing/header";
import { locales } from "@/i18n/config";
import { getDictionary, resolveLocale } from "@/i18n/dictionaries";
import { SITE_URL } from "@/lib/site";
import "../globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const dict = getDictionary(resolveLocale((await params).lang));
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: dict.meta.title, template: "%s — CG Menu" },
    description: dict.meta.description,
  };
}

export default async function MarketingLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const lang = resolveLocale((await params).lang);
  const dict = getDictionary(lang);

  return (
    <html
      lang={lang}
      className={`${jakarta.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="site flex min-h-full flex-col font-sans">
        <div aria-hidden className="scroll-progress" />
        <Header lang={lang} nav={dict.nav} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} dict={dict} />
      </body>
    </html>
  );
}
