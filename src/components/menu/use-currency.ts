"use client";

import { useSyncExternalStore } from "react";
import type { Currency } from "@/lib/tenant/types";

const KEY = "cgmenu:currency";
const EVENT = "cgmenu:currency";

// Used when localStorage is unavailable (private mode, blocked site data).
let memory: string | null = null;

function read(): string | null {
  try {
    return localStorage.getItem(KEY) ?? memory;
  } catch {
    return memory;
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(EVENT, onChange);
  };
}

/** The guest's chosen display currency, remembered across visits. */
export function useCurrency(currencies: Currency[], baseCode: string) {
  const stored = useSyncExternalStore(subscribe, read, () => null);
  const currency =
    currencies.find((c) => c.code === stored) ??
    currencies.find((c) => c.code === baseCode) ??
    currencies[0];

  function setCurrency(code: string) {
    memory = code;
    try {
      localStorage.setItem(KEY, code);
    } catch {
      // keep the in-memory choice
    }
    window.dispatchEvent(new Event(EVENT));
  }

  return [currency, setCurrency] as const;
}
