const PREFIX = `/v1`;

export const PAGE_URL = {
  // CSVUploadPage
  CSV_UPLOAD: '/csv-upload',
  // EasyYomiPage
  EASY_YOMI: '/easy-yomi',
  // EXAMPage
  EXAM: '/exam',
  // EXAMTESTPAGE
  EXAMTEST: '/exam-test',
  // FeedbackPage
  FEEDBACK: '/feedback',
  // FeedbackListPage
  FEEDBACK_LIST: '/feedback-list',
  // FeedbackDetails
  FEEDBACK_DETAILS: '/feedback-detail',
  // LoginPage
  LOGIN: '/login',
  // DetailSearchPage
  SEARCH: '/search',
  // SignUpPage
  SIGNUP: '/signup',
  // TopPage
  TOP: '/',
  // FavouritePage
  FAVOURITE_LIST: '/favourite-list',
  //ErrorPage
  ERROR: '/error',
  //UserListPage
  USER_LIST: '/user-list',
  // ForgotPasswordPage
  FORGOT_PASSWORD: '/forgot-password',
  // ResetPasswordPage
  RESET_PASSWORD: '/reset-password',
  // ProfilePage
  PROFILE: '/user-profile',
  // ChangePasswordPage
  CHANGE_PASSWORD: '/change-password',
  // POST LiST
  POST_LIST: '/postList',
  // Post Create
  POST_CREATE: '/postCreate',
  POST_EDIT: "/postEdit/"
};

export const API_URL = {
  KANJI_UPLOAD: `${PREFIX}/upload_kanji_data`,
  KANJI_DOWNLOAD: `${PREFIX}/download-datas`,
  EXAM_UPLOAD: `${PREFIX}/upload_examdata`,
  EXAM_DOWNLOAD: `${PREFIX}/download-examdata`,
  REGISTER: `${PREFIX}/register`,
  LOGIN: `/auth/login`,
  LOGOUT: `${PREFIX}/logout`,
  DATA_SEARCH: `${PREFIX}/search`,
  PARA_SEARCH: `${PREFIX}/search-kanji-para`,
  FAVOURITE: `${PREFIX}/favourite`,
  FAVOURITE_LIST: `${PREFIX}/favouriteList`,
  EXAM_LEVEL: `${PREFIX}/title-list/`,
  EXAM_TEST: `${PREFIX}/question-list/`,
  USER_LIST: `/user/list`, 
  POST_LIST: `/post/list`,
  POST_CREATE: `/post/create`,
  POST_UPDATE: `/post/edit/`,
  POST_DETAIL: `/post/`,
  POST_DELETE: `/post/delete/`,
  TEST_LIST: `${PREFIX}/test-list/`,
  DATA_TEST: `${PREFIX}/get_data`,
  CREATE_FEEDBACK: `${PREFIX}/create-feedback-data`,
  FEEDBACK_LIST: `${PREFIX}/feedback-data-list`,
  APPROVE_DATA: `${PREFIX}/approve-data`,
  REJECT_DATA: `${PREFIX}/reject-data`,
  HIGHEST_SCORE: `${PREFIX}/highest-score`,
  FORGOT_PASSWORD: `${PREFIX}/forgot-password`,
  RESET_PASSWORD: `${PREFIX}/reset-password`,
  EDIT_PROFILE: `${PREFIX}/edit-profile`,
  CHANGE_PASSWORD: `${PREFIX}/change-password`,
};