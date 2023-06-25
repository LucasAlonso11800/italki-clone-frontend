import React, { useState } from "react";

type Props = {
  text: string
};

export default function TeacherIntroTeachingStyle({text}: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = () => setOpen(!open);

  return (
    <div className="relative overflow-hidden">
      <div className={`relative md:mt-6 ${open ? 'max-h-auto' : 'max-h-[250px]'}`}>
          <div className="mb-4">
            <div className="h6 text-gray1">My lessons &amp; teaching style</div>
            <span className="block mt-3 small-secondary text-gray2 break-words whitespace-pre-wrap">
              {text}
            </span>
          </div>
          <div className="mb-4">
            <div className="h6 text-gray1">My teaching material</div>
            <div className="block mt-3 small-secondary text-gray2 break-words whitespace-pre-wrap">
              <ul className="pl-6 list-disc">
                <li>Audio files</li>
                <li>Image files</li>
                <li>Video files</li>
                <li>Flashcards</li>
              </ul>
            </div>
          </div>
      </div>
      <div className="h-7 left-0 right-0 bottom-0 flex flex-row justify-start items-end bg-white">
        <div className="z-10 h-5 flex justify-center items-center text-button text-link cursor-pointer" onClick={handleClick}>
          {open ? 'Show less' : 'Read more'}
        </div>
        <div
          className={`${open ? 'hidden' : 'block'} h-20 absolute left-0 right-0 bottom-0`}
          style={{
            background:
              "linear-gradient(to top, rgb(255, 255, 255), rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%)",
          }}
        ></div>
      </div>
    </div>
  );
}
