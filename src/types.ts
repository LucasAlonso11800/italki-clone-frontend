export type LanguageLevelCodeType = "A1" | "A2" | "B1" | "B2" | "C1" | "C2" | "N";
export type YesOrNoType = "Y" | "N";
export type GenderType = "M" | "F" | "X";
export type ReviewType = {
  student_first_name: string;
  student_id: number;
  student_image: string | null;
  student_last_name: string;
  teacher_id: number;
  teacher_review_date: string;
  teacher_review_id: number;
  teacher_review_is_pick: YesOrNoType;
  teacher_review_text: string;
  student_total_lessons: number;
};

export type LessonPostType = {
  language_id: number;
  language_name: string;
  language_level_id_from: number;
  language_level_id_to: number;
  language_level_name_to: string;
  language_level_code_to: LanguageLevelCodeType;
  language_level_name_from: string;
  language_level_code_from: LanguageLevelCodeType;
  lesson_post_description: string;
  lesson_post_id: number;
  lesson_post_price: string;
  lesson_post_title: string;
  teacher_id: number;
  total_lessons: number;
  lesson_post_subtitle: string;
};

export type LanguageType = {
  language_id: number;
  language_level_code: LanguageLevelCodeType;
  language_level_id: number;
  language_level_name: string;
  language_name: string;
  teacher_id: number;
  teacher_language_id: number;
  teacher_teaches: YesOrNoType;
};

export type TeacherListItemType = {
    teacher_id: number
    teacher_image: string
    country_image: string
    average_rating: string
    teacher_first_name: string
    teacher_last_name: string
    teacher_professional: YesOrNoType
    teacher_description: string
    teacher_me_as_a_teacher: string
    trial_lesson_price: number
    total_lessons: number
}
