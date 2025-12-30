import type { ProjectItem } from '@/explorations/projects/types';
import portfolio from '../../assets/images/projects/portfolio.png';
import wcCookies from '../../assets/images/baking/wcc.png';
import mangoMousse from '../../assets/images/baking/mangoMousse.png';
import japaneseStore from '../../assets/images/art/JapaneseStore.png';
import purrFectDay from '../../assets/images/projects/purrfectday.png';
import ferryBuilding from '../../assets/images/art/ferrybuilding.png';
import dubaiChocolate from '../../assets/images/baking/dubaiChocolate.png';
import mochaChocolate from '../../assets/images/baking/mochaChocolate.png';
import paintedLadies from '../../assets/images/art/paintedLadies.png';

export const projects: ProjectItem[] = [
  {
    id: 'p-001',
    title: 'personal portfolio ',
    category: 'programming',
    image: portfolio,
    previewDescription: 'Personal portfolio built with React,TypeScript, Vite and TailwindCSS.',
    slug: 'personal-portfolio',
    date: '2025-01-15',
    
  },
  {
    id: 'p-002',
    title: 'brown butter white chocolate chip cookies',
    category: 'baking',
    image: wcCookies,
    previewDescription: 'go to cookie recipe with brown butter and white chocolate chips',
    slug: 'brown-butter-white-chocolate-chip-cookies',
    date: '2024-11-20'
    
  },
  {
    id: 'p-003',
    title: 'japanese storefront watercolor',
    category: 'art',
    image: japaneseStore,
    previewDescription: 'loose watercolor painting of a traditional japanese storefront.',
    slug: 'japanese-storefront-watercolor',
    date: '2024-09-05'
  },
  {
    id: 'p-004',
    title: 'purrfect day ',
    category: 'programming',
    image: purrFectDay,
    previewDescription: 'a gamified productivity app featuring a virtual cat companion.',
    slug: 'purrfect-day',
    projectUrl: '/projects/p-004',
    date: '2024-12-10'
  },
  {
    id: 'p-005',
    title: 'ferry building',
    category: 'art',
    image: ferryBuilding,
    previewDescription: 'loose watercolor ink drawing of the San Francisco Ferry Building.',
    slug: 'ferry-building',
    date: '2024-08-18'
  },
  {
    id: 'p-006',
    title: 'mocha chocolate cake',
    category: 'baking',
    image: mochaChocolate,
    previewDescription: 'Mocha chocolate cake with rich coffee and chocolate flavors.',
    slug: 'mocha-chocolate-cake',
    date: '2024-06-30'
  },
  {
    id: 'p-007',
    title: 'dubai chocolate cake',
    category: 'baking',
    image: dubaiChocolate,
    previewDescription: 'dubai inspired chocolate cake ',
    slug: 'dubai-chocolate-cake',
    projectUrl: '/projects/p-007',
    date: '2024-07-22'
  },
  {
    id: 'p-008',
    title: 'mango mousse cake',
    category: 'baking',
    image: mangoMousse,
    previewDescription: 'Mango mousse cake with a light and creamy texture.',
    slug: 'mango-mousse-cake',
    date: '2024-05-12'
  },
  {
    id: 'p-009',
    title: 'sf painted ladies',
    category: 'art',
    image: paintedLadies,
    previewDescription: 'watercolor painting of the iconic san francisco painted ladies houses.',
    slug: 'sf-painted-ladies',
    date: '2024-04-08'
  }
];
