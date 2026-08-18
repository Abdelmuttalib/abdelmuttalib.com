import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blogs = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/blogs",
  }),

  // schema: z.object({
  //   title: z.string(),
  //   description: z.string(),
  //   date: z.coerce.date(),
  //   tags: z.array(z.string()).default([]),
  // }),

  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      /** Must match one of the entries in src/config/categories.ts. */
      // category: z.enum(categories),
      date: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      // updatedDate: z.coerce.date().optional(),
      // author: z.object({
      //   name: z.string(),
      //   role: z.string(),
      // }),
      /**
       * Optional feature image. Monograph's post feeds are deliberately
       * text-only, so a cover is only ever shown on the post itself.
       */
      cover: image().optional(),
      coverAlt: z.string().optional(),
      creditName: z.string().optional(),
      creditUrl: z.url().optional(),
      // cover: z
      //   .object({
      //     image: image().optional(),
      //     alt: z.string(),
      //     creditName: z.string().optional(),
      //     creditUrl: z.url().optional(),
      //   })
      //   .optional(),
      /** Surfaces the post in the "Featured" list in the home sidebar. */
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = {
  blogs,
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
