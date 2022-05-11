import { ModalAction } from "constants/actions";

const initialState = {
  isShowing: false,
  node: null,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ModalAction.OPEN_MODAL:
      return { isShowing: true, node: action.node };
    case ModalAction.CLOSE_MODAL:
      return { isShowing: false };
    default:
      return state;
  }
};

export default modalReducer;
