import { ModalAction } from "constants/actions";

const openModalAction = () => ({
  type: ModalAction.OPEN_MODAL,
});

const closeModalAction = () => ({
  type: ModalAction.CLOSE_MODAL,
});

export { openModalAction, closeModalAction };
