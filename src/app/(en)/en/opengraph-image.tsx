import { ogAlt, renderOgImage, size, contentType } from "@/lib/og-image";

export const alt = ogAlt("en");
export { size, contentType };

export default function Image() {
  return renderOgImage("en");
}
