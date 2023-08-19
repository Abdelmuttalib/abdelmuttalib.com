import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

import TailwindIndicator from "../src/components/tailwind-indicator";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />

      <Analytics mode="production" />
      <TailwindIndicator />
    </>
  );
}
