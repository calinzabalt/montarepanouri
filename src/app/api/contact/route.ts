import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mail";
import type { ContactPayload } from "@/lib/contact-types";

export const runtime = "nodejs";

function asString(value: unknown, max = 500): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  return trimmed.slice(0, max);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;

    const name = asString(body.name, 120);
    const phone = asString(body.phone, 40);
    const source = asString(body.source, 80) || "Formular site";

    if (!name || !phone) {
      return NextResponse.json(
        { ok: false, error: "Numele și telefonul sunt obligatorii." },
        { status: 400 }
      );
    }

    const payload: ContactPayload = {
      source,
      name,
      phone,
      email: asString(body.email, 160),
      county: asString(body.county, 80),
      city: asString(body.city, 80),
      subject: asString(body.subject, 160),
      message: asString(body.message, 4000),
      service: asString(body.service, 160),
      propertyType: asString(body.propertyType, 120),
      roofType: asString(body.roofType, 120),
      batteryOption: asString(body.batteryOption, 160),
      monthlyBill: asString(body.monthlyBill, 120),
      notes: asString(body.notes, 4000),
    };

    await sendContactEmail(payload);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] send failed:", error);
    return NextResponse.json(
      { ok: false, error: "Nu am putut trimite mesajul. Încercați din nou." },
      { status: 500 }
    );
  }
}
