import type { ComponentType } from "react"
import { MdEmail } from "react-icons/md"
import { SiGithub, SiLinkedin } from "react-icons/si"

type IconType = ComponentType<{ size?: number; color?: string; title?: string }>

export type SocialLink = {
  label: string
  href: string
  icon?: IconType
}

export type ContactSectionProps = {
  title?: string
  subtitle?: string
  socials?: SocialLink[]
}

const defaultSocials: SocialLink[] = [
  { label: "Email", href: "mailto:ginaapham@gmail.com", icon: MdEmail },
  { label: "GitHub", href: "https://github.com/ginnaaph", icon: SiGithub },
  { label: "LinkedIn", href: "https://linkedin.com/in/ginaapham", icon: SiLinkedin },
]

export function ContactSection({
  title = "Contact Me",
  subtitle = "Have a project in mind or just want to say hi?",
  socials = defaultSocials,
}: ContactSectionProps) {
  return (
    <section className="w-full px-4 md:px-6 py-12 bg-[#DAD0DC]">
      <div className="mx-auto max-w-3xl text-center">
        <div className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</div>
        <p className="mt-3 text-base md:text-lg text-neutral-600">{subtitle}</p>

        <div className="mt-6 flex items-center justify-center gap-4 md:gap-6">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full text-white border bg-main border-main hover:border-[#775d68] hover:bg-neutral-50 transition"
            >
              {Icon ? <Icon size={22} title={label} /> : <span className="text-sm">{label}</span>}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactSection
