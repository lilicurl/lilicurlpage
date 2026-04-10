import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// In-memory rate limiter: 3 requests per 15 minutes per IP.
// Note: per-instance only — does not coordinate across Vercel instances.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false;
  }

  entry.count++;
  return true;
}

const SupportSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(254),
  message: z.string().min(10).max(2000),
});

const RECIPIENTS = ['lily101288@gmail.com', 'contacto@vialabs.net'];

export async function POST(req: NextRequest): Promise<NextResponse> {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: { code: 'RATE_LIMITED', message: 'Too many requests. Try again in 15 minutes.' } },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: { code: 'INVALID_JSON', message: 'Invalid request body.' } },
      { status: 400 },
    );
  }

  const parsed = SupportSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: { code: 'VALIDATION_ERROR', message: parsed.error.issues[0]?.message ?? 'Invalid input.' } },
      { status: 400 },
    );
  }

  const { name, email, message } = parsed.data;

  const { error } = await resend.emails.send({
    from: 'devcast support <onboarding@resend.dev>',
    to: RECIPIENTS,
    replyTo: email,
    subject: `devcast support — ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
    html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br/>')}</p>`,
  });

  if (error) {
    console.error('resend.error', String(error));
    return NextResponse.json(
      { error: { code: 'SEND_FAILED', message: 'Failed to send message. Try again later.' } },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
