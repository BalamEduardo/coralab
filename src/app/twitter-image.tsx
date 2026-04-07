import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 600,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background: "rgb(26, 28, 27)",
          color: "rgb(249, 249, 247)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgb(255, 120, 99)",
          }}
        >
          Coralab
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontSize: 82,
              lineHeight: 0.96,
              fontWeight: 700,
              letterSpacing: "-0.05em",
              maxWidth: 900,
            }}
          >
            Soluciones digitales reales.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              lineHeight: 1.3,
              maxWidth: 900,
              color: "rgba(249, 249, 247, 0.76)",
            }}
          >
            Webs claras, rápidas y pensadas para que tu negocio se vea
            profesional en internet.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(249, 249, 247, 0.56)",
          }}
        >
          https://coralab.dev
        </div>
      </div>
    ),
    size,
  );
}
