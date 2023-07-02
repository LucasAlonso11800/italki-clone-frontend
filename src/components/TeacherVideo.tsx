import { SVG } from "@/assets";
import Image from "next/image";
import React from "react";

export default function TeacherVideo() {
  return (
    <div className="hidden md:w-5/12 lg:w-4/12 pb-6 md:block">
      <div className="sticky pl-4 mt-0 md:mt-6 top-20">
        <div className="mt-6 bg-white rounded-t-3 overflow-hidden">
          <div className="video-player h-full w-full">
            <div className="flex items-center relative w-full h-full overflow-hidden">
              <Image
                width="3200"
                height="1800"
                className="w-full h-auto"
                src="https://ofs-cdn.italki.com/u/9507643/cover/c5eeef69psq5ga77kdr0.jpg"
                alt=""
              />
              <div className="absolute top-0 left-0 right-0 bottom-0">
                <div className="absolute top-0 left-0 right-0 bottom-0 cursor-pointer ">
                  <Image
                    src={SVG.VideoPlay}
                    alt="play"
                    className="absolute w-12 h-12"
                    style={{
                      bottom: "6%",
                      left: "4%",
                      width: "56px",
                      height: "56px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow-panel px-3 pt-4 py-6 rounded-b-3">
          <div className="flex justify-between items-start hover:bg-gray6 rounded-dot5 px-3 py-2 mb-2 cursor-pointer">
            <div>
              <div className="h5">
                <div className="flex items-center">
                  <div className="mr-1">Trial Lesson</div>
                  <div className="cursor-pointer">
                    <Image
                      id="icon_help_sml"
                      src="https://scdn.italki.com/ng/static/image/teacher/icon_help_sml.svg"
                      width="24"
                      height="24"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-xl font-bold text-gray1">USD 5.00</div>
          </div>
          <div className="px-3">
            <button
              type="button"
              className="block w-full rounded-lg tracking-wider font-bold py-2.5 px-4 transition-all cursor-pointer text-white bg-red2 hover:bg-red1 mb-4"
            >
              <span>Book lesson</span>
            </button>
            <button
              type="button"
              className="block w-full rounded-lg tracking-wider font-bold py-2.5 px-4 transition-all cursor-pointer text-gray2 bg-gray6 hover:bg-gray5"
            >
              <span>Contact teacher</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
