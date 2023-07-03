import { useScrollPosition } from "@/hooks";
import React from "react";
import List from "./List";
import Image from "next/image";
import { SVG } from "@/assets";

export default function TeacherHeader() {
  const scrollPosition = useScrollPosition();

  return (
    <div
      className="z-100 fixed left-0 top-0 flex items-center right-0 bg-white px-4 border-b overflow-x-auto border-bg1 transition-opacity h-[66px]"
      style={{ opacity: scrollPosition < 61 ? 0 : 1, display: scrollPosition < 30 ? 'none' : 'flex' }}
    >
      <div className="flex items-center mr-4">
        <span className="ant-avatar inline-flex rounded-full justify-center items-center mr-2 md:mr-4 w-10 h-10 ant-avatar-circle ant-avatar-image w-[40px] h-[40px] text-lg">
          <Image
            width={36}
            height={36}
            className="rounded-full"
            src="https://imagesavatar-static01.italki.com/1T095076430_Avatar.jpg"
            alt="Avatar"
          />
        </span>
        <div className="hidden text-xl font-medium text-gray1 md:block">
          Brandon Cerón
        </div>
      </div>

      <List
        items={[
          { name: "About Me" },
          { name: "Lessons" },
          { name: "Availability" },
          { name: "Reviews" },
        ]}
        childClasses="py-5 px-4"
      />

      <div className="hidden md:w-20 md:flex md:justify-end">
        <Image src={SVG.Fav} className="cursor-pointer mr-4" alt="Fav" />
        <Image src={SVG.Options} className="cursor-pointer" alt="Options" />
      </div>
    </div>
  );
}
