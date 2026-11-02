/**
 * Builds a responsive WebP source for an image (Unsplash-style CDN URLs).
 * Phones no longer download desktop-sized photography.
 *
 * Usage: <img {...responsiveImage(url, [480, 800, 1200], "(max-width: 760px) 100vw, 50vw")} />
 */
export function responsiveImage(src, widths = [480, 800, 1200], sizes = "100vw") {
  const [path, query = ""] = src.split("?");
  const toUrl = (width) => {
    const params = new URLSearchParams(query);
    params.set("auto", "format");
    params.set("fit", "crop");
    params.set("w", String(width));
    params.set("q", "80");
    params.set("fm", "webp");
    return `${path}?${params.toString()}`;
  };
  return {
    src: toUrl(widths[widths.length - 1]),
    srcSet: widths.map((width) => `${toUrl(width)} ${width}w`).join(", "),
    sizes
  };
}
