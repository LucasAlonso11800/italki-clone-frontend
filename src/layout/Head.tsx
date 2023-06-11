import React from "react";
import Head from "next/head";

type Props = {
  title?: string;
};
export default function CustomHead({ title = "Italki" }: Props) {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
    </Head>
  );
}
