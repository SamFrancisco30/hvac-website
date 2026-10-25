import { NextResponse } from "next/server";
import { submitLead } from "@/lib/lead-form";

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

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as QuizLead | null;

  if (!body?.name?.trim() || !body?.phone?.trim()) {
    return NextResponse.json({ ok: false, error: "Name and phone are required." }, { status: 400 });
  }

  const saved = await submitLead({
    name: body.name,
    phone: body.phone,
    email: body.email,
    postalCode: body.postalCode,
    heatingSource: body.heatingSource,
    homeType: body.homeType,
    incomeBand: body.incomeBand,
    leadType: body.intent === "waitlist" ? "federal-waitlist" : "HRS-now",
    sourcePage: body.source,
  });

  if (!saved) {
    return NextResponse.json({ ok: false, error: "Lead capture failed, please try again." }, { status: 502 });
  }

  console.log("Air We Go quiz lead captured:", body.name.trim(), body.phone.trim());
  return NextResponse.json({ ok: true });
}
