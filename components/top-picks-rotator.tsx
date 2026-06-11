"use client";

import { useEffect, useState } from "react";

type School = { name: string; note: string };
type CountryGroup = { country: string; schools: School[] };

type Props = {
  groups: CountryGroup[];
  intervalMs?: number;
};

export function TopPicksRotator({ groups, intervalMs = 4200 }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      const timeout = setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % groups.length);
        setFade(true);
      }, 250);
      return () => clearTimeout(timeout);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [groups.length, intervalMs]);

  const active = groups[activeIndex];

  return (
    <div className="border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
        Top 5 picks of {active.country}
      </div>
      <div
        className={`mt-3 space-y-2 text-sm text-slate-800 transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {active.schools.map((u) => (
          <div
            key={u.name}
            className="border border-slate-200 bg-slate-50 px-3 py-2 shadow-sm transition duration-300 transform hover:-translate-y-1 hover:shadow-md"
          >
            <div className="font-semibold text-slate-900">{u.name}</div>
            <div className="text-xs text-slate-600">{u.note}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[11px] text-slate-500">Selections rotate automatically.</div>
    </div>
  );
}
