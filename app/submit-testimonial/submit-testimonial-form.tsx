"use client";

import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const VISA_TYPES = [
  "Student Visa",
  "Permanent Residency",
  "Spousal Sponsorship",
  "Startup Visa",
  "Visitor Visa",
  "Business Visa",
  "Work Permit",
  "Other",
];

const HUMAN_QUESTIONS = [
  { q: "24 + 26", a: 50 },
  { q: "15 + 12", a: 27 },
  { q: "30 - 11", a: 19 },
  { q: "6 × 7", a: 42 },
  { q: "9 + 8", a: 17 },
  { q: "18 + 5", a: 23 },
  { q: "12 + 21", a: 33 },
  { q: "40 - 16", a: 24 },
  { q: "14 + 9", a: 23 },
  { q: "60 - 15", a: 45 },
];

type FormState = {
  name: string;
  visaType: string;
  comment: string;
  photo: File | null;
};

export default function SubmitTestimonialForm() {
  const [form, setForm] = useState<FormState>({ name: "", visaType: "", comment: "", photo: null });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [quizOpen, setQuizOpen] = useState(false);
  const [quizInput, setQuizInput] = useState("");
  const [quizError, setQuizError] = useState("");
  const [quiz, setQuiz] = useState(HUMAN_QUESTIONS[0]);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function onPhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    setForm((prev) => ({ ...prev, photo: file }));
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPhotoPreview(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      setPhotoPreview(null);
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    const idx = Math.floor(Math.random() * HUMAN_QUESTIONS.length);
    setQuiz(HUMAN_QUESTIONS[idx]);
    setQuizInput("");
    setQuizError("");
    setQuizOpen(true);
  }

  async function verifyAndSubmit() {
    const answer = Number(quizInput.trim());
    if (answer !== quiz.a) {
      setQuizError("Incorrect. Please try again.");
      return;
    }
    setQuizOpen(false);
    setSubmitting(true);
    setError("");

    try {
      const fd = new FormData();
      fd.append("name", form.name);
      fd.append("visaType", form.visaType);
      fd.append("comment", form.comment);
      if (form.photo) {
        fd.append("photo", form.photo);
      }

      const res = await fetch("/api/testimonials", {
        method: "POST",
        body: fd,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }

      setSuccess(true);
      setForm({ name: "", visaType: "", comment: "", photo: null });
      setPhotoPreview(null);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to submit. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="rounded border border-emerald-200 bg-emerald-50 p-8 text-center">
        <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full border-2 border-emerald-500 text-3xl text-emerald-500">
          ✓
        </div>
        <h3 className="text-xl font-semibold text-slate-900">Thank You!</h3>
        <p className="mt-2 text-slate-600">
          Your testimonial has been received and will be reviewed by our team before publishing.
        </p>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Your Name *</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={onChange}
            required
            className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#0284c7] focus:ring-2 focus:ring-[#0284c7]/30"
            placeholder="Full name"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Visa Type *</label>
          <select
            name="visaType"
            value={form.visaType}
            onChange={onChange}
            required
            className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-[#0284c7] focus:ring-2 focus:ring-[#0284c7]/30"
          >
            <option value="">Select visa type</option>
            {VISA_TYPES.map((v) => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Your Testimonial *</label>
          <textarea
            name="comment"
            value={form.comment}
            onChange={onChange}
            rows={5}
            required
            minLength={20}
            className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#0284c7] focus:ring-2 focus:ring-[#0284c7]/30"
            placeholder="Share your experience with IALF (minimum 20 characters)"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Your Photo (optional)</label>
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={onPhotoChange}
            className="w-full text-sm text-slate-700 file:mr-4 file:rounded file:border-0 file:bg-[#0284c7] file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-[#0369a1]"
          />
          {photoPreview && (
            <div className="mt-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photoPreview} alt="Preview" className="h-24 w-24 rounded object-cover" />
            </div>
          )}
        </div>

        {error && <p className="text-sm text-rose-600">{error}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="w-full py-3 px-6 bg-[#0284c7] text-white font-semibold hover:bg-[#0369a1] transition-colors disabled:opacity-50 disabled:cursor-not-allowed rounded-none"
        >
          {submitting ? "Submitting…" : "Submit Testimonial"}
        </button>
      </form>

      {quizOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 px-4">
          <div className="w-full max-w-md rounded bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">Quick check</h3>
              <button onClick={() => setQuizOpen(false)} aria-label="Close" className="text-slate-500 hover:text-slate-800">
                <IoClose />
              </button>
            </div>
            <p className="mt-3 text-sm text-slate-600">Please answer this question to confirm you are human.</p>
            <div className="mt-4">
              <label className="text-sm text-slate-700">What is {quiz.q}?</label>
              <input
                autoFocus
                type="number"
                value={quizInput}
                onChange={(e) => setQuizInput(e.target.value)}
                className="mt-2 w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#0284c7] focus:ring-2 focus:ring-[#0284c7]/30"
                placeholder="Enter the answer"
              />
              {quizError && <p className="mt-2 text-xs text-rose-600">{quizError}</p>}
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setQuizOpen(false)}
                className="rounded bg-slate-100 px-4 py-2 text-sm text-slate-700 hover:bg-slate-200"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={verifyAndSubmit}
                disabled={submitting}
                className="rounded bg-[#0284c7] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0369a1] disabled:opacity-60"
              >
                Verify & Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
