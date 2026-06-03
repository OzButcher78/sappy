import { NextResponse } from "next/server";

export const runtime = "nodejs";
// Lead delivery must run per-request, never cached/prerendered.
export const dynamic = "force-dynamic";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "dieterbalmer@gmail.com";
// Custom from-addresses require a verified domain in Resend. Until sappy.ch is
// verified, `onboarding@resend.dev` works but can ONLY deliver to the Resend
// account owner's address — fine for the lead notification, but the prospect
// auto-reply will be rejected until the domain is verified. Override via env.
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "Sappy <onboarding@resend.dev>";

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  website?: unknown;
  phone?: unknown;
  company?: unknown; // honeypot
}

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

// Escape user input before embedding in the notification HTML email.
const esc = (v: string) =>
  v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: bots fill the hidden "company" field. Pretend success so they
  // don't retry, but send nothing.
  if (str(body.company)) {
    return NextResponse.json({ ok: true });
  }

  const name = str(body.name);
  const email = str(body.email);
  const website = str(body.website);
  const phone = str(body.phone);

  if (!name || !isEmail(email)) {
    return NextResponse.json({ error: "validation_failed" }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Not configured yet — surface a clear error so the form shows its error
    // state instead of silently dropping the lead.
    console.error("[contact] RESEND_API_KEY is not set — cannot deliver lead.");
    return NextResponse.json({ error: "email_not_configured" }, { status: 503 });
  }

  const { Resend } = await import("resend");
  const resend = new Resend(apiKey);

  const rows: [string, string][] = [
    ["Name", name],
    ["E-Mail", email],
    ["Aktuelle Website", website || "—"],
    ["Telefon", phone || "—"],
    ["Quelle", "sappy.ch/auto"],
  ];
  const leadHtml = `
    <div style="font-family:system-ui,sans-serif;font-size:15px;color:#111;line-height:1.6">
      <h2 style="margin:0 0 12px">Neue Anfrage über sappy.ch/auto</h2>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:4px 16px 4px 0;color:#666">${k}</td><td style="padding:4px 0"><strong>${esc(
                v
              )}</strong></td></tr>`
          )
          .join("")}
      </table>
    </div>`;

  // 1) Lead notification to the owner — critical path.
  const lead = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: email,
    subject: `Neue Anfrage von ${name} — sappy.ch/auto`,
    html: leadHtml,
  });

  if (lead.error) {
    console.error("[contact] lead notification failed:", lead.error);
    // TEMP DEBUG: surface the real reason + resolved (non-secret) env values.
    return NextResponse.json(
      { error: "send_failed", detail: lead.error, from: FROM_EMAIL, to: TO_EMAIL },
      { status: 502 }
    );
  }

  // 2) Auto-reply to the prospect — best effort. A failure here (e.g. domain
  // not yet verified) must NOT fail the request: the lead is already captured.
  try {
    const replyHtml = `
      <div style="font-family:system-ui,sans-serif;font-size:15px;color:#111;line-height:1.6">
        <p>Hallo ${esc(name)},</p>
        <p>vielen Dank für Ihre Anfrage! Ich habe sie erhalten und melde mich
        innert 24 Stunden bei Ihnen, um Ihr kostenloses 15-Minuten-Gespräch
        zu vereinbaren.</p>
        <p>Bis dahin freundliche Grüsse<br/>Dieter Balmer — Sappy</p>
        <p style="color:#888;font-size:13px">sappy.ch</p>
      </div>`;
    const reply = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "Danke für Ihre Anfrage — ich melde mich innert 24 h",
      html: replyHtml,
    });
    if (reply.error) {
      console.warn("[contact] auto-reply not sent:", reply.error);
    }
  } catch (err) {
    console.warn("[contact] auto-reply threw:", err);
  }

  return NextResponse.json({ ok: true });
}
