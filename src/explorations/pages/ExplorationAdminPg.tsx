// Exploration Admin Generator
// Fill out the form -> click Copy -> paste the object into src/explorations/data/explorationsData.ts
import { Navigation } from "@/components/ui/navigation/Navigation";
import { AdminPostForm } from "@/explorations/components/admin/AdminPostForm";
import { AdminPreviewOutput } from "@/explorations/components/admin/AdminPreviewOutput";
import { useExplorationBuilder } from "@/explorations/hooks/use-exploration-builder";

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
    resetForm,
  } = useExplorationBuilder();

  return (
    <div>
      <Navigation />
      <div className="mx-auto max-w-6xl shrink-0 md:p-8">
        <h1 className="mb-6 pt-3 text-2xl font-semibold text-main">
          Exploration Admin (Generator)
        </h1>
        <p className="mb-8 text-sm text-neutral-600">
          Fill out the form,  click Copy, then paste the object into
          src/explorations/data/explorationsData.ts
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {/* LEFT: Form builder */}
          <AdminPostForm
            post={post}
            newSectionType={newSectionType}
            onSectionTypeChange={setNewSectionType}
            onUpdateField={updateField}
            onSetSlugEdited={setSlugEdited}
            onAddSection={addSection}
            onUpdateSection={updateSection}
            onRemoveSection={removeSection}
            onReset={resetForm}
          />

          {/* RIGHT: Preview + Output */}
          <AdminPreviewOutput post={post} />
        </div>
      </div>
    </div>
  );
}
