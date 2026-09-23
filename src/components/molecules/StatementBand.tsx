import Image from "next/image";

import Section from "@/components/atoms/Section";

// Las frases que el spec quiere que se lean como un cartel y no como un
// párrafo: "No entregamos recomendaciones…", "No vendemos tecnología…".
// Una línea de expectativa, una línea afirmativa debajo.
//
// Sobre la imagen de fondo: el color sólido lo pone el contenedor y la foto va
// encima a muy baja opacidad y en escala de grises. Así el contraste del texto
// no depende de qué foto sea —se puede calcular con el píxel más claro posible,
// el blanco— y ninguna imagen compite con el color de marca. Las opacidades de
// abajo están elegidas para que incluso ese peor caso supere el mínimo AA.

const toneStyles = {
  ink: {
    // ink + 20% blanco ≈ 7,8:1 contra el texto crema.
    container: "bg-ink text-cream",
    lead: "text-border",
    imageOpacity: "opacity-[0.20]",
  },
  accent: {
    // El acento es mucho más claro que el ink, así que admite menos foto:
    // accent + 10% blanco ≈ 4.5:1 contra blanco y 3.9:1 contra el tinte.
    container: "bg-accent text-white",
    lead: "text-accent-tint",
    imageOpacity: "opacity-[0.10]",
  },
};

export default function StatementBand({
  lead,
  emphasis,
  tone = "ink",
  image,
}: {
  lead: string;
  emphasis: string;
  tone?: keyof typeof toneStyles;
  // Decorativa: el `alt` va vacío a propósito porque la frase ya dice todo lo
  // que la banda comunica, y describirla solo añadiría ruido en un lector.
  image?: string;
}) {
  const styles = toneStyles[tone];

  return (
    <Section tone="bare" space="md">
      <div
        className={`relative isolate overflow-hidden rounded-[28px] px-8 py-12 sm:px-12 sm:py-14 ${styles.container}`}
      >
        {image ? (
          <Image
            src={image}
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 1024px) 100vw, 1200px"
            className={`-z-10 object-cover grayscale ${styles.imageOpacity}`}
          />
        ) : null}
        <div className="flex flex-col gap-4">
          <p
            className={`m-0 max-w-[820px] font-display text-[26px] leading-[1.2] sm:text-[32px] ${styles.lead}`}
          >
            {lead}
          </p>
          <p className="m-0 max-w-[820px] font-display text-[30px] font-bold leading-[1.15] text-balance sm:text-[44px]">
            {emphasis}
          </p>
        </div>
      </div>
    </Section>
  );
}
