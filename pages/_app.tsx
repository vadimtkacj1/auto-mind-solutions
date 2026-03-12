import type { AppProps } from "next/app";

/**
 * This project primarily uses the App Router (`app/`).
 *
 * A minimal Pages Router `_app` is kept to satisfy Next.js build trace collection
 * when `output: "standalone"` is enabled, even if no `pages/` routes are used.
 */
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}


