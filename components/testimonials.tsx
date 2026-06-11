import { getRows } from "@/lib/google";
import TestimonialsClient from "./testimonials-client";

export default async function Testimonials() {
  let items: Array<{
    id: string;
    name: string | null;
    comment: string | null;
    imageUrl: string | null;
    visaType: string | null;
  }> = [];

  try {
    const rows = await getRows(
      process.env.GOOGLE_SHEET_TESTIMONIALS_ID!,
      "Testimonials",
      "A:G"
    );
    items = rows
      .filter((r) => r.approved === "TRUE")
      .map((r) => ({
        id: r.id || "",
        name: r.name || null,
        comment: r.comment || null,
        imageUrl: r.image_url || null,
        visaType: r.visa_type || null,
      }));
  } catch {
    items = [];
  }

  return <TestimonialsClient items={items} />;
}
