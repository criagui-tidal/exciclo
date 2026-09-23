import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { getContent } from "@/content";
import type { Locale } from "@/lib/i18n";

// La tarjeta social, compartida por los dos idiomas: la geometría es la misma
// y solo cambian los textos, que salen del mismo contenido que el sitio.

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

const assets = (file: string) => join(process.cwd(), "assets", file);

// Instancias estáticas de las variables de Google Fonts: satori no aplica ejes
// variables, así que cada peso que use la tarjeta tiene que ser su propio TTF.
const [instrumentBold, interRegular, interSemiBold, logo] = await Promise.all([
  readFile(assets("fonts/InstrumentSans-Bold.ttf")),
  readFile(assets("fonts/Inter-Regular.ttf")),
  readFile(assets("fonts/Inter-SemiBold.ttf")),
  readFile(assets("exciclo-logo-og.png")),
]);

const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

const RING_COLORS = ["#1AA0AB", "#58BD8C", "#FBBD0C", "#102A50"];
const RING_START = [-84, 6, 96, 186];
const RING_SWEEP = 80;

// Los arcos se calculan como paths explícitos: satori no rota `stroke-dasharray`.
function arcPath(startDeg: number, cx = 270, cy = 270, r = 200) {
  const point = (deg: number) => {
    const rad = (deg * Math.PI) / 180;
    return `${cx + r * Math.cos(rad)} ${cy + r * Math.sin(rad)}`;
  };
  return `M ${point(startDeg)} A ${r} ${r} 0 0 1 ${point(startDeg + RING_SWEEP)}`;
}

export function ogAlt(locale: Locale) {
  return getContent(locale).site.ogAlt;
}

export function renderOgImage(locale: Locale) {
  const content = getContent(locale);
  const { hero, pricing, cycle } = content.home;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          backgroundColor: "#FBF8F8",
          fontFamily: "Inter",
          color: "#0B2036",
        }}
      >
        <div style={{ display: "flex", height: 12 }}>
          {RING_COLORS.map((color) => (
            <div key={color} style={{ flex: 1, backgroundColor: color }} />
          ))}
        </div>

        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
            padding: "48px 72px 0",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 660,
              gap: 26,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} width={252} height={69} alt="Exciclo" />

            <div
              style={{ display: "flex", flexDirection: "column", gap: 14 }}
            >
              <div
                style={{
                  fontSize: 21,
                  fontWeight: 600,
                  letterSpacing: 2.4,
                  color: "#0E7480",
                  textTransform: "uppercase",
                }}
              >
                {hero.eyebrow}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontFamily: "Instrument Sans",
                  fontWeight: 700,
                  fontSize: 52,
                  lineHeight: 1.16,
                }}
              >
                <div>{hero.titleLead}</div>
                <div style={{ color: "#0E7480" }}>{hero.titleAccent}</div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                alignSelf: "flex-start",
                padding: "14px 24px",
                borderRadius: 16,
                border: "1px solid #E4E0E0",
                backgroundColor: "#FFFFFF",
                fontSize: 23,
                color: "#33465A",
              }}
            >
              <span style={{ fontWeight: 600, color: "#0B2036" }}>
                {pricing.amount}
              </span>
              <span style={{ color: "#E4E0E0" }}>·</span>
              <span>{pricing.per}</span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              position: "relative",
              width: 380,
              height: 380,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width={380} height={380} viewBox="0 0 540 540">
              <circle
                cx="270"
                cy="270"
                r="200"
                fill="none"
                stroke="#E4E0E0"
                strokeWidth="2"
              />
              {RING_START.map((start, i) => (
                <path
                  key={start}
                  d={arcPath(start)}
                  fill="none"
                  stroke={RING_COLORS[i]}
                  strokeWidth="26"
                  strokeLinecap="round"
                />
              ))}
            </svg>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                position: "absolute",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "Instrument Sans",
                  fontWeight: 700,
                  fontSize: 116,
                  lineHeight: 1,
                }}
              >
                4
              </div>
              <div
                style={{
                  marginTop: 6,
                  fontSize: 19,
                  fontWeight: 600,
                  letterSpacing: 4,
                }}
              >
                {cycle.ring.unit}
              </div>
              <div style={{ marginTop: 12, fontSize: 19, color: "#0E7480" }}>
                {cycle.ring.tagline}
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 10,
            padding: "0 72px 44px",
            fontSize: 20,
            color: "#5C6B7A",
          }}
        >
          <span style={{ fontWeight: 600, color: "#0E7480" }}>exciclo.com</span>
          <span>·</span>
          <span>{content.site.location}</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: interRegular, weight: 400, style: "normal" },
        { name: "Inter", data: interSemiBold, weight: 600, style: "normal" },
        {
          name: "Instrument Sans",
          data: instrumentBold,
          weight: 700,
          style: "normal",
        },
      ],
    },
  );
}
