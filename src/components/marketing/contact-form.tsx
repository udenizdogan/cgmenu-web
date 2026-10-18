"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import { API_URL } from "@/lib/site";
import { buttonPrimary, cardClass } from "./ui";

const fieldClass =
  "mt-2 w-full rounded-2xl bg-ink-50 px-4 py-3.5 font-medium outline-none ring-1 ring-ink-100 transition-shadow focus:bg-white focus:ring-2 focus:ring-brand-500";

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
      <p role="status" className={`p-9 text-center text-lg font-bold ${cardClass}`}>
        {labels.sent}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-5 p-7 sm:p-9 ${cardClass}`}>
      <label className="block text-sm font-bold">
        {labels.name}
        <input name="name" required maxLength={120} autoComplete="name" className={fieldClass} />
      </label>
      <label className="block text-sm font-bold">
        {labels.email}
        <input
          name="email"
          type="email"
          required
          maxLength={254}
          autoComplete="email"
          className={fieldClass}
        />
      </label>
      <label className="block text-sm font-bold">
        {labels.business}
        <input name="business" maxLength={120} autoComplete="organization" className={fieldClass} />
      </label>
      <label className="block text-sm font-bold">
        {labels.message}
        <textarea name="message" required rows={5} maxLength={4000} className={fieldClass} />
      </label>
      {status === "error" && (
        <p role="alert" className="text-sm font-bold text-red-700">
          {labels.error}
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className={`${buttonPrimary} w-full disabled:opacity-60`}
      >
        {labels.submit}
      </button>
      <p className="text-center text-xs text-ink-500">{labels.hint}</p>
    </form>
  );
}
