import React from "react";
import { Footer, Head, Header } from "@/layout";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Head />
      <Header />
      {children}
      <Footer />
    </>
  );
}
