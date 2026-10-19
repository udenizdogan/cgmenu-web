import { cacheLife, cacheTag } from "next/cache";
import { SERVER_API_URL } from "@/lib/site";
import { demoBusiness } from "./demo-data";
import type { Business } from "./types";

/** Sentinel locale segment the proxy uses for a tenant's root path. */
export const DEFAULT_LOCALE_SEGMENT = "default";

/** The sample menu is bundled with the site and never hits the API. */
export const isDemo = (slug: string) => slug === demoBusiness.slug;

export const businessTag = (slug: string) => `business:${slug}`;

/**
 * Cached per business. The API calls POST /api/revalidate after every change,
 * and the entry also refreshes on its own every few minutes as a safety net.
 * "Not found" is cached too, so unknown subdomains do not hammer the API.
 */
async function fetchBusiness(slug: string): Promise<Business | null> {
  "use cache";
  cacheTag(businessTag(slug));
  cacheLife({ stale: 60, revalidate: 300, expire: 86_400 });

  const response = await fetch(
    `${SERVER_API_URL}/public/businesses/${encodeURIComponent(slug)}`,
    { signal: AbortSignal.timeout(8000) },
  );
  if (response.status === 404) return null;
  if (!response.ok) throw new Error(`API responded ${response.status} for ${slug}`);
  return (await response.json()) as Business;
}

/** Looks up a published business by subdomain. */
export async function getBusiness(slug: string): Promise<Business | null> {
  if (isDemo(slug)) return demoBusiness;
  try {
    return await fetchBusiness(slug);
  } catch (error) {
    // API unreachable: a failure is not cached, so the next request retries
    console.error(`Could not load business "${slug}":`, error);
    return null;
  }
}
