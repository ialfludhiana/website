import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

export async function getSheetsClient() {
  return google.sheets({ version: "v4", auth });
}

export async function getRows(
  sheetId: string,
  sheetName: string,
  range?: string
): Promise<Record<string, string>[]> {
  try {
    const sheets = await getSheetsClient();
    const fullRange = range ? `${sheetName}!${range}` : `${sheetName}!A:Z`;
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: fullRange,
    });
    const rows = res.data.values;
    if (!rows || rows.length < 2) return [];
    const headers = rows[0] as string[];
    return rows.slice(1).map((row) => {
      const obj: Record<string, string> = {};
      headers.forEach((header, i) => {
        obj[header] = (row[i] as string) ?? "";
      });
      return obj;
    });
  } catch (error) {
    console.error("getRows error:", error);
    return [];
  }
}

export async function appendRow(
  sheetId: string,
  sheetName: string,
  values: string[]
): Promise<void> {
  try {
    const sheets = await getSheetsClient();
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: `${sheetName}!A:Z`,
      valueInputOption: "RAW",
      requestBody: { values: [values] },
    });
  } catch (error) {
    console.error("appendRow error:", error);
    throw error;
  }
}

export async function updateRow(
  sheetId: string,
  sheetName: string,
  rowIndex: number,
  values: string[]
): Promise<void> {
  try {
    const sheets = await getSheetsClient();
    await sheets.spreadsheets.values.update({
      spreadsheetId: sheetId,
      range: `${sheetName}!A${rowIndex}`,
      valueInputOption: "RAW",
      requestBody: { values: [values] },
    });
  } catch (error) {
    console.error("updateRow error:", error);
    throw error;
  }
}

export async function deleteRow(
  sheetId: string,
  sheetName: string,
  rowIndex: number
): Promise<void> {
  try {
    const sheets = await getSheetsClient();
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: sheetId,
    });
    const sheet = spreadsheet.data.sheets?.find(
      (s) => s.properties?.title === sheetName
    );
    if (!sheet?.properties?.sheetId) throw new Error("Sheet not found");
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: sheetId,
      requestBody: {
        requests: [
          {
            deleteDimension: {
              range: {
                sheetId: sheet.properties.sheetId,
                dimension: "ROWS",
                startIndex: rowIndex - 1,
                endIndex: rowIndex,
              },
            },
          },
        ],
      },
    });
  } catch (error) {
    console.error("deleteRow error:", error);
    throw error;
  }
}
