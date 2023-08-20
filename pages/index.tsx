import Head from "next/head";
import Image from "next/image";
import nextImage from "/public/next.svg";
import Link from "next/link";
import { Inter } from "@next/font/google";
import { Tab } from "@headlessui/react";
import { useState } from "react";
import cn from "classnames";
import {
  MapPinIcon,
  CalendarDaysIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  BellIcon,
  EnvelopeIcon,
  BookmarkIcon,
  DocumentIcon,
  EllipsisHorizontalCircleIcon,
  EllipsisHorizontalIcon,
  UserIcon,
  NewspaperIcon,
  ChatBubbleOvalLeftIcon,
  ArrowPathRoundedSquareIcon,
  HeartIcon,
  ArrowUpTrayIcon,
  ChartBarIcon,
  UsersIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
import {
  LinkIcon,
  ArrowLeftIcon,
  BeakerIcon,
  XMarkIcon,
  XCircleIcon,
} from "@heroicons/react/20/solid";
import Tweet, { TweetPropsT } from "../src/components/Tweet/Tweet";
import { projects } from "../src/data/projects";
import { Url } from "../types";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const inter = Inter({ subsets: ["latin"] });

interface TweetActionT {
  colorStyles: string;
  title: string;
  icon: JSX.Element;
  count?: number;
}

const tweetActions: TweetActionT[] = [
  {
    colorStyles:
      "hover:bg-sky-500/10 hover:text-sky-500 group-hover:bg-sky-500/10 group-hover:text-sky-500",
    title: "Analytics",
    icon: <ChartBarIcon className="w-5" />,
  },
  {
    colorStyles:
      "hover:bg-sky-500/10 hover:text-sky-500 group-hover:bg-sky-500/10 group-hover:text-sky-500",
    title: "Reply",
    count: 7,
    icon: <ChatBubbleOvalLeftIcon className="w-5" />,
  },
  {
    colorStyles:
      "hover:bg-emerald-500/10 hover:text-emerald-500 group-hover:bg-emerald-500/10 group-hover:text-emerald-500",
    title: "Retweet",
    count: 27,
    icon: <ArrowPathRoundedSquareIcon className="w-5" />,
  },
  {
    colorStyles:
      "hover:bg-rose-500/10 hover:text-rose-500 group-hover:bg-rose-500/10 group-hover:text-rose-500",
    title: "Like",
    count: 141,
    icon: <HeartIcon className="w-5" />,
  },
  {
    colorStyles:
      "hover:bg-sky-500/10 hover:text-sky-500 group-hover:bg-sky-500/10 group-hover:text-sky-500",
    title: "Share",
    icon: <ArrowUpTrayIcon className="w-5" />,
  },
];

const TweetActions = () => {
  return (
    // tweet actions
    <div className="flex gap-x-3 justify-between h-9 text-gray-500 text-sm -mx-1">
      {tweetActions.map((tweetAction) => (
        <button
          key={tweetAction.title}
          type="button"
          className={cn(
            "group flex items-center text-xs",
            tweetAction.colorStyles.split(" ")[1]
          )}
        >
          <div
            className={cn(
              "flex items-center gap-1 p-2 rounded-full",
              tweetAction.colorStyles
            )}
          >
            {tweetAction.icon}
          </div>
          <p>{tweetAction.count}</p>
        </button>
      ))}
    </div>
  );
};

interface AsideLinksT {
  href: string;
  icon: JSX.Element;
  label: string;
}

const asideLinkIconStyles = "w-[26px] text-[#e7e9ea]";

function CheckBadge({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <g>
        <path d="M8.52 3.59c.8-1.1 2.04-1.84 3.48-1.84s2.68.74 3.49 1.84c1.34-.21 2.74.14 3.76 1.16s1.37 2.42 1.16 3.77c1.1.8 1.84 2.04 1.84 3.48s-.74 2.68-1.84 3.48c.21 1.34-.14 2.75-1.16 3.77s-2.42 1.37-3.76 1.16c-.8 1.1-2.05 1.84-3.49 1.84s-2.68-.74-3.48-1.84c-1.34.21-2.75-.14-3.77-1.16-1.01-1.02-1.37-2.42-1.16-3.77-1.09-.8-1.84-2.04-1.84-3.48s.75-2.68 1.84-3.48c-.21-1.35.14-2.75 1.16-3.77s2.43-1.37 3.77-1.16zm3.48.16c-.85 0-1.66.53-2.12 1.43l-.38.77-.82-.27c-.96-.32-1.91-.12-2.51.49-.6.6-.8 1.54-.49 2.51l.27.81-.77.39c-.9.46-1.43 1.27-1.43 2.12s.53 1.66 1.43 2.12l.77.39-.27.81c-.31.97-.11 1.91.49 2.51.6.61 1.55.81 2.51.49l.82-.27.38.77c.46.9 1.27 1.43 2.12 1.43s1.66-.53 2.12-1.43l.39-.77.82.27c.96.32 1.9.12 2.51-.49.6-.6.8-1.55.48-2.51l-.26-.81.76-.39c.91-.46 1.43-1.27 1.43-2.12s-.52-1.66-1.43-2.12l-.77-.39.27-.81c.32-.97.12-1.91-.48-2.51-.61-.61-1.55-.81-2.51-.49l-.82.27-.39-.77c-.46-.9-1.27-1.43-2.12-1.43zm4.74 5.68l-6.2 6.77-3.74-3.74 1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36z"></path>
      </g>
    </svg>
  );
}

const asideLinks: AsideLinksT[] = [
  {
    href: "",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={asideLinkIconStyles}
        fill="currentColor"
      >
        <g>
          <path d="M12 9c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm0 6c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm0-13.304L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM19 19.5c0 .276-.224.5-.5.5h-13c-.276 0-.5-.224-.5-.5V8.429l7-4.375 7 4.375V19.5z"></path>
        </g>
      </svg>
    ),
    label: "Home",
  },
  {
    href: "",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={asideLinkIconStyles}
        fill="currentColor"
      >
        <g>
          <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
        </g>
      </svg>
    ),
    label: "Explore",
  },
  {
    href: "",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={asideLinkIconStyles}
        fill="currentColor"
      >
        <g>
          <path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"></path>
        </g>
      </svg>
    ),
    label: "Notifications",
  },
  {
    href: "",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={asideLinkIconStyles}
        fill="currentColor"
      >
        <g>
          <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path>
        </g>
      </svg>
    ),
    label: "Messages",
  },
  {
    href: "",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={asideLinkIconStyles}
        fill="currentColor"
      >
        <g>
          <path d="M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2z"></path>
        </g>
      </svg>
    ),
    label: "Lists",
  },
  {
    href: "",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={asideLinkIconStyles}
        fill="currentColor"
      >
        <g>
          <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path>
        </g>
      </svg>
    ),
    label: "Bookmarks",
  },
  {
    href: "",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={asideLinkIconStyles}
        fill="currentColor"
      >
        <g>
          <path d="M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm15.998.056L23.528 21H9.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977s6.816 2.358 7 8.977zM21.437 19c-.367-3.781-2.17-6.004-4.938-6.004s-4.57 2.223-4.938 6.004h9.875zm-4.938-9c-.799 0-1.527-.279-2.116-.73-.836-.64-1.384-1.638-1.384-2.77 0-1.93 1.567-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zm-1.5-3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zM7.5 3C9.433 3 11 4.57 11 6.5S9.433 10 7.5 10 4 8.43 4 6.5 5.567 3 7.5 3zm0 2C6.673 5 6 5.673 6 6.5S6.673 8 7.5 8 9 7.327 9 6.5 8.327 5 7.5 5z"></path>
        </g>
      </svg>
    ),
    label: "Communities",
  },
  {
    href: "",
    icon: <CheckBadge className={asideLinkIconStyles} />,
    label: "Verified",
  },
  {
    href: "",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={asideLinkIconStyles}
        fill="currentColor"
      >
        <g>
          <path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path>
        </g>
      </svg>
    ),
    label: "Profile",
  },
  {
    href: "",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={asideLinkIconStyles}
        fill="currentColor"
      >
        <g>
          <path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"></path>
        </g>
      </svg>
    ),
    label: "More",
  },
];

