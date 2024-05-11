// @ts-nocheck

import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import path from "path";
import Layout from "../../components/layout";
import { marked } from "marked";
import Head from "next/head";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

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
        <div className="space-y-16">
          <div className="space-y-2">
            <h1 className="text-4xl font-medium tracking-tighter">{title}</h1>
            <p className="text-[#a3a3a3]">{date}</p>
          </div>
          {/* <p>{excerpt}</p> */}
          <article
            dangerouslySetInnerHTML={{ __html: marked(content) }}
            className="text-lg"
          ></article>
        </div>
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
