import { LinkProps } from "next/link";

export type Url = LinkProps["href"];

export type Blog = {
  slug: string;
  frontmatter: {
    title: string;
    description: string;
    date: string;
    excerpt: string;
  };
};
