import { ArrowUpRight, BookOpen, Heart, Sparkles, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/ui/SEO.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import PageHeroImage from "../components/ui/PageHeroImage.jsx";
import { pageHeroImages } from "../data/pageHeroImages.js";
import Button from "../components/ui/Button.jsx";
import { siteConfig } from "../data/siteConfig.js";
import { programmes } from "../data/programmes.js";
import { responsiveImage } from "../lib/images.js";

const icons = [BookOpen, Heart, Stethoscope, Sparkles];

export default function Impact() {
  return <>
    <SEO title="Our impact" description="See the confirmed reach and programmes of Hearts of Care Orphan Project." />
    <PageHeroImage page={pageHeroImages.impact}><span className="eyebrow">The difference care can make</span><h1>Real people.<br /><em>Meaningful support.</em></h1><p>Our impact begins with consistent, practical support and a belief in the potential of every child.</p></PageHeroImage>
    <section className="impact-stats section-pad"><div className="wrap"><SectionHeading eyebrow="Our reach" title="A growing community of care." copy="Figures provided by Hearts of Care Orphan Project." centered /><div className="impact-number-grid">{siteConfig.stats.map((item, index) => <div className="impact-number-card" key={item.value} data-aos="zoom-in" data-aos-delay={index * 100}><span>0{index + 1}</span><strong>{item.value}<i>+</i></strong><p>{item.label}</p></div>)}</div></div></section>
    <section className="impact-programmes section-pad wrap"><SectionHeading eyebrow="Beyond the numbers" title="Support shaped around everyday life." /><div className="impact-overview-grid">{programmes.map((item, index) => {const Icon = icons[index]; return <article key={item.id}><span className="impact-overview-icon"><Icon size={19} /></span><h3>{item.title}</h3><p>{item.description}</p></article>;})}</div></section>
    <section className="impact-story section-pad"><div className="wrap impact-story-grid"><div className="impact-story-image"><img {...responsiveImage("https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1100&q=85", [480, 800, 1100], "(max-width: 760px) 100vw, 48vw")} alt="Students sharing a classroom learning experience" loading="lazy" decoding="async" /></div><div><span className="eyebrow">A programme in focus</span><h2>More room to learn, with dignity.</h2><p>The girls' dignity programme reaches {siteConfig.stats[1]?.value} adolescent girls with monthly sanitary pad support. It is one part of a broader commitment to help girls stay in school and feel supported.</p><Link className="text-link" to="/programmes#dignity">Explore the programme <ArrowUpRight size={15} /></Link></div></div></section>
    <section className="reports-section wrap"><div><span className="eyebrow">Reports & transparency</span><h2>Our reporting is growing.</h2><p>Annual reports and financial documents will be shared here when they are available and approved for publication.</p></div><div className="report-placeholder"><span className="report-icon" aria-hidden="true">↗</span><h3>Annual reports</h3><p>No public reports are available yet.</p><button disabled className="button button-outline">Coming soon</button></div></section>
    <section className="simple-cta wrap"><div><span className="eyebrow eyebrow-light">Be part of the story</span><h2>Help make meaningful care possible.</h2></div><Button to="/donate" variant="cream">Ways to support</Button></section>
  </>;
}
