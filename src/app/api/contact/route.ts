import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

/** Destination inbox — set CONTACT_TO_EMAIL in your env vars */
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? '';

// ── Rate limiting (in-memory) ──────────────────────────────────────────────
// Max 3 submissions per IP per 15 minutes
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes

const ipMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipMap.get(ip);

  if (!entry || now > entry.resetAt) {
    // First request or window expired — reset
    ipMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) return true;

  entry.count += 1;
  return false;
}

export async function POST(req: NextRequest) {
  // ── 1. Rate limit check ────────────────────────────────────────────────────
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many messages sent. Please wait 15 minutes before trying again.' },
      { status: 429 }
    );
  }

  // ── 2. Parse body ──────────────────────────────────────────────────────────
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const name     = (body.name     as string | undefined)?.trim() ?? '';
  const email    = (body.email    as string | undefined)?.trim() ?? '';
  const subject  = (body.subject  as string | undefined)?.trim() ?? '';
  const message  = (body.message  as string | undefined)?.trim() ?? '';
  const honeypot = (body.website  as string | undefined)?.trim() ?? ''; // hidden field

  // ── 3. Honeypot check (bots fill hidden fields, real users don't) ──────────
  if (honeypot) {
    // Silently succeed so bots think it worked — don't actually send
    return NextResponse.json({ success: true });
  }

  // ── 4. Server-side validation ──────────────────────────────────────────────
  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 422 });
  }

  if (name.length > 100 || subject.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: 'One or more fields exceed maximum length.' }, { status: 422 });
  }

  // Basic email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 422 });
  }

  if (!TO_EMAIL) {
    console.error('[contact] CONTACT_TO_EMAIL env var is not set.');
    return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 });
  }

  // ── 5. Send email via Resend ───────────────────────────────────────────────
  const { error } = await resend.emails.send({
    from:    'Portfolio Contact <onboarding@resend.dev>',
    to:      [TO_EMAIL],
    replyTo: email,          // clicking "Reply" in Gmail goes back to the sender
    subject: `[Portfolio] ${subject} — from ${name}`,
    html: `
      <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 24px; background: #0f0e17; color: #e2e0ff; border-radius: 12px;">

        <h2 style="margin: 0 0 24px; font-size: 20px; color: #c4b5fd;">
          📬 New message from your portfolio
        </h2>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr>
            <td style="padding: 10px 0; color: #9ca3af; font-size: 13px; width: 90px; vertical-align: top;">Name</td>
            <td style="padding: 10px 0; color: #f3f4f6; font-size: 15px;">${escapeHtml(name)}</td>
          </tr>
          <tr style="border-top: 1px solid #1e1b4b;">
            <td style="padding: 10px 0; color: #9ca3af; font-size: 13px; vertical-align: top;">Email</td>
            <td style="padding: 10px 0;">
              <a href="mailto:${escapeHtml(email)}" style="color: #a78bfa; font-size: 15px;">${escapeHtml(email)}</a>
            </td>
          </tr>
          <tr style="border-top: 1px solid #1e1b4b;">
            <td style="padding: 10px 0; color: #9ca3af; font-size: 13px; vertical-align: top;">Subject</td>
            <td style="padding: 10px 0; color: #f3f4f6; font-size: 15px;">${escapeHtml(subject)}</td>
          </tr>
        </table>

        <div style="background: #1a1730; border: 1px solid #2d2460; border-radius: 8px; padding: 20px;">
          <p style="margin: 0 0 8px; color: #9ca3af; font-size: 13px;">Message</p>
          <p style="margin: 0; color: #f3f4f6; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>

        <p style="margin: 24px 0 0; color: #6b7280; font-size: 12px; border-top: 1px solid #1e1b4b; padding-top: 16px;">
          Sent from nakul-yadav-portfolio.vercel.app · IP: ${escapeHtml(ip)} — hit Reply to respond directly.
        </p>
      </div>
    `,
  });

  if (error) {
    console.error('[contact] Resend error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}

/** Sanitise user input to prevent HTML injection in the email body */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
