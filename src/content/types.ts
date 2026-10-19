import type { Locale } from "@/i18n/config";
import type { GuideId, SolutionId } from "./slugs";

/**
 * Inline text may hold **bold** and [links](target). A target is a full URL,
 * `solution:<id>`, `guide:<id>` or `page:<route key>`; see lib/content-links.
 */
export type Text = string;

export type Block =
  | { type: "p"; text: Text }
  | { type: "list"; items: Text[] }
  | { type: "steps"; items: { title: string; body: Text }[] }
  | { type: "table"; head: string[]; rows: Text[][] }
  | { type: "note"; text: Text };

export type Section = { heading: string; blocks: Block[] };
export type Faq = { q: string; a: Text };

export type SolutionContent = {
  /** <title>, aimed at the search phrase */
  title: string;
  description: string;
  /** Card text on the solutions index */
  summary: string;
  eyebrow: string;
  h1: string;
  intro: Text;
  highlights: { title: string; body: string }[];
  sections: Section[];
  faq: Faq[];
};

export type Solution = {
  id: SolutionId;
  /** Plan that includes this solution; its live price is shown on the page */
  plan: "qr-menu" | "qr-menu-pos";
  related: SolutionId[];
  guides: GuideId[];
  content: Record<Locale, SolutionContent>;
};

export type GuideContent = {
  title: string;
  description: string;
  h1: string;
  /** Lead paragraph; also the short answer for search and AI summaries */
  lead: Text;
  sections: Section[];
  faq?: Faq[];
};

export type Guide = {
  id: GuideId;
  /** ISO dates */
  published: string;
  updated: string;
  solutions: SolutionId[];
  content: Record<Locale, GuideContent>;
};
