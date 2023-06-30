import React from "react";
import { Layout } from "@/layout";
import {
  FAQ,
  HomePageBanner,
  LanguageCarrousel,
  WhatItalkiOffers,
} from "@/components";

export default function Home() {
  return (
    <Layout>
      <main className="bg-bg1">
        <HomePageBanner />
        <LanguageCarrousel />
        <WhatItalkiOffers />
        <div className="container mx-auto">
          <FAQ />
        </div>
      </main>
    </Layout>
  );
}
