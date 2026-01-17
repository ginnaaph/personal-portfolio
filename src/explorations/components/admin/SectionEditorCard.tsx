import { BaseUIButton as Button } from "@/components/ui/base-button";
import type {
  BulletsSection,
  ExplorationSection,
  GallerySection,
  GallerySectionImage,
} from "@/explorations/types";

type SectionEditorCardProps = {
  section: ExplorationSection;
  onChange: (section: ExplorationSection) => void;
  onRemove: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  dragHandleProps?: React.HTMLAttributes<HTMLButtonElement>;
};

export function SectionEditorCard({
  section,
  onChange,
  onRemove,
  onMoveUp,
  onMoveDown,
  dragHandleProps,
}: SectionEditorCardProps) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-3">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs uppercase tracking-wide text-neutral-500">{section.type}</span>
        <div className="flex items-center gap-2">
          <Button variant="outline" {...dragHandleProps}>
            Drag
          </Button>
          <Button variant="outline" onClick={onMoveUp}>
            Move Up
          </Button>
          <Button variant="outline" onClick={onMoveDown}>
            Move Down
          </Button>
          <Button variant="destructive" onClick={onRemove}>
            Remove
          </Button>
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
                    onChange={(e) =>
                      onChange({
                        ...gallery,
                        images: gallery.images.map((g: GallerySectionImage, gi: number) =>
                          gi === i ? { ...g, src: e.target.value } : g,
                        ),
                      })
                    }
                    placeholder="Image src"
                  />
                  <input
                    className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800"
                    value={img.alt ?? ""}
                    onChange={(e) =>
                      onChange({
                        ...gallery,
                        images: gallery.images.map((g: GallerySectionImage, gi: number) =>
                          gi === i ? { ...g, alt: e.target.value } : g,
                        ),
                      })
                    }
                    placeholder="Alt (optional)"
                  />
                  <input
                    className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800"
                    value={img.caption ?? ""}
                    onChange={(e) =>
                      onChange({
                        ...gallery,
                        images: gallery.images.map((g: GallerySectionImage, gi: number) =>
                          gi === i ? { ...g, caption: e.target.value } : g,
                        ),
                      })
                    }
                    placeholder="Caption (optional)"
                  />
                  <div className="md:col-span-3">
                    <Button
                      variant="destructive"
                      onClick={() =>
                        onChange({
                          ...gallery,
                          images: gallery.images.filter((_: GallerySectionImage, gi: number) => gi !== i),
                        })
                      }
                    >
                      Remove Image
                    </Button>
                  </div>
                </div>
              ))}

              <Button
                variant="secondary"
                onClick={() =>
                  onChange({
                    ...gallery,
                    images: [...(gallery.images ?? []), { src: "", alt: "", caption: "" }],
                  })
                }
              >
                Add Image
              </Button>
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
                    onChange={(e) =>
                      onChange({
                        ...bullets,
                        items: bullets.items.map((it: string, ii: number) => (ii === i ? e.target.value : it)),
                      })
                    }
                    placeholder="Bullet item"
                  />
                  <Button
                    variant="destructive"
                    onClick={() =>
                      onChange({
                        ...bullets,
                        items: bullets.items.filter((_: string, ii: number) => ii !== i),
                      })
                    }
                  >
                    Remove
                  </Button>
                </div>
              ))}

              <Button
                variant="secondary"
                onClick={() =>
                  onChange({
                    ...bullets,
                    items: [...(bullets.items ?? []), ""],
                  })
                }
              >
                Add Bullet
              </Button>
            </div>
          </div>
        );
      })()}
    </div>
  );
}
