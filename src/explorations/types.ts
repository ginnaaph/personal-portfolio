export type Category = "programming" | "baking" | "art";

export type TextSection = {
  type: "text";
  heading?: string;
  body: string;
};

export type ImageSection = {
  type: "image";
  heading?: string;
  src: string;
  alt?: string;
  caption?: string;
};

export type GallerySectionImage = {
  src: string;
  alt?: string;
  caption?: string;
};

export type GallerySection = {
  type: "gallery";
  heading?: string;
  images: GallerySectionImage[];
};

export type BulletsSection = {
  type: "bullets";
  heading?: string;
  items: string[];
};

export type ExplorationSection =
  | TextSection
  | ImageSection
  | GallerySection
  | BulletsSection;

export type ExplorationPost = {
  id: string; // crypto.randomUUID()
  slug: string; // auto-generated from title via slugify, editable
  title: string;
  category: Category;
  summary: string;
  heroImage?: { src: string; alt?: string };
  tags?: string[];
  createdAt: string; // ISO string
  sections: ExplorationSection[];
};
