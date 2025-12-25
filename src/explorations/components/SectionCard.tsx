import type { ExplorationSection } from "@/explorations/types";
import { BaseUIButton as Button } from "@/components/ui/base-button";

export function SectionCard(props: {
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

      {section.type === "gallery" && (
        <div className="space-y-3">
          <input
            className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800"
            value={section.heading ?? ""}
            onChange={(e) => onChange({ ...section, heading: e.target.value })}
            placeholder="Heading (optional)"
          />

          <div className="space-y-2">
            {(section.images ?? []).map((img, i) => (
              <div key={i} className="grid gap-2 md:grid-cols-3">
                <input
                  className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800"
                  value={img.src}
                  onChange={(e) => onChange({
                    ...section,
                    images: section.images.map((g, gi) => (gi === i ? { ...g, src: e.target.value } : g)),
                  })}
                  placeholder="Image src"
                />
                <input
                  className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800"
                  value={img.alt ?? ""}
                  onChange={(e) => onChange({
                    ...section,
                    images: section.images.map((g, gi) => (gi === i ? { ...g, alt: e.target.value } : g)),
                  })}
                  placeholder="Alt (optional)"
                />
                <input
                  className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800"
                  value={img.caption ?? ""}
                  onChange={(e) => onChange({
                    ...section,
                    images: section.images.map((g, gi) => (gi === i ? { ...g, caption: e.target.value } : g)),
                  })}
                  placeholder="Caption (optional)"
                />
                <div className="md:col-span-3">
                  <Button variant="destructive" onClick={() => onChange({
                    ...section,
                    images: section.images.filter((_, gi) => gi !== i),
                  })}>Remove Image</Button>
                </div>
              </div>
            ))}

            <Button variant="secondary" onClick={() => onChange({
              ...section,
              images: [...(section.images ?? []), { src: "", alt: "", caption: "" }],
            })}>Add Image</Button>
          </div>
        </div>
      )}

      {section.type === "bullets" && (
        <div className="space-y-3">
          <input
            className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800"
            value={section.heading ?? ""}
            onChange={(e) => onChange({ ...section, heading: e.target.value })}
            placeholder="Heading (optional)"
          />

          <div className="space-y-2">
            {(section.items ?? []).map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <input
                  className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800"
                  value={item}
                  onChange={(e) => onChange({
                    ...section,
                    items: section.items.map((it, ii) => (ii === i ? e.target.value : it)),
                  })}
                  placeholder="Bullet item"
                />
                <Button variant="destructive" onClick={() => onChange({
                  ...section,
                  items: section.items.filter((_, ii) => ii !== i),
                })}>Remove</Button>
              </div>
            ))}

            <Button variant="secondary" onClick={() => onChange({
              ...section,
              items: [...(section.items ?? []), ""],
            })}>Add Bullet</Button>
          </div>
        </div>
      )}
    </div>
  );
}
