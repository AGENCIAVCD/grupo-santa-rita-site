import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const requests = new Map<string, { count: number; resetAt: number }>();

function clean(value: unknown, max = 500) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  const now = Date.now();
  const rate = requests.get(ip);
  if (rate && rate.resetAt > now && rate.count >= 5) {
    return NextResponse.json({ message: "Muitas tentativas. Aguarde alguns minutos e tente novamente." }, { status: 429 });
  }
  requests.set(ip, rate && rate.resetAt > now ? { ...rate, count: rate.count + 1 } : { count: 1, resetAt: now + 10 * 60 * 1000 });

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Dados inválidos." }, { status: 400 });
  }

  const website = clean(body.website);
  const startedAt = Number(body.startedAt);
  if (website || !startedAt || now - startedAt < 2500) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 100);
  const company = clean(body.company, 120);
  const phone = clean(body.phone, 40);
  const email = clean(body.email, 180);
  const operation = clean(body.operation, 120);
  const message = clean(body.message, 2000);

  if (name.length < 2 || company.length < 2 || phone.length < 8 || !emailPattern.test(email) || !operation || message.length < 10) {
    return NextResponse.json({ message: "Revise os campos obrigatórios e tente novamente." }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    return NextResponse.json({ message: "O canal de envio está em configuração. Fale conosco por telefone ou WhatsApp." }, { status: 503 });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Nova solicitação comercial — ${company}`,
      text: [`Nome: ${name}`, `Empresa: ${company}`, `Telefone: ${phone}`, `E-mail: ${email}`, `Operação: ${operation}`, "", message].join("\n"),
    }),
  });

  if (!response.ok) return NextResponse.json({ message: "Não foi possível enviar agora. Tente novamente ou fale conosco pelo WhatsApp." }, { status: 502 });
  return NextResponse.json({ ok: true });
}
