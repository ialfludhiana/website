"use client";

import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { IoCalendarOutline } from "react-icons/io5";

const SERVICES = [
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

const TIME_SLOTS = (() => {
  const slots: string[] = [];
  for (let h = 10; h <= 18; h++) {
    for (const m of [0, 30]) {
      if (h === 18 && m > 0) continue;
      const hh = `${h}`.padStart(2, "0");
      const mm = `${m}`.padStart(2, "0");
      slots.push(`${hh}:${mm}`);
    }
  }
  return slots;
})();

const EMPTY_FORM = {
  date: "",
  category: SERVICES[0],
  visitType: "First Visit",
  name: "",
  email: "",
  phone: "",
  address: "",
  time: TIME_SLOTS[0],
};

export default function AppointmentSection() {
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [showConfirm, setShowConfirm] = React.useState(false);
  const [form, setForm] = React.useState(EMPTY_FORM);

  const update = (k: keyof typeof form, v: string) => setForm((s) => ({ ...s, [k]: v }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          address: form.address,
          date: form.date,
          time: form.time,
          category: form.category,
          visitType: form.visitType,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setShowConfirm(true);
      setForm(EMPTY_FORM);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div id="appointment" className="relative w-full overflow-hidden bg-[#54b1d0]">
      <section className="mx-auto max-w-7xl px-6 py-16 text-white/80">
        <h2 className="text-2xl text-white">Book an Appointment</h2>
        <div className="mt-3 h-[2px] w-16 bg-white" />

        <form onSubmit={submit} className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="md:col-span-1">
            <input
              type="text"
              value="Immigration Consultancy"
              readOnly
              className="pointer-events-none w-full border-0 border-b border-white bg-transparent px-0 py-1 text-white placeholder:text-white focus:border-white focus:outline-none"
            />
          </div>
          <div className="md:col-span-1">
            <select
              value={form.category}
              onChange={(e) => update("category", e.target.value)}
              className="w-full appearance-none border-0 border-b border-white bg-transparent px-0 py-1 text-white focus:border-white focus:outline-none"
            >
              {SERVICES.map((s) => (
                <option className="bg-[#5fb6cf] text-white" key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-1">
            <input
              type="text"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              required
              className="w-full border-0 border-b border-white bg-transparent px-0 py-1 text-white placeholder:text-white focus:border-white focus:outline-none"
              placeholder="Your name"
            />
          </div>
          <div className="md:col-span-1">
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              required
              className="w-full border-0 border-b border-white bg-transparent px-0 py-1 text-white placeholder:text-white focus:border-white focus:outline-none"
              placeholder="Phone"
            />
          </div>

          <div className="relative md:col-span-1">
            <input
              type="text"
              inputMode="numeric"
              value={form.date}
              onChange={(e) => update("date", e.target.value)}
              required
              className="w-full border-0 border-b border-white bg-transparent px-0 py-1 pr-8 text-white placeholder:text-white focus:border-white focus:outline-none"
              placeholder="YYYY-MM-DD"
            />
            <IoCalendarOutline className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-lg text-white" />
          </div>
          <div className="md:col-span-1">
            <select
              value={form.time}
              onChange={(e) => update("time", e.target.value)}
              className="w-full appearance-none border-0 border-b border-white bg-transparent px-0 py-1 text-white focus:border-white focus:outline-none"
            >
              {TIME_SLOTS.map((t) => (
                <option key={t} value={t} className="bg-[#5fb6cf] text-white">
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-1">
            <input
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              required
              className="w-full border-0 border-b border-white bg-transparent px-0 py-1 text-white placeholder:text-white focus:border-white focus:outline-none"
              placeholder="Email"
            />
          </div>
          <div className="md:col-span-1">
            <div className="flex flex-wrap items-center gap-6 py-1 text-sm text-white">
              <label className="inline-flex items-center gap-2">
                <input
                  className="accent-white"
                  type="radio"
                  name="visitType"
                  checked={form.visitType === "First Visit"}
                  onChange={() => update("visitType", "First Visit")}
                />
                First Visit
              </label>
              <label className="inline-flex items-center gap-2">
                <input
                  className="accent-white"
                  type="radio"
                  name="visitType"
                  checked={form.visitType === "Revisit"}
                  onChange={() => update("visitType", "Revisit")}
                />
                Revisit
              </label>
            </div>
          </div>

          <div className="md:col-span-2">
            <textarea
              rows={3}
              value={form.address}
              onChange={(e) => update("address", e.target.value)}
              className="w-full border-0 border-b border-white bg-transparent px-0 py-1 text-white placeholder:text-white focus:border-white focus:outline-none"
              placeholder="Address"
            />
          </div>

          <div className="mt-1 flex items-center justify-start md:col-span-2">
            <button
              type="submit"
              disabled={status === "loading"}
              className={`flex items-center gap-3 rounded bg-white px-5 py-3 text-sm font-medium text-[#54b1d0] transition-colors hover:bg-gray-200 hover:text-[#0284c7] ${
                status === "loading" ? "cursor-not-allowed opacity-80" : ""
              }`}
            >
              {status === "loading" ? "Submitting…" : "Book an appointment"}
            </button>
            {status === "error" && (
              <span className="ml-4 text-sm text-rose-100">Failed to submit. Please try again.</span>
            )}
          </div>
        </form>
      </section>

      {showConfirm && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 px-4">
          <div className="w-full max-w-[560px] rounded-none bg-white p-10 text-center shadow-2xl">
            <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full border-2 border-emerald-500 text-emerald-500">
              <FiCheckCircle className="text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900">Appointment request received</h3>
            <p className="mt-3 text-base text-slate-600">
              Thanks for booking with IALF. We&apos;ll get back to you shortly to confirm the schedule.
            </p>
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => {
                  setShowConfirm(false);
                  setStatus("idle");
                }}
                className="w-40 rounded bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-emerald-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
