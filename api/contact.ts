type ContactPayload = {
  name: string
  email: string
  message: string
}

const RESEND_API_URL = "https://api.resend.com/emails"

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST")
    return res.status(405).json({ error: "Method not allowed" })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: "Missing RESEND_API_KEY" })
  }

  const toEmail = process.env.CONTACT_TO_EMAIL ?? "ginalepham@gmail.com"
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev"

  let payload: Partial<ContactPayload> = {}
  if (typeof req.body === "string") {
    try {
      payload = JSON.parse(req.body) as Partial<ContactPayload>
    } catch {
      return res.status(400).json({ error: "Invalid JSON" })
    }
  } else if (req.body) {
    payload = req.body as Partial<ContactPayload>
  }

  const { name, email, message } = payload

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: "Missing required fields" })
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Invalid email" })
  }

  const subject = `New message from ${name}`
  const textBody = `Name: ${name}\nEmail: ${email}\n\n${message}`

  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject,
      text: textBody,
    }),
  })

  if (!response.ok) {
    const errorBody = await response.text()
    return res.status(502).json({ error: "Email send failed", details: errorBody })
  }

  return res.status(200).json({ ok: true })
}
