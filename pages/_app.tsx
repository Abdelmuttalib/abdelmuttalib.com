import TailwindIndicator from "../src/components/tailwind-indicator";
import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <TailwindIndicator />
    </>
  );
}
