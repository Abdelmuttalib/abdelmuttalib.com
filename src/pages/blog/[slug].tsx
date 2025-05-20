// @ts-nocheck

import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import path from "path";
import Layout from "@/components/layout";
import { marked } from "marked";
import Head from "next/head";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import Container, { BlogContainer } from "@/components/ui/container";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/cn";
import { PCard } from "@/components/views/home";
import { PageContainer } from "@/components/common/page-container";

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
        <PageContainer>
          <main className="space-y-16 py-16">
            <div className="space-y-3">
              <div className="text-foreground-subtle inline-flex items-center gap-x-2">
                <p className="font-medium text-sm">{date}</p>
              </div>
              <h1 className="text-3xl font-semibold tracking-tight text-balance">
                {title}
              </h1>
            </div>
            {/* <p>{excerpt}</p> */}
            <article
              dangerouslySetInnerHTML={{ __html: marked(content) }}
              className="text-foreground/90 prose dark:prose-dark max-w-none w-full"
            ></article>
          </main>
        </PageContainer>
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
