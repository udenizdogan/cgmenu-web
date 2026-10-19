import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, hasLocale, pageFromPath, routeKeys, routes } from "@/i18n/config";
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

/** Site-wide files that describe cgmenu.tr itself, not a business menu */
const MARKETING_FILES = new Set(["/sitemap.xml", "/llms.txt", "/llms-full.txt"]);

/** `isletme.cgmenu.tr/en` → `/tenant/isletme/en` */
function tenant(request: NextRequest, subdomain: string) {
  if (RESERVED_SUBDOMAINS.has(subdomain) || !SUBDOMAIN_PATTERN.test(subdomain)) {
    return notFound();
  }
  if (MARKETING_FILES.has(request.nextUrl.pathname)) return notFound();
  const url = request.nextUrl.clone();
  if (url.pathname === "/default") {
    url.pathname = "/";
    return NextResponse.redirect(url, 308);
  }
  const rest = url.pathname === "/" ? "/default" : url.pathname;
  url.pathname = `/tenant/${subdomain}${rest}`;
  return NextResponse.rewrite(url);
}

/**
 * Content pages render their shell before they know the slug is unknown, which
 * would answer 200. Unknown slugs are sent to the catch-all, a proper 404.
 */
function checkContentPath(request: NextRequest, internalPath: string) {
  const segments = internalPath.split("/").filter(Boolean);
  const isContent = segments.length === 3 && (segments[1] === "solutions" || segments[1] === "guides");
  if (!isContent || pageFromPath(internalPath)) return null;
  const url = request.nextUrl.clone();
  url.pathname = `/${segments[0]}/not-found`;
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

  if (first && hasLocale(first)) {
    return checkContentPath(request, url.pathname) ?? NextResponse.next();
  }

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
  return checkContentPath(request, url.pathname) ?? NextResponse.rewrite(url);
}

export function proxy(request: NextRequest) {
  const host = (request.headers.get("host") ?? "").split(":")[0].toLowerCase();
  const subdomain = subdomainOf(host);
  if (subdomain) return tenant(request, subdomain);
  // Files such as /llms.txt are served as they are on the main site
  if (MARKETING_FILES.has(request.nextUrl.pathname)) return NextResponse.next();
  return marketing(request);
}

export const config = {
  // Skip Next internals, route handlers and anything that looks like a file
  matcher: ["/((?!_next/|api/|.*\\..*).*)", "/sitemap.xml", "/llms.txt", "/llms-full.txt"],
};
