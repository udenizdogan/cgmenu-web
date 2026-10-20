import { Poppins } from "next/font/google";
import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import { demoBusiness } from "@/lib/tenant/demo-data";
import { pick } from "@/lib/tenant/format";
import type { MenuCategory } from "@/lib/tenant/types";
import { getMenuStrings } from "@/lib/tenant/ui-strings";

// Decorative text inside the mockup: not worth competing with the page's own
// fonts and hero image for bandwidth, so it is not preloaded.
const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin", "latin-ext"],
  preload: false,
});

// public/phone.png is 1037×1958; its screen and island in image pixels.
const FRAME = { width: 1037, height: 1958 };
const SCREEN = { left: 190, top: 127, width: 791, height: 1726, radius: 100 };
const ISLAND = { left: 463, top: 157, width: 246, height: 71 };

/** Rendered width of the phone, and the CSS width the menu is laid out at. */
const PHONE_WIDTH = 300;
const VIEWPORT_WIDTH = 390;
const px = PHONE_WIDTH / FRAME.width;
const scale = (SCREEN.width * px) / VIEWPORT_WIDTH;

const box = (rect: { left: number; top: number; width: number; height: number }) => ({
  left: rect.left * px,
  top: rect.top * px,
  width: rect.width * px,
  height: rect.height * px,
});

const { theme } = demoBusiness;
const themeVariables = {
  "--m-bg": theme.colors.background,
  "--m-surface": theme.colors.surface,
  "--m-text": theme.colors.text,
  "--m-muted": theme.colors.muted,
  "--m-primary": theme.colors.primary,
  "--m-on-primary": theme.colors.onPrimary,
  "--m-border": theme.colors.border,
  "--m-font-heading": poppins.style.fontFamily,
  "--m-font-body": poppins.style.fontFamily,
  "--m-radius": theme.radius,
} as CSSProperties;

const categoryImage = (category: MenuCategory) =>
  category.imageUrl ?? category.items.find((item) => item.imageUrl)?.imageUrl;

function Chip({ className, children }: { className: string; children: ReactNode }) {
  return (
    <div
      className={`ring-gradient animate-float-slow absolute z-10 hidden items-center gap-2 rounded-2xl bg-white/12 px-4 py-3 text-sm font-bold text-white shadow-[0_18px_40px_-18px_rgba(11,10,29,0.9)] backdrop-blur-xl xl:flex ${className}`}
    >
      {children}
    </div>
  );
}