type Experience = {
  jobTitle: string;
  company: string;
  companyLogo: string;
  companyLink: Url;
  location: string;
  startDate: string;
  endDate: string;
  tweetDate: string;
  desc: string;
};

const experiences: Experience[] = [
  {
    jobTitle: "Software Developer",
    company: "MedHyve",
    companyLogo: "medhyve.png",
    companyLink: "https://medhyve.com/",
    location: "Manila, Philippines",
    startDate: "September 2021",
    // endDate: "Present",
    endDate: "January 2023",
    tweetDate: "Now",
    desc: "+ Led SEO optimization efforts, resulting in a significant increase in organic traffic from Google searches, driving website visibility and attracting nearly 10,000 new visitors.+ Actively engaged with the CTO and CEO of the startup, proposing and implementing strategic improvements to the website and platform, effectively aligning them with the company's goals and vision. + Collaborated closely with the design team to ensure that UI designs aligned with best practices and provided optimal user experience, fostering a user-centric approach to development. + Contributed to the company's growth by proactively suggesting ideas for feature enhancements and process optimization, fostering an environment of continuous improvement. + Led the frontend development of the company website, showcasing expertise in designing, implementing, and maintaining a wide range of website components and features. + Conducted regular code reviews and maintained high coding standards, ensuring the delivery of clean, efficient, and scalable frontend solutions. + Actively participated in cross-functional discussions, offering valuable insights to enhance website performance and user engagement. + Worked in synergy with backend developers, seamlessly integrating frontend features and functionalities, enabling the delivery of a robust and cohesive web application.",
  },
  {
    jobTitle: "Front End React Developer",
    company: "Happy Season",
    companyLogo: "happy-season.svg",
    companyLink: "https://happy-season.com/",
    location: "Saudi Arabia",
    startDate: "January 2021",
    endDate: "September 2021",
    tweetDate: "",
    desc: "+ Led frontend development initiatives, collaborating seamlessly with backend developers to deliver feature-rich web applications that meet client expectations. + Demonstrated a keen eye for UI design and took charge of redesigning pages to optimize their visual appeal and enhance overall user experience. + Pioneered the creation of intuitive UI pages and components, consistently striving to deliver the best possible user experience for website visitors. + Conducted rigorous testing of features to ensure high-quality output and impeccable performance across different browsers and devices. + Actively collaborated with senior developers to propose innovative ideas, update the website, and implement new features that aligned with company objectives. + Played a key role in optimizing website performance, focusing on speed, responsiveness, and accessibility to elevate user satisfaction. + Participated in agile development processes, attending regular team meetings and contributing valuable insights to drive project success. + Kept abreast of industry trends and emerging technologies, incorporating the latest advancements to enhance the frontend development process.",
  },
];

