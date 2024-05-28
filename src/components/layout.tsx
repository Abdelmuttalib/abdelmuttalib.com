import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useRouter } from "next/router";
import ThemeSelect from "./theme-select";
import Container from "./ui/container";

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
    <div className={`w-full h-full min-h-screen flex flex-col relative`}>
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
    <header className="w-full h-12 sticky top-0 max-w-7xl mx-auto px-8 sm:px-16 xl:px-36 flex items-center bg-transparent backdrop-blur-xl">
      <Button className="size-8" size="icon" variant="secondary" asChild>
        <Link href="/">
          <ArrowLeftIcon className="w-5 h-5" />
        </Link>
      </Button>
    </header>
  );
}

function Footer() {
  return (
    <footer className="h-auto border-t dark:border-t-neutral-800 flex mt-36">
      <div className="h-full w-full items-center flex px-4 sm:px-6 lg:px-8">
        <div className="py-6 flex flex-col md:flex-row w-full justify-center md:justify-between items-center gap-y-4">
          <p className="dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:via-neutral-500 tracking-tight dark:from-white dark:to-current">
            Abdelmuttalib Ahmed
          </p>
          <div className="w-full md:w-auto flex gap-x-4 flex-wrap gap-y-2 justify-center text-sm dark:text-neutral-500">
            <Link
              href="/cv"
              className="text-brand-600 hover:text-brand-400 underline decoration decoration-current underline-offset-4"
              target="_blank"
              rel="noreferrer"
            >
              <span>CV</span>
            </Link>
            {PORTFOLIO_DATA.contact.email ? (
              <Link
                href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                className="text-brand-600 hover:text-brand-400 underline decoration decoration-current underline-offset-4"
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
                className="text-brand-600 hover:text-brand-400 underline decoration decoration-current underline-offset-4"
                target="_blank"
                rel="noreferrer"
              >
                <span>{PORTFOLIO_DATA.contact.tel}</span>
              </Link>
            ) : null}

            <Link
              href="https://github.com/Abdelmuttalib"
              className="text-brand-600 hover:text-brand-400 underline decoration decoration-current underline-offset-4"
            >
              {/* <GitHubIcon /> */}
              <span>GitHub</span>
            </Link>
            <div className="hidden md:block">
              <ThemeSelect />
            </div>
          </div>
          <div className="mt-2 block md:hidden">
            <ThemeSelect />
          </div>
        </div>
      </div>
    </footer>
  );
}
