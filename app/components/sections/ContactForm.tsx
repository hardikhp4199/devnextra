"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const projectTypes = ["New website", "Mobile app", "Existing product", "Something else"];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [projectType, setProjectType] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");

  const validate = () => {
    const next: typeof errors = {};
    if (!form.name.trim()) next.name = "Please enter your name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Please enter a valid email";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    // TODO: wire this up to an email service (Resend, Formspree, etc.)
    await new Promise((r) => setTimeout(r, 900));
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-gray-100 bg-brand-offwhite p-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-lime text-brand-dark">
          <FontAwesomeIcon icon={faCircleCheck} className="text-[24px]" />
        </div>
        <h3 className="mt-4 text-lg font-bold text-brand-dark">Message sent</h3>
        <p className="mt-2 text-sm text-gray-600">
          Thanks, {form.name.split(" ")[0]} — we'll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">
          What are you looking for?
        </label>
        <div className="mt-2 flex flex-wrap gap-2">
          {projectTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setProjectType(type)}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
                projectType === type
                  ? "border-brand-lime bg-brand-lime text-brand-dark"
                  : "border-gray-200 bg-white text-gray-600 hover:border-brand-lime-dark"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">
          Name
        </label>
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={`mt-1 w-full rounded-xl border px-4 py-3 text-sm focus:outline-none ${
            errors.name ? "border-red-400" : "border-gray-200 focus:border-brand-lime-dark"
          }`}
          placeholder="Your name"
        />
        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
      </div>

      <div>
        <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">
          Email
        </label>
        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={`mt-1 w-full rounded-xl border px-4 py-3 text-sm focus:outline-none ${
            errors.email ? "border-red-400" : "border-gray-200 focus:border-brand-lime-dark"
          }`}
          placeholder="you@example.com"
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Message
          </label>
          <span className="text-[11px] text-gray-400">{form.message.length}/500</span>
        </div>
        <textarea
          rows={5}
          maxLength={500}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-brand-lime-dark focus:outline-none"
          placeholder="Tell us about your project"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 flex items-center justify-center gap-2 rounded-full bg-brand-lime px-6 py-3 text-sm font-semibold text-brand-dark shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand-lime-dark hover:shadow-md disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <FontAwesomeIcon icon={faSpinner} className="animate-spin text-[14px]" />
            Sending...
          </>
        ) : (
          "Send message"
        )}
      </button>
    </form>
  );
}