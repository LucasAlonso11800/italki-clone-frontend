import { TeacherAvailabilityType, WeekDayType } from "@/types";
import React, { useState } from "react";

type Props = {
  availability: TeacherAvailabilityType[];
};

export default function TeacherAvailability(props: Props) {
  const [availability, setAvailability] = useState<TeacherAvailabilityType[]>(
    props.availability
  );
  const ranges = [
    ["00:00", "04:00"],
    ["04:00", "08:00"],
    ["08:00", "12:00"],
    ["12:00", "16:00"],
    ["16:00", "20:00"],
    ["20:00", "00:00"],
  ];

  const getAvailableRanges = (day: WeekDayType) => {
    return ranges.map((range, index) => {
      let classes = "small-schedule-cell";
      const hasAvailability = availability.some((a) => {
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

  return (
    <div className="mt-6">
      <h2 className="mb-4 flex flex-col md:flex-row md:justify-between md:items-center h5 text-gray1">
        Availability
      </h2>

      <div className="relative p-4 md:p-8 rounded-3 bg-white overflow-hidden md:shadow-panel">
        <div className="small-schedule relative cursor-pointer min-h-[196px]">
          <div className="w-full mb-3 md:mb-2 flex flex-col flex-nowrap justify-center">
            <div className="flex flex-row flex-1 items-center tiny-caption text-gray2 pl-[92px]">
              <div className="flex flex-col flex-1 justify-center items-center text-center">
                <div>Mon</div>
                <div>10</div>
              </div>
              <div className="flex flex-col flex-1 justify-center items-center text-center">
                <div>Tue</div>
                <div>11</div>
              </div>
              <div className="flex flex-col flex-1 justify-center items-center text-center">
                <div>Wed</div>
                <div>12</div>
              </div>
              <div className="flex flex-col flex-1 justify-center items-center text-center">
                <div>Thu</div>
                <div>13</div>
              </div>
              <div className="flex flex-col flex-1 justify-center items-center text-center">
                <div>Fri</div>
                <div>14</div>
              </div>
              <div className="flex flex-col flex-1 justify-center items-center text-center">
                <div>Sat</div>
                <div>15</div>
              </div>
              <div className="flex flex-col flex-1 justify-center items-center text-center">
                <div>Sun</div>
                <div>16</div>
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
                <p key={index} className="flex-1 flex text-tiny font-light text-gray2 items-center justify-center">
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
