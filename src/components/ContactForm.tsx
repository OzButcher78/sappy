"use client";

import { useState, type FormEvent } from "react";
import { landing } from "@/lib/landing-content";

type Status = "idle" | "submitting" | "success" | "error";

// Same obfuscation trick as the portfolio Contact.tsx — keep the address out
// of the raw HTML to slow down scrapers, assemble it at runtime.
const mailUser = "dieterbalmer";
const mailDomain = "gmail.com";
const mailto = () => `mailto:${mailUser}@${mailDomain}`;

export default function ContactForm() {
  const c = landing.form;
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real users never see/fill this. If it's set, bail out silently
    // (pretend success so bots don't retry) without hitting the API.
    if ((data.get("company") as string)?.trim()) {
      setStatus("success");
      return;
    }

    const payload = {
      name: (data.get("name") as string)?.trim() ?? "",
      email: (data.get("email") as string)?.trim() ?? "",
      website: (data.get("website") as string)?.trim() ?? "",
      phone: (data.get("phone") as string)?.trim() ?? "",
      company: "", // honeypot, intentionally empty for real submits
    };

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-[var(--accent)]/40 bg-[var(--surface)] p-8 text-center"
      >
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent)]/15">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 13l4 4L19 7"
              stroke="var(--accent-light)"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="font-[family-name:var(--font-clash)] text-2xl font-bold">
          {c.successTitle}
        </h3>
        <p className="mx-auto mt-3 max-w-md text-[var(--muted)]">{c.successBody}</p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-[var(--border-color)] bg-[var(--surface)] px-4 py-3.5 text-[var(--foreground)] outline-none transition-colors placeholder:text-[var(--muted)]/60 focus:border-[var(--accent)]";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      {/* Honeypot — visually hidden, off the tab order, ignored by humans. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          Firma
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-2 block text-sm text-[var(--muted)]">
            {c.name}
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder={c.namePlaceholder}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-2 block text-sm text-[var(--muted)]">
            {c.email}
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={c.emailPlaceholder}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="cf-website" className="mb-2 block text-sm text-[var(--muted)]">
            {c.website}
          </label>
          <input
            id="cf-website"
            name="website"
            type="text"
            autoComplete="url"
            placeholder={c.websitePlaceholder}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="cf-phone" className="mb-2 block text-sm text-[var(--muted)]">
            {c.phone}
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder={c.phonePlaceholder}
            className={inputClass}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="magnetic-btn group relative mt-2 overflow-hidden rounded-full bg-[var(--accent)] px-8 py-4 text-sm font-medium uppercase tracking-widest text-white transition-all hover:shadow-[0_0_40px_rgba(59,159,216,0.3)] disabled:cursor-not-allowed disabled:opacity-70"
      >
        <span className="relative z-10">
          {status === "submitting" ? c.submitting : c.submit}
        </span>
        <span className="absolute inset-0 -translate-x-full bg-[var(--accent-light)] transition-transform duration-500 group-hover:translate-x-0" />
      </button>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-400">
          {c.error}{" "}
          <a href={mailto()} className="underline hover:text-red-300">
            {mailUser}@{mailDomain}
          </a>
        </p>
      )}

      <p className="text-xs leading-relaxed text-[var(--muted)]">
        {c.privacyNote}{" "}
        <a href="/datenschutz" className="underline hover:text-[var(--foreground)]">
          {c.privacyLink}
        </a>
        .
      </p>

      <p className="text-sm text-[var(--muted)]">
        {c.directLabel}{" "}
        <a href={mailto()} className="text-[var(--accent)] underline hover:text-[var(--accent-light)]">
          {mailUser}@{mailDomain}
        </a>
      </p>
    </form>
  );
}
