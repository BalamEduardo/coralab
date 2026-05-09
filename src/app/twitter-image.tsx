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
          position: "relative",
          overflow: "hidden",
          background: "rgb(11, 11, 12)",
          color: "rgb(250, 247, 245)",
          padding: "56px 64px",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-96px",
            top: "-140px",
            width: "520px",
            height: "520px",
            border: "1px solid rgba(250, 247, 245, 0.12)",
            borderRadius: "999px",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "80px",
            bottom: "60px",
            width: "310px",
            height: "210px",
            display: "flex",
            border: "1px solid rgba(250, 247, 245, 0.16)",
            borderRadius: "18px",
            background: "rgba(250, 247, 245, 0.06)",
          }}
        >
          <div style={{ width: "82px", borderRight: "1px solid rgba(250, 247, 245, 0.14)" }} />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16, padding: 28 }}>
            <div style={{ width: 130, height: 12, borderRadius: 999, background: "rgb(253, 79, 33)" }} />
            <div style={{ width: 180, height: 62, borderRadius: 10, background: "rgba(250, 247, 245, 0.14)" }} />
            <div style={{ width: 118, height: 52, borderRadius: 10, background: "rgba(253, 79, 33, 0.72)" }} />
          </div>
        </div>

        <div
          style={{
            width: "740px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgb(253, 111, 72)",
            }}
          >
            Coralab
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div
              style={{
                display: "flex",
                fontSize: 78,
                lineHeight: 0.98,
                fontWeight: 400,
                maxWidth: 720,
              }}
            >
              Claridad digital para marcas que quieren funcionar mejor.
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 29,
                lineHeight: 1.3,
                maxWidth: 680,
                color: "rgba(250, 247, 245, 0.74)",
              }}
            >
              Webs, productos y sistemas digitales con precision, estructura y enfoque.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "rgba(250, 247, 245, 0.58)",
            }}
          >
            https://coralab.dev
          </div>
        </div>
      </div>
    ),
    size,
  );
}
