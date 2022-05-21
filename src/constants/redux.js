// User
const UserAction = {
  PENDING_SIGN_IN: "SIGN_IN",
  SIGN_IN_SUCCESS: "SIGN_IN_SUCCESS",
  SIGN_IN_FAILED: "SIGN_IN_FAILED",

  PENDING_SIGN_UP: "SIGN_UP",
  SIGN_UP_SUCCESS: "SIGN_UP_SUCCESS",
  SIGN_UP_FAILED: "SIGN_UP_FAILED",

  PENDING_SIGN_OUT: "SIGN_OUT",
  SIGN_OUT_SUCCESS: "SIGN_OUT_SUCCESS",
  SIGN_OUT_FAILED: "SIGN_OUT_FAILED",

  PENDING_GET_USER_INFO: "GET_USER_INFO",
  GET_USER_INFO_SUCCESS: "GET_USER_INFO_SUCCESS",
  GET_USER_INFO_FAILED: "GET_USER_INFO_FAILED",

  CLEAN_USER_INFO: "CLEAR_USER_INFO",

  PENDING_SETUP_KYC: "SETUP_KYC",
  SETUP_KYC_SUCCESS: "SETUP_KYC_SUCCESS",
  SETUP_KYC_FAILED: "SETUP_KYC_FAILED",

  SAVE_NOT_KYC_ACCOUNT: "SAVE_NOT_KYC_ACCOUNT",
  CLEAR_NOT_KYC_ACCOUNT: "CLEAR_NOT_KYC_ACCOUNT",

  PENDING_UPLOAD_AVATAR_FILE: "UPLOAD_AVATAR_FILE",
  UPLOAD_AVATAR_FILE_SUCCESS: "UPLOAD_AVATAR_FILE_SUCCESS",
  UPLOAD_AVATAR_FILE_FAILED: "UPLOAD_AVATAR_FILE_FAILED",

  PENDING_CHANGE_AVATAR_URL: "CHANGE_AVATAR_URL",
  CHANGE_AVATAR_URL_SUCCESS: "CHANGE_AVATAR_URL_SUCCESS",
  CHANGE_AVATAR_URL_FAILED: "CHANGE_AVATAR_URL_FAILED",
};

// Statistic
const StatisticAction = {
  PENDING_GET_GENERAL_STATISITC: "GET_GENERAL_STATISITC",
  GET_GENERAL_STATISITC_SUCCESS: "GET_GENERAL_STATISITC_SUCCESS",
  GET_GENERAL_STATISITC_FAILED: "GET_GENERAL_STATISITC_FAILED",

  PENDING_GET_DAILY_STATISTIC: "GET_DAILY_STATISTIC",
  GET_DAILY_STATISTIC_SUCCESS: "GET_DAILY_STATISTIC_SUCCESS",
  GET_DAILY_STATISTIC_FAILED: "GET_DAILY_STATISTIC_FAILED",
};

// Identity
const IdentityAction = {
  PENDING_GET_IDENTITY: "GET_IDENTITY",
  GET_IDENTITY_SUCCESS: "GET_IDENTITY_SUCCESS",
  GET_IDENTITY_FAILED: "GET_IDENTITY_FAILED",
};

// Provenance
const ProvenanceAction = {
  PENDING_GET_EVENT_BROADCAST: "GET_EVENT_BROADCAST",
  GET_EVENT_BROADCAST_SUCCESS: "GET_EVENT_BROADCAST_SUCCESS",
  GET_EVENT_BROADCAST_FAILED: "GET_EVENT_BROADCAST_FAILED",

  PENDING_GET_EVENT_HISTORY: "GET_EVENT_HISTORY",
  GET_EVENT_HISTORY_SUCCESS: "GET_EVENT_HISTORY_SUCCESS",
  GET_EVENT_HISTORY_FAILED: "GET_EVENT_HISTORY_FAILED",
};

// General
const GeneralAction = {
  ACTIVE_INDETERMINE_PROGRESS_BAR: "ACTIVE_INDETERMINE_PROGRESS_BAR",
  DEACTIVE_INDETERMINE_PROGRESS_BAR: "DEACTIVE_INDETERMINE_PROGRESS_BAR",
};

const ModalAction = {
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
};

export {
  UserAction,
  StatisticAction,
  IdentityAction,
  ProvenanceAction,
  GeneralAction,
  ModalAction,
};
