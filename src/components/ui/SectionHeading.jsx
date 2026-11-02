export default function SectionHeading({ eyebrow, title, copy, light = false, centered = false }) {
  return <div className={`section-heading${light ? " section-heading-light" : ""}${centered ? " text-center" : ""}`}>
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h2>{title}</h2>
    {copy && <p>{copy}</p>}
  </div>;
}
