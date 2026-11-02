import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import { siteConfig } from "../data/siteConfig.js";

export default function MainLayout() {
  const [scroll, setScroll] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const whatsappDigits = siteConfig.whatsapp.replace(/\D/g, "");
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScroll(max > 0 ? (window.scrollY / max) * 100 : 0);
      setShowTop(window.scrollY > 560);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);
  return <>
    <div className="scroll-progress" style={{ width: `${scroll}%` }} aria-hidden="true" />
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <Navbar />
    <main id="main-content"><Outlet /></main>
    <Footer />
    {showTop && <button className="back-top" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><ArrowUp size={18} /></button>}
    {whatsappDigits && <a className="floating-whatsapp" href={`https://wa.me/${whatsappDigits}`} target="_blank" rel="noreferrer" aria-label="Chat with Hearts of Care on WhatsApp" title="Chat with us on WhatsApp"><MessageCircle size={23} /></a>}
  </>;
}
