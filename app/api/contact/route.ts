import { NextResponse } from "next/server";
import { submitLead } from "@/lib/lead-form";
import { serviceMenu, urgencyOptions } from "@/lib/site";

type ContactRequest = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  urgency?: string;
  city?: string;
  message?: string;
  source?: string;
};

// The leads form has no columns for these, so they ride along in "Source Page" as one readable line.
function describeRequest(body: ContactRequest): string {
  const service = serviceMenu.find((item) => item.slug === body.service)?.title ?? (body.service === "other" ? "Other / Not sure" : "");
  const urgency = urgencyOptions.find((option) => option.value === body.urgency)?.label ?? "";
  const city = body.city === "other" ? "Other GTA area" : body.city?.trim() ?? "";
  const message = body.message?.replace(/\s+/g, " ").trim().slice(0, 2000) ?? "";

  return [
    body.source?.trim() || "contact-form",
    service && `Service: ${service}`,
    urgency && `Urgency: ${urgency}`,
    city && `City: ${city}`,
    message && `Message: ${message}`,
  ]
    .filter(Boolean)
    .join(" · ");
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as ContactRequest | null;

  if (!body?.name?.trim() || !body?.phone?.trim()) {
    return NextResponse.json({ ok: false, error: "Name and phone are required." }, { status: 400 });
  }

  const saved = await submitLead({
    name: body.name,
    phone: body.phone,
    email: body.email,
    leadType: "contact-form",
    sourcePage: describeRequest(body),
  });

  if (!saved) {
    return NextResponse.json({ ok: false, error: "Request could not be saved, please call us." }, { status: 502 });
  }

  console.log("Air We Go contact request captured:", body.name.trim(), body.phone.trim());
  return NextResponse.json({ ok: true });
}
