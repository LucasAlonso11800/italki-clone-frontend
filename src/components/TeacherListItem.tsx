import { SVG } from "@/assets";
import { Avatar } from "antd";
import Image from "next/image";
import React, { useMemo } from "react";
import { TeacherFavButton } from ".";
import Link from "next/link";
import { TeacherListItemType } from "@/types";

type Props = {
  teacher: TeacherListItemType;
};
export default function TeacherListItem({ teacher }: Props) {
  const nativeLanguage = useMemo(
    () =>
      teacher.teacher_languages.find(
        (lang) => lang.language_level_code === "N"
      ),
    []
  );

  const otherLanguages = useMemo(
    () =>
      teacher.teacher_languages.filter(
        (lang) => lang.language_level_code !== "N"
      ),
    []
  );

  return (
    <Link href="/en/teacher/7487723/english" target="_blank">
      <section
        id="teacher-card-first"
        className="teacher-card relative hover:shadow-hover bg-white mb-5 transition-all duration-200 ease-in rounded-3 w-full p-4 cursor-pointer md:p-6"
      >
        <div className="cursor-pointer">
          <div className="flex flex-nowrap ">
            <div className=" self-start mr-6">
              <div className="flex justify-center items-center">
                <span
                  className="ant-avatar inline-flex justify-center items-center ant-avatar-circle ant-avatar-image w-20 h-20 text-lg relative"
                  style={{ border: "2px solid white" }}
                >
                  <Avatar
                    src={
                      teacher.teacher_image ||
                      "https://imagesavatar-static01.italki.com/1T095076430_Avatar.jpg"
                    }
                    alt="teacher"
                    style={{ width: 80, height: 80 }}
                  />
                  <i
                    className="ant-avatar-flag inline-block bg-contain bg-no-repeat right-0 w-6 h-6 absolute bottom-0"
                    style={{
                      backgroundPosition: "50% center",
                      borderRadius: "50%",
                      border: "2px solid white",
                      backgroundImage: `url(${
                        teacher.country_image ||
                        "https://scdn.italki.com/orion/static/flags/ar"
                      }.svg)`,
                    }}
                  ></i>
                </span>
              </div>
              <div className="flex flex-col items-center mt-3">
                <div className="text-center flex flex-col items-center">
                  <div className=" items-center block mb-6">
                    <div className="mr-0 mb-1">
                      <div className="italki-ratings  text-warning font-medium leading-none flex justify-center">
                        <Image
                          src={SVG.Star}
                          alt="star"
                          width={16}
                          height={16}
                        />
                        {parseFloat(teacher.average_rating).toFixed(2)}
                      </div>
                    </div>
                    <p className="font-light text-tiny">
                      {teacher.total_lessons}{" "}
                      {teacher.total_lessons === 1 ? "Lesson" : "Lessons"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex-1 flex flex-col"
              style={{ width: "calc(100% - 104px)" }}
            >
              <div className="flex items-center ">
                <span
                  className="text-base text-gray2 font-bold md:max-w-xs whitespace-nowrap overflow-hidden mr-1 "
                  style={{ maxWidth: "90%", textOverflow: "ellipsis" }}
                >
                  {teacher.teacher_first_name} {teacher.teacher_last_name}
                </span>
                <div>
                  <Image
                    src={SVG.VerifyIcon}
                    width={14}
                    height={14}
                    alt="verified"
                  />
                </div>
              </div>
              <div className="mb-2">
                <span className=" font-medium text-sm  text-gray3 align-middle ">
                  {teacher.teacher_professional === "Y"
                    ? "Professional Teacher"
                    : "Community Tutor"}
                </span>
              </div>
              <div className="flex items-center flex-wrap">
                <div className="flex items-center flex-1 flex-nowrap max-w-full">
                  <div className="flex items-center whitespace-nowrap mr-1.5">
                    <span className=" font-medium text-tiny  text-gray3 uppercase ">
                      SPEAKS:
                    </span>
                    <span className=" text-base font-medium text-gray2 ml-1">
                      {nativeLanguage?.language_name.toUpperCase()}
                    </span>
                    <div className="h-5 px-2 rounded-3 flex justify-center items-center self-center tiny-caption text-info bg-bgInfo ml-1">
                      Native
                    </div>
                  </div>
                  {otherLanguages.length &&
                  <p className=" text-base font-medium text-gray2  truncate-1 overflow-hidden">
                  {otherLanguages.slice(0,3).map(lang => (
                      <span className="mr-1.5">{lang.language_name}</span>
                  ))} 
                  </p>}
                  {otherLanguages.length > 3 &&
                  <span className=" text-tiny font-medium text-gray2   rounded-full leading-none bg-gray6 px-1 py-2.5">
                    +{otherLanguages.length - 4}
                  </span>
                  }
                </div>
              </div>
              <div
                className="mt-2 truncate-2 overflow-hidden min-h-[44px]"
                style={{ wordBreak: "break-word" }}
              >
                <span className=" text-sm font-bold text-gray2 break-all">
                  {teacher.teacher_description}
                </span>{" "}
                <span className=" text-sm font-medium  break-words text-gray3">
                  {teacher.teacher_me_as_a_teacher}
                </span>
              </div>
              <div className="flex items-center mt-4">
                <div className="flex flex-none whitespace-nowrap mr-4  items-center flex-row">
                  <span className=" text-gray1 font-bold text-base">
                    USD {teacher.trial_lesson_price}
                  </span>
                  <span className=" self-end">
                    <span className=" text-gray3 text-sm font-medium mx-1">
                      /
                    </span>
                    <span className=" text-gray3 text-sm font-medium">
                      trial
                    </span>
                  </span>
                </div>
                <div className="flex items-center flex-none"></div>
                <div className="flex-1"></div>
                <div className="flex flex-none items-center">
                  <TeacherFavButton />
                  <button
                    type="button"
                    className="ml-2 rounded-full tracking-wider font-bold py-1.5 px-4 transition-all cursor-pointer text-white bg-red2 hover:bg-red1 mt-auto text-sm"
                  >
                    <span>Book trial</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
}
