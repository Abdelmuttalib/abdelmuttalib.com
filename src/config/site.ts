import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export const siteConfig = {
  /** Wordmark shown in the header and footer. Monograph uses text, never a logo image. */
  name: PORTFOLIO_DATA.name,
  tagline: PORTFOLIO_DATA.summary,
  // title: ` - `,
  title: `Abdelmuttalib Ahmed`,
  description:
    "Software Developer building interactive and seamless digital experiences with cutting-edge software development.",
  siteUrl: "https://abdelmuttalib.vercel.app",
  authorName: PORTFOLIO_DATA.name,
  email: PORTFOLIO_DATA.contact.email,
  language: "en",
  dateLocale: "en-US",
  locale: "en_US",
  socialImage: "/og-image.png",
  /** Shown in the home sidebar "About" card. */
  about: `${PORTFOLIO_DATA.about}. ${PORTFOLIO_DATA.summary}`,
  /**
   * Both forms below ship enabled with an empty `action`, which makes them fully
   * interactive demos that submit nowhere: a small script confirms the submit
   * and clears the fields. Paste your provider's endpoint into `action` to send
   * real submissions, or set `enabled: false` to disable the controls outright.
   */
  // newsletter: {
  //   enabled: true,
  //   action: "",
  //   method: "post",
  //   emailFieldName: "email",
  //   title: "Get new posts by email",
  //   description:
  //     "One email when something new goes up. No spam, unsubscribe anytime.",
  // },
  contact: {
    enabled: true,
    action: "",
    method: "post",
    responseTime: "",
  },
  socials: PORTFOLIO_DATA.contact.social.map((social) => ({
    label: social.name,
    href: social.url,
    iconId: social.iconId,
  })),
};

/** Header navigation. Add or remove entries freely; the header renders them in order. */
export const navigation = [
  { label: "About", href: "/about/" },
  { label: "Projects", href: "/projects/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
  { label: "CV", href: "/cv/" },
];

/** Secondary navigation rendered in the footer. */
export const footerNavigation = navigation;

export const socialLinks = siteConfig.socials;
