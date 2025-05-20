import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useRouter } from "next/router";
import ThemeSelect from "./theme-select";
import Container from "./ui/container";
import { PageContainer } from "./common/page-container";

interface LayoutProps {
  children: React.ReactNode;
}

// #ebebeb
// #4734f7
// #a3a3a3
// #c6c6c6
// #0b151e
// #999999

// px-8 sm:px-16 xl:px-36

export default function Layout({ children }: LayoutProps) {
  const { pathname } = useRouter();

  return (
    <div
      className={`w-full h-full min-h-screen flex flex-col relative bg-background`}
    >
      {pathname !== "/" && <Header />}
      {/*  py-48 md:py-72 */}
      <main className="w-full h-full min-h-screen">
        {/* <Container className=""> */}
        {children}
        {/* </Container> */}
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="w-full h-12 sticky top-0 max-w-6xl mx-auto px-8 sm:px-16 xl:px-36 flex items-center bg-transparent backdrop-blur-xl">
      <Button className="size-8" size="icon" variant="secondary" asChild>
        <Link href="/">
          <ArrowLeftIcon className="w-5 h-5" />
        </Link>
      </Button>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <PageContainer>
        <div className="border-t py-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} Abdelmuttalib Ahmed.
              </p>
            </div>
            <div className="flex items-center gap-x-3 justify-between sm:justify-normal sm:w-auto">
              <ul className="flex flex-wrap items-center">
                {PORTFOLIO_DATA.contact.social.map((social, index) => (
                  <li
                    key={social.name}
                    className="relative inline-block pe-4 text-xs before:absolute before:end-1.5 before:top-1/2 before:size-[3px] before:-translate-y-1/2 before:rounded-full before:bg-gray-400 last:pe-0 last-of-type:before:hidden dark:text-neutral-500 dark:before:bg-neutral-600"
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      className="text-xs text-muted-foreground underline hover:text-foreground hover:decoration-2 focus:decoration-2 focus:outline-none"
                      rel="noreferrer"
                    >
                      {social.name}
                      {/* X (Twitter) */}
                    </a>
                  </li>
                ))}
              </ul>

              <ThemeSelect />
            </div>
            {/* <ul className="flex flex-wrap items-center">
                <li className="relative inline-block pe-4 text-xs before:absolute before:end-1.5 before:top-1/2 before:size-[3px] before:-translate-y-1/2 before:rounded-full before:bg-gray-400 last:pe-0 last-of-type:before:hidden dark:text-neutral-500 dark:before:bg-neutral-600">
                  <a
                    className="text-xs text-muted-foreground underline hover:text-foreground hover:decoration-2 focus:decoration-2 focus:outline-none"
                    href="#"
                  >
                    X (Twitter)
                  </a>
                </li>

                <li className="inline-block pe-4 text-xs">
                  <a
                    className="text-xs text-muted-foreground underline hover:text-foreground hover:decoration-2 focus:decoration-2 focus:outline-none"
                    href="#"
                  >
                    Github
                  </a>
                </li>
              </ul> */}
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}

function Footer2() {
  return (
    <footer className="h-auto border-t dark:border-t-neutral-800 flex mt-36 w-full max-w-6xl mx-auto text-sm">
      <div className="h-full w-full items-center flex px-4 sm:px-6 lg:px-8">
        <div className="py-6 flex flex-col md:flex-row w-full justify-center md:justify-between items-center gap-y-4">
          <div className="w-full md:w-auto flex gap-x-4 flex-wrap gap-y-2 justify-center text-xs text-foreground-subtle">
            <Link
              href="/cv"
              className="underline decoration-current underline-offset-2"
              target="_blank"
              rel="noreferrer"
            >
              <span>CV</span>
            </Link>
            {PORTFOLIO_DATA.contact.email ? (
              <Link
                href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                className="underline decoration-current underline-offset-2"
                target="_blank"
                rel="noreferrer"
              >
                {/* <GitHubIcon /> */}
                <span>{PORTFOLIO_DATA.contact.email}</span>
              </Link>
            ) : null}

            {PORTFOLIO_DATA.contact.tel ? (
              <Link
                href={`tel:${PORTFOLIO_DATA.contact.tel}`}
                className="underline decoration-current underline-offset-2"
                target="_blank"
                rel="noreferrer"
              >
                <span>{PORTFOLIO_DATA.contact.tel}</span>
              </Link>
            ) : null}

            <Link
              href="https://github.com/Abdelmuttalib"
              className="underline decoration-current underline-offset-2"
            >
              {/* <GitHubIcon /> */}
              <span>GitHub</span>
            </Link>
            {/* <div className="hidden md:block">
              <ThemeSelect />
            </div> */}
          </div>
          <div className="mt-2 block">
            <ThemeSelect />
          </div>
        </div>
      </div>
    </footer>
  );
}
