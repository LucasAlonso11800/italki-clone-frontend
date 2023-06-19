import React from "react";

type Props = {
  language: string;
  lessons: {
    name: string;
    number: number;
    price: number;
  }[];
};

export default function TeacherLessons({ lessons, language }: Props) {
  return (
    <div id="lessons" className="mt-6">
      <div className="mb-4 flex flex-col md:flex-row md:justify-between md:items-center h5 text-gray1">
        <h2 className="mb-4 md:mb-0 h5 text-gray1">{language} Lessons</h2>
      </div>
      <div className="relative p-4 md:p-5 rounded-3 bg-white overflow-hidden md:shadow-panel">
        {lessons.map((lesson, index) => (
          <div key={index}>
            <div className="p-3 hover:bg-gray6 rounded transition-all">
              <div className="flex cursor-pointer flex-col md:flex-row items-start md:items-center">
                <div className="flex-1 mb-4 md:mb-0 mr-0 md:mr-4">
                  <div className="mb-2 font-bold text-base leading-6 text-gray1">
                    {lesson.name}
                  </div>
                  <div className="speech-italic text-gray3 flex justify-start items-center w-full flex-wrap">
                    {lesson.number} {lesson.number > 1 ? "lessons" : "lesson"}{" "}
                    completed
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end">
                  <div
                    className="px-4 py-1 text-base leading-6 font-bold text-red2 rounded-full"
                    style={{ background: "#FFF2F1" }}
                  >
                    USD {lesson.price.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
            {index < lessons.length - 1 && (
              <div className="bg-gray6 w-full mx-3 h-[1px] my-1"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
