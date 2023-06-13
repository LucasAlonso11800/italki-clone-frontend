import { SVG } from "@/assets";
import Image from "next/image";
import React from "react";

export default function TeacherIntroButtons() {
  return (
    <div className="hidden md:flex absolute right-8 top-8 pt-1">
      <div className="flex items-center justify-center">
        <Image src={SVG.Share} alt="share" />
      </div>
      <div className="cursor-pointer mx-4">
        <Image src={SVG.Fav} alt="fav" />
      </div>
      <Image src={SVG.Options} alt="options" />
    </div>
  );
}
