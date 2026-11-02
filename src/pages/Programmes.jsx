import { ArrowDown, BookOpen, Heart, Sparkles, Stethoscope } from "lucide-react";
import SEO from "../components/ui/SEO.jsx";
import Button from "../components/ui/Button.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import PageHeroImage from "../components/ui/PageHeroImage.jsx";
import { pageHeroImages } from "../data/pageHeroImages.js";
import { programmes } from "../data/programmes.js";
import { siteConfig } from "../data/siteConfig.js";
import { responsiveImage } from "../lib/images.js";

const girls = siteConfig.stats[1]?.value;

const iconMap = { book: BookOpen, heart: Heart, cross: Stethoscope, sparkles: Sparkles };
const details = [
  "Learning can open doors for a lifetime. Hearts of Care supports access to education for vulnerable children, helping them build the knowledge and confidence to pursue their goals.",
  "Nutritious food is an important part of a child's wellbeing. Our meals and nutrition work forms part of the practical support provided to children in our care.",
  "We support healthcare access for vulnerable children, recognising that wellbeing and learning are closely connected. Specific services are not listed until confirmed.",
  `Our dignity programme provides monthly sanitary pad support to ${siteConfig.stats[1]?.value} adolescent girls, helping them remain in school with confidence and dignity.`
];

export default function Programmes() {
  return <>
    <SEO title="Our programmes" description="Explore education, meals, healthcare and girls' dignity programmes at Hearts of Care in Kampala." />
    <PageHeroImage page={pageHeroImages.programmes}><span className="eyebrow">Care in action</span><h1>Support that meets<br /><em>real everyday needs.</em></h1><p>Our programmes support learning, wellbeing and dignity for children and adolescent girls in Kampala.</p><a className="underlined-link" href="#education">Explore programmes <ArrowDown size={16} /></a></PageHeroImage>
    <section className="programme-details section-pad" id="education"><div className="wrap"><SectionHeading eyebrow="Our programmes" title="Four ways we show up." copy="The work is practical, human and centred on the potential of every child." /><div className="programme-detail-list">
      {programmes.map((program, index) => {
        const Icon = iconMap[program.icon];
        return <article className={`programme-detail${index % 2 ? " detail-reverse" : ""}`} id={program.id} key={program.id} data-aos="fade-up">
          <div className="detail-image"><img {...responsiveImage(program.image, [480, 800, 1100], "(max-width: 760px) 100vw, 50vw")} alt={program.alt} loading="lazy" decoding="async" /><span className="detail-count">{program.number}</span></div>
          <div className="detail-copy"><span className="programme-icon"><Icon size={20} /></span><span className="eyebrow">Programme {program.number}</span><h2>{program.title}</h2><p>{details[index]}</p>{program.id === "dignity" && <div className="detail-stat"><strong>{girls}</strong><span>adolescent girls reached with monthly sanitary pad support</span></div>}<Button to="/donate" variant="outline">Support this programme</Button></div>
        </article>;
      })}
    </div></div></section>
    <section className="simple-cta wrap"><div><span className="eyebrow eyebrow-light">Every contribution matters</span><h2>Help care reach further.</h2></div><Button to="/donate" variant="cream">Support our mission</Button></section>
  </>;
}
