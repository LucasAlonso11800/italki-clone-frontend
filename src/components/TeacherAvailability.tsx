import { API_BASE_URL, API_ROUTES, DAYS, IMAGES, RANGES } from "@/const";
import { LessonPostType, TeacherAvailabilityType, WeekDayType } from "@/types";
import { getWeekLimits } from "@/utils";
import { Button, Spin } from "antd";
import axios from "axios";
import moment from "moment";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { SelectLessonModal } from "@/components";
import { useTokenHandler } from "@/hooks";

type Props = {
  teacherId: number;
  availability: TeacherAvailabilityType[];
  lessons: LessonPostType[];
};
type SelectedType = {
  date: string;
  time: string;
};
export default function TeacherAvailability(props: Props) {
  const { accessToken, refreshToken } = useTokenHandler();
  const [availability, setAvailability] = useState<TeacherAvailabilityType[][]>(
    [props.availability]
  );
  const [selected, setSelected] = useState<SelectedType | null>(null);
  const [offset, setOffset] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const weekLimits = useMemo(() => getWeekLimits(offset), [offset]);

  const getAvailableRanges = (day: WeekDayType) => {
    return RANGES.map((range, index) => {
      const cell = availability[offset]?.find((a) => {
        if (a.teacher_availability_end_time === "00:00") {
          a.teacher_availability_end_time = "24:00";
        }
        return (
          a.teacher_availability_day_of_week === day &&
          a.teacher_availability_start_time >= range[0] &&
          a.teacher_availability_end_time <= range[1]
        );
      });
      const date = moment(weekLimits.start)
        .add(DAYS.indexOf(day), "days")
        .format("YYYY-MM-DD");
      const isPast = new Date(date + "T" + range[0]).getTime() < Date.now();
      if (!cell || isPast) {
        return <div className="small-schedule-cell" key={index}></div>;
      }

      const isBooked = cell.is_booked;

      if (isBooked) {
        return <div className="small-schedule-cell disabled" key={index}></div>;
      }
      let classes = "small-schedule-cell green-bg";
      const isSelected = selected?.date === date && selected.time === range[0];
      if (isSelected) classes = classes.concat(" selected");

      return (
        <div
          className={classes}
          key={index}
          onClick={handleCellSelection(date, range[0])}
        >
          {isSelected ? "Selected" : ""}
        </div>
      );
    });
  };

  const handleCellSelection = (date: string, time: string) => () => {
    const isAlreadySelected = selected?.date === date && selected.time === time;
    if (isAlreadySelected) {
      setSelected(null);
    } else {
      setSelected({ date, time });
    }
  };

  const fetchAvailability = useCallback(
    async (reload: boolean = false) => {
      try {
        setSelected(null);
        if (availability[offset] && !reload) return;
        setLoading(true);
        const availabilityURL = `${API_BASE_URL}/${
          API_ROUTES.teacher.availability
        }?teacher_id=${props.teacherId.toString()}&date_from=${
          weekLimits.start
        }&date_to=${weekLimits.end}`;
        const teacherAvailability = await (
          await axios.get(availabilityURL)
        ).data;

        setAvailability([...availability, teacherAvailability.result]);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    },
    [props, weekLimits]
  );

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

  const handleModal = () => setOpen(!open);

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

      <div className="relative p-4 md:p-8 rounded-3 bg-white overflow-x-hidden md:shadow-panel">
        {loading ? (
          <div className="flex items-center justify-center min-h-[200px]">
            <Spin size="large" />
          </div>
        ) : (
          <div className="small-schedule relative cursor-pointer">
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
            <div className="small-schedule-hours flex">
              <div
                className="small-schedule-range flex flex-col items-center rounded-l w-24"
                style={{
                  border: "1px solid rgb(229, 232, 237)",
                  borderRight: "none",
                }}
              >
                {RANGES.map((range, index) => (
                  <p
                    key={index}
                    className="flex-1 flex text-tiny font-light text-gray2 items-center justify-center"
                  >
                    {range[0].slice(0, 2)} - {range[1].slice(0, 2)}
                  </p>
                ))}
              </div>
              <div className="small-schedule-hour flex flex-1 rounded-r overflow-hidden">
                {DAYS.map((day) => (
                  <div
                    className="small-schedule-section flex-1 flex flex-col"
                    key={day}
                  >
                    {getAvailableRanges(day)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        <div className="my-2 md:mt-6 md:mb-4 text-center">
          <span className="text-tiny text-gray3">Based on your timezone</span>
        </div>

        {accessToken || refreshToken ? (
          <div className="flex justify-center items-center">
            <button
              type="button"
              className="ant-btn ant-btn-default"
              disabled={selected === null}
              onClick={handleModal}
            >
              <span>Schedule lesson</span>
            </button>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <button type="button" className="ant-btn ant-btn-default" disabled>
              <span>Login to schedule a lesson</span>
            </button>
          </div>
        )}
      </div>

      <SelectLessonModal
        handleClose={handleModal}
        open={open}
        lessons={props.lessons}
        selectedDate={selected}
        fetchAvailability={fetchAvailability}
      />
    </div>
  );
}
