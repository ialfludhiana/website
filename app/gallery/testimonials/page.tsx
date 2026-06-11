import Image from "next/image";
import { Navbar } from "@/components/navbar";
import SiteFooter from "@/components/site-footer";
import TestimonialLogos from "@/components/testimonial-logos";
import { getRows } from "@/lib/google";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ialf.in";

export const revalidate = 60;

export const metadata = {
  title: "Testimonials Gallery • IALF",
  description: "Browse photos from IALF client testimonials and success stories.",
  alternates: { canonical: `${SITE_URL}/gallery/testimonials` }
};

type GalleryItem = {
  id: string;
  title: string;
  image_url: string;
  caption: string;
};

async function getGalleryTestimonials(): Promise<GalleryItem[]> {
  try {
    const rows = await getRows(
      process.env.GOOGLE_SHEET_GALLERY_ID!,
      "Gallery Testimonials",
      "A:F"
    );
    return rows
      .filter((r) => r.published === "TRUE" && r.image_url)
      .map((r) => ({
        id: r.id ?? "",
        title: r.title ?? "",
        image_url: r.image_url ?? "",
        caption: r.caption ?? "",
      }));
  } catch (err) {
    console.error("Gallery Testimonials fetch error:", err);
    return [];
  }
}

export default async function TestimonialsGalleryPage() {
  const items = await getGalleryTestimonials();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="relative h-[170px] w-full overflow-hidden bg-sky-500/70">
        <Image src="/header.png" alt="Header" fill className="object-cover opacity-60" sizes="100vw" priority />
        <div className="absolute left-10 top-1/2 -translate-y-1/2 transform text-white md:left-40">
          <h1 className="mb-1 text-3xl font-bold drop-shadow md:text-4xl">Testimonials Gallery</h1>
          <div className="text-sm font-normal text-white/80">
            Home <span className="mx-1 text-white/50">/</span> Testimonials
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {items.length === 0 ? (
          <p className="py-20 text-center text-slate-500">Testimonial photos coming soon.</p>
        ) : (
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {items.map((item) => (
              <div key={item.id} className="mb-4 break-inside-avoid border border-slate-100 bg-slate-50 shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image_url} alt={item.title || "Testimonial"} className="h-auto w-full object-cover" />
                {item.caption && (
                  <p className="p-2 text-sm text-slate-600">{item.caption}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <TestimonialLogos />
      <SiteFooter />
    </main>
  );
}
