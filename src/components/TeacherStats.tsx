import { IMAGES } from '@/const';
import React from "react";

type Props = {
  rating: string;
  students: number;
  lessons: number;
};

export default function TeacherStats(props: Props) {
  const { rating, students, lessons } = props;
  return (
    <div className="relative">
      {/* Desktop */}
      <div className="hidden md:flex mt-6 p-4 rounded-3 flex-row justify-between items-start bg-white md:shadow-panel overflow-hidden">
        <div className="flex flex-col flex-1 justify-center items-center">
          <div className="mb-2 flex flex-row items-center h4 text-title">
            <img src={IMAGES.Star} alt="star" />
            <div className="text-warning leading-8">{parseFloat(rating).toFixed(2)}</div>
          </div>
          <div className="small-secondary text-gray3 break-words text-center">
            Rating
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center">
          <div className="mb-2 flex flex-row items-center h4 text-title">
            {students}
          </div>
          <div className="small-secondary text-gray3 break-words text-center">
            Students
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center">
          <div className="mb-2 flex flex-row items-center h4 text-title">
            {lessons}
          </div>
          <div className="small-secondary text-gray3 break-words text-center">
            Lessons
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden relative left-0 top-0 ml-auto mt-4 p-3 rounded-3 flex-row justify-start items-start bg-white overflow-x-auto hide-scrollbar pr-1">
        <div className="w-1/4 flex flex-none flex-col justify-center items-center sticky left-0 top-0 bg-white">
          <div className="mb-2 flex flex-row items-center h5 text-title">
            <img src={IMAGES.Star} alt="star" />
            <div className="text-warning leading-2">{parseFloat(rating).toFixed(2)}</div>
          </div>
          <div className="tiny-caption text-gray3 break-words text-center">
            Rating
          </div>
        </div>
        <div className="w-1/4 flex flex-none flex-col justify-center items-center">
          <div className="mb-2 flex flex-row items-center h5 text-title">
            {students}
          </div>
          <div className="tiny-caption text-gray3 break-words text-center">
            Students
          </div>
        </div>
        <div className="w-1/4 flex flex-none flex-col justify-center items-center">
          <div className="mb-2 flex flex-row items-center h5 text-title">
            {lessons}
          </div>
          <div className="tiny-caption text-gray3 break-words text-center">
            Lessons
          </div>
        </div>
      </div>

      <div className="block md:hidden w-4 rounded-tr-3 rounded-br-3 absolute top-0 bottom-0 bg-white shadow-popup block -right-1"></div>
    </div>
  );
}
