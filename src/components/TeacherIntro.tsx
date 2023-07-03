import React, { useMemo, useState } from "react";
import {
  TeacherIntroButtons,
  TeacherIntroMAT,
  TeacherIntroAboutMe,
  TeacherIntroTeachingStyle,
  List,
  LanguageLevel,
} from ".";
import { Avatar } from "antd";
import { GenderType, LanguageType, YesOrNoType } from "@/types";
import Image from "next/image";

type Props = {
  country_name: string;
  teacher_birthdate: string;
  teacher_description: string;
  teacher_about_me: string;
  teacher_me_as_a_teacher: string;
  teacher_teaching_style: string;
  teacher_first_name: string;
  teacher_gender: GenderType;
  teacher_image: string | null;
  teacher_last_name: string;
  teacher_professional: YesOrNoType;
  teacher_startdate: string;
  teacher_video: string | null;
  teacher_living_in: string;
  teacher_languages: LanguageType[];
  country_image: string
};

export default function TeacherIntro(props: Props) {
  const ITEMS = [
    { name: "About Me" },
    { name: "Me as a Teacher" },
    { name: "My Lessons & Teaching Style" },
  ];
  const [selected, setSelected] = useState<string>(ITEMS[0].name);

  const section = useMemo(() => {
    switch (selected) {
      case ITEMS[0].name:
        return (
          <TeacherIntroAboutMe
            text={props.teacher_about_me}
            startdate={props.teacher_startdate}
            country={props.country_name}
            livingIn={props.teacher_living_in}
          />
        );
      case ITEMS[1].name:
        return <TeacherIntroMAT text={props.teacher_me_as_a_teacher} />;
      default:
        return (
          <TeacherIntroTeachingStyle text={props.teacher_teaching_style} />
        );
    }
  }, [selected]);

  return (
    <section
      id="about-me"
      className="relative mt-0 md:mt-6 p-4 md:p-8 rounded-3 bg-white overflow-hidden md:shadow-panel min-[200px]"
    >
      {/* Intro */}
      <div className="mb-4 md:mb-0 flex flex-row">
        <div className="md:w-20 mr-4 md:mr-6 flex-none">
          <span
            className="ant-avatar inline-flex justify-center items-center ant-avatar-circle ant-avatar-image w-20 h-20 text-lg relative"
            style={{ border: "2px solid white" }}
          >
            <Avatar
              src={props.teacher_image || "https://imagesavatar-static01.italki.com/1T095076430_Avatar.jpg"}
              alt="teacher"
              style={{ width: 76, height: 76 }}
            />
            <i
              className="ant-avatar-flag inline-block bg-contain bg-no-repeat right-0 w-6 h-6 absolute bottom-0"
              style={{
                backgroundPosition: "50% center",
                borderRadius: "50%",
                border: "2px solid white",
                backgroundImage: `url(${props.country_image}.svg)`,
              }}
            ></i>
          </span>
          <div className="hidden md:block mt-2 text-center tiny-caption">
            <div className="flex flex-row justify-center items-center text-secondary2">
              <div className="mr-1 rounded-full w-2 h-2 bg-success"></div>Online
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex flex-row items-start pr-[120xp]">
            <h1 className="break-words h4">
              {props.teacher_first_name} {props.teacher_last_name}
            </h1>
            <div className="flex justify-start items-center h-8">
              <div className="w-6 h-6 flex justify-center items-center ml-2">
                <Image
                  height={14}
                  width={14}
                  className="flex-none ls-is-cached lazyloaded"
                  loading="lazy"
                  alt="Verify"
                  src="https://scdn.italki.com/ng/static/image/teacherSearch/verify_icon.svg"
                />
              </div>
            </div>
          </div>
          <div className="md:mb-4 flex flex-row items-center tiny-caption text-gray3 uppercase">
            {props.teacher_professional === "Y"
              ? "Community Tutor"
              : "Professional Teacher"}
          </div>
          <div className="hidden md:flex flex-col">
            <div className="mb-4 md:flex">
              <div className="tiny-caption text-gray3 whitespace-nowrap md:mr-2 md:leading-5dot5 min-w-[56px]">
                Teaches
              </div>
              {props.teacher_languages
                .filter((lang) => lang.teacher_teaches === "Y")
                .map((lang) => (
                  <div className="flex regular-body flex-wrap space-y-1 md:space-y-0" key={lang.language_id}>
                    <div className="flex mr-2 items-center">
                      <span className="small-secondary text-gray1">
                        {lang.language_name}
                      </span>
                      {lang.language_level_code === "N" ? (
                        <div className="h-5 px-2 rounded-3 flex justify-center items-center self-center tiny-caption text-info bg-bgInfo ml-1">
                          {lang.language_level_name}
                        </div>
                      ) : (
                        <LanguageLevel code={lang.language_level_code} name={lang.language_level_name}/>
                      )}
                    </div>
                  </div>
                ))}
            </div>
            <div className="md:flex">
              <div className="tiny-caption text-gray3 whitespace-nowrap md:mr-2 md:leading-5dot5 min-w-[56px]">
                Speaks
              </div>
              {props.teacher_languages
                .filter((lang) => lang.teacher_teaches === "N")
                .map((lang) => (
                  <div className="flex regular-body flex-wrap space-y-1 md:space-y-0" key={lang.language_id}>
                    <div className="flex mr-2 items-center">
                      <span className="small-secondary text-gray1">
                        {lang.language_name}
                      </span>
                      <LanguageLevel code={lang.language_level_code} name={lang.language_level_name}/>
                    </div>
                  </div>
                ))}
            </div>
            <div className="mt-3">
              <span className="font-medium text-gray2 text-sm break-words">
                {props.teacher_description}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <TeacherIntroButtons />

      {/* Description, teaching style */}
      <List
        items={ITEMS}
        classes="justify-start md:mt-6"
        childClasses="py-3.5 px-2"
        selected={selected}
        setSelected={setSelected}
      />
      {section}
    </section>
  );
}
