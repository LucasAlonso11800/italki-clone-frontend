import React, { useState } from "react";
import { TeacherIntroButtons } from ".";
import { Avatar, Tabs } from "antd";
import TeacherIntroAboutMe from "./TeacherIntroAboutMe";

export default function TeacherIntro() {
  const [section, setSection] = useState<
    "about-me" | "me-as-teacher" | "teaching-style"
  >("about-me");

  return (
    <div className="relative mt-0 md:mt-6 p-4 md:p-8 rounded-3 bg-white overflow-hidden md:shadow-panel min-[200px]">
      {/* Intro */}
      <div className="mb-4 md:mb-0 flex flex-row">
        <div className="md:w-20 mr-4 md:mr-6 flex-none">
          <span
            className="ant-avatar inline-flex justify-center items-center ant-avatar-circle ant-avatar-image w-20 h-20 text-lg relative"
            style={{ border: "2px solid white" }}
          >
            <Avatar
              src="https://imagesavatar-static01.italki.com/1T095076430_Avatar.jpg"
              alt="teacher"
              style={{ width: 76, height: 76 }}
            />
            <i
              className="ant-avatar-flag inline-block bg-contain bg-no-repeat right-0 w-6 h-6 absolute bottom-0"
              style={{
                backgroundPosition: "50% center",
                borderRadius: "50%",
                border: "2px solid white",
                backgroundImage: `url("https://scdn.italki.com/orion/static/flags/mx.svg")`,
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
            <h1 className="break-words h4">Brandon Cerón</h1>
            <div className="flex justify-start items-center h-8">
              <div className="w-6 h-6 flex justify-center items-center ml-2">
                <img
                  height="14"
                  width="14"
                  className="flex-none ls-is-cached lazyloaded"
                  data-src="https://scdn.italki.com/ng/static/image/teacherSearch/verify_icon.svg"
                  loading="lazy"
                  alt=""
                  src="https://scdn.italki.com/ng/static/image/teacherSearch/verify_icon.svg"
                />
              </div>
            </div>
          </div>
          <div className="md:mb-4 flex flex-row items-center tiny-caption text-gray3 uppercase">
            Community Tutor
          </div>
          <div className="hidden md:flex flex-col">
            <div className="mb-4 md:flex">
              <div className="tiny-caption text-gray3 whitespace-nowrap md:mr-2 md:leading-5dot5 min-w-[56px]">
                Teaches
              </div>
              <div className="flex regular-body flex-wrap space-y-1 md:space-y-0">
                <div className="flex mr-2 items-center">
                  <span className="small-secondary text-gray1">Spanish</span>
                  <div className="h-5 px-2 rounded-3 flex justify-center items-center self-center tiny-caption text-info bg-bgInfo ml-1">
                    Native
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex">
              <div className="tiny-caption text-gray3 whitespace-nowrap md:mr-2 md:leading-5dot5 min-w-[56px]">
                Speaks
              </div>
              <div className="flex regular-body flex-wrap space-y-1 md:space-y-0">
                <div className="flex mr-2 items-center">
                  <span className="small-secondary text-gray1">English</span>
                  <div className="self-center ml-1 h-[8px]">
                    <div className="flex flex-row items-center h-[8px]">
                      <span className="rounded-1 bg-success h-[8px] w-[2px] ml-0"></span>
                      <span className="rounded-1 bg-success h-[8px] w-[2px] ml-[2px]"></span>
                      <span className="rounded-1 bg-success h-[8px] w-[2px] ml-[2px]"></span>
                      <span className="rounded-1 bg-success h-[8px] w-[2px] ml-[2px]"></span>
                      <span className="rounded-1 bg-success h-[8px] w-[2px] ml-[2px]"></span>
                      <span className="rounded-1 bg-gray5 h-[8px] w-[2px] ml-[2px]"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <span className="font-medium text-gray2 text-sm break-words">
                Bilingual, positive, fun, patient, knowledgeable, good internet
                connection. Let's have fun!
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <TeacherIntroButtons />

      {/* Description, teaching style */}
      <div
        id="readmore"
        className="mt-4 md:mt-6 pt-4 md:pt-0 border-t md:border-t-0"
      >
        <Tabs className="ant-tabs-version2 ant-tabs-version2-top ant-tabs-version2-line">
          <Tabs.TabPane
            tab="About Me"
            key="about-me"
            className="ant-tabs-version2-tabpane ant-tabs-version2-tabpane-active"
          >
            {/* <div
              tabIndex={0}
              role="presentation"
              style={{
                width: "0px",
                height: "0px",
                overflow: "hidden",
                position: "absolute",
              }}
            ></div>
            <div
              tabIndex={0}
              role="presentation"
              style={{
                width: "0px",
                height: "0px",
                overflow: "hidden",
                position: "absolute",
              }}
            ></div> */}
          </Tabs.TabPane>
          <Tabs.TabPane
            tab="Me as a Teacher"
            key="me-teacher"
            className="ant-tabs-version2-tabpane ant-tabs-version2-tabpane-inactive"
          ></Tabs.TabPane>
          <Tabs.TabPane
            tab="My Lessons &amp; Teaching Style"
            key="lessons-teaching"
            className="ant-tabs-version2-tabpane ant-tabs-version2-tabpane-inactive"
          ></Tabs.TabPane>
        </Tabs>
      </div>

      {section === 'about-me' && 
        <TeacherIntroAboutMe />
      }
    </div>
  );
}
