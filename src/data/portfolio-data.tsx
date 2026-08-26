// import { Icons } from "@/components/icons";

import shadcnstyles from "../../public/images/projects/shadcn-styles-view-light.png";
import shadcnstylesDark from "../../public/images/projects/shadcn-styles-view-dark.png";
import reactaria from "../../public/images/projects/react-aria-view-light.png";
import reactariaDark from "../../public/images/projects/react-aria-view-dark.png";
import opulent from "../../public/images/projects/opulent-view-light.png";
import opulentDark from "../../public/images/projects/opulent-view-dark.png";
import momentum from "../../public/images/projects/momentum-view-light.png";
import momentumDark from "../../public/images/projects/momentum-view-dark.png";

import SocialIcon from "@/components/icons/SocialIcon.astro";

type Experience = {
  title: string;
  description?: string;
  company: {
    name: string;
    logo: string;
    link: string;
  };
  location: string;
  badges: string[];
  startDate: string;
  endDate: string;
  startYear: string;
  endYear: string;
  desc: string[];
};

export const experiences: Experience[] = [
  {
    title: "Full Stack / 3D Software Engineer",
    description:
      "Built advanced browser-based 3D visualization systems for smart construction platforms using React, Three.js, xeokit, and custom WebGL rendering pipelines.",
    company: {
      name: "Invix Technology",
      logo: "invix-logo-white.jpg",
      link: "http://invix.tech/",
    },
    location: "China",
    badges: ["Remote"],
    startDate: "December 2023",
    endDate: "December 2025",
    startYear: "2023",
    endYear: "2025",
    desc: [
      "Developed interactive BIM and digital twin applications for construction monitoring and visualization",
      "Optimized rendering performance for large-scale 3D models and real-time spatial interactions",
      "Integrated AI/ML outputs into visualization systems for intelligent construction workflows",
      "Built reusable frontend architecture and scalable React component systems",
      "Processed and optimized complex 3D model formats including IFC, GLB, PLY, and OSGB",
      "Contributed to CI/CD workflows, automated testing, and deployment pipelines",
      "Implemented multilingual support and accessibility improvements across products",
    ],
  },
  {
    title: "Software Developer",
    description:
      "Led frontend development for a healthcare procurement platform serving hospitals and clinics.",
    company: {
      name: "MedHyve",
      logo: "medhyve.png",
      link: "https://www.linkedin.com/company/medhyve/mycompany/",
    },
    location: "Manila, Philippines",
    badges: ["Remote"],
    startDate: "September 2021",
    endDate: "January 2023",
    startYear: "2021",
    endYear: "2023",
    desc: [
      "Increased organic search traffic by nearly 10,000 users through SEO optimization initiatives",
      "Developed responsive and accessible e-commerce interfaces using React and modern frontend tooling",
      "Collaborated closely with product, design, and backend teams to deliver scalable platform features",
      "Built reusable UI systems and improved frontend maintainability",
      "Implemented testing workflows using Jest and Cypress",
      "Contributed to CI/CD automation and deployment processes",
      "Improved application performance, accessibility, and cross-browser compatibility",
    ],
  },
  {
    title: "Front End React Developer",
    description:
      "Developed responsive event management and booking interfaces with a strong focus on usability and performance.",
    company: {
      name: "Happy Season",
      logo: "happy-season.svg",
      link: "https://happy-season.com/",
    },
    location: "Saudi Arabia",
    badges: ["Remote"],
    startYear: "2021",
    endYear: "2021",
    startDate: "January 2021",
    endDate: "September 2021",
    desc: [
      "Built mobile-first UI systems from Figma designs",
      "Integrated frontend systems with backend APIs and Node.js services",
      "Improved website speed, responsiveness, and accessibility",
      "Demonstrated a keen eye for UI design and took charge of redesigning pages to optimize their visual appeal and enhance overall user experience.",
      "Collaborated in agile development cycles and feature planning",
      "Implemented testing workflows and optimized user experience across devices",
    ],
  },
];

