/**
 * Shape of a published business menu, as returned by the public API endpoint
 * `GET /public/businesses/:slug` (cgmenu-api).
 */

/** Locale code → text. Missing locales fall back to the business default. */
export type Localized = Record<string, string>;

export type Currency = {
  code: string;
  /** Units of this currency per one unit of the base currency. */
  rate: number;
};

export type Theme = {
  colors: {
    background: string;
    surface: string;
    text: string;
    muted: string;
    primary: string;
    onPrimary: string;
    border: string;
  };
  fonts: { heading: string; body: string };
  /** Google Fonts stylesheet for the fonts above, if they are not system fonts. */
  fontStylesheet?: string;
  /** Fonts uploaded by the business, declared with @font-face. */
  fontFaces?: { family: string; url: string }[];
  radius: string;
  logoUrl?: string;
  coverUrl?: string;
  /** Muted loop over the cover; coverUrl is its poster */
  coverVideoUrl?: string;
};

export type ItemTag =
  | "vegetarian"
  | "vegan"
  | "spicy"
  | "glutenFree"
  | "popular"
  | "new"
  | "chefsPick";

/** The 14 allergens food businesses must declare (EU 1169/2011, TGK) */
export type Allergen =
  | "gluten"
  | "crustaceans"
  | "eggs"
  | "fish"
  | "peanuts"
  | "soy"
  | "milk"
  | "nuts"
  | "celery"
  | "mustard"
  | "sesame"
  | "sulphites"
  | "lupin"
  | "molluscs";

/** Per portion: kcal and grams. Only the values the business entered. */
export type Nutrition = { calories?: number; protein?: number; carbs?: number; fat?: number };

export type MenuItem = {
  id: string;
  name: Localized;
  description?: Localized;
  /** Minor units (kuruş) of the base currency. */
  price: number;
  /** Portion / size options, each with its own price. */
  variants?: { name: Localized; price: number }[];
  imageUrl?: string;
  tags?: ItemTag[];
  allergens?: Allergen[];
  nutrition?: Nutrition;
  /** Also true when an item inside a combo is sold out. */
  soldOut?: boolean;
  /** Set on a combo (e.g. cake + coffee): what it is made of. */
  components?: { name: Localized; quantity: number }[];
  /** What a combo's items cost one by one, when that is more than its price. */
  regularPrice?: number;
};

export type MenuCategory = {
  id: string;
  name: Localized;
  /** Set by the business; otherwise the menu uses the first item photo. */
  imageUrl?: string;
  items: MenuItem[];
};

export type StoryBlock =
  | { type: "text"; body: Localized }
  | { type: "image"; url: string; alt: Localized }
  | { type: "video"; url: string; posterUrl?: string }
  | { type: "embed"; provider: "youtube" | "vimeo"; videoId: string; title: Localized };

export type Business = {
  slug: string;
  name: string;
  tagline?: Localized;
  defaultLocale: string;
  locales: string[];
  baseCurrency: string;
  currencies: Currency[];
  theme: Theme;
  story?: { title: Localized; blocks: StoryBlock[] };
  categories: MenuCategory[];
  feedbackEnabled: boolean;
  /** false: the business hides every price on its menu. */
  showPrices: boolean;
  /** Guests at a table (table QR) can call a waiter or ask for the bill. */
  waiterCall?: boolean;
};
