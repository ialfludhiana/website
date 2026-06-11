"use client";

import { useState } from "react";
import AlbumLightbox from "@/components/album-lightbox";

type EventItem = {
  id: string;
  title: string;
  image_url: string;
  description: string;
  event_date: string;
  cloudinary_folder: string;
};

type Props = {
  events: EventItem[];
};

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function EventsClient({ events }: Props) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxTitle, setLightboxTitle] = useState("");
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxLoading, setLightboxLoading] = useState(false);

  async function openAlbum(event: EventItem) {
    setLightboxTitle(event.title);
    setLightboxImages([]);
    setLightboxOpen(true);

    if (!event.cloudinary_folder) return;

    setLightboxLoading(true);
    try {
      const res = await fetch(
        `/api/gallery/cloudinary-images?folder=${encodeURIComponent(event.cloudinary_folder)}`
      );
      const json = await res.json();
      setLightboxImages(json.images ?? []);
    } catch (err) {
      console.error("Failed to load album images:", err);
      setLightboxImages([]);
    } finally {
      setLightboxLoading(false);
    }
  }

  if (events.length === 0) {
    return <p className="py-20 text-center text-slate-500">Events &amp; Seminars coming soon.</p>;
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.id}
            onClick={() => openAlbum(event)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && openAlbum(event)}
            className="cursor-pointer rounded-none border border-slate-100 bg-white shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#0284c7]/40"
          >
            {event.image_url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={event.image_url} alt={event.title} className="h-48 w-full object-cover" />
            ) : (
              <div className="flex h-48 w-full items-center justify-center bg-slate-200">
                <span className="text-sm text-slate-400">No image</span>
              </div>
            )}
            <div className="p-4">
              <p className="font-semibold text-slate-900">{event.title}</p>
              {event.event_date && (
                <p className="mt-1 text-sm text-[#0284c7]">{formatDate(event.event_date)}</p>
              )}
              {event.description && (
                <p className="mt-2 text-sm text-slate-500">{event.description}</p>
              )}
              {event.cloudinary_folder && (
                <p className="mt-3 text-xs font-medium text-[#0284c7]">View album →</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <AlbumLightbox
        isOpen={lightboxOpen}
        images={lightboxImages}
        title={lightboxTitle}
        onClose={() => setLightboxOpen(false)}
        loading={lightboxLoading}
      />
    </>
  );
}
