import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { siteConfig } from "../../data/siteConfig.js";

const DEFAULT_DESCRIPTION = "Supporting vulnerable children and adolescent girls in Kampala, Uganda through education, meals, healthcare and dignity.";

export default function SEO({ title, description, image, type = "website", noindex = false, jsonLd = null }) {
  const { pathname } = useLocation();
  const pageTitle = title ? `${title} | ${siteConfig.shortName}` : siteConfig.name;
  const summary = description || DEFAULT_DESCRIPTION;
  const canonical = `${siteConfig.url}${pathname}`;
  const ogImage = image || siteConfig.defaultOgImage;

  const organisation = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    ...(siteConfig.email ? { email: siteConfig.email } : {}),
    ...(siteConfig.phone ? { telephone: siteConfig.phone } : {}),
    address: { "@type": "PostalAddress", addressLocality: "Kampala", addressCountry: "UG" }
  };

  return <Helmet>
    <title>{pageTitle}</title>
    <meta name="description" content={summary} />
    <link rel="canonical" href={canonical} />
    {noindex && <meta name="robots" content="noindex, follow" />}
    <meta property="og:site_name" content={siteConfig.name} />
    <meta property="og:title" content={pageTitle} />
    <meta property="og:description" content={summary} />
    <meta property="og:type" content={type} />
    <meta property="og:locale" content="en_UG" />
    <meta property="og:url" content={canonical} />
    {ogImage && <meta property="og:image" content={ogImage} />}
    {ogImage && <meta property="og:image:alt" content={siteConfig.name} />}
    <meta name="twitter:card" content={ogImage ? "summary_large_image" : "summary"} />
    {siteConfig.twitterHandle && <meta name="twitter:site" content={siteConfig.twitterHandle} />}
    <meta name="twitter:title" content={pageTitle} />
    <meta name="twitter:description" content={summary} />
    {ogImage && <meta name="twitter:image" content={ogImage} />}
    <script type="application/ld+json">{JSON.stringify(jsonLd || organisation)}</script>
  </Helmet>;
}
