import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo.jsx";

const links = [
  { to: "/about", label: "About us" },
  { to: "/programmes", label: "Programmes" },
  { to: "/impact", label: "Our impact" },
  { to: "/stories", label: "Stories" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [involvedOpen, setInvolvedOpen] = useState(false);
  const involvedRef = useRef(null);
  const close = () => {
    setOpen(false);
    setInvolvedOpen(false);
  };
  const navClass = ({ isActive }) => `nav-link${isActive ? " nav-link-active" : ""}`;

  // Close the "Get involved" menu on outside click or Escape.
  useEffect(() => {
    if (!involvedOpen) return;
    const onPointer = (event) => { if (!involvedRef.current?.contains(event.target)) setInvolvedOpen(false); };
    const onKey = (event) => { if (event.key === "Escape") setInvolvedOpen(false); };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [involvedOpen]);

  return (
    <>
      <div className="announcement">
        <span>Care that creates lasting change.</span>
        <Link to="/donate">Explore ways to support <ArrowUpRight size={13} aria-hidden="true" /></Link>
      </div>
      <header className="site-header">
        <div className="nav-shell">
          <Logo onNavigate={close} />
          <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="main-nav">
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
          <nav id="main-nav" className={`main-nav${open ? " main-nav-open" : ""}`} aria-label="Main navigation">
            {links.map((link) => <NavLink onClick={close} className={navClass} key={link.to} to={link.to}>{link.label}</NavLink>)}
            <div className="involved-wrap" ref={involvedRef}>
              <button className="nav-link involved-trigger" aria-expanded={involvedOpen} aria-controls="involved-menu" onClick={() => setInvolvedOpen(!involvedOpen)}>
                Get involved <ChevronDown size={14} aria-hidden="true" />
              </button>
              {involvedOpen && <div className="involved-menu" id="involved-menu">
                <Link to="/volunteer" onClick={close}>Become a volunteer</Link>
                <Link to="/donate" onClick={close}>Partner with us</Link>
              </div>}
            </div>
            <NavLink onClick={close} className={navClass} to="/contact">Contact</NavLink>
            <Link to="/donate" onClick={close} className="button button-small button-green">Donate <ArrowUpRight size={15} aria-hidden="true" /></Link>
          </nav>
        </div>
      </header>
    </>
  );
}
