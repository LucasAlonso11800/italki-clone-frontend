import React, { useState } from "react";

export default function TeacherIntroAboutMe() {
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = () => setOpen(!open);

  return (
    <div className="relative overflow-hidden">
      <div
        className={`relative md:mt-6 ${open ? "max-h-auto" : "max-h-[250px]"}`}
      >
        <div className="flex flex-col tiny-caption text-gray2">
          <span>From Mexico</span>
          <span>
            Living in Mexico City, Mexico &nbsp;
            <span className="tiny-caption text-gray2">(07:54, UTC 06:00)</span>
          </span>
        </div>
        <div className="mt-4">
          <div className="h6 text-gray1 flex flex-col md:flex-row justify-between md:items-center">
            <div>About Me</div>
            <span className="mt-2 md:mt-0 tiny-caption text-gray3">
              italki teacher since Jul 28, 2021
            </span>
          </div>
          <span className="block mt-3 small-secondary text-gray2 break-words whitespace-pre-wrap">
            Hola! Soy Brandon, vivo en la Ciudad de México y estoy muy
            emocionado de estar aquí en Italki para ayudarte a lograr tus metas
            aprendiendo el idioma español. Amo aprender todo lo que puedo sobre
            el mundo en el que vivimos, la gente en el y compartir el
            conocimiento.
            <br />
            <br />
            Hi! My name is Brandon, I live in Mexico City and I'm so excited to
            be here in Italki to help you achieve your goals by learning the
            spanish language. I love learning all I can about the world we live
            in and the people in it and sharing acknowledge.
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
