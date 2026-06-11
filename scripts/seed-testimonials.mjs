/**
 * One-off seed script — inserts two approved sample testimonials into the Testimonials sheet.
 * Run from project root: node scripts/seed-testimonials.mjs
 * Requires .env.local to be present and readable.
 */

import { readFileSync } from "fs";
import { resolve } from "path";
import { google } from "googleapis";

// Load .env.local manually
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

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const SHEET_ID = process.env.GOOGLE_SHEET_TESTIMONIALS_ID;

async function appendRow(values) {
  const sheets = google.sheets({ version: "v4", auth });
  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: "Testimonials!A:G",
    valueInputOption: "RAW",
    requestBody: { values: [values] },
  });
}

const samples = [
  {
    id: crypto.randomUUID(),
    name: "Harpreet Kaur",
    visa_type: "Student Visa",
    comment: "IALF made my Canada student visa process seamless. Highly recommended for anyone looking to study abroad!",
    image_url: "",
    approved: "TRUE",
    createdAt: new Date().toISOString(),
  },
  {
    id: crypto.randomUUID(),
    name: "Rajveer Singh",
    visa_type: "Permanent Residency",
    comment: "Got my PR approved on first attempt thanks to the expert guidance from IALF team. Exceptional service!",
    image_url: "",
    approved: "TRUE",
    createdAt: new Date().toISOString(),
  },
];

(async () => {
  for (const s of samples) {
    await appendRow([s.id, s.name, s.visa_type, s.comment, s.image_url, s.approved, s.createdAt]);
    console.log(`✅ Inserted: ${s.name} (${s.visa_type})`);
  }
  console.log("Done. Refresh the homepage to see the testimonials carousel.");
})();
