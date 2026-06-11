import { NextRequest, NextResponse } from "next/server";
import { appendRow } from "@/lib/google";
import { v4 as uuidv4 } from "uuid";

const SHEET_ID = process.env.GOOGLE_SHEET_ENQUIRIES_ID!;
const SHEET_NAME = "Contact";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, visaType, message } = body as Record<string, string>;

    if (!name || !phone || !email || !visaType || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    if (message.trim().length < 10) {
      return NextResponse.json({ error: "Message must be at least 10 characters" }, { status: 400 });
    }

    const id = uuidv4();
    const createdAt = new Date().toISOString();

    // Columns: id, name, phone, email, visa_type, message, createdAt
    await appendRow(SHEET_ID, SHEET_NAME, [id, name, phone, email, visaType, message, createdAt]);

    return NextResponse.json({ message: "Message sent successfully" });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Failed to save enquiry" }, { status: 500 });
  }
}
