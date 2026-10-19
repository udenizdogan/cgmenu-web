/**
 * Public slugs of the content pages, per locale. Kept apart from the content
 * itself so the proxy and the client-side language switch stay small.
 */

export const solutionSlugs = {
  "qr-menu": { tr: "qr-menu", en: "qr-menu" },
  "restaurant-management": {
    tr: "restoran-yonetim-sistemi",
    en: "restaurant-management-system",
  },
  pos: { tr: "adisyon-programi", en: "restaurant-pos-software" },
  "kitchen-display": { tr: "mutfak-ekrani", en: "kitchen-display-system" },
  "waiter-ordering": { tr: "garson-siparis-sistemi", en: "waiter-ordering-system" },
  cafe: { tr: "kafe-icin-qr-menu-ve-adisyon", en: "cafe-qr-menu-and-pos" },
  hotel: { tr: "otel-icin-qr-menu", en: "hotel-qr-menu" },
} as const;

export const guideSlugs = {
  "what-is-qr-menu": { tr: "qr-menu-nedir", en: "what-is-a-qr-menu" },
  "create-qr-menu": { tr: "qr-menu-nasil-yapilir", en: "how-to-create-a-qr-menu" },
  "choose-pos": {
    tr: "adisyon-programi-nasil-secilir",
    en: "how-to-choose-restaurant-pos-software",
  },
  allergens: { tr: "menude-alerjen-bilgisi", en: "allergen-information-on-menus" },
  "multilingual-menu": { tr: "turistler-icin-cok-dilli-menu", en: "multilingual-menu-for-tourists" },
  "kitchen-display-vs-printer": {
    tr: "mutfak-ekrani-mi-mutfak-yazicisi-mi",
    en: "kitchen-display-vs-kitchen-printer",
  },
} as const;

export type SolutionId = keyof typeof solutionSlugs;
export type GuideId = keyof typeof guideSlugs;

export const solutionIds = Object.keys(solutionSlugs) as SolutionId[];
export const guideIds = Object.keys(guideSlugs) as GuideId[];
