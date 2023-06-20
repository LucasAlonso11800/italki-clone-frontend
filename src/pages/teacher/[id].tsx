import React from "react";
import { Layout } from "@/layout";
import {
  TeacherStats,
  TeacherIntro,
  TeacherHeader,
  TeacherLessons,
  TeacherReviews,
  TeacherVideo,
} from "@/components";

export default function TeacherPage() {
  return (
    <Layout>
      <TeacherHeader />

      <main className="bg-bg1 flex-1">
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
              <TeacherLessons
                language="Spanish"
                lessons={[
                  { name: "Trial Lesson", number: 133, price: 5 },
                  {
                    name: "Informal conversation Lesson",
                    number: 133,
                    price: 6,
                  },
                ]}
              />
              {/* Availability */}
              <TeacherReviews
                reviews={[
                  {
                    student: "Alex Kopen",
                    date: "1 April, 2022",
                    number: 100,
                    review:
                      "Brandon is one of the most down-to-earth person I have ever met!.I've been taking classes with him 4 days a week for some time now, and can say we've had many amazing conversations. If you're looking for a passionate teacher, Brandon is your guy!",
                    teacherPick: true,
                  },
                  {
                    student: "Someone else",
                    date: "12 August, 2021",
                    number: 120,
                    review:
                      "Brandon is one of the most down-to-earth person I have ever met!.I've been taking classes with him 4 days a week for some time now, and can say we've had many amazing conversations. If you're looking for a passionate teacher, Brandon is your guy!",
                    teacherPick: false,
                  },
                  {
                    student: "Someone else",
                    date: "12 August, 2021",
                    number: 120,
                    review:
                      "Brandon is one of the most down-to-earth person I have ever met!.I've been taking classes with him 4 days a week for some time now, and can say we've had many amazing conversations. If you're looking for a passionate teacher, Brandon is your guy!",
                    teacherPick: false,
                  },
                ]}
              />
            </div>
          </div>

          <TeacherVideo />
        </div>

        <div className="md:p-0 md:pb-6 sm:mb-6 container flex small-secondary text-gray3">Your final payment will be made in USD</div>
      </main>
    </Layout>
  );
}
