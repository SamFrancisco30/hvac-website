// Google Form "Air We Go Quiz Leads" (personal Gmail account) — anonymous
// formResponse submissions feed the "Air We Go Leads" spreadsheet.
// Entry IDs were extracted from the live viewform HTML; if the form is ever
// rebuilt, re-extract them (never guess). Every field is a free-text answer.
const FORM_RESPONSE_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf-GP_4a4vk8lh27SXhfQ0Lpgxddjc3UMzujOq09ISOaWmmNg/formResponse";

const ENTRY = {
  timestamp: "entry.1040907828",
  name: "entry.988029153",
  phone: "entry.158627187",
  email: "entry.655232244",
  postalCode: "entry.2115081980",
  heatingSource: "entry.1760307048",
  homeType: "entry.346838480",
  incomeBand: "entry.1050472564",
  leadType: "entry.685461192",
  sourcePage: "entry.63894429",
} as const;

export type LeadRow = Partial<Record<Exclude<keyof typeof ENTRY, "timestamp">, string>> & {
  name: string;
  phone: string;
};

/** Appends one row to the leads sheet. Returns false if Google rejected it or was unreachable. */
export async function submitLead(row: LeadRow): Promise<boolean> {
  const params = new URLSearchParams({ [ENTRY.timestamp]: new Date().toISOString() });
  for (const [field, value] of Object.entries(row) as Array<[keyof LeadRow, string | undefined]>) {
    params.set(ENTRY[field], value?.trim() || "");
  }

  try {
    const res = await fetch(FORM_RESPONSE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });
    if (!res.ok) {
      console.error("lead-form: formResponse rejected", res.status);
      return false;
    }
    return true;
  } catch (err) {
    console.error("lead-form: formResponse network error", err);
    return false;
  }
}
