"use client";

import { useEffect, useState, type ComponentProps, type CSSProperties } from "react";
import { APP_URL } from "@/lib/site";
import type { Theme } from "@/lib/tenant/types";
import { MenuView } from "./menu-view";

/**
 * The dashboard shows the menu in an iframe while the business edits its
 * theme, and posts the unsaved theme here so the change shows before saving.
 * Only messages from the dashboard origin, sent by the embedding window, count.
 */
const DASHBOARD_ORIGIN = new URL(APP_URL).origin;

const isTheme = (value: unknown): value is Theme => {
  const theme = value as Theme | null;
  return (
    typeof theme?.colors === "object" &&
    typeof theme.fonts?.heading === "string" &&
    typeof theme.fonts.body === "string" &&
    typeof theme.radius === "string"
  );
};

function usePreviewTheme(saved: Theme) {
  const [preview, setPreview] = useState<Theme | null>(null);
  useEffect(() => {
    if (window.parent === window) return;
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== DASHBOARD_ORIGIN || event.source !== window.parent) return;
      const data = event.data as { type?: string; theme?: unknown } | null;
      if (data?.type === "cgmenu:preview-theme" && isTheme(data.theme)) setPreview(data.theme);
    };
    window.addEventListener("message", onMessage);
    window.parent.postMessage({ type: "cgmenu:preview-ready" }, DASHBOARD_ORIGIN);
    return () => window.removeEventListener("message", onMessage);
  }, []);
  return preview ?? saved;
}

function themeVariables(theme: Theme) {
  return {
    "--m-bg": theme.colors.background,
    "--m-surface": theme.colors.surface,
    "--m-text": theme.colors.text,
    "--m-muted": theme.colors.muted,
    "--m-primary": theme.colors.primary,
    "--m-on-primary": theme.colors.onPrimary,
    "--m-border": theme.colors.border,
    "--m-font-heading": theme.fonts.heading,
    "--m-font-body": theme.fonts.body,
    "--m-radius": theme.radius,
  } as CSSProperties;
}

/** The menu with its theme applied: fonts, CSS variables and images. */
export function ThemedMenu({ business, ...props }: ComponentProps<typeof MenuView>) {
  const theme = usePreviewTheme(business.theme);
  const stylesheet = theme.fontStylesheet?.startsWith("https://fonts.googleapis.com/")
    ? theme.fontStylesheet
    : undefined;

  return (
    <>
      {stylesheet && <link rel="stylesheet" href={stylesheet} precedence="default" />}
      {theme.fontFaces?.map((face) => (
        <style key={face.url} href={face.url} precedence="default">
          {`@font-face{font-family:${JSON.stringify(face.family)};src:url(${JSON.stringify(face.url)}) format("woff2");font-display:swap}`}
        </style>
      ))}
      <div style={themeVariables(theme)}>
        <MenuView business={theme === business.theme ? business : { ...business, theme }} {...props} />
      </div>
    </>
  );
}
