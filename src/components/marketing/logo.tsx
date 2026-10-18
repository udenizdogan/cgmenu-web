import Image from "next/image";
import Link from "next/link";
import { href, type Locale } from "@/i18n/config";

/**
 * onDark: the wordmark is turned white with a filter, so the dark hero needs
 * no separate file and the switch animates with the header.
 */
export function Logo({
  lang,
  onDark = false,
  width = 140,
  className = "",
}: {
  lang: Locale;
  onDark?: boolean;
  width?: number;
  className?: string;
}) {
  return (
    <Link
      href={href(lang, "home")}
      aria-label="CG Menu"
      className={`inline-flex shrink-0 items-center transition-opacity hover:opacity-80 ${className}`}
    >
      <Image
        src="/logo.png"
        alt="CG Menu"
        width={width}
        height={Math.round((width * 262) / 1020)}
        loading="eager"
        className={`transition-[filter] duration-500 ${onDark ? "brightness-0 invert" : ""}`}
      />
    </Link>
  );
}
