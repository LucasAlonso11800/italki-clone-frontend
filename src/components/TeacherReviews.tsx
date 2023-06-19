import { SVG } from "@/assets";
import { Button } from "antd";
import Image from "next/image";
import React from "react";

type Props = {
  reviews: {
    student: string;
    number: number;
    date: string;
    review: string;
    teacherPick: boolean;
  }[];
};

export default function TeacherReviews({ reviews }: Props) {
  return (
    <section id="reviews" className="mt-6">
      <div className="mb-4 flex flex-col md:flex-row md:justify-between md:items-center h5 text-gray1">
        <h2 className="mb-4 md:mb-0 h5 text-gray1">108 Reviews</h2>
      </div>

      <div className="flex flex-wrap justify-between rounded-3 overflow-hidden md:shadow-panelp-4 bg-transparent md:bg-white teacher-profile-reviews-list md:p-8 md:pb-4">
        {reviews.map((review) => (
          <div
            key={review.student}
            className="overflow-hidden rounded-lg pb-2 relative"
            style={{ width: "calc(50% - 4px)" }}
          >
            <div className="p-4 pb-2 bg-gray6">
              <div className="flex justify-between items-end mb-2">
                <section className="flex items-center">
                  {/* <span className="ant-avatar inline-flex justify-center items-center mr-2 ant-avatar-circle ant-avatar-image" style="width: 40px; height: 40px; line-height: 38px; font-size: 18px; border: 2px solid white;"><img src="https://imagesavatar-static01.italki.com/T086430890_Avatar.jpg" srcset="https://imagesavatar-static01.italki.com/T086430890_Avatar.jpg" alt="Student Alex Kopen" style="width: 36px; height: 36px;">
                                    <i className="ant-avatar-flag" 
                                    style="display: inline-block; background-size: contain; background-position: 50% center; background-repeat: no-repeat; border-radius: 50%; border: 2px solid white; right: 0px; width: 16px; height: 16px; background-image: url(&quot;https://scdn.italki.com/orion/static/flags/us.svg&quot;);">
                                    </i>
                                </span> */}
                  <section>
                    <div className="tiny-caption">{review.student}</div>
                    <div className="tiny-caption text-gray3">
                      {review.number} Spanish lessons
                    </div>
                  </section>
                </section>
              </div>

              {review.teacherPick && (
                <div className="absolute top-0 right-0 bg-info rounded-bl-lg text-white tiny-caption px-3 py-1">
                  Teacher’s pick
                </div>
              )}

              <div className="regular-body relative break-words whitespace-pre-wrap overflow-hidden tiny-caption text-gray2 break-words">
                {review.review}
              </div>
              <div className="text-tiny text-secondary3 mt-2">
                {review.date}
              </div>
            </div>
          </div>
        ))}

        <button className="mt-4 w-full flex justify-center items-center cursor-pointer px-4 py-2.5">
          <span className="font-bold text-gray2 text-sm tracking-wider">Show more</span>
          <Image src={SVG.ArrowDown} alt="down" />
        </button>
      </div>
    </section>
  );
}
