import Image from "next/image";
import { Navbar } from "@/components/navbar";
import SiteFooter from "@/components/site-footer";
import TestimonialLogos from "@/components/testimonial-logos";
import { getRows } from "@/lib/google";
import VideosClient from "./videos-client";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ialf.in";

export const revalidate = 300;

export const metadata = {
  title: "Immigration Videos | IALF Ludhiana",
  description:
    "Watch IALF Immigration videos on Canada visa processes, seminars, and client success stories. Educational content from Ludhiana's trusted immigration consultants.",
  alternates: { canonical: `${SITE_URL}/gallery/videos` },
};

type VideoItem = {
  id: string;
  title: string;
  videoId: string;
  description: string;
};

function extractYouTubeId(url: string): string {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
  return match ? match[1] : "";
}

async function getVideos(): Promise<VideoItem[]> {
  try {
    const rows = await getRows(
      process.env.GOOGLE_SHEET_GALLERY_ID!,
      "Videos",
      "A:F"
    );
    return rows
      .filter((r) => r.published === "TRUE" && r.youtube_url)
      .map((r) => ({
        id: r.id ?? "",
        title: r.title ?? "",
        videoId: extractYouTubeId(r.youtube_url ?? ""),
        description: r.description ?? "",
      }))
      .filter((v) => v.videoId !== "");
  } catch (err) {
    console.error("Videos fetch error:", err);
    return [];
  }
}

export default async function VideosPage() {
  const videos = await getVideos();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="relative h-[170px] w-full overflow-hidden bg-sky-500/70">
        <Image src="/header.png" alt="" fill className="object-cover opacity-60" sizes="100vw" priority />
        <div className="absolute left-10 top-1/2 -translate-y-1/2 transform text-white md:left-40">
          <h1 className="mb-1 text-3xl font-bold drop-shadow md:text-4xl">Video Gallery</h1>
          <div className="text-sm font-normal text-white/80">
            Home <span className="mx-1 text-white/50">/</span> Videos
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <VideosClient videos={videos} />
      </div>

      <TestimonialLogos />
      <SiteFooter />
    </main>
  );
}
