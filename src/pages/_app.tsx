import HomeLayout from "../components/layouts/_home";
import type { AppProps } from "next/app";
import { NextPageWithLayout } from "@/types";
import "@/styles/globals.css";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <HomeLayout layout="classic">
      <Component {...pageProps} />
    </HomeLayout>
  );
}

export default CustomApp;