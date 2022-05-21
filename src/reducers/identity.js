import { IdentityAction } from "constants/redux";

const initialState = {
  info: null,
};

const identityReducer = (state = initialState, action) => {
  switch (action.type) {
    case IdentityAction.GET_IDENTITY_SUCCESS: {
      return { ...state };
    }
    case IdentityAction.GET_IDENTITY_FAILED: {
      return { ...state };
    }
    default:
      return state;
  }
};

export default identityReducer;
