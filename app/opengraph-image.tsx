import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Arclink Edge - Premium IT Agency in New York, Bangalore, Delhi & Mumbai";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          color: "#F5F5F7",
          background:
            "linear-gradient(135deg, #000000 0%, #03133d 54%, #0052ff 100%)",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "22px",
            fontSize: 34,
            fontWeight: 700,
          }}
        >
          <div
            style={{
              width: 54,
              height: 54,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#F5F5F7",
              color: "#0052FF",
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            AE
          </div>
          Arclink Edge
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div
            style={{
              maxWidth: 900,
              fontSize: 78,
              fontWeight: 700,
              lineHeight: 0.98,
              letterSpacing: "-0.04em",
            }}
          >
            Web, mobile and SaaS products built to scale.
          </div>
          <div
            style={{
              maxWidth: 760,
              fontSize: 28,
              lineHeight: 1.35,
              color: "rgba(245,245,247,0.78)",
            }}
          >
            Premium IT agency in New York, Bangalore, Delhi & Mumbai serving ambitious B2B brands across
            India, USA, UK and UAE.
          </div>
        </div>
      </div>
    ),
    size
  );
}
