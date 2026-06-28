import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt =
  "caveui — beautiful, copy-paste Jetpack Compose components built on Material 3";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Default social/OG card, inherited by every page that doesn't define its own. */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#faf7f2",
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)",
          backgroundSize: "28px 28px",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ fontSize: 60 }}>🪨</div>
          <div style={{ fontSize: 60, fontWeight: 800, color: "#1c1917" }}>caveui</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "#1c1917",
              maxWidth: 960,
              lineHeight: 1.05,
              letterSpacing: -1,
            }}
          >
            Copy-paste Jetpack Compose components.
          </div>
          <div style={{ fontSize: 30, color: "#78716c", maxWidth: 900 }}>
            Beautiful, animated, built on Material 3 — preview in light &amp; dark, then copy the
            Kotlin.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            color: "#a8a29e",
          }}
        >
          <span style={{ color: "#d97706", fontWeight: 700 }}>ui.jumnert.dev</span>
          <span>Open source · MIT</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
