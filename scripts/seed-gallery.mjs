import { readFileSync } from "fs";
import { resolve } from "path";
import { google } from "googleapis";

function loadEnv() {
  const envPath = resolve(process.cwd(), ".env.local");
  try {
    const content = readFileSync(envPath, "utf-8");
    for (const line of content.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const idx = trimmed.indexOf("=");
      if (idx === -1) continue;
      const key = trimmed.slice(0, idx).trim();
      const val = trimmed.slice(idx + 1).trim().replace(/^["']|["']$/g, "");
      if (!process.env[key]) process.env[key] = val;
    }
  } catch {
    console.error("Could not read .env.local — make sure it exists in the project root.");
    process.exit(1);
  }
}

loadEnv();

const GALLERY_SHEET_ID = process.env.GOOGLE_SHEET_GALLERY_ID;

if (!GALLERY_SHEET_ID) {
  console.error("❌ GOOGLE_SHEET_GALLERY_ID not set in .env.local");
  process.exit(1);
}

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

async function appendRow(sheetName, values) {
  const sheets = google.sheets({ version: "v4", auth });
  await sheets.spreadsheets.values.append({
    spreadsheetId: GALLERY_SHEET_ID,
    range: `${sheetName}!A:Z`,
    valueInputOption: "RAW",
    requestBody: { values: [values] },
  });
}

(async () => {
  await appendRow("Gallery Testimonials", [
    "gt-001",
    "Happy Client",
    "",
    "Successfully got Canada PR - Thank you IALF!",
    "TRUE",
    "2026-06-11",
  ]);
  console.log("✅ Inserted: Gallery Testimonials sample (gt-001)");

  await appendRow("Videos", [
    "v-001",
    "IALF Success Story",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "Client shares their immigration success story with IALF",
    "TRUE",
    "2026-06-11",
  ]);
  console.log("✅ Inserted: Videos sample (v-001)");

  await appendRow("Events", [
    "e-001",
    "Canada Immigration Seminar 2025",
    "",
    "Free seminar covering Canada PR pathways and student visa options",
    "2025-11-15",
    "TRUE",
    "2026-06-11",
  ]);
  console.log("✅ Inserted: Events sample (e-001)");
})();
