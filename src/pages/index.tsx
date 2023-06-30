import React from "react";
import { Layout } from "@/layout";
import { FAQ } from "@/components";

export default function Home() {
  return (
    <Layout>
      <main className="bg-bg1">
        <div className="container">
            <FAQ />
        </div>
      </main>
    </Layout>
  );
}