function Icon({ d, className }: { d: string; className: string }) {
  return (
    <svg
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

/**
 * The home screen of the sample menu, laid out at a phone's CSS width and
 * scaled into public/phone.png. Mirrors MenuView with the same data and theme.
 */
function MenuScreen({ lang }: { lang: Locale }) {
  const strings = getMenuStrings(lang);
  const text = (value: Parameters<typeof pick>[0]) =>
    pick(value, lang, demoBusiness.defaultLocale);
  const [base] = demoBusiness.currencies;
  const language = new Intl.DisplayNames([lang], { type: "language" }).of(lang) ?? lang;

  const glassPill =
    "flex items-center gap-1 rounded-full border border-white/25 bg-black/25 py-1.5 ps-3 pe-2 text-xs font-semibold backdrop-blur-md";

  return (
    <div
      style={{ ...themeVariables, width: VIEWPORT_WIDTH, transform: `scale(${scale})` }}
      className="relative h-[851px] origin-top-left overflow-hidden bg-menu-bg font-menu-body text-menu-text"
    >
      <section className="relative isolate flex h-[440px] flex-col text-white">
        {theme.coverUrl && (
          <Image
            src={theme.coverUrl}
            alt=""
            fill
            sizes="390px"
            loading="eager"
            className="-z-10 object-cover"
          />
        )}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/45 via-black/25 to-black/70" />

        <div className="flex h-[54px] shrink-0 items-center justify-between px-8 pt-1 text-[15px] font-semibold">
          <span>9:41</span>
          <span className="flex items-center gap-1.5">
            <svg viewBox="0 0 18 12" className="h-3 w-[18px]" fill="currentColor">
              <rect x="0" y="8" width="3" height="4" rx="1" />
              <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
              <rect x="10" y="3" width="3" height="9" rx="1" />
              <rect x="15" y="0" width="3" height="12" rx="1" />
            </svg>
            <svg viewBox="0 0 27 13" className="h-[13px] w-[27px]">
              <rect
                x="0.5"
                y="0.5"
                width="23"
                height="12"
                rx="3.5"
                fill="none"
                stroke="currentColor"
                opacity="0.4"
              />
              <rect x="2" y="2" width="20" height="9" rx="2" fill="currentColor" />
              <path d="M25 4.5v4a2 2 0 0 0 0-4Z" fill="currentColor" opacity="0.4" />
            </svg>
          </span>
        </div>

        <div className="flex justify-end gap-2 px-4 pt-1">
          <span className={glassPill}>
            {language.charAt(0).toLocaleUpperCase(lang) + language.slice(1)}
            <Icon d="m6 9 6 6 6-6" className="size-3.5" />
          </span>
          <span className={glassPill}>
            {base.code}
            <Icon d="m6 9 6 6 6-6" className="size-3.5" />
          </span>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center px-6 pb-12 text-center">
          <span className="grid size-24 place-items-center rounded-full border-2 border-white/40 bg-white/15 font-menu-heading text-4xl font-bold shadow-[0_16px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur-md">
            {demoBusiness.name.charAt(0)}
          </span>
          <p className="mt-5 font-menu-heading text-3xl font-bold leading-tight [text-shadow:0_2px_16px_rgba(0,0,0,0.35)]">
            {demoBusiness.name}
          </p>
          <p className="mt-1.5 text-sm text-white/85">{text(demoBusiness.tagline)}</p>
        </div>
      </section>

      <div className="relative -mt-8 rounded-t-[2rem] bg-menu-bg px-5 pt-7">
        <p className="font-menu-heading text-xl font-bold">{strings.welcome}</p>
        <div className="mt-4 flex items-center gap-3 rounded-full border border-menu-border bg-menu-surface px-4 py-3.5 text-sm text-menu-muted shadow-[0_8px_24px_-18px_rgba(0,0,0,0.5)]">
          <Icon d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm9 16-4-4" className="size-5" />
          {strings.search}
        </div>

        <div className="mb-3.5 mt-8 flex items-center justify-between gap-4">
          <p className="font-menu-heading text-lg font-bold">{strings.categories}</p>
          <span className="flex items-center gap-1 text-xs font-semibold text-menu-primary">
            {strings.seeAll}
            <Icon d="M5 12h14m-6-6 6 6-6 6" className="size-4" />
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {demoBusiness.categories.map((category) => {
            const src = categoryImage(category);
            return (
              <div
                key={category.id}
                className="relative isolate flex aspect-[4/3] items-end overflow-hidden rounded-menu bg-menu-primary text-white"
              >
                {src && (
                  <Image src={src} alt="" fill sizes="170px" className="-z-10 object-cover" />
                )}
                <span className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
                <span className="p-3.5">
                  <span className="block font-menu-heading text-base font-bold leading-tight">
                    {text(category.name)}
                  </span>
                  <span className="mt-0.5 block text-xs text-white/80">
                    {strings.itemCount(category.items.length)}
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute inset-x-4 bottom-3.5 flex gap-1 rounded-full border border-menu-border bg-menu-surface/90 p-1.5 shadow-[0_16px_40px_-14px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        {[
          { label: strings.nav.home, icon: "M4 11.5 12 4l8 7.5V20h-5v-5h-6v5H4v-8.5Z" },
          { label: strings.nav.menu, icon: "M6 3h12v18H6zM9 8h6M9 12h6M9 16h4" },
          {
            label: strings.nav.about,
            icon: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-10v6m0-9.5v.5",
          },
          { label: strings.feedback.open, icon: "M4 5h16v11H9l-5 4V5Z" },
        ].map((tab, index) => (
          <span
            key={tab.label}
            className={`flex flex-1 flex-col items-center gap-0.5 rounded-full px-1 py-2 text-[11px] font-semibold ${
              index === 0 ? "bg-menu-primary/10 text-menu-primary" : "text-menu-muted"
            }`}
          >
            <Icon d={tab.icon} className="size-[22px]" />
            <span className="max-w-full truncate">{tab.label}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/** The sample menu's home screen in a phone frame, for the hero. */
export function PhoneMockup({ lang }: { lang: Locale }) {
  return (
    <div aria-hidden className="relative mx-auto" style={{ width: PHONE_WIDTH }}>
      <div className="absolute inset-[8%] -z-10 scale-125 rounded-full bg-gradient-to-br from-brand-500/50 via-grape-500/40 to-aqua-500/40 blur-3xl" />

      <Image
        src="/phone.png"
        alt=""
        width={PHONE_WIDTH}
        height={Math.round(FRAME.height * px)}
        loading="eager"
        className="relative"
      />
      <div
        className="absolute overflow-hidden"
        style={{ ...box(SCREEN), borderRadius: SCREEN.radius * px }}
      >
        <MenuScreen lang={lang} />
      </div>
      <div className="absolute rounded-full bg-black" style={box(ISLAND)} />

      <Chip className="-left-32 top-28">
        <span className="rounded-md bg-white px-1.5 py-0.5 text-[11px] text-ink-900">TR</span>
        <span className="text-white/60">EN · DE · RU</span>
      </Chip>
      <Chip className="-right-28 top-48 [animation-delay:-2.5s]">
        <span className="text-sun-400">₺</span>
        <span className="text-white/60">€ · $ · £</span>
      </Chip>
      <Chip className="-left-32 bottom-24 [animation-delay:-4.5s]">
        <span className="tracking-[0.15em] text-sun-400">★★★★★</span>
        <span className="tabular-nums">4.9</span>
      </Chip>
    </div>
  );
}
