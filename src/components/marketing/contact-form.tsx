"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import { API_URL } from "@/lib/site";
import { buttonPrimary, cardClass } from "./ui";

const fieldClass =
  "w-full rounded-2xl bg-ink-50 px-4 py-3.5 font-medium outline-none ring-1 ring-ink-100 transition-shadow focus:bg-white focus:ring-2 focus:ring-brand-500";

/** Sends the message to cgmenu-api (`POST /public/contact`). */
export function ContactForm({
  labels,
  lang,
}: {
  labels: Dictionary["contact"]["form"];
  lang: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const field = (name: string) => String(data.get(name) ?? "").trim();
    setStatus("sending");
    try {
      const response = await fetch(`${API_URL}/public/contact`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: field("name"),
          email: field("email"),
          business: field("business") || undefined,
          message: field("message"),
          locale: lang,
        }),
      });
      setStatus(response.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p role="status" className={`self-start p-10 text-center text-lg font-bold ${cardClass}`}>
        {labels.sent}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`p-6 sm:p-10 ${cardClass}`}>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={labels.name} required>
          <input name="name" required maxLength={120} autoComplete="name" className={fieldClass} />
        </Field>
        <Field label={labels.business}>
          <input name="business" maxLength={120} autoComplete="organization" className={fieldClass} />
        </Field>
        <Field label={labels.email} required className="sm:col-span-2">
          <input
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            className={fieldClass}
          />
        </Field>
        <Field label={labels.message} required className="sm:col-span-2">
          <textarea
            name="message"
            required
            rows={5}
            maxLength={4000}
            className={`${fieldClass} resize-y`}
          />
        </Field>
      </div>
      {status === "error" && (
        <p role="alert" className="mt-6 rounded-2xl bg-red-50 px-4 py-3 text-sm font-bold text-red-700">
          {labels.error}
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className={`${buttonPrimary} mt-8 w-full disabled:opacity-60`}
      >
        {labels.submit}
      </button>
      <p className="mt-4 text-center text-xs text-ink-500">{labels.hint}</p>
    </form>
  );
}

function Field({
  label,
  required,
  className = "",
  children,
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <label className={`flex flex-col gap-2 text-sm font-bold ${className}`}>
      <span>
        {label}
        {required && <span className="ml-0.5 text-brand-500">*</span>}
      </span>
      {children}
    </label>
  );
}
