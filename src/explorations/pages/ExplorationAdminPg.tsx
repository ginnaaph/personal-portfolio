// Exploration Admin Generator
// Fill out the form → click Copy → paste the object into src/explorations/data/explorationsData.ts

import { useMemo, useState } from "react";
import { BaseUIButton as Button } from "@/components/ui/base-button";
import type { Category } from "@/explorations/types";
// SectionCard is defined locally in this file for now
import { PreviewCard } from "@/explorations/components/PreviewCard";
import { useExplorationBuilder } from "@/explorations/hooks/use-exploration-builder";
import { generateOutput } from "@/explorations/utils/generate-output";
import type { SectionType } from "@/explorations/utils/default-section";
import type { ExplorationSection, GallerySection, GallerySectionImage, BulletsSection } from "@/explorations/types";

const categories: Category[] = ["programming", "baking", "art"];

export default function ExplorationAdminPg() {
  const {
    post,
    setSlugEdited,
    newSectionType,
    setNewSectionType,
    updateField,
    addSection,
    updateSection,
    removeSection,
    moveSection,
    resetForm,
  } = useExplorationBuilder();

  const [copied, setCopied] = useState(false);
  const output = useMemo(() => generateOutput(post), [post]);

  const copyOutput = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const tagsString = post.tags?.join(", ") ?? "";

  return (
    <div className="mx-auto max-w-6xl p-4 md:p-8">
      <h1 className="mb-6 text-2xl font-semibold text-main">Exploration Admin (Generator)</h1>
      <p className="mb-8 text-sm text-neutral-600">
        Fill out the form → click Copy → paste the object into src/explorations/data/explorationsData.ts
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {/* LEFT: Form builder */}
        <div className="space-y-6">
          <div>
            <label className="block text-md">Title</label>
            <input
              className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800"
              value={post.title}
              onChange={(e) => updateField("title", e.target.value)}
              placeholder="Case study title"
            />
          </div>

          <div>
            <label className="block text-md ">Slug</label>
            <input
              className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800"
              value={post.slug}
              onChange={(e) => {
                setSlugEdited(true);
                updateField("slug", e.target.value);
              }}
              placeholder="auto-generated-from-title"
            />
          </div>

          <div>
            <label className="block text-sm ">Category</label>
            <select
              className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800"
              value={post.category}
              onChange={(e) => updateField("category", e.target.value as Category)}
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
              onChange={(e) => updateField("summary", e.target.value)}
              placeholder="Short summary of the exploration"
            />
          </div>

          <div>
            <label className="block text-md">Tags (comma-separated)</label>
            <input
              className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800"
              value={tagsString}
              onChange={(e) => updateField("tags", toTags(e.target.value))}
              placeholder="react, vite, tailwind"
            />
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <label className="block text-md">Hero Image src</label>
              <input
                className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800"
                value={post.heroImage?.src ?? ""}
                onChange={(e) => updateField("heroImage", { src: e.target.value, alt: post.heroImage?.alt })}
                placeholder="/assets/images/..."
              />
            </div>
            <div>
              <label className="block text-md">Hero Image alt</label>
              <input
                className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800"
                value={post.heroImage?.alt ?? ""}
                onChange={(e) => updateField("heroImage", { src: post.heroImage?.src ?? "", alt: e.target.value })}
                placeholder="Descriptive alt text"
              />
            </div>
          </div>

          {/* Sections builder */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-4">
            <div className="mb-3 flex items-center gap-3">
              <select
                className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-md outline-none focus:ring-2 focus:ring-neutral-800"
                value={newSectionType}
                onChange={(e) => setNewSectionType(e.target.value as SectionType)}
              >
                <option value="text">Text</option>
                <option value="image">Image</option>
                <option value="gallery">Gallery</option>
                <option value="bullets">Bullets</option>
              </select>
              <Button onClick={addSection}>Add Section</Button>
              <Button variant="outline" onClick={resetForm}>Reset</Button>
            </div>

            <div className="space-y-4">
              {post.sections.map((section, idx) => (
                <SectionCard
                  key={idx}
                  section={section}
                  onChange={(s) => updateSection(idx, s)}
                  onRemove={() => removeSection(idx)}
                  onMoveUp={() => moveSection(idx, -1)}
                  onMoveDown={() => moveSection(idx, 1)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Preview + Output */}
        <div className="space-y-6">
          <PreviewCard post={post} />

          <div className="rounded-2xl border border-neutral-200 bg-white p-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-lg text-main font-semibold">Generated Output</div>
              <div className="flex items-center gap-2">
                <Button variant="secondary" onClick={copyOutput}>{copied ? "Copied!" : "Copy"}</Button>
              </div>
            </div>
            <pre className="max-h-90 overflow-auto rounded-md bg-neutral-50 p-3 text-xs text-neutral-800">
              <code>{output}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

 

function toTags(input: string): string[] {
  return input
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
}

function SectionCard(props: {
  section: ExplorationSection;
  onChange: (s: ExplorationSection) => void;
  onRemove: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
}) {
  const { section, onChange, onRemove, onMoveUp, onMoveDown } = props;

  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-3">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs uppercase tracking-wide text-neutral-500">{section.type}</span>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={onMoveUp}>Move Up</Button>
          <Button variant="outline" onClick={onMoveDown}>Move Down</Button>
          <Button variant="destructive" onClick={onRemove}>Remove</Button>
        </div>
      </div>

      {section.type === "text" && (
        <div className="grid gap-3">
          <input
            className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800"
            value={section.heading ?? ""}
            onChange={(e) => onChange({ ...section, heading: e.target.value })}
            placeholder="Heading (optional)"
          />
          <textarea
            className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800"
            rows={5}
            value={section.body}
            onChange={(e) => onChange({ ...section, body: e.target.value })}
            placeholder="Body text"
          />
        </div>
      )}

      {section.type === "image" && (
        <div className="grid gap-3 md:grid-cols-2">
          <input
            className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800"
            value={section.heading ?? ""}
            onChange={(e) => onChange({ ...section, heading: e.target.value })}
            placeholder="Heading (optional)"
          />
          <input
            className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800"
            value={section.src}
            onChange={(e) => onChange({ ...section, src: e.target.value })}
            placeholder="Image src"
          />
          <input
            className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800"
            value={section.alt ?? ""}
            onChange={(e) => onChange({ ...section, alt: e.target.value })}
            placeholder="Alt text (optional)"
          />
          <input
            className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800"
            value={section.caption ?? ""}
            onChange={(e) => onChange({ ...section, caption: e.target.value })}
            placeholder="Caption (optional)"
          />
        </div>
      )}

      {section.type === "gallery" && (() => {
        const gallery = section as GallerySection;
        return (
          <div className="space-y-3">
            <input
              className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800"
              value={gallery.heading ?? ""}
              onChange={(e) => onChange({ ...gallery, heading: e.target.value })}
              placeholder="Heading (optional)"
            />

            <div className="space-y-2">
              {(gallery.images ?? []).map((img: GallerySectionImage, i: number) => (
                <div key={i} className="grid gap-2 md:grid-cols-3">
                  <input
                    className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800"
                    value={img.src}
                    onChange={(e) => onChange({
                      ...gallery,
                      images: gallery.images.map((g: GallerySectionImage, gi: number) => (gi === i ? { ...g, src: e.target.value } : g)),
                    })}
                    placeholder="Image src"
                  />
                  <input
                    className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800"
                    value={img.alt ?? ""}
                    onChange={(e) => onChange({
                      ...gallery,
                      images: gallery.images.map((g: GallerySectionImage, gi: number) => (gi === i ? { ...g, alt: e.target.value } : g)),
                    })}
                    placeholder="Alt (optional)"
                  />
                  <input
                    className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800"
                    value={img.caption ?? ""}
                    onChange={(e) => onChange({
                      ...gallery,
                      images: gallery.images.map((g: GallerySectionImage, gi: number) => (gi === i ? { ...g, caption: e.target.value } : g)),
                    })}
                    placeholder="Caption (optional)"
                  />
                  <div className="md:col-span-3">
                    <Button variant="destructive" onClick={() => onChange({
                      ...gallery,
                      images: gallery.images.filter((_: GallerySectionImage, gi: number) => gi !== i),
                    })}>Remove Image</Button>
                  </div>
                </div>
              ))}

              <Button variant="secondary" onClick={() => onChange({
                ...gallery,
                images: [...(gallery.images ?? []), { src: "", alt: "", caption: "" }],
              })}>Add Image</Button>
            </div>
          </div>
        );
      })()}

      {section.type === "bullets" && (() => {
        const bullets = section as BulletsSection;
        return (
          <div className="space-y-3">
            <input
              className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800"
              value={bullets.heading ?? ""}
              onChange={(e) => onChange({ ...bullets, heading: e.target.value })}
              placeholder="Heading (optional)"
            />

            <div className="space-y-2">
              {(bullets.items ?? []).map((item: string, i: number) => (
                <div key={i} className="flex items-center gap-2">
                  <input
                    className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800"
                    value={item}
                    onChange={(e) => onChange({
                      ...bullets,
                      items: bullets.items.map((it: string, ii: number) => (ii === i ? e.target.value : it)),
                    })}
                    placeholder="Bullet item"
                  />
                  <Button variant="destructive" onClick={() => onChange({
                    ...bullets,
                    items: bullets.items.filter((_: string, ii: number) => ii !== i),
                  })}>Remove</Button>
                </div>
              ))}

              <Button variant="secondary" onClick={() => onChange({
                ...bullets,
                items: [...(bullets.items ?? []), ""],
              })}>Add Bullet</Button>
            </div>
          </div>
        );
      })()}
    </div>
  );
}
