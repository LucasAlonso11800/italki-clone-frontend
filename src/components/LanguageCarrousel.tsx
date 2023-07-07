import { ROUTES } from "@/const";
import { Carousel } from "antd";
import Link from "next/link";
import React from "react";
import CarouselItem from "./CarouselItem";

export default function LanguageCarrousel() {
  return (
    <div className="pt-8 mx-auto md:px-6 max-w-grid-12 pb-6 md:pb-8">
      <div
        style={{ border: "1px solid #E5E8ED" }}
        className="relative rounded-3 py-4 px-8 flex justify-end items-center max-w-grid-12"
      >
        <div className="absolute z-20 left-6 my-auto w-10 h-10 bg-gray6 rounded-full flex justify-center items-center cursor-pointer hover:shadow-hover flex items-center">
          <svg
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#313140"
          >
            <path
              clipRule="evenodd"
              d="M14.28 16.28a.75.75 0 000-1.06l-2.97-2.97 2.97-2.97a.75.75 0 00-1.06-1.06l-3.5 3.5a.75.75 0 000 1.06l3.5 3.5a.75.75 0 001.06 0z"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="z-20 absolute right-6 w-10 h-10 bg-gray6 rounded-full flex justify-center items-center cursor-pointer hover:shadow-hover hidden">
          <svg
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#313140"
          >
            <path
              clipRule="evenodd"
              d="M9.72 16.28a.75.75 0 010-1.06l2.97-2.97-2.97-2.97a.75.75 0 011.06-1.06l3.5 3.5a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 01-1.06 0z"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="asgardHP-lang-list sm:mx-1 overflow-auto">
          <Carousel dots={false} infinite={true} slidesToShow={4} autoplay autoplaySpeed={3000}arrows={false} prevArrow={<></>}>
            {Object.keys(ROUTES.teachers).map((lang) => lang !== 'russian' && lang !== 'korean' && lang !== 'arabic' && lang !== 'portuguese' && lang !== 'hindi' && (
              <CarouselItem
                key={lang}
                href={ROUTES.teachers[lang as keyof typeof ROUTES.teachers]}
                language={lang.at(0)?.toUpperCase() + lang.slice(1)}
                image={`https://scdn.italki.com/ng/static/image/asgardhp/${lang}.svg`}
              />
            ))}
          </Carousel>
        </div>
      </div>

      <div className="mt-8 max-w-grid-12 flex justify-center">
        <div>
          <div
            className="trustpilot-widget h-[28px] w-full relative"
            data-locale="en-US"
            data-theme="light"
            data-template-id="5406e65db0d04a09e042d5fc"
            data-businessunit-id="54b4878b0000ff00057caf0c"
            data-style-height="28px"
            data-style-width="100%"
          >
            <iframe
              title="Customer reviews powered by Trustpilot"
              loading="eager"
              src="https://widget.trustpilot.com/trustboxes/5406e65db0d04a09e042d5fc/index.html?templateId=5406e65db0d04a09e042d5fc&amp;businessunitId=54b4878b0000ff00057caf0c#locale=en-US&amp;theme=light&amp;styleHeight=28px&amp;styleWidth=100%25"
              className="relative h-[28px] w-full block overflow-hidden"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
