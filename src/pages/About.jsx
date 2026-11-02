import { HeartHandshake, Eye, Compass, ShieldCheck, Info } from "lucide-react";
import SEO from "../components/ui/SEO.jsx";
import Button from "../components/ui/Button.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import PageHeroImage from "../components/ui/PageHeroImage.jsx";
import { pageHeroImages } from "../data/pageHeroImages.js";
import { siteConfig } from "../data/siteConfig.js";
import { responsiveImage } from "../lib/images.js";

const values = [
  { icon: HeartHandshake, title: "Compassion", copy: "We begin by listening and meeting people with care." },
  { icon: ShieldCheck, title: "Dignity", copy: "Every child and young person deserves respect and agency." },
  { icon: Compass, title: "Commitment", copy: "We work to show up consistently for the community." },
  { icon: Eye, title: "Transparency", copy: "We aim to communicate clearly about our work and its impact." }
];

const children = siteConfig.stats[0]?.value;
const girls = siteConfig.stats[1]?.value;

/** Renders approved copy, or an honest "being confirmed" state — never a fake placeholder in production copy. */
function PendingCopy({ children: label, value }) {
  if (value) return <p>{value}</p>;
  return <p className="pending-copy"><Info size={15} aria-hidden="true" /> {label} is being confirmed with the organisation and will be published here.</p>;
}

export default function About() {
  return <>
    <SEO title="About us" description="Meet Hearts of Care Orphan Project, a Kampala organisation supporting vulnerable children and adolescent girls." />
    <PageHeroImage page={pageHeroImages.about}><span className="eyebrow">Our story, still unfolding</span><h1>Rooted in care.<br /><em>Focused on possibility.</em></h1><p>We are Hearts of Care Orphan Project, working alongside vulnerable children and adolescent girls in Kampala, Uganda.</p></PageHeroImage>
    <section className="about-overview section-pad"><div className="wrap about-grid"><div className="about-photo"><img {...responsiveImage("https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=85", [480, 800, 1200], "(max-width: 760px) 100vw, 45vw")} alt="Community members joining together around a shared purpose" loading="lazy" /></div><div><SectionHeading eyebrow="A little about us" title="Care is where a brighter future begins." /><p>Hearts of Care Orphan Project supports {children} orphaned and vulnerable children through education, meals and healthcare support. Our dignity programme provides monthly sanitary pads to {girls} adolescent girls to help them remain in school.</p><p>We are committed to making space for children and girls to learn, feel supported and build the future they want.</p><Button to="/programmes" variant="outline">Explore our programmes</Button></div></div></section>
    <section className="mission-section section-pad"><div className="wrap mission-grid"><SectionHeading eyebrow="Our purpose" title="A commitment to care, dignity and opportunity." /><div className="mission-cards"><article><span>01</span><h3>Our mission</h3><PendingCopy value={siteConfig.mission}>Our mission statement</PendingCopy></article><article><span>02</span><h3>Our vision</h3><PendingCopy value={siteConfig.vision}>Our vision statement</PendingCopy></article></div></div></section>
    <section className="values-section section-pad wrap"><SectionHeading eyebrow="What guides us" title="The values behind every act of care." centered /><div className="values-grid">{values.map(({ icon: Icon, title, copy }, index) => <article key={title} data-aos="fade-up" data-aos-delay={index * 80}><span className="value-icon"><Icon size={21} /></span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="leader-section section-pad"><div className="wrap leader-grid">
      <div className="leader-image">
        {siteConfig.leadershipPhoto
          ? <img {...responsiveImage(siteConfig.leadershipPhoto, [380, 760], "(max-width: 760px) 100vw, 38vw")} alt={`Portrait of ${siteConfig.executiveDirector}, Executive Director`} loading="lazy" />
          : <div className="leader-placeholder" role="img" aria-label="Portrait to be supplied">Photograph to be supplied</div>}
      </div>
      <div><span className="eyebrow">Our leadership</span><h2>{siteConfig.executiveDirector}</h2><p className="leader-title">Executive Director</p><PendingCopy value={siteConfig.leadershipBio}>The Executive Director's biography</PendingCopy><p>We believe lasting change is built through trust, partnership and a shared commitment to children's wellbeing.</p><Button to="/contact" variant="outline">Connect with us</Button></div>
    </div></section>
    <section className="simple-cta wrap"><div><span className="eyebrow eyebrow-light">Join us in our work</span><h2>Every child deserves room to thrive.</h2></div><Button to="/donate" variant="cream">Get involved</Button></section>
  </>;
}
