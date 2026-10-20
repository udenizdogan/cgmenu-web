import { cacheLife } from "next/cache";

// Google serves woff2 with unicode-range subsets to modern browsers only
const MODERN_UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36";

/**
 * The CSS behind a Google Fonts stylesheet URL, to inline in the menu page.
 * A <link> to it would block the first paint on an extra round trip to
 * fonts.googleapis.com; inlined, text paints at once and the font files
 * (font-display: swap) follow. Null means: fall back to the <link>.
 */
export async function getFontCss(url: string): Promise<string | null> {
  "use cache";
  try {
    if (!url.startsWith("https://fonts.googleapis.com/")) throw new Error("Not a Google Fonts URL");
    const response = await fetch(url, {
      headers: { "User-Agent": MODERN_UA },
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok) throw new Error(`Google Fonts responded ${response.status}`);
    const css = await response.text();
    // Only plain @font-face rules go into the page; never anything that could close the tag
    if (!css.includes("@font-face") || css.includes("<")) throw new Error("Unexpected font CSS");
    cacheLife("weeks");
    return css;
  } catch (error) {
    console.error(`Could not inline ${url}:`, error);
    cacheLife("minutes");
    return null;
  }
}
