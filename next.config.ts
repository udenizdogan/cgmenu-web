import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  cacheComponents: true,
  partialPrefetching: true,
  // AVIF is usually 20–30% smaller than WebP; browsers without it get WebP
  images: { formats: ["image/avif", "image/webp"] },
  async headers() {
    // Files in public/ have no hash in their name: cache for a week and
    // revalidate in the background after that
    const week = "public, max-age=604800, stale-while-revalidate=86400";
    return ["/demo/:path*", "/brand/:path*", "/:file(logo.*|logo-white.*|phone.png|icon.svg)"].map(
      (source) => ({ source, headers: [{ key: "Cache-Control", value: week }] }),
    );
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
