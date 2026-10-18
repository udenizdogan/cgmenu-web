import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/ui";
import { getDictionary, resolveLocale } from "@/i18n/dictionaries";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/kvkk">): Promise<Metadata> {
  const lang = resolveLocale((await params).lang);
  const { legal } = getDictionary(lang);
  return pageMetadata(lang, "kvkk", legal.kvkk.title, legal.kvkk.sections[0].p);
}

export default async function KvkkPage({
  params,
}: PageProps<"/[lang]/kvkk">) {
  const { legal } = getDictionary(resolveLocale((await params).lang));
  return <LegalPage notice={legal.draftNotice} {...legal.kvkk} />;
}
