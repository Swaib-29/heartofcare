import { ArrowUpRight, BookOpen, Heart, Sparkles, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/ui/SEO.jsx";
import Button from "../components/ui/Button.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import StatBand from "../components/ui/StatBand.jsx";
import StoryCard from "../components/cards/StoryCard.jsx";
import { programmes } from "../data/programmes.js";
import { stories } from "../data/stories.js";
import { siteConfig } from "../data/siteConfig.js";
import { responsiveImage } from "../lib/images.js";

const icons = { book: BookOpen, heart: Heart, cross: Stethoscope, sparkles: Sparkles };
const girls = siteConfig.stats[1]?.value;

export default function Home() {
  return <>
    <SEO jsonLd={{
      "@context": "https://schema.org",
      "@type": "NGO",
      name: siteConfig.name,
      url: siteConfig.url,
      description: "Hearts of Care Orphan Project supports vulnerable children and adolescent girls in Kampala, Uganda through education, meals, healthcare and dignity.",
      address: { "@type": "PostalAddress", addressLocality: "Kampala", addressCountry: "UG" }
    }} />
    <section className="hero wrap">
      <div className="hero-copy" data-aos="fade-up">
        <span className="eyebrow"><span className="eyebrow-dot" /> A little care. A brighter future.</span>
        <h1>Every child deserves a chance to <em>thrive.</em></h1>
        <p>Together, we can create opportunities, restore dignity and build brighter futures for vulnerable children and adolescent girls in Uganda.</p>
        <div className="hero-actions"><Button to="/donate">Support our mission</Button><Link to="/impact" className="underlined-link">Discover our impact <ArrowUpRight size={17} /></Link></div>
        <div className="hero-note"><span className="note-line" /> Rooted in care. Growing in Kampala, Uganda.</div>
      </div>
      <div className="hero-visual" data-aos="fade-left" data-aos-delay="100">
        <div className="hero-photo">
          <img {...responsiveImage("https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1400&q=88", [600, 900, 1400], "(max-width: 760px) 100vw, 52vw")} alt="Community volunteers coming together to support local families" fetchPriority="high" decoding="async" />
          <div className="image-wash" />
          <div className="photo-caption"><span className="caption-mark"><Heart size={16} fill="currentColor" /></span><span>Care that creates<br /><strong>lasting change.</strong></span></div>
        </div>
        <div className="hero-sticker"><span>In</span><strong>UG</strong><small>community<br />first</small></div>
        <div className="hero-vertical-label">HEARTS OF CARE · KAMPALA</div>
      </div>
    </section>

    <StatBand />

    <section className="intro-section section-pad">
      <div className="wrap intro-grid">
        <div className="intro-image" data-aos="fade-right">
          <img {...responsiveImage("https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1100&q=85", [480, 800, 1100], "(max-width: 760px) 100vw, 45vw")} alt="Students gathered for a learning activity" loading="lazy" decoding="async" />
          <div className="image-stamp"><span>Small acts</span><strong>matter</strong><i>✳</i></div>
        </div>
        <div className="intro-copy" data-aos="fade-up">
          <SectionHeading eyebrow="Who we are" title="Care that creates lasting change." copy="Hearts of Care Orphan Project is a Kampala-based organisation supporting children and adolescent girls with practical care, opportunity and dignity." />
          <p>From education and meals to healthcare support and a girls' dignity programme, we believe every young person deserves the chance to learn, grow and shape their own future.</p>
          <Button to="/about" variant="outline">Learn about us</Button>
          <div className="mini-values"><span>01 <b>Care</b></span><span>02 <b>Dignity</b></span><span>03 <b>Opportunity</b></span></div>
        </div>
      </div>
    </section>

    <section className="programmes-section section-pad wrap">
      <div className="section-topline"><SectionHeading eyebrow="What we do" title="A foundation for brighter futures." copy="Practical support, rooted in care, that meets children and girls where they are." /><Link className="text-link section-top-link" to="/programmes">Explore all programmes <ArrowUpRight size={15} /></Link></div>
      <div className="programme-grid">
        {programmes.map((program, index) => {
          const Icon = icons[program.icon];
          return <Link to={`/programmes#${program.id}`} className="programme-card" key={program.id} data-aos="fade-up" data-aos-delay={index * 90}>
            <div className="programme-card-image"><img {...responsiveImage(program.image, [360, 620, 1100], "(max-width: 450px) 100vw, (max-width: 760px) 50vw, 25vw")} alt={program.alt} loading="lazy" decoding="async" /><span className="programme-number">{program.number}</span></div>
            <div className="programme-card-content"><span className="programme-icon"><Icon size={19} /></span><h3>{program.title}</h3><p>{program.description}</p><span className="card-arrow"><ArrowUpRight size={17} /></span></div>
          </Link>;
        })}
      </div>
    </section>

    <section className="dignity-feature section-pad">
      <div className="wrap dignity-grid">
        <div className="dignity-copy" data-aos="fade-up"><span className="eyebrow eyebrow-light">The dignity programme</span><h2>Keeping girls in school.<br /><em>Restoring dignity.</em></h2><p>Monthly sanitary pad support reaches {girls} adolescent girls, helping remove one barrier to learning and supporting confidence at school.</p><Button to="/programmes#dignity" variant="cream">Learn about the programme</Button></div>
        <div className="dignity-photo" data-aos="fade-left"><img {...responsiveImage("https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1100&q=85", [480, 800, 1100], "(max-width: 760px) 100vw, 48vw")} alt="Students sharing a learning moment in the classroom" loading="lazy" decoding="async" /><span className="photo-note">Every girl deserves to learn with confidence.</span></div>
      </div>
    </section>

    <section className="stories-section section-pad wrap">
      <div className="section-topline"><SectionHeading eyebrow="From our community" title="Stories still being written." copy="A glimpse of the care, effort and possibility behind our work. Sample stories are marked as demonstrations." /><Link className="text-link section-top-link" to="/stories">Visit the journal <ArrowUpRight size={15} /></Link></div>
      <div className="story-grid">{stories.map((story, index) => <div key={story.id} data-aos="fade-up" data-aos-delay={index * 100}><StoryCard story={story} /></div>)}</div>
    </section>

    <section className="home-cta wrap" data-aos="fade-up">
      <div><span className="eyebrow eyebrow-light">Be part of the change</span><h2>Together, we can make<br />a difference.</h2><p>Your support can help create opportunities for children and restore dignity to adolescent girls.</p></div>
      <div className="cta-actions"><Button to="/donate" variant="cream">Donate / partner</Button><Link to="/contact" className="cta-text-link">Talk with our team <ArrowUpRight size={15} /></Link></div>
      <span className="cta-decoration">care<br />grows</span>
    </section>
  </>;
}
