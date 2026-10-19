import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Read once: the logo does not depend on the request
const logo = `data:image/png;base64,${(
  await readFile(join(process.cwd(), "public/logo-white.png"))
).toString("base64")}`;

const taglines = {
  tr: "QR Menü ve Restoran Yönetim Sistemi",
  en: "QR Menu and Restaurant Management System",
} as const;

/** Social card for any page: `/api/og?title=...&lang=tr` */
export function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const title = (params.get("title") ?? "CG Menu").slice(0, 120);
  const tagline = taglines[params.get("lang") === "en" ? "en" : "tr"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "white",
          background:
            "radial-gradient(60% 80% at 15% 10%, #4846f7 0%, transparent 60%), radial-gradient(50% 70% at 90% 20%, #9b5edd 0%, transparent 60%), #0b0a1d",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- rendered by Satori, not the browser */}
        <img src={logo} alt="" height={56} style={{ objectFit: "contain", alignSelf: "flex-start" }} />
        <div style={{ display: "flex", fontSize: title.length > 60 ? 56 : 68, fontWeight: 700, lineHeight: 1.1 }}>
          {title}
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "rgba(255,255,255,0.7)" }}>
          {tagline} · cgmenu.tr
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: { "Cache-Control": "public, max-age=86400, s-maxage=604800, immutable" },
    },
  );
}
