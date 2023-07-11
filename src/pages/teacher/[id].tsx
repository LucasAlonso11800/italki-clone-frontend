import React, { useMemo } from "react";
import { Layout } from "@/layout";
import {
  TeacherStats,
  TeacherIntro,
  TeacherHeader,
  TeacherLessons,
  TeacherReviews,
  TeacherVideo,
  TeacherAvailability,
} from "@/components";
import { GetStaticPaths, GetStaticProps } from "next";
import axios from "axios";
import { API_BASE_URL, API_ROUTES, SERVICES_URL } from "@/const";
import {
  GenderType,
  LanguageType,
  LessonPostType,
  ReviewType,
  ServiceConfig,
  TeacherAvailabilityType,
  YesOrNoType,
} from "@/types";
import { getWeekLimits } from "@/utils";

type Props = {
  average_rating: string;
  country_id: number;
  country_name: string;
  teacher_birthdate: string;
  teacher_description: string;
  teacher_email: string;
  teacher_about_me: string;
  teacher_me_as_a_teacher: string;
  teacher_teaching_style: string;
  teacher_first_name: string;
  teacher_gender: GenderType;
  teacher_id: number;
  teacher_image: string | null;
  teacher_last_name: string;
  teacher_lessons: LessonPostType[];
  teacher_professional: YesOrNoType;
  teacher_reviews: ReviewType[];
  teacher_startdate: string;
  teacher_video: string | null;
  total_lessons: number;
  total_students: number;
  teacher_living_in: string;
  teacher_languages: LanguageType[];
  country_image: string;
  total_reviews: number;
  teacher_availability: TeacherAvailabilityType[];
};

export default function TeacherPage(props: Props) {
  const languagesTheyTeach = useMemo(
    () =>
      props.teacher_languages?.filter((lang) => lang.teacher_teaches === "Y"),
    [props]
  );

  return (
    <Layout>
      <TeacherHeader />

      <main className="bg-bg1 flex-1">
        <div className="p-4 md:p-0 container flex">
          <div className="w-full md:w-7/12 lg:w-8/12">
            <div className="pb-4 md:pb-6">
              <TeacherIntro {...props} />
              <TeacherStats
                lessons={props.total_lessons}
                students={props.total_students}
                rating={props.average_rating}
              />

              {/* Lessons */}
              {languagesTheyTeach?.map((lang) => {
                const lessons = props.teacher_lessons.filter(
                  (lesson) => lesson.language_id === lang.language_id
                );
                if (lessons.length) {
                  return (
                    <TeacherLessons
                      key={lang.language_id}
                      language={lang.language_name}
                      lessons={lessons}
                    />
                  );
                }
              })}
              <TeacherAvailability
                teacherId={props.teacher_id}
                availability={props.teacher_availability}
                lessons={props.teacher_lessons}
              />
              <TeacherReviews
                reviews={props.teacher_reviews}
                totalReviews={props.total_reviews}
              />
            </div>
          </div>

          <TeacherVideo />
        </div>

        <div className="md:p-0 md:pb-6 sm:mb-6 container flex small-secondary text-gray3">
          Your final payment will be made in USD
        </div>
      </main>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  type Item = {
    teacher_id: number;
  };
  const options: ServiceConfig = {
    method: "POST",
    url: SERVICES_URL,
    data: {
      procedure: "TeacherIdsGet",
      params: {},
    },
  };
  const { result } = await (await axios(options)).data;

  return {
    paths: result.map((item: Item) => ({
      params: { id: item.teacher_id.toString() },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const infoURL = `${API_BASE_URL}/${API_ROUTES.teacher.info}/${context.params?.id}`;
    const weekLimits = getWeekLimits(0);

    const availabilityURL = `${API_BASE_URL}/${
      API_ROUTES.teacher.availability
    }?teacher_id=${context.params?.id}&date_from=${weekLimits.start}&date_to=${weekLimits.end}`;

    const teacherInfo = await (await axios.get(infoURL)).data;
    const teacherAvailability = await (await axios.get(availabilityURL)).data;

    return {
      props: {
        ...teacherInfo.result[0],
        teacher_availability: teacherAvailability.result,
      },
      revalidate: 60,
    };
  } catch (err) {
    console.log(err);
    return {
      redirect: {
        destination: "/error",
        permanent: false,
      },
    };
  }
};
