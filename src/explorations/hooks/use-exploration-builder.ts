import React from "react";
import type { ExplorationPost, ExplorationSection } from "@/explorations/types";
import { slugify } from "@/lib/slugify";
import { defaultSection } from "@/explorations/utils/default-section";

export type SectionType = ExplorationSection["type"];

function emptyPost(id: string, createdAt: string): ExplorationPost {
  return {
    id,
    slug: "",
    title: "",
    category: "programming",
    summary: "",
    heroImage: undefined,
    tags: [],
    createdAt,
    sections: [],
  };
}

export function useExplorationBuilder() {
  const [stableId] = React.useState(() => crypto.randomUUID());
  const [createdAt] = React.useState(() => new Date().toISOString());

  const [post, setPost] = React.useState<ExplorationPost>(() => emptyPost(stableId, createdAt));
  const [slugEdited, setSlugEdited] = React.useState(false);
  const [newSectionType, setNewSectionType] = React.useState<SectionType>("text");

  React.useEffect(() => {
    if (!slugEdited) {
      setPost((p) => ({ ...p, slug: slugify(p.title) }));
    }
  }, [post.title, slugEdited]);

  const updateField = <K extends keyof ExplorationPost>(key: K, value: ExplorationPost[K]) => {
    setPost((p) => ({ ...p, [key]: value }));
  };

  const addSection = () => {
    const section = defaultSection(newSectionType);
    setPost((p) => ({ ...p, sections: [...p.sections, section] }));
  };

  const updateSection = (index: number, section: ExplorationSection) => {
    setPost((p) => ({
      ...p,
      sections: p.sections.map((s, i) => (i === index ? section : s)),
    }));
  };

  const removeSection = (index: number) => {
    setPost((p) => ({
      ...p,
      sections: p.sections.filter((_, i) => i !== index),
    }));
  };

  const moveSection = (index: number, direction: -1 | 1) => {
    setPost((p) => {
      const next = [...p.sections];
      const newIndex = index + direction;
      if (newIndex < 0 || newIndex >= next.length) return p;
      const [spliced] = next.splice(index, 1);
      next.splice(newIndex, 0, spliced);
      return { ...p, sections: next };
    });
  };

  const resetForm = () => {
    setPost(emptyPost(stableId, createdAt));
    setSlugEdited(false);
  };

  return {
    post,
    setPost,
    stableId,
    createdAt,
    slugEdited,
    setSlugEdited,
    newSectionType,
    setNewSectionType,
    updateField,
    addSection,
    updateSection,
    removeSection,
    moveSection,
    resetForm,
  };
}
