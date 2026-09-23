// Datos estructurados. Se escapa `<` a su equivalente unicode porque
// JSON.stringify no sanea el contenido y todo esto acaba dentro de un <script>.

export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
