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
  title = "I’d love your thoughts, feedback, or just a hello!",
  subtitle = "Feedback, questions, or quiet observations are always welcome.",
  socials = defaultSocials,
}: ContactSectionProps) {
  return (
    <section className="w-full bg-[#DAD0DC] px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-3xl text-center">
        <h2>
          {title}
        </h2>

        <p className="mt-3 text-base leading-relaxed text-neutral-700">
          {subtitle}
        </p>

        <div className="mt-6 flex items-center justify-center gap-4 sm:gap-6">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="
                inline-flex h-11 w-11 items-center justify-center rounded-full
                border border-main bg-main text-white
                transition
                hover:bg-accent-2 hover:text-main
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main
              "
            >
              {Icon ? <Icon size={20} title={label} /> : <span className="text-sm">{label}</span>}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactSection

