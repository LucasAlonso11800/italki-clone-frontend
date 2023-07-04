import { IMAGES } from '@/const';
import { LessonPostType } from "@/types";
import { Modal } from "antd";
import React from "react";

type Props = {
  open: boolean;
  handleClose: () => void;
  lesson: LessonPostType | null;
};
export default function LessonModal({ open, handleClose, lesson }: Props) {
  if (!lesson) return;
  return (
    <Modal
      open={open}
      centered
      closeIcon={
        <img src={IMAGES.CloseMenu} alt="Close" onClick={handleClose} />
      }
      width={730}
      footer={<ModalFooter />}
      bodyStyle={{ margin: "-20px -24px" }}
    >
      <h2
        className="py-4 px-6 text-gray2 font-medium text-base"
        style={{ borderBottom: "1px solid #f0f0f0" }}
      >
        Lesson Details
      </h2>
      <div
        className="ant-modal-body px-6 py-4"
        style={{ maxHeight: "75vh", overflow: "auto" }}
      >
        <div className="mb-1 text-lg font-medium text-gray1">
          {lesson.lesson_post_title}
        </div>
        <div className="mb-5 text-tiny text-gray3">
          {lesson.total_lessons}{" "}
          {lesson.total_lessons === 1 ? "lesson" : "lessons"} taught
        </div>
        <div className="mb-5">
          <div className="mb-1 text-tiny font-light text-gray3 uppercase">
            Language
          </div>
          <div className="text-base text-gray1">{lesson.language_name}</div>
        </div>
        <div className="mb-5">
          <div className="mb-1 text-tiny font-light text-gray3 uppercase">
            Level
          </div>
          <div className="text-base text-gray1">
            <span>
              {lesson.language_level_code_from}&nbsp;-&nbsp;
              {lesson.language_level_code_to}
            </span>
          </div>
        </div>
        {/* <div className="mb-5">
          <div className="mb-1 text-tiny font-light text-gray3 uppercase">
            Category
          </div>
          <div className="text-base text-gray1">Conversation Practice</div>
        </div> */}
        <div className="mb-1 text-tiny font-light text-gray3 uppercase">
          Description
        </div>
        <div className="mb-8 text-sm leading-6 text-gray1 whitespace-pre-wrap">
          {lesson.lesson_post_description}
        </div>
        <div className="mb-1 text-tiny text-gray3 uppercase">Price</div>
        <div className="text-base text-gray1">
          {lesson.lesson_post_price} USD
        </div>

        <div className="flex items-center">
          <img src={IMAGES.Speaker} alt="speaker" />
          <div className="ml-3 text-sm text-gray1">
            Some teachers may include a 5 minute break in the lesson time
          </div>
        </div>
      </div>
    </Modal>
  );
}

const ModalFooter = () => {
  return (
    <button
      type="button"
      className="rounded-lg tracking-wider font-bold py-2.5 px-4 transition-all cursor-pointer text-white bg-red2 hover:bg-red1 mt-auto"
    >
      <span>Book now</span>
    </button>
  );
};
