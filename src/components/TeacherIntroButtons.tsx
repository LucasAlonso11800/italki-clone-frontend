import { IMAGES } from '@/const';
import React from "react";
import { TeacherFavButton } from ".";

export default function TeacherIntroButtons() {
  return (
    <div className="hidden md:flex absolute right-8 top-8 pt-1">
      <div className="flex items-center justify-center">
        <img src={IMAGES.Share} alt="share" />
      </div>
      <div className="cursor-pointer mx-4">
        <TeacherFavButton />
      </div>
      <img src={IMAGES.Options} alt="options" />
    </div>
  );
}
