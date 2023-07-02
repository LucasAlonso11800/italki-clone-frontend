import Image from "next/image";
import React from "react";

export default function HomePageBanner() {
  return (
    <div
      className="bg-white pt-4 pb-6 md:pt-12 md:pb-8"
      style={{ borderTop: "1px solid #F5F6F9" }}
    >
      <div className="flex m-auto max-w-grid-12 flex-col sm:flex-row md:px-6">
        <div className="flex flex-col flex-1">
          <h1 className=" font-bold sm:text-5xl text-gray1 text-2xl text-center sm:text-left" style={{lineHeight: "60px"}}>
            Become fluent in any language
          </h1>
          <ul className="list-none space-y-1 font-medium text-sm text-gray2 mt-7">
            <li className="flex items-center">
              <div className="shrink-0 mr-3">
                <Image
                  height="12"
                  width="12"
                  className=" "
                  src="https://scdn.italki.com/ng/static/image/asgardhp/redx2.png"
                  alt=""
                />
              </div>
              <span>
                Take customizable 1-on-1 lessons trusted by millions of users
              </span>
            </li>
            <li className="flex items-center">
              <div className="shrink-0 mr-3">
                <Image
                  height="12"
                  width="12"
                  className=" "
                  src="https://scdn.italki.com/ng/static/image/asgardhp/redx2.png"
                  alt=""
                />
              </div>
              <span>
                Learn from certified teachers that fit your budget and schedule
              </span>
            </li>
            <li className="flex items-center">
              <div className="shrink-0 mr-3">
                <Image
                  height="12"
                  width="12"
                  className=" "
                  src="https://scdn.italki.com/ng/static/image/asgardhp/redx2.png"
                  alt=""
                />
              </div>
              <span>Connect with a global community of language learners</span>
            </li>
          </ul>
          <button
            type="button"
            className="w-50 rounded-lg tracking-wider font-bold py-2.5 px-4 transition-all cursor-pointer text-white bg-red2 hover:bg-red1 mt-5"
          >
            <span className="text-sm">Start Now</span>
          </button>
        </div>
        <div className="flex-1 flex justify-end">
          <Image
            height="360"
            width="560"
            className=" "
            src="https://scdn.italki.com/ng/static/image/asgardhp/hp_cover_w.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
