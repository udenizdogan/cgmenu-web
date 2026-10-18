const isDev = process.env.NODE_ENV !== "production";

/** Apex domain that tenant subdomains hang off (`isletme.<ROOT_DOMAIN>`). */
export const ROOT_DOMAIN =
  process.env.ROOT_DOMAIN ?? (isDev ? "localhost" : "cgmenu.tr");

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (isDev ? "http://localhost:3000" : "https://cgmenu.tr");

export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ??
  (isDev ? "http://localhost:5173" : "https://app.cgmenu.tr");

export const DEMO_URL =
  process.env.NEXT_PUBLIC_DEMO_URL ??
  (isDev ? "http://demo.localhost:3000" : "https://demo.cgmenu.tr");

/** cgmenu-api as reached from the browser. */
export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ??
  (isDev ? "http://localhost:4100" : "https://api.cgmenu.tr");

export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "info@cgmenu.tr";

export const SIGNUP_URL = `${APP_URL}/kayit`;
export const LOGIN_URL = `${APP_URL}/giris`;

/** Subdomains that can never be claimed by a business. */
export const RESERVED_SUBDOMAINS = new Set([
  "www",
  "app",
  "api",
  "cdn",
  "admin",
  "mail",
  "static",
  "assets",
  "status",
  "docs",
  "blog",
  "help",
  "support",
]);

export const SUBDOMAIN_PATTERN = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/;