const blogs = [
  {
    title:
      "Adding Internationalization to Your React Next.js App with next-translate",
    link: "https://dev.to/abdelmuttalib1/adding-internationalization-to-your-nextjs-app-with-next-translate-3ffa",
    date: "Aug 14, 2023",
    image: "dev-to.png",
  },
  {
    title: "Embracing Brave Browser as a Software Developer",
    link: "https://dev.to/abdelmuttalib1/embracing-brave-browser-as-a-software-developer-288h",
    date: "Aug 2, 2023",
    image: "dev-to.png",
  },
];

function Blogs() {
  return (
    <>
      {blogs.map((blog) => (
        <Tweet
          key={blog.title}
          tweet=""
          tweetDate={blog.date ?? "May 20, 2023"}
          withAttachmentLink
          withAttachmentLinkData={{
            linkCom: blog.link,
            linkTitle: blog.title,
            image: blog.image,
          }}
          // withLink
          // withLinkData={{
          //   linkCom: project.live,
          //   linkTitle: project.name,
          //   linkImageSrc: `/images/projects/${project.image}`,
          // }}
        />
      ))}
    </>
  );
}

function Projects() {
  return (
    <>
      {projects.map((project) => (
        <Tweet
          key={project.name}
          tweet=""
          tweetDate="May 20, 2023"
          withLink
          withLinkData={{
            linkCom: project.live,
            linkTitle: project.name,
            linkImageSrc: `/images/projects/${project.image}`,
          }}
        />
      ))}
    </>
  );
}

