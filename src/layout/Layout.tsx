import React from "react";
import "./Layout.module.scss";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export default function Layout({ children }: Props) {
  return <main>{children}</main>;
}
