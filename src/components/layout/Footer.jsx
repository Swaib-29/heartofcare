import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../navigation/Logo.jsx";
import { siteConfig } from "../../data/siteConfig.js";

export default function Footer() {
  const socials = Object.entries(siteConfig.social || {}).filter(([, url]) => Boolean(url));
  return (
    <footer className="site-footer">
      <div className="footer-main wrap">
        <div className="footer-brand">
          <Logo light />
          <p>Creating opportunities, restoring dignity and building brighter futures in Kampala, Uganda.</p>
          <span className="footer-location"><MapPin size={15} aria-hidden="true" /> {siteConfig.address || siteConfig.location}</span>
          {socials.length > 0 && <ul className="footer-social">
            {socials.map(([network, url]) => <li key={network}>
              <a href={url} target="_blank" rel="noreferrer" aria-label={`${siteConfig.shortName} on ${network[0].toUpperCase()}${network.slice(1)}`}>{network[0].toUpperCase()}{network.slice(1)}</a>
            </li>)}
          </ul>}
        </div>
        <div className="footer-col"><h3>Explore</h3><Link to="/about">About us</Link><Link to="/programmes">Our programmes</Link><Link to="/impact">Our impact</Link><Link to="/stories">Stories & news</Link></div>
        <div className="footer-col"><h3>Get involved</h3><Link to="/donate">Support our mission</Link><Link to="/donate">Become a partner</Link><Link to="/volunteer">Volunteer with us</Link><Link to="/contact">Contact</Link></div>
        <div className="footer-cta"><span className="eyebrow eyebrow-light">Make a difference</span><h3>Care changes what’s possible.</h3><Link to="/donate" className="button button-cream">Find your way to help <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
      </div>
      <div className="footer-bottom wrap">
        <span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
        <span>Made with care in Uganda</span>
      </div>
    </footer>
  );
}
