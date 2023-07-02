import { SVG } from "@/assets";
import Image from "next/image";
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
        <Image
          className="felx-none lazyloaded rounded-full"
          loading="lazy"
          alt="1-on-1 language lessons"
          src={image}
          width={250}
          height={160}
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
              <Image src={SVG.ArrowRight} alt="right" />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
