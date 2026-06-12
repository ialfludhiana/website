import { NextResponse } from "next/server";
import { getSheetsClient } from "@/lib/google";

export const dynamic = "force-dynamic";

const SHEET_ID = process.env.GOOGLE_SHEET_GALLERY_ID!;

export async function GET() {
  try {
    const sheets = await getSheetsClient();
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: "Events!A:H",
    });

    const rows = res.data.values ?? [];
    if (rows.length < 2) return NextResponse.json({ events: [] });

    // Skip header row; map columns by explicit index so column H is always cloudinary_folder
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

    return NextResponse.json({ events });
  } catch (err) {
    console.error("Events API error:", err);
    return NextResponse.json({ events: [] }, { status: 500 });
  }
}
