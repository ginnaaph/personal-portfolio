export type ProjectCategory = 'programming' | 'baking' | 'art';

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  image: string;
  // ISO date string, e.g. "2025-01-01"
  date: string;
  previewDescription?: string;
  slug?: string;
  fullContent?: string;
  projectUrl?: string;
  [key: string]: unknown;
}
