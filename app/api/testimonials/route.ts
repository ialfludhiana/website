import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { appendRow } from "@/lib/google";
import { uploadImage } from "@/lib/cloudinary";

export const dynamic = "force-dynamic";

const SHEET_ID = process.env.GOOGLE_SHEET_TESTIMONIALS_ID!;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const name = formData.get("name") as string | null;
    const visaType = formData.get("visaType") as string | null;
    const comment = formData.get("comment") as string | null;
    const photo = formData.get("photo") as File | null;

    if (!name || !visaType || !comment) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    let imageUrl = "";
    if (photo && photo.size > 0) {
      const buffer = Buffer.from(await photo.arrayBuffer());
      const fileName = `${Date.now()}-${photo.name}`;
      imageUrl = await uploadImage(buffer, "ialf/testimonials", fileName);
    }

    const id = uuidv4();
    const createdAt = new Date().toISOString();

    await appendRow(SHEET_ID, "Testimonials", [
      id,
      name,
      visaType,
      comment,
      imageUrl,
      "FALSE",
      createdAt,
    ]);

    return NextResponse.json({ success: true, id });
  } catch (err) {
    console.error("POST /api/testimonials error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
