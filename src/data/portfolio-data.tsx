// import { HappySeasonLogo, MedHyveLogo } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const PORTFOLIO_DATA = {
  name: "Abdelmuttalib Ahmed",
  initials: "BJ",
  location: "Pangasinan, Philippines",
  // location: "Wrocław, Poland, CET",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about:
    "Front End Developer focused on building products with extra attention to detail",
  summary:
    "As a Front End Developer, I've played a pivotal role in driving product development from inception to fruition, contributing effectively to multiple successful projects. With nearly 3 years of experience, I've demonstrated my proficiency in JavaScript, TypeScript, React, Vue, Next.js, Node.js, Express.js and Prisma. I thrive in a collaborative environment, working seamlessly with cross-functional teams to deliver high-quality solutions. My journey spans over 2 years of experience in working remotely with companies all around the world.",
  avatarUrl: "/images/personal-avatar.png",
  // avatarUrl: "https://avatars.githubusercontent.com/u/54845047?v=4",
  personalWebsiteUrl: "https://abdelmuttalib.com",
  contact: {
    email: "abdelmuttalib1@gmail.com",
    tel: "+639455102063",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Abdelmuttalib",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abdelmuttalib-ahmed-81919b160/",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
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
      company: "MedHyve",
      link: "/",
      badges: ["Remote"],
      title: "Software Developer",
      // logo: MedHyveLogo,
      start: "2021",
      end: "2024",
      description:
        "Led successful SEO optimization initiatives, resulting in a substantial organic traffic boost of nearly 10,000 new visitors from Google searches. Collaborated with the CTO and CEO to strategically align website improvements with company goals. Ensured user-centric UI designs through close collaboration with the design team and actively contributed to the company's growth by suggesting feature enhancements and process optimizations. Led frontend development, maintained high coding standards, and seamlessly integrated features with backend developers for a robust and cohesive web application. Emphasized accessibility and SEO-friendly page construction to further enhance site traffic.",
      //  Technologies: React, TypeScript, GraphQL
    },
    {
      company: "Happy Season",
      link: "https://happy-season.com/",
      badges: ["Remote"],
      title: "Front End React Developer",
      // logo: HappySeasonLogo,
      start: "2021",
      end: "2021",
      description:
        "Led frontend development, collaborating with backend teams to deliver feature-rich web applications, emphasizing UI design enhancements and creating intuitive components. Conducted rigorous testing for impeccable cross-browser and device performance, actively proposing innovative ideas and updates. Key contributor to website optimization, focusing on speed, responsiveness, and accessibility. Engaged in agile processes, attending meetings, and staying updated on industry trends for continual improvement.",
    },
    // {
    //   company: "Jojo Mobile",
    //   link: "https://bsgroup.eu/",
    //   badges: [],
    //   title: "Android Developer → Lead Android Developer",
    //   logo: JojoMobileLogo,
    //   start: "2012",
    //   end: "2015",
    //   description:
    //     "Built an Android team, created Android apps for biggest Polish companies like LOT, Polskie Radio, Agora, PolskaPress",
    // },
    // {
    //   company: "Nokia Siemens Networks",
    //   link: "https://www.nokia.com",
    //   badges: [],
    //   title: "C/C++ Developer",
    //   logo: NSNLogo,
    //   start: "2010",
    //   end: "2012",
    //   description: "Creating and testing software for LTE base stations",
    // },
  ],
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
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Tailwind CSS",
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
      title: "Opulent",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Prisma",
        "PostgreSQL",
        "PlanetScale",
        "Stripe",
      ],
      description:
        "Elegant e-commerce website powered by Stripe payments, providing seamless and secure transactions for customers",
      // logo: ConsultlyLogo,
      link: {
        label: "opulent.com",
        href: "https://opulent.vercel.app/",
      },
    },
    {
      title: "Momentum",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Prisma",
        "PostgreSQL",
        "Supabase",
        "TRPC",
      ],
      description:
        "Issue tracking and project management web app,facilitating streamlined team collaboration and task management",
      // logo: MonitoLogo,
      link: {
        label: "momentum.com",
        href: "https://momentum-gamma.vercel.app/",
      },
    },
    {
      title: "Memories",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "NextAuth.js",
        "Tailwind CSS",
        "Prisma",
        "PostgreSQL",
        "Supabase",
        "TRPC",
      ],
      description:
        "Enabling users to share cherished memories through image uploads and personalized descriptions, utilizing cloud storage for seamless access and sharing",
      // logo: JarockiMeLogo,
      link: {
        label: "memories.com",
        href: "https://memories-ashen.vercel.app/",
      },
    },
    {
      title: "PodX",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Podcast API",
        "PWA",
      ],
      description:
        "User-friendly podcast web application, offering a smooth and engaging listening experience with integrated podcast APIs",
      // logo: Minimal,
      link: {
        label: "podx.com",
        href: "https://podx.vercel.app/",
      },
    },
    // {
    //   title: "Barepapers",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Generates beautiful wallpapers using random shapes and gradients",
    //   logo: BarepapersLogo,
    //   link: {
    //     label: "barepapers.com",
    //     href: "https://barepapers.com/",
    //   },
    // },
    // {
    //   title: "Year progress",
    //   techStack: ["Side Project", "TypeScript", "Next.js"],
    //   description: "Tracks current year progress and displays a countdown",
    //   logo: YearProgressLogo,
    //   link: {
    //     label: "getyearprogress.com",
    //     href: "https://getyearprogress.com/",
    //   },
    // },
    // {
    //   title: "Parabol",
    //   techStack: [
    //     "Full Stack Developer",
    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL",
    //   ],
    //   description:
    //     "The Agile meeting co-pilot that delivers better meetings with less effort",
    //   logo: ParabolLogo,
    //   link: {
    //     label: "github.com",
    //     href: "https://parabol.co/",
    //   },
    // },
    // {
    //   title: "Evercast",
    //   techStack: [
    //     "Lead Frontend Developer",

    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL",
    //   ],
    //   description:
    //     "Creative collaboration platform that combines video conferencing and HD media streaming",
    //   logo: EvercastLogo,
    //   link: {
    //     label: "evercast.us",
    //     href: "https://www.evercast.us/",
    //   },
    // },
    // {
    //   title: "Mobile Vikings",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for leading virtual mobile operator in Poland",
    //   logo: MobileVikingsLogo,
    //   link: {
    //     label: "mobilevikings.pl",
    //     href: "https://mobilevikings.pl/",
    //   },
    // },
    // {
    //   title: "Howdy",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Howdy is a place for you to join communities you care about",
    //   logo: Howdy,
    //   link: {
    //     label: "play.google.com",
    //     href: "https://howdy.co/",
    //   },
    // },
    // {
    //   title: "Tastycloud",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for managing and displaying restaurant menus in kiosk mode",
    //   logo: TastyCloudLogo,
    //   link: {
    //     label: "tastycloud.fr",
    //     href: "https://www.tastycloud.fr/",
    //   },
    // },
    // {
    //   title: "Ambit",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with sharing your contact details",
    //   logo: AmbitLogo,
    // },
    // {
    //   title: "Bim",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with booking a table in a restaurants",
    //   logo: BimLogo,
    // },
    // {
    //   title: "Canal Digital GO",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Video streaming mobile application for Canal Digital subscribers",
    //   logo: CDGOLogo,
    // },
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
