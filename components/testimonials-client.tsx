"use client";

import Image from "next/image";
import { useMemo, useState, useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

type TestimonialItem = {
  id: string | number;
  name?: string | null;
  comment?: string | null;
  imageUrl?: string | null;
  visaType?: string | null;
};

type Props = {
  items: TestimonialItem[];
};

export default function TestimonialsClient({ items }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length > 0 && index >= items.length) setIndex(0);
    const t = setInterval(() => setIndex((p) => (items.length ? (p + 1) % items.length : 0)), 8000);
    return () => clearInterval(t);
  }, [items.length, index]);

  const current = useMemo(() => items[index] || {}, [items, index]);
  const hasItems = items.length > 0;

  return (
    <div id="testimonials" className="bg-gray-100">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col items-center gap-10 md:flex-row">
          <div className="md:w-7/12 space-y-6 text-slate-700">
            <div className="relative">
              <FaQuoteLeft className="absolute -left-2 -top-4 text-4xl text-slate-300" />
              <p className="ml-10 mr-10 text-lg leading-relaxed text-gray-600 md:text-base">
                {hasItems ? current.comment : "No testimonials available."}
              </p>
              <FaQuoteRight className="absolute -right-2 -bottom-4 text-4xl text-slate-300" />
            </div>
            {current.name && (
              <div className="mt-6 flex items-center">
                {current.imageUrl ? (
                  <Image
                    src={current.imageUrl}
                    alt={current.name || "Client photo"}
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-full object-cover"
                    unoptimized
                  />
                ) : (
                  <div className="h-12 w-12 rounded-full bg-slate-300" />
                )}
                <div className="ml-4">
                  <p className="text-base font-semibold">{current.name}</p>
                  {current.visaType && <p className="text-sm text-slate-500">{current.visaType}</p>}
                </div>
              </div>
            )}
          </div>

          <div className="mt-2 text-right text-[#0284c7] md:mt-0 md:w-5/12">
            <h2 className="text-4xl font-bold leading-tight text-[#0284c7] md:text-5xl">What</h2>
            <h2 className="text-4xl font-bold leading-tight text-[#0284c7] md:text-5xl">Clients Say</h2>
            <h3 className="text-4xl font-bold leading-tight text-[#0284c7] md:text-5xl">About Us</h3>
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={() => setIndex((p) => (items.length ? (p - 1 + items.length) % items.length : 0))}
                aria-label="Previous testimonial"
                className="rounded-full border-2 border-[#0284c7] p-3 text-[#0284c7] transition-colors hover:border-amber-300 hover:text-amber-300"
                disabled={!hasItems}
              >
                &larr;
              </button>
              <button
                onClick={() => setIndex((p) => (items.length ? (p + 1) % items.length : 0))}
                aria-label="Next testimonial"
                className="rounded-full border-2 border-[#0284c7] p-3 text-[#0284c7] transition-colors hover:border-amber-300 hover:text-amber-300"
                disabled={!hasItems}
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
