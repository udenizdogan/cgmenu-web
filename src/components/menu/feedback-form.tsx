"use client";

import { useState, type FormEvent } from "react";
import type { MenuStrings } from "@/lib/tenant/ui-strings";
import type { GuestTable } from "./use-table";

const fieldClass =
  "mt-1.5 w-full rounded-menu border border-menu-border bg-menu-bg px-3.5 py-2.5 outline-none focus:border-menu-primary";

/**
 * Guest feedback form. Posts to the API when `endpoint` is given; the sample
 * menu has none and only shows the thank-you state.
 */
export function FeedbackForm({
  strings,
  locale,
  endpoint,
  table,
}: {
  strings: MenuStrings;
  locale: string;
  endpoint?: string;
  table?: GuestTable | null;
}) {
  const t = strings.feedback;
  const [rating, setRating] = useState(0);
  const [contact, setContact] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const sent = status === "sent";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!endpoint) return setStatus("sent");

    const data = new FormData(event.currentTarget);
    const field = (name: string) => String(data.get(name) ?? "").trim() || undefined;
    setStatus("sending");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          rating,
          comment: field("comment"),
          name: field("name"),
          contact: field("contact"),
          consent: data.get("consent") === "on" || undefined,
          // Table QR codes carry a table token; older prints a table number (?t=12)
          ...(table?.kind === "token"
            ? { tableToken: table.token }
            : { tableNo: table?.label }),
          locale,
        }),
      });
      setStatus(response.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (sent) {
    return (
      <div className="py-8 text-center" role="status">
        <p className="font-menu-heading text-2xl font-bold">{t.thanks}</p>
        {!endpoint && <p className="mt-3 text-sm text-menu-muted">{t.demoNote}</p>}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="pe-10 font-menu-heading text-2xl font-bold">{t.title}</h2>

      <fieldset>
        <legend className="text-sm font-medium">{t.rating}</legend>
        <div className="mt-2 flex gap-1.5">
          {[1, 2, 3, 4, 5].map((value) => (
            <label key={value} className="cursor-pointer">
              <input
                type="radio"
                name="rating"
                value={value}
                required
                checked={rating === value}
                onChange={() => setRating(value)}
                className="peer sr-only"
              />
              <span className="sr-only">{t.stars(value)}</span>
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className={`size-10 rounded-md peer-focus-visible:outline-2 peer-focus-visible:outline-menu-primary ${
                  value <= rating ? "text-menu-primary" : "text-menu-border"
                }`}
                fill="currentColor"
              >
                <path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.500L12 17.400 6.100 20.500l1.200-6.500L2.500 9.400l6.600-.900L12 2.500Z" />
              </svg>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="block text-sm font-medium">
        {t.comment}
        <textarea name="comment" rows={4} maxLength={2000} className={fieldClass} />
      </label>
      <label className="block text-sm font-medium">
        {t.name}
        <input name="name" autoComplete="name" maxLength={120} className={fieldClass} />
      </label>
      <label className="block text-sm font-medium">
        {t.contact}
        <input
          name="contact"
          value={contact}
          onChange={(event) => setContact(event.target.value)}
          maxLength={200}
          className={fieldClass}
        />
      </label>
      {contact.trim() !== "" && (
        <label className="flex gap-2.5 text-sm text-menu-muted">
          <input type="checkbox" name="consent" required className="mt-1 size-4 shrink-0" />
          {t.consent}
        </label>
      )}

      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-red-700">
          {t.error}
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-menu bg-menu-primary px-5 py-3 font-semibold text-menu-on-primary disabled:opacity-60"
      >
        {t.submit}
      </button>
      {!endpoint && <p className="text-center text-xs text-menu-muted">{t.demoNote}</p>}
    </form>
  );
}
