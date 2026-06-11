import { NextRequest, NextResponse } from "next/server";
import { getRows, updateRow } from "@/lib/google";

const SHEET_ID = process.env.GOOGLE_SHEET_TESTIMONIALS_ID!;
const SHEET_NAME = "Testimonials";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

function checkAuth(request: NextRequest): boolean {
  const auth = request.headers.get("x-admin-password");
  return !!ADMIN_PASSWORD && auth === ADMIN_PASSWORD;
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const rows = await getRows(SHEET_ID, SHEET_NAME, "A:G");
    const rowIndex = rows.findIndex((r) => r.id === params.id);

    if (rowIndex === -1) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const row = rows[rowIndex];
    // +2: header row is row 1, first data row is row 2
    const sheetRowIndex = rowIndex + 2;

    await updateRow(SHEET_ID, SHEET_NAME, sheetRowIndex, [
      row.id,
      row.name,
      row.visa_type,
      row.comment,
      row.image_url,
      "TRUE",
      row.createdAt,
    ]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("PATCH approve error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
