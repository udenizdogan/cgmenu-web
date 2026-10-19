import { cacheLife, cacheTag } from "next/cache";
import { SERVER_API_URL } from "@/lib/site";

/** Locale code → text */
type Localized = Record<string, string>;

/** A plan as cgmenu-api serves it from GET /public/plans */
export type Plan = {
  id: string;
  name: Localized;
  description: Localized;
  features: Localized[];
  /** Minor units (kuruş) per period */
  price: number;
  currency: string;
  periodMonths: number;
  includesOrders: boolean;
  highlighted: boolean;
};

export const localized = (text: Localized, lang: string) =>
  text[lang] ?? text.tr ?? Object.values(text)[0] ?? "";

/** "4.999 TL" / "4,999 TL": the way prices are written on the site. */
export function formatPlanPrice(plan: Plan, lang: string) {
  const amount = new Intl.NumberFormat(lang, { maximumFractionDigits: 2 }).format(plan.price / 100);
  return `${amount} ${plan.currency === "TRY" ? "TL" : plan.currency}`;
}

/**
 * Plans live in the API database; the page refreshes them every few minutes.
 * A failed request (e.g. no API during the build) is cached only briefly,
 * which keeps it out of the prerendered page: it is retried per request.
 */
async function fetchPlans(): Promise<Plan[] | null> {
  "use cache";
  cacheTag("plans");
  try {
    const response = await fetch(`${SERVER_API_URL}/public/plans`, {
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error(`API responded ${response.status}`);
    const plans = (await response.json()) as Plan[];
    cacheLife({ stale: 60, revalidate: 300, expire: 86_400 });
    return plans;
  } catch (error) {
    console.error("Could not load plans:", error);
    cacheLife("seconds");
    return null;
  }
}

export const getPlans = fetchPlans;