function Experience() {
  return (
    <>
      {experiences.map((experience) => (
        <Tweet
          key={experience.startDate}
          tweet={experience.desc}
          tweetDate={experience.tweetDate ?? "May 20, 2023"}
          withAttachmentLink
          withAttachmentLinkData={{
            type: "experience",
            jobTitle: experience.jobTitle,
            company: experience.company,
            startDate: experience.startDate,
            endDate: experience.endDate,
            companyLogo: experience.companyLogo,
            companyLink: experience.companyLink,
          }}
          // withLink
          // withLinkData={{
          //   linkCom: project.live,
          //   linkTitle: project.name,
          //   linkImageSrc: `/images/projects/${project.image}`,
          // }}
        />
      ))}
    </>
  );
}

const technologies = [
  "HTML",
  "CSS / SASS / LESS",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "React",
  "Vue.js",
  "Next.js",
  "Nuxt.js",
  "Redux",
  "Zustand",
  "Responsive Web Design",
  "SEO Optimization",
  "UI/UX",
  "Nodejs",
  "Express.js",
  "RESTful API",
  "Prisma",
  "NoSQL databases (MongoDB, Firebase, Supabase, etc.)",
  "Authentication and Authorization (JWT, OAuth)",
  "Webpack / Babel / Parcel / Rollup (build tools)",
  "Jest / React Testing Library / Vue Test Utils (testing frameworks)",
  "Performance optimization techniques",
  "Git / GitHub / GitLab / Bitbucket",
  "Storybook",
  "Framer Motion",
  "Three.js (for 3D graphics)",
];

const contactInfo = [
  "Contant Number: +639 45 510 2063",
  "Email: abdelmuttalib1@gmail.com",
];

function Contact() {
  return (
    <>
      {contactInfo.map((contact) => (
        <Tweet key={contact} tweet={contact} tweetDate="" />
      ))}
    </>
  );
}

type ProfileTab = "Projects" | "Experience" | "Blog" | "Contact";

