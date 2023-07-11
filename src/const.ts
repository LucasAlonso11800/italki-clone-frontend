import { WeekDayType } from "./types";

export const ROUTES = {
  teachers: {
    english: "/teachers/english",
    spanish: "/teachers/spanish",
    french: "/teachers/french",
    japanese: "/teachers/japanese",
    german: "/teachers/german",
    chinese: "/teachers/chinese",
    korean: "/teachers/korean",
    italian: "/teachers/italian",
    russian: "/teachers/russian",
    portuguese: "/teachers/portuguese",
    arabic: "/teachers/arabic",
    hindi: "/teachers/hindi",
    all: "/teachers",
  },
  learn: {
    english: "/learn/english",
    spanish: "/learn/spanish",
    french: "/learn/french",
    japanese: "/learn/japanese",
    german: "/learn/german",
    chinese: "/learn/chinese",
    korean: "/learn/korean",
    italian: "/learn/italian",
    russian: "/learn/russian",
    portuguese: "/learn/portuguese",
    arabic: "/learn/arabic",
    hindi: "/learn/hindi",
  },
  group_classes: {
    english: "/group-classes/english",
  },
  resources: {
    test: "/resources/test",
    challenge: "/resources/challenge",
    podcasts: "/resources/podcasts",
    quiz: "/resources/quiz",
    community: "/resources/community",
  },
  user: {
    dashboard: "/user",
  },
  student: {
    settings: {
      profile: '/student/settings/profile'
    }
  }
};

export const EXTERNAL_LINKS = {
  facebook: "https://www.facebook.com/italkilanguage",
  twitter: "https://twitter.com/italki",
  instagram: "https://www.instagram.com/italki",
  youtube: "https://www.youtube.com/user/italkilanguage",
  vk: "https://vk.com/italkicom",
  weibo: "https://weibo.com/italki",
};

export const API_ROUTES = {
  auth: {
    generate_access_token: "auth/generate",
    verify_access_token: "auth/verify",
    generate_refresh_token: "auth/generate-refresh",
    verify_refresh_token: "auth/verify-refresh",
  },
  services: "services",
  signin: {
    student: "signin/student",
    teacher: "signin/teacher",
  },
  signup: {
    student: "signup/student",
    teacher: "signup/teacher",
  },
  teacher: {
    info: "teacher",
    ids: "teacher/ids",
    availability: "teacher/availability"
  },
  teachers: "teachers",
  student: {
    profile: 'student/profile'
  }
};

export const API_BASE_URL =
  "https://cls9taco80.execute-api.us-west-2.amazonaws.com";
export const SERVICES_URL = `${API_BASE_URL}/${API_ROUTES.services}`;
export const DATE_FORMAT = "MMM, DD, YYYY";
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const IMAGES = {
  ArrowDown: "/svg/arrow-down.svg",
  ArrowRight: "/svg/arrow-right.svg",
  AvatarPlaceholder: "/svg/avatar-placeholder.svg",
  BurgerMenu: "/svg/burger-menu.svg",
  CloseMenu: "/svg/close-menu.svg",
  Edit: "/svg/edit.svg",
  Facebook: "/svg/facebook.svg",
  Fav: "/svg/fav.svg",
  HeaderCommunity: "/svg/header-community.svg",
  HeaderFindTeacher: "/svg/header-find-teacher.svg",
  HeaderGroupClass: "/svg/header-group-class.svg",
  HeaderLogin: "/svg/header-login.svg",
  HeaderSignup: "/svg/header-signup.svg",
  Instagram: "/svg/instagram.svg",
  InvisiblePassword: "/svg/invisible-password.svg",
  Italki: "/svg/italki.svg",
  Options: "/svg/options.svg",
  Share: "/svg/share.svg",
  Speaker: "/svg/speaker.svg",
  Star: "/svg/star.svg",
  TeacherPageBannerLogo: "/svg/teacher-page-banner-logo.svg",
  VerifyIcon: "/svg/verify-icon.svg",
  Twitter: "/svg/twitter.svg",
  VideoPlay: "/svg/video-play.svg",
  VisiblePassword: "/svg/visible-password.svg",
  VK: "/svg/vk.svg",
  Weibo: "/svg/weibo.svg",
  Youtube: "/svg/youtube.svg",
};

export const DAYS: WeekDayType[] = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
export const RANGES = [
  ["00:00", "01:00"],
  ["01:00", "02:00"],
  ["02:00", "03:00"],
  ["03:00", "04:00"],
  ["04:00", "05:00"],
  ["05:00", "06:00"],
  ["06:00", "07:00"],
  ["07:00", "08:00"],
  ["08:00", "09:00"],
  ["09:00", "10:00"],
  ["10:00", "11:00"],
  ["11:00", "12:00"],
  ["12:00", "13:00"],
  ["13:00", "14:00"],
  ["14:00", "15:00"],
  ["15:00", "16:00"],
  ["16:00", "17:00"],
  ["17:00", "18:00"],
  ["18:00", "19:00"],
  ["19:00", "20:00"],
  ["20:00", "21:00"],
  ["22:00", "22:00"],
  ["22:00", "23:00"],
  ["23:00", "24:00"],
];
