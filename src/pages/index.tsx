import fs from "fs";
import matter from "gray-matter";
import path from "path";

import Link from "next/link";
import Layout from "@/components/layout";
import { Blog } from "types";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import {
  ArrowRightIcon,
  Calendar,
  FileText,
  MailIcon,
  PhoneIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { landingPages, projects } from "@/data/projects";
import { cn } from "@/lib/cn";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { FollowLinkArrowIcon, GitHubIcon } from "@/components/icons";
import Head from "next/head";
import Container from "@/components/ui/container";
import LandingPageCard from "@/components/landing-page-card";

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

      <Layout>
        <div className="space-y-96 py-48 md:py-72">
          <Container>
            <div className="space-y-4">
              <h1 className="font-medium text-6xl tracking-[-2.4px]">
                {/* About Cedric */}
                Building beautiful web experiences
              </h1>
              {/* <h1 className="text-5xl sm:text-6xl font-semibold tracking-tighter">
              Building beautiful web experiences
            </h1> */}
              <p className="text-neutral-600 dark:text-neutral-500 text-lg">
                I&apos;m a software engineer based in the Philippines. I
                specialize in building high-quality websites and applications.
              </p>
              <div>
                <div className="flex gap-x-1.5 pt-1 font-mono text-sm text-muted-foreground print:hidden">
                  {PORTFOLIO_DATA.contact.email ? (
                    <Button
                      title="Email Address"
                      className="w-8 h-8 lg:w-10 lg:h-10"
                      variant="outline"
                      size="icon"
                      asChild
                    >
                      <a
                        href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <MailIcon className="w-4 h-4 lg:w-5 lg:h-5" />
                      </a>
                    </Button>
                  ) : null}
                  {PORTFOLIO_DATA.contact.tel ? (
                    <Button
                      title="Contact Number"
                      className="w-8 h-8 lg:w-10 lg:h-10"
                      variant="outline"
                      size="icon"
                      asChild
                    >
                      <a
                        href={`tel:${PORTFOLIO_DATA.contact.tel}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <PhoneIcon className="w-4 h-4 lg:w-5 lg:h-5" />
                      </a>
                    </Button>
                  ) : null}
                  {PORTFOLIO_DATA.contact.social.map((social) => (
                    <Button
                      key={social.name}
                      title={social.name}
                      className="w-8 h-8 lg:w-10 lg:h-10"
                      variant="outline"
                      size="icon"
                      asChild
                    >
                      <a href={social.url} target="_blank" rel="noreferrer">
                        <social.icon className="w-4 h-4 lg:w-5 lg:h-5" />
                      </a>
                    </Button>
                  ))}
                  <Button
                    title="cv"
                    // className="w-8 h-8 lg:w-10 lg:h-10"
                    className="font-sans"
                    variant="outline"
                    asChild
                  >
                    
                    <a href="/cv" target="_blank" rel="noreferrer" className="inline-flex items-center gap-x-1.5">
                    
                      <FileText className="w-4 h-4" />
                      <span>Resume</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Container>

          <Section
            title="Projects"
            contentContainerClassName="space-y-12 px-4 md:px-6 lg:px-8 xl:px-10 max-w-[95rem] mx-auto"
          >
            <div className="gap-12 space-y-12 columns-1 lg:columns-2">
              {projects.map((project) => (
                <div
                  key={project.name}
                  className="flex h-full gap-y-3 mx-auto flex-col rounded border-neutral-700"
                >
                  <Link
                    href={project.live}
                    target="_blank"
                    className="group p-2 sm:p-4 lg:p-6 bg-neutral-100 dark:bg-neutral-800 relative rounded-lg items-center border border-transparent hover:border-neutral-800 h-fit shadow-inner dark:hover:border-neutral-200 hover:bg-brand-100/20"
                  >
                    <FollowLinkArrowIcon className="absolute -right-2 -top-2 hidden bg-neutral-900 text-gray-100 group-hover:mt-0 group-hover:block dark:bg-neutral-200 dark:text-neutral-900" />
                    <Image
                      src={`/images/projects/${project.img}`}
                      alt={`${project.name} project image`}
                      className="w-full shadow-md rounded lg:w-auto "
                      width={1280}
                      height={467}
                      // layout="fill"
                    />
                  </Link>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-y-3">
                      <Link
                        href={project.live}
                        target="_blank"
                        className="group hover:underline hover:decoration-current hover:underline-offset-4 inline-flex items-center gap-x-1"
                      >
                        <h3 className="">{project.name}</h3>
                        <ArrowRightIcon className="w-5 h-5 inline-block -rotate-45 text-neutral-300 dark:text-neutral-700 group-hover:text-current" />
                      </Link>
                      {/* <div>
                      <p className="text-neutral-500 dark:text-neutral-500 text-sm">
                        {project.description}
                      </p>
                    </div> */}
                      {/* <div className="text-sm inline-flex flex-wrap gap-1">
                      {project.technologies.map((technology, indx) => (
                        <Badge
                          key={technology + indx}
                          variant="outline"
                          className="rounded py-1.5 px-2.5 font-sans font-normal dark:text-neutral-300"
                        >
                          {technology}
                        </Badge>
                      ))}
                    </div> */}
                    </div>
                    <div className="text-sm inline-flex flex-wrap gap-1">
                      <Button
                        title="Github Link"
                        className="w-8 h-8 lg:w-10 lg:h-10"
                        variant="transparent"
                        size="icon"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <GitHubIcon className="w-4 h-4 lg:w-5 lg:h-5" />
                        </a>
                      </Button>
                      <Button
                        title="App Link"
                        className="w-8 h-8 lg:w-10 lg:h-10"
                        variant="transparent"
                        size="icon"
                        asChild
                      >
                        <a href={project.live} target="_blank" rel="noreferrer">
                          <ArrowRightIcon className="w-4 h-4 lg:w-5 lg:h-5 -rotate-45" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* landing pages */}
            <div className=" columns-1 lg:columns-2 gap-8 space-y-12 h-full min-h-full">
              {landingPages.map((data) => (
                <LandingPageCard key={data.img} data={data} />
              ))}
            </div>
          </Section>

          {/* <Section title="Landing Pages" >
            <div className="gap-10 columns-1 lg:columns-2">
              {landingPages.map((data) => (
                <LandingPageCard key={data.img} data={data} />
              ))}
            </div>
          </Section> */}

          {/* <Section title="Experience" contentContainerClassName="space-y-36">
          {experiences.map((experience) => (
            <div
              key={experience.company}
              className="w-full py-5 flex justify-between gap-y-10 lg:gap-y-0 flex-col lg:flex-row rounded-xl"
            >
              <div className="flex flex-col justify-between w-full">
                <div className="flex justify-between gap-y-5 py-8 bg-red-300 w-full">
                  <div className="flex flex-col gap-y-5 py-8 pr-14">
                    <Link
                      href={experience.companyLink}
                      target="_blank"
                      rel="noreferrer"
                      className="group hover:underline hover:decoration-current hover:underline-offset-4 font-medium tracking-tight inline-flex items-center gap-x-1"
                    >
                      <h3 className="text-xl">{experience.company}</h3>
                      <ArrowRightIcon className="w-5 h-5 inline-block -rotate-45 text-neutral-300 group-hover:text-current" />
                    </Link>
                    <div>
                      <p className="">
                        {experience.jobTitle}{" "}
                        <Badge variant="brand">Remote</Badge>
                      </p>
                      <p className="text-sm text-neutral-500">
                        {experience.startDate} - {experience.endDate}
                      </p>
                    </div>
                  </div>
                  <Link
                    href={experience.companyLink}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative hover:underline hover:decoration-current hover:underline-offset-4 font-medium tracking-tight inline-flex items-center gap-x-1"
                  >
                    <span className="relative w-28 h-20">
                      <Image
                        src={`/images/companies/${experience.companyLogo}`}
                        alt={`${experience.company} company logo`}
                        className="bg-neutral-100 object-contain rounded-lg w-full lg:w-auto lg:max-w-xl"
                        layout="fill"
                      />
                    </span>
                  </Link>
                </div>
                <div className="flex flex-col text-sm gap-y-2">
                  {experience.desc.map((desc) => (
                    <p key={desc} className="text-balance">
                      - {desc}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Section> */}

          <Container>
            <Section title="Blog">
              <ul className="space-y-8">
                {blogs.map((blog) => (
                  <li key={blog.slug} className="group">
                    <Link href={`/blog/${blog.slug}`} className="flex flex-col gap-y-1">
                      <span className="inline-flex items-center gap-x-1">
                        <span className="font-medium tracking-tight group-hover:underline dark:group-hover:decoration-[#a3a3a3] decoration-2 group-hover:underline-offset-4">
                          {blog.frontmatter.title}
                        </span>
                        <ArrowRightIcon className="w-4 h-4 text-[#a3a3a3] group-hover:text-foreground" />
                      </span>

                      <span className="inline-flex items-center gap-x-1">
                        <Calendar className="w-[15px] h-[15px] text-neutral-500" />
                        <span className="text-neutral-500 text-xs">
                          {blog.frontmatter.date}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Section>
          </Container>
        </div>
      </Layout>
    </>
  );
}

function Section({
  title,
  children,
  className,
  contentContainerClassName,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
  contentContainerClassName?: string;
}) {
  return (
    <div className={cn("space-y-8", className)}>
      {/* <h2 className="text-xl font-medium tracking-tight">{title}</h2> */}
      <div className={cn(contentContainerClassName)}>{children}</div>
    </div>
  );
}

// md
// ./src/blogs/2021-08-01-hello-world.mdx
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

// project jsx
{
  /* <div
                key={project.name}
                className="w-full py-5 flex justify-between gap-y-10 lg:gap-y-0 flex-col lg:flex-row rounded-xl"
              >
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col gap-y-5 py-8 pr-14">
                    <Link
                      href={project.live}
                      target="_blank"
                      className="group hover:underline hover:decoration-current hover:underline-offset-4 font-medium tracking-tight inline-flex items-center gap-x-1"
                    >
                      <h3 className="text-xl">{project.name}</h3>
                      <ArrowRightIcon className="w-5 h-5 inline-block -rotate-45 text-neutral-300 dark:text-neutral-700 group-hover:text-current" />
                    </Link>
                    <div>
                      <p className="text-neutral-500 dark:text-neutral-500">
                        {project.description}
                      </p>
                    </div>
                    <div className="text-sm inline-flex flex-wrap gap-1">
                      {project.technologies.map((technology, indx) => (
                        <Badge
                          key={technology + indx}
                          variant="outline"
                          className="rounded py-1.5 px-2.5 font-sans font-normal dark:text-neutral-300"
                        >
                          {technology}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="text-sm inline-flex flex-wrap gap-1">
                    <Button
                      title="Github Link"
                      className="w-8 h-8 lg:w-10 lg:h-10"
                      variant="outline"
                      size="icon"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <GitHubIcon className="w-4 h-4 lg:w-5 lg:h-5" />
                      </a>
                    </Button>
                    <Button
                      title="App Link"
                      className="w-8 h-8 lg:w-10 lg:h-10"
                      variant="outline"
                      size="icon"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noreferrer">
                        <ArrowRightIcon className="w-4 h-4 lg:w-5 lg:h-5 -rotate-45" />
                      </a>
                    </Button>
                  </div>
                </div>
                <Link
                  href={project.live}
                  target="_blank"
                  className="group relative rounded-lg items-center border-2 border-transparent hover:border-neutral-800 h-fit dark:hover:border-neutral-200 hover:bg-brand-100/20"
                >
                  <FollowLinkArrowIcon className="absolute -right-2 -top-2 hidden bg-neutral-900 text-gray-100 group-hover:mt-0 group-hover:block dark:bg-neutral-200 dark:text-neutral-900" />
                  <Image
                    src={`/images/projects/${project.img}`}
                    alt={`${project.name} project image`}
                    className="w-full rounded-md shadow-xl lg:w-auto lg:max-w-xl"
                    width={1920}
                    height={968}
                  />
                </Link>
              </div> */
}
