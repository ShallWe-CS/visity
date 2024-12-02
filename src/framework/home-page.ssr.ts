import { HomePageProps } from "@/types";
import type { GetStaticPaths, GetStaticProps } from "next";

type ParsedQueryParams = {
  pages: string[];
};

export const getStaticProps = async () => {
  return {
    props: {
      variables: {
        // popularProducts: popularProductVariables,
        // products: productVariables,
        // categories: categoryVariables,
        // bestSellingProducts: popularProductVariables,
        // layoutSettings: {
        //   ...types.find((t) => t.slug === pageType)?.settings,
        // },
        // types: {
        //   type: pageType,
        // },
      },
      // ...(await serverSideTranslations(locale!, ["common", "banner"])), // Load the "common" and "banner" namespaces
      layout: "default", // Add additional props as needed
    },
  };
};
