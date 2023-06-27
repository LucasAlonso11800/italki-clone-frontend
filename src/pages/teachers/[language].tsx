import { TeacherListItem, TeacherPageBanner } from "@/components";
import { API_BASE_URL, API_ROUTES, ROUTES } from "@/const";
import { Layout } from "@/layout";
import { TeacherListItemType } from "@/types";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

type Props = {
  language: string;
  teachers: TeacherListItemType[];
  total: number;
};
export default function Teachers({ language, teachers, total }: Props) {
  return (
    <Layout>
      <main className="bg-bg1">
        <TeacherPageBanner language={language} />
        <div className="container relative py-4 md:mx-auto mx-4 md:px-4">
          <div className=" mb-6 mx-auto w-full ">
            <div>
              <div className="flex md:items-center flex-col md:flex-row items-start">
                <h2 className="text-lg font-bold leading-7 text-gray1">
                  Learn {language} online with certified teachers and native
                  speakers
                </h2>
                <div className=" bg-gray6 rounded-1 text-tiny leading-4 text-gray3 md:ml-2 py-1 px-2 mb-1 md:mb-0">
                  {total} {total === 1 ? "Teacher" : "Teachers"}
                </div>
              </div>
              <p className="text-tiny leading-5 text-gray3 mb-0 mt-1 font-medium">
                Our {language} teachers and tutors are experienced and
                passionate about helping students improve their language skills.
                Whether you are looking for one-on-one lessons or group classes,
                our platform offers a flexible and convenient way to learn from
                the comfort of your home.
              </p>
            </div>
          </div>

          <div className=" relative items-start flex flex-wrap w-full ">
            <div className=" flex flex-1 flex-col  md:mb-14 md:w-8/12">
              {teachers.map((teacher) => (
                <TeacherListItem teacher={teacher} key={teacher.teacher_id} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const languages = Object.keys(ROUTES.teachers);
  return {
    paths: languages.map((language) => ({
      params: { language },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const language = context.params?.language?.toString() as string;
    const url = `${API_BASE_URL}/${
      API_ROUTES.teachers
    }?language=${language[0].toUpperCase()}${language.slice(1)}`;

    const { result } = await (await axios.get(url)).data;

    return {
      props: {
        language: language[0].toUpperCase() + language.slice(1),
        teachers: result[0].teachers || [],
        total: result[0].total,
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
