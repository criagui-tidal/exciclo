import Image from "next/image";
import type { ReactNode } from "react";

import Button from "@/components/atoms/Button";
import Eyebrow from "@/components/atoms/Eyebrow";
import Heading from "@/components/atoms/Heading";
import Section from "@/components/atoms/Section";

// Cabecera de las páginas interiores. La home tiene la suya (HeroSection)
// porque incluye el anillo y el precio.
//
// Siempre ocupa las 12 columnas, de dos maneras según haya foto o no. En una
// sola columna el titular se quedaba en 920px y en pantallas anchas sobraba
// media pantalla a la derecha.

export type PageHeroContent = {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  paragraphs: string[];
  note?: string;
  ctaPrimary: string;
  ctaSecondary?: string;
};

export default function PageHero({
  content,
  primaryHref,
  secondaryHref,
  image,
  imageAlt,
  children,
}: {
  content: PageHeroContent;
  primaryHref: string;
  secondaryHref?: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  const paragraphs = content.paragraphs.map((paragraph) => (
    <p
      key={paragraph}
      className="m-0 text-lg leading-relaxed text-body sm:text-xl"
    >
      {paragraph}
    </p>
  ));

  const note = content.note ? (
    <div className="text-sm font-semibold uppercase tracking-[0.12em] text-muted">
      {content.note}
    </div>
  ) : null;

  const actions = (
    <div className="flex flex-wrap items-center gap-3.5 pt-1">
      <Button href={primaryHref}>{content.ctaPrimary}</Button>
      {content.ctaSecondary && secondaryHref ? (
        <Button href={secondaryHref} variant="outline-dark">
          {content.ctaSecondary}
        </Button>
      ) : null}
    </div>
  );

  // Con foto: todo el texto a la izquierda y la imagen ocupando la altura de
  // la fila a la derecha.
  if (image) {
    return (
      <Section space="md" className="lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col gap-6 lg:col-span-6">
            <Eyebrow>{content.eyebrow}</Eyebrow>
            <Heading as="h1">
              {content.titleLead}{" "}
              <span className="text-accent">{content.titleAccent}</span>
            </Heading>
            {paragraphs}
            {note}
            {children}
            {actions}
          </div>
          <div className="relative min-h-[300px] overflow-hidden rounded-[28px] bg-surface-alt sm:min-h-[400px] lg:col-span-5 lg:col-start-8 lg:min-h-full">
            <Image
              src={image}
              alt={imageAlt ?? ""}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </Section>
    );
  }

  // Sin foto: el titular manda en la izquierda y el cuerpo se va a la derecha,
  // que es lo que impide que el texto quede colgando en media pantalla.
  return (
    <Section space="md" className="lg:py-20">
      <div className="flex flex-col gap-8">
        <Eyebrow>{content.eyebrow}</Eyebrow>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <Heading as="h1" className="lg:col-span-6">
            {content.titleLead}{" "}
            <span className="text-accent">{content.titleAccent}</span>
          </Heading>
          <div className="flex flex-col gap-4 lg:col-span-5 lg:col-start-8 lg:justify-end">
            {paragraphs}
            {note}
          </div>
        </div>
        {children}
        {actions}
      </div>
    </Section>
  );
}
