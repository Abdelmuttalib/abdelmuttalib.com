import fs from "fs";
import matter from "gray-matter";
import path from "path";

import Link from "next/link";
import Layout from "@/components/layout";
import { Blog } from "types";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import {
  ArrowRightIcon,
  BoxSelect,
  Calendar,
  FileText,
  MailIcon,
  MonitorSmartphone,
  PhoneIcon,
  Smartphone,
  Workflow,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { landingPages, projects } from "@/data/projects";
import { cn } from "@/lib/cn";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { FollowLinkArrowIcon, GitHubIcon } from "@/components/icons";
import Container from "@/components/ui/container";
import LandingPageCard from "@/components/landing-page-card";

export default function HomePageView({ blogs }: { blogs: Blog[] }) {
  return (
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
                  <a
                    href="/cv"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-x-1.5"
                  >
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
                    className="w-full bg-blue-400 shadow-md rounded lg:w-auto "
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
                      <a href={project.github} target="_blank" rel="noreferrer">
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
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="flex flex-col gap-y-1"
                  >
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

export function HomePageView2({ blogs }: { blogs: Blog[] }) {
  return (
    <Layout>
      <div className="w-full h-[90svh] bg-background">
        <div className="w-full max-w-7xl mx-auto h-20 flex items-center justify-between border-b border-border/40 text-xs text-foreground-subtle px-4">
          <div className="hidden sm:block">
            <p>
              <Link
                href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                className="inline-flex items-center gap-x-2"
              >
                <span className="bg-layer-2 p-2 rounded-lg dark:bg-base-200/40">
                  <MailIcon className="w-4 h-4" />
                </span>

                {PORTFOLIO_DATA.contact.email}
              </Link>
            </p>
          </div>
          <div className="space-x-3">
            {/* {[PORTFOLIO_DATA.contact.email, PORTFOLIO_DATA.contact.tel].map(
              (l) => (
                <Link href="/contact">{l}</Link>
              )
            )} */}
            {PORTFOLIO_DATA.contact.social.map((social, index) => (
              <>
                <Link href={social.url}>{social.name}</Link>

                {index !== PORTFOLIO_DATA.contact.social.length - 1 && (
                  <span>/</span>
                )}
              </>
            ))}
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center -mt-10">
          <div className="flex flex-col justify-center items-center space-y-5 max-w-lg text-center">
            <div>
              <img
                src="/images/avatarbw.png"
                alt="Abdelmuttalib Ahmed Avatar"
                className="w-24 h-24 rounded-full"
              />
              {/* <img
                src="/images/avatarbw2.png"
                alt="Abdelmuttalib Ahmed Avatar"
                className="w-24 h-24 rounded-full"
              />
              <img
                src="/images/personal-avatar.png"
                alt="Abdelmuttalib Ahmed Avatar"
                className="w-24 h-24 rounded-full"
              /> */}
            </div>
            <div>
              <p className="text-sm text-foreground-subtle">
                Hi, I&apos;m Abdelmuttalib Ahmed
              </p>
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl leading-tight bg-gradient-to-br from-foreground text-transparent bg-clip-text to-foreground-subtle dark:to-foreground-subtle2 font-medium text-balance">
                Building beautiful web experiences
              </h1>
            </div>
            <div></div>
            <div>
              {/* <Button
                className="bg-[#1a1a1a] uppercase rounded-sm text-[12px] text-neutral-200 border border-neutral-700/50 h-12 px-7"
                asChild
              >
                <Link href="#projects">View Projects</Link>
              </Button> */}
              {/* <Link
                href="#projects"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "border border-input/60 bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center gap-x-2 dark:bg-[#1a1a1a] uppercase"
                )}
              >
                View Projects
              </Link> */}
              <Link
                href="#projects"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "uppercase"
                )}
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      {/* <div className="bg-layer-2 dark:bg-base-200/40 h-56 w-full relative">
        <div className="absolute top-0 bg-background h-8 w-full rounded-b-3xl"></div>
      </div> */}
      {/* section */}
      <div className="w-full py-44 pt-10 bg-background px-4">
        <div className="w-full h-full flex items-center justify-center">
          <div className="flex flex-col justify-center items-center space-y-5 max-w-5xl text-center">
            {/* <div>
              <h1 className="text-9xl leading-tight bg-gradient-to-br from-foreground text-transparent bg-clip-text to-foreground font-bold text-balance tracking-tight">
                Software Developer
              </h1>
            </div>
            <div>
              <Button className="bg-[#1a1a1a] uppercase rounded-sm font-semibold text-base-50 border border-neutral-700/50 h-12 px-7 ring-1 ring-offset-1 ring-offset-black ring-[#1a1a1a]">
                <Link href="/projects">View Projects</Link>
              </Button>
            </div> */}
            {/* <div>
              <h1 className="text-5xl leading-tight bg-gradient-to-br from-foreground text-transparent bg-clip-text to-foreground-subtle dark:to-foreground-subtle2 font-medium text-balance">
                Projects
              </h1>
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {expertise.map((data) => (
                <div
                  key={data.title}
                  className="flex flex-col gap-y-4 border border-border bg-layer-2 text-left px-5 py-8 rounded dark:bg-base-200/40"
                >
                  <div className="flex items-center gap-x-2 text-foreground-subtle">
                    {data.icon}
                  </div>
                  <h2 className="text-base text-foreground">{data.title}</h2>
                  <p className="text-sm text-foreground-subtle">
                    {data.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* projects */}
      <div id="projects" className="w-full py-44 bg-layer-2">
        <div className="w-full h-full flex items-center justify-center">
          <div className="flex flex-col justify-center items-center space-y-5 max-w-7xl text-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-14 w-full">
              {projects.slice(0, 3).map((data) => (
                <div
                  key={data.name}
                  className="flex flex-col w-full gap-y-4 text-left rounded-xl bg-background p-4 "
                >
                  <div className="flex border border-border/40 items-center gap-x-2 text-foreground-subtle relative min-h-48 aspect-video rounded-lg overflow-hidden">
                    <Link href={data.live}>
                      <Image
                        src={`/images/projects/${data.img}`}
                        alt={data.name}
                        layout="fill"
                        className="object-contain"
                      />
                    </Link>
                  </div>
                  <h2 className="text-lg font-medium text-base-800">
                    {data.name}
                  </h2>
                  <p className="text-sm text-foreground-subtle2">
                    {data.description}
                  </p>
                  {/* <div className="flex gap-1.5 flex-wrap">
                    {data.technologies.map((technology) => (
                      <Badge
                        key={technology}
                        variant="outline"
                        className="py-1 px-1.5 font-sans font-normal dark:text-neutral-300"
                      >
                        {technology}
                      </Badge>
                    ))}
                  </div> */}
                  <div className="flex gap-1.5 w-full">
                    <Link
                      href={data.live}
                      target="_blank"
                      className={cn(
                        buttonVariants({ variant: "outline", size: "mini" }),
                        "border border-input/40 bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center gap-x-2"
                      )}
                    >
                      {/* <Badge
                          key={technology}
                          variant="outline"
                          className="py-1 px-1.5 font-sans font-normal dark:text-neutral-300"
                        > */}
                      <ArrowRightIcon className="w-[18px] h-[18px] -rotate-45" />
                      Live
                      {/* </Badge> */}
                    </Link>

                    <Link
                      href={data.live}
                      target="_blank"
                      className={cn(
                        buttonVariants({ variant: "default", size: "mini" }),
                        "border border-input/40 bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center gap-x-2"
                      )}
                    >
                      {/* <Badge
                          key={technology}
                          variant="outline"
                          className="py-1 px-1.5 font-sans font-normal dark:text-neutral-300"
                        > */}
                      <GitHubIcon className="w-4 h-4 mb-0.5" />
                      Github
                      {/* </Badge> */}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div id="projects" className="w-full py-44 bg-background px-4">
        <div className="w-full h-full flex items-center justify-center">
          <div className="flex flex-col justify-center items-center space-y-14 max-w-7xl text-center">
            <ul className="flex flex-col justify-center items-center gap-4 w-full max-w-2xl">
              {blogs.map((blog) => (
                <li
                  key={blog.slug}
                  className="flex flex-col gap-y-4 hover:bg-layer-2 text-left rounded-md dark:hover:bg-base-200/40"
                >
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="flex flex-col gap-y-3 p-6"
                  >
                    <span className="inline-flex items-center gap-x-1">
                      <Calendar className="w-[14px] h-[14px] text-foreground-subtle" />
                      <span className="text-foreground-subtle text-xs">
                        {blog.frontmatter.date}
                      </span>
                    </span>
                    {/* <div className="flex items-center gap-x-2 text-foreground-subtle">
                      {blog.icon}
                    </div> */}
                    <span className="text-foreground">
                      {blog.frontmatter.title}
                    </span>
                    <span className="text-foreground-subtle text-sm -mt-2">
                      {blog.frontmatter.description}
                    </span>
                    {/* <p className="text-sm text-foreground-subtle">
                      {blog.description}
                    </p> */}

                    <span className="text-xs inline-flex gap-x-1 text-foreground-subtle items-center">
                      <span>Read More</span>
                      <ArrowRightIcon className="w-[14px] h-[14px]" />
                    </span>
                  </Link>
                </li>
                // <li key={blog.slug} className="group">
                //   <Link
                //     href={`/blog/${blog.slug}`}
                //     className="flex flex-col gap-y-1"
                //   >
                //     <span className="inline-flex items-center gap-x-1">
                //       <span className="font-medium tracking-tight group-hover:underline dark:group-hover:decoration-[#a3a3a3] decoration-2 group-hover:underline-offset-4">
                //         {blog.frontmatter.title}
                //       </span>
                //       <ArrowRightIcon className="w-4 h-4 text-[#a3a3a3] group-hover:text-foreground" />
                //     </span>

                //     <span className="inline-flex items-center gap-x-1">
                //       <Calendar className="w-[15px] h-[15px] text-neutral-500" />
                //       <span className="text-neutral-500 text-xs">
                //         {blog.frontmatter.date}
                //       </span>
                //     </span>
                //   </Link>
                // </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// UX & UI
// Designing interfaces that are
// intuitive, efficient, and
// enjoyable to use.
// Web & Mobile App
// Transforming ideas into
// exceptional web and mobile
// app experiences.
// Design & Creative
// Crafting visually stunning
// designs that connect with
// your audience.
// 4
// Development
// Bringing your vision to life
// with the latest technology
// and design trends.

const expertise = [
  {
    title: "Web & Mobile App",
    description:
      "Transforming ideas into exceptional web and mobile app experiences.",
    icon: <MonitorSmartphone />,
  },

  {
    title: "Development",
    description:
      "Bringing your vision to life with the latest technology and design trends.",
    icon: <Workflow />,
  },
  {
    title: "Design & Creative",
    description:
      "Crafting visually stunning designs that connect with your audience.",
    icon: <BoxSelect />,
  },
  // {
  //   title: "UX & UI",
  //   description:
  //     "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
  //   icon: <BoxSelect />,
  // },
];
// {/* <div
//                   key={data.name}
//                   className="flex flex-col w-full gap-y-4 text-left rounded"
//                 >
//                   <div className="flex border border-border items-center gap-x-2 text-foreground-subtle relative min-h-48 aspect-video rounded-lg overflow-hidden">
//                     <Link href={data.live}>
//                       <Image
//                         src={`/images/projects/${data.img}`}
//                         alt={data.name}
//                         layout="fill"
//                         className="object-contain"
//                       />
//                     </Link>
//                   </div>
//                   <h2 className="text-base font-medium text-base-800">
//                     {data.name}
//                   </h2>
//                   {/* <p className="text-sm text-foreground-subtle">
//                     {data.description}
//                   </p> */}
//                   {/* <div className="flex gap-1.5 flex-wrap">
//                     {data.technologies.map((technology) => (
//                       <Badge
//                         key={technology}
//                         variant="outline"
//                         className="py-1 px-1.5 font-sans font-normal dark:text-neutral-300"
//                       >
//                         {technology}
//                       </Badge>
//                     ))}
//                   </div> */}
//                   <div className="flex gap-1.5 w-full">
//                     <Link
//                       href={data.live}
//                       target="_blank"
//                       className={cn(
//                         buttonVariants({ variant: "outline", size: "mini" }),
//                         "border border-input/40 bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center gap-x-2"
//                       )}
//                     >
//                       {/* <Badge
//                           key={technology}
//                           variant="outline"
//                           className="py-1 px-1.5 font-sans font-normal dark:text-neutral-300"
//                         > */}
//                       <ArrowRightIcon className="w-[18px] h-[18px] -rotate-45" />
//                       Live
//                       {/* </Badge> */}
//                     </Link>

//                     <Link
//                       href={data.live}
//                       target="_blank"
//                       className={cn(
//                         buttonVariants({ variant: "outline", size: "mini" }),
//                         "border border-input/40 bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center gap-x-2"
//                       )}
//                     >
//                       {/* <Badge
//                           key={technology}
//                           variant="outline"
//                           className="py-1 px-1.5 font-sans font-normal dark:text-neutral-300"
//                         > */}
//                       <GitHubIcon className="w-4 h-4 mb-0.5" />
//                       Github
//                       {/* </Badge> */}
//                     </Link>
//                   </div>
//                 </div> */}

import { GithubIcon, LinkedinIcon } from "lucide-react";

import { SocialLinks } from "@/components/social-links";

export function HomePageView3({ blogs }: { blogs: Blog[] }) {
  return (
    <Layout>
      <div className="min-h-screen w-full max-w-6xl mx-auto p-3 py-16 grid gap-4">
        <div className="col-span-5 md:col-span-3">
          <PCard className="p-3 sm:p-6 md:p-8">
            <div className="flex flex-col gap-y-4 w-full">
              <div className="flex flex-col justify-center space-y-5">
                {/* <div>
                <p className="text-sm text-foreground-subtle">
                  Hi, I&apos;m Abdelmuttalib Ahmed
                </p>
              </div> */}
                <div>
                  <img
                    src="/images/avatarbw.png"
                    alt="Abdelmuttalib Ahmed Avatar"
                    className="w-20 h-20 rounded-full"
                  />
                </div>

                <div className="flex flex-col gap-y-4">
                  <h1 className="text-3xl bg-gradient-to-br from-foreground via-foreground/80 text-transparent bg-clip-text to-foreground-subtle dark:to-foreground-subtle2 font-semibold text-balance">
                    Building beautiful web experiences
                  </h1>
                  <p className="text-foreground-subtle">
                    {PORTFOLIO_DATA.about}
                  </p>
                  <p className="text-foreground-subtle">
                    {PORTFOLIO_DATA.summary2}
                  </p>
                </div>
                <div>
                  <SocialLinks />
                  {/* <Button
                className="bg-[#1a1a1a] uppercase rounded-sm text-[12px] text-neutral-200 border border-neutral-700/50 h-12 px-7"
                asChild
              >
                <Link href="#projects">View Projects</Link>
              </Button> */}
                  {/* <Link
                href="#projects"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "border border-input/60 bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center gap-x-2 dark:bg-[#1a1a1a] uppercase"
                )}
              >
                View Projects
              </Link> */}
                  {/* <Link
                  href="#projects"
                  className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    "uppercase"
                  )}
                >
                  View Projects
                </Link> */}
                </div>
              </div>
            </div>
          </PCard>
        </div>
        {/*  */}
        <div className="grid grid-cols-1 col-span-5 md:col-span-2 gap-4">
          {blogs.map((blog) => (
            <PCard
              key={blog.slug}
              className="col-span-1 xl:col-span-2 w-full max-w-xl"
            >
              <PCardTag pCardType="blog" />

              <div className="flex flex-col gap-y-3 truncate">
                <span className="text-xs text-foreground-subtle inline-flex gap-x-1.5">
                  <Calendar className="w-4 h-4" />
                  {blog.frontmatter.date}
                </span>
                <h1 className="text-sm font-semibold">
                  <span className="text-foreground">
                    {blog.frontmatter.title}
                  </span>
                </h1>
                <p className="text-sm text-foreground-subtle truncate">
                  {blog.frontmatter.description}
                </p>
                <div className="flex items-center w-fit bg-transparent/10 p-1 gap-x-4 rounded px-1.5 backdrop-blur-lg divide-x-2 divide-zinc-700/20 dark:divide-zinc-100/20">
                  {/* <Link
                    href={data.live}
                    target="_blank"
                    className={cn("inline-flex items-center gap-x-2 text-sm")}
                  >
                    <ArrowRightIcon className="w-[18px] h-[18px] -rotate-45" />
                    Live
                  </Link> */}
                  <Link
                    href={`/blog/${blog.slug}`}
                    className={cn("inline-flex items-center gap-x-1")}
                  >
                    <span className="text-xs inline-flex gap-x-2 items-center">
                      <span>Read More</span>
                      <ArrowRightIcon className="w-[14px] h-[14px]" />
                    </span>
                  </Link>
                </div>
                <div>
                  {/* <Link
                    href={`/blog/${blog.slug}`}
                    className="inline-flex items-center gap-x-1"
                  >
                    <span className="text-foreground-subtle">Read More</span>
                  </Link> */}
                </div>
              </div>
            </PCard>
          ))}
        </div>
        {/*  */}
        {/* projects */}
        <div className="grid col-span-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {projects.slice(0, 3).map((data) => (
            <PCard
              key={data.name}
              className="col-span-2 flex w-full gap-y-4 text-left min-h-72"
              style={{
                backgroundImage: `url(/images/projects/${data.img})`,

                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                // paddingTop: "56.25%",
                padding: "10rem",
                // paddingBottom: "56.25%",
              }}
            >
              <PCardTag pCardType="project" />
              <div className="flex flex-col absolute bottom-0 left-0 right-0 bg-background/60 p-1.5 px-3 gap-x-4 gap-y-2 backdrop-blur-lg">
                <h2 className="font-medium text-base-800">{data.name}</h2>
                <p className="text-sm text-foreground-subtle hidden">
                  {data.description}
                </p>
                <div className="flex items-center justify-end w-fit ml-auto bg-transparent/10 p-1 gap-x-4 rounded-lg px-1.5 backdrop-blur-lg divide-x-2 divide-zinc-700/20 dark:divide-zinc-100/20">
                  <Link
                    href={data.live}
                    target="_blank"
                    className={cn("inline-flex items-center gap-x-2 text-sm")}
                  >
                    <ArrowRightIcon className="w-[18px] h-[18px] -rotate-45" />
                    Live
                  </Link>

                  <Link
                    href={data.github}
                    target="_blank"
                    className={cn(
                      "inline-flex items-center pl-3 gap-x-2 text-sm"
                    )}
                  >
                    <GitHubIcon className="w-4 h-4 mb-0.5" />
                    Github
                  </Link>
                </div>
              </div>
              {/* <div className="absolute bottom-0 right-0 flex items-center justify-center bg-transparent/60 p-1 gap-x-4 rounded backdrop-blur-lg divide-x-2 divide-white/20">
                <Link
                  href={data.live}
                  target="_blank"
                  className={cn("inline-flex items-center gap-x-2 text-sm")}
                >
                  <ArrowRightIcon className="w-[18px] h-[18px] -rotate-45" />
                  Live
                </Link>

                <Link
                  href={data.github}
                  target="_blank"
                  className={cn(
                    "inline-flex items-center pl-3 gap-x-2 text-sm"
                  )}
                >
                  <GitHubIcon className="w-4 h-4 mb-0.5" />
                  Github
                </Link>
              </div> */}
              {/* <div className="flex border  border-border/40 items-center gap-x-2 text-foreground-subtle relative min-h-24 aspect-video rounded-lg overflow-hidden">
                <Link href={data.live}>
                  <Image
                    src={`/images/projects/${data.img}`}
                    alt={data.name}
                    layout="fill"
                    className="object-contain"
                  />
                </Link>
              </div> */}
              {/* <div className="flex flex-col gap-3 text-left">
                <h2 className="font-medium">{data.name}</h2>
                <p className="text-sm text-foreground-subtle2">
                  {data.description}
                </p>
                <div className="flex gap-1.5 w-full">
                  <Link
                    href={data.live}
                    target="_blank"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "mini" }),
                      "border border-input/40 bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center gap-x-2"
                    )}
                  >
                    <ArrowRightIcon className="w-[18px] h-[18px] -rotate-45" />
                    Live
                  </Link>

                  <Link
                    href={data.live}
                    target="_blank"
                    className={cn(
                      buttonVariants({ variant: "default", size: "mini" }),
                      "border border-input/40 bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center gap-x-2"
                    )}
                  >
                    <GitHubIcon className="w-4 h-4 mb-0.5" />
                    Github
                  </Link>
                </div>
              </div> */}
              {/* <div className="flex gap-1.5 flex-wrap">
                    {data.technologies.map((technology) => (
                      <Badge
                        key={technology}
                        variant="outline"
                        className="py-1 px-1.5 font-sans font-normal dark:text-neutral-300"
                      >
                        {technology}
                      </Badge>
                    ))}
                  </div> */}
            </PCard>
          ))}
          {/* <PCard className="col-span-2">
            <div className="flex flex-col gap-y-4">
              <h1 className="font-semibold">
                <span className="text-foreground">Components</span>
              </h1>
              <p className="text-sm text-foreground-subtle">
                A collection of components that can be used to build your own
                design system.
              </p>
            </div>
          </PCard>
          <PCard className="col-span-3">
            <div className="flex flex-col gap-y-4">
              <h1 className="font-semibold">
                <span className="text-foreground">Components</span>
              </h1>
              <p className="text-sm text-foreground-subtle">
                A collection of components that can be used to build your own
                design system.
              </p>
            </div>
          </PCard> */}
        </div>
        <div className="grid col-span-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {/* company: "MedHyve",
      link: "/",
      badges: ["Remote"],
      title: "Software Developer",
      // logo: MedHyveLogo,
      start: "2021",
      end: "2024",
      description:
        "Led successful SEO optimization initiatives, resulting in a substantial organic traffic boost of nearly 10,000 new visitors from Google searches. Collaborated with the CTO and CEO to strategically align website improvements with company goals. Ensured user-centric UI designs through close collaboration with the design team and actively contributed to the company's growth by suggesting feature enhancements and process optimizations. Led frontend development, maintained high coding standards, and seamlessly integrated features with backend developers for a robust and cohesive web application. Emphasized accessibility and SEO-friendly page construction to further enhance site traffic.", */}
          {PORTFOLIO_DATA.work.map((experience) => {
            return (
              <PCard key={experience.company} className="col-span-3 h-full">
                <PCardTag pCardType="experience" />
                <div className="flex flex-col gap-y-2">
                  <p className="text-sm text-neutral-500">
                    {experience.start} - {experience.end}
                  </p>
                  <div className="flex justify-between w-full">
                    <div className="flex flex-col">
                      <h3 className="font-medium">{experience.title}</h3>
                      <div>
                        <Badge
                          variant="brand"
                          className="font-sans font-medium"
                        >
                          {experience.company}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col text-sm gap-y-1 text-foreground-subtle mt-2">
                    {experience.description.split(". ").map((desc) => (
                      <p key={desc} className="text-balance">
                        - {desc}.
                      </p>
                    ))}
                  </div>
                </div>
              </PCard>
            );
          })}
        </div>
        {/*  */}
        {/* <PCard className="col-span-4">
          <div className="flex flex-col gap-y-4">
            <h1 className="font-semibold">
              <span className="text-foreground">Components</span>
            </h1>
            <p className="text-sm text-foreground-subtle">
              A collection of components that can be used to build your own
              design system.
            </p>
          </div>
        </PCard>
        <PCard className="col-span-1">
          <div className="flex flex-col gap-y-4">
            <h1 className="font-semibold">
              <span className="text-foreground">Components</span>
            </h1>
            <p className="text-sm text-foreground-subtle">
              A collection of components that can be used to build your own
              design system.
            </p>
          </div>
        </PCard> */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-full col-span-5 gap-4">
          {/*  */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PORTFOLIO_DATA.contact.social.map((social, index) => {
              const Icon = social.icon;
              return (
                <PCard key={social.name} className="col-span-2 h-fit p-4">
                  <PCardTag pCardType="contact" />

                  <p className="inline-flex items-center w-full">
                    <Link
                      href={social.url}
                      className="inline-flex items-center gap-x-2 w-full text-sm"
                    >
                      <span className="bg-layer-2 p-2 rounded-lg dark:bg-base-200/40">
                        {/* <MailIcon className="w-5 h-5" /> */}
                        <Icon className="w-4 h-4 text-foreground-subtle" />
                      </span>
                      {social.name}
                    </Link>

                    {/* {index !== PORTFOLIO_DATA.contact.social.length - 1 && (
                    <span>/</span>
                  )} */}
                  </p>
                </PCard>
              );
            })}
          </div>
          {/*  */}
          <PCard className="col-span-1 h-fit p-4 flex flex-col gap-y-2">
            <PCardTag pCardType="contact" />
            <p className="inline-flex items-center w-full text-sm">
              <Link
                href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                className="inline-flex items-center gap-x-2 w-full"
              >
                <span className="bg-layer-2 p-2 rounded-lg dark:bg-base-200/40">
                  <PhoneIcon className="w-4 h-4" />
                </span>

                {PORTFOLIO_DATA.contact.tel}
              </Link>
            </p>
          </PCard>
          <PCard className="col-span-1 h-fit p-4 flex flex-col gap-y-2">
            <PCardTag pCardType="contact" />
            <p className="inline-flex items-center w-full text-sm">
              <Link
                href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                className="inline-flex items-center gap-x-2 w-full"
              >
                <span className="bg-layer-2 p-2 rounded-lg dark:bg-base-200/40">
                  <MailIcon className="w-4 h-4" />
                </span>

                {PORTFOLIO_DATA.contact.email}
              </Link>
            </p>
          </PCard>
        </div>
      </div>
    </Layout>
  );
}

// typescript props type extend for div element attributes

type PCardProps = React.HTMLAttributes<HTMLDivElement>;

// {
//   className?: string;
//   children?: React.ReactNode;
// }

export function PCard({ className, children, ...props }: PCardProps) {
  return (
    <div
      className={cn(
        "w-full h-full flex p-4 sm:p-4 md:p-6 rounded-xl",
        "bg-white dark:bg-base-200",
        // "shadow",
        "shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)]",
        "relative overflow-hidden",
        "relative h-full w-full rounded-xl bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline",
        className
      )}
      {...props}
    >
      {children}
      <GradientEffect />
    </div>
  );
}

function GradientEffect() {
  return (
    <div className="bg-base-500 absolute -bottom-10 -right-10 rounded-full blur-3xl p-4 flex flex-col gap-y-4 w-20 h-20 opacity-50"></div>
  );
}

type PCardType = "project" | "experience" | "skill" | "blog" | "contact";

function PCardTag({
  className,
  children,
  pCardType,
}: {
  className?: string;
  children?: React.ReactNode;
  pCardType: PCardType;
}) {
  // <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
  //       Badge
  //     </span>
  //     <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
  //       Badge
  //     </span>
  //     <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
  //       Badge
  //     </span>
  //     <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
  //       Badge
  //     </span>
  //     <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
  //       Badge
  //     </span>
  //     <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
  //       Badge
  //     </span>
  //     <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
  //       Badge
  //     </span>
  //     <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
  //       Badge
  //     </span>

  function getPCardTypeColor(pCardType: PCardType) {
    switch (pCardType) {
      case "project":
        return "bg-green-50 text-green-700 ring-green-600/20 dark:bg-green-600/20 dark:text-green-300";
      case "experience":
        return "bg-blue-50 text-blue-700 ring-blue-700/10 dark:bg-blue-600/20 dark:text-blue-400 dark:ring-blue-600/30";
      case "skill":
        return "bg-indigo-50 text-indigo-700 ring-indigo-700/10";
      case "contact":
        return "bg-indigo-50 text-indigo-700 ring-indigo-700/10 dark:bg-indigo-600/20 dark:text-indigo-300 dark:ring-indigo-600/30";
      case "blog":
        return "bg-gray-50 text-zinc-600 ring-zinc-500/10 dark:bg-zinc-800 dark:text-zinc-100";
      default:
        return "bg-zinc-50 text-zinc-600 ring-zinc-500/10 dark:bg-zinc-800 dark:text-zinc-100";
    }
  }

  return (
    <span
      className={cn(
        "absolute top-1.5 right-1.5",
        "inline-flex items-center gap-x-2 h-fit",
        "rounded-md px-2 py-1 text-xs font-medium",
        "ring-1 ring-inset",
        getPCardTypeColor(pCardType),
        className
      )}
    >
      {pCardType}
    </span>
  );
}
