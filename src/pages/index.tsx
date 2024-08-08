import fs from "fs";
import matter from "gray-matter";
import path from "path";

import Head from "next/head";

import { HomePageView2 } from "@/components/views/home";
import { Blog } from "types";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

interface HomeProps {
  blogs: Blog[];
}

export default function Home({ blogs }: HomeProps) {
  return (
    <>
      <Head>
        <title>{`${PORTFOLIO_DATA.name} | ${PORTFOLIO_DATA.about}`}</title>
        <meta name="description" content={PORTFOLIO_DATA.summary} />
      </Head>

      {/* <HomePageView blogs={blogs} /> */}
      <HomePageView2 blogs={blogs} />
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("src/blogs"));

  const blogs = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("src/blogs", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      blogs,
    },
  };
}
