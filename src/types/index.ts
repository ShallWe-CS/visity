import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  authenticationRequired?: boolean;
  getLayout?: (page: ReactElement) => ReactNode;
};

export interface HomePageProps {
  variables: {
    products: any;
    popularProducts?: any;
    bestSellingProducts?: any;
    categories: any;
    types: any;
    layoutSettings: any;
  };
  layout: string;
}
