import type { Category, ExplorationPost } from "@/explorations/types";
import type { SectionType } from "@/explorations/utils/default-section";
import { SectionsBuilder } from "./SectionsBuilder";

const categories: Category[] = ["programming", "baking", "art"];

type AdminPostFormProps = {
  post: ExplorationPost;
  newSectionType: SectionType;
  onSectionTypeChange: (type: SectionType) => void;
  onUpdateField: <K extends keyof ExplorationPost>(key: K, value: ExplorationPost[K]) => void;
  onSetSlugEdited: (edited: boolean) => void;
  onAddSection: () => void;
  onUpdateSection: (index: number, section: ExplorationPost["sections"][number]) => void;
  onRemoveSection: (index: number) => void;
  onReset: () => void;
};

export function AdminPostForm({
  post,
  newSectionType,
  onSectionTypeChange,
  onUpdateField,
  onSetSlugEdited,
  onAddSection,
  onUpdateSection,
  onRemoveSection,
  onReset,
}: AdminPostFormProps) {
  const tagsString = post.tags?.join(", ") ?? "";

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-md">Title</label>
        <input
          className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800"
          value={post.title}
          onChange={(e) => onUpdateField("title", e.target.value)}
          placeholder="Case study title"
        />
      </div>

      <div>
        <label className="block text-md">Slug</label>
        <input
          className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800"
          value={post.slug}
          onChange={(e) => {
            onSetSlugEdited(true);
            onUpdateField("slug", e.target.value);
          }}
          placeholder="auto-generated-from-title"
        />
      </div>

      <div>
        <label className="block text-sm">Category</label>
        <select
          className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800"
          value={post.category}
          onChange={(e) => onUpdateField("category", e.target.value as Category)}
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-md">Summary</label>
        <textarea
          className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800"
          rows={4}
          value={post.summary}
          onChange={(e) => onUpdateField("summary", e.target.value)}
          placeholder="Short summary of the exploration"
        />
      </div>

      <div>
        <label className="block text-md">Tags (comma-separated)</label>
        <input
          className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800"
          value={tagsString}
          onChange={(e) => onUpdateField("tags", toTags(e.target.value))}
          placeholder="react, vite, tailwind"
        />
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <label className="block text-md">Hero Image src</label>
          <input
            className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800"
            value={post.heroImage?.src ?? ""}
            onChange={(e) =>
              onUpdateField("heroImage", { src: e.target.value, alt: post.heroImage?.alt })
            }
            placeholder="/assets/images/..."
          />
        </div>
        <div>
          <label className="block text-md">Hero Image alt</label>
          <input
            className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800"
            value={post.heroImage?.alt ?? ""}
            onChange={(e) =>
              onUpdateField("heroImage", { src: post.heroImage?.src ?? "", alt: e.target.value })
            }
            placeholder="Descriptive alt text"
          />
        </div>
      </div>

      <SectionsBuilder
        sections={post.sections}
        newSectionType={newSectionType}
        onSectionTypeChange={onSectionTypeChange}
        onAddSection={onAddSection}
        onUpdateSection={onUpdateSection}
        onRemoveSection={onRemoveSection}
        onReorderSections={(nextSections) => onUpdateField("sections", nextSections)}
        onReset={onReset}
      />
    </div>
  );
}

function toTags(input: string): string[] {
  return input
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
}
