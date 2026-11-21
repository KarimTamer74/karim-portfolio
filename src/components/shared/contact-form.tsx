"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";

type Status = "idle" | "sending" | "success" | "error";

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;

function validate(values: { name: string; email: string; message: string }): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!EMAIL_PATTERN.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.message.trim()) errors.message = "Please enter a message.";
  return errors;
}

const inputClasses =
  "w-full rounded-xl border border-border-default bg-bg px-4 py-3 text-base text-primary transition-colors duration-150 placeholder:text-muted/70 focus:border-accent focus:outline-none";

/* Sends through FormSubmit (formsubmit.co) to the site email. The first
   submission ever triggers FormSubmit's one-time activation email to that
   address; every message after that lands directly in the inbox. */
export function ContactForm(): React.ReactElement {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  const setField = (field: keyof typeof values, value: string): void => {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    const fieldErrors = validate(values);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${siteConfig.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "New message from your portfolio website",
          name: values.name,
          email: values.email,
          message: values.message,
          _captcha: "false",
          _template: "table",
        }),
      });
      if (!response.ok) throw new Error(`FormSubmit responded ${response.status}`);
      setStatus("success");
      setValues({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-border-default bg-surface p-6 md:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="font-mono text-[11px] font-bold tracking-[0.18em] text-muted">
            NAME
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => setField("name", e.target.value)}
            className={`mt-2 ${inputClasses}`}
            placeholder="Your name"
          />
          {errors.name && <p className="mt-1.5 text-sm text-accent">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="contact-email" className="font-mono text-[11px] font-bold tracking-[0.18em] text-muted">
            EMAIL
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => setField("email", e.target.value)}
            className={`mt-2 ${inputClasses}`}
            placeholder="you@example.com"
          />
          {errors.email && <p className="mt-1.5 text-sm text-accent">{errors.email}</p>}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="contact-message" className="font-mono text-[11px] font-bold tracking-[0.18em] text-muted">
          MESSAGE
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          value={values.message}
          onChange={(e) => setField("message", e.target.value)}
          className={`mt-2 resize-y ${inputClasses}`}
          placeholder="Tell me about your project, role, or idea."
        />
        {errors.message && <p className="mt-1.5 text-sm text-accent">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3.5 font-sans text-[15px] font-bold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send message"}
        {status !== "sending" && <span aria-hidden>→</span>}
      </button>

      {status === "success" && (
        <p className="mt-4 text-sm font-medium text-live" role="status">
          Message sent. I will get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-sm font-medium text-accent" role="alert">
          Something went wrong sending that. Email me directly at {siteConfig.email}.
        </p>
      )}
    </form>
  );
}
