import React from "react";

export default function TeacherIntroMAT() {
  return (
    <div className="relative overflow-hidden">
      <div className="relative md:mt-6 h-[262px]">
        <div className="absolute left-0 right-0 top-0">
          <div className="h6 text-gray1">Me as a Teacher</div>
          <span className="block mt-3 small-secondary text-gray2 break-words whitespace-pre-wrap">
            Soy una persona apasionada por conectar con la gente! Soy muy
            paciente y dinámico a la hora de ayudar a mis alumnos y al
            corregirlos, etc. Si te interesa perfeccionar tu fluidez, mejorar tu
            comunicación con otras personas, o si necesitas prepararte para un
            viaje, yo te ayudare a lograrlo buscando una estrategia ideal para
            ti. I am passionate about connecting with people! I am very patient
            and dynamic when it comes to helping my students when I correct them
            etc. If you are interested in perfecting your fluency, improving
            your communication with other people, or if you need to prepare for
            a trip, I will help you achieve it by looking for an ideal strategy
            for you.
          </span>
        </div>
      </div>
      <div className="h-7 absolute left-0 right-0 bottom-0 flex flex-row justify-start items-end bg-white">
        <div className="z-10 h-5 flex justify-center items-center text-button text-link cursor-pointer">
          Show less
        </div>
        <div
          className="hidden h-20 absolute left-0 right-0 bottom-0"
          style={{
            background:
              "linear-gradient(to top, rgb(255, 255, 255), rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%)",
          }}
        ></div>
      </div>
    </div>
  );
}
