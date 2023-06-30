import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  text: string;
  linkText: string;
  href: string;
  image: string
};

export default function WhatItalkiOffersItem({
  title,
  text,
  linkText,
  href,
  image
}: Props) {
  return (
    <div className="ant-col ant-col-8 px-6">
      <div className="AgardHPBelow_SeeWhatOffersCard__tl_KK flex flex-col justify-center items-center space-y-2 text-center rounded-3 h-full py-6 px-4 md:bg-transparent md:py-0">
        <img
          className="felx-none lazyloaded rounded-full w-[250px] h-[160px]"
          loading="lazy"
          alt="1-on-1 language lessons"
          src={image}
        />
        <div className="felx-none pt-6 text-lg text-gray2 font-bold sm:text-base">
          {title}
        </div>
        <div className="felx-1 h-full text-gray3 text-sm">
          {text}
        </div>
        <div className="felx-none">
          <Link target="_blank" href={href}>
            <p className="ml-6 flex" data-cy="hp-wof-MHP008">
              <span className="text-sm font-extrabold leading-6" style={{color: "rgb(0, 179, 189)"}}>
                {linkText}
              </span>
              <svg
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                fill="#00B3BD"
              >
                <path
                  clip-rule="evenodd"
                  d="M9.72 16.28a.75.75 0 010-1.06l2.97-2.97-2.97-2.97a.75.75 0 011.06-1.06l3.5 3.5a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 01-1.06 0z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
