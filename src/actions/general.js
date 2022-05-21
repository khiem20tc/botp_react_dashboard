import { GeneralAction } from "constants/redux";

const activeIndetermineProgressBarAction = () => ({
  type: GeneralAction.ACTIVE_INDETERMINE_PROGRESS_BAR,
});

const deactiveIndetermineProgressBarAction = () => ({
  type: GeneralAction.DEACTIVE_INDETERMINE_PROGRESS_BAR,
});

export {
  activeIndetermineProgressBarAction,
  deactiveIndetermineProgressBarAction,
};
