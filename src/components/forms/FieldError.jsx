/**
 * Announced to screen readers and linked to its input through aria-describedby.
 * Renders nothing when the field is valid.
 */
export default function FieldError({ id, message, className = "" }) {
  if (!message) return null;
  return <span id={id} className={`field-error ${className}`.trim()} role="alert">{message}</span>;
}
