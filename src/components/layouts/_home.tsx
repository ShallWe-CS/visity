import React from "react";
import Header from "../Header";
import Footer from "../Footer";

export default function HomeLayout({
  children,
  layout,
}: React.PropsWithChildren<{ layout: string }>) {
  return (
    <div className="flex min-h-screen flex-col transition-colors duration-150">
      <Header />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}
