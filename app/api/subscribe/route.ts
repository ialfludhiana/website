import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { getRows, appendRow } from "@/lib/google";

export const dynamic = "force-dynamic";

const SHEET_ID = process.env.GOOGLE_SHEET_SUBSCRIBERS_ID!;
const SHEET_NAME = "Subscribers";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = (body.email as string | undefined)?.trim().toLowerCase();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const rows = await getRows(SHEET_ID, SHEET_NAME, "A:C");
    const exists = rows.some((row) => row.email?.toLowerCase() === email);

    if (exists) {
      return NextResponse.json(
        { status: "already_subscribed", message: "You are already subscribed to our updates." },
        { status: 200 }
      );
    }

    await appendRow(SHEET_ID, SHEET_NAME, [
      uuidv4(),
      email,
      new Date().toISOString(),
    ]);

    return NextResponse.json({ message: "Subscribed successfully" });
  } catch (err) {
    console.error("POST /api/subscribe error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
