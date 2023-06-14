import React, { useEffect, useState } from "react";
import { Layout } from "@/layout";
import { TeacherStats, TeacherIntro, TeacherHeader } from "@/components";

export default function TeacherPage() {
  return (
    <Layout>
      <TeacherHeader />
      <main className="bg-bg1 flex-1 min-h-[2000px]">
        {/* Sticky header */}
        <div className="p-4 md:p-0 container flex">
          <div className="w-full md:w-7/12 lg:w-8/12">
            <div className="pb-4 md:pb-6">
              <TeacherIntro />
              <TeacherStats 
                attendance={100}
                lessons={100}
                students={753}
                rating={5.0}
                response={100}
              />
              {/* Lessons */}
              {/* Availability */}
              {/* Reviews */}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
