import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Button({ to, href, children, variant = "green", className = "", type = "button", ...props }) {
  const classes = `button button-${variant} ${className}`.trim();
  const content = <>{children}<ArrowRight size={16} aria-hidden="true" /></>;
  if (to) return <Link className={classes} to={to} {...props}>{content}</Link>;
  if (href) return <a className={classes} href={href} {...props}>{content}</a>;
  return <button className={classes} type={type} {...props}>{content}</button>;
}
