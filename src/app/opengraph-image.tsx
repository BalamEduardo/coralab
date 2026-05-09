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
          position: "relative",
          overflow: "hidden",
          background: "rgb(250, 247, 245)",
          color: "rgb(11, 11, 12)",
          padding: "58px 64px",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-120px",
            top: "-150px",
            width: "560px",
            height: "560px",
            border: "1px solid rgb(228, 226, 225)",
            borderRadius: "999px",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "-16px",
            top: "-20px",
            width: "360px",
            height: "360px",
            border: "1px solid rgb(228, 226, 225)",
            borderRadius: "999px",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "70px",
            bottom: "64px",
            width: "330px",
            height: "230px",
            display: "flex",
            border: "1px solid rgb(228, 226, 225)",
            borderRadius: "18px",
            background: "rgba(255, 253, 252, 0.78)",
            boxShadow: "0 18px 50px rgba(40, 35, 30, 0.13)",
          }}
        >
          <div
            style={{
              width: "92px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              padding: "28px 18px",
              borderRight: "1px solid rgb(228, 226, 225)",
            }}
          >
            {[0, 1, 2, 3].map((item) => (
              <div
                key={item}
                style={{
                  width: item === 0 ? "56px" : "42px",
                  height: "8px",
                  borderRadius: "999px",
                  background: item === 0 ? "rgb(253, 79, 33)" : "rgb(228, 226, 225)",
                }}
              />
            ))}
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              padding: "28px",
            }}
          >
            <div style={{ width: "120px", height: "13px", borderRadius: "999px", background: "rgb(11, 11, 12)" }} />
            <div style={{ display: "flex", gap: "10px" }}>
              {[0, 1, 2].map((item) => (
                <div
                  key={item}
                  style={{
                    width: "48px",
                    height: "62px",
                    borderRadius: "8px",
                    border: "1px solid rgb(228, 226, 225)",
                    background: item === 1 ? "rgb(253, 79, 33)" : "rgb(255, 253, 252)",
                  }}
                />
              ))}
            </div>
            <div style={{ width: "170px", height: "54px", borderRadius: "8px", background: "rgb(244, 236, 232)" }} />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "760px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              fontSize: 24,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgb(253, 79, 33)",
            }}
          >
            Coralab
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div
              style={{
                display: "flex",
                fontSize: 84,
                lineHeight: 0.98,
                fontWeight: 400,
                maxWidth: 760,
              }}
            >
              Claridad digital para marcas que quieren funcionar mejor.
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 30,
                lineHeight: 1.28,
                maxWidth: 705,
                color: "rgb(74, 71, 69)",
              }}
            >
              Web, producto digital, UX/UI y sistemas de diseno para comunicar con precision.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              fontSize: 22,
              color: "rgb(74, 71, 69)",
            }}
          >
            <span>coralab.dev</span>
            <span style={{ color: "rgb(253, 79, 33)" }}>hola@coralab.dev</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
