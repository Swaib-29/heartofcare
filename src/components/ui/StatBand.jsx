import { siteConfig } from "../../data/siteConfig.js";

/** Renders every confirmed figure from siteConfig.stats — never type a number twice. */
export default function StatBand({ className = "stat-band wrap", footnote = "Figures shared by the organisation" }) {
  return <section className={className} aria-label="Our reach">
    {siteConfig.stats.map((stat, index) => <div className="stat-item" key={stat.value} data-aos="fade-up" data-aos-delay={index * 100}>
      <strong>{stat.value}<span aria-hidden="true">+</span></strong><p>{stat.label}</p>
    </div>)}
    {footnote && <p className="stat-footnote">{footnote}</p>}
  </section>;
}

/** Inline figure for prose, so 204/600 can never drift between pages. */
export function StatValue({ index }) {
  return <strong>{siteConfig.stats[index]?.value}</strong>;
}
