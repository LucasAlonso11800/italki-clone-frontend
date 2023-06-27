import { SVG } from "@/assets";
import Image from "next/image";
import React from "react";

type Props = {
  language: string;
};

export default function TeacherPageBanner({ language }: Props) {
  return (
    <div id="teacher-banner" className="ant-row">
      <div className="ant-col ant-col-24 bg-white">
        <div className="pt-10 px-4 pb-6 flex justify-between items-center">
          <div className="bg-white">
            <h1 className="cursor-default font-bold text-[40px] leading-10 text-gray1">
              The best
              <span className="capitalize px-2 text-red2">{language}</span>
              tutor for you
            </h1>
            <div className="cursor-default font-medium text-base text-gray2 leading-6 mt-2">
              Looking for a great way to improve your {language}? italki
              provides you with qualified {language} teachers. Hire an online{" "}
              {language} tutor to help you learn {language}.
            </div>
          </div>
          <Image
            alt="banner"
            height={150}
            width={180}
            className="mt-4"
            src={SVG.TeacherPageBannerLogo}
          />
        </div>
      </div>
    </div>
  );
}
