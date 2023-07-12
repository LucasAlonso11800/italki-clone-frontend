import React, { useEffect, useState } from "react";
import { Footer, Head, Header, LoginModal, SignUpModal } from "@/layout";
import { useTokenHandler } from "@/hooks";

type Props = {
  children: JSX.Element | JSX.Element[];
};

type Modal = "login" | "signup" | null;

export default function Layout({ children }: Props) {
  const { setTokens } = useTokenHandler();
  const [modal, setModal] = useState<Modal>(null);

  useEffect(() => {
    const accessToken =
      typeof localStorage !== "undefined"
        ? localStorage.getItem("access_token")
        : null;
    const refreshToken =
      typeof localStorage !== "undefined"
        ? localStorage.getItem("refresh_token")
        : null;
    setTokens(accessToken, refreshToken);
  }, []);

  return (
    <>
      <Head />
      <Header setModal={setModal} />
      <LoginModal open={modal === "login"} setModal={setModal} />
      <SignUpModal open={modal === "signup"} setModal={setModal} />
      {children}
      <Footer />
    </>
  );
}
