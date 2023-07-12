import { IMAGES, SERVICES_URL } from "@/const";
import { useTokenHandler } from "@/hooks";
import { LessonPostType, ServiceConfig } from "@/types";
import { authenticatedCall } from "@/utils";
import { Alert, Modal, Spin } from "antd";
import React, { useEffect, useState } from "react";

type SelectedType = {
  date: string;
  time: string;
};
type Props = {
  open: boolean;
  selectedDate: SelectedType | null;
  handleClose: () => void;
  lessons: LessonPostType[];
  fetchAvailability: (reload?: boolean) => Promise<void>;
};

export default function SelectLessonModal({
  open,
  handleClose,
  lessons,
  selectedDate,
  fetchAvailability,
}: Props) {
  const { setTokens, accessToken, refreshToken, clearTokens } =
    useTokenHandler();
  const [selectedLesson, setSelectedLesson] = useState<LessonPostType | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleScheduleLesson = async () => {
    if (!selectedLesson || !selectedDate) return;
    setLoading(true);
    const options: ServiceConfig = {
      method: "POST",
      url: SERVICES_URL,
      data: {
        procedure: "LessonIns",
        params: {
          datetime: selectedDate.date + " " + selectedDate.time,
          lesson_post_id: selectedLesson.lesson_post_id,
        },
      },
      headers: {
        authorization: accessToken,
        "refresh-token": refreshToken,
      },
    };
    const response = await authenticatedCall(options, setTokens, clearTokens);
    setLoading(false);
    if (response.code === 1) {
      fetchAvailability(true);
      handleClose();
    } else {
      setError(response.errmsg);
    }
  };

  useEffect(() => {
    if (!open) {
      setSelectedLesson(null);
      setError("");
    }
  }, [open]);

  if (!lessons || !lessons.length || !selectedDate) return;
  return (
    <Modal
      open={open}
      centered
      closeIcon={
        <img src={IMAGES.CloseMenu} alt="Close" onClick={handleClose} />
      }
      width={730}
      footer={
        <ModalFooter
          disabled={!selectedLesson}
          handleScheduleLesson={handleScheduleLesson}
        />
      }
      bodyStyle={{ margin: "-20px -24px 0" }}
    >
      <h2
        className="py-4 px-6 text-gray2 font-medium text-base"
        style={{ borderBottom: "1px solid #f0f0f0" }}
      >
        Select a lesson
      </h2>
      {loading ? (
        <Spin
          size="large"
          style={{ display: "block", margin: "auto", marginTop: "16px" }}
        />
      ) : (
        <div className="relative p-4 md:p-5 rounded-3 bg-white overflow-hidden md:shadow-panel">
          {lessons.map((lesson, index) => (
            <div key={index}>
              <div
                className={`p-3 rounded transition-all ${
                  selectedLesson?.lesson_post_id === lesson.lesson_post_id
                    ? "bg-gray5 hover:bg-gray5"
                    : "hover:bg-gray6 "
                }`}
                onClick={() => setSelectedLesson(lesson)}
              >
                <div className="flex cursor-pointer flex-col md:flex-row items-start md:items-center">
                  <div className="flex-1 mb-4 md:mb-0 mr-0 md:mr-4">
                    <div className="mb-2 font-bold text-base leading-6 text-gray1">
                      {lesson.lesson_post_title}
                    </div>
                    <div className="italic text-gray3 flex justify-start items-center w-full flex-wrap">
                      {lesson.language_level_code_from} -{" "}
                      {lesson.language_level_code_to}
                      <p className="mx-2 border-l bg-gray3 h-2 w-[1px]"></p>
                      {lesson.lesson_post_subtitle}
                      <p className="mx-2 border-l bg-gray3 h-2 w-[1px]"></p>
                      {lesson.total_lessons}{" "}
                      {lesson.total_lessons > 1 ? "lessons" : "lesson"}{" "}
                      completed
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end">
                    <div
                      className="px-4 py-1 text-base leading-6 font-bold text-red2 rounded-full"
                      style={{ background: "#FFF2F1" }}
                    >
                      USD {parseFloat(lesson.lesson_post_price).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
              {index < lessons.length - 1 && (
                <div className="bg-gray6 w-full mx-3 h-[1px] my-1"></div>
              )}
            </div>
          ))}
          {error && (
            <Alert type="error" message={error} style={{ marginTop: "16px" }} />
          )}
        </div>
      )}
    </Modal>
  );
}

type FooterProps = {
  handleScheduleLesson: () => Promise<void>;
  disabled: boolean;
};
const ModalFooter = ({ disabled, handleScheduleLesson }: FooterProps) => {
  if (!disabled) {
    return (
      <button
        type="button"
        disabled={disabled}
        onClick={handleScheduleLesson}
        className="rounded-lg tracking-wider font-bold py-2.5 px-4 transition-all cursor-pointer text-white bg-red2 hover:bg-red1 mt-auto"
      >
        <span>Book now</span>
      </button>
    );
  }
};
