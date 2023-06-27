import { SVG } from "@/assets";
import Image from "next/image";
import React from "react";

export default function TeacherFavButton() {
  return (
    <button
      type="button"
      className="ant-btn cursor-pointer ant-btn-default ant-btn-circle ant-btn-sm"
    >
      <Image src={SVG.Fav} width={24} height={24} alt="fav"/>
    </button>
  );
}
