import { IMAGES } from '@/const';
import React from "react";

export default function TeacherFavButton() {
  return (
    <button
      type="button"
      className="ant-btn cursor-pointer ant-btn-default ant-btn-circle ant-btn-sm"
    >
      <img src={IMAGES.Fav} className="w-[24px] h-[24px]" alt="fav"/>
    </button>
  );
}
