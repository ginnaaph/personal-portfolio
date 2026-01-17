import { Link, useParams } from "react-router-dom"
import { Navigation } from "@/components/ui/navigation/Navigation"
import { Footer } from "@/home/components/Footer"
import { explorationsData } from "@/explorations/data/explorationsData"
import type { ExplorationSection } from "@/explorations/types"

const renderSection = (section: ExplorationSection, index: number) => {
  if (section.type === "text") {
    return (
      <section key={`section-${index}`} className="rounded-2xl bg-white p-5 shadow-sm md:p-6">
        {section.heading ? (
          <h2 className="text-lg font-semibold text-main md:text-xl">{section.heading}</h2>
        ) : null}
        <p className="mt-2 text-sm leading-relaxed text-neutral-700 whitespace-pre-line">
          {section.body}
        </p>
      </section>
    )
  }

  if (section.type === "image") {
    return (
      <section key={`section-${index}`} className="rounded-2xl bg-white p-5 shadow-sm md:p-6">
        {section.heading ? (
          <h2 className="text-lg font-semibold text-main md:text-xl">{section.heading}</h2>
        ) : null}
        <div className="mt-3 overflow-hidden rounded-xl border border-neutral-200">
          <img src={section.src} alt={section.alt ?? ""} className="h-auto w-full object-cover" />
        </div>
        {section.caption ? (
          <p className="mt-2 text-xs text-neutral-500">{section.caption}</p>
        ) : null}
      </section>
    )
  }

  if (section.type === "gallery") {
    return (
      <section key={`section-${index}`} className="rounded-2xl bg-white p-5 shadow-sm md:p-6">
        {section.heading ? (
          <h2 className="text-lg font-semibold text-main md:text-xl">{section.heading}</h2>
        ) : null}
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {section.images.map((image, imgIndex) => (
            <figure key={`gallery-${imgIndex}`} className="space-y-2">
              <div className="overflow-hidden rounded-xl border border-neutral-200">
                <img
                  src={image.src}
                  alt={image.alt ?? ""}
                  className="h-auto w-full object-cover"
                />
              </div>
              {image.caption ? (
                <figcaption className="text-xs text-neutral-500">{image.caption}</figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section key={`section-${index}`} className="rounded-2xl bg-white p-5 shadow-sm md:p-6">
      {section.heading ? (
        <h2 className="text-lg font-semibold text-main md:text-xl">{section.heading}</h2>
      ) : null}
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700">
        {section.items.map((item, itemIndex) => (
          <li key={`bullet-${itemIndex}`}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export const ExplorationPostPg = () => {
  const { category, slug } = useParams<{ category?: string; slug?: string }>()
  const post = explorationsData.find(
    (entry) => entry.category === category && entry.slug === slug,
  )

  if (!post) {
    return (
      <div className="flex min-h-screen w-full flex-col">
        <Navigation />
        <main className="flex w-full flex-1 items-center justify-center bg-[#DAD0DC] px-4 py-10">
          <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
            <h1 className="text-2xl font-semibold text-main">Exploration not found</h1>
            <p className="mt-2 text-sm text-neutral-700">
              The post you are looking for is still in progress.
            </p>
            <Link
              to="/explorations"
              className="mt-4 inline-flex items-center justify-center rounded-md bg-main px-4 py-2 text-sm font-medium text-white hover:bg-main/90"
            >
              Back to explorations
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navigation />

      <main className="w-full flex-1 bg-[#DAD0DC]">
        <div className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 md:py-10 lg:px-8">
          <header className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
            <p className="text-xs uppercase tracking-wide text-main/70">{post.category}</p>
            <h1 className="mt-2 text-2xl font-semibold text-main md:text-3xl">{post.title}</h1>
            <p className="mt-3 text-sm text-neutral-700">{post.summary}</p>
            {post.tags?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-main"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </header>

          {post.heroImage ? (
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm">
              <img
                src={post.heroImage.src}
                alt={post.heroImage.alt ?? post.title}
                className="h-auto w-full object-cover"
              />
            </div>
          ) : null}

          <div className="mt-6 grid gap-6">{post.sections.map(renderSection)}</div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
