"use client";

/* eslint-disable @next/next/no-img-element -- business media comes from arbitrary origins and is pre-sized by the API */

import { useEffect, useState, useSyncExternalStore, type ReactNode } from "react";
import { formatPrice, pick } from "@/lib/tenant/format";
import type {
  Business,
  ItemTag,
  MenuCategory,
  MenuItem,
  Nutrition,
  StoryBlock,
} from "@/lib/tenant/types";
import { getMenuStrings, type MenuStrings } from "@/lib/tenant/ui-strings";
import { FeedbackForm } from "./feedback-form";
import { Sheet } from "./sheet";
import { useTable } from "./use-table";
import { WaiterCall } from "./waiter-call";
import { useCurrency } from "./use-currency";

const languageName = (locale: string) => {
  const name = new Intl.DisplayNames([locale], { type: "language" }).of(locale);
  return name ? name.charAt(0).toLocaleUpperCase(locale) + name.slice(1) : locale;
};

/**
 * The menu is one page with app-like screens. The screen lives in the URL
 * hash so the phone's back gesture steps through screens instead of leaving.
 */
type Screen =
  | { name: "home" }
  | { name: "menu" }
  | { name: "about" }
  | { name: "category"; category: MenuCategory };

const CATEGORY_PREFIX = "#c-";
const categoryHref = (category: MenuCategory) => `${CATEGORY_PREFIX}${category.id}`;

