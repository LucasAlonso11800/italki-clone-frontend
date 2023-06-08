import React from "react";
import { Footer, Head } from "@/layout";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Head />
      <main>{children}</main>;
      <Footer />
    </>
  );
}
