import CustomError from "constants/error";

const initialState = {
  isOnline: true,
};

const generalReducer = (state = initialState, action) => {
  switch (true) {
    case /.*_FAILED$/.test(action.type): {
      return { isOnline: action.isNetworkError };
    }
    case /.*_SUCCESS$/.test(action.type):
      return { isOnline: true };
    default:
      return state;
  }
};

export default generalReducer;
