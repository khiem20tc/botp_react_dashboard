import { UserInputAction } from "constants/hooks";
import { useReducer } from "react";

const useInput = (validator, initialValue = "") => {
  const initialInputState = {
    value: initialValue,
    error: validator(initialValue),
    showError: false,
  };

  // Input state
  const [inputState, dispatchInputState] = useReducer((state, action) => {
    switch (action.type) {
      case UserInputAction.ON_CHANGE:
        return {
          value: action.value,
          error: validator(action.value),
          showError: true,
        };
      case UserInputAction.ON_VALIDATE:
        return {
          value: state.value,
          error: validator(state.value),
          showError: true,
        };
      case UserInputAction.ON_RESET:
        return initialInputState;
      default:
        return state;
    }
  }, initialInputState);
  return [inputState, dispatchInputState];
};

export default useInput;
