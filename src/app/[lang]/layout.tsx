import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { Clarity } from "@/components/clarity";
import { Footer } from "@/components/marketing/footer";
import { Header } from "@/components/marketing/header";
import { JsonLd } from "@/components/marketing/ui";
import { locales } from "@/i18n/config";
import { getDictionary, resolveLocale } from "@/i18n/dictionaries";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/site";
import "../globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
});

// Headings only use the semibold cut. A single static weight is a fraction of
// the full variable font (all weights plus the SOFT/WONK/opsz axes).
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  weight: "600",
  style: ["normal", "italic"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const lang = resolveLocale((await params).lang);
  const dict = getDictionary(lang);
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: dict.meta.title, template: "%s — CG Menu" },
    description: dict.meta.description,
    applicationName: "CG Menu",
    keywords:
      lang === "tr"
        ? ["QR menü", "restoran yönetim sistemi", "adisyon programı", "dijital menü", "mutfak ekranı", "garson sipariş sistemi"]
        : ["QR menu", "restaurant management system", "restaurant POS", "digital menu", "kitchen display system", "waiter ordering"],
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
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": `${SITE_URL}/#organization`,
                name: "CG Menu",
                url: SITE_URL,
                logo: `${SITE_URL}/logo.png`,
                email: CONTACT_EMAIL,
                description: dict.meta.description,
              },
              {
                "@type": "WebSite",
                "@id": `${SITE_URL}/#website`,
                name: "CG Menu",
                url: SITE_URL,
                inLanguage: ["tr", "en"],
                publisher: { "@id": `${SITE_URL}/#organization` },
              },
            ],
          }}
        />
        <div aria-hidden className="scroll-progress" />
        <Header lang={lang} nav={dict.nav} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} dict={dict} />
        <Clarity />
      </body>
    </html>
  );
}
