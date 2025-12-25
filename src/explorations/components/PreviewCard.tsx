import type { ExplorationPost } from "@/explorations/types";

export function PreviewCard({ post }: { post: ExplorationPost }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4">
      <div className="mb-3 h-40 w-full overflow-hidden rounded-md bg-neutral-100">
        {post.heroImage?.src ? (
          <img src={post.heroImage.src} alt={post.heroImage.alt ?? ""} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-neutral-400">No hero image</div>
        )}
      </div>
      <div className="mb-2 flex items-center gap-2">
        <span className="rounded-full bg-neutral-200 px-2 py-1 text-xs text-neutral-700">{post.category}</span>
        <span className="text-xs text-neutral-500">{new Date(post.createdAt).toLocaleDateString()}</span>
      </div>
      <h3 className=" font-semibold">{post.title || "Untitled exploration"}</h3>
      <p className="mt-1 text-sm text-neutral-700">{post.summary || "Add a summary to see it here."}</p>
      {post.tags && post.tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {post.tags.map((t, i) => (
            <span key={i} className="rounded-md bg-neutral-100 px-2 py-1 text-xs text-neutral-600">{t}</span>
          ))}
        </div>
      )}
    </div>
  );
}
