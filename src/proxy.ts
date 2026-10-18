import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, hasLocale, routeKeys, routes } from "@/i18n/config";
import {
  RESERVED_SUBDOMAINS,
  ROOT_DOMAIN,
  SUBDOMAIN_PATTERN,
} from "@/lib/site";

const notFound = () => new NextResponse(null, { status: 404 });

function subdomainOf(host: string): string | null {
  if (host === ROOT_DOMAIN || host === `www.${ROOT_DOMAIN}`) return null;
  if (!host.endsWith(`.${ROOT_DOMAIN}`)) return null;
  return host.slice(0, -(ROOT_DOMAIN.length + 1));
}

/** `isletme.cgmenu.tr/en` → `/tenant/isletme/en` */
function tenant(request: NextRequest, subdomain: string) {
  if (RESERVED_SUBDOMAINS.has(subdomain) || !SUBDOMAIN_PATTERN.test(subdomain)) {
    return notFound();
  }
  const url = request.nextUrl.clone();
  if (url.pathname === "/default") {
    url.pathname = "/";
    return NextResponse.redirect(url, 308);
  }
  const rest = url.pathname === "/" ? "/default" : url.pathname;
  url.pathname = `/tenant/${subdomain}${rest}`;
  return NextResponse.rewrite(url);
}

/** `/ozellikler` → `/tr/features`; `/en/features` passes through. */
function marketing(request: NextRequest) {
  const url = request.nextUrl.clone();
  const segments = url.pathname.split("/").filter(Boolean);
  const [first] = segments;

  if (first === defaultLocale) {
    // The default locale has no prefix: /tr/features → /ozellikler
    const key = routeKeys.find((k) => k === segments[1]);
    if (key) segments[1] = routes[key][defaultLocale];
    url.pathname = `/${segments.slice(1).filter(Boolean).join("/")}`;
    return NextResponse.redirect(url, 308);
  }

  if (first && hasLocale(first)) return NextResponse.next();

  if (first) {
    const bySlug = routeKeys.find((k) => routes[k][defaultLocale] === first);
    if (bySlug) {
      segments[0] = bySlug;
    } else {
      // Internal folder name used directly: /features → /ozellikler
      const byKey = routeKeys.find((k) => k === first);
      if (byKey && byKey !== "home") {
        segments[0] = routes[byKey][defaultLocale];
        url.pathname = `/${segments.join("/")}`;
        return NextResponse.redirect(url, 308);
      }
    }
  }

  url.pathname = `/${[defaultLocale, ...segments].join("/")}`;
  return NextResponse.rewrite(url);
}

export function proxy(request: NextRequest) {
  const host = (request.headers.get("host") ?? "").split(":")[0].toLowerCase();
  const subdomain = subdomainOf(host);
  return subdomain ? tenant(request, subdomain) : marketing(request);
}

export const config = {
  // Skip Next internals, route handlers and anything that looks like a file
  matcher: ["/((?!_next/|api/|.*\\..*).*)"],
};
