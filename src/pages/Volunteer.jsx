import { HandHeart, Lightbulb, Users } from "lucide-react";
import SEO from "../components/ui/SEO.jsx";
import PageHeroImage from "../components/ui/PageHeroImage.jsx";
import VolunteerForm from "../components/forms/VolunteerForm.jsx";
import { pageHeroImages } from "../data/pageHeroImages.js";

export default function Volunteer() {
  return <>
    <SEO title="Volunteer" description="Share your skills and explore volunteer opportunities with Hearts of Care Orphan Project in Kampala." />
    <PageHeroImage page={pageHeroImages.volunteer}><span className="eyebrow">Give your skills</span><h1>Make a difference,<br /><em>one act at a time.</em></h1><p>Bring your time, ideas or professional skills to support children and girls in the Hearts of Care community.</p></PageHeroImage>
    <section className="volunteer-intro section-pad"><div className="wrap volunteer-intro-grid"><div className="volunteer-photo"><img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=85" alt="Volunteers working together in their community" loading="lazy" /></div><div><span className="eyebrow">Share what you do well</span><h2>Good work grows when we do it together.</h2><p>We welcome people interested in sharing their skills in ways that support the organisation's work. Tell us what you can offer and when you may be available.</p><div className="volunteer-points"><span><HandHeart size={18} /> Bring care and commitment</span><span><Lightbulb size={18} /> Share your experience</span><span><Users size={18} /> Grow through collaboration</span></div></div></div></section>
    <section className="volunteer-form-section section-pad"><div className="wrap volunteer-form-layout"><div><span className="eyebrow">Take the next step</span><h2>We'd love to hear<br /><em>from you.</em></h2><p>Complete this application to share your interests and availability. A team member can follow up once a submission service is connected.</p><div className="form-aside-note"><span>Good to know</span><p>This is an enquiry, not a confirmed placement. We'll learn more about your interests before discussing a suitable opportunity.</p></div></div><VolunteerForm /></div></section>
  </>;
}
