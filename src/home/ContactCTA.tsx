import { useNavigate } from "react-router-dom"
export type ContactCTAProps = {
  title?: string
  blurb?: string

}

export function ContactCTA({
  title = "Let’s work together",
  blurb = "Have a project in mind or just want to say hi? I’d love to hear from you.",

}: ContactCTAProps) {
    const navigate = useNavigate();

  return (
    <section className="w-full px-4 md:px-6 py-12">
      <div className="mx-auto max-w-3xl rounded-2xl border border-neutral-200 bg-[#DAD0DC] p-8 shadow-sm text-center">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
        <p className="mt-3 font-['noticia_text'] ">{blurb}</p>
        <div className="mt-6">
            <button  onClick={() => navigate("/contact")} className="inline-flex items-center justify-center rounded-md bg-main px-4 py-2 text-sm font-medium text-white hover:bg-main">
                Contact Me
            </button>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA
