import type { AppProps } from "next/app";
import { Oswald } from "next/font/google";
import "@/styles/globals.css";

const font = Oswald({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  );
}
