import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";

import "@/styles/globals.css";
import TailwindIndicator from "@/components/tailwind-indicator";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="light">
        <div className={inter.className}>
          <Component {...pageProps} />
        </div>

        {process.env.NODE_ENV === "production" && (
          <Analytics mode="production" />
        )}
        <TailwindIndicator />
      </ThemeProvider>
    </>
  );
}
