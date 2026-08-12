import nodemailer from "nodemailer";
import type { ContactPayload } from "@/lib/contact-types";

export type { ContactPayload };

function requireEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function createTransporter() {
  const port = Number(process.env.SMTP_PORT || "587");
  return nodemailer.createTransport({
    host: requireEnv("SMTP_HOST"),
    port,
    secure: port === 465,
    auth: {
      user: requireEnv("SMTP_USER"),
      pass: requireEnv("SMTP_PASS"),
    },
  });
}

function buildRows(payload: ContactPayload): Array<[string, string]> {
  const rows: Array<[string, string | undefined]> = [
    ["Sursă formular", payload.source],
    ["Nume", payload.name],
    ["Telefon", payload.phone],
    ["Email", payload.email],
    ["Județ", payload.county],
    ["Localitate", payload.city],
    ["Subiect", payload.subject],
    ["Serviciu", payload.service],
    ["Tip proprietate", payload.propertyType],
    ["Tip acoperiș", payload.roofType],
    ["Baterii / stocare", payload.batteryOption],
    ["Consum / factură", payload.monthlyBill],
    ["Mesaj", payload.message],
    ["Observații", payload.notes],
  ];

  return rows.filter(([, value]) => Boolean(value?.trim())) as Array<[string, string]>;
}

export async function sendContactEmail(payload: ContactPayload): Promise<void> {
  const to = requireEnv("MAIL_TO");
  const from = process.env.SMTP_FROM?.trim() || requireEnv("SMTP_USER");
  const rows = buildRows(payload);

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  const html = `
    <div style="font-family:Arial,sans-serif;font-size:14px;color:#0f172a;line-height:1.5">
      <h2 style="margin:0 0 12px">Cerere nouă — ${escapeHtml(payload.source)}</h2>
      <table style="border-collapse:collapse;width:100%;max-width:640px">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding:8px 10px;border:1px solid #e2e8f0;background:#f8fafc;font-weight:600;width:180px">${escapeHtml(label)}</td>
            <td style="padding:8px 10px;border:1px solid #e2e8f0;white-space:pre-wrap">${escapeHtml(value)}</td>
          </tr>`
          )
          .join("")}
      </table>
    </div>
  `;

  const transporter = createTransporter();
  await transporter.sendMail({
    from,
    to,
    replyTo: payload.email?.trim() || undefined,
    subject: `[MontarePanouri] ${payload.source} — ${payload.name}`,
    text,
    html,
  });
}
