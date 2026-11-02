import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitContactEnquiry } from "../../services/contactService.js";
import FieldError from "./FieldError.jsx";

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  interest: z.string().min(1, "Please choose a topic."),
  message: z.string().min(10, "Please share a little more (at least 10 characters)."),
  consent: z.literal(true, { error: "Please confirm you agree to be contacted." })
});

export default function EnquiryForm({ compact = false }) {
  const [result, setResult] = useState(null);
  const [sending, setSending] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: zodResolver(schema) });
  const invalid = (name) => ({ "aria-invalid": Boolean(errors[name]), "aria-describedby": errors[name] ? `enquiry-${name}-error` : undefined });
  const onSubmit = async (values) => {
    setSending(true);
    setResult(null);
    try {
      const response = await submitContactEnquiry(values);
      if (response.submitted) {
        setResult({ ok: true, message: "Thank you. Your enquiry has been sent." });
        reset();
      } else {
        setResult({ ok: false, message: response.message });
      }
    } catch (error) {
      setResult({ ok: false, message: error.message || "We couldn't send your enquiry. Please try again." });
    } finally {
      setSending(false);
    }
  };
  return <form className={`form-card${compact ? " form-compact" : ""}`} onSubmit={handleSubmit(onSubmit)} noValidate>
    {!compact && <div className="form-intro"><span className="eyebrow">We’d love to hear from you</span><h2>Start a conversation</h2><p>Tell us what you’re interested in and our team will follow up.</p></div>}
    <div className="form-grid">
      <label>Full name<input {...register("name")} placeholder="Your name" autoComplete="name" {...invalid("name")} /><FieldError id="enquiry-name-error" message={errors.name?.message} /></label>
      <label>Email address<input {...register("email")} type="email" placeholder="you@example.com" autoComplete="email" {...invalid("email")} /><FieldError id="enquiry-email-error" message={errors.email?.message} /></label>
      <label className="full-field">I’m interested in<select {...register("interest")} defaultValue="" {...invalid("interest")}><option value="" disabled>Choose a topic</option><option>Supporting the mission</option><option>Partnership opportunities</option><option>Volunteering</option><option>General enquiry</option></select><FieldError id="enquiry-interest-error" message={errors.interest?.message} /></label>
      <label className="full-field">Message<textarea {...register("message")} rows="4" placeholder="How would you like to get involved?" {...invalid("message")} /><FieldError id="enquiry-message-error" message={errors.message?.message} /></label>
      <label className="consent full-field"><input type="checkbox" {...register("consent")} {...invalid("consent")} /><span>I agree to be contacted about this enquiry.</span></label>
      <FieldError id="enquiry-consent-error" message={errors.consent?.message} className="full-field" />
    </div>
    <button className="button button-green" disabled={sending}>{sending ? "Sending…" : "Send enquiry"} <span aria-hidden="true">→</span></button>
    {result && <p className={`form-result${result.ok ? "" : " form-result-error"}`} role={result.ok ? "status" : "alert"}>{result.message}</p>}
    <p className="form-note">Enquiry form only — no payment is processed. Details are sent only once a submission service is connected.</p>
  </form>;
}
