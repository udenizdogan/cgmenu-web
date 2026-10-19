import { guides, solutions } from "@/content";
import type { Block, Faq, Section } from "@/content/types";
import { locales, pageHref, type Locale, type Page } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { toMarkdown } from "@/lib/content-links";
import { formatPlanPrice, getPlans, localized, type Plan } from "@/lib/plans";
import { CONTACT_EMAIL, DEMO_URL, SIGNUP_URL, SITE_URL } from "@/lib/site";

/** llms.txt / llms-full.txt: the site as plain Markdown for AI assistants (llmstxt.org). */

const url = (lang: Locale, page: Page) => `${SITE_URL}${pageHref(lang, page)}`;

const ABOUT = {
  tr: [
    "CG Menu, restoran, kafe, bar ve oteller için web tabanlı bir QR menü ve restoran yönetim sistemidir. Türkiye'de geliştirilir; tanıtım sitesi ve yönetim paneli Türkçe ve İngilizcedir.",
    "QR Menü: markaya göre tasarlanan dijital menü; her işletme isletme.cgmenu.tr adresinde yayınlanır. Sınırsız dil, çoklu para birimi (günlük ECB kuru ya da sabit kur), ürün başına 14 alerjen, diyet etiketleri, besin değerleri, porsiyon seçenekleri, tükendi işareti, toplu fiyat güncelleme, masa bazlı QR kodlar, misafir geri bildirimi, masadan garson çağırma ve hesap isteme.",
    "Restoran Yönetim Sistemi (QR menü dahil): masa planı, garsonların telefon ya da tabletten sipariş girmesi, siparişlerin mutfak ekranına (KDS) iletilmesi, adisyon, nakit/kart/diğer ödeme, tutara ya da ürüne göre bölünmüş ödeme, indirim, masa taşıma, sahip/personel/garson rolleri ve günlük özet raporu (ciro, saatlik tahsilat, ürün satışları, iptaller, personel).",
    "Kapsam dışı: mali belge (yazar kasa fişi, e-fatura, e-arşiv) düzenlemez; mutfak yazıcısına çıktı göndermez; otel PMS entegrasyonu yoktur; misafirin QR menüden kendi siparişini vermesi şu an desteklenmez. Çalışmak için internet bağlantısı gerekir.",
  ],
  en: [
    "CG Menu is a web-based QR menu and restaurant management system for restaurants, cafés, bars and hotels. It is built in Turkey; the website and dashboard are in Turkish and English.",
    "QR Menu: a branded digital menu published at business.cgmenu.tr. Unlimited languages, multiple currencies (daily ECB rate or fixed rate), 14 allergens per item, diet tags, nutrition, portion options, sold-out marks, bulk price updates, per-table QR codes, guest feedback, waiter calls and bill requests from the table.",
    "Restaurant Management System (QR menu included): floor plan, waiters entering orders on a phone or tablet, orders sent to a kitchen display (KDS), checks, cash/card/other payments, split by amount or by item, discounts, table moves, owner/staff/waiter roles and a daily summary report (revenue, hourly takings, item sales, cancellations, staff).",
    "Out of scope: it does not issue fiscal receipts or e-invoices, does not print to kitchen printers, has no hotel PMS integration, and guests cannot place orders from the QR menu yet. It needs an internet connection.",
  ],
} as const;

function planLines(plans: Plan[] | null, lang: Locale) {
  if (!plans?.length) return [`- ${url(lang, { type: "route", key: "pricing" })}`];
  const period = getDictionary(lang).pricing.perYear;
  return plans.map(
    (plan) =>
      `- ${localized(plan.name, lang)}: ${formatPlanPrice(plan, lang)} ${period} — ${localized(plan.description, lang)}`,
  );
}

