import { timingSafeEqual } from "node:crypto";
import { revalidateTag } from "next/cache";
import { businessTag } from "@/lib/tenant/get-business";

function authorized(request: Request) {
  const expected = process.env.REVALIDATE_SECRET ?? "";
  const given = request.headers.get("x-revalidate-secret") ?? "";
  if (expected === "") return process.env.NODE_ENV !== "production";
  const a = Buffer.from(expected);
  const b = Buffer.from(given);
  return a.length === b.length && timingSafeEqual(a, b);
}

/** Called by cgmenu-api after a business changes, so its menu is re-fetched. */
export async function POST(request: Request) {
  if (!authorized(request)) return new Response(null, { status: 401 });

  const body = (await request.json().catch(() => null)) as { slug?: unknown } | null;
  if (typeof body?.slug !== "string" || !/^[a-z0-9-]{1,63}$/.test(body.slug)) {
    return new Response(null, { status: 400 });
  }
  // expire: 0 → the owner sees the change on the very next visit
  revalidateTag(businessTag(body.slug), { expire: 0 });
  return Response.json({ revalidated: body.slug });
}
