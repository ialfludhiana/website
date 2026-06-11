"use client";

import { useEffect, useState } from "react";

type Props = {
  isOpen: boolean;
  images: string[];
  title: string;
  onClose: () => void;
  loading?: boolean;
};

export default function AlbumLightbox({ isOpen, images, title, onClose, loading = false }: Props) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (isOpen) setCurrent(0);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") setCurrent((c) => Math.max(0, c - 1));
      else if (e.key === "ArrowRight") setCurrent((c) => Math.min(images.length - 1, c + 1));
      else if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, images.length, onClose]);

  if (!isOpen) return null;

  const hasPrev = current > 0;
  const hasNext = current < images.length - 1;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">
      {/* Top bar */}
      <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 py-4">
        <span className="font-semibold text-white">{title}</span>
        <div className="flex items-center gap-4">
          {!loading && images.length > 0 && (
            <span className="text-sm text-white">{current + 1} / {images.length}</span>
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close lightbox"
            className="text-3xl leading-none text-white hover:text-slate-300"
          >
            &times;
          </button>
        </div>
      </div>

      {loading ? (
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-white border-t-transparent" />
      ) : images.length === 0 ? (
        <p className="text-slate-400">No images available.</p>
      ) : (
        <>
          {/* Prev */}
          <button
            type="button"
            onClick={() => setCurrent((c) => c - 1)}
            disabled={!hasPrev}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-4xl text-white transition hover:text-slate-300 disabled:opacity-25 disabled:cursor-default"
          >
            &#8592;
          </button>

          {/* Image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={images[current]}
            src={images[current]}
            alt={`${title} — ${current + 1} of ${images.length}`}
            className="max-h-[80vh] max-w-[90vw] object-contain"
          />

          {/* Next */}
          <button
            type="button"
            onClick={() => setCurrent((c) => c + 1)}
            disabled={!hasNext}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-4xl text-white transition hover:text-slate-300 disabled:opacity-25 disabled:cursor-default"
          >
            &#8594;
          </button>
        </>
      )}
    </div>
  );
}
