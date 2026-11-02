import { Link } from "react-router-dom";
import SEO from "../components/ui/SEO.jsx";
import Button from "../components/ui/Button.jsx";

const suggestions = [
  { to: "/programmes", label: "Our programmes" },
  { to: "/impact", label: "Our impact" },
  { to: "/stories", label: "Stories" },
  { to: "/donate", label: "Ways to support" },
  { to: "/contact", label: "Contact" }
];

export default function NotFound() {
  return <>
    <SEO title="Page not found" description="This page may have moved or may not exist. Explore our programmes, impact and ways to support Hearts of Care." noindex />
    <section className="not-found wrap" aria-labelledby="not-found-title">
      <span className="eyebrow">404 · Page not found</span>
      <h1 id="not-found-title">Looks like this<br /><em>path went quiet.</em></h1>
      <p>The page you’re looking for may have moved or may not exist.</p>
      <Button to="/">Back to homepage</Button>
      <nav className="not-found-links" aria-label="Suggested pages">
        <span>Or try one of these</span>
        <ul>{suggestions.map((item) => <li key={item.to}><Link to={item.to}>{item.label}</Link></li>)}</ul>
      </nav>
    </section>
  </>;
}
