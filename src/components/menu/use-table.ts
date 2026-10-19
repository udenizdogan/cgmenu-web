"use client";

import { useEffect, useState } from "react";

/** Table QR tokens; anything else in `?t` is an old, free-text table number. */
const TOKEN = /^[A-Za-z0-9_-]{16}$/;

export type GuestTable =
  | { kind: "token"; token: string; label: string; section: string }
  | { kind: "legacy"; label: string };

const storageKey = (slug: string) => `cgmenu:table:${slug}`;

function remembered(slug: string): GuestTable | null {
  try {
    const value = sessionStorage.getItem(storageKey(slug));
    return value ? (JSON.parse(value) as GuestTable) : null;
  } catch {
    return null;
  }
}

/**
 * The table the guest sits at, from the table QR code (`?t=…`). Menu pages are
 * cached per business, so the token is resolved here in the browser. The
 * result is kept for the tab's session so it survives in-menu navigation.
 */
export function useTable(slug: string, tablesUrl?: string) {
  const [table, setTable] = useState<GuestTable | null>(null);

  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get("t")?.trim();
    const store = (value: GuestTable) => {
      setTable(value);
      try {
        sessionStorage.setItem(storageKey(slug), JSON.stringify(value));
      } catch {
        // the table is still known until the page is left
      }
    };

    if (!t) {
      const saved = remembered(slug);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- sessionStorage is only readable in the browser
      if (saved) setTable(saved);
      return;
    }
    if (!TOKEN.test(t) || !tablesUrl) {
      store({ kind: "legacy", label: t.slice(0, 20) });
      return;
    }
    const saved = remembered(slug);
    if (saved?.kind === "token" && saved.token === t) {
      setTable(saved);
      return;
    }
    const controller = new AbortController();
    fetch(`${tablesUrl}/${t}`, { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((body: { label: string; section: string } | null) => {
        if (body) store({ kind: "token", token: t, label: body.label, section: body.section });
      })
      .catch(() => undefined);
    return () => controller.abort();
  }, [slug, tablesUrl]);

  return table;
}

export const tableName = (table: GuestTable) =>
  table.kind === "token" ? `${table.section} ${table.label}` : table.label;
