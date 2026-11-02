import { responsiveImage } from "../../lib/images.js";

/**
 * Visual for a page hero. Wraps the text content of a `page-hero` section and
 * adds a responsive photograph that sits behind the copy on wide screens and
 * above it on narrow ones.
 *
 * <PageHeroImage page="about">…hero copy…</PageHeroImage>
 */
export default function PageHeroImage({ page, children }) {
  if (!page?.image) return children;

  return <section className={`page-hero page-hero-media wrap${page.tone === "light" ? " page-hero-light" : ""}`}>
    <div className="page-hero-copy">{children}</div>
    <figure className="page-hero-figure">
      <img
        {...responsiveImage(page.image, [520, 800, 1100, 1400], "(max-width: 900px) 100vw, 42vw")}
        alt={page.alt}
        style={{ objectPosition: page.focus || "50% 50%" }}
        fetchPriority="high"
        decoding="async"
      />
      <span className="page-hero-frame" aria-hidden="true" />
    </figure>
  </section>;
}
