"use client";

import { useEffect, useRef, useState } from "react";
import type { MenuStrings } from "@/lib/tenant/ui-strings";
import { tableName, type GuestTable } from "./use-table";

type CallType = "WAITER" | "BILL";
/** A guest can repeat a request after this long */
const COOLDOWN_MS = 60_000;

/**
 * "Call a waiter" and "bring the bill" for the guest's table. Posts to the API
 * when `endpoint` is given; the sample menu only shows the confirmation.
 */
export function WaiterCall({
  strings,
  table,
  endpoint,
}: {
  strings: MenuStrings;
  table: GuestTable;
  endpoint?: string;
}) {
  const t = strings.call;
  const [waiting, setWaiting] = useState<Partial<Record<CallType, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  async function call(type: CallType) {
    setStatus("sending");
    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ type }),
        });
        if (!response.ok) throw new Error(String(response.status));
      }
      setWaiting((current) => ({ ...current, [type]: true }));
      timers.current.push(
        setTimeout(() => setWaiting((current) => ({ ...current, [type]: false })), COOLDOWN_MS),
      );
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="space-y-5">
      <div className="pe-10">
        <h2 className="font-menu-heading text-2xl font-bold">{t.title}</h2>
        <p className="mt-1 text-sm text-menu-muted">{t.table(tableName(table))}</p>
      </div>
      <div className="grid gap-3">
        {(["WAITER", "BILL"] as const).map((type) => (
          <button
            key={type}
            type="button"
            disabled={status === "sending" || waiting[type]}
            onClick={() => call(type)}
            className="rounded-menu bg-menu-primary px-5 py-4 text-start font-semibold text-menu-on-primary transition-opacity disabled:opacity-60"
          >
            <span className="block text-lg">{type === "WAITER" ? t.waiter : t.bill}</span>
            <span className="block text-sm font-normal opacity-90" role="status">
              {waiting[type] ? t.sent : type === "WAITER" ? t.waiterHint : t.billHint}
            </span>
          </button>
        ))}
      </div>
      {status === "error" && (
        <p role="alert" className="text-sm text-menu-muted">
          {t.error}
        </p>
      )}
      {!endpoint && <p className="text-sm text-menu-muted">{strings.feedback.demoNote}</p>}
    </div>
  );
}
