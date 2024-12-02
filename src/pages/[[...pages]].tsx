import { NextPageWithLayout } from "@/types";
import type { InferGetStaticPropsType } from "next";
import { getStaticProps } from "@/framework/home-page.ssr";
import Hero from "@/components/Hero";
import EventManagement from "@/components/EventManagement";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

const Home: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ variables, layout }) => {
  return (
    <>
      <Hero />
      <EventManagement />
      <Pricing />
      <Contact />
    </>
  );
};

export default Home;
