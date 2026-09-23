# exciclo.com

Sitio de Exciclo en Next.js 16 (App Router, Tailwind v4). Español e inglés,
todo estático.

```bash
npm run dev     # desarrollo en http://localhost:3000
npm run build   # build de producción
npm run lint
```

## Idiomas y rutas

El español es el idioma principal y vive en la raíz; el inglés cuelga de `/en`.
Los slugs no son traducciones literales: cada idioma usa el que le sirve.

| Página             | Español          | Inglés                 |
| ------------------ | ---------------- | ---------------------- |
| Home               | `/`              | `/en`                  |
| Qué resolvemos     | `/servicios`     | `/en/what-we-solve`    |
| Evaluación de valor| `/evaluacion`    | `/en/assessment`       |
| IA y valor         | `/ia-y-valor`    | `/en/ai-value`         |
| Para empresas      | `/empresas`      | `/en/enterprise`       |
| Casos              | `/casos`         | `/en/cases`            |
| Caso Comex         | `/casos/comex`   | `/en/cases/comex`      |
| Colombia           | `/colombia`      | `/en/colombia`         |
| Sobre Exciclo      | `/sobre-exciclo` | `/en/about`            |

Esa tabla está en código en [`src/lib/i18n.ts`](src/lib/i18n.ts), y es la única
copia. Nada en el sitio escribe una URL a mano: se piden por clave con
`href("assessment", locale)`. Cambiar un slug ahí lo cambia en el menú, el
footer, los CTA, el conmutador de idioma, el sitemap y los `hreflang`.

Las anclas de la home (`#ciclo`, `#precio`, `#contacto`, `#experiencia`) tienen
su propio id por idioma, en el mismo fichero.

## Dónde está el texto

Todo el copy vive en [`src/content`](src/content), separado de los componentes:

```
src/content/
  es/   common · home · pages · catalog
  en/   los mismos ficheros, traducidos
  index.ts   getContent(locale)
```

El español es la fuente de la verdad: `Content` se infiere de `src/content/es`
y el objeto inglés se declara `const en: Content`. **Si añades una sección en
español y no la traduces, el build falla.** Es deliberado: evita que el inglés
se quede atrás en silencio.

Los componentes no contienen texto. Reciben lo que tienen que pintar por props.

## Estructura de `src/app`

Hay dos root layouts, uno por idioma, con route groups:

```
src/app/
  (es)/layout.tsx      <html lang="es">   → /, /servicios, /casos…
  (en)/layout.tsx      <html lang="en">   → /en, /en/cases…
  sitemap.ts  robots.ts  globals.css  icon.png
```

Son dos porque `<html lang>` se fija en el layout raíz y un layout anidado no
puede cambiarlo. Lo que comparten está en
[`RootDocument`](src/components/templates/RootDocument.tsx): fuentes, `<body>` y
el script de Metricool. El efecto secundario es que cambiar de idioma provoca
una recarga completa, que en un sitio de marketing no molesta.

Cada `page.tsx` es fino a propósito: metadata y plantilla.

## Componentes

Atomic design, como estaba: `atoms` → `molecules` → `organisms` → `templates`.

- Las páginas interiores se montan sobre
  [`PageShell`](src/components/templates/PageShell.tsx), que pone header, CTA
  final y footer.
- [`Section`](src/components/atoms/Section.tsx) tiene el ritmo horizontal del
  sitio. Si escribes `px-6 sm:px-10 lg:px-[120px]` a mano, es que te falta un
  `Section`.
- [`SectionHeader`](src/components/molecules/SectionHeader.tsx) es el titular a
  dos columnas, sobre una rejilla de 12: 6 para el título, 5 para el texto de
  apoyo. Sustituye al `justify-between` con dos `max-w`, que en pantallas
  anchas dejaba un hueco muerto en medio.

## Tipografía e imágenes

Titulares en **Instrument Sans** (`font-display`), texto en **Inter**
(`font-sans`), ambas por `next/font/google` y declaradas en
[`globals.css`](src/app/globals.css). Cambiarlas es tocar esas dos variables y
[`RootDocument`](src/components/templates/RootDocument.tsx).

La imagen Open Graph no puede usar fuentes web: satori necesita ficheros, y
tampoco aplica ejes variables. Por eso `assets/fonts/` guarda instancias
estáticas de cada peso que usa la tarjeta; su procedencia está en
[`assets/fonts/README.md`](assets/fonts/README.md).

Las fotos viven en `public/img` y se colocan con
[`MediaBand`](src/components/molecules/MediaBand.tsx). Todas son de Unsplash,
con autor y licencia en [`public/img/CREDITS.md`](public/img/CREDITS.md).

## SEO

- `metadata` por página desde `pageMetadata()` en [`src/lib/site.ts`](src/lib/site.ts):
  canónica, `hreflang` en ambos sentidos, `x-default` al español y Open Graph.
- `sitemap.xml` con las alternativas de idioma por URL, y `robots.txt`.
- Imagen Open Graph generada por idioma desde
  [`src/lib/og-image.tsx`](src/lib/og-image.tsx), con el mismo contenido que el
  sitio.
- JSON-LD (`ProfessionalService`, `Person`, `WebSite` y la oferta del ciclo) en
  [`src/lib/structured-data.ts`](src/lib/structured-data.ts).

`NEXT_PUBLIC_SITE_URL` permite probar las tarjetas sociales desde un deploy de
preview; en producción se asume `https://exciclo.com`.
