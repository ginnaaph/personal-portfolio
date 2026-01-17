import type { ExplorationPost } from "@/explorations/types";
import purrFectDay from "@/assets/images/projects/purrfectday.png";

// Fill out the form in ExplorationAdminPg → click Copy → paste the object
// into this array to add new exploration posts.

export const explorationsData: ExplorationPost[] = [
  {
    id: "purrfect-day-001",
    slug: "purrfect-day",
    title: "Purrfect Day",
    category: "programming",
    summary:
      "A learning-driven productivity app project where I keep iterating as my skills grow.",
    heroImage: { src: purrFectDay, alt: "Purrfect Day dashboard preview" },
    tags: ["ui", "react", "prototype"],
    createdAt: "2025-12-15T00:00:00.000Z",
    sections: [
      {
        type: "text",
        heading: "Overview",
        body:
          "Purrfect Day is a cozy, cat-themed productivity and wellness app. It blends Pomodoro, habit tracking, and gamification so daily tasks feel lighter and more rewarding.\n\nIt is built for students, professionals, and anyone who wants a playful way to stay on track. The core flow is simple: open the dashboard, pick tasks, start a Pomodoro, earn rewards, and customize the cat room.\n\nThe app includes task management, a Pomodoro timer, a daily dashboard, wellness logs with streaks, goals and achievements, journaling, and a reward shop. The stack is React, TypeScript, Vite, and Electron with React Query, Zustand, React Router, Sonner, and dnd-kit.\n\nFuture ideas include social features, a mobile version, calendar and device integrations, and an AI helper for recommendations and automation.",
      },
      {
        type: "image",
        heading: "Visual direction",
        src: purrFectDay,
        alt: "Purrfect Day dashboard preview",
        caption: "Early UI exploration for the daily overview screen.",
      },
      {
        type: "bullets",
        heading: "What I am exploring",
        items: [
          "A gentle daily checklist that feels more like a companion than a task list.",
          "Habit streaks that focus on encouragement over pressure.",
          "Small moments of delight through illustration and friendly copy.",
        ],
      },
      {
        type: "text",
        heading: "Next steps",
        body:
          "Add visuals, expand the case study sections, and document the iterations as the project evolves.",
      },
    ],
  },
];

// Example:
// {
//   id: "00000000-0000-0000-0000-000000000000",
//   slug: "my-first-exploration",
//   title: "My First Exploration",
//   category: "programming",
//   summary: "A short summary of what this case study covers.",
//   heroImage: { src: "/path/to/image.jpg", alt: "An illustrative hero" },
//   tags: ["react", "vite"],
//   createdAt: "2025-12-25T00:00:00.000Z",
//   sections: [
//     { type: "text", heading: "Intro", body: "Long form text..." },
//     { type: "image", src: "/path/to/feature.png", caption: "Feature shot" },
//     {
//       type: "gallery",
//       heading: "Gallery",
//       images: [
//         { src: "/img/a.png", alt: "A" },
//         { src: "/img/b.png", caption: "B caption" }
//       ]
//     },
//     { type: "bullets", items: ["Point A", "Point B"] }
//   ]
// }
