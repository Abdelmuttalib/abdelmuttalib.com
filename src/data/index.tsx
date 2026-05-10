import { Icons } from "@/components/icons";

export const PORTFOLIO_DATA = {
  name: "Abdelmuttalib Ahmed",

  initials: "AA",

  location: "Philippines",

  locationLink: "",

  about:
    "Frontend & Full Stack Engineer specializing in high-performance web applications, 3D visualization systems, and modern product experiences.",

  summary:
    "I build scalable production-grade applications using React, Next.js, TypeScript, Node.js, Laravel, and modern frontend architecture. My experience spans enterprise dashboards, healthcare platforms, e-commerce systems, interactive 3D applications, and BIM visualization tools with a strong focus on performance, accessibility, maintainability, and thoughtful user experience.",

  summary2:
    "Over the years, I’ve contributed to complex products ranging from healthcare procurement systems and booking platforms to advanced browser-based 3D visualization applications using Three.js, xeokit, and WebGL technologies. I enjoy solving technical challenges that require balancing engineering quality, product thinking, and user experience.",

  avatarUrl: "/images/personal-avatar.png",

  personalWebsiteUrl: "https://abdelmuttalib.com",

  contact: {
    email: "abdelmuttalib1@gmail.com",

    tel: "+639455102063",

    social: [
      {
        name: "LinkedIn",
        username: "Abdelmuttalib Ahmed",
        url: "https://www.linkedin.com/in/abdelmuttalib-ahmed-81919b160/",
        icon: Icons.linkedin,
      },

      {
        name: "GitHub",
        username: "Abdelmuttalib",
        url: "https://github.com/Abdelmuttalib",
        icon: Icons.github,
      },

      {
        name: "X (Twitter)",
        username: "Abdelmuttalib_",
        url: "https://x.com/Abdelmuttalib_",
        icon: Icons.twitterX,
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

  work: [
    {
      company: "Invix",

      link: "/",

      badges: ["Remote"],

      title: "Frontend / 3D Software Engineer",

      start: "2023",

      end: "Present",

      description:
        "Developed advanced browser-based 3D visualization systems for smart construction platforms using React, Three.js, xeokit, and custom WebGL rendering pipelines. Worked on BIM viewers, digital twin systems, rendering optimization, model processing, and real-time visualization features for large-scale construction workflows. Built reusable frontend architecture, interactive spatial UI systems, and contributed to CI/CD pipelines, testing workflows, and performance optimization initiatives.",
    },

    {
      company: "MedHyve",

      link: "/",

      badges: ["Remote"],

      title: "Frontend / Full Stack Developer",

      start: "2021",

      end: "2023",

      description:
        "Led frontend development for a healthcare procurement platform serving hospitals and clinics. Built scalable and accessible interfaces using React, Next.js, TypeScript, and modern frontend tooling while collaborating closely with product, design, and backend teams. Contributed to SEO initiatives that increased organic traffic by nearly 10,000 users and implemented testing, CI/CD, and performance optimization workflows across the platform.",
    },

    {
      company: "Happy Season",

      link: "https://happy-season.com/",

      badges: ["Remote"],

      title: "Frontend Developer",

      start: "2020",

      end: "2021",

      description:
        "Developed responsive event management and booking interfaces with a strong focus on usability, accessibility, and performance. Collaborated with backend teams to build feature-rich web applications and implemented modern UI systems, testing workflows, and frontend optimizations across multiple user flows.",
    },
  ],

  skills: [
    "React",
    "Next.js",
    "Vue",
    "Nuxt.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "Laravel",
    "REST APIs",
    "Prisma",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Tailwind CSS",
    "Three.js",
    "WebGL",
    "xeokit",
    "3D Rendering",
    "BIM Visualization",
    "Jest",
    "Testing Library",
    "Cypress",
    "CI/CD",
    "GitHub Actions",
    "Firebase",
    "Supabase",
    "tRPC",
    "Accessibility",
    "SEO",
    "Performance Optimization",
    "Responsive Design",
    "Figma",
  ],

  featuredExpertise: [
    {
      title: "3D Visualization",
      description:
        "Building browser-based BIM and digital twin systems using Three.js, xeokit, and WebGL.",
    },

    {
      title: "Frontend Architecture",
      description:
        "Designing scalable React and Next.js applications with reusable systems and maintainable architecture.",
    },

    {
      title: "Performance Engineering",
      description:
        "Optimizing rendering performance, frontend responsiveness, and application scalability.",
    },

    {
      title: "Product Engineering",
      description:
        "Collaborating closely with design and product teams to deliver polished production-grade user experiences.",
    },
  ],

  currentlyExploring: [
    "Advanced WebGL rendering techniques",
    "Large-scale 3D model streaming",
    "Modern frontend architecture",
    "AI-assisted visualization workflows",
  ],

  projects: [
    {
      title: "Momentum",

      techStack: [
        "Next.js",
        "TypeScript",
        "tRPC",
        "Prisma",
        "PostgreSQL",
        "Tailwind CSS",
      ],

      description:
        "A modern issue tracking and project management platform focused on productivity, team collaboration, and scalable frontend architecture. Built with a strong emphasis on clean UX, type-safe APIs, and responsive design patterns.",

      link: {
        label: "View Project",
        href: "https://momentum-gamma.vercel.app/",
      },
    },

    {
      title: "Opulent",

      techStack: [
        "Next.js",
        "TypeScript",
        "Stripe",
        "Prisma",
        "PostgreSQL",
        "Tailwind CSS",
      ],

      description:
        "A premium e-commerce experience with secure Stripe payments, responsive storefront design, and optimized shopping flows focused on performance and user experience.",

      link: {
        label: "View Project",
        href: "https://opulent.vercel.app/",
      },
    },

    {
      title: "Memories",

      techStack: [
        "Next.js",
        "TypeScript",
        "NextAuth",
        "Prisma",
        "Supabase",
        "Tailwind CSS",
      ],

      description:
        "A social content-sharing platform enabling users to upload, organize, and share personal memories through media-rich experiences powered by cloud storage and authentication systems.",

      link: {
        label: "View Project",
        href: "https://memories-ashen.vercel.app/",
      },
    },

    {
      title: "PodX",

      techStack: [
        "Next.js",
        "TypeScript",
        "PWA",
        "Podcast API",
        "Tailwind CSS",
      ],

      description:
        "A progressive web podcast platform designed for smooth media consumption, responsive performance, and seamless cross-device listening experiences.",

      link: {
        label: "View Project",
        href: "https://podx.vercel.app/",
      },
    },
  ],
} as const;

type Experience = {
  jobTitle: string;
  company: string;
  companyLogo: string;
  companyLink: string;
  location: string;
  startDate: string;
  endDate: string;
  tweetDate: string;
  desc: string[];
};

export const experiences: Experience[] = [
  {
    jobTitle: "Software Developer",
    company: "MedHyve",
    companyLogo: "medhyve.png",
    companyLink: "https://www.linkedin.com/company/medhyve/mycompany/",
    location: "Manila, Philippines",
    startDate: "September 2021",
    endDate: "January 2023",
    tweetDate: "Now",
    desc: [
      "Led SEO optimization efforts, resulting in a significant increase in organic traffic from Google searches, driving website visibility and attracting nearly 10,000 new visitors.",
      "Actively engaged with the CTO and CEO of the startup, proposing and implementing strategic improvements to the website and platform, effectively aligning them with the company's goals and vision.",
      "Collaborated closely with the design team to ensure that UI designs aligned with best practices and provided optimal user experience, fostering a user-centric approach to development.",
      "Contributed to the company's growth by proactively suggesting ideas for feature enhancements and process optimization, fostering an environment of continuous improvement.",
      "Led the frontend development of the company website, showcasing expertise in designing, implementing, and maintaining a wide range of website components and features.",
      "Conducted regular code reviews and maintained high coding standards, ensuring the delivery of clean, efficient, and scalable frontend solutions.",
      "Actively participated in cross-functional discussions, offering valuable insights to enhance website performance and user engagement.",
      "Worked in synergy with backend developers, seamlessly integrating frontend features and functionalities, enabling the delivery of a robust and cohesive web application.",
    ],
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
    desc: [
      "Led frontend development initiatives, collaborating seamlessly with backend developers to deliver feature-rich web applications that meet client expectations.",
      "Demonstrated a keen eye for UI design and took charge of redesigning pages to optimize their visual appeal and enhance overall user experience.",
      "Pioneered the creation of intuitive UI pages and components, consistently striving to deliver the best possible user experience for website visitors.",
      "Conducted rigorous testing of features to ensure high-quality output and impeccable performance across different browsers and devices.",
      "Actively collaborated with senior developers to propose innovative ideas, update the website, and implement new features that aligned with company objectives.",
      "Played a key role in optimizing website performance, focusing on speed, responsiveness, and accessibility to elevate user satisfaction.",
      "Participated in agile development processes, attending regular team meetings and contributing valuable insights to drive project success.",
      "Kept abreast of industry trends and emerging technologies, incorporating the latest advancements to enhance the frontend development process.",
    ],
  },
];
