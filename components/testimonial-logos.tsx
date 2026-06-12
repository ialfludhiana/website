import Image from "next/image";
import { getRows } from "@/lib/google";

export const revalidate = 300;

export default async function TestimonialLogos() {
  let images: string[] = [];

  try {
    const rows = await getRows(
      process.env.GOOGLE_SHEET_TESTIMONIALS_ID!,
      "Testimonials",
      "A:G"
    );
    images = rows
      .filter((r) => r.approved === "TRUE" && r.image_url)
      .map((r) => r.image_url)
      .filter(Boolean)
      .slice(0, 40) as string[];
  } catch {
    images = [];
  }

  if (images.length === 0) return null;

  return (
    <div className="w-full overflow-hidden bg-white">
      <section className="w-full px-0">
        <div className="w-full">
          <div className="flex flex-wrap items-center gap-0">
            {images.map((img, idx) => (
              <Image
                key={`${img}-${idx}`}
                src={img}
                alt={`testimonial-logo-${idx + 1}`}
                width={56}
                height={56}
                className="h-[63.3px] w-[63.3px] object-contain opacity-80 grayscale"
                unoptimized
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