export async function buildLlmsTxt() {
  const plans = await getPlans();
  const lines: string[] = [
    "# CG Menu",
    "",
    `> ${ABOUT.en[0]}`,
    "",
    ...ABOUT.en.slice(1),
    "",
    "Plans (billed yearly, prices in Turkish lira):",
    ...planLines(plans, "en"),
    "",
    `Sign up: ${SIGNUP_URL} · Sample menu: ${DEMO_URL} · Contact: ${CONTACT_EMAIL}`,
    "",
  ];
  for (const lang of locales) {
    const dict = getDictionary(lang);
    lines.push(
      `## ${dict.solutions.title} (${lang})`,
      "",
      ...solutions.map(
        (s) => `- [${s.content[lang].eyebrow}](${url(lang, { type: "solution", id: s.id })}): ${s.content[lang].summary}`,
      ),
      "",
      `## ${dict.guides.title} (${lang})`,
      "",
      ...guides.map(
        (g) => `- [${g.content[lang].h1}](${url(lang, { type: "guide", id: g.id })}): ${g.content[lang].description}`,
      ),
      "",
    );
  }
  lines.push(
    "## Optional",
    "",
    `- [Full text of every solution page and guide](${SITE_URL}/llms-full.txt)`,
    ...locales.flatMap((lang) => {
      const nav = getDictionary(lang).nav;
      return (["pricing", "features", "faq"] as const).map(
        (key) => `- [${nav[key]} (${lang})](${url(lang, { type: "route", key })})`,
      );
    }),
    "",
  );
  return lines.join("\n");
}

function blockMarkdown(block: Block, lang: Locale): string {
  const md = (text: string) => toMarkdown(text, lang);
  switch (block.type) {
    case "p":
      return md(block.text);
    case "note":
      return `> ${md(block.text)}`;
    case "list":
      return block.items.map((item) => `- ${md(item)}`).join("\n");
    case "steps":
      return block.items.map((step, i) => `${i + 1}. **${step.title}:** ${md(step.body)}`).join("\n");
    case "table": {
      const row = (cells: string[]) => `| ${cells.map(md).join(" | ")} |`;
      return [row(block.head), `|${block.head.map(() => " --- |").join("")}`, ...block.rows.map(row)].join("\n");
    }
  }
}

function sectionsMarkdown(sections: Section[], faq: Faq[], faqTitle: string, lang: Locale) {
  const out = sections.flatMap((section) => [
    `### ${section.heading}`,
    "",
    ...section.blocks.flatMap((block) => [blockMarkdown(block, lang), ""]),
  ]);
  if (faq.length) {
    out.push(`### ${faqTitle}`, "");
    for (const item of faq) out.push(`**${item.q}**`, "", toMarkdown(item.a, lang), "");
  }
  return out;
}

export async function buildLlmsFullTxt() {
  const plans = await getPlans();
  const lines: string[] = ["# CG Menu", "", ...ABOUT.tr.flatMap((p) => [p, ""]), ...ABOUT.en.flatMap((p) => [p, ""])];

  for (const lang of locales) {
    const dict = getDictionary(lang);
    lines.push(`## ${dict.pricing.title} (${lang})`, "", ...planLines(plans, lang), "", dict.pricing.note, "");

    for (const s of solutions) {
      const c = s.content[lang];
      lines.push(
        `## ${c.h1}`,
        "",
        `URL: ${url(lang, { type: "solution", id: s.id })}`,
        "",
        toMarkdown(c.intro, lang),
        "",
        ...c.highlights.map((h) => `- **${h.title}:** ${h.body}`),
        "",
        ...sectionsMarkdown(c.sections, c.faq, dict.solutions.faq, lang),
      );
    }

    for (const g of guides) {
      const c = g.content[lang];
      lines.push(
        `## ${c.h1}`,
        "",
        `URL: ${url(lang, { type: "guide", id: g.id })} · ${g.updated}`,
        "",
        toMarkdown(c.lead, lang),
        "",
        ...sectionsMarkdown(c.sections, c.faq ?? [], dict.guides.faq, lang),
      );
    }

    lines.push(`## ${dict.faq.title} (${lang})`, "");
    for (const item of dict.faq.items) lines.push(`**${item.q}**`, "", item.a, "");
  }
  return lines.join("\n");
}
