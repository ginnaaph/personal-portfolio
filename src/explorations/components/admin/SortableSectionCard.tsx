import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { ExplorationSection } from "@/explorations/types";
import { cn } from "@/lib/utils";
import { SectionEditorCard } from "./SectionEditorCard";

type SortableSectionCardProps = {
  id: string;
  section: ExplorationSection;
  onChange: (section: ExplorationSection) => void;
  onRemove: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
};

export function SortableSectionCard({
  id,
  section,
  onChange,
  onRemove,
  onMoveUp,
  onMoveDown,
}: SortableSectionCardProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      className={cn(isDragging && "opacity-70")}
    >
      <SectionEditorCard
        section={section}
        onChange={onChange}
        onRemove={onRemove}
        onMoveUp={onMoveUp}
        onMoveDown={onMoveDown}
        dragHandleProps={{ ...attributes, ...listeners }}
      />
    </div>
  );
}
