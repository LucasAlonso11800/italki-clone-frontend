import { GenderType } from "./types";

type StudentProfileUpd = {
  procedure: "StudentProfileUpd";
  params: {
    first_name: string;
    last_name: string;
    gender: GenderType;
    image: string | null;
    country_id: number;
    email: string
  };
};

type StudentProfileGet = {
  procedure: "StudentProfileGet";
  params: {};
};

type TeacherReviewGet = {
  procedure: "TeacherReviewGet";
  params: {
    teacher_id: string;
    page: number;
  };
};

type CountryGet = {
  procedure: "CountryGet";
  params: {};
};

type TeacherIdsGet = {
  procedure: "TeacherIdsGet";
  params: {};
};

type LessonIns = {
  procedure: "LessonIns";
  params: {
    lesson_post_id: number,
    datetime: string
  };
};

export type ServiceDataType =
  | StudentProfileUpd
  | StudentProfileGet
  | TeacherReviewGet
  | CountryGet
  | TeacherIdsGet
  | LessonIns;
