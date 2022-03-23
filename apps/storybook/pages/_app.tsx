// this works
import "ui/globals.css"

// this works
// import "../styles/globals.css"

import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
