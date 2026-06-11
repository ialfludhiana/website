import { NextRequest, NextResponse } from "next/server";
import { listImages } from "@/lib/cloudinary";

export async function GET(request: NextRequest) {
  const folder = request.nextUrl.searchParams.get("folder");
  if (!folder) {
    return NextResponse.json({ error: "folder param required" }, { status: 400 });
  }

  try {
    const images = await listImages(folder);
    return NextResponse.json({ images });
  } catch (err) {
    console.error("Cloudinary images API error:", err);
    return NextResponse.json({ images: [] }, { status: 500 });
  }
}
