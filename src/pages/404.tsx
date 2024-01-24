import { HomeIcon } from "@heroicons/react/20/solid";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import Head from "next/head";

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>

      <main className="flex h-full min-h-screen w-full items-center justify-center px-6 py-24 sm:py-32 lg:px-6">
        <div className="text-center">
          <p className="text-3xl font-semibold text-brand">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <div className="mt-10 flex justify-center gap-x-3">
            <Button
              size="lg"
              className={cn("inline-flex items-center justify-center gap-1.5")}
              asChild
            >
              <Link href="/">
                <HomeIcon className="mb-0.5 w-5" />
                <span>Home</span>
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
