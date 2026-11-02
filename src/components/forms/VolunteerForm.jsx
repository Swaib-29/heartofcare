import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitVolunteerApplication } from "../../services/volunteerService.js";
import FieldError from "./FieldError.jsx";

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  skills: z.string().min(2, "Tell us a little about your skills."),
  availability: z.string().min(1, "Please select your availability."),
  experience: z.string().optional(),
  motivation: z.string().min(20, "Please write at least 20 characters."),
  consent: z.literal(true, { error: "Please provide consent to continue." })
});

export default function VolunteerForm() {
  const [result, setResult] = useState(null);
  const [sending, setSending] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: zodResolver(schema) });
  const onSubmit = async (values) => {
    setSending(true);
    setResult(null);
    try {
      const response = await submitVolunteerApplication(values);
      if (response.submitted) {
        setResult({ ok: true, message: "Thank you. Your application has been sent." });
        reset();
      } else {
        setResult({ ok: false, message: response.message });
      }
    } catch (error) {
      setResult({ ok: false, message: error.message || "We couldn't submit your application. Please try again." });
    } finally {
      setSending(false);
    }
  };
  const invalid = (name) => ({ "aria-invalid": Boolean(errors[name]), "aria-describedby": errors[name] ? `volunteer-${name}-error` : undefined });
  const errorFor = (name) => <FieldError id={`volunteer-${name}-error`} message={errors[name]?.message} />;

  return <form className="form-card volunteer-form" onSubmit={handleSubmit(onSubmit)} noValidate>
    <div className="form-intro"><span className="eyebrow">Volunteer application</span><h2>Tell us about yourself</h2><p>Share a few details so we can learn how your skills might support the work.</p></div>
    <div className="form-grid">
      <label>Full name<input {...register("name")} autoComplete="name" placeholder="Your name" {...invalid("name")} />{errorFor("name")}</label>
      <label>Email address<input {...register("email")} type="email" autoComplete="email" placeholder="you@example.com" {...invalid("email")} />{errorFor("email")}</label>
      <label>Phone number <span className="optional">(optional)</span><input {...register("phone")} type="tel" autoComplete="tel" placeholder="Your phone number" /></label>
      <label>Availability<select {...register("availability")} defaultValue="" {...invalid("availability")}><option value="" disabled>Choose availability</option><option>Weekdays</option><option>Weekends</option><option>Flexible</option><option>Remote / occasional</option></select>{errorFor("availability")}</label>
      <label className="full-field">Skills or areas of interest<input {...register("skills")} placeholder="e.g. teaching, communications, fundraising" {...invalid("skills")} />{errorFor("skills")}</label>
      <label className="full-field">Previous experience <span className="optional">(optional)</span><textarea {...register("experience")} rows="3" placeholder="Anything you would like us to know" /></label>
      <label className="full-field">Why would you like to volunteer?<textarea {...register("motivation")} rows="4" placeholder="Tell us what motivates you" {...invalid("motivation")} />{errorFor("motivation")}</label>
      <label className="consent full-field"><input type="checkbox" {...register("consent")} {...invalid("consent")} /><span>I consent to Hearts of Care using these details to respond to my volunteer enquiry.</span></label>
      <FieldError id="volunteer-consent-error" message={errors.consent?.message} className="full-field" />
    </div>
    <button className="button button-green" disabled={sending}>{sending ? "Submitting…" : "Submit application"} <span aria-hidden="true">→</span></button>
    {result && <p className={`form-result${result.ok ? "" : " form-result-error"}`} role={result.ok ? "status" : "alert"}>{result.message}</p>}
    <p className="form-note">Your application is saved or sent only once a submission service is connected.</p>
  </form>;
}
