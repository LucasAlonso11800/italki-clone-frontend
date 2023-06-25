import React from "react";
import Image from "next/image";
import { SVG } from "@/assets";
import { ReviewType } from "@/types";
import { Avatar } from "antd";
import moment from "moment";
import { DATE_FORMAT } from "@/const";

type Props = {
  reviews: ReviewType[]
};

export default function TeacherReviews({ reviews }: Props) {
  return (
    <section id="reviews" className="mt-6">
      <div className="mb-4 flex flex-col md:flex-row md:justify-between md:items-center h5 text-gray1">
        <h2 className="mb-4 md:mb-0 h5 text-gray1">108 Reviews</h2>
      </div>

      <div className="flex flex-wrap justify-between rounded-3 overflow-hidden md:shadow-panelp-4 bg-transparent md:bg-white teacher-profile-reviews-list md:p-8 md:pb-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg pb-2 relative"
            style={{ width: "calc(50% - 4px)" }}
          >
            <div className="p-4 pb-2 bg-gray6">
              <div className="flex justify-between items-end mb-2">
                <section className="flex items-center">
                  <Avatar
                    src="https://imagesavatar-static01.italki.com/1T095076430_Avatar.jpg"
                    alt="teacher"
                    style={{ width: 40, height: 40, marginRight: '8px' }}
                  />
                  <section>
                    <div className="tiny-caption">{review.student_first_name} {review.student_last_name}</div>
                    <div className="tiny-caption text-gray3">
                      {review.student_total_lessons} Spanish {review.student_total_lessons === 1 ? 'lesson' : 'lessons'}
                    </div>
                  </section>
                </section>
              </div>

              {review.teacher_review_is_pick === "Y" && (
                <div className="absolute top-0 right-0 bg-info rounded-bl-lg text-white tiny-caption px-3 py-1">
                  Teacher’s pick
                </div>
              )}

              <div className="regular-body relative break-words whitespace-pre-wrap overflow-hidden tiny-caption text-gray2 break-words">
                {review.teacher_review_text}
              </div>
              <div className="text-tiny text-secondary3 mt-2">
                {moment(review.teacher_review_date).format(DATE_FORMAT)}
              </div>
            </div>
          </div>
        ))}

        <button className="mt-4 w-full flex justify-center items-center cursor-pointer px-4 py-2.5">
          <span className="font-bold text-gray2 text-sm tracking-wider">
            Show more
          </span>
          <Image src={SVG.ArrowDown} alt="down" />
        </button>
      </div>
    </section>
  );
}
