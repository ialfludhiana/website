import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "IALF Immigration Consultants Ludhiana";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0c4a6e 0%, #0284c7 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "0 80px",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 68,
            fontWeight: 700,
            marginBottom: 16,
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          IALF Immigration
        </div>
        <div
          style={{
            color: "#bae6fd",
            fontSize: 34,
            marginBottom: 40,
            textAlign: "center",
          }}
        >
          Canada Visa &amp; Immigration Consultants
        </div>
        <div
          style={{
            background: "rgba(255,255,255,0.15)",
            color: "white",
            fontSize: 26,
            padding: "14px 36px",
            borderRadius: 8,
            letterSpacing: 0.5,
          }}
        >
          Ludhiana, Punjab, India
        </div>
      </div>
    ),
    { ...size }
  );
}