export const PORTFOLIO_DATA = {
  name: "Abdelmuttalib Ahmed",
  initials: "AA",
  location: "Philippines",
  locationLink: "",
  about:
    "Full Stack Engineer with experience building scalable web platforms, interactive 3D visualization systems, and modern product experiences.",
  summary:
    "I've played a pivotal role in driving product development from inception to fruition, contributing effectively to multiple successful projects. I thrive in a collaborative environment, working seamlessly with cross-functional teams to deliver high-quality solutions. My journey spans over 5 years of experience in working remotely with companies all around the world.",
  avatarUrl: "/images/personal-avatar.png",
  // avatarUrl: "https://avatars.githubusercontent.com/u/54845047?v=4",
  personalWebsiteUrl: "https://abdelmuttalib.com",
  contact: {
    email: "abdelmuttalib1@gmail.com",
    tel: "+639455102063",
    social: [
      {
        name: "LinkedIn",
        username: "Abdelmuttalib Ahmed",
        url: "https://www.linkedin.com/in/abdelmuttalib-ahmed-81919b160/",
        icon: <SocialIcon platform="linkedin" />,
        iconId: "linkedin",
      },
      {
        name: "GitHub",
        username: "Abdelmuttalib",
        url: "https://github.com/Abdelmuttalib",
        icon: <SocialIcon platform="github" />,
        iconId: "github",
      },
      {
        name: "X (Twitter)",
        username: "Abdelmuttalib_",
        url: "https://x.com/Abdelmuttalib_",
        icon: <SocialIcon platform="x" />,
        iconId: "x",
      },
    ],
  },
  education: [
    {
      school: "University of the Cordilleras",
      degree: "Bachelor's Degree in Data Analytics",
      start: "2018",
      end: "2021",
    },
  ],
  work: experiences,
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Vue/Nuxt.js",
    "Node.js",
    "Express.js",
    "Prisma",
    "SQL",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Tailwind CSS",
    "UI/UX Design",
    "Figma",
    "Three.js",
    "WebGL",
    "xeokit",
    "3D Rendering",
    "BIM Visualization",
    "Jest",
    "Testing Library",
    "Cypress",
    "Firebase",
    "Supabase",
    "TRPC",
    "Git",
    "GitHub",
    "GitLab",
    "Bitbucket",
  ],
  projects: [
    {
      label: "shadcn.style",
      title: "shadcn ui styles",
      description: "Custom shadcn ui styles, components, palettes, and blocks.",
      techStack: [
        "React",
        "Nextjs",
        "Typescript",
        "TailwindCSS",
        "shadcn ui",
        "Stripe",
      ],
      image: shadcnstyles,
      imageDark: shadcnstylesDark,
      github: "https://github.com/Abdelmuttalib/shadcnui-marketplace",
      preview: "https://shadcnmarketplace.com",
      status: "Deployed",
      logo: "",
      link: {
        label: "shadcn.style",
        href: "https://shadcnmarketplace.com",
      },
    },
    {
      label: "Opulent",
      title: "Opulent",
      description:
        "Elegant e-commerce website powered by Stripe payments, providing seamless and secure transactions for customers.",
      techStack: [
        "React",
        "Nextjs",
        "Typescript",
        "TailwindCSS",
        "Railway",
        "Prisma",
        "Stripe",
      ],
      image: opulent,
      imageDark: opulentDark,
      github: "https://github.com/Abdelmuttalib/Opulent",
      preview: "https://opulent.vercel.app/",
      status: "Deployed",
      logo: "",
      link: {
        label: "opulent.com",
        href: "https://opulent.vercel.app/",
      },
    },

    {
      label: "React Aria",
      title: "React Aria",
      description:
        "a react component library for building accessible web apps. Built with Adobe Aria Components.",
      techStack: [
        "React",
        "Nextjs",
        "Typescript",
        "TailwindCSS",
        "shadcn ui",
        "Stripe",
      ],
      image: reactaria,
      imageDark: reactariaDark,
      github: "https://github.com/Abdelmuttalib/react-aria",
      preview: "https://www.react-aria.com/",
      status: "Deployed",
      logo: "",
      link: {
        label: "react-aria.com",
        href: "https://www.react-aria.com/",
      },
    },

    {
      label: "Momentum",
      title: "Momentum",
      description:
        "Issue tracking and project management web app, facilitating streamlined team collaboration and task management.",
      techStack: [
        "React",
        "Nextjs",
        "Typescript",
        "TailwindCSS",
        "Prisma",
        "tRPC",
        "NextAuth",
        "Supabase",
        "PostgreSQL",
      ],
      image: momentum,
      imageDark: momentumDark,
      github: "https://github.com/Abdelmuttalib/momentum",
      preview: "https://momentum-gamma.vercel.app/",
      status: "Deployed",
      logo: "",
      link: {
        label: "momentum.com",
        href: "https://momentum-gamma.vercel.app/",
      },
    },
  ],
} as const;
