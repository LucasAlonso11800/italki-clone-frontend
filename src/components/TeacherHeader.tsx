import { useScrollPosition } from "@/hooks";
import { Tabs } from "antd";
import React from "react";

export default function TeacherHeader() {
  const scrollPosition = useScrollPosition();

  return (
    <div className="nav_nav__bVkT7 z-100 fixed left-0 top-0 flex items-center right-0 bg-white px-4 border-b overflow-x-auto border-bg1 transition-opacity"
    style={{opacity: scrollPosition < 61 ? 0 : 1}}>
      <div className="flex items-center mr-4">
        <span className="ant-avatar inline-flex rounded-full justify-center items-center mr-2 md:mr-4 w-10 h-10 ant-avatar-circle ant-avatar-image w-[40px] h-[40px] text-lg">
          <img
            className="w-[36px] h-[36px] rounded-full"
            src="https://imagesavatar-static01.italki.com/1T095076430_Avatar.jpg"
            srcSet="https://imagesavatar-static01.italki.com/1T095076430_Avatar.jpg"
          />
        </span>
        <div className="hidden text-lg font-medium text-gray1 md:block">
          Brandon Cerón
        </div>
      </div>
      <div className="flex-center flex-auto">
        <Tabs className="ant-tabs-version2 ant-tabs-version2-top ant-tabs-version2-line">
          <Tabs.TabPane
            tab="About Me"
            key="about-me"
            className="ant-tabs-version2-tabpane ant-tabs-version2-tabpane-active"
          />
          <Tabs.TabPane
            tab="Lessons"
            key="lessons"
            className="ant-tabs-version2-tabpane ant-tabs-version2-tabpane-inactive"
          />
          <Tabs.TabPane
            tab="Availability"
            key="availability"
            className="ant-tabs-version2-tabpane ant-tabs-version2-tabpane-inactive"
          />
          <Tabs.TabPane
            tab="Reviews"
            key="reviews"
            className="ant-tabs-version2-tabpane ant-tabs-version2-tabpane-inactive"
          />
        </Tabs>
      </div>
      <div className="hidden md:w-20 md:flex md:justify-end">
        <div className="cursor-pointer mr-4">
          <svg
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#313140"
          >
            <path
              clip-rule="evenodd"
              d="M14.298 3.688a5.75 5.75 0 016.267 9.38s0-.001 0 0l-8.035 8.034a.75.75 0 01-1.06 0l-8.036-8.035a5.75 5.75 0 018.133-8.132l.433.433.433-.433a5.751 5.751 0 011.865-1.247zM16.5 4.75a4.25 4.25 0 00-3.005 1.245l-.964.964a.75.75 0 01-1.06 0l-.964-.964a4.25 4.25 0 10-6.011 6.011L12 19.511l7.505-7.505a4.25 4.25 0 00-3.006-7.256z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
        <svg
          fill="#313140"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          data-cy="tp_nav_about-more"
          className="transform duration-200 cursor-pointer"
        >
          <g>
            <circle cx="5" cy="12" r="1.5"></circle>
            <circle cx="12" cy="12" r="1.5"></circle>
            <circle cx="19" cy="12" r="1.5"></circle>
          </g>
        </svg>
      </div>
    </div>
  );
}
