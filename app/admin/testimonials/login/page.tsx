"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!password.trim()) return;
    router.push(`/admin/testimonials?pw=${encodeURIComponent(password)}`);
    setError("Checking password…");
  }

  return (
    <main className="grid min-h-screen place-items-center bg-slate-100 px-4">
      <div className="w-full max-w-sm rounded-none bg-white p-8 shadow">
        <h1 className="mb-6 text-xl font-semibold text-slate-900">Admin Login</h1>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoFocus
              className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#0284c7] focus:ring-2 focus:ring-[#0284c7]/30"
              placeholder="Enter admin password"
            />
          </div>
          {error && <p className="text-xs text-slate-500">{error}</p>}
          <button
            type="submit"
            className="w-full rounded bg-[#0284c7] py-2.5 text-sm font-semibold text-white hover:bg-[#0369a1]"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
