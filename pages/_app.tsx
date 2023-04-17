import "@app/styles/globals.css";
import "near-social-bridge/near-social-bridge.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
