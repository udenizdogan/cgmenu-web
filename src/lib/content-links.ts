import type { GuideId, SolutionId } from "@/content/slugs";
import { pageHref, routeKeys, type Locale, type RouteKey } from "@/i18n/config";
import { SITE_URL } from "@/lib/site";

export type Inline =
  | { type: "text"; text: string }
  | { type: "bold"; text: string }
  | { type: "link"; text: string; href: string; external: boolean };

/** `solution:pos` → `/cozumler/adisyon-programi`; full URLs pass through. */
export function resolveTarget(target: string, lang: Locale): string {
  const [kind, id] = target.split(":");
  if (kind === "solution") return pageHref(lang, { type: "solution", id: id as SolutionId });
  if (kind === "guide") return pageHref(lang, { type: "guide", id: id as GuideId });
  if (kind === "page" && routeKeys.includes(id as RouteKey)) {
    return pageHref(lang, { type: "route", key: id as RouteKey });
  }
  return target;
}

const TOKEN = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;

/** Splits content text into plain, bold and link runs. */
export function parseInline(text: string, lang: Locale): Inline[] {
  const parts: Inline[] = [];
  let last = 0;
  for (const match of text.matchAll(TOKEN)) {
    if (match.index > last) parts.push({ type: "text", text: text.slice(last, match.index) });
    if (match[1] !== undefined) {
      parts.push({ type: "bold", text: match[1] });
    } else {
      const href = resolveTarget(match[3], lang);
      parts.push({ type: "link", text: match[2], href, external: /^https?:/.test(href) });
    }
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push({ type: "text", text: text.slice(last) });
  return parts;
}

/** Content text as Markdown with absolute links, for llms-full.txt. */
export function toMarkdown(text: string, lang: Locale): string {
  return parseInline(text, lang)
    .map((part) =>
      part.type === "bold"
        ? `**${part.text}**`
        : part.type === "link"
          ? `[${part.text}](${part.external ? part.href : SITE_URL + part.href})`
          : part.text,
    )
    .join("");
}

/** Content text without markup, for meta tags and structured data. */
export const toPlain = (text: string, lang: Locale) =>
  parseInline(text, lang)
    .map((part) => part.text)
    .join("");
