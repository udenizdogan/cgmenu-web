import type { Metadata } from "next";
import type { ReactNode } from "react";
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

const iconProps = {
  "aria-hidden": true,
  viewBox: "0 0 24 24",
  className: "size-5",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const MailIcon = (
  <svg {...iconProps}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const ChatIcon = (
  <svg {...iconProps}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const ClockIcon = (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

export default async function ContactPage({
  params,
}: PageProps<"/[lang]/contact">) {
  const lang = resolveLocale((await params).lang);
  const { contact } = getDictionary(lang);

  const channels: { icon: ReactNode; title: string; text: string; href?: string }[] = [
    {
      icon: MailIcon,
      title: contact.emailLabel,
      text: CONTACT_EMAIL,
      href: `mailto:${CONTACT_EMAIL}`,
    },
    { icon: ChatIcon, ...contact.channels.customers },
    { icon: ClockIcon, ...contact.channels.response },
  ];

  return (
    <>
      <PageIntro title={contact.title} subtitle={contact.subtitle} />
      <div className="container-page py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-4">
            {channels.map(({ icon, title, text, href }) => (
              <div
                key={title}
                className="flex gap-4 rounded-3xl bg-ink-50 p-6 ring-1 ring-ink-100"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-500 shadow-card">
                  {icon}
                </span>
                <div className="min-w-0">
                  <p className="font-bold">{title}</p>
                  {href ? (
                    <a
                      href={href}
                      className="mt-1 block break-words font-medium text-brand-500 underline underline-offset-4"
                    >
                      {text}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm leading-relaxed text-ink-500">{text}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <ContactForm labels={contact.form} lang={lang} />
        </div>
      </div>
    </>
  );
}
