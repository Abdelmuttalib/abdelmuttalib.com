// @ts-nocheck

import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import path from "path";
import Layout from "../../components/layout";
import { marked } from "marked";
import Head from "next/head";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import Container, { BlogContainer } from "@/components/ui/container";
import { Calendar } from "lucide-react";

interface BlogPageProps {
  frontmatter: {
    title: string;
    date: string;
    excerpt: string;
  };
  slug: string;
  content: string;
}

export default function BlogPage({
  frontmatter: { title, date },
  content,
}: BlogPageProps) {
  return (
    <>
      <Head>
        <title>
          {`${title} | ${PORTFOLIO_DATA.name} | ${PORTFOLIO_DATA.about}`}
        </title>
        <meta name="description" content={PORTFOLIO_DATA.summary} />
      </Head>

      <Layout>
        <BlogContainer>
          <div className="space-y-16 py-36">
            <div className="space-y-5 md:space-y-10">
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tighter text-balance">
                {title}
              </h1>
              <div className="text-neutral-500 dark:text-neutral-400 inline-flex items-center gap-x-2">
                <Calendar className="w-5 h-5" />
                <p className="font-medium text-sm">{date}</p>
              </div>
            </div>
            {/* <p>{excerpt}</p> */}
            <article
              dangerouslySetInnerHTML={{ __html: marked(content) }}
              className="text-neutral-900 dark:text-neutral-200 prose dark:prose-dark max-w-none w-full"
            ></article>
          </div>
        </BlogContainer>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("src/blogs"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };

  const markdownWithMeta = fs.readFileSync(
    path.join("src/blogs", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
};
