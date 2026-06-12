import { NextResponse } from "next/server";
import { getRows } from "@/lib/google";

export const revalidate = 300;

export async function GET() {
  try {
    const rows = await getRows(
      process.env.GOOGLE_SHEET_TESTIMONIALS_ID!,
      "Testimonials",
      "A:G"
    );
    const testimonials = rows
      .filter((r) => r.approved === "TRUE")
      .map((r) => ({
        id: r.id || "",
        name: r.name || null,
        visaType: r.visa_type || null,
        comment: r.comment || null,
        imageUrl: r.image_url || null,
      }));
    return NextResponse.json({ testimonials });
  } catch (e) {
    console.error("Testimonials public fetch error:", e);
    return NextResponse.json({ testimonials: [] });
  }
}
