"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { LiaTelegramPlane } from "react-icons/lia";

type NewsItem = {
  id: string | number;
  title: string;
  slug?: string | null;
  excerpt?: string | null;
  newsDate?: string | null;
  contentJson?: unknown;
  coverImageUrl?: string | null;
  youtubeUrl?: string | null;
  source?: string | null;
  publishedAt?: string | null;
  updatedAt?: string | null;
  createdAt?: string | null;
};

export default function NewsSection() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [start, setStart] = useState(0);
  const perPage = 4;
  const maxStart = Math.max(0, items.length - perPage);

  const API_BASE =
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    (process.env.NODE_ENV === "development" ? "http://localhost:4000" : "https://api.ialf.in");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API_BASE}/public/news?limit=12`, { cache: "no-store" });
        if (!res.ok) throw new Error(`Failed ${res.status}`);
        const json = await res.json();
        setItems(json?.news || []);
      } catch {
        setItems([]);
      }
    })();
  }, [API_BASE]);

  useEffect(() => {
    if (start > maxStart) setStart(maxStart);
  }, [maxStart, start]);

  const getSummary = (n: NewsItem) => {
    if (n.excerpt) return n.excerpt;
    try {
      const parsed = typeof n.contentJson === "string" ? JSON.parse(n.contentJson) : n.contentJson;
      const blocks = (parsed as { blocks?: Array<{ data?: { text?: string } }> })?.blocks;
      if (Array.isArray(blocks)) {
        return blocks
          .map((b) => (b?.data?.text as string) || "")
          .filter(Boolean)
          .join(" ");
      }
    } catch {
      /* ignore */
    }
    return "";
  };

  return (
    <div className="bg-slate-100 overflow-hidden">
      <section className="mx-auto max-w-7xl px-6 py-12" aria-labelledby="news-heading">
        <h2 id="news-heading" className="text-2xl text-slate-900 ml-20">
          News &amp; Articles
        </h2>
        <div className="mt-2 h-[3px] w-16 bg-[#0284c7]" />

        <div className="relative mt-8">
          {items.length > perPage && (
            <button
              type="button"
              aria-label="Previous news"
              disabled={start === 0}
              onClick={() => setStart((prev) => Math.max(0, prev - perPage))}
              className="absolute inset-y-0 z-10 flex w-14 items-center justify-center bg-slate-100/95 shadow-lg transition hover:bg-slate-100 disabled:opacity-40"
              style={{ left: "calc(-50vw + 50%)" }}
            >
              &lt;
            </button>
          )}

          <div className="flex items-stretch gap-4 overflow-hidden px-10">
            {(items.slice(start, start + perPage) || []).map((n) => {
              const raw = `${n.coverImageUrl ?? ""}`.trim();
              const src =
                raw && raw.toLowerCase() !== "null" && raw.toLowerCase() !== "undefined"
                  ? raw
                  : "/default_news.png";
              const dateValue = n.newsDate || n.publishedAt || n.updatedAt || n.createdAt || "";
              const dateText = dateValue
                ? new Date(dateValue).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })
                : "";
              const sourceText = n.source ? ` • ${n.source}` : "";

              return (
                <article
                  key={n.id}
                  className="group flex h-full min-w-[220px] max-w-[260px] flex-1 flex-col overflow-hidden bg-white shadow-sm"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-slate-200">
                    <Image
                      src={src}
                      alt={n.title || "News item"}
                      width={540}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.onerror = null;
                        target.src = "/default_news.png";
                      }}
                    />
                  </div>
                  <div className="flex grow flex-col px-4 pb-5 pt-4">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-slate-500">
                      <CiCalendar /> {dateText}
                      {sourceText}
                    </div>
                    <h3 className="mt-1 text-lg leading-snug text-slate-900 line-clamp-2">{n.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-700 line-clamp-3">
                      {getSummary(n)}
                    </p>
                    <div className="mt-auto pt-3">
                      <Link
                        href={`/news/${n.slug ?? n.id}`}
                        className="inline-flex items-center gap-2 text-sm text-[#0284c7] hover:underline"
                        aria-label={`Read more about ${n.title}`}
                      >
                        <LiaTelegramPlane />
                        <span>Read more</span>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
            {items.length === 0 && <p className="text-sm text-slate-500">No news yet.</p>}
          </div>

          {items.length > perPage && (
            <button
              type="button"
              aria-label="Next news"
              disabled={start + perPage >= items.length}
              onClick={() =>
                setStart((prev) =>
                  prev + perPage >= items.length ? prev : Math.min(maxStart, prev + perPage)
                )
              }
              className="absolute inset-y-0 z-10 flex w-14 items-center justify-center bg-slate-100/95 shadow-lg transition hover:bg-slate-100 disabled:opacity-40"
              style={{ right: "calc(-50vw + 50%)" }}
            >
              &gt;
            </button>
          )}
        </div>
      </section>
    </div>
  );
}