function subscribeToHash(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

function useScreen(business: Business): Screen {
  const hash = useSyncExternalStore(
    subscribeToHash,
    () => window.location.hash,
    () => "",
  );
  if (hash === "#menu") return { name: "menu" };
  if (hash === "#about" && business.story) return { name: "about" };
  if (hash.startsWith(CATEGORY_PREFIX)) {
    const id = decodeURIComponent(hash.slice(CATEGORY_PREFIX.length));
    const category = business.categories.find((c) => c.id === id);
    if (category) return { name: "category", category };
  }
  return { name: "home" };
}

const categoryImage = (category: MenuCategory) =>
  category.imageUrl ?? category.items.find((item) => item.imageUrl)?.imageUrl;

/**
 * Fixed tints so tags read the same on every theme. `accent` colours the icon
 * of the badges laid over photos.
 */
const tagStyles: Record<ItemTag, { icon: string; className: string; accent: string }> = {
  vegetarian: {
    icon: "M5 19c0-8 5-13 14-14-1 9-6 14-14 14Zm0 0 7-7",
    className: "bg-emerald-50 text-emerald-700",
    accent: "text-emerald-600",
  },
  vegan: {
    icon: "M12 20v-8m0 0C12 8 9 6 5 6c0 4 3 6 7 6Zm0 0c0-4 3-7 7-7 0 4-3 7-7 7Z",
    className: "bg-green-50 text-green-700",
    accent: "text-green-600",
  },
  spicy: {
    icon: "M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-9Z",
    className: "bg-red-50 text-red-700",
    accent: "text-red-600",
  },
  glutenFree: {
    icon: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM5.6 5.6l12.8 12.8",
    className: "bg-amber-50 text-amber-800",
    accent: "text-amber-600",
  },
  popular: {
    icon: "m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9Z",
    className: "bg-menu-primary/10 text-menu-primary",
    accent: "text-amber-500",
  },
  new: {
    icon: "m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Zm6 12 .8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8L18 15Z",
    className: "bg-sky-50 text-sky-700",
    accent: "text-sky-500",
  },
  chefsPick: {
    icon: "M8 21h8m-8-4h8v4H8v-4Zm0 0v-5a4 4 0 1 1 1.6-7.7 3 3 0 0 1 4.8 0A4 4 0 1 1 16 12v5",
    className: "bg-orange-50 text-orange-700",
    accent: "text-orange-500",
  },
};

/** Tags worth calling out on a photo, most newsworthy first. */
const BADGE_TAGS: ItemTag[] = ["new", "chefsPick", "popular"];

/** Energy per gram, for the macro split bar. */
const MACROS = [
  { key: "protein", kcal: 4, className: "bg-emerald-500" },
  { key: "carbs", kcal: 4, className: "bg-amber-400" },
  { key: "fat", kcal: 9, className: "bg-rose-400" },
] as const;

export function MenuView({
  business,
  locale,
  marketingUrl,
  feedbackUrl,
  tablesUrl,
}: {
  business: Business;
  locale: string;
  marketingUrl: string;
  /** Where guest feedback is posted; omitted for the sample menu. */
  feedbackUrl?: string;
  /** Base of the public table endpoints (`…/tables`); omitted for the sample menu. */
  tablesUrl?: string;
}) {
  const strings = getMenuStrings(locale);
  const text = (value: Parameters<typeof pick>[0]) =>
    pick(value, locale, business.defaultLocale);

  const [currency, setCurrency] = useCurrency(
    business.currencies,
    business.baseCurrency,
  );
  const screen = useScreen(business);
  const [query, setQuery] = useState("");
  const [openItem, setOpenItem] = useState<MenuItem | null>(null);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [callOpen, setCallOpen] = useState(false);
  const table = useTable(business.slug, tablesUrl);
  const canCall = business.waiterCall === true && table?.kind === "token";

  const screenKey =
    screen.name === "category" ? categoryHref(screen.category) : screen.name;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [screenKey]);

  function changeLocale(next: string) {
    const path = next === business.defaultLocale ? "/" : `/${next}`;
    window.location.assign(path + window.location.search + window.location.hash);
  }

  const { showPrices } = business;
  const price = (item: MenuItem) => formatPrice(item.price, currency, locale);
  const regularPrice = (item: MenuItem) =>
    item.regularPrice ? formatPrice(item.regularPrice, currency, locale) : undefined;
  /** "Cake + 2× Coffee" */
  const contents = (item: MenuItem) =>
    item.components
      ?.map((part) => `${part.quantity > 1 ? `${part.quantity}× ` : ""}${text(part.name)}`)
      .join(" + ") ?? "";
  const number = (value: number) => value.toLocaleString(locale, { maximumFractionDigits: 1 });
  const calories = (nutrition: Nutrition | undefined) =>
    nutrition?.calories !== undefined ? `${number(nutrition.calories)} kcal` : undefined;
  const { theme, categories } = business;

  const allItems = categories.flatMap((category) =>
    category.items.map((item) => ({ item, category })),
  );
  const tagged = allItems.filter(({ item }) => item.tags?.includes("popular"));
  const popular = tagged.length > 0 ? tagged : allItems.slice(0, 6);
  const openCategory = openItem
    ? allItems.find(({ item }) => item.id === openItem.id)?.category
    : undefined;
  const similar =
    openCategory?.items.filter((item) => item.id !== openItem?.id && !item.soldOut) ?? [];

  const needle = query.trim().toLocaleLowerCase(locale);
  const results = needle
    ? allItems.filter(({ item }) =>
        `${text(item.name)} ${text(item.description)} ${contents(item)}`
          .toLocaleLowerCase(locale)
          .includes(needle),
      )
    : [];

  const title =
    screen.name === "category"
      ? text(screen.category.name)
      : screen.name === "menu"
        ? strings.nav.menu
        : screen.name === "about" && business.story
          ? text(business.story.title)
          : business.name;

  const pickers = (glass: boolean) => (
    <>
      {business.locales.length > 1 && (
        <Picker
          glass={glass}
          label={strings.language}
          value={locale}
          onChange={changeLocale}
          options={business.locales.map((code) => [code, languageName(code)])}
        />
      )}
      {showPrices && business.currencies.length > 1 && (
        <Picker
          glass={glass}
          label={strings.currency}
          value={currency.code}
          onChange={setCurrency}
          options={business.currencies.map(({ code }) => [code, code])}
        />
      )}
    </>
  );

  const list = (items: MenuItem[]) => (
    <ul className="divide-y divide-menu-border overflow-hidden rounded-menu border border-menu-border bg-menu-surface shadow-[0_10px_30px_-24px_rgba(0,0,0,0.45)]">
      {items.map((item) => (
        <li key={item.id}>
          <ItemRow
            item={item}
            name={text(item.name)}
            description={text(item.description) || contents(item)}
            price={showPrices ? price(item) : undefined}
            regularPrice={showPrices ? regularPrice(item) : undefined}
            calories={calories(item.nutrition)}
            strings={strings}
            onOpen={() => setOpenItem(item)}
          />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="min-h-dvh bg-menu-bg font-menu-body text-menu-text">
      <div className="mx-auto min-h-dvh max-w-xl pb-32">
        {screen.name !== "home" && (
          <header className="sticky top-0 z-20 flex h-[68px] items-center gap-3 bg-menu-bg/90 px-5 backdrop-blur-xl">
            <a
              href={screen.name === "category" ? "#menu" : "#"}
              aria-label={strings.back}
              className="grid size-10 shrink-0 place-items-center rounded-full border border-menu-border bg-menu-surface shadow-sm"
            >
              <Icon d="M19 12H5m6-6-6 6 6 6" className="size-5 rtl:-scale-x-100" />
            </a>
            <h1 className="min-w-0 flex-1 truncate font-menu-heading text-lg font-bold">
              {title}
            </h1>
            {pickers(false)}
          </header>
        )}

        <main>
          {/* Every screen stays in the document so the whole menu is indexable */}
          <div hidden={screen.name !== "home"}>
            <section className="relative isolate flex h-[58svh] min-h-[400px] max-h-[600px] flex-col overflow-hidden bg-menu-primary text-white">
              {theme.coverUrl && (
                <img
                  src={theme.coverUrl}
                  alt=""
                  fetchPriority="high"
                  className="absolute inset-0 -z-10 size-full object-cover"
                />
              )}
              {theme.coverVideoUrl && (
                // Decorative and silent; the cover photo stays for reduced motion
                <video
                  src={theme.coverVideoUrl}
                  poster={theme.coverUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-hidden
                  className="absolute inset-0 -z-10 size-full object-cover motion-reduce:hidden"
                />
              )}
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/45 via-black/25 to-black/70" />
              <div className="flex justify-end gap-2 p-4">{pickers(true)}</div>
              <div className="flex flex-1 flex-col items-center justify-center px-6 pb-12 text-center">
                {theme.logoUrl ? (
                  <img
                    src={theme.logoUrl}
                    alt=""
                    className="size-24 rounded-full border-2 border-white/40 bg-white object-cover shadow-[0_16px_40px_-12px_rgba(0,0,0,0.6)]"
                  />
                ) : (
                  <span
                    aria-hidden
                    className="grid size-24 place-items-center rounded-full border-2 border-white/40 bg-white/15 font-menu-heading text-4xl font-bold shadow-[0_16px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur-md"
                  >
                    {business.name.charAt(0)}
                  </span>
                )}
                <h1 className="mt-5 font-menu-heading text-3xl font-bold leading-tight [text-shadow:0_2px_16px_rgba(0,0,0,0.35)]">
                  {business.name}
                </h1>
                {business.tagline && (
                  <p className="mt-1.5 text-sm text-white/85">{text(business.tagline)}</p>
                )}
              </div>
            </section>

            <div className="relative -mt-8 rounded-t-[2rem] bg-menu-bg px-5 pt-7">
              <p className="font-menu-heading text-xl font-bold">{strings.welcome}</p>
              <label className="relative mt-4 block">
                <span className="sr-only">{strings.search}</span>
                <Icon
                  d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm9 16-4-4"
                  className="pointer-events-none absolute start-4 top-1/2 size-5 -translate-y-1/2 text-menu-muted"
                />
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={strings.search}
                  className="w-full rounded-full border border-menu-border bg-menu-surface py-3.5 pe-4 ps-12 text-sm shadow-[0_8px_24px_-18px_rgba(0,0,0,0.5)] outline-none placeholder:text-menu-muted focus:border-menu-primary"
                />
              </label>

              {needle ? (
                results.length > 0 ? (
                  <div className="mt-5">{list(results.map(({ item }) => item))}</div>
                ) : (
                  <p className="py-16 text-center text-sm text-menu-muted">
                    {strings.noResults}
                  </p>
                )
              ) : (
                <>
                  <SectionTitle
                    title={strings.categories}
                    action={{ href: "#menu", label: strings.seeAll }}
                  />
                  <ul className="grid grid-cols-2 gap-3">
                    {categories.map((category, index) => {
                      // An odd last tile spans the row instead of leaving a gap
                      const full = index === categories.length - 1 && index % 2 === 0;
                      return (
                        <li key={category.id} className={full ? "col-span-2" : undefined}>
                          <CategoryTile
                            href={categoryHref(category)}
                            image={categoryImage(category)}
                            name={text(category.name)}
                            count={strings.itemCount(category.items.length)}
                            className={full ? "aspect-[2/1]" : "aspect-[4/3]"}
                          />
                        </li>
                      );
                    })}
                  </ul>

                  <SectionTitle title={strings.popular} />
                  <Carousel>
                    {popular.map(({ item, category }) => (
                      <ProductCard
                        key={item.id}
                        item={item}
                        name={text(item.name)}
                        subtitle={text(category.name)}
                        price={showPrices ? price(item) : undefined}
                        calories={calories(item.nutrition)}
                        strings={strings}
                        onOpen={() => setOpenItem(item)}
                      />
                    ))}
                  </Carousel>
                </>
              )}
            </div>
          </div>

          <div hidden={screen.name !== "menu"} className="px-5">
            <ul className="mt-1 space-y-3">
              {categories.map((category) => (
                <li key={category.id}>
                  <CategoryTile
                    href={categoryHref(category)}
                    image={categoryImage(category)}
                    name={text(category.name)}
                    count={strings.itemCount(category.items.length)}
                    className="h-32"
                    wide
                  />
                </li>
              ))}
            </ul>
          </div>

          <div hidden={screen.name !== "category"}>
            <nav
              aria-label={strings.categories}
              className="no-scrollbar sticky top-[68px] z-10 flex gap-2 overflow-x-auto bg-menu-bg/90 px-5 pb-3 backdrop-blur-xl"
            >
              {categories.map((category) => {
                const active =
                  screen.name === "category" && screen.category.id === category.id;
                return (
                  <a
                    key={category.id}
                    href={categoryHref(category)}
                    aria-current={active ? "true" : undefined}
                    className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                      active
                        ? "bg-menu-primary text-menu-on-primary shadow-[0_8px_20px_-12px_var(--m-primary)]"
                        : "border border-menu-border bg-menu-surface text-menu-muted"
                    }`}
                  >
                    {text(category.name)}
                  </a>
                );
              })}
            </nav>
            {categories.map((category) => {
              const image = categoryImage(category);
              return (
                <section
                  key={category.id}
                  aria-label={text(category.name)}
                  hidden={screen.name !== "category" || screen.category.id !== category.id}
                  className="px-5"
                >
                  <div className="relative isolate mt-1 flex h-44 items-end overflow-hidden rounded-menu bg-menu-primary p-5 pb-12 text-white">
                    {image && (
                      // Category screens start hidden; lazy keeps their banners off the first load
                      <img
                        src={image}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 -z-10 size-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/30 to-black/5" />
                    <div>
                      <h2 className="font-menu-heading text-2xl font-bold leading-tight">
                        {text(category.name)}
                      </h2>
                      <p className="mt-0.5 text-sm text-white/80">
                        {strings.itemCount(category.items.length)}
                      </p>
                    </div>
                  </div>
                  <div className="relative -mt-8 px-2.5">{list(category.items)}</div>
                </section>
              );
            })}
          </div>

          {business.story && (
            <div hidden={screen.name !== "about"} className="space-y-4 px-5 pt-1">
              {business.story.blocks.map((block, index) => (
                <Story key={index} block={block} text={text} />
              ))}
            </div>
          )}

          <p className="px-5 pt-10 text-center text-xs text-menu-muted">
            <a href={marketingUrl} className="underline">
              {strings.poweredBy}
            </a>
          </p>
        </main>
      </div>

      <nav className="pointer-events-none fixed inset-x-0 bottom-0 z-30 px-4 pb-[max(env(safe-area-inset-bottom),0.875rem)]">
        <div className="pointer-events-auto mx-auto flex max-w-md gap-1 rounded-full border border-menu-border bg-menu-surface/90 p-1.5 shadow-[0_16px_40px_-14px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <Tab
            href="#"
            label={strings.nav.home}
            active={screen.name === "home"}
            icon="M4 11.5 12 4l8 7.5V20h-5v-5h-6v5H4v-8.5Z"
          />
          <Tab
            href="#menu"
            label={strings.nav.menu}
            active={screen.name === "menu" || screen.name === "category"}
            icon="M6 3h12v18H6zM9 8h6M9 12h6M9 16h4"
          />
          {business.story && (
            <Tab
              href="#about"
              label={strings.nav.about}
              active={screen.name === "about"}
              icon="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-10v6m0-9.5v.5"
            />
          )}
          {canCall && (
            <Tab
              label={strings.call.open}
              onClick={() => setCallOpen(true)}
              icon="M6 16V11a6 6 0 0 1 12 0v5l2 2H4l2-2ZM10 20a2 2 0 0 0 4 0"
            />
          )}
          {business.feedbackEnabled && (
            <Tab
              label={strings.feedback.open}
              onClick={() => setFeedbackOpen(true)}
              icon="M4 5h16v11H9l-5 4V5Z"
            />
          )}
        </div>
      </nav>

      <Sheet
        open={openItem !== null}
        onClose={() => setOpenItem(null)}
        label={openItem ? text(openItem.name) : ""}
        closeLabel={strings.close}
        flush
      >
        {openItem && (
          <>
            <Thumb
              src={openItem.imageUrl}
              label={text(openItem.name)}
              className="aspect-[4/3] w-full"
            />
            <div className="relative -mt-7 rounded-t-[1.75rem] bg-menu-surface px-6 pb-8 pt-3">
              <span aria-hidden className="mx-auto mb-5 block h-1 w-10 rounded-full bg-menu-border" />
              {openCategory && (
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-menu-primary">
                  {text(openCategory.name)}
                </p>
              )}
              <div className="mt-1.5 flex items-start justify-between gap-4">
                <h2 className="font-menu-heading text-2xl font-bold leading-tight">
                  {text(openItem.name)}
                </h2>
                {showPrices && (
                  <div className="flex shrink-0 flex-col items-end gap-1">
                    <p className="rounded-full bg-menu-primary px-4 py-1.5 text-lg font-bold text-menu-on-primary">
                      {price(openItem)}
                    </p>
                    {openItem.regularPrice && (
                      <p className="pe-2 text-sm text-menu-muted">
                        <span className="sr-only">{strings.regularPrice}: </span>
                        <s>{regularPrice(openItem)}</s>
                      </p>
                    )}
                  </div>
                )}
              </div>
              {openItem.soldOut && (
                <p className="mt-3">
                  <SoldOut label={strings.soldOut} />
                </p>
              )}
              <Tags item={openItem} labels={strings.tags} />
              {openItem.description && (
                <p className="mt-5 leading-relaxed text-menu-muted">
                  {text(openItem.description)}
                </p>
              )}
              {openItem.components && (
                <section className="mt-6">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-menu-muted">
                    {strings.combo}
                  </h3>
                  <ul className="mt-2.5 divide-y divide-menu-border border-y border-menu-border">
                    {openItem.components.map((part, index) => (
                      <li key={index} className="flex items-center gap-3 py-3">
                        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-menu-primary/10 text-xs font-bold text-menu-primary">
                          {part.quantity}×
                        </span>
                        <span>{text(part.name)}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
              {openItem.nutrition && (
                <NutritionFacts
                  nutrition={openItem.nutrition}
                  strings={strings}
                  number={number}
                />
              )}
              {openItem.allergens && openItem.allergens.length > 0 && (
                <section className="mt-6">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-menu-muted">
                    {strings.allergens}
                  </h3>
                  <ul className="mt-2.5 flex flex-wrap gap-1.5">
                    {openItem.allergens.map((allergen) => (
                      <li
                        key={allergen}
                        className="rounded-full border border-menu-border bg-menu-bg px-3 py-1 text-xs font-medium"
                      >
                        {strings.allergenNames[allergen]}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
              {openItem.variants && openItem.variants.length > 0 && (
                <ul className="mt-6 divide-y divide-menu-border border-y border-menu-border">
                  {openItem.variants.map((variant, index) => (
                    <li key={index} className="flex justify-between gap-4 py-3">
                      <span>{text(variant.name)}</span>
                      {showPrices && (
                        <span className="font-bold text-menu-primary">
                          {formatPrice(variant.price, currency, locale)}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
              {similar.length > 0 && (
                <>
                  <p className="mb-3 mt-8 font-menu-heading text-lg font-bold">
                    {strings.similar}
                  </p>
                  <Carousel bleed="-mx-6 px-6 scroll-px-6">
                    {similar.map((item) => (
                      <ProductCard
                        key={item.id}
                        item={item}
                        name={text(item.name)}
                        price={showPrices ? price(item) : undefined}
                        strings={strings}
                        onOpen={() => setOpenItem(item)}
                        compact
                      />
                    ))}
                  </Carousel>
                </>
              )}
            </div>
          </>
        )}
      </Sheet>

      <Sheet
        open={feedbackOpen}
        onClose={() => setFeedbackOpen(false)}
        label={strings.feedback.title}
        closeLabel={strings.close}
      >
        <FeedbackForm strings={strings} locale={locale} endpoint={feedbackUrl} table={table} />
      </Sheet>

      {canCall && (
        <Sheet
          open={callOpen}
          onClose={() => setCallOpen(false)}
          label={strings.call.title}
          closeLabel={strings.close}
        >
          <WaiterCall
            strings={strings}
            table={table}
            endpoint={tablesUrl && `${tablesUrl}/${table.token}/calls`}
          />
        </Sheet>
      )}
    </div>
  );
}

function Icon({ d, className }: { d: string; className: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={d} />
    </svg>
  );
}

/** Native select styled as a pill; `glass` sits on the cover photo. */
function Picker({
  glass,
  label,
  value,
  onChange,
  options,
}: {
  glass: boolean;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: [value: string, label: string][];
}) {
  return (
    <span className="relative shrink-0">
      <select
        aria-label={label}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={`appearance-none rounded-full border py-1.5 ps-3 pe-7 text-xs font-semibold *:text-menu-text ${
          glass
            ? "border-white/25 bg-black/25 text-white backdrop-blur-md"
            : "border-menu-border bg-menu-surface"
        }`}
      >
        {options.map(([code, name]) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
      <Icon
        d="m6 9 6 6 6-6"
        className={`pointer-events-none absolute end-2 top-1/2 size-3.5 -translate-y-1/2 ${
          glass ? "text-white" : "text-menu-muted"
        }`}
      />
    </span>
  );
}

/** Photo, or a tinted initial when the business has not uploaded one. */
function Thumb({
  src,
  label,
  className,
}: {
  src: string | undefined;
  label: string;
  className: string;
}) {
  return src ? (
    <img src={src} alt="" loading="lazy" decoding="async" className={`object-cover ${className}`} />
  ) : (
    <span
      aria-hidden
      className={`grid place-items-center bg-menu-primary/10 font-menu-heading text-2xl font-bold text-menu-primary ${className}`}
    >
      {label.charAt(0)}
    </span>
  );
}

function CategoryTile({
  href,
  image,
  name,
  count,
  className,
  wide = false,
}: {
  href: string;
  image: string | undefined;
  name: string;
  count: string;
  className: string;
  /** Full-width banner with the label beside a chevron. */
  wide?: boolean;
}) {
  return (
    <a
      href={href}
      className={`group relative isolate flex items-end overflow-hidden rounded-menu bg-menu-primary text-white shadow-[0_12px_28px_-20px_rgba(0,0,0,0.7)] ${className}`}
    >
      {image ? (
        <img
          src={image}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 -z-10 size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <span
          aria-hidden
          className="absolute -end-2 -top-6 -z-10 font-menu-heading text-[7rem] font-bold leading-none text-white/15"
        >
          {name.charAt(0)}
        </span>
      )}
      <span
        className={`absolute inset-0 -z-10 ${
          wide
            ? "bg-gradient-to-r from-black/75 via-black/40 to-black/25 rtl:bg-gradient-to-l"
            : "bg-gradient-to-t from-black/80 via-black/30 to-black/10"
        }`}
      />
      <span
        className={`flex w-full items-center gap-3 ${wide ? "self-center p-5" : "p-3.5"}`}
      >
        <span className="min-w-0 flex-1">
          <span
            className={`block truncate font-menu-heading font-bold leading-tight ${
              wide ? "text-xl" : "text-base"
            }`}
          >
            {name}
          </span>
          <span className="mt-0.5 block text-xs text-white/80">{count}</span>
        </span>
        {wide && (
          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/30 bg-white/15 backdrop-blur-md">
            <Icon d="m9 6 6 6-6 6" className="size-4 rtl:-scale-x-100" />
          </span>
        )}
      </span>
    </a>
  );
}

function Carousel({
  bleed = "-mx-5 px-5 scroll-px-5",
  children,
}: {
  bleed?: string;
  children: ReactNode;
}) {
  return (
    <div className={`no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 ${bleed}`}>
      {children}
    </div>
  );
}

function ProductCard({
  item,
  name,
  subtitle,
  price,
  calories,
  strings,
  onOpen,
  compact = false,
}: {
  item: MenuItem;
  name: string;
  subtitle?: string;
  /** Omitted when the business hides prices. */
  price?: string;
  calories?: string;
  strings: MenuStrings;
  onOpen: () => void;
  compact?: boolean;
}) {
  const badges = compact ? [] : BADGE_TAGS.filter((tag) => item.tags?.includes(tag)).slice(0, 2);
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`shrink-0 snap-start text-start ${compact ? "w-32" : "w-40"} ${
        item.soldOut ? "opacity-60" : ""
      }`}
    >
      <span className="relative block overflow-hidden rounded-menu bg-menu-surface shadow-[0_12px_28px_-20px_rgba(0,0,0,0.7)]">
        <Thumb src={item.imageUrl} label={name} className="block aspect-square w-full" />
        {item.soldOut ? (
          <span className="absolute start-2 top-2">
            <SoldOut label={strings.soldOut} />
          </span>
        ) : (
          badges.length > 0 && (
            <span className="absolute start-2 top-2 flex flex-col items-start gap-1">
              {badges.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-neutral-900 backdrop-blur"
                >
                  <Icon d={tagStyles[tag].icon} className={`size-3 ${tagStyles[tag].accent}`} />
                  {strings.tags[tag]}
                </span>
              ))}
            </span>
          )
        )}
      </span>
      <span className="mt-2.5 block font-menu-heading text-sm font-semibold leading-snug line-clamp-2">
        {name}
      </span>
      {subtitle && <span className="mt-0.5 block text-[11px] text-menu-muted">{subtitle}</span>}
      {(price || calories) && (
        <span className="mt-1 flex items-baseline justify-between gap-2">
          {price && <span className="text-sm font-bold text-menu-primary">{price}</span>}
          {calories && <span className="text-[11px] text-menu-muted">{calories}</span>}
        </span>
      )}
    </button>
  );
}

function SectionTitle({
  title,
  action,
}: {
  title: string;
  action?: { href: string; label: string };
}) {
  return (
    <div className="mb-3.5 mt-8 flex items-center justify-between gap-4">
      <h2 className="font-menu-heading text-lg font-bold">{title}</h2>
      {action && (
        <a
          href={action.href}
          className="flex items-center gap-1 text-xs font-semibold text-menu-primary"
        >
          {action.label}
          <Icon d="M5 12h14m-6-6 6 6-6 6" className="size-4 rtl:-scale-x-100" />
        </a>
      )}
    </div>
  );
}

function ItemRow({
  item,
  name,
  description,
  price,
  regularPrice,
  calories,
  strings,
  onOpen,
}: {
  item: MenuItem;
  name: string;
  description: string;
  /** Omitted when the business hides prices. */
  price?: string;
  /** A combo's struck-through price of its items one by one. */
  regularPrice?: string;
  calories?: string;
  strings: MenuStrings;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`flex w-full gap-3.5 p-3 text-start transition-colors active:bg-menu-bg ${
        item.soldOut ? "opacity-60" : ""
      }`}
    >
      <span className="relative shrink-0">
        <Thumb
          src={item.imageUrl}
          label={name}
          className="block size-24 rounded-[calc(var(--m-radius)-4px)]"
        />
        {item.soldOut && (
          <span className="absolute inset-x-0 bottom-1.5 text-center">
            <SoldOut label={strings.soldOut} />
          </span>
        )}
      </span>
      <span className="flex min-w-0 flex-1 flex-col py-0.5">
        <span className="flex items-start justify-between gap-3">
          <span className="font-menu-heading font-semibold leading-snug">
            {item.components && (
              <span className="me-1.5 inline-block rounded-full bg-menu-primary/10 px-2 py-0.5 align-[2px] text-[10px] font-semibold uppercase tracking-wide text-menu-primary">
                {strings.comboBadge}
              </span>
            )}
            {name}
          </span>
          {price && (
            <span className="flex shrink-0 flex-col items-end">
              <span className="font-bold text-menu-primary">{price}</span>
              {regularPrice && (
                <span className="text-[11px] text-menu-muted">
                  <span className="sr-only">{strings.regularPrice}: </span>
                  <s>{regularPrice}</s>
                </span>
              )}
            </span>
          )}
        </span>
        {description && (
          <span className="mt-1 line-clamp-2 text-xs leading-relaxed text-menu-muted">
            {description}
          </span>
        )}
        {calories && <span className="mt-1 text-[11px] text-menu-muted">{calories}</span>}
        <Tags item={item} labels={strings.tags} small />
      </span>
    </button>
  );
}

function Tab({
  label,
  icon,
  href,
  active = false,
  onClick,
}: {
  label: string;
  icon: string;
  href?: string;
  active?: boolean;
  onClick?: () => void;
}) {
  const className = `flex flex-1 flex-col items-center gap-0.5 rounded-full px-1 py-2 text-[11px] font-semibold transition-colors ${
    active ? "bg-menu-primary/10 text-menu-primary" : "text-menu-muted"
  }`;
  const content: ReactNode = (
    <>
      <Icon d={icon} className="size-[22px]" />
      <span className="max-w-full truncate">{label}</span>
    </>
  );
  return href ? (
    <a href={href} aria-current={active ? "page" : undefined} className={className}>
      {content}
    </a>
  ) : (
    <button type="button" onClick={onClick} className={className}>
      {content}
    </button>
  );
}

function NutritionFacts({
  nutrition,
  strings,
  number,
}: {
  nutrition: Nutrition;
  strings: MenuStrings;
  number: (value: number) => string;
}) {
  const facts = (["calories", "protein", "carbs", "fat"] as const).flatMap((key) => {
    const value = nutrition[key];
    return value === undefined ? [] : [{ key, value }];
  });
  // Share of energy from each macro, the way nutrition labels split it
  const energy = MACROS.map((macro) => ({ ...macro, kcal: (nutrition[macro.key] ?? 0) * macro.kcal }));
  const total = energy.reduce((sum, macro) => sum + macro.kcal, 0);
  if (facts.length === 0) return null;

  return (
    <section className="mt-6 rounded-menu border border-menu-border p-4">
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-menu-muted">
          {strings.nutrition}
        </h3>
        <span className="text-[11px] text-menu-muted">{strings.perPortion}</span>
      </div>
      <dl className="mt-3 grid auto-cols-fr grid-flow-col divide-x divide-menu-border text-center rtl:divide-x-reverse">
        {facts.map(({ key, value }) => {
          const macro = MACROS.find((m) => m.key === key);
          return (
            <div key={key} className="flex flex-col-reverse px-1">
              <dt className="mt-1 flex items-center justify-center gap-1 text-[10px] font-semibold uppercase tracking-wide text-menu-muted">
                {macro && <span aria-hidden className={`size-1.5 rounded-full ${macro.className}`} />}
                {strings.nutrients[key]}
              </dt>
              <dd className="font-menu-heading text-xl font-bold">
                {number(value)}
                <span className="ms-0.5 text-xs font-medium text-menu-muted">
                  {key === "calories" ? "kcal" : "g"}
                </span>
              </dd>
            </div>
          );
        })}
      </dl>
      {total > 0 && (
        <div aria-hidden className="mt-4 flex h-1.5 gap-0.5 overflow-hidden rounded-full">
          {energy.map(
            (macro) =>
              macro.kcal > 0 && (
                <span
                  key={macro.key}
                  className={macro.className}
                  style={{ width: `${(macro.kcal / total) * 100}%` }}
                />
              ),
          )}
        </div>
      )}
    </section>
  );
}

function SoldOut({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-menu-text px-2.5 py-0.5 text-xs font-semibold text-menu-surface">
      {label}
    </span>
  );
}

function Tags({
  item,
  labels,
  small = false,
}: {
  item: MenuItem;
  labels: Record<ItemTag, string>;
  small?: boolean;
}) {
  if (!item.tags?.length) return null;
  return (
    <span className={`flex flex-wrap gap-1.5 ${small ? "mt-2" : "mt-4"}`}>
      {item.tags.map((tag) => (
        <span
          key={tag}
          className={`flex items-center gap-1 rounded-full font-medium ${tagStyles[tag].className} ${
            small ? "px-2 py-0.5 text-[11px]" : "px-3 py-1 text-xs"
          }`}
        >
          <Icon d={tagStyles[tag].icon} className={small ? "size-3" : "size-3.5"} />
          {labels[tag]}
        </span>
      ))}
    </span>
  );
}

function Story({
  block,
  text,
}: {
  block: StoryBlock;
  text: (value: Record<string, string>) => string;
}) {
  switch (block.type) {
    case "text":
      return <p className="leading-relaxed text-menu-muted">{text(block.body)}</p>;
    case "image":
      return (
        <img
          src={block.url}
          alt={text(block.alt)}
          loading="lazy"
          decoding="async"
          className="max-h-80 w-full rounded-menu border border-menu-border object-cover"
        />
      );
    case "video":
      return (
        <video
          src={block.url}
          poster={block.posterUrl}
          controls
          playsInline
          preload="metadata"
          className="aspect-video w-full rounded-menu bg-black"
        />
      );
    case "embed":
      return (
        <iframe
          src={
            block.provider === "youtube"
              ? `https://www.youtube-nocookie.com/embed/${block.videoId}`
              : `https://player.vimeo.com/video/${block.videoId}`
          }
          title={text(block.title)}
          loading="lazy"
          allow="fullscreen; picture-in-picture"
          className="aspect-video w-full rounded-menu"
        />
      );
  }
}
