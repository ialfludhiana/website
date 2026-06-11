import Image from "next/image";
import { Navbar } from "@/components/navbar";
import SiteFooter from "@/components/site-footer";
import TestimonialLogos from "@/components/testimonial-logos";
import { getSheetsClient } from "@/lib/google";
import EventsClient from "./events-client";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ialf.in";

export const revalidate = 60;

export const metadata = {
  title: "Events & Seminars Gallery • IALF",
  description: "Photos from IALF events, seminars, and educational sessions.",
  alternates: { canonical: `${SITE_URL}/gallery/events-seminars` }
};

type EventItem = {
  id: string;
  title: string;
  image_url: string;
  description: string;
  event_date: string;
  cloudinary_folder: string;
};

async function getEvents(): Promise<EventItem[]> {
  try {
    const sheets = await getSheetsClient();
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_GALLERY_ID!,
      range: "Events!A:H",
    });

    const rows = res.data.values ?? [];
    if (rows.length < 2) return [];

    // A=0:id  B=1:title  C=2:image_url  D=3:description
    // E=4:event_date  F=5:published  G=6:createdAt  H=7:cloudinary_folder
    const events = rows
      .slice(1)
      .filter((row) => (row[5] ?? "") === "TRUE")
      .map((row) => ({
        id: row[0] ?? "",
        title: row[1] ?? "",
        image_url: row[2] ?? "",
        description: row[3] ?? "",
        event_date: row[4] ?? "",
        cloudinary_folder: row[7] ?? "",
      }))
      .sort((a, b) => {
        const da = new Date(a.event_date).getTime();
        const db = new Date(b.event_date).getTime();
        return (isNaN(db) ? 0 : db) - (isNaN(da) ? 0 : da);
      });

    console.log("Events data:", JSON.stringify(events, null, 2));
    return events;
  } catch (err) {
    console.error("Events fetch error:", err);
    return [];
  }
}

export default async function EventsGalleryPage() {
  const events = await getEvents();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="relative h-[170px] w-full overflow-hidden bg-sky-500/70">
        <Image src="/header.png" alt="Header" fill className="object-cover opacity-60" sizes="100vw" priority />
        <div className="absolute left-10 top-1/2 -translate-y-1/2 transform text-white md:left-40">
          <h1 className="mb-1 text-3xl font-bold drop-shadow md:text-4xl">Events &amp; Seminars</h1>
          <div className="text-sm font-normal text-white/80">
            Home <span className="mx-1 text-white/50">/</span> Events &amp; Seminars
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <EventsClient events={events} />
      </div>

      <TestimonialLogos />
      <SiteFooter />
    </main>
  );
}
