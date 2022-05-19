import { GeneralAction } from "constants/redux";

const initialState = {
  isOnline: true,
  progressBar: false,
};

const generalReducer = (state = initialState, action) => {
  switch (true) {
    case /.*_FAILED$/.test(action.type): {
      return { ...state, isOnline: action.isNetworkError };
    }
    case /.*_SUCCESS$/.test(action.type):
      return { ...state, isOnline: true };
    case GeneralAction.ACTIVE_INDETERMINE_PROGRESS_BAR === action.type:
      return { ...state, progressBar: true };
    case GeneralAction.DEACTIVE_INDETERMINE_PROGRESS_BAR === action.type:
      return { ...state, progressBar: false };
    default:
      return state;
  }
};

export default generalReducer;
