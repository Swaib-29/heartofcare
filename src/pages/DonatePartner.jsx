import { Building2, Gift, HandHeart, HeartHandshake, ShieldCheck, Info } from "lucide-react";
import SEO from "../components/ui/SEO.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import PageHeroImage from "../components/ui/PageHeroImage.jsx";
import Button from "../components/ui/Button.jsx";
import EnquiryForm from "../components/forms/EnquiryForm.jsx";
import { siteConfig, hasGivingChannels } from "../data/siteConfig.js";
import { pageHeroImages } from "../data/pageHeroImages.js";
import { responsiveImage } from "../lib/images.js";

const ways = [
  { icon: HandHeart, title: "Individual support", copy: "Support the programmes that matter to you — one-off or recurring." },
  { icon: Building2, title: "Corporate partnerships", copy: "Explore a partnership shaped around shared values and community priorities." },
  { icon: HeartHandshake, title: "Institutional partners", copy: "Connect with us about programme collaboration and long-term support." },
  { icon: Gift, title: "In-kind contributions", copy: "Ask about practical goods or services that may support the organisation's work." }
];

const children = siteConfig.stats[0]?.value;
const girls = siteConfig.stats[1]?.value;
const whatsappDigits = siteConfig.whatsapp.replace(/\D/g, "");

export default function DonatePartner() {
  return <>
    <SEO title="Donate & partner" description="Explore ways to support Hearts of Care Orphan Project through verified giving channels, partnership and donation enquiries." />
    <PageHeroImage page={pageHeroImages.donate}><span className="eyebrow">Your support matters</span><h1>Help care reach<br /><em>more children.</em></h1><p>Your support can help create opportunities for children and restore dignity to adolescent girls. Choose a verified channel below or start a conversation with our team.</p><Button href={whatsappDigits ? `https://wa.me/${whatsappDigits}?text=${encodeURIComponent("Hello Hearts of Care, I would like to support your work.")}` : undefined} to={whatsappDigits ? undefined : "/contact"} target={whatsappDigits ? "_blank" : undefined} rel={whatsappDigits ? "noreferrer" : undefined}>Talk with our team</Button></PageHeroImage>

    <section className="giving-section section-pad" id="giving">
      <div className="wrap">
        <SectionHeading eyebrow="How to give" title="Verified ways to contribute." copy="Only channels confirmed by Hearts of Care are published here. We never ask for gifts through unverified links or personal accounts." />
        {hasGivingChannels
          ? <div className="giving-grid">
            {siteConfig.givingChannels.map((channel) => <article className="giving-card" key={channel.id}>
              <span className="giving-card-kind">{channel.kind}</span>
              <h3>{channel.label}</h3>
              <dl>
                {channel.accountName && <><dt>Account name</dt><dd>{channel.accountName}</dd></>}
                {channel.accountNumber && <><dt>{channel.kind === "Mobile money" ? "Number" : "Account number"}</dt><dd>{channel.accountNumber}</dd></>}
                {channel.reference && <><dt>Reference</dt><dd>{channel.reference}</dd></>}
              </dl>
            </article>)}
            <p className="giving-reassurance"><ShieldCheck size={18} aria-hidden="true" /> Please confirm details directly with the organisation before sending any contribution.</p>
          </div>
          : <div className="giving-pending">
            <Info size={22} aria-hidden="true" />
            <div>
              <h3>Giving channels are being verified</h3>
              <p>We do not publish payment details until they are confirmed by the organisation. In the meantime, the fastest way to help is to message the team directly — they will share the correct details with you.</p>
              <div className="giving-pending-actions">
                {whatsappDigits && <Button href={`https://wa.me/${whatsappDigits}?text=${encodeURIComponent("Hello Hearts of Care, please share your verified ways to donate.")}`} target="_blank" rel="noreferrer" variant="green">Ask on WhatsApp</Button>}
                <Button to="/contact" variant="outline">Send an enquiry</Button>
              </div>
            </div>
          </div>}
        {siteConfig.givingSheetUrl && <p className="giving-sheet"><a className="text-link" href={siteConfig.givingSheetUrl}>Download the giving sheet (PDF)</a></p>}
      </div>
    </section>

    <section className="why-support section-pad"><div className="wrap why-grid"><div><SectionHeading eyebrow="Why partner with us" title="Support that makes room for possibility." copy={`Hearts of Care supports ${children} orphaned and vulnerable children and reaches ${girls} adolescent girls through its dignity programme.`} /><p>We welcome thoughtful conversations with individuals, organisations and institutions who share a commitment to children's wellbeing and girls' dignity.</p></div><div className="why-image"><img {...responsiveImage("https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=85", [480, 800, 1200], "(max-width: 760px) 100vw, 48vw")} alt="Community volunteers collaborate on a local project" loading="lazy" /></div></div></section>
    <section className="ways-section section-pad wrap"><SectionHeading eyebrow="Ways to get involved" title="Find a way that feels right." centered /><div className="ways-grid">{ways.map(({ icon: Icon, title, copy }, index) => <article key={title} data-aos="fade-up" data-aos-delay={index * 80}><span><Icon size={22} /></span><h3>{title}</h3><p>{copy}</p><a className="text-link" href="#enquiry">Start an enquiry <span aria-hidden="true">↗</span></a></article>)}</div></section>
    <section className="donation-note wrap"><span className="note-icon"><HeartHandshake size={23} /></span><div><h3>Donation enquiries only</h3><p>This website does not process card payments. Bank and mobile-money details are published only after the organisation confirms them, so please verify any account details with the team before contributing.</p></div></section>
    <section className="enquiry-section section-pad" id="enquiry"><div className="wrap enquiry-grid"><div><span className="eyebrow">Start a conversation</span><h2>Let's explore<br /><em>what's possible.</em></h2><p>Leave an enquiry and tell us a little about how you would like to help. We'll come back to you with the right next step.</p></div><EnquiryForm compact /></div></section>
  </>;
}
