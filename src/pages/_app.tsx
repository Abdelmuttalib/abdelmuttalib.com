import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";

import "@/styles/globals.css";
import TailwindIndicator from "@/components/tailwind-indicator";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="light">
        <Component {...pageProps} />

        <Analytics mode="production" />
        <TailwindIndicator />
      </ThemeProvider>
    </>
  );
}
