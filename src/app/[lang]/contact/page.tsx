import type { Metadata } from "next";
import { ContactForm } from "@/components/marketing/contact-form";
import { PageIntro } from "@/components/marketing/ui";
import { getDictionary, resolveLocale } from "@/i18n/dictionaries";
import { pageMetadata } from "@/lib/metadata";
import { CONTACT_EMAIL } from "@/lib/site";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const lang = resolveLocale((await params).lang);
  const { contact } = getDictionary(lang);
  return pageMetadata(lang, "contact", contact.title, contact.subtitle);
}

export default async function ContactPage({
  params,
}: PageProps<"/[lang]/contact">) {
  const lang = resolveLocale((await params).lang);
  const { contact } = getDictionary(lang);

  return (
    <>
      <PageIntro title={contact.title} subtitle={contact.subtitle} />
      <div className="container-page max-w-xl py-16 sm:py-20">
        <p className="mb-8 text-center">
          <span className="text-ink-500">{contact.emailLabel}: </span>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-bold text-brand-500 underline-offset-4 hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
        <ContactForm labels={contact.form} lang={lang} />
      </div>
    </>
  );
}
