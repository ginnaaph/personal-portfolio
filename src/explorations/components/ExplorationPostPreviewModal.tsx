import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import type { ExplorationPost } from "@/explorations/types"

type ExplorationPostPreviewModalProps = {
  open: boolean
  post: ExplorationPost | null
  onClose: () => void
}

export function ExplorationPostPreviewModal({ open, post, onClose }: ExplorationPostPreviewModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (open) {
      document.addEventListener("keydown", onKey)
      setTimeout(() => closeBtnRef.current?.focus(), 0)
    }

    return () => document.removeEventListener("keydown", onKey)
  }, [open, onClose])

  if (!open || !post) return null

  return (
    <div role="dialog" aria-modal="true" aria-labelledby={`preview-title-${post.id}`} className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <button aria-label="Close preview" className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className="relative z-10 w-full max-w-2xl rounded-2xl bg-white shadow-xl ring-1 ring-black/10">
        <div className="flex items-center justify-between border-b px-4 py-3">
          <h3 id={`preview-title-${post.id}`} className="text-lg font-semibold text-main">
            {post.title}
          </h3>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            className="rounded px-3 py-1 text-sm font-medium text-accent-1 hover:bg-accent-1/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Close
          </button>
        </div>

        <div className="p-4">
          {post.heroImage?.src ? (
            <img
              src={post.heroImage.src}
              alt={post.heroImage.alt ?? post.title}
              className="mb-3 h-auto w-full rounded-xl object-cover"
            />
          ) : null}

          <p className="text-sm text-neutral-700">{post.summary}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              to={`/explorations/${post.category}/${post.slug}`}
              onClick={onClose}
              className="inline-flex items-center rounded bg-main px-3 py-2 text-sm font-medium text-white hover:bg-main/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              View full post
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
