export type ProjectCategory = 'programming' | 'baking' | 'art';

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  image: string;
  previewDescription?: string;
  slug?: string;
  fullContent?: string;
  projectUrl?: string;
  [key: string]: unknown;
}
