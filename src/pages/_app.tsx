import "@styles/globals.css";
import { AppProvider } from "contexts/AppContext";
import { AuthProvider } from "contexts/AuthContext";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <AuthProvider>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          {/* eslint-disable-next-line @next/next/no-page-custom-font */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <Component {...pageProps} />
      </AuthProvider>
    </AppProvider>
  );
}

export default MyApp;
