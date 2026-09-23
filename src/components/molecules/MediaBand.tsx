import Image from "next/image";

import Section from "@/components/atoms/Section";

// Banda de imagen a ancho de sección. Las fotos están para dar respiro y
// contexto entre bloques de texto, no para decorar: cada una acompaña a la
// sección que tiene al lado. El pie es opcional y va sobre la imagen.

export default function MediaBand({
  src,
  alt,
  caption,
  priority = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
}) {
  return (
    <Section tone="bare" space="sm">
      <figure className="relative m-0 aspect-[4/3] overflow-hidden rounded-[28px] bg-surface-alt sm:aspect-[16/9] lg:aspect-[21/9]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 1200px"
          priority={priority}
          className="object-cover"
        />
        {caption ? (
          <>
            {/* El degradado existe para que el pie tenga contraste suficiente
                sobre cualquier foto, no como efecto. */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/80 to-transparent"
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-7 font-display text-[20px] font-bold leading-snug text-white text-balance sm:p-10 sm:text-[26px]">
              {caption}
            </figcaption>
          </>
        ) : null}
      </figure>
    </Section>
  );
}
