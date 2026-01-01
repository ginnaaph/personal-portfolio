import { useState } from "react"
import { BaseUIButton as Button } from "@/components/ui/base-button"

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
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-2xl">
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="grid gap-4 sm:gap-5">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-900">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[#775d68]"
              placeholder="Your name"
            />
            {errors.name && (
              <p id="name-error" role="alert" className="mt-1 text-sm text-red-600">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-900">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[#775d68]"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p id="email-error" role="alert" className="mt-1 text-sm text-red-600">
                {errors.email}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-900">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={data.message}
              onChange={(e) => setData({ ...data, message: e.target.value })}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              className="mt-1 w-full resize-y rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[#775d68]"
              placeholder="How can I help?"
            />
            {errors.message && (
              <p id="message-error" role="alert" className="mt-1 text-sm text-red-600">
                {errors.message}
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button type="submit" disabled={status === "submitting"}>
              {status === "submitting" ? "Sending…" : submitLabel}
            </Button>

            {status === "success" && (
              <span className="text-sm text-emerald-700">Message sent! I’ll get back to you soon.</span>
            )}
            {status === "error" && (
              <span className="text-sm text-red-700">Something went wrong. Please try again.</span>
            )}
          </div>
        </div>
      </div>
    </form>
  )
}

export default ContactForm
