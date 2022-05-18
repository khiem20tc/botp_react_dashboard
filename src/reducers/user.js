import { UserAction } from "constants/redux";

const initialState = {
  session: null,
  info: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserAction.SIGN_UP_SUCCESS: {
      const userInfo = action.data.data;
      return {
        ...state,
        info: {
          account: {
            username: userInfo.username,
            bcAddress: userInfo.bcAddress,
          },
        },
      };
    }
    case UserAction.SIGN_UP_FAILED:
      return { ...state };
    case UserAction.SIGN_IN_SUCCESS: {
      const userInfo = action.data.data;
      const token = action.data.token;
      return {
        ...state,
        info: {
          account: {
            username: userInfo.username,
            bcAddress: userInfo.bcAddress,
          },
          kyc: userInfo.info,
          apiKey: userInfo.agent?.APIKey,
          avatar: userInfo.avatar,
        },
        session: token,
      };
    }
    case UserAction.SIGN_IN_FAILED:
      return { ...state };
    case UserAction.SIGN_OUT_SUCCESS:
      return { ...initialState };
    case UserAction.SIGN_OUT_FAILED:
      return { ...state };
    case UserAction.GET_USER_INFO_SUCCESS: {
      const userInfo = action.data;
      return {
        ...state,
        info: {
          account: {
            username: userInfo.username,
            bcAddress: userInfo.bcAddress,
          },
          kyc: userInfo.info,
          apiKey: userInfo.agent?.APIKey,
          avatar: userInfo.avatar,
        },
      };
    }
    case UserAction.GET_USER_INFO_FAILED: {
      if (action.isNetworkError) {
        return { ...state };
      }
      return { ...state };
    }
    case UserAction.CLEAN_USER_INFO: {
      return { ...state };
    }
    case UserAction.UPLOAD_AVATAR_FILE_SUCCESS: {
      return { ...state };
    }
    case UserAction.UPLOAD_AVATAR_FILE_FAILED: {
      return { ...state };
    }
    case UserAction.CHANGE_AVATAR_URL_SUCCESS: {
      return { ...state };
    }
    case UserAction.CHANGE_AVATAR_URL_FAILED: {
      return { ...state };
    }
    default:
      return state;
  }
};

export default userReducer;
