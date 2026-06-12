"use client";

import { useState } from "react";
import VideoLightbox from "@/components/video-lightbox";

type VideoItem = {
  id: string;
  title: string;
  videoId: string;
  description: string;
};

export default function VideosClient({ videos }: { videos: VideoItem[] }) {
  const [activeVideo, setActiveVideo] = useState<{
    youtubeId: string;
    title: string;
  } | null>(null);

  return (
    <>
      {videos.length === 0 ? (
        <p className="py-20 text-center text-slate-500">Videos coming soon.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <div key={video.id} className="flex flex-col">
              <div
                onClick={() => setActiveVideo({ youtubeId: video.videoId, title: video.title })}
                className="group relative aspect-video w-full cursor-pointer overflow-hidden bg-slate-900"
              >
                <img
                  src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                  alt={video.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <svg className="ml-1 h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {video.title && (
                <p className="mt-2 font-semibold text-slate-900">{video.title}</p>
              )}
              {video.description && (
                <p className="mt-1 text-sm text-slate-500 text-justify">{video.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      <VideoLightbox
        isOpen={activeVideo !== null}
        youtubeId={activeVideo?.youtubeId ?? ""}
        title={activeVideo?.title ?? ""}
        onClose={() => setActiveVideo(null)}
      />
    </>
  );
}
