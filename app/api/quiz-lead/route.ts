import { NextResponse } from "next/server";

type QuizLead = {
  name?: string;
  phone?: string;
  email?: string;
  postalCode?: string;
  heatingSource?: string;
  homeType?: string;
  incomeBand?: string;
  intent?: "assessment" | "waitlist";
  source?: string;
};

// Google Form "Air We Go Quiz Leads" (personal Gmail account) — anonymous
// formResponse submissions feed the "Air We Go Leads" spreadsheet.
// Entry IDs were extracted from the live viewform HTML; if the form is ever
// rebuilt, re-extract them (never guess).
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

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as QuizLead | null;

  if (!body?.name?.trim() || !body?.phone?.trim()) {
    return NextResponse.json({ ok: false, error: "Name and phone are required." }, { status: 400 });
  }

  const params = new URLSearchParams({
    [ENTRY.timestamp]: new Date().toISOString(),
    [ENTRY.name]: body.name.trim(),
    [ENTRY.phone]: body.phone.trim(),
    [ENTRY.email]: body.email?.trim() || "",
    [ENTRY.postalCode]: body.postalCode?.trim() || "",
    [ENTRY.heatingSource]: body.heatingSource?.trim() || "",
    [ENTRY.homeType]: body.homeType?.trim() || "",
    [ENTRY.incomeBand]: body.incomeBand?.trim() || "",
    [ENTRY.leadType]: body.intent === "waitlist" ? "federal-waitlist" : "HRS-now",
    [ENTRY.sourcePage]: body.source?.trim() || "",
  });

  try {
    const res = await fetch(FORM_RESPONSE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });
    if (!res.ok) {
      console.error("quiz-lead: formResponse rejected", res.status);
      return NextResponse.json({ ok: false, error: "Lead capture failed, please try again." }, { status: 502 });
    }
  } catch (err) {
    console.error("quiz-lead: formResponse network error", err);
    return NextResponse.json({ ok: false, error: "Lead capture failed, please try again." }, { status: 502 });
  }

  console.log("Air We Go quiz lead captured:", body.name.trim(), body.phone.trim());
  return NextResponse.json({ ok: true });
}
