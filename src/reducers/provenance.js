import { ProvenanceAction } from "constants/redux";

const initialState = {
  broadcast: null,
  history: null,
};

const provenanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProvenanceAction.GET_EVENT_BROADCAST_SUCCESS: {
      return { ...state };
    }
    case ProvenanceAction.GET_EVENT_BROADCAST_FAILED: {
      return { ...state };
    }
    case ProvenanceAction.GET_EVENT_HISTORY_SUCCESS: {
      return { ...state };
    }
    case ProvenanceAction.GET_EVENT_HISTORY_FAILED: {
      return { ...state };
    }
    default:
      return state;
  }
};

export default provenanceReducer;
