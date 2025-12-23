import { useState } from "react"

type FormData = {
  name: string
  email: string
  message: string
}

type Errors = Partial<Record<keyof FormData, string>>

export type ContactFormProps = {
  submitLabel?: string
}

export function ContactForm({ submitLabel = "Send Message" }: ContactFormProps) {
  const [data, setData] = useState<FormData>({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  function validate(values: FormData): Errors {
    const e: Errors = {}
    if (!values.name.trim()) e.name = "Please enter your name."
    if (!values.email.trim()) e.email = "Please enter your email."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = "Please enter a valid email."
    if (!values.message.trim()) e.message = "Please enter a message."
    return e
  }

  async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault()
    const v = validate(data)
    setErrors(v)
    if (Object.keys(v).length > 0) return

    try {
      setStatus("submitting")
      await new Promise((r) => setTimeout(r, 600))
      setStatus("success")
      setData({ name: "", email: "", message: "" })
    } catch {
      setStatus("error")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto px-4 md:px-0">
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm mb-20">
        <div className="grid gap-4 md:gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-800">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              aria-invalid={!!errors.name}
              className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-md outline-none focus:ring-2 focus:ring-neutral-800"
              placeholder="Your name"
            />
            {errors.name && <p className="mt-1 text-sm text-red-300">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-md  text-neutral-800">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              aria-invalid={!!errors.email}
              className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-md outline-none focus:ring-2 focus:ring-neutral-800"
              placeholder="you@example.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-300">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-md  text-neutral-800">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={data.message}
              onChange={(e) => setData({ ...data, message: e.target.value })}
              aria-invalid={!!errors.message}
              className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800"
              placeholder="How can I help?"
            />
            {errors.message && <p className="mt-1 text-sm text-red-300">{errors.message}</p>}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center justify-center rounded-md bg-main px-4 py-2 text-sm font-medium text-white hover:bg-accent-2 disabled:opacity-60"
            >
              {status === "submitting" ? "Sending…" : submitLabel}
            </button>
            {status === "success" && (
              <span className="text-sm text-green-200">Message sent! I’ll get back to you soon.</span>
            )}
            {status === "error" && (
              <span className="text-sm text-red-400">Something went wrong. Please try again.</span>
            )}
          </div>
        </div>
      </div>
    </form>
  )
}

export default ContactForm
