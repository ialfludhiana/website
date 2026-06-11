import { NextRequest, NextResponse } from "next/server";
import { appendRow } from "@/lib/google";
import { v4 as uuidv4 } from "uuid";

const SHEET_ID = process.env.GOOGLE_SHEET_ENQUIRIES_ID!;
const SHEET_NAME = "Appointments";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, address, date, time, category, visitType } =
      body as Record<string, string>;

    if (!name || !phone || !date) {
      return NextResponse.json({ error: "Name, phone and date are required" }, { status: 400 });
    }

    const id = uuidv4();
    const createdAt = new Date().toISOString();

    // Columns: id, name, email, phone, address, date, time, category, visit_type, createdAt
    await appendRow(SHEET_ID, SHEET_NAME, [
      id, name, email ?? "", phone, address ?? "",
      date, time ?? "", category ?? "", visitType ?? "", createdAt,
    ]);

    return NextResponse.json({ message: "Appointment request received" });
  } catch (err) {
    console.error("Appointment API error:", err);
    return NextResponse.json({ error: "Failed to save appointment" }, { status: 500 });
  }
}
