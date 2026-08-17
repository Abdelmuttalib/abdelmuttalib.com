export type TPage =
  | "home"
  | "about"
  | "who-we-are"
  | "services"
  | "doctors"
  | "contact"
  | "blog"
  | "faq"
  | "privacy-policy"
  | "book-appointment";

export type SocialPlatform =
  | "instagram"
  | "facebook"
  | "youtube"
  | "x"
  | "tiktok"
  | "snapchat"
  | "threads"
  | "jaco";

export type FontSize =
  | "xs"
  | "sm"
  | "base"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl";

export type FontWeight =
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold";

export type FontTone =
  | "foreground"
  | "foreground-muted"
  | "body"
  | "body-muted"
  | "heading"
  | "section"
  | "caption"
  | "list"
  | "subtle";

export type ContentBlock =
  | {
      type: "paragraph";
      content: string;
    }
  | {
      type: "section";
      title: string;
      content: string;
    }
  | {
      type: "list";
      title?: string;
      description?: string;
      items: string[];
    };

export type BlogPost = {
  id: string;
  slug: string;
  date: string;
  image: ImageMetadata;

  blogId: string;

  title: string;
  excerpt: string;

  seo: {
    title: string;
    description: string;
  };
  content: ContentBlock[];
};

export type BreadcrumbItemType = {
  title: string;
  href: string;
};
