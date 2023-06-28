import React, { useState } from "react";
import { Footer, Head, Header, LoginModal, SignUpModal } from "@/layout";

type Props = {
  children: JSX.Element | JSX.Element[];
};

type Modal = 'login' | 'signup' | null;

export default function Layout({ children }: Props) {
  const [modal, setModal] = useState<Modal>(null);
  return (
    <>
      <Head />
      <Header setModal={setModal}/>
      <LoginModal open={modal === 'login'} setModal={setModal}/>
      <SignUpModal open={modal === 'signup'} setModal={setModal}/>
      {children}
      <Footer />
    </>
  );
}
