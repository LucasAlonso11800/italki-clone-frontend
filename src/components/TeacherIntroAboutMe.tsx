import { DATE_FORMAT } from "@/const";
import React, { useState } from "react";
import moment from 'moment';

type Props = {
  text: string;
  startdate: string;
  country: string
}
export default function TeacherIntroAboutMe({startdate, text, country}: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = () => setOpen(!open);

  return (
    <div className="relative overflow-hidden">
      <div
        className={`relative md:mt-6 ${open ? "max-h-auto" : "max-h-[250px]"}`}
      >
        <div className="flex flex-col tiny-caption text-gray2">
          <span>From {country}</span>
          <span>
            Living in Mexico City, Mexico &nbsp;
            <span className="tiny-caption text-gray2">(07:54, UTC 06:00)</span>
          </span>
        </div>
        <div className="mt-4">
          <div className="h6 text-gray1 flex flex-col md:flex-row justify-between md:items-center">
            <div>About Me</div>
            <span className="mt-2 md:mt-0 tiny-caption text-gray3">
              italki teacher since {moment(startdate).format(DATE_FORMAT)}
            </span>
          </div>
          <span className="block mt-3 small-secondary text-gray2 break-words whitespace-pre-wrap">
            {text}
            <br />
            <br />
            Same in english
          </span>
        </div>
      </div>
      <div className="h-7 left-0 right-0 bottom-0 flex flex-row justify-start items-end bg-white">
        <div
          className="z-10 h-5 flex justify-center items-center text-button text-link cursor-pointer"
          onClick={handleClick}
        >
          {open ? "Show less" : "Read more"}
        </div>
        <div
          className={`${
            open ? "hidden" : "block"
          } h-20 absolute left-0 right-0 bottom-0`}
          style={{
            background:
              "linear-gradient(to top, rgb(255, 255, 255), rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%)",
          }}
        ></div>
      </div>
    </div>
  );
}
