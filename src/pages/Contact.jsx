import { ArrowUpRight, Mail, MapPin, Phone, MessageCircle, Info } from "lucide-react";
import SEO from "../components/ui/SEO.jsx";
import PageHeroImage from "../components/ui/PageHeroImage.jsx";
import EnquiryForm from "../components/forms/EnquiryForm.jsx";
import { siteConfig, contactIsConfigured } from "../data/siteConfig.js";
import { pageHeroImages } from "../data/pageHeroImages.js";

const whatsappDigits = siteConfig.whatsapp.replace(/\D/g, "");

export default function Contact() {
  return <>
    <SEO title="Contact" description="Contact Hearts of Care Orphan Project in Kampala, Uganda." jsonLd={{
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Hearts of Care Orphan Project",
      url: `${siteConfig.url}/contact`
    }} />
    <PageHeroImage page={pageHeroImages.contact}><span className="eyebrow">Let's connect</span><h1>We'd be glad<br /><em>to hear from you.</em></h1><p>Whether you have a question, want to volunteer or are exploring a partnership, start a conversation with Hearts of Care.</p></PageHeroImage>
    <section className="contact-section section-pad"><div className="wrap contact-layout"><div className="contact-info"><span className="eyebrow">Find us in Uganda</span><h2>Care begins<br />with a conversation.</h2><div className="contact-info-list">
      <div><span className="contact-icon"><MapPin size={18} aria-hidden="true" /></span><p><strong>Location</strong>{siteConfig.address || siteConfig.location}</p></div>
      {siteConfig.phone && <div><span className="contact-icon"><Phone size={18} aria-hidden="true" /></span><p><strong>Phone</strong><a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>{siteConfig.phone}</a></p></div>}
      {siteConfig.email && <div><span className="contact-icon"><Mail size={18} aria-hidden="true" /></span><p><strong>Email</strong><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p></div>}
      {whatsappDigits && <div><span className="contact-icon"><MessageCircle size={18} aria-hidden="true" /></span><p><strong>WhatsApp</strong><a href={`https://wa.me/${whatsappDigits}`} target="_blank" rel="noreferrer">{siteConfig.whatsapp}</a></p></div>}
    </div><a className="button button-outline" href={siteConfig.mapUrl} target="_blank" rel="noreferrer">Open Google Maps <ArrowUpRight size={16} aria-hidden="true" /></a>
      {!contactIsConfigured && <p className="contact-small"><Info size={13} aria-hidden="true" /> A direct phone number and email address are being confirmed. WhatsApp and the enquiry form reach the team today.</p>}
    </div><EnquiryForm compact /></div></section>
    <section className="contact-map-placeholder wrap"><div><MapPin size={23} aria-hidden="true" /><span className="eyebrow">Kampala, Uganda</span><h2>Find us on the map.</h2><p>Open the organisation's supplied Google Maps listing for directions and location details.</p><a className="text-link" href={siteConfig.mapUrl} target="_blank" rel="noreferrer">View map listing <ArrowUpRight size={16} aria-hidden="true" /></a></div><div className="map-decoration" aria-hidden="true"><span className="map-ring ring-one" /><span className="map-ring ring-two" /><span className="map-pin"><MapPin size={30} fill="currentColor" /></span><span className="map-label">Kampala</span></div></section>
  </>;
}
