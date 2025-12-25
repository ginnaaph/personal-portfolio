import type { ExplorationSection } from "@/explorations/types";

export type SectionType = ExplorationSection["type"];

export function defaultSection(type: SectionType): ExplorationSection {
  switch (type) {
    case "text":
      return { type: "text", heading: "", body: "" };
    case "image":
      return { type: "image", heading: "", src: "", alt: "", caption: "" };
    case "gallery":
      return { type: "gallery", heading: "", images: [] };
    case "bullets":
      return { type: "bullets", heading: "", items: [] };
  }
}
