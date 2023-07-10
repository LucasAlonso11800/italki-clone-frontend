import { API_BASE_URL, API_ROUTES, IMAGES } from "@/const";
import { TeacherAvailabilityType, WeekDayType } from "@/types";
import { getWeekLimits } from "@/utils";
import { Button, Spin } from "antd";
import axios from "axios";
import moment from "moment";
import React, { useCallback, useEffect, useMemo, useState } from "react";

type Props = {
  teacherId: number;
  availability: TeacherAvailabilityType[];
};

export default function TeacherAvailability(props: Props) {
  const [availability, setAvailability] = useState<TeacherAvailabilityType[][]>(
    [props.availability]
  );
  const [offset, setOffset] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const ranges = [
    ["00:00", "04:00"],
    ["04:00", "08:00"],
    ["08:00", "12:00"],
    ["12:00", "16:00"],
    ["16:00", "20:00"],
    ["20:00", "24:00"],
  ];

  const weekLimits = useMemo(() => getWeekLimits(offset), [offset]);

  const getAvailableRanges = (day: WeekDayType) => {
    return ranges.map((range, index) => {
      let classes = "small-schedule-cell";
      const hasAvailability = availability[offset]?.some((a) => {
        if (a.teacher_availability_end_time === "00:00") {
          a.teacher_availability_end_time = "24:00";
        }
        return (
          a.teacher_availability_day_of_week === day &&
          a.teacher_availability_start_time >= range[0] &&
          a.teacher_availability_end_time <= range[1] &&
          !a.is_booked
        );
      });
      if (hasAvailability) classes = classes.concat(" green-bg");
      return <div className={classes} key={index}></div>;
    });
  };

  const fetchAvailability = useCallback(async () => {
    try {
      if (availability[offset]) return;
      setLoading(true);
      const availabilityURL = `${API_BASE_URL}/${
        API_ROUTES.teacher.availability
      }?teacher_id=${props.teacherId.toString()}&date_from=${
        weekLimits.start
      }&date_to=${weekLimits.end}`;
      const teacherAvailability = await (await axios.get(availabilityURL)).data;

      setAvailability([...availability, teacherAvailability.result]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [props, weekLimits]);

  useEffect(() => {
    fetchAvailability();
  }, [fetchAvailability]);

  const handleButtonBack = () => {
    if (offset === 0) return;
    setOffset(offset - 1);
  };

  const handleButtonNext = () => {
    if (offset === 52) return;
    setOffset(offset + 1);
  };

  return (
    <div className="mt-6">
      <div className="flex w-full">
        <h2 className="mb-4 flex flex-col md:flex-row md:justify-between md:items-center h5 text-gray1 mr-auto">
          Availability
        </h2>
        <Button
          className="rotate-180 mr-4 rounded-full transition-all cursor-pointer bg-white hover:bg-gray5"
          onClick={handleButtonBack}
          disabled={offset <= 0}
        >
          <img src={IMAGES.ArrowRight} />
        </Button>
        <Button
          className="rounded-full transition-all cursor-pointer bg-white hover:bg-gray5"
          onClick={handleButtonNext}
          disabled={offset >= 52}
        >
          <img src={IMAGES.ArrowRight} />
        </Button>
      </div>

      <div className="relative p-4 md:p-8 rounded-3 bg-white overflow-hidden md:shadow-panel">
        {loading ? (
          <div className="flex items-center justify-center min-h-[196px]">
            <Spin size="large" />
          </div>
        ) : (
          <div className="small-schedule relative cursor-pointer min-h-[196px]">
            <div className="w-full mb-3 md:mb-2 flex flex-col flex-nowrap justify-center">
              <div className="flex flex-row flex-1 items-center tiny-caption text-gray2 pl-[92px]">
                <div className="flex flex-col flex-1 justify-center items-center text-center">
                  <div>Mon</div>
                  <div>{moment(weekLimits.start).date()}</div>
                </div>
                <div className="flex flex-col flex-1 justify-center items-center text-center">
                  <div>Tue</div>
                  <div>{moment(weekLimits.start).add(1, "day").date()}</div>
                </div>
                <div className="flex flex-col flex-1 justify-center items-center text-center">
                  <div>Wed</div>
                  <div>{moment(weekLimits.start).add(2, "day").date()}</div>
                </div>
                <div className="flex flex-col flex-1 justify-center items-center text-center">
                  <div>Thu</div>
                  <div>{moment(weekLimits.start).add(3, "day").date()}</div>
                </div>
                <div className="flex flex-col flex-1 justify-center items-center text-center">
                  <div>Fri</div>
                  <div>{moment(weekLimits.start).add(4, "day").date()}</div>
                </div>
                <div className="flex flex-col flex-1 justify-center items-center text-center">
                  <div>Sat</div>
                  <div>{moment(weekLimits.start).add(5, "day").date()}</div>
                </div>
                <div className="flex flex-col flex-1 justify-center items-center text-center">
                  <div>Sun</div>
                  <div>{moment(weekLimits.start).add(6, "day").date()}</div>
                </div>
              </div>
            </div>
            <div className="small-schedule-hours flex h-[196px]">
              <div
                className="small-schedule-range flex flex-col items-center rounded-l w-24"
                style={{
                  border: "1px solid rgb(229, 232, 237)",
                  borderRight: "none",
                }}
              >
                {ranges.map((range, index) => (
                  <p
                    key={index}
                    className="flex-1 flex text-tiny font-light text-gray2 items-center justify-center"
                  >
                    {range[0].slice(0, 2)} - {range[1].slice(0, 2)}
                  </p>
                ))}
              </div>
              <div className="small-schedule-hour flex flex-1 rounded-r-dot5 overflow-hidden">
                <div className="small-schedule-section flex-1 flex flex-col">
                  {getAvailableRanges("MO")}
                </div>
                <div className="small-schedule-section flex-1 flex flex-col">
                  {getAvailableRanges("TU")}
                </div>
                <div className="small-schedule-section flex-1 flex flex-col">
                  {getAvailableRanges("WE")}
                </div>
                <div className="small-schedule-section flex-1 flex flex-col">
                  {getAvailableRanges("TH")}
                </div>
                <div className="small-schedule-section flex-1 flex flex-col">
                  {getAvailableRanges("FR")}
                </div>
                <div className="small-schedule-section flex-1 flex flex-col">
                  {getAvailableRanges("SA")}
                </div>
                <div className="small-schedule-section flex-1 flex flex-col">
                  {getAvailableRanges("SU")}
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="my-2 md:mt-6 md:mb-4 text-center">
          <span className="text-tiny text-gray3">Based on your timezone</span>
        </div>

        <div className="flex justify-center items-center">
          <button type="button" className="ant-btn ant-btn-default">
            <span>Schedule lesson</span>
          </button>
        </div>
      </div>
    </div>
  );
}
