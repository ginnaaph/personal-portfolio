export type ProjectCategory = 'programming' | 'baking' | 'art';

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  image: string;
  description: string;
  projectUrl?: string;
  liveUrl?: string;
  galleryUrl?: string;
}
