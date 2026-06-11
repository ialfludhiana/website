"use client";

import Image from "next/image";
import { useState } from "react";
import type { TestimonialRow } from "./page";

interface Props {
  testimonials: TestimonialRow[];
  adminPassword: string;
}

export default function AdminTestimonialsClient({ testimonials: initial, adminPassword }: Props) {
  const [items, setItems] = useState(initial);
  const [busy, setBusy] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "pending" | "approved">("all");

  const visible = items.filter((t) => {
    if (filter === "pending") return t.approved !== "TRUE";
    if (filter === "approved") return t.approved === "TRUE";
    return true;
  });

  async function approve(id: string) {
    setBusy(id + "-approve");
    try {
      const res = await fetch(`/api/admin/testimonials/${id}/approve`, {
        method: "PATCH",
        headers: { "x-admin-password": adminPassword },
      });
      if (res.ok) {
        setItems((prev) =>
          prev.map((t) => (t.id === id ? { ...t, approved: "TRUE" } : t))
        );
      }
    } finally {
      setBusy(null);
    }
  }

  async function remove(id: string) {
    if (!confirm("Delete this testimonial?")) return;
    setBusy(id + "-delete");
    try {
      const res = await fetch(`/api/admin/testimonials/${id}/delete`, {
        method: "DELETE",
        headers: { "x-admin-password": adminPassword },
      });
      if (res.ok) {
        setItems((prev) => prev.filter((t) => t.id !== id));
      }
    } finally {
      setBusy(null);
    }
  }

  return (
    <div>
      <div className="mb-6 flex gap-2">
        {(["all", "pending", "approved"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded px-4 py-1.5 text-sm font-medium capitalize transition ${
              filter === f ? "bg-[#0284c7] text-white" : "bg-white text-slate-600 shadow hover:bg-slate-50"
            }`}
          >
            {f}
          </button>
        ))}
        <span className="ml-auto self-center text-sm text-slate-500">{visible.length} shown</span>
      </div>

      {visible.length === 0 ? (
        <p className="py-16 text-center text-slate-500">No testimonials to show.</p>
      ) : (
        <div className="space-y-4">
          {visible.map((t) => (
            <div
              key={t.id}
              className={`flex gap-4 rounded border bg-white p-4 shadow-sm ${
                t.approved === "TRUE" ? "border-emerald-200" : "border-amber-200"
              }`}
            >
              {t.imageUrl ? (
                <Image
                  src={t.imageUrl}
                  alt={t.name}
                  width={64}
                  height={64}
                  unoptimized
                  className="h-16 w-16 flex-shrink-0 rounded-full object-cover"
                />
              ) : (
                <div className="grid h-16 w-16 flex-shrink-0 place-items-center rounded-full bg-slate-200 text-xl font-semibold text-slate-500">
                  {t.name.charAt(0).toUpperCase()}
                </div>
              )}

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-semibold text-slate-900">{t.name}</span>
                  <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600">{t.visaType}</span>
                  <span
                    className={`rounded px-2 py-0.5 text-xs font-medium ${
                      t.approved === "TRUE"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {t.approved === "TRUE" ? "Approved" : "Pending"}
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-700">{t.comment}</p>
                <p className="mt-1 text-xs text-slate-400">
                  {t.submittedAt ? new Date(t.submittedAt).toLocaleString() : "Unknown date"} &nbsp;·&nbsp; ID: {t.id}
                </p>
              </div>

              <div className="flex flex-shrink-0 flex-col gap-2">
                {t.approved !== "TRUE" && (
                  <button
                    onClick={() => approve(t.id)}
                    disabled={!!busy}
                    className="rounded bg-emerald-600 px-3 py-1 text-xs font-semibold text-white hover:bg-emerald-700 disabled:opacity-50"
                  >
                    {busy === t.id + "-approve" ? "…" : "Approve"}
                  </button>
                )}
                <button
                  onClick={() => remove(t.id)}
                  disabled={!!busy}
                  className="rounded bg-rose-600 px-3 py-1 text-xs font-semibold text-white hover:bg-rose-700 disabled:opacity-50"
                >
                  {busy === t.id + "-delete" ? "…" : "Delete"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
