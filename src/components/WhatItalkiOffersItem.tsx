import { IMAGES } from '@/const';
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  text: string;
  linkText: string;
  href: string;
  image: string;
};

export default function WhatItalkiOffersItem({
  title,
  text,
  linkText,
  href,
  image,
}: Props) {
  return (
    <div className="ant-col ant-col-8 px-6">
      <div className="AgardHPBelow_SeeWhatOffersCard__tl_KK flex flex-col justify-center items-center space-y-2 text-center rounded-3 h-full py-6 px-4 md:bg-transparent md:py-0">
        <img
          className="felx-none w-[250px] h-[160px] lazyloaded rounded-full"
          loading="lazy"
          alt="1-on-1 language lessons"
          src={image}
        />
        <div className="felx-none pt-6 text-lg text-gray2 font-bold sm:text-base">
          {title}
        </div>
        <div className="felx-1 h-full text-gray3 text-sm">{text}</div>
        <div className="felx-none">
          <Link target="_blank" href={href}>
            <p className="ml-6 flex items-center">
              <span
                className="text-sm font-extrabold leading-6"
                style={{ color: "rgb(0, 179, 189)" }}
              >
                {linkText}
              </span>
              <img src={IMAGES.ArrowRight} alt="right" />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
