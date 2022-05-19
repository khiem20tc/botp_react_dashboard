import { UserAction } from "constants/redux";

const initialState = {
  session: null,
  info: null,
  notKycAccount: null,
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
        notKycAccount: null,
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
    case UserAction.SAVE_NOT_KYC_ACCOUNT: {
      const notKycAccount = action.data;
      return { ...state, notKycAccount };
    }
    case UserAction.CLEAR_NOT_KYC_ACCOUNT: {
      return { ...state, notKycAccount: null };
    }
    case UserAction.GET_USER_INFO_FAILED: {
      if (action.isNetworkError) {
        return { ...state };
      }
      return { ...initialState };
    }
    case UserAction.CLEAN_USER_INFO: {
      return { ...initialState };
    }
    default:
      return state;
  }
};

export default userReducer;
