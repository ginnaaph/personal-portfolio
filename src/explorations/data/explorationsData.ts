import type { ExplorationPost } from "@/explorations/types";

// Fill out the form in ExplorationAdminPg → click Copy → paste the object
// into this array to add new exploration posts.

export const explorationsData: ExplorationPost[] = [];

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
