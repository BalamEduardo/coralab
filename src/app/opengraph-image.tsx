import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "linear-gradient(135deg, rgb(249, 249, 247) 0%, rgb(255, 255, 255) 55%, rgb(244, 236, 232) 100%)",
          color: "rgb(26, 28, 27)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "rgb(181, 28, 10)",
          }}
        >
          Coralab
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              lineHeight: 0.94,
              fontWeight: 700,
              letterSpacing: "-0.05em",
              maxWidth: 960,
            }}
          >
            Presencia digital sin complicaciones.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              lineHeight: 1.3,
              maxWidth: 860,
              color: "rgba(26, 28, 27, 0.76)",
            }}
          >
            Sitios web y soluciones digitales claras, funcionales y enfocadas
            en negocios reales.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(26, 28, 27, 0.5)",
          }}
        >
          coralab.vercel.app
        </div>
      </div>
    ),
    size,
  );
}
