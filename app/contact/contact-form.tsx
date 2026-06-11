"use client";

import React, { useState } from "react";
import { MdOutlineContactPhone } from "react-icons/md";

const VISA_TYPES = [
  "Student Visa",
  "Permanent Residency",
  "Spousal Sponsorship",
  "Startup Visa",
  "Visitor Visa",
  "Business Visa",
  "IELTS",
  "PTE",
  "TEF",
  "TCF",
  "DELF/DALF",
];

type FormState = {
  name: string;
  phone: string;
  email: string;
  visaType: string;
  message: string;
};

const inputClass =
  "w-full border-0 border-b border-white/50 bg-transparent px-0 py-2 text-white placeholder:text-white/70 focus:border-white/80 focus:outline-none";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    visaType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error((json as { error?: string }).error || "Submission failed");
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="flex flex-col items-center py-10 text-center">
        <div className="mb-5 grid h-20 w-20 place-items-center rounded-full border-2 border-white text-white">
          <MdOutlineContactPhone className="text-4xl" />
        </div>
        <h3 className="text-xl font-semibold text-white">Message Received!</h3>
        <p className="mt-2 text-sm text-white/80">
          Thank you for reaching out. Our team will get back to you shortly.
        </p>
        <button
          onClick={() => {
            setSuccess(false);
            setForm({ name: "", phone: "", email: "", visaType: "", message: "" });
          }}
          className="mt-6 rounded bg-white px-5 py-2 text-sm font-medium text-[#54b1d0] transition hover:bg-slate-100"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={onChange}
          required
          className={inputClass}
          placeholder="Full Name"
        />
      </div>
      <div>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={onChange}
          required
          className={inputClass}
          placeholder="Phone Number"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={onChange}
          required
          className={inputClass}
          placeholder="Email Address"
        />
      </div>
      <div>
        <select
          name="visaType"
          value={form.visaType}
          onChange={onChange}
          required
          className="w-full appearance-none border-0 border-b border-white/50 bg-transparent px-0 py-2 text-white focus:border-white/80 focus:outline-none"
        >
          <option value="" disabled className="bg-[#54b1d0] text-white">
            Select Visa / Service Type
          </option>
          {VISA_TYPES.map((v) => (
            <option key={v} value={v} className="bg-[#54b1d0] text-white">
              {v}
            </option>
          ))}
        </select>
      </div>
      <div>
        <textarea
          name="message"
          value={form.message}
          onChange={onChange}
          rows={5}
          required
          minLength={10}
          className={inputClass}
          placeholder="Your message"
        />
      </div>

      {error && <p className="text-sm text-rose-100">{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded bg-white py-3 text-sm font-medium text-[#54b1d0] transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
