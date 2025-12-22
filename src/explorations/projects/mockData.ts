import type { ProjectItem } from './types';
import portfolio from '../../assets/images/projects/portfolio.png';
import wcCookies from '../../assets/images/baking/wcc.png';
import mangoMousse from '../../assets/images/baking/mangoMousse.png';
import japaneseStore from '../../assets/images/art/JapaneseStore.png';
import purrFectDay from '../../assets/images/projects/purrfectday.png';
import ferryBuilding from '../../assets/images/art/ferrybuilding.png';
import dubaiChocolate from '../../assets/images/baking/dubaiChocolate.png';
import mochaChocolate from '../../assets/images/baking/mochaChocolate.png';
import paintedLadies from '../../assets/images/art/paintedLadies.png';

export const mockProjects: ProjectItem[] = [
  {
    id: 'p-001',
    title: 'personal portfolio ',
    category: 'programming',
    image: portfolio,
    description: 'Personal portfolio built with React,TypeScript, Vite and TailwindCSS.'
    
  },
  {
    id: 'p-002',
    title: 'brown butter white chocolate chip cookies',
    category: 'baking',
    image: wcCookies,
    description: 'go to cookie recipe with brown butter and white chocolate chips',
    
  },
  {
    id: 'p-003',
    title: 'japanese storefront watercolor',
    category: 'art',
    image: japaneseStore,
    description: 'loose watercolor painting of a traditional japanese storefront.',
  },
  {
    id: 'p-004',
    title: 'purrfect day ',
    category: 'programming',
    image: purrFectDay,
    description: 'a gamified productivity app featuring a virtual cat companion.',
    projectUrl: '/projects/p-004'
  },
  {
    id: 'p-005',
    title: 'ferry building',
    category: 'art',
    image: ferryBuilding,
    description: 'loose watercolor ink drawing of the San Francisco Ferry Building.',
  },
  {
    id: 'p-006',
    title: 'mocha chocolate cake',
    category: 'baking',
    image: mochaChocolate,
    description: 'Mocha chocolate cake with rich coffee and chocolate flavors.'
  },
  {
    id: 'p-007',
    title: 'dubai chocolate cake',
    category: 'baking',
    image: dubaiChocolate,
    description: 'dubai inspired chocolate cake ',
    projectUrl: '/projects/p-007'
  },
  {
    id: 'p-008',
    title: 'mango mousse cake',
    category: 'baking',
    image: mangoMousse,
    description: 'Mango mousse cake with a light and creamy texture.'
  },
  {
    id: 'p-009',
    title: 'sf painted ladies',
    category: 'art',
    image: paintedLadies,
    description: 'watercolor painting of the iconic san francisco painted ladies houses.',
  }
];
