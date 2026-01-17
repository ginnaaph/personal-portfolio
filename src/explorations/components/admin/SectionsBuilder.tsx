import { useEffect, useState } from "react";
import {
  DndContext,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { BaseUIButton as Button } from "@/components/ui/base-button";
import type { ExplorationSection } from "@/explorations/types";
import type { SectionType } from "@/explorations/utils/default-section";
import { SortableSectionCard } from "./SortableSectionCard";

type SectionsBuilderProps = {
  sections: ExplorationSection[];
  newSectionType: SectionType;
  onSectionTypeChange: (type: SectionType) => void;
  onAddSection: () => void;
  onUpdateSection: (index: number, section: ExplorationSection) => void;
  onRemoveSection: (index: number) => void;
  onReorderSections: (nextSections: ExplorationSection[]) => void;
  onReset: () => void;
};

export function SectionsBuilder({
  sections,
  newSectionType,
  onSectionTypeChange,
  onAddSection,
  onUpdateSection,
  onRemoveSection,
  onReorderSections,
  onReset,
}: SectionsBuilderProps) {
  const [sectionOrder, setSectionOrder] = useState<string[]>([]);
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 6 } }));

  useEffect(() => {
    setSectionOrder((prev) => {
      if (sections.length === 0) return [];
      if (prev.length === sections.length) return prev;
      if (prev.length === 0) return sections.map(() => crypto.randomUUID());
      if (prev.length > sections.length) return prev.slice(0, sections.length);
      return [
        ...prev,
        ...Array.from({ length: sections.length - prev.length }, () => crypto.randomUUID()),
      ];
    });
  }, [sections.length]);

  const addSectionWithId = () => {
    onAddSection();
    setSectionOrder((prev) => [...prev, crypto.randomUUID()]);
  };

  const removeSectionWithId = (index: number) => {
    onRemoveSection(index);
    setSectionOrder((prev) => prev.filter((_, i) => i !== index));
  };

  const moveSection = (from: number, to: number) => {
    if (from === to || to < 0 || to >= sections.length) return;
    setSectionOrder((prev) => arrayMove(prev, from, to));
    onReorderSections(arrayMove(sections, from, to));
  };

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (!over || active.id === over.id) return;
    const from = sectionOrder.indexOf(String(active.id));
    const to = sectionOrder.indexOf(String(over.id));
    if (from === -1 || to === -1) return;
    moveSection(from, to);
  };

  const resetWithOrder = () => {
    onReset();
    setSectionOrder([]);
  };

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4">
      <div className="mb-3 flex items-center gap-3">
        <select
          className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-md outline-none focus:ring-2 focus:ring-neutral-800"
          value={newSectionType}
          onChange={(e) => onSectionTypeChange(e.target.value as SectionType)}
        >
          <option value="text">Text</option>
          <option value="image">Image</option>
          <option value="gallery">Gallery</option>
          <option value="bullets">Bullets</option>
        </select>
        <Button onClick={addSectionWithId}>Add Section</Button>
        <Button variant="outline" onClick={resetWithOrder}>
          Reset
        </Button>
      </div>

      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={sectionOrder} strategy={verticalListSortingStrategy}>
          <div className="space-y-4">
            {sections.map((section, idx) => {
              const id = sectionOrder[idx] ?? `${idx}`;
              return (
                <SortableSectionCard
                  key={id}
                  id={id}
                  section={section}
                  onChange={(next) => onUpdateSection(idx, next)}
                  onRemove={() => removeSectionWithId(idx)}
                  onMoveUp={() => moveSection(idx, idx - 1)}
                  onMoveDown={() => moveSection(idx, idx + 1)}
                />
              );
            })}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}
