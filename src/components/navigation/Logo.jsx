import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Brand lockup. The accessible name comes from the visible text itself
 * (so it matches what is on screen — WCAG 2.5.3); the mark is decorative.
 */
export default function Logo({ light = false, onNavigate }) {
  return <Link to="/" className={`brand${light ? " brand-light" : ""}`} onClick={onNavigate}>
    <span className="brand-mark" aria-hidden="true"><Heart size={20} fill="currentColor" /></span>
    <span className="brand-name">hearts<span>of care</span><small>ORPHAN PROJECT · UGANDA</small></span>
  </Link>;
}
