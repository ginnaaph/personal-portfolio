import { useNavigate } from "react-router-dom"
import { BaseUIButton as Button } from "@/components/ui/base-button"

export type ContactCTAProps = {
  title?: string
  blurb?: string
}

export function ContactCTA({
  title = "Let’s work together",
  blurb = "Have a project in mind or just want to say hi? I’d love to hear from you.",
}: ContactCTAProps) {
  const navigate = useNavigate()

  return (
    <section className="w-full px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-3xl rounded-2xl border border-neutral-200 bg-[#DAD0DC] p-6 sm:p-8 text-center shadow-sm">
        <h2>{title}</h2>

        <p className="mt-3 mx-auto max-w-xl leading-relaxed text-neutral-700">
          {blurb}
        </p>

        <div className="mt-6">
          <Button onClick={() => navigate("/contact")}>
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA
