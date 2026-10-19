import type { Locale } from "@/i18n/config";
import { allergens } from "./guides/allergens";
import { choosePos } from "./guides/choose-pos";
import { createQrMenu } from "./guides/create-qr-menu";
import { kitchenDisplayVsPrinter } from "./guides/kitchen-display-vs-printer";
import { multilingualMenu } from "./guides/multilingual-menu";
import { whatIsQrMenu } from "./guides/what-is-qr-menu";
import { guideSlugs, solutionSlugs, type GuideId, type SolutionId } from "./slugs";
import { cafe } from "./solutions/cafe";
import { hotel } from "./solutions/hotel";
import { kitchenDisplay } from "./solutions/kitchen-display";
import { pos } from "./solutions/pos";
import { qrMenu } from "./solutions/qr-menu";
import { restaurantManagement } from "./solutions/restaurant-management";
import { waiterOrdering } from "./solutions/waiter-ordering";
import type { Guide, Solution } from "./types";

/** In the order they are listed: products first, then business types. */
export const solutions: Solution[] = [
  qrMenu,
  restaurantManagement,
  pos,
  kitchenDisplay,
  waiterOrdering,
  cafe,
  hotel,
];

/** Newest first once dates differ; otherwise in reading order. */
export const guides: Guide[] = [
  whatIsQrMenu,
  createQrMenu,
  choosePos,
  kitchenDisplayVsPrinter,
  multilingualMenu,
  allergens,
].sort((a, b) => b.published.localeCompare(a.published));

export const getSolution = (id: SolutionId) => solutions.find((s) => s.id === id)!;
export const getGuide = (id: GuideId) => guides.find((g) => g.id === id)!;

export const solutionBySlug = (lang: Locale, slug: string) =>
  solutions.find((s) => solutionSlugs[s.id][lang] === slug);
export const guideBySlug = (lang: Locale, slug: string) =>
  guides.find((g) => guideSlugs[g.id][lang] === slug);

/** Rough reading time at 200 words per minute. */
export function readingMinutes(guide: Guide, lang: Locale) {
  const content = guide.content[lang];
  const text = JSON.stringify([content.lead, content.sections, content.faq ?? []]);
  return Math.max(1, Math.round(text.split(/\s+/).length / 200));
}
