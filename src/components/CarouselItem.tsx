import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  image: string;
  language: string;
};
export default function CarouselItem({ href, image, language }: Props) {
  return (
    <div style={{ width: "156px" }}>
      <Link href={href} target="_blank" style={{ width: "156px" }}>
        <div
          style={{ width: "156px" }}
          className="hp-language-item relative h-14 shrink-0 mr-4 pl-4 cursor-pointer rounded-3 flex flex-nowrap items-center hover-"
        >
          <img
            className="w-[32px] h-[32px] inline-block mr-2 rounded-2"
            style={{ background: "#FFCCC9", border: "none" }}
            src={image}
            alt={language}
          />
          <div className="flex flex-col">
            <span className="text-sm font-bold">{language}</span>
            <span
              className="text-gray3 font-medium text-tiny shrink-0"
              style={{ lineHeight: "18px" }}
            >
              {language} Teachers
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
