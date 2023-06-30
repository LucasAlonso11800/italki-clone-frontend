import React from "react";
import { Layout } from "@/layout";
import { FAQ, HomePageBanner, LanguageCarrousel } from "@/components";

export default function Home() {
  return (
    <Layout>
      <main className="bg-bg1">
        <HomePageBanner />
        <LanguageCarrousel />
        <div className="container">
            <FAQ />
        </div>
      </main>
    </Layout>
  );
}
