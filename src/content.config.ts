import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/blog",
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  blog,
};

// import { defineCollection } from "astro:content";
// import { glob } from "astro/loaders";
// import { z } from "astro/zod";

// const blog = defineCollection({
//   loader: glob({
//     pattern: "**/*.md",
//     base: "./src/content/blog",
//   }),

//   schema: z.object({
//     title: z.string(),
//     description: z.string(),
//     date: z.coerce.date(),
//     // tags: z.array(z.string()).default([]),
//   }),
// });

// export const collections = {
//   blog,
// };

// // src/content.config.ts

// import { defineCollection, z } from "astro:content";

// const blog = defineCollection({
//   type: "content",
//   schema: z.object({
//     title: z.string(),
//     description: z.string(),
//     date: z.coerce.date(),
//     // tags: z.array(z.string()).default([]),
//     // image: z.string().optional(),
//   }),
// });

// export const collections = {
//   blog,
// };
