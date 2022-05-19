import { loadState, saveState } from "utils/services/localStorage";
import customConfigureStore from "./configureStore";

// import { throttle } from "lodash";

const customCreateStore = (initialState) => {
  // Create store with initial value
  const store = initialState
    ? customConfigureStore(initialState)
    : customConfigureStore(loadState());
  // Save new local state if don't use the old one
  if (initialState) {
    saveState(initialState);
  }
  // Save state change to the local storage
  store.subscribe(() => {
    const state = store.getState();
    // Note: Not cache other data
    saveState({
      // user: state.user,
    });
  });

  return store;
};

export default customCreateStore;
