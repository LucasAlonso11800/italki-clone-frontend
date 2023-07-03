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
    dashboard: "/user"
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
      generate_access_token: 'auth/generate',
      verify_access_token: 'auth/verify',
      generate_refresh_token: 'auth/generate-refresh',
      verify_refresh_token: 'auth/verify-refresh'
  },
  services: 'services',
  signin: {
      student: 'signin/student',
      teacher: 'signin/teacher'
  },
  signup: {
      student: 'signup/student',
      teacher: 'signup/teacher'
  },
  teacher: {
    info: 'teacher',
    ids: 'teacher/ids'
  },
  teachers: 'teachers'
};


export const API_BASE_URL = 'https://cls9taco80.execute-api.us-west-2.amazonaws.com';
export const DATE_FORMAT = 'MMM, DD, YYYY'
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;