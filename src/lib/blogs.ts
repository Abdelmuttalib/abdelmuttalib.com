import type { CollectionEntry } from "astro:content";
import { categories, categorySlug, type Category } from "@/config/categories";
import { siteConfig } from "@/config/site";

export type Blog = CollectionEntry<"blogs">;
export { categories, categorySlug, type Category };

export const authorSlug = (author: string) =>
  author
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

export const categoryHref = (category: string) =>
  `/category/${categorySlug(category)}/`;

export const blogSlug = (blog: Blog) => blog.id.replace(/\/index$/, "");

export const blogHref = (blog: Blog) => `/blog/${blogSlug(blog)}/`;

export const byNewest = (a: Blog, b: Blog) =>
  b.data.date.getTime() - a.data.date.getTime();

export const visibleBlogs = (blogs: Blog[]) =>
  blogs.filter((blog) => !blog.data.draft).sort(byNewest);

/**
 * Reading time from the raw Markdown body at 220 words per minute, so posts
 * never have to carry a hand-maintained `readMinutes` field.
 */
export const readingMinutes = (blog: Blog) => {
  const words = (blog.body ?? "").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
};

export const readingLabel = (blog: Blog) => `${readingMinutes(blog)} min read`;

export const getFeatured = (posts: Blog[], limit = 5) =>
  visibleBlogs(posts)
    .filter((blog) => blog.data.featured)
    .slice(0, limit);

// export const getBlogsByCategory = (posts: Blog[], category: string) =>
//   visibleBlogs(posts).filter((blog) => blog.data.category === category);

export const getBlogsByTag = (posts: Blog[], tag: string) =>
  visibleBlogs(posts).filter((blog) => blog.data.tags.includes(tag));

/** Categories in configured order, with blog counts. Empty ones are dropped. */
// export const getCategoryList = (posts: Blog[]) => {
//   const visible = visibleBlogs(posts);

//   return categories
//     .map((category) => ({
//       name: category,
//       slug: categorySlug(category),
//       count: visible.filter((blog) => blog.data.category === category).length,
//     }))
//     .filter((entry) => entry.count > 0);
// };

// export const getTagList = (posts: Blog[]) => {
//   const visible = visibleBlogs(posts);

//   return tags
//     .map((tag) => ({
//       name: tag,
//       slug: tagSlug(tag),
//       count: visible.filter((blog) => blog.data.tags.includes(tag)).length,
//     }))
//     .filter((entry) => entry.count > 0);
// };

// export const getRelated = (posts: Blog[], current: Blog, limit = 3) =>
//   visibleBlogs(posts)
//     .filter((blog) => blog.id !== current.id)
//     .sort((a, b) => {
//       const sameCategory =
//         Number(b.data.category === current.data.category) -
//         Number(a.data.category === current.data.category);
//       return sameCategory || byNewest(a, b);
//     })
//     .slice(0, limit);

/** Previous/next in publication order, matching the article footer navigation. */
export const getAdjacent = (posts: Blog[], current: Blog) => {
  const ordered = visibleBlogs(posts);
  const index = ordered.findIndex((blog) => blog.id === current.id);

  return {
    newer: index > 0 ? ordered[index - 1] : undefined,
    older:
      index >= 0 && index < ordered.length - 1 ? ordered[index + 1] : undefined,
  };
};

// export const getAllAuthors = (posts: Blog[]) =>
//   Array.from(
//     visibleBlogs(posts)
//       .reduce((authors, blog) => {
//         const slug = authorSlug(blog.data.author.name);
//         const current = authors.get(slug);
//         authors.set(slug, {
//           name: blog.data.author.name,
//           role: blog.data.author.role,
//           posts: [...(current?.posts ?? []), blog],
//         });
//         return authors;
//       }, new Map<string, { name: string; role: string; posts: Blog[] }>())
//       .entries(),
//   )
//     .map(([slug, author]) => ({ slug, ...author }))
//     .sort(
//       (a, b) => b.posts.length - a.posts.length || a.name.localeCompare(b.name),
//     );

export const formatDate = (date: Date, style: "short" | "long" = "short") =>
  new Intl.DateTimeFormat(siteConfig.dateLocale, {
    month: style === "short" ? "short" : "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