const Tabs = () => {
  const [selectedProfileTab, setSelectedProfileTab] =
    useState<ProfileTab>("Projects");

  const profileTabs: ProfileTab[] = [
    "Projects",
    "Experience",
    "Blog",
    // "Skills",
    "Contact",
  ];

  type ProfileTabsContents = {
    [key in ProfileTab]: JSX.Element;
  };

  const profileTabsContents: ProfileTabsContents = {
    Projects: <Projects />,
    Experience: <Experience />,
    Blog: <Blogs />,
    Contact: <Contact />,
  };

  function renderProfileTabContent() {
    return <>{profileTabsContents[selectedProfileTab]}</>;
  }

  return (
    <div className="w-full mt-4">
      <Tab.Group>
        <Tab.List className="flex w-full border-b border-zinc-800/90 overflow-x-auto no-scrollbar">
          {profileTabs.map((profileTab) => (
            <Tab
              key={profileTab}
              onClick={() => setSelectedProfileTab(profileTab)}
              className={({ selected }) =>
                classNames(
                  "relative whitespace-nowrap flex-1 pt-4 px-4 text-sm leading-5 flex justify-center",
                  "focus:outline-none hover:bg-zinc-900/90",
                  profileTab === selectedProfileTab
                    ? "text-[#e7e9ea] font-bold border-[#1d9bf0]"
                    : "font-medium text-[#71767b]"
                )
              }
            >
              <p className={`h-full w-fit px-2 pb-4 relative text-center`}>
                {profileTab}
              </p>
              {profileTab === selectedProfileTab && (
                <span className="w-14 h-[4px] bg-[#1d9bf0] absolute bottom-0 rounded-2xl mx-auto left-0 right-0"></span>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {/* content */}
          {renderProfileTabContent()}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

const tweets: TweetPropsT[] = [
  {
    pinnedTweet: true,
    name: "Abdelmuttalib Ahmed",
    username: "@Abdelmuttalib_",
    tweetDate: "Oct 1, 2022",
    tweet:
      "with all the chatter about progressive enhancement lately, i've decided to try explain why it's relevant to everyone and not just those with JavaScript disabled.'Progressively enhance for a more resilient web'",
    withLink: true,
    withLinkData: {
      linkCom: "codeSandbox.io",
      linkTitle: "red-sunset-kwkOh9 - CodeSandbox",
      linkImageSrc: nextImage,
    },
    // withAttachmentLink: true,
    // withAttachmentLinkData: {
    //   linkCom: "codeSandbox.io",
    //   linkTitle: "red-sunset-kwkOh9 - CodeSandbox",
    // },
  },
  {
    pinnedTweet: false,
    name: "Abdelmuttalib Ahmed",
    username: "@Abdelmuttalib_",
    tweetDate: "Oct 1, 2022",
    tweet: "a sandbox demonstrating the technique",
    // withLink: true,
    // withLinkData: {
    //   linkCom: "codeSandbox.io",
    //   linkTitle: "red-sunset-kwkOh9 - CodeSandbox",
    //   linkImageSrc: nextImage,
    // },
  },
];

const links = [
  {
    link: "https://www.linkedin.com/in/abdelmuttalib-ahmed-81919b160/",
    at: "LinkedIn",
    image: "linkedin.svg",
    title: "LinkedIn Profile",
  },
  {
    link: "https://github.com/Abdelmuttalib",
    at: "GitHub",
    image: "github.svg",
    title: "GitHub Profile",
  },
  {
    link: "https://dev.to/abdelmuttalib1",
    at: "Dev.to",
    image: "images/dev-to.png",
    title: "Dev.to Profile",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Abdelmuttalib Ahmed</title>
      </Head>

      {/* main */}
      <div className="bg-black w-full min-h-screen overflow-y-auto ">
        <main
          className={`${inter.className} bg-black h-full overflow w-screen sm:w-full min-h-screen flex fixed inset-0 overflow-y-auto max-w-2xl lg:max-w-[1260px] mx-auto no-scrollbar`}
        >
          {/* Sidebar */}
          <aside className="min-h-screen sticky top-0 w-[4.3rem] xl:w-[275px] md:pr-4 bg-black hidden sm:flex flex-col items-center xl:items-start py-4 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="48px"
              height="48px"
            >
              <path
                fill="#03A9F4"
                d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
              />
            </svg>
            {asideLinks.map((link) => (
              <Link
                key={link.label}
                href=""
                title={link.href}
                className="hover:bg-zinc-900/80 p-3 rounded-full xl:inline-flex xl:items-center xl:gap-x-5 xl:pr-6"
              >
                {link.icon}{" "}
                <span className="hidden xl:inline text-xl text-[#e7e9ea] tracking-tight">
                  {link.label}
                </span>
              </Link>
            ))}
            <button className="hidden xl:block w-[95%] bg-[#1d9bf0] text-white rounded-full hover:bg-[#1a8cd8] py-3 font-bold mt-2">
              Tweet
            </button>
            <button className="hidden xl:flex px-3 w-full bg-transparent text-white rounded-full hover:bg-zinc-900/80 py-3 font-bold mt-auto items-center justify-between">
              <span className="inline-flex items-center justify-between gap-x-3 truncate">
                <span className="w-10 h-10 bg-black rounded-full inline-block"></span>
                <span className="flex flex-col text-left truncate pr-3 max-w-[155px]">
                  <span className="whitespace-nowrap truncate text-[15px]">
                    Abdelmuttalib Ahmed
                  </span>
                  <span className="text-sm text-[#71767b] whitespace-nowrap truncate font-normal">
                    @Abdelmuttalib_
                  </span>
                </span>
              </span>
              <span>
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="w-5"
                  fill="currentColor"
                >
                  <g>
                    <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                  </g>
                </svg>
              </span>
            </button>
          </aside>
          <div className="min-h-screen flex-1 h-fit w-full flex flex-col border-x border-zinc-800/90 lg:w-[550px] lg:max-w-[550px] xl:max-w-none pb-16 lg:pb-28    ">
            <div className="w-full sticky top-0 z-20 bg-black/[0.8] backdrop-blur-2xl text-[#e7e9ea] h-14 py-3 flex items-center gap-8 px-2.5">
              <span className="p-2 hover:bg-zinc-900/80 cursor-pointer rounded-full">
                <ArrowLeftIcon className="w-5 text-[#e7e9ea]" />
              </span>
              <div className="flex flex-col">
                <h3 className="font-bold text-xl inline">
                  Abdelmuttalib Ahmed
                </h3>
                <span className="text-xs text-[#71767b]">0 Tweets</span>
              </div>
            </div>

            {/* Profile */}
            <div className="relative">
              <div className="w-full h-32 sm:h-48 bg-[#eff3f4] px-4 py-1 sm:py-3 xl:py-3.5 select-none cursor-pointer">
                <h1 className="text-2xl sm:text-3xl xl:text-4xl tracking-tighter font-bold">
                  Building Beautiful web experiences
                </h1>
                <p className="text-sm sm:text-base text-zinc-700">
                  a web developer,{" "}
                  <span className="underline italic bg-zinc-200 font-light">
                    sometimes designer.
                  </span>{" "}
                  Passionate about user interfaces, design systems, web
                  experiences and closing the gap between design and
                  development.
                </p>
              </div>
              <div className="w-full h-12 flex justify-between items-end px-4">
                <div className="relative bg-blue-100">
                  <div className="w-20 h-20 sm:w-32 sm:h-32 absolute -top-20 sm:-top-[118px] rounded-full border-2 border-black">
                    <Image
                      src="/me.jpg"
                      alt="personal photo"
                      // width={24}
                      // height={24}
                      fill
                      className="object-cover rounded-full w-20 h-20 sm:w-32 sm:h-32 hover:opacity-90 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    title="More"
                    className="p-2 text-[#e7e9ea] font-bold text-sm rounded-full border border-gray-600 hover:bg-zinc-900/80"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="w-5"
                      fill="currentColor"
                    >
                      <g>
                        <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                      </g>
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Message"
                    className="p-2 font-bold text-sm rounded-full border text-[#e7e9ea] border-gray-600 hover:bg-zinc-900/80"
                  >
                    <div>
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="w-5"
                        fill="currentColor"
                      >
                        <g>
                          <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path>
                        </g>
                      </svg>
                    </div>
                  </button>
                  <button className="text-[#0f1419] px-4 py-2 font-bold border text-sm rounded-full  bg-[#eff3f4] hover:bg-[#d7dbdc]">
                    Follow
                  </button>
                </div>
              </div>

              <div className="py-2 sm:pt-7 flex flex-col px-4">
                <h2 className="text-lg sm:text-xl text-[#e7e9ea] font-bold inline-flex items-center gap-x-0.5">
                  Abdelmuttalib Ahmed{" "}
                  <svg
                    viewBox="0 0 22 22"
                    aria-label="Verified account"
                    role="img"
                    className="w-5 text-[#1d9bf0] inline"
                    fill="currentColor"
                    data-testid="icon-verified"
                  >
                    <g>
                      <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path>
                    </g>
                  </svg>
                </h2>
                <span className="text-sm text-[#71767b]">@Abdelmuttalib_</span>
              </div>

              {/* Bio */}
              <div className="px-4 py-2 pb-3">
                <p className="text-[#e7e9ea] text-sm sm:text-[15px]">
                  Full Stack developer with a strong eye for innovative design
                  and a keen understanding of techniques geared toward optimum
                  user experience. Dedicated to driving innovation with the
                  ability to follow industry and technological trends, and
                  facilitating early adoption of innovations.
                </p>
              </div>

              {/* info */}
              <div className="flex flex-wrap w-full px-4 gap-x-3">
                <div className="flex gap-1 text-[#71767b] text-sm">
                  {/* job icon */}
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    fill="currentColor"
                    className="w-5"
                  >
                    <g>
                      <path d="M19.5 6H17V4.5C17 3.12 15.88 2 14.5 2h-5C8.12 2 7 3.12 7 4.5V6H4.5C3.12 6 2 7.12 2 8.5v10C2 19.88 3.12 21 4.5 21h15c1.38 0 2.5-1.12 2.5-2.5v-10C22 7.12 20.88 6 19.5 6zM9 4.5c0-.28.23-.5.5-.5h5c.28 0 .5.22.5.5V6H9V4.5zm11 14c0 .28-.22.5-.5.5h-15c-.27 0-.5-.22-.5-.5v-3.04c.59.35 1.27.54 2 .54h5v1h2v-1h5c.73 0 1.41-.19 2-.54v3.04zm0-6.49c0 1.1-.9 1.99-2 1.99h-5v-1h-2v1H6c-1.1 0-2-.9-2-2V8.5c0-.28.23-.5.5-.5h15c.28 0 .5.22.5.5v3.51z"></path>
                    </g>
                  </svg>
                  <p>Software Developer</p>
                </div>
                <div className="flex gap-1 text-[#71767b] text-sm">
                  {/* map icon */}
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    fill="currentColor"
                    className="w-5"
                  >
                    <g>
                      <path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z"></path>
                    </g>
                  </svg>
                  <p>Philippines</p>
                </div>
                <div className="flex gap-1 text-[#71767b] text-sm">
                  {/* link icon */}
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    fill="currentColor"
                    className="w-5"
                  >
                    <g>
                      <path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"></path>
                    </g>
                  </svg>
                  <p className="cursor-pointer text-[#1d9bf0] hover:underline">
                    abdelmuttalib.com
                  </p>
                </div>
                <div className="flex gap-1 text-[#71767b] text-sm">
                  {/* calendar icon */}
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    fill="currentColor"
                    className="w-5"
                  >
                    <g>
                      <path d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z"></path>
                    </g>
                  </svg>
                  <p>Joined January 2021</p>
                </div>

                <div className="flex gap-1 text-[#71767b] text-sm">
                  {/* ballon icon */}
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    fill="currentColor"
                    className="w-5"
                  >
                    <g>
                      <path d="M8 10c0-2.21 1.79-4 4-4v2c-1.1 0-2 .9-2 2H8zm12 1c0 4.27-2.69 8.01-6.44 8.83L15 22H9l1.45-2.17C6.7 19.01 4 15.27 4 11c0-4.84 3.46-9 8-9s8 4.16 8 9zm-8 7c3.19 0 6-3 6-7s-2.81-7-6-7-6 3-6 7 2.81 7 6 7z"></path>
                    </g>
                  </svg>
                  <p>Born April 27</p>
                </div>
              </div>

              {/* followers/following */}
              <div className="flex gap-3 px-4 py-3 text-sm">
                <div className="flex gap-1 text-[#71767b]">
                  <span className="text-[#e7e9ea] font-semibold">12</span>
                  <p>Following</p>
                </div>
                <div className="flex gap-1 text-[#71767b]">
                  <span className="text-[#e7e9ea] font-semibold">11k</span>
                  <p>Followers</p>
                </div>
              </div>

              {/* Tabs */}
              <Tabs />

              {/* Tweets */}
              {/* {tweets.map((tweet, indx) => (
                <Tweet key={indx} {...tweet} />
              ))} */}
            </div>
          </div>

          {/* 390 - 255 = 135   */}

          {/* Sidebar */}
          <aside className="hidden sticky top-0 lg:flex min-h-screen w-[390px] flex-col items-center py-4 gap-3 px-6 overflow-y-auto pb-20 no-scrollbar">
            {/* Search */}
            <div className="w-full relative">
              <label htmlFor="search" className="sr-only">
                search
              </label>
              <input
                type="text"
                placeholder="Search"
                className="py-3 rounded-full bg-[#202327] px-6 pl-14 w-full text-sm text-[#e7e9ea] border border-transparent focus:border-[#1d9bf0] focus-visible:border-[#1d9bf0] outline-none focus:outline-none peer"
                required
              />
              <MagnifyingGlassIcon className="absolute top-3 left-4 w-5 text-[#71767b] peer-focus:text-[#1d9bf0]" />
              {/* <XCircleIcon className="absolute top-2 right-2 w-7 text-[#71767b] peer-focus:text-[#1d9bf0] cursor-pointer hover:opacity-90 invisible peer-invalid:visible peer-valid:visible" /> */}
            </div>

            {/* You Might Like */}
            <div className="flex flex-col bg-[#16181c] w-full rounded-2xl">
              <h3 className="text-xl font-bold text-[#e7e9ea] px-4 pt-3">
                {/* You might like */}
                Links
              </h3>
              <div className="flex flex-col py-2">
                {/* item */}
                {links.map((link) => (
                  <SuggestedUser
                    key={link.link}
                    link={link.link}
                    at={link.at}
                    name={link.title}
                    image={link.image}
                  />
                ))}
              </div>
              <button className="text-[#1d9bf0] px-4 py-3.5 text-left text-sm  bg-transparent rounded-b-2xl hover:bg-[#1b1d22] cursor-default">
                Show more
              </button>
            </div>

            {/* Trends for you */}
            <div className="flex flex-col bg-[#16181c] w-full rounded-2xl">
              <h3 className="text-xl font-bold text-[#e7e9ea] px-4 pt-3">
                {/* Trends for you */}
                Technologies
              </h3>
              <div className="flex flex-col py-2">
                {/* item */}
                {technologies.map((tech) => (
                  <TrendHashtag
                    key={tech}
                    hashtag={tech}
                    tweets="2 years"
                    trending="web"
                  />
                ))}
              </div>
              <button className="text-[#1d9bf0] px-4 py-3.5 text-left text-sm  bg-transparent rounded-b-2xl hover:bg-[#1b1d22] cursor-default">
                Show more
              </button>
            </div>

            {/* links */}
            <div className="flex gap-x-1.5 gap-y-1.5 flex-wrap px-3">
              <BottomPageLink label="Terms of Service" />
              <BottomPageLink label="Privacy Policy" />
              <BottomPageLink label="Cookie Policy" />
              <BottomPageLink label="Accessibility" />
              <BottomPageLink label="Ads info" />
              <BottomPageLink label="More" />
              <p className="text-[#71767b] text-xs whitespace-nowrap">
                © 2023 abdelmuttalib.com
              </p>
            </div>
          </aside>
        </main>
      </div>
    </>
  );
}

function BottomPageLink({ label }: { label: string }) {
  return (
    <Link
      href=""
      className="text-[#71767b] text-xs whitespace-nowrap hover:underline"
    >
      {label}
    </Link>
  );
}

function SuggestedUser({
  image,
  name,
  at,
  link,
}: {
  image: string;
  name: string;
  at: string;
  link: string;
}) {
  return (
    <Link href={link} target="_blank">
      <div className="w-full flex items-center justify-between px-4 py-3.5 hover:bg-[#1b1d22]">
        <div className="flex gap-2.5 text-sm items-center">
          <div className="relative w-11 h-11 rounded-full overflow-hidden">
            <Image
              src={`/${image}`}
              alt={`${name} image`}
              // width={24}
              // height={24}
              fill
              className="object-contain p-2 bg-[#e7e9ea] hover:opacity-90 cursor-pointer"
            />
          </div>
          <div>
            <p className="text-[#e7e9ea] font-bold">{name}</p>
            <span className="text-[#71767b]">@{at}</span>
          </div>
        </div>
        <div>
          <button className="text-[#0f1419] px-4 py-1.5 font-bold border text-sm rounded-full bg-[#eff3f4] hover:bg-[#d7dbdc]">
            Follow
          </button>
        </div>
      </div>
    </Link>
  );
}

function TrendHashtag({
  hashtag = "#hashtag",
  tweets = "49.4k",
  trending = "Trending in Philippines",
}: {
  hashtag: string;
  tweets: string;
  trending: string;
}) {
  return (
    <div className="w-full flex items-center justify-between px-4 py-3.5 hover:bg-[#1b1d22]">
      <div className="flex gap-2.5 text-sm items-center">
        <div>
          <p className="text-[#71767b] text-xs">{trending}</p>
          <h6 className="text-[#e7e9ea] font-bold">#{hashtag}</h6>
          <span className="text-[#71767b] text-xs">
            49.4k tweets
            {/* {tweets} */}
          </span>
        </div>
      </div>
      <div className="flex gap-x-3 justify-between h-9 text-gray-500 text-sm -mx-1">
        <button
          type="button"
          className={cn(
            "group flex items-center text-xs",
            "hover:bg-sky-500/10 hover:text-sky-500 group-hover:bg-sky-500/10 group-hover:text-sky-500".split(
              " "
            )[1]
          )}
        >
          <span
            className={cn(
              "flex items-center gap-1 p-2 rounded-full",
              "hover:bg-sky-500/10 hover:text-sky-500 group-hover:bg-sky-500/10 group-hover:text-sky-500"
            )}
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="w-[18px] text-[#71767b] rounded-full hover:text-sky-500 group-hover:text-sky-500"
              fill="currentColor"
            >
              <g>
                <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
              </g>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
