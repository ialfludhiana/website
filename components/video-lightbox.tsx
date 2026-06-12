"use client";

import { useEffect } from "react";

type Props = {
  isOpen: boolean;
  youtubeId: string;
  title: string;
  onClose: () => void;
};

export default function VideoLightbox({ isOpen, youtubeId, title, onClose }: Props) {
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/95">
      <div className="flex flex-shrink-0 items-center justify-between px-6 py-4">
        <span className="truncate pr-4 text-lg font-semibold text-white">{title}</span>
        <button
          onClick={onClose}
          className="flex flex-shrink-0 items-center gap-2 text-white transition-colors hover:text-slate-300"
        >
          <span className="hidden text-sm sm:block">Close</span>
          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="flex flex-1 items-center justify-center px-4 pb-4">
        <div className="aspect-video w-full max-w-5xl">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={title}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
