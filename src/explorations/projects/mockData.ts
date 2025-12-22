import type { ProjectItem } from './types';

export const mockProjects: ProjectItem[] = [
  {
    id: 'p-001',
    title: 'personal portfolio ',
    category: 'programming',
    image: 'src/assets/images/projects/portfolio.png',
    description: 'Personal portfolio built with React, TypeScript, and Vite.',
    projectUrl: '/projects/p-001',
    
  },
  {
    id: 'p-002',
    title: 'brown butter white chocolate chip cookies',
    category: 'baking',
    image: 'src/assets/images/baking/wcc.png',
    description: 'go to cookie recipe with brown butter and white chocolate chips',
    
  },
  {
    id: 'p-003',
    title: 'japanese storefront watercolor',
    category: 'art',
    image: 'src/assets/images/art/JapaneseStore.png',
    description: 'loose watercolor painting of a traditional japanese storefront.',
  },
  {
    id: 'p-004',
    title: 'purrfect day ',
    category: 'programming',
    image: 'src/assets/images/projects/purrfectday.png',
    description: 'a gamified productivity app featuring a virtual cat companion.',
    projectUrl: '/projects/p-004'
  },
  {
    id: 'p-005',
    title: 'ferry building',
    category: 'art',
    image: '/src/assets/images/art/ferrybuilding.png',
    description: 'loose watercolor ink drawing of the San Francisco Ferry Building.',
  },
  {
    id: 'p-006',
    title: 'mocha chocolate cake',
    category: 'baking',
    image: 'src/assets/images/baking/mochaChocolate.png',
    description: 'Mocha chocolate cake with rich coffee and chocolate flavors.'
  },
  {
    id: 'p-007',
    title: 'dubai chocolate cake',
    category: 'baking',
    image: 'src/assets/images/baking/dubaiChocolate.png',
    description: 'dubai inspired chocolate cake ',
    projectUrl: '/projects/p-007'
  },
  {
    id: 'p-008',
    title: 'mango mousse cake',
    category: 'baking',
    image: 'src/assets/images/baking/mangoMousse.png',
    description: 'Mango mousse cake with a light and creamy texture.'
  },
  {
    id: 'p-009',
    title: 'sf painted ladies',
    category: 'art',
    image: 'src/assets/images/art/paintedLadies.png',
    description: 'watercolor painting of the iconic san francisco painted ladies houses.',
  }
];
